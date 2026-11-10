import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  resolve: {
    alias: {
      $lib: resolve("./src/lib"),
    },
  },
  css: {
    // Map compiled CSS back to source files in the dev server's devtools.
    devSourcemap: true,
  },
});
