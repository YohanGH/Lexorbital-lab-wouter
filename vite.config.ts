import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'fs'
import { join } from 'path'

// Base path: use relative paths for maximum compatibility
// This works both on custom domains (served at root) and GitHub Pages Project Pages
// Vite will generate relative asset paths (./assets/...) instead of absolute paths
const base = './'

// Plugin to create 404.html for GitHub Pages SPA routing
// GitHub Pages serves 404.html for any route that doesn't exist
// By copying index.html to 404.html, we ensure the SPA handles all routes
const githubPages404Plugin = () => {
  return {
    name: 'github-pages-404',
    closeBundle() {
      if (process.env.NODE_ENV === 'production') {
        const distPath = join(process.cwd(), 'dist')
        const indexPath = join(distPath, 'index.html')
        const notFoundPath = join(distPath, '404.html')
        
        try {
          // Simply copy index.html to 404.html
          // When GitHub Pages can't find a route, it serves 404.html
          // which will load our React app and Wouter will handle the routing
          copyFileSync(indexPath, notFoundPath)
          console.log('✅ Created 404.html for GitHub Pages SPA routing')
        } catch (error) {
          console.error('❌ Error creating 404.html:', error)
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
    githubPages404Plugin(),
  ],
})
