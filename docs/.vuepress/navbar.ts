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
        text: "Java",
        icon: "java",
        link: "/language/Java/",
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
    text: "大数据技术",
    icon: "mysql",
    prefix: "/bigdata/",
    children: [
      {
        text: "技术概览",
        icon: "book",
        link: "/bigdata/",
      },
      {
        text: "Doris",
        icon: "mysql",
        link: "doris/",
      },
      {
        text: "Trino",
        icon: "mysql",
        link: "trino/",
      },
      {
        text: "Hive",
        icon: "group",
        link: "hive/",
      },
      {
        text: "Apache Ranger",
        icon: "people",
        link: "security/apache-ranger",
      },
      {
        text: "openLooKeng",
        icon: "rank",
        link: "query-engines/openlookeng",
      },
    ],
  },
  {
    text: "AI 大模型",
    icon: "creative",
    prefix: "/ai/",
    children: [
      {
        text: "技术概览",
        icon: "book",
        link: "/ai/",
      },
      {
        text: "大模型基础",
        icon: "creative",
        link: "llm/",
      },
      {
        text: "提示词工程",
        icon: "note",
        link: "prompt-engineering/",
      },
      {
        text: "RAG",
        icon: "rank",
        link: "rag/",
      },
      {
        text: "智能体 Agent",
        icon: "tool",
        link: "agents/",
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
    text: "交易",
    icon: "money",
    prefix: "/trade/",
    children: [
      {
        text: "交易基础",
        icon: "group",
        link: "basics/cheat",
      },
      {
        text: "技术指标",
        icon: "chart",
        link: "tech/MACD",
      },
      {
        text: "价格行为",
        icon: "trend",
        link: "price_action/learning-path",
      },
      {
        text: "交易基础课程",
        icon: "book",
        link: "trade-basics/elementary/single-K",
      },
      {
        text: "随风交易系统",
        icon: "wind",
        link: "right/foreword/first-lesson",
      },
      {
        text: "均线流",
        icon: "chart",
        link: "ema-flow/basics",
      },
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
