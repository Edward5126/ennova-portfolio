// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server", // Cloudflare requiere output 'server' o 'hybrid'
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true,
  },
});
