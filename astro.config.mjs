// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import cloudflare from '@astrojs/cloudflare';
import clerk from '@clerk/astro';

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [
    svelte(),
    clerk({
      afterSignInUrl: '/',
      afterSignUpUrl: '/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["@prisma/client"],
      noExternal: ["@clerk/astro", "@clerk/backend"],
    },
  },
  output: "server",
});