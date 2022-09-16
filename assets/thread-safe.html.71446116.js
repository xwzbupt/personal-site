const e=JSON.parse('{"key":"v-14a58e2b","path":"/language/Java/multithreading/basic/thread-safe.html","title":"\u7EBF\u7A0B\u5B89\u5168","lang":"zh-CN","frontmatter":{"category":["Java"],"summary":"\u7EBF\u7A0B\u5B89\u5168 \u7EBF\u7A0B\u5B89\u5168\u3001\u4E34\u754C\u533A\u3001\u7ADE\u6001\u662F\u5B66\u4E60\u591A\u7EBF\u7A0B\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u7ECF\u5E38\u9047\u5230\u7684\u51E0\u4E2A\u6982\u5FF5\u3002\u56E0\u6B64\uFF0C\u672C\u8282\u6211\u4EEC\u5C31\u6765\u8BE6\u7EC6\u8BB2\u89E3\u4E00\u4E0B\u8FD9\u5B83\u4EEC\uFF0C\u4E3A\u4EE5\u540E\u7684\u5B66\u4E60\u505A\u94FA\u57AB\u3002\u90A3\u4E48\uFF0C\u7EBF\u7A0B\u5B89\u5168\u4E2D\u7684\u5B89\u5168\u4E24\u5B57\u5982\u4F55\u7406\u89E3\u5462\uFF1F\u4EC0\u4E48\u6837\u7684\u4EE3\u7801\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u4EE3\u7801\uFF1F\u4EC0\u4E48\u6837\u7684\u4EE3\u7801\u7EBF\u7A0B\u4E0D\u5B89\u5168\u7684\u4EE3\u7801\uFF1F\u5982\u4F55\u505A\u5230\u7EBF\u7A0B\u5B89\u5168\uFF1F\u56F4\u7ED5\u7740\u8FD9\u51E0\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5F00\u59CB\u672C\u8282\u7684\u5B66\u4E60\u3002 \u4E00\u3001\u7EBF\u7A0B\u5B89\u5168\u6982\u5FF5 \u5728Java\u4E2D\uFF0C\u7EBF\u7A0B\u5B89\u5168\u6216\u4E0D\u5B89\u5168\u63CF\u8FF0\u7684\u5BF9\u8C61\u65E2\u53EF\u4EE5\u662F\u7C7B\uFF0C\u4E5F","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/language/Java/multithreading/basic/thread-safe.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"\u7EBF\u7A0B\u5B89\u5168"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-16T09:18:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-16T09:18:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E00\u3001\u7EBF\u7A0B\u5B89\u5168\u6982\u5FF5","slug":"\u4E00\u3001\u7EBF\u7A0B\u5B89\u5168\u6982\u5FF5","link":"#\u4E00\u3001\u7EBF\u7A0B\u5B89\u5168\u6982\u5FF5","children":[]},{"level":2,"title":"\u4E8C\u3001\u4E34\u754C\u533A\u548C\u7ADE\u6001","slug":"\u4E8C\u3001\u4E34\u754C\u533A\u548C\u7ADE\u6001","link":"#\u4E8C\u3001\u4E34\u754C\u533A\u548C\u7ADE\u6001","children":[{"level":3,"title":"1\uFF09\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90","slug":"_1-\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90","link":"#_1-\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90","children":[]},{"level":3,"title":"2\uFF09\u5305\u542B\u590D\u5408\u64CD\u4F5C","slug":"_2-\u5305\u542B\u590D\u5408\u64CD\u4F5C","link":"#_2-\u5305\u542B\u590D\u5408\u64CD\u4F5C","children":[]}]},{"level":2,"title":"\u4E09\u3001\u7EBF\u7A0B\u5B89\u5168\u5206\u6790","slug":"\u4E09\u3001\u7EBF\u7A0B\u5B89\u5168\u5206\u6790","link":"#\u4E09\u3001\u7EBF\u7A0B\u5B89\u5168\u5206\u6790","children":[]},{"level":2,"title":"\u56DB\u3001\u4E92\u65A5\u548C\u540C\u6B65","slug":"\u56DB\u3001\u4E92\u65A5\u548C\u540C\u6B65","link":"#\u56DB\u3001\u4E92\u65A5\u548C\u540C\u6B65","children":[]},{"level":2,"title":"\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898","slug":"\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898","link":"#\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898","children":[]}],"git":{"createdTime":1663319880000,"updatedTime":1663319880000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":7.87,"words":2362},"filePathRelative":"language/Java/multithreading/basic/thread-safe.md","localizedDate":"2022\u5E749\u670816\u65E5"}');export{e as data};
