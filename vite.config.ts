import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import vercel from 'vite-plugin-vercel'
import { viteEnv } from 'vite-plugin-single-spa/ex'

let base = 'http://localhost:3004'
if (viteEnv.built) base = 'https://hype-client.vercel.app'

// https://vitejs.dev/config/
export default defineConfig({
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
  base: base
})
