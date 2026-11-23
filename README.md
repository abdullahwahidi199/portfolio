# Alex Rivera Portfolio

Single-page React, TypeScript, Tailwind CSS, and Framer Motion portfolio.

## Run locally

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and creates the production site in `dist/`. `npm run lint` runs Oxlint.

## Update content

All on-page copy and portfolio data live in `src/content/site-content.ts`. Replace the supplied placeholder profile details and `#` project links there. The CV picker downloads either `src/assets/Abdullah_Wahidi_ATS_Resume.pdf` (ATS CV) or `src/assets/CV.pdf` (Standard CV). Replace those PDFs to update the downloads; Vite includes them in the production build. Add `public/avatar.jpg` and optional `public/projects/<slug>.png` files when available. Until then, the page displays initials and theme-aware project gradients.
