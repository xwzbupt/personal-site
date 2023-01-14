import{_ as e,V as o,W as d,Z as c}from"./framework-bda32edb.js";const t={},i=c('<h1 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h1><h2 id="事务-1" tabindex="-1"><a class="header-anchor" href="#事务-1" aria-hidden="true">#</a> 事务</h2><p>在维基百科中，对事务的定义是：<strong>事务是数据库管理系统(DBMS)执行过程中的一个逻辑单位，由一个有限的数据库操作序列构成</strong>。</p><h3 id="事务的四大特性" tabindex="-1"><a class="header-anchor" href="#事务的四大特性" aria-hidden="true">#</a> 事务的四大特性</h3><p>事务包含四大特性，即<strong>原子性（Atomicity）</strong>、<strong>一致性（Consistency）</strong>、<strong>隔离性（Isolation）**和**持久性（Durability）</strong>(ACID)。</p><ol><li>原子性（Atomicity） <strong>原子性是指对数据库的一系列操作，要么全部成功，要么全部失败，不可能出现部分成功的情况</strong>。以转账场景为例，一个账户的余额减少，另一个账户的余额增加，这两个操作一定是同时成功或者同时失败的。</li><li>一致性（Consistency） <strong>一致性是指数据库的完整性约束没有被破坏，在事务执行前后都是合法的数据状态</strong>。这里的一致可以表示数据库自身的约束没有被破坏，比如某些字段的唯一性约束、字段长度约束等等；还可以表示各种实际场景下的业务约束，比如上面转账操作，一个账户减少的金额和另一个账户增加的金额一定是一样的。</li><li>隔离性（Isolation） <strong>隔离性指的是多个事务彼此之间是完全隔离、互不干扰的</strong>。隔离性的最终目的也是为了保证一致性。</li><li>持久性（Durability） <strong>持久性是指只要事务提交成功，那么对数据库做的修改就被永久保存下来了，不可能因为任何原因再回到原来的状态</strong>。</li></ol><h2 id="脏读、不可重复读、幻读" tabindex="-1"><a class="header-anchor" href="#脏读、不可重复读、幻读" aria-hidden="true">#</a> 脏读、不可重复读、幻读</h2><p>在事务并发执行时，如果不进行任何控制，可能会出现以下4类问题：</p><h3 id="脏写-dirty-write" tabindex="-1"><a class="header-anchor" href="#脏写-dirty-write" aria-hidden="true">#</a> <strong>脏写（Dirty Write）</strong></h3><p><strong>脏写是指一个事务修改了其它事务未提交的数据</strong>。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11321bc291784ef7a9bfaa8375acc8b8~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="脏写"></p><p>如上图，<code>Session A</code>和<code>Session B</code>各开启了一个事务，<code>Session B</code>中的事务先将<code>number</code>列为1的记录的<code>name</code>列更新为&#39;关羽&#39;，然后<code>Session A</code>中的事务接着又把这条<code>number</code>列为1的记录的<code>name</code>列更新为张飞。如果之后<code>Session B</code>中的事务进行了回滚，那么<code>Session A</code>中的更新也将不复存在，这种现象就称之为<strong>脏写</strong>。</p><h3 id="脏读-dirty-read" tabindex="-1"><a class="header-anchor" href="#脏读-dirty-read" aria-hidden="true">#</a> 脏读（Dirty Read）</h3><p><strong>脏读是指一个事务读到了其它事务未提交的数据</strong>。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe56781305804305b11b566482d6fa15~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="脏读"></p><p>如上图，<code>Session A</code>和<code>Session B</code>各开启了一个事务，<code>Session B</code>中的事务先将<code>number</code>列为1的记录的<code>name</code>列更新为<code>&#39;关羽&#39;</code>，然后<code>Session A</code>中的事务再去查询这条<code>number</code>为1的记录，如果读到列<code>name</code>的值为<code>&#39;关羽&#39;</code>，而<code>Session B</code>中的事务稍后进行了回滚，那么<code>Session A</code>中的事务相当于读到了一个不存在的数据，这种现象就称之为<strong>脏读</strong>。</p><h3 id="不可重复读-non-repeatable-read" tabindex="-1"><a class="header-anchor" href="#不可重复读-non-repeatable-read" aria-hidden="true">#</a> 不可重复读（Non-Repeatable Read）</h3><p><strong>不可重复读指的是在一个事务执行过程中，读取到其它事务已提交的数据，导致两次读取的结果不一致</strong>。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00e6b96064af4d818e951efc346d1188~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="不可重复读"> 如上图，我们在<code>Session B</code>中提交了几个隐式事务(mysql会自动为增删改语句加事务)，这些事务都修改了<code>number</code>列为1的记录的列<code>name</code>的值，每次事务提交之后，如果<code>Session A中</code>的事务都可以查看到最新的值，这种现象也被称之为<strong>不可重复读</strong>。</p><h3 id="幻读-phantom" tabindex="-1"><a class="header-anchor" href="#幻读-phantom" aria-hidden="true">#</a> <strong>幻读（Phantom）</strong></h3><p><strong>幻读是指的是在一个事务执行过程中，读取到了其他事务新插入数据，导致两次读取的结果不一致</strong>。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5250e8a4031e4390ab2f7ab959661b83~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="幻读"> 如上图，<code>Session A</code>中的事务先根据条件<code>number &gt; 0</code>这个条件查询表<code>hero</code>，得到了<code>name</code>列值为<code>&#39;刘备&#39;</code>的记录；之后<code>Session B</code>中提交了一个隐式事务，该事务向表<code>hero</code>中插入了一条新记录；之后<code>Session A</code>中的事务再根据相同的条件<code>number &gt; 0</code>查询表<code>hero</code>，得到的结果集中包含<code>Session B</code>中的事务新插入的那条记录，这种现象也被称之为<strong>幻读</strong>。</p><blockquote><p>不可重复读和幻读的区别在于<strong>不可重复读是读到的是其他事务修改或者删除的数据，而幻读读到的是其它事务新插入的数据</strong>。</p></blockquote><p>脏写的问题太严重了，任何隔离级别都必须避免。其它无论是脏读，不可重复读，还是幻读，它们都属于数据库的读一致性的问题，都是在一个事务里面前后两次读取出现了不一致的情况。</p><h2 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h2><p>在<code>SQL</code>标准中设立了4种隔离级别，用来解决上面的读一致性问题。不同的隔离级别可以解决不同的读一致性问题。</p><ul><li><code>READ UNCOMMITTED</code>：未提交读。</li><li><code>READ COMMITTED</code>：已提交读。</li><li><code>REPEATABLE READ</code>：可重复读。</li><li><code>SERIALIZABLE</code>：串行化。</li></ul><p>各个隔离级别下可能出现的读一致性问题如下：</p><table><thead><tr><th>隔离级别</th><th>脏读</th><th>不可重复读</th><th>幻读</th></tr></thead><tbody><tr><td>未提交读（READ UNCOMMITTED）</td><td>可能</td><td>可能</td><td>可能</td></tr><tr><td>已提交读（READ COMMITTED）</td><td>不可能</td><td>可能</td><td>可能</td></tr><tr><td>可重复读（REPEATABLE READ）</td><td>不可能</td><td>不可能</td><td>可能（对InnoDB不可能）</td></tr><tr><td>串行化（SERIALIZABLE）</td><td>不可能</td><td>不可能</td><td>不可能</td></tr></tbody></table><p><code>InnoDB</code>支持四个隔离级别（和<code>SQL</code>标准定义的基本一致）。隔离级别越高，事务的并发度就越低。唯一的区别就在于，<strong><code>InnoDB</code> 在<code>可重复读（REPEATABLE READ）</code>的级别就解决了幻读的问题</strong>。这也是<code>InnoDB</code>使用<code>可重复读</code> 作为事务默认隔离级别的原因。</p><h2 id="mvcc" tabindex="-1"><a class="header-anchor" href="#mvcc" aria-hidden="true">#</a> MVCC</h2><p>MVCC(Multi Version Concurrency Control)，中文名是多版本并发控制，简单来说就是通过维护数据历史版本，从而解决并发访问情况下的读一致性问题。</p><h3 id="版本链" tabindex="-1"><a class="header-anchor" href="#版本链" aria-hidden="true">#</a> 版本链</h3><p>在<code>InnoDB</code>中，每行记录实际上都包含了两个隐藏字段：事务id(<code>trx_id</code>)和回滚指针(<code>roll_pointer</code>)。</p><ol><li><code>trx_id</code>：事务id。每次修改某行记录时，都会把该事务的事务id赋值给<code>trx_id</code>隐藏列。</li><li><code>roll_pointer</code>：回滚指针。每次修改某行记录时，都会把<code>undo</code>日志地址赋值给<code>roll_pointer</code>隐藏列。</li></ol><p>假设<code>hero</code>表中只有一行记录，当时插入的事务id为80。此时，该条记录的示例图如下： <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e41d5dcb3d704a60a3a5ded50593ee86~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="mvcc1"> 假设之后两个事务<code>id</code>分别为<code>100</code>、<code>200</code>的事务对这条记录进行<code>UPDATE</code>操作，操作流程如下： <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0ad4a317904426cac3903a89a293917~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="mvcc2"> 由于每次变动都会先把<code>undo</code>日志记录下来，并用<code>roll_pointer</code>指向<code>undo</code>日志地址。因此可以认为，<strong>对该条记录的修改日志串联起来就形成了一个<code>版本链</code>，版本链的头节点就是当前记录最新的值</strong>。如下： <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ccde9c179fae491484bfffb3d8e4f521~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="mvcc3"></p><h2 id="readview" tabindex="-1"><a class="header-anchor" href="#readview" aria-hidden="true">#</a> ReadView</h2><p>如果数据库隔离级别是<code>未提交读（READ UNCOMMITTED）</code>，那么读取版本链中最新版本的记录即可。如果是是<code>串行化（SERIALIZABLE）</code>，事务之间是加锁执行的，不存在读不一致的问题。<strong>但是如果是<code>已提交读（READ COMMITTED）</code>或者<code>可重复读（REPEATABLE READ）</code>，就需要遍历版本链中的每一条记录，判断该条记录是否对当前事务可见，直到找到为止(遍历完还没找到就说明记录不存在)</strong>。<code>InnoDB</code>通过<code>ReadView</code>实现了这个功能。<code>ReadView</code>中主要包含以下4个内容：</p><ul><li><code>m_ids</code>：表示在生成<code>ReadView</code>时当前系统中活跃的读写事务的事务id列表。</li><li><code>min_trx_id</code>：表示在生成<code>ReadView</code>时当前系统中活跃的读写事务中最小的事务id，也就是<code>m_ids</code>中的最小值。</li><li><code>max_trx_id</code>：表示生成<code>ReadView</code>时系统中应该分配给<strong>下一个事务的id值</strong>。</li><li><code>creator_trx_id</code>：表示生成该<code>ReadView</code>事务的事务id。</li></ul><p>有了<code>ReadView</code>之后，我们可以基于以下步骤判断某个版本的记录是否对当前事务可见。</p><ol><li>如果被访问版本的<code>trx_id</code>属性值与<code>ReadView</code>中的<code>creator_trx_id</code>值相同，意味着当前事务在访问它自己修改过的记录，所以该版本可以被当前事务访问。</li><li>如果被访问版本的<code>trx_id</code>属性值小于<code>ReadView</code>中的<code>min_trx_id</code>值，表明生成该版本的事务在当前事务生成<code>ReadView</code>前已经提交，所以该版本可以被当前事务访问。</li><li>如果被访问版本的<code>trx_id</code>属性值大于或等于<code>ReadView</code>中的<code>max_trx_id</code>值，表明生成该版本的事务在当前事务生成<code>ReadView</code>后才开启，所以该版本不可以被当前事务访问。</li><li>如果被访问版本的<code>trx_id</code>属性值在<code>ReadView</code>的<code>min_trx_id</code>和<code>max_trx_id</code>之间，那就需要判断一下<code>trx_id</code>属性值是不是在<code>m_ids</code>列表中，如果在，说明创建<code>ReadView</code>时生成该版本的事务还是活跃的，该版本不可以被访问；如果不在，说明创建<code>ReadView</code>时生成该版本的事务已经被提交，该版本可以被访问。</li></ol><p>在<code>MySQL</code>中，<code>READ COMMITTED</code>和<code>REPEATABLE READ</code>隔离级别的的一个非常大的区别就是它们生成<code>ReadView</code>的时机不同。<strong><code>READ COMMITTED</code>在每次读取数据前都会生成一个<code>ReadView</code></strong>，这样就能保证每次都能读到其它事务已提交的数据。<strong><code>REPEATABLE READ</code> 只在第一次读取数据时生成一个<code>ReadView</code></strong>，这样就能保证后续读取的结果完全一致。</p>',39),r=[i];function a(n,s){return o(),d("div",null,r)}const l=e(t,[["render",a],["__file","4_事务.html.vue"]]);export{l as default};
