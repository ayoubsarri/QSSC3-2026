from PIL import Image, ImageDraw, ImageFont
import os

img_dir = r"c:\Users\hp\ARDUINO\SummerCamp3\public\images"
output_path = os.path.join(img_dir, "contact_sheet.png")

# Create a blank image for the contact sheet
# We will show 10 images in a 2x5 grid
# Each thumbnail will be 300x300 pixels
thumb_size = 300
margin = 20
sheet_width = (thumb_size + margin) * 5 + margin
sheet_height = (thumb_size + margin + 40) * 2 + margin

contact_sheet = Image.new("RGB", (sheet_width, sheet_height), (50, 50, 50))
draw = ImageDraw.Draw(contact_sheet)

for i in range(1, 11):
    filename = f"email_img_{i}.png"
    filepath = os.path.join(img_dir, filename)
    if os.path.exists(filepath):
        img = Image.open(filepath)
        img.thumbnail((thumb_size, thumb_size))
        
        # Calculate position
        row = (i - 1) // 5
        col = (i - 1) % 5
        x = margin + col * (thumb_size + margin)
        y = margin + row * (thumb_size + margin + 40)
        
        # Paste image (handle alpha channel if present)
        if img.mode == "RGBA":
            contact_sheet.paste(img, (x, y), img)
        else:
            contact_sheet.paste(img, (x, y))
            
        # Draw label
        draw.text((x, y + thumb_size + 10), f"email_img_{i}", fill=(255, 255, 255))
        draw.text((x, y + thumb_size + 25), f"{img.width}x{img.height}", fill=(200, 200, 200))

contact_sheet.save(output_path)
print("Saved contact_sheet.png successfully!")
