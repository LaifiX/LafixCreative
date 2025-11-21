// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // SEM NAPÍŠ SVOJU DOMÉNU (bez lomky na konci)
  // Napr.: 'https://peterbeno.sk' alebo 'https://moje-portfolio.netlify.app'
  site: 'https://laifix.com', 

  integrations: [sitemap()],
});