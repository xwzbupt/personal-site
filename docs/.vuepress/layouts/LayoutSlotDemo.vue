<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

type RewardKind = "support" | "community";

const activeReward = ref<RewardKind>();
const activeTrigger = ref<HTMLElement>();
const isCompactPopup = ref(false);
const popupStyle = ref<Record<string, string>>({});

let closeTimer: ReturnType<typeof setTimeout> | undefined;

const rewardContent: Record<
  RewardKind,
  { title: string; description: string; image: string; alt: string }
> = {
  support: {
    title: "支持我",
    description: "如果本站内容对你有帮助，感谢你的支持。",
    image: "/reward-code.png",
    alt: "支持 Weiser 的赞赏码",
  },
  community: {
    title: "交流圈",
    description: "扫码加入交流圈，一起讨论学习、技术与交易。",
    image: "/wechat-code.png",
    alt: "Weiser 交流圈二维码",
  },
};

const useCompactPopup = (): boolean =>
  window.innerWidth < 1024 ||
  !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const positionDesktopPopup = (trigger: HTMLElement): void => {
  const rect = trigger.getBoundingClientRect();
  const popupWidth = Math.min(300, window.innerWidth - 32);
  const popupHeight = Math.min(390, window.innerHeight - 32);
  const edge = 16;
  const gap = 14;

  let left = rect.left - popupWidth - gap;
  if (left < edge) left = rect.right + gap;
  left = Math.min(Math.max(edge, left), window.innerWidth - popupWidth - edge);

  const top = Math.min(
    Math.max(edge, rect.top + rect.height / 2 - popupHeight / 2),
    window.innerHeight - popupHeight - edge,
  );

  popupStyle.value = {
    left: `${left}px`,
    top: `${top}px`,
    width: `${popupWidth}px`,
  };
};

const cancelClose = (): void => {
  if (closeTimer) clearTimeout(closeTimer);
  closeTimer = undefined;
};

const closeReward = (): void => {
  cancelClose();
  activeReward.value = undefined;
  activeTrigger.value = undefined;
};

const openReward = async (
  kind: RewardKind,
  trigger: HTMLElement,
): Promise<void> => {
  cancelClose();
  activeReward.value = kind;
  activeTrigger.value = trigger;
  isCompactPopup.value = useCompactPopup();

  if (!isCompactPopup.value) {
    await nextTick();
    positionDesktopPopup(trigger);
  }
};

const scheduleClose = (): void => {
  if (isCompactPopup.value) return;
  cancelClose();
  closeTimer = setTimeout(closeReward, 220);
};

const handleClick = (
  kind: RewardKind,
  event: MouseEvent,
): void => {
  const trigger = event.currentTarget as HTMLElement;
  const compact = useCompactPopup();

  if (!compact) {
    if (kind === "support")
      window.open("https://weiser.fun/others/refund.html", "_blank");
    else void openReward(kind, trigger);
    return;
  }

  event.preventDefault();
  if (activeReward.value === kind) closeReward();
  else void openReward(kind, trigger);
};

const handleResize = (): void => {
  if (!activeReward.value || !activeTrigger.value) return;
  isCompactPopup.value = useCompactPopup();
  if (!isCompactPopup.value) positionDesktopPopup(activeTrigger.value);
};

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === "Escape") closeReward();
};

onMounted(() => {
  window.addEventListener("resize", handleResize, { passive: true });
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  cancelClose();
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("keydown", handleKeydown);
});

</script>

