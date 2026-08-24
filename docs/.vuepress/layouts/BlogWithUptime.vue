<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import { Blog } from "vuepress-theme-hope/blog";
import SiteUptime from "../components/SiteUptime.vue";

const frontmatter = usePageFrontmatter<{ siteStartTime?: string }>();

interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
}

const currentBackground = ref("");
const currentPhoto = ref<PicsumPhoto>();
const photoPool = ref<PicsumPhoto[]>([]);
const isChangingBackground = ref(false);
const footerReady = ref(false);

let requestController: AbortController | undefined;

const updateHomeNavbar = (): void => {
  document.documentElement.classList.toggle(
    "weiser-home-scrolled",
    window.scrollY > 48,
  );
};

const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => reject(new Error(`Unable to load ${src}`));
    image.src = src;
  });

const createRequestToken = (): string =>
  `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const loadInitialBackground = async (): Promise<void> => {
  if (isChangingBackground.value) return;
  isChangingBackground.value = true;

  try {
    const initialBackground =
      `https://picsum.photos/1920/1080.webp?random=${createRequestToken()}`;
    await preloadImage(initialBackground);
    currentBackground.value = initialBackground;
  } catch (error) {
    console.warn("Initial background failed; keeping the gradient fallback.", error);
  } finally {
    isChangingBackground.value = false;
  }
};

const loadPhotoPool = async (): Promise<void> => {
  requestController?.abort();
  requestController = new AbortController();

  const page = Math.floor(Math.random() * 8) + 1;
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=100`,
    { signal: requestController.signal },
  );

  if (!response.ok) throw new Error(`Picsum returned ${response.status}`);

  const photos = (await response.json()) as PicsumPhoto[];
  photoPool.value = photos.filter(
    ({ width, height }) => width >= 1600 && height >= 900 && width / height >= 1.5,
  );
};

const changeBackground = async (): Promise<void> => {
  if (isChangingBackground.value) return;
  isChangingBackground.value = true;

  try {
    if (photoPool.value.length < 2) await loadPhotoPool();

    const candidates = photoPool.value.filter(
      ({ id }) => id !== currentPhoto.value?.id,
    );
    const nextPhoto = candidates[Math.floor(Math.random() * candidates.length)];

    if (!nextPhoto) throw new Error("No landscape photo is available");

    const requestToken = createRequestToken();
    const nextBackground =
      `https://picsum.photos/id/${nextPhoto.id}/1920/1080.webp?random=${requestToken}`;
    await preloadImage(nextBackground);

    currentPhoto.value = nextPhoto;
    currentBackground.value = nextBackground;
  } catch (error) {
    if (!(error instanceof DOMException && error.name === "AbortError"))
      console.warn("Background rotation failed; keeping the online fallback.", error);
  } finally {
    isChangingBackground.value = false;
  }
};

onMounted(() => {
  document.documentElement.classList.add("weiser-blog-home");
  updateHomeNavbar();
  window.addEventListener("scroll", updateHomeNavbar, { passive: true });
  // 每次进入首页随机一次；之后仅由按钮触发更换，不设置定时器。
  void loadInitialBackground();
  void nextTick(() => {
    footerReady.value = document.querySelector("#home-site-uptime") !== null;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateHomeNavbar);
  document.documentElement.classList.remove(
    "weiser-blog-home",
    "weiser-home-scrolled",
  );
  requestController?.abort();
});
</script>

<template>
  <Blog>
    <template #heroBg="{ style }">
      <Transition name="hero-background" type="transition">
        <div
          :key="currentBackground || 'gradient-fallback'"
          class="vp-blog-mask weiser-hero-background"
          :style="[
            {
              background: currentBackground
                ? `linear-gradient(rgb(5 18 27 / 28%), rgb(5 18 27 / 48%)), url('${currentBackground}') center / cover no-repeat`
                : 'linear-gradient(135deg, rgb(18 62 55), rgb(20 38 58))',
            },
            style,
          ]"
        />
      </Transition>
    </template>

    <template #heroInfo="{ text, tagline }">
      <div class="vp-blog-hero-info">
        <h1 v-if="text" class="vp-blog-hero-title">{{ text }}</h1>
        <p v-if="tagline" class="vp-blog-hero-description">{{ tagline }}</p>
        <div class="hero-background-controls">
          <button
            class="hero-background-button"
            type="button"
            :disabled="isChangingBackground"
            aria-label="更换首页背景"
            @click="changeBackground"
          >
            <span aria-hidden="true">↻</span>
            {{ isChangingBackground ? "正在更换" : "换一张背景" }}
          </button>
          <a
            v-if="currentPhoto"
            class="hero-background-credit"
            :href="currentPhoto.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            摄影：{{ currentPhoto.author }} · Unsplash
          </a>
          <span v-else class="hero-background-credit">图片来源：Lorem Picsum</span>
        </div>
      </div>
    </template>
  </Blog>

  <Teleport v-if="footerReady" to="#home-site-uptime">
    <SiteUptime
      :start-at="frontmatter.siteStartTime ?? '2022-05-02T09:18:36+08:00'"
    />
  </Teleport>
</template>
