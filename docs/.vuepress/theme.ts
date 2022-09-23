import { hopeTheme } from "vuepress-theme-hope";
import {navbarConfig} from "./navbar";
import {sidebarConfig} from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Weiser",
    url: "https://github.com/xwzbupt",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "xwzbupt/personal-site",

  docsDir: "docs/",

  // navbar
  navbar: navbarConfig,

  // sidebar
  sidebar: sidebarConfig,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

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
      Email: "xwze@bupt.cn",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/xwzbupt",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
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
      Wechat: "general/wechat",
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
      "/language/Java": ["weiser-java"]
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
  },

});
