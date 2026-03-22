import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages project site: nazhdache4ka.github.io/portfolio/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/portfolio/' : '/',
}))
