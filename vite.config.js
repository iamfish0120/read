import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postCssPxToRem from 'postcss-pxtorem'
import path from 'path'

// https://vitejs.dev/config/
const usePxtovw = postCssPxToRem({
  rootValue:100,
  propList:['*'],
})
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [usePxtovw],
      
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
