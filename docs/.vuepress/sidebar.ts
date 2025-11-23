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
  "/trade/": [
    {
      prefix: "basics/",
      text: "交易基础",
      icon: "repair",
      collapsible: true,
      children: [
        "shinianyimeng",
        "trading-mindset",
        "trading-management",
        "compare",
        "xauusd",
        "news",
        "options",
        "3pan",
      ]
    },
    {
      prefix: "tech/",
      text: "技术指标",
      icon: "repair",
      collapsible: true,
      children: [
        "MACD",
        "Fibonacci",
        "EMA",
        "Bolling",
      ]
    },
    {
      prefix: "price_action/",
      text: "价格行为",
      icon: "repair",
      collapsible: true,
      children: [
        "learning-path",
        "K",
        "key-position",
        "bull-bear-power",
        {
          text: "突破交易",
          icon: "note",
          prefix: "breakout/",
          collapsible: true,
          children: [
            "fake-breakout",
            "real-breakout",
            "2nd-leg-trap",
            "breakout-test",
          ],
        },
        {
          text: "缺口",
          icon: "note",
          prefix: "gap/",
          collapsible: true,
          children: [
            "gap-basic",
          ],
        },
      ]
    },
    {
      prefix: "tools/",
      text: "交易工具",
      icon: "tool",
      collapsible: true,
      children: [
        "ali-ac",
      ]
    },
    {
      prefix: "trade-basics/",
      text: "交易基础课程",
      icon: "tool",
      collapsible: true,
      children: [
        {
          text: "初级",
          icon: "note",
          prefix: "elementary/",
          collapsible: true,
          children: [
            "single-K",
            "multi-K",
            "maintain-instruction",
            "maintain-instruction-enhance",
            "reserve",
            "relationship",
            "qushi",
            "dao"
          ],
        },
        {
          text: "中级",
          icon: "note",
          prefix: "intermediate/",
          collapsible: true,
          children: [
            "big-yang-big-yin",
            "mid-yang-mid-yin",
            "multi-k",
            "maintain",
            "reserve",
            "qushi-reserve",
            "dao",
            "identify-trends"
          ],
        },
        {
          text: "高级",
          icon: "note",
          prefix: "advanced/",
          collapsible: true,
          children: [
            "points-and-lines",
            "trends-part",
            "trends-stage",
            "shunshi",
            "money-management",
          ],
        },
      ]
    },
    {
      prefix: "right/",
      text: "随风交易系统",
      icon: "tool",
      collapsible: true,
      children: [
        {
          text: "前言",
          icon: "note",
          prefix: "foreword/",
          collapsible: true,
          children: [
            "first-lesson",
            "k",
            "patterns",
            "continuation-patterns",
            "reversal-patterns"
          ],
        },
        {
          text: "结构",
          icon: "note",
          prefix: "instruction/",
          collapsible: true,
          children: [
            "trend-segmentation-and-reversal-definition",
            "points-and-lines",
            "level-and-cycle",
            "reversal-and-keypoint",
            "level-and-cycle-relationship",
            "use-ema",
            "fund-risk-management"
          ],
        },
        {
          text: "进阶",
          icon: "note",
          prefix: "advanced/",
          collapsible: true,
          children: [
            "points-and-lines-advanced1",
            "points-and-lines-advanced2",
            "points-and-lines-advanced3",
            "points-and-lines-advanced4",
            "signal",
            "MACD-beili",
            "bolang1",
            "bolang2",
            "stop-loss",
            "take-profit",
            "ema-stop-loss",
            "ema-reserve",
            "atr",
            "last-lesson"
          ],
        },
        {
          text: "补充",
          icon: "note",
          prefix: "complement/",
          collapsible: true,
          children: [
            "ema-flow",
            "yangcongliu",
            "cat-scalp-flow"
          ],
        },
      ]
    },
    {
      prefix: "ema-flow/",
      text: "均线流",
      icon: "tool",
      collapsible: true,
      children: [
        "basics",
        "entry"
      ]
    },
  ]
});
