const fs = require("fs");
const path = require("path");

const filePath = "C:\\Users\\hp\\.gemini\\antigravity\\brain\\f39f2570-0430-4b7e-b5a4-55adb62f5d74\\media__1783009283824.jpg";

if (fs.existsSync(filePath)) {
  const buffer = fs.readFileSync(filePath);
  // For JPG, parse the SOF marker to get width and height
  let offset = 2;
  let width = 0, height = 0;
  while (offset < buffer.length) {
    const marker = buffer.readUInt16BE(offset);
    offset += 2;
    if (marker === 0xFFD8 || marker === 0xFFD9) continue; // Start/End of image
    const length = buffer.readUInt16BE(offset);
    if ((marker & 0xFFF0) === 0xFFC0 && marker !== 0xFFC4 && marker !== 0xFFC8 && marker !== 0xFFCC) {
      // SOF marker found
      height = buffer.readUInt16BE(offset + 3);
      width = buffer.readUInt16BE(offset + 5);
      break;
    }
    offset += length;
  }
  console.log(`media__1783009283824.jpg: ${width}x${height} (${(buffer.length/1024/1024).toFixed(2)} MB)`);
} else {
  console.log("File does not exist.");
}
