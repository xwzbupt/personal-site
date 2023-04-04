const e=JSON.parse('{"key":"v-5c779816","path":"/basics/OOP/%E5%9F%BA%E4%BA%8E%E6%8E%A5%E5%8F%A3%E8%80%8C%E9%9D%9E%E5%9F%BA%E4%BA%8E%E5%AE%9E%E7%8E%B0%E7%BC%96%E7%A8%8B.html","title":"为什么基于接口而非实现编程？有必要为每个类都定义接口吗？","lang":"zh-CN","frontmatter":{"category":"面向对象","description":"为什么基于接口而非实现编程？有必要为每个类都定义接口吗？ 在上一节课中，我们讲了接口和抽象类，以及各种编程语言是如何支持、实现这两个语法概念的。今天，我们继续讲一个跟“接口”相关的知识点：基于接口而非实现编程。这个原则非常重要，是一种非常有效的提高代码质量的手段，在平时的开发中特别经常被用到。 为了让你理解透彻，并真正掌握这条原则如何应用，今天，我会结合一个有关图片存储的实战案例来讲解。除此之外，这条原则还很容易被过度应用，比如为每一个实现类都定义对应的接口。针对这类问题，在今天的讲解中，我也会告诉你如何来做权衡，怎样恰到好处地应用这条原则。 如何解读原则中的“接口”二字？","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/OOP/%E5%9F%BA%E4%BA%8E%E6%8E%A5%E5%8F%A3%E8%80%8C%E9%9D%9E%E5%9F%BA%E4%BA%8E%E5%AE%9E%E7%8E%B0%E7%BC%96%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"为什么基于接口而非实现编程？有必要为每个类都定义接口吗？"}],["meta",{"property":"og:description","content":"为什么基于接口而非实现编程？有必要为每个类都定义接口吗？ 在上一节课中，我们讲了接口和抽象类，以及各种编程语言是如何支持、实现这两个语法概念的。今天，我们继续讲一个跟“接口”相关的知识点：基于接口而非实现编程。这个原则非常重要，是一种非常有效的提高代码质量的手段，在平时的开发中特别经常被用到。 为了让你理解透彻，并真正掌握这条原则如何应用，今天，我会结合一个有关图片存储的实战案例来讲解。除此之外，这条原则还很容易被过度应用，比如为每一个实现类都定义对应的接口。针对这类问题，在今天的讲解中，我也会告诉你如何来做权衡，怎样恰到好处地应用这条原则。 如何解读原则中的“接口”二字？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-11T18:47:24.000Z"}],["meta",{"property":"article:author","content":"Weiser"}],["meta",{"property":"article:modified_time","content":"2022-06-11T18:47:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么基于接口而非实现编程？有必要为每个类都定义接口吗？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-11T18:47:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Weiser\\",\\"url\\":\\"https://github.com/xwzbupt\\"}]}"]]},"headers":[{"level":2,"title":"如何解读原则中的“接口”二字？","slug":"如何解读原则中的-接口-二字","link":"#如何解读原则中的-接口-二字","children":[]},{"level":2,"title":"如何将这条原则应用到实战中？","slug":"如何将这条原则应用到实战中","link":"#如何将这条原则应用到实战中","children":[]},{"level":2,"title":"是否需要为每个类定义接口？","slug":"是否需要为每个类定义接口","link":"#是否需要为每个类定义接口","children":[]},{"level":2,"title":"重点回顾","slug":"重点回顾","link":"#重点回顾","children":[]},{"level":2,"title":"课堂讨论","slug":"课堂讨论","link":"#课堂讨论","children":[]}],"git":{"createdTime":1654973244000,"updatedTime":1654973244000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":13.37,"words":4012},"filePathRelative":"basics/OOP/基于接口而非基于实现编程.md","localizedDate":"2022年6月11日","excerpt":"<h1> 为什么基于接口而非实现编程？有必要为每个类都定义接口吗？</h1>\\n<p>在上一节课中，我们讲了接口和抽象类，以及各种编程语言是如何支持、实现这两个语法概念的。今天，我们继续讲一个跟“接口”相关的知识点：基于接口而非实现编程。这个原则非常重要，是一种非常有效的提高代码质量的手段，在平时的开发中特别经常被用到。</p>\\n<p>为了让你理解透彻，并真正掌握这条原则如何应用，今天，我会结合一个有关图片存储的实战案例来讲解。除此之外，这条原则还很容易被过度应用，比如为每一个实现类都定义对应的接口。针对这类问题，在今天的讲解中，我也会告诉你如何来做权衡，怎样恰到好处地应用这条原则。</p>\\n<h2> 如何解读原则中的“接口”二字？</h2>","autoDesc":true}');export{e as data};
