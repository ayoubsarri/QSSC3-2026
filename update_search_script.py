# Open the already downloaded JS content or search inside it
# Let's search for "space" or "share" or "g1kpt" or "chatId" in the JS content

with open("find_api_paths.py", "r", encoding="utf-8") as f:
    code = f.read()

# Let's modify the search script to print more occurrences of "space" and "share" next to fetch/axios/api calls

search_script = """
import urllib.request
import re
import ssl

ssl_context = ssl._create_unverified_context()
js_url = "https://z-cdn.chatglm.cn/z-ai/frontend/prod-fe-1.1.70/assets/index-D0dKwo6g.js"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

try:
    req = urllib.request.Request(js_url, headers=headers)
    with urllib.request.urlopen(req, context=ssl_context) as response:
        js_content = response.read().decode('utf-8')
        
    print("JS length:", len(js_content))
    
    # Find all occurrences of URL patterns like `/api/v1/...` or `/api/...` in the JS code
    # using a broad regex: `/api/[a-zA-Z0-9_/`{}$?-]+`
    matches = re.finditer(r'/api/[a-zA-Z0-9_/{}$?=&.+-]+', js_content)
    seen = set()
    print("\\nFound API urls:")
    for match in matches:
        url = match.group(0)
        if url not in seen:
            seen.add(url)
            if "space" in url or "share" in url or "ppt" in url or "pub" in url:
                print(url)
                
    # Search specifically for "/space/" or "space/" in react router or API paths
    matches_space = re.finditer(r'space', js_content, re.IGNORECASE)
    print("\\nContext matches for space:")
    count = 0
    for match in matches_space:
        start = max(0, match.start() - 60)
        end = min(len(js_content), match.end() + 60)
        snippet = js_content[start:end]
        if "/api/" in snippet or "fetch" in snippet or "get" in snippet or "post" in snippet:
            print(f"- {snippet.strip()}")
            count += 1
            if count > 30:
                break
                
except Exception as e:
    print("Error:", e)
"""

with open("find_api_paths.py", "w", encoding="utf-8") as f:
    f.write(search_script)
    
print("Updated find_api_paths.py.")
