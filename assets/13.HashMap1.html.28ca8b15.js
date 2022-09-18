const e=JSON.parse('{"key":"v-658d5f53","path":"/language/Java/basics/container/13.HashMap1.html","title":"HashMap","lang":"zh-CN","frontmatter":{"category":["Java\u5BB9\u5668"],"summary":"HashMap \\" \u4E3A\u4F55HashMap\u4E2D\u6570\u7EC4\u7684\u5927\u5C0F\u5FC5\u987B\u662F2\u7684\u5E42\u6B21\u65B9\uFF1F\\" \u4E0A\u4E24\u8282\uFF0C\u6211\u4EEC\u7C97\u7565\u8BB2\u4E86JCF\u4E2D\u7684\u5404\u4E2A\u5BB9\u5668\uFF0C\u7ED9\u4F60\u6784\u5EFA\u4E86\u4E00\u4E2A\u7CFB\u7EDF\u6027\u7684\u6846\u67B6\u56FE\u3002\u672C\u8282\uFF0C\u6211\u4EEC\u91CD\u70B9\u8BB2\u4E00\u4E0BHashMap\u3002HashMap\u5728Java\u7F16\u7A0B\u4E2D\uFF0C\u4F7F\u7528\u9891\u7387\u975E\u5E38\u9AD8\uFF0C\u800C\u4E14\uFF0C\u56E0\u4E3A\u5176\u5E95\u5C42\u5B9E\u73B0\u6BD4\u8F83\u590D\u6742\uFF0C\u5728\u9762\u8BD5\u4E2D\uFF0C\u4E5F\u7ECF\u5E38\u88AB\u9762\u8BD5\u5B98\u62FF\u6765\u8003\u5BDF\u5019\u9009\u4EBA\u5BF9\u6280\u672F\u638C\u63E1\u7684\u6DF1\u5EA6\u3002\u672C\u8282\uFF0C\u6211\u4EEC\u5C31\u4ECE\u57FA\u672C\u539F\u7406\u3001\u54C8\u5E0C\u51FD\u6570\u3001\u88C5\u8F7D\u56E0\u5B50\u3001\u52A8\u6001","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/language/Java/basics/container/13.HashMap1.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"HashMap"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-16T07:08:57.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-16T07:08:57.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E00\u3001\u57FA\u672C\u539F\u7406","slug":"\u4E00\u3001\u57FA\u672C\u539F\u7406","link":"#\u4E00\u3001\u57FA\u672C\u539F\u7406","children":[]},{"level":2,"title":"\u4E8C\u3001\u54C8\u5E0C\u51FD\u6570","slug":"\u4E8C\u3001\u54C8\u5E0C\u51FD\u6570","link":"#\u4E8C\u3001\u54C8\u5E0C\u51FD\u6570","children":[{"level":3,"title":"1\uFF09key\u7684hashCode()\u51FD\u6570","slug":"_1-key\u7684hashcode-\u51FD\u6570","link":"#_1-key\u7684hashcode-\u51FD\u6570","children":[]},{"level":3,"title":"2\uFF09h ^ (h >>> 16)","slug":"_2-h-h-16","link":"#_2-h-h-16","children":[]},{"level":3,"title":"3\uFF09\u53D6\u6A21h & (n-1)","slug":"_3-\u53D6\u6A21h-n-1","link":"#_3-\u53D6\u6A21h-n-1","children":[]},{"level":3,"title":"4\uFF09key\u53EF\u4E3Anull\u503C","slug":"_4-key\u53EF\u4E3Anull\u503C","link":"#_4-key\u53EF\u4E3Anull\u503C","children":[]}]},{"level":2,"title":"\u4E09\u3001\u88C5\u8F7D\u56E0\u5B50","slug":"\u4E09\u3001\u88C5\u8F7D\u56E0\u5B50","link":"#\u4E09\u3001\u88C5\u8F7D\u56E0\u5B50","children":[]},{"level":2,"title":"\u56DB\u3001\u52A8\u6001\u6269\u5BB9","slug":"\u56DB\u3001\u52A8\u6001\u6269\u5BB9","link":"#\u56DB\u3001\u52A8\u6001\u6269\u5BB9","children":[]},{"level":2,"title":"\u4E94\u3001\u94FE\u8868\u6811\u5316","slug":"\u4E94\u3001\u94FE\u8868\u6811\u5316","link":"#\u4E94\u3001\u94FE\u8868\u6811\u5316","children":[]},{"level":2,"title":"\u516D\u3001\u9ED8\u8BA4\u88C5\u8F7D\u56E0\u5B50\u4E3A\u4EC0\u4E48\u662F0.75\uFF1F","slug":"\u516D\u3001\u9ED8\u8BA4\u88C5\u8F7D\u56E0\u5B50\u4E3A\u4EC0\u4E48\u662F0-75","link":"#\u516D\u3001\u9ED8\u8BA4\u88C5\u8F7D\u56E0\u5B50\u4E3A\u4EC0\u4E48\u662F0-75","children":[]},{"level":2,"title":"\u4E03\u3001\u94FE\u8868\u6811\u5316\u9608\u503C\u4E3A\u4EC0\u4E48\u662F8\uFF1F","slug":"\u4E03\u3001\u94FE\u8868\u6811\u5316\u9608\u503C\u4E3A\u4EC0\u4E48\u662F8","link":"#\u4E03\u3001\u94FE\u8868\u6811\u5316\u9608\u503C\u4E3A\u4EC0\u4E48\u662F8","children":[]},{"level":2,"title":"\u516B\u3001\u8BFE\u540E\u601D\u8003\u9898","slug":"\u516B\u3001\u8BFE\u540E\u601D\u8003\u9898","link":"#\u516B\u3001\u8BFE\u540E\u601D\u8003\u9898","children":[]}],"git":{"createdTime":1655388532000,"updatedTime":1663312137000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":5}]},"readingTime":{"minutes":25.95,"words":7785},"filePathRelative":"language/Java/basics/container/13.HashMap1.md","localizedDate":"2022\u5E746\u670816\u65E5"}');export{e as data};