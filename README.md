# Dmitrii Khodorkin - portfolio

One-page bilingual portfolio for a Senior Android Developer. The site is built with semantic HTML, CSS, a small amount of vanilla JavaScript and Vite.

## Local development

Requirements: Node.js 22+ and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal. The page supports English and Russian content, light and dark themes, keyboard navigation and responsive layouts.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. Do not commit this generated directory.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on every push to `main`.

Repository settings must use **GitHub Actions** as the Pages source:

1. Open **Settings -> Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Push to `main` or run the workflow manually.

Expected public URL: `https://khodorkin-dmitrii.github.io/`.

## Content and assets

- Project links point to the verified public repositories.
- Project media is copied from the corresponding local repositories and remains attributed to those projects.
- The direct CV file is intentionally not published because the current PDF contains personal contact details. The site links to LinkedIn for CV requests until a public-safe CV URL is provided.
