// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://synapsetech.ro', // keep in sync with src/config/site.ts

  // One small stylesheet: inline it so the first paint doesn't wait for a second request.
  build: { inlineStylesheets: 'always' },

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
      filter: (page) => !page.includes('/preview') && !page.includes('/og/'),
      i18n: { defaultLocale: 'ro', locales: { ro: 'ro', en: 'en' } },
    }),
  ]
});