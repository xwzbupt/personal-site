const e=JSON.parse('{"key":"v-bfa7ec80","path":"/project/lottery/lottery-design-patterns.html","title":"Lottery项目所用到的设计模式","lang":"zh-CN","frontmatter":{"description":"Lottery项目所用到的设计模式 1. 简单工厂 工厂模式主要解决什么问题？ 当创建逻辑比较复杂，是一个“大工程”的时候，我们就考虑使用工厂模式，封装对象的创建过程，将对象的创建和使用相分离。何为创建逻辑比较复杂呢？我总结了下面两种情况。 第一种情况：类似规则配置解析的例子，代码中存在 if-else 分支判断，动态地根据不同的类型创建不同的对象。针对这种情况，我们就考虑使用工厂模式，将这一大坨 if-else 创建对象的代码抽离出来，放到工厂类中。 还有一种情况，尽管我们不需要根据不同的类型创建不同的对象，但是，单个对象本身的创建过程比较复杂，比如前面提到的要组合其他类对象，做各种初始化操作。在这种情况下，我们也可以考虑使用工厂模式，将对象的创建过程封装到工厂类中。 对于第一种情况，当每个对象的创建逻辑都比较简单的时候，我推荐使用简单工厂模式，将多个对象的创建逻辑放到一个工厂类中。当每个对象的创建逻辑都比较复杂的时候，为了避免设计一个过于庞大的简单工厂类，我推荐使用工厂方法模式，将创建逻辑拆分得更细，每个对象的创建逻辑独立到各自的工厂类中。 对于第二种情况，因为单个对象本身的创建逻辑就比较复杂，所以，建议使用工厂方法模式。 除了刚刚提到的这几种情况之外，如果创建对象的逻辑并不复杂，那我们就直接通过 new 来创建对象就可以了，不需要使用工厂模式。 现在，我们上升一个思维层面来看工厂模式，它的作用无外乎下面这四个。这也是判断要不要使用工厂模式的最本质的参考标准。 封装变化：创建逻辑有可能变化，封装成工厂类之后，创建逻辑的变更对调用者透明。 代码复用：创建代码抽离到独立的工厂类之后可以复用。 隔离复杂性：封装复杂的创建逻辑，调用者无需了解如何创建对象。 控制复杂度：将创建代码抽离出来，让原本的函数或类职责更单一，代码更简洁.","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/project/lottery/lottery-design-patterns.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"Lottery项目所用到的设计模式"}],["meta",{"property":"og:description","content":"Lottery项目所用到的设计模式 1. 简单工厂 工厂模式主要解决什么问题？ 当创建逻辑比较复杂，是一个“大工程”的时候，我们就考虑使用工厂模式，封装对象的创建过程，将对象的创建和使用相分离。何为创建逻辑比较复杂呢？我总结了下面两种情况。 第一种情况：类似规则配置解析的例子，代码中存在 if-else 分支判断，动态地根据不同的类型创建不同的对象。针对这种情况，我们就考虑使用工厂模式，将这一大坨 if-else 创建对象的代码抽离出来，放到工厂类中。 还有一种情况，尽管我们不需要根据不同的类型创建不同的对象，但是，单个对象本身的创建过程比较复杂，比如前面提到的要组合其他类对象，做各种初始化操作。在这种情况下，我们也可以考虑使用工厂模式，将对象的创建过程封装到工厂类中。 对于第一种情况，当每个对象的创建逻辑都比较简单的时候，我推荐使用简单工厂模式，将多个对象的创建逻辑放到一个工厂类中。当每个对象的创建逻辑都比较复杂的时候，为了避免设计一个过于庞大的简单工厂类，我推荐使用工厂方法模式，将创建逻辑拆分得更细，每个对象的创建逻辑独立到各自的工厂类中。 对于第二种情况，因为单个对象本身的创建逻辑就比较复杂，所以，建议使用工厂方法模式。 除了刚刚提到的这几种情况之外，如果创建对象的逻辑并不复杂，那我们就直接通过 new 来创建对象就可以了，不需要使用工厂模式。 现在，我们上升一个思维层面来看工厂模式，它的作用无外乎下面这四个。这也是判断要不要使用工厂模式的最本质的参考标准。 封装变化：创建逻辑有可能变化，封装成工厂类之后，创建逻辑的变更对调用者透明。 代码复用：创建代码抽离到独立的工厂类之后可以复用。 隔离复杂性：封装复杂的创建逻辑，调用者无需了解如何创建对象。 控制复杂度：将创建代码抽离出来，让原本的函数或类职责更单一，代码更简洁."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-13T10:13:06.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-13T10:13:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lottery项目所用到的设计模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-13T10:13:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 简单工厂","slug":"_1-简单工厂","link":"#_1-简单工厂","children":[{"level":3,"title":"1.1 在发奖领域的运用","slug":"_1-1-在发奖领域的运用","link":"#_1-1-在发奖领域的运用","children":[]},{"level":3,"title":"1.2 配合策略模式使用","slug":"_1-2-配合策略模式使用","link":"#_1-2-配合策略模式使用","children":[]}]},{"level":2,"title":"2. 策略模式","slug":"_2-策略模式","link":"#_2-策略模式","children":[{"level":3,"title":"2.1 抽奖策略","slug":"_2-1-抽奖策略","link":"#_2-1-抽奖策略","children":[]},{"level":3,"title":"2.2 ID生成策略","slug":"_2-2-id生成策略","link":"#_2-2-id生成策略","children":[]}]},{"level":2,"title":"3. 模板模式","slug":"_3-模板模式","link":"#_3-模板模式","children":[{"level":3,"title":"3.1 模板模式在Lottery的应用概述","slug":"_3-1-模板模式在lottery的应用概述","link":"#_3-1-模板模式在lottery的应用概述","children":[]},{"level":3,"title":"3.2 定义抽象的抽奖过程","slug":"_3-2-定义抽象的抽奖过程","link":"#_3-2-定义抽象的抽奖过程","children":[]},{"level":3,"title":"3.2 定义抽象的抽奖过程的子类","slug":"_3-2-定义抽象的抽奖过程的子类","link":"#_3-2-定义抽象的抽奖过程的子类","children":[]}]},{"level":2,"title":"4. 状态模式","slug":"_4-状态模式","link":"#_4-状态模式","children":[{"level":3,"title":"4.1 代码结构","slug":"_4-1-代码结构","link":"#_4-1-代码结构","children":[]},{"level":3,"title":"4.2 状态类","slug":"_4-2-状态类","link":"#_4-2-状态类","children":[]},{"level":3,"title":"4.3 配置状态类","slug":"_4-3-配置状态类","link":"#_4-3-配置状态类","children":[]},{"level":3,"title":"4.4 状态处理","slug":"_4-4-状态处理","link":"#_4-4-状态处理","children":[]},{"level":3,"title":"4.5 状态类的使用","slug":"_4-5-状态类的使用","link":"#_4-5-状态类的使用","children":[]}]},{"level":2,"title":"5. 组合模式","slug":"_5-组合模式","link":"#_5-组合模式","children":[{"level":3,"title":"5.1 决策树表结构描述","slug":"_5-1-决策树表结构描述","link":"#_5-1-决策树表结构描述","children":[]},{"level":3,"title":"5.2 决策树代码逻辑描述","slug":"_5-2-决策树代码逻辑描述","link":"#_5-2-决策树代码逻辑描述","children":[]}]},{"level":2,"title":"6. 门面模式","slug":"_6-门面模式","link":"#_6-门面模式","children":[]}],"git":{"createdTime":1662989076000,"updatedTime":1663063986000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":2}]},"readingTime":{"minutes":24.58,"words":7374},"filePathRelative":"project/lottery/lottery-design-patterns.md","localizedDate":"2022年9月12日","excerpt":"<h1> <strong>Lottery项目所用到的设计模式</strong></h1>\\n<h2> <strong>1. 简单工厂</strong></h2>\\n<p><strong>工厂模式主要解决什么问题？</strong></p>\\n<blockquote>\\n<p>当创建逻辑比较复杂，是一个“大工程”的时候，我们就考虑使用工厂模式，封装对象的创建过程，将对象的创建和使用相分离。何为创建逻辑比较复杂呢？我总结了下面两种情况。</p>\\n<ul>\\n<li>第一种情况：类似规则配置解析的例子，<strong>代码中存在 if-else 分支判断，动态地根据不同的类型创建不同的对象</strong>。针对这种情况，我们就考虑使用工厂模式，将这一大坨 if-else 创建对象的代码抽离出来，放到工厂类中。</li>\\n<li>还有一种情况，尽管我们不需要根据不同的类型创建不同的对象，但是，<strong>单个对象本身的创建过程比较复杂，比如前面提到的要组合其他类对象，做各种初始化操作</strong>。在这种情况下，我们也可以考虑使用工厂模式，将对象的创建过程封装到工厂类中。</li>\\n</ul>\\n<p>对于第一种情况，当每个对象的创建逻辑都比较简单的时候，我推荐使用简单工厂模式，将多个对象的创建逻辑放到一个工厂类中。当每个对象的创建逻辑都比较复杂的时候，为了避免设计一个过于庞大的简单工厂类，我推荐使用工厂方法模式，将创建逻辑拆分得更细，每个对象的创建逻辑独立到各自的工厂类中。</p>\\n<p>对于第二种情况，因为单个对象本身的创建逻辑就比较复杂，所以，建议使用工厂方法模式。</p>\\n<p>除了刚刚提到的这几种情况之外，如果创建对象的逻辑并不复杂，那我们就直接通过 new 来创建对象就可以了，不需要使用工厂模式。</p>\\n<p>现在，我们上升一个思维层面来看工厂模式，它的作用无外乎下面这四个。这也是判断要不要使用工厂模式的最本质的参考标准。</p>\\n<ul>\\n<li>封装变化：创建逻辑有可能变化，封装成工厂类之后，创建逻辑的变更对调用者透明。</li>\\n<li>代码复用：创建代码抽离到独立的工厂类之后可以复用。</li>\\n<li>隔离复杂性：封装复杂的创建逻辑，调用者无需了解如何创建对象。</li>\\n<li>控制复杂度：将创建代码抽离出来，让原本的函数或类职责更单一，代码更简洁.</li>\\n</ul>\\n</blockquote>","autoDesc":true}');export{e as data};
