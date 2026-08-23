<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

interface DurationParts {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const props = defineProps<{
  startAt: string;
}>();

const SHANGHAI_OFFSET = 8 * 60 * 60 * 1000;
const EMPTY_DURATION: DurationParts = {
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const duration = ref<DurationParts>({ ...EMPTY_DURATION });
let timer: number | undefined;

const addCalendarTime = (
  timestamp: number,
  years: number,
  months: number,
): number => {
  const date = new Date(timestamp + SHANGHAI_OFFSET);

  return (
    Date.UTC(
      date.getUTCFullYear() + years,
      date.getUTCMonth() + months,
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      date.getUTCMilliseconds(),
    ) - SHANGHAI_OFFSET
  );
};

const getDuration = (now: number): DurationParts => {
  const start = Date.parse(props.startAt);

  if (!Number.isFinite(start) || now <= start) return { ...EMPTY_DURATION };

  const startInShanghai = new Date(start + SHANGHAI_OFFSET);
  const nowInShanghai = new Date(now + SHANGHAI_OFFSET);
  let years = nowInShanghai.getUTCFullYear() - startInShanghai.getUTCFullYear();

  if (addCalendarTime(start, years, 0) > now) years -= 1;

  const afterYears = new Date(
    addCalendarTime(start, years, 0) + SHANGHAI_OFFSET,
  );
  let months =
    (nowInShanghai.getUTCFullYear() - afterYears.getUTCFullYear()) * 12 +
    nowInShanghai.getUTCMonth() -
    afterYears.getUTCMonth();

  if (addCalendarTime(start, years, months) > now) months -= 1;

  let remaining = now - addCalendarTime(start, years, months);
  const days = Math.floor(remaining / 86_400_000);
  remaining %= 86_400_000;
  const hours = Math.floor(remaining / 3_600_000);
  remaining %= 3_600_000;
  const minutes = Math.floor(remaining / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1000);

  return { years, months, days, hours, minutes, seconds };
};

const units = computed(() => [
  { key: "years", label: "年", value: String(duration.value.years) },
  { key: "months", label: "月", value: String(duration.value.months) },
  { key: "days", label: "天", value: String(duration.value.days) },
  { key: "hours", label: "时", value: String(duration.value.hours).padStart(2, "0") },
  {
    key: "minutes",
    label: "分",
    value: String(duration.value.minutes).padStart(2, "0"),
  },
  {
    key: "seconds",
    label: "秒",
    value: String(duration.value.seconds).padStart(2, "0"),
  },
]);

const accessibleText = computed(
  () =>
    `本站已运行 ${duration.value.years}年${duration.value.months}月${duration.value.days}天` +
    `${duration.value.hours}小时${duration.value.minutes}分${duration.value.seconds}秒`,
);

const updateDuration = (): void => {
  duration.value = getDuration(Date.now());
};

onMounted(() => {
  updateDuration();
  timer = window.setInterval(updateDuration, 1000);
});

onBeforeUnmount(() => {
  if (timer !== undefined) window.clearInterval(timer);
});
</script>

<template>
  <div class="site-uptime" role="timer" :aria-label="accessibleText">
    <span class="site-uptime__prefix">本站已运行</span>
    <span class="site-uptime__units" aria-hidden="true">
      <span v-for="unit in units" :key="unit.key" class="site-uptime__unit">
        <span class="site-uptime__digits">
          <span
            v-for="(digit, index) in unit.value"
            :key="`${unit.key}-${index}`"
            class="site-uptime__digit-slot"
          >
            <Transition name="uptime-flip">
              <span :key="digit" class="site-uptime__digit">{{ digit }}</span>
            </Transition>
          </span>
        </span>
        <span class="site-uptime__label">{{ unit.label }}</span>
      </span>
    </span>
  </div>
</template>

<style scoped>
.site-uptime {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin: 2.6rem auto 0;
  color: inherit;
  font-family: var(--vp-font-heading);
  text-shadow: 0 1px 6px rgb(0 0 0 / 35%);
}

.site-uptime__prefix {
  font-size: 1rem;
  letter-spacing: 0.12em;
  white-space: nowrap;
}

.site-uptime__units {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.48rem;
}

.site-uptime__unit,
.site-uptime__digits {
  display: inline-flex;
  align-items: center;
}

.site-uptime__digits {
  gap: 0.12rem;
}

.site-uptime__digit-slot {
  position: relative;
  width: 1.15rem;
  height: 1.72rem;
  perspective: 10rem;
}

.site-uptime__digit {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgb(255 255 255 / 28%);
  border-radius: 0.24rem;
  background:
    linear-gradient(to bottom, rgb(255 255 255 / 22%) 49%, transparent 50%),
    rgb(10 20 30 / 38%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 18%);
  color: #fff;
  font-weight: 700;
  font-size: 1.02rem;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  backface-visibility: hidden;
  transform-origin: center;
}

.site-uptime__digit::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  left: 0;
  height: 1px;
  background: rgb(0 0 0 / 32%);
}

.site-uptime__label {
  margin-left: 0.16rem;
  font-size: 0.88rem;
}

.uptime-flip-enter-active,
.uptime-flip-leave-active {
  transition:
    transform 0.48s cubic-bezier(0.22, 0.72, 0.22, 1),
    opacity 0.32s ease;
}

.uptime-flip-enter-from {
  opacity: 0;
  transform: rotateX(92deg);
}

.uptime-flip-leave-to {
  opacity: 0;
  transform: rotateX(-92deg);
}

@media (max-width: 719px) {
  .site-uptime {
    width: min(94vw, 36rem);
    gap: 0.55rem;
    margin-top: 1.8rem;
  }

  .site-uptime__prefix {
    width: 100%;
    font-size: 0.88rem;
  }

  .site-uptime__units {
    gap: 0.3rem;
  }

  .site-uptime__digit-slot {
    width: 0.98rem;
    height: 1.5rem;
  }

  .site-uptime__digit {
    font-size: 0.9rem;
  }

  .site-uptime__label {
    font-size: 0.76rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .uptime-flip-enter-active,
  .uptime-flip-leave-active {
    transition: none;
  }
}
</style>
