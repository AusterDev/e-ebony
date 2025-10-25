// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import cloudflare from '@astrojs/cloudflare';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    svelte(),
    clerk(),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["@prisma/client"],
    },
  },
  output: "server",
});
