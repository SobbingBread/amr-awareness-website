import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Served from a GitHub Pages project site at /amr-awareness-website/, and the
// production build is emitted to docs/ so Pages can serve it directly.
export default defineConfig({
  base: '/amr-awareness-website/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
