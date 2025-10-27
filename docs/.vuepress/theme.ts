import { hopeTheme } from "vuepress-theme-hope";
import { navbarConfig } from "./navbar";
import { sidebarConfig } from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Weiser",
    url: "https://github.com/xwzbupt",
  },

  logo: "/logo.png",

  //删除个人网站的仓库链接按钮，防止有人进入窃取我的文章。
  // repo: "xwzbupt/personal-site",

  docsDir: "docs/",

  // navbar
  navbar: navbarConfig,

  // sidebar
  sidebar: sidebarConfig,

  footer: "默认页脚",

  displayFooter: true,

  darkmode: "switch",

  markdown: {
    alert: true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    math: true,
    mark: true,
    preview: true,
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
      themes: [
        "auto",
        "beige",
        "black",
        "blood",
        "league",
        "moon",
        "night",
        "serif",
        "simple",
        "sky",
        "solarized",
        "white",
      ],
    },
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({
          tag,
        }): {
          tag: string;
          attrs: Record<string, string>;
          content: string;
        } | void => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    highlighter: {
      type: "shiki",
      lineNumbers: 15,
      collapsedLines: 20,
      notationDiff: true,
      notationErrorLevel: true,
      notationFocus: true,
      notationHighlight: true,
      // notationWordHighlight: true,
      whitespace: true,
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
      twoslash: {
        twoslashOptions: {
          compilerOptions: {
            moduleResolution: /* bundler */ 100,
          },
        },
      },
    },

    chartjs: true,
    demo: true,
    echarts: true,
    flowchart: true,
    kotlinPlayground: true,
    markmap: true,
    mermaid: true,
    plantuml: true,
    playground: {
      presets: ["ts", "vue", "unocss"],
    },
    sandpack: true,
    vuePlayground: true,
  },

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word"],
  blog: {
    description: "一个不断学习的人",
    intro: "/intro.html",
    avatar: "/640.png",
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:xwze@bupt.cn",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/xwzbupt",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://exampl.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1134685563&site=qq&menu=yes",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      Wechat: "/general/wechat",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/about/cv": ["weiser-cv"],
      "/language/Java": ["weiser-java"],
      "/trade/basics/xauusd.html": ["xauusd"],
      "/trade/right": ["weiser-heyuan"],
      "/trade/trade-basics": ["weiser-heyuan"],
    },
  },

  plugins: {
    blog: {

    },
    comment: {
      provider: "Giscus",
      repo: "xwzbupt/personal-site-comment",
      repoId: "R_kgDOHdLpkQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHdLpkc4CPfmK",
    },
    watermark: {
      enabled: (page) => !!page.filePathRelative && page.filePathRelative.startsWith("trade/"),
      watermarkOptions: {
        // 文档：https://zhensherlock.github.io/watermark-js-plus/zh/config/
        content: "weiser",
        width: 200,
        height: 200,
        movable: true,
        rotate: -30,
        globalAlpha: 0.4,
        color: "rgba(0,0,0,0.15)",
        fontSize: 16,
        zIndex: 1000,
      },
    },

  },

  fullscreen: true, // ✅ 启用全宽模式
  //侧边栏热更新
  // hotReload: true
});