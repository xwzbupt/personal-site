<template>
  <div class="project-portfolio">
    <header class="project-portfolio__intro">
      <div class="project-portfolio__copy">
        <span class="project-portfolio__eyebrow">PROJECTS &amp; PRACTICE</span>
        <h1>项目与实践</h1>
        <p>工程系统、数据平台与 AI 运维的实践记录。</p>
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
        <a class="project-portfolio__back" href="/">返回博客主页</a>
      </div>
    </header>

    <section class="project-group" aria-labelledby="work-projects-title">
      <header class="project-group__header">
        <div class="project-group__title">
          <span aria-hidden="true">01</span>
          <h2 id="work-projects-title">工作项目</h2>
        </div>
        <p>以下介绍均已脱敏，仅展示通用问题、技术方案与个人工作。</p>
      </header>

      <div class="project-card-grid">
        <a class="portfolio-card portfolio-card--work" href="/project/simulation-control-system/">
          <span class="portfolio-card__arrow" aria-hidden="true">↗</span>
          <div class="portfolio-card__body">
            <span class="portfolio-card__type">分布式控制 · 状态管理</span>
            <h3>仿真控制系统</h3>
            <p>将分散的节点操作收敛为可配置、可编排、可追踪的标准流程，形成命令、状态与数据闭环。</p>
          </div>
          <div class="portfolio-card__tags" aria-label="相关技术">
            <span>Java</span><span>Netty</span><span>状态机</span><span>任务编排</span>
          </div>
        </a>

        <a class="portfolio-card portfolio-card--work" href="/project/federated-query-platform/">
          <span class="portfolio-card__arrow" aria-hidden="true">↗</span>
          <div class="portfolio-card__body">
            <span class="portfolio-card__type">数据平台 · 联邦查询</span>
            <h3>多源异构数据联邦查询平台</h3>
            <p>以统一 SQL 连接多类数据源，通过查询下推、权限治理与分层缓存优化跨源分析链路。</p>
          </div>
          <div class="portfolio-card__tags" aria-label="相关技术">
            <span>Presto</span><span>Connector</span><span>Alluxio</span><span>数据治理</span>
          </div>
        </a>

        <a class="portfolio-card portfolio-card--work" href="/project/ai-virtualization-ops/">
          <span class="portfolio-card__arrow" aria-hidden="true">↗</span>
          <div class="portfolio-card__body">
            <span class="portfolio-card__type">AI 运维 · 虚拟化管理</span>
            <h3>AI 虚拟化平台智能运维</h3>
            <p>以受控 Agent 连接虚拟化资源，覆盖智能放置、任务编排、故障诊断与容量治理。</p>
          </div>
          <div class="portfolio-card__tags" aria-label="相关技术">
            <span>LLM Agent</span><span>oVirt</span><span>工作流</span><span>AIOps</span>
          </div>
        </a>
      </div>
    </section>

    <section class="project-group" aria-labelledby="personal-projects-title">
      <header class="project-group__header">
        <div class="project-group__title">
          <span aria-hidden="true">02</span>
          <h2 id="personal-projects-title">个人探索</h2>
        </div>
        <p>围绕工程设计、知识整理与自动化发布进行的长期实践。</p>
      </header>

      <div class="project-card-grid">
        <a class="portfolio-card portfolio-card--personal" href="/about/guide.html">
          <span class="portfolio-card__arrow" aria-hidden="true">↗</span>
          <div class="portfolio-card__body">
            <span class="portfolio-card__type">内容系统 · 自动化发布</span>
            <h3>个人网站与知识库</h3>
            <p>基于 VuePress 构建持续维护的个人知识库，并通过 GitHub Actions 完成自动构建与部署。</p>
          </div>
          <div class="portfolio-card__tags" aria-label="相关技术">
            <span>VuePress</span><span>TypeScript</span><span>GitHub Actions</span>
          </div>
        </a>
      </div>
    </section>

    <section class="project-group" aria-labelledby="open-source-projects-title">
      <header class="project-group__header">
        <div class="project-group__title">
          <span aria-hidden="true">03</span>
          <h2 id="open-source-projects-title">开源项目贡献</h2>
        </div>
        <p>记录参与开源社区、代码贡献与协作实践。</p>
      </header>

      <div class="project-empty-state">
        <span class="project-empty-state__icon" aria-hidden="true">⌁</span>
        <div>
          <strong>暂未收录</strong>
          <p>这里将用于展示未来参与的开源项目和实际贡献。</p>
        </div>
      </div>
    </section>
  </div>
</template>
