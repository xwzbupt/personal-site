import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{f as s}from"./app.884586f9.js";const a={},t=s('<h1 id="\u7D22\u5F15-\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15-\u4E0B" aria-hidden="true">#</a> \u7D22\u5F15\uFF08\u4E0B\uFF09</h1><p>\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u548C\u4F60\u4ECB\u7ECD\u4E86 InnoDB \u7D22\u5F15\u7684\u6570\u636E\u7ED3\u6784\u6A21\u578B\uFF0C\u4ECA\u5929\u6211\u4EEC\u518D\u7EE7\u7EED\u804A\u804A\u8DDF MySQL \u7D22\u5F15\u6709\u5173\u7684\u6982\u5FF5\u3002</p><p>\u5728\u5F00\u59CB\u8FD9\u7BC7\u6587\u7AE0\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0B\u8FD9\u4E2A\u95EE\u9898\uFF1A</p><p>\u5728\u4E0B\u9762\u8FD9\u4E2A\u8868 T \u4E2D\uFF0C\u5982\u679C\u6211\u6267\u884C select * from T where k between 3 and 5\uFF0C\u9700\u8981\u6267\u884C\u51E0\u6B21\u6811\u7684\u641C\u7D22\u64CD\u4F5C\uFF0C\u4F1A\u626B\u63CF\u591A\u5C11\u884C\uFF1F</p><p>\u4E0B\u9762\u662F\u8FD9\u4E2A\u8868\u7684\u521D\u59CB\u5316\u8BED\u53E5\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token keyword">table</span> T <span class="token punctuation">(</span>\nID <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\nk <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">,</span> \ns <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n<span class="token keyword">index</span> k<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">InnoDB</span><span class="token punctuation">;</span>\n \n<span class="token keyword">insert</span> <span class="token keyword">into</span> T <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;cc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;ee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">&#39;ff&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">700</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">&#39;gg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/InnoDB\u7684\u7D22\u5F15\u7EC4\u7EC7\u7ED3\u6784.png" alt="" loading="lazy"></p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u770B\u8FD9\u6761 SQL \u67E5\u8BE2\u8BED\u53E5\u7684\u6267\u884C\u6D41\u7A0B\uFF1A</p><ol><li><p>\u5728 k \u7D22\u5F15\u6811\u4E0A\u627E\u5230 k=3 \u7684\u8BB0\u5F55\uFF0C\u53D6\u5F97 ID = 300\uFF1B</p></li><li><p>\u518D\u5230 ID \u7D22\u5F15\u6811\u67E5\u5230 ID=300 \u5BF9\u5E94\u7684 R3\uFF1B</p></li><li><p>\u5728 k \u7D22\u5F15\u6811\u53D6\u4E0B\u4E00\u4E2A\u503C k=5\uFF0C\u53D6\u5F97 ID=500\uFF1B</p></li><li><p>\u518D\u56DE\u5230 ID \u7D22\u5F15\u6811\u67E5\u5230 ID=500 \u5BF9\u5E94\u7684 R4\uFF1B</p></li><li><p>\u5728 k \u7D22\u5F15\u6811\u53D6\u4E0B\u4E00\u4E2A\u503C k=6\uFF0C\u4E0D\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u5FAA\u73AF\u7ED3\u675F\u3002</p></li></ol><p>\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u56DE\u5230\u4E3B\u952E\u7D22\u5F15\u6811\u641C\u7D22\u7684\u8FC7\u7A0B\uFF0C\u6211\u4EEC\u79F0\u4E3A<strong>\u56DE\u8868</strong>\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E2A\u67E5\u8BE2\u8FC7\u7A0B\u8BFB\u4E86 k \u7D22\u5F15\u6811\u7684 3 \u6761\u8BB0\u5F55\uFF08\u6B65\u9AA4 1\u30013 \u548C 5\uFF09\uFF0C\u56DE\u8868\u4E86\u4E24\u6B21\uFF08\u6B65\u9AA4 2 \u548C 4\uFF09\u3002</p><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u7531\u4E8E<strong>\u67E5\u8BE2\u7ED3\u679C\u6240\u9700\u8981\u7684\u6570\u636E\u53EA\u5728\u4E3B\u952E\u7D22\u5F15\u4E0A\u6709\uFF0C\u6240\u4EE5\u4E0D\u5F97\u4E0D\u56DE\u8868\u3002</strong> \u90A3\u4E48\uFF0C\u6709\u6CA1\u6709\u53EF\u80FD\u7ECF\u8FC7\u7D22\u5F15\u4F18\u5316\uFF0C\u907F\u514D\u56DE\u8868\u8FC7\u7A0B\u5462\uFF1F</p><h2 id="\u8986\u76D6\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u8986\u76D6\u7D22\u5F15" aria-hidden="true">#</a> \u8986\u76D6\u7D22\u5F15</h2><p>\u5982\u679C\u6267\u884C\u7684\u8BED\u53E5\u662F select ID from T where k between 3 and 5\uFF0C\u8FD9\u65F6\u53EA\u9700\u8981\u67E5 ID \u7684\u503C\uFF0C\u800C ID \u7684\u503C\u5DF2\u7ECF\u5728 k \u7D22\u5F15\u6811\u4E0A\u4E86\uFF0C\u56E0\u6B64\u53EF\u4EE5\u76F4\u63A5\u63D0\u4F9B\u67E5\u8BE2\u7ED3\u679C\uFF0C\u4E0D\u9700\u8981\u56DE\u8868\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u5728\u8FD9\u4E2A\u67E5\u8BE2\u91CC\u9762\uFF0C\u7D22\u5F15 k \u5DF2\u7ECF\u201C\u8986\u76D6\u4E86\u201D\u6211\u4EEC\u7684\u67E5\u8BE2\u9700\u6C42\uFF0C\u6211\u4EEC\u79F0\u4E3A<mark>\u8986\u76D6\u7D22\u5F15</mark>\u3002</strong></p><p>\u7531\u4E8E\u8986\u76D6\u7D22\u5F15\u53EF\u4EE5\u51CF\u5C11\u6811\u7684\u641C\u7D22\u6B21\u6570\uFF0C\u663E\u8457\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\uFF0C\u6240\u4EE5\u4F7F\u7528\u8986\u76D6\u7D22\u5F15\u662F\u4E00\u4E2A\u5E38\u7528\u7684\u6027\u80FD\u4F18\u5316\u624B\u6BB5\u3002</p><p><strong>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u5F15\u64CE\u5185\u90E8\u4F7F\u7528\u8986\u76D6\u7D22\u5F15\u5728\u7D22\u5F15 k \u4E0A\u5176\u5B9E\u8BFB\u4E86\u4E09\u4E2A\u8BB0\u5F55\uFF0CR3~R5\uFF08\u5BF9\u5E94\u7684\u7D22\u5F15 k \u4E0A\u7684\u8BB0\u5F55\u9879\uFF09\uFF0C\u4F46\u662F\u5BF9\u4E8E MySQL \u7684 Server \u5C42\u6765\u8BF4\uFF0C\u5B83\u5C31\u662F\u627E\u5F15\u64CE\u62FF\u5230\u4E86\u4E24\u6761\u8BB0\u5F55\uFF0C\u56E0\u6B64 MySQL \u8BA4\u4E3A\u626B\u63CF\u884C\u6570\u662F 2\u3002</strong></p><blockquote><p>\u5907\u6CE8\uFF1A\u5173\u4E8E\u5982\u4F55\u67E5\u770B\u626B\u63CF\u884C\u6570\u7684\u95EE\u9898\uFF0C\u5C06\u4F1A\u5728<a href="../%E5%AE%9E%E8%B7%B5%E7%AF%87/17%E5%A6%82%E4%BD%95%E6%AD%A3%E7%A1%AE%E5%9C%B0%E6%98%BE%E7%A4%BA%E9%9A%8F%E6%9C%BA%E6%B6%88%E6%81%AF">\u7B2C17 \u6587\u7AE0\u300A\u5982\u4F55\u6B63\u786E\u5730\u663E\u793A\u968F\u673A\u6D88\u606F\uFF1F\u300B</a>\u4E2D\u8BE6\u7EC6\u8BA8\u8BBA\u3002</p></blockquote><p>\u57FA\u4E8E\u4E0A\u9762\u8986\u76D6\u7D22\u5F15\u7684\u8BF4\u660E\uFF0C\u6211\u4EEC\u6765\u8BA8\u8BBA\u4E00\u4E2A\u95EE\u9898\uFF1A\u5728\u4E00\u4E2A\u5E02\u6C11\u4FE1\u606F\u8868\u4E0A\uFF0C\u662F\u5426\u6709\u5FC5\u8981\u5C06\u8EAB\u4EFD\u8BC1\u53F7\u548C\u540D\u5B57\u5EFA\u7ACB\u8054\u5408\u7D22\u5F15\uFF1F</p><p>\u5047\u8BBE\u8FD9\u4E2A\u5E02\u6C11\u8868\u7684\u5B9A\u4E49\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>tuser<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id_card<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>ismale<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>id_card<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id_card<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>name_age<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u8EAB\u4EFD\u8BC1\u53F7\u662F\u5E02\u6C11\u7684\u552F\u4E00\u6807\u8BC6\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u6709\u6839\u636E\u8EAB\u4EFD\u8BC1\u53F7\u67E5\u8BE2\u5E02\u6C11\u4FE1\u606F\u7684\u9700\u6C42\uFF0C\u6211\u4EEC\u53EA\u8981\u5728\u8EAB\u4EFD\u8BC1\u53F7\u5B57\u6BB5\u4E0A\u5EFA\u7ACB\u7D22\u5F15\u5C31\u591F\u4E86\u3002\u800C\u518D\u5EFA\u7ACB\u4E00\u4E2A\uFF08\u8EAB\u4EFD\u8BC1\u53F7\u3001\u59D3\u540D\uFF09\u7684\u8054\u5408\u7D22\u5F15\uFF0C\u662F\u4E0D\u662F\u6D6A\u8D39\u7A7A\u95F4\uFF1F</p><p><strong>\u5982\u679C\u73B0\u5728\u6709\u4E00\u4E2A\u9AD8\u9891\u8BF7\u6C42\uFF0C\u8981\u6839\u636E\u5E02\u6C11\u7684\u8EAB\u4EFD\u8BC1\u53F7\u67E5\u8BE2\u4ED6\u7684\u59D3\u540D\uFF0C\u8FD9\u4E2A\u8054\u5408\u7D22\u5F15\u5C31\u6709\u610F\u4E49\u4E86\u3002<strong>\u5B83\u53EF\u4EE5\u5728\u8FD9\u4E2A\u9AD8\u9891\u8BF7\u6C42\u4E0A</strong>\u7528\u5230\u8986\u76D6\u7D22\u5F15\uFF0C\u4E0D\u518D\u9700\u8981\u56DE\u8868\u67E5\u6574\u884C\u8BB0\u5F55</strong>\uFF0C\u51CF\u5C11\u8BED\u53E5\u7684\u6267\u884C\u65F6\u95F4\u3002</p><p><strong>\u5F53\u7136\uFF0C\u7D22\u5F15\u5B57\u6BB5\u7684\u7EF4\u62A4\u603B\u662F\u6709\u4EE3\u4EF7\u7684\u3002\u56E0\u6B64\uFF0C\u5728\u5EFA\u7ACB\u5197\u4F59\u7D22\u5F15\u6765\u652F\u6301\u8986\u76D6\u7D22\u5F15\u65F6\u5C31\u9700\u8981\u6743\u8861\u8003\u8651\u4E86\u3002</strong> \u8FD9\u6B63\u662F\u4E1A\u52A1 DBA\uFF0C\u6216\u8005\u79F0\u4E3A\u4E1A\u52A1\u6570\u636E\u67B6\u6784\u5E08\u7684\u5DE5\u4F5C\u3002</p><h2 id="\u6700\u5DE6\u524D\u7F00\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u6700\u5DE6\u524D\u7F00\u539F\u5219" aria-hidden="true">#</a> <strong>\u6700\u5DE6\u524D\u7F00\u539F\u5219</strong></h2><p>\u770B\u5230\u8FD9\u91CC\u4F60\u4E00\u5B9A\u6709\u4E00\u4E2A\u7591\u95EE\uFF0C\u5982\u679C\u4E3A\u6BCF\u4E00\u79CD\u67E5\u8BE2\u90FD\u8BBE\u8BA1\u4E00\u4E2A\u7D22\u5F15\uFF0C\u7D22\u5F15\u662F\u4E0D\u662F\u592A\u591A\u4E86\u3002\u5982\u679C\u6211\u73B0\u5728\u8981\u6309\u7167\u5E02\u6C11\u7684\u8EAB\u4EFD\u8BC1\u53F7\u53BB\u67E5\u4ED6\u7684\u5BB6\u5EAD\u5730\u5740\u5462\uFF1F\u867D\u7136\u8FD9\u4E2A\u67E5\u8BE2\u9700\u6C42\u5728\u4E1A\u52A1\u4E2D\u51FA\u73B0\u7684\u6982\u7387\u4E0D\u9AD8\uFF0C\u4F46\u603B\u4E0D\u80FD\u8BA9\u5B83\u8D70\u5168\u8868\u626B\u63CF\u5427\uFF1F\u53CD\u8FC7\u6765\u8BF4\uFF0C<strong>\u5355\u72EC\u4E3A\u4E00\u4E2A\u4E0D\u9891\u7E41\u7684\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\uFF08\u8EAB\u4EFD\u8BC1\u53F7\uFF0C\u5730\u5740\uFF09\u7684\u7D22\u5F15\u53C8\u611F\u89C9\u6709\u70B9\u6D6A\u8D39\u3002\u5E94\u8BE5\u600E\u4E48\u505A\u5462\uFF1F</strong></p><p>\u8FD9\u91CC\uFF0C\u6211\u5148\u548C\u4F60\u8BF4\u7ED3\u8BBA\u5427\u3002<strong>B+ \u6811\u8FD9\u79CD\u7D22\u5F15\u7ED3\u6784\uFF0C\u53EF\u4EE5\u5229\u7528\u7D22\u5F15\u7684\u201C\u6700\u5DE6\u524D\u7F00\u201D\uFF0C\u6765\u5B9A\u4F4D\u8BB0\u5F55\u3002</strong></p><p>\u4E3A\u4E86\u76F4\u89C2\u5730\u8BF4\u660E\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u6211\u4EEC\u7528\uFF08name\uFF0Cage\uFF09\u8FD9\u4E2A\u8054\u5408\u7D22\u5F15\u6765\u5206\u6790\u3002</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/\u8054\u5408\u7D22\u5F15.jpg" alt="" loading="lazy"></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u7D22\u5F15\u9879\u662F\u6309\u7167\u7D22\u5F15\u5B9A\u4E49\u91CC\u9762\u51FA\u73B0\u7684\u5B57\u6BB5\u987A\u5E8F\u6392\u5E8F\u7684\u3002</p><p>\u5F53\u4F60\u7684\u903B\u8F91\u9700\u6C42\u662F\u67E5\u5230\u6240\u6709\u540D\u5B57\u662F\u201C\u5F20\u4E09\u201D\u7684\u4EBA\u65F6\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u5230 ID4\uFF0C\u7136\u540E\u5411\u540E\u904D\u5386\u5F97\u5230\u6240\u6709\u9700\u8981\u7684\u7ED3\u679C\u3002</p><p>\u5982\u679C\u4F60\u8981\u67E5\u7684\u662F\u6240\u6709\u540D\u5B57\u7B2C\u4E00\u4E2A\u5B57\u662F\u201C\u5F20\u201D\u7684\u4EBA\uFF0C\u4F60\u7684 SQL \u8BED\u53E5\u7684\u6761\u4EF6\u662F<code>where name like \u2018\u5F20 %\u2019</code>\u3002\u8FD9\u65F6\uFF0C\u4F60\u4E5F\u80FD\u591F\u7528\u4E0A\u8FD9\u4E2A\u7D22\u5F15\uFF0C\u67E5\u627E\u5230\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u8BB0\u5F55\u662F ID3\uFF0C\u7136\u540E\u5411\u540E\u904D\u5386\uFF0C\u76F4\u5230\u4E0D\u6EE1\u8DB3\u6761\u4EF6\u4E3A\u6B62\u3002</p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0D\u53EA\u662F\u7D22\u5F15\u7684\u5168\u90E8\u5B9A\u4E49\uFF0C\u53EA\u8981\u6EE1\u8DB3\u6700\u5DE6\u524D\u7F00\uFF0C\u5C31\u53EF\u4EE5\u5229\u7528\u7D22\u5F15\u6765\u52A0\u901F\u68C0\u7D22\u3002\u8FD9\u4E2A <mark><strong>\u6700\u5DE6\u524D\u7F00</strong>\u53EF\u4EE5\u662F\u8054\u5408\u7D22\u5F15\u7684\u6700\u5DE6 N \u4E2A\u5B57\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u7D22\u5F15\u7684\u6700\u5DE6 M \u4E2A\u5B57\u7B26\u3002</mark></p><p>\u57FA\u4E8E\u4E0A\u9762\u5BF9\u6700\u5DE6\u524D\u7F00\u7D22\u5F15\u7684\u8BF4\u660E\uFF0C\u6211\u4EEC\u6765\u8BA8\u8BBA\u4E00\u4E2A\u95EE\u9898\uFF1A<strong>\u5728\u5EFA\u7ACB\u8054\u5408\u7D22\u5F15\u7684\u65F6\u5019\uFF0C\u5982\u4F55\u5B89\u6392\u7D22\u5F15\u5185\u7684\u5B57\u6BB5\u987A\u5E8F\uFF1F</strong></p><p>\u8FD9\u91CC\u6211\u4EEC\u7684\u8BC4\u4F30\u6807\u51C6\u662F\uFF0C\u7D22\u5F15\u7684\u590D\u7528\u80FD\u529B\u3002\u56E0\u4E3A\u53EF\u4EE5\u652F\u6301\u6700\u5DE6\u524D\u7F00\uFF0C\u6240\u4EE5\u5F53\u5DF2\u7ECF\u6709\u4E86 (a,b) \u8FD9\u4E2A\u8054\u5408\u7D22\u5F15\u540E\uFF0C\u4E00\u822C\u5C31\u4E0D\u9700\u8981\u5355\u72EC\u5728 a \u4E0A\u5EFA\u7ACB\u7D22\u5F15\u4E86\u3002\u56E0\u6B64\uFF0C<strong>\u7B2C\u4E00\u539F\u5219\u662F\uFF0C\u5982\u679C\u901A\u8FC7\u8C03\u6574\u987A\u5E8F\uFF0C\u53EF\u4EE5\u5C11\u7EF4\u62A4\u4E00\u4E2A\u7D22\u5F15\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u987A\u5E8F\u5F80\u5F80\u5C31\u662F\u9700\u8981\u4F18\u5148\u8003\u8651\u91C7\u7528\u7684\u3002</strong></p><p>\u6240\u4EE5\u73B0\u5728\u4F60\u77E5\u9053\u4E86\uFF0C\u8FD9\u6BB5\u5F00\u5934\u7684\u95EE\u9898\u91CC\uFF0C\u6211\u4EEC\u8981\u4E3A\u9AD8\u9891\u8BF7\u6C42\u521B\u5EFA (\u8EAB\u4EFD\u8BC1\u53F7\uFF0C\u59D3\u540D\uFF09\u8FD9\u4E2A\u8054\u5408\u7D22\u5F15\uFF0C\u5E76\u7528\u8FD9\u4E2A\u7D22\u5F15\u652F\u6301\u201C\u6839\u636E\u8EAB\u4EFD\u8BC1\u53F7\u67E5\u8BE2\u5730\u5740\u201D\u7684\u9700\u6C42\u3002</p><p>\u90A3\u4E48\uFF0C\u5982\u679C\u65E2\u6709\u8054\u5408\u67E5\u8BE2\uFF0C\u53C8\u6709\u57FA\u4E8E a\u3001b \u5404\u81EA\u7684\u67E5\u8BE2\u5462\uFF1F<strong>\u67E5\u8BE2\u6761\u4EF6\u91CC\u9762\u53EA\u6709 b \u7684\u8BED\u53E5\uFF0C\u662F\u65E0\u6CD5\u4F7F\u7528 (a,b) \u8FD9\u4E2A\u8054\u5408\u7D22\u5F15\u7684\uFF0C\u8FD9\u65F6\u5019\u4F60\u4E0D\u5F97\u4E0D\u7EF4\u62A4\u53E6\u5916\u4E00\u4E2A\u7D22\u5F15\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u9700\u8981\u540C\u65F6\u7EF4\u62A4 (a,b)\u3001(b) \u8FD9\u4E24\u4E2A\u7D22\u5F15\u3002</strong></p><p>\u8FD9\u65F6\u5019\uFF0C\u6211\u4EEC\u8981\u8003\u8651\u7684\u539F\u5219\u5C31\u662F\u7A7A\u95F4\u4E86\u3002\u6BD4\u5982\u4E0A\u9762\u8FD9\u4E2A\u5E02\u6C11\u8868\u7684\u60C5\u51B5\uFF0Cname \u5B57\u6BB5\u662F\u6BD4 age \u5B57\u6BB5\u5927\u7684 \uFF0C\u90A3\u6211\u5C31\u5EFA\u8BAE\u4F60\u521B\u5EFA\u4E00\u4E2A\uFF08name,age) \u7684\u8054\u5408\u7D22\u5F15\u548C\u4E00\u4E2A (age) \u7684\u5355\u5B57\u6BB5\u7D22\u5F15\u3002</p><h2 id="\u7D22\u5F15\u4E0B\u63A8" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u4E0B\u63A8" aria-hidden="true">#</a> \u7D22\u5F15\u4E0B\u63A8</h2><p>\u4E0A\u4E00\u6BB5\u6211\u4EEC\u8BF4\u5230\u6EE1\u8DB3\u6700\u5DE6\u524D\u7F00\u539F\u5219\u7684\u65F6\u5019\uFF0C\u6700\u5DE6\u524D\u7F00\u53EF\u4EE5\u7528\u4E8E\u5728\u7D22\u5F15\u4E2D\u5B9A\u4F4D\u8BB0\u5F55\u3002\u8FD9\u65F6\uFF0C\u4F60\u53EF\u80FD\u8981\u95EE\uFF0C\u90A3\u4E9B\u4E0D\u7B26\u5408\u6700\u5DE6\u524D\u7F00\u7684\u90E8\u5206\uFF0C\u4F1A\u600E\u4E48\u6837\u5462\uFF1F</p><p>\u6211\u4EEC\u8FD8\u662F\u4EE5\u5E02\u6C11\u8868\u7684\u8054\u5408\u7D22\u5F15\uFF08name, age\uFF09\u4E3A\u4F8B\u3002\u5982\u679C\u73B0\u5728\u6709\u4E00\u4E2A\u9700\u6C42\uFF1A\u68C0\u7D22\u51FA\u8868\u4E2D\u201C\u540D\u5B57\u7B2C\u4E00\u4E2A\u5B57\u662F\u5F20\uFF0C\u800C\u4E14\u5E74\u9F84\u662F 10 \u5C81\u7684\u6240\u6709\u7537\u5B69\u201D\u3002\u90A3\u4E48\uFF0CSQL \u8BED\u53E5\u662F\u8FD9\u4E48\u5199\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; select * from tuser where name like &#39;\u5F20 %&#39; and age=10 and ismale=1;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F60\u5DF2\u7ECF\u77E5\u9053\u4E86\u524D\u7F00\u7D22\u5F15\u89C4\u5219\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u8BED\u53E5\u5728\u641C\u7D22\u7D22\u5F15\u6811\u7684\u65F6\u5019\uFF0C\u53EA\u80FD\u7528 \u201C\u5F20\u201D\uFF0C\u627E\u5230\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55 ID3\u3002\u5F53\u7136\uFF0C\u8FD9\u8FD8\u4E0D\u9519\uFF0C\u603B\u6BD4\u5168\u8868\u626B\u63CF\u8981\u597D\u3002</p><p>\u7136\u540E\u5462\uFF1F</p><p>\u5F53\u7136\u662F\u5224\u65AD\u5176\u4ED6\u6761\u4EF6\u662F\u5426\u6EE1\u8DB3\u3002</p><p>\u5728 MySQL 5.6 \u4E4B\u524D\uFF0C\u53EA\u80FD\u4ECE ID3 \u5F00\u59CB\u4E00\u4E2A\u4E2A\u56DE\u8868\u3002\u5230\u4E3B\u952E\u7D22\u5F15\u4E0A\u627E\u51FA\u6570\u636E\u884C\uFF0C\u518D\u5BF9\u6BD4\u5B57\u6BB5\u503C\u3002</p><p>\u800C MySQL 5.6 \u5F15\u5165\u7684 <mark><strong>\u7D22\u5F15\u4E0B\u63A8\u4F18\u5316\uFF08index condition pushdown)</strong>\uFF0C \u53EF\u4EE5\u5728\u7D22\u5F15\u904D\u5386\u8FC7\u7A0B\u4E2D\uFF0C\u5BF9<strong>\u7D22\u5F15\u4E2D\u5305\u542B\u7684\u5B57\u6BB5</strong>\u5148\u505A\u5224\u65AD\uFF0C\u76F4\u63A5\u8FC7\u6EE4\u6389\u4E0D\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55\uFF0C\u51CF\u5C11\u56DE\u8868\u6B21\u6570\u3002</mark></p><p>\u56FE 3 \u548C\u56FE 4\uFF0C\u662F\u8FD9\u4E24\u4E2A\u8FC7\u7A0B\u7684\u6267\u884C\u6D41\u7A0B\u56FE\u3002</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/\u65E0\u7D22\u5F15\u4E0B\u63A8\u6267\u884C\u6D41\u7A0B.jpg" alt="" loading="lazy"></p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/\u7D22\u5F15\u4E0B\u63A8\u6267\u884C\u6D41\u7A0B.jpg" alt="" loading="lazy"></p><p>\u5728\u56FE 3 \u548C 4 \u8FD9\u4E24\u4E2A\u56FE\u91CC\u9762\uFF0C\u6BCF\u4E00\u4E2A\u865A\u7EBF\u7BAD\u5934\u8868\u793A\u56DE\u8868\u4E00\u6B21\u3002</p><p>\u56FE 3 \u4E2D\uFF0C\u5728 (name,age) \u7D22\u5F15\u91CC\u9762\u6211\u7279\u610F\u53BB\u6389\u4E86 age \u7684\u503C\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B InnoDB \u5E76\u4E0D\u4F1A\u53BB\u770B age \u7684\u503C\uFF0C\u53EA\u662F\u6309\u987A\u5E8F\u628A\u201Cname \u7B2C\u4E00\u4E2A\u5B57\u662F\u2019\u5F20\u2019\u201D\u7684\u8BB0\u5F55\u4E00\u6761\u6761\u53D6\u51FA\u6765\u56DE\u8868\u3002\u56E0\u6B64\uFF0C\u9700\u8981\u56DE\u8868 4 \u6B21\u3002</p><p>\u56FE 4 \u8DDF\u56FE 3 \u7684\u533A\u522B\u662F\uFF0CInnoDB \u5728 (name,age) \u7D22\u5F15\u5185\u90E8\u5C31\u5224\u65AD\u4E86 age \u662F\u5426\u7B49\u4E8E 10\uFF0C\u5BF9\u4E8E\u4E0D\u7B49\u4E8E 10 \u7684\u8BB0\u5F55\uFF0C\u76F4\u63A5\u5224\u65AD\u5E76\u8DF3\u8FC7\u3002\u5728\u6211\u4EEC\u7684\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u53EA\u9700\u8981\u5BF9 ID4\u3001ID5 \u8FD9\u4E24\u6761\u8BB0\u5F55\u56DE\u8868\u53D6\u6570\u636E\u5224\u65AD\uFF0C\u5C31\u53EA\u9700\u8981\u56DE\u8868 2 \u6B21\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u4ECA\u5929\u8FD9\u7BC7\u6587\u7AE0\u7EE7\u7EED\u8BA8\u8BBA\u4E86\u6570\u636E\u5E93\u7D22\u5F15\u7684\u6982\u5FF5\uFF0C\u5305\u62EC\u4E86\u8986\u76D6\u7D22\u5F15\u3001\u524D\u7F00\u7D22\u5F15\u3001\u7D22\u5F15\u4E0B\u63A8\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u6EE1\u8DB3\u8BED\u53E5\u9700\u6C42\u7684\u60C5\u51B5\u4E0B\uFF0C \u5C3D\u91CF\u5C11\u5730\u8BBF\u95EE\u8D44\u6E90\u662F\u6570\u636E\u5E93\u8BBE\u8BA1\u7684\u91CD\u8981\u539F\u5219\u4E4B\u4E00\u3002\u6211\u4EEC\u5728\u4F7F\u7528\u6570\u636E\u5E93\u7684\u65F6\u5019\uFF0C\u5C24\u5176\u662F\u5728\u8BBE\u8BA1\u8868\u7ED3\u6784\u65F6\uFF0C\u4E5F\u8981\u4EE5\u51CF\u5C11\u8D44\u6E90\u6D88\u8017\u4F5C\u4E3A\u76EE\u6807\u3002</p><h2 id="\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a> \u601D\u8003\u9898</h2><p>\u5B9E\u9645\u4E0A\u4E3B\u952E\u7D22\u5F15\u4E5F\u662F\u53EF\u4EE5\u4F7F\u7528\u591A\u4E2A\u5B57\u6BB5\u7684\u3002DBA \u5C0F\u5415\u5728\u5165\u804C\u65B0\u516C\u53F8\u7684\u65F6\u5019\uFF0C\u5C31\u53D1\u73B0\u81EA\u5DF1\u63A5\u624B\u7EF4\u62A4\u7684\u5E93\u91CC\u9762\uFF0C\u6709\u8FD9\u4E48\u4E00\u4E2A\u8868\uFF0C\u8868\u7ED3\u6784\u5B9A\u4E49\u7C7B\u4F3C\u8FD9\u6837\u7684\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>geek<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>a<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>b<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>d<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>a<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>b<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>ca<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>a<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>cb<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>b<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u516C\u53F8\u7684\u540C\u4E8B\u544A\u8BC9\u4ED6\u8BF4\uFF0C\u7531\u4E8E\u5386\u53F2\u539F\u56E0\uFF0C\u8FD9\u4E2A\u8868\u9700\u8981 a\u3001b \u505A\u8054\u5408\u4E3B\u952E\uFF0C\u8FD9\u4E2A\u5C0F\u5415\u7406\u89E3\u4E86\u3002</p><p>\u4F46\u662F\uFF0C\u5B66\u8FC7\u672C\u7AE0\u5185\u5BB9\u7684\u5C0F\u5415\u53C8\u7EB3\u95F7\u4E86\uFF0C\u65E2\u7136\u4E3B\u952E\u5305\u542B\u4E86 a\u3001b \u8FD9\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u90A3\u610F\u5473\u7740\u5355\u72EC\u5728\u5B57\u6BB5 c \u4E0A\u521B\u5EFA\u4E00\u4E2A\u7D22\u5F15\uFF0C\u5C31\u5DF2\u7ECF\u5305\u542B\u4E86\u4E09\u4E2A\u5B57\u6BB5\u4E86\u5440\uFF0C\u4E3A\u4EC0\u4E48\u8981\u521B\u5EFA\u201Cca\u201D\u201Ccb\u201D\u8FD9\u4E24\u4E2A\u7D22\u5F15\uFF1F</p><p>\u540C\u4E8B\u544A\u8BC9\u4ED6\uFF0C\u662F\u56E0\u4E3A\u4ED6\u4EEC\u7684\u4E1A\u52A1\u91CC\u9762\u6709\u8FD9\u6837\u7684\u4E24\u79CD\u8BED\u53E5\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> geek <span class="token keyword">where</span> c<span class="token operator">=</span>N <span class="token keyword">order</span> <span class="token keyword">by</span> a <span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> geek <span class="token keyword">where</span> c<span class="token operator">=</span>N <span class="token keyword">order</span> <span class="token keyword">by</span> b <span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u95EE\u9898\uFF1A\u8FD9\u4F4D\u540C\u4E8B\u7684\u89E3\u91CA\u5BF9\u5417\uFF0C\u4E3A\u4E86\u8FD9\u4E24\u4E2A\u67E5\u8BE2\u6A21\u5F0F\uFF0C\u8FD9\u4E24\u4E2A\u7D22\u5F15\u662F\u5426\u90FD\u662F\u5FC5\u987B\u7684\uFF1F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><blockquote><p>\u5982\u4E0B\u8868\u6240\u793A\uFF0C\u4E3B\u952E a\uFF0Cb \u7684\u805A\u7C07\u7D22\u5F15\u7EC4\u7EC7\u987A\u5E8F\u76F8\u5F53\u4E8E order by a,b \uFF0C\u4E5F\u5C31\u662F\u5148\u6309 a \u6392\u5E8F\uFF0C\u518D\u6309 b \u6392\u5E8F\uFF0Cc \u65E0\u5E8F\u3002</p><table><thead><tr><th style="text-align:center;">a</th><th style="text-align:center;">b</th><th style="text-align:center;">c</th><th style="text-align:center;">d</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">2</td><td style="text-align:center;">3</td><td style="text-align:center;">d</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">3</td><td style="text-align:center;">2</td><td style="text-align:center;">d</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">4</td><td style="text-align:center;">3</td><td style="text-align:center;">d</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">1</td><td style="text-align:center;">3</td><td style="text-align:center;">d</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">2</td><td style="text-align:center;">2</td><td style="text-align:center;">d</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">3</td><td style="text-align:center;">4</td><td style="text-align:center;">d</td></tr></tbody></table><p>\u5982\u4E0B\u8868\u6240\u793A\uFF0C\u7D22\u5F15 ca \u7684\u7EC4\u7EC7\u662F\u5148\u6309 c \u6392\u5E8F\uFF0C\u518D\u6309 a \u6392\u5E8F\uFF0C\u540C\u65F6\u8BB0\u5F55\u4E3B\u952E</p><table><thead><tr><th>c</th><th>a</th><th>\u4E3B\u952E\u90E8\u5206b</th></tr></thead><tbody><tr><td>2</td><td>1</td><td>3</td></tr><tr><td>2</td><td>2</td><td>2</td></tr><tr><td>3</td><td>1</td><td>2</td></tr><tr><td>3</td><td>1</td><td>4</td></tr><tr><td>3</td><td>2</td><td>1</td></tr><tr><td>4</td><td>2</td><td>3</td></tr></tbody></table><p>\u5982\u4E0B\u8868\u6240\u793A\uFF0C\u7D22\u5F15 cb \u7684\u7EC4\u7EC7\u662F\u5148\u6309 c \u6392\u5E8F\uFF0C\u5728\u6309 b \u6392\u5E8F\uFF0C\u540C\u65F6\u8BB0\u5F55\u4E3B\u952E</p><table><thead><tr><th>c</th><th>b</th><th>\u4E3B\u952E\u90E8\u5206a</th></tr></thead><tbody><tr><td>2</td><td>2</td><td>2</td></tr><tr><td>2</td><td>3</td><td>1</td></tr><tr><td>3</td><td>1</td><td>2</td></tr><tr><td>3</td><td>2</td><td>1</td></tr><tr><td>3</td><td>4</td><td>1</td></tr><tr><td>4</td><td>3</td><td>2</td></tr></tbody></table><p><strong>\u6240\u4EE5\uFF0C\u7ED3\u8BBA\u662F ca \u53EF\u4EE5\u53BB\u6389\uFF0Ccb \u9700\u8981\u4FDD\u7559\u3002</strong></p></blockquote>',62);function p(e,o){return t}var i=n(a,[["render",p],["__file","5\u7D22\u5F15\uFF08\u4E0B\uFF09.html.vue"]]);export{i as default};
