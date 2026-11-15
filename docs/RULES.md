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
- **Placeholders for now:** company name `NUMECOMPANIE`, phone `+40 700 000 000`, email `contact@example.com`, address `Str. Exemplu nr. 1, Suceava`, CUI `RO00000000`. All of these live only in `src/config/site.ts`.
- **No logo image yet**: the name is a text wordmark in the display font.
- Every section ends in, or links to, the single CTA: talk to an engineer / request a demo (`#contact`).

## Visual

- **Base:** light, technical-minimal. White background, near-black ink, graphite grays.
- **One accent color:** industrial orange. Never add a second accent.
- **Typography:** wide bold uppercase display font (Unbounded) for headings; a clean sans for text. Body text never below 16px on mobile.
- **Signature elements** (from the reference): orange corner tick marks, a notched photo in the hero, cards with one 45° chamfered corner, tabs with an orange underline, an outline button in the nav.
- **Photos:** real-looking hardware, PCBs, sensors, machines, labs. Free-licensed (Pexels; Unsplash blocks automated downloads) until real photos arrive; every image is listed in `CREDITS.md`.
- **Forbidden:** stock people in suits / handshakes, gradient glows, purple-blue gradients, 3D blobs, generic icon grids, emoji as icons, colored left-border stripes on cards.

## Technical

- **Stack:** Astro (static output) + Tailwind CSS + TypeScript (strict).
- **Mobile first.** Most visitors open the link from WhatsApp on a phone.
- **Minimal JavaScript.** Plain `<script>` in Astro components only where needed (tabs, mobile menu, form). No React unless there's a clear reason.
- **Images** go through `astro:assets` (`<Image />` / `<Picture />`) with proper `alt` text in both languages.
- **Accessibility:** semantic HTML, visible focus states, keyboard-usable tabs, contrast AA minimum, `prefers-reduced-motion` respected.
- **Performance targets** (Lighthouse, mobile): Performance ≥ 95, Accessibility ≥ 95, SEO 100.
- **SEO:** each page has a title, description, canonical, hreflang (ro/en/x-default), Open Graph tags and JSON-LD (`Organization`, `LocalBusiness`, `Service`).
- Design tokens (colors, fonts, spacing) are defined once in `src/styles/global.css` (`@theme`). Don't use raw hex values in components.
