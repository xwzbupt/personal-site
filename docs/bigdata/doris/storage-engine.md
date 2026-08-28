---
title: Doris 存储引擎
icon: mysql
category:
  - 大数据技术
tag:
  - Doris
  - 存储引擎
---

# Doris 存储引擎

::: info 写作计划

本文正在准备中，后续将结合源码、架构图与实际案例完善。

:::

## 计划内容

1. Doris 的数据组织：分区、分桶、Tablet、Rowset 与 Segment。
2. 列式存储、编码和压缩的实现思路。
3. 前缀索引、ZoneMap、Bloom Filter 等索引的适用场景。
4. Compaction、写入放大与数据版本管理。
5. 多副本、故障恢复和存储介质管理。
6. 从真实查询与导入任务出发进行参数调优。
