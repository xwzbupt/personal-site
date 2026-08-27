<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bot,
  Database,
  GitPullRequest,
  Maximize2,
  ServerCog,
  X,
} from "@lucide/vue";
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  type Component,
} from "vue";

interface ProjectItem {
  id: string;
  href: string;
  kind: "work" | "personal";
  type: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  image640: string;
  fullImage: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  eager?: boolean;
  abstract: string;
  icon: Component;
}

const projects: ProjectItem[] = [
  {
    id: "01",
    href: "/project/simulation-control-system/",
    kind: "work",
    type: "分布式控制 · 状态管理",
    title: "仿真控制系统",
    description:
      "将多节点人工操作固化为阶段化流程，以回执、幂等和两级状态收敛保证跨平台任务可靠推进。",
    tags: ["Java", "Netty", "状态机", "任务编排"],
    image: "/images/projects/simulation-control-960.webp",
    image640: "/images/projects/simulation-control-640.webp",
    fullImage: "/images/projects/simulation-control.png",
    imageAlt: "仿真控制系统架构预览图",
    imageWidth: 960,
    imageHeight: 540,
    eager: true,
    abstract:
      "基于 Java、Netty、阶段状态机与节点代理，打通参数准备、软件启停、状态确认、数据采集和多轮调度，让异构节点从分散操作走向统一编排。",
    icon: ServerCog,
  },
  {
    id: "02",
    href: "/project/federated-query-platform/",
    kind: "work",
    type: "数据平台 · 联邦查询",
    title: "多源异构数据联邦查询平台",
    description:
      "以 Presto 统一查询多类数据源，通过 Connector 下推、细粒度权限和可回退缓存治理跨源分析链路。",
    tags: ["Presto", "Connector", "Alluxio", "数据治理"],
    image: "/images/projects/federated-query-960.webp",
    image640: "/images/projects/federated-query-640.webp",
    fullImage: "/images/projects/federated-query.png",
    imageAlt: "多源异构数据联邦查询平台架构预览图",
    imageWidth: 960,
    imageHeight: 540,
    abstract:
      "在不搬迁原始数据的前提下，以 Neo4j Connector 补齐图数据接入，并通过 Alluxio 动态路由、准入控制和安全回源优化热点文件访问。",
    icon: Database,
  },
  {
    id: "03",
    href: "/project/ai-virtualization-ops/",
    kind: "work",
    type: "AI 运维 · 虚拟化管理",
    title: "AI 虚拟化平台智能运维",
    description:
      "以受控 Agent 连接虚拟化资源，覆盖智能放置、任务编排、故障诊断与容量治理。",
    tags: ["LLM Agent", "oVirt", "工作流", "AIOps"],
    image: "/images/projects/ai-operations-960.webp",
    image640: "/images/projects/ai-operations-640.webp",
    fullImage: "/images/projects/ai-operations.png",
    imageAlt: "AI 虚拟化平台智能运维架构预览图",
    imageWidth: 960,
    imageHeight: 679,
    abstract:
      "将自然语言运维、受控工具调用、工作流编排和虚拟资源调度串联起来，使运维过程可审计、可恢复并支持容量治理。",
    icon: Bot,
  },
  {
    id: "04",
    href: "/about/guide.html",
    kind: "personal",
    type: "内容系统 · 自动化发布",
    title: "个人网站与知识库",
    description:
      "基于 VuePress 构建持续维护的个人知识库，并通过 GitHub Actions 完成自动构建与部署。",
    tags: ["VuePress", "TypeScript", "GitHub Actions"],
    image: "/images/projects/personal-site-960.webp",
    image640: "/images/projects/personal-site-640.webp",
    fullImage: "/images/projects/personal-site.png",
    imageAlt: "Weiser 个人网站首页预览图",
    imageWidth: 960,
    imageHeight: 476,
    abstract:
      "以 VuePress 管理长期知识内容，结合自动构建、GitHub Pages 与自定义域名形成持续发布链路，并持续优化阅读与跨端体验。",
    icon: BookOpen,
  },
];

const workProjects = projects.filter(({ kind }) => kind === "work");
const personalProjects = projects.filter(({ kind }) => kind === "personal");

