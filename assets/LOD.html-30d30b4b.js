const e=JSON.parse('{"key":"v-6ca84a5c","path":"/basics/design-principles/LOD.html","title":"迪米特法则","lang":"zh-CN","frontmatter":{"category":"设计原则和思想","description":"迪米特法则 何为“高内聚、松耦合”？ “高内聚、松耦合”是一个非常重要的设计思想，能够有效地提高代码的可读性和可维护性，缩小功能改动导致的代码改动范围。实际上，在前面的章节中，我们已经多次提到过这个设计思想。很多设计原则都以实现代码的“高内聚、松耦合”为目的，比如单一职责原则、基于接口而非实现编程等。 实际上，“高内聚、松耦合”是一个比较通用的设计思想，可以用来指导不同粒度代码的设计与开发，比如系统、模块、类，甚至是函数，也可以应用到不同的开发场景中，比如微服务、框架、组件、类库等。为了方便我讲解，接下来我以“类”作为这个设计思想的应用对象来展开讲解，其他应用场景你可以自行类比。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/design-principles/LOD.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"迪米特法则"}],["meta",{"property":"og:description","content":"迪米特法则 何为“高内聚、松耦合”？ “高内聚、松耦合”是一个非常重要的设计思想，能够有效地提高代码的可读性和可维护性，缩小功能改动导致的代码改动范围。实际上，在前面的章节中，我们已经多次提到过这个设计思想。很多设计原则都以实现代码的“高内聚、松耦合”为目的，比如单一职责原则、基于接口而非实现编程等。 实际上，“高内聚、松耦合”是一个比较通用的设计思想，可以用来指导不同粒度代码的设计与开发，比如系统、模块、类，甚至是函数，也可以应用到不同的开发场景中，比如微服务、框架、组件、类库等。为了方便我讲解，接下来我以“类”作为这个设计思想的应用对象来展开讲解，其他应用场景你可以自行类比。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-12T14:59:42.000Z"}],["meta",{"property":"article:author","content":"Weiser"}],["meta",{"property":"article:modified_time","content":"2022-06-12T14:59:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"迪米特法则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-12T14:59:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Weiser\\",\\"url\\":\\"https://github.com/xwzbupt\\"}]}"]]},"headers":[{"level":2,"title":"何为“高内聚、松耦合”？","slug":"何为-高内聚、松耦合","link":"#何为-高内聚、松耦合","children":[]},{"level":2,"title":"“迪米特法则”理论描述","slug":"迪米特法则-理论描述","link":"#迪米特法则-理论描述","children":[]},{"level":2,"title":"理论解读与代码实战一","slug":"理论解读与代码实战一","link":"#理论解读与代码实战一","children":[]},{"level":2,"title":"理论解读与代码实战二","slug":"理论解读与代码实战二","link":"#理论解读与代码实战二","children":[]},{"level":2,"title":"辩证思考与灵活应用","slug":"辩证思考与灵活应用","link":"#辩证思考与灵活应用","children":[]},{"level":2,"title":"重点回顾","slug":"重点回顾","link":"#重点回顾","children":[]},{"level":2,"title":"课堂讨论","slug":"课堂讨论","link":"#课堂讨论","children":[]}],"git":{"createdTime":1655045982000,"updatedTime":1655045982000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":14.53,"words":4360},"filePathRelative":"basics/design-principles/LOD.md","localizedDate":"2022年6月12日","excerpt":"<h1> 迪米特法则</h1>\\n<h2> 何为“高内聚、松耦合”？</h2>\\n<p>“高内聚、松耦合”是一个非常重要的设计思想，能够有效地提高代码的可读性和可维护性，缩小功能改动导致的代码改动范围。实际上，在前面的章节中，我们已经多次提到过这个设计思想。很多设计原则都以实现代码的“高内聚、松耦合”为目的，比如单一职责原则、基于接口而非实现编程等。</p>\\n<p>实际上，“高内聚、松耦合”是一个比较通用的设计思想，可以用来指导不同粒度代码的设计与开发，比如系统、模块、类，甚至是函数，也可以应用到不同的开发场景中，比如微服务、框架、组件、类库等。为了方便我讲解，接下来我以“类”作为这个设计思想的应用对象来展开讲解，其他应用场景你可以自行类比。</p>","autoDesc":true}');export{e as data};