import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as r,e as n,f as e,b as i,d as a}from"./app-f06160db.js";const o={},c=a('<div class="hint-container info"><p class="hint-container-title">单节点离线安装</p><p>这篇文章记录了对Hive做单节点、离线的安装。</p></div><h1 id="hive的安装" tabindex="-1"><a class="header-anchor" href="#hive的安装" aria-hidden="true">#</a> Hive的安装</h1><h2 id="一、安装hadoop" tabindex="-1"><a class="header-anchor" href="#一、安装hadoop" aria-hidden="true">#</a> 一、安装Hadoop</h2><p>安装Hadoop是安装Hive的前置步骤。</p>',4),p={href:"https://links.jianshu.com/go?to=https%3A%2F%2Fmirrors.tuna.tsinghua.edu.cn%2Fapache%2Fhadoop%2Fcommon%2Fhadoop-3.3.4%2Fhadoop-3.3.4.tar.gz",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>将安装包上传到/opt目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入到/opt目录</span>
<span class="token builtin class-name">cd</span> /opt
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> hadoop-3.3.4.tar.gz
<span class="token comment"># 创建安装目录</span>
<span class="token function">mkdir</span> /usr/local/hadoop
<span class="token comment"># 将解压后的hadoop挪到创建的安装目录</span>
<span class="token function">mv</span> /opt/hadoop-3.3.4/ /usr/local/hadoop/
<span class="token comment"># 进入到安装目录</span>
<span class="token builtin class-name">cd</span> /usr/local/hadoop/hadoop-3.3.4/
<span class="token comment"># 查看</span>
ll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m={href:"https://hadoop.apache.org/docs/r3.3.4/hadoop-project-dist/hadoop-common/SingleCluster.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>修改<code>core-site.xml</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/core-site.xml
# 在文件中添加以下内容
        &lt;property&gt;
                &lt;name&gt;fs.defaultFS&lt;/name&gt;
                &lt;value&gt;hdfs://127.0.0.1:9000&lt;/value&gt;
        &lt;/property&gt;
        &lt;property&gt;
                &lt;name&gt;hadoop.tmp.dir&lt;/name&gt;
                &lt;!-- 自定义 hadoop 的工作目录 --&gt;
                &lt;value&gt;/usr/local/hadoop/hadoop-3.3.4/tmp&lt;/value&gt;
        &lt;/property&gt;
        &lt;property&gt;
                &lt;name&gt;hadoop.native.lib&lt;/name&gt;
                &lt;!-- 禁用Hadoop的本地库 --&gt;
                &lt;value&gt;false&lt;/value&gt;
        &lt;/property&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>hdfs-site.xml</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/hdfs-site.xml
# 在文件中添加以下内容
   &lt;property&gt;
       &lt;name&gt;dfs.replication&lt;/name&gt;
       &lt;value&gt;1&lt;/value&gt;
   &lt;/property&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>yarn-site.xml</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/yarn-site.xml
# 在文件中添加以下内容
       &lt;property&gt;
               &lt;name&gt;yarn.resourcemanager.hostname&lt;/name&gt;
               &lt;value&gt;127.0.0.1&lt;/value&gt;
       &lt;/property&gt;
       &lt;property&gt;
               &lt;name&gt;yarn.resourcemanager.webapp.address&lt;/name&gt;
               &lt;!-- yarn web 页面 --&gt;
               &lt;value&gt;0.0.0.0:8088&lt;/value&gt;
       &lt;/property&gt;
       &lt;property&gt;
               &lt;name&gt;yarn.nodemanager.aux-services&lt;/name&gt;
               &lt;!-- reducer获取数据的方式 --&gt;
               &lt;value&gt;mapreduce_shuffle&lt;/value&gt;
       &lt;/property&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>mapred-site.xml</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/mapred-site.xml

        &lt;property&gt;
                &lt;name&gt;mapreduce.framework.name&lt;/name&gt;
                &lt;value&gt;yarn&lt;/value&gt;
        &lt;/property&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>hadoop-evn.sh</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/hadoop-env.sh

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是修改Hadoop配置文件的内容，接下来配置Hadoop的环境变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/profile

#加入以下内容
export HADOOP_HOME=/usr/local/hadoop/hadoop-3.3.4
export PATH=$HADOOP_HOME/bin:$HADOOP_HOME/sbin:$PATH

# 使环境变量生效
source /etc/profile
# 检查 PATH 中是否包含 $HADOOP_HOME/bin:$HADOOP_HOME/sbin 对应的目录
echo $PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改hosts文件，将当前主机名配置进去</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前主机名</span>
<span class="token function">hostname</span>
<span class="token comment"># 此处结果为 localhost.localdomain</span>
<span class="token comment"># 修改 hosts 文件，将当前主机名配到 127.0.0.1 后面</span>
<span class="token function">vi</span> /etc/hosts
<span class="token comment"># ping 当前主机名进行检测</span>
<span class="token function">ping</span> localhost.localdomain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置本机ssh免密登录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
<span class="token builtin class-name">cd</span> ~/.ssh/
<span class="token function">touch</span> authorized_keys
<span class="token function">chmod</span> <span class="token number">600</span> authorized_keys
<span class="token function">cat</span> id_rsa.pub <span class="token operator">&gt;&gt;</span> authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在首次启动时需要格式化HDFS</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hdfs namenode <span class="token parameter variable">-format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动Hadoop，被执行的脚本是<code>/usr/local/hadoop/hadoop-3.3.4/sbin/start-all.sh</code>，之前已经通过<code>$HADOOP_HOME/sbin</code>配置到了环境变量中，可以直接执行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>start-all.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试HDFS</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在HDFS上创建目录</span>
hadoop fs <span class="token parameter variable">-mkdir</span> /test_1/
<span class="token comment"># 查看</span>
hadoop fs <span class="token parameter variable">-ls</span> /

<span class="token comment">#将本地文件上传到HDFS中</span>
<span class="token comment"># 新建文本文件</span>
<span class="token function">vi</span> test_file_1.txt
<span class="token comment"># 向文本中写入字符串 123</span>
<span class="token builtin class-name">echo</span> <span class="token number">123</span> <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> test_file_1.txt
<span class="token comment"># 将文本上传到 HDFS</span>
hadoop fs <span class="token parameter variable">-put</span> test_file_1.txt /test_1/
<span class="token comment"># 查看文件</span>
hadoop fs <span class="token parameter variable">-ls</span> /test_1/

<span class="token comment">#查看HDFS上文本文件的内容</span>
hadoop fs <span class="token parameter variable">-cat</span> /test_1/test_file_1.txt

<span class="token comment"># 将HDFS上的文件下载到本地</span>
<span class="token comment"># 先删除本地的同名文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> test_file_1.txt
ll
<span class="token comment"># 将 HDFS 上的文件下载到本地</span>
hadoop fs <span class="token parameter variable">-get</span> /test_1/test_file_1.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试Hadoop Web页面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 防火墙放行 9870 tcp 端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">9870</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 防火墙重新加载</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器访问：<code>ip:9870</code></p><p>Yarn Web页面测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 防火墙放行 8088 tcp 端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8088</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 防火墙重新加载</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器访问：\`ip:8088</p><h2 id="二、安装hive" tabindex="-1"><a class="header-anchor" href="#二、安装hive" aria-hidden="true">#</a> 二、安装Hive</h2><div class="hint-container tip"><p class="hint-container-title">前置条件</p><p>安装好JDK，配置好环境变量。</p></div><p><strong>（2）安装Hive</strong></p><div class="hint-container tip"><p class="hint-container-title">前置条件</p><p>安装好Hadoop。</p></div>`,32),b={href:"https://mirrors.tuna.tsinghua.edu.cn/apache/hive/hive-3.1.3/apache-hive-3.1.3-bin.tar.gz",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>将安装包上传到/opt目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入到/opt目录</span>
<span class="token builtin class-name">cd</span> /opt
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apache-hive-3.1.3-bin.tar.gz
<span class="token comment"># 创建安装目录</span>
<span class="token function">mkdir</span> /usr/local/hive
<span class="token comment"># 将解压后的hive挪到创建的安装目录</span>
<span class="token function">mv</span> /opt/apache-hive-3.1.3-bin/ /usr/local/hive/
<span class="token comment"># 进入到安装目录</span>
<span class="token builtin class-name">cd</span> /usr/local/hive/apache-hive-3.1.3-bin/
<span class="token comment"># 查看</span>
ll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Hive的conf目录下创建hive-site.xml配置文件，并写入如下内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /usr/local/hive/apache-hive-3.1.3-bin/conf/hive-site.xml

&lt;configuration&gt;

    &lt;property&gt;
        &lt;name&gt;javax.jdo.option.ConnectionDriverName&lt;/name&gt;
        &lt;!--hive 元数据库的JDBC驱动类，这里选则 MySQL--&gt;
        &lt;value&gt;com.mysql.cj.jdbc.Driver&lt;/value&gt;
    &lt;/property&gt;

    &lt;property&gt;
        &lt;name&gt;javax.jdo.option.ConnectionURL&lt;/name&gt;
        &lt;!--hive_metadata 为 hive 元数据在 MySQL 中的库名，注意字符集设置，由于是在XML中，URL中的&amp;需要转译为&amp;--&gt;
        &lt;value&gt;jdbc:mysql://127.0.0.1:3306/hive_metadata?createDatabaseIfNotExist=true&amp;amp;characterEncoding=UTF-8&amp;amp;useSSL=false&lt;/value&gt;
    &lt;/property&gt;

    &lt;property&gt;
        &lt;name&gt;javax.jdo.option.ConnectionUserName&lt;/name&gt;
        &lt;!--MySQL登录账户名--&gt;
        &lt;value&gt;root&lt;/value&gt;
    &lt;/property&gt;

    &lt;property&gt;
        &lt;name&gt;javax.jdo.option.ConnectionPassword&lt;/name&gt;
        &lt;!--MySQL登录密码--&gt;
        &lt;value&gt;123456&lt;/value&gt;
    &lt;/property&gt;

    &lt;property&gt;
        &lt;!--hive 表数据在 HDFS 的默认位置。创建内部表时，如果不指定 location，表数据则存储与该位置。--&gt;
        &lt;name&gt;hive.metastore.warehouse.dir&lt;/name&gt;
        &lt;value&gt;/user/hive/warehouse/internal&lt;/value&gt;
    &lt;/property&gt;

    &lt;property&gt;
        &lt;!--hive 外部表数据在 HDFS 的默认位置。创建外部表时，如果不指定 location，表数据则存储与该位置。--&gt;
        &lt;name&gt;hive.metastore.warehouse.external.dir&lt;/name&gt;
        &lt;value&gt;/user/hive/warehouse/external&lt;/value&gt;
    &lt;/property&gt;

    &lt;property&gt;
        &lt;name&gt;hive.server2.enable.doAs&lt;/name&gt;
        &lt;value&gt;false&lt;/value&gt;
    &lt;/property&gt;

&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={href:"http://xn--hive-env-8q7m267h.sh",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"hive-env.sh.template",-1),f=n("code",null,"hive-env.sh",-1),x=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> /usr/local/hive/apache-hive-3.1.3-bin/conf/hive-env.sh.template /usr/local/hive/apache-hive-3.1.3-bin/conf/hive-env.sh
<span class="token function">vi</span> /usr/local/hive/apache-hive-3.1.3-bin/conf/hive-env.sh

<span class="token comment"># 将 HADOOP_HOME 的注释放开，其值改为本机 Hadoop 的安装目录 /usr/local/hadoop/hadoop-3.3.4</span>
<span class="token assign-left variable">HADOOP_HOME</span><span class="token operator">=</span>/usr/local/hadoop/hadoop-3.3.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装MySQL jdbc jar包，其中jar包版本和MySQL版本对应如下：</p><table><thead><tr><th style="text-align:left;">mysql-connector-java</th><th style="text-align:left;">MySQL</th><th style="text-align:left;">JDK</th><th style="text-align:left;">补充</th></tr></thead><tbody><tr><td style="text-align:left;">8.0.x</td><td style="text-align:left;">5.6、5.7、8.0 4.2</td><td style="text-align:left;">JDK 8.0或更高版本</td><td style="text-align:left;">全面上市。推荐版本。</td></tr><tr><td style="text-align:left;">5.1.x</td><td style="text-align:left;">5.6、5.7、8.0 3.0、4.0、4.1、4.2</td><td style="text-align:left;">JDK 5.0和JDK 8.0或更高版本</td><td style="text-align:left;">一般可用性</td></tr></tbody></table>`,3),_={href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/mysql-connector-java-8.0.30.jar",target:"_blank",rel:"noopener noreferrer"},y=a(`<p>设置Hive的环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/profile

<span class="token builtin class-name">export</span> <span class="token assign-left variable">HIVE_HOME</span><span class="token operator">=</span>/usr/local/hive/apache-hive-3.1.3-bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$HIVE_HOME</span>/bin:<span class="token environment constant">$PATH</span>

<span class="token comment"># 运行配置文件</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment"># 检查 PATH 中是否包含 $HIVE_HOME/bin 对应的绝对路径</span>
<span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化元数据库，指定元数据库为MySQL</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看MySQL是否启动</span>
<span class="token function">service</span> mysqld status
<span class="token comment"># 如果没有启动，则启动MySQL</span>
<span class="token function">service</span> mysqld start
schematool <span class="token parameter variable">-initSchema</span> <span class="token parameter variable">-dbType</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：<code>schematool</code> 命令位于 <code>/usr/local/hive/apache-hive-3.1.3-bin/bin/</code> ，已经配置在环境变量path中，可以直接使用。</p><p>启动Hadoop</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看Hadoop是否启动</span>
jps <span class="token parameter variable">-l</span> <span class="token operator">|</span><span class="token function">grep</span> hadoop
<span class="token comment"># 如果没有启动，则启动Hadoop</span>
start-all.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写后台启动Hive的脚本。Hive有三种用户接口，如下图所示。</p><figure><img src="https://www.hanshuixin.com/prod-api/file/statics/2022/11/21/42f0e8b3-3fed-4ddd-9570-d6c7686ddc7d.png" alt="hive用户接口.png" tabindex="0" loading="lazy"><figcaption>hive用户接口.png</figcaption></figure><p>三种用户接口的启动方式分别如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Client，JDBC/ODBC + hive Server</span>
hive <span class="token parameter variable">--service</span> metastore
hive <span class="token parameter variable">--service</span> hiveserver2

<span class="token comment"># CLI，命令行 + hive 副本</span>
hive <span class="token parameter variable">--service</span> cli

<span class="token comment"># 浏览器，WUI </span>
hive <span class="token parameter variable">--service</span> hwi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本文选择第一种，同时启动metastore，编写后台启动脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /usr/local/hive/apache-hive-3.1.3-bin/bin/start-hive-metastore-hiveserver2.sh

<span class="token comment">#!/bin/bash</span>
<span class="token function">nohup</span> hive <span class="token parameter variable">--service</span> metastore <span class="token operator">&gt;&gt;</span> /usr/local/hive/apache-hive-3.1.3-bin/log/metastore.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
<span class="token function">nohup</span> hive <span class="token parameter variable">--service</span> hiveserver2 <span class="token operator">&gt;&gt;</span> /usr/local/hive/apache-hive-3.1.3-bin/log/hiveserver2.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 赋予启动脚本执行权限</span>
<span class="token function">chmod</span> +x /usr/local/hive/apache-hive-3.1.3-bin/bin/start-hive-metastore-hiveserver2.sh
<span class="token comment"># 创建日志目录：</span>
<span class="token function">mkdir</span> /usr/local/hive/apache-hive-3.1.3-bin/log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动Hive</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>start-hive-metastore-hiveserver2.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看两个日志，无报错即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token parameter variable">-1000f</span> /usr/local/hive/apache-hive-3.1.3-bin/log/metastore.log
<span class="token function">tail</span> <span class="token parameter variable">-1000f</span> /usr/local/hive/apache-hive-3.1.3-bin/log/hiveserver2.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>放行端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 防火墙放行 8042 tcp 端口，Hadoop http服务端口，可用于在浏览器查看yarn日志</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8042</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 防火墙放行 10000 tcp 端口，hive jdbc连接端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">10000</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 防火墙重新加载</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在yarn-site.xml中添加Hadoop类路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看Hadoop类路径</span>
hadoop classpath

<span class="token comment">#编辑 Hadoop 的 yarn-site.xml 文件</span>
<span class="token function">vi</span> /usr/local/hadoop/hadoop-3.3.4/etc/hadoop/yarn-site.xml

<span class="token operator">&lt;</span>property<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>yarn.application.classpath<span class="token operator">&lt;</span>/name<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span>-- 输入刚才返回的Hadoop classpath路径 --<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>/usr/local/hadoop/hadoop-3.3.4/etc/hadoop:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/common/lib/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/common/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/hdfs:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/hdfs/lib/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/hdfs/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/mapreduce/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/yarn:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/yarn/lib/*:/usr/local/hadoop/hadoop-3.3.4/share/hadoop/yarn/*<span class="token operator">&lt;</span>/value<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/property<span class="token operator">&gt;</span>

<span class="token comment">#重启Hadoop</span>
stop-all.sh
start-all.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里安装Hive就结束了，可以尝试使用Hive。</p>`,24);function H(D,O){const s=t("ExternalLinkIcon");return d(),r("div",null,[c,n("p",null,[e("Hadoop安装包下载地址："),n("a",p,[e("清华大学开源软件镜像站"),i(s)])]),v,n("p",null,[e("这里做单节点配置，可以参考"),n("a",m,[e("官网配置"),i(s)]),e("。")]),u,n("p",null,[e("Hive安装包下载地址："),n("a",b,[e("清华大学镜像站"),i(s)])]),h,n("p",null,[n("a",g,[e("创建hive-env.sh"),i(s)]),e("，将conf目录下的"),k,e("复制一份并重命名为"),f,e("。")]),x,n("p",null,[n("a",_,[e("下载地址"),i(s)]),e("。下载后将其传到``/usr/local/hive/apache-hive-3.1.3-bin/lib`下。")]),y])}const A=l(o,[["render",H],["__file","Hive安装.html.vue"]]);export{A as default};
