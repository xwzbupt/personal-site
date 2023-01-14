import{_ as l,V as t,W as d,$ as e,a0 as o,Y as r,Z as i,F as g}from"./framework-bda32edb.js";const s={},c=i('<h1 id="redo-log、binlog和undo-log" tabindex="-1"><a class="header-anchor" href="#redo-log、binlog和undo-log" aria-hidden="true">#</a> redo log、binlog和undo log</h1><h2 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log" aria-hidden="true">#</a> redo log</h2><p>不知道你还记不记得《孔乙己》这篇文章，酒店掌柜有一个粉板，专门用来记录客人的赊账记录。如果赊账的人不多，那么他可以把顾客名和账目写在板上。但如果赊账的人多了，粉板总会有记不下的时候，这个时候掌柜一定还有一个专门记录赊账的账本。</p><p>如果有人要赊账或者还账的话，掌柜一般有两种做法：</p><ul><li>一种做法是直接把账本翻出来，把这次赊的账加上去或者扣除掉；</li><li>另一种做法是先在粉板上记下这次的账，等打烊以后再把账本翻出来核算。</li></ul><p>在生意红火柜台很忙时，掌柜一定会选择后者，因为前者操作实在是太麻烦了。首先，你得找到这个人的赊账总额那条记录。你想想，密密麻麻几十页，掌柜要找到那个名字，可能还得带上老花镜慢慢找，找到之后再拿出算盘计算，最后再将结果写回到账本上。</p><p>这整个过程想想都麻烦。相比之下，还是先在粉板上记一下方便。你想想，如果掌柜没有粉板的帮助，每次记账都得翻账本，效率是不是低得让人难以忍受？</p><p>同样，在 MySQL 里也有这个问题，如果每一次的更新操作都需要写进磁盘，然后磁盘也要找到对应的那条记录，然后再更新，整个过程 IO 成本、查找成本都很高。为了解决这个问题，MySQL 的设计者就用了类似酒店掌柜粉板的思路来提升更新效率。</p><p><strong>而粉板和账本配合的整个过程，其实就是 MySQL 里经常说到的 WAL 技术，WAL 的全称是 Write-Ahead Logging，它的关键点就是先写日志，再写磁盘，也就是先写粉板，等不忙的时候再写账本。</strong></p><p>具体来说，当有一条记录需要更新的时候，InnoDB 引擎就会先把记录写到 redo log（粉板）里面，并更新内存，这个时候更新就算完成了。同时，InnoDB 引擎会在适当的时候，将这个操作记录更新到磁盘里面，而这个更新往往是在系统比较空闲的时候做，这就像打烊以后掌柜做的事。</p><p>如果今天赊账的不多，掌柜可以等打烊后再整理。但如果某天赊账的特别多，粉板写满了，又怎么办呢？这个时候掌柜只好放下手中的活儿，把粉板中的一部分赊账记录更新到账本中，然后把这些记录从粉板上擦掉，为记新账腾出空间。</p><p>与此类似，InnoDB 的 redo log 是固定大小的，比如可以配置为一组 4 个文件，每个文件的大小是 1GB，那么这块“粉板”总共就可以记录 4GB 的操作。从头开始写，写到末尾就又回到开头循环写，如下面这个图所示。</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/记录.png" alt="记录"></p><p>write pos 是当前记录的位置，一边写一边后移，写到第 3 号文件末尾后就回到 0 号文件开头。checkpoint 是当前要擦除的位置，也是往后推移并且循环的，擦除记录前要把记录更新到数据文件。</p><p>write pos 和 checkpoint 之间的是“粉板”上还空着的部分，可以用来记录新的操作。如果 write pos 追上 checkpoint，表示“粉板”满了，这时候不能再执行新的更新，得停下来先擦掉一些记录，把 checkpoint 推进一下。</p><p><strong>有了 redo log，InnoDB 就可以保证即使数据库发生异常重启，之前提交的记录都不会丢失，这个能力称为crash-safe。</strong></p><h2 id="binlog" tabindex="-1"><a class="header-anchor" href="#binlog" aria-hidden="true">#</a> binlog</h2><p>前面我们讲过，MySQL 整体来看，其实就有两块：一块是 Server 层，它主要做的是 MySQL 功能层面的事情；还有一块是引擎层，负责存储相关的具体事宜。<strong>上面我们聊到的 redo log 是 InnoDB 引擎特有的日志，而 Server 层也有自己的日志，称为 binlog（归档日志）。</strong></p><p>我想你肯定会问，为什么会有两份日志呢？</p><p>因为最开始 MySQL 里并没有 InnoDB 引擎。MySQL 自带的引擎是 MyISAM，但是 MyISAM 没有 crash-safe 的能力，binlog 日志只能用于归档。而 InnoDB 是另一个公司以插件形式引入 MySQL 的，既然只依靠 binlog 是没有 crash-safe 能力的，所以 InnoDB 使用另外一套日志系统——也就是 redo log 来实现 crash-safe 能力。</p><p><strong>这两种日志有以下三点不同：</strong></p><ol><li>redo log 是 InnoDB 引擎特有的；binlog 是 MySQL 的 Server 层实现的，所有引擎都可以使用。</li><li>redo log 是物理日志，记录的是“在某个数据页上做了什么修改”；binlog 是逻辑日志，记录的是这个语句的原始逻辑，比如“给 ID=2 这一行的 c 字段加 1 ”。</li><li>redo log 是循环写的，空间固定会用完；binlog 是可以追加写入的。“追加写”是指 binlog 文件写到一定大小后会切换到下一个，并不会覆盖以前的日志。</li></ol><p>有了对这两个日志的概念性理解，我们再来看执行器和 InnoDB 引擎在执行这个简单的 update 语句时的内部流程。</p><ol><li>执行器先找引擎取 ID=2 这一行。ID 是主键，引擎直接用树搜索找到这一行。如果 ID=2 这一行所在的数据页本来就在内存中，就直接返回给执行器；否则，需要先从磁盘读入内存，然后再返回。</li><li>执行器拿到引擎给的行数据，把这个值加上 1，比如原来是 N，现在就是 N+1，得到新的一行数据，再调用引擎接口写入这行新数据。</li><li>引擎将这行新数据更新到内存中，同时将这个更新操作记录到 redo log 里面，此时 redo log 处于 prepare 状态。然后告知执行器执行完成了，随时可以提交事务。</li><li>执行器生成这个操作的 binlog，并把 binlog 写入磁盘。</li><li>执行器调用引擎的提交事务接口，引擎把刚刚写入的 redo log 改成提交（commit）状态，更新完成。</li></ol><p><strong>这里给出这个 update 语句的执行流程图，图中浅色框表示是在 InnoDB 内部执行的，深色框表示是在执行器中执行的。</strong></p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/update执行流程图.png" alt="update执行流程图"></p><p><strong>你可能注意到了，最后三步看上去有点“绕”，将 redo log 的写入拆成了两个步骤：prepare 和 commit，这就是&quot;两阶段提交&quot;。</strong></p><h3 id="两阶段提交" tabindex="-1"><a class="header-anchor" href="#两阶段提交" aria-hidden="true">#</a> 两阶段提交</h3><p>为什么必须有“两阶段提交”呢？这是为了让两份日志之间的逻辑一致。要说明这个问题，我们得从文章开头的那个问题说起：<strong>怎样让数据库恢复到半个月内任意一秒的状态？</strong></p><p>前面我们说过了，binlog 会记录所有的逻辑操作，并且是采用“追加写”的形式。如果你的 DBA 承诺说半个月内可以恢复，那么备份系统中一定会保存最近半个月的所有 binlog，同时系统会定期做整库备份。这里的“定期”取决于系统的重要性，可以是一天一备，也可以是一周一备。</p><p>当需要恢复到指定的某一秒时，比如某天下午两点发现中午十二点有一次误删表，需要找回数据，那你可以这么做：</p><ul><li>首先，找到最近的一次全量备份，如果你运气好，可能就是昨天晚上的一个备份，从这个备份恢复到临时库；</li><li>然后，从备份的时间点开始，将备份的 binlog 依次取出来，重放到中午误删表之前的那个时刻。</li></ul><p>这样你的临时库就跟误删之前的线上库一样了，然后你可以把表数据从临时库取出来，按需要恢复到线上库去。</p><p>好了，说完了数据恢复过程，我们回来说说，为什么日志需要“两阶段提交”。这里不妨用反证法来进行解释。</p><p>由于 redo log 和 binlog 是两个独立的逻辑，如果不用两阶段提交，要么就是先写完 redo log 再写 binlog，或者采用反过来的顺序。我们看看这两种方式会有什么问题。</p><p>仍然用前面的 update 语句来做例子。假设当前 ID=2 的行，字段 c 的值是 0，再假设执行 update 语句过程中在写完第一个日志后，第二个日志还没有写完期间发生了 crash，会出现什么情况呢？</p><ol><li><strong>先写 redo log 后写 binlog</strong>。假设在 redo log 写完，binlog 还没有写完的时候，MySQL 进程异常重启。由于我们前面说过的，redo log 写完之后，系统即使崩溃，仍然能够把数据恢复回来，所以恢复后这一行 c 的值是 1。 但是由于 binlog 没写完就 crash 了，这时候 binlog 里面就没有记录这个语句。因此，之后备份日志的时候，存起来的 binlog 里面就没有这条语句。 然后你会发现，如果需要用这个 binlog 来恢复临时库的话，由于这个语句的 binlog 丢失，这个临时库就会少了这一次更新，恢复出来的这一行 c 的值就是 0，与原库的值不同。</li><li><strong>先写 binlog 后写 redo log</strong>。如果在 binlog 写完之后 crash，由于 redo log 还没写，崩溃恢复以后这个事务无效，所以这一行 c 的值是 0。但是 binlog 里面已经记录了“把 c 从 0 改成 1”这个日志。所以，在之后用 binlog 来恢复的时候就多了一个事务出来，恢复出来的这一行 c 的值就是 1，与原库的值不同。</li></ol><p>可以看到，如果不使用“两阶段提交”，<strong>那么数据库的状态就有可能和用它的日志恢复出来的库的状态不一致。</strong></p><p>你可能会说，这个概率是不是很低，平时也没有什么动不动就需要恢复临时库的场景呀？</p><p>其实不是的，不只是误操作后需要用这个过程来恢复数据。<strong>当你需要扩容的时候，也就是需要再多搭建一些备库来增加系统的读能力的时候，现在常见的做法也是用全量备份加上应用 binlog 来实现的，这个“不一致”就会导致你的线上出现主从数据库不一致的情况。</strong></p><p>简单说，redo log 和 binlog 都可以用于表示事务的提交状态，而两阶段提交就是让这两个状态保持逻辑上的一致。</p><h2 id="redo-log和binlog的区别" tabindex="-1"><a class="header-anchor" href="#redo-log和binlog的区别" aria-hidden="true">#</a> redo log和binlog的区别</h2><table><thead><tr><th></th><th>redo log</th><th>binlog</th></tr></thead><tbody><tr><td>文件大小</td><td><code>redo log</code>的大小是固定的。</td><td><code>binlog</code>可通过配置参数<code>max_binlog_size</code>设置每个<code>binlog</code>文件的大小。</td></tr><tr><td>实现方式</td><td><code>redo log</code>是<code>InnoDB</code>引擎层实现的，并不是所有引擎都有。</td><td><code>binlog</code>是<code>Server</code>层实现的，所有引擎都可以使用 <code>binlog</code>日志</td></tr><tr><td>记录方式</td><td>redo log 采用循环写的方式记录，当写到结尾时，会回到开头循环写日志。</td><td>binlog 通过追加的方式记录，当文件大小大于给定值后，后续的日志会记录到新的文件上</td></tr><tr><td>适用场景</td><td><code>redo log</code>适用于崩溃恢复(crash-safe)</td><td><code>binlog</code>适用于主从复制和数据恢复</td></tr></tbody></table><h2 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo log</h2>',44),a=e("strong",null,"原子性",-1),p=e("strong",null,"原子性是指对数据库的一系列操作，要么全部成功，要么全部失败，不可能出现部分成功的情况",-1),h=e("strong",null,"原子性",-1),b=e("code",null,"undo log",-1),u=e("code",null,"undo log",-1),_=e("code",null,"INSERT",-1),I=e("code",null,"DELETE",-1),D=e("code",null,"undo log",-1),f=e("code",null,"UPDATE",-1),m=e("code",null,"UPDATE",-1),B=e("code",null,"undo log",-1),S=e("code",null,"undo log",-1),y=e("code",null,"MVCC",-1),L={href:"https://juejin.cn/post/6855129007336521741",target:"_blank",rel:"noopener noreferrer"};function M(x,Q){const n=g("ExternalLinkIcon");return t(),d("div",null,[c,e("p",null,[o("数据库事务四大特性中有一个是"),a,o("，具体来说就是 "),p,o("。实际上，"),h,o("底层就是通过"),b,o("实现的。"),u,o("主要记录了数据的逻辑变化，比如一条"),_,o("语句，对应一条"),I,o("的"),D,o("，对于每个"),f,o("语句，对应一条相反的"),m,o("的"),B,o("，这样在发生错误时，就能回滚到事务之前的数据状态。同时，"),S,o("也是"),y,o("(多版本并发控制)实现的关键，这部分内容在"),e("a",L,[o("面试中的老大难-mysql事务和锁，一次性讲清楚！"),r(n)]),o("中有介绍，不再赘述。")])])}const E=l(s,[["render",M],["__file","2_日志.html.vue"]]);export{E as default};
