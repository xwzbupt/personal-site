import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Weiser",
  description: "vuepress-theme-hope 的演示",

  //如果是使用gh-pages布署，base应该用仓库名
  //base: "/personal-site/",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  theme,
});
