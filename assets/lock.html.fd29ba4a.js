const e=JSON.parse('{"key":"v-4d007eaa","path":"/language/Java/multithreading/lock/lock.html","title":"Lock","lang":"zh-CN","frontmatter":{"category":["Java"],"description":"JUC Lock锁的特性及用法 相对Java synchronized，JUC Lock有何优势? 尽管synchronized的底层原理比较复杂，但是使用起来却非常简单。从本节开始，我们来学习另外一种互斥锁：JUC并发包提供的Lock锁。相对于synchronized内置锁，JUC Lock锁提供了更加丰富的特性，比如支持公平锁、可中断锁、非阻塞锁、...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/language/Java/multithreading/lock/lock.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"Lock"}],["meta",{"property":"og:description","content":"JUC Lock锁的特性及用法 相对Java synchronized，JUC Lock有何优势? 尽管synchronized的底层原理比较复杂，但是使用起来却非常简单。从本节开始，我们来学习另外一种互斥锁：JUC并发包提供的Lock锁。相对于synchronized内置锁，JUC Lock锁提供了更加丰富的特性，比如支持公平锁、可中断锁、非阻塞锁、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-18T06:42:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-18T06:42:46.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"JUC Lock锁的特性及用法","slug":"juc-lock锁的特性及用法","link":"#juc-lock锁的特性及用法","children":[{"level":3,"title":"1、JUC锁概述","slug":"_1、juc锁概述","link":"#_1、juc锁概述","children":[]},{"level":3,"title":"2、可重入锁","slug":"_2、可重入锁","link":"#_2、可重入锁","children":[]},{"level":3,"title":"3、公平锁","slug":"_3、公平锁","link":"#_3、公平锁","children":[]},{"level":3,"title":"4、可中断锁","slug":"_4、可中断锁","link":"#_4、可中断锁","children":[]},{"level":3,"title":"5、非阻塞锁","slug":"_5、非阻塞锁","link":"#_5、非阻塞锁","children":[]},{"level":3,"title":"6、可超时锁","slug":"_6、可超时锁","link":"#_6、可超时锁","children":[]}]},{"level":2,"title":"JUC Lock底层原理","slug":"juc-lock底层原理","link":"#juc-lock底层原理","children":[{"level":3,"title":"一、AQS简介","slug":"一、aqs简介","link":"#一、aqs简介","children":[]},{"level":3,"title":"二、数据结构","slug":"二、数据结构","link":"#二、数据结构","children":[]},{"level":3,"title":"三、基本原理","slug":"三、基本原理","link":"#三、基本原理","children":[]},{"level":3,"title":"四、中断机制","slug":"四、中断机制","link":"#四、中断机制","children":[]},{"level":3,"title":"五、超时机制","slug":"五、超时机制","link":"#五、超时机制","children":[]}]},{"level":2,"title":"读写锁和StampedLock","slug":"读写锁和stampedlock","link":"#读写锁和stampedlock","children":[{"level":3,"title":"一、读写锁的基本用法","slug":"一、读写锁的基本用法","link":"#一、读写锁的基本用法","children":[]},{"level":3,"title":"二、锁升级和锁降级","slug":"二、锁升级和锁降级","link":"#二、锁升级和锁降级","children":[]},{"level":3,"title":"三、读写锁的实现原理","slug":"三、读写锁的实现原理","link":"#三、读写锁的实现原理","children":[]},{"level":3,"title":"四、读写锁的升级版","slug":"四、读写锁的升级版","link":"#四、读写锁的升级版","children":[]}]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1663400355000,"updatedTime":1663483366000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":2}]},"readingTime":{"minutes":41.45,"words":12436},"filePathRelative":"language/Java/multithreading/lock/lock.md","localizedDate":"2022年9月17日"}');export{e as data};
