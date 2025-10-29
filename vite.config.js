import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  css: {
    lightningcss: false,
  },
  build: {
    rollupOptions: {
      external: ["vite/modulepreload-polyfill"],
    },
  },
  optimizeDeps: {
    exclude: ["vite/modulepreload-polyfill"],
  },
  // Tambahan ini penting untuk Vercel (Linux)
  resolve: {
    alias: {
      rollup: "rollup/dist/es/shared/node-entry.js",
    },
  },
});
