import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { createHtmlPlugin } from 'vite-plugin-html'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
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

    createHtmlPlugin({
      entry: '/src/main.tsx',
      template: 'public/index.html',
    })
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
