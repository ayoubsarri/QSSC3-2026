const fs = require("fs");
const path = require("path");

const srcDir = "C:\\Users\\hp\\Downloads";
const destDir = path.join(__dirname, "public", "images");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesMap = {
  "ChatGPT Image Jul 2, 2026, 05_18_57 PM (1).png": "email_img_1.png",
  "ChatGPT Image Jul 2, 2026, 05_18_59 PM (2).png": "email_img_2.png",
  "ChatGPT Image Jul 2, 2026, 05_18_59 PM (3).png": "email_img_3.png",
  "ChatGPT Image Jul 2, 2026, 05_19_00 PM (4).png": "email_img_4.png",
  "ChatGPT Image Jul 2, 2026, 05_19_00 PM (5).png": "email_img_5.png",
  "ChatGPT Image Jul 2, 2026, 05_19_00 PM (6).png": "email_img_6.png",
  "ChatGPT Image Jul 2, 2026, 05_19_01 PM (7).png": "email_img_7.png",
  "ChatGPT Image Jul 2, 2026, 05_19_01 PM (8).png": "email_img_8.png",
  "ChatGPT Image Jul 2, 2026, 05_19_01 PM (9).png": "email_img_9.png",
  "ChatGPT Image Jul 2, 2026, 05_19_02 PM (10).png": "email_img_10.png"
};

for (const [srcName, destName] of Object.entries(filesMap)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${srcName} -> ${destName}`);
  } else {
    console.error(`Not found: ${srcName}`);
  }
}
