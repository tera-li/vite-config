import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { env } from "node:process";

import { viteZip } from "vite-plugin-zip-file";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/

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
});
