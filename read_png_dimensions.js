const fs = require("fs");
const path = require("path");

const destDir = path.join(__dirname, "public", "images");

for (let i = 1; i <= 10; i++) {
  const filename = `email_img_${i}.png`;
  const filePath = path.join(destDir, filename);
  if (fs.existsSync(filePath)) {
    const buffer = fs.readFileSync(filePath);
    // Read width at offset 16 (4 bytes)
    const width = buffer.readUInt32BE(16);
    // Read height at offset 20 (4 bytes)
    const height = buffer.readUInt32BE(20);
    console.log(`${filename}: ${width}x${height} (${(buffer.length/1024/1024).toFixed(2)} MB)`);
  } else {
    console.log(`${filename} does not exist.`);
  }
}
