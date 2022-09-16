import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,f as n}from"./app.ae5d94db.js";const t={},s=n(`<h1 id="hashmap-\u4E0B" tabindex="-1"><a class="header-anchor" href="#hashmap-\u4E0B" aria-hidden="true">#</a> HashMap\uFF08\u4E0B\uFF09</h1><blockquote><p><strong>\u4E3A\u4F55\u94FE\u8868\u6811\u5316\u7684\u9608\u503C\u4E3A8\uFF0C\u9ED8\u8BA4\u88C5\u8F7D\u56E0\u5B50\u662F0.75\uFF1F</strong></p></blockquote><p>\u4E0A\u4E00\u8282\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E86HashMap\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\uFF0C\u5176\u4E2D\u63D0\u52302\u4E2A\u7279\u6B8A\u7684\u503C\uFF0C\u4E00\u4E2A\u662F\u94FE\u8868\u6811\u5316\u9608\u503C8\uFF0C\u53E6\u4E00\u4E2A\u662F\u9ED8\u8BA4\u88C5\u8F7D\u56E0\u5B500.75\u3002\u672C\u8282\u6211\u4EEC\u5C31\u7EE7\u7EED\u6DF1\u5165\u5206\u6790\u4E00\u4E0B\u8FD9\u4E24\u4E2A\u7279\u6B8A\u503C\u7684\u7531\u6765\u3002</p><h2 id="\u4E00\u3001\u9ED8\u8BA4\u88C5\u8F7D\u56E0\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u9ED8\u8BA4\u88C5\u8F7D\u56E0\u5B50" aria-hidden="true">#</a> \u4E00\u3001\u9ED8\u8BA4\u88C5\u8F7D\u56E0\u5B50</h2><p>\u4E0A\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0C\u88C5\u8F7D\u56E0\u5B50\u7684\u9ED8\u8BA4\u503C\u4E3A0.75\u3002\u90A3\u4E480.75\u8FD9\u4E2A\u503C\u662F\u4ECE\u4F55\u800C\u6765\u7684\u5462\uFF1F\u9ED8\u8BA4\u503C\u4E3A\u5565\u4E0D\u662F0.6\u30010.8\u7B49\u5176\u4ED6\u503C\u5462\uFF1F\u6211\u4EEC\u5148\u6765\u770BJava\u672C\u8EAB\u5BF9\u8FD9\u4E2A\u503C\u7684\u89E3\u91CA\u3002\u5982\u4E0B\u6240\u793A\u3002\u4EE5\u4E0B\u5185\u5BB9\u6765\u81EAJDK8\u4E2DHashMap\u6E90\u7801\u4E2D\u7684\u6CE8\u91CA\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>* &lt;p&gt;As a general rule, the default load factor (.75) offers a good
* tradeoff between time and space costs.  Higher values decrease the
* space overhead but increase the lookup cost (reflected in most of
* the operations of the &lt;tt&gt;HashMap&lt;/tt&gt; class, including
* &lt;tt&gt;get&lt;/tt&gt; and &lt;tt&gt;put&lt;/tt&gt;).  The expected number of entries in
* the map and its load factor should be taken into account when
* setting its initial capacity, so as to minimize the number of
* rehash operations.  If the initial capacity is greater than the
* maximum number of entries divided by the load factor, no rehash
* operations will ever occur.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6CE8\u91CA\u4E2D\uFF0CHashMap\u7684\u5F00\u53D1\u8005\u7ED9\u51FA\u4E86\u4E00\u4E9B\u9009\u62E90.75\u4E3A\u88C5\u8F7D\u56E0\u5B50\u9ED8\u8BA4\u503C\u7684\u7406\u7531\uFF0C\u610F\u601D\u5927\u6982\u662F\u8BF4\uFF0C\u8FD9\u4E2A\u503C\u662F\u6743\u8861\u65F6\u95F4\u6548\u7387\u548C\u7A7A\u95F4\u6548\u7387\u4E4B\u540E\u7684\u7ED3\u679C\u3002\u5982\u679C\u88C5\u8F7D\u56E0\u5B50\u592A\u5C0F\uFF0C\u4F1A\u5BFC\u81F4\u7A7A\u95F4\u6D6A\u8D39\u592A\u5927\uFF1B\u5982\u679C\u88C5\u8F7D\u56E0\u5B50\u592A\u5927\uFF0C\u4F1A\u5BFC\u81F4\u5404\u4E2A\u64CD\u4F5C\u7684\u6267\u884C\u6548\u7387\u592A\u4F4E\u3002</p><p>\u90A3\u4E48\uFF0C\u5BF9\u4E8E\u88C5\u8F7D\u56E0\u5B50\u6765\u8BF4\uFF0C\u591A\u5C0F\u624D\u7B97\u662F\u592A\u5C0F\uFF1F\u591A\u5927\u624D\u7B97\u662F\u592A\u5927\u5462\uFF1F</p><p>\u5C3D\u7BA1\u6211\u4EEC\u65E0\u975E\u7ED9\u51FA\u4E00\u4E2A\u6807\u51C6\u7684\u7B54\u6848\uFF0C\u4F46\u662F\uFF0C\u6309\u7167\u5E38\u7406\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9884\u4F30\u4E00\u4E2A\u8303\u56F4\uFF0C\u88C5\u8F7D\u56E0\u5B50\u5E94\u8BE5\u5904\u4E8E0.5~1\u4E4B\u95F4\uFF0C\u5C0F\u4E8E\u7B49\u4E8E0.5\u5C31\u7B97\u592A\u5C0F\uFF0C\u5927\u4E8E\u7B49\u4E8E1\u5C31\u7B97\u592A\u5927\u3002\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u8BF4\u5462\uFF1F\u6211\u4EEC\u8FDB\u4E00\u6B65\u89E3\u91CA\u3002</p><p>\u5982\u679C\u88C5\u8F7D\u56E0\u5B50\u4E3A0.5\uFF0C\u90A3\u4E48\u5F53\u6570\u7EC4\u5927\u5C0F\u4E3An\uFF0C\u5B58\u50A8\u5143\u7D20\u8D85\u8FC7n/2\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u6269\u5BB9\uFF0C\u6C38\u8FDC\u90FD\u53EA\u6709\u4E00\u534A\u7684\u7A7A\u95F4\u53EF\u7528\uFF0C\u4E00\u534A\u7684\u7A7A\u95F4\u88AB\u6D6A\u8D39\u3002\u5982\u679Cn\u6BD4\u8F83\u5927\uFF0C\u90A3\u4E48\u6D6A\u8D39\u7684\u7A7A\u95F4\u5C31\u76F8\u5F53\u53EF\u89C2\u4E86\u3002\u6240\u4EE5\uFF0C\u4ECE\u611F\u6027\u8BA4\u8BC6\u4E0A\u6765\u8BB2\uFF0C0.5\u8FD9\u4E2A\u503C\u5E94\u8BE5\u662F\u88C5\u8F7D\u56E0\u5B50\u7684\u5E95\u7EBF\u4E86\u3002</p><p>\u5982\u679C\u88C5\u8F7D\u56E0\u5B50\u4E3A1\uFF0Cn\u4E2A\u5143\u7D20\u5B58\u50A8\u5230\u957F\u5EA6\u4E3An\u7684\u6570\u7EC4\u4E2D\uFF0C\u90A3\u4E48\u54C8\u5E0C\u8868\u4E2D\u53D1\u751F\u51B2\u7A81\u7684\u6982\u7387\u4F1A\u975E\u5E38\u9AD8\u3002\u4F60\u53EF\u80FD\u4F1A\u8BF4\uFF0C\u5373\u4FBF\u5B58\u5728\u4E00\u4E9B\u51B2\u7A81\uFF0C\u53C8\u6709\u4EC0\u4E48\u5173\u7CFB\u5462\uFF1F\u51B2\u7A81\u7684\u6570\u636E\u4F1A\u653E\u5165\u94FE\u8868\uFF0C\u94FE\u8868\u5F88\u77ED\u7684\u60C5\u51B5\u4E0B\uFF0C\u5BF9HashMap\u6027\u80FD\u7684\u5F71\u54CD\u4F3C\u4E4E\u4E0D\u5927\u3002</p><p>\u5728\u300A\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u4E4B\u7F8E\u300B\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\u4E24\u79CD\u89E3\u51B3\u51B2\u7A81\u7684\u5E38\u7528\u65B9\u6CD5\uFF1A\u94FE\u8868\u6CD5\u548C\u5F00\u653E\u5BFB\u5740\u6CD5\u3002\u5BF9\u6BD4\u4E24\u79CD\u65B9\u6CD5\uFF0C\u94FE\u8868\u6CD5\u786E\u5B9E\u4F1A\u6BD4\u5F00\u653E\u5BFB\u5740\u6CD5\uFF0C\u5BF9\u51B2\u7A81\u7684\u5BB9\u5FCD\u5EA6\u66F4\u9AD8\u3002\u91C7\u7528\u5F00\u653E\u5BFB\u5740\u6CD5\u89E3\u51B3\u51B2\u7A81\u7684\u54C8\u5E0C\u8868\uFF0C\u88C5\u8F7D\u56E0\u5B50\u6700\u5927\u503C\u4E3A1\u3002\u5F53\u88C5\u8F7D\u56E0\u5B50\u63A5\u8FD11\u65F6\uFF0C\u5404\u4E2A\u64CD\u4F5C\u7684\u6267\u884C\u901F\u5EA6\u5C31\u5DF2\u7ECF\u975E\u5E38\u6162\u4E86\u3002\u4F46\u5BF9\u4E8E\u94FE\u8868\u6CD5\u89E3\u51B3\u51B2\u7A81\u7684\u54C8\u5E0C\u8868\u6765\u8BF4\uFF0C\u5373\u4FBF\u88C5\u8F7D\u56E0\u5B50\u8BBE\u7F6E\u4E3A\u5927\u4E8E1\u7684\u503C\uFF0C\u6BD4\u59822\uFF0C\u4E5F\u53EA\u4E0D\u8FC7\u4F1A\u5BFC\u81F4\u94FE\u8868\u7684\u5E73\u5747\u957F\u5EA6\u53D8\u4E3A2\u800C\u5DF2\uFF0C\u589E\u5220\u6539\u67E5\u5404\u4E2A\u64CD\u4F5C\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4ECD\u7136\u662FO(1)\u7684\u3002</p><p>\u4E0D\u8FC7\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u53EA\u80FD\u7C97\u7565\u8868\u660E\u6267\u884C\u6548\u7387\uFF0C\u5BF9\u4E8EHashMap\u8FD9\u79CD\u975E\u5E38\u5E38\u7528\u7684\u5BB9\u5668\u6765\u8BF4\uFF0C\u5176\u6027\u80FD\u7684\u4F18\u5316\u5E94\u8BE5\u505A\u5230\u6781\u81F4\u3002\u5982\u679C\u94FE\u8868\u5E73\u5747\u957F\u5EA6\u53D8\u4E3A2\uFF0C\u90A3\u4E48\uFF0C\u5C3D\u7BA1\u589E\u5220\u6539\u67E5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u672A\u53D8\uFF0C\u4F46\u7C97\u7565\u4F30\u7B97\uFF0C\u6267\u884C\u65F6\u95F4\u5C06\u4F1A\u53D8\u4E3A\u539F\u6765\u76842\u500D\u3002\u6027\u80FD\u4E0B\u964D\u4E3A\u539F\u6765\u76841/2\uFF0C\u663E\u7136\u662F\u4E0D\u5BB9\u5FFD\u89C6\u7684\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u4E0D\u7BA1\u662F\u7528\u94FE\u8868\u6765\u89E3\u51B3\u51B2\u7A81\uFF0C\u8FD8\u662F\u94FE\u8868\u6811\u5316\uFF0C\u8FD9\u4E9B\u63AA\u65BD\u90FD\u53EA\u662F\u65E0\u5948\u4E4B\u4E3E\u3002\u4E07\u4E00\u51FA\u73B0\u4E86\u54C8\u5E0C\u51B2\u7A81\u3001\u94FE\u8868\u8FC7\u957F\u8FD9\u4E9B\u6781\u7AEF\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u94FE\u8868\u548C\u7EA2\u9ED1\u6811\u6765\u515C\u5E95\u89E3\u51B3\u3002\u5728\u8BBE\u8BA1HashMap\u65F6\uFF0C\u6211\u4EEC\u8FFD\u6C42\u7684\u7406\u60F3\u60C5\u51B5\u662F\u51E0\u4E4E\u6CA1\u6709\u51B2\u7A81\uFF0C\u4E5F\u5C31\u8BF4\uFF0C\u94FE\u8868\u5E73\u5747\u957F\u5EA6\u4E0D\u8D85\u8FC71\uFF0C\u8FD9\u6837\u6027\u80FD\u624D\u80FD\u8FBE\u5230\u6700\u9AD8\u3002\u4E3A\u4E86\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u5373\u4FBFHashMap\u91C7\u7528\u94FE\u8868\u6CD5\u89E3\u51B3\u51B2\u7A81\uFF0C\u88C5\u8F7D\u56E0\u5B50\u4E5F\u4E0D\u80FD\u8D85\u8FC71\u3002</p><p>\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u660E\u786E\u4E86\uFF0C\u88C5\u8F7D\u56E0\u5B50\u5FC5\u987B\u57280.5~1\u4E4B\u95F4\u3002\u90A3\u4E48\uFF0CHashMap\u7684\u5F00\u53D1\u8005\u4E3A\u4EC0\u4E48\u9009\u62E9\u4E86\u5176\u4E2D\u76840.75\u800C\u975E\u5176\u4ED6\u503C\u4F5C\u4E3A\u88C5\u8F7D\u56E0\u5B50\u7684\u9ED8\u8BA4\u503C\u5462\uFF1F</p><p>\u5C3D\u7BA1\u6709\u8D44\u6599\u89E3\u91CA\uFF0C0.75\u8FD9\u4E2A\u503C\u53EF\u4EE5\u5229\u7528\u4E8C\u9879\u5206\u5E03\u7684\u6982\u7387\u8BA1\u7B97\u516C\u5F0F\u6765\u6C42\u5F97\uFF0C\u4F46\u662F\u5176\u63A8\u5BFC\u8FC7\u7A0B\u505A\u4E86\u4E0D\u5408\u7406\u7684\u5047\u8BBE\uFF1A\u6BCF\u6B21\u63D2\u5165\u6570\u636E\uFF0C\u53D1\u751F\u51B2\u7A81\u548C\u4E0D\u53D1\u751F\u51B2\u7A81\u7684\u6982\u7387\u76F8\u540C\uFF0C\u5747\u4E3A0.5\u3002\u5047\u8BBE\u90FD\u4E0D\u5408\u7406\uFF0C\u63A8\u5BFC\u548C\u7ED3\u8BBA\u5C31\u66F4\u65E0\u6B63\u786E\u53EF\u8A00\u3002\u6240\u4EE5\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5C31\u4E0D\u5C55\u5F00\u8BB2\u89E3\u5229\u7528\u4E8C\u9879\u5206\u5E03\u7684\u6982\u7387\u8BA1\u7B97\u516C\u5F0F\u7684\u63A8\u5BFC\u65B9\u6CD5\u4E86\u3002</p><p>\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u9009\u62E90.75\u4F5C\u4E3A\u88C5\u8F7D\u56E0\u5B50\u7684\u9ED8\u8BA4\u503C\uFF0C\u6211\u89C9\u5F97\u5F88\u6709\u53EF\u80FD\u5C31\u5982HashMap\u6E90\u7801\u4E2D\u7684\u6CE8\u91CA\u6240\u8BF4\uFF1A\u201CAs a general rule...\u201D\uFF0C0.75\u8FD9\u4E2A\u503C\u53EF\u80FD\u4E5F\u53EA\u4E0D\u8FC7\u662F\u4F5C\u8005\u5728\u4E00\u4E2A\u5408\u7406\u8303\u56F4\u5185\u968F\u610F\u9009\u62E9\u7684\u503C\u3002\u4E0D\u8FC7\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5927\u80C6\u731C\u6D4B\u4E00\u4E0B\uFF0C\u8FD9\u91CC\u968F\u610F\u53EF\u80FD\u4E5F\u5E76\u6CA1\u90A3\u4E48\u968F\u610F\u3002\u6211\u4EEC\u524D\u9762\u8BB2\u5230\uFF0Ctable\u6570\u7EC4\u7684\u5927\u5C0F\u4E3A2\u7684\u5E42\u6B21\u65B9\uFF0C\u4E5F\u5C31\u662F2\u30014\u30018\u300116...\u8FD9\u6837\u7684\u6570\uFF0C\u9ED8\u8BA4table\u6570\u7EC4\u5927\u5C0Fn\u4E3A16\uFF0C\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u5176\u6539\u4E3A\u5176\u4ED62\u7684\u5E42\u6B21\u65B9\u503C\u3002\u89E6\u53D1\u6269\u5BB9\u7684\u9608\u503Cthreshold\u662F\u7531\u516C\u5F0Fn*loadFactor\u8BA1\u7B97\u5F97\u5230\u7684\uFF0C\u5982\u679C\u8981\u4FDD\u8BC1threhold\u7684\u503C\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4E3A\u6574\u6570\uFF0C\u90A3\u4E480.5~1\u4E4B\u95F4\uFF08\u4E0D\u5305\u542B0.5\u548C1\uFF09\uFF0C\u6211\u4EEC\u53EA\u80FD\u9009\u62E90.75\u4F5C\u4E3AloadFactor\u7684\u503C\u3002\u4F60\u53EF\u80FD\u8BF4\uFF0C\u5982\u679Ctable\u6570\u7EC4\u7684\u5927\u5C0Fn\u88AB\u8BBE\u7F6E\u4E3A2\uFF0C\u5373\u4FBFloadFactor\u4E3A0.75\uFF0Cthreshold\u4E5F\u4E0D\u4E3A\u6574\u6570\uFF0C\u8FD9\u79CD\u60C5\u51B5\u6539\u8BE5\u600E\u4E48\u529E\uFF1F\u5B9E\u9645\u4E0A\u8FD9\u79CD\u60C5\u51B5\u4E0D\u53EF\u80FD\u53D1\u751F\uFF0C\u6CA1\u4EBA\u4F1A\u5C06table\u6570\u7EC4\u5927\u5C0F\u8BBE\u7F6E\u4E3A2\u3002</p><h2 id="\u4E8C\u3001\u94FE\u8868\u6811\u5316\u9608\u503C" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u94FE\u8868\u6811\u5316\u9608\u503C" aria-hidden="true">#</a> \u4E8C\u3001\u94FE\u8868\u6811\u5316\u9608\u503C</h2><p>\u88C5\u8F7D\u56E0\u5B50\u9650\u5B9A\u7684\u662F\u94FE\u8868\u7684\u5E73\u5747\u957F\u5EA6\uFF0C\u7528\u6765\u4FDD\u8BC1HashMap\u7684\u6574\u4F53\u6027\u80FD\u3002\u94FE\u8868\u6811\u5316\u9650\u5B9A\u7684\u662F\u94FE\u8868\u957F\u5EA6\u7684\u6700\u5927\u503C\uFF0C\u7528\u6765\u4FDD\u8BC1HashMap\u7684\u6700\u5DEE\u60C5\u51B5\u4E0B\u7684\u6027\u80FD\u3002\u4E0D\u8FC7\uFF0C\u94FE\u8868\u6811\u5316\u6BD4\u8F83\u8017\u65F6\uFF0C\u5E76\u4E14\u7EA2\u9ED1\u6811\u7684\u8282\u70B9\u5305\u542B\u5DE6\u53F3\u4E24\u4E2A\u6307\u9488\uFF0C\u800C\u94FE\u8868\u7684\u8282\u70B9\u53EA\u5305\u542Bnext\u6307\u9488\uFF0C\u5B58\u50A8\u540C\u6837\u591A\u7684\u6570\u636E\uFF0C\u7EA2\u9ED1\u6811\u5360\u7528\u7684\u7A7A\u95F4\u8981\u6BD4\u94FE\u8868\u5927\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u5E0C\u671B\u94FE\u8868\u6811\u5316\u8FD9\u79CD\u60C5\u51B5\u6781\u5C11\u53D1\u751F\u3002</p><p>\u4E0A\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0C\u94FE\u8868\u6811\u5316\u7684\u9608\u503C\u4E3A8\uFF0C\u53EA\u6709\u94FE\u8868\u4E2D\u8282\u70B9\u7684\u4E2A\u6570\u5927\u4E8E\u7B49\u4E8E8\u65F6\uFF0C\u624D\u4F1A\u89E6\u53D1\u6811\u5316\u64CD\u4F5C\u3002\u90A3\u4E48\u8FD9\u91CC\u76848\u662F\u5982\u4F55\u5F97\u6765\u7684\u5462\uFF1F\u4E3A\u4EC0\u4E48\u4E0D\u662F5\u30016\u30017\u7B49\u5176\u4ED6\u503C\u5462\uFF1F</p><p>\u8981\u89E3\u91CA8\u7684\u7531\u6765\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5230\u4E00\u4E2A\u7EDF\u8BA1\u5B66\u7684\u77E5\u8BC6\uFF1A\u6CCA\u677E\u5206\u5E03\u3002\u6CCA\u677E\u5206\u5E03\u7528\u6765\u8868\u793A\u5728\u67D0\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\uFF08\u6BD4\u5982\u4E00\u5929\u3001\u4E00\u5468\u3001\u4E00\u5C0F\u65F6\uFF0C\u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\uFF09\uFF0C\u67D0\u4E2A\u4E8B\u4EF6\u53D1\u751F\u7684\u9891\u7387\u5BF9\u5E94\u7684\u6982\u7387\u5206\u5E03\u3002\u6211\u4EEC\u4E3E\u4F8B\u89E3\u91CA\u4E00\u4E0B\u3002\u4E00\u4E2A\u6708\u5185\u4E00\u53F0\u673A\u5668\u53D1\u751F\u4E8B\u6545\u7684\u5E73\u5747\u6B21\u6570\u662F5\u6B21\uFF0C\u4F465\u53EA\u662F\u5E73\u5747\u503C\uFF0C\u6709\u7684\u6708\u4EFD\u4E8B\u6545\u4F1A\u591A\u70B9\uFF0C\u6709\u7684\u6708\u4EFD\u4E8B\u6545\u4F1A\u5C11\u70B9\uFF0C\u4E00\u822C\u6765\u8BB2\uFF0C\u4E8B\u6545\u53D1\u751F\u7684\u9891\u7387\u5BF9\u5E94\u7684\u6982\u7387\u5206\u5E03\u5982\u4E0B\u56FE\u6240\u793A\u3002\u4E8B\u6545\u53D1\u751F5\u6B21\u7684\u6982\u7387\u6700\u5927\uFF0C\u4E8B\u6545\u53D1\u751F\u6B21\u6570\u8FDC\u5927\u4E8E5\u6216\u8005\u8FDC\u5C0F\u4E8E5\u7684\u6982\u7387\u4F1A\u5F88\u4F4E\u3002</p><p>\u200B <img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/73440300_1652977746.png" alt="img" loading="lazy"></p><p>\u867D\u7136\u6211\u4EEC\u77E5\u9053\u5927\u6982\u7684\u6982\u7387\u5206\u5E03\u56FE\uFF0C\u4F46\u662F\u5982\u679C\u6211\u4EEC\u60F3\u8981\u77E5\u9053\uFF0C\u4E00\u4E2A\u6708\u5185\u673A\u5668\u53D1\u751Fk\u6B21\u4E8B\u6545\u7684\u6982\u7387\u5177\u4F53\u662F\u591A\u5C11\uFF0C\u8BE5\u5982\u4F55\u8BA1\u7B97\u5462\uFF1F\u8FD9\u65F6\u5019\u6CCA\u677E\u5206\u5E03\u5C31\u51FA\u573A\u4E86\u3002\u79D1\u5B66\u5BB6\u53D1\u73B0\uFF0C\u5728\u5355\u4F4D\u65F6\u95F4\u5185\u5F88\u591A\u4E8B\u4EF6\u53D1\u751F\u7684\u9891\u7387\u5BF9\u5E94\u7684\u6982\u7387\u5206\u5E03\u5177\u6709\u76F8\u540C\u7684\u7279\u70B9\uFF0C\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u6BD4\u5982\u4E00\u5929\u5185\u51FA\u751F\u5B69\u5B50\u7684\u4E2A\u6570\u3001\u4E00\u5468\u5185\u4E0B\u96E8\u5929\u6570\u7B49\u7B49\u3002\u79D1\u5B66\u5BB6\u5C06\u8FD9\u7C7B\u6982\u7387\u5206\u5E03\uFF0C\u53EB\u505A\u6CCA\u677E\u5206\u5E03\uFF0C\u5E76\u4E14\u4E3A\u5B83\u8BBE\u8BA1\u4E86\u6982\u7387\u8BA1\u7B97\u516C\u5F0F\uFF0C\u8BA9\u6211\u4EEC\u80FD\u591F\u901A\u8FC7\u516C\u5F0F\uFF0C\u8F7B\u677E\u8BA1\u7B97\u51FA\u67D0\u4EF6\u4E8B\u60C5\u53D1\u751Fk\u6B21\u5BF9\u5E94\u7684\u6982\u7387\u3002\u6CCA\u677E\u5206\u5E03\u7684\u6982\u7387\u8BA1\u7B97\u516C\u5F0F\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/23153900_1652977747.jpeg" alt="img" loading="lazy"></p><p>\u5176\u4E2D\uFF0Ce\u4E3A\u6570\u5B66\u5E38\u6570\uFF0C\u503C\u7EA6\u7B49\u4E8E2.71828\uFF0C\u03BB\u4E3A\u4E8B\u4EF6\u53D1\u751F\u7684\u5E73\u5747\u6B21\u6570\u3002\u5982\u679C\u6211\u4EEC\u8981\u8BA1\u7B97\u4E00\u4E2A\u6708\u5185\u673A\u5668\u53D1\u751F3\u6B21\u7684\u6982\u7387\uFF0C\u90A3\u4E48\u5C06k=3\uFF0C\u03BB=5\u5957\u5165\u516C\u5F0F\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u6700\u7EC8\u8BA1\u7B97\u5F97\u5230\u7684\u6982\u7387\u7EA6\u4E3A0.14\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/97317800_1652977747.jpeg" alt="img" loading="lazy"></p><p>\u4E86\u89E3\u4E86\u6CCA\u677E\u5206\u5E03\u4E4B\u540E\uFF0C\u6211\u4EEC\u56DE\u8FC7\u5934\u6765\u770B\u94FE\u8868\u6811\u5316\u9608\u503C\u95EE\u9898\u3002\u5B9E\u9645\u4E0A\uFF0C\u5BF9\u4E8E\u4E00\u4E2AHashMap\u6765\u8BF4\uFF0C\u94FE\u8868\u7684\u957F\u5EA6\u5404\u5F0F\u5404\u6837\uFF0C\u6709\u7684\u4E3A1\uFF0C\u6709\u7684\u4E3A2\uFF0C\u8FD8\u6709\u7684\u4E3A0......\u94FE\u8868\u7684\u957F\u5EA6\u5BF9\u5E94\u7684\u6982\u7387\u5206\u5E03\u4E5F\u7B26\u5408\u6CCA\u677E\u5206\u5E03\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7\u6CCA\u677E\u5206\u5E03\u7684\u6982\u7387\u8BA1\u7B97\u516C\u5F0F\uFF0C\u6765\u8BA1\u7B97\u94FE\u8868\u957F\u5EA6\u4E3Ak\u5BF9\u5E94\u7684\u6982\u7387\u3002\u516C\u5F0F\u4E2D\u7684\u03BB\u503C\u5BF9\u5E94\u7684\u662F\u94FE\u8868\u957F\u5EA6\u7684\u5E73\u5747\u503C\u3002\u90A3\u4E48\uFF0C\u94FE\u8868\u957F\u5EA6\u7684\u5E73\u5747\u503C\u662F\u591A\u5C11\u5462\uFF1F</p><p>\u6211\u4EEC\u77E5\u9053\uFF0CHashMap\u7684\u9ED8\u8BA4\u88C5\u8F7D\u56E0\u5B50\u4E3A0.75\uFF0C\u53EA\u6709\u5F53\u5373\u5C06\u6269\u5BB9\u65F6\uFF0C\u94FE\u8868\u7684\u5E73\u5747\u957F\u5EA6\u624D\u4E3A0.75\uFF0C\u6240\u4EE5\uFF0C\u5728\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u94FE\u8868\u7684\u5E73\u5747\u957F\u5EA6\u90FD\u5C0F\u4E8E0.75\uFF0C\u6211\u4EEC\u9009\u62E90.5\u4F5C\u4E3A\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u94FE\u8868\u7684\u5E73\u5747\u957F\u5EA6\uFF0C\u4E5F\u5C31\u662F\u8BF4\u03BB\u7B49\u4E8E0.5\u3002\u5F53\u7136\uFF0C\u8FD9\u91CC\u76840.5\u662F\u9884\u4F30\u503C\uFF0C\u56E0\u4E3A\u6211\u4EEC\u65E0\u6CD5\u7ED9\u51FA\u94FE\u8868\u5E73\u5747\u957F\u5EA6\u7684\u7CBE\u786E\u503C\u3002\u5C06\u03BB\u5E26\u5165\u6CCA\u677E\u5206\u5E03\u7684\u6982\u7387\u8BA1\u7B97\u516C\u5F0F\uFF0C\u6211\u4EEC\u5F97\u5230\u94FE\u8868\u957F\u5EA6\u5BF9\u5E94\u7684\u6982\u7387\u7684\u8BA1\u7B97\u516C\u5F0F\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/69416900_1652977748.jpeg" alt="img" loading="lazy"></p><p>\u6211\u4EEC\u5C06k=0\u30011\u30012...8\u4F9D\u6B21\u5E26\u5165\u4E0A\u8FF0\u516C\u5F0F\uFF0C\u5F97\u5230\u94FE\u8868\u957F\u5EA6\u5206\u522B\u4E3A0\u30011\u30012...8\u5BF9\u5E94\u7684\u6982\u7387\u503C\uFF0C\u5982\u4E0B\u6240\u793A\u3002\u4ECE\u4E2D\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u94FE\u8868\u957F\u5EA6\u8FBE\u52308\u8FD9\u79CD\u60C5\u51B5\u53D1\u751F\u7684\u6982\u7387\u4E3A\u5343\u4E07\u5206\u4E4B\u516D\uFF0C\u5DF2\u7ECF\u975E\u5E38\u4F4E\u4E86\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u54C8\u5E0C\u51FD\u6570\u8BBE\u8BA1\u5408\u7406\uFF08\u6BD4\u5982\u54C8\u5E0C\u503C\u6BD4\u8F83\u968F\u673A\uFF09\u3001\u88C5\u8F7D\u56E0\u5B50\u8BBE\u7F6E\u5408\u7406\uFF08\u6BD4\u59820.75\uFF09\u7684\u60C5\u51B5\u4E0B\uFF0C\u94FE\u8868\u957F\u5EA6\u5927\u4E8E\u7B49\u4E8E8\u8FD9\u79CD\u60C5\u51B5\u6781\u5C11\u53D1\u751F\u3002\u4E3A\u4E86\u5C3D\u53EF\u80FD\u907F\u514D\u94FE\u8868\u6811\u5316\uFF0C\u4E8E\u662F\uFF0C\u6211\u4EEC\u9009\u62E98\u4F5C\u4E3A\u94FE\u8868\u6811\u5316\u7684\u9608\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> \u94FE\u8868\u957F\u5EA6\uFF1A\u6982\u7387\u503C
 0:    0.60653066
 1:    0.30326533
 2:    0.07581633
 3:    0.01263606
 4:    0.00157952
 5:    0.00015795
 6:    0.00001316
 7:    0.00000094
 8:    0.00000006
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u53EF\u80FD\u4F1A\u8BF4\uFF0C\u94FE\u8868\u957F\u5EA6\u4E3A9\u7684\u6982\u7387\u4F1A\u66F4\u4F4E\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u9009\u62E99\u4F5C\u4E3A\u6811\u5316\u9608\u503C\u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u94FE\u8868\u957F\u5EA6\u8D8A\u957F\uFF0CHashMap\u7684\u6027\u80FD\u5C31\u8D8A\u4F4E\uFF0C\u5728\u907F\u514D\u6811\u5316\u7684\u540C\u65F6\uFF0C\u94FE\u8868\u7684\u6700\u5927\u957F\u5EA6\uFF08\u4E5F\u5C31\u662F\u6811\u5316\u9608\u503C\uFF09\u8981\u5C3D\u91CF\u5C0F\u3002\u6240\u4EE5\uFF0C8\u30019\u6982\u7387\u90FD\u5F88\u4F4E\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u80AF\u5B9A\u9009\u62E9\u8F83\u5C0F\u7684\u90A3\u4E00\u4E2A8\u4E86\u3002</p><h2 id="\u4E09\u3001\u8BFE\u540E\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u8BFE\u540E\u601D\u8003\u9898" aria-hidden="true">#</a> \u4E09\u3001\u8BFE\u540E\u601D\u8003\u9898</h2><p>\u8BF7\u7F16\u7A0B\u6D4B\u8BD5HashMap\u5728\u88C5\u8F7D\u56E0\u5B50\u4E3A0.75\u548C2\u65F6\u7684\u6027\u80FD\u5DEE\u8DDD\u3002</p>`,34),p=[s];function l(d,r){return a(),i("div",null,p)}const h=e(t,[["render",l],["__file","14.HashMap2.html.vue"]]);export{h as default};