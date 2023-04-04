const e=JSON.parse('{"key":"v-54fc7b06","path":"/basics/MySQL/interview/2_%E6%97%A5%E5%BF%97.html","title":"redo log、binlog和undo log","lang":"zh-CN","frontmatter":{"description":"redo log、binlog和undo log redo log 不知道你还记不记得《孔乙己》这篇文章，酒店掌柜有一个粉板，专门用来记录客人的赊账记录。如果赊账的人不多，那么他可以把顾客名和账目写在板上。但如果赊账的人多了，粉板总会有记不下的时候，这个时候掌柜一定还有一个专门记录赊账的账本。 如果有人要赊账或者还账的话，掌柜一般有两种做法： 一种做法是直接把账本翻出来，把这次赊的账加上去或者扣除掉； 另一种做法是先在粉板上记下这次的账，等打烊以后再把账本翻出来核算。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/MySQL/interview/2_%E6%97%A5%E5%BF%97.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"redo log、binlog和undo log"}],["meta",{"property":"og:description","content":"redo log、binlog和undo log redo log 不知道你还记不记得《孔乙己》这篇文章，酒店掌柜有一个粉板，专门用来记录客人的赊账记录。如果赊账的人不多，那么他可以把顾客名和账目写在板上。但如果赊账的人多了，粉板总会有记不下的时候，这个时候掌柜一定还有一个专门记录赊账的账本。 如果有人要赊账或者还账的话，掌柜一般有两种做法： 一种做法是直接把账本翻出来，把这次赊的账加上去或者扣除掉； 另一种做法是先在粉板上记下这次的账，等打烊以后再把账本翻出来核算。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-05T07:38:43.000Z"}],["meta",{"property":"article:author","content":"Weiser"}],["meta",{"property":"article:modified_time","content":"2022-09-05T07:38:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redo log、binlog和undo log\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-05T07:38:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Weiser\\",\\"url\\":\\"https://github.com/xwzbupt\\"}]}"]]},"headers":[{"level":2,"title":"redo log","slug":"redo-log","link":"#redo-log","children":[]},{"level":2,"title":"binlog","slug":"binlog","link":"#binlog","children":[{"level":3,"title":"两阶段提交","slug":"两阶段提交","link":"#两阶段提交","children":[]}]},{"level":2,"title":"redo log和binlog的区别","slug":"redo-log和binlog的区别","link":"#redo-log和binlog的区别","children":[]},{"level":2,"title":"undo log","slug":"undo-log","link":"#undo-log","children":[]}],"git":{"createdTime":1662363523000,"updatedTime":1662363523000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":10.67,"words":3201},"filePathRelative":"basics/MySQL/interview/2_日志.md","localizedDate":"2022年9月5日","excerpt":"<h1> redo log、binlog和undo log</h1>\\n<h2> redo log</h2>\\n<p>不知道你还记不记得《孔乙己》这篇文章，酒店掌柜有一个粉板，专门用来记录客人的赊账记录。如果赊账的人不多，那么他可以把顾客名和账目写在板上。但如果赊账的人多了，粉板总会有记不下的时候，这个时候掌柜一定还有一个专门记录赊账的账本。</p>\\n<p>如果有人要赊账或者还账的话，掌柜一般有两种做法：</p>\\n<ul>\\n<li>一种做法是直接把账本翻出来，把这次赊的账加上去或者扣除掉；</li>\\n<li>另一种做法是先在粉板上记下这次的账，等打烊以后再把账本翻出来核算。</li>\\n</ul>\\n","autoDesc":true}');export{e as data};
