from PIL import Image
import os

img_path = r"c:\Users\hp\ARDUINO\SummerCamp3\public\images\email_img_1.png"
output_dir = r"c:\Users\hp\ARDUINO\SummerCamp3\public\images"

if not os.path.exists(img_path):
    print("Flyer image not found!")
    exit(1)

im = Image.open(img_path)
width, height = im.size
print(f"Loaded image: {width}x{height}")

# Define crops: (left, upper, right, lower)
# 1. Header (Logos + University panorama + Title Banner + Green Banner)
# Let's crop from y=0 to y=815
header_crop = im.crop((0, 0, width, 815))
header_crop.save(os.path.join(output_dir, "crop_header.png"))
print("Saved crop_header.png")

# 2. Subheader ("ماذا ينتظركم؟")
# Let's crop a box around the blue banner with "ماذا ينتظركم؟"
# It is located between y=960 and y=1045
subheader_crop = im.crop((320, 960, 620, 1045)) # Center of the width
# Let's crop the full width to keep it centered and responsive
subheader_full = im.crop((0, 960, width, 1045))
subheader_full.save(os.path.join(output_dir, "crop_subheader.png"))
print("Saved crop_subheader.png")

# 3. Date Banner ("من 6 إلى 16 جويلية 2026")
# Located between y=1200 and y=1320
date_crop = im.crop((0, 1200, width, 1320))
date_crop.save(os.path.join(output_dir, "crop_date.png"))
print("Saved crop_date.png")

# 4. CTA Button ("سجل الآن")
# Located between y=1360 and y=1475
cta_crop = im.crop((0, 1360, width, 1475))
cta_crop.save(os.path.join(output_dir, "crop_cta.png"))
print("Saved crop_cta.png")

# 5. Grass/Dirt Footer
# Located from y=1550 to the bottom
footer_crop = im.crop((0, 1530, width, height))
footer_crop.save(os.path.join(output_dir, "crop_footer.png"))
print("Saved crop_footer.png")
