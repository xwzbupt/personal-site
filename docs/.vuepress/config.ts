import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { viteBundler } from "@vuepress/bundler-vite";
import { execFileSync } from "node:child_process";

const getLastCommitTime = (): string => {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cI"], {
      cwd: process.cwd(),
      encoding: "utf8",
    }).trim();
  } catch {
    return "";
  }
};

export default defineUserConfig({
  lang: "zh-CN",
  title: "Weiser",
  description: "weiser的个人网站",
  bundler: viteBundler({
    viteOptions: {
      define: {
        __LAST_COMMIT_TIME__: JSON.stringify(getLastCommitTime()),
      },
    },
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
  ],

  theme,

  extendsPage: (page) => {
    // 假设你要让 posts 目录下的所有 md 页面都用 LayoutSlotDemo
    if (page.filePathRelative?.startsWith("trade/")) {
      page.frontmatter.layout = "LayoutSlotDemo";
    }
  },
});
