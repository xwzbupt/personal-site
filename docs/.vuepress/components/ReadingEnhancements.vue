<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vuepress/client";

const route = useRoute();
const progress = ref(0);
const isReadingPage = ref(false);
const isScrollBoundedPage = ref(false);

let frame: number | undefined;
let boundaryFrame: number | undefined;
let boundaryObserver: ResizeObserver | undefined;
let lastScrollY = 0;
let lastTouchY = 0;

const isScrollBoundedRoute = (path: string): boolean =>
  path === "/" || path === "/home.html";

const hasScrollBoundedLayout = (path: string): boolean => {
  const pageSelector =
    path === "/"
      ? ".vp-page.vp-blog-home"
      : path === "/home.html"
        ? ".vp-page .project-portfolio"
        : undefined;

  return Boolean(
    pageSelector &&
      document.querySelector(pageSelector) &&
      document.querySelector(".vp-footer-wrapper"),
  );
};

const getScrollBoundary = (): number | undefined => {
  if (!isScrollBoundedPage.value) return undefined;

  const footer = document.querySelector<HTMLElement>(".vp-footer-wrapper");
  if (!footer) return undefined;

  return Math.max(
    0,
    footer.getBoundingClientRect().bottom + window.scrollY - window.innerHeight,
  );
};

const clampScrollBoundary = (): void => {
  boundaryFrame = undefined;
  const boundary = getScrollBoundary();

  if (boundary !== undefined && window.scrollY > boundary + 1)
    window.scrollTo({ top: boundary, left: 0, behavior: "auto" });
};

const scheduleBoundaryClamp = (): void => {
  if (boundaryFrame !== undefined) return;
  boundaryFrame = window.requestAnimationFrame(clampScrollBoundary);
};

const stopAtScrollBoundary = (
  distance: number,
  event: WheelEvent | TouchEvent,
): void => {
  if (distance <= 0) return;

  const boundary = getScrollBoundary();
  if (boundary === undefined || window.scrollY + distance < boundary) return;

  if (event.cancelable) event.preventDefault();
  window.scrollTo({ top: boundary, left: 0, behavior: "auto" });
};

const handleWheel = (event: WheelEvent): void => {
  const factor =
    event.deltaMode === WheelEvent.DOM_DELTA_LINE
      ? 18
      : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
        ? window.innerHeight
        : 1;
  stopAtScrollBoundary(event.deltaY * factor, event);
};

const handleTouchStart = (event: TouchEvent): void => {
  lastTouchY = event.touches[0]?.clientY ?? 0;
};

const handleTouchMove = (event: TouchEvent): void => {
  const currentTouchY = event.touches[0]?.clientY;
  if (currentTouchY === undefined) return;

  const distance = lastTouchY - currentTouchY;
  lastTouchY = currentTouchY;
  stopAtScrollBoundary(distance, event);
};

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

const handlePageScroll = (): void => {
  // 滚动事件中同步兜底，避免先露出页脚后的空白再在下一帧回弹。
  clampScrollBoundary();
  scheduleReadingState();
};

const handlePageResize = (): void => {
  scheduleBoundaryClamp();
  scheduleReadingState();
};

const observeScrollBoundary = (): void => {
  boundaryObserver?.disconnect();
  boundaryObserver = undefined;

  if (!isScrollBoundedPage.value) return;

  boundaryObserver = new ResizeObserver(scheduleBoundaryClamp);
  const page = document.querySelector<HTMLElement>(".vp-page");
  const footer = document.querySelector<HTMLElement>(".vp-footer-wrapper");

  if (page) boundaryObserver.observe(page);
  if (footer) boundaryObserver.observe(footer);
};

const prepareScrollBoundary = (path: string): void => {
  const shouldBoundScroll = isScrollBoundedRoute(path);
  isScrollBoundedPage.value = shouldBoundScroll;
  document.documentElement.classList.toggle(
    "weiser-scroll-bounded-page",
    shouldBoundScroll,
  );
  document.documentElement.classList.toggle(
    "weiser-scroll-boundary-entering",
    shouldBoundScroll,
  );

  // 路由切换的短暂阶段仍可能保留上一页的长文档高度，先锁住并复位。
  if (shouldBoundScroll) {
    isReadingPage.value = false;
    document.documentElement.classList.remove(
      "weiser-reading-page",
      "weiser-reading-navbar-hidden",
    );
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
};

const syncPageType = async (): Promise<void> => {
  const path = route.path;
  await nextTick();

  // 自定义主页组件可能比路由先更新，确认目标页面已落入 DOM 后再解锁滚动。
  for (let attempt = 0; attempt < 8; attempt += 1) {
    if (!isScrollBoundedRoute(path) || hasScrollBoundedLayout(path)) break;
    await new Promise<void>((resolve) =>
      window.requestAnimationFrame(() => resolve()),
    );
  }

  if (route.path !== path) return;

  isScrollBoundedPage.value = isScrollBoundedRoute(path);
  document.documentElement.classList.toggle(
    "weiser-scroll-bounded-page",
    isScrollBoundedPage.value,
  );
  observeScrollBoundary();
  clampScrollBoundary();
  document.documentElement.classList.remove(
    "weiser-scroll-boundary-entering",
  );

  isReadingPage.value =
    !isScrollBoundedPage.value &&
    Boolean(
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

watch(
  () => route.path,
  (path) => {
    prepareScrollBoundary(path);
    void syncPageType();
  },
);

onMounted(() => {
  prepareScrollBoundary(route.path);
  void syncPageType();
  window.addEventListener("scroll", handlePageScroll, { passive: true });
  window.addEventListener("resize", handlePageResize, { passive: true });
  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handlePageScroll);
  window.removeEventListener("resize", handlePageResize);
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  boundaryObserver?.disconnect();
  if (frame !== undefined) window.cancelAnimationFrame(frame);
  if (boundaryFrame !== undefined)
    window.cancelAnimationFrame(boundaryFrame);
  document.documentElement.classList.remove(
    "weiser-reading-page",
    "weiser-reading-navbar-hidden",
    "weiser-scroll-bounded-page",
    "weiser-scroll-boundary-entering",
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
