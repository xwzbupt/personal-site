import{_ as t,V as i,W as l,$ as n,a0 as s,Y as e,Z as p,F as c}from"./framework-bda32edb.js";const o={},u=p(`<h1 id="本站搭建步骤" tabindex="-1"><a class="header-anchor" href="#本站搭建步骤" aria-hidden="true">#</a> 本站搭建步骤</h1><h2 id="一、安装node-js" tabindex="-1"><a class="header-anchor" href="#一、安装node-js" aria-hidden="true">#</a> <strong>一、安装Node.js</strong></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>安装node.js是在CentOS7上的步骤，在windows的环境下同理，安装后需要配置环境变量。</p><p>建议安装最新的LTS版本的Node.js</p></div><ol><li>下载node</li></ol><p><strong>必须安装12以上的版本，这里我选择了最新的LTS版本，v16</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://registry.npmmirror.com/-/binary/node/v16.15.0/node-v16.15.0-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>解压并重命名文件夹</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> node-v16.15.0-linux-x64.tar.gz
<span class="token function">mv</span> node-v16.15.0-linux-x64 <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>添加环境变量</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile

<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_HOME</span><span class="token operator">=</span>/usr/local/node  
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$NODE_HOME</span>/bin:<span class="token environment constant">$PATH</span>

<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>验证结果</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token comment">#发现npm的版本是6，需要升级到8</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token function">npm</span> <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、git-ssh配置" tabindex="-1"><a class="header-anchor" href="#二、git-ssh配置" aria-hidden="true">#</a> <strong>二、git ssh配置</strong></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>git ssh配置是CentOS7上的操作，windows同理。</p></div><ol><li>将git和github个人信息进行绑定：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xwzbupt&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xwze@bupt.cn&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>生成公钥：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xwze@bupt.cn&quot;</span>
<span class="token builtin class-name">cd</span> ~/.ssh
<span class="token function">vim</span> id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>打开github个人账号，在设置中找到github ssh，然后粘贴密钥信息。</li><li>验证是否成功</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置这一步的目的是，不再需要在机器上进行繁琐的github账号的验证工作。</p><h2 id="三、生成项目" tabindex="-1"><a class="header-anchor" href="#三、生成项目" aria-hidden="true">#</a> <strong>三、生成项目</strong></h2><p>在github上创建仓库<code>personal-site</code>，然后选择ssh的方式克隆到本地，此时就已经将local和remote端连起来了。</p><p>选择项目放置的路径，在该路径下运行如下命令，拉取github的空项目以及将local和remote端连起来。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:xwzbupt/personal-site.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入该空项目的路径中，初始化该项目。初始化以及后续的开发步骤见<a href="./devguide">网站开发步骤</a>。</p><p>开发完毕后，可以运行<code>pnpm docs:dev</code>来生成开发服务器，接着就可以通过浏览器访问<code>localhost:8080</code>来访问网站了。此时如果修改了源代码，保存代码后开发服务器也会进行热更新。</p><p>如果在开发环境中看到项目无误后，可以构建项目进行布署。构建项目的命令是<code>pnpm docs:build</code>。</p><h2 id="四、-开发和布署项目" tabindex="-1"><a class="header-anchor" href="#四、-开发和布署项目" aria-hidden="true">#</a> <strong>四、 开发和布署项目</strong></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>有三种布署项目的方式，其中最推荐的也是我采用的方式是3。</strong></p><ol><li>云服务器上开发和构建，并布署在云服务器上</li><li>在本地操作系统开发和构建，将build后的dist目录中的内容布署到云服务器上</li><li>在本地操作系统开发，利用Github Actions在Github上构建，并将build后的dist目录放到gh-pages分支上。此时可以选择布署到Github Pages上，也可以在云服务器上拉取该分支内容并部署到该云服务器上。<strong>该步骤均为脚本自动执行。</strong></li></ol></div><h3 id="_4-1-centos上开发、构建和布署" tabindex="-1"><a class="header-anchor" href="#_4-1-centos上开发、构建和布署" aria-hidden="true">#</a> <strong>4.1 CentOS上开发、构建和布署</strong></h3><p>在云服务器上开发，需要在云服务器上配置NodeJS以及pnpm的环境，但是在构建项目的时候，云服务器的内存太小，会出现OOM的问题，虽然可以修改环境变量调整某个参数，这样不仅麻烦但还是有失败的可能。所以不太推荐用这种方法来开发。</p><h3 id="_4-2-本地开发-手动构建和布署" tabindex="-1"><a class="header-anchor" href="#_4-2-本地开发-手动构建和布署" aria-hidden="true">#</a> <strong>4.2 本地开发，手动构建和布署</strong></h3><p>在本地开发项目，使用<code>pnpm docs:dev</code>生成开发服务器，访问<code>localhost:8080</code>预览网站，准确无误后执行<code>pnpm docs:build</code>命令构建项目。将构建好的dist目录扔到云服务器中，将Nginx服务器的root指向该dist文件夹。</p><h3 id="_4-3-本地开发-自动构建和布署" tabindex="-1"><a class="header-anchor" href="#_4-3-本地开发-自动构建和布署" aria-hidden="true">#</a> <strong>4.3 本地开发，自动构建和布署</strong></h3><p>在本地开发项目，使用<code>pnpm docs:dev</code>生成开发服务器，访问<code>localhost:8080</code>预览网站，无误后将代码push到github仓库中，github actions会自动执行yml脚本。脚本代码如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># 确保这是你正在使用的分支名称</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span>
          <span class="token comment"># submodules: true</span>


      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">7</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>


      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">16</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装依赖
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile
      
      <span class="token comment"># - name: 安装typescript</span>
      <span class="token comment">#   run: pnpm install typescript</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=4096
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm run docs<span class="token punctuation">:</span>build

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 这是文档部署到的分支名称</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> docs/.vuepress/dist

      <span class="token comment"># 切换分支</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ref</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages

	  <span class="token comment"># 下面secrets的静态变量对应的内容需要在github配置</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Aliyun Server
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> easingthemes/ssh<span class="token punctuation">-</span>deploy@v2.1.5
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">SSH_PRIVATE_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SSH_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">ARGS</span><span class="token punctuation">:</span> <span class="token string">&quot;-avz --delete&quot;</span>
          <span class="token key atrule">SOURCE</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SOURCE <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">REMOTE_HOST</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.REMOTE_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">REMOTE_USER</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USER_NAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">TARGET</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.TARGET <span class="token punctuation">}</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),d={href:"https://blog.csdn.net/m0_49868348/article/details/118021532",target:"_blank",rel:"noopener noreferrer"},r=n("h2",{id:"五、troubleshooting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#五、troubleshooting","aria-hidden":"true"},"#"),s(" 五、TroubleShooting")],-1),v={href:"https://github.com/easingthemes/ssh-deploy/issues/18",target:"_blank",rel:"noopener noreferrer"};function k(m,b){const a=c("ExternalLinkIcon");return i(),l("div",null,[u,n("p",null,[s("配置nginx相关信息可以参考"),n("a",d,[s("这一篇博客"),e(a)]),s("，唯一需要注意一点的是，github仓库中gh-pages分支存放的就是dist文件夹的东西，切换到该分支，将该分支pull到云服务器中，修改nginx的conf文件，将root指向dist。")]),r,n("p",null,[n("a",v,[s("https://github.com/easingthemes/ssh-deploy/issues/18"),e(a)])])])}const g=t(o,[["render",k],["__file","guide.html.vue"]]);export{g as default};
