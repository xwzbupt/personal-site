const e=JSON.parse('{"key":"v-35c8ea02","path":"/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/13%E8%A1%A8%E6%95%B0%E6%8D%AE%E5%88%A0%E6%8E%89%E4%B8%80%E5%8D%8A%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A1%A8%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F%E4%B8%8D%E5%8F%98.html","title":"表数据删掉一半，为什么表文件大小不变？","lang":"zh-CN","frontmatter":{"summary":"表数据删掉一半，为什么表文件大小不变？ 经常会有同学来问我，我的数据库占用空间太大，我把一个最大的表删掉了一半的数据，怎么表文件的大小还是没变？ 那么今天，我就和你聊聊数据库表的空间回收，看看如何解决这个问题。 这里，我们还是针对 MySQL 中应用最广泛的 InnoDB 引擎展开讨论。一个 InnoDB 表包含两部分，即：表结构定义和数据。在 MySQL ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/13%E8%A1%A8%E6%95%B0%E6%8D%AE%E5%88%A0%E6%8E%89%E4%B8%80%E5%8D%8A%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A1%A8%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F%E4%B8%8D%E5%8F%98.html"}],["meta",{"property":"og:site_name","content":"Weiser"}],["meta",{"property":"og:title","content":"表数据删掉一半，为什么表文件大小不变？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-29T14:55:35.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-29T14:55:35.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"参数 innodb_file_per_table","slug":"参数-innodb-file-per-table","link":"#参数-innodb-file-per-table","children":[]},{"level":2,"title":"数据删除流程","slug":"数据删除流程","link":"#数据删除流程","children":[]},{"level":2,"title":"重建表","slug":"重建表","link":"#重建表","children":[]},{"level":2,"title":"Online 和 inplace","slug":"online-和-inplace","link":"#online-和-inplace","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1653836135000,"updatedTime":1653836135000,"contributors":[{"name":"xwzbupt","email":"xwze@bupt.cn","commits":1}]},"readingTime":{"minutes":11.59,"words":3477},"filePathRelative":"basics/MySQL/实践篇/13表数据删掉一半，为什么表文件大小不变.md","localizedDate":"2022年5月29日"}');export{e as data};
