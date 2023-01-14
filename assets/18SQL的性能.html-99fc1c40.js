const e=JSON.parse('{"key":"v-154f2516","path":"/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/18SQL%E7%9A%84%E6%80%A7%E8%83%BD.html","title":"为什么这些SQL语句逻辑相同，性能却差异巨大？","lang":"zh-CN","frontmatter":{"description":"为什么这些SQL语句逻辑相同，性能却差异巨大？ 在 MySQL 中，有很多看上去逻辑相同，但性能却差异巨大的 SQL 语句。对这些语句使用不当的话，就会不经意间导致整个数据库的压力变大。 我今天挑选了三个这样的案例和你分享。希望再遇到相似的问题时，你可以做到举一反三、快速解决问题。 案例一：条件字段函数操作 假设你现在维护了一个交易系统，其中交易记录表 tradelog 包含交易流水号（tradeid）、交易员 id（operator）、交易时间（t_modified）等字段。为了便于描述，我们先忽略其他字段。这个表的建表语句如下：","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/18SQL%E7%9A%84%E6%80%A7%E8%83%BD.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"为什么这些SQL语句逻辑相同，性能却差异巨大？"}],["meta",{"property":"og:description","content":"为什么这些SQL语句逻辑相同，性能却差异巨大？ 在 MySQL 中，有很多看上去逻辑相同，但性能却差异巨大的 SQL 语句。对这些语句使用不当的话，就会不经意间导致整个数据库的压力变大。 我今天挑选了三个这样的案例和你分享。希望再遇到相似的问题时，你可以做到举一反三、快速解决问题。 案例一：条件字段函数操作 假设你现在维护了一个交易系统，其中交易记录表 tradelog 包含交易流水号（tradeid）、交易员 id（operator）、交易时间（t_modified）等字段。为了便于描述，我们先忽略其他字段。这个表的建表语句如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-05T10:54:26.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-05T10:54:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么这些SQL语句逻辑相同，性能却差异巨大？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-05T10:54:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"案例一：条件字段函数操作","slug":"案例一-条件字段函数操作","link":"#案例一-条件字段函数操作","children":[]},{"level":2,"title":"案例二：隐式类型转换","slug":"案例二-隐式类型转换","link":"#案例二-隐式类型转换","children":[]},{"level":2,"title":"案例三：隐式字符编码转换","slug":"案例三-隐式字符编码转换","link":"#案例三-隐式字符编码转换","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1654426466000,"updatedTime":1654426466000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":12.7,"words":3809},"filePathRelative":"basics/MySQL/实践篇/18SQL的性能.md","localizedDate":"2022年6月5日","excerpt":"<h1> 为什么这些SQL语句逻辑相同，性能却差异巨大？</h1>\\n<p>在 MySQL 中，有很多看上去逻辑相同，但性能却差异巨大的 SQL 语句。对这些语句使用不当的话，就会不经意间导致整个数据库的压力变大。</p>\\n<p>我今天挑选了三个这样的案例和你分享。希望再遇到相似的问题时，你可以做到举一反三、快速解决问题。</p>\\n<h2> 案例一：条件字段函数操作</h2>\\n<p>假设你现在维护了一个交易系统，其中交易记录表 tradelog 包含交易流水号（tradeid）、交易员 id（operator）、交易时间（t_modified）等字段。为了便于描述，我们先忽略其他字段。这个表的建表语句如下：</p>","autoDesc":true}');export{e as data};
