// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import cloudflare from '@astrojs/cloudflare';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
  integrations: [
    svelte(),
    clerk(),
  ],
  output: "server", 
});
