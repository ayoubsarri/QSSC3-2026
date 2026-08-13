import json
import re

log_path = r"C:\Users\hp\.gemini\antigravity\brain\f39f2570-0430-4b7e-b5a4-55adb62f5d74\.system_generated\logs\transcript_full.jsonl"
out_path = r"c:\Users\hp\ARDUINO\SummerCamp3\extracted_passwords.txt"

passwords_found = {}

try:
    with open(log_path, 'r', encoding='utf-8') as f:
        for line in f:
            # Check for emails and passwords in the same line
            # e.g., "Email: ... | Password: ..." or similar printed outputs
            matches = re.findall(r'([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+).*?(QS-[A-Z0-9]{4,6})', line)
            for email, pwd in matches:
                passwords_found[email.lower()] = pwd
                
    with open(out_path, 'w', encoding='utf-8') as out:
        out.write("--- Historical Credentials Extracted ---\n")
        for email, pwd in passwords_found.items():
            out.write(f"Email: {email} | Password: {pwd}\n")
            
    print(f"Successfully processed log file. Extracted {len(passwords_found)} credentials to {out_path}.")

except Exception as e:
    print("Error:", e)
