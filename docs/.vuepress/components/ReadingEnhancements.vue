<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vuepress/client";

const route = useRoute();
const progress = ref(0);
const isReadingPage = ref(false);

let frame: number | undefined;

const updateReadingState = (): void => {
  frame = undefined;

  if (!isReadingPage.value) {
    progress.value = 0;
    return;
  }

  const root = document.documentElement;
  const scrollable = Math.max(0, root.scrollHeight - window.innerHeight);
  const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

  progress.value = Math.min(100, Math.max(0, nextProgress));
};

const scheduleReadingState = (): void => {
  if (frame !== undefined) return;
  frame = window.requestAnimationFrame(updateReadingState);
};

const syncPageType = async (): Promise<void> => {
  await nextTick();

  isReadingPage.value = Boolean(
    document.querySelector(
      ".vp-page:not(.vp-blog-home):not(:has(.project-portfolio)) #markdown-content",
    ),
  );
  document.documentElement.classList.toggle(
    "weiser-reading-page",
    isReadingPage.value,
  );
  scheduleReadingState();
};

watch(() => route.path, syncPageType);

onMounted(() => {
  void syncPageType();
  window.addEventListener("scroll", scheduleReadingState, { passive: true });
  window.addEventListener("resize", scheduleReadingState, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scheduleReadingState);
  window.removeEventListener("resize", scheduleReadingState);
  if (frame !== undefined) window.cancelAnimationFrame(frame);
  document.documentElement.classList.remove("weiser-reading-page");
});
</script>

<template>
  <div
    v-if="isReadingPage"
    class="reading-progress"
    role="progressbar"
    aria-label="文章阅读进度"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="Math.round(progress)"
  >
    <span :style="{ transform: `scaleX(${progress / 100})` }" />
  </div>
</template>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 300;
  height: 3px;
  pointer-events: none;
  background: transparent;
}

.reading-progress span {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0 999px 999px 0;
  background: linear-gradient(90deg, #2d9a72, #57c69a);
  box-shadow: 0 0 12px rgb(62 175 124 / 45%);
  transform-origin: left center;
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .reading-progress span {
    transition: none;
  }
}
</style>
