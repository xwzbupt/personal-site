import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/home",
  "/slide",
  {
    text: "如何使用",
    icon: "creative",
    prefix: "/guide/",
    link: "/guide/",
    children: "structure",
  },
  {
    text: "文章",
    icon: "note",
    collapsable: true,
    prefix: "/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        children: ["article1", "article2", "article3", "article4"],
      },
      {
        text: "文章 5-12",
        icon: "note",
        children: [
          {
            text: "文章 5-8",
            icon: "note",
            collapsable: true,
            prefix: "article/",
            children: ["article5", "article6", "article7", "article8"],
          },
          {
            text: "文章 9-12",
            icon: "note",
            children: ["article9", "article10", "article11", "article12"],
          },
        ],
      },
    ],
  },
  {
    text: "算法",
    icon: "note",
    prefix: "/algorithm/",
    collapsable: true,
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
    ]
  },
  {
    text: "MySQL",
    icon: "note",
    prefix: "/MySQL/",
    collapsable: true,
    children: [
      {
        text: "基础篇",
        icon: "note",
        collapsable: true,
        prefix: "基础篇/",
        children: 
        [
          "基础架构-SQL查询语句的执行", 
          "日志系统-SQL更新语句的执行", 
          "article4"],
      },
      // {
      //   text: "实践篇",
      //   icon: "note",
      //   collapsable: true,
      //   prefix: "article/",
      //   children: ["article1", "article2", "article3", "article4"],
      // },
    ],
  }
]);
