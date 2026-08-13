from PIL import Image
import os

img_dir = r"c:\Users\hp\ARDUINO\SummerCamp3\public\images"
public_dir = r"c:\Users\hp\ARDUINO\SummerCamp3\public"

header_path = os.path.join(img_dir, "crop_header.png")
logo_uni_path = os.path.join(public_dir, "logo_uni.png")
logo_sci_path = os.path.join(public_dir, "logo_sci.png")
logo_quanta_path = os.path.join(public_dir, "logo_quanta.png")

header = Image.open(header_path).convert("RGBA")
width, height = header.size

# Let's find the bounding box of the white area at the top of the image
# Scan pixels to find where it is pure white (255, 255, 255) or close to it
min_x, min_y = width, height
max_x, max_y = 0, 0

# Check top 250 pixels
for y in range(250):
    for x in range(width):
        r, g, b, a = header.getpixel((x, y))
        if r > 240 and g > 240 and b > 240: # White bar
            if x < min_x: min_x = x
            if y < min_y: min_y = y
            if x > max_x: max_x = x
            if y > max_y: max_y = y

print(f"White bar box: Left={min_x}, Top={min_y}, Right={max_x}, Bottom={max_y}")

# White bar width and height
bar_w = max_x - min_x + 1
bar_h = max_y - min_y + 1
print(f"White bar size: {bar_w}x{bar_h}")

# We will position the three logos inside this white bar
# Logo height should be about 70-80% of the bar height
target_h = int(bar_h * 0.7)

# Load logos
logo_uni = Image.open(logo_uni_path).convert("RGBA")
logo_sci = Image.open(logo_sci_path).convert("RGBA")
logo_quanta = Image.open(logo_quanta_path).convert("RGBA")

# Resize logos preserving aspect ratio
def resize_logo(img, target_h):
    w, h = img.size
    aspect = w / h
    new_w = int(target_h * aspect)
    return img.resize((new_w, target_h), Image.Resampling.LANCZOS)

l_uni = resize_logo(logo_uni, target_h)
l_sci = resize_logo(logo_sci, target_h)
l_quanta = resize_logo(logo_quanta, target_h)

# Let's calculate horizontal alignment
# We want the three logos centered/spaced out inside the white bar:
# [ Left logo ]   [ Center logo ]   [ Right logo ]
# Let's divide the bar into three slots:
# Slot 1 center: min_x + bar_w * 0.2
# Slot 2 center: min_x + bar_w * 0.5
# Slot 3 center: min_x + bar_w * 0.8

y_offset = min_y + (bar_h - target_h) // 2

# Slot 1: Faculty of Sciences Logo (to match center, swap positions)
x_sci = int(min_x + bar_w * 0.22 - l_sci.width // 2)
header.paste(l_sci, (x_sci, y_offset), l_sci)

# Slot 2: Algiers University Logo (to match left, swap positions)
x_uni = int(min_x + bar_w * 0.5 - l_uni.width // 2)
header.paste(l_uni, (x_uni, y_offset), l_uni)

# Slot 3: Quanta Club Logo
x_quanta = int(min_x + bar_w * 0.78 - l_quanta.width // 2)
header.paste(l_quanta, (x_quanta, y_offset), l_quanta)

header.save(os.path.join(img_dir, "email_header_final.png"))
print("Saved email_header_final.png successfully!")
