import { fileURLToPath, URL } from "node:url";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/main.ts"),
      plugins: [cssInjectedByJsPlugin()],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
