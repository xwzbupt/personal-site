import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{f as d}from"./app.b9a5c5a7.js";const a={},r=d(`<h1 id="raft" tabindex="-1"><a class="header-anchor" href="#raft" aria-hidden="true">#</a> Raft</h1><h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><p>\u4E0D\u540C\u4E8EPaxos\u7B97\u6CD5\u76F4\u63A5\u4ECE\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u95EE\u9898\u51FA\u53D1\u63A8\u5BFC\u51FA\u6765\uFF0CRaft\u7B97\u6CD5\u5219\u662F\u4ECE\u591A\u526F\u672C\u72B6\u6001\u673A\u7684\u89D2\u5EA6\u63D0\u51FA\uFF0C\u7528\u4E8E\u7BA1\u7406\u591A\u526F\u672C\u72B6\u6001\u673A\u7684\u65E5\u5FD7\u590D\u5236\u3002Raft\u5B9E\u73B0\u4E86\u548CPaxos\u76F8\u540C\u7684\u529F\u80FD\uFF0C\u5B83\u5C06\u4E00\u81F4\u6027\u5206\u89E3\u4E3A\u591A\u4E2A\u5B50\u95EE\u9898: Leader\u9009\u4E3E(Leader election)\u3001\u65E5\u5FD7\u540C\u6B65(Log replication)\u3001\u5B89\u5168\u6027(Safety)\u3001\u65E5\u5FD7\u538B\u7F29(Log compaction)\u3001\u6210\u5458\u53D8\u66F4(Membership change)\u7B49\u3002\u540C\u65F6\uFF0CRaft\u7B97\u6CD5\u4F7F\u7528\u4E86\u66F4\u5F3A\u7684\u5047\u8BBE\u6765\u51CF\u5C11\u4E86\u9700\u8981\u8003\u8651\u7684\u72B6\u6001\uFF0C\u4F7F\u4E4B\u53D8\u7684\u6613\u4E8E\u7406\u89E3\u548C\u5B9E\u73B0\u3002</p><h3 id="\u62DC\u5360\u5EAD\u5C06\u519B" tabindex="-1"><a class="header-anchor" href="#\u62DC\u5360\u5EAD\u5C06\u519B" aria-hidden="true">#</a> \u62DC\u5360\u5EAD\u5C06\u519B</h3><p>\u5728\u4ECB\u7ECD\u5171\u8BC6\u7B97\u6CD5\u4E4B\u524D\uFF0C\u5148\u4ECB\u7ECD\u4E00\u4E2A\u7B80\u5316\u7248\u62DC\u5360\u5EAD\u5C06\u519B\u7684\u4F8B\u5B50\u6765\u5E2E\u52A9\u7406\u89E3\u5171\u8BC6\u7B97\u6CD5\u3002</p><blockquote><p>\u5047\u8BBE\u591A\u4F4D\u62DC\u5360\u5EAD\u5C06\u519B\u4E2D\u6CA1\u6709\u53DB\u519B\uFF0C\u4FE1\u4F7F\u7684\u4FE1\u606F\u53EF\u9760\u4F46\u6709\u53EF\u80FD\u88AB\u6697\u6740\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u519B\u4EEC\u5982\u4F55\u8FBE\u6210\u662F\u5426\u8981\u8FDB\u653B\u7684\u4E00\u81F4\u6027\u51B3\u5B9A\uFF1F</p></blockquote><p>\u89E3\u51B3\u65B9\u6848\u5927\u81F4\u53EF\u4EE5\u7406\u89E3\u6210\uFF1A\u5148\u5728\u6240\u6709\u7684\u5C06\u519B\u4E2D\u9009\u51FA\u4E00\u4E2A\u5927\u5C06\u519B\uFF0C\u7528\u6765\u505A\u51FA\u6240\u6709\u7684\u51B3\u5B9A\u3002</p><p>\u4E3E\u4F8B\u5982\u4E0B\uFF1A\u5047\u5982\u73B0\u5728\u4E00\u5171\u6709 3 \u4E2A\u5C06\u519B A\uFF0CB \u548C C\uFF0C\u6BCF\u4E2A\u5C06\u519B\u90FD\u6709\u4E00\u4E2A\u968F\u673A\u65F6\u95F4\u7684\u5012\u8BA1\u65F6\u5668\uFF0C\u5012\u8BA1\u65F6\u4E00\u7ED3\u675F\uFF0C\u8FD9\u4E2A\u5C06\u519B\u5C31\u628A\u81EA\u5DF1\u5F53\u6210\u5927\u5C06\u519B\u5019\u9009\u4EBA\uFF0C\u7136\u540E\u6D3E\u4FE1\u4F7F\u4F20\u9012\u9009\u4E3E\u6295\u7968\u7684\u4FE1\u606F\u7ED9\u5C06\u519B B \u548C C\uFF0C\u5982\u679C\u5C06\u519B B \u548C C \u8FD8\u6CA1\u6709\u628A\u81EA\u5DF1\u5F53\u4F5C\u5019\u9009\u4EBA\uFF08\u81EA\u5DF1\u7684\u5012\u8BA1\u65F6\u8FD8\u6CA1\u6709\u7ED3\u675F\uFF09\uFF0C\u5E76\u4E14\u6CA1\u6709\u628A\u9009\u4E3E\u7968\u6295\u7ED9\u5176\u4ED6\u4EBA\uFF0C\u5B83\u4EEC\u5C31\u4F1A\u628A\u7968\u6295\u7ED9\u5C06\u519B A\uFF0C\u4FE1\u4F7F\u56DE\u5230\u5C06\u519B A \u65F6\uFF0C\u5C06\u519B A \u77E5\u9053\u81EA\u5DF1\u6536\u5230\u4E86\u8DB3\u591F\u7684\u7968\u6570\uFF0C\u6210\u4E3A\u5927\u5C06\u519B\u3002\u5728\u6709\u4E86\u5927\u5C06\u519B\u4E4B\u540E\uFF0C\u662F\u5426\u9700\u8981\u8FDB\u653B\u5C31\u7531\u5927\u5C06\u519B A \u51B3\u5B9A\uFF0C\u7136\u540E\u518D\u53BB\u6D3E\u4FE1\u4F7F\u901A\u77E5\u53E6\u5916\u4E24\u4E2A\u5C06\u519B\uFF0C\u81EA\u5DF1\u5DF2\u7ECF\u6210\u4E3A\u4E86\u5927\u5C06\u519B\u3002\u5982\u679C\u4E00\u6BB5\u65F6\u95F4\u8FD8\u6CA1\u6536\u5230\u5C06\u519B B \u548C C \u7684\u56DE\u590D\uFF08\u4FE1\u4F7F\u53EF\u80FD\u4F1A\u88AB\u6697\u6740\uFF09\uFF0C\u90A3\u5C31\u518D\u91CD\u6D3E\u4E00\u4E2A\u4FE1\u4F7F\uFF0C\u76F4\u5230\u6536\u5230\u56DE\u590D\u3002</p><h3 id="\u5171\u8BC6\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5171\u8BC6\u7B97\u6CD5" aria-hidden="true">#</a> \u5171\u8BC6\u7B97\u6CD5</h3><p>\u5171\u8BC6\u662F\u53EF\u5BB9\u9519\u7CFB\u7EDF\u4E2D\u7684\u4E00\u4E2A\u57FA\u672C\u95EE\u9898\uFF1A\u5373\u4F7F\u9762\u5BF9\u6545\u969C\uFF0C\u670D\u52A1\u5668\u4E5F\u53EF\u4EE5\u5728\u5171\u4EAB\u72B6\u6001\u4E0A\u8FBE\u6210\u4E00\u81F4\u3002</p><p>\u5171\u8BC6\u7B97\u6CD5\u5141\u8BB8\u4E00\u7EC4\u8282\u70B9\u50CF\u4E00\u4E2A\u6574\u4F53\u4E00\u6837\u4E00\u8D77\u5DE5\u4F5C\uFF0C\u5373\u4F7F\u5176\u4E2D\u7684\u4E00\u4E9B\u8282\u70B9\u51FA\u73B0\u6545\u969C\u4E5F\u80FD\u591F\u7EE7\u7EED\u5DE5\u4F5C\u4E0B\u53BB\uFF0C\u5176\u6B63\u786E\u6027\u4E3B\u8981\u662F\u6E90\u4E8E\u590D\u5236\u72B6\u6001\u673A\u7684\u6027\u8D28\uFF1A\u4E00\u7EC4<code>Server</code>\u7684\u72B6\u6001\u673A\u8BA1\u7B97\u76F8\u540C\u72B6\u6001\u7684\u526F\u672C\uFF0C\u5373\u4F7F\u6709\u4E00\u90E8\u5206\u7684<code>Server</code>\u5B95\u673A\u4E86\u5B83\u4EEC\u4ECD\u7136\u80FD\u591F\u7EE7\u7EED\u8FD0\u884C\u3002</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/paxos-rsm-architecture.png" alt="rsm-architecture.png" loading="lazy"></p><p>\u4E00\u822C\u901A\u8FC7\u4F7F\u7528\u590D\u5236\u65E5\u5FD7\u6765\u5B9E\u73B0\u590D\u5236\u72B6\u6001\u673A\u3002\u6BCF\u4E2A<code>Server</code>\u5B58\u50A8\u7740\u4E00\u4EFD\u5305\u62EC\u547D\u4EE4\u5E8F\u5217\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u72B6\u6001\u673A\u4F1A\u6309\u987A\u5E8F\u6267\u884C\u8FD9\u4E9B\u547D\u4EE4\u3002\u56E0\u4E3A\u6BCF\u4E2A\u65E5\u5FD7\u5305\u542B\u76F8\u540C\u7684\u547D\u4EE4\uFF0C\u5E76\u4E14\u987A\u5E8F\u4E5F\u76F8\u540C\uFF0C\u6240\u4EE5\u6BCF\u4E2A\u72B6\u6001\u673A\u5904\u7406\u76F8\u540C\u7684\u547D\u4EE4\u5E8F\u5217\u3002\u7531\u4E8E\u72B6\u6001\u673A\u662F\u786E\u5B9A\u6027\u7684\uFF0C\u6240\u4EE5\u5904\u7406\u76F8\u540C\u7684\u72B6\u6001\uFF0C\u5F97\u5230\u76F8\u540C\u7684\u8F93\u51FA\u3002</p><p>\u56E0\u6B64\u5171\u8BC6\u7B97\u6CD5\u7684\u5DE5\u4F5C\u5C31\u662F\u4FDD\u6301\u590D\u5236\u65E5\u5FD7\u7684\u4E00\u81F4\u6027\u3002\u670D\u52A1\u5668\u4E0A\u7684\u5171\u8BC6\u6A21\u5757\u4ECE\u5BA2\u6237\u7AEF\u63A5\u6536\u547D\u4EE4\u5E76\u5C06\u5B83\u4EEC\u6DFB\u52A0\u5230\u65E5\u5FD7\u4E2D\u3002\u5B83\u4E0E\u5176\u4ED6\u670D\u52A1\u5668\u4E0A\u7684\u5171\u8BC6\u6A21\u5757\u901A\u4FE1\uFF0C\u4EE5\u786E\u4FDD\u5373\u4F7F\u67D0\u4E9B\u670D\u52A1\u5668\u53D1\u751F\u6545\u969C\u3002\u6BCF\u4E2A\u65E5\u5FD7\u6700\u7EC8\u5305\u542B\u76F8\u540C\u987A\u5E8F\u7684\u8BF7\u6C42\u3002\u4E00\u65E6\u547D\u4EE4\u88AB\u6B63\u786E\u5730\u590D\u5236\uFF0C\u5B83\u4EEC\u5C31\u88AB\u79F0\u4E3A\u5DF2\u63D0\u4EA4\u3002\u6BCF\u4E2A\u670D\u52A1\u5668\u7684\u72B6\u6001\u673A\u6309\u7167\u65E5\u5FD7\u987A\u5E8F\u5904\u7406\u5DF2\u63D0\u4EA4\u7684\u547D\u4EE4\uFF0C\u5E76\u5C06\u8F93\u51FA\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u56E0\u6B64\uFF0C\u8FD9\u4E9B\u670D\u52A1\u5668\u5F62\u6210\u4E86\u4E00\u4E2A\u5355\u4E00\u7684\u3001\u9AD8\u5EA6\u53EF\u9760\u7684\u72B6\u6001\u673A\u3002</p><p>\u9002\u7528\u4E8E\u5B9E\u9645\u7CFB\u7EDF\u7684\u5171\u8BC6\u7B97\u6CD5\u901A\u5E38\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A</p><ul><li>\u5B89\u5168\u3002\u786E\u4FDD\u5728\u975E\u62DC\u5360\u5EAD\u6761\u4EF6\uFF08\u4E5F\u5C31\u662F\u4E0A\u6587\u4E2D\u63D0\u5230\u7684\u7B80\u6613\u7248\u62DC\u5360\u5EAD\uFF09\u4E0B\u7684\u5B89\u5168\u6027\uFF0C\u5305\u62EC\u7F51\u7EDC\u5EF6\u8FDF\u3001\u5206\u533A\u3001\u5305\u4E22\u5931\u3001\u590D\u5236\u548C\u91CD\u65B0\u6392\u5E8F\u3002</li><li>\u9AD8\u53EF\u7528\u3002\u53EA\u8981\u5927\u591A\u6570\u670D\u52A1\u5668\u90FD\u662F\u53EF\u64CD\u4F5C\u7684\uFF0C\u5E76\u4E14\u53EF\u4EE5\u76F8\u4E92\u901A\u4FE1\uFF0C\u4E5F\u53EF\u4EE5\u4E0E\u5BA2\u6237\u7AEF\u8FDB\u884C\u901A\u4FE1\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u770B\u4F5C\u5B8C\u5168\u529F\u80FD\u53EF\u7528\u7684\u3002\u56E0\u6B64\uFF0C\u4E00\u4E2A\u5178\u578B\u7684\u7531\u4E94\u53F0\u670D\u52A1\u5668\u7EC4\u6210\u7684\u96C6\u7FA4\u53EF\u4EE5\u5BB9\u5FCD\u4EFB\u4F55\u4E24\u53F0\u670D\u52A1\u5668\u7AEF\u6545\u969C\u3002\u5047\u8BBE\u670D\u52A1\u5668\u56E0\u505C\u6B62\u800C\u53D1\u751F\u6545\u969C\uFF1B\u5B83\u4EEC\u7A0D\u540E\u53EF\u80FD\u4F1A\u4ECE\u7A33\u5B9A\u5B58\u50A8\u4E0A\u7684\u72B6\u6001\u4E2D\u6062\u590D\u5E76\u91CD\u65B0\u52A0\u5165\u96C6\u7FA4\u3002</li><li>\u4E00\u81F4\u6027\u4E0D\u4F9D\u8D56\u65F6\u5E8F\u3002\u9519\u8BEF\u7684\u65F6\u949F\u548C\u6781\u7AEF\u7684\u6D88\u606F\u5EF6\u8FDF\uFF0C\u5728\u6700\u574F\u7684\u60C5\u51B5\u4E0B\u4E5F\u53EA\u4F1A\u9020\u6210\u53EF\u7528\u6027\u95EE\u9898\uFF0C\u800C\u4E0D\u4F1A\u4EA7\u751F\u4E00\u81F4\u6027\u95EE\u9898\u3002</li><li>\u5728\u96C6\u7FA4\u4E2D\u5927\u591A\u6570\u670D\u52A1\u5668\u54CD\u5E94\uFF0C\u547D\u4EE4\u5C31\u53EF\u4EE5\u5B8C\u6210\uFF0C\u4E0D\u4F1A\u88AB\u5C11\u6570\u8FD0\u884C\u7F13\u6162\u7684\u670D\u52A1\u5668\u6765\u5F71\u54CD\u6574\u4F53\u7CFB\u7EDF\u6027\u80FD\u3002</li></ul><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><h3 id="\u8282\u70B9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a> \u8282\u70B9\u7C7B\u578B</h3><p>\u4E00\u4E2A Raft \u96C6\u7FA4\u5305\u62EC\u82E5\u5E72\u670D\u52A1\u5668\uFF0C\u4EE5\u5178\u578B\u7684 5 \u670D\u52A1\u5668\u96C6\u7FA4\u4E3E\u4F8B\u3002\u5728\u4EFB\u610F\u7684\u65F6\u95F4\uFF0C\u6BCF\u4E2A\u670D\u52A1\u5668\u4E00\u5B9A\u4F1A\u5904\u4E8E\u4EE5\u4E0B\u4E09\u4E2A\u72B6\u6001\u4E2D\u7684\u4E00\u4E2A\uFF1A</p><ul><li><code>Leader</code>\uFF1A\u8D1F\u8D23\u53D1\u8D77\u5FC3\u8DF3\uFF0C\u54CD\u5E94\u5BA2\u6237\u7AEF\uFF0C\u521B\u5EFA\u65E5\u5FD7\uFF0C\u540C\u6B65\u65E5\u5FD7\u3002</li><li><code>Candidate</code>\uFF1ALeader \u9009\u4E3E\u8FC7\u7A0B\u4E2D\u7684\u4E34\u65F6\u89D2\u8272\uFF0C\u7531 Follower \u8F6C\u5316\u800C\u6765\uFF0C\u53D1\u8D77\u6295\u7968\u53C2\u4E0E\u7ADE\u9009\u3002</li><li><code>Follower</code>\uFF1A\u63A5\u53D7 Leader \u7684\u5FC3\u8DF3\u548C\u65E5\u5FD7\u540C\u6B65\u6570\u636E\uFF0C\u6295\u7968\u7ED9 Candidate\u3002</li></ul><p>\u5728\u6B63\u5E38\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EA\u6709\u4E00\u4E2A\u670D\u52A1\u5668\u662F Leader\uFF0C\u5269\u4E0B\u7684\u670D\u52A1\u5668\u662F Follower\u3002Follower \u662F\u88AB\u52A8\u7684\uFF0C\u5B83\u4EEC\u4E0D\u4F1A\u53D1\u9001\u4EFB\u4F55\u8BF7\u6C42\uFF0C\u53EA\u662F\u54CD\u5E94\u6765\u81EA Leader \u548C Candidate \u7684\u8BF7\u6C42\u3002</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/paxos-server-state.png" alt="img" loading="lazy"></p><h3 id="\u4EFB\u671F" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u671F" aria-hidden="true">#</a> \u4EFB\u671F</h3><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/paxos-term.png" alt="img" loading="lazy"></p><p>\u5982\u4E0A\u56FE \u6240\u793A\uFF0Craft \u7B97\u6CD5\u5C06\u65F6\u95F4\u5212\u5206\u4E3A\u4EFB\u610F\u957F\u5EA6\u7684\u4EFB\u671F\uFF08term\uFF09\uFF0C\u4EFB\u671F\u7528\u8FDE\u7EED\u7684\u6570\u5B57\u8868\u793A\uFF0C\u770B\u4F5C\u5F53\u524D term \u53F7\u3002\u6BCF\u4E00\u4E2A\u4EFB\u671F\u7684\u5F00\u59CB\u90FD\u662F\u4E00\u6B21\u9009\u4E3E\uFF0C\u5728\u9009\u4E3E\u5F00\u59CB\u65F6\uFF0C\u4E00\u4E2A\u6216\u591A\u4E2A Candidate \u4F1A\u5C1D\u8BD5\u6210\u4E3A Leader\u3002\u5982\u679C\u4E00\u4E2A Candidate \u8D62\u5F97\u4E86\u9009\u4E3E\uFF0C\u5B83\u5C31\u4F1A\u5728\u8BE5\u4EFB\u671F\u5185\u62C5\u4EFB Leader\u3002\u5982\u679C\u6CA1\u6709\u9009\u51FA Leader\uFF0C\u5C06\u4F1A\u5F00\u542F\u53E6\u4E00\u4E2A\u4EFB\u671F\uFF0C\u5E76\u7ACB\u523B\u5F00\u59CB\u4E0B\u4E00\u6B21\u9009\u4E3E\u3002raft \u7B97\u6CD5\u4FDD\u8BC1\u5728\u7ED9\u5B9A\u7684\u4E00\u4E2A\u4EFB\u671F\u6700\u5C11\u8981\u6709\u4E00\u4E2A Leader\u3002</p><p>\u6BCF\u4E2A\u8282\u70B9\u90FD\u4F1A\u5B58\u50A8\u5F53\u524D\u7684 term \u53F7\uFF0C\u5F53\u670D\u52A1\u5668\u4E4B\u95F4\u8FDB\u884C\u901A\u4FE1\u65F6\u4F1A\u4EA4\u6362\u5F53\u524D\u7684 term \u53F7\uFF1B\u5982\u679C\u6709\u670D\u52A1\u5668\u53D1\u73B0\u81EA\u5DF1\u7684 term \u53F7\u6BD4\u5176\u4ED6\u4EBA\u5C0F\uFF0C\u90A3\u4E48\u4ED6\u4F1A\u66F4\u65B0\u5230\u8F83\u5927\u7684 term \u503C\u3002\u5982\u679C\u4E00\u4E2A Candidate \u6216\u8005 Leader \u53D1\u73B0\u81EA\u5DF1\u7684 term \u8FC7\u671F\u4E86\uFF0C\u4ED6\u4F1A\u7ACB\u5373\u9000\u56DE\u6210 Follower\u3002\u5982\u679C\u4E00\u53F0\u670D\u52A1\u5668\u6536\u5230\u7684\u8BF7\u6C42\u7684 term \u53F7\u662F\u8FC7\u671F\u7684\uFF0C\u90A3\u4E48\u5B83\u4F1A\u62D2\u7EDD\u6B64\u6B21\u8BF7\u6C42\u3002</p><h3 id="\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7" aria-hidden="true">#</a> \u65E5\u5FD7</h3><ul><li><code>entry</code>\uFF1A\u6BCF\u4E00\u4E2A\u4E8B\u4EF6\u6210\u4E3A entry\uFF0C\u53EA\u6709 Leader \u53EF\u4EE5\u521B\u5EFA entry\u3002entry \u7684\u5185\u5BB9\u4E3A<code>&lt;term,index,cmd&gt;</code>\u5176\u4E2D cmd \u662F\u53EF\u4EE5\u5E94\u7528\u5230\u72B6\u6001\u673A\u7684\u64CD\u4F5C\u3002</li><li><code>log</code>\uFF1A\u7531 entry \u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E00\u4E2A entry \u90FD\u6709\u4E00\u4E2A\u8868\u660E\u81EA\u5DF1\u5728 log \u4E2D\u7684 index\u3002\u53EA\u6709 Leader \u624D\u53EF\u4EE5\u6539\u53D8\u5176\u4ED6\u8282\u70B9\u7684 log\u3002entry \u603B\u662F\u5148\u88AB Leader \u6DFB\u52A0\u5230\u81EA\u5DF1\u7684 log \u6570\u7EC4\u4E2D\uFF0C\u7136\u540E\u518D\u53D1\u8D77\u5171\u8BC6\u8BF7\u6C42\uFF0C\u83B7\u5F97\u540C\u610F\u540E\u624D\u4F1A\u88AB Leader \u63D0\u4EA4\u7ED9\u72B6\u6001\u673A\u3002Follower \u53EA\u80FD\u4ECE Leader \u83B7\u53D6\u65B0\u65E5\u5FD7\u548C\u5F53\u524D\u7684 commitIndex\uFF0C\u7136\u540E\u628A\u5BF9\u5E94\u7684 entry \u5E94\u7528\u5230\u81EA\u5DF1\u7684\u72B6\u6001\u673A\u4E2D\u3002</li></ul><h2 id="\u9886\u5BFC\u4EBA\u9009\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u9886\u5BFC\u4EBA\u9009\u4E3E" aria-hidden="true">#</a> \u9886\u5BFC\u4EBA\u9009\u4E3E</h2><p>raft \u4F7F\u7528\u5FC3\u8DF3\u673A\u5236\u6765\u89E6\u53D1 Leader \u7684\u9009\u4E3E\u3002</p><p>\u5982\u679C\u4E00\u53F0\u670D\u52A1\u5668\u80FD\u591F\u6536\u5230\u6765\u81EA Leader \u6216\u8005 Candidate \u7684\u6709\u6548\u4FE1\u606F\uFF0C\u90A3\u4E48\u5B83\u4F1A\u4E00\u76F4\u4FDD\u6301\u4E3A Follower \u72B6\u6001\uFF0C\u5E76\u4E14\u5237\u65B0\u81EA\u5DF1\u7684 electionElapsed\uFF0C\u91CD\u65B0\u8BA1\u65F6\u3002</p><p>Leader \u4F1A\u5411\u6240\u6709\u7684 Follower \u5468\u671F\u6027\u53D1\u9001\u5FC3\u8DF3\u6765\u4FDD\u8BC1\u81EA\u5DF1\u7684 Leader \u5730\u4F4D\u3002\u5982\u679C\u4E00\u4E2A Follower \u5728\u4E00\u4E2A\u5468\u671F\u5185\u6CA1\u6709\u6536\u5230\u5FC3\u8DF3\u4FE1\u606F\uFF0C\u5C31\u53EB\u505A\u9009\u4E3E\u8D85\u65F6\uFF0C\u7136\u540E\u5B83\u5C31\u4F1A\u8BA4\u4E3A\u6B64\u65F6\u6CA1\u6709\u53EF\u7528\u7684 Leader\uFF0C\u5E76\u4E14\u5F00\u59CB\u8FDB\u884C\u4E00\u6B21\u9009\u4E3E\u4EE5\u9009\u51FA\u4E00\u4E2A\u65B0\u7684 Leader\u3002</p><p>\u4E3A\u4E86\u5F00\u59CB\u65B0\u7684\u9009\u4E3E\uFF0CFollower \u4F1A\u81EA\u589E\u81EA\u5DF1\u7684 term \u53F7\u5E76\u4E14\u8F6C\u6362\u72B6\u6001\u4E3A Candidate\u3002\u7136\u540E\u4ED6\u4F1A\u5411\u6240\u6709\u8282\u70B9\u53D1\u8D77 RequestVoteRPC \u8BF7\u6C42\uFF0C Candidate \u7684\u72B6\u6001\u4F1A\u6301\u7EED\u5230\u4EE5\u4E0B\u60C5\u51B5\u53D1\u751F\uFF1A</p><ul><li>\u8D62\u5F97\u9009\u4E3E</li><li>\u5176\u4ED6\u8282\u70B9\u8D62\u5F97\u9009\u4E3E</li><li>\u4E00\u8F6E\u9009\u4E3E\u7ED3\u675F\uFF0C\u65E0\u4EBA\u80DC\u51FA</li></ul><p>\u8D62\u5F97\u9009\u4E3E\u7684\u6761\u4EF6\u662F\uFF1A\u4E00\u4E2A Candidate \u5728\u4E00\u4E2A\u4EFB\u671F\u5185\u6536\u5230\u4E86\u6765\u81EA\u96C6\u7FA4\u5185\u7684\u591A\u6570\u9009\u7968<code>\uFF08N/2+1\uFF09</code>\uFF0C\u5C31\u53EF\u4EE5\u6210\u4E3A Leader\u3002</p><p>\u5728 Candidate \u7B49\u5F85\u9009\u7968\u7684\u65F6\u5019\uFF0C\u5B83\u53EF\u80FD\u6536\u5230\u5176\u4ED6\u8282\u70B9\u58F0\u660E\u81EA\u5DF1\u662F Leader \u7684\u5FC3\u8DF3\uFF0C\u6B64\u65F6\u6709\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u8BE5 Leader \u7684 term \u53F7\u5927\u4E8E\u7B49\u4E8E\u81EA\u5DF1\u7684 term \u53F7\uFF0C\u8BF4\u660E\u5BF9\u65B9\u5DF2\u7ECF\u6210\u4E3A Leader\uFF0C\u5219\u81EA\u5DF1\u56DE\u9000\u4E3A Follower\u3002</li><li>\u8BE5 Leader \u7684 term \u53F7\u5C0F\u4E8E\u81EA\u5DF1\u7684 term \u53F7\uFF0C\u90A3\u4E48\u4F1A\u62D2\u7EDD\u8BE5\u8BF7\u6C42\u5E76\u8BA9\u8BE5\u8282\u70B9\u66F4\u65B0 term\u3002</li></ul><p>\u7531\u4E8E\u53EF\u80FD\u540C\u4E00\u65F6\u523B\u51FA\u73B0\u591A\u4E2A Candidate\uFF0C\u5BFC\u81F4\u6CA1\u6709 Candidate \u83B7\u5F97\u5927\u591A\u6570\u9009\u7968\uFF0C\u5982\u679C\u6CA1\u6709\u5176\u4ED6\u624B\u6BB5\u6765\u91CD\u65B0\u5206\u914D\u9009\u7968\u7684\u8BDD\uFF0C\u90A3\u4E48\u53EF\u80FD\u4F1A\u65E0\u9650\u91CD\u590D\u4E0B\u53BB\u3002</p><p>raft \u4F7F\u7528\u4E86\u968F\u673A\u7684\u9009\u4E3E\u8D85\u65F6\u65F6\u95F4\u6765\u907F\u514D\u4E0A\u8FF0\u60C5\u51B5\u3002\u6BCF\u4E00\u4E2A Candidate \u5728\u53D1\u8D77\u9009\u4E3E\u540E\uFF0C\u90FD\u4F1A\u968F\u673A\u5316\u4E00\u4E2A\u65B0\u7684\u679A\u4E3E\u8D85\u65F6\u65F6\u95F4\uFF0C\u8FD9\u79CD\u673A\u5236\u4F7F\u5F97\u5404\u4E2A\u670D\u52A1\u5668\u80FD\u591F\u5206\u6563\u5F00\u6765\uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u53EA\u6709\u4E00\u4E2A\u670D\u52A1\u5668\u4F1A\u7387\u5148\u8D85\u65F6\uFF1B\u5B83\u4F1A\u5728\u5176\u4ED6\u670D\u52A1\u5668\u8D85\u65F6\u4E4B\u524D\u8D62\u5F97\u9009\u4E3E\u3002</p><h2 id="\u65E5\u5FD7\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u590D\u5236" aria-hidden="true">#</a> \u65E5\u5FD7\u590D\u5236</h2><p>\u4E00\u65E6\u9009\u51FA\u4E86 Leader\uFF0C\u5B83\u5C31\u5F00\u59CB\u63A5\u53D7\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u3002\u6BCF\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u90FD\u5305\u542B\u4E00\u6761\u9700\u8981\u88AB\u590D\u5236\u72B6\u6001\u673A\uFF08<code>Replicated State Mechine</code>\uFF09\u6267\u884C\u7684\u547D\u4EE4\u3002</p><p>Leader \u6536\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42\u540E\uFF0C\u4F1A\u751F\u6210\u4E00\u4E2A entry\uFF0C\u5305\u542B<code>&lt;index,term,cmd&gt;</code>\uFF0C\u518D\u5C06\u8FD9\u4E2A entry \u6DFB\u52A0\u5230\u81EA\u5DF1\u7684\u65E5\u5FD7\u672B\u5C3E\u540E\uFF0C\u5411\u6240\u6709\u7684\u8282\u70B9\u5E7F\u64AD\u8BE5 entry\uFF0C\u8981\u6C42\u5176\u4ED6\u670D\u52A1\u5668\u590D\u5236\u8FD9\u6761 entry\u3002</p><p>\u5982\u679C Follower \u63A5\u53D7\u8BE5 entry\uFF0C\u5219\u4F1A\u5C06 entry \u6DFB\u52A0\u5230\u81EA\u5DF1\u7684\u65E5\u5FD7\u540E\u9762\uFF0C\u540C\u65F6\u8FD4\u56DE\u7ED9 Leader \u540C\u610F\u3002</p><p>\u5982\u679C Leader \u6536\u5230\u4E86\u591A\u6570\u7684\u6210\u529F\u54CD\u5E94\uFF0CLeader \u4F1A\u5C06\u8FD9\u4E2A entry \u5E94\u7528\u5230\u81EA\u5DF1\u7684\u72B6\u6001\u673A\u4E2D\uFF0C\u4E4B\u540E\u53EF\u4EE5\u6210\u4E3A\u8FD9\u4E2A entry \u662F committed \u7684\uFF0C\u5E76\u4E14\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE\u6267\u884C\u7ED3\u679C\u3002</p><p>raft \u4FDD\u8BC1\u4EE5\u4E0B\u4E24\u4E2A\u6027\u8D28\uFF1A</p><ul><li>\u5728\u4E24\u4E2A\u65E5\u5FD7\u91CC\uFF0C\u6709\u4E24\u4E2A entry \u62E5\u6709\u76F8\u540C\u7684 index \u548C term\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4E00\u5B9A\u6709\u76F8\u540C\u7684 cmd</li><li>\u5728\u4E24\u4E2A\u65E5\u5FD7\u91CC\uFF0C\u6709\u4E24\u4E2A entry \u62E5\u6709\u76F8\u540C\u7684 index \u548C term\uFF0C\u90A3\u4E48\u5B83\u4EEC\u524D\u9762\u7684 entry \u4E5F\u4E00\u5B9A\u76F8\u540C</li></ul><p>\u901A\u8FC7\u201C\u4EC5\u6709 Leader \u53EF\u4EE5\u751F\u5B58 entry\u201D\u6765\u4FDD\u8BC1\u7B2C\u4E00\u4E2A\u6027\u8D28\uFF0C\u7B2C\u4E8C\u4E2A\u6027\u8D28\u9700\u8981\u4E00\u81F4\u6027\u68C0\u67E5\u6765\u8FDB\u884C\u4FDD\u8BC1\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0CLeader \u548C Follower \u7684\u65E5\u5FD7\u4FDD\u6301\u4E00\u81F4\uFF0C\u7136\u540E\uFF0CLeader \u7684\u5D29\u6E83\u4F1A\u5BFC\u81F4\u65E5\u5FD7\u4E0D\u4E00\u6837\uFF0C\u8FD9\u6837\u4E00\u81F4\u6027\u68C0\u67E5\u4F1A\u4EA7\u751F\u5931\u8D25\u3002Leader \u901A\u8FC7\u5F3A\u5236 Follower \u590D\u5236\u81EA\u5DF1\u7684\u65E5\u5FD7\u6765\u5904\u7406\u65E5\u5FD7\u7684\u4E0D\u4E00\u81F4\u3002\u8FD9\u5C31\u610F\u5473\u7740\uFF0C\u5728 Follower \u4E0A\u7684\u51B2\u7A81\u65E5\u5FD7\u4F1A\u88AB\u9886\u5BFC\u8005\u7684\u65E5\u5FD7\u8986\u76D6\u3002</p><p>\u4E3A\u4E86\u4F7F\u5F97 Follower \u7684\u65E5\u5FD7\u548C\u81EA\u5DF1\u7684\u65E5\u5FD7\u4E00\u81F4\uFF0CLeader \u9700\u8981\u627E\u5230 Follower \u4E0E\u5B83\u65E5\u5FD7\u4E00\u81F4\u7684\u5730\u65B9\uFF0C\u7136\u540E\u5220\u9664 Follower \u5728\u8BE5\u4F4D\u7F6E\u4E4B\u540E\u7684\u65E5\u5FD7\uFF0C\u63A5\u7740\u628A\u8FD9\u4E4B\u540E\u7684\u65E5\u5FD7\u53D1\u9001\u7ED9 Follower\u3002</p><p><code>Leader</code> \u7ED9\u6BCF\u4E00\u4E2A<code>Follower</code> \u7EF4\u62A4\u4E86\u4E00\u4E2A <code>nextIndex</code>\uFF0C\u5B83\u8868\u793A <code>Leader</code> \u5C06\u8981\u53D1\u9001\u7ED9\u8BE5\u8FFD\u968F\u8005\u7684\u4E0B\u4E00\u6761\u65E5\u5FD7\u6761\u76EE\u7684\u7D22\u5F15\u3002\u5F53\u4E00\u4E2A <code>Leader</code> \u5F00\u59CB\u638C\u6743\u65F6\uFF0C\u5B83\u4F1A\u5C06 <code>nextIndex</code> \u521D\u59CB\u5316\u4E3A\u5B83\u7684\u6700\u65B0\u7684\u65E5\u5FD7\u6761\u76EE\u7D22\u5F15\u6570+1\u3002\u5982\u679C\u4E00\u4E2A <code>Follower</code> \u7684\u65E5\u5FD7\u548C <code>Leader</code> \u7684\u4E0D\u4E00\u81F4\uFF0C<code>AppendEntries</code> \u4E00\u81F4\u6027\u68C0\u67E5\u4F1A\u5728\u4E0B\u4E00\u6B21 <code>AppendEntries RPC</code> \u65F6\u8FD4\u56DE\u5931\u8D25\u3002\u5728\u5931\u8D25\u4E4B\u540E\uFF0C<code>Leader</code> \u4F1A\u5C06 <code>nextIndex</code> \u9012\u51CF\u7136\u540E\u91CD\u8BD5 <code>AppendEntries RPC</code>\u3002\u6700\u7EC8 <code>nextIndex</code> \u4F1A\u8FBE\u5230\u4E00\u4E2A <code>Leader</code> \u548C <code>Follower</code> \u65E5\u5FD7\u4E00\u81F4\u7684\u5730\u65B9\u3002\u8FD9\u65F6\uFF0C<code>AppendEntries</code> \u4F1A\u8FD4\u56DE\u6210\u529F\uFF0C<code>Follower</code> \u4E2D\u51B2\u7A81\u7684\u65E5\u5FD7\u6761\u76EE\u90FD\u88AB\u79FB\u9664\u4E86\uFF0C\u5E76\u4E14\u6DFB\u52A0\u6240\u7F3A\u5C11\u7684\u4E0A\u4E86 <code>Leader</code> \u7684\u65E5\u5FD7\u6761\u76EE\u3002\u4E00\u65E6 <code>AppendEntries</code> \u8FD4\u56DE\u6210\u529F\uFF0C<code>Follower</code> \u548C <code>Leader</code> \u7684\u65E5\u5FD7\u5C31\u4E00\u81F4\u4E86\uFF0C\u8FD9\u6837\u7684\u72B6\u6001\u4F1A\u4FDD\u6301\u5230\u8BE5\u4EFB\u671F\u7ED3\u675F\u3002</p><h2 id="\u5B89\u5168\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u6027" aria-hidden="true">#</a> \u5B89\u5168\u6027</h2><h3 id="\u9009\u4E3E\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u9009\u4E3E\u9650\u5236" aria-hidden="true">#</a> \u9009\u4E3E\u9650\u5236</h3><p>Leader \u9700\u8981\u4FDD\u8BC1\u81EA\u5DF1\u5B58\u50A8\u5168\u90E8\u5DF2\u7ECF\u63D0\u4EA4\u7684\u65E5\u5FD7\u6761\u76EE\u3002\u8FD9\u6837\u624D\u53EF\u4EE5\u4F7F\u65E5\u5FD7\u6761\u76EE\u53EA\u6709\u4E00\u4E2A\u6D41\u5411\uFF1A\u4ECE Leader \u6D41\u5411 Follower\uFF0CLeader \u6C38\u8FDC\u4E0D\u4F1A\u8986\u76D6\u5DF2\u7ECF\u5B58\u5728\u7684\u65E5\u5FD7\u6761\u76EE\u3002</p><p>\u6BCF\u4E2A Candidate \u53D1\u9001 RequestVoteRPC \u65F6\uFF0C\u90FD\u4F1A\u5E26\u4E0A\u6700\u540E\u4E00\u4E2A entry \u7684\u4FE1\u606F\u3002\u6240\u6709\u8282\u70B9\u6536\u5230\u6295\u7968\u4FE1\u606F\u65F6\uFF0C\u4F1A\u5BF9\u8BE5 entry \u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u53D1\u73B0\u81EA\u5DF1\u7684\u66F4\u65B0\uFF0C\u5219\u62D2\u7EDD\u6295\u7968\u7ED9\u8BE5 Candidate\u3002</p><p>\u5224\u65AD\u65E5\u5FD7\u65B0\u65E7\u7684\u65B9\u5F0F\uFF1A\u5982\u679C\u4E24\u4E2A\u65E5\u5FD7\u7684 term \u4E0D\u540C\uFF0Cterm \u5927\u7684\u66F4\u65B0\uFF1B\u5982\u679C term \u76F8\u540C\uFF0C\u66F4\u957F\u7684 index \u66F4\u65B0\u3002</p><h3 id="\u8282\u70B9\u5D29\u6E83" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u5D29\u6E83" aria-hidden="true">#</a> \u8282\u70B9\u5D29\u6E83</h3><p>\u5982\u679C Leader \u5D29\u6E83\uFF0C\u96C6\u7FA4\u4E2D\u7684\u8282\u70B9\u5728 electionTimeout \u65F6\u95F4\u5185\u6CA1\u6709\u6536\u5230 Leader \u7684\u5FC3\u8DF3\u4FE1\u606F\u5C31\u4F1A\u89E6\u53D1\u65B0\u4E00\u8F6E\u7684\u9009\u4E3B\uFF0C\u5728\u9009\u4E3B\u671F\u95F4\u6574\u4E2A\u96C6\u7FA4\u5BF9\u5916\u662F\u4E0D\u53EF\u7528\u7684\u3002</p><p>\u5982\u679C Follower \u548C Candidate \u5D29\u6E83\uFF0C\u5904\u7406\u65B9\u5F0F\u4F1A\u7B80\u5355\u5F88\u591A\u3002\u4E4B\u540E\u53D1\u9001\u7ED9\u5B83\u7684 RequestVoteRPC \u548C AppendEntriesRPC \u4F1A\u5931\u8D25\u3002\u7531\u4E8E raft \u7684\u6240\u6709\u8BF7\u6C42\u90FD\u662F\u5E42\u7B49\u7684\uFF0C\u6240\u4EE5\u5931\u8D25\u7684\u8BDD\u4F1A\u65E0\u9650\u7684\u91CD\u8BD5\u3002\u5982\u679C\u5D29\u6E83\u6062\u590D\u540E\uFF0C\u5C31\u53EF\u4EE5\u6536\u5230\u65B0\u7684\u8BF7\u6C42\uFF0C\u7136\u540E\u9009\u62E9\u8FFD\u52A0\u6216\u8005\u62D2\u7EDD entry\u3002</p><h3 id="\u65F6\u95F4\u4E0E\u53EF\u7528\u6027" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u4E0E\u53EF\u7528\u6027" aria-hidden="true">#</a> \u65F6\u95F4\u4E0E\u53EF\u7528\u6027</h3><p>raft \u7684\u8981\u6C42\u4E4B\u4E00\u5C31\u662F\u5B89\u5168\u6027\u4E0D\u4F9D\u8D56\u4E8E\u65F6\u95F4\uFF1A\u7CFB\u7EDF\u4E0D\u80FD\u4EC5\u4EC5\u56E0\u4E3A\u4E00\u4E9B\u4E8B\u4EF6\u53D1\u751F\u7684\u6BD4\u9884\u60F3\u7684\u5FEB\u4E00\u4E9B\u6216\u8005\u6162\u4E00\u4E9B\u5C31\u4EA7\u751F\u9519\u8BEF\u3002\u4E3A\u4E86\u4FDD\u8BC1\u4E0A\u8FF0\u8981\u6C42\uFF0C\u6700\u597D\u80FD\u6EE1\u8DB3\u4EE5\u4E0B\u7684\u65F6\u95F4\u6761\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>broadcastTime &lt;&lt; electionTimeout &lt;&lt; MTBF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>broadcastTime</code>\uFF1A\u5411\u5176\u4ED6\u8282\u70B9\u5E76\u53D1\u53D1\u9001\u6D88\u606F\u7684\u5E73\u5747\u54CD\u5E94\u65F6\u95F4\uFF1B</li><li><code>electionTimeout</code>\uFF1A\u9009\u4E3E\u8D85\u65F6\u65F6\u95F4\uFF1B</li><li><code>MTBF(mean time between failures)</code>\uFF1A\u5355\u53F0\u673A\u5668\u7684\u5E73\u5747\u5065\u5EB7\u65F6\u95F4\uFF1B</li></ul><p><code>broadcastTime</code>\u5E94\u8BE5\u6BD4<code>electionTimeout</code>\u5C0F\u4E00\u4E2A\u6570\u91CF\u7EA7\uFF0C\u4E3A\u7684\u662F\u4F7F<code>Leader</code>\u80FD\u591F\u6301\u7EED\u53D1\u9001\u5FC3\u8DF3\u4FE1\u606F\uFF08heartbeat\uFF09\u6765\u963B\u6B62<code>Follower</code>\u5F00\u59CB\u9009\u4E3E\uFF1B</p><p><code>electionTimeout</code>\u4E5F\u8981\u6BD4<code>MTBF</code>\u5C0F\u51E0\u4E2A\u6570\u91CF\u7EA7\uFF0C\u4E3A\u7684\u662F\u4F7F\u5F97\u7CFB\u7EDF\u7A33\u5B9A\u8FD0\u884C\u3002\u5F53<code>Leader</code>\u5D29\u6E83\u65F6\uFF0C\u5927\u7EA6\u4F1A\u5728\u6574\u4E2A<code>electionTimeout</code>\u7684\u65F6\u95F4\u5185\u4E0D\u53EF\u7528\uFF1B\u6211\u4EEC\u5E0C\u671B\u8FD9\u79CD\u60C5\u51B5\u4EC5\u5360\u5168\u90E8\u65F6\u95F4\u7684\u5F88\u5C0F\u4E00\u90E8\u5206\u3002</p><p>\u7531\u4E8E<code>broadcastTime</code>\u548C<code>MTBF</code>\u662F\u7531\u7CFB\u7EDF\u51B3\u5B9A\u7684\u5C5E\u6027\uFF0C\u56E0\u6B64\u9700\u8981\u51B3\u5B9A<code>electionTimeout</code>\u7684\u65F6\u95F4\u3002</p><p>\u4E00\u822C\u6765\u8BF4\uFF0CbroadcastTime \u4E00\u822C\u4E3A <code>0.5\uFF5E20ms</code>\uFF0CelectionTimeout \u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>10\uFF5E500ms</code>\uFF0CMTBF \u4E00\u822C\u4E3A\u4E00\u4E24\u4E2A\u6708\u3002</p>`,66);function o(t,i){return r}var n=e(a,[["render",o],["__file","Raft.html.vue"]]);export{n as default};
