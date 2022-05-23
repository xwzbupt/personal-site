import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "算法",
    icon: "rank",
    prefix: "/algorithm/",
    children: [
      "1.整数专题",
      "2.数组专题",
      "3.字符串专题",
      "4.链表专题",
      "5.哈希专题",
      "6.栈专题",
      "7.队列专题",
      "8.二叉树专题",
      "9.堆专题",
      "10.前缀树专题",
      "11.二分专题",
      "12.排序专题",
      "13.回溯法专题",
      "14.动态规划专题",
      "15.图",
      "16.模拟",
      "17.笔试题"
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
  {
    text: "简历",
    icon: "note",
    link: "/cv/cv.md",
  },
]);
