import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.c34d8f83.js";const t={},o=e(`<h1 id="事务隔离" tabindex="-1"><a class="header-anchor" href="#事务隔离" aria-hidden="true">#</a> 事务隔离</h1><p>提到事务，你肯定不陌生，和数据库打交道的时候，我们总是会用到事务。最经典的例子就是转账，你要给朋友小王转 100 块钱，而此时你的银行卡只有 100 块钱。</p><p>转账过程具体到程序里会有一系列的操作，比如查询余额、做加减法、更新余额等，这些操作必须保证是一体的，不然等程序查完之后，还没做减法之前，你这 100 块钱，完全可以借着这个时间差再查一次，然后再给另外一个朋友转账，如果银行这么整，不就乱了么？这时就要用到“事务”这个概念了。</p><p><strong>简单来说，事务就是要保证一组数据库操作，要么全部成功，要么全部失败。</strong> 在 MySQL 中，事务支持是在引擎层实现的。你现在知道，MySQL 是一个支持多引擎的系统，但并不是所有的引擎都支持事务。比如<strong>MySQL 原生的 MyISAM 引擎就不支持事务，这也是 MyISAM 被 InnoDB 取代的重要原因之一。</strong></p><p>今天的文章里，我将会以 InnoDB 为例，剖析 MySQL 在事务支持方面的特定实现，并基于原理给出相应的实践建议，希望这些案例能加深你对 MySQL 事务原理的理解。</p><h2 id="隔离性与隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离性与隔离级别" aria-hidden="true">#</a> 隔离性与隔离级别</h2><p><strong>提到事务，你肯定会想到 ACID（Atomicity、Consistency、Isolation、Durability，即原子性、一致性、隔离性、持久性）</strong>，今天我们就来说说其中 I，也就是“隔离性”。</p><p>当数据库上有多个事务同时执行的时候，就可<strong>能出现脏读（dirty read）、不可重复读（non-repeatable read）、幻读（phantom read）的问题</strong>，为了解决这些问题，就有了“隔离级别”的概念。</p><p>在谈隔离级别之前，你首先要知道，你隔离得越严实，效率就会越低。因此很多时候，我们都要在二者之间寻找一个平衡点。<strong>SQL 标准的事务隔离级别包括：读未提交（read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（serializable ）。</strong> 下面我逐一为你解释：</p><ul><li><strong>读未提交</strong>：一个事务还没提交时，它做的变更就能被别的事务看到。</li><li><strong>读提交</strong>：一个事务提交之后，它做的变更才会被其他事务看到。</li><li><strong>可重复读</strong>：一个事务执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的。当然在可重复读隔离级别下，未提交变更对其他事务也是不可见的。这是MySQL的默认隔离级别。</li><li><strong>串行化</strong>：顾名思义是对于同一行记录，“写”会加“写锁”，“读”会加“读锁”。当出现读写锁冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行。</li></ul><p>其中“读提交”和“可重复读”比较难理解，所以我用一个例子说明这几种隔离级别。假设数据表 T 中只有一列，其中一行的值为 1，下面是按照时间顺序执行两个事务的行为。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token keyword">table</span> T<span class="token punctuation">(</span>c <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">InnoDB</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> T<span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/事务AB.png" alt="事务"></p><p>我们来看看在不同的隔离级别下，事务 A 会有哪些不同的返回结果，也就是图里面 V1、V2、V3 的返回值分别是什么。</p><ul><li><p>若隔离级别是“读未提交”， 则 V1 的值就是 2。这时候事务 B 虽然还没有提交，但是结果已经被 A 看到了。因此，V2、V3 也都是 2。</p></li><li><p>若隔离级别是“读提交”，则 V1 是 1，V2 的值是 2。事务 B 的更新在提交后才能被 A 看到。所以， V3 的值也是 2。</p></li><li><p>若隔离级别是“可重复读”，则 V1、V2 是 1，V3 是 2。之所以 V2 还是 1，遵循的就是这个要求：事务在执行期间看到的数据前后必须是一致的。</p></li><li><p>若隔离级别是“串行化”，则在事务 B 执行“将 1 改成 2”的时候，会被锁住。直到事务 A 提交后，事务 B 才可以继续执行。所以从 A 的角度看， V1、V2 值是 1，V3 的值是 2。</p></li></ul><p>在实现上，数据库里面会创建一个视图，访问的时候以视图的逻辑结果为准。在“可重复读”隔离级别下，这个视图是在事务启动时创建的，整个事务存在期间都用这个视图。在“读提交”隔离级别下，这个视图是在每个 SQL 语句开始执行的时候创建的。这里需要注意的是，“读未提交”隔离级别下直接返回记录上的最新值，没有视图概念；而“串行化”隔离级别下直接用加锁的方式来避免并行访问。</p><p>我们可以看到在不同的隔离级别下，数据库行为是有所不同的。Oracle 数据库的默认隔离级别其实就是“读提交”，因此对于一些从 Oracle 迁移到 MySQL 的应用，为保证数据库隔离级别的一致，你一定要记得将 MySQL 的隔离级别设置为“读提交”。</p><p>配置的方式是，将启动参数 transaction-isolation 的值设置成 READ-COMMITTED。你可以用 show variables 来查看当前的值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;transaction_isolation&#39;</span><span class="token punctuation">;</span>
 
