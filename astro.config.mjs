// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rockyourdata.cloud',
  // No `base`: the site is served at the root of a custom domain (CNAME).
  // Setting a base path would break every asset URL on GitHub Pages.
  output: 'static',
  integrations: [sitemap()],
  // Tailwind v4 is wired in via PostCSS (postcss.config.mjs) for compatibility
  // with Astro 6's rolldown-powered Vite.
  // Preserve the single legacy GitBook permalink so existing inbound links
  // (and search-engine results) don't 404 after the migration.
  redirects: {
    '/surfalytics/2023-06-04-introduction.html': '/blog/introduction/',
    '/pages/about/': '/about/',
    '/pages/contact/': '/contact/',
  },
});
