# Rock Your Data

Marketing website for [Rock Your Data](https://rockyourdata.cloud) — a modern cloud analytics consulting company in North America.

Built with **Astro** + **Tailwind CSS v4**, deployed as a static site to **GitHub Pages**.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs static site to ./dist
npm run preview    # preview the production build locally
```

## Deploy

Pushing to `main` builds and deploys automatically via GitHub Actions
(`.github/workflows/deploy.yml`). The custom domain is configured through
`public/CNAME`.

See [CLAUDE.md](./CLAUDE.md) for architecture and conventions.
