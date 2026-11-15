# B2B Engineering — Website Plan

Presentation website for a B2B engineering company (hardware, embedded, computer vision, custom software).
Core message: *"Rezolvăm probleme complexe de la nivel de senzor și PCB până la aplicația cloud și AI."*

## Stack

| Piece | Choice | Why |
|---|---|---|
| Framework | **Astro 7** (static output) | Ships plain HTML/CSS, near-zero JS → instant load from a WhatsApp link |
| Styling | **Tailwind CSS 4** | Fast iteration, design tokens in one place |
| Language | TypeScript | Typed content (translations, verticals) |
| i18n | Astro built-in routing | RO at `/`, EN at `/en/` |
| Fonts | Self-hosted via Fontsource | Display: **Unbounded** (wide, bold, uppercase) · Text: **Manrope** · Mono: **IBM Plex Mono** |
| Images | `astro:assets` | Auto WebP/AVIF, responsive sizes |
| Form | Web3Forms or Formspree (free tier) → email | No backend to run |
| SEO | `@astrojs/sitemap`, JSON-LD Schema.org, hreflang, Open Graph | Local SEO + good WhatsApp preview |
| Hosting | Cloudflare Pages (free) — or the Oracle/Hetzner box via nginx | Static files, auto-deploy from GitHub |

## Visual direction (from the reference)

Light, technical-minimal, industrial orange accent.

- **Colors**: white `#FFFFFF`, ink `#0B0B0C`, graphite grays, accent orange `#FF5A1F` (to be tuned)
- **Headings**: wide uppercase display font, tight line height
- **Corner tick marks** (small orange squares) framing the H1 and cards — like crop marks on a technical drawing
- **Notched photo**: the hero photo has an inverted rounded corner where the CTA block cuts into it
- **Chamfered cards**: one corner cut at 45°, thin gray border, orange tick marks at corners
- **Tabs** with an orange underline for active state
- **Outline button** in the nav ("Cere un demo"), solid orange for primary actions
- **Photos**: real PCBs, sensors, installs, bench work — no stock people in suits
- Avoid: gradients/glow, 3D blobs, generic icon grids

## Site structure

Single page with anchors, in both languages.

```
/            (RO)          /en/          (EN)
├── #acasa   Hero          ├── #home
├── #solutii Ce rezolvăm   ├── #solutions
├── #proces  Cum lucrăm    ├── #process
├── #demo    Studii de caz (hidden until content exists)
├── #de-ce   De ce noi     ├── #why-us
└── #contact Contact       └── #contact
```

### 1. Header
Logo · nav (Soluții, Proces, De ce noi, Contact) · RO/EN switch · outline button "Cere un demo".
Mobile: hamburger → full-screen menu. Sticky, shrinks on scroll.

### 2. Hero
- H1 framed by corner ticks: **Sisteme inteligente la cheie: de la hardware și senzori până la AI și Cloud.**
- Subtitle
- Notched photo block; the notch holds:
  - Primary: **Discută cu un inginer** → `#contact`
  - Secondary: **Vezi domeniile noastre** → `#solutii`
  - Badge: **Echipă premiată la Hard&Soft (USV)**

