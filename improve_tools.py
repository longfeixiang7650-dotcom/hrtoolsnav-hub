#!/usr/bin/env python3
"""Use Qwen API to generate improved content for 3 tools: TriNet, Deputy, Homebase."""
import json
import os
import re

with open('/tmp/daily_keys.json') as f:
    keys = json.load(f)

QWEN_KEY = keys['QWEN_API_KEY_1']
QWEN_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions"

import urllib.request
import ssl

ssl_ctx = ssl.create_default_context()
ssl_ctx.check_hostname = False
ssl_ctx.verify_mode = ssl.CERT_NONE

proxy_host = "127.0.0.1"
proxy_port = 7890

# Read the tools file
with open('/home/edi/hrtoolsnav-hub/app/data/tools.ts', 'r') as f:
    content = f.read()

tools_to_improve = [
    {
        'name': 'TriNet',
        'current': {
            'pros': [
                "Reduces average HR administrative workload by 14 hours/week (client survey, 2023)",
                "99.2% IRS payroll tax filing accuracy across 3-year audit history",
                "89% of manufacturing clients adopt TriNet's OSHA-aligned safety training modules",
                "63% client adoption rate for automated 401(k) enrollment and match administration",
                "98% U.S. healthcare provider network coverage via UnitedHealthcare and Aetna partnerships",
                "Average HR advisory response time under 15 minutes during business hours"
            ],
            'cons': [
                "Limited self-service employee onboarding customization--predefined workflows only",
                "No native mobile app for managers; employee-facing app lacks performance review functionality",
                "Integration with non-native systems (e.g., BambooHR) requires custom API development",
                "Retirement plan fee structure lacks transparency--annual per-participant fees vary by fund selection"
            ],
            'features': [
                "Co-employment payroll processing",
                "ACA and ERISA compliance management",
                "Multi-carrier health insurance brokerage",
                "401(k) plan administration and matching",
                "OSHA-compliant workplace safety training",
                "HR advisory hotline with SLA-backed response",
                "Real-time compliance deadline dashboard",
                "Employment law updates and policy templates",
                "Integrated background check and E-Verify",
                "Benefits eligibility and enrollment workflow automation"
            ],
            'pricing': "Paid",
            'pricingDetail': "from $59/employee/month; custom enterprise plans available for larger organizations including dedicated HR advisory, compliance audits, and team training programs.",
            'useCase': "TriNet is ideal for fast-growing SMBs (10-2,000 employees) in tech, professional services, or distribution that lack in-house HR expertise but require full-spectrum co-employment support--including payroll tax compliance, scalable benefits administration, proactive risk mitigation, and strategic HR advisory--without investing in fragmented point solutions or expanding internal HR headcount.",
            'userQuotes': [
                {"role": "COO", "company": "CloudNova Systems", "quote": "TriNet\\u2019s PEO structure let us offer top-tier health plans and handle ACA compliance effortlessly."},
                {"role": "HR Business Partner", "company": "BioLabs Innovations", "quote": "Their HR advisors helped us navigate complex wage-and-hour audits\\u2014no penalties incurred."},
                {"role": "CEO", "company": "UrbanBuild Contractors", "quote": "Workers\\u2019 comp claims dropped 40% after TriNet implemented their safety and training programs."}
            ]
        }
    },
    {
        'name': 'Deputy',
        'current': {
            'pros': [
                "AI-powered smart scheduling",
                "Geofenced & biometric time clock",
                "Labor compliance guardrails",
                "Built-in communication hub"
            ],
            'cons': [
                "Steeper learning curve for non-tech managers",
                "Higher entry price than basic trackers"
            ],
            'features': [
                "Shift scheduling",
                "Mobile time clock",
                "Compliance monitoring",
                "Leave management",
                "Payroll exports"
            ],
            'pricing': "Subscription",
            'pricingDetail': "from $2.50/mo per employee",
            'useCase': "Frontline businesses needing unified scheduling, attendance, and labor compliance in one system.",
            'userQuotes': [
                {"role": "Store Operations Manager", "company": "FreshMart Grocers", "quote": "Deputy cut our schedule creation time by 65% and reduced no-shows with push notifications and clock-in verification."},
                {"role": "Director of People", "company": "MetroHealth Clinics", "quote": "Overtime alerts and break compliance saved us $120K in potential penalties last year."},
                {"role": "Restaurant GM", "company": "Bella Cucina Group", "quote": "Our staff loves the app \\u2014 they swap shifts themselves, and I get real-time labor cost visibility."}
            ]
        }
    },
    {
        'name': 'Homebase',
        'current': {
            'pros': [
                "Free plan for up to 20 employees with full scheduling and time tracking",
                "Excellent mobile experience for hourly staff with GPS clock-in",
                "Built-in HR document library with customizable templates",
                "Intuitive drag-and-drop scheduling with shift swapping",
                "Integrates natively with Gusto, QuickBooks, and Square",
                "Automated labor cost forecasting and overtime alerts",
                "Team messaging and announcement features included"
            ],
            'cons': [
                "Limited advanced analytics and reporting vs. enterprise tools like Deputy",
                "Fewer deep payroll integrations outside US markets",
                "No native performance management or learning module",
                "Advanced scheduling features (AI auto-scheduling) require paid plans"
            ],
            'features': [
                "Employee scheduling with drag-and-drop",
                "GPS-enabled time clock with photo verification",
                "Labor law alerts and compliance posters",
                "HR document builder with offer letter templates",
                "Team messaging and announcements",
                "Time-off requests and approvals",
                "Shift swapping and availability management",
                "Automated labor cost forecasting",
                "Sales/performance insights (paid plans)",
                "Gusto, QuickBooks, and Square integration",
                "Mobile-first interface for iOS and Android",
                "Bulk timesheet export for payroll"
            ],
            'pricing': "Freemium",
            'pricingDetail': "Free plan includes scheduling, time clock, and basic HR documents. Essentials at $24/month/location; Premium at $60/month/location; All-in-One at $99/month/location. (Source: Homebase pricing page, verified June 2026)",
            'useCase': "Homebase is ideal for local brick-and-mortar small businesses\u2014restaurants, cafes, retail shops, and trades\u2014needing a simple, mobile-first all-in-one platform for employee scheduling, time tracking, HR compliance, and team communication without enterprise pricing or complexity.",
            'userQuotes': [
                {"role": "Cafe Owner", "company": "Brew & Co.", "quote": "Homebase replaced three apps \\u2014 scheduling, clock-in, and HR docs \\u2014 and we\\u2019re saving 8 hours/week on admin."},
                {"role": "Contractor", "company": "Summit Renovations", "quote": "My crew clocks in from job sites using GPS. No more paper timesheets \\u2014 payroll runs smooth every Friday."},
                {"role": "Bar Manager", "company": "The Oak Tap", "quote": "The free plan covered us for 18 months. When we grew, upgrading was seamless \\u2014 no data loss, no retraining."}
            ]
        }
    }
]

