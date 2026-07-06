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
    },
    build: {
      // Minifier v Astro 7 inak prepisuje media queries na range syntax
      // (width>=768px), ktorú staršie prehliadače (Safari <16.4, Chrome <104,
      // Firefox <102) ignorujú — celé responzívne štýly by prestali platiť.
      cssTarget: ['chrome90', 'edge90', 'firefox88', 'safari14']
    }
  }
});