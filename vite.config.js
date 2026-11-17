
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/art-explorer/",
  plugins: [react()],
  server: {
    proxy: {
      "/museum-api": {
        target: "https://collectionapi.metmuseum.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/museum-api/, ""),
      },
    },
  },
});

