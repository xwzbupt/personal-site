const n=JSON.parse('{"key":"v-8c01ff30","path":"/basics/algorithm/17.%E7%AC%94%E8%AF%95%E9%A2%98.html","title":"第17章 笔试题","lang":"zh-CN","frontmatter":{"description":"第17章 笔试题 import java.util.Arrays; import java.util.Scanner; public class XYSort { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int t = 0; t &lt; T; t++) { int n = sc.nextInt(); int[][] goods = new int[n][2]; for (int j = 0; j &lt; n; j++) { goods[j][0] = sc.nextInt(); } for (int j = 0; j &lt; n; j++) { goods[j][1] = sc.nextInt(); } Arrays.sort(goods, (int[] goods1, int[] goods2) -&gt; { if (goods1[0] == goods2[0]) { return goods2[1] - goods1[1];//降序 } return goods1[0] - goods2[0];//升序 }); int[] temp = new int[n]; for (int j = 0; j &lt; n; j++) { temp[j] = goods[j][1]; } System.out.println(findMaxSequence(temp)); } } private static int findMaxSequence(int[] nums) { int length = nums.length; //dp[i]为长度为i+1的所有的子序列中末尾元素最小值 int dp[] = new int[length]; int end = 0;//标记此时dp的末尾 dp[end] = nums[end]; for (int i = 1; i &lt; length; i++) { if (nums[i] &gt; dp[end]) { dp[++end] = nums[i]; } else { int left = 0, right = end; while (left &lt; right) { int mid = left + right &gt;&gt; 1; if (dp[mid] &lt; nums[i]) { left = mid + 1; } else { right = mid; } } dp[left] = nums[i]; } } return end + 1; } }","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/algorithm/17.%E7%AC%94%E8%AF%95%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"第17章 笔试题"}],["meta",{"property":"og:description","content":"第17章 笔试题 import java.util.Arrays; import java.util.Scanner; public class XYSort { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int t = 0; t &lt; T; t++) { int n = sc.nextInt(); int[][] goods = new int[n][2]; for (int j = 0; j &lt; n; j++) { goods[j][0] = sc.nextInt(); } for (int j = 0; j &lt; n; j++) { goods[j][1] = sc.nextInt(); } Arrays.sort(goods, (int[] goods1, int[] goods2) -&gt; { if (goods1[0] == goods2[0]) { return goods2[1] - goods1[1];//降序 } return goods1[0] - goods2[0];//升序 }); int[] temp = new int[n]; for (int j = 0; j &lt; n; j++) { temp[j] = goods[j][1]; } System.out.println(findMaxSequence(temp)); } } private static int findMaxSequence(int[] nums) { int length = nums.length; //dp[i]为长度为i+1的所有的子序列中末尾元素最小值 int dp[] = new int[length]; int end = 0;//标记此时dp的末尾 dp[end] = nums[end]; for (int i = 1; i &lt; length; i++) { if (nums[i] &gt; dp[end]) { dp[++end] = nums[i]; } else { int left = 0, right = end; while (left &lt; right) { int mid = left + right &gt;&gt; 1; if (dp[mid] &lt; nums[i]) { left = mid + 1; } else { right = mid; } } dp[left] = nums[i]; } } return end + 1; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-05-29T06:40:51.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-29T06:40:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第17章 笔试题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-05-29T06:40:51.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1653806451000,"updatedTime":1653806451000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":0.7,"words":211},"filePathRelative":"basics/algorithm/17.笔试题.md","localizedDate":"2022年5月29日","excerpt":"<h1> 第17章 笔试题</h1>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">java<span class=\\"token punctuation\\">.</span>util<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">Arrays</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">java<span class=\\"token punctuation\\">.</span>util<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">Scanner</span></span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">XYSort</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">Scanner</span> sc <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Scanner</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>in<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">int</span> <span class=\\"token class-name\\">T</span> <span class=\\"token operator\\">=</span> sc<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">nextInt</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> t <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> t <span class=\\"token operator\\">&lt;</span> <span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">;</span> t<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">int</span> n <span class=\\"token operator\\">=</span> sc<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">nextInt</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> goods <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span>n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> j <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> n<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                goods<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> sc<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">nextInt</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> j <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> n<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                goods<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> sc<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">nextInt</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n\\n            <span class=\\"token class-name\\">Arrays</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sort</span><span class=\\"token punctuation\\">(</span>goods<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> goods1<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> goods2<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>goods1<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> goods2<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    <span class=\\"token keyword\\">return</span> goods2<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">-</span> goods1<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//降序</span>\\n                <span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token keyword\\">return</span> goods1<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">-</span> goods2<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//升序</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> temp <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span>n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> j <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> n<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                temp<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> goods<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">findMaxSequence</span><span class=\\"token punctuation\\">(</span>temp<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">findMaxSequence</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">int</span> length <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//dp[i]为长度为i+1的所有的子序列中末尾元素最小值</span>\\n        <span class=\\"token keyword\\">int</span> dp<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span>length<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">int</span> end <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//标记此时dp的末尾</span>\\n        dp<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> dp<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                dp<span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">++</span>end<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">int</span> left <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> right <span class=\\"token operator\\">=</span> end<span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>left <span class=\\"token operator\\">&lt;</span> right<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    <span class=\\"token keyword\\">int</span> mid <span class=\\"token operator\\">=</span> left <span class=\\"token operator\\">+</span> right <span class=\\"token operator\\">&gt;&gt;</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>dp<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                        left <span class=\\"token operator\\">=</span> mid <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n                        right <span class=\\"token operator\\">=</span> mid<span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token punctuation\\">}</span>\\n                dp<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> end <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
