import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo under /cookie-rejector-website/, so production
// builds need the base path. The dev server keeps serving from the root, at
// http://localhost:4321/.
const isDev = process.argv.includes('dev');

export default defineConfig({
  site: 'https://mthp22.github.io',
  base: '/cookie-rejector-website',
  output: 'static',
});
