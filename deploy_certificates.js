const { initializeApp, getApps, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const fs = require("fs");
const path = require("path");

// 1. Path configurations
const SERVICE_ACCOUNT_PATH = "C:\\Users\\hp\\Downloads\\qssc3-d300f-firebase-adminsdk-fbsvc-d6222fb068.json";
const MAILER_SCRIPT_PATH = "C:\\Users\\hp\\Desktop\\qssc-certificates\\output\\participants-2026\\drive-package\\SETUP-AND-SAFETY-FILES\\QSSC3-Certificate-Mailer.gs";
const CERTIFICATES_DIR = "C:\\Users\\hp\\Desktop\\qssc-certificates\\output\\participants-2026\\drive-package\\QSSC3-2026-CERTIFICATES-UPLOAD-TO-DRIVE";

// Initialize Firebase Admin
if (getApps().length === 0) {
  initializeApp({
    credential: cert(require(SERVICE_ACCOUNT_PATH))
  });
}

const db = getFirestore();

async function run() {
  console.log("--------------------------------------------------");
  console.log("🏁 Starting QSSC³ 2026 Certificate Portal Deployment (Hosting)");
  console.log("--------------------------------------------------");

  // Ensure public/certificates directory exists
  const publicCertificatesDir = path.join(__dirname, "public", "certificates");
  if (!fs.existsSync(publicCertificatesDir)) {
    console.log("📁 Creating directory:", publicCertificatesDir);
    fs.mkdirSync(publicCertificatesDir, { recursive: true });
  }

  // Step A: Parse RECIPIENTS from the mailer script file
  let recipients = [];
  try {
    console.log("📖 Reading mailer script from:", MAILER_SCRIPT_PATH);
    const content = fs.readFileSync(MAILER_SCRIPT_PATH, "utf8");
    
    // Extract RECIPIENTS array block
    const match = content.match(/var RECIPIENTS = (\[[\s\S]+?\]);/);
    if (!match) {
      throw new Error("Could not parse RECIPIENTS array from Mailer script.");
    }
    
    recipients = eval(match[1]);
    console.log(`✅ Loaded ${recipients.length} recipients from mailer script.`);
  } catch (e) {
    console.error("❌ Failed to parse Mailer script:", e);
    process.exit(1);
  }

  let successCount = 0;
  let errorCount = 0;
  let missingFilesCount = 0;
  const missingFiles = [];

  // Step B: Loop, copy locally, and update Firestore
  for (let i = 0; i < recipients.length; i++) {
    const r = recipients[i];
    const emailNormalized = r.email.trim().toLowerCase();
    const localFilePath = path.join(CERTIFICATES_DIR, r.fileName);
    
    console.log(`\n⏳ [${i + 1}/${recipients.length}] Processing: ${r.id} - ${r.name}`);

    // 1. Verify local file exists
    if (!fs.existsSync(localFilePath)) {
      console.warn(`⚠️ Warning: Missing local file for ${r.name}: ${r.fileName}`);
      missingFilesCount++;
      missingFiles.push(r.fileName);
      continue;
    }

    try {
      // 2. Copy file to public/certificates/
      const destFilePath = path.join(publicCertificatesDir, r.fileName);
      fs.copyFileSync(localFilePath, destFilePath);
      console.log(`💾 Copied locally: public/certificates/${r.fileName}`);

      // Construct direct Firebase Hosting URL
      const downloadUrl = `https://qssc3-d300f.web.app/certificates/${encodeURIComponent(r.fileName)}`;
      console.log(`🔗 Hosting URL: ${downloadUrl}`);

      // 3. Update Firestore registration document
      console.log(`🔍 Searching Firestore for email: ${emailNormalized}`);
      const snap = await db.collection("registrations").where("email", "==", emailNormalized).get();
      
      if (snap.empty) {
        console.warn(`⚠️ Warning: No document found in Firestore registrations for: ${emailNormalized}`);
        errorCount++;
        continue;
      }

      // Update all matching docs (handles potential duplicates cleanly)
      for (const doc of snap.docs) {
        console.log(`✏️ Updating document ${doc.id} with certificateUrl`);
        await db.collection("registrations").doc(doc.id).update({
          certificateUrl: downloadUrl,
          certificateUploadedAt: new Date().toISOString()
        });
      }

      successCount++;
      console.log(`✅ Completed successfully`);

    } catch (err) {
      console.error(`❌ Error processing ${r.name}:`, err);
      errorCount++;
    }
  }

  // Step C: Detailed Dispatch Report
  console.log("\n==================================================");
  console.log("🏁 DEPLOYMENT REPORT");
  console.log("==================================================");
  console.log(`🔹 Total parsed recipients:  ${recipients.length}`);
  console.log(`🔹 Successfully deployed:    ${successCount}`);
  console.log(`🔹 Errors/Warnings:          ${errorCount}`);
  console.log(`🔹 Missing local files:      ${missingFilesCount}`);
  
  if (missingFiles.length > 0) {
    console.log("\n⚠️ Missing Files List:");
    missingFiles.forEach(file => console.log(` - ${file}`));
  }
  
  console.log("==================================================");
  process.exit(0);
}

run();
