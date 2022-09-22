import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.906b8b59.js";const t={},c=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u811A\u672C\u9A8C\u8BC1</span>

<span class="token comment">## \u4E00\u30013\u53F0\u670D\u52A1\u5668\u7684ssh\u514D\u5BC6\u767B\u5F55</span>

\u4F7F\u7528\u4E86\u4E09\u53F0\u4E91\u670D\u52A1\u5668\uFF0C1\u53F0\u817E\u8BAF\u4E91\uFF0C2\u53F0\u534E\u4E3A\u4E91\u3002

<span class="token operator">|</span> \u670D\u52A1\u5668    <span class="token operator">|</span> IP\u5730\u5740        <span class="token operator">|</span>
<span class="token operator">|</span> --------- <span class="token operator">|</span> ------------- <span class="token operator">|</span>
<span class="token operator">|</span> \u4E3B-\u817E\u8BAF\u4E91 <span class="token operator">|</span> <span class="token number">124.70</span>.39.252 <span class="token operator">|</span>
<span class="token operator">|</span> \u4ECE-\u534E\u4E3A\u4E91 <span class="token operator">|</span> <span class="token number">124.70</span>.6.97   <span class="token operator">|</span>
<span class="token operator">|</span> \u4ECE-\u534E\u4E3A\u4E91 <span class="token operator">|</span> <span class="token number">120.46</span>.193.37 <span class="token operator">|</span>

<span class="token operator">&gt;</span> \u4E3A\u4E86\u5BB9\u6613\u533A\u5206\uFF0C\u4E0B\u9762\u7684cdh1\u3001cdh2\u3001cdh3\u5206\u522B\u5BF9\u5E94\u4E0A\u9762\u8868\u683C\u7684\u4E09\u53F0\u670D\u52A1\u5668\u3002