<span class="token operator">+</span><span class="token comment">-----------------------+----------------+</span>
 
<span class="token operator">|</span> Variable_name <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>
 
<span class="token operator">+</span><span class="token comment">-----------------------+----------------+</span>
 
<span class="token operator">|</span> transaction_isolation <span class="token operator">|</span> <span class="token keyword">READ</span><span class="token operator">-</span><span class="token keyword">COMMITTED</span> <span class="token operator">|</span>
 
<span class="token operator">+</span><span class="token comment">-----------------------+----------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结来说，存在即合理，哪个隔离级别都有它自己的使用场景，你要根据自己的业务情况来定。我想你可能会问那什么时候需要“可重复读”的场景呢？我们来看一个数据校对逻辑的案例。</p><p>假设你在管理一个个人银行账户表。一个表存了每个月月底的余额，一个表存了账单明细。这时候你要做数据校对，也就是判断上个月的余额和当前余额的差额，是否与本月的账单明细一致。你一定希望在校对过程中，即使有用户发生了一笔新的交易，也不影响你的校对结果。</p><p>这时候使用“可重复读”隔离级别就很方便。事务启动时的视图可以认为是静态的，不受其他事务更新的影响。</p><h2 id="事务隔离的实现" tabindex="-1"><a class="header-anchor" href="#事务隔离的实现" aria-hidden="true">#</a> 事务隔离的实现</h2><p>理解了事务的隔离级别，我们再来看看事务隔离具体是怎么实现的。这里我们展开说明“可重复读”。</p><p><strong>在 MySQL 中，实际上每条记录在更新的时候都会同时记录一条回滚操作。记录上的最新值，通过回滚操作，都可以得到前一个状态的值。</strong></p><p>假设一个值从 1 被按顺序改成了 2、3、4，在回滚日志里面就会有类似下面的记录。</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/事务隔离的实现.png" alt="事务"></p><p>当前值是 4，但是在查询这条记录的时候，不同时刻启动的事务会有不同的 read-view。如图中看到的，在视图 A、B、C 里面，这一个记录的值分别是 1、2、4，同一条记录在系统中可以存在多个版本，就是数据库的<strong>多版本并发控制（MVCC）。</strong> 对于 read-view A，要得到 1，就必须将当前值依次执行图中所有的回滚操作得到。</p><p>同时你会发现，即使现在有另外一个事务正在将 4 改成 5，这个事务跟 read-view A、B、C 对应的事务是不会冲突的。</p><p>你一定会问，回滚日志总不能一直保留吧，什么时候删除呢？答案是，在不需要的时候才删除。也就是说，系统会判断，当没有事务再需要用到这些回滚日志时，回滚日志会被删除。</p><p>什么时候才不需要了呢？就是当系统里没有比这个回滚日志更早的 read-view 的时候。</p><p>基于上面的说明，我们来讨论一下为什么建议你<strong>尽量不要使用长事务。</strong></p><p>长事务意味着系统里面会存在很老的事务视图。由于这些事务随时可能访问数据库里面的任何数据，所以这个事务提交之前，数据库里面它可能用到的回滚记录都必须保留，这就会导致大量占用存储空间。</p><p>在 MySQL 5.5 及以前的版本，回滚日志是跟数据字典一起放在 ibdata 文件里的，即使长事务最终提交，回滚段被清理，文件也不会变小。我见过数据只有 20GB，而<strong>回滚段有 200GB 的库</strong>。最终只好为了清理回滚段，重建整个库。</p><p>**除了对回滚段的影响，长事务还占用锁资源，也可能拖垮整个库，**这个我们会在后面讲锁的时候展开。</p><h2 id="事务的启动方式" tabindex="-1"><a class="header-anchor" href="#事务的启动方式" aria-hidden="true">#</a> 事务的启动方式</h2><p>如前面所述，长事务有这些潜在风险，我当然是建议你尽量避免。其实很多时候业务开发同学并不是有意使用长事务，通常是由于误用所致。MySQL 的事务启动方式有以下几种：</p><p>显式启动事务语句， begin 或 start transaction。配套的提交语句是 commit，回滚语句是 rollback。</p><p>set autocommit=0，这个命令会将这个线程的自动提交关掉。意味着如果你只执行一个 select 语句，这个事务就启动了，而且并不会自动提交。这个事务持续存在直到你主动执行 commit 或 rollback 语句，或者断开连接。</p><p>有些客户端连接框架会默认连接成功后先执行一个 set autocommit=0 的命令。这就导致接下来的查询都在事务中，如果是长连接，就导致了意外的长事务。</p><p><strong>因此，我会建议你总是使用 set autocommit=1, 通过显式语句的方式来启动事务。</strong></p><p>但是有的开发同学会纠结“多一次交互”的问题。对于一个需要频繁使用事务的业务，第二种方式每个事务在开始时都不需要主动执行一次 “begin”，减少了语句的交互次数。如果你也有这个顾虑，我建议你使用 commit work and chain 语法。</p><p>在 autocommit 为 1 的情况下，用 begin 显式启动的事务，如果执行 commit 则提交事务。如果执行 commit work and chain，则是提交事务并自动启动下一个事务，这样也省去了再次执行 begin 语句的开销。同时带来的好处是从程序开发的角度明确地知道每个语句是否处于事务中。</p><p>你可以在 information_schema 库的 innodb_trx 这个表中查询长事务，比如下面这个语句，用于查找持续时间超过 60s 的事务。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> information_schema<span class="token punctuation">.</span>innodb_trx <span class="token keyword">where</span> TIME_TO_SEC<span class="token punctuation">(</span>timediff<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>trx_started<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>这篇文章里面，我介绍了 MySQL 的事务隔离级别的现象和实现，根据实现原理分析了长事务存在的风险，以及如何用正确的方式避免长事务。希望我举的例子能够帮助你理解事务，并更好地使用 MySQL 的事务特性。</p><h2 id="思考题" tabindex="-1"><a class="header-anchor" href="#思考题" aria-hidden="true">#</a> 思考题</h2><p>现在知道了系统里面应该避免长事务，如果你是业务开发负责人同时也是数据库负责人，你会有什么方案来避免出现或者处理这种情况呢？</p><blockquote><p><strong>首先，从应用开发端来看：</strong></p><ol><li>确认是否使用了 set autocommit=0。这个确认工作可以在测试环境中开展，把 MySQL 的 general_log 开起来，然后随便跑一个业务逻辑，通过 general_log 的日志来确认。一般框架如果会设置这个值，也就会提供参数来控制行为，你的目标就是把它改成 1。</li><li>确认是否有不必要的只读事务。有些框架会习惯不管什么语句先用 begin/commit 框起来。我见过有些是业务并没有这个需要，但是也把好几个 select 语句放到了事务中。这种只读事务可以去掉。</li><li>业务连接数据库的时候，根据业务本身的预估，通过 SET MAX_EXECUTION_TIME 命令，来控制每个语句执行的最长时间，避免单个语句意外执行太长时间。（为什么会意外？在后续的文章中会提到这类案例）</li></ol><p><strong>其次，从数据库端来看：</strong></p><ol><li>监控 information_schema.Innodb_trx 表，设置长事务阈值，超过就报警 / 或者 kill；</li><li>Percona 的 pt-kill 这个工具不错，推荐使用；</li><li>在业务功能测试阶段要求输出所有的 general_log，分析日志行为提前发现问题；</li><li>如果使用的是 MySQL 5.6 或者更新版本，把 innodb_undo_tablespaces 设置成 2（或更大的值）。如果真的出现大事务导致回滚段过大，这样设置后清理起来更方便。</li></ol></blockquote>`,50),p=[o];function i(l,r){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","3事务隔离.html.vue"]]);export{u as default};
