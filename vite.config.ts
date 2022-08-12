import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  publicDir: '../public',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

  plugins: [
    react(
      {
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin']
        }
      }
    ),

    svgr(),
  ],

  resolve: {
    alias: {
      '@@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  css: {
    devSourcemap: true
  }
})
