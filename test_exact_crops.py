from PIL import Image
import os

jpg_path = r"C:\Users\hp\.gemini\antigravity\brain\f39f2570-0430-4b7e-b5a4-55adb62f5d74\media__1783009283824.jpg"
output_dir = r"c:\Users\hp\ARDUINO\SummerCamp3\public\images"

im = Image.open(jpg_path)
width, height = im.size
print(f"Original dimensions: {width}x{height}")

# Define exact crops: (left, upper, right, lower)
# 1. Header (Logos + University panorama)
im.crop((0, 0, width, 300)).save(os.path.join(output_dir, "crop_exact_header.png"))

# 2. Title Banner (✥ دعوة مميزة ✥ + المخيم الصيفي للعلوم كوانتا 2026 + انضموا إلى النسخة الثالثة من QSSC³)
im.crop((0, 300, width, 500)).save(os.path.join(output_dir, "crop_exact_title.png"))

# 3. Subheader ("ماذا ينتظركم؟" banner)
im.crop((0, 595, width, 695)).save(os.path.join(output_dir, "crop_exact_subheader.png"))

# 4. Date Banner ("من 6 إلى 16 جويلية 2026")
im.crop((0, 770, width, 855)).save(os.path.join(output_dir, "crop_exact_date.png"))

# 5. CTA Button ("سجل الآن" + link text)
im.crop((0, 875, width, 990)).save(os.path.join(output_dir, "crop_exact_cta.png"))

# 6. Footer (Grass border + limited spots text)
im.crop((0, 990, width, height)).save(os.path.join(output_dir, "crop_exact_footer.png"))

print("All exact crops saved successfully!")
