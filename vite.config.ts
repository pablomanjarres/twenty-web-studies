import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: loadEnv(mode, ".", "SITE_").SITE_BASE || "/",
  server: { port: 5173, host: "127.0.0.1", strictPort: true },
}));
