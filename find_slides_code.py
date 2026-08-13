with open(r"c:\Users\hp\ARDUINO\SummerCamp3\public\index.html", 'r', encoding='utf-8') as f:
    lines = f.readlines()
    
for i, line in enumerate(lines):
    if "Opening Ceremony" in line or "قواعد المخيم" in line or "slides" in line.lower():
        if "google-analytics" not in line and "bootstrap" not in line:
            print(f"Line {i+1}: {line.strip()[:120]}")
