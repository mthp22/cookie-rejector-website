# Cookie Rejector Website

Landing page for [Cookie Rejector](https://microsoftedge.microsoft.com/addons/detail/cookie-rejector/cpibjkeeodccagflacomdgeajdeihaoc),
a free Microsoft Edge extension that detects cookie consent banners and attempts to reject
optional cookies.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Structure

```
src/
├── components/   # Page sections (Hero, Features, FAQ, …)
├── config.ts     # Store URL and other shared constants
├── layouts/      # Base layout with head, SEO and global styles
└── pages/        # index.astro — the single page
public/           # logo, robots.txt, sitemap.xml
```

The site is a single static page built with [Astro](https://astro.build). The `base`
path in `astro.config.mjs` matches the GitHub Pages project URL
(`https://mthp22.github.io/cookie-rejector-website/`); deployment runs through the
workflow in `.github/workflows/deploy.yml`.

## Claims

The site deliberately does not claim that the extension blocks all cookies, prevents
all online tracking, or works on every website. Consent interfaces vary between sites,
so automatic detection and rejection may not work everywhere.
