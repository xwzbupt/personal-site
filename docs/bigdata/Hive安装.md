::: info 单节点离线安装

这篇文章记录了对Hive做单节点、离线的安装。

:::

# Hive的安装

## 一、安装Hadoop

安装Hadoop是安装Hive的前置步骤。

Hadoop安装包下载地址：[清华大学开源软件镜像站](https://links.jianshu.com/go?to=https%3A%2F%2Fmirrors.tuna.tsinghua.edu.cn%2Fapache%2Fhadoop%2Fcommon%2Fhadoop-3.3.4%2Fhadoop-3.3.4.tar.gz)

将安装包上传到/opt目录

```bash
# 进入到/opt目录
cd /opt
# 解压
tar -zxvf hadoop-3.3.4.tar.gz
# 创建安装目录
mkdir /usr/local/hadoop
# 将解压后的hadoop挪到创建的安装目录
mv /opt/hadoop-3.3.4/ /usr/local/hadoop/
# 进入到安装目录
cd /usr/local/hadoop/hadoop-3.3.4/
# 查看
ll
```

这里做单节点配置，可以参考[官网配置](https://hadoop.apache.org/docs/r3.3.4/hadoop-project-dist/hadoop-common/SingleCluster.html)。

修改`core-site.xml`

```
vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/core-site.xml
# 在文件中添加以下内容
        <property>
                <name>fs.defaultFS</name>
                <value>hdfs://127.0.0.1:9000</value>
        </property>
        <property>
                <name>hadoop.tmp.dir</name>
                <!-- 自定义 hadoop 的工作目录 -->
                <value>/usr/local/hadoop/hadoop-3.3.4/tmp</value>
        </property>
        <property>
                <name>hadoop.native.lib</name>
                <!-- 禁用Hadoop的本地库 -->
                <value>false</value>
        </property>
```

修改`hdfs-site.xml`

```
vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/hdfs-site.xml
# 在文件中添加以下内容
   <property>
       <name>dfs.replication</name>
       <value>1</value>
   </property>
```

修改`yarn-site.xml`

```
vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/yarn-site.xml
# 在文件中添加以下内容
       <property>
               <name>yarn.resourcemanager.hostname</name>
               <value>127.0.0.1</value>
       </property>
       <property>
               <name>yarn.resourcemanager.webapp.address</name>
               <!-- yarn web 页面 -->
               <value>0.0.0.0:8088</value>
       </property>
       <property>
               <name>yarn.nodemanager.aux-services</name>
               <!-- reducer获取数据的方式 -->
               <value>mapreduce_shuffle</value>
       </property>
```

修改`mapred-site.xml`

```
vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/mapred-site.xml

        <property>
                <name>mapreduce.framework.name</name>
                <value>yarn</value>
        </property>
```

修改`hadoop-evn.sh`

```
vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/hadoop-env.sh

# 将当前用户 root 赋给下面这些变量
export HDFS_NAMENODE_USER=root
export HDFS_DATANODE_USER=root
export HDFS_SECONDARYNAMENODE_USER=root
export YARN_RESOURCEMANAGER_USER=root
export YARN_NODEMANAGER_USER=root

# JDK 安装路径，参考 cat /etc/profile |grep JAVA_HOME
export JAVA_HOME=/usr/java/

# Hadop 安装路径下的 ./etc/hadoop 路径
export HADOOP_CONF_DIR=/usr/local/hadoop/hadoop-3.3.4/etc/hadoop
```

以上是修改Hadoop配置文件的内容，接下来配置Hadoop的环境变量

```
vi /etc/profile

#加入以下内容
export HADOOP_HOME=/usr/local/hadoop/hadoop-3.3.4
export PATH=$HADOOP_HOME/bin:$HADOOP_HOME/sbin:$PATH

# 使环境变量生效
source /etc/profile
# 检查 PATH 中是否包含 $HADOOP_HOME/bin:$HADOOP_HOME/sbin 对应的目录
echo $PATH
```

修改hosts文件，将当前主机名配置进去

```bash
# 查看当前主机名
hostname
# 此处结果为 localhost.localdomain
# 修改 hosts 文件，将当前主机名配到 127.0.0.1 后面
vi /etc/hosts
# ping 当前主机名进行检测
ping localhost.localdomain
```

配置本机ssh免密登录

```bash
ssh-keygen -t rsa
cd ~/.ssh/
touch authorized_keys
chmod 600 authorized_keys
cat id_rsa.pub >> authorized_keys
```

在首次启动时需要格式化HDFS

```bash
hdfs namenode -format
```

启动Hadoop，被执行的脚本是`/usr/local/hadoop/hadoop-3.3.4/sbin/start-all.sh`，之前已经通过`$HADOOP_HOME/sbin`配置到了环境变量中，可以直接执行。

```bash
start-all.sh
```

测试HDFS

```bash
# 在HDFS上创建目录
hadoop fs -mkdir /test_1/
# 查看
hadoop fs -ls /

#将本地文件上传到HDFS中
# 新建文本文件
vi test_file_1.txt
# 向文本中写入字符串 123
echo 123 &gt;&gt; test_file_1.txt
# 将文本上传到 HDFS
hadoop fs -put test_file_1.txt /test_1/
# 查看文件
hadoop fs -ls /test_1/

#查看HDFS上文本文件的内容
hadoop fs -cat /test_1/test_file_1.txt

# 将HDFS上的文件下载到本地
# 先删除本地的同名文件
rm -f test_file_1.txt
ll
# 将 HDFS 上的文件下载到本地
hadoop fs -get /test_1/test_file_1.txt
```

测试Hadoop Web页面

```bash
# 防火墙放行 9870 tcp 端口
firewall-cmd --zone=public --add-port=9870/tcp --permanent
# 防火墙重新加载
firewall-cmd --reload
```

浏览器访问：`ip:9870`

Yarn Web页面测试

```bash
# 防火墙放行 8088 tcp 端口
firewall-cmd --zone=public --add-port=8088/tcp --permanent
# 防火墙重新加载
firewall-cmd --reload
```

浏览器访问：`ip:8088

## 二、安装Hive

::: tip 前置条件

安装好JDK，配置好环境变量。

:::

**（2）安装Hive**

::: tip 前置条件

安装好Hadoop。

:::

Hive安装包下载地址：[清华大学镜像站](https://mirrors.tuna.tsinghua.edu.cn/apache/hive/hive-3.1.3/apache-hive-3.1.3-bin.tar.gz)

将安装包上传到/opt目录

```bash
# 进入到/opt目录
cd /opt
# 解压
tar -zxvf apache-hive-3.1.3-bin.tar.gz
# 创建安装目录
mkdir /usr/local/hive
# 将解压后的hive挪到创建的安装目录
mv /opt/apache-hive-3.1.3-bin/ /usr/local/hive/
# 进入到安装目录
cd /usr/local/hive/apache-hive-3.1.3-bin/
# 查看
ll
```

在Hive的conf目录下创建hive-site.xml配置文件，并写入如下内容。

```
vi /usr/local/hive/apache-hive-3.1.3-bin/conf/hive-site.xml

<configuration>

    <property>
        <name>javax.jdo.option.ConnectionDriverName</name>
        <!--hive 元数据库的JDBC驱动类，这里选则 MySQL-->
        <value>com.mysql.cj.jdbc.Driver</value>
    </property>

    <property>
        <name>javax.jdo.option.ConnectionURL</name>
        <!--hive_metadata 为 hive 元数据在 MySQL 中的库名，注意字符集设置，由于是在XML中，URL中的&需要转译为&-->
        <value>jdbc:mysql://127.0.0.1:3306/hive_metadata?createDatabaseIfNotExist=true&amp;characterEncoding=UTF-8&amp;useSSL=false</value>
    </property>

    <property>
        <name>javax.jdo.option.ConnectionUserName</name>
        <!--MySQL登录账户名-->
        <value>root</value>
    </property>

    <property>
        <name>javax.jdo.option.ConnectionPassword</name>
        <!--MySQL登录密码-->
        <value>123456</value>
    </property>

    <property>
        <!--hive 表数据在 HDFS 的默认位置。创建内部表时，如果不指定 location，表数据则存储与该位置。-->
        <name>hive.metastore.warehouse.dir</name>
        <value>/user/hive/warehouse/internal</value>
    </property>

    <property>
        <!--hive 外部表数据在 HDFS 的默认位置。创建外部表时，如果不指定 location，表数据则存储与该位置。-->
        <name>hive.metastore.warehouse.external.dir</name>
        <value>/user/hive/warehouse/external</value>
    </property>

    <property>
        <name>hive.server2.enable.doAs</name>
        <value>false</value>
    </property>

</configuration>
```

创建hive-env.sh，将conf目录下的`hive-env.sh.template`复制一份并重命名为`hive-env.sh`。

```bash
cp /usr/local/hive/apache-hive-3.1.3-bin/conf/hive-env.sh.template /usr/local/hive/apache-hive-3.1.3-bin/conf/hive-env.sh
vi /usr/local/hive/apache-hive-3.1.3-bin/conf/hive-env.sh

# 将 HADOOP_HOME 的注释放开，其值改为本机 Hadoop 的安装目录 /usr/local/hadoop/hadoop-3.3.4
HADOOP_HOME=/usr/local/hadoop/hadoop-3.3.4
```

安装MySQL jdbc jar包，其中jar包版本和MySQL版本对应如下：

| mysql-connector-java | MySQL                            | JDK                        | 补充                 |
| :------------------- | :------------------------------- | :------------------------- | :------------------- |
| 8.0.x                | 5.6、5.7、8.0 4.2                | JDK 8.0或更高版本          | 全面上市。推荐版本。 |
| 5.1.x                | 5.6、5.7、8.0 3.0、4.0、4.1、4.2 | JDK 5.0和JDK 8.0或更高版本 | 一般可用性           |

[下载地址](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/mysql-connector-java-8.0.30.jar)。下载后将其传到``/usr/local/hive/apache-hive-3.1.3-bin/lib`下。

设置Hive的环境变量

```bash
vi /etc/profile

export HIVE_HOME=/usr/local/hive/apache-hive-3.1.3-bin
export PATH=$HIVE_HOME/bin:$PATH

# 运行配置文件
source /etc/profile
# 检查 PATH 中是否包含 $HIVE_HOME/bin 对应的绝对路径
echo $PATH
```

初始化元数据库，指定元数据库为MySQL

```bash
# 查看MySQL是否启动
service mysqld status
# 如果没有启动，则启动MySQL
service mysqld start
schematool -initSchema -dbType mysql
```

注：`schematool` 命令位于 `/usr/local/hive/apache-hive-3.1.3-bin/bin/` ，已经配置在环境变量path中，可以直接使用。

启动Hadoop

```bash
# 查看Hadoop是否启动
jps -l |grep hadoop
# 如果没有启动，则启动Hadoop
start-all.sh
```

编写后台启动Hive的脚本。Hive有三种用户接口，如下图所示。

![hive用户接口.png](https://www.hanshuixin.com/prod-api/file/statics/2022/11/21/42f0e8b3-3fed-4ddd-9570-d6c7686ddc7d.png)

三种用户接口的启动方式分别如下：

```bash
# Client，JDBC/ODBC + hive Server
hive --service metastore
hive --service hiveserver2

# CLI，命令行 + hive 副本
hive --service cli

# 浏览器，WUI 
hive --service hwi
```

本文选择第一种，同时启动metastore，编写后台启动脚本：

```bash
vi /usr/local/hive/apache-hive-3.1.3-bin/bin/start-hive-metastore-hiveserver2.sh

#!/bin/bash
nohup hive --service metastore >> /usr/local/hive/apache-hive-3.1.3-bin/log/metastore.log 2>&1 &
nohup hive --service hiveserver2 >> /usr/local/hive/apache-hive-3.1.3-bin/log/hiveserver2.log 2>&1 &
```

执行以下内容

```bash
# 赋予启动脚本执行权限
chmod +x /usr/local/hive/apache-hive-3.1.3-bin/bin/start-hive-metastore-hiveserver2.sh
# 创建日志目录：
mkdir /usr/local/hive/apache-hive-3.1.3-bin/log
```

启动Hive

```bash
start-hive-metastore-hiveserver2.sh
```

查看两个日志，无报错即可

```bash
tail -1000f /usr/local/hive/apache-hive-3.1.3-bin/log/metastore.log
tail -1000f /usr/local/hive/apache-hive-3.1.3-bin/log/hiveserver2.log
```

放行端口

```bash
# 防火墙放行 8042 tcp 端口，Hadoop http服务端口，可用于在浏览器查看yarn日志
firewall-cmd --zone=public --add-port=8042/tcp --permanent
# 防火墙放行 10000 tcp 端口，hive jdbc连接端口
firewall-cmd --zone=public --add-port=10000/tcp --permanent
# 防火墙重新加载
firewall-cmd --reload
```

在yarn-site.xml中添加Hadoop类路径

```bash
#查看Hadoop类路径
hadoop classpath

#编辑 Hadoop 的 yarn-site.xml 文件
vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/yarn-site.xml

<property>
        <name>yarn.application.classpath</name>
        <!-- 输入刚才返回的Hadoop classpath路径 -->
        <value>/usr/local/hadoop/hadoop-3.3.4/etc/hadoop:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/common/lib/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/common/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/hdfs:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/hdfs/lib/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/hdfs/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/mapreduce/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/yarn:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/yarn/lib/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/yarn/*</value>
</property>

#重启Hadoop
stop-all.sh
start-all.sh
```

到这里安装Hive就结束了，可以尝试使用Hive。