// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // placeholder, keep in sync with src/config/site.ts

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    locales: ['ro', 'en'],
    defaultLocale: 'ro',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ro', locales: { ro: 'ro', en: 'en' } },
    }),
  ]
});