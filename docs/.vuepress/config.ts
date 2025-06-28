import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Weiser",
  description: "weiser的个人网站",
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  //如果是使用gh-pages布署，base应该用仓库名
  //base: "/personal-site/",
  // 如果你使用了自定义域名，必须是 /
  base: "/",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  theme,
});
