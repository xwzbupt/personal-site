const e=JSON.parse('{"key":"v-55d9f31e","path":"/language/Java/multithreading/basic/JMM.html","title":"JMM","lang":"zh-CN","frontmatter":{"category":["Java"],"summary":"JMM 但凡讲到多线程，我们就不得不讲一下Java内存模型。Java内存模型用来解决多线程的三大问题：可见性问题、有序性问题、原子性问题。Java内存模型也是面试中的常考点。比如: Java内存模型中的“内存”两个字如何理解？跟多线程有什么关系？ 既然CPU支持MESI等缓存一致性协议，为什么还会有可见性问题？ volatile的作用是什么?等等。 对于Ja","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/language/Java/multithreading/basic/JMM.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"JMM"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-16T08:45:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-16T08:45:46.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Java内存模型","slug":"java内存模型","link":"#java内存模型","children":[{"level":3,"title":"一、CPU缓存导致可见性问题","slug":"一、cpu缓存导致可见性问题","link":"#一、cpu缓存导致可见性问题","children":[]},{"level":3,"title":"二、指令重排导致有序性问题","slug":"二、指令重排导致有序性问题","link":"#二、指令重排导致有序性问题","children":[]},{"level":3,"title":"三、线程竞争导致原子性问题","slug":"三、线程竞争导致原子性问题","link":"#三、线程竞争导致原子性问题","children":[]},{"level":3,"title":"四、Java内存模型","slug":"四、java内存模型","link":"#四、java内存模型","children":[]}]},{"level":2,"title":"JMM如何解决CAS","slug":"jmm如何解决cas","link":"#jmm如何解决cas","children":[{"level":3,"title":"一、volatile关键字","slug":"一、volatile关键字","link":"#一、volatile关键字","children":[]},{"level":3,"title":"二、synchronized关键字","slug":"二、synchronized关键字","link":"#二、synchronized关键字","children":[]},{"level":3,"title":"三、final关键字","slug":"三、final关键字","link":"#三、final关键字","children":[]},{"level":3,"title":"四、happens-before规则","slug":"四、happens-before规则","link":"#四、happens-before规则","children":[]}]},{"level":2,"title":"CPU支持MESI，为什么还有可见性问题","slug":"cpu支持mesi-为什么还有可见性问题","link":"#cpu支持mesi-为什么还有可见性问题","children":[{"level":3,"title":"一、缓存一致性协议","slug":"一、缓存一致性协议","link":"#一、缓存一致性协议","children":[]},{"level":3,"title":"二、Store Buffer","slug":"二、store-buffer","link":"#二、store-buffer","children":[]},{"level":3,"title":"三、Invalidate Queue","slug":"三、invalidate-queue","link":"#三、invalidate-queue","children":[]},{"level":3,"title":"四、重审可见性问题","slug":"四、重审可见性问题","link":"#四、重审可见性问题","children":[]}]},{"level":2,"title":"思考问题","slug":"思考问题","link":"#思考问题","children":[]}],"git":{"createdTime":1663317946000,"updatedTime":1663317946000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":38.51,"words":11553},"filePathRelative":"language/Java/multithreading/basic/JMM.md","localizedDate":"2022年9月16日"}');export{e as data};
