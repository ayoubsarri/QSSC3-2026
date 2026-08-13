from PIL import Image
import os

jpg_path = r"C:\Users\hp\.gemini\antigravity\brain\f39f2570-0430-4b7e-b5a4-55adb62f5d74\media__1783009283824.jpg"
output_dir = r"c:\Users\hp\ARDUINO\SummerCamp3\public\images"

im = Image.open(jpg_path)
width, height = im.size
print(f"Loaded jpg: {width}x{height}")

# Let's save crops to find where the title banner is
# We'll save a crop from y=300 to y=520 and another from y=500 to y=700
crop1 = im.crop((0, 300, width, 520))
crop1.save(os.path.join(output_dir, "test_crop_title_upper.png"))

crop2 = im.crop((0, 500, width, 700))
crop2.save(os.path.join(output_dir, "test_crop_title_lower.png"))

# Let's crop the subheader ("ماذا ينتظركم؟")
# In the 1024-high image, it's around y=650 to y=750
crop3 = im.crop((0, 600, width, 750))
crop3.save(os.path.join(output_dir, "test_crop_subheader.png"))
