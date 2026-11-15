# Progress & handoff

Last updated: 2026-11-15 (steps 8–11 done, then mobile/brand fixes). **Read this first when resuming in a new terminal/session**, then `RULES.md`.

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
| 8 | Contact form + WhatsApp + footer | ✅ done (Web3Forms key still a placeholder) |
| 9 | Case studies placeholder (content collection, hidden while empty) | ✅ done |
| 10 | SEO: Open Graph image, JSON-LD, robots.txt (sitemap + hreflang already done) | ✅ done |
| 11 | Polish: mobile QA, accessibility, Lighthouse ≥ 95 | ✅ done: mobile 99/100/100/100, desktop 100×4 |
| 12 | Deploy + domain | ⏸ waiting: user chose to decide hosting later |

## Brand & real data (2026-11-15)

SYNAPSE Tech · COVALIOV VICTOR PFA · CUI 55693416 · Suceava · 0755 154 722 (also WhatsApp) · contact@synapsetech.ro. Domain assumed `synapsetech.ro` (from the email): set in `site.ts` and `astro.config.mjs`, change both if different.
Logo redrawn as SVG (`scripts/build-logo.py`: Montserrat outlines fitted to the client's JPG + the S trace). Site accent switched to the logo orange #ff7323. On light backgrounds "TECH" uses a deeper cyan (#00a9cc) for legibility; on dark (footer, favicon) the original #17e5fc.

## Motion & cyan (2026-11-15)

User asked for animations that keep the site fast, and a little of the logo cyan: all implemented as listed in `RULES.md` (Visual → Motion / Accent colors). Mobile hero: 64px between the buttons and the badge row in the photo notch (user asked twice for more space there).

## Pre-launch hardening (2026-11-15)

- **Privacy policy** RO `/confidentialitate/`, EN `/en/privacy/` (`Privacy.astro`, copy in `privacy` in the dictionaries; written by Claude from the real data, **should be reviewed by the company**). Linked under the form and in the footer. No cookies, so no cookie banner.
- **404** (`src/pages/404.astro`), RO with an EN line, noindex.
- **Pages map** in `src/i18n/utils.ts` (`pages`): section links are `/#anchor` so they work from any page; the language switch goes to the same page in the other language.
- `/preview` and the OG source pages are dev-only routes (`astro.config.mjs`), not in the build.
- **Fonts:** Unbounded, Manrope and IBM Plex Mono are self-hosted subsets (`scripts/subset-font.sh`); Fontsource removed. Total ≈ 82 KB of fonts.
- `src/content/cases/exemplu.ro.md`: draft template case (never shown), which also silences the empty-collection build warning.
- Lighthouse mobile: **100 / 100 / 100 / 100** on home RO/EN and privacy.

## Service pages (2026-11-16)

One page per vertical, RO + EN (8 pages), for SEO on specific searches. `Service.astro` + `src/pages/servicii/[slug].astro`, `src/pages/en/services/[slug].astro`; slugs in `pages` (`src/i18n/utils.ts`). Sections: breadcrumb + framed H1 + lead + CTAs beside a notched photo (`bl`), problem/solution + benefit/outcomes on mist, "how it works" as a 4-node orange→cyan trace, uses + technology tags, FAQ (native `<details>`), the other three services as cut-corner cards, the shared contact form. JSON-LD: Service + BreadcrumbList + FAQPage. Shared copy from `solutions.items`, page copy from `services.items` (**written by Claude, the company should review the technical claims and technology lists**).
The user asked not to change the home page: the only home change is the shared footer, which gained a "Servicii" column (internal links). Then (user agreed) the header "Soluții" became **"Servicii" with a dropdown** of the 4 pages (+ "Toate serviciile" → home section); in the mobile menu they're listed under Servicii; each home tab has a "Detalii despre serviciu →" link under its CTA.

## Form

**Web3Forms** (user confirmed 2026-11-15). The key is a placeholder (`web3formsKey` in `src/config/site.ts`), so submitting currently shows the error message. To go live: create an access key at web3forms.com with the destination email and paste it there.

Other open items (not blocking): confirm the domain, real photos, who reviews the EN copy, hosting (Cloudflare Pages vs own server).

## What the page looks like now (top to bottom)

1. **Header** (`Header.astro`, `LanguageMenu.astro`): SYNAPSE·TECH logo + `RO ⌄` dropdown on the left; Soluții · Proces · De ce noi · Contact centered; WhatsApp text link + outline "Cere un demo" on the right. Sticky. Full-screen menu below `lg`.
2. **Hero** (`Hero.astro`): centered H1 framed by `CornerTicks`, subtitle; edge-to-edge photo (`NotchedImage bleed`, corner `tl`, **vertical 90° step, joint 44**) whose notch holds audience tabs (Industrie & orașe / Produse hardware), two CTAs, Hard&Soft badge. Mobile: buttons full width and equal, tabs split 50/50, badge sits in the notch.
3. **Ce rezolvăm concret** (`Solutions.astro`): `SectionHeading`, 4 tabs. Each panel: notched photo (alternates: even = left/`tl`, odd = right/`br`), title, Problema / Soluția / Beneficiu cheie, "Ce primești" as a numbered hairline list, underlined CTA link.
4. **Cum lucrăm** (`Process.astro`): `SectionHeading`; left a tall sticky photo with notch **bottom-left** (`bl`, vertical step); right a **timeline** with big outlined numbers 01–04 that fill orange on scroll, and a vertical line that fills.
5. **De ce noi?** (`WhyUs.astro`): 3 light `ChamferCard`s like "YOUR BENEFITS" in the reference, centered underlined link to contact.
6. **Contact** (`Contact.astro`): `SectionHeading`; PCB photo with the notch **bottom-right** (slanted step) holding the form (boxed fields with a tiny label inside, like the reference search inputs); below, the three direct channels as a spec strip (mono label, big value, hairlines; 3 columns from `xl`). Layout chosen by the user.
7. **Footer** (`Footer.astro`): the only dark block: rounded top-left, 45° cut top-right, huge wordmark, 3 columns (page, contact, company), © + RO/EN + back to top.
- **Studii de caz** (`Cases.astro`, between Proces and De ce noi): hidden until `src/content/cases/` has a case in that language (how-to in `_README.md`). First case = the reference "WATCH OUR VIDEO" block (notch **top-right**, orange play button, video in a dialog: YouTube or .mp4); the rest as an index list (number, vertical, title, thumbnail).
8. **WhatsApp FAB** (`WhatsAppFab.astro`): below `lg` only, shows after the hero and hides over contact/footer.

`/preview` and `/og-<lang>` are dev-only pages (injected in `astro.config.mjs`, never built) showing the UI primitives (noindex, not in sitemap).

## Decisions & user feedback (keep honoring these)

- **Match the Pinterest reference exactly** (`docs/reference.jpg`): light base, orange accent, wide uppercase headings, orange corner ticks, rounded cards with a 45° cut top-right corner, tabs with gray line + orange active underline, sans uppercase button labels with 3px corners, outline button with orange border.
- **Shapes cut into each other, no plain rectangles** for big blocks. `NotchedImage` (+ `src/lib/shape.ts`) computes a clip-path live; notch can be on any corner (`corner`), step slanted (`slant`) or vertical (`slant={0}`), joints rounded (`joint`).
- **Mobile = same cut as desktop, scaled down.** The user rejected "only the top-right corner cut" on mobile. Content stacks above/below; only the element next to the photo sits in the notch.
- **Variety:** the user found identical cards boring. Every section uses its own card language; notches change corners; photos alternate sides. Don't reuse one card style everywhere — make contact/footer different again.
- **Removed on request:** the Input → Procesare → Rezultat flow and the dark scroll-driven "Schema sistemului" panel (user: redundant). Don't bring them back.
- **Mobile feedback (2026-11-15):** hero headline was too small next to two full-width buttons. Then (same day) the user found the left-aligned version messy and asked for mobile to mirror desktop: H1 + subtitle centered with ticks, tabs 50/50, the same two buttons as desktop (filled + outline) stacked at equal width, 48px tall (touch-target guideline), badge in the photo notch. Solutions: the gray "Beneficiu cheie" box and the filled CTA were rejected → benefit is a third row under Problema/Soluția, outcomes a numbered hairline list, CTA an underlined link. Why-us: the dark middle card was rejected → all three light. Solutions photos use `NotchedImage fill`: on lg they stretch to the text column's height so the CTA link never hangs below the photo.
- Primary button text is **ink on orange** (not white) for contrast; offered to switch to white if the user insists.
- The two hero audience texts and the 3 outcomes per vertical were written by Claude (not in the brief) — the user should review them in `src/i18n/ro.ts`.
- **Performance (step 11):** CSS is inlined (`build.inlineStylesheets`), Unbounded is a self-hosted subset (`src/assets/fonts/unbounded-ro-wght.woff2`, Latin + Romanian diacritics, weights 400–800, 44 KB; rebuild with `scripts/subset-font.sh` if new characters appear, e.g. another language), and Unbounded + Manrope latin are preloaded. `steel` gray darkened to #6e6e6a for AA contrast. No horizontal overflow from 320 to 1440 px.
- Photos: Pexels (Unsplash blocks automated downloads). Listed in `CREDITS.md`.
- Hosting: user chose **later** (2026-11-15); stop at step 11 until they pick.
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
| JSON-LD (ProfessionalService + 4 Service) | `src/lib/schema.ts` |
| OG images (`public/og-ro.png`, `og-en.png`) + apple-touch-icon | source `src/pages/og/[lang].astro`; regenerate with `python3 scripts/og.py` (dev server running) after changing the name/headline |
| Case studies | `src/content/cases/` (how-to in `_README.md`) |
