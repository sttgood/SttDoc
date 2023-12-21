import { shikiPlugin } from "@vuepress/plugin-shiki";
import { defineUserConfig } from "vuepress";
import path from 'path'
import theme from "./theme.js";
import { mdEnhance } from "vuepress-theme-hope";


export default defineUserConfig({
  markdown:{
    headers:{
      level: [2, 3, 4, 5, 6],
    }
  },
  alias: {
    "@MyComponent": path.resolve(__dirname, "components/MyComponent.vue"),
  },
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "SttDoc",
      description: "资料查询文档",
    },
    "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
  },
  ///shiki高亮器。开启需要config.js 中plugins.prismjs: false
  plugins: [
    shikiPlugin({
      // 你的选项
      theme: "one-dark-pro",
    }),
  ],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});