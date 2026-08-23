---
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在首页的文章板块中
star: true
---

# 本站搭建步骤

这篇文章记录本站从准备运行环境、连接 GitHub、生成项目，到本地开发和自动部署的完整过程。最初的版本使用 Node.js 16 和较早的 GitHub Actions，现在项目已经升级，因此我沿用原来的搭建顺序，把命令和配置更新为本站目前实际使用的版本。

如果只是想了解网站用了哪些技术，看项目配置即可；本文重点回答的是：**怎样从一台新电脑开始，把这个网站搭建出来并部署上线。**

## **一、安装 Node.js**

::: tip

本站是 VuePress 项目，开发和构建都依赖 Node.js。Windows、macOS 和 Linux 的安装方式不同，但安装完成后的项目命令相同。

当前项目要求 Node.js 不低于 `22.18.0`，GitHub Actions 也固定使用 `22.18.0`。本地和线上使用同一版本，可以减少环境差异造成的构建问题。

:::

### 1. 下载 Node.js

最简单的方式是直接从 [Node.js 官方下载页面](https://nodejs.org/en/download) 安装。Windows 可以使用官方安装包；Linux 可以使用系统包管理器、Node 版本管理工具，也可以下载官方二进制包。

以 Linux x64 为例：

```shell
wget https://nodejs.org/dist/v22.18.0/node-v22.18.0-linux-x64.tar.xz
tar -xJf node-v22.18.0-linux-x64.tar.xz
sudo mv node-v22.18.0-linux-x64 /usr/local/node
```

### 2. 配置环境变量

编辑当前 Shell 使用的配置文件，例如 `~/.bashrc` 或 `/etc/profile`：

```shell
export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH
```

让配置立即生效：

```shell
source ~/.bashrc
```

Windows 使用安装程序时通常会自动配置 PATH。如果终端找不到 `node`，需要检查系统环境变量中是否包含 Node.js 的安装目录。

### 3. 验证 Node.js

```shell
node -v
npm -v
```

本站根目录的 `package.json` 中还有一层版本限制：

```json
{
  "engines": {
    "node": ">=22.18.0"
  }
}
```

如果版本低于要求，应先切换 Node.js 版本，再安装项目依赖。

### 4. 启用 pnpm

本站没有使用 npm 直接管理依赖，而是使用 pnpm。项目已经在 `package.json` 中固定 pnpm `10.12.1`，支持 Corepack 的 Node.js 环境可以执行：

```shell
corepack enable
pnpm -v
```

如果系统没有可用的 Corepack，可以按照 [pnpm 官方安装说明](https://pnpm.io/installation) 安装。最终确认：

```shell
node -v
pnpm -v
```

输出应分别满足 Node.js `>= 22.18.0` 和 pnpm `10.12.1`。

## **二、Git SSH 配置**

::: tip

配置 SSH 后，本地可以使用 SSH 地址拉取和推送 GitHub 仓库，不需要每次输入账号。Windows、macOS 和 Linux 的 Git 命令基本相同。

:::

### 1. 安装并配置 Git

CentOS、Rocky Linux 等系统可以通过包管理器安装：

```shell
sudo yum install git
```

Ubuntu、Debian 可以使用：

```shell
sudo apt install git
```

Windows 可以从 [Git 官方网站](https://git-scm.com/downloads) 安装 Git for Windows。

然后设置提交者信息：

```shell
git config --global user.name "你的 GitHub 用户名"
git config --global user.email "你的邮箱"
git config --list
```

### 2. 生成 SSH 密钥

现在优先使用 Ed25519：

```shell
ssh-keygen -t ed25519 -C "你的邮箱"
```

按提示选择保存位置和密码。生成后会得到私钥和 `.pub` 公钥，**只能把公钥添加到 GitHub，私钥不能上传、提交或发给其他人。**

查看公钥：

```shell
cat ~/.ssh/id_ed25519.pub
```

### 3. 添加到 GitHub

登录 GitHub，依次进入：

```text
Settings → SSH and GPG keys → New SSH key
```

粘贴完整公钥并保存。GitHub 的页面结构以后可能调整，找不到时以 [GitHub SSH 官方说明](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) 为准。

### 4. 验证连接

```shell
ssh -T git@github.com
```

首次连接时会询问是否信任 GitHub 主机，确认指纹无误后输入 `yes`。如果看到认证成功信息，说明 SSH 已经配置完成。

## **三、生成项目**

这一部分分为两种情况：继续维护本站时直接克隆现有仓库；完全从零搭建同类网站时，先使用 Theme Hope 官方模板生成项目。

### 1. 克隆现有的本站

```shell
git clone git@github.com:xwzbupt/personal-site.git
cd personal-site
pnpm install
```

`pnpm install` 会根据 `package.json` 和 `pnpm-lock.yaml` 安装依赖。不要为了处理安装错误直接删除锁文件，因为 GitHub Actions 依靠这份文件复现相同的依赖环境。

### 2. 从零创建一个 Theme Hope 项目

如果没有现成项目，可以按照 [Theme Hope 创建项目说明](https://theme-hope.vuejs.press/get-started/create.html) 执行：

```shell
pnpm create vuepress-theme-hope personal-site
cd personal-site
```

初始化程序会询问项目语言、包管理器、是否启用博客等选项。首次搭建时可以先选择必要功能，确认站点运行后再增加评论、搜索、Markdown 扩展等功能，便于定位问题。

然后把本地项目连接到 GitHub 仓库：

```shell
git init
git branch -M main
git remote add origin git@github.com:你的用户名/personal-site.git
git add .
git commit -m "init: 创建 VuePress 项目"
git push -u origin main
```

### 3. 理解生成后的关键目录

```text
personal-site/
├─ .github/workflows/          # 自动构建与部署脚本
├─ docs/                       # Markdown 文章
│  ├─ .vuepress/
│  │  ├─ components/           # 自定义 Vue 组件
│  │  ├─ layouts/              # 自定义布局
│  │  ├─ public/               # 图片等静态资源
│  │  ├─ styles/               # 自定义样式
│  │  ├─ config.ts             # VuePress 配置
│  │  ├─ theme.ts              # Theme Hope 配置
│  │  ├─ navbar.ts             # 顶部导航
│  │  └─ sidebar.ts            # 侧边栏
│  └─ README.md                # 博客首页
├─ package.json                # 脚本、版本和依赖
└─ pnpm-lock.yaml              # 依赖锁文件
```

本站最核心的三项基础配置是：

```typescript
// docs/.vuepress/config.ts
export default defineUserConfig({
  lang: "zh-CN",
  title: "Weiser",
  description: "weiser的个人网站",
  base: "/",
});
```

如果使用自定义域名或部署在 `用户名.github.io` 根路径，`base` 使用 `/`；如果部署地址是 `用户名.github.io/仓库名/`，则通常要改为 `/仓库名/`。这是部署后 CSS、JavaScript 和图片出现 404 时首先要检查的配置。VuePress 官方也在 [部署说明](https://v2.vuepress.vuejs.org/guide/deployment.html) 中专门说明了这一区别。

### 4. 添加文章和导航

在 `docs` 中新建 Markdown 文件：

```markdown
---
title: 我的第一篇文章
category:
  - 技术
tag:
  - VuePress
---

# 我的第一篇文章

正文内容。
```

文章创建后，还需要按需要加入 `navbar.ts` 或 `sidebar.ts`。导航链接必须与实际文件路径一致，目录首页通常使用该目录下的 `README.md`。

静态图片可以放在 `docs/.vuepress/public` 中。例如：

```text
docs/.vuepress/public/logo.png
```

在配置或文章中通过根路径引用：

```markdown
![Logo](/logo.png)
```

## **四、开发和部署项目**

::: tip

部署方式仍然可以分为下面三种。本站目前采用第 3 种：本地开发，GitHub Actions 自动构建，然后发布到 GitHub Pages。

1. 在云服务器开发、构建并部署；
2. 在本地开发和构建，手工把 `dist` 上传到服务器；
3. 在本地开发，推送源码后由 GitHub Actions 自动构建和部署。

:::

### **4.1 启动本地开发服务器**

进入项目根目录：

```shell
pnpm install
pnpm run docs:dev
```

默认地址通常是：

```text
http://localhost:8080
```

如果 8080 已被占用，VuePress 会选择其他端口，实际地址以终端输出为准。开发服务器支持热更新，修改 Markdown、Vue 组件或样式后，浏览器通常会自动刷新。

缓存造成页面异常时可以执行：

```shell
pnpm run docs:clean-dev
```

### **4.2 本地执行生产构建**

开发页面确认无误后，必须再执行一次生产构建：

```shell
pnpm run docs:build
```

成功后文件会生成到：

```text
docs/.vuepress/dist
```

生产构建会执行服务端渲染，因此有些只在浏览器中运行的代码可能在开发阶段正常、构建阶段失败。自定义组件使用 `window`、`document`、`localStorage` 时，应当确保只在客户端执行。

### **4.3 在云服务器上直接开发和部署**

这种方式需要在服务器上安装 Node.js、pnpm、Git 和 Nginx。构建时会消耗较多内存，小内存服务器可能发生 OOM。虽然可以设置：

```shell
export NODE_OPTIONS=--max_old_space_size=4096
```

但服务器仍要承担依赖安装和构建压力，所以本站不采用这种方式。

### **4.4 本地构建后手工部署**

本地执行 `pnpm run docs:build`，然后把 `docs/.vuepress/dist` 中的内容上传到服务器，将 Nginx 的站点根目录指向该目录。

示例配置：

```nginx
server {
    listen 80;
    server_name example.com;

    root /var/www/personal-site;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

上传后执行 `nginx -t` 检查配置，再重新加载 Nginx。HTTPS 建议通过可信证书和自动续期工具配置。

### **4.5 使用 GitHub Actions 自动构建和部署**

本站的自动部署脚本位于：

```text
.github/workflows/deploy-docs.yml
```

当前流程是：

```text
push 到 main
  → 检出完整 Git 历史
  → 安装 pnpm
  → 设置 Node.js 22.18.0
  → 按锁文件安装依赖
  → 构建 VuePress
  → 检查关键页面
  → 发布到 gh-pages
```

核心配置如下，完整内容以仓库中的工作流文件为准：

```yaml
name: docs

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write

concurrency:
  group: docs-${{ github.ref }}
  cancel-in-progress: true

jobs:
  docs:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    env:
      NODE_OPTIONS: --max_old_space_size=4096

    steps:
      - uses: actions/checkout@v7
        with:
          fetch-depth: 0

      - name: 设置 pnpm
        uses: pnpm/action-setup@v6

      - name: 设置 Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 22.18.0
          cache: pnpm

      - name: 安装依赖
        run: pnpm install --frozen-lockfile

      - name: 构建 VuePress 站点
        run: pnpm docs:build

      - name: 部署到 GitHub Pages
        if: github.event_name != 'pull_request'
        uses: crazy-max/ghaction-github-pages@v5
        with:
          target_branch: gh-pages
          build_dir: docs/.vuepress/dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

这里需要注意：

1. Pull Request 只构建不部署，用来提前发现错误；
2. `fetch-depth: 0` 为文章更新时间等 Git 信息保留完整历史；
3. `--frozen-lockfile` 要求 `package.json` 和 `pnpm-lock.yaml` 一致；
4. `contents: write` 允许部署 Action 更新 `gh-pages`；
5. `concurrency` 防止同一分支的多个部署互相覆盖；
6. Action 升级不能只改版本号，需要查看它的升级说明和 Node 运行时要求。

GitHub 会识别 `.github/workflows` 中的 YAML 文件，构建和部署状态可以在仓库的 Actions 页面查看。GitHub Actions 的基本概念见 [官方快速入门](https://docs.github.com/en/actions/get-started/quickstart)。

### **4.6 配置 GitHub Pages 和自定义域名**

工作流首次成功后，在仓库的 Settings → Pages 中确认发布来源与 `gh-pages` 分支一致。

使用自定义域名时，还要配置：

1. 域名 DNS 解析；
2. GitHub Pages 中的 Custom domain；
3. 部署分支中的 `CNAME`；
4. `theme.ts` 中的 `hostname`；
5. `config.ts` 中的 `base: "/"`。

本站使用 `https://weiser.fun`，自定义域名的解析、验证和 HTTPS 规则以 [GitHub Pages 官方说明](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) 为准。

## **五、TroubleShooting**

### 1. `pnpm install` 提示锁文件过期

如果出现 `ERR_PNPM_OUTDATED_LOCKFILE`，说明 `package.json` 和 `pnpm-lock.yaml` 不一致。本地执行：

```shell
pnpm install
```

确认依赖变化无误后，把两个文件一起提交。不要在 GitHub Actions 中关闭锁文件检查来绕过问题。

### 2. 本地能打开，线上资源 404

依次检查：

- `base` 是否与部署地址一致；
- 文件名大小写是否完全一致；
- 图片是否位于正确目录；
- 导航链接是否指向真实 Markdown 页面；
- `dist` 中是否生成了目标 HTML。

Windows 通常不区分文件名大小写，而 GitHub Actions 使用 Linux，因此大小写错误经常只在线上出现。

### 3. 构建时内存不足

先关闭无关程序，再确认工作流或终端中设置：

```shell
NODE_OPTIONS=--max_old_space_size=4096
```

如果仍然失败，需要检查是否一次性打包了过大的图片、图表库或代码模块，而不是持续提高内存上限。

### 4. Git 无法连接 `127.0.0.1:7890`

如果看到：

```text
Failed to connect to 127.0.0.1 port 7890
```

说明 Git 配置了本地代理，但代理程序没有在对应端口运行。先检查：

```shell
git config --global --get http.proxy
git config --global --get https.proxy
```

确认不再使用代理时再移除：

```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

如果本来就需要代理，应当启动代理或改为实际端口，而不是直接删除配置。

### 5. GitHub Actions 成功，但网页没有更新

检查下面几项：

1. 部署步骤是否因为 Pull Request 而被跳过；
2. `gh-pages` 分支是否产生新提交；
3. GitHub Pages 发布来源是否正确；
4. 自定义域名和 `CNAME` 是否仍然存在；
5. 浏览器或 CDN 是否缓存了旧文件。

## **六、以后更新本站的固定流程**

完成第一次搭建后，日常更新只需要重复下面的步骤：

```shell
git pull
pnpm install
pnpm run docs:dev

# 写文章或修改配置后
pnpm run docs:build
git status
git diff
git add .
git commit -m "docs: 更新网站内容"
git push origin main
```

推送以后，进入 GitHub Actions 页面确认构建和部署成功，再打开线上网站检查首页、修改过的文章、导航和移动端页面。这样从本地开发、生产构建到线上部署，整个搭建与更新流程就闭环了。
