const e=JSON.parse('{"key":"v-75c6cfc2","path":"/basics/distribute/Raft.html","title":"Raft","lang":"zh-CN","frontmatter":{"description":"Raft 背景 不同于Paxos算法直接从分布式一致性问题出发推导出来，Raft算法则是从多副本状态机的角度提出，用于管理多副本状态机的日志复制。Raft实现了和Paxos相同的功能，它将一致性分解为多个子问题: Leader选举(Leader election)、日志同步(Log replication)、安全性(Safety)、日志压缩(Log compaction)、成员变更(Membership change)等。同时，Raft算法使用了更强的假设来减少了需要考虑的状态，使之变的易于理解和实现。 拜占庭将军 在介绍共识算法之前，先介绍一个简化版拜占庭将军的例子来帮助理解共识算法。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/distribute/Raft.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"Raft"}],["meta",{"property":"og:description","content":"Raft 背景 不同于Paxos算法直接从分布式一致性问题出发推导出来，Raft算法则是从多副本状态机的角度提出，用于管理多副本状态机的日志复制。Raft实现了和Paxos相同的功能，它将一致性分解为多个子问题: Leader选举(Leader election)、日志同步(Log replication)、安全性(Safety)、日志压缩(Log compaction)、成员变更(Membership change)等。同时，Raft算法使用了更强的假设来减少了需要考虑的状态，使之变的易于理解和实现。 拜占庭将军 在介绍共识算法之前，先介绍一个简化版拜占庭将军的例子来帮助理解共识算法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-05T07:26:30.000Z"}],["meta",{"property":"article:author","content":"Weiser"}],["meta",{"property":"article:modified_time","content":"2022-09-05T07:26:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Raft\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-05T07:26:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Weiser\\",\\"url\\":\\"https://github.com/xwzbupt\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[{"level":3,"title":"拜占庭将军","slug":"拜占庭将军","link":"#拜占庭将军","children":[]},{"level":3,"title":"共识算法","slug":"共识算法","link":"#共识算法","children":[]}]},{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[{"level":3,"title":"节点类型","slug":"节点类型","link":"#节点类型","children":[]},{"level":3,"title":"任期","slug":"任期","link":"#任期","children":[]},{"level":3,"title":"日志","slug":"日志","link":"#日志","children":[]}]},{"level":2,"title":"领导人选举","slug":"领导人选举","link":"#领导人选举","children":[]},{"level":2,"title":"日志复制","slug":"日志复制","link":"#日志复制","children":[]},{"level":2,"title":"安全性","slug":"安全性","link":"#安全性","children":[{"level":3,"title":"选举限制","slug":"选举限制","link":"#选举限制","children":[]},{"level":3,"title":"节点崩溃","slug":"节点崩溃","link":"#节点崩溃","children":[]},{"level":3,"title":"时间与可用性","slug":"时间与可用性","link":"#时间与可用性","children":[]}]}],"git":{"createdTime":1662348593000,"updatedTime":1662362790000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":2}]},"readingTime":{"minutes":11.75,"words":3525},"filePathRelative":"basics/distribute/Raft.md","localizedDate":"2022年9月5日","excerpt":"<h1> Raft</h1>\\n<h2> 背景</h2>\\n<p>不同于Paxos算法直接从分布式一致性问题出发推导出来，Raft算法则是从多副本状态机的角度提出，用于管理多副本状态机的日志复制。Raft实现了和Paxos相同的功能，它将一致性分解为多个子问题: Leader选举(Leader election)、日志同步(Log replication)、安全性(Safety)、日志压缩(Log compaction)、成员变更(Membership change)等。同时，Raft算法使用了更强的假设来减少了需要考虑的状态，使之变的易于理解和实现。</p>\\n<h3> 拜占庭将军</h3>\\n<p>在介绍共识算法之前，先介绍一个简化版拜占庭将军的例子来帮助理解共识算法。</p>","autoDesc":true}');export{e as data};
