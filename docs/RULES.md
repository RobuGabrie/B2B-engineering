# Rules

Rules for anyone (human or AI) working on this site. When in doubt, the brief (`BRIEF.md`) wins on content and these rules win on implementation.

## Workflow

1. **Plan before building.** Agree on the plan for a step before writing its code.
2. **Build step by step** following the table in `../PLAN.md`. One step = one commit, with something visible in the browser.
3. **Verify visually** after each step: screenshot at desktop (1440px) and phone (390px) widths before calling it done.
4. Commit messages in English, short imperative ("Add hero section").

## Content

- **No hardcoded copy in components.** Every string lives in `src/i18n/ro.ts` and `src/i18n/en.ts`. Both files must always have the same keys.
- **Romanian is the primary language** (`/`), English is a full mirror (`/en/`). Never ship a section in only one language.
- **Company details** (SYNAPSE Tech, COVALIOV VICTOR PFA, CUI 55693416, Suceava, 0755 154 722, contact@synapsetech.ro) live only in `src/config/site.ts`.
- **Logo**: `ui/Logo.astro` (inline SVG from `src/assets/brand/logo.svg`, rebuilt by `scripts/build-logo.py` from the client's raster). Never use the JPG.
- Every section ends in, or links to, the single CTA: talk to an engineer / request a demo (`#contact`).

## Visual

- **Base:** light, technical-minimal. White background, near-black ink, graphite grays.
- **Accent colors have meanings:** **orange = action** (buttons, links, ticks, icons); **cyan = live signal / data**, used sparingly: the pulsing `ui/LiveDot.astro` (contact "reply" label, the real-time outcome marked `live` in the dictionaries), the cyan half of the process trace, footer column titles on dark. Never cyan on buttons, headings or body text.
- **Typography:** wide bold uppercase display font (Unbounded) for headings; a clean sans for text. Body text never below 16px on mobile.
- **Match the Pinterest reference exactly** (`docs/reference.jpg`; the "PRO Improver" construction landing page) for shapes and details: card silhouette, notch, ticks, tabs, icons. Compare side by side before calling a component done.
- **No plain rectangles for big blocks.** Photos and large panels are shapes that cut into each other: a notch bites into the photo, the step between them is slanted with rounded joints (`ui/NotchedImage.astro`, `src/lib/shape.ts`). On mobile the same cut is kept, smaller: content stacks above and only its last element (badge/label) sits in the notch.
- **Variety, not repetition.** Notches come from different corners (`corner` prop: tl/tr/bl/br), photos alternate sides, and each section uses its own card language: reference cut-corner cards (why-us), a vertical timeline with outlined numbers (process), hairline numbered lists (solutions outcomes, case results, contact channels). Don't reuse one card style for everything.
- **Motion** (CSS + one IntersectionObserver in `Base.astro`, no animation libraries; transform/opacity/stroke only, never on the hero headline; everything off under `prefers-reduced-motion`):
  - `data-reveal` (element) / `data-stagger` (children one by one): rise 16px + fade in, once. Section headings, solution text, why-us cards, contact channels, cases.
  - `NotchedImage` (non-hero): reveals and traces its cut outline in orange once, then the line fades.
  - Header logo draws its S on load (`<Logo animate>`); tabs have one sliding underline; link arrows nudge on hover; process numbers fill on scroll.
- **Signature elements** (from the reference): orange corner tick marks, a notched photo (edge-to-edge in the hero, rounded block for the video), cards with rounded corners and the top-right corner cut at 45° (orange solid icon on top, ticks at all 4 corners; all light, like the reference: the user rejected a dark card), tabs with a gray line under the tab group and an orange underline on the active tab, an outline button in the nav.
- **Photos:** real-looking hardware, PCBs, sensors, machines, labs. Free-licensed (Pexels; Unsplash blocks automated downloads) until real photos arrive; every image is listed in `CREDITS.md`.
- **Forbidden:** stock people in suits / handshakes, gradient glows, purple-blue gradients, 3D blobs, generic outline-icon grids (only flat solid orange pictograms from `ui/Icon.astro`), emoji as icons, colored left-border stripes on cards.

## Technical

- **Stack:** Astro (static output) + Tailwind CSS + TypeScript (strict).
- **Mobile first.** Most visitors open the link from WhatsApp on a phone.
- **Minimal JavaScript.** Plain `<script>` in Astro components only where needed (tabs, mobile menu, form). No React unless there's a clear reason.
- **Images** go through `astro:assets` (`<Image />` / `<Picture />`) with proper `alt` text in both languages.
- **Accessibility:** semantic HTML, visible focus states, keyboard-usable tabs, contrast AA minimum, `prefers-reduced-motion` respected.
- **Performance targets** (Lighthouse, mobile): Performance ≥ 95, Accessibility ≥ 95, SEO 100.
- **New pages** go into `pages` in `src/i18n/utils.ts` (RO + EN slug) and pass `page` to `Base`, `Header`, `Footer`.
- **SEO:** each page has a title, description, canonical, hreflang (ro/en/x-default), Open Graph tags and JSON-LD (`Organization`, `LocalBusiness`, `Service`).
- Design tokens (colors, fonts, spacing) are defined once in `src/styles/global.css` (`@theme`). Don't use raw hex values in components.
