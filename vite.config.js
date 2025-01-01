import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*gltf'],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
    // base: process.env.NODE_ENV === 'production' ? '/parallax-eportfolio/' : '/',
    base: '/parallax-eportfolio/',  
    server: {
    host: '0.0.0.0',
    port: 5173,
  }
})