const portfolioRoot = ref<HTMLElement>();
const activePreview = ref<ProjectItem>();
const closeButton = ref<HTMLButtonElement>();
let previewTrigger: HTMLElement | undefined;
let revealObserver: IntersectionObserver | undefined;
let previousBodyOverflow = "";

const openPreview = async (
  project: ProjectItem,
  event: MouseEvent,
): Promise<void> => {
  previewTrigger = event.currentTarget as HTMLElement;
  activePreview.value = project;
  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  await nextTick();
  closeButton.value?.focus();
};

const closePreview = async (): Promise<void> => {
  if (!activePreview.value) return;
  activePreview.value = undefined;
  document.body.style.overflow = previousBodyOverflow;
  await nextTick();
  previewTrigger?.focus();
  previewTrigger = undefined;
};

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === "Escape") void closePreview();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);

  const root = portfolioRoot.value;
  if (!root) return;

  const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  root.classList.add("has-reveal-motion");
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver?.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -9%", threshold: 0.12 },
  );

  targets.forEach((target) => revealObserver?.observe(target));
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  revealObserver?.disconnect();
  document.body.style.overflow = previousBodyOverflow;
});
</script>

<template>
  <div ref="portfolioRoot" class="project-portfolio">
    <header class="project-portfolio__intro" data-reveal>
      <div class="project-portfolio__copy">
        <span class="project-portfolio__eyebrow">PROJECTS &amp; PRACTICE</span>
        <h1>项目与实践</h1>
        <p>记录持续探索、亲手构建与长期迭代的项目实践。</p>
      </div>
      <div class="project-portfolio__summary" aria-label="项目统计">
        <div class="project-portfolio__metric">
          <strong>03</strong>
          <span>工作项目</span>
        </div>
        <div class="project-portfolio__metric">
          <strong>01</strong>
          <span>个人探索</span>
        </div>
        <div class="project-portfolio__metric">
          <strong>00</strong>
          <span>开源贡献</span>
        </div>
        <a class="project-portfolio__back" href="/">
          <ArrowLeft :size="16" :stroke-width="1.75" aria-hidden="true" />
          <span>返回博客主页</span>
        </a>
      </div>
    </header>

    <section class="project-group" aria-labelledby="work-projects-title">
      <header class="project-group__header" data-reveal>
        <div class="project-group__title">
          <span aria-hidden="true">01</span>
          <h2 id="work-projects-title">工作项目</h2>
        </div>
        <p>以下介绍均已脱敏，仅展示通用问题、技术方案与个人工作。</p>
      </header>

      <div class="project-card-grid">
        <article
          v-for="(project, index) in workProjects"
          :key="project.id"
          class="portfolio-card portfolio-card--work"
          :data-index="project.id"
          data-reveal
          :style="{ '--reveal-order': index }"
        >
          <a
            class="portfolio-card__main-link"
            :href="project.href"
            :aria-label="`查看项目：${project.title}`"
          />
          <ArrowRight
            class="portfolio-card__arrow"
            :size="20"
            :stroke-width="1.75"
            aria-hidden="true"
          />
          <div class="portfolio-card__content">
            <div class="portfolio-card__body">
              <span class="portfolio-card__type">
                <component
                  :is="project.icon"
                  class="portfolio-card__type-icon"
                  :size="16"
                  :stroke-width="1.75"
                  aria-hidden="true"
                />
                {{ project.type }}
              </span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
            <div class="portfolio-card__tags" aria-label="相关技术">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
          <div class="portfolio-card__media portfolio-card__media--image">
            <img
              :src="project.image"
              :srcset="`${project.image640} 640w, ${project.image} 960w`"
              sizes="(max-width: 719px) calc(100vw - 5rem), 22rem"
              :alt="project.imageAlt"
              :width="project.imageWidth"
              :height="project.imageHeight"
              :loading="project.eager ? 'eager' : 'lazy'"
              :fetchpriority="project.eager ? 'high' : undefined"
              decoding="async"
            />
            <div class="portfolio-card__abstract">
              <span>项目摘要</span>
              <p>{{ project.abstract }}</p>
            </div>
            <button
              class="portfolio-card__preview-button"
              type="button"
              :aria-label="`放大查看${project.title}架构图`"
              @click="openPreview(project, $event)"
            >
              <Maximize2 :size="17" :stroke-width="1.75" aria-hidden="true" />
            </button>
          </div>
        </article>
      </div>
    </section>

    <section class="project-group" aria-labelledby="personal-projects-title">
      <header class="project-group__header" data-reveal>
        <div class="project-group__title">
          <span aria-hidden="true">02</span>
          <h2 id="personal-projects-title">个人探索</h2>
        </div>
        <p>围绕工程设计、知识整理与自动化发布进行的长期实践。</p>
      </header>

      <div class="project-card-grid">
        <article
          v-for="(project, index) in personalProjects"
          :key="project.id"
          class="portfolio-card portfolio-card--personal"
          :data-index="project.id"
          data-reveal
          :style="{ '--reveal-order': index }"
        >
          <a
            class="portfolio-card__main-link"
            :href="project.href"
            :aria-label="`查看项目：${project.title}`"
          />
          <ArrowRight
            class="portfolio-card__arrow"
            :size="20"
            :stroke-width="1.75"
            aria-hidden="true"
          />
          <div class="portfolio-card__content">
            <div class="portfolio-card__body">
              <span class="portfolio-card__type">
                <component
                  :is="project.icon"
                  class="portfolio-card__type-icon"
                  :size="16"
                  :stroke-width="1.75"
                  aria-hidden="true"
                />
                {{ project.type }}
              </span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
            <div class="portfolio-card__tags" aria-label="相关技术">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
          <div class="portfolio-card__media portfolio-card__media--image">
            <img
              :src="project.image"
              :srcset="`${project.image640} 640w, ${project.image} 960w`"
              sizes="(max-width: 719px) calc(100vw - 5rem), 22rem"
              :alt="project.imageAlt"
              :width="project.imageWidth"
              :height="project.imageHeight"
              loading="lazy"
              decoding="async"
            />
            <div class="portfolio-card__abstract">
              <span>项目摘要</span>
              <p>{{ project.abstract }}</p>
            </div>
            <button
              class="portfolio-card__preview-button"
              type="button"
              :aria-label="`放大查看${project.title}预览图`"
              @click="openPreview(project, $event)"
            >
              <Maximize2 :size="17" :stroke-width="1.75" aria-hidden="true" />
            </button>
          </div>
        </article>
      </div>
    </section>

    <section class="project-group" aria-labelledby="open-source-projects-title">
      <header class="project-group__header" data-reveal>
        <div class="project-group__title">
          <span aria-hidden="true">03</span>
          <h2 id="open-source-projects-title">开源项目贡献</h2>
        </div>
        <p>记录参与开源社区、代码贡献与协作实践。</p>
      </header>

      <div class="project-empty-state" data-reveal>
        <span class="project-empty-state__icon" aria-hidden="true">
          <GitPullRequest :size="20" :stroke-width="1.75" />
        </span>
        <div>
          <strong>暂未收录</strong>
          <p>这里将用于展示未来参与的开源项目和实际贡献。</p>
        </div>
      </div>
    </section>
  </div>

  <Teleport to="body">
    <Transition name="project-preview">
      <div
        v-if="activePreview"
        class="project-preview"
        role="presentation"
        @click.self="closePreview"
      >
        <section
          class="project-preview__dialog"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`project-preview-${activePreview.id}`"
        >
          <header class="project-preview__header">
            <div>
              <span>架构与界面预览</span>
              <h2 :id="`project-preview-${activePreview.id}`">
                {{ activePreview.title }}
              </h2>
            </div>
            <button
              ref="closeButton"
              class="project-preview__close"
              type="button"
              aria-label="关闭大图预览"
              @click="closePreview"
            >
              <X :size="20" :stroke-width="1.75" aria-hidden="true" />
            </button>
          </header>
          <div class="project-preview__canvas">
            <img
              :src="activePreview.fullImage"
              :alt="activePreview.imageAlt"
              decoding="async"
            />
          </div>
          <p class="project-preview__abstract">{{ activePreview.abstract }}</p>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>
