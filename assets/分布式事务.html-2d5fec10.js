const e=JSON.parse('{"key":"v-2d3549c4","path":"/basics/distribute/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1.html","title":"分布式事务","lang":"zh-CN","frontmatter":{"description":"来自于pdai.tech 分布式事务 什么是分布式事务 事务是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。在分布式系统中，这些操作可能是位于不同的服务中，那么如果也能保证这些操作要么全部执行成功要么全部执行失败呢？这便是分布式事务要解决的问题。 以一个网上的经典下单减库存例子为例： 单体应用所有的业务都使用一个数据库，整个下单流程或许只用在一个方法里同一个事务下操作数据库即可。此时所有操作都在一个事务里，要么全部提交，要么全部回滚。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/distribute/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"分布式事务"}],["meta",{"property":"og:description","content":"来自于pdai.tech 分布式事务 什么是分布式事务 事务是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。在分布式系统中，这些操作可能是位于不同的服务中，那么如果也能保证这些操作要么全部执行成功要么全部执行失败呢？这便是分布式事务要解决的问题。 以一个网上的经典下单减库存例子为例： 单体应用所有的业务都使用一个数据库，整个下单流程或许只用在一个方法里同一个事务下操作数据库即可。此时所有操作都在一个事务里，要么全部提交，要么全部回滚。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-05T03:29:53.000Z"}],["meta",{"property":"article:author","content":"Weiser"}],["meta",{"property":"article:modified_time","content":"2022-09-05T03:29:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式事务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-05T03:29:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Weiser\\",\\"url\\":\\"https://github.com/xwzbupt\\"}]}"]]},"headers":[{"level":2,"title":"什么是分布式事务","slug":"什么是分布式事务","link":"#什么是分布式事务","children":[]},{"level":2,"title":"如何理解分布式事务","slug":"如何理解分布式事务","link":"#如何理解分布式事务","children":[{"level":3,"title":"从分布式的理论的角度看","slug":"从分布式的理论的角度看","link":"#从分布式的理论的角度看","children":[]},{"level":3,"title":"从分布式事务的体系看","slug":"从分布式事务的体系看","link":"#从分布式事务的体系看","children":[]}]},{"level":2,"title":"分布式事务方案之刚性事务","slug":"分布式事务方案之刚性事务","link":"#分布式事务方案之刚性事务","children":[{"level":3,"title":"两段提交（2PC）","slug":"两段提交-2pc","link":"#两段提交-2pc","children":[]},{"level":3,"title":"三段提交（3PC）","slug":"三段提交-3pc","link":"#三段提交-3pc","children":[]}]},{"level":2,"title":"分布式事务方案之柔性事务","slug":"分布式事务方案之柔性事务","link":"#分布式事务方案之柔性事务","children":[{"level":3,"title":"补偿事务 (TCC)","slug":"补偿事务-tcc","link":"#补偿事务-tcc","children":[]},{"level":3,"title":"Saga事务","slug":"saga事务","link":"#saga事务","children":[]},{"level":3,"title":"本地消息表","slug":"本地消息表","link":"#本地消息表","children":[]},{"level":3,"title":"MQ事务方案（可靠消息事务）","slug":"mq事务方案-可靠消息事务","link":"#mq事务方案-可靠消息事务","children":[]},{"level":3,"title":"最大努力通知","slug":"最大努力通知","link":"#最大努力通知","children":[]}]}],"git":{"createdTime":1662348593000,"updatedTime":1662348593000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":26.28,"words":7884},"filePathRelative":"basics/distribute/分布式事务.md","localizedDate":"2022年9月5日","excerpt":"<blockquote>\\n<p>来自于pdai.tech</p>\\n</blockquote>\\n<h1> 分布式事务</h1>\\n<h2> 什么是分布式事务</h2>\\n<blockquote>\\n<p><strong>事务</strong>是一个程序执行单元，里面的所有操作要么全部执行成功，要么全部执行失败。在分布式系统中，这些操作可能是位于不同的服务中，那么如果也能保证这些操作要么全部执行成功要么全部执行失败呢？这便是分布式事务要解决的问题。</p>\\n</blockquote>\\n<p><strong>以一个网上的经典下单减库存例子为例</strong>：</p>\\n<p>单体应用所有的业务都使用一个数据库，整个下单流程或许只用在一个方法里同一个事务下操作数据库即可。此时所有操作都在一个事务里，要么全部提交，要么全部回滚。</p>","autoDesc":true}');export{e as data};
