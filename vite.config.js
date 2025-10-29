import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  css: {
    lightningcss: false, // ⚡ nonaktifkan lightningcss biar aman di Vercel
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
