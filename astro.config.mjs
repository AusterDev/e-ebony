// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import node from "@astrojs/node";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },
  adapter: node({
    mode: "standalone",
  }),
  integrations: [svelte(), clerk(),
    {
      name: "background-tasks",
      hooks: {
        "astro:server:start": async () => {
          const { startTasksLoop } = await import("./src/lib/tasks.ts");
          // @ts-ignore
          if (!globalThis.__tasksStarted) {
            // @ts-ignore
            globalThis.__tasksStarted = true;
            startTasksLoop();
            console.log("✅ Background TaskCycle started (astro:server:start)");
          }
        },
      },
    },
  ],
  output: "server"
});