<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
</script>

<template>
  <Layout>
    <!-- 在右侧目录的上方添加广告 -->
    <template #tocBefore>
      <div>广告</div>
    </template>
    <!-- 在右侧目录的下方添加赞赏码 -->
    <template #tocAfter>
      <div style="text-align: center; margin-top: 1em">
        <img
          src="/reward-code.png"
          alt="赞赏码"
          style="max-width: 350px; width: 400%; border-radius: 8px"
        />
      </div>
    </template>
  </Layout>
</template>