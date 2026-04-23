/**
 * vite.config.js - Vite build tool configuration
 * 
 * Configures Vite for development and production builds.
 * - React plugin enables JSX transformation
 * - Development server runs on port 3001
 * - Browser auto-opens on npm run dev
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites under /<repo-name>/
const GITHUB_PAGES_REPO = 'bjornohlsson-CV';
const isGitHubActionsBuild = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  // Use the repo subpath only for CI builds targeting GitHub Pages.
  base: isGitHubActionsBuild ? `/${GITHUB_PAGES_REPO}/` : '/',

  // Enable React plugin for JSX support
  plugins: [react()],
  
  // Development server configuration
  server: {
    port: 3001,      // Dev server runs on localhost:3001
    open: true       // Auto-open browser when dev server starts
  }
})
