const e={key:"v-8e08f25e",path:"/basics/algorithm/5.%E5%93%88%E5%B8%8C%E4%B8%93%E9%A2%98.html",title:"\u7B2C5\u7AE0 \u54C8\u5E0C\u8868",lang:"zh-CN",frontmatter:{icon:"article",date:"2021-11-01T00:00:00.000Z",category:["\u7B97\u6CD5"],tag:["\u54C8\u5E0C","\u539F\u5730\u54C8\u5E0C"],summary:"\u7B2C5\u7AE0 \u54C8\u5E0C\u8868 \u54C8\u5E0C\u8868\u7684\u8BBE\u8BA1 \u5251\u6307offer\u216130\uFF1A\u63D2\u5165\u3001\u5220\u9664\u548C\u968F\u673A\u8BBF\u95EE\u90FD\u662FO(1)\u7684\u5BB9\u5668 \u5251\u6307offer\u216131\uFF1A\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7F13\u5B58 \u8FD0\u7528\u6240\u638C\u63E1\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u8BBE\u8BA1\u548C\u5B9E\u73B0\u4E00\u4E2A LRU (Least Recently Used\uFF0C\u6700\u8FD1\u6700\u5C11\u4F7F\u7528) \u7F13\u5B58\u673A\u5236 \u3002 \u5B9E\u73B0 LRUCache \u7C7B\uFF1A LRUCache(int capacity) \u4EE5\u6B63\u6574\u6570\u4F5C\u4E3A\u5BB9\u91CF capacity",head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/algorithm/5.%E5%93%88%E5%B8%8C%E4%B8%93%E9%A2%98.html"}],["meta",{property:"og:site_name",content:"Weiser"}],["meta",{property:"og:title",content:"\u7B2C5\u7AE0 \u54C8\u5E0C\u8868"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-05-29T06:40:51.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"\u54C8\u5E0C"}],["meta",{property:"article:tag",content:"\u539F\u5730\u54C8\u5E0C"}],["meta",{property:"article:published_time",content:"2021-11-01T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-05-29T06:40:51.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u54C8\u5E0C\u8868\u7684\u8BBE\u8BA1",slug:"\u54C8\u5E0C\u8868\u7684\u8BBE\u8BA1",children:[{level:3,title:"\u5251\u6307offer\u216130\uFF1A\u63D2\u5165\u3001\u5220\u9664\u548C\u968F\u673A\u8BBF\u95EE\u90FD\u662FO(1)\u7684\u5BB9\u5668",slug:"\u5251\u6307offerii30-\u63D2\u5165\u3001\u5220\u9664\u548C\u968F\u673A\u8BBF\u95EE\u90FD\u662Fo-1-\u7684\u5BB9\u5668",children:[]},{level:3,title:"\u5251\u6307offer\u216131\uFF1A\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7F13\u5B58",slug:"\u5251\u6307offerii31-\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7F13\u5B58",children:[]}]},{level:2,title:"\u54C8\u5E0C\u8868\u7684\u5E94\u7528",slug:"\u54C8\u5E0C\u8868\u7684\u5E94\u7528",children:[{level:3,title:"\u5251\u6307offer\u216132\uFF1A\u6709\u6548\u7684\u53D8\u4F4D\u8BCD",slug:"\u5251\u6307offerii32-\u6709\u6548\u7684\u53D8\u4F4D\u8BCD",children:[]},{level:3,title:"\u5251\u6307offer\u216133\uFF1A\u53D8\u4F4D\u8BCD\u7EC4",slug:"\u5251\u6307offerii33-\u53D8\u4F4D\u8BCD\u7EC4",children:[]},{level:3,title:"\u5251\u6307offer\u216134\uFF1A\u5916\u661F\u8BED\u8A00\u662F\u5426\u6392\u5E8F",slug:"\u5251\u6307offerii34-\u5916\u661F\u8BED\u8A00\u662F\u5426\u6392\u5E8F",children:[]},{level:3,title:"\u5251\u6307offer\u216135\uFF1A\u6700\u5C0F\u65F6\u95F4\u5DEE",slug:"\u5251\u6307offerii35-\u6700\u5C0F\u65F6\u95F4\u5DEE",children:[]}]},{level:2,title:"\u539F\u5730\u54C8\u5E0C",slug:"\u539F\u5730\u54C8\u5E0C",children:[{level:3,title:"\u5251\u6307offer\u216003\uFF1A\u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u5B57",slug:"\u5251\u6307offeri03-\u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u5B57",children:[]},{level:3,title:"LC41\uFF1A\u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570",slug:"lc41-\u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570",children:[]}]}],git:{createdTime:1653806451e3,updatedTime:1653806451e3,contributors:[{name:"xwzbupt",email:"xwze@bupt.cn",commits:1}]},readingTime:{minutes:7.9,words:2370},filePathRelative:"basics/algorithm/5.\u54C8\u5E0C\u4E13\u9898.md"};export{e as data};
