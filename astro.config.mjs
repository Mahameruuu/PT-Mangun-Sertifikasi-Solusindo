// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://glorystore.online',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
