import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.68ce2b52.js";const c={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u811A\u672C\u9A8C\u8BC1</span>

<span class="token comment">## \u4E00\u30013\u53F0\u670D\u52A1\u5668\u7684ssh\u514D\u5BC6\u767B\u5F55</span>

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
<span class="token variable">\`</span></span>\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function i(p,l){return s(),a("div",null,o)}const m=n(c,[["render",i],["__file","\u514D\u5BC6\u767B\u5F55.html.vue"]]);export{m as default};
