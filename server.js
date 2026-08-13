const express = require("express");
const path = require("path");
const fs = require("fs");
const { google } = require("googleapis");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ── Google Sheets config ──
const SHEET_ID = "1ExTJCGpUiIr5YIDA93Je18TAt3PPI7m8L6Ler4fi97g";
const SHEET_TAB = "Feuille 1"; // name of the tab at the bottom

const CREDENTIALS_PATH = path.join(__dirname, "credentials.json");
const hasCredentials = fs.existsSync(CREDENTIALS_PATH);

let auth;
if (hasCredentials) {
  auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
} else {
  console.log("⚠️ credentials.json not found. Registrations will be saved locally to registrations.json instead of Google Sheets.");
}

async function appendToSheet(row) {
  if (!hasCredentials) {
    console.log("📝 [Local Mode] Saving registration:", row);
    const registrationsFile = path.join(__dirname, "registrations.json");
    let registrations = [];
    if (fs.existsSync(registrationsFile)) {
      try {
        registrations = JSON.parse(fs.readFileSync(registrationsFile, "utf8"));
      } catch (e) {
        console.error("Failed to parse registrations.json:", e);
      }
    }
    registrations.push({
      fullName: row[0],
      email: row[1],
      phone: row[2],
      goal: row[3],
      timestamp: row[4]
    });
    fs.writeFileSync(registrationsFile, JSON.stringify(registrations, null, 2), "utf8");
    return;
  }

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${SHEET_TAB}!A1`,
    valueInputOption: "RAW",
    requestBody: { values: [row] },
  });
}

// ── Register endpoint ──
app.post("/api/register", async (req, res) => {
  const { fullName, email, phone, goal } = req.body;

  if (!fullName || !email || !phone || !goal)
    return res.status(400).json({ error: "All fields are required." });

  try {
    await appendToSheet([
      fullName,
      email,
      phone,
      goal,
      new Date().toISOString(),
    ]);
    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save registration." });
  }
});

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () =>
  console.log(`✅ Running → http://localhost:${PORT}`)
);