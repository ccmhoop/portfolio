import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        navigateFallback: '/portfolio/index.html',
        navigateFallbackDenylist: [
          /^\/portfolio\/api\//,
          /^\/portfolio\/assets\//
        ],
      },
    }),
  ],
});