### 3. Ce rezolvăm — 4 verticals
Tabs on desktop, accordion/stacked cards on mobile. Each vertical:
- Problem · Solution · Key benefit
- benefit box with three concrete outcomes (the flow diagram was removed at the user's request)
- Photo slot

Verticals:
1. Retrofitting industrial & monitorizare producție (IoT)
2. Computer Vision & Edge AI
3. R&D & prototipare hardware/firmware
4. Automatizări custom — logistică / agricultură

Each tab ends with the CTA → `#contact`.

### 4. Cum lucrăm — 4 steps
Chamfered cards numbered 01–04: Audit → PoC → Implementare → Mentenanță & scalare. Connector line between cards on desktop.

### 5. Studii de caz / Demo (placeholder)
Large video block with orange play button. Driven by a content collection (`src/content/cases/`); the section is hidden while the collection is empty. Adding an `.md` file + photo/video turns it on.

### 6. De ce noi
3 chamfered cards: Full-stack în lumea reală · Echipă testată sub presiune · Fără vendor lock-in.

### 7. Contact + footer
- Form: Nume · Companie / Domeniu · Telefon sau Email · Problema (textarea). Client-side validation, honeypot spam field, success/error states.
- Direct: `tel:` link, `mailto:` link, WhatsApp click-to-chat (`wa.me/40…` with a prefilled message)
- Floating WhatsApp button on mobile
- Footer: company legal info (CUI, address), language switch, © year

## Project layout

```
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Verticals.astro        (tabs + accordion)
│   ├── FlowDiagram.astro      (Input → Procesare → Rezultat SVG)
│   ├── Process.astro
│   ├── Cases.astro
│   ├── WhyUs.astro
│   ├── ContactForm.astro
│   ├── Footer.astro
│   ├── WhatsAppFab.astro
│   └── ui/ (Button, ChamferCard, CornerTicks, NotchedImage, Tabs)
├── i18n/
│   ├── ro.ts
│   ├── en.ts
│   └── utils.ts               (t(), getLang(), localized links)
├── content/cases/             (future case studies)
├── layouts/Base.astro         (head, SEO, JSON-LD, fonts)
├── pages/
│   ├── index.astro            (RO)
│   └── en/index.astro         (EN)
├── assets/images/
└── styles/global.css          (Tailwind + tokens)
public/ (favicon, og-image, robots.txt)
```

All text lives in `i18n/ro.ts` and `i18n/en.ts`, so pages contain no hardcoded copy.

## Build steps

Live status: see `docs/PROGRESS.md`.

Each step ends with a commit and something visible in the browser.

| # | Step | Result |
|---|---|---|
| 1 | Scaffold Astro + Tailwind + TS, fonts, design tokens, base layout | Blank page with correct fonts/colors |
| 2 | i18n setup (RO/EN dictionaries, routing, language switch) | `/` and `/en/` both work |
| 3 | UI primitives: Button, CornerTicks, ChamferCard, NotchedImage, Tabs | Component preview page |
| 4 | Header + mobile menu | Sticky nav |
| 5 | Hero | First screen done |
| 6 | Verticals (tabs, notched photos, benefit box) | Tabs with all four verticals |
| 7 | Process + Why us | Middle sections done |
| 8 | Contact form + WhatsApp + footer | Working form sending email |
| 9 | Cases placeholder (content collection) | Hidden section, ready for demos |
| 10 | SEO: meta, Open Graph image, JSON-LD, sitemap, hreflang, robots | Lighthouse SEO 100 |
| 11 | Polish: scroll animations (CSS only), mobile QA, accessibility, Lighthouse | Perf/A11y ≥ 95 on mobile |
| 12 | Deploy (Cloudflare Pages or own server) + domain | Live site |

## SEO keywords

RO: automatizări industriale · dezvoltare firmware și hardware · soluții computer vision · proiectare PCB · software custom · monitorizare producție IoT · retrofitting utilaje · pick-to-light
EN: industrial automation · firmware and hardware development · computer vision solutions · PCB design · custom software · embedded engineering Romania

JSON-LD: `Organization` + `LocalBusiness` (address, phone, area served) + one `Service` per vertical + `FAQPage` later if useful.

## Placeholders (for now)

- Company name: **NUMECOMPANIE** (wordmark set in the display font, no logo image)
- Contacts: `+40 700 000 000`, `contact@example.com`, WhatsApp to the same placeholder number
- Address/CUI: `Str. Exemplu nr. 1, Suceava` · `RO00000000`
- Photos: free-licensed images from **Unsplash / Pexels** (PCBs, electronics bench, sensors, factory machines, cameras), saved in `src/assets/images/` with attribution listed in `CREDITS.md`. Swapped for real photos later.
- All placeholders live in one file, `src/config/site.ts`, so swapping them is a single edit.

## Open questions

- [ ] Company name + logo
- [ ] Phone, email, WhatsApp number, address/city, CUI
- [ ] Domain
- [ ] Real photos (PCBs, sensors, installs) — placeholders until then
- [ ] EN copy: translate from RO, or provided by the company?
- [ ] Form destination email
- [ ] Hosting: Cloudflare Pages or own server
