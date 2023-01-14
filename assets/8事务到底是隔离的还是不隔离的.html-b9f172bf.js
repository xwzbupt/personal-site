const e=JSON.parse('{"key":"v-9360fdc8","path":"/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/8%E4%BA%8B%E5%8A%A1%E5%88%B0%E5%BA%95%E6%98%AF%E9%9A%94%E7%A6%BB%E7%9A%84%E8%BF%98%E6%98%AF%E4%B8%8D%E9%9A%94%E7%A6%BB%E7%9A%84.html","title":"事务到底是隔离的还是不隔离的","lang":"zh-CN","frontmatter":{"author":"极客时间","date":"2022-05-26T00:00:00.000Z","category":["MySQL基础篇"],"description":"事务到底是隔离的还是不隔离的 在第 3 篇文章和你讲事务隔离级别的时候提到过，如果是可重复读隔离级别，事务 T 启动的时候会创建一个视图 read-view，之后事务 T 执行期间，即使有其他事务修改了数据，事务 T 看到的仍然跟在启动时看到的一样。也就是说，一个在可重复读隔离级别下执行的事务，好像与世无争，不受外界影响。 但是，我在上一篇文章中，和你分享行锁的时候又提到，一个事务要更新一行，如果刚好有另外一个事务拥有这一行的行锁，它又不能这么超然了，会被锁住，进入等待状态。问题是，既然进入了等待状态，那么等到这个事务自己获取到行锁要更新数据的时候，它读到的值又是什么呢？","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/8%E4%BA%8B%E5%8A%A1%E5%88%B0%E5%BA%95%E6%98%AF%E9%9A%94%E7%A6%BB%E7%9A%84%E8%BF%98%E6%98%AF%E4%B8%8D%E9%9A%94%E7%A6%BB%E7%9A%84.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"事务到底是隔离的还是不隔离的"}],["meta",{"property":"og:description","content":"事务到底是隔离的还是不隔离的 在第 3 篇文章和你讲事务隔离级别的时候提到过，如果是可重复读隔离级别，事务 T 启动的时候会创建一个视图 read-view，之后事务 T 执行期间，即使有其他事务修改了数据，事务 T 看到的仍然跟在启动时看到的一样。也就是说，一个在可重复读隔离级别下执行的事务，好像与世无争，不受外界影响。 但是，我在上一篇文章中，和你分享行锁的时候又提到，一个事务要更新一行，如果刚好有另外一个事务拥有这一行的行锁，它又不能这么超然了，会被锁住，进入等待状态。问题是，既然进入了等待状态，那么等到这个事务自己获取到行锁要更新数据的时候，它读到的值又是什么呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-05T10:54:26.000Z"}],["meta",{"property":"article:author","content":"极客时间"}],["meta",{"property":"article:published_time","content":"2022-05-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-05T10:54:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务到底是隔离的还是不隔离的\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-26T00:00:00.000Z\\",\\"dateModified\\":\\"2022-06-05T10:54:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"极客时间\\"}]}"]]},"headers":[{"level":2,"title":"“快照”在 MVCC 里是怎么工作的？","slug":"快照-在-mvcc-里是怎么工作的","link":"#快照-在-mvcc-里是怎么工作的","children":[]},{"level":2,"title":"更新逻辑","slug":"更新逻辑","link":"#更新逻辑","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1653806451000,"updatedTime":1654426466000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":3}]},"readingTime":{"minutes":17.1,"words":5129},"filePathRelative":"basics/MySQL/基础篇/8事务到底是隔离的还是不隔离的.md","localizedDate":"2022年5月26日","excerpt":"<h1> 事务到底是隔离的还是不隔离的</h1>\\n<p>在第 3 篇文章和你讲事务隔离级别的时候提到过，如果是可重复读隔离级别，事务 T 启动的时候会创建一个视图 read-view，之后事务 T 执行期间，即使有其他事务修改了数据，事务 T 看到的仍然跟在启动时看到的一样。也就是说，一个在可重复读隔离级别下执行的事务，好像与世无争，不受外界影响。</p>\\n<p>但是，我在上一篇文章中，和你分享行锁的时候又提到，一个事务要更新一行，如果刚好有另外一个事务拥有这一行的行锁，它又不能这么超然了，会被锁住，进入等待状态。问题是，既然进入了等待状态，那么等到这个事务自己获取到行锁要更新数据的时候，它读到的值又是什么呢？</p>","autoDesc":true}');export{e as data};
