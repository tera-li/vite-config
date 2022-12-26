import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
console.log(process.env.NODE_ENV);
console.log(process.env.VITE_SOME_KEY);

export default defineConfig({
  // 公共路径，静态资源链接
  base: "./",
  plugins: [vue()],
});
