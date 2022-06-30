const e={key:"v-0fd9814c",path:"/basics/algorithm/8.%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%93%E9%A2%98.html",title:"\u7B2C8\u7AE0 \u4E8C\u53C9\u6811",lang:"zh-CN",frontmatter:{icon:"article",date:"2021-11-01T00:00:00.000Z",category:["\u7B97\u6CD5"],tag:["\u4E8C\u53C9\u6811","DFS","BFS"],summary:"\u7B2C8\u7AE0 \u4E8C\u53C9\u6811 \u6A21\u677F \u524D\u5E8F\u904D\u5386\u975E\u9012\u5F52 \u4E2D\u5E8F\u904D\u5386\u975E\u9012\u5F52 \u540E\u5E8F\u904D\u5386\u975E\u9012\u5F52 \u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22 \u5251\u6307offer\u216147\uFF1A\u4E8C\u53C9\u6811\u526A\u679D \u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811 \u6839\u8282\u70B9 root \uFF0C\u6811\u7684\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u8981\u4E48\u662F 0\uFF0C\u8981\u4E48\u662F 1\u3002\u8BF7\u526A\u9664\u8BE5\u4E8C\u53C9\u6811\u4E2D\u6240\u6709\u8282\u70B9\u7684\u503C\u4E3A 0 \u7684\u5B50\u6811\u3002 \u8282\u70B9 node \u7684\u5B50\u6811\u4E3A node \u672C\u8EAB\uFF0C\u4EE5\u53CA\u6240\u6709 node \u7684\u540E\u4EE3\u3002 \u5251\u6307offer\u216026\uFF1A\u6811\u7684\u5B50\u7ED3\u6784 \u8F93\u5165\u4E24",head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/algorithm/8.%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%93%E9%A2%98.html"}],["meta",{property:"og:site_name",content:"Weiser"}],["meta",{property:"og:title",content:"\u7B2C8\u7AE0 \u4E8C\u53C9\u6811"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-06-30T17:46:08.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"\u4E8C\u53C9\u6811"}],["meta",{property:"article:tag",content:"DFS"}],["meta",{property:"article:tag",content:"BFS"}],["meta",{property:"article:published_time",content:"2021-11-01T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-06-30T17:46:08.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u6A21\u677F",slug:"\u6A21\u677F",children:[{level:3,title:"\u524D\u5E8F\u904D\u5386\u975E\u9012\u5F52",slug:"\u524D\u5E8F\u904D\u5386\u975E\u9012\u5F52",children:[]},{level:3,title:"\u4E2D\u5E8F\u904D\u5386\u975E\u9012\u5F52",slug:"\u4E2D\u5E8F\u904D\u5386\u975E\u9012\u5F52",children:[]},{level:3,title:"\u540E\u5E8F\u904D\u5386\u975E\u9012\u5F52",slug:"\u540E\u5E8F\u904D\u5386\u975E\u9012\u5F52",children:[]}]},{level:2,title:"\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22",slug:"\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22",children:[{level:3,title:"\u5251\u6307offer\u216147\uFF1A\u4E8C\u53C9\u6811\u526A\u679D",slug:"\u5251\u6307offerii47-\u4E8C\u53C9\u6811\u526A\u679D",children:[]},{level:3,title:"\u5251\u6307offer\u216026\uFF1A\u6811\u7684\u5B50\u7ED3\u6784",slug:"\u5251\u6307offeri26-\u6811\u7684\u5B50\u7ED3\u6784",children:[]},{level:3,title:"\u5251\u6307offer\u216148\uFF1A\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u4E8C\u53C9\u6811",slug:"\u5251\u6307offerii48-\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u4E8C\u53C9\u6811",children:[]},{level:3,title:"\u5251\u6307offer\u216149\uFF1A\u4ECE\u6839\u8282\u70B9\u5230\u53F6\u8282\u70B9\u7684\u8DEF\u5F84\u4E4B\u548C",slug:"\u5251\u6307offerii49-\u4ECE\u6839\u8282\u70B9\u5230\u53F6\u8282\u70B9\u7684\u8DEF\u5F84\u4E4B\u548C",children:[]},{level:3,title:"LC113\uFF1A\u8DEF\u5F84\u603B\u548C\u2161",slug:"lc113-\u8DEF\u5F84\u603B\u548Cii",children:[]},{level:3,title:"\u5251\u6307offer\u216150\uFF1A\u5411\u4E0B\u7684\u8DEF\u5F84\u8282\u70B9\u503C\u4E4B\u548C",slug:"\u5251\u6307offerii50-\u5411\u4E0B\u7684\u8DEF\u5F84\u8282\u70B9\u503C\u4E4B\u548C",children:[]},{level:3,title:"\u5251\u6307offer\u216151\uFF1A\u8282\u70B9\u503C\u4E4B\u548C\u6700\u5927\u7684\u8DEF\u5F84",slug:"\u5251\u6307offerii51-\u8282\u70B9\u503C\u4E4B\u548C\u6700\u5927\u7684\u8DEF\u5F84",children:[]},{level:3,title:"LC101\uFF1A\u5BF9\u79F0\u4E8C\u53C9\u6811",slug:"lc101-\u5BF9\u79F0\u4E8C\u53C9\u6811",children:[]},{level:3,title:"LC114\uFF1A\u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868",slug:"lc114-\u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868",children:[]},{level:3,title:"LC226\uFF1A\u4E8C\u53C9\u6811\u955C\u50CF",slug:"lc226-\u4E8C\u53C9\u6811\u955C\u50CF",children:[]}]},{level:2,title:"\u4E8C\u53C9\u641C\u7D22\u6811",slug:"\u4E8C\u53C9\u641C\u7D22\u6811",children:[{level:3,title:"\u5251\u6307offer\u216152\uFF1A\u5C55\u5E73\u4E8C\u53C9\u641C\u7D22\u6811",slug:"\u5251\u6307offerii52-\u5C55\u5E73\u4E8C\u53C9\u641C\u7D22\u6811",children:[]},{level:3,title:"\u5251\u6307offer\u216153\uFF1A\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9",slug:"\u5251\u6307offerii53-\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9",children:[]},{level:3,title:"\u5251\u6307offer\u216154\uFF1A\u6240\u6709\u5927\u4E8E\u7B49\u4E8E\u8282\u70B9\u7684\u503C\u4E4B\u548C",slug:"\u5251\u6307offerii54-\u6240\u6709\u5927\u4E8E\u7B49\u4E8E\u8282\u70B9\u7684\u503C\u4E4B\u548C",children:[]},{level:3,title:"\u5251\u6307offer\u216155\uFF1A\u4E8C\u53C9\u641C\u7D22\u6811\u8FED\u4EE3\u5668",slug:"\u5251\u6307offerii55-\u4E8C\u53C9\u641C\u7D22\u6811\u8FED\u4EE3\u5668",children:[]},{level:3,title:"\u5251\u6307offer\u216156\uFF1A\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u4E24\u4E2A\u8282\u70B9\u7684\u503C\u4E4B\u548C",slug:"\u5251\u6307offerii56-\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u4E24\u4E2A\u8282\u70B9\u7684\u503C\u4E4B\u548C",children:[]},{level:3,title:"\u4EE3\u7801\u9762\u8BD5\u6307\u5357\uFF1A\u627E\u5230\u641C\u7D22\u4E8C\u53C9\u6811\u4E2D\u4E24\u4E2A\u9519\u8BEF\u7684\u8282\u70B9",slug:"\u4EE3\u7801\u9762\u8BD5\u6307\u5357-\u627E\u5230\u641C\u7D22\u4E8C\u53C9\u6811\u4E2D\u4E24\u4E2A\u9519\u8BEF\u7684\u8282\u70B9",children:[]}]},{level:2,title:"TreeSet\u548CTreeMap\u7684\u5E94\u7528",slug:"treeset\u548Ctreemap\u7684\u5E94\u7528",children:[{level:3,title:"\u5251\u6307offer\u216157\uFF1A\u503C\u548C\u4E0B\u6807\u4E4B\u5DEE\u90FD\u5728\u7ED9\u5B9A\u8303\u56F4\u5185",slug:"\u5251\u6307offerii57-\u503C\u548C\u4E0B\u6807\u4E4B\u5DEE\u90FD\u5728\u7ED9\u5B9A\u8303\u56F4\u5185",children:[]},{level:3,title:"\u5251\u6307offer\u216158\uFF1A\u65E5\u7A0B\u8868",slug:"\u5251\u6307offerii58-\u65E5\u7A0B\u8868",children:[]}]},{level:2,title:"\u5B8C\u5168\u4E8C\u53C9\u6811",slug:"\u5B8C\u5168\u4E8C\u53C9\u6811",children:[{level:3,title:"LC222\uFF1A\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570",slug:"lc222-\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570",children:[]}]},{level:2,title:"\u4E8C\u53C9\u6811\u9AD8\u9891\u9898",slug:"\u4E8C\u53C9\u6811\u9AD8\u9891\u9898",children:[{level:3,title:"LC105\uFF0C\u5251\u6307offer\u21607\uFF1A\u91CD\u5EFA\u4E8C\u53C9\u6811",slug:"lc105-\u5251\u6307offeri7-\u91CD\u5EFA\u4E8C\u53C9\u6811",children:[]}]},{level:2,title:"LC236\uFF1A\u4E8C\u53C9\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148",slug:"lc236-\u4E8C\u53C9\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148",children:[]}],git:{createdTime:1653806451e3,updatedTime:1656611168e3,contributors:[{name:"xwzbupt",email:"xwze@bupt.cn",commits:3}]},readingTime:{minutes:20.81,words:6242},filePathRelative:"basics/algorithm/8.\u4E8C\u53C9\u6811\u4E13\u9898.md"};export{e as data};
