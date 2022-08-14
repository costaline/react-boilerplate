import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	root: './src',
	publicDir: '../public',

	build: {
		outDir: '../dist',
		emptyOutDir: true,
	},

	plugins: [
		eslint(),

		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: ['@emotion/babel-plugin'],
			},
		}),

		svgr(),
	],

	resolve: {
		alias: {
			'@@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},

	css: {
		devSourcemap: true,
	},
})
