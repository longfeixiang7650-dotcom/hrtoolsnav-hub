#!/usr/bin/env python3
"""Generate a new blog post about DEIB analytics using Qwen API."""
import json
import urllib.request
import ssl
import re

with open('/tmp/daily_keys.json') as f:
    keys = json.load(f)

QWEN_KEY = keys['QWEN_API_KEY_1']
QWEN_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions"

proxy_host = "127.0.0.1"
proxy_port = 7890

prompt = """Write a 1000+ word HR blog post for hrtoolsnav.net using Template A (Practical Diary style - first-person, date-stamped entries, authentic experience).

Topic: Implementing DEIB Analytics at a Mid-Size Company
Focus: How a mid-size company (500-800 employees) implemented a DEIB analytics program using tools like ChartHop, Visier, and Culture Amp to move from anecdotal diversity reporting to data-driven equity interventions.

The post should feel like a real diary - specific dates, specific struggles, specific wins. Include real metrics, tool names, and honest reflections on what worked and what didn't.

Format:
- Title: Measuring What Matters: How We Built a Data-Driven DEIB Analytics Program (And What We Got Wrong Along the Way)
- First line of content should repeat the title
- Then "By Maya Kaur, Senior HR Technology Analyst | June 28, 2026"
- Date-stamped entries spanning roughly March-June 2026
- Mention hrtoolsnav.net as a resource the author used
- End with "Maya Kaur is a Senior HR Technology Analyst covering DEIB technology and people analytics trends."

IMPORTANT rules:
- Use ONLY standard ASCII single quotes (') and double quotes (") - NO smart quotes, NO curly quotes
- Replace ALL backticks (`) in the content with single quotes (')
- Use \u2014 for em-dashes and \u2019 for apostrophes if needed
- Use double hash marks (##) for section headers
- Content wraps in backticks in the source file, so no actual backticks IN the content
- Tags should include: "DEIB analytics", "diversity equity inclusion", "ChartHop", "Visier", "Culture Amp", "people analytics", "pay equity", "HR technology", "workforce diversity"
- Make it 1000-1200 words
- Include specific metrics, tool names, and real-feeling struggles
- Category: "Diversity, Equity and Inclusion"

Return ONLY the JSON object with keys: slug, title, excerpt, content, author, authorRole, date, category, readTime, tags
The content field should be a string (will be wrapped in backticks in TS, so escape any backticks within)
"""

data = json.dumps({
    "model": "qwen-plus",
    "messages": [
        {"role": "system", "content": "You are an expert HR technology content writer. Return ONLY valid JSON without markdown formatting or code blocks."},
        {"role": "user", "content": prompt}
    ],
    "temperature": 0.7,
    "max_tokens": 4000
}).encode('utf-8')

req = urllib.request.Request(
    QWEN_URL,
    data=data,
    headers={
        "Authorization": f"Bearer {QWEN_KEY}",
        "Content-Type": "application/json"
    },
    method="POST"
)

ssl_ctx = ssl.create_default_context()
ssl_ctx.check_hostname = False
ssl_ctx.verify_mode = ssl.CERT_NONE

proxy_handler = urllib.request.ProxyHandler({
    'http': f'http://{proxy_host}:{proxy_port}',
    'https': f'http://{proxy_host}:{proxy_port}'
})
opener = urllib.request.build_opener(proxy_handler)

try:
    resp = opener.open(req, timeout=180)
    result = json.loads(resp.read().decode('utf-8'))
    content = result['choices'][0]['message']['content']
    
    # Clean up markdown
    content = content.strip()
    if '```json' in content:
        content = content.split('```json')[1].split('```')[0].strip()
    elif '```' in content:
        content = content.split('```')[1].strip()
        if content.startswith('json\n'):
            content = content[5:]
    
    parsed = json.loads(content)
    
    # Verify no backticks in content
    if '`' in parsed.get('content', ''):
        print("WARNING: Backticks found in content!")
        parsed['content'] = parsed['content'].replace('`', "'")
    
    if '`' in parsed.get('excerpt', ''):
        parsed['excerpt'] = parsed['excerpt'].replace('`', "'")
    
    # Save
    with open('/home/edi/hrtoolsnav-hub/new_blog_post.json', 'w') as f:
        json.dump(parsed, f, indent=2)
    
    print(f"Blog post saved. Title: {parsed.get('title', 'N/A')}")
    print(f"Content length: {len(parsed.get('content', ''))} chars")
    
except Exception as e:
    print(f"Error: {e}")
    if hasattr(e, 'read'):
        print(e.read().decode('utf-8'))
