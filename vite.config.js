import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: "/sportstracker/", // Change this to your GitHub repo name!
  build: {
    outDir: "dist" // GitHub Pages expects the output here
  }
});