const e=JSON.parse('{"key":"v-0568d893","path":"/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/2%E6%97%A5%E5%BF%97%E7%B3%BB%E7%BB%9F-SQL%E6%9B%B4%E6%96%B0%E8%AF%AD%E5%8F%A5%E7%9A%84%E6%89%A7%E8%A1%8C.html","title":"日志系统-SQL更新语句的执行","lang":"zh-CN","frontmatter":{"author":"极客时间","date":"2022-05-24T00:00:00.000Z","category":["MySQL基础篇"],"description":"日志系统-SQL更新语句的执行 MySQL 可以恢复到半个月内任意一秒的状态，惊叹的同时，你是不是心中也会不免会好奇，这是怎样做到的呢？ 我们还是从一个表的一条更新语句说起，下面是这个表的创建语句，这个表有一个主键 ID 和一个整型字段 c： mysql&gt; create table T(ID int primary key, c int);","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/2%E6%97%A5%E5%BF%97%E7%B3%BB%E7%BB%9F-SQL%E6%9B%B4%E6%96%B0%E8%AF%AD%E5%8F%A5%E7%9A%84%E6%89%A7%E8%A1%8C.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"日志系统-SQL更新语句的执行"}],["meta",{"property":"og:description","content":"日志系统-SQL更新语句的执行 MySQL 可以恢复到半个月内任意一秒的状态，惊叹的同时，你是不是心中也会不免会好奇，这是怎样做到的呢？ 我们还是从一个表的一条更新语句说起，下面是这个表的创建语句，这个表有一个主键 ID 和一个整型字段 c： mysql&gt; create table T(ID int primary key, c int);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-05-29T06:40:51.000Z"}],["meta",{"property":"article:author","content":"极客时间"}],["meta",{"property":"article:published_time","content":"2022-05-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-29T06:40:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"日志系统-SQL更新语句的执行\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-24T00:00:00.000Z\\",\\"dateModified\\":\\"2022-05-29T06:40:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"极客时间\\"}]}"]]},"headers":[{"level":2,"title":"重做日志：redo log","slug":"重做日志-redo-log","link":"#重做日志-redo-log","children":[]},{"level":2,"title":"归档日志：binlog","slug":"归档日志-binlog","link":"#归档日志-binlog","children":[]},{"level":2,"title":"两阶段提交","slug":"两阶段提交","link":"#两阶段提交","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1653806451000,"updatedTime":1653806451000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":12.86,"words":3858},"filePathRelative":"basics/MySQL/基础篇/2日志系统-SQL更新语句的执行.md","localizedDate":"2022年5月24日","excerpt":"<h1> 日志系统-SQL更新语句的执行</h1>\\n<p>MySQL 可以恢复到半个月内任意一秒的状态，惊叹的同时，你是不是心中也会不免会好奇，这是怎样做到的呢？</p>\\n<p>我们还是从一个表的一条更新语句说起，下面是这个表的创建语句，这个表有一个主键 ID 和一个整型字段 c：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code>mysql<span class=\\"token operator\\">&gt;</span> <span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">table</span> T<span class=\\"token punctuation\\">(</span>ID <span class=\\"token keyword\\">int</span> <span class=\\"token keyword\\">primary</span> <span class=\\"token keyword\\">key</span><span class=\\"token punctuation\\">,</span> c <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
