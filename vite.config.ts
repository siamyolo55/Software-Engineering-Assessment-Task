/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const defaultConfig = {
	plugins: [vue()],
	resolve: {
		alias: {
			'@/': `${path.resolve(__dirname, 'src')}/`,
			inferno: 'inferno/dist/index.dev.esm.js',
			/*
			 * @reason: https://supportcenter.devexpress.com/ticket/details/t1054272/vue3-react-vite-rollup-devextreme-fails-in-production-because-some-modules-do-not-pass/
			 */
			'devextreme/ui': 'devextreme/esm/ui',
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
  @import "./src/styles/_variables.scss";
  @import "./src/styles/_mixins.scss";
`,
			},
		},
	},
	server: {
		proxy: {
			'^/api/.*': {
				target: 'http://23.94.211.99:8090', // TODO: Update the api
				changeOrigin: true,
				secure: false,
				ws: true,
				// rewrite: (path: string) => path.replace(/^\/api/, ''),
			},
		},
		cors: true,
	},
}

export default defineConfig(({ command }) => {
	if (command === 'build') {
		return {
			// build specific config
			...defaultConfig,
			esbuild: {
				drop: ['console', 'debugger'],
			},
			define: {
				'process.env': process.env,
				'process.platform': process.platform,
			},
			bulid: {
				minify: 'terser', // <-- add
				terserOptions: {
					compress: {
						drop_console: true,
						drop_debugger: true,
					},
				},
			},
		}
	} else {
		// dev | test
		return {
			// dev specific config
			...defaultConfig,
			define: {
				'process.env': process.env,
			},
			test: {
				exclude: [...configDefaults.exclude, 'static'],
				globals: true,
			},
		}
	}
})
