const n=JSON.parse('{"key":"v-18acf9a8","path":"/basics/algorithm/13.%E5%9B%9E%E6%BA%AF%E6%B3%95%E4%B8%93%E9%A2%98.html","title":"第13章 回溯法","lang":"zh-CN","frontmatter":{"icon":"article","date":"2021-11-01T00:00:00.000Z","category":["算法"],"tag":["回溯","组合","排列"],"description":"第13章 回溯法 组合问题 剑指offerⅡ79：所有子集 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。 写法一： class Solution { public List&lt;List&lt;Integer&gt;&gt; subsets(int[] nums) { List&lt;List&lt;Integer&gt;&gt; ans = new LinkedList&lt;&gt;(); if(nums.length==0){ return ans; } dfs(nums,0,new LinkedList&lt;&gt;(),ans); System.out.println(ans.toString()); return ans; } private void dfs(int[] nums, int index, LinkedList&lt;Integer&gt; subset, List&lt;List&lt;Integer&gt;&gt; ans){ if(index==nums.length){ ans.add(new LinkedList&lt;&gt;(subset)); return; } subset.add(nums[index]);\\t\\t//先选择下标为index的数 dfs(nums,index+1, subset, ans); //在选择index的情况下，确定index+1的选择情况 subset.removeLast();\\t\\t\\t//不选择下标为index的数 dfs(nums,index+1, subset, ans); //在不选择index的情况下，确定index+1的选择情况 } }","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/algorithm/13.%E5%9B%9E%E6%BA%AF%E6%B3%95%E4%B8%93%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"第13章 回溯法"}],["meta",{"property":"og:description","content":"第13章 回溯法 组合问题 剑指offerⅡ79：所有子集 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。 写法一： class Solution { public List&lt;List&lt;Integer&gt;&gt; subsets(int[] nums) { List&lt;List&lt;Integer&gt;&gt; ans = new LinkedList&lt;&gt;(); if(nums.length==0){ return ans; } dfs(nums,0,new LinkedList&lt;&gt;(),ans); System.out.println(ans.toString()); return ans; } private void dfs(int[] nums, int index, LinkedList&lt;Integer&gt; subset, List&lt;List&lt;Integer&gt;&gt; ans){ if(index==nums.length){ ans.add(new LinkedList&lt;&gt;(subset)); return; } subset.add(nums[index]);\\t\\t//先选择下标为index的数 dfs(nums,index+1, subset, ans); //在选择index的情况下，确定index+1的选择情况 subset.removeLast();\\t\\t\\t//不选择下标为index的数 dfs(nums,index+1, subset, ans); //在不选择index的情况下，确定index+1的选择情况 } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-05-29T06:40:51.000Z"}],["meta",{"property":"article:tag","content":"回溯"}],["meta",{"property":"article:tag","content":"组合"}],["meta",{"property":"article:tag","content":"排列"}],["meta",{"property":"article:published_time","content":"2021-11-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-29T06:40:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第13章 回溯法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-01T00:00:00.000Z\\",\\"dateModified\\":\\"2022-05-29T06:40:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"组合问题","slug":"组合问题","link":"#组合问题","children":[{"level":3,"title":"剑指offerⅡ79：所有子集","slug":"剑指offerii79-所有子集","link":"#剑指offerii79-所有子集","children":[]},{"level":3,"title":"剑指offerⅡ80：包含k个元素的组合","slug":"剑指offerii80-包含k个元素的组合","link":"#剑指offerii80-包含k个元素的组合","children":[]},{"level":3,"title":"剑指offerⅡ81：允许重复选择元素的组合","slug":"剑指offerii81-允许重复选择元素的组合","link":"#剑指offerii81-允许重复选择元素的组合","children":[]},{"level":3,"title":"剑指offerⅡ82：包含重复元素的组合","slug":"剑指offerii82-包含重复元素的组合","link":"#剑指offerii82-包含重复元素的组合","children":[]},{"level":3,"title":"LC17：电话号码的字母组合","slug":"lc17-电话号码的字母组合","link":"#lc17-电话号码的字母组合","children":[]}]},{"level":2,"title":"排列问题","slug":"排列问题","link":"#排列问题","children":[{"level":3,"title":"剑指offerⅡ83：没有重复元素集合的全排列","slug":"剑指offerii83-没有重复元素集合的全排列","link":"#剑指offerii83-没有重复元素集合的全排列","children":[]},{"level":3,"title":"剑指offerⅡ84：包含重复元素集合的全排列","slug":"剑指offerii84-包含重复元素集合的全排列","link":"#剑指offerii84-包含重复元素集合的全排列","children":[]},{"level":3,"title":"剑指offerⅡ85：生成匹配的括号","slug":"剑指offerii85-生成匹配的括号","link":"#剑指offerii85-生成匹配的括号","children":[]},{"level":3,"title":"剑指offerⅡ86：分割回文子字符串","slug":"剑指offerii86-分割回文子字符串","link":"#剑指offerii86-分割回文子字符串","children":[]},{"level":3,"title":"剑指offerⅡ87：恢复IP地址","slug":"剑指offerii87-恢复ip地址","link":"#剑指offerii87-恢复ip地址","children":[]}]}],"git":{"createdTime":1653806451000,"updatedTime":1653806451000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":7.9,"words":2369},"filePathRelative":"basics/algorithm/13.回溯法专题.md","localizedDate":"2021年11月1日","excerpt":"<h1> 第13章 回溯法</h1>\\n<h2> 组合问题</h2>\\n<h3> 剑指offerⅡ79：所有子集</h3>\\n<p>给你一个整数数组 <code>nums</code> ，数组中的元素 <strong>互不相同</strong> 。返回该数组所有可能的子集（幂集）。</p>\\n<p>解集 <strong>不能</strong> 包含重复的子集。你可以按 <strong>任意顺序</strong> 返回解集。</p>\\n<p>写法一：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">List</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">subsets</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">List</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">&gt;</span></span> ans <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">LinkedList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token operator\\">==</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> ans<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token function\\">dfs</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">,</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">LinkedList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>ans<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>ans<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> ans<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">dfs</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> index<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">LinkedList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span> subset<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">List</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">&gt;</span></span> ans<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>index<span class=\\"token operator\\">==</span>nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            ans<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">LinkedList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span>subset<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        subset<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>index<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\t\\t<span class=\\"token comment\\">//先选择下标为index的数</span>\\n        <span class=\\"token function\\">dfs</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">,</span>index<span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> subset<span class=\\"token punctuation\\">,</span> ans<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//在选择index的情况下，确定index+1的选择情况</span>\\n        subset<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">removeLast</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\t\\t\\t<span class=\\"token comment\\">//不选择下标为index的数</span>\\n        <span class=\\"token function\\">dfs</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">,</span>index<span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> subset<span class=\\"token punctuation\\">,</span> ans<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//在不选择index的情况下，确定index+1的选择情况</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