\`\`<span class="token variable"><span class="token variable">\`</span><span class="token function">bash</span>
<span class="token comment">#\u4E09\u53F0\u673A\u5668\u4E92\u76F8\u514D\u5BC6\u767B\u5F55</span>
<span class="token comment">#1\u3001\u4E09\u53F0\u673A\u5668\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</span>
<span class="token punctuation">[</span>root@cdh1 ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen -t rsa</span>
<span class="token punctuation">[</span>root@cdh2 ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen -t rsa</span>
<span class="token punctuation">[</span>root@cdh3 ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen -t rsa</span>

<span class="token comment">#2\u3001\u8FDB\u5165/.ssh/\u76EE\u5F55 \u8BE5\u76EE\u5F55\u5B58\u653E\u5BC6\u94A5\u5BF9</span>
<span class="token punctuation">[</span>root@cdh1 ~<span class="token punctuation">]</span><span class="token comment"># cd ~/.ssh/</span>

<span class="token comment">#3\u3001\u65B0\u5EFAauthorized_keys\u5E76\u8BBE\u7F6E\u6743\u9650</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># touch authorized_keys</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># chmod 600 authorized_keys </span>

<span class="token comment">#4\u3001\u516C\u94A5\u8FFD\u52A0 authorized_keys </span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># cat id_rsa.pub &gt;&gt; authorized_keys</span>

<span class="token comment">#5\u3001\u53E6\u5916\u4E24\u53F0\u673A\u5668\u4E5F\u6267\u884C\u5982\u4E0B\u64CD\u4F5C</span>
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

<span class="token comment">#6\u3001\u628Acdh2\u7684\u516C\u94A5\u8FFD\u52A0\u5230cdh1\u7684authorized_keys</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh1:/home/</span>
<span class="token function">scp</span> id_rsa.pub <span class="token number">124.70</span>.39.252:/home/
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#7\u3001\u628Acdh1\u7684\u516C\u94A5\u8FFD\u52A0\u5230cdh2\u7684authorized_keys</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh2:/home/</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#8\u3001\u628Acdh1\u7684\u516C\u94A5\u8FFD\u52A0\u5230cdh3\u7684authorized_keys</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh3:/home/</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#9\u3001\u628Acdh2\u7684\u516C\u94A5\u8FFD\u52A0\u5230cdh3\u7684authorized_keys</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh3:/home/</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#10\u3001\u628Acdh3\u7684\u516C\u94A5\u8FFD\u52A0\u5230cdh1\u7684authorized_keys</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh1:/home/</span>
<span class="token punctuation">[</span>root@cdh1 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#10\u3001\u628Acdh3\u7684\u516C\u94A5\u8FFD\u52A0\u5230cdh2\u7684authorized_keys</span>
<span class="token punctuation">[</span>root@cdh3 .ssh<span class="token punctuation">]</span><span class="token comment"># scp id_rsa.pub cdh2:/home/</span>
<span class="token punctuation">[</span>root@cdh2 .ssh<span class="token punctuation">]</span><span class="token comment"># cat /home/id_rsa.pub &gt;&gt; ./authorized_keys</span>

<span class="token comment">#\u6B64\u65F6cdh1\u3001cdh2\u3001cdh3\u4E92\u76F8\u514D\u5BC6</span>
<span class="token variable">\`</span></span>\`<span class="token variable"><span class="token variable">\`</span>

<span class="token comment">## \u4E8C\u3001\u5B89\u88C5ansible\u73AF\u5883</span>

\u7565

<span class="token comment">## \u4E09\u3001\u9A8C\u8BC1presto\u7684yml\u811A\u672C</span>

\u8FDB\u5165hosts\u4FEE\u6539hostname\u548Cip\u5730\u5740\u7684\u6620\u5C04\u5173\u7CFB\u3002

\u8FD0\u884C<span class="token variable">\`</span></span>ansible-playbook <span class="token parameter variable">-i</span> hosts deploy-cluster.yml\`\u547D\u4EE4\u3002

<span class="token operator">!</span><span class="token punctuation">[</span>image-20220607152541141<span class="token punctuation">]</span><span class="token punctuation">(</span>C:/Users/Weiser/AppData/Roaming/Typora/typora-user-images/image-20220607152541141.png<span class="token punctuation">)</span>

\u62A5\u9519\u6709\uFF1Apython\u5E93\u5BFC\u5165\u4E0D\u6210\u529F\uFF0C\u9632\u706B\u5899\u4E0D\u8FD0\u884C\uFF08\u6309\u7406\u8BF4\u96C6\u7FA4\u5E94\u8BE5\u5173\u95ED\u9632\u706B\u5899\u624D\u5BF9\uFF0C\u5F00\u542F\u9632\u706B\u5899\u540E\u8BE5\u62A5\u9519\u6D88\u5931\uFF09\uFF0CSELinux is disabled.

<span class="token operator">!</span><span class="token punctuation">[</span>image-20220607155317220<span class="token punctuation">]</span><span class="token punctuation">(</span>C:/Users/Weiser/AppData/Roaming/Typora/typora-user-images/image-20220607155317220.png<span class="token punctuation">)</span>

<span class="token comment">## \u56DB\u3001\u9A8C\u8BC1redis\u7684yml\u811A\u672C</span>

<span class="token operator">!</span><span class="token punctuation">[</span>image-20220607160532084<span class="token punctuation">]</span><span class="token punctuation">(</span>C:/Users/Weiser/AppData/Roaming/Typora/typora-user-images/image-20220607160532084.png<span class="token punctuation">)</span>

redis_join_cluster.sh\u51FA\u4E86\u9519\u8BEF\uFF0C\u5BFC\u81F4redis1failed\u4E86\u3002\u5176\u4ED6\u5747\u65E0\u95EE\u9898\u3002xxxxxxxxxx1 <span class="token number">1</span>$ <span class="token function">git</span> push origin :refs/tags/<span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[c];function i(p,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","linux\u547D\u4EE4.html.vue"]]);export{r as default};
