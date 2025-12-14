import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path for GitHub Pages
// If the repo name is "Lexorbital-lab-wouter", GitHub Pages will serve it from /Lexorbital-lab-wouter/
const repoName = 'Lexorbital-lab-wouter'
const base = process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/'

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
  ],
})
