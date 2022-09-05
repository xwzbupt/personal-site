import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as p,c as l,a as o,b as r,F as n,d as e,f as c}from"./app.847dc79e.js";const i={},d=o("h1",{id:"paxos",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#paxos","aria-hidden":"true"},"#"),e(" Paxos")],-1),u=o("p",null,"\u53EF\u80FD\u548C\u5F88\u591A\u4EBA\u7684\u5370\u8C61\u76F8\u53CD, Paxos\u5176\u5B9E\u662F\u4E00\u4E2A\u5F02\u5E38\u7B80\u6D01\u800C\u7CBE\u5DE7\u7684\u7B97\u6CD5. \u89E3\u8BFB\u4E00\u904DPaxos\u7B97\u6CD5\u5176\u5B9E\u53EA\u9700\u89815\u5206\u949F. \u672C\u6587\u5C06\u96C6\u4E2D\u5728\u7ECF\u5178\u7684basic Paxos\u4E0A, \u800C\u4E0D\u4F1A\u6D89\u53CA\u5176\u5404\u79CD\u53D8\u79CD(\u5B9E\u5728\u4E5F\u592A\u591A\u4E86).",-1),P=o("h2",{id:"\u524D\u8A00",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),e(" \u524D\u8A00")],-1),h=e('\u672C\u6587\u662F\u201C\u6F2B\u8BDD\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5171\u8BC6\u534F\u8BAE\u201D\u8FD9\u4E2A\u7CFB\u5217\u7684\u7B2C\u4E8C\u7BC7. \u524D\u4E00\u7BC7"'),x={href:"https://zhuanlan.zhihu.com/p/35298019",target:"_blank",rel:"noopener noreferrer"},_=e("2PC/3PC\u7BC7"),m=e('"\u4ECB\u7ECD\u4E86\u5206\u5E03\u5F0F\u5171\u8BC6\u7B97\u6CD5\u4E2D\u6700\u65E9\u76842PC\u548C3PC\u4E24\u4F4D\u8001\u524D\u8F88. \u5404\u4F4D\u8001\u53F8\u673A\u8FEB\u4E0D\u53CA\u5F85\u7684\u50AC\u6211\u8D76\u7D27\u5F00\u8F66, \u5199\u4E00\u5199Paxos. \u7136\u540E\u5C31\u6709\u4E86\u4ECE\u4E09\u756A\u98DE\u5230\u5317\u4EAC\u7684\u98DE\u673A\u4E0A\u6572\u51FA\u6765\u7684\u8FD9\u4E00\u7BC7.'),q=o("p",null,'\u4E00\u63D0\u8D77Paxos, \u5404\u4F4D\u8001\u53F8\u673A\u53EF\u80FD\u5DF2\u7ECF\u864E\u8EAF\u4E00\u9707, \u6BD5\u7ADF\u6C5F\u6E56\u4E0A\u5173\u4E8EPaxos\u7684\u4F20\u95FB\u592A\u591A. \u6BD4\u5982\u5F53\u5E74Leslie Lamport\u7684\u8482\u82B1\u4E4B\u79C0: \u5728\u63D0\u51FAPaxos\u7B97\u6CD5\u540E\u5148\u662F\u628A\u7B97\u6CD5\u5199\u6210\u4E86\u4E00\u90E8\u53E4\u5E0C\u814A\u795E\u8BDD\u80CC\u666F\u7684\u5C0F\u8BF4, \u5BFC\u81F4\u53D1\u8868\u4E867,8\u5E74\u4E5F\u6CA1\u4EBA\u770B\u7684\u61C2\u4ED6\u60F3\u8BF4\u4EC0\u4E48(Lamport: "\u76AE\u4E00\u4E0B\u5F88\u5F00\u5FC3, \u4F60\u7BA1\u6211?");',-1),g=o("p",null,'\u6BD4\u5982\u540E\u6765Lamport\u5B9E\u5728\u770B\u4E0D\u4E0B\u53BB\u4E86(Lamport: "\u54CE, \u611A\u8822\u7684\u5730\u7403\u4EBA\u554A"), \u628A\u5C0F\u8BF4\u56DE\u7089\u91CD\u65B0\u6574\u7406\u6210\u4E86\u4E00\u7BC7\u5B66\u672F\u8BBA\u6587\u53EB"Paxos Made Simple", \u800C\u5176\u6458\u8981\u53EA\u6709\u77ED\u77ED\u4E00\u53E5\u8BDD"The Paxos algorithm, when presented in plain English, is very simple" (Lamport: "\u8981\u662F\u9053\u6B49\u6709\u7528, \u8981\u8B66\u5BDF\u5E72\u5417?");',-1),C=o("p",null,"\u518D\u6BD4\u56E0\u4E3ALamport\u7A33\u91CD\u5E26\u76AE\u7684\u64CD\u4F5C, \u5BFC\u81F4\u5927\u5BB6\u53E3\u53E3\u76F8\u4F20Paxos\u7406\u89E3\u548C\u5B9E\u73B0\u8D77\u6765\u6709\u591A\u56F0\u96BE\u591A\u590D\u6742, \u5BFC\u81F4\u51FA\u73B0\u4E86Raft\u8FD9\u79CD\u6539\u826F\u7248\u7B49\u7B49.",-1),f=o("p",null,[o("strong",null,"\u6572\u9ED1\u677F"),e(': Paxos\u5176\u5B9E\u662F\u4E00\u4E2A\u5F02\u5E38\u7B80\u6D01\u800C\u7CBE\u5DE7\u7684\u7B97\u6CD5. \u89E3\u8BFB\u4E00\u904DPaxos\u7B97\u6CD5\u5176\u5B9E\u53EA\u9700\u89815\u5206\u949F. \u771F\u6B63\u590D\u6742\u7684\u5730\u65B9\u5728\u4E8E\u60F3\u6E05\u695APaxos\u7B97\u6CD5\u5728\u5404\u79CDfailure\u60C5\u5F62\u4E0B\u5982\u4F55\u4F9D\u7136"\u6B63\u786E"\u7684\u5DE5\u4F5C. \u53EA\u6709\u660E\u767D\u4E86\u8FD9\u4E00\u5C42, \u624D\u7B97\u7EC3\u6210\u4E86Paxos\u7684\u5FC3\u6CD5, \u624D\u80FD\u771F\u6B63\u6B23\u8D4FPaxos\u7B97\u6CD5\u7684\u7CBE\u5999\u8BBE\u8BA1, \u8D5E\u53F9Lamport\u7684\u5929\u624D\u601D\u7EF4. \u5728\u6211\u770B\u6765, Paxos\u7B97\u6CD5(\u8FDE\u540CLamport\u7684\u5176\u4ED6\u5982BFT, Vector Clock\u7B49\u6210\u5C31)\u662F\u4E0A\u4E2A\u4E16\u7EAA\u516B\u5341/\u4E5D\u5341\u5E74\u4EE3\u7684\u7ECF\u5178\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7814\u7A76\u4E2D\u6700\u7EAF\u7CB9\u6700\u4F18\u7F8E, \u4E5F\u662F\u6574\u680B\u5927\u53A6\u5E95\u5EA7\u6700\u575A\u5B9E\u7684\u90A3\u4E00\u90E8\u5206.')],-1),b=e("\u63D2\u70B9\u9898\u5916\u8BDD: \u6211\u7B2C\u4E00\u6B21\u8BA4\u771F\u63A5\u89E6\u548C\u5B66\u4E60Paxos\u662F\u5728CMU\u65F6TA\u5206\u5E03\u5F0F\u7CFB\u7EDF("),v={href:"http://link.zhihu.com/?target=http%3A//www.cs.cmu.edu/~dga/15-440/F12/",target:"_blank",rel:"noopener noreferrer"},L=e("15-440, Fall 2012: Distributed Systems"),k=e("). \u5F53\u65F6\u4E5F\u771F\u662F\u73B0\u5B66\u73B0\u5356, \u770B\u5B8C\u77ED\u77ED\u5341\u6765\u884C\u7684\u4F2A\u4EE3\u7801\u540E, \u786C\u662F\u82B1\u4E86\u51E0\u5929\u7684\u65F6\u95F4\u624D\u60F3\u6E05\u695A\u7B97\u6CD5\u91CC\u5404\u79CD\u53D8\u5316, \u7136\u540E\u6700\u540E\u4ECE\u5404\u79CD\u53D8\u5316\u4E2D\u627E\u4E86\u6700\u5751\u7239\u7684\u4E00\u79CD\u4F5C\u4E3A\u671F\u672B\u8003\u8BD5\u9898(\u5404\u4F4D\u540C\u5B66\u62B1\u6B49\u554A). \u7136\u800C\u503C\u5F97\u4E00\u63D0\u7684\u662F, \u5F53\u5E74\u8FD9\u95E8\u8BFE\u7684\u5927\u4F5C\u4E1A\u91CC\u5F88\u591A\u540C\u5B66\u7528\u5F53\u65F6\u624D\u521A\u521A\u53D1\u5E03\u4E0D\u4E45\u7684golang\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u5206\u5E03\u5F0FPaxos\u7CFB\u7EDF. \u8FD9\u5728\u5F53\u65F6\u4E00\u4E2A\u5F88\u5927\u80C6\u7684\u5C1D\u8BD5, \u4F46\u6700\u540E\u5B66\u751F\u4EEC\u7684\u53CD\u9988\u975E\u5E38\u597D, \u5927\u7EA6\u662F\u4ECE\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u8BC1\u660E(1) golang\u7684\u7CFB\u7EDF\u62BD\u8C61\u8DB3\u591F\u65B9\u4FBF, \u6765\u642D\u5EFA\u5206\u5E03\u5F0F\u7CFB\u7EDF\u53EF\u4EE5\u5F88\u597D\u7684\u4E13\u6CE8\u5728\u7B97\u6CD5\u5C42\u9762\u4E0A (2) Paxos \u4E5F\u6CA1\u90A3\u4E48\u6050\u6016."),F=c('<h2 id="paxos\u7B97\u6CD5\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#paxos\u7B97\u6CD5\u63CF\u8FF0" aria-hidden="true">#</a> Paxos\u7B97\u6CD5\u63CF\u8FF0</h2><p>\u8003\u8651\u4E00\u4E2A\u7B80\u5316\u4E86\u7684Paxos\u7CFB\u7EDF: \u53EA\u6709leader\u548Cacceptor\u4E24\u79CD\u89D2\u8272.</p><p><strong>1. Prepare\u9636\u6BB5</strong></p><ul><li>(1a) leader\u7684\u8282\u70B9\u7ED9\u6240\u6709\u5176\u4ED6acceptor\u8282\u70B9\u53D1\u9001\u6D88\u606F&quot;proposal(n)&quot;---n\u662F\u8BE5\u8282\u70B9\u4E3A\u8FD9\u4E2A\u63D0\u8BAE\u9009\u62E9\u7684\u4E00\u4E2A\u6570\u5B57, \u59D1\u4E14\u7406\u89E3\u4E3A\u4E00\u4E2A\u65B9\u6848\u7F16\u53F7. \u5E76\u671F\u5F85\u8BE5\u63D0\u8BAE\u83B7\u5F97\u6240\u6709\u8282\u70B9\u4E2D\u7684\u7B80\u5355\u591A\u6570(Paxos\u7684Quorum)\u7684\u8BB8\u53EF.</li><li>(1b) \u6BCF\u4E00\u4E2A\u63A5\u53D7\u5230proposal\u7684acceptor\u8282\u70B9: \u5982\u679C\u8FD9\u662F\u5B83\u63A5\u53D7\u5230\u7684\u7B2C\u4E00\u4E2Aproposal, \u56DE\u7B54&quot;promise&quot;. \u4EE3\u8868\u8BE5\u8282\u70B9<strong>\u8BB8\u8BFA</strong>\u5C06\u4F1A\u4FDD\u6301\u627F\u8BA4\u8BE5proposal\u53D1\u9001\u65B9\u4E3Aleader, \u9664\u975E\u6536\u5230\u5176\u4ED6\u4F18\u5148\u7EA7\u66F4\u9AD8\u7684proposal; \u5982\u679C\u5DF2\u7ECF\u6709\u63A5\u6536\u5230\u5E76accepted(\u6CE8: \u8FD9\u662F\u4E0B\u4E00\u9636\u6BB5\u53EF\u80FD\u4F1A\u53D1\u751F\u7684\u52A8\u4F5C)\u5176\u4ED6\u7684proposal(n&#39;,v&#39;)--n&#39;\u662F\u8BE5proposal\u7684\u65B9\u6848\u53F7\u800Cv&#39;\u662F\u63D0\u8BAE\u7684\u5171\u8BC6:</li></ul><p>\u200B * \u5982\u679C n &lt; n&#39;, \u4E4B\u524Daccept\u7684\u63D0\u8BAE\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7, \u5BF9\u65B0\u63A5\u53D7\u7684\u63D0\u8BAE\u56DE\u7B54&quot;reject&quot;, \u4EE5\u5151\u73B0\u4E4B\u524D\u7684\u8BB8\u8BFA.</p><p>\u200B * \u5982\u679C n &gt; n&#39;, \u56DE\u7B54&quot;promise&quot;\u7684\u5E76\u540C\u65F6\u9644\u4E0A\u65E7\u7684\u63D0\u8BAE,proposal(n&#39;, v&#39;). \u8FD9\u6837\u5728\u8BA4\u53EF\u65B0\u7684leader\u8EAB\u4EFD\u7684\u540C\u65F6, \u4E5F\u544A\u8BC9\u4E86\u65B0\u7684leader\u8FC7\u53BB\u7684\u88AB\u7B80\u5355\u591A\u6570\u8BA4\u53EF\u8FC7\u7684\u63D0\u8BAE</p><ul><li>(1c) \u5982\u679Cproposer\u7684\u63D0\u8BAE\u53D7\u5230\u4E86\u7B80\u5355\u591A\u6570\u7684&quot;reject&quot;, \u7ADE\u4E89leader\u5BA3\u544A\u5931\u8D25, \u53EF\u4EE5\u653E\u5F03\u8FD9\u4E00\u63D0\u8BAE; \u5982\u679C\u63A5\u53D7\u5230\u4E86\u7B80\u5355\u591A\u6570\u7684&quot;promise&quot;, \u5219\u8BE5proposer\u6210\u4E3Aleader, \u5B83\u9700\u8981\u4ECE\u6536\u5230\u7684promise\u91CC\u9644\u5E26\u7684\u4E4B\u524Daccepted\u7684\u63D0\u8BAE\u4E2D\u9009\u53D6\u65B9\u6848\u53F7(n\u503C)\u6700\u9AD8\u7684\u5BF9\u5E94\u7684\u5171\u8BC6; \u5982\u679C\u5386\u53F2\u4E0A\u6CA1\u6709\u88ABaccept\u8FC7\u7684\u63D0\u8BAE, leader\u53EF\u4EE5\u81EA\u5DF1\u9009\u53D6\u4E00\u4E2A\u5171\u8BC6v.</li></ul><p><strong>2. Accept\u9636\u6BB5</strong></p><ul><li>(2a) leader\u4F1A\u5BF9\u6240\u6709acceptor\u53D1\u9001&quot;accept-request(n,v)&quot;, \u8BF7\u6C42\u6240\u6709acceptor\u63A5\u53D7\u7F16\u53F7\u4E3An\u7684\u5171\u8BC6v\u7684\u63D0\u8BAE</li><li>(2b) \u6BCF\u4E00\u4E2A\u63A5\u6536\u5230\u8BE5\u63D0\u8BAE\u7684acceptor\u8282\u70B9: \u5982\u679C\u6CA1\u6709\u63A5\u53D7\u8FC7\u7F16\u53F7\u6BD4n\u66F4\u9AD8\u7684\u63D0\u8BAE, \u5219\u8FD4\u56DE&quot;accept&quot;\u8868\u793A\u63A5\u53D7\u8FD9\u4E00\u5171\u8BC6\u63D0\u8BAE; \u5426\u5219\u8FD4\u56DE&quot;reject&quot;</li><li>(2c) \u5982\u679C\u7B80\u5355\u591A\u6570\u7684acceptor\u8FD4\u56DE\u4E86&quot;accept&quot;, \u5219\u5171\u8BC6\u8FBE\u6210; \u5426\u5219\u5171\u8BC6\u5931\u8D25, \u91CD\u542FPaxos\u534F\u8BAE.</li></ul><p>\u8BF7\u6CE8\u610F\u51E0\u70B9\u4EE5\u5E2E\u52A9\u7406\u89E3\u534F\u8BAE:</p><ol><li>\u7B2C\u4E00\u9636\u6BB5\u7ADE\u4E89\u7684\u5E76\u4E0D\u662F\u5171\u8BC6\u672C\u8EAB, \u800C\u662F\u5728\u4E89\u53D6\u5750\u5B9Eleader\u8EAB\u4EFD\u83B7\u5F97\u7B80\u5355\u591A\u6570\u7684\u8BA4\u53EF</li><li>\u65B9\u6848\u7F16\u53F7n\u672C\u8EAB\u5E76\u4E0D\u662F\u5171\u8BC6, \u800C\u662F\u63D0\u8BAE\u7684\u4E00\u4E2A\u4F18\u5148\u7EA7, \u5728\u591A\u4E2A\u8282\u70B9\u7ADE\u4E89leader\u8EAB\u4EFD\u65F6\u53EF\u4EE5\u533A\u5206\u4F18\u5148\u987A\u5E8F. \u5171\u8BC6\u672C\u8EAB(v)\u4F1A\u5728\u4E0B\u4E00\u9636\u6BB5leader\u8EAB\u4EFD\u786E\u8BA4\u540E\u7531leader\u6DFB\u52A0\u8FDB\u63D0\u8BAE;</li><li>\u867D\u7136\u8FD9\u4E00\u8F6E\u4E0A\u53EA\u4F1A\u6709\u4E00\u4E2Aleader\u83B7\u5F97\u7B80\u5355\u591A\u6570\u7684\u8BA4\u53EF\u4EA7\u751F, \u4F46\u53EF\u80FD\u6709\u591A\u4E2A&quot;\u7CCA\u6D82&quot;\u8282\u70B9\u8BA4\u4E3A\u81EA\u5DF1\u5E94\u8BE5\u505Aleader, \u89C1\u540E\u9762\u7684\u5206\u6790;</li></ol><p>\u5728\u6211\u770B\u6765, Paxos\u5BF92PC\u548C3PC\u6709\u51E0\u70B9\u91CD\u8981\u7684\u6539\u8FDB.</p><p><strong>\u7B2C\u4E00\uFF0C\u5206\u79BB\u5171\u8BC6\u7684\u63D0\u8BAE\u8005proposer\u4EE5\u53CA\u5E2E\u52A9\u63D0\u8BAE\u6700\u7EC8\u901A\u8FC7\u7684leader\u8FD9\u4E24\u4E2A\u89D2\u8272.</strong> Paxos\u91CC, \u5373\u4F7F\u4E00\u4E2Aleader\u8EAB\u4EFD\u88AB\u6279\u51C6, \u5B83\u4E5F\u9700\u8981\u5C0A\u91CD\u5386\u53F2\u4E0A\u5176\u4ED6\u88AB\u540C\u610F\u8FC7\u7684\u63D0\u8BAE. \u6362\u8A00\u4E4Bleader\u672C\u8EAB\u53EA\u662F\u4E00\u4E2A\u670D\u52A1\u6027\u7684\u89D2\u8272, \u672A\u5FC5\u6709\u673A\u4F1A\u81EA\u5DF1\u63D0\u51FA\u5171\u8BC6. \u56DE\u5FC6\u4E00\u4E0B\u4E0A\u4E00\u7BC7\u4ECB\u7ECD\u76842PC\u548C3PC\u8FD9\u4E24\u4E2A\u534F\u8BAE\u5F53\u4E2D, coordinator\u4E0D\u4EC5\u8D1F\u8D23\u63D0\u51FA\u6700\u540E\u7684\u5171\u8BC6\u534F\u8BAE, \u540C\u65F6\u4E5F\u8D1F\u8D23\u670D\u52A1\u6240\u6709\u8282\u70B9\u4FDD\u8BC1\u5B83\u7684\u5171\u8BC6\u88AB\u901A\u8FC7. \u800C\u6B63\u662F\u56E0\u4E3APaxos\u4E2D\u628Acoordinator\u7684\u804C\u8D23\u89E3\u8026\u5408\u6210\u4E86proposer\u548Cleader, \u4F7F\u5F97\u6574\u4E2A\u7B97\u6CD5\u66F4\u52A0robust.\u5C31\u7B97\u524D\u4EFBleader\u5B95\u673A\u4E86, \u540E\u9762\u65B0\u4EA7\u751Fleader\u4E5F\u53EF\u4EE5\u7EE7\u627F\u524D\u4EFB\u7684&quot;\u9057\u5FD7&quot;\u6765\u5B8C\u6210\u4E00\u4E2APaxos\u534F\u8BAE.</p><p><strong>\u7B2C\u4E8C\uFF0C\u5BF9\u7B80\u5355\u591A\u6570\u7684\u5DE7\u5999\u5E94\u7528.</strong> \u7B2C\u4E00\u9636\u6BB5\u91CC\u9009\u4E3Eleader\u8981\u6C42\u7684\u7B80\u5355\u591A\u6570\u4FDD\u8BC1\u4E86\u9009\u4E3E\u51FA\u6765\u7684leader\u4E00\u5B9A\u4E0D\u4F1A\u9519\u8FC7\u4E4B\u524D\u88ABaccept\u8FC7\u7684\u63D0\u8BAE---\u6240\u4EE5\u5C31\u7B97\u90A3\u4E2A\u63D0\u8BAE\u6700\u521D\u7684proposer\u6302\u4E86, \u4E5F\u4F1A\u81F3\u5C11\u88AB\u4E00\u4E2Aacceptor\u53D1\u7ED9\u65B0\u7684leader\u6765\u7EE7\u627F. \u800C\u7B2C\u4E8C\u9636\u6BB5\u91CC\u8981\u6C42\u7684\u8FBE\u6210\u5171\u8BC6\u7684\u7B80\u5355\u591A\u6570\u4FDD\u8BC1\u4E86\u6709\u591A\u4E2A&quot;\u81EA\u4EE5\u4E3A\u662F&quot;\u7684leader\u51FA\u73B0\u65F6(\u6BD4\u5982\u4E00\u4E2Aleader\u6389\u7EBF, \u65B0leader\u9009\u51FA, \u65E7leader\u91CD\u65B0\u4E0A\u7EBF), \u4E00\u5B9A\u53EA\u4F1A\u6709\u4E00\u4E2A\u6700\u540E\u901A\u8FC7. \u770B\u8FC7\u4E00\u4E2A\u7CBE\u5F69\u7684\u8BC4\u8BBA, \u8BF4Paxos\u5176\u5B9E\u5C31\u662F\u8FDE\u7EED\u8FD0\u7528\u4E24\u6B21&quot;\u62BD\u5C49\u539F\u7406&quot;, \u5176\u5B9E\u975E\u5E38\u51C6\u786E.</p><h2 id="paxos\u4E0E2pc-3pc\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#paxos\u4E0E2pc-3pc\u7684\u5173\u7CFB" aria-hidden="true">#</a> Paxos\u4E0E2PC/3PC\u7684\u5173\u7CFB</h2><p><strong>Paxos\u5982\u4F55\u514B\u670D2PC\u7684\u95EE\u9898</strong>: 2PC\u7684\u95EE\u9898\u5728\u4E8E\u4E0D\u80FD\u5904\u7406\u6700\u7B80\u5355\u7684fail-stop\u9519\u8BEF\u6A21\u5F0F.</p><ul><li>2PC\u4E2Dcoordinator\u662F\u552F\u4E00\u800C\u56FA\u5B9A\u7684, \u5982\u679Ccoordinator\u5B95\u673A, \u90A3\u4E48\u5C31\u4F1A\u6709\u60C5\u5F62\u5BFC\u81F4coordinator\u4E4B\u524Dpropose\u7684\u63D0\u8BAE\u7684\u6295\u7968\u7ED3\u679C\u4E22\u5931. \u5C31\u7B97\u542F\u52A8\u65B0\u7684\u540E\u5907coordinator, \u6CA1\u6709\u673A\u5236\u53EF\u4EE5\u5B66\u4E60\u4EE5\u524D\u7684\u6295\u7968\u7ED3\u679C.</li><li>Paxos\u56E0\u4E3A\u5206\u79BB\u4E86\u63D0\u8BAE\u548Cleader, \u4ECE\u7B97\u6CD5\u4E0A\u4FDD\u8BC1\u603B\u53EF\u4EE5\u9009\u4E3E\u51FA\u540E\u5907leader\u5E76\u63A5\u66FF\u524D\u4EFBleader\u7684\u5DE5\u4F5C.</li></ul><p><strong>Paxos\u5982\u4F55\u514B\u670D3PC\u7684\u95EE\u9898</strong>: 3PC\u6539\u8FDB\u4E862PC\u7684fail-stop\u7684\u95EE\u9898, \u4F46\u662F\u4E0D\u80FD\u5904\u7406fail-recover\u7C7B\u578B\u7684\u9519\u8BEF.</p><ul><li>3PC\u53D1\u751F\u7684\u95EE\u9898\u5728\u4E8E\u5F53\u6709\u591A\u4E2A&quot;\u81EA\u8BA4\u7684leader&quot;\u51FA\u73B0\u65F6, \u5E76\u4E0D\u80FD\u6709\u6548\u7684\u89E3\u51B3coordinator\u4E4B\u95F4\u7684\u7ADE\u4E89---\u8C01\u662F\u771F\u6B63\u7684coordinator.</li><li>\u800CPaxos\u901A\u8FC7Quorum\u7684\u8FD0\u7528, \u4FDD\u8BC1\u4E86\u591A\u4E86\u4E2Aleader\u4E4B\u95F4\u53EF\u4EE5\u4E92\u76F8\u53D1\u73B0.</li></ul><h2 id="paxos\u7684\u5C40\u9650\u6027" tabindex="-1"><a class="header-anchor" href="#paxos\u7684\u5C40\u9650\u6027" aria-hidden="true">#</a> Paxos\u7684\u5C40\u9650\u6027</h2><p>\u5C31\u50CF2PC\u4EE5\u53CA3PC\u4E00\u6837, Paxos\u4E5F\u6709\u5176\u5C40\u9650\u6027.</p><p>1 \u6D3B\u9501\u95EE\u9898.</p><p>Paxos\u7406\u8BBA\u4E0A\u5B58\u5728\u4E00\u4E2A\u4E0D\u80FD\u7EC8\u7ED3\u534F\u8BAE\u7684\u6D3B\u9501\u7ADE\u4E89\u95EE\u9898. \u6BD4\u5982\u4E00\u4E2Aproposer\u63D0\u4EA4\u7684\u63D0\u8BAE\u56E0\u4E3A\u7F16\u53F7\u8FC7\u4F4E\u88AB\u62D2\u7EDD\u65F6, \u6B64proposer\u53EF\u80FD\u91CD\u542FPaxos\u800C\u63D0\u9AD8\u7F16\u53F7\u91CD\u65B0\u63D0\u4EA4. \u5982\u679C\u540C\u65F6\u6709\u4E24\u4E2Aproposer\u90FD\u53D1\u73B0\u81EA\u5DF1\u7684\u65B9\u6848\u7F16\u53F7\u8FC7\u4F4E, \u4ECE\u800C\u8F6E\u6D41\u63D0\u51FA\u66F4\u9AD8\u7F16\u53F7\u7684proposal\u800C\u5BFC\u81F4\u5BF9\u65B9\u88AB\u62D2, \u53EF\u80FD\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF(\u6216\u6D3B\u9501).</p><p>2 \u6076\u610F\u8282\u70B9.</p><p>\u76EE\u524D\u4E3A\u6B622PC, 3PC, Paxos\u5747\u662F\u5047\u8BBE\u6240\u6709\u8282\u70B9\u90FD\u9075\u5B88\u534F\u8BAE\u7684\u89C4\u5B9A. \u5F53\u5B58\u5728\u6076\u610F\u7684, \u53EF\u80FD\u53D1\u9001\u4EFB\u4F55\u5BFC\u81F4\u534F\u8BAE\u505C\u6B62\u6216\u8005\u51FA\u9519\u7684\u6D88\u606F\u7684\u8282\u70B9\u5B58\u5728\u65F6, \u5C31\u9700\u8981\u6709\u66F4\u5F3A\u7684\u5171\u8BC6\u7B97\u6CD5\u5728&quot;\u5B88\u6CD5\u8282\u70B9&quot;\u95F4\u8FBE\u6210\u5171\u8BC6. Lamport \u7684BFT(\u62DC\u5360\u5EAD\u5C06\u519B\u95EE\u9898)\u4E86\u89E3\u4E00\u4E0B.</p>',25);function B(T,V){const a=s("ExternalLinkIcon");return p(),l(n,null,[d,u,P,o("p",null,[h,o("a",x,[_,r(a)]),m]),q,g,C,f,o("p",null,[b,o("a",v,[L,r(a)]),k]),F],64)}var N=t(i,[["render",B],["__file","Paxos.html.vue"]]);export{N as default};
