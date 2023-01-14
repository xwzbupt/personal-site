const e=JSON.parse('{"key":"v-20e6db12","path":"/basics/MySQL/interview/1_%E6%9E%B6%E6%9E%84.html","title":"MySQL架构，Server层 + 引擎层","lang":"zh-CN","frontmatter":{"description":"MySQL架构，Server层 + 引擎层 1. MySQL架构 这是专栏的第一篇文章，我想来跟你聊聊 MySQL 的基础架构。我们经常说，看一个事儿千万不要直接陷入细节里，你应该先鸟瞰其全貌，这样能够帮助你从高维度理解问题。同样，对于 MySQL 的学习也是这样。平时我们使用数据库，看到的通常都是一个整体。比如，你有个最简单的表，表里只有一个 ID 字段，在执行下面这个查询语句时： mysql&gt; select * from T where ID=10；","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/MySQL/interview/1_%E6%9E%B6%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"MySQL架构，Server层 + 引擎层"}],["meta",{"property":"og:description","content":"MySQL架构，Server层 + 引擎层 1. MySQL架构 这是专栏的第一篇文章，我想来跟你聊聊 MySQL 的基础架构。我们经常说，看一个事儿千万不要直接陷入细节里，你应该先鸟瞰其全貌，这样能够帮助你从高维度理解问题。同样，对于 MySQL 的学习也是这样。平时我们使用数据库，看到的通常都是一个整体。比如，你有个最简单的表，表里只有一个 ID 字段，在执行下面这个查询语句时： mysql&gt; select * from T where ID=10；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-08T09:02:50.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-08T09:02:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL架构，Server层 + 引擎层\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-08T09:02:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. MySQL架构","slug":"_1-mysql架构","link":"#_1-mysql架构","children":[{"level":3,"title":"连接器","slug":"连接器","link":"#连接器","children":[]},{"level":3,"title":"查询缓存","slug":"查询缓存","link":"#查询缓存","children":[]},{"level":3,"title":"分析器","slug":"分析器","link":"#分析器","children":[]},{"level":3,"title":"优化器","slug":"优化器","link":"#优化器","children":[]},{"level":3,"title":"执行器","slug":"执行器","link":"#执行器","children":[]}]},{"level":2,"title":"2.InnoDB和MyIAM","slug":"_2-innodb和myiam","link":"#_2-innodb和myiam","children":[]}],"git":{"createdTime":1662363523000,"updatedTime":1662627770000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":2}]},"readingTime":{"minutes":13.08,"words":3924},"filePathRelative":"basics/MySQL/interview/1_架构.md","localizedDate":"2022年9月5日","excerpt":"<h1> MySQL架构，Server层 + 引擎层</h1>\\n<h2> 1. MySQL架构</h2>\\n<p>这是专栏的第一篇文章，我想来跟你聊聊 MySQL 的基础架构。我们经常说，看一个事儿千万不要直接陷入细节里，你应该先鸟瞰其全貌，这样能够帮助你从高维度理解问题。同样，对于 MySQL 的学习也是这样。平时我们使用数据库，看到的通常都是一个整体。比如，你有个最简单的表，表里只有一个 ID 字段，在执行下面这个查询语句时：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code>mysql<span class=\\"token operator\\">&gt;</span> <span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> T <span class=\\"token keyword\\">where</span> ID<span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span>；\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
