import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // Add this to fix React Router 404 on refresh
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
});

