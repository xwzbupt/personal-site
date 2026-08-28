import { sidebar } from "vuepress-theme-hope";

export const sidebarConfig = sidebar({
  "/basics/algorithm/": [
    {
      prefix: "",
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
  ],
  "/basics/system-design/": [
    {
      prefix: "",
      text: "系统设计",
      icon: "rank",
      collapsible: true,
      children: [
        { text: "理论基础", link: "01-理论基础" },
        { text: "基础组件", link: "02-基础组件" },
        { text: "数据存储", link: "03-数据存储" },
        { text: "服务治理", link: "04-服务治理" },
        { text: "经典解决方案", link: "05-经典解决方案" },
        { text: "案例实战", link: "06-系统设计案例" },
      ],
    },
  ],
  "/basics/MySQL/": [
    {
      prefix: "",
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
  ],
  "/basics/OOP/": [
    {
      prefix: "",
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
  ],
  "/basics/design-principles/": [
    {
      prefix: "",
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
  ],
  "/basics/design-patterns/": [
    {
      prefix: "",
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
  "/basics/distribute/": "structure",
  "/trade/": [
    {
      prefix: "basics/",
      text: "交易基础",
      icon: "repair",
      collapsible: true,
      children: [
        // "shinianyimeng",
        "cheat",
        "trading-mindset",
        "trading-management",
        "compare",
        "xauusd",
        "news",
        "options",
        "3pan",
        "trick"
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
  ],
  // 为未手工编排的内容目录生成当前分区导航，避免整站目录过大。
  "/about/": "structure",
  "/bigdata/": [
    "",
    {
      text: "分析型数据库",
      icon: "mysql",
      collapsible: true,
      children: ["doris/", "doris/storage-engine", "doris/compute-engine"],
    },
    {
      text: "分布式查询引擎",
      icon: "rank",
      collapsible: true,
      children: ["trino/"],
    },
    {
      text: "数据缓存与加速",
      icon: "rank",
      collapsible: true,
      children: ["alluxio/"],
    },
    {
      text: "数据仓库",
      icon: "group",
      collapsible: true,
      children: ["hive/", "hive/installation"],
    },
    {
      text: "权限与治理",
      icon: "people",
      collapsible: true,
      children: ["security/apache-ranger"],
    },
  ],
  "/life/": ["", "changsha-zhangjiajie"],
  "/ai/": [
    "",
    {
      text: "大模型基础",
      icon: "creative",
      collapsible: true,
      children: ["llm/"],
    },
    {
      text: "模型应用",
      icon: "tool",
      collapsible: true,
      children: ["prompt-engineering/", "rag/", "agents/"],
    },
  ],
  "/funny/": "structure",
  "/general/": "structure",
  "/others/": "structure",
  "/tools/": "structure",
  "/project/": false,
  "/language/Java/": [
    "",
    {
      text: "Java 基础",
      prefix: "basics/",
      collapsible: true,
      children: [
        {
          text: "基本语法",
          prefix: "grammar/",
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
            "10.keyWords",
          ],
        },
        {
          text: "容器",
          prefix: "container/",
          collapsible: true,
          children: [
            "11.container",
            "12.tool",
            "13.HashMap1",
            "15.LinkedHashMap",
            "16.Iterator",
          ],
        },
        {
          text: "异常",
          prefix: "exception/",
          collapsible: true,
          children: ["17.exception", "18.exception"],
        },
        {
          text: "文件与 I/O",
          prefix: "io/",
          collapsible: true,
          children: ["19.io", "20.nio", "21.高速io", "22.高速io"],
        },
        {
          text: "泛型",
          prefix: "generic/",
          collapsible: true,
          children: ["23.generic"],
        },
        {
          text: "动态编程与函数式编程",
          prefix: "code/",
          collapsible: true,
          children: [
            "24.reflection",
            "25.annotation",
            "26.dynamic-proxy",
            "27.lamda",
          ],
        },
      ],
    },
    {
      text: "JVM",
      prefix: "JVM/",
      collapsible: true,
      children: [
        {
          text: "编译执行",
          prefix: "compile/",
          collapsible: true,
          children: ["summary", "JIT"],
        },
      ],
    },
    {
      text: "多线程",
      prefix: "multithreading/",
      collapsible: true,
      children: [
        {
          text: "基础理论",
          prefix: "basic/",
          collapsible: true,
          children: ["thread", "JMM", "thread-safe"],
        },
        {
          text: "互斥锁",
          prefix: "lock/",
          collapsible: true,
          children: ["Synchronized", "lock", "deadlock"],
        },
        {
          text: "无锁与原子类",
          prefix: "lockless/",
          collapsible: true,
          children: ["CAS", "Atomic", "LongAdder", "ThreadLocal"],
        },
        {
          text: "同步工具",
          prefix: "sync-tool/",
          collapsible: true,
          children: ["conditionalVariable", "Semaphore", "Latch-Barrier"],
        },
        {
          text: "并发容器",
          prefix: "current-container/",
          collapsible: true,
          children: [
            "currentContainer",
            "block-wait",
            "ConcurrentHashMap",
            "CopyOnWrite",
          ],
        },
        {
          text: "线程管理",
          prefix: "thread-manage/",
          collapsible: true,
          children: [
            "thread-state",
            "threadpool",
            "thread-interrupt",
            "executor",
          ],
        },
      ],
    },
  ],
  // 首页、分类、标签等聚合页不需要侧边栏；根规则同时作为显式兜底。
  "/": false,
});
