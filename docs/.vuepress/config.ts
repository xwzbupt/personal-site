import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { commentPlugin } from "vuepress-plugin-comment2";
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

  plugins: [
    commentPlugin({
      provider: "Giscus",
      repo: "xwzbupt/personal-site-comment",
      repoId: "R_kgDOHdLpkQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHdLpkc4CPfmK",
    }),

    mdEnhancePlugin({
      // 启用自定义容器
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    }),
  ],
});
