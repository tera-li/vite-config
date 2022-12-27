import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { env } from "node:process";
import autoprefixer from "autoprefixer";
import { viteZip } from "vite-plugin-zip-file";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
console.log(env.VITE_SOME_KEY);

export default defineConfig({
  // 公共路径，静态资源链接
  base: "./",
  plugins: [
    vue(),
    // 打包时压缩成.zip
    viteZip({
      folderPath: __dirname + "/dist",
      outPath: path.resolve(__dirname),
      zipName: "dist.zip",
      enabled: env.NODE_ENV === "production" ? true : false,
    }),
  ],
  resolve: {
    // 别名解析
    alias: {
      "~": __dirname,
    },
  },
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
});
