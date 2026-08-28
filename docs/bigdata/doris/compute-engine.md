---
title: Doris 计算引擎
icon: rank
category:
  - 大数据技术
tag:
  - Doris
  - 计算引擎
---

# Doris 计算引擎

::: info 写作计划

本文正在准备中，后续将结合执行计划、性能测试与源码分析完善。

:::

## 计划内容

1. FE 与 BE 在查询生命周期中的职责边界。
2. SQL 解析、优化、分布式计划生成与调度。
3. 向量化执行模型与算子实现。
4. Pipeline 执行引擎、并发度和任务调度。
5. Join、聚合、Shuffle 与 Runtime Filter。
6. 如何阅读 Profile 并定位 CPU、内存、网络和数据倾斜问题。
