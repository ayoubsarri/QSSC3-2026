with open(r"c:\Users\hp\ARDUINO\SummerCamp3\public\index.html", 'r', encoding='utf-8') as f:
    content = f.read()

import re
use_effects = re.findall(r'useEffect\(\(\) => \{(.*?)\}, \[(.*?)\]\);', content, re.DOTALL)

for i, (body, deps) in enumerate(use_effects):
    print(f"--- useEffect {i+1} (Deps: [{deps.strip()}]) ---")
    print(body.strip()[:300])
    print()
