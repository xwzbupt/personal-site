---
category: 折腾

---

# **青龙面板**

::: tip

**使用青龙面板挂载脚本，自动化执行京东定时任务，自动获取京豆**

[qinglong](https://github.com/whyour/qinglong)是github的开源项目，支持多种语言的定时任务管理软件，我们的京东脚本就定时地、自动化地跑在该平台上。

:::

## **一、安装**

使用CentOS 7的系统，笔者使用的是CentOS 7.9。**如果使用的是云服务器，需要在安全组中开放5700端口。**

```bash
yum update -y
```

安装docker：

```shell
# 一直按enter键可以默认所有操作
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/DockerInstallation.sh)
```

::: warning

不要使用github的qinglong最新版本，因为跟脚本的适配性不够好，很多脚本会执行失败。**推荐2.11.X版本，笔者使用的是2.11.0版本，可以使用下面的命令自动安装。**

:::

安装qinglong的docker镜像：

```shell
# 一直按enter键可以默认所有操作
wget -q https://yanyu.ltd/https://raw.githubusercontent.com/yanyuwangluo/VIP/main/Scripts/sh/ql.sh -O ql.sh && bash ql.sh
```

安装完毕后，在浏览器访问`ip:5700`，即可进入青龙面板的图形化界面。配置自己的账号密码，如果有通知的需要，来配置相关信息。

## **二、qinglong中的配置**

### **拉脚本库**

::: tip

有很多京东的脚本库，但是许多脚本库的活动都停止了，或者已经跑不起来了，这里笔者经过查找和踩坑，推荐一个目前还在更新的脚本库，作者是faker。

:::

拉取脚本库的命令：

```bash
#Faker2 助力池版【安全本地sign防CK泄漏】
ql repo https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker2.git "jd_|jx_|gua_|jddj_|jdCookie" "activity|backUp" "^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts" "main"

#Faker3 内部互助版【安全本地sign防CK泄漏】
ql repo https://git.metauniverse-cn.com/https://github.com/shufflewzc/faker3.git "jd_|jx_|gua_|jddj_|jdCookie" "activity|backUp" "^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts" "main"
```

::: warning

【注意】不可同时拉Faker2与Faker3仓库，同时拉多个集合库容易黑ip，保留一个即可。

:::

在拉库之前，需要修改配置文件中的一个字段。点击配置文件，设置GithubProxyUrl=""。

进入面板后，点击`定时任务`，点击`新建任务`，然后在命令那里输入拉取脚本库的命令，定时规则笔者设置的是`45 23 * * *`，即每天的23：45再次执行该脚本拉取脚本库。

![image-20221217002751812](https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/image-20221217002751812.png)

之后点击下图按钮，执行该脚本拉取库中的脚本。

![image-20221217002855893](https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/image-20221217002855893.png)

### **配置环境变量**

点击青龙面板的依赖管理——>新建依赖——>选择NodeJs、自动拆分选择是，复制以下的依赖填到名称里——>点击确定，等待安装完成。如下图所示：

![image-20221217003212599](https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/image-20221217003212599.png)

```
crypto-js
prettytable
dotenv
jsdom
date-fns
tough-cookie
tslib
ws@7.4.3
ts-md5
jsdom -g
jieba
fs
form-data
json5
global-agent
png-js
@types/node
require
typescript
js-base64
axios
moment
```

同理，Python下有：

```
requests
canvas
ping3
jieba
PyExecJS
aiohttp
```

同理，Linux下有：

```
bizCode
bizMsg
lxm
```

::: tip

安装时间较长，耐心等待一下。如果最终提示安装失败，可以点击bug的那个按钮进行重新安装。

:::

## **三、配置JD账号Cookie**

一切就绪后，接下来就是最重要的环节：配置我们的京东账号信息。

打开Chrome浏览器，输入`jd.com`，按照下图步骤切换为手机视图。

![img](https://pic4.zhimg.com/80/v2-218c5d33ae742e0448a78e907233e973_720w.webp)

我们可以选择iPhoneX视图，刷新页面后发现地址栏变为手机版的京东首页地址`m.jd.com`

![img](https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/v2-5bec51cd4a9b4964788479c2a75d28f4_720w.webp)

正常按照手机号+验证码登录

![img](https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/v2-5925b549502d4ff5af2eae4d496cfe47_720w.webp)

登录过后，这个时候就需要从cookie中查看`pt_`开头的两个关键配置：`pt_key`,`pt_pin`

![img](https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/v2-6dc96dc7a8b2a0dea6fdc2baa96bbaae_720w.webp)

把对应的value拷贝出来，整理格式如下

```text
pt_key=xxxx;pt_pin=xxxx;
```

接下来回到青龙面板，新建环境变量，名称为`JD_COOKIE`，值为上面整理的文本。

![img](https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/v2-37d79a6fd07980a90ec09dfca35d243a_720w.webp)

经过以上步骤，京东账号的信息就配置完毕了。

## **四、测试**

保存过后，我们就可以从脚本列表中，手动执行任意一个任务脚本来验证一下。

可以执行`京东多合一签到`脚本，发现签到成功，说明配置成功。

笔者写下这篇教程已经配置完成三天了，收益大概是40-70京豆不等。