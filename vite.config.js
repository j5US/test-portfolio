import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test-portfolio/',
  // Add 404 handling for SPA
  server: {
    history: {
      pushState: true
    }
  }
})
