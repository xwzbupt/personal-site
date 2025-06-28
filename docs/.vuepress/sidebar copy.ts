import { sidebar } from "vuepress-theme-hope";

export const sidebarConfig = sidebar({
  "/basics/": [
    {
      prefix: "algorithm/",
      text: "算法",
      icon: "creative",
      collapsible: true,
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
      collapsible: true,
      children: [
        {
          text: "面试篇",
          collapsible: true,
          prefix: "interview/",
          children:
            [
              "1_架构",
              "2_日志",
              "3_索引",
              "4_事务",
              "5_锁",
              "6_优化"
            ],
        },
        {
          text: "基础篇",
          collapsible: true,
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
          collapsible: true,
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
      prefix: "OOP",
      text: "面向对象",
      icon: "repair",
      collapsible: true,
      children: [
        "OOP",
        "封装-抽象-继承-多态",
        "面向对象的优势",
        "接口-抽象类",
        "基于接口而非基于实现编程",
        "多用组合少用继承",
        "实战一：贫血和充血模型",
        "实战二：接口鉴权",
      ],
    },
    {
      prefix: "distribute",
      text: "分布式",
      icon: "snow",
      collapsible: true,
      children: [
        "CAP&BASE.md",
        "2阶段和3阶段提交.md",
        "Paxos.md",
        "Raft.md",
        "一致性哈希.md",
        "分布式事务.md",
      ],
    },
    {
      prefix: "design-principles",
      text: "设计原则和思想",
      icon: "repair",
      collapsible: true,
      children: [
        "S",
        "O",
        "L",
        "I",
        "D",
        "KISS-YAGNI",
        "DRY",
        "LOD",
        "实战一",
        "实战二",
      ],
    },
    {
      prefix: "design-patterns",
      text: "设计模式",
      icon: "repair",
      collapsible: true,
      children: [
        "",
        {
          text: "创建者模式",
          collapsible: true,
          prefix: "creational-patterns/",
          children:
            [
              "",
              "singleton",
              "factory-method",
              "builder",
              "prototype"
            ],
        },
        {
          text: "结构型模式",
          collapsible: true,
          prefix: "structural-patterns/",
          children:
            [
              "",
              "Proxy",
              "Bridge",
              "Decorator",
              "Adapter",
              "Facade",
              "Composite",
              "Flyweight"
            ],
        },
        {
          text: "行为型模式",
          collapsible: true,
          prefix: "behavioral-patterns/",
          children:
            [
              "",
              "Observer",
              "Template-method",
              "Strategy",
              "Chain-Of-Responsibility",
              "State",
              "Iterator",
              "Visitor",
              "Memento",
              "Command",
              "Interpreter",
              "Mediator"
            ],
        },
      ],
    },
  ],
  "/language/Java": [
    {
      prefix: "/",
      text: "Java",
      icon: "java",
      collapsible: true,
      children: [
        "",
        {
          text: "Java基础",
          collapsible: true,
          prefix: "basics/",
          children: [
            {
              prefix: "grammar/",
              text: "Java语法",
              collapsible: true,
              children: [
                "1.program",
                "2.基础语法",
                "3.引用",
                "4.基本类型",
                "5.bit",
                "6.float",
                "7.character",
                "8.String",
                "9.class",
                "10.keyWords"
              ]
            },
            {
              prefix: "container/",
              text: "容器",
              collapsible: true,
              children: [
                "11.container",
                "12.tool",
                "13.HashMap1",
                "15.LinkedHashMap",
                "16.Iterator",
              ]
            },
            {
              prefix: "exception/",
              text: "异常",
              collapsible: true,
              children: [
                "17.exception",
                "18.exception",
              ]
            },
            {
              prefix: "io/",
              text: "IO",
              collapsible: true,
              children: [
                "19.io",
                "20.nio",
                "21.高速io",
                "22.高速io",
              ]
            },
            {
              prefix: "generic/",
              text: "泛型",
              collapsible: true,
              children: [
                "23.generic"
              ]
            },
            {
              prefix: "code/",
              text: "动态与函数式编程",
              collapsible: true,
              children: [
                "24.reflection",
                "25.annotation",
                "26.dynamic-proxy",
                "27.lamda",
              ]
            }
          ]
        },
        {
          text: "Java多线程",
          collapsible: true,
          prefix: "multithreading/",
          children: [
            {
              prefix: "basic/",
              text: "基础理论",
              collapsible: true,
              children: [
                "thread",
                "JMM",
                "thread-safe"
              ]
            },
            {
              prefix: "lock/",
              text: "互斥锁",
              collapsible: true,
              children: [
                "Synchronized",
                "lock",
                "deadlock"
              ]
            },
            {
              prefix: "lockless/",
              text: "无锁编程",
              collapsible: true,
              children: [
                "CAS",
                "Atomic",
                "LongAdder",
                "ThreadLocal"
              ]
            },
            {
              prefix: "sync-tool/",
              text: "同步工具类",
              collapsible: true,
              children: [
                "conditionalVariable",
                "Semaphore",
                "Latch-Barrier",
              ]
            },
            {
              prefix: "current-container/",
              text: "并发容器",
              collapsible: true,
              children: [
                "currentContainer",
                "CopyOnWrite",
                "block-wait",
                "ConcurrentHashMap"
              ]
            },
            {
              prefix: "thread-manage/",
              text: "线程管理",
              collapsible: true,
              children: [
                "thread-state",
                "thread-interrupt",
                "threadpool",
                "executor"
              ]
            },
          ]
        },
        {
          text: "JVM",
          collapsible: true,
          prefix: "JVM/",
          children: [
            {
              prefix: "compile/",
              text: "编译执行",
              collapsible: true,
              children: [
                "summary",
                "JIT"
              ]
            },
          ]
        },
      ],
    },
  ],
  // "/project/": [
  //   {
  //     prefix: "lottery/",
  //     text: "lottery",
  //     icon: "java",
  //     collapsable: true,
  //     children: [
  //       "lottery-design-patterns",
  //       // {
  //       //   text: "lottery中的设计模式",
  //       //   collapsable: true,
  //       //   prefix: "basics/",
  //       //   children: [
  //       //     {
  //       //       prefix: "code/",
  //       //       text: "动态与函数式编程",
  //       //       collapsable: true,
  //       //       children: [
  //       //         "24.reflection",
  //       //         "25.annotation",
  //       //         "26.dynamic-proxy",
  //       //         "27.lamda",
  //       //       ]
  //       //     }
  //       //   ]
  //       // },
  //     ],
  //   },
  // ]

});
