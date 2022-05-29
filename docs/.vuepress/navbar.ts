import { navbar } from "vuepress-theme-hope";

export const navbarConfig = navbar([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "计算机基础",
    icon: "rank",
    prefix: "/basics/",
    children: [
      {
        text: "算法",
        icon: "rank",
        link: "algorithm/"
      },
      {
        text: "MySQL数据库",
        icon: "mysql",
        link: "MySQL/",
      }
    ],
  },
  {
    text: "工具",
    icon: "rool",
    prefix: "/tools/",
    children: [
      {
        text: "git",
        icon: "git",
        link: "git"
      },
    ],
  },
  {
    text: "面向招聘",
    icon: "strong",
    prefix: "/recruitment/",
    children: [
      {
        text: "校招",
        icon: "group",
        link: "campus/tipsFromBYRForum"
      },
      {
        text: "社招",
        icon: "mysql",
        link: "/",
      }
    ],
  },
  {
    text: "关于",
    icon: "info",
    prefix: "/about/",
    children: [
      {
        text: "简历",
        icon: "blog",
        link: "cv",
      },
      {
        text: "关于本站",
        icon: "info",
        link: "guide",
      }
    ],
  },
]);
