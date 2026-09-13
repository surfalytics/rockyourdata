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
    // NOTE: legacy URLs that end in `.html` are NOT listed here. Astro's static
    // redirects emit `<url>/index.html`, so `/foo.html` becomes a *directory*
    // named `foo.html`, which GitHub Pages does not serve at `/foo.html`.
    // Those live as real files in `public/` instead. See public/surfalytics/.
    '/pages/about/': '/about/',
    '/pages/contact/': '/contact/',
    // Pre-Jekyll URL still getting inbound traffic (404 in Search Console).
    '/contact-us/': '/contact/',
    // Service slugs were renamed when the offering was restructured.
    '/services/modern-data-stack/': '/services/data-platforms/',
    '/services/team-development/': '/services/data-teams/',
    '/services/analytics-audit/': '/services/',
    '/services/certified-experts/': '/services/',
    // Renamed when the AI offering was split out into its own page.
    '/services/ai-engineering/': '/services/ai-data-engineering/',
    // Careers pages were blended into the Data Academy page.
    '/data-analyst/': '/data-academy/',
    '/career-track/': '/data-academy/',
  },
});
