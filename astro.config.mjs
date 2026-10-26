import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://almighty-23.github.io',
  base: isGitHubPages ? '/Lan_Almighty' : '/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
