<script setup lang="ts">
import { usePageFrontmatter } from "vuepress/client";
import { Blog } from "vuepress-theme-hope/blog";
import SiteUptime from "../components/SiteUptime.vue";

const frontmatter = usePageFrontmatter<{ siteStartTime?: string }>();
</script>

<template>
  <Blog>
    <template #heroInfo="{ text, tagline }">
      <div class="vp-blog-hero-info">
        <h1 v-if="text" class="vp-blog-hero-title">{{ text }}</h1>
        <p v-if="tagline" class="vp-blog-hero-description">{{ tagline }}</p>
        <SiteUptime
          :start-at="
            frontmatter.siteStartTime ?? '2022-05-02T09:18:36+08:00'
          "
        />
      </div>
    </template>
  </Blog>
</template>
