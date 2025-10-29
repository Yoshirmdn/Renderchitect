import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  css: {
    // Matikan lightningcss bawaan Vite agar tidak nyangkut di Vercel
    transformer: "postcss",
  },
  build: {
    rollupOptions: {
      external: ["vite/modulepreload-polyfill"],
    },
  },
  optimizeDeps: {
    exclude: ["vite/modulepreload-polyfill"],
  },
});
