import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://laifix.com',
  integrations: [sitemap()],
  // Toto vypne tú lištu, ktorá spôsobuje chybu a11y.js
  devToolbar: {
    enabled: false
  },
  vite: {
    optimizeDeps: {
      exclude: ['axobject-query', 'aria-query']
    }
  }
});