# Run this to generate and add blog entry
import urllib.request
import json
import sys

with open('/home/edi/.hermes/api_keys.env', 'rb') as f:
    raw = f.read()
idx = raw.find(b'QWEN_API_KEY_1=')
start = idx + len(b'QWEN_API_KEY_1=')
end = raw.find(b'\n', start)
QWEN_API_KEY = raw[start:end].decode()

# Generate the blog content
url = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions"

prompt = "Write a high-quality, 1000-1500 word blog post about Employee Wellbeing and Mental Health in the Workplace 2026 for an HR tools website. Include: why employee wellbeing is a business priority, key trends (holistic wellbeing frameworks, mental health platforms, EAP modernization), top tools (Calm for Business, Headspace, Modern Health, Lyra Health, Unmind), how to build a wellbeing strategy, measurement and ROI, practical steps. Use Markdown. Do NOT use backtick characters anywhere. Do NOT use ${...} patterns. Use only single quotes for any quoting. The title should be: Employee Wellbeing in 2026: Building a Holistic Mental Health and Wellness Strategy"

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

with urllib.request.urlopen(req, timeout=120) as resp:
    result = json.loads(resp.read().decode())
    content_text = result["choices"][0]["message"]["content"]

# Now create the blog entry
# The content field will use backtick template literals
# Check content for any backticks or ${}
if '`' in content_text:
    print("WARNING: Backticks found in content, replacing with single quotes")
    content_text = content_text.replace('`', "'")
if '${' in content_text:
    print("WARNING: ${} found in content, escaping")
    content_text = content_text.replace('${', '\\${')

# Build the entry
entry = f'''  {{
    slug: "employee-wellbeing-mental-health-2026",
    title: "Employee Wellbeing in 2026: Building a Holistic Mental Health and Wellness Strategy",
    excerpt: "In 2026, employee wellbeing is no longer a nice-to-have perk — it is a strategic business imperative. Discover key trends, top platforms like Calm, Headspace, and Modern Health, and how to build a comprehensive wellness strategy that drives retention and performance.",
    content: `{content_text}`,
    author: "Elise Smit",
    authorRole: "HR Technology Analyst & Content Lead",
    date: "2026-06-16",
    category: "Employee Wellbeing",
    readTime: 7,
    tags: ["Employee Wellbeing", "Mental Health", "Wellness Strategy", "EAP", "Modern Health", "Lyra Health", "Calm", "Headspace", "HR Technology"]
  }}'''

print(entry)
