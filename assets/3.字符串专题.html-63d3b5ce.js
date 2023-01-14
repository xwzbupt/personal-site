const n=JSON.parse(`{"key":"v-43f32ebc","path":"/basics/algorithm/3.%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%93%E9%A2%98.html","title":"第3章 字符串","lang":"zh-CN","frontmatter":{"icon":"article","date":"2021-11-01T00:00:00.000Z","category":["算法"],"tag":["字符串","滑动窗口","回文"],"description":"第3章 字符串 双指针 剑指offerⅡ14：字符串中的变位词 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。 class Solution { public boolean checkInclusion(String s1, String s2) { if (s1.length() &gt; s2.length()) { return false; } int[] counts = new int[26]; for (int i = 0; i &lt; s1.length(); i++) { counts[s1.charAt(i) - 'a']++; counts[s2.charAt(i) - 'a']--; } if (isAllZero(counts)) { return true; } //i是右边界 for (int i = s1.length(); i &lt; s2.length(); i++) { counts[s2.charAt(i) - 'a']--; counts[s2.charAt(i - s1.length()) - 'a']++; if (isAllZero(counts)) { return true; } } return false; } private boolean isAllZero(int[] counts) { for (int count : counts) { if (count != 0) { return false; } } return true; } }","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/algorithm/3.%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%93%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"第3章 字符串"}],["meta",{"property":"og:description","content":"第3章 字符串 双指针 剑指offerⅡ14：字符串中的变位词 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。 class Solution { public boolean checkInclusion(String s1, String s2) { if (s1.length() &gt; s2.length()) { return false; } int[] counts = new int[26]; for (int i = 0; i &lt; s1.length(); i++) { counts[s1.charAt(i) - 'a']++; counts[s2.charAt(i) - 'a']--; } if (isAllZero(counts)) { return true; } //i是右边界 for (int i = s1.length(); i &lt; s2.length(); i++) { counts[s2.charAt(i) - 'a']--; counts[s2.charAt(i - s1.length()) - 'a']++; if (isAllZero(counts)) { return true; } } return false; } private boolean isAllZero(int[] counts) { for (int count : counts) { if (count != 0) { return false; } } return true; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-05-29T06:40:51.000Z"}],["meta",{"property":"article:tag","content":"字符串"}],["meta",{"property":"article:tag","content":"滑动窗口"}],["meta",{"property":"article:tag","content":"回文"}],["meta",{"property":"article:published_time","content":"2021-11-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-29T06:40:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第3章 字符串\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-01T00:00:00.000Z\\",\\"dateModified\\":\\"2022-05-29T06:40:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"双指针","slug":"双指针","link":"#双指针","children":[{"level":3,"title":"剑指offerⅡ14：字符串中的变位词","slug":"剑指offerii14-字符串中的变位词","link":"#剑指offerii14-字符串中的变位词","children":[]},{"level":3,"title":"剑指offerⅡ15：字符串中的所有变位词","slug":"剑指offerii15-字符串中的所有变位词","link":"#剑指offerii15-字符串中的所有变位词","children":[]},{"level":3,"title":"剑指offerⅡ16：不含重复字符的最长子字符串","slug":"剑指offerii16-不含重复字符的最长子字符串","link":"#剑指offerii16-不含重复字符的最长子字符串","children":[]},{"level":3,"title":"剑指offerⅡ17：包含所有字符的最短字符串","slug":"剑指offerii17-包含所有字符的最短字符串","link":"#剑指offerii17-包含所有字符的最短字符串","children":[]}]},{"level":2,"title":"回文字符串","slug":"回文字符串","link":"#回文字符串","children":[{"level":3,"title":"剑指offerⅡ18：有效的回文","slug":"剑指offerii18-有效的回文","link":"#剑指offerii18-有效的回文","children":[]},{"level":3,"title":"剑指offerⅡ19：最多删除一个字符得到回文","slug":"剑指offerii19-最多删除一个字符得到回文","link":"#剑指offerii19-最多删除一个字符得到回文","children":[]},{"level":3,"title":"剑指offerⅡ20：回文子字符串的个数","slug":"剑指offerii20-回文子字符串的个数","link":"#剑指offerii20-回文子字符串的个数","children":[]}]}],"git":{"createdTime":1653806451000,"updatedTime":1653806451000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":5.21,"words":1562},"filePathRelative":"basics/algorithm/3.字符串专题.md","localizedDate":"2021年11月1日","excerpt":"<h1> 第3章 字符串</h1>\\n<h2> 双指针</h2>\\n<h3> 剑指offerⅡ14：字符串中的变位词</h3>\\n<p>给定两个字符串 <code>s1</code> 和 <code>s2</code>，写一个函数来判断 <code>s2</code> 是否包含 <code>s1</code> 的某个变位词。</p>\\n<p>换句话说，第一个字符串的排列之一是第二个字符串的 <strong>子串</strong> 。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">checkInclusion</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> s1<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">String</span> s2<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>s1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> s2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> counts <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">26</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> s1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            counts<span class=\\"token punctuation\\">[</span>s1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">charAt</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'a'</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n            counts<span class=\\"token punctuation\\">[</span>s2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">charAt</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'a'</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token function\\">isAllZero</span><span class=\\"token punctuation\\">(</span>counts<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">//i是右边界</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> s1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> s2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            counts<span class=\\"token punctuation\\">[</span>s2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">charAt</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'a'</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n            counts<span class=\\"token punctuation\\">[</span>s2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">charAt</span><span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">-</span> s1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'a'</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token function\\">isAllZero</span><span class=\\"token punctuation\\">(</span>counts<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">isAllZero</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> counts<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> count <span class=\\"token operator\\">:</span> counts<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>count <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
