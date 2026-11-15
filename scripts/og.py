"""Renders /og/<lang>/ to public/og-<lang>.png (1200x630) and the apple-touch-icon.
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
    icon.set_content(f'<body style="margin:0;background:#0d0d0e;display:grid;place-items:center;height:180px">'
                     f'<div style="width:196px;height:196px">{svg}</div></body>')
    icon.screenshot(path=str(ROOT / 'public/apple-touch-icon.png'))
    browser.close()
