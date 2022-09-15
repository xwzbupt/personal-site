import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,f as n}from"./app.e73d8887.js";const o={},r=n('<h1 id="\u884C\u9501" tabindex="-1"><a class="header-anchor" href="#\u884C\u9501" aria-hidden="true">#</a> \u884C\u9501</h1><p>\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u8DDF\u4F60\u4ECB\u7ECD\u4E86 MySQL \u7684\u5168\u5C40\u9501\u548C\u8868\u7EA7\u9501\uFF0C\u4ECA\u5929\u6211\u4EEC\u5C31\u6765\u8BB2\u8BB2 MySQL \u7684\u884C\u9501\u3002</p><p>MySQL \u7684\u884C\u9501\u662F\u5728\u5F15\u64CE\u5C42\u7531\u5404\u4E2A\u5F15\u64CE\u81EA\u5DF1\u5B9E\u73B0\u7684\u3002\u4F46\u5E76\u4E0D\u662F\u6240\u6709\u7684\u5F15\u64CE\u90FD\u652F\u6301\u884C\u9501\uFF0C\u6BD4\u5982 MyISAM \u5F15\u64CE\u5C31\u4E0D\u652F\u6301\u884C\u9501\u3002\u4E0D\u652F\u6301\u884C\u9501\u610F\u5473\u7740\u5E76\u53D1\u63A7\u5236\u53EA\u80FD\u4F7F\u7528\u8868\u9501\uFF0C\u5BF9\u4E8E\u8FD9\u79CD\u5F15\u64CE\u7684\u8868\uFF0C\u540C\u4E00\u5F20\u8868\u4E0A\u4EFB\u4F55\u65F6\u523B\u53EA\u80FD\u6709\u4E00\u4E2A\u66F4\u65B0\u5728\u6267\u884C\uFF0C\u8FD9\u5C31\u4F1A\u5F71\u54CD\u5230\u4E1A\u52A1\u5E76\u53D1\u5EA6\u3002InnoDB \u662F\u652F\u6301\u884C\u9501\u7684\uFF0C\u8FD9\u4E5F\u662F MyISAM \u88AB InnoDB \u66FF\u4EE3\u7684\u91CD\u8981\u539F\u56E0\u4E4B\u4E00\u3002</p><p>\u6211\u4EEC\u4ECA\u5929\u5C31\u4E3B\u8981\u6765\u804A\u804A InnoDB \u7684\u884C\u9501\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7\u51CF\u5C11\u9501\u51B2\u7A81\u6765\u63D0\u5347\u4E1A\u52A1\u5E76\u53D1\u5EA6\u3002</p><p>\u987E\u540D\u601D\u4E49\uFF0C\u884C\u9501\u5C31\u662F\u9488\u5BF9\u6570\u636E\u8868\u4E2D\u884C\u8BB0\u5F55\u7684\u9501\u3002\u8FD9\u5F88\u597D\u7406\u89E3\uFF0C\u6BD4\u5982\u4E8B\u52A1 A \u66F4\u65B0\u4E86\u4E00\u884C\uFF0C\u800C\u8FD9\u65F6\u5019\u4E8B\u52A1 B \u4E5F\u8981\u66F4\u65B0\u540C\u4E00\u884C\uFF0C\u5219\u5FC5\u987B\u7B49\u4E8B\u52A1 A \u7684\u64CD\u4F5C\u5B8C\u6210\u540E\u624D\u80FD\u8FDB\u884C\u66F4\u65B0\u3002</p><p>\u5F53\u7136\uFF0C\u6570\u636E\u5E93\u4E2D\u8FD8\u6709\u4E00\u4E9B\u6CA1\u90A3\u4E48\u4E00\u76EE\u4E86\u7136\u7684\u6982\u5FF5\u548C\u8BBE\u8BA1\uFF0C\u8FD9\u4E9B\u6982\u5FF5\u5982\u679C\u7406\u89E3\u548C\u4F7F\u7528\u4E0D\u5F53\uFF0C\u5BB9\u6613\u5BFC\u81F4\u7A0B\u5E8F\u51FA\u73B0\u975E\u9884\u671F\u884C\u4E3A\uFF0C\u6BD4\u5982\u4E24\u9636\u6BB5\u9501\u3002</p><h2 id="\u4ECE\u4E24\u9636\u6BB5\u9501\u8BF4\u8D77" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u4E24\u9636\u6BB5\u9501\u8BF4\u8D77" aria-hidden="true">#</a> \u4ECE\u4E24\u9636\u6BB5\u9501\u8BF4\u8D77</h2><p>\u6211\u5148\u7ED9\u4F60\u4E3E\u4E2A\u4F8B\u5B50\u3002\u5728\u4E0B\u9762\u7684\u64CD\u4F5C\u5E8F\u5217\u4E2D\uFF0C\u4E8B\u52A1 B \u7684 update \u8BED\u53E5\u6267\u884C\u65F6\u4F1A\u662F\u4EC0\u4E48\u73B0\u8C61\u5462\uFF1F\u5047\u8BBE\u5B57\u6BB5 id \u662F\u8868 t \u7684\u4E3B\u952E\u3002</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/\u4E8B\u52A1AB\u4E24\u9636\u6BB5\u9501.jpg" alt=""></p><p><strong>\u8FD9\u4E2A\u95EE\u9898\u7684\u7ED3\u8BBA\u53D6\u51B3\u4E8E\u4E8B\u52A1 A \u5728\u6267\u884C\u5B8C\u4E24\u6761 update \u8BED\u53E5\u540E\uFF0C\u6301\u6709\u54EA\u4E9B\u9501\uFF0C\u4EE5\u53CA\u5728\u4EC0\u4E48\u65F6\u5019\u91CA\u653E\u3002</strong> \u4F60\u53EF\u4EE5\u9A8C\u8BC1\u4E00\u4E0B\uFF1A<strong>\u5B9E\u9645\u4E0A\u4E8B\u52A1 B \u7684 update \u8BED\u53E5\u4F1A\u88AB\u963B\u585E\uFF0C\u76F4\u5230\u4E8B\u52A1 A \u6267\u884C commit \u4E4B\u540E\uFF0C\u4E8B\u52A1 B \u624D\u80FD\u7EE7\u7EED\u6267\u884C\u3002</strong></p><p>\u77E5\u9053\u4E86\u8FD9\u4E2A\u7B54\u6848\uFF0C\u4F60\u4E00\u5B9A\u77E5\u9053\u4E86\u4E8B\u52A1 A \u6301\u6709\u7684\u4E24\u4E2A\u8BB0\u5F55\u7684\u884C\u9501\uFF0C\u90FD\u662F\u5728 commit \u7684\u65F6\u5019\u624D\u91CA\u653E\u7684\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u5728 InnoDB \u4E8B\u52A1\u4E2D\uFF0C\u884C\u9501\u662F\u5728\u9700\u8981\u7684\u65F6\u5019\u624D\u52A0\u4E0A\u7684\uFF0C\u4F46\u5E76\u4E0D\u662F\u4E0D\u9700\u8981\u4E86\u5C31\u7ACB\u523B\u91CA\u653E\uFF0C\u800C\u662F\u8981\u7B49\u5230\u4E8B\u52A1\u7ED3\u675F\u65F6\u624D\u91CA\u653E\u3002\u8FD9\u4E2A\u5C31\u662F\u4E24\u9636\u6BB5\u9501\u534F\u8BAE\u3002</strong></p><p>\u77E5\u9053\u4E86\u8FD9\u4E2A\u8BBE\u5B9A\uFF0C\u5BF9\u6211\u4EEC\u4F7F\u7528\u4E8B\u52A1\u6709\u4EC0\u4E48\u5E2E\u52A9\u5462\uFF1F\u90A3\u5C31\u662F\uFF0C\u5982**\u679C\u4F60\u7684\u4E8B\u52A1\u4E2D\u9700\u8981\u9501\u591A\u4E2A\u884C\uFF0C\u8981\u628A\u6700\u53EF\u80FD\u9020\u6210\u9501\u51B2\u7A81\u3001\u6700\u53EF\u80FD\u5F71\u54CD\u5E76\u53D1\u5EA6\u7684\u9501\u5C3D\u91CF\u5F80\u540E\u653E\u3002**\u6211\u7ED9\u4F60\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><p>\u5047\u8BBE\u4F60\u8D1F\u8D23\u5B9E\u73B0\u4E00\u4E2A\u7535\u5F71\u7968\u5728\u7EBF\u4EA4\u6613\u4E1A\u52A1\uFF0C\u987E\u5BA2 A \u8981\u5728\u5F71\u9662 B \u8D2D\u4E70\u7535\u5F71\u7968\u3002\u6211\u4EEC\u7B80\u5316\u4E00\u70B9\uFF0C\u8FD9\u4E2A\u4E1A\u52A1\u9700\u8981\u6D89\u53CA\u5230\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><ul><li><p>\u4ECE\u987E\u5BA2 A \u8D26\u6237\u4F59\u989D\u4E2D\u6263\u9664\u7535\u5F71\u7968\u4EF7\uFF1B</p></li><li><p>\u7ED9\u5F71\u9662 B \u7684\u8D26\u6237\u4F59\u989D\u589E\u52A0\u8FD9\u5F20\u7535\u5F71\u7968\u4EF7\uFF1B</p></li><li><p>\u8BB0\u5F55\u4E00\u6761\u4EA4\u6613\u65E5\u5FD7\u3002</p></li></ul><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8981\u5B8C\u6210\u8FD9\u4E2A\u4EA4\u6613\uFF0C\u6211\u4EEC\u9700\u8981 update \u4E24\u6761\u8BB0\u5F55\uFF0C\u5E76 insert \u4E00\u6761\u8BB0\u5F55\u3002\u5F53\u7136\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u4EA4\u6613\u7684<strong>\u539F\u5B50\u6027</strong>\uFF0C\u6211\u4EEC\u8981\u628A\u8FD9\u4E09\u4E2A\u64CD\u4F5C\u653E\u5728\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u3002\u90A3\u4E48\uFF0C\u4F60\u4F1A\u600E\u6837\u5B89\u6392\u8FD9\u4E09\u4E2A\u8BED\u53E5\u5728\u4E8B\u52A1\u4E2D\u7684\u987A\u5E8F\u5462\uFF1F</p><p>\u8BD5\u60F3\u5982\u679C\u540C\u65F6\u6709\u53E6\u5916\u4E00\u4E2A\u987E\u5BA2 C \u8981\u5728\u5F71\u9662 B \u4E70\u7968\uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u4E8B\u52A1\u51B2\u7A81\u7684\u90E8\u5206\u5C31\u662F<strong>\u8BED\u53E5 2</strong> \u4E86\u3002\u56E0\u4E3A\u5B83\u4EEC\u8981\u66F4\u65B0\u540C\u4E00\u4E2A\u5F71\u9662\u8D26\u6237\u7684\u4F59\u989D\uFF0C\u9700\u8981\u4FEE\u6539\u540C\u4E00\u884C\u6570\u636E\u3002</p><p>\u6839\u636E\u4E24\u9636\u6BB5\u9501\u534F\u8BAE\uFF0C\u4E0D\u8BBA\u4F60\u600E\u6837\u5B89\u6392\u8BED\u53E5\u987A\u5E8F\uFF0C<strong>\u6240\u6709\u7684\u64CD\u4F5C\u9700\u8981\u7684\u884C\u9501\u90FD\u662F\u5728\u4E8B\u52A1\u63D0\u4EA4\u7684\u65F6\u5019\u624D\u91CA\u653E\u7684\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u4F60\u628A\u8BED\u53E5 2 \u5B89\u6392\u5728\u6700\u540E\uFF0C\u6BD4\u5982\u6309\u7167 3\u30011\u30012 \u8FD9\u6837\u7684\u987A\u5E8F\uFF0C\u90A3\u4E48\u5F71\u9662\u8D26\u6237\u4F59\u989D\u8FD9\u4E00\u884C\u7684\u9501\u65F6\u95F4\u5C31\u6700\u5C11\u3002</strong> \u8FD9\u5C31\u6700\u5927\u7A0B\u5EA6\u5730\u51CF\u5C11\u4E86\u4E8B\u52A1\u4E4B\u95F4\u7684\u9501\u7B49\u5F85\uFF0C\u63D0\u5347\u4E86\u5E76\u53D1\u5EA6\u3002</p><p>\u597D\u4E86\uFF0C\u73B0\u5728\u7531\u4E8E\u4F60\u7684\u6B63\u786E\u8BBE\u8BA1\uFF0C\u5F71\u9662\u4F59\u989D\u8FD9\u4E00\u884C\u7684\u884C\u9501\u5728\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u4E0D\u4F1A\u505C\u7559\u5F88\u957F\u65F6\u95F4\u3002\u4F46\u662F\uFF0C\u8FD9\u5E76\u6CA1\u6709\u5B8C\u5168\u89E3\u51B3\u4F60\u7684\u56F0\u6270\u3002</p><p>\u5982\u679C\u8FD9\u4E2A\u5F71\u9662\u505A\u6D3B\u52A8\uFF0C\u53EF\u4EE5\u4F4E\u4EF7\u9884\u552E\u4E00\u5E74\u5185\u6240\u6709\u7684\u7535\u5F71\u7968\uFF0C\u800C\u4E14\u8FD9\u4E2A\u6D3B\u52A8\u53EA\u505A\u4E00\u5929\u3002\u4E8E\u662F\u5728\u6D3B\u52A8\u65F6\u95F4\u5F00\u59CB\u7684\u65F6\u5019\uFF0C\u4F60\u7684 MySQL \u5C31\u6302\u4E86\u3002\u4F60\u767B\u4E0A\u670D\u52A1\u5668\u4E00\u770B\uFF0CCPU \u6D88\u8017\u63A5\u8FD1 100%\uFF0C\u4F46\u6574\u4E2A\u6570\u636E\u5E93\u6BCF\u79D2\u5C31\u6267\u884C\u4E0D\u5230 100 \u4E2A\u4E8B\u52A1\u3002\u8FD9\u662F\u4EC0\u4E48\u539F\u56E0\u5462\uFF1F</p><p>\u8FD9\u91CC\uFF0C\u6211\u5C31\u8981\u8BF4\u5230\u6B7B\u9501\u548C\u6B7B\u9501\u68C0\u6D4B\u4E86\u3002</p><h2 id="\u6B7B\u9501\u548C\u6B7B\u9501\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u6B7B\u9501\u548C\u6B7B\u9501\u68C0\u6D4B" aria-hidden="true">#</a> \u6B7B\u9501\u548C\u6B7B\u9501\u68C0\u6D4B</h2><p>\u5F53\u5E76\u53D1\u7CFB\u7EDF\u4E2D\u4E0D\u540C\u7EBF\u7A0B\u51FA\u73B0\u5FAA\u73AF\u8D44\u6E90\u4F9D\u8D56\uFF0C\u6D89\u53CA\u7684\u7EBF\u7A0B\u90FD\u5728\u7B49\u5F85\u522B\u7684\u7EBF\u7A0B\u91CA\u653E\u8D44\u6E90\u65F6\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u8FD9\u51E0\u4E2A\u7EBF\u7A0B\u90FD\u8FDB\u5165\u65E0\u9650\u7B49\u5F85\u7684\u72B6\u6001\uFF0C\u79F0\u4E3A\u6B7B\u9501\u3002\u8FD9\u91CC\u6211\u7528\u6570\u636E\u5E93\u4E2D\u7684\u884C\u9501\u4E3E\u4E2A\u4F8B\u5B50\u3002</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/\u4E8B\u52A1AB\u6B7B\u9501\u68C0\u6D4B.jpg" alt=""></p><p>\u8FD9\u65F6\u5019\uFF0C\u4E8B\u52A1 A \u5728\u7B49\u5F85\u4E8B\u52A1 B \u91CA\u653E id=2 \u7684\u884C\u9501\uFF0C\u800C\u4E8B\u52A1 B \u5728\u7B49\u5F85\u4E8B\u52A1 A \u91CA\u653E id=1 \u7684\u884C\u9501\u3002 \u4E8B\u52A1 A \u548C\u4E8B\u52A1 B \u5728\u4E92\u76F8\u7B49\u5F85\u5BF9\u65B9\u7684\u8D44\u6E90\u91CA\u653E\uFF0C\u5C31\u662F\u8FDB\u5165\u4E86\u6B7B\u9501\u72B6\u6001\u3002\u5F53\u51FA\u73B0\u6B7B\u9501\u4EE5\u540E\uFF0C\u6709\u4E24\u79CD\u7B56\u7565\uFF1A</p><p><strong>\u4E00\u79CD\u7B56\u7565\u662F</strong>\uFF0C\u76F4\u63A5\u8FDB\u5165\u7B49\u5F85\uFF0C\u76F4\u5230\u8D85\u65F6\u3002\u8FD9\u4E2A\u8D85\u65F6\u65F6\u95F4\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570 innodb_lock_wait_timeout \u6765\u8BBE\u7F6E\u3002<strong>\u53E6\u4E00\u79CD\u7B56\u7565\u662F</strong>\uFF0C\u53D1\u8D77\u6B7B\u9501\u68C0\u6D4B\uFF0C\u53D1\u73B0\u6B7B\u9501\u540E\uFF0C\u4E3B\u52A8\u56DE\u6EDA\u6B7B\u9501\u94FE\u6761\u4E2D\u7684\u67D0\u4E00\u4E2A\u4E8B\u52A1\uFF0C\u8BA9\u5176\u4ED6\u4E8B\u52A1\u5F97\u4EE5\u7EE7\u7EED\u6267\u884C\u3002\u5C06\u53C2\u6570 innodb_deadlock_detect \u8BBE\u7F6E\u4E3A on\uFF0C\u8868\u793A\u5F00\u542F\u8FD9\u4E2A\u903B\u8F91\u3002</p><p>\u5728 InnoDB \u4E2D\uFF0Cinnodb_lock_wait_timeout \u7684\u9ED8\u8BA4\u503C\u662F 50s\uFF0C\u610F\u5473\u7740\u5982\u679C\u91C7\u7528\u7B2C\u4E00\u4E2A\u7B56\u7565\uFF0C\u5F53\u51FA\u73B0\u6B7B\u9501\u4EE5\u540E\uFF0C\u7B2C\u4E00\u4E2A\u88AB\u9501\u4F4F\u7684\u7EBF\u7A0B\u8981\u8FC7 50s \u624D\u4F1A\u8D85\u65F6\u9000\u51FA\uFF0C\u7136\u540E\u5176\u4ED6\u7EBF\u7A0B\u624D\u6709\u53EF\u80FD\u7EE7\u7EED\u6267\u884C\u3002\u5BF9\u4E8E\u5728\u7EBF\u670D\u52A1\u6765\u8BF4\uFF0C\u8FD9\u4E2A\u7B49\u5F85\u65F6\u95F4\u5F80\u5F80\u662F\u65E0\u6CD5\u63A5\u53D7\u7684\u3002</p><p>\u4F46\u662F\uFF0C\u6211\u4EEC\u53C8\u4E0D\u53EF\u80FD\u76F4\u63A5\u628A\u8FD9\u4E2A\u65F6\u95F4\u8BBE\u7F6E\u6210\u4E00\u4E2A\u5F88\u5C0F\u7684\u503C\uFF0C\u6BD4\u5982 1s\u3002\u8FD9\u6837\u5F53\u51FA\u73B0\u6B7B\u9501\u7684\u65F6\u5019\uFF0C\u786E\u5B9E\u5F88\u5FEB\u5C31\u53EF\u4EE5\u89E3\u5F00\uFF0C\u4F46\u5982\u679C\u4E0D\u662F\u6B7B\u9501\uFF0C\u800C\u662F\u7B80\u5355\u7684\u9501\u7B49\u5F85\u5462\uFF1F\u6240\u4EE5\uFF0C\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E\u592A\u77ED\u7684\u8BDD\uFF0C\u4F1A\u51FA\u73B0\u5F88\u591A\u8BEF\u4F24\u3002</p><p><strong>\u6240\u4EE5\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\u6211\u4EEC\u8FD8\u662F\u8981\u91C7\u7528\u7B2C\u4E8C\u79CD\u7B56\u7565\uFF0C\u5373\uFF1A\u4E3B\u52A8\u6B7B\u9501\u68C0\u6D4B</strong>\uFF0C\u800C\u4E14 innodb_deadlock_detect \u7684\u9ED8\u8BA4\u503C\u672C\u8EAB\u5C31\u662F on\u3002\u4E3B\u52A8\u6B7B\u9501\u68C0\u6D4B\u5728\u53D1\u751F\u6B7B\u9501\u7684\u65F6\u5019\uFF0C\u662F\u80FD\u591F\u5FEB\u901F\u53D1\u73B0\u5E76\u8FDB\u884C\u5904\u7406\u7684\uFF0C\u4F46\u662F\u5B83\u4E5F\u662F\u6709\u989D\u5916\u8D1F\u62C5\u7684\u3002</p><p>\u4F60\u53EF\u4EE5\u60F3\u8C61\u4E00\u4E0B\u8FD9\u4E2A\u8FC7\u7A0B\uFF1A\u6BCF\u5F53\u4E00\u4E2A\u4E8B\u52A1\u88AB\u9501\u7684\u65F6\u5019\uFF0C\u5C31\u8981\u770B\u770B\u5B83\u6240\u4F9D\u8D56\u7684\u7EBF\u7A0B\u6709\u6CA1\u6709\u88AB\u522B\u4EBA\u9501\u4F4F\uFF0C\u5982\u6B64\u5FAA\u73AF\uFF0C\u6700\u540E\u5224\u65AD\u662F\u5426\u51FA\u73B0\u4E86\u5FAA\u73AF\u7B49\u5F85\uFF0C\u4E5F\u5C31\u662F\u6B7B\u9501\u3002</p><p>\u90A3\u5982\u679C\u662F\u6211\u4EEC\u4E0A\u9762\u8BF4\u5230\u7684\u6240\u6709\u4E8B\u52A1\u90FD\u8981\u66F4\u65B0\u540C\u4E00\u884C\u7684\u573A\u666F\u5462\uFF1F</p><p>\u6BCF\u4E2A\u65B0\u6765\u7684\u88AB\u5835\u4F4F\u7684\u7EBF\u7A0B\uFF0C\u90FD\u8981\u5224\u65AD\u4F1A\u4E0D\u4F1A\u7531\u4E8E\u81EA\u5DF1\u7684\u52A0\u5165\u5BFC\u81F4\u4E86\u6B7B\u9501\uFF0C\u8FD9\u662F\u4E00\u4E2A\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(n) \u7684\u64CD\u4F5C\u3002\u5047\u8BBE\u6709 1000 \u4E2A\u5E76\u53D1\u7EBF\u7A0B\u8981\u540C\u65F6\u66F4\u65B0\u540C\u4E00\u884C\uFF0C\u90A3\u4E48\u6B7B\u9501\u68C0\u6D4B\u64CD\u4F5C\u5C31\u662F 100 \u4E07\u8FD9\u4E2A\u91CF\u7EA7\u7684\u3002\u867D\u7136\u6700\u7EC8\u68C0\u6D4B\u7684\u7ED3\u679C\u662F\u6CA1\u6709\u6B7B\u9501\uFF0C\u4F46\u662F\u8FD9\u671F\u95F4\u8981\u6D88\u8017\u5927\u91CF\u7684 CPU \u8D44\u6E90\u3002\u56E0\u6B64\uFF0C\u4F60\u5C31\u4F1A\u770B\u5230 CPU \u5229\u7528\u7387\u5F88\u9AD8\uFF0C\u4F46\u662F\u6BCF\u79D2\u5374\u6267\u884C\u4E0D\u4E86\u51E0\u4E2A\u4E8B\u52A1\u3002</p><p>\u6839\u636E\u4E0A\u9762\u7684\u5206\u6790\uFF0C\u6211\u4EEC\u6765\u8BA8\u8BBA\u4E00\u4E0B\uFF0C\u600E\u4E48\u89E3\u51B3\u7531\u8FD9\u79CD\u70ED\u70B9\u884C\u66F4\u65B0\u5BFC\u81F4\u7684\u6027\u80FD\u95EE\u9898\u5462\uFF1F\u95EE\u9898\u7684\u75C7\u7ED3\u5728\u4E8E\uFF0C\u6B7B\u9501\u68C0\u6D4B\u8981\u8017\u8D39\u5927\u91CF\u7684 CPU \u8D44\u6E90\u3002</p><p>\u4E00\u79CD\u5934\u75DB\u533B\u5934\u7684\u65B9\u6CD5\uFF0C\u5C31\u662F\u5982\u679C\u4F60\u80FD\u786E\u4FDD\u8FD9\u4E2A\u4E1A\u52A1\u4E00\u5B9A\u4E0D\u4F1A\u51FA\u73B0\u6B7B\u9501\uFF0C\u53EF\u4EE5\u4E34\u65F6\u628A\u6B7B\u9501\u68C0\u6D4B\u5173\u6389\u3002\u4F46\u662F\u8FD9\u79CD\u64CD\u4F5C\u672C\u8EAB\u5E26\u6709\u4E00\u5B9A\u7684\u98CE\u9669\uFF0C\u56E0\u4E3A\u4E1A\u52A1\u8BBE\u8BA1\u7684\u65F6\u5019\u4E00\u822C\u4E0D\u4F1A\u628A\u6B7B\u9501\u5F53\u505A\u4E00\u4E2A\u4E25\u91CD\u9519\u8BEF\uFF0C\u6BD5\u7ADF\u51FA\u73B0\u6B7B\u9501\u4E86\uFF0C\u5C31\u56DE\u6EDA\uFF0C\u7136\u540E\u901A\u8FC7\u4E1A\u52A1\u91CD\u8BD5\u4E00\u822C\u5C31\u6CA1\u95EE\u9898\u4E86\uFF0C\u8FD9\u662F\u4E1A\u52A1\u65E0\u635F\u7684\u3002\u800C\u5173\u6389\u6B7B\u9501\u68C0\u6D4B\u610F\u5473\u7740\u53EF\u80FD\u4F1A\u51FA\u73B0\u5927\u91CF\u7684\u8D85\u65F6\uFF0C\u8FD9\u662F\u4E1A\u52A1\u6709\u635F\u7684\u3002</p><p>\u53E6\u4E00\u4E2A\u601D\u8DEF\u662F\u63A7\u5236\u5E76\u53D1\u5EA6\u3002\u6839\u636E\u4E0A\u9762\u7684\u5206\u6790\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5982\u679C\u5E76\u53D1\u80FD\u591F\u63A7\u5236\u4F4F\uFF0C\u6BD4\u5982\u540C\u4E00\u884C\u540C\u65F6\u6700\u591A\u53EA\u6709 10 \u4E2A\u7EBF\u7A0B\u5728\u66F4\u65B0\uFF0C\u90A3\u4E48\u6B7B\u9501\u68C0\u6D4B\u7684\u6210\u672C\u5F88\u4F4E\uFF0C\u5C31\u4E0D\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u3002\u4E00\u4E2A\u76F4\u63A5\u7684\u60F3\u6CD5\u5C31\u662F\uFF0C\u5728\u5BA2\u6237\u7AEF\u505A\u5E76\u53D1\u63A7\u5236\u3002\u4F46\u662F\uFF0C\u4F60\u4F1A\u5F88\u5FEB\u53D1\u73B0\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u592A\u53EF\u884C\uFF0C\u56E0\u4E3A\u5BA2\u6237\u7AEF\u5F88\u591A\u3002\u6211\u89C1\u8FC7\u4E00\u4E2A\u5E94\u7528\uFF0C\u6709 600 \u4E2A\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u6837\u5373\u4F7F\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u63A7\u5236\u5230\u53EA\u6709 5 \u4E2A\u5E76\u53D1\u7EBF\u7A0B\uFF0C\u6C47\u603B\u5230\u6570\u636E\u5E93\u670D\u52A1\u7AEF\u4EE5\u540E\uFF0C\u5CF0\u503C\u5E76\u53D1\u6570\u4E5F\u53EF\u80FD\u8981\u8FBE\u5230 3000\u3002</p><p><strong>\u56E0\u6B64\uFF0C\u8FD9\u4E2A\u5E76\u53D1\u63A7\u5236\u8981\u505A\u5728\u6570\u636E\u5E93\u670D\u52A1\u7AEF\u3002\u5982\u679C\u4F60\u6709\u4E2D\u95F4\u4EF6\uFF0C\u53EF\u4EE5\u8003\u8651\u5728\u4E2D\u95F4\u4EF6\u5B9E\u73B0\uFF1B\u5982\u679C\u4F60\u7684\u56E2\u961F\u6709\u80FD\u4FEE\u6539 MySQL \u6E90\u7801\u7684\u4EBA\uFF0C\u4E5F\u53EF\u4EE5\u505A\u5728 MySQL \u91CC\u9762\u3002\u57FA\u672C\u601D\u8DEF\u5C31\u662F\uFF0C\u5BF9\u4E8E\u76F8\u540C\u884C\u7684\u66F4\u65B0\uFF0C\u5728\u8FDB\u5165\u5F15\u64CE\u4E4B\u524D\u6392\u961F\u3002\u8FD9\u6837\u5728 InnoDB \u5185\u90E8\u5C31\u4E0D\u4F1A\u6709\u5927\u91CF\u7684\u6B7B\u9501\u68C0\u6D4B\u5DE5\u4F5C\u4E86\u3002</strong></p><p>\u53EF\u80FD\u4F60\u4F1A\u95EE\uFF0C\u5982\u679C\u56E2\u961F\u91CC\u6682\u65F6\u6CA1\u6709\u6570\u636E\u5E93\u65B9\u9762\u7684\u4E13\u5BB6\uFF0C\u4E0D\u80FD\u5B9E\u73B0\u8FD9\u6837\u7684\u65B9\u6848\uFF0C\u80FD\u4E0D\u80FD\u4ECE\u8BBE\u8BA1\u4E0A\u4F18\u5316\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F</p><p>**\u4F60\u53EF\u4EE5\u8003\u8651\u901A\u8FC7\u5C06\u4E00\u884C\u6539\u6210\u903B\u8F91\u4E0A\u7684\u591A\u884C\u6765\u51CF\u5C11\u9501\u51B2\u7A81\u3002**\u8FD8\u662F\u4EE5\u5F71\u9662\u8D26\u6237\u4E3A\u4F8B\uFF0C\u53EF\u4EE5\u8003\u8651\u653E\u5728\u591A\u6761\u8BB0\u5F55\u4E0A\uFF0C\u6BD4\u5982 10 \u4E2A\u8BB0\u5F55\uFF0C\u5F71\u9662\u7684\u8D26\u6237\u603B\u989D\u7B49\u4E8E\u8FD9 10 \u4E2A\u8BB0\u5F55\u7684\u503C\u7684\u603B\u548C\u3002\u8FD9\u6837\u6BCF\u6B21\u8981\u7ED9\u5F71\u9662\u8D26\u6237\u52A0\u91D1\u989D\u7684\u65F6\u5019\uFF0C\u968F\u673A\u9009\u5176\u4E2D\u4E00\u6761\u8BB0\u5F55\u6765\u52A0\u3002\u8FD9\u6837\u6BCF\u6B21\u51B2\u7A81\u6982\u7387\u53D8\u6210\u539F\u6765\u7684 1/10\uFF0C\u53EF\u4EE5\u51CF\u5C11\u9501\u7B49\u5F85\u4E2A\u6570\uFF0C\u4E5F\u5C31\u51CF\u5C11\u4E86\u6B7B\u9501\u68C0\u6D4B\u7684 CPU \u6D88\u8017\u3002</p><p>\u8FD9\u4E2A\u65B9\u6848\u770B\u4E0A\u53BB\u662F\u65E0\u635F\u7684\uFF0C\u4F46\u5176\u5B9E\u8FD9\u7C7B\u65B9\u6848\u9700\u8981\u6839\u636E\u4E1A\u52A1\u903B\u8F91\u505A\u8BE6\u7EC6\u8BBE\u8BA1\u3002\u5982\u679C\u8D26\u6237\u4F59\u989D\u53EF\u80FD\u4F1A\u51CF\u5C11\uFF0C\u6BD4\u5982\u9000\u7968\u903B\u8F91\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u8003\u8651\u5F53\u4E00\u90E8\u5206\u884C\u8BB0\u5F55\u53D8\u6210 0 \u7684\u65F6\u5019\uFF0C\u4EE3\u7801\u8981\u6709\u7279\u6B8A\u5904\u7406\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u4ECA\u5929\uFF0C\u6211\u548C\u4F60\u4ECB\u7ECD\u4E86 MySQL \u7684\u884C\u9501\uFF0C\u6D89\u53CA\u4E86\u4E24\u9636\u6BB5\u9501\u534F\u8BAE\u3001\u6B7B\u9501\u548C\u6B7B\u9501\u68C0\u6D4B\u8FD9\u4E24\u5927\u90E8\u5206\u5185\u5BB9\u3002</p><p>\u5176\u4E2D\uFF0C\u6211\u4EE5\u4E24\u9636\u6BB5\u534F\u8BAE\u4E3A\u8D77\u70B9\uFF0C\u548C\u4F60\u4E00\u8D77\u8BA8\u8BBA\u4E86\u5728\u5F00\u53D1\u7684\u65F6\u5019\u5982\u4F55\u5B89\u6392\u6B63\u786E\u7684\u4E8B\u52A1\u8BED\u53E5\u3002\u8FD9\u91CC\u7684\u539F\u5219 / \u6211\u7ED9\u4F60\u7684\u5EFA\u8BAE\u662F\uFF1A<strong>\u5982\u679C\u4F60\u7684\u4E8B\u52A1\u4E2D\u9700\u8981\u9501\u591A\u4E2A\u884C\uFF0C\u8981\u628A\u6700\u53EF\u80FD\u9020\u6210\u9501\u51B2\u7A81\u3001\u6700\u53EF\u80FD\u5F71\u54CD\u5E76\u53D1\u5EA6\u7684\u9501\u7684\u7533\u8BF7\u65F6\u673A\u5C3D\u91CF\u5F80\u540E\u653E\u3002</strong></p><p><strong>\u4F46\u662F\uFF0C\u8C03\u6574\u8BED\u53E5\u987A\u5E8F\u5E76\u4E0D\u80FD\u5B8C\u5168\u907F\u514D\u6B7B\u9501\u3002\u6240\u4EE5\u6211\u4EEC\u5F15\u5165\u4E86\u6B7B\u9501\u548C\u6B7B\u9501\u68C0\u6D4B\u7684\u6982\u5FF5\uFF0C\u4EE5\u53CA\u63D0\u4F9B\u4E86\u4E09\u4E2A\u65B9\u6848\uFF0C\u6765\u51CF\u5C11\u6B7B\u9501\u5BF9\u6570\u636E\u5E93\u7684\u5F71\u54CD\u3002\u51CF\u5C11\u6B7B\u9501\u7684\u4E3B\u8981\u65B9\u5411\uFF0C\u5C31\u662F\u63A7\u5236\u8BBF\u95EE\u76F8\u540C\u8D44\u6E90\u7684\u5E76\u53D1\u4E8B\u52A1\u91CF\u3002</strong></p><h2 id="\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a> \u601D\u8003\u9898</h2><p>\u5982\u679C\u8981\u5220\u9664\u4E00\u4E2A\u8868\u91CC\u9762\u7684\u524D 10000 \u884C\u6570\u636E\uFF0C\u6709\u4EE5\u4E0B\u4E09\u79CD\u65B9\u6CD5\u53EF\u4EE5\u505A\u5230\uFF1A</p><p>\u7B2C\u4E00\u79CD\uFF0C\u76F4\u63A5\u6267\u884C delete from T limit 10000;</p><p>\u7B2C\u4E8C\u79CD\uFF0C\u5728\u4E00\u4E2A\u8FDE\u63A5\u4E2D\u5FAA\u73AF\u6267\u884C 20 \u6B21 delete from T limit 500;</p><p>\u7B2C\u4E09\u79CD\uFF0C\u5728 20 \u4E2A\u8FDE\u63A5\u4E2D\u540C\u65F6\u6267\u884C delete from T limit 500\u3002</p><p>\u4F60\u4F1A\u9009\u62E9\u54EA\u4E00\u79CD\u65B9\u6CD5\u5462\uFF1F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><blockquote><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u66F4\u597D\u3002</p><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF08\u5373\uFF1A\u76F4\u63A5\u6267\u884C delete from T limit 10000\uFF09\u91CC\u9762\uFF0C\u5355\u4E2A\u8BED\u53E5\u5360\u7528\u65F6\u95F4\u957F\uFF0C\u9501\u7684\u65F6\u95F4\u4E5F\u6BD4\u8F83\u957F\uFF1B\u800C\u4E14\u5927\u4E8B\u52A1\u8FD8\u4F1A\u5BFC\u81F4\u4E3B\u4ECE\u5EF6\u8FDF\u3002</p><p>\u7B2C\u4E09\u79CD\u65B9\u5F0F\uFF08\u5373\uFF1A\u5728 20 \u4E2A\u8FDE\u63A5\u4E2D\u540C\u65F6\u6267\u884C delete from T limit 500\uFF09\uFF0C\u4F1A\u4EBA\u4E3A\u9020\u6210\u9501\u51B2\u7A81\u3002</p></blockquote>',50),i=[r];function s(a,d){return t(),e("div",null,i)}const h=p(o,[["render",s],["__file","7\u884C\u9501.html.vue"]]);export{h as default};
