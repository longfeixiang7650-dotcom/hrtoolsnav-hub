#!/usr/bin/env python3
"""Generate the TS blog entry and append to blog-posts.ts"""
import json
import re

with open('/home/edi/hrtoolsnav-hub/new_blog_post.json') as f:
    d = json.load(f)

content = d['content']

# Build the blog entry
ts_entry = f"""  {{
    slug: "{d['slug']}",
    title: "{d['title']}",
    excerpt: "{d['excerpt']}",
    content: `{content}`,
    author: "{d['author']}",
    authorRole: "{d['authorRole']}",
    date: "{d['date']}",
    category: "{d['category']}",
    readTime: {d['readTime']},
    tags: {json.dumps(d['tags'])},
  }},"""

# Read existing file
with open('/home/edi/hrtoolsnav-hub/app/data/blog-posts.ts', 'r') as f:
    file_content = f.read()

# Find the last entry before ]; and insert
# Replace '];' at end with our new entry + '];'
if file_content.rstrip().endswith('];'):
    # Insert before the final ];
    idx = file_content.rfind('];')
    new_content = file_content[:idx] + ts_entry + '\n];'
    
    with open('/home/edi/hrtoolsnav-hub/app/data/blog-posts.ts', 'w') as f:
        f.write(new_content)
    
    print(f"Blog post inserted. New file length: {len(new_content)} chars")
    print(f"Entry length: {len(ts_entry)} chars")
else:
    print("ERROR: Could not find ]; at end of file")
    print(f"Last 20 chars: {repr(file_content[-20:])}")
