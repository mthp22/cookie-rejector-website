# Cookie Rejector Website

A modern, minimalist landing page for Cookie Rejector — a privacy-focused browser extension that automatically detects cookie consent banners and attempts to reject optional cookies.

## Overview

This is a statically-generated website built with [Astro](https://astro.build) and deployed to GitHub Pages. It features:

- Clean, spacious layout inspired by modern SaaS landing pages
- Responsive design (mobile, tablet, desktop)
- Accessible navigation with keyboard support
- Interactive FAQ accordion
- Product mockups built with HTML/CSS
- SEO-optimized with Open Graph and Twitter Card metadata
- Lightweight and fast — no JavaScript frameworks required

## Tech Stack

- **Astro** — Static site generation
- **HTML5 / CSS3** — Semantic markup and modern styling
- **Vanilla JavaScript** — Minimal interactive elements
- **GitHub Pages** — Static hosting
- **GitHub Actions** — Automated deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push to the `main` branch
2. The GitHub Actions workflow will build and deploy automatically
3. Your site will be available at `https://YOUR_USERNAME.github.io/cookie-rejector/`

#### Manual Deployment

You can also trigger a manual deployment:

1. Go to the **Actions** tab in your GitHub repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Configuration

### Base Path

The site is configured with a base path for GitHub Pages project repositories:

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/cookie-rejector',
  output: 'static'
});
```

Update `site` and `base` to match your GitHub username and repository name.

### Placeholders

Before publishing, replace these placeholders with actual URLs:

- Chrome Web Store link (in CTA section and footer)
- GitHub repository link (in footer)
- Canonical URL (in Layout.astro)

## Project Structure

```
cookie-rejector/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── public/
│   ├── favicon.svg           # SVG favicon
│   ├── robots.txt            # Search engine directives
│   └── sitemap.xml           # XML sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.astro      # Navigation bar
│   │   ├── Hero.astro        # Hero section
│   │   ├── Features.astro    # Feature cards
│   │   ├── HowItWorks.astro  # 3-step process
│   │   ├── ProductShowcase.astro # Extension mockup
│   │   ├── Privacy.astro     # Privacy section
│   │   ├── FAQ.astro         # FAQ accordion
│   │   ├── CTA.astro         # Final call to action
│   │   └── Footer.astro      # Footer
│   ├── layouts/
│   │   └── Layout.astro      # Base layout with head/SEO
│   └── pages/
│       └── index.astro       # Homepage
├── astro.config.mjs          # Astro configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary background | `#FFFFFF` | Main background |
| Secondary background | `#F7F8F6` | Alternate sections |
| Primary text | `#171A17` | Headings, body text |
| Secondary text | `#707770` | Descriptions, labels |
| Accent | `#A3E635` | Buttons, highlights |
| Dark green | `#365314` | Accent text |
| Border | `#E8ECE6` | Cards, dividers |

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

## Important Disclaimers

This website does not claim that Cookie Rejector:
- Blocks all cookies or trackers
- Prevents all online tracking
- Guarantees complete online privacy
- Works on every website

Cookie consent interfaces vary between websites. Automatic detection and rejection may not work on every site.

## License

Private — All rights reserved.
