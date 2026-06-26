#!/usr/bin/env python3
"""Set up git credential and push"""

import json
import os
import subprocess
import sys

with open('/tmp/daily_keys.json') as f:
    keys = json.load(f)

token = keys['GITHUB_TOKEN']
repo = "longfeixiang7650-dotcom/hrtoolsnav-hub"

# Configure git credential
os.system('git config --global user.name "HR Tools Bot"')
os.system('git config --global user.email "bot@hrtoolsnav.net"')

# Write credential helper
cred = f"https://{token}:x-oauth-basic@github.com\n"
os.makedirs(os.path.expanduser('~'), exist_ok=True)
with open(os.path.expanduser('~/.git-credentials'), 'w') as f:
    f.write(cred)
os.system('git config --global credential.helper store')

os.chdir('/home/edi/hrtoolsnav-hub')

# Add files
subprocess.run(['git', 'add', '-A'], capture_output=True)
result = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True)
print("Changed files:")
print(result.stdout)

# Commit
result = subprocess.run(['git', 'commit', '-m', 'Incremental refinement: updated Coursera for Teams, Udemy Business, Docebo tools + new blog post on continuous feedback performance reviews'], capture_output=True, text=True)
print(result.stdout)
if result.returncode != 0:
    print(result.stderr)

# Push with proxy
env = os.environ.copy()
env['https_proxy'] = 'http://127.0.0.1:7890'
result = subprocess.run(['git', 'push', 'origin', 'main'], env=env, capture_output=True, text=True)
print(result.stdout)
if result.returncode != 0:
    print(result.stderr)
else:
    # Verify clean status
    result = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True)
    if result.stdout.strip():
        print(f"WARNING: Uncommitted files remain:\n{result.stdout}")
    else:
        print("SUCCESS: Git status is clean!")
