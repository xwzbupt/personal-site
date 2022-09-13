const e=JSON.parse('{"key":"v-4418dd4a","path":"/language/Java/basics/grammar/4.%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html","title":"\u57FA\u672C\u7C7B\u578B","lang":"zh-CN","frontmatter":{"category":["Java\u57FA\u7840"],"summary":"\u57FA\u672C\u7C7B\u578B \\" \u65E2\u7136Java\u4E00\u5207\u7686\u5BF9\u8C61\uFF0C\u90A3\u53C8\u4E3A\u4F55\u8981\u4FDD\u7559int\u7B49\u57FA\u672C\u7C7B\u578B\uFF1F\\" \u4E0A\u4E00\u8282\u8BFE\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0CJava\u4E2D\u7684\u7C7B\u578B\u53EF\u4EE5\u5206\u4E3A\u4E24\u7C7B\uFF1A\u57FA\u672C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B\uFF0C\u5E76\u4E14\uFF0C\u91CD\u70B9\u8BB2\u89E3\u4E86\u5F15\u7528\u7C7B\u578B\u3002\u672C\u8282\uFF0C\u6211\u4EEC\u91CD\u70B9\u8BB2\u4E00\u4E0B\u57FA\u672C\u7C7B\u578B\u3002\u4F5C\u4E3A\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5728Java\u8BED\u8A00\u4E2D\uFF0C\u6709\u4E00\u4E2A\u6BD4\u8F83\u6D41\u884C\u7684\u8BF4\u6CD5\uFF0C\u90A3\u5C31\u662F\u201C\u4E00\u5207\u7686\u5BF9\u8C61\u201D\uFF0C\u8FD9\u4E5F\u662FJava\u8BED\u8A00\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E4B\u4E00\u3002\u4F46\u57FA\u672C\u7C7B\u578B\u7684\u5B58\u5728\u4F3C\u4E4E\u4E0E\u6B64\u76F8\u77DB\u76FE\uFF0C\u56E0\u6B64\u4E5F\u6709\u4EBA","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/language/Java/basics/grammar/4.%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"\u57FA\u672C\u7C7B\u578B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-27T03:32:19.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-27T03:32:19.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E00\u3001\u516B\u79CD\u57FA\u672C\u7C7B\u578B","slug":"\u4E00\u3001\u516B\u79CD\u57FA\u672C\u7C7B\u578B","link":"#\u4E00\u3001\u516B\u79CD\u57FA\u672C\u7C7B\u578B","children":[]},{"level":2,"title":"\u4E8C\u3001\u57FA\u672C\u7C7B\u578B\u8F6C\u6362","slug":"\u4E8C\u3001\u57FA\u672C\u7C7B\u578B\u8F6C\u6362","link":"#\u4E8C\u3001\u57FA\u672C\u7C7B\u578B\u8F6C\u6362","children":[{"level":3,"title":"1) \u81EA\u52A8\u7C7B\u578B\u8F6C\u6362","slug":"_1-\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362","link":"#_1-\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362","children":[]},{"level":3,"title":"2) \u5F3A\u5236\u7C7B\u578B\u8F6C\u6362","slug":"_2-\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362","link":"#_2-\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362","children":[]}]},{"level":2,"title":"\u4E09\u3001\u81EA\u52A8\u88C5\u7BB1\u62C6\u7BB1","slug":"\u4E09\u3001\u81EA\u52A8\u88C5\u7BB1\u62C6\u7BB1","link":"#\u4E09\u3001\u81EA\u52A8\u88C5\u7BB1\u62C6\u7BB1","children":[]},{"level":2,"title":"\u56DB\u3001\u5E38\u91CF\u6C60\u6280\u672F","slug":"\u56DB\u3001\u5E38\u91CF\u6C60\u6280\u672F","link":"#\u56DB\u3001\u5E38\u91CF\u6C60\u6280\u672F","children":[]},{"level":2,"title":"\u4E94\u3001\u57FA\u672C\u7C7B\u578BVS\u5305\u88C5\u7C7B","slug":"\u4E94\u3001\u57FA\u672C\u7C7B\u578Bvs\u5305\u88C5\u7C7B","link":"#\u4E94\u3001\u57FA\u672C\u7C7B\u578Bvs\u5305\u88C5\u7C7B","children":[]},{"level":2,"title":"\u516D\u3001\u601D\u8003\u9898","slug":"\u516D\u3001\u601D\u8003\u9898","link":"#\u516D\u3001\u601D\u8003\u9898","children":[]}],"git":{"createdTime":1655372944000,"updatedTime":1656300739000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":2}]},"readingTime":{"minutes":17.66,"words":5299},"filePathRelative":"language/Java/basics/grammar/4.\u57FA\u672C\u7C7B\u578B.md","localizedDate":"2022\u5E746\u670816\u65E5"}');export{e as data};
