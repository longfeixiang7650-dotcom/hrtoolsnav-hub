import urllib.request
import json
import sys

with open('/home/edi/.hermes/api_keys.env', 'rb') as f:
    raw = f.read()
idx = raw.find(b'QWEN_API_KEY_1=')
start = idx + len(b'QWEN_API_KEY_1=')
end = raw.find(b'\n', start)
QWEN_API_KEY = raw[start:end].decode()

url = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions"

prompt = '''Write a high-quality, 1000-1500 word blog post about "Employee Wellbeing and Mental Health in the Workplace 2026" for an HR tools navigation website.

The post should be informative, data-driven, and practical. Include:
1. Why employee wellbeing is a business priority in 2026 (with stats)
2. Key trends: holistic wellbeing frameworks, mental health platforms, EAP modernization
3. Top tools/platforms for employee wellbeing (e.g., Calm for Business, Headspace, Modern Health, Lyra Health, Unmind)
4. How to build a comprehensive wellbeing strategy
5. Measurement and ROI of wellbeing programs
6. Practical implementation steps

Write in Markdown format. Use natural, professional language. The output should ONLY be the blog post content (no introduction, no explanation). Do NOT use backticks (`) inside the text - use single quotes as replacement. Do NOT use ${...} patterns. Do include actual data points and realistic statistics.

The title should be: "Employee Wellbeing in 2026: Building a Holistic Mental Health and Wellness Strategy"
'''

data = {
    "model": "qwen-plus",
    "messages": [{"role": "user", "content": prompt}],
    "max_tokens": 3000,
    "temperature": 0.7
}

req = urllib.request.Request(
    url,
    data=json.dumps(data).encode('utf-8'),
    headers={
        "Authorization": f"Bearer {QWEN_API_KEY}",
        "Content-Type": "application/json"
    },
    method="POST"
)

try:
    with urllib.request.urlopen(req, timeout=120) as resp:
        result = json.loads(resp.read().decode())
        content = result["choices"][0]["message"]["content"]
        print(content)
except Exception as e:
    print(f"ERROR: {e}", file=sys.stderr)
    sys.exit(1)
