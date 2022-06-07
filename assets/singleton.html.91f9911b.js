const e={key:"v-7adbe136",path:"/basics/design-patterns/creational-patterns/singleton.html",title:"\u5355\u4F8B\u6A21\u5F0F",lang:"zh-CN",frontmatter:{summary:"\u5355\u4F8B\u6A21\u5F0F \u5355\u4F8B\u6A21\u5F0F\u662F\u4E00\u79CD\u521B\u5EFA\u578B\u8BBE\u8BA1\u6A21\u5F0F\uFF0C \u8BA9\u4F60\u80FD\u591F\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C \u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u8BE5\u5B9E\u4F8B\u7684\u5168\u5C40\u8282\u70B9\u3002 \u95EE\u9898 \u5355\u4F8B\u6A21\u5F0F\u540C\u65F6\u89E3\u51B3\u4E86\u4E24\u4E2A\u95EE\u9898\uFF0C \u6240\u4EE5\u8FDD\u53CD\u4E86\u5355\u4E00\u804C\u8D23\u539F\u5219\uFF1A 1. \u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\u3002 \u4E3A\u4EC0\u4E48\u4F1A\u6709\u4EBA\u60F3\u8981\u63A7\u5236\u4E00\u4E2A\u7C7B\u6240\u62E5\u6709\u7684\u5B9E\u4F8B\u6570\u91CF\uFF1F \u6700\u5E38\u89C1\u7684\u539F\u56E0\u662F\u63A7\u5236\u67D0\u4E9B\u5171\u4EAB\u8D44\u6E90 \uFF08\u4F8B\u5982\u6570\u636E\u5E93\u6216\u6587\u4EF6\uFF09 \u7684\u8BBF\u95EE\u6743\u9650\u3002 \u5B83\u7684\u8FD0\u4F5C\u65B9\u5F0F\u662F\u8FD9\u6837\u7684\uFF1A \u5982\u679C\u4F60\u521B\u5EFA\u4E86\u4E00\u4E2A\u5BF9",head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/design-patterns/creational-patterns/singleton.html"}],["meta",{property:"og:site_name",content:"Weiser"}],["meta",{property:"og:title",content:"\u5355\u4F8B\u6A21\u5F0F"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-06-07T06:20:17.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-06-07T06:20:17.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u95EE\u9898",slug:"\u95EE\u9898",children:[]},{level:2,title:"\u89E3\u51B3\u65B9\u6848",slug:"\u89E3\u51B3\u65B9\u6848",children:[]},{level:2,title:"\u548C\u771F\u5B9E\u4E16\u754C\u7C7B\u6BD4",slug:"\u548C\u771F\u5B9E\u4E16\u754C\u7C7B\u6BD4",children:[]},{level:2,title:"\u5355\u4F8B\u6A21\u5F0F\u7ED3\u6784",slug:"\u5355\u4F8B\u6A21\u5F0F\u7ED3\u6784",children:[]},{level:2,title:"\u4F2A\u4EE3\u7801",slug:"\u4F2A\u4EE3\u7801",children:[]},{level:2,title:"\u5E94\u7528\u573A\u666F",slug:"\u5E94\u7528\u573A\u666F",children:[]},{level:2,title:"\u5B9E\u73B0\u65B9\u5F0F",slug:"\u5B9E\u73B0\u65B9\u5F0F",children:[]},{level:2,title:"\u4F18\u7F3A\u70B9",slug:"\u4F18\u7F3A\u70B9",children:[]},{level:2,title:"\u4EE3\u7801\u793A\u4F8B\uFF08\u624B\u5199\u5355\u4F8B\uFF09",slug:"\u4EE3\u7801\u793A\u4F8B-\u624B\u5199\u5355\u4F8B",children:[{level:3,title:"\u997F\u6C49\uFF08\u7EBF\u7A0B\u5B89\u5168\uFF09",slug:"\u997F\u6C49-\u7EBF\u7A0B\u5B89\u5168",children:[]},{level:3,title:"\u61D2\u6C49\uFF08\u7EBF\u7A0B\u4E0D\u5B89\u5168\uFF09",slug:"\u61D2\u6C49-\u7EBF\u7A0B\u4E0D\u5B89\u5168",children:[]},{level:3,title:"\u61D2\u6C49\uFF08\u540C\u6B65\u9501\uFF0C\u7EBF\u7A0B\u5B89\u5168\uFF09",slug:"\u61D2\u6C49-\u540C\u6B65\u9501-\u7EBF\u7A0B\u5B89\u5168",children:[]},{level:3,title:"\u53CC\u91CD\u6821\u9A8C\u9501\uFF08\u7EBF\u7A0B\u5B89\u5168\uFF0C\u6548\u7387\u9AD8\uFF09",slug:"\u53CC\u91CD\u6821\u9A8C\u9501-\u7EBF\u7A0B\u5B89\u5168-\u6548\u7387\u9AD8",children:[]}]}],git:{createdTime:1654582817e3,updatedTime:1654582817e3,contributors:[{name:"xwzbupt",email:"xwze@bupt.cn",commits:1}]},readingTime:{minutes:8.36,words:2509},filePathRelative:"basics/design-patterns/creational-patterns/singleton.md"};export{e as data};