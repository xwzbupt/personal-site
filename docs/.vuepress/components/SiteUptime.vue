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
  lastCommitAt?: string;
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

const durationText = computed(
  () =>
    `${duration.value.years}年${duration.value.months}月${duration.value.days}天` +
    `${duration.value.hours}小时${duration.value.minutes}分${duration.value.seconds}秒`,
);

const accessibleText = computed(() => `本站已运行 ${durationText.value}`);

const lastCommitText = computed(() => {
  if (!props.lastCommitAt) return "";

  const timestamp = Date.parse(props.lastCommitAt);
  if (!Number.isFinite(timestamp)) return "";

  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(timestamp);
  const value = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

  return `${value.year}-${value.month}-${value.day} ${value.hour}:${value.minute}:${value.second}`;
});

const fullAccessibleText = computed(() =>
  lastCommitText.value
    ? `${accessibleText.value}，最后一次提交 ${lastCommitText.value}`
    : accessibleText.value,
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
  <div class="site-uptime" role="timer" :aria-label="fullAccessibleText">
    <div class="site-uptime__duration">
      <span class="site-uptime__prefix">本站已运行</span>
      <span class="site-uptime__value" aria-hidden="true">{{ durationText }}</span>
    </div>
    <span v-if="lastCommitText" class="site-uptime__commit" aria-hidden="true">
      最后一次提交：{{ lastCommitText }}
    </span>
  </div>
</template>

<style scoped>
.site-uptime {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.35rem;
  margin: 2.6rem auto 0;
  color: inherit;
  font-family: var(--vp-font-heading);
  text-shadow: 0 1px 6px rgb(0 0 0 / 35%);
}

.site-uptime__duration {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.7rem;
}

.site-uptime__prefix {
  font-size: 1rem;
  letter-spacing: 0.12em;
  white-space: nowrap;
}

.site-uptime__value {
  font-size: 0.96rem;
  letter-spacing: 0.025em;
  line-height: 1.6;
  font-variant-numeric: tabular-nums;
}

.site-uptime__commit {
  font-size: 0.78rem;
  letter-spacing: 0.025em;
  line-height: 1.6;
  opacity: 0.82;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 719px) {
  .site-uptime {
    width: min(94vw, 36rem);
    gap: 0.55rem;
    margin-top: 1.8rem;
  }

  .site-uptime__duration {
    gap: 0.55rem;
  }

  .site-uptime__prefix {
    font-size: 0.88rem;
  }

  .site-uptime__value {
    font-size: 0.82rem;
  }

  .site-uptime__commit {
    font-size: 0.76rem;
  }
}
</style>
