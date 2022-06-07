import { sidebar } from "vuepress-theme-hope";

export const sidebarConfig = sidebar({
  "/basics/": [
    {
      prefix: "algorithm/",
      text: "算法",
      icon: "creative",
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
      ],
    },
    {
      prefix: "MySQL/",
      text: "MySQL",
      icon: "mysql",
      collapsable: true,
      children: [
        {
          text: "基础篇",
          collapsable: true,
          prefix: "基础篇/",
          children: 
          [
            "1基础架构-SQL查询语句的执行", 
            "2日志系统-SQL更新语句的执行", 
            "3事务隔离",
            "4索引（上）",
            "5索引（下）",
            "6全局锁和表锁",
            "7行锁",
            "8事务到底是隔离的还是不隔离的"
          ],
        },
        {
          text: "实践篇",
          collapsable: true,
          prefix: "实践篇/",
          children: 
          [
            "9普通索引和唯一索引的选择", 
            "10为什么有时会选错索引", 
            "11给字符串加字段索引", 
            "12为什么我的MySQL会抖一下", 
            "13表数据删掉一半，为什么表文件大小不变", 
          ],
        },
      ],
    },
    {
      prefix: "design-patterns",
      text: "设计模式",
      icon: "repair",
      collapsable: true,
      children: [
        {
          text: "创建者模式",
          collapsable: true,
          prefix: "creational-patterns/",
          children: 
          [
            "singleton", 
            "factory-method", 
          ],
        },
        // {
        //   text: "实践篇",
        //   icon: "note",
        //   collapsable: true,
        //   prefix: "实践篇/",
        //   children: 
        //   [
        //     "9普通索引和唯一索引的选择", 
        //     "10为什么有时会选错索引", 
        //     "11给字符串加字段索引", 
        //     "12为什么我的MySQL会抖一下", 
        //     "13表数据删掉一半，为什么表文件大小不变", 
        //   ],
        // },
      ],
    }
  ],

  // "/basics/MySQL/": [
  //   {
  //     text: "MySQL",
  //     icon: "mysql",
  //     collapsable: true,
  //     children: [
  //       {
  //         text: "基础篇",
  //         icon: "note",
  //         collapsable: true,
  //         prefix: "基础篇/",
  //         children: 
  //         [
  //           "1基础架构-SQL查询语句的执行", 
  //           "2日志系统-SQL更新语句的执行", 
  //           "3事务隔离",
  //           "4索引（上）",
  //           "5索引（下）",
  //           "6全局锁和表锁",
  //           "7行锁",
  //           "8事务到底是隔离的还是不隔离的"
  //         ],
  //       },
  //       {
  //         text: "实践篇",
  //         icon: "note",
  //         collapsable: true,
  //         prefix: "实践篇/",
  //         children: 
  //         [
  //           "9普通索引和唯一索引的选择", 
  //           "10为什么有时会选错索引", 
  //           "11给字符串加字段索引", 
  //           "12为什么我的MySQL会抖一下", 
  //           "13表数据删掉一半，为什么表文件大小不变", 
  //         ],
  //       },
  //     ],
  //   }
  // ],
});
