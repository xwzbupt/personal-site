import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,d}from"./app.c34d8f83.js";const t={},l=d(`<h1 id="为什么这些sql语句逻辑相同-性能却差异巨大" tabindex="-1"><a class="header-anchor" href="#为什么这些sql语句逻辑相同-性能却差异巨大" aria-hidden="true">#</a> 为什么这些SQL语句逻辑相同，性能却差异巨大？</h1><p>在 MySQL 中，有很多看上去逻辑相同，但性能却差异巨大的 SQL 语句。对这些语句使用不当的话，就会不经意间导致整个数据库的压力变大。</p><p>我今天挑选了三个这样的案例和你分享。希望再遇到相似的问题时，你可以做到举一反三、快速解决问题。</p><h2 id="案例一-条件字段函数操作" tabindex="-1"><a class="header-anchor" href="#案例一-条件字段函数操作" aria-hidden="true">#</a> 案例一：条件字段函数操作</h2><p>假设你现在维护了一个交易系统，其中交易记录表 tradelog 包含交易流水号（tradeid）、交易员 id（operator）、交易时间（t_modified）等字段。为了便于描述，我们先忽略其他字段。这个表的建表语句如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; CREATE TABLE \`tradelog\` (
  \`id\` int(11) NOT NULL,
  \`tradeid\` varchar(32) DEFAULT NULL,
  \`operator\` int(11) DEFAULT NULL,
  \`t_modified\` datetime DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`tradeid\` (\`tradeid\`),
  KEY \`t_modified\` (\`t_modified\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设，现在已经记录了从 2016 年初到 2018 年底的所有数据，运营部门有一个需求是，要统计发生在所有年份中 7 月份的交易记录总数。这个逻辑看上去并不复杂，你的 SQL 语句可能会这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select count(*) from tradelog where month(t_modified)=7;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 t_modified 字段上有索引，于是你就很放心地在生产库中执行了这条语句，但却发现执行了特别久，才返回了结果。</p><p>如果你问 DBA 同事为什么会出现这样的情况，他大概会告诉你：如果对字段做了函数计算，就用不上索引了，这是 MySQL 的规定。</p><p>现在你已经学过了 InnoDB 的索引结构了，可以再追问一句为什么？为什么条件是 where t_modified=&#39;2018-7-1’的时候可以用上索引，而改成 where month(t_modified)=7 的时候就不行了？</p><p>下面是这个 t_modified 索引的示意图。方框上面的数字就是 month() 函数对应的值。</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/t_modified 索引示意图.png" alt="t_modified 索引示意图"></p><p>如果你的 SQL 语句条件用的是 where t_modified=&#39;2018-7-1’的话，引擎就会按照上面绿色箭头的路线，快速定位到 t_modified=&#39;2018-7-1’需要的结果。</p><p>实际上，B+ 树提供的这个快速定位能力，来源于同一层兄弟节点的有序性。</p><p>但是，如果计算 month() 函数的话，你会看到传入 7 的时候，在树的第一层就不知道该怎么办了。</p><p>也就是说，<strong>对索引字段做函数操作，可能会破坏索引值的有序性，因此优化器就决定放弃走树搜索功能。</strong></p><p>需要注意的是，优化器并不是要放弃使用这个索引。</p><p>在这个例子里，放弃了树搜索功能，优化器可以选择遍历主键索引，也可以选择遍历索引 t_modified，优化器对比索引大小后发现，索引 t_modified 更小，遍历这个索引比遍历主键索引来得更快。因此最终还是会选择索引 t_modified。</p><p>接下来，我们使用 explain 命令，查看一下这条 SQL 语句的执行结果。</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/explain 结果.png" alt="explain 结果"></p><p>key=&quot;t_modified&quot;表示的是，使用了 t_modified 这个索引；我在测试表数据中插入了 10 万行数据，rows=100335，说明这条语句扫描了整个索引的所有值；Extra 字段的 Using index，表示的是使用了覆盖索引。</p><p>也就是说，由于在 t_modified 字段加了 month() 函数操作，导致了全索引扫描。为了能够用上索引的快速定位能力，我们就要把 SQL 语句改成基于字段本身的范围查询。按照下面这个写法，优化器就能按照我们预期的，用上 t_modified 索引的快速定位能力了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select count(*) from tradelog where
    -&gt; (t_modified &gt;= &#39;2016-7-1&#39; and t_modified&lt;&#39;2016-8-1&#39;) or
    -&gt; (t_modified &gt;= &#39;2017-7-1&#39; and t_modified&lt;&#39;2017-8-1&#39;) or 
    -&gt; (t_modified &gt;= &#39;2018-7-1&#39; and t_modified&lt;&#39;2018-8-1&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果你的系统上线时间更早，或者后面又插入了之后年份的数据的话，你就需要再把其他年份补齐。</p><p>到这里我给你说明了，由于加了 month() 函数操作，MySQL 无法再使用索引快速定位功能，而只能使用全索引扫描。</p><p>不过优化器在个问题上确实有“偷懒”行为，即使是对于不改变有序性的函数，也不会考虑使用索引。比如，对于 select * from tradelog where id + 1 = 10000 这个 SQL 语句，这个加 1 操作并不会改变有序性，但是 MySQL 优化器还是不能用 id 索引快速定位到 9999 这一行。所以，需要你在写 SQL 语句的时候，手动改写成 where id = 10000 -1 才可以。</p><h2 id="案例二-隐式类型转换" tabindex="-1"><a class="header-anchor" href="#案例二-隐式类型转换" aria-hidden="true">#</a> 案例二：隐式类型转换</h2><p>接下来我再跟你说一说，另一个经常让程序员掉坑里的例子。</p><p>我们一起看一下这条 SQL 语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from tradelog where tradeid=110717;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>交易编号 tradeid 这个字段上，本来就有索引，但是 explain 的结果却显示，这条语句需要走全表扫描。你可能也发现了，tradeid 的字段类型是 varchar(32)，而输入的参数却是整型，所以需要做类型转换。</p><p>那么，现在这里就有两个问题：</p><ol><li>数据类型转换的规则是什么？</li><li>为什么有数据类型转换，就需要走全索引扫描？</li></ol><p>先来看第一个问题，你可能会说，数据库里面类型这么多，这种数据类型转换规则更多，我记不住，应该怎么办呢？</p><p>这里有一个简单的方法，看 select “10” &gt; 9 的结果：</p><ol><li>如果规则是“将字符串转成数字”，那么就是做数字比较，结果应该是 1；</li><li>如果规则是“将数字转成字符串”，那么就是做字符串比较，结果应该是 0。</li></ol><p>验证结果如图 3 所示。</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/MySQL 中字符串和数字转换的效果示意图.png" alt="MySQL 中字符串和数字转换的效果示意图"></p><p>从图中可知，select “10” &gt; 9 返回的是 1，所以你就能确认 MySQL 里的转换规则了：在 MySQL 中，字符串和数字做比较的话，是将字符串转换成数字。</p><p>这时，你再看这个全表扫描的语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from tradelog where tradeid=110717;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就知道对于优化器来说，这个语句相当于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from tradelog where  CAST(tradid AS signed int) = 110717;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也就是说，这条语句触发了我们上面说到的规则：对索引字段做函数操作，优化器会放弃走树搜索功能。</p><p>现在，我留给你一个小问题，id 的类型是 int，如果执行下面这个语句，是否会导致全表扫描呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from tradelog where id=&quot;83126&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以先自己分析一下，再到数据库里面去验证确认。</p><p>接下来，我们再来看一个稍微复杂点的例子。</p><h2 id="案例三-隐式字符编码转换" tabindex="-1"><a class="header-anchor" href="#案例三-隐式字符编码转换" aria-hidden="true">#</a> 案例三：隐式字符编码转换</h2><p>假设系统里还有另外一个表 trade_detail，用于记录交易的操作细节。为了便于量化分析和复现，我往交易日志表 tradelog 和交易详情表 trade_detail 这两个表里插入一些数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; CREATE TABLE \`trade_detail\` (
  \`id\` int(11) NOT NULL,
  \`tradeid\` varchar(32) DEFAULT NULL,
  \`trade_step\` int(11) DEFAULT NULL, /* 操作步骤 */
  \`step_info\` varchar(32) DEFAULT NULL, /* 步骤信息 */
  PRIMARY KEY (\`id\`),
  KEY \`tradeid\` (\`tradeid\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
insert into tradelog values(1, &#39;aaaaaaaa&#39;, 1000, now());
insert into tradelog values(2, &#39;aaaaaaab&#39;, 1000, now());
insert into tradelog values(3, &#39;aaaaaaac&#39;, 1000, now());
 
insert into trade_detail values(1, &#39;aaaaaaaa&#39;, 1, &#39;add&#39;);
insert into trade_detail values(2, &#39;aaaaaaaa&#39;, 2, &#39;update&#39;);
insert into trade_detail values(3, &#39;aaaaaaaa&#39;, 3, &#39;commit&#39;);
insert into trade_detail values(4, &#39;aaaaaaab&#39;, 1, &#39;add&#39;);
insert into trade_detail values(5, &#39;aaaaaaab&#39;, 2, &#39;update&#39;);
insert into trade_detail values(6, &#39;aaaaaaab&#39;, 3, &#39;update again&#39;);
insert into trade_detail values(7, &#39;aaaaaaab&#39;, 4, &#39;commit&#39;);
insert into trade_detail values(8, &#39;aaaaaaac&#39;, 1, &#39;add&#39;);
insert into trade_detail values(9, &#39;aaaaaaac&#39;, 2, &#39;update&#39;);
insert into trade_detail values(10, &#39;aaaaaaac&#39;, 3, &#39;update again&#39;);
insert into trade_detail values(11, &#39;aaaaaaac&#39;, 4, &#39;commit&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候，如果要查询 id=2 的交易的所有操作步骤信息，SQL 语句可以这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select d.* from tradelog l, trade_detail d where d.tradeid=l.tradeid and l.id=2; /* 语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/语句 Q1 的 explain 结果.png" alt="语句 Q1 的 explain 结果"></p><p>我们一起来看下这个结果：</p><ol><li>第一行显示优化器会先在交易记录表 tradelog 上查到 id=2 的行，这个步骤用上了主键索引，rows=1 表示只扫描一行；</li><li>第二行 key=NULL，表示没有用上交易详情表 trade_detail 上的 tradeid 索引，进行了全表扫描。</li></ol><p>在这个执行计划里，是从 tradelog 表中取 tradeid 字段，再去 trade_detail 表里查询匹配字段。因此，我们把 tradelog 称为驱动表，把 trade_detail 称为被驱动表，把 tradeid 称为关联字段。</p><p>接下来，我们看下这个 explain 结果表示的执行流程：</p><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/语句 Q1 的执行过程.png" alt="语句 Q1 的执行过程"></p><p>图中：</p><ul><li>第 1 步，是根据 id 在 tradelog 表里找到 L2 这一行；</li><li>第 2 步，是从 L2 中取出 tradeid 字段的值；</li><li>第 3 步，是根据 tradeid 值到 trade_detail 表中查找条件匹配的行。explain 的结果里面第二行的 key=NULL 表示的就是，这个过程是通过遍历主键索引的方式，一个一个地判断 tradeid 的值是否匹配。</li></ul><p>进行到这里，你会发现第 3 步不符合我们的预期。因为表 trade_detail 里 tradeid 字段上是有索引的，我们本来是希望通过使用 tradeid 索引能够快速定位到等值的行。但，这里并没有。</p><p>如果你去问 DBA 同学，他们可能会告诉你，因为这两个表的字符集不同，一个是 utf8，一个是 utf8mb4，所以做表连接查询的时候用不上关联字段的索引。这个回答，也是通常你搜索这个问题时会得到的答案。</p><p>但是你应该再追问一下，为什么字符集不同就用不上索引呢？</p><p>我们说问题是出在执行步骤的第 3 步，如果单独把这一步改成 SQL 语句的话，那就是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from trade_detail where tradeid=$L2.tradeid.value; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，$L2.tradeid.value 的字符集是 utf8mb4。</p><p>参照前面的两个例子，你肯定就想到了，字符集 utf8mb4 是 utf8 的超集，所以当这两个类型的字符串在做比较的时候，MySQL 内部的操作是，先把 utf8 字符串转成 utf8mb4 字符集，再做比较。</p><blockquote><p>这个设定很好理解，utf8mb4 是 utf8 的超集。类似地，在程序设计语言里面，做自动类型转换的时候，为了避免数据在转换过程中由于截断导致数据错误，也都是“按数据长度增加的方向”进行转换的。</p></blockquote><p>因此， 在执行上面这个语句的时候，需要将被驱动数据表里的字段一个个地转换成 utf8mb4，再跟 L2 做比较。</p><p>也就是说，实际上这个语句等同于下面这个写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from trade_detail  where CONVERT(traideid USING utf8mb4)=$L2.tradeid.value; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CONVERT() 函数，在这里的意思是把输入的字符串转成 utf8mb4 字符集。</p><p>这就再次触发了我们上面说到的原则：对索引字段做函数操作，优化器会放弃走树搜索功能。</p><p>到这里，你终于明确了，字符集不同只是条件之一，<strong>连接过程中要求在被驱动表的索引字段上加函数操作</strong>，是直接导致对被驱动表做全表扫描的原因。</p><p>作为对比验证，我给你提另外一个需求，“查找 trade_detail 表里 id=4 的操作，对应的操作者是谁”，再来看下这个语句和它的执行计划。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt;select l.operator from tradelog l , trade_detail d where d.tradeid=l.tradeid and d.id=4;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/explain 结果1.png" alt="explain 结果1"></p><p>这个语句里 trade_detail 表成了驱动表，但是 explain 结果的第二行显示，这次的查询操作用上了被驱动表 tradelog 里的索引 (tradeid)，扫描行数是 1。</p><p>这也是两个 tradeid 字段的 join 操作，为什么这次能用上被驱动表的 tradeid 索引呢？我们来分析一下。</p><p>假设驱动表 trade_detail 里 id=4 的行记为 R4，那么在连接的时候（图 5 的第 3 步），被驱动表 tradelog 上执行的就是类似这样的 SQL 语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select operator from tradelog  where traideid =$R4.tradeid.value; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时候 $R4.tradeid.value 的字符集是 utf8, 按照字符集转换规则，要转成 utf8mb4，所以这个过程就被改写成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select operator from tradelog  where traideid =CONVERT($R4.tradeid.value USING utf8mb4); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你看，这里的 CONVERT 函数是加在输入参数上的，这样就可以用上被驱动表的 traideid 索引。</p><p>理解了原理以后，就可以用来指导操作了。如果要优化语句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select d.* from tradelog l, trade_detail d where d.tradeid=l.tradeid and l.id=2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>的执行过程，有两种做法：</p><ul><li>比较常见的优化方法是，把 trade_detail 表上的 tradeid 字段的字符集也改成 utf8mb4，这样就没有字符集转换的问题了。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table trade_detail modify tradeid varchar(32) CHARACTER SET utf8mb4 default null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果能够修改字段的字符集的话，是最好不过了。但如果数据量比较大， 或者业务上暂时不能做这个 DDL 的话，那就只能采用修改 SQL 语句的方法了。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select d.* from tradelog l , trade_detail d where d.tradeid=CONVERT(l.tradeid USING utf8) and l.id=2; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/SQL 语句优化后的 explain 结果.png" alt="SQL 语句优化后的 explain 结果"></p><p>这里，我主动把 l.tradeid 转成 utf8，就避免了被驱动表上的字符编码转换，从 explain 结果可以看到，这次索引走对了。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>今天我给你举了三个例子，其实是在说同一件事儿，即：<strong>对索引字段做函数操作，可能会破坏索引值的有序性，因此优化器就决定放弃走树搜索功能。</strong></p><p>第二个例子是隐式类型转换，第三个例子是隐式字符编码转换，它们都跟第一个例子一样，因为要求在索引字段上做函数操作而导致了全索引扫描。</p><p>MySQL 的优化器确实有“偷懒”的嫌疑，即使简单地把 where id+1=1000 改写成 where id=1000-1 就能够用上索引快速查找，也不会主动做这个语句重写。</p><p>因此，每次你的业务代码升级时，把可能出现的、新的 SQL 语句 explain 一下，是一个很好的习惯。</p><h2 id="思考题" tabindex="-1"><a class="header-anchor" href="#思考题" aria-hidden="true">#</a> 思考题</h2><p>你遇到过别的、类似今天我们提到的性能问题吗？你认为原因是什么，又是怎么解决的呢？</p>`,102),n=[l];function r(s,p){return a(),i("div",null,n)}const u=e(t,[["render",r],["__file","18SQL的性能.html.vue"]]);export{u as default};
