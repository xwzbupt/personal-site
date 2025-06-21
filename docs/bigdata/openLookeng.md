---
category: openLookeng
---

# openLookeng

::: warning

这篇文章并不涉密。

:::

> 申请的是虚拟机，三台机器都是裸的，不能联网，意味着不能使用方便的包管理工具自动下载包，任何包导入都要先下载到本地，再通过xshell传上去。
>
> 我认为，机器不能上外网是可以忍受和理解的，但是我并不能接受创建的机器里面不包含一些基础的包，比如ifconfig等命令并不能正常使用。

# 一、裸机相关配置

## Java

1. 将`jdk-8u341-linux-x64.tar.gz`下载到本地，通过xshell传到Linux的`/usr/local`路径下。

2. 解压压缩包

```shell
tar -zxvf jdk-8u341-linux-x64.tar.gz
```

3. 将解压后的jdk移动到计划安装的路径，计划安装在`/usr/java`

```shell
mv /usr/local/jdk1.8.0_341/ /usr/java
```

4. 设置环境变量

```shell
vi /etc/profile
# 在文末添加以下内容
export JAVA_HOME=/usr/java/
export JRE_HOME=${JAVA_HOME}/jre
export LASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH
export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin
export PATH=$PATH:${JAVA_PATH}
```

5. 使文件生效

```shell
source /etc/profile
```



# 二、安装openLookeng

进入`https://openlookeng.io/zh/download/`下载openLookeng Server并解压。

进入解压的根目录，创建/etc，在该目录下创建`node.properties`、`jvm.config`、`config.properties`和`log.properties`。

节点属性node.properties

```properties
node.environment=openLookeng
node.launcher-log-file=/opt/openLookeng/hetu-server-1.9.0/log/launch.log
node.server-log-file=/opt/openLookeng/hetu-server-1.9.0/log/server.log
catalog.config-dir=/opt/openLookeng/hetu-server-1.9.0/etc/catalog
node.data-dir=/opt/openLookeng/hetu-server-1.9.0/data
plugin.dir=/opt/openLookeng/hetu-server-1.9.0/plugin
```

JVM配置jvm.config

```properties
-server
-Xmx5G
-XX:-UseBiasedLocking
-XX:+UseG1GC
-XX:G1HeapRegionSize=32M
-XX:+ExplicitGCInvokesConcurrent
-XX:+ExitOnOutOfMemoryError
-XX:+UseGCOverheadLimit
-XX:+HeapDumpOnOutOfMemoryError
```

配置属性config.properties

```properties
coordinator=true
node-scheduler.include-coordinator=true
http-server.http.port=8080
#query.max-memory=4GB
#query.max-total-memory=4GB
#query.max-memory-per-node=4GB
#query.max-total-memory-per-node=4GB
discovery-server.enabled=true
discovery.uri=http://localhost:8080
hetu.queryeditor-ui.allow-insecure-over-http=true
```

日志属性log.properties

```properties
io.prestosql=INFO
```

目录属性创建在/etc下的/catalog中，\<datasouorce\>.properties。比如创建一个tpcds数据源的目录属性tpcds.properties

```properties
connector.name=tpcds
```

启动openLookeng。在server的目录下，执行

```bash
bin/launcher run
```



# 三、配置数据源

## 3.1 MySQL数据源

::: tip MySQL在CentOS的相关安装包和环境

https://www.aliyundrive.com/s/RrHNv43a57D 提取码: 35vi 

:::

### 3.1.1 安装MySQL

首先安装系统所需的依赖环境。输入指令

```
rpm -qa | grep mariadb
```

查询出内容后，将自带的环境卸载

```
rpm -e --nodeps mariadb-libs-5.5.68-1.el7.x86_64
```

查询并卸载系统老版本的MySQL（如果没有输出，则不需要卸载）

```
rpm -qa | grep mysql
```

安装libaio依赖环境和nettools依赖环境

```
rpm -ivh libaio-0.3.109-13.el7.x86_64.rpm
rpm -ivh net-tools-2.0-0.25.20131004git.el7.x86_64.rpm
```

以此输入以下指令安装MySQL：

```
rpm -ivh mysql-community-common-5.7.29-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-5.7.29-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-5.7.29-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-5.7.29-1.el7.x86_64.rpm --nodeps --force
```

输入下面指令启动MySQL服务

```
systemctl start mysqld
```

查看MySQL服务是否启动

```
service mysqld status
```

先查看MySQL安装时随机生成的密码

```
grep 'temporary password' /var/log/mysqld.log
```

登录MySQL，输入指令

```
mysql -u root -p
```

输入刚开始获取的随机生成的密码，登录MySQL，修改密码

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'Abc123...';
```

然后查看当前默认规则，修改校验密码策略等级，设置密码长度至少为 6，最后设置简单密码。

```
SHOW VARIABLES LIKE 'validate_password%';
set global validate_password_policy=LOW;
set global validate_password_length=6;
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
```

打开MySQL外部连接的权限

```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

设置成功后，输入exit退出当前MySQL账户。

开放3306端口防火墙，关闭firewall防火墙指令

```bash
#单次关闭
sudo systemctl stop firewalld.service
#永久关闭
sudo systemctl disable firewalld.service
```

使用iptables设置开放端口：[设置Iptables开放端口](https://top.baidu.com/) 

当前版本的MySQL，在使用group by分组时会存在报错情况，需要设置以下的MySQL模式。

编辑MySQL配置文件

```
vi /etc/my.cnf
```

在文件的最后面添加上一下内容

```
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```

重启MySQL服务

```
systemctl restart mysqld
```

在本地windows电脑使用navicat客户端尝试连接服务器的MySQL服务，连接成功。

### 3.1.2 openLookeng连接MySQL数据源

在openLookeng的server目录中的/etc/catalog中创建MySQL数据源的properties，命名为mysql.properties，并加入以下内容。

```properties
connector.name=mysql
connection-url=jdbc:mysql://127.0.0.1:3306
connection-user=root
connection-password=123456
```

启动openLookeng的server后，用浏览器访问`ip:8080`，发现mysql的catalog已加入其中。使用本地windows电脑使用navicat客户端为在MySQL中添加数据库和表，刷新网页，openLookeng加载出了新添加的数据库和表。

## 3.2 Hive数据源

安装Hive数据源。

在openLookeng的server目录中的/etc/catalog中创建Hive数据源的properties，命名为hive.properties，并加入以下内容。

```properties
connector.name=mysql
connection-url=jdbc:mysql://127.0.0.1:3306
connection-user=root
connection-password=123456
```

启动openLookeng的server后，用浏览器访问`ip:8080`，发现Hive的catalog已加入其中。



# 四、客户端访问

## 4.1 图形界面客户端



## 4.2 CLI客户端



# TroubleShooting

