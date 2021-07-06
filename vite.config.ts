import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },
  json: {
    // stringify: true
  },
  server: {
    port: 9527,
    open: true,
    https: false,
    hmr: true,
    proxy: {
      '/api': {
        target: 'https://ocs.sabertrain.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    target: 'esnext',
    sourcemap: false,
  },
})