<template>
  <Layout>
    <!-- 在右侧目录的上方添加广告 -->
    <!-- <template #tocBefore>
      <div>广告</div>
    </template> -->

    <!-- 在右侧目录的下方添加赞赏码 -->
    <template #tocAfter>
      <div style="margin-top: 1em">
        <div style="display: flex; gap: 10px">
          <!-- 按钮：支持我（点击跳转 + 悬停二维码） -->
          <div class="reward-btn">
            <button
              class="support-btn"
              type="button"
              aria-controls="reward-floating-popup"
              :aria-expanded="activeReward === 'support'"
              @mouseenter="openReward('support', $event.currentTarget as HTMLElement)"
              @mouseleave="scheduleClose"
              @focus="openReward('support', $event.currentTarget as HTMLElement)"
              @blur="scheduleClose"
              @click="handleClick('support', $event)"
            >
              ❤️支持我
            </button>
          </div>

          <!-- 按钮：交流圈（仅二维码，不跳转） -->
          <div class="reward-btn">
            <button
              class="support-btn"
              type="button"
              aria-controls="reward-floating-popup"
              :aria-expanded="activeReward === 'community'"
              @mouseenter="openReward('community', $event.currentTarget as HTMLElement)"
              @mouseleave="scheduleClose"
              @focus="openReward('community', $event.currentTarget as HTMLElement)"
              @blur="scheduleClose"
              @click="handleClick('community', $event)"
            >
              💬交流圈
            </button>
          </div>
        </div>
      </div>
    </template>
  </Layout>

  <Teleport to="body">
    <Transition name="reward-fade">
      <div
        v-if="activeReward"
        class="reward-layer"
        :class="{ 'is-compact': isCompactPopup }"
        @click.self="closeReward"
      >
        <aside
          id="reward-floating-popup"
          class="reward-popup"
          :style="isCompactPopup ? undefined : popupStyle"
          role="dialog"
          :aria-label="rewardContent[activeReward].title"
          @mouseenter="cancelClose"
          @mouseleave="scheduleClose"
        >
          <button
            class="reward-popup__close"
            type="button"
            aria-label="关闭二维码"
            @click="closeReward"
          >
            ×
          </button>
          <strong>{{ rewardContent[activeReward].title }}</strong>
          <p>{{ rewardContent[activeReward].description }}</p>
          <img
            :src="rewardContent[activeReward].image"
            :alt="rewardContent[activeReward].alt"
          />
          <a
            v-if="activeReward === 'support'"
            href="https://weiser.fun/others/refund.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看支持说明
          </a>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.support-btn {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
.support-btn:hover {
  border-color: #ff4d4f;
  color: #ff4d4f;
}

.reward-btn {
  position: relative;
  display: inline-block;
}

.reward-layer {
  position: fixed;
  inset: 0;
  z-index: 400;
  pointer-events: none;
}

.reward-popup {
  position: fixed;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.75rem;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text);
  box-shadow: 0 16px 42px rgb(0 0 0 / 20%);
  text-align: center;
  pointer-events: auto;
}

.reward-popup strong {
  display: block;
  font-size: 1rem;
}

.reward-popup p {
  margin: 0.35rem 1.5rem 0.75rem;
  color: var(--vp-c-text-mute);
  font-size: 0.8rem;
  line-height: 1.55;
}

.reward-popup img {
  display: block;
  width: min(100%, 17rem);
  max-height: min(56vh, 17rem);
  margin: 0 auto;
  border: 0;
  border-radius: 6px;
  box-shadow: none;
  object-fit: contain;
}

.reward-popup a {
  display: inline-block;
  margin-top: 0.75rem;
  color: var(--vp-c-accent);
  font-size: 0.82rem;
  text-decoration: none;
}

.reward-popup__close {
  position: absolute;
  top: 0.35rem;
  right: 0.5rem;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-mute);
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
}

.reward-layer.is-compact {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem max(1rem, env(safe-area-inset-right))
    max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  background: rgb(0 0 0 / 35%);
  pointer-events: auto;
}

.reward-layer.is-compact .reward-popup {
  position: relative;
  inset: auto;
  width: min(100%, 23rem);
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
}

.reward-fade-enter-active,
.reward-fade-leave-active {
  transition: opacity 0.18s ease;
}

.reward-fade-enter-from,
.reward-fade-leave-to {
  opacity: 0;
}
</style>
