# 内容目录维护规范

站点内容统一放在 `docs/` 下。新增内容时，优先修改内容目录、导航配置和侧边栏配置，不修改主题组件。

## 目录规则

```text
docs/
├─ bigdata/
│  ├─ README.md
│  ├─ doris/
│  │  └─ README.md
│  ├─ trino/
│  │  └─ README.md
│  ├─ hive/
│  │  ├─ README.md
│  │  └─ installation.md
│  ├─ query-engines/
│  │  ├─ README.md
│  │  └─ openlookeng.md
│  └─ security/
│     ├─ README.md
│     └─ apache-ranger.md
└─ ai/
   ├─ README.md
   ├─ llm/
   │  └─ README.md
   ├─ prompt-engineering/
   │  └─ README.md
   ├─ rag/
   │  └─ README.md
   └─ agents/
      └─ README.md
```

- 一级知识领域使用简短的小写英文目录，例如 `bigdata`、`ai`。
- 二级技术主题也使用小写英文；多个单词使用短横线，例如 `prompt-engineering`。
- 每个目录必须有 `README.md`，作为该目录的入口页。
- 具体文章使用能表达主题的小写英文文件名，例如 `query-optimization.md`。
- 不再新增中文文件名、空格文件名或把文章直接堆在一级目录中。

## 新增文章

以新增 Doris 查询优化文章为例：

1. 创建 `docs/bigdata/doris/query-optimization.md`。
2. 在文章顶部填写 `title`、`category` 和 `tag`。
3. 在 `docs/.vuepress/sidebar.ts` 的 Doris 分组中加入 `doris/query-optimization`。
4. 只有需要出现在顶部下拉菜单中的入口，才修改 `docs/.vuepress/navbar.ts`。

## 新增技术分类

1. 在对应领域下创建目录和 `README.md`。
2. 在 `docs/.vuepress/navbar.ts` 中增加顶部菜单入口。
3. 在 `docs/.vuepress/sidebar.ts` 中增加文章分组。
4. 执行 `pnpm docs:build`，确认链接和页面都能生成。

旧的大数据文章已迁移到规范目录，并通过 `redirectFrom` 保留原地址，避免历史链接失效。
