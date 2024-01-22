import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pxtovw from 'postcss-px-to-viewport'
import path from 'path'

// https://vitejs.dev/config/
const usePxtovw = pxtovw({
  viewportWidth: 375,
  viewportUnit: 'vw'
})
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [usePxtovw]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"), // @代替src
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/ll_activity': {
        target: 'http://h5.66shouyou.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
})
