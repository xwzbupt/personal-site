const t=JSON.parse('{"key":"v-66c0fb10","path":"/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/14count%E8%BF%99%E4%B9%88%E6%85%A2%E8%AF%A5%E6%80%8E%E4%B9%88%E5%8A%9E.html","title":"count(*)这么慢，我该怎么办？","lang":"zh-CN","frontmatter":{"description":"count(*)这么慢，我该怎么办？ 在开发系统的时候，你可能经常需要计算一个表的行数，比如一个交易系统的所有变更记录总数。这时候你可能会想，一条 select count(*) from t 语句不就解决了吗？ 但是，你会发现随着系统中记录数越来越多，这条语句执行得也会越来越慢。然后你可能就想了，MySQL 怎么这么笨啊，记个总数，每次要查的时候直接读出来，不就好了吗。 那么今天，我们就来聊聊 count(*) 语句到底是怎样实现的，以及 MySQL 为什么会这么实现。然后，我会再和你说说，如果应用中有这种频繁变更并需要统计表行数的需求，业务设计上可以怎么做。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/14count%E8%BF%99%E4%B9%88%E6%85%A2%E8%AF%A5%E6%80%8E%E4%B9%88%E5%8A%9E.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"count(*)这么慢，我该怎么办？"}],["meta",{"property":"og:description","content":"count(*)这么慢，我该怎么办？ 在开发系统的时候，你可能经常需要计算一个表的行数，比如一个交易系统的所有变更记录总数。这时候你可能会想，一条 select count(*) from t 语句不就解决了吗？ 但是，你会发现随着系统中记录数越来越多，这条语句执行得也会越来越慢。然后你可能就想了，MySQL 怎么这么笨啊，记个总数，每次要查的时候直接读出来，不就好了吗。 那么今天，我们就来聊聊 count(*) 语句到底是怎样实现的，以及 MySQL 为什么会这么实现。然后，我会再和你说说，如果应用中有这种频繁变更并需要统计表行数的需求，业务设计上可以怎么做。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-05T10:54:26.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-05T10:54:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"count(*)这么慢，我该怎么办？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-05T10:54:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"count(*) 的实现方式","slug":"count-的实现方式","link":"#count-的实现方式","children":[]},{"level":2,"title":"用缓存系统保存计数","slug":"用缓存系统保存计数","link":"#用缓存系统保存计数","children":[]},{"level":2,"title":"在数据库保存计数","slug":"在数据库保存计数","link":"#在数据库保存计数","children":[]},{"level":2,"title":"不同的 count 用法","slug":"不同的-count-用法","link":"#不同的-count-用法","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1654426466000,"updatedTime":1654426466000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":13.26,"words":3977},"filePathRelative":"basics/MySQL/实践篇/14count这么慢该怎么办.md","localizedDate":"2022年6月5日","excerpt":"<h1> count(*)这么慢，我该怎么办？</h1>\\n<p>在开发系统的时候，你可能经常需要计算一个表的行数，比如一个交易系统的所有变更记录总数。这时候你可能会想，一条 select count(*) from t 语句不就解决了吗？</p>\\n<p>但是，你会发现随着系统中记录数越来越多，这条语句执行得也会越来越慢。然后你可能就想了，MySQL 怎么这么笨啊，记个总数，每次要查的时候直接读出来，不就好了吗。</p>\\n<p>那么今天，我们就来聊聊 count(*) 语句到底是怎样实现的，以及 MySQL 为什么会这么实现。然后，我会再和你说说，如果应用中有这种频繁变更并需要统计表行数的需求，业务设计上可以怎么做。</p>","autoDesc":true}');export{t as data};
