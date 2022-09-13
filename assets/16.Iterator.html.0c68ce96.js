const e=JSON.parse('{"key":"v-417b55ea","path":"/language/Java/basics/container/16.Iterator.html","title":"\u8FED\u4EE3\u5668","lang":"zh-CN","frontmatter":{"category":["Java\u5BB9\u5668"],"summary":"\u8FED\u4EE3\u5668 \\" \u8FED\u4EE3\u5668\uFF1A\u7EDD\u5927\u591A\u6570Java\u5BB9\u5668\u90FD\u6709\u7684modCount\u5C5E\u6027\u662F\u505A\u4EC0\u4E48\u7528\u7684\uFF1F\\" \u8BB2\u5230\u5BB9\u5668\uFF0C\u6211\u4EEC\u4E0D\u5F97\u4E0D\u8BB2\u4E00\u4E0B\u8FED\u4EE3\u5668\u3002\u8FED\u4EE3\u5668\u662F\u904D\u5386\u5BB9\u5668\u7684\u5E38\u7528\u65B9\u6CD5\u3002Java\u4E2D\u7684\u8FED\u4EE3\u5668\u662F\u8FED\u4EE3\u6A21\u5F0F\u7684\u7ECF\u5178\u5B9E\u73B0\u3002\u867D\u7136\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u8FED\u4EE3\u5668\u7684\u4F7F\u7528\u90FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u4F46\u6709\u4E9B\u60C5\u51B5\u4E0B\u4E5F\u4F1A\u6BD4\u8F83\u590D\u6742\uFF0C\u6BD4\u5982\u5728\u521B\u5EFA\u8FED\u4EE3\u5668\u4E4B\u540E\uFF0C\u589E\u5220\u5BB9\u5668\u4E2D\u7684\u5143\u7D20\uFF0C\u518D\u4F7F\u7528\u8FED\u4EE3\u5668\u904D\u5386\u5BB9\u5668\uFF0C\u4F1A\u5BFC\u81F4\u672A\u51B3\u884C\u4E3A\uFF08\u7ED3\u679C\u4E0D\u786E\u5B9A\uFF09\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/language/Java/basics/container/16.Iterator.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"\u8FED\u4EE3\u5668"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-30T17:46:08.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-30T17:46:08.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E00\u3001\u5BB9\u5668\u7684\u51E0\u79CD\u904D\u5386\u65B9\u6CD5","slug":"\u4E00\u3001\u5BB9\u5668\u7684\u51E0\u79CD\u904D\u5386\u65B9\u6CD5","link":"#\u4E00\u3001\u5BB9\u5668\u7684\u51E0\u79CD\u904D\u5386\u65B9\u6CD5","children":[]},{"level":2,"title":"\u4E8C\u3001\u8FED\u4EE3\u5668\u5B58\u5728\u7684\u610F\u4E49","slug":"\u4E8C\u3001\u8FED\u4EE3\u5668\u5B58\u5728\u7684\u610F\u4E49","link":"#\u4E8C\u3001\u8FED\u4EE3\u5668\u5B58\u5728\u7684\u610F\u4E49","children":[]},{"level":2,"title":"\u4E09\u3001\u8FED\u4EE3\u5668\u7684\u57FA\u672C\u5B9E\u73B0\u539F\u7406","slug":"\u4E09\u3001\u8FED\u4EE3\u5668\u7684\u57FA\u672C\u5B9E\u73B0\u539F\u7406","link":"#\u4E09\u3001\u8FED\u4EE3\u5668\u7684\u57FA\u672C\u5B9E\u73B0\u539F\u7406","children":[]},{"level":2,"title":"\u56DB\u3001\u8FED\u4EE3\u5668\u904D\u5386\u5B58\u5728\u7684\u95EE\u9898","slug":"\u56DB\u3001\u8FED\u4EE3\u5668\u904D\u5386\u5B58\u5728\u7684\u95EE\u9898","link":"#\u56DB\u3001\u8FED\u4EE3\u5668\u904D\u5386\u5B58\u5728\u7684\u95EE\u9898","children":[]},{"level":2,"title":"\u4E94\u3001\u8FED\u4EE3\u5668\u95EE\u9898\u7684\u89E3\u51B3\u601D\u8DEF","slug":"\u4E94\u3001\u8FED\u4EE3\u5668\u95EE\u9898\u7684\u89E3\u51B3\u601D\u8DEF","link":"#\u4E94\u3001\u8FED\u4EE3\u5668\u95EE\u9898\u7684\u89E3\u51B3\u601D\u8DEF","children":[]},{"level":2,"title":"\u516D\u3001\u5229\u7528\u8FED\u4EE3\u5668\u5B89\u5168\u5220\u9664\u5143\u7D20","slug":"\u516D\u3001\u5229\u7528\u8FED\u4EE3\u5668\u5B89\u5168\u5220\u9664\u5143\u7D20","link":"#\u516D\u3001\u5229\u7528\u8FED\u4EE3\u5668\u5B89\u5168\u5220\u9664\u5143\u7D20","children":[]},{"level":2,"title":"\u4E03\u3001\u8BFE\u540E\u601D\u8003\u9898","slug":"\u4E03\u3001\u8BFE\u540E\u601D\u8003\u9898","link":"#\u4E03\u3001\u8BFE\u540E\u601D\u8003\u9898","children":[]}],"git":{"createdTime":1655388532000,"updatedTime":1656611168000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":2}]},"readingTime":{"minutes":13.83,"words":4149},"filePathRelative":"language/Java/basics/container/16.Iterator.md","localizedDate":"2022\u5E746\u670816\u65E5"}');export{e as data};
