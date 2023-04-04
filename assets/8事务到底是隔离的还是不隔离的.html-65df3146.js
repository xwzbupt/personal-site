import{_ as p,W as t,X as e,a0 as o,a1 as n,Z as i,a2 as c,$ as s,C as l}from"./framework-d14ea875.js";const r={},u=s('<h1 id="事务到底是隔离的还是不隔离的" tabindex="-1"><a class="header-anchor" href="#事务到底是隔离的还是不隔离的" aria-hidden="true">#</a> 事务到底是隔离的还是不隔离的</h1><p>在第 3 篇文章和你讲事务隔离级别的时候提到过，如果是可重复读隔离级别，事务 T 启动的时候会创建一个视图 read-view，之后事务 T 执行期间，即使有其他事务修改了数据，事务 T 看到的仍然跟在启动时看到的一样。也就是说，一个在可重复读隔离级别下执行的事务，好像与世无争，不受外界影响。</p><p>但是，我在上一篇文章中，和你分享行锁的时候又提到，一个事务要更新一行，如果刚好有另外一个事务拥有这一行的行锁，它又不能这么超然了，会被锁住，进入等待状态。问题是，既然进入了等待状态，那么等到这个事务自己获取到行锁要更新数据的时候，它读到的值又是什么呢？</p><p>我给你举一个例子吧。下面是一个只有两行的表的初始化语句。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>t<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>k<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span><span class="token punctuation">;</span>\n<span class="token keyword">insert</span> <span class="token keyword">into</span> t<span class="token punctuation">(</span>id<span class="token punctuation">,</span> k<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/事务ABC执行流程.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里，我们需要注意的是事务的启动时机。</p><p><strong>begin/start transaction 命令并不是一个事务的起点，在执行到它们之后的第一个操作 InnoDB 表的语句，事务才真正启动。如果你想要马上启动一个事务，可以使用 start transaction with consistent snapshot 这个命令。</strong></p><blockquote><p>第一种启动方式，一致性视图是在第执行第一个快照读语句时创建的；</p><p>第二种启动方式，一致性视图是在执行 start transaction with consistent snapshot 时创建的。</p></blockquote><p>还需要注意的是，在整个专栏里面，我们的例子中如果没有特别说明，都是默认 autocommit=1。</p><p>在这个例子中，事务 C 没有显式地使用 begin/commit，表示这个 update 语句本身就是一个事务，语句完成的时候会自动提交。事务 B 在更新了行之后查询 ; 事务 A 在一个只读事务中查询，并且时间顺序上是在事务 B 的查询之后。</p><p>这时，如果我告诉你事务 B 查到的 k 的值是 3，而事务 A 查到的 k 的值是 1，你是不是感觉有点晕呢？</p><p>所以，今天这篇文章，我其实就是想和你说明白这个问题，希望借由把这个疑惑解开的过程，能够帮助你对 InnoDB 的事务和锁有更进一步的理解。</p><p>在 MySQL 里，有两个“视图”的概念：</p><ul><li>一个是 view。它是一个用查询语句定义的虚拟表，在调用的时候执行查询语句并生成结果。创建视图的语法是 create view … ，而它的查询方法与表一样。</li><li>另一个是 InnoDB 在实现 MVCC 时用到的一致性读视图，即 consistent read view，用于支持 RC（Read Committed，读提交）和 RR（Repeatable Read，可重复读）隔离级别的实现。</li></ul><p>它没有物理结构，作用是事务执行期间用来定义“我能看到什么数据”。</p>',16),d=s('<h2 id="快照-在-mvcc-里是怎么工作的" tabindex="-1"><a class="header-anchor" href="#快照-在-mvcc-里是怎么工作的" aria-hidden="true">#</a> “快照”在 MVCC 里是怎么工作的？</h2><p>在可重复读隔离级别下，事务在启动的时候就“拍了个快照”。注意，这个快照是基于整库的。</p><p>这时，你会说这看上去不太现实啊。如果一个库有 100G，那么我启动一个事务，MySQL 就要拷贝 100G 的数据出来，这个过程得多慢啊。可是，我平时的事务执行起来很快啊。</p><p>实际上，我们并不需要拷贝出这 100G 的数据。我们先来看看这个快照是怎么实现的。</p><p>InnoDB 里面每个事务有一个唯一的事务 ID，叫作 transaction id。它是在事务开始的时候向 InnoDB 的事务系统申请的，是按申请顺序严格递增的。</p><p>而每行数据也都是有多个版本的。每次事务更新数据的时候，都会生成一个新的数据版本，并且把 transaction id 赋值给这个数据版本的事务 ID，记为 row trx_id。同时，旧的数据版本要保留，并且在新的数据版本中，能够有信息可以直接拿到它。</p><p>也就是说，数据表中的一行记录，其实可能有多个版本 (row)，每个版本有自己的 row trx_id。</p><p>如图 2 所示，就是一个记录被多个事务连续更新后的状态。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/行状态变更图.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>图中虚线框里是同一行数据的 4 个版本，当前最新版本是 V4，k 的值是 22，它是被 transaction id 为 25 的事务更新的，因此它的 row trx_id 也是 25。</p><p>你可能会问，前面的文章不是说，语句更新会生成 undo log（回滚日志）吗？那么，undo log 在哪呢？</p><p>实际上，图 2 中的三个虚线箭头，就是 undo log；<strong>而 V1、V2、V3 并不是物理上真实存在的，而是每次需要的时候根据当前版本和 undo log 计算出来的。</strong> 比如，需要 V2 的时候，就是通过 V4 依次执行 U3、U2 算出来。</p><p>明白了多版本和 row trx_id 的概念后，我们再来想一下，InnoDB 是怎么定义那个“100G”的快照的。</p><p>按照可重复读的定义，一个事务启动的时候，能够看到所有已经提交的事务结果。但是之后，这个事务执行期间，其他事务的更新对它不可见。</p><p>因此，一个事务只需要在启动的时候声明说，“以我启动的时刻为准，如果一个数据版本是在我启动之前生成的，就认；如果是我启动以后才生成的，我就不认，我必须要找到它的上一个版本”。</p><p>当然，如果“上一个版本”也不可见，那就得继续往前找。还有，如果是这个事务自己更新的数据，它自己还是要认的。</p><p>在实现上， InnoDB 为每个事务构造了一个数组，用来保存这个事务启动瞬间，当前正在“活跃”的所有事务 ID。“活跃”指的就是，启动了但还没提交。</p><p>数组里面事务 ID 的最小值记为低水位，当前系统里面已经创建过的事务 ID 的最大值加 1 记为高水位。</p><p>这个视图数组和高水位，就组成了当前事务的一致性视图（read-view）。</p><p>而数据版本的可见性规则，就是基于数据的 row trx_id 和这个一致性视图的对比结果得到的。</p><p>这个视图数组把所有的 row trx_id 分成了几种不同的情况。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/数据版本可见性规则.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样，对于当前事务的启动瞬间来说，一个数据版本的 row trx_id，有以下几种可能：</p><ol><li><p>如果落在绿色部分，表示这个版本是已提交的事务或者是当前事务自己生成的，这个数据是可见的；</p></li><li><p>如果落在红色部分，表示这个版本是由将来启动的事务生成的，是肯定不可见的；</p></li><li><p>如果落在黄色部分，那就包括两种情况 a. 若 row trx_id 在数组中，表示这个版本是由还没提交的事务生成的，不可见； b. 若 row trx_id 不在数组中，表示这个版本是已经提交了的事务生成的，可见。</p></li></ol><p>比如，对于图 2 中的数据来说，如果有一个事务，它的低水位是 18，那么当它访问这一行数据时，就会从 V4 通过 U3 计算出 V3，所以在它看来，这一行的值是 11。</p><p>你看，有了这个声明后，系统里面随后发生的更新，是不是就跟这个事务看到的内容无关了呢？因为之后的更新，生成的版本一定属于上面的 2 或者 3(a) 的情况，而对它来说，这些新的数据版本是不存在的，所以这个事务的快照，就是“静态”的了。</p><p>所以你现在知道了，InnoDB 利用了“所有数据都有多个版本”的这个特性，实现了“秒级创建快照”的能力。</p><p>接下来，我们继续看一下图 1 中的三个事务，分析下事务 A 的语句返回的结果，为什么是 k=1。</p><p>这里，我们不妨做如下假设：</p><p>事务 A 开始前，系统里面只有一个活跃事务 ID 是 99；</p><p>事务 A、B、C 的版本号分别是 100、101、102，且当前系统里只有这四个事务；</p><p>三个事务开始前，(1,1）这一行数据的 row trx_id 是 90。</p><p>这样，事务 A 的视图数组就是 [99,100], 事务 B 的视图数组是 [99,100,101], 事务 C 的视图数组是 [99,100,101,102]。</p><p>为了简化分析，我先把其他干扰语句去掉，只画出跟事务 A 查询逻辑有关的操作：</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/事务A查询数据逻辑图.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从图中可以看到，第一个有效更新是事务 C，把数据从 (1,1) 改成了 (1,2)。这时候，这个数据的最新版本的 row trx_id 是 102，而 90 这个版本已经成为了历史版本。</p><p>第二个有效更新是事务 B，把数据从 (1,2) 改成了 (1,3)。这时候，这个数据的最新版本（即 row trx_id）是 101，而 102 又成为了历史版本。</p><p>你可能注意到了，在事务 A 查询的时候，其实事务 B 还没有提交，但是它生成的 (1,3) 这个版本已经变成当前版本了。但这个版本对事务 A 必须是不可见的，否则就变成脏读了。</p><p>好，现在事务 A 要来读数据了，它的视图数组是 [99,100]。当然了，读数据都是从当前版本读起的。所以，事务 A 查询语句的读数据流程是这样的：</p><ul><li>找到 (1,3) 的时候，判断出 row trx_id=101，比高水位大，处于红色区域，不可见；</li><li>接着，找到上一个历史版本，一看 row trx_id=102，比高水位大，处于红色区域，不可见；</li><li>再往前找，终于找到了（1,1)，它的 row trx_id=90，比低水位小，处于绿色区域，可见。</li></ul><p><strong>这样执行下来，虽然期间这一行数据被修改过，但是事务 A 不论在什么时候查询，看到这行数据的结果都是一致的，所以我们称之为一致性读。</strong></p><p>这个判断规则是从代码逻辑直接转译过来的，但是正如你所见，用于人肉分析可见性很麻烦。</p><p>所以，我来给你翻译一下。<strong>一个数据版本，对于一个事务视图来说，除了自己的更新总是可见以外，有三种情况：</strong></p><ol><li><p><strong>版本未提交，不可见；</strong></p></li><li><p><strong>版本已提交，但是是在视图创建后提交的，不可见；</strong></p></li><li><p><strong>版本已提交，而且是在视图创建前提交的，可见。</strong></p></li></ol><p>现在，我们用这个规则来判断图 4 中的查询结果，事务 A 的查询语句的视图数组是在事务 A 启动的时候生成的，这时候：</p><ul><li>(1,3) 还没提交，属于情况 1，不可见；</li><li>(1,2) 虽然提交了，但是是在视图数组创建之后提交的，属于情况 2，不可见；</li><li>(1,1) 是在视图数组创建之前提交的，可见。</li></ul><p>你看，去掉数字对比后，只用时间先后顺序来判断，分析起来是不是轻松多了。所以，后面我们就都用这个规则来分析。</p><h2 id="更新逻辑" tabindex="-1"><a class="header-anchor" href="#更新逻辑" aria-hidden="true">#</a> 更新逻辑</h2><p>细心的同学可能有疑问了：事务 B 的 update 语句，如果按照一致性读，好像结果不对哦？</p><p>你看下图，事务 B 的视图数组是先生成的，之后事务 C 才提交，不是应该看不见 (1,2) 吗，怎么能算出 (1,3) 来？</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/事务B更新逻辑图.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>是的，如果事务 B 在更新之前查询一次数据，这个查询返回的 k 的值确实是 1。</p><p>但是，当它要去更新数据的时候，就不能再在历史版本上更新了，否则事务 C 的更新就丢失了。因此，事务 B 此时的 set k=k+1 是在（1,2）的基础上进行的操作。</p><p><strong>所以，这里就用到了这样一条规则：更新数据都是先读后写的，而这个读，只能读当前的值，称为“当前读”（current read）。</strong></p><p>因此，在更新的时候，当前读拿到的数据是 (1,2)，更新后生成了新版本的数据 (1,3)，这个新版本的 row trx_id 是 101。</p><p>所以，在执行事务 B 查询语句的时候，一看自己的版本号是 101，最新数据的版本号也是 101，是自己的更新，可以直接使用，所以查询得到的 k 的值是 3。</p><p>这里我们提到了一个概念，叫作当前读。其实，<strong>除了 update 语句外，select 语句如果加锁，也是当前读。</strong></p><p>所以，如果把事务 A 的查询语句 select * from t where id=1 修改一下，加上 lock in share mode 或 for update，也都可以读到版本号是 101 的数据，返回的 k 的值是 3。下面这两个 select 语句，就是分别加了读锁（S 锁，共享锁）和写锁（X 锁，排他锁）。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> k <span class="token keyword">from</span> t <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">lock</span> <span class="token operator">in</span> <span class="token keyword">share</span> <span class="token keyword">mode</span><span class="token punctuation">;</span>\nmysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> k <span class="token keyword">from</span> t <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">for</span> <span class="token keyword">update</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再往前一步，假设事务 C 不是马上提交的，而是变成了下面的事务 C’，会怎么样呢？</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/事务ABC执行流程1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>事务 C’的不同是，更新后并没有马上提交，在它提交前，事务 B 的更新语句先发起了。前面说过了，虽然事务 C’还没提交，但是 (1,2) 这个版本也已经生成了，并且是当前的最新版本。那么，事务 B 的更新语句会怎么处理呢？</p><p><strong>这时候，我们在上一篇文章中提到的“两阶段锁协议”就要上场了。事务 C’没提交，也就是说 (1,2) 这个版本上的写锁还没释放。而事务 B 是当前读，必须要读最新版本，而且必须加锁，因此就被锁住了，必须等到事务 C’释放这个锁，才能继续它的当前读。</strong></p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/事务B更新逻辑图C1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>到这里，我们把一致性读、当前读和行锁就串起来了。</p><p>现在，我们再回到文章开头的问题：事务的可重复读的能力是怎么实现的？</p><p><strong>可重复读的核心就是一致性读（consistent read）；而事务更新数据的时候，只能用当前读。如果当前的记录的行锁被其他事务占用的话，就需要进入锁等待。</strong></p><p><strong>而读提交的逻辑和可重复读的逻辑类似，它们最主要的区别是：</strong></p><ul><li><p>在可重复读隔离级别下，只需要在事务开始的时候创建一致性视图，之后事务里的其他查询都共用这个一致性视图；</p></li><li><p>在读提交隔离级别下，每一个语句执行前都会重新算出一个新的视图。</p></li></ul><p>那么，我们再看一下，在读提交隔离级别下，事务 A 和事务 B 的查询语句查到的 k，分别应该是多少呢？</p><p>这里需要说明一下，“start transaction with consistent snapshot; ”的意思是从这个语句开始，创建一个持续整个事务的一致性快照。所以，在读提交隔离级别下，这个用法就没意义了，等效于普通的 start transaction。</p><p>下面是读提交时的状态图，可以看到这两个查询语句的创建视图数组的时机发生了变化，就是图中的 read view 框。（注意：这里，我们用的还是事务 C 的逻辑直接提交，而不是事务 C’）</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/读提交隔离级别下的事务状态图.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这时，事务 A 的查询语句的视图数组是在执行这个语句的时候创建的，时序上 (1,2)、(1,3) 的生成时间都在创建这个视图数组的时刻之前。但是，在这个时刻：</p><ul><li>(1,3) 还没提交，属于情况 1，不可见；</li><li>(1,2) 提交了，属于情况 3，可见。</li></ul><p>所以，这时候事务 A 查询语句返回的是 k=2。</p><p>显然地，事务 B 查询结果 k=3。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>InnoDB 的行数据有多个版本，每个数据版本有自己的 row trx_id，每个事务或者语句有自己的一致性视图。普通查询语句是一致性读，一致性读会根据 row trx_id 和一致性视图确定数据版本的可见性。</p><ul><li>对于可重复读，查询只承认在事务启动前就已经提交完成的数据；</li><li>对于读提交，查询只承认在语句启动前就已经提交完成的数据；</li></ul><p>而当前读，总是读取已经提交完成的最新版本。</p><p>你也可以想一下，<strong>为什么表结构不支持“可重复读”？这是因为表结构没有对应的行数据，也没有 row trx_id，因此只能遵循当前读的逻辑。</strong></p><p>当然，MySQL 8.0 已经可以把表结构放在 InnoDB 字典里了，也许以后会支持表结构的可重复读。</p><h2 id="思考题" tabindex="-1"><a class="header-anchor" href="#思考题" aria-hidden="true">#</a> 思考题</h2><p>又到思考题时间了。我用下面的表结构和初始化语句作为试验环境，事务隔离级别是可重复读。现在，我要把所有“字段 c 和 id 值相等的行”的 c 值清零，但是却发现了一个“诡异”的、改不掉的情况。请你构造出这种情况，并说明其原理。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>t<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span><span class="token punctuation">;</span>\n<span class="token keyword">insert</span> <span class="token keyword">into</span> t<span class="token punctuation">(</span>id<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/8思考题.png" alt="8思考题" tabindex="0" loading="lazy"><figcaption>8思考题</figcaption></figure><p>复现出来以后，请你再思考一下，在实际的业务开发中有没有可能碰到这种情况？你的应用代码会不会掉进这个“坑”里，你又是怎么解决的呢？</p><blockquote><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/8思考题1.png" alt="8思考题1" tabindex="0" loading="lazy"><figcaption>8思考题1</figcaption></figure><p>这样，session A 看到的就是我截图的效果了。</p><p>其实，还有另外一种场景.</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/8思考题2.png" alt="8思考题2" tabindex="0" loading="lazy"><figcaption>8思考题2</figcaption></figure><p>这个操作序列跑出来，session A 看的内容也是能够复现我截图的效果的。这个 session B’启动的事务比 A 要早，其实是上期我们描述事务版本的可见性规则时留的彩蛋，因为规则里还有一个“活跃事务的判断”，我是准备留到这里再补充的。</p><p>用新的方式来分析 session B’的更新为什么对 session A 不可见就是：在 session A 视图数组创建的瞬间，session B’是活跃的，属于“版本未提交，不可见”这种情况。</p></blockquote>',89);function k(g,m){const a=l("RouterLink");return t(),e("div",null,[u,o("p",null,[n("在"),i(a,{to:"/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/3%E4%BA%8B%E5%8A%A1%E9%9A%94%E7%A6%BB.html"},{default:c(()=>[n("第 3 篇文章《事务隔离：为什么你改了我还看不见？》")]),_:1}),n("中，我跟你解释过一遍 MVCC 的实现逻辑。今天为了说明查询和更新的区别，我换一个方式来说明，把 read view 拆开。你可以结合这两篇文章的说明来更深一步地理解 MVCC。")]),d])}const f=p(r,[["render",k],["__file","8事务到底是隔离的还是不隔离的.html.vue"]]);export{f as default};
