import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { env } from "node:process";
import autoprefixer from "autoprefixer";
import { compression } from "vite-plugin-compression2";
import customPlugin from "./plugins/custom-plugin.js";
import htmlPlugin from "vite-plugin-html-config";

import { viteZip } from "vite-plugin-zip-file";
import path from "path";
import { fileURLToPath } from "url";
// 获取当前文件目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// 获取当前环境的配置.env
const config = loadEnv(env.NODE_ENV, "./");

// https://vitejs.dev/config/
export default defineConfig({
  // 公共路径，静态资源链接
  base: "./",
  // 插件
  plugins: [
    vue(),
    // 打包时压缩成.zip
    viteZip({
      folderPath: __dirname + "/dist",
      outPath: path.resolve(__dirname),
      zipName: "dist.zip",
      enabled: env.NODE_ENV === "production" ? true : false,
    }),
    // // gzip压缩
    compression({
      algorithm: "gzip",
      // 设置为true，删除源文件
      deleteOriginalAssets: false,
      threshold: 1000,
    }),
    // 自定义插件
    customPlugin(),
    // 动态生成html script
    htmlPlugin({
      headScripts: [
        {
          defer: true,
          src: "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.runtime.global.prod.min.js",
        },
      ],
    }),
  ],
  // 解析
  resolve: {
    // 别名解析
    alias: {
      "~": __dirname,
    },
  },
  // css处理
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          // 自动添加前缀，指定browsers浏览器版本
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
            "last 2 versions", // 所有主流浏览器最近2个版本
          ],
          grid: true,
        }),
      ],
    },
  },
  // 开发环境
  server: {
    // 端口
    port: 5173,
    // 自动打开到默认浏览器
    open: false,
    // 使用https
    https: false,
    // 热更新
    hmr: true,
    // cors跨资源共享代理
    proxy: {
      "/api": {
        target: "https://baidu.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // 打包
  build: {
    // 压缩模式
    minify: "esbuild",
    // 配置自定义底层的 Rollup 打包配置
    rollupOptions: {
      // 打包时跳过指定modules，引入的外部 externals
      external: ["vue"],
      // build 入口配置
      input: {
        //可以配置多个，表示多入口
        index: path.resolve(__dirname, "index.html"),
        project: path.resolve(__dirname, "custom.html"),
      },
      output: {
        // chunkFileNames:'[name]-[hash].js',
        // entryFileNames:"[name]-[hash].js",
      },
    },
  },
  // 依赖构建优化
  optimizeDeps: {
    include: ["vue"],
  },
});
console.log(__dirname);
