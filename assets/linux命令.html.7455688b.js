import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.d9e8407d.js";const t={},c=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 脚本验证</span>

<span class="token comment">## 一、3台服务器的ssh免密登录</span>

使用了三台云服务器，1台腾讯云，2台华为云。

<span class="token operator">|</span> 服务器    <span class="token operator">|</span> IP地址        <span class="token operator">|</span>
<span class="token operator">|</span> --------- <span class="token operator">|</span> ------------- <span class="token operator">|</span>
<span class="token operator">|</span> 主-腾讯云 <span class="token operator">|</span> <span class="token number">124.70</span>.39.252 <span class="token operator">|</span>
<span class="token operator">|</span> 从-华为云 <span class="token operator">|</span> <span class="token number">124.70</span>.6.97   <span class="token operator">|</span>
<span class="token operator">|</span> 从-华为云 <span class="token operator">|</span> <span class="token number">120.46</span>.193.37 <span class="token operator">|</span>

<span class="token operator">&gt;</span> 为了容易区分，下面的cdh1、cdh2、cdh3分别对应上面表格的三台服务器。

\`\`<span class="token variable"><span class="token variable">\`</span><span class="token function">bash</span>
<span class="token comment">#三台机器互相免密登录</span>
<span class="token comment">#1、三台机器执行以下命令</span>
<span class="token punctuation">[</span>root@cdh1 ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen -t rsa</span>
<span class="token punctuation">[</span>root@cdh2 ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen -t rsa</span>
<span class="token punctuation">[</span>root@cdh3 ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen -t rsa</span>

<span class="token comment">#2、进入/.ssh/目录 该目录存放密钥对</span>
<span class="token punctuation">[</span>root@cdh1 ~<span class="token punctuation">]</span><span class="token comment"># cd ~/.ssh/</span>

<span class="token comment">#3、新建authorized_keys并设置权限</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># touch authorized_keys</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># chmod 600 authorized_keys </span>

<span class="token comment">#4、公钥追加 authorized_keys </span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># cat id_rsa.pub &gt;&gt; authorized_keys</span>

<span class="token comment">#5、另外两台机器也执行如下操作</span>
<span class="token comment">#cdh2</span>
<span class="token punctuation">[</span>root@cdh2 ~<span class="token punctuation">]</span><span class="token comment"># cd ~/.ssh/</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># touch authorized_keys</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># chmod 600 authorized_keys </span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># cat id_rsa.pub &gt;&gt; authorized_keys</span>
<span class="token comment">#cdh3</span>
<span class="token punctuation">[</span>root@cdh3 ~<span class="token punctuation">]</span><span class="token comment"># cd ~/.ssh/</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># touch authorized_keys</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># chmod 600 authorized_keys </span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># cat id_rsa.pub &gt;&gt; authorized_keys</span>

<span class="token comment">#6、把cdh2的公钥追加到cdh1的authorized_keys</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh1:/home/</span>
<span class="token function">scp</span> id_rsa.pub <span class="token number">124.70</span>.39.252:/home/
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#7、把cdh1的公钥追加到cdh2的authorized_keys</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh2:/home/</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#8、把cdh1的公钥追加到cdh3的authorized_keys</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh3:/home/</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#9、把cdh2的公钥追加到cdh3的authorized_keys</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh3:/home/</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#10、把cdh3的公钥追加到cdh1的authorized_keys</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh1:/home/</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#10、把cdh3的公钥追加到cdh2的authorized_keys</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh2:/home/</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#此时cdh1、cdh2、cdh3互相免密</span>
<span class="token variable">\`</span></span>\`<span class="token variable"><span class="token variable">\`</span>

<span class="token comment">## 二、安装ansible环境</span>

略

<span class="token comment">## 三、验证presto的yml脚本</span>

进入hosts修改hostname和ip地址的映射关系。

运行<span class="token variable">\`</span></span>ansible-playbook <span class="token parameter variable">-i</span> hosts deploy-cluster.yml\`命令。

<span class="token operator">!</span><span class="token punctuation">[</span>image-20220607152541141<span class="token punctuation">]</span><span class="token punctuation">(</span>C:/Users/Weiser/AppData/Roaming/Typora/typora-user-images/image-20220607152541141.png<span class="token punctuation">)</span>

报错有：python库导入不成功，防火墙不运行（按理说集群应该关闭防火墙才对，开启防火墙后该报错消失），SELinux is disabled.

<span class="token operator">!</span><span class="token punctuation">[</span>image-20220607155317220<span class="token punctuation">]</span><span class="token punctuation">(</span>C:/Users/Weiser/AppData/Roaming/Typora/typora-user-images/image-20220607155317220.png<span class="token punctuation">)</span>

<span class="token comment">## 四、验证redis的yml脚本</span>

<span class="token operator">!</span><span class="token punctuation">[</span>image-20220607160532084<span class="token punctuation">]</span><span class="token punctuation">(</span>C:/Users/Weiser/AppData/Roaming/Typora/typora-user-images/image-20220607160532084.png<span class="token punctuation">)</span>

redis_join_cluster.sh出了错误，导致redis1failed了。其他均无问题。xxxxxxxxxx1 <span class="token number">1</span>$ <span class="token function">git</span> push origin :refs/tags/<span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[c];function i(p,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","linux命令.html.vue"]]);export{r as default};
