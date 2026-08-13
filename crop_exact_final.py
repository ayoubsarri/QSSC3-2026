from PIL import Image
import os

jpg_path = r"C:\Users\hp\.gemini\antigravity\brain\f39f2570-0430-4b7e-b5a4-55adb62f5d74\media__1783009283824.jpg"
output_dir = r"c:\Users\hp\ARDUINO\SummerCamp3\public\images"

im = Image.open(jpg_path)
width, height = im.size

# Refined coordinates
im.crop((0, 0, width, 300)).save(os.path.join(output_dir, "crop_header_final.png"))
im.crop((0, 300, width, 520)).save(os.path.join(output_dir, "crop_title_final.png"))
im.crop((0, 610, width, 665)).save(os.path.join(output_dir, "crop_subheader_final.png"))
im.crop((0, 800, width, 860)).save(os.path.join(output_dir, "crop_date_final.png"))
im.crop((0, 880, width, 990)).save(os.path.join(output_dir, "crop_cta_final.png"))
im.crop((0, 990, width, height)).save(os.path.join(output_dir, "crop_footer_final.png"))

print("Refined crops saved successfully!")
