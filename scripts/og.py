"""Renders /og/<lang>/ to public/og-<lang>.png (1200x630), the apple-touch-icon and public/logo.png (for schema.org).
Needs the dev server (npx astro dev) and Python Playwright: python3 scripts/og.py"""
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
BASE = 'http://localhost:4321'

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1200, 'height': 630})
    for lang in ('ro', 'en'):
        page.goto(f'{BASE}/og/{lang}/')
        page.add_style_tag(content='astro-dev-toolbar{display:none!important}')
        page.wait_for_timeout(800)
        page.screenshot(path=str(ROOT / f'public/og-{lang}.png'))

    icon = browser.new_page(viewport={'width': 180, 'height': 180})
    svg = (ROOT / 'public/favicon.svg').read_text()
    icon.set_content(f'<body style="margin:0;background:#0a101c">'
                     f'<div style="width:180px;height:180px">{svg}</div></body>')
    icon.screenshot(path=str(ROOT / 'public/apple-touch-icon.png'))

    logo = browser.new_page(viewport={'width': 1200, 'height': 240})
    mark = (ROOT / 'src/assets/brand/logo.svg').read_text()
    logo.set_content(f'<body style="margin:0;background:#fff;color:#0d0d0e;--logo-a:#ff7323;--logo-b:#00a9cc">'
                     f'<div style="padding:60px 80px">{mark}</div></body>')
    logo.screenshot(path=str(ROOT / 'public/logo.png'))
    browser.close()
