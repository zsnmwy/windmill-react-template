import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: { entry: "src/main.tsx", formats: ["iife"], name: "app" },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
