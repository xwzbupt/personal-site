---
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在首页的文章板块中
star: true
---

# 本站搭建步骤

## **一、安装Node.js**

::: tip

安装node.js是在CentOS7上的步骤，在windows的环境下同理，安装后需要配置环境变量。

建议安装最新的LTS版本的Node.js

:::

1. 下载node

**必须安装12以上的版本，这里我选择了最新的LTS版本，v16**

```shell
wget https://registry.npmmirror.com/-/binary/node/v16.15.0/node-v16.15.0-linux-x64.tar.gz
```

2. 解压并重命名文件夹

```shell
tar -xvf node-v16.15.0-linux-x64.tar.gz
mv node-v16.15.0-linux-x64 node
```

3. 添加环境变量

```shell
vim /etc/profile

export NODE_HOME=/usr/local/node  
export PATH=$NODE_HOME/bin:$PATH

source /etc/profile
```

4. 验证结果

```shell
node -v
npm -v
#发现npm的版本是6，需要升级到8
npm install npm -g
```

## **二、git ssh配置**

::: tip

git ssh配置是CentOS7上的操作，windows同理。

:::

1. 将git和github个人信息进行绑定：

```bash
yum install git
git config --global user.name "xwzbupt"
git config --global user.email "xwze@bupt.cn"
git config --list
```

2. 生成公钥：

```bash
ssh-keygen -t rsa -C "xwze@bupt.cn"
cd ~/.ssh
vim id_rsa.pub
```

3. 打开github个人账号，在设置中找到github ssh，然后粘贴密钥信息。
4. 验证是否成功

```bash
ssh -T git@github.com
```

配置这一步的目的是，不再需要在机器上进行繁琐的github账号的验证工作。

## **三、生成项目**

在github上创建仓库`personal-site`，然后选择ssh的方式克隆到本地，此时就已经将local和remote端连起来了。

选择项目放置的路径，在该路径下运行如下命令，拉取github的空项目以及将local和remote端连起来。

```bash
git clone git@github.com:xwzbupt/personal-site.git
```

进入该空项目的路径中，初始化该项目。初始化以及后续的开发步骤见[网站开发步骤](./devguide)。

开发完毕后，可以运行`pnpm docs:dev`来生成开发服务器，接着就可以通过浏览器访问`localhost:8080`来访问网站了。此时如果修改了源代码，保存代码后开发服务器也会进行热更新。

如果在开发环境中看到项目无误后，可以构建项目进行布署。构建项目的命令是`pnpm docs:build`。

## **四、 开发和布署项目**

::: tip

**有三种布署项目的方式，其中最推荐的也是我采用的方式是3。**

1. 云服务器上开发和构建，并布署在云服务器上
1. 在本地操作系统开发和构建，将build后的dist目录中的内容布署到云服务器上
1. 在本地操作系统开发，利用Github Actions在Github上构建，并将build后的dist目录放到gh-pages分支上。此时可以选择布署到Github Pages上，也可以在云服务器上拉取该分支内容并部署到该云服务器上。**该步骤均为脚本自动执行。**

:::

### **4.1 CentOS上开发、构建和布署**

在云服务器上开发，需要在云服务器上配置NodeJS以及pnpm的环境，但是在构建项目的时候，云服务器的内存太小，会出现OOM的问题，虽然可以修改环境变量调整某个参数，这样不仅麻烦但还是有失败的可能。所以不太推荐用这种方法来开发。

### **4.2 本地开发，手动构建和布署**

在本地开发项目，使用`pnpm docs:dev`生成开发服务器，访问`localhost:8080`预览网站，准确无误后执行`pnpm docs:build`命令构建项目。将构建好的dist目录扔到云服务器中，将Nginx服务器的root指向该dist文件夹。

### **4.3 本地开发，自动构建和布署**

在本地开发项目，使用`pnpm docs:dev`生成开发服务器，访问`localhost:8080`预览网站，无误后将代码push到github仓库中，github actions会自动执行yml脚本。脚本代码如下所示：

```yaml
name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - main

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true


      - name: 安装 pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 7
          run_install: true


      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: pnpm

      - name: 安装依赖
        run: pnpm install --frozen-lockfile
      
      # - name: 安装typescript
      #   run: pnpm install typescript

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=4096
        run: pnpm run docs:build

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: docs/.vuepress/dist

      # 切换分支
      - name: Checkout
        uses: actions/checkout@master
        with:
          ref: gh-pages

	  # 下面secrets的静态变量对应的内容需要在github配置
      - name: Deploy to Aliyun Server
        uses: easingthemes/ssh-deploy@v2.1.5
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_KEY }}
          ARGS: "-avz --delete"
          SOURCE: ${{ secrets.SOURCE }}
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.USER_NAME }}
          TARGET: ${{ secrets.TARGET }}

```

配置nginx相关信息可以参考[这一篇博客](https://blog.csdn.net/m0_49868348/article/details/118021532)，唯一需要注意一点的是，github仓库中gh-pages分支存放的就是dist文件夹的东西，切换到该分支，将该分支pull到云服务器中，修改nginx的conf文件，将root指向dist。

## 五、TroubleShooting

https://github.com/easingthemes/ssh-deploy/issues/18
