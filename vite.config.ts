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
    // 端口
    port: 9527,
    // 自动打开到默认浏览器
    open: true,
    // 使用https
    https: false,
    // 热更新
    hmr: true,
    // cors跨资源共享代理
    proxy: {
      '/api': {
        target: 'https://ocs.sabertrain.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 打包配置
  build: {
    assetsDir: 'assets',
    // 输出目录
    outDir: 'dist',
    target: 'esnext',
    // 是否输出源码map
    sourcemap: false,
  },
})
