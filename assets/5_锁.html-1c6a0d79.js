import{_ as e,V as o,W as c,Z as d}from"./framework-bda32edb.js";const i={},t=d('<h1 id="锁" tabindex="-1"><a class="header-anchor" href="#锁" aria-hidden="true">#</a> 锁</h1><p>事务并发访问同一数据资源的情况主要就分为<code>读-读</code>、<code>写-写</code>和<code>读-写</code>三种。</p><ol><li><code>读-读</code> 即并发事务同时访问同一行数据记录。由于两个事务都进行只读操作，不会对记录造成任何影响，因此并发读完全允许。</li><li><code>写-写</code> 即并发事务同时修改同一行数据记录。这种情况下可能导致<code>脏写</code>问题，这是任何情况下都不允许发生的，因此只能通过<code>加锁</code>实现，也就是当一个事务需要对某行记录进行修改时，首先会先给这条记录加锁，如果加锁成功则继续执行，否则就排队等待，事务执行完成或回滚会自动释放锁。</li><li><code>读-写</code> 即一个事务进行读取操作，另一个进行写入操作。这种情况下可能会产生<code>脏读</code>、<code>不可重复读</code>、<code>幻读</code>。最好的方案是<strong>读操作利用多版本并发控制（<code>MVCC</code>），写操作进行加锁</strong>。</li></ol><p>按锁作用的数据范围进行分类的话，锁可以分为<code>行级锁</code>和<code>表级锁</code>。</p><ol><li><code>行级锁</code>：作用在数据行上，锁的粒度比较小。</li><li><code>表级锁</code>：作用在整张数据表上，锁的粒度比较大。</li></ol><h2 id="锁的分类" tabindex="-1"><a class="header-anchor" href="#锁的分类" aria-hidden="true">#</a> 锁的分类</h2><p>为了实现<code>读-读</code>之间不受影响，并且<code>写-写</code>、<code>读-写</code>之间能够相互阻塞，<code>Mysql</code>使用了<code>读写锁</code>的思路进行实现，具体来说就是分为了<code>共享锁</code>和<code>排它锁</code>：</p><ol><li><code>共享锁(Shared Locks)</code>：简称<code>S锁</code>，在事务要读取一条记录时，需要先获取该记录的<code>S锁</code>。<code>S锁</code>可以在同一时刻被多个事务同时持有。我们可以用<code>select ...... lock in share mode;</code>的方式手工加上一把<code>S锁</code>。</li><li><code>排他锁(Exclusive Locks)</code>：简称<code>X锁</code>，在事务要改动一条记录时，需要先获取该记录的<code>X锁</code>。<code>X锁</code>在同一时刻最多只能被一个事务持有。<code>X锁</code>的加锁方式有两种，第一种是自动加锁，在对数据进行增删改的时候，都会默认加上一个<code>X锁</code>。还有一种是手工加锁，我们用一个<code>FOR UPDATE</code>给一行数据加上一个<code>X锁</code>。</li></ol><p>还需要注意的一点是，如果一个事务已经持有了某行记录的<code>S锁</code>，另一个事务是无法为这行记录加上<code>X锁</code>的，反之亦然。</p><p>除了<code>共享锁(Shared Locks)</code>和<code>排他锁(Exclusive Locks)</code>，<code>Mysql</code>还有<code>意向锁(Intention Locks)</code>。意向锁是由数据库自己维护的，一般来说，当我们给一行数据加上共享锁之前，数据库会自动在这张表上面加一个<code>意向共享锁(IS锁)</code>；当我们给一行数据加上排他锁之前，数据库会自动在这张表上面加一个<code>意向排他锁(IX锁)</code>。<strong><code>意向锁</code>可以认为是<code>S锁</code>和<code>X锁</code>在数据表上的标识，通过意向锁可以快速判断表中是否有记录被上锁，从而避免通过遍历的方式来查看表中有没有记录被上锁，提升加锁效率</strong>。例如，我们要加表级别的<code>X锁</code>，这时候数据表里面如果存在行级别的<code>X锁</code>或者<code>S锁</code>的，加锁就会失败，此时直接根据<code>意向锁</code>就能知道这张表是否有行级别的<code>X锁</code>或者<code>S锁</code>。</p><h2 id="innodb中的表级锁" tabindex="-1"><a class="header-anchor" href="#innodb中的表级锁" aria-hidden="true">#</a> InnoDB中的表级锁</h2><p><code>InnoDB</code>中的表级锁主要包括表级别的<code>意向共享锁(IS锁)</code>和<code>意向排他锁(IX锁)</code>以及<code>自增锁(AUTO-INC锁)</code>。其中<code>IS锁</code>和<code>IX锁</code>在前面已经介绍过了，这里不再赘述，我们接下来重点了解一下<code>AUTO-INC锁</code>。</p><p>大家都知道，如果我们给某列字段加了<code>AUTO_INCREMENT</code>自增属性，插入的时候不需要为该字段指定值，系统会自动保证递增。系统实现这种自动给<code>AUTO_INCREMENT</code>修饰的列递增赋值的原理主要是两个：</p><ol><li><code>AUTO-INC锁</code>：在执行插入语句的时先加上表级别的<code>AUTO-INC锁</code>，插入执行完成后立即释放锁。<strong>如果我们的插入语句在执行前无法确定具体要插入多少条记录，比如<code>INSERT ... SELECT</code>这种插入语句，一般采用<code>AUTO-INC锁</code>的方式</strong>。</li><li><code>轻量级锁</code>：在插入语句生成<code>AUTO_INCREMENT</code>值时先才获取这个<code>轻量级锁</code>，然后在<code>AUTO_INCREMENT</code>值生成之后就释放<code>轻量级锁</code>。<strong>如果我们的插入语句在执行前就可以确定具体要插入多少条记录，那么一般采用轻量级锁的方式对AUTO_INCREMENT修饰的列进行赋值</strong>。这种方式可以避免锁定表，可以提升插入性能。</li></ol><blockquote><p>mysql默认根据实际场景自动选择加锁方式，当然也可以通过<code>innodb_autoinc_lock_mode</code>强制指定只使用其中一种。</p></blockquote><h2 id="innodb中的行级锁" tabindex="-1"><a class="header-anchor" href="#innodb中的行级锁" aria-hidden="true">#</a> InnoDB中的行级锁</h2><p>前面说过，通过<code>MVCC</code>可以解决<code>脏读</code>、<code>不可重复读</code>、<code>幻读</code>这些读一致性问题，但实际上这只是解决了普通<code>select</code>语句的数据读取问题。事务利用<code>MVCC</code>进行的读取操作称之为<code>快照读</code>，所有普通的<code>SELECT</code>语句在<code>READ COMMITTED</code>、<code>REPEATABLE READ</code>隔离级别下都算是<code>快照读</code>。除了<code>快照读</code>之外，还有一种是<code>锁定读</code>，即在读取的时候给记录加锁，在<code>锁定读</code>的情况下依然要解决<code>脏读</code>、<code>不可重复读</code>、<code>幻读</code>的问题。由于都是在记录上加锁，这些锁都属于<code>行级锁</code>。</p><p><strong><code>InnoDB</code>的行锁，是通过锁住索引来实现的，如果加锁查询的时候没有使用过索引，会将整个聚簇索引都锁住，相当于锁表了</strong>。根据锁定范围的不同，行锁可以使用<code>记录锁(Record Locks)</code>、<code>间隙锁(Gap Locks)</code>和<code>临键锁(Next-Key Locks)</code>的方式实现。假设现在有一张表<code>t</code>，主键是<code>id</code>。我们插入了4行数据，主键值分别是 1、4、7、10。接下来我们就以聚簇索引为例，具体介绍三种形式的行锁。</p><ul><li>记录锁(Record Locks) 所谓记录，就是指聚簇索引中真实存放的数据，比如上面的1、4、7、10都是记录。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26b24db0f37f45ae9a2dfd246b11a2cf~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="Record"> 显然，记录锁就是直接锁定某行记录。当我们使用唯一性的索引(包括唯一索引和聚簇索引)进行等值查询且精准匹配到一条记录时，此时就会直接将这条记录锁定。例如<code>select * from t where id =4 for update;</code>就会将<code>id=4</code>的记录锁定。</li><li>间隙锁(Gap Locks) 间隙指的是两个记录之间逻辑上尚未填入数据的部分，比如上述的(1,4)、(4,7)等。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc7ac74de3eb4db3941f09431d471f88~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="Gap"> 同理，间隙锁就是锁定某些间隙区间的。当我们使用用等值查询或者范围查询，并且没有命中任何一个<code>record</code>，此时就会将对应的间隙区间锁定。例如<code>select * from t where id =3 for update;</code>或者<code>select * from t where id &gt; 1 and id &lt; 4 for update;</code>就会将(1,4)区间锁定。</li><li>临键锁(Next-Key Locks) 临键指的是间隙加上它右边的记录组成的左开右闭区间。比如上述的(1,4]、(4,7]等。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/988a54f19d25481db6e22b304a9b8e23~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="Next-Key"> 临键锁就是记录锁(Record Locks)和间隙锁(Gap Locks)的结合，即除了锁住记录本身，还要再锁住索引之间的间隙。当我们使用范围查询，并且命中了部分<code>record</code>记录，此时锁住的就是临键区间。注意，临键锁锁住的区间会包含最后一个record的右边的临键区间。例如<code>select * from t where id &gt; 5 and id &lt;= 7 for update;</code>会锁住(4,7]、(7,+∞)。mysql默认行锁类型就是<code>临键锁(Next-Key Locks)</code>。当使用唯一性索引，等值查询匹配到一条记录的时候，临键锁(Next-Key Locks)会退化成记录锁；没有匹配到任何记录的时候，退化成间隙锁。</li></ul><p><code>间隙锁(Gap Locks)</code>和<code>临键锁(Next-Key Locks)</code>都是用来解决幻读问题的，在<code>已提交读（READ COMMITTED）</code>隔离级别下，<code>间隙锁(Gap Locks)</code>和<code>临键锁(Next-Key Locks)</code>都会失效！</p><h2 id="两阶段锁协议-two-pahse-locking-2pl" tabindex="-1"><a class="header-anchor" href="#两阶段锁协议-two-pahse-locking-2pl" aria-hidden="true">#</a> 两阶段锁协议（Two-Pahse Locking -- 2PL）</h2><p>两阶段锁协议规定所有的事务应遵守的规则：</p><ol><li>在对任何数据进行读写操作之前，首先要申请并获得对该数据的封锁</li><li>在释放一个封锁之后，事务不再申请和获得其它任何封锁</li></ol><p>即事务的执行分为两个阶段：</p><ol><li>第一阶段是获取封锁的阶段，称为扩展阶段</li><li>第二阶段是释放封锁的阶段，称为收缩阶段</li></ol><p>在InnoDB事务中，行锁在需要的时候才加上，但是并不是不需要了就立马释放，而是要等到事务结束才会释放</p><blockquote><p>如果一个事务需要锁多个行，要把最可能造成锁冲突，<strong>最可能影响并发的锁尽量往后放</strong></p></blockquote>',27),l=[t];function a(r,s){return o(),c("div",null,l)}const p=e(i,[["render",a],["__file","5_锁.html.vue"]]);export{p as default};
