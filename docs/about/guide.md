

# 本站搭建步骤

## 一、安装Node.js

> 安装node.js是在CentOS7上的步骤，在windows的环境下同理，安装后需要配置环境变量。
>
> 建议安装最新的LTS版本的Node.js

1. 安装gcc

```shell
yum install gcc gcc-c++
```

2. 下载node

**必须安装12以上的版本，这里我选择了最新的LTS版本，v16**

```shell
wget https://registry.npmmirror.com/-/binary/node/v16.15.0/node-v16.15.0-linux-x64.tar.gz
```

3. 解压并重命名文件夹

```shell
tar -xvf node-v16.15.0-linux-x64.tar.gz
mv node-v16.15.0-linux-x64 node
```

4. 添加环境变量

```shell
vim /etc/profile

export NODE_HOME=/usr/local/node  
export PATH=$NODE_HOME/bin:$PATH

source /etc/profile
```

5. 验证结果

```shell
node -v
npm -v
#发现npm的版本是6，需要升级到8
npm install npm -g
```

## 二、git ssh配置

> git ssh配置是CentOS7上的操作，windows同理。

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

## 三、生成项目

在github上创建仓库`personal-site`，然后选择ssh的方式克隆到本地，此时就已经将local和remote端连起来了。

选择项目放置的路径，在该路径下运行如下命令，拉取github的空项目以及将local和remote端连起来。

```bash
git clone git@github.com:xwzbupt/personal-site.git
```

进入该空项目的路径中，初始化该项目。初始化以及后续的开发步骤见[网站开发步骤](./devguide)。

开发完毕后，可以运行`pnpm docs:dev`来生成开发服务器，接着就可以通过浏览器访问`localhost:8080`来访问网站了。此时如果修改了源代码，保存代码后开发服务器也会进行热更新。

如果在开发服务器上看到项目无误后，可以构建项目进行布署。构建项目的命令是`pnpm docs:build`。

## 四、 布署项目

>有三种布署项目的方式：
>
>1. CentOS上开发和构建，并布署在云服务器上
>1. 在本地操作系统开发和构建，将build后的dist目录中的内容布署到云服务器上
>1. 在本地操作系统开发，利用Github Actions在Github上构建，并将build后的dist目录放到gh-pages分支上。此时可以选择布署到Github Pages上，也可以在云服务器上拉取该分支内容并部署到该云服务器上。

### 4.1 CentOS上开发、构建和布署

