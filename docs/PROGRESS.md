# Progress & handoff

Last updated: 2026-11-15. **Read this first when resuming in a new terminal/session**, then `RULES.md`.

## Status

| # | Step | Status |
|---|---|---|
| 1 | Scaffold Astro + Tailwind + fonts + tokens | ✅ done |
| 2 | RO/EN routing, dictionaries, language menu | ✅ done |
| 3 | UI primitives (`src/components/ui/`) + placeholder photos | ✅ done |
| 4 | Header + mobile menu | ✅ done |
| 5 | Hero | ✅ done |
| 6 | Ce rezolvăm concret (4 verticals) | ✅ done |
| 7 | Cum lucrăm + De ce noi | ✅ done |
| 8 | Contact form + WhatsApp + footer | ⏳ **next**, blocked on one answer (below) |
| 9 | Case studies placeholder (content collection, hidden while empty) | todo |
| 10 | SEO: Open Graph image, JSON-LD, robots.txt (sitemap + hreflang already done) | todo |
| 11 | Polish: mobile QA, accessibility, Lighthouse ≥ 95 | todo |
| 12 | Deploy + domain | todo |

## Open question (blocks step 8)

**Where should form submissions go?** Proposed: **Web3Forms** (free, no server, mail goes straight to an inbox). The user creates an access key at web3forms.com with the destination email. Until then, build the form with a placeholder key in `src/config/site.ts`. The user had not answered yet.

Other open items (not blocking): real company name/logo/contacts/domain, real photos, who reviews the EN copy, hosting (Cloudflare Pages vs own server).

## What the page looks like now (top to bottom)

1. **Header** (`Header.astro`, `LanguageMenu.astro`): wordmark **NUME**COMPANIE + `RO ⌄` dropdown on the left; Soluții · Proces · De ce noi · Contact centered; WhatsApp text link + outline "Cere un demo" on the right. Sticky. Full-screen menu below `lg`.
2. **Hero** (`Hero.astro`): centered H1 framed by `CornerTicks`, subtitle; edge-to-edge photo (`NotchedImage bleed`, corner `tl`, **vertical 90° step, joint 44**) whose notch holds audience tabs (Industrie & orașe / Produse hardware), two CTAs, Hard&Soft badge. Mobile: buttons full width and equal, tabs split 50/50, badge sits in the notch.
3. **Ce rezolvăm concret** (`Solutions.astro`): `SectionHeading`, 4 tabs. Each panel: notched photo (alternates: even = left/`tl`, odd = right/`br`), title, Problema, Soluția, gray **benefit box** with "Ce primești" (3 outcomes with orange checks), CTA directly under the box.
4. **Cum lucrăm** (`Process.astro`): `SectionHeading`; left a tall sticky photo with notch **bottom-left** (`bl`, vertical step); right a **timeline** with big outlined numbers 01–04 that fill orange on scroll, and a vertical line that fills.
5. **De ce noi?** (`WhyUs.astro`): 3 `ChamferCard`s like "YOUR BENEFITS" in the reference (middle one **dark**), centered underlined link to contact.
6. Placeholder `#contact` section (to be replaced in step 8).

`/preview` is an internal page showing the UI primitives (noindex, not in sitemap).

## Decisions & user feedback (keep honoring these)

- **Match the Pinterest reference exactly** (`docs/reference.jpg`): light base, orange accent, wide uppercase headings, orange corner ticks, rounded cards with a 45° cut top-right corner, tabs with gray line + orange active underline, sans uppercase button labels with 3px corners, outline button with orange border.
- **Shapes cut into each other, no plain rectangles** for big blocks. `NotchedImage` (+ `src/lib/shape.ts`) computes a clip-path live; notch can be on any corner (`corner`), step slanted (`slant`) or vertical (`slant={0}`), joints rounded (`joint`).
- **Mobile = same cut as desktop, scaled down.** The user rejected "only the top-right corner cut" on mobile. Content stacks above/below; only the element next to the photo sits in the notch.
- **Variety:** the user found identical cards boring. Every section uses its own card language; notches change corners; photos alternate sides. Don't reuse one card style everywhere — make contact/footer different again.
- **Removed on request:** the Input → Procesare → Rezultat flow and the dark scroll-driven "Schema sistemului" panel (user: redundant). Don't bring them back.
- Primary button text is **ink on orange** (not white) for contrast; offered to switch to white if the user insists.
- The two hero audience texts and the 3 outcomes per vertical were written by Claude (not in the brief) — the user should review them in `src/i18n/ro.ts`.
- Photos: Pexels (Unsplash blocks automated downloads). Listed in `CREDITS.md`.
- Workflow: one step at a time, screenshot desktop (1440) + phone (390) before reporting, commit + push after each step. The user writes in Romanian; answer in Romanian.

## How to resume

```sh
cd ~/B2B-engineering
git pull
npm install
npx astro dev --background   # http://localhost:4321  (stop: npx astro dev stop)
npm run check                # types
```

Screenshots for checking: Python Playwright is installed (`webapp-testing` skill). Hide the dev toolbar with `astro-dev-toolbar{display:none}` and make the header static before element screenshots.

## Where things live

| What | Where |
|---|---|
| All copy (RO / EN, same keys) | `src/i18n/ro.ts`, `src/i18n/en.ts` |
| Company placeholders | `src/config/site.ts` (+ `site:` in `astro.config.mjs`) |
| Colors, fonts | `src/styles/global.css` (`@theme`) |
| Shape math | `src/lib/shape.ts` |
| Contact links (tel, mailto, WhatsApp) | `src/lib/contact.ts` |
| Page assembly | `src/components/Home.astro` |
| Photos | `src/assets/images/` |
