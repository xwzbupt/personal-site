import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.931b505c.js";const t={},c=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 脚本验证</span>

<span class="token comment">## 一、3台服务器的ssh免密登录</span>

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
<span class="token variable">\`</span></span>\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[c];function i(p,l){return s(),a("div",null,o)}const m=n(t,[["render",i],["__file","免密登录.html.vue"]]);export{m as default};
