const e=JSON.parse('{"key":"v-110e4378","path":"/basics/design-patterns/structural-patterns/Flyweight.html","title":"享元模式","lang":"zh-CN","frontmatter":{"description":"享元模式 上一节课中，我们讲了组合模式。组合模式并不常用，主要用在数据能表示成树形结构、能通过树的遍历算法来解决的场景中。今天，我们再来学习一个不那么常用的模式，享元模式（Flyweight Design Pattern）。这也是我们要学习的最后一个结构型模式。 跟其他所有的设计模式类似，享元模式的原理和实现也非常简单。今天，我会通过棋牌游戏和文本编辑器两个实际的例子来讲解。除此之外，还会讲到它跟单例、缓存、对象池的区别和联系。同时，也会带你剖析一下享元模式在 Java Integer、String 中的应用。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/design-patterns/structural-patterns/Flyweight.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"享元模式"}],["meta",{"property":"og:description","content":"享元模式 上一节课中，我们讲了组合模式。组合模式并不常用，主要用在数据能表示成树形结构、能通过树的遍历算法来解决的场景中。今天，我们再来学习一个不那么常用的模式，享元模式（Flyweight Design Pattern）。这也是我们要学习的最后一个结构型模式。 跟其他所有的设计模式类似，享元模式的原理和实现也非常简单。今天，我会通过棋牌游戏和文本编辑器两个实际的例子来讲解。除此之外，还会讲到它跟单例、缓存、对象池的区别和联系。同时，也会带你剖析一下享元模式在 Java Integer、String 中的应用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-09T15:49:15.000Z"}],["meta",{"property":"article:author","content":"Weiser"}],["meta",{"property":"article:modified_time","content":"2022-06-09T15:49:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"享元模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-09T15:49:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Weiser\\",\\"url\\":\\"https://github.com/xwzbupt\\"}]}"]]},"headers":[{"level":2,"title":"享元模式原理与实现","slug":"享元模式原理与实现","link":"#享元模式原理与实现","children":[]},{"level":2,"title":"享元模式在文本编辑器中的应用","slug":"享元模式在文本编辑器中的应用","link":"#享元模式在文本编辑器中的应用","children":[]},{"level":2,"title":"享元模式 vs 单例、缓存、对象池","slug":"享元模式-vs-单例、缓存、对象池","link":"#享元模式-vs-单例、缓存、对象池","children":[]},{"level":2,"title":"享元模式在 Java Integer 中的应用","slug":"享元模式在-java-integer-中的应用","link":"#享元模式在-java-integer-中的应用","children":[]},{"level":2,"title":"享元模式在 Java String 中的应用","slug":"享元模式在-java-string-中的应用","link":"#享元模式在-java-string-中的应用","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1654789755000,"updatedTime":1654789755000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":22.22,"words":6666},"filePathRelative":"basics/design-patterns/structural-patterns/Flyweight.md","localizedDate":"2022年6月9日","excerpt":"<h1> 享元模式</h1>\\n<p>上一节课中，我们讲了组合模式。组合模式并不常用，主要用在数据能表示成树形结构、能通过树的遍历算法来解决的场景中。今天，我们再来学习一个不那么常用的模式，<strong>享元模式</strong>（Flyweight Design Pattern）。这也是我们要学习的最后一个结构型模式。</p>\\n<p>跟其他所有的设计模式类似，享元模式的原理和实现也非常简单。今天，我会通过棋牌游戏和文本编辑器两个实际的例子来讲解。除此之外，还会讲到它跟单例、缓存、对象池的区别和联系。同时，也会带你剖析一下享元模式在 Java Integer、String 中的应用。</p>\\n","autoDesc":true}');export{e as data};
