import { fileURLToPath, URL } from 'node:url'

import { configDefaults, defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import vercel from 'vite-plugin-vercel'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let base = 'http://localhost:3004'
  if (command === 'build') base = 'https://hype-client.vercel.app'
  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => ['spline-viewer'].includes(tag)
          }
        }
      }),
      vitePluginSingleSpa({
        type: 'mife',
        serverPort: 3004
      }),
      vercel()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      postcss: {
        plugins: [tailwindcss]
      }
    },
    server: {
      hmr: false
    },
    base: base,
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  }
})
