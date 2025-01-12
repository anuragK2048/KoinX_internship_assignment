import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  plugins: [react()],
});
