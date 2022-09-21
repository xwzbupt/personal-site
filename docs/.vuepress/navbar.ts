import { navbar } from "vuepress-theme-hope";

export const navbarConfig = navbar([
  "/",
  "/home",
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
      },
      {
        text: "设计模式",
        icon: "repair",
        link: "design-patterns/",
      },
      {
        text: "面向对象",
        icon: "people",
        link: "OOP/OOP",
      },
      {
        text: "设计思想和原则",
        icon: "people",
        link: "design-principles/S",
      },
      {
        text: "分布式",
        icon: "snow",
        link: "distribute/CAP&BASE",
      },
    ],
  },
  {
    text: "语言",
    icon: "language",
    prefix: "/language/",
    children: [
      {
        text: "Java",
        icon: "java",
        link: "Java/"
      },
    ],
  },
  {
    text: "工具",
    icon: "tool",
    prefix: "/tools/",
    children: [
      {
        text: "git",
        icon: "git",
        link: "git"
      },
      {
        text: "linux命令",
        icon: "linux",
        link: "linux命令"
      },
    ],
  },
  {
    text: "项目",
    icon: "strong",
    prefix: "/project/",
    children: [
      {
        text: "lottery抽奖系统",
        icon: "group",
        link: "lottery/lottery-design-patterns"
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
