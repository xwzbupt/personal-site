const n=JSON.parse('{"key":"v-108f4202","path":"/basics/algorithm/4.%E9%93%BE%E8%A1%A8%E4%B8%93%E9%A2%98.html","title":"第4章 链表","lang":"zh-CN","frontmatter":{"icon":"article","date":"2021-11-01T00:00:00.000Z","category":["算法"],"tag":["链表"],"description":"第4章 链表 双指针 剑指offerⅡ21：删除倒数第n个节点 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。 class Solution { public ListNode removeNthFromEnd(ListNode head, int n) { ListNode dummy = new ListNode(0); dummy.next = head; ListNode fast = head; ListNode slow = dummy; while (n &gt; 0) { fast = fast.next; n--; } while (fast != null) { fast = fast.next; slow = slow.next; } slow.next = slow.next.next; return dummy.next; } }","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/algorithm/4.%E9%93%BE%E8%A1%A8%E4%B8%93%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"第4章 链表"}],["meta",{"property":"og:description","content":"第4章 链表 双指针 剑指offerⅡ21：删除倒数第n个节点 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。 class Solution { public ListNode removeNthFromEnd(ListNode head, int n) { ListNode dummy = new ListNode(0); dummy.next = head; ListNode fast = head; ListNode slow = dummy; while (n &gt; 0) { fast = fast.next; n--; } while (fast != null) { fast = fast.next; slow = slow.next; } slow.next = slow.next.next; return dummy.next; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-05-29T06:40:51.000Z"}],["meta",{"property":"article:tag","content":"链表"}],["meta",{"property":"article:published_time","content":"2021-11-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-29T06:40:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第4章 链表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-01T00:00:00.000Z\\",\\"dateModified\\":\\"2022-05-29T06:40:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"双指针","slug":"双指针","link":"#双指针","children":[{"level":3,"title":"剑指offerⅡ21：删除倒数第n个节点","slug":"剑指offerii21-删除倒数第n个节点","link":"#剑指offerii21-删除倒数第n个节点","children":[]},{"level":3,"title":"剑指offerⅡ22：链表中环的入口节点","slug":"剑指offerii22-链表中环的入口节点","link":"#剑指offerii22-链表中环的入口节点","children":[]},{"level":3,"title":"剑指offerⅡ23：两个链表的第一个重合的节点","slug":"剑指offerii23-两个链表的第一个重合的节点","link":"#剑指offerii23-两个链表的第一个重合的节点","children":[]}]},{"level":2,"title":"反转链表","slug":"反转链表","link":"#反转链表","children":[{"level":3,"title":"剑指offerⅡ24：反转链表","slug":"剑指offerii24-反转链表","link":"#剑指offerii24-反转链表","children":[]},{"level":3,"title":"剑指offerⅡ25：链表中数字相加","slug":"剑指offerii25-链表中数字相加","link":"#剑指offerii25-链表中数字相加","children":[]},{"level":3,"title":"剑指offerⅡ26：重排链表","slug":"剑指offerii26-重排链表","link":"#剑指offerii26-重排链表","children":[]},{"level":3,"title":"剑指offerⅡ27：回文链表","slug":"剑指offerii27-回文链表","link":"#剑指offerii27-回文链表","children":[]}]},{"level":2,"title":"双向链表和循环列表","slug":"双向链表和循环列表","link":"#双向链表和循环列表","children":[{"level":3,"title":"剑指offerⅡ28：展平多级双向链表","slug":"剑指offerii28-展平多级双向链表","link":"#剑指offerii28-展平多级双向链表","children":[]},{"level":3,"title":"剑指offerⅡ29：排序的循环链表","slug":"剑指offerii29-排序的循环链表","link":"#剑指offerii29-排序的循环链表","children":[]},{"level":3,"title":"LC138：复杂链表的复制","slug":"lc138-复杂链表的复制","link":"#lc138-复杂链表的复制","children":[]}]}],"git":{"createdTime":1653806451000,"updatedTime":1653806451000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":8.57,"words":2570},"filePathRelative":"basics/algorithm/4.链表专题.md","localizedDate":"2021年11月1日","excerpt":"<h1> 第4章 链表</h1>\\n<h2> 双指针</h2>\\n<h3> 剑指offerⅡ21：删除倒数第n个节点</h3>\\n<p>给定一个链表，删除链表的倒数第 <code>n</code> 个结点，并且返回链表的头结点。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">ListNode</span> <span class=\\"token function\\">removeNthFromEnd</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ListNode</span> head<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> n<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">ListNode</span> dummy <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ListNode</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        dummy<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">ListNode</span> fast <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">ListNode</span> slow <span class=\\"token operator\\">=</span> dummy<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            fast <span class=\\"token operator\\">=</span> fast<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n            n<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>fast <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            fast <span class=\\"token operator\\">=</span> fast<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n            slow <span class=\\"token operator\\">=</span> slow<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        slow<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> slow<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> dummy<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