def call_qwen(prompt):
    data = json.dumps({
        "model": "qwen-plus",
        "messages": [
            {"role": "system", "content": "You are an expert HR technology analyst and content writer. You write detailed, data-driven tool descriptions with specific numbers, benchmarks, and KPIs. Return ONLY valid JSON without markdown formatting or code blocks."},
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

    proxy_handler = urllib.request.ProxyHandler({
        'http': f'http://{proxy_host}:{proxy_port}',
        'https': f'http://{proxy_host}:{proxy_port}'
    })
    opener = urllib.request.build_opener(proxy_handler)
    
    try:
        resp = opener.open(req, timeout=120)
        result = json.loads(resp.read().decode('utf-8'))
        return result['choices'][0]['message']['content']
    except Exception as e:
        print(f"API call failed: {e}")
        return None

for tool in tools_to_improve:
    name = tool['name']
    cur = tool['current']
    
    prompt = f"""Generate improved content for the HR tool "{name}" for a website called hrtoolsnav.net. This is an incremental refinement - make the content more detailed, specific, and compelling.

Return ONLY valid JSON with these exact keys (no markdown formatting):
- pros: array of 6-7 detailed pro statements with specific metrics, benchmarks, or data points. Each should be substantive and reference real capabilities.
- cons: array of 4 cons (honest, balanced, and specific)
- features: array of 10-12 feature names (short, descriptive)
- pricing: a single word from: Free, Freemium, Subscription, Paid, or Custom
- pricingDetail: a detailed pricing description (1-3 sentences) with specific numbers
- useCase: a detailed use case description (2-4 sentences) describing the ideal customer
- userQuotes: array of 3 objects with "role", "company", "quote" fields - make these feel authentic and specific

IMPORTANT: 
- Keep the content realistic and accurate for this tool
- Use backslash-u escapes for unicode quotes like \\u2019 and \\u2014 instead of actual smart quotes
- Do NOT use actual backtick characters anywhere
- Make it better than the existing content below

Current content for reference:
Pros: {json.dumps(cur['pros'])}
Cons: {json.dumps(cur['cons'])}
Features: {json.dumps(cur['features'])}
Pricing: {cur['pricing']}
PricingDetail: {cur['pricingDetail']}
UseCase: {cur['useCase']}
UserQuotes: {json.dumps(cur['userQuotes'])}"""

    print(f"\n=== Generating improved content for {name} ===")
    result = call_qwen(prompt)
    if result:
        # Try to clean up markdown code blocks
        result = result.strip()
        if '```json' in result:
            result = result.split('```json')[1].split('```')[0].strip()
        elif '```' in result:
            result = result.split('```')[1].strip()
            if result.startswith('json\n'):
                result = result[5:]
        
        try:
            parsed = json.loads(result)
            filename = f"/home/edi/hrtoolsnav-hub/improved_{name.lower()}.json"
            with open(filename, 'w') as f:
                json.dump(parsed, f, indent=2)
            print(f"  Saved to {filename}")
        except json.JSONDecodeError as e:
            print(f"  Failed to parse JSON: {e}")
            print(f"  Raw response (first 200 chars): {result[:200]}")
    else:
        print(f"  Failed to get response from API")

print("\n=== Done ===")
