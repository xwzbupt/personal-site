import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,d as n}from"./app-f06160db.js";const i={},d=n(`<h1 id="git笔记" tabindex="-1"><a class="header-anchor" href="#git笔记" aria-hidden="true">#</a> <p align="center"> Git笔记 </p></h1><h2 id="git介绍" tabindex="-1"><a class="header-anchor" href="#git介绍" aria-hidden="true">#</a> Git介绍</h2><ul><li>Git是分布式版本控制系统</li><li>集中式VS分布式，SVN VS Git <ol><li>SVN和Git主要的区别在于历史版本维护的位置</li><li>Git本地仓库包含代码库还有历史库，在本地的环境开发就可以记录历史而SVN的历史库存在于中央仓库，每次对比与提交代码都必须连接到中央仓库才能进行。</li><li>这样的好处在于： <ul><li>自己可以在脱机环境查看开发的版本历史。</li><li>多人开发时如果充当中央仓库的Git仓库挂了，可以随时创建一个新的中央仓库然后同步就立刻恢复了中央库。</li></ul></li></ol></li></ul><h2 id="git命令" tabindex="-1"><a class="header-anchor" href="#git命令" aria-hidden="true">#</a> Git命令</h2><h3 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置" aria-hidden="true">#</a> Git配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git config</code>命令的<code>--global</code>参数，表明这台机器上的所有Git仓库都会使用这个配置，也可以对某个仓库指定不同的用户名和邮箱地址。</p><h3 id="创建版本库" tabindex="-1"><a class="header-anchor" href="#创建版本库" aria-hidden="true">#</a> 创建版本库</h3><h4 id="初始化一个git仓库" tabindex="-1"><a class="header-anchor" href="#初始化一个git仓库" aria-hidden="true">#</a> 初始化一个Git仓库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="添加文件到git仓库" tabindex="-1"><a class="header-anchor" href="#添加文件到git仓库" aria-hidden="true">#</a> 添加文件到Git仓库</h4><p>包括两步：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;description&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git add</code>可以反复多次使用，添加多个文件，<code>git commit</code>可以一次提交很多文件，<code>-m</code>后面输入的是本次提交的说明，可以输入任意内容。</p><h3 id="查看工作区状态" tabindex="-1"><a class="header-anchor" href="#查看工作区状态" aria-hidden="true">#</a> 查看工作区状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看修改内容" tabindex="-1"><a class="header-anchor" href="#查看修改内容" aria-hidden="true">#</a> 查看修改内容</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span> HEAD -- <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>git diff</code> 可以查看工作区(work dict)和暂存区(stage)的区别</li><li><code>git diff --cached</code> 可以查看暂存区(stage)和分支(master)的区别</li><li><code>git diff HEAD -- &lt;file&gt;</code> 可以查看工作区和版本库里面最新版本的区别</li></ul><h3 id="查看提交日志" tabindex="-1"><a class="header-anchor" href="#查看提交日志" aria-hidden="true">#</a> 查看提交日志</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简化日志输出信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看命令历史" tabindex="-1"><a class="header-anchor" href="#查看命令历史" aria-hidden="true">#</a> 查看命令历史</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="版本回退" tabindex="-1"><a class="header-anchor" href="#版本回退" aria-hidden="true">#</a> 版本回退</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令是返回上一个版本，在Git中，用<code>HEAD</code>表示当前版本，上一个版本就是<code>HEAD^</code>，上上一个版本是<code>HEAD^^</code>，往上100个版本写成<code>HEAD~100</code>。</p><h3 id="回退指定版本号" tabindex="-1"><a class="header-anchor" href="#回退指定版本号" aria-hidden="true">#</a> 回退指定版本号</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>commit_id是版本号，是一个用SHA1计算出的序列</p><h3 id="工作区、暂存区和版本库" tabindex="-1"><a class="header-anchor" href="#工作区、暂存区和版本库" aria-hidden="true">#</a> 工作区、暂存区和版本库</h3><p>工作区：在电脑里能看到的目录；<br> 版本库：在工作区有一个隐藏目录<code>.git</code>，是Git的版本库。<br> Git的版本库中存了很多东西，其中最重要的就是称为stage（或者称为index）的暂存区，还有Git自动创建的<code>master</code>，以及指向<code>master</code>的指针<code>HEAD</code>。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/廖雪峰git.jpg" alt="廖雪峰git" tabindex="0" loading="lazy"><figcaption>廖雪峰git</figcaption></figure><p>进一步解释一些命令：</p><ul><li><code>git add</code>实际上是把文件添加到暂存区</li><li><code>git commit</code>实际上是把暂存区的所有内容提交到当前分支</li></ul><h3 id="撤销修改" tabindex="-1"><a class="header-anchor" href="#撤销修改" aria-hidden="true">#</a> 撤销修改</h3><h4 id="丢弃工作区的修改" tabindex="-1"><a class="header-anchor" href="#丢弃工作区的修改" aria-hidden="true">#</a> 丢弃工作区的修改</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -- <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令是指将文件在工作区的修改全部撤销，这里有两种情况：</p><ol><li>一种是file自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；</li><li>一种是file已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。</li></ol><p>总之，就是让这个文件回到最近一次git commit或git add时的状态。</p><h4 id="丢弃暂存区的修改" tabindex="-1"><a class="header-anchor" href="#丢弃暂存区的修改" aria-hidden="true">#</a> 丢弃暂存区的修改</h4><p>分两步：<br> 第一步，把暂存区的修改撤销掉(unstage)，重新放回工作区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset HEAD <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，撤销工作区的修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -- <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>小结：</p><ol><li><p>当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令<code>git checkout -- &lt;file&gt;</code>。</p></li><li><p>当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令<code>git reset HEAD &lt;file&gt;</code>，就回到了第一步，第二步按第一步操作。</p></li><li><p>已经提交了不合适的修改到版本库时，想要撤销本次提交，进行版本回退，前提是没有推送到远程库。</p></li></ol><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git rm &lt;file&gt;</code>相当于执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rm</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进一步的解释" tabindex="-1"><a class="header-anchor" href="#进一步的解释" aria-hidden="true">#</a> 进一步的解释</h4><p>Q：比如执行了<code>rm text.txt</code> 误删了怎么恢复？<br> A：执行<code>git checkout -- text.txt</code> 把版本库的东西重新写回工作区就行了<br> Q：如果执行了<code>git rm text.txt</code>我们会发现工作区的text.txt也删除了，怎么恢复？<br> A：先撤销暂存区修改，重新放回工作区，然后再从版本库写回到工作区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token function">head</span> text.txt
$ <span class="token function">git</span> checkout -- text.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Q：如果真的想从版本库里面删除文件怎么做？<br> A：执行<code>git commit -m &quot;delete text.txt&quot;</code>，提交后最新的版本库将不包含这个文件</p><h3 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h3><h4 id="创建ssh-key" tabindex="-1"><a class="header-anchor" href="#创建ssh-key" aria-hidden="true">#</a> 创建SSH Key</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;youremail@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="关联远程仓库" tabindex="-1"><a class="header-anchor" href="#关联远程仓库" aria-hidden="true">#</a> 关联远程仓库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/username/repositoryname.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送到远程仓库" aria-hidden="true">#</a> 推送到远程仓库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-u</code> 表示第一次推送master分支的所有内容，此后，每次本地提交后，只要有必要，就可以使用命令<code>git push origin master</code>推送最新修改。</p><h4 id="从远程克隆" tabindex="-1"><a class="header-anchor" href="#从远程克隆" aria-hidden="true">#</a> 从远程克隆</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/usern/repositoryname.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><h4 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git branch</code>命令会列出所有分支，当前分支前面会标一个*号。</p><h4 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建-切换分支" tabindex="-1"><a class="header-anchor" href="#创建-切换分支" aria-hidden="true">#</a> 创建+切换分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="合并某分支到当前分支" tabindex="-1"><a class="header-anchor" href="#合并某分支到当前分支" aria-hidden="true">#</a> 合并某分支到当前分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> merge <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看分支合并图" tabindex="-1"><a class="header-anchor" href="#查看分支合并图" aria-hidden="true">#</a> 查看分支合并图</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--graph</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。用<code>git log --graph</code>命令可以看到分支合并图。</p><h4 id="普通模式合并分支" tabindex="-1"><a class="header-anchor" href="#普通模式合并分支" aria-hidden="true">#</a> 普通模式合并分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> merge --no-ff <span class="token parameter variable">-m</span> <span class="token string">&quot;description&quot;</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为本次合并要创建一个新的commit，所以加上<code>-m</code>参数，把commit描述写进去。合并分支时，加上<code>--no-ff</code>参数就可以用普通模式合并，能看出来曾经做过合并，包含作者和时间戳等信息，而fast forward合并就看不出来曾经做过合并。</p><h4 id="保存工作现场" tabindex="-1"><a class="header-anchor" href="#保存工作现场" aria-hidden="true">#</a> 保存工作现场</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看工作现场" tabindex="-1"><a class="header-anchor" href="#查看工作现场" aria-hidden="true">#</a> 查看工作现场</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="恢复工作现场" tabindex="-1"><a class="header-anchor" href="#恢复工作现场" aria-hidden="true">#</a> 恢复工作现场</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="丢弃一个没有合并过的分支" tabindex="-1"><a class="header-anchor" href="#丢弃一个没有合并过的分支" aria-hidden="true">#</a> 丢弃一个没有合并过的分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看远程库信息" tabindex="-1"><a class="header-anchor" href="#查看远程库信息" aria-hidden="true">#</a> 查看远程库信息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="在本地创建和远程分支对应的分支" tabindex="-1"><a class="header-anchor" href="#在本地创建和远程分支对应的分支" aria-hidden="true">#</a> 在本地创建和远程分支对应的分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> branch-name origin/branch-name，
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本地和远程分支的名称最好一致；</p><h4 id="建立本地分支和远程分支的关联" tabindex="-1"><a class="header-anchor" href="#建立本地分支和远程分支的关联" aria-hidden="true">#</a> 建立本地分支和远程分支的关联</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch --set-upstream branch-name origin/branch-name；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="从本地推送分支" tabindex="-1"><a class="header-anchor" href="#从本地推送分支" aria-hidden="true">#</a> 从本地推送分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin branch-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果推送失败，先用git pull抓取远程的新提交；</p><h4 id="从远程抓取分支" tabindex="-1"><a class="header-anchor" href="#从远程抓取分支" aria-hidden="true">#</a> 从远程抓取分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，要先处理冲突。</p><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h3><p>tag就是一个让人容易记住的有意义的名字，它跟某个commit绑在一起。</p><h4 id="新建一个标签" tabindex="-1"><a class="header-anchor" href="#新建一个标签" aria-hidden="true">#</a> 新建一个标签</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令<code>git tag &lt;tagname&gt;</code>用于新建一个标签，默认为HEAD，也可以指定一个commit id。</p><h4 id="指定标签信息" tabindex="-1"><a class="header-anchor" href="#指定标签信息" aria-hidden="true">#</a> 指定标签信息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>description<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span> or commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git tag -a &lt;tagname&gt; -m &quot;blablabla...&quot;</code>可以指定标签信息。</p><h4 id="pgp签名标签" tabindex="-1"><a class="header-anchor" href="#pgp签名标签" aria-hidden="true">#</a> PGP签名标签</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>description<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span> or commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git tag -s &lt;tagname&gt; -m &quot;blablabla...&quot;</code>可以用PGP签名标签。</p><h4 id="查看所有标签" tabindex="-1"><a class="header-anchor" href="#查看所有标签" aria-hidden="true">#</a> 查看所有标签</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="推送一个本地标签" tabindex="-1"><a class="header-anchor" href="#推送一个本地标签" aria-hidden="true">#</a> 推送一个本地标签</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="推送全部未推送过的本地标签" tabindex="-1"><a class="header-anchor" href="#推送全部未推送过的本地标签" aria-hidden="true">#</a> 推送全部未推送过的本地标签</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除一个本地标签" tabindex="-1"><a class="header-anchor" href="#删除一个本地标签" aria-hidden="true">#</a> 删除一个本地标签</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除一个远程标签" tabindex="-1"><a class="header-anchor" href="#删除一个远程标签" aria-hidden="true">#</a> 删除一个远程标签</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin :refs/tags/<span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,131),r=[d];function t(l,c){return e(),s("div",null,r)}const p=a(i,[["render",t],["__file","git.html.vue"]]);export{p as default};