import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/greenport/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        news: "news.html",
      },
    },
  },
});
