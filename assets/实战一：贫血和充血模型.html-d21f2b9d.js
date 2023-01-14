const e=JSON.parse('{"key":"v-07a10f7b","path":"/basics/OOP/%E5%AE%9E%E6%88%98%E4%B8%80%EF%BC%9A%E8%B4%AB%E8%A1%80%E5%92%8C%E5%85%85%E8%A1%80%E6%A8%A1%E5%9E%8B.html","title":"基于贫血和充血模型设计钱包系统","lang":"zh-CN","frontmatter":{"category":["面向对象"],"description":"基于贫血和充血模型设计钱包系统 大部分工程师都是做业务开发的，所以，今天我们讲的这个实战项目也是一个典型的业务系统开发案例。我们都知道，很多业务系统都是基于 MVC 三层架构来开发的。实际上，更确切点讲，这是一种基于贫血模型的 MVC 三层架构开发模式。 虽然这种开发模式已经成为标准的 Web 项目的开发模式，但它却违反了面向对象编程风格，是一种彻彻底底的面向过程的编程风格，因此而被有些人称为反模式（anti-pattern）。特别是领域驱动设计（Domain Driven Design，简称 DDD）盛行之后，这种基于贫血模型的传统的开发模式就更加被人诟病。而基于充血模型的 DDD 开发模式越来越被人提倡。所以，我打算用两节课的时间，结合一个虚拟钱包系统的开发案例，带你彻底弄清楚这两种开发模式。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/OOP/%E5%AE%9E%E6%88%98%E4%B8%80%EF%BC%9A%E8%B4%AB%E8%A1%80%E5%92%8C%E5%85%85%E8%A1%80%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"基于贫血和充血模型设计钱包系统"}],["meta",{"property":"og:description","content":"基于贫血和充血模型设计钱包系统 大部分工程师都是做业务开发的，所以，今天我们讲的这个实战项目也是一个典型的业务系统开发案例。我们都知道，很多业务系统都是基于 MVC 三层架构来开发的。实际上，更确切点讲，这是一种基于贫血模型的 MVC 三层架构开发模式。 虽然这种开发模式已经成为标准的 Web 项目的开发模式，但它却违反了面向对象编程风格，是一种彻彻底底的面向过程的编程风格，因此而被有些人称为反模式（anti-pattern）。特别是领域驱动设计（Domain Driven Design，简称 DDD）盛行之后，这种基于贫血模型的传统的开发模式就更加被人诟病。而基于充血模型的 DDD 开发模式越来越被人提倡。所以，我打算用两节课的时间，结合一个虚拟钱包系统的开发案例，带你彻底弄清楚这两种开发模式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-11T18:47:24.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-11T18:47:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于贫血和充血模型设计钱包系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-11T18:47:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是基于贫血模型的传统开发模式？","slug":"什么是基于贫血模型的传统开发模式","link":"#什么是基于贫血模型的传统开发模式","children":[]},{"level":2,"title":"什么是基于充血模型的 DDD 开发模式？","slug":"什么是基于充血模型的-ddd-开发模式","link":"#什么是基于充血模型的-ddd-开发模式","children":[]},{"level":2,"title":"为什么基于贫血模型的传统开发模式如此受欢迎？","slug":"为什么基于贫血模型的传统开发模式如此受欢迎","link":"#为什么基于贫血模型的传统开发模式如此受欢迎","children":[]},{"level":2,"title":"什么项目应该考虑使用基于充血模型的 DDD 开发模式？","slug":"什么项目应该考虑使用基于充血模型的-ddd-开发模式","link":"#什么项目应该考虑使用基于充血模型的-ddd-开发模式","children":[]},{"level":2,"title":"钱包业务背景介绍","slug":"钱包业务背景介绍","link":"#钱包业务背景介绍","children":[{"level":3,"title":"1. 充值","slug":"_1-充值","link":"#_1-充值","children":[]},{"level":3,"title":"2. 支付","slug":"_2-支付","link":"#_2-支付","children":[]},{"level":3,"title":"3. 提现","slug":"_3-提现","link":"#_3-提现","children":[]},{"level":3,"title":"4. 查询余额","slug":"_4-查询余额","link":"#_4-查询余额","children":[]},{"level":3,"title":"5. 查询交易流水","slug":"_5-查询交易流水","link":"#_5-查询交易流水","children":[]}]},{"level":2,"title":"钱包系统的设计思路","slug":"钱包系统的设计思路","link":"#钱包系统的设计思路","children":[]},{"level":2,"title":"基于贫血模型的传统开发模式","slug":"基于贫血模型的传统开发模式","link":"#基于贫血模型的传统开发模式","children":[]},{"level":2,"title":"基于充血模型的 DDD 开发模式","slug":"基于充血模型的-ddd-开发模式","link":"#基于充血模型的-ddd-开发模式","children":[]},{"level":2,"title":"辩证思考与灵活应用","slug":"辩证思考与灵活应用","link":"#辩证思考与灵活应用","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"课堂讨论","slug":"课堂讨论","link":"#课堂讨论","children":[]}],"git":{"createdTime":1654973244000,"updatedTime":1654973244000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":34.64,"words":10391},"filePathRelative":"basics/OOP/实战一：贫血和充血模型.md","localizedDate":"2022年6月11日","excerpt":"<h1> 基于贫血和充血模型设计钱包系统</h1>\\n<p>大部分工程师都是做业务开发的，所以，今天我们讲的这个实战项目也是一个典型的业务系统开发案例。我们都知道，很多业务系统都是基于 MVC 三层架构来开发的。实际上，更确切点讲，这是一种基于贫血模型的 MVC 三层架构开发模式。</p>\\n<p>虽然这种开发模式已经成为标准的 Web 项目的开发模式，但它却违反了面向对象编程风格，是一种彻彻底底的面向过程的编程风格，因此而被有些人称为反模式（anti-pattern）。特别是<strong>领域驱动设计</strong>（Domain Driven Design，简称 DDD）盛行之后，这种基于贫血模型的传统的开发模式就更加被人诟病。而基于充血模型的 DDD 开发模式越来越被人提倡。所以，我打算用两节课的时间，结合一个虚拟钱包系统的开发案例，带你彻底弄清楚这两种开发模式。</p>","autoDesc":true}');export{e as data};
