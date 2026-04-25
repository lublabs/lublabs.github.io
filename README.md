# LubLabs Astro Website Scaffold

This repository is scaffolded with Astro and includes markdown content collections for:

- `blog`
- `case-studies`

## Quick Start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

- `src/content/blog/*` -> blog posts in markdown
- `src/content/case-studies/*` -> case studies in markdown
- `src/content.config.ts` -> collection schemas and validation
- `src/pages/blog/*` -> blog listing and dynamic post pages
- `src/pages/case-studies/*` -> case-study listing and dynamic pages
- `src/layouts/BaseLayout.astro` -> shared layout
- `src/styles/global.css` -> base styles

## Existing Content Note

Your original markdown file exists at `case-studies/flyx-saas.md`.
A collection-ready version is now available at `src/content/case-studies/flyx-saas.md`.

## Deployment Targets

This scaffold outputs static files (`dist/`) and supports:

- GitHub Pages
- Kubernetes via any static file server container (for example, Nginx in a Helm chart)
