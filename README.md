# addikala.com

Minimal personal site built with [Astro](https://astro.build).

```bash
npm install      # once
npm run dev      # local dev server
npm run build    # static build → dist/
```

Deploys to GitHub Pages automatically on push to `main`
(see `.github/workflows/deploy.yml`). Repo **Settings → Pages → Source**
must be set to **GitHub Actions**.

## Editing

- **Content** — everything is in `src/content/site.md`: bio (Markdown body),
  links, publications, experience, and the search/link-preview metadata (`seo`).
- **Paper thumbnails** — inline SVGs in `src/thumbs/`, referenced by `thumb:`.
- **Portrait** — `public/portrait.jpg` (also used as the link-preview image).
- **Styles** — `src/styles/global.css`.

## Analytics

Google Analytics 4. Create a property at <https://analytics.google.com>
(Admin → Create → Property, then add a **Web** data stream for
`https://www.addikala.com`), copy its Measurement ID (`G-…`), and paste it into
`src/config.ts`. The tag only loads in production builds, so local dev visits
aren't counted. Leave the ID empty to ship without analytics.
