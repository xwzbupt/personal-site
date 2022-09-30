import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.34b1df6a.js";const t={},p=e(`<h1 id="\u7EBF\u7A0B\u6267\u884C\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6267\u884C\u6846\u67B6" aria-hidden="true">#</a> \u7EBF\u7A0B\u6267\u884C\u6846\u67B6</h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>\u5982\u4F55\u83B7\u53D6\u4E00\u4E2A\u7EBF\u7A0B\u6240\u6267\u884C\u7684\u4EE3\u7801\u7684\u8FD0\u884C\u7ED3\u679C\uFF1F</strong></p><p>\u672C\u8282\uFF0C\u6211\u4EEC\u6765\u8BB2\u7EBF\u7A0B\u6267\u884C\u6846\u67B6\u3002\u7EBF\u7A0B\u6267\u884C\u6846\u67B6\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u7C7B\uFF0C\u5C01\u88C5\u4E86\u7EBF\u7A0B\u521B\u5EFA\u3001\u5173\u95ED\u3001\u6267\u884C\u3001\u7BA1\u7406\u7B49\u8DDF\u4E1A\u52A1\u903B\u8F91\u65E0\u5173\u7684\u4EE3\u7801\u903B\u8F91\uFF0C\u8FD9\u6837\u505A\u4E00\u65B9\u9762\u5B9E\u73B0\u4E86\u4E1A\u52A1\u903B\u8F91\u4E0E\u975E\u4E1A\u52A1\u903B\u8F91\u7684\u89E3\u8026\uFF0C\u53E6\u4E00\u65B9\u9762\u65B9\u4FBF\u4EE3\u7801\u590D\u7528\uFF0C\u5F00\u53D1\u8005\u4E0D\u518D\u9700\u8981\u7F16\u5199\u521B\u5EFA\u7EBF\u7A0B\u3001\u542F\u52A8\u7EBF\u7A0B\u7B49\u4EE3\u7801\u3002\u5B9E\u9645\u4E0A\uFF0C\u4E0A\u4E00\u8282\u4E2D\u8BB2\u5230\u7684ThreadPoolExecutor\u3001Executors\u5C31\u96B6\u5C5E\u4E8E\u7EBF\u7A0B\u6267\u884C\u6846\u67B6\u3002\u5728\u5F00\u59CB\u672C\u8282\u7684\u6B63\u5F0F\u5185\u5BB9\u4E4B\u524D\uFF0C\u6211\u8FD8\u662F\u7ED9\u4F60\u51FA\u4E00\u9053\u601D\u8003\u9898\uFF1A\u5982\u4F55\u83B7\u53D6\u4E00\u4E2A\u7EBF\u7A0B\u6240\u6267\u884C\u7684\u4EE3\u7801\u7684\u8FD0\u884C\u7ED3\u679C\uFF1F</p></div><h2 id="\u4E00\u3001executor\u3001executorservice\u3001executors" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001executor\u3001executorservice\u3001executors" aria-hidden="true">#</a> <strong>\u4E00\u3001Executor\u3001ExecutorService\u3001Executors</strong></h2><p>\u7EBF\u7A0B\u6267\u884C\u6846\u67B6\u5305\u542B\u4E09\u4E2A\u957F\u76F8\u7C7B\u4F3C\u7684\u7C7B\uFF1AExecutor\u3001ExecutorService\u3001Executors\uFF0C\u5F88\u591A\u4EBA\u5206\u4E0D\u6E05\u695A\u5B83\u4EEC\u7684\u533A\u522B\u3002\u5B9E\u9645\u4E0A\uFF0CExecutor\u548CExecutorService\u90FD\u662F\u63A5\u53E3\u3002Executor\u63A5\u53E3\u53EA\u63D0\u4F9B\u4E86\u4E00\u4E2A\u51FD\u6570\uFF1Aexecute()\u3002ExecutorService\u63A5\u53E3\u5BF9Executor\u63A5\u53E3\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u989D\u5916\u63D0\u4F9B\u4E86\u5F88\u591A\u5176\u4ED6\u51FD\u6570\uFF0C\u5305\u62ECsubmit()\u3001shutdown()\u3001shutdownNow()\u3001awaitTermination()\u7B49\u7B49\u3002JUC\u63D0\u4F9B\u7684\u73B0\u6210\u7684\u6267\u884C\u5668\u5E76\u4E0D\u591A\uFF0C\u524D\u9762\u8BB2\u5230\u7684ThreadPoolExecutor\u4FBF\u662F\u5176\u4E2D\u6700\u5E38\u7528\u7684 \u4E00\u4E2A\u3002\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u57FA\u4E8EExecutor\u63A5\u53E3\u6216ExecutorService\u63A5\u53E3\u81EA\u5B9A\u4E49\u6267\u884C\u5668\u3002Executors\u7C7B\u662F\u4E00\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u7528\u6765\u521B\u5EFA\u5404\u79CD\u6267\u884C\u5668\uFF0C\u6709\u70B9\u7C7B\u4F3C\u5BB9\u5668\u4E2D\u7684\u7684Collections\u5DE5\u5177\u7C7B\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/7997800_1662986506.png" alt="img" loading="lazy"></p><p>ThreadPoolExecutor\u5728\u4E0A\u4E00\u8282\u4E2D\u5DF2\u7ECF\u8BB2\u8FC7\uFF0CExecutor\u3001ExecutorService\u53EA\u662F\u63A5\u53E3\uFF0C\u6BD4\u8F83\u7B80\u5355\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u91CD\u70B9\u770B\u4E0BExecutors\uFF0C\u7279\u522B\u662F\u5176\u4E2D\u7684\u51E0\u4E2A\u5DE5\u5382\u65B9\u6CD5\u3002</p><p><strong>1\uFF09newFixedThreadPool()</strong></p><p>newFixedThreadPool()\u51FD\u6570\u7528\u6765\u521B\u5EFA\u5927\u5C0F\u56FA\u5B9A\u7684\u7EBF\u7A0B\u6C60\uFF0C\u5176\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\uFF0CT hreadPoolExecutor\u4E2D\u7684maximumPoolSize\u8DDFcorePoolSize\u76F8\u7B49\uFF0C\u56E0\u6B64\uFF0C\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u90FD\u662F\u6838\u5FC3\u7EBF\u7A0B\uFF0C\u4E00\u65E6\u521B\u5EFA\u4FBF\u4E0D\u4F1A\u9500\u6BC1\u3002workQueue\u4E3ALinkedBlockingQueue\uFF0C\u9ED8\u8BA4\u5927\u5C0F\u4E3AInteger.MAX_VALUE\uFF0C\u5927\u5C0F\u975E\u5E38\u5927\uFF0C\u76F8\u5F53\u4E8E\u65E0\u754C\u963B\u585E\u961F\u5217\u3002\u4EFB\u52A1\u53EF\u4EE5\u65E0\u9650\u7684\u5F80workQueue\u4E2D\u63D0\u4EA4\uFF0C\u6C38\u8FDC\u90FD\u4E0D\u4F1A\u89E6\u53D1\u62D2\u7EDD\u7B56\u7565\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token keyword">int</span> nThreads<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>nThreads<span class="token punctuation">,</span> nThreads<span class="token punctuation">,</span>
                                  <span class="token number">0L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">,</span>
                                  <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2\uFF09newSingleThreadExecutor()</strong></p><p>newSingleThreadExecutor()\u51FD\u6570\u7528\u6765\u521B\u5EFA\u5355\u7EBF\u7A0B\u6267\u884C\u5668\uFF0C\u5176\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\u3002\u8FD9\u4E2A\u51FD\u6570\u8FD4\u56DE\u7684\u662F\u5927\u5C0F\u56FA\u5B9A\u4E3A1\u7684ThreadPoolExecutor\u5BF9\u8C61\u3002workQueue\u540C\u6837\u662F\u5927\u5C0F\u4E3AInteger.MAX_VALUE\u7684LinkedBlockingQueue\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">,</span>
                                  <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3\uFF09newCachedThreadPool()</strong></p><p>newCachedThreadPool()\u51FD\u6570\u521B\u5EFA\u7684\u7EBF\u7A0B\u6C60\u53EA\u5305\u542B\u975E\u6838\u5FC3\u7EBF\u7A0B\uFF0C\u7EBF\u7A0B\u7A7A\u95F260\u79D2\u4EE5\u4E0A\u4FBF\u4F1A\u9500\u6BC1\u3002\u56E0\u4E3AworkQueue\u662FSynchronousQueue\u7C7B\u578B\u7684\uFF0C\u800CSynchronousQueue\u662F\u957F\u5EA6\u4E3A0\u7684\u963B\u585E\u961F\u5217\uFF0C\u6240\u4EE5\uFF0CworkQueue\u4E0D\u5B58\u50A8\u4EFB\u4F55\u7B49\u5F85\u6267\u884C\u7684\u4EFB\u52A1\u3002\u5982\u679C\u7EBF\u7A0B\u6C60\u5185\u5B58\u5728\u7A7A\u95F2\u7EBF\u7A0B\uFF0C\u90A3\u4E48\u65B0\u63D0\u4EA4\u7684\u4EFB\u52A1\u4F1A\u88AB\u7A7A\u95F2\u7EBF\u7A0B\u6267\u884C\uFF0C\u5982\u679C\u7EBF\u7A0B\u6C60\u5185\u6CA1\u6709\u7A7A\u95F2\u7EBF\u7A0B\uFF0C\u90A3\u4E48\u7EBF\u7A0B\u6C60\u4F1A\u521B\u5EFA\u65B0\u7684\u7EBF\u7A0B\u6765\u6267\u884C\u65B0\u63D0\u4EA4\u7684\u4EFB\u52A1\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u7EBF\u7A0B\u6C60\u5927\u5C0F\u4E3AInteger.MAX_VALUE\uFF0C\u56E0\u6B64\uFF0C\u7EBF\u7A0B\u6C60\u4E2D\u521B\u5EFA\u7684\u7EBF\u7A0B\u4E2A\u6570\u53EF\u4EE5\u975E\u5E38\u591A\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">,</span> <span class="token number">60L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">,</span>
                                  <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4\uFF09newScheduledThreadPool()</strong></p><p>newScheduledThreadPool()\u51FD\u6570\u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u652F\u6301\u5B9A\u65F6\u6216\u5468\u671F\u6027\u7684\u6267\u884C\u4EFB\u52A1\u7684\u7EBF\u7A0B\u6C60\uFF0C\u5176\u90E8\u5206\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\u3002\u7EBF\u7A0B\u6C60\u7684\u6838\u5FC3\u7EBF\u7A0B\u6C60\u5927\u5C0F\u4E3AcorePoolSize\uFF0C\u6574\u4E2A\u7EBF\u7A0B\u6C60\u7684\u5927\u5C0F\u4E3AInteger.MAX_VALUE\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ScheduledExecutorService</span> <span class="token function">newScheduledThreadPool</span><span class="token punctuation">(</span><span class="token keyword">int</span> corePoolSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledThreadPoolExecutor</span><span class="token punctuation">(</span>corePoolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduledThreadPoolExecutor</span> <span class="token keyword">extends</span> <span class="token class-name">ThreadPoolExecutor</span>
                                         <span class="token keyword">implements</span> <span class="token class-name">ScheduledExecutorService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ScheduledThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token keyword">int</span> corePoolSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>corePoolSize<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">NANOSECONDS</span><span class="token punctuation">,</span>
              <span class="token keyword">new</span> <span class="token class-name">DelayedWorkQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//\u5B9A\u65F6\u6267\u884C\u4EFB\u52A1\uFF08\u53EA\u6267\u884C\u4E00\u6B21\uFF09</span>
    <span class="token keyword">public</span> <span class="token class-name">ScheduledFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">schedule</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">,</span>
                                       <span class="token keyword">long</span> delay<span class="token punctuation">,</span>
                                       <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    <span class="token comment">//\u5468\u671F\u6027\u6267\u884C\u4EFB\u52A1\uFF08\u56FA\u5B9A\u9891\u7387\uFF09</span>
    <span class="token comment">//period\u6307\u7684\u662F\u4E0A\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\u5F00\u59CB\u4E0E\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\u5F00\u59CB\u4E4B\u95F4\u7684\u65F6\u95F4\u95F4\u9694</span>
    <span class="token keyword">public</span> <span class="token class-name">ScheduledFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">scheduleAtFixedRate</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">,</span>
                                                  <span class="token keyword">long</span> initialDelay<span class="token punctuation">,</span>
                                                  <span class="token keyword">long</span> period<span class="token punctuation">,</span>
                                                  <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    <span class="token comment">//\u5468\u671F\u6027\u6267\u884C\u4EFB\u52A1\uFF08\u56FA\u5B9A\u95F4\u9694\uFF09</span>
    <span class="token comment">//delay\u6307\u7684\u662F\u4E0A\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\u7ED3\u675F\u4E0E\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u5F00\u59CB\u4E4B\u95F4\u7684\u65F6\u95F4\u95F4\u9694</span>
    <span class="token keyword">public</span> <span class="token class-name">ScheduledFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">scheduleWithFixedDelay</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">,</span>
                                                     <span class="token keyword">long</span> initialDelay<span class="token punctuation">,</span>
                                                     <span class="token keyword">long</span> delay<span class="token punctuation">,</span>
                                                     <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    <span class="token comment">//...\u7701\u7565\u5176\u4ED6\u65B9\u6CD5...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001runnable\u3001callable\u3001future" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001runnable\u3001callable\u3001future" aria-hidden="true">#</a> <strong>\u4E8C\u3001Runnable\u3001Callable\u3001Future</strong></h2><p>\u524D\u9762\u8BB2\u5230\uFF0C\u5F53\u6211\u4EEC\u4F7F\u7528\u7EBF\u7A0B\u6267\u884C\u4EFB\u52A1\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u4EFB\u52A1\u5C01\u88C5\u6210Runnable\u5BF9\u8C61\uFF0C\u5E76\u5C06\u4EFB\u52A1\u5BF9\u5E94\u7684\u4E1A\u52A1\u903B\u8F91\u653E\u5165Runnable\u7684run()\u65B9\u6CD5\u3002\u56E0\u4E3Arun()\u65B9\u6CD5\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u6240\u4EE5\uFF0C\u5982\u679C\u6211\u4EEC\u9700\u8981\u5728\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\u83B7\u53D6\u8FD9\u4E2A\u7EBF\u7A0B\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u90A3\u4E48\uFF0C\u6211\u4EEC\u9700\u8981\u8BA9\u4E24\u4E2A\u7EBF\u7A0B\u5171\u4EAB\u540C\u4E00\u4E2A\u7ED3\u679C\u53D8\u91CF\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u7EBF\u7A0BsumThread\u5C06\u8BA1\u7B97\u7ED3\u679C\u901A\u8FC7\u5171\u4EAB\u53D8\u91CFsumRes\u4F20\u9012\u7ED9\u4E86\u7EBF\u7A0Bmain\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo54_1</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> data <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> sumRes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span> sumThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> d <span class="token operator">:</span> data<span class="token punctuation">)</span> sumRes <span class="token operator">+=</span> d<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sumThread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sumThread<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sumRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u5171\u4EAB\u53D8\u91CF\u4E4B\u5916\uFF0C\u7EBF\u7A0B\u6267\u884C\u6846\u67B6\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u8FD4\u56DE\u7EBF\u7A0B\u6267\u884C\u7ED3\u679C\u7684\u65B9\u6CD5\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF0CCallable\u66FF\u4EE3Runnable\u6765\u8868\u793A\u5F85\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u5E26\u8FD4\u56DE\u503C\u7684call()\u51FD\u6570\u66FF\u4EE3\u4E0D\u5E26\u8FD4\u56DE\u503C\u7684run()\u51FD\u6570\u5C01\u88C5\u4E1A\u52A1\u903B\u8F91\uFF0Csubmit()\u51FD\u6570\u66FF\u4EE3execute()\u51FD\u6570\u63D0\u4EA4\u4EFB\u52A1\u3002Future\u4E0A\u7684get()\u51FD\u6570\u662F\u963B\u585E\u51FD\u6570\uFF0C\u53EA\u6709\u5F53call()\u51FD\u6570\u6267\u884C\u7ED3\u675F\u8FD4\u56DE\u4E4B\u540E\uFF0Cget()\u51FD\u6570\u624D\u4ECE\u963B\u585E\u4E2D\u5524\u9192\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo54_2</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> data <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ExecutionException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">ExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> future <span class="token operator">=</span> executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sumRes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> d <span class="token operator">:</span> data<span class="token punctuation">)</span> sumRes <span class="token operator">+=</span> d<span class="token punctuation">;</span>
        <span class="token keyword">return</span> sumRes<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> sumRes <span class="token operator">=</span> future<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sumRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u8BFE\u540E\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u8BFE\u540E\u601D\u8003\u9898" aria-hidden="true">#</a> <strong>\u4E09\u3001\u8BFE\u540E\u601D\u8003\u9898</strong></h2><p>\u57FA\u4E8EExecutor\u63A5\u53E3\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u652F\u6301\u4E32\u884C\u6267\u884C\u4EFB\u52A1\u7684SerialExecutor\u6267\u884C\u5668\u3002</p>`,25),c=[p];function o(l,u){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","executor.html.vue"]]);export{r as default};
