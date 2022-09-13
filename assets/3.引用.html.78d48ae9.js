const e=JSON.parse('{"key":"v-0409aed0","path":"/language/Java/basics/grammar/3.%E5%BC%95%E7%94%A8.html","title":"\u5F15\u7528","lang":"zh-CN","frontmatter":{"category":["Java\u57FA\u7840"],"summary":"\u5F15\u7528 \\" \u540C\u6837\u90FD\u662F\u5B58\u50A8\u5730\u5740\uFF0C\u4E3A\u4F55Java\u5F15\u7528\u6BD4C/C++\u6307\u9488\u66F4\u5B89\u5168\uFF1F\\" \u672C\u8282\u6211\u4EEC\u5B66\u4E60\u4E00\u4E0BJava\u4E2D\u7684\u5F15\u7528\u3002\u6211\u4EEC\u77E5\u9053\uFF0CC/C++\u4E2D\u6709\u6307\u9488\u8BED\u6CD5\uFF0C\u6307\u9488\u7528\u6765\u5B58\u50A8\u4E00\u5757\u5185\u5B58\u7684\u9996\u5730\u5740\u3002\u6211\u4EEC\u901A\u8FC7\u6307\u9488\u6765\u8BBF\u95EE\u8FD9\u5757\u5185\u5B58\u3002Java\u4E2D\u6CA1\u6709\u6307\u9488\u8BED\u6CD5\uFF0C\u53D6\u800C\u4EE3\u4E4B\u662F\u5F15\u7528\u3002\u90A3\u4E48\uFF0CJava\u4E2D\u7684\u5F15\u7528\u548CC/C++\u4E2D\u7684\u6307\u9488\u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u540C\u6837\u662F\u5B58\u50A8\u5730\u5740\uFF0C\u4E3A\u4EC0\u4E48Java\u4E2D\u7684\u5F15\u7528\u6BD4C/C++\u4E2D\u7684\u6307\u9488\u66F4\u5B89\u5168\uFF1F ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/language/Java/basics/grammar/3.%E5%BC%95%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"\u5F15\u7528"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T03:32:19.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T03:32:19.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E00\u3001Java\u7C7B\u578B\uFF1A\u57FA\u672C\u7C7B\u578B vs \u5F15\u7528\u7C7B\u578B","slug":"\u4E00\u3001java\u7C7B\u578B-\u57FA\u672C\u7C7B\u578B-vs-\u5F15\u7528\u7C7B\u578B","link":"#\u4E00\u3001java\u7C7B\u578B-\u57FA\u672C\u7C7B\u578B-vs-\u5F15\u7528\u7C7B\u578B","children":[{"level":3,"title":"1. \u57FA\u672C\u7C7B\u578B","slug":"_1-\u57FA\u672C\u7C7B\u578B","link":"#_1-\u57FA\u672C\u7C7B\u578B","children":[]},{"level":3,"title":"2. \u5F15\u7528\u7C7B\u578B\uFF1A\u5BF9\u8C61\u7684\u5F15\u7528","slug":"_2-\u5F15\u7528\u7C7B\u578B-\u5BF9\u8C61\u7684\u5F15\u7528","link":"#_2-\u5F15\u7528\u7C7B\u578B-\u5BF9\u8C61\u7684\u5F15\u7528","children":[]},{"level":3,"title":"3. \u5F15\u7528\u7C7B\u578B\uFF1A\u6570\u7EC4\u7684\u5F15\u7528","slug":"_3-\u5F15\u7528\u7C7B\u578B-\u6570\u7EC4\u7684\u5F15\u7528","link":"#_3-\u5F15\u7528\u7C7B\u578B-\u6570\u7EC4\u7684\u5F15\u7528","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u53C2\u6570\u4F20\u9012\uFF1A\u503C\u4F20\u9012 vs \u5F15\u7528\u4F20\u9012","slug":"\u4E8C\u3001\u53C2\u6570\u4F20\u9012-\u503C\u4F20\u9012-vs-\u5F15\u7528\u4F20\u9012","link":"#\u4E8C\u3001\u53C2\u6570\u4F20\u9012-\u503C\u4F20\u9012-vs-\u5F15\u7528\u4F20\u9012","children":[{"level":3,"title":"1. \u57FA\u672C\u7C7B\u578B\u53C2\u6570","slug":"_1-\u57FA\u672C\u7C7B\u578B\u53C2\u6570","link":"#_1-\u57FA\u672C\u7C7B\u578B\u53C2\u6570","children":[]},{"level":3,"title":"2. \u5F15\u7528\u7C7B\u578B\u53C2\u6570","slug":"_2-\u5F15\u7528\u7C7B\u578B\u53C2\u6570","link":"#_2-\u5F15\u7528\u7C7B\u578B\u53C2\u6570","children":[]}]},{"level":2,"title":"\u4E09\u3001\u6570\u636E\u5224\u7B49\uFF1A\u7B49\u53F7 vs  equals()\u65B9\u6CD5","slug":"\u4E09\u3001\u6570\u636E\u5224\u7B49-\u7B49\u53F7-vs-equals-\u65B9\u6CD5","link":"#\u4E09\u3001\u6570\u636E\u5224\u7B49-\u7B49\u53F7-vs-equals-\u65B9\u6CD5","children":[]},{"level":2,"title":"\u56DB\u3001\u8BBF\u95EE\u5B89\u5168\uFF1A\u5F15\u7528 vs \u6307\u9488","slug":"\u56DB\u3001\u8BBF\u95EE\u5B89\u5168-\u5F15\u7528-vs-\u6307\u9488","link":"#\u56DB\u3001\u8BBF\u95EE\u5B89\u5168-\u5F15\u7528-vs-\u6307\u9488","children":[]},{"level":2,"title":"\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898","slug":"\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898","link":"#\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898","children":[]}],"git":{"createdTime":1655372944000,"updatedTime":1656300739000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":3}]},"readingTime":{"minutes":17.15,"words":5145},"filePathRelative":"language/Java/basics/grammar/3.\u5F15\u7528.md","localizedDate":"2022\u5E746\u670816\u65E5"}');export{e as data};
