<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vuepress/client";

const route = useRoute();
const progress = ref(0);
const isReadingPage = ref(false);

const isLandingRoute = (path: string): boolean =>
  path === "/" || path === "/home.html";

let frame: number | undefined;
let lastScrollY = 0;
let pageSyncId = 0;

const setNavbarHidden = (hidden: boolean): void => {
  document.documentElement.classList.toggle(
    "weiser-reading-navbar-hidden",
    hidden && isReadingPage.value,
  );
};

const updateReadingState = (): void => {
  frame = undefined;

  if (!isReadingPage.value) {
    progress.value = 0;
    setNavbarHidden(false);
    return;
  }

  const root = document.documentElement;
  const scrollY = window.scrollY;
  const scrollable = Math.max(0, root.scrollHeight - window.innerHeight);
  const nextProgress = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;

  if (scrollY <= 80) setNavbarHidden(false);
  else if (scrollY < lastScrollY - 2) setNavbarHidden(false);
  else if (scrollY > 160 && scrollY > lastScrollY + 2)
    setNavbarHidden(true);

  progress.value = Math.min(100, Math.max(0, nextProgress));
  lastScrollY = scrollY;
};

const scheduleReadingState = (): void => {
  if (frame !== undefined) return;
  frame = window.requestAnimationFrame(updateReadingState);
};

const syncPageType = async (): Promise<void> => {
  const syncId = ++pageSyncId;
  const path = route.path;

  // 路由变化时立即清理上一页状态，避免新页面短暂套用旧文章布局。
  isReadingPage.value = false;
  progress.value = 0;
  document.documentElement.classList.remove(
    "weiser-reading-page",
    "weiser-reading-navbar-hidden",
  );

  // 首页和项目主页不依赖异步 DOM 判断，路由命中后立即结束同步。
  if (isLandingRoute(path)) return;

  await nextTick();

  if (syncId !== pageSyncId || route.path !== path) return;

  isReadingPage.value = Boolean(
    document.querySelector(
      ".vp-page:not(.vp-blog-home):not(:has(.project-portfolio)) #markdown-content",
    ),
  );
  document.documentElement.classList.toggle(
    "weiser-reading-page",
    isReadingPage.value,
  );
  lastScrollY = window.scrollY;
  setNavbarHidden(false);
  scheduleReadingState();
};

watch(() => route.path, syncPageType, { flush: "sync" });

onMounted(() => {
  void syncPageType();
  window.addEventListener("scroll", scheduleReadingState, { passive: true });
  window.addEventListener("resize", scheduleReadingState, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scheduleReadingState);
  window.removeEventListener("resize", scheduleReadingState);
  if (frame !== undefined) window.cancelAnimationFrame(frame);
  document.documentElement.classList.remove(
    "weiser-reading-page",
    "weiser-reading-navbar-hidden",
  );
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
