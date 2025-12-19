import{_ as n,c as a,a as l,o as e}from"./app-mRFOk-Ym.js";const i={};function p(c,s){return e(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="累加器" tabindex="-1"><a class="header-anchor" href="#累加器"><span><strong>累加器</strong></span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>如何使用数据分片、哈希优化、去伪共享提高累加器性能？</strong></p></div><p>前面几节中，我们讲到锁、自旋+CAS、原子类。对于如下代码，如果我们希望将其改造成线程安全的，那么该如何来做呢？</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class Counter {</span></span>
<span class="line"><span>  private long sum;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public long get() {</span></span>
<span class="line"><span>    return sum;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public void add(long value) {</span></span>
<span class="line"><span>    sum += value;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>为了让以上代码线程安全，我们只需要对add()函数进行处理。对于add()函数，第一种线程安全的实现方式是：对add()函数加锁，但是加锁会影响程序本身的性能。第二种线程安全的实现方式是：使用自旋+CAS的方式，这样可以避免加锁，在低并发的情况下，这种实现方式的性能远优于加锁，但是，从零实现自旋+CAS，需要用到Unsafe类，风险比较大且编程复杂。第三种线程安全的实现方式是：直接使用封装了自旋+CAS的原子类，相对于第二种实现方式，编程实现简单了许多。这三种实现方式对应的代码如下所示。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 线程安全实现方式一：加锁</span></span>
<span class="line"><span>public void add_lock(long value) {</span></span>
<span class="line"><span>  synchronized (this) {</span></span>
<span class="line"><span>    sum += value;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 线程安全实现方式二：自旋+CAS</span></span>
<span class="line"><span>private static final Unsafe unsafe = Unsafe.getUnsafe();</span></span>
<span class="line"><span>private static final long sumOffset;</span></span>
<span class="line"><span>static {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    sumOffset = unsafe.objectFieldOffset</span></span>
<span class="line"><span>      (Counter.class.getDeclaredField(&quot;sum&quot;));</span></span>
<span class="line"><span>  } catch (Exception ex) { throw new Error(ex); }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public void add_cas(long value) {</span></span>
<span class="line"><span>  boolean succeeded = false;</span></span>
<span class="line"><span>  while (!succeeded) {</span></span>
<span class="line"><span>    long oldValue = sum;</span></span>
<span class="line"><span>    succeeded = unsafe.compareAndSwapLong(</span></span>
<span class="line"><span>        this, sumOffset, oldValue, oldValue+value);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 线程安全实现方式三：原子类</span></span>
<span class="line"><span>private AtomicLong atomicSum = new AtomicLong(); //替代sum成员变量</span></span>
<span class="line"><span>public void add_atomic(int value) {</span></span>
<span class="line"><span>  atomicSum.addAndGet(value);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>实际上，针对累加这种特殊的业务场景，JUC提供了专门的LongAdder累加器，它比AtomicLong原子类性能更高。在高并发的情况下，多线程同时执行add()函数，AtomicLong会因为大量线程不断自旋而性能下降，LongAdder却可以持续保持高性能。那么，如此高性能，LongAdder是如何做到的呢？本节，我们就来讲一讲LongAdder累加器的用法及其实现原理。</p><h2 id="一、基本用法" tabindex="-1"><a class="header-anchor" href="#一、基本用法"><span><strong>一、基本用法</strong></span></a></h2><p>LongAdder在JDK8中引入，功能非常专精尖，用来实现线程安全的高性能累加操作。LongAdder中包含的主要函数有两个：add()函数和sum()函数。add()函数用来累加，sum()函数用来返回累加之后的总和。</p><p>我们使用LongAdder对Counter类进行改造，以保证其线程安全，改造之后的代码如下所示。这里需要注意的是，在高并发的情况下，sum()函数并不能返回精确的累加值，这也是其为了实现高性能所付出的代价。也正因如此，LongAdder一般仅限用于对累加值的精确性要求不高的场合，比如应用于数据统计中。至于sum()函数为什么不能返回精确值，我们稍后讲解。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class CounterLongAdder {</span></span>
<span class="line"><span>  private LongAdder ladder = new LongAdder();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public void add(long value) {</span></span>
<span class="line"><span>    ladder.add(value);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public long get() {</span></span>
<span class="line"><span>    return ladder.sum();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>LongAdder的使用方法非常简单，但其底层实现原理却比较复杂。为了实现高性能累加，LongAdder的底层实现原理涉及数据分片、哈希优化、去伪共享、非精确求和等各种优化手段。接下来，我们就一一讲解一下它们。</p><h2 id="二、数据分片" tabindex="-1"><a class="header-anchor" href="#二、数据分片"><span><strong>二、数据分片</strong></span></a></h2><p>在高并发的情况下，AtomicLong性能不高的主要原因是，多线程同时CAS更新一个变量（累加变量）。相比于AtomicLong，在高并发的情况下，LongAdder的累加操作依然可以保持高性能，这主要归功于数据分片。如下图所示，LongAdder将一个累加变量分解为多个累加变量，多线程同时执行累加操作时，不同的线程对不同的累加变量进行操作，线程之间互不影响，这样就避免了一个线程需要等待另一个线程操作完成之后再操作。当调用LongAdder上的sum()函数时，LongAdder将多个累加值相加，便可以得到最终的累加值。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/26646700_1659888457.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>当然，以上只是基本的实现原理，在具体的代码实现中，LongAdder还包含很多细节优化。我们结合LongAdder的源码，来看下累加操作的主要处理流程。LongAdder中的部分源码如下所示。以下源码包含LongAdder类中的核心的成员变量和函数。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class LongAdder extends Striped64 {</span></span>
<span class="line"><span>    public LongAdder() {}</span></span>
<span class="line"><span>    public void add(long x) { ... }</span></span>
<span class="line"><span>    public long sum() { ... }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>abstract class Striped64 extends Number {</span></span>
<span class="line"><span>    static final int NCPU = Runtime.getRuntime().availableProcessors();</span></span>
<span class="line"><span>    transient volatile Cell[] cells;</span></span>
<span class="line"><span>    transient volatile long base;</span></span>
<span class="line"><span>    transient volatile int cellsBusy;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //LongAdder中add()函数的实现依赖于Striped64中的longAccumulate()函数</span></span>
<span class="line"><span>    final void longAccumulate(long x, LongBinaryOperator fn,</span></span>
<span class="line"><span>                              boolean wasUncontended) { ... }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @sun.misc.Contended static final class Cell {</span></span>
<span class="line"><span>        volatile long value;</span></span>
<span class="line"><span>        Cell(long x) { value = x; }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 以下是实现value的CAS函数</span></span>
<span class="line"><span>        private static final sun.misc.Unsafe UNSAFE;</span></span>
<span class="line"><span>        private static final long valueOffset;</span></span>
<span class="line"><span>        static {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                UNSAFE = sun.misc.Unsafe.getUnsafe();</span></span>
<span class="line"><span>                valueOffset = UNSAFE.objectFieldOffset(</span></span>
<span class="line"><span>                                        Cell.class.getDeclaredField(&quot;value&quot;));</span></span>
<span class="line"><span>            } catch (Exception e) { throw new Error(e);}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        final boolean cas(long cmp, long val) {</span></span>
<span class="line"><span>            return UNSAFE.compareAndSwapLong(this, valueOffset, cmp, val);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>从以上代码，我们可以看出，LongAdder中不包含任何成员变量，成员变量完全继承自Striped64。我们先简单介绍一下这几个成员变量。如下所示。</p><p><strong>1）cells</strong></p><p>cells数组保存多个累加变量。Cell本身的定义非常简单，只包含一个成员变量value，以及一个操作value的cas()函数。为了节省空间，cells数组支持动态扩容，并且，最开始初始化为null，只有第一次出现线程竞争执行add()函数时，cells数组才会被创建。</p><p><strong>2）NCPU</strong></p><p>NCPU表示JVM最大可用CPU核数。cells数组的长度必须是2的幂次方，每次扩容都会增加为原来数组长度的2倍。当cells数组长度为大于等于NCPU的最小2的幂次方时（比如，如果NCPU为6，那么cells数组最大长度为8），cells数组就不再扩容了。cells数组的长度之所以要求是2的幂次方，跟HashMap中数组的长度是2的幂次方的原因相同，都是为了快速求模（求模的使用场景待会会讲到）。建议你回过头去看下第13节。之所以cells数组的长度大于等于NCPU之后就不再扩容，是因为同时执行累加操作的线程数不可能大于CPU的核数。当cells数组的长度大于等于NCPU时，cells数组中的累加变量个数，便可以满足最大NCPU个线程同时互不干涉地执行累加操作。</p><p><strong>3）base</strong></p><p>base是一个比较特殊的累加变量。当线程执行add()函数时，首先尝试CAS更新base（将新增值累加到base上），如果成功，则直接返回，如果失败，再执行分片累加的逻辑（将新增值累加到cells数组中）。在低并发的情况下，使用base可以有效避免执行复杂的分片累加逻辑。</p><p><strong>4）cellBusy</strong></p><p>cellBusy用来实现锁，类似ReetrantLock中的state字段，cellBusy初始化为0，多个线程通过CAS竞争更新cellBusy，谁先将cellBusy设置为1，谁就持有了这把锁。这把锁用来避免多个线程同时创建cells数组（Cell[] cells = new Cell[n];）、创建cells数组中的Cell对象(cells[i] = new Cell()😉、以及对cells数组进行动态扩容，保证这三个操作的线程安全性。</p><p>对核心成员变量有了简单了解之后，我们再来看下LongAdder的累加过程，对应的源码如下所示。为了展示基本实现原理，避免过多的实现细节的干扰，我对代码进行了稍许调整。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 位于LongAdder.java</span></span>
<span class="line"><span>public void add(long x) {</span></span>
<span class="line"><span>    Cell[] as; long b, v; int m; Cell a;</span></span>
<span class="line"><span>    if (!casBase(b = base, b + x)) {</span></span>
<span class="line"><span>        boolean uncontended = true;</span></span>
<span class="line"><span>        if (as == null || (m = as.length - 1) &lt; 0 ||</span></span>
<span class="line"><span>            (a = as[getProbe() &amp; m]) == null ||</span></span>
<span class="line"><span>            !(uncontended = a.cas(v = a.value, v + x)))</span></span>
<span class="line"><span>            longAccumulate(x, null, uncontended);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上述代码非常简洁，可读性有点差。我们对上述代码逻辑做了梳理，如下图所示。其中，getProbe()为哈希函数（此哈希函数的实现原理稍后讲解），返回当前线程对应的哈希值。因为cells数组长度n为2的幂次方，所以，getProbe()&amp;m（m等于n-1）就相当于getProbe()%n（关于这一点，请参看第13节HashMap底层原理的讲解），因为位运算比取模运算效率要高，因此，getProb()&amp;m要比getProbe()%n的执行效率高。getProbe()&amp;m得到的是当前线程应该更新的累加变量在cells数组中的下标。也就是说，如果getProbe()&amp;m等于k，那么，当前线程会通过CAS将新增值x累加到cells[k]的value变量上。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/20055200_1659888458.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>从以上代码逻辑，我们可以发现，只有当线程执行cas成功更新base，或者执行cas成功更新cells数组中的累加变量时，add()函数才会直接返回。否则，线程会进入Striped64类中的longAccumulate()函数继续执行。进入longAccumulate()函数主要对应三种情况：cells为空；线程要更新的cells中的Cell对象为null；cas更新cells中的Cell对象的value值失败。longAccumulate()函数的代码比较长，涉及比较多的实现细节，这里我们简单介绍一下它的核心逻辑，具体如下图所示，其中主要包含4部分逻辑：创建cells数组、创建cells数组中的Cell对象、cells数组扩容、cas执行cells数组上的累加操作。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/92894600_1659888458.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="三、哈希优化" tabindex="-1"><a class="header-anchor" href="#三、哈希优化"><span><strong>三、哈希优化</strong></span></a></h2><p>从上述代码逻辑中，我们可以发现，代码的执行过程，会频繁用到哈希函数（上图中出现h的地方）。因此，哈希函数的执行效率严重影响LongAdder的执行效率。因此，LongAdder对哈希函数进行了一些性能优化。</p><p>当线程通过cas将新增值累加base失败时，线程会通过cas将新增值累加cells数组中，那么，到底累加到cells数组中哪个Cell对象上呢？前面提到，对应Cell对象的下标通过getProbe()%n公式来计算得到。其中，n表示cells数组的长度，getProbe()是哈希函数。因为n为2的幂次方，因此getProbe()%n可以转化为getProbe()&amp;(n-1)，以提高计算速度。</p><p>除此之外，哈希函数计算得到的哈希值，会保存在线程对应的Thread对象的成员变量中，之后便可以一直重复使用，除非发生冲突，两个线程同时执行cas更新同一个Cell对象，执行cas失败的线程会重新生成新的哈希值，并同步更新到对应的Thread对象中。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//直接获取当前线程对应的Thread对象的PROBE成员变量值</span></span>
<span class="line"><span>static final int getProbe() {</span></span>
<span class="line"><span>    return UNSAFE.getInt(Thread.currentThread(), PROBE);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//基于老的哈希值probe重新计算新的哈希值，并存储到当前线程对应的Thread对象的PROBE成员变量中</span></span>
<span class="line"><span>static final int advanceProbe(int probe) {</span></span>
<span class="line"><span>    probe ^= probe &lt;&lt; 13;   // xorshift</span></span>
<span class="line"><span>    probe ^= probe &gt;&gt;&gt; 17;</span></span>
<span class="line"><span>    probe ^= probe &lt;&lt; 5;</span></span>
<span class="line"><span>    UNSAFE.putInt(Thread.currentThread(), PROBE, probe);</span></span>
<span class="line"><span>    return probe;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="四、去伪共享" tabindex="-1"><a class="header-anchor" href="#四、去伪共享"><span><strong>四、去伪共享</strong></span></a></h2><p>细心的读者可能已经发现，Cell类定义的前面添加了@Contended注解。注解看起来虽小，但其隐藏了一个很重要的优化，那就是去伪共享。去伪共享是提高多线程并发执行效率的重要手段，不仅在LongAdder中用到，在Disruptor高性能消息队列中也有用到。在解释去伪共享之前，我们先来解释一下什么是伪共享。</p><p>前面我们提到，CPU读写缓存的最小单元是缓存行。不同CPU上的缓存行大小不同，可以为32字节、64字节或128字节等，常见的大小为64字节。参照第9节中对象大小的计算公式，Cell对象头占12字节，value成员变量为long类型，占8字节。对象头与value成员变量之间有4字节对齐填充，因此，一个Cell对象占24字节。假设一个缓存行大小为64字节，那么，两个Cell对象就有可能存储在同一个缓存行中。如下图所示。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/91306100_1659888459.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>因为数据是以缓存行为单位来读写的，所以，当线程t1从内存中读取cellA到缓存中时，会顺带着读取cellB，同理，当线程t2从内存中读取cellB到缓存中时，会顺带着读取cellA。当线程t1更新cellA的值时，按理来说，并不会影响线程t2对cellB的缓存，但是，缓存中的数据是按照缓存行来读写的，因此，线程t1会将整个缓存行设置为无效，这就会导致线程t2对cellB的缓存也会失效，需要重新从内存中读取。同理，线程t2更新cellB值时，也会导致线程t1对cellA的缓存失效。两个线程互相影响，导致缓存频繁失效。</p><p>以上问题就叫做伪共享（false sharing）问题。为了解决伪共享问题，我们可以使用@Contended注解。这个注解既可以标记在类上，也可以标记在变量上。标记在类上会强制这个类的对象独占一个缓存行，不够一个缓存行的会做对齐填充。标记在变量上会强制这个变量独占一个缓存行。Cell类使用@Contended标记，两个Cell对象便不会存储在同一个缓存行中，因此，也就不会出现伪共享的问题了。缓存不再频繁失效，执行效率变高。</p><h2 id="五、非准确求和" tabindex="-1"><a class="header-anchor" href="#五、非准确求和"><span><strong>五、非准确求和</strong></span></a></h2><p>前面我们提到，LongAdder中的sum()函数会累加base和cells中的Cell对象的value值，从而得到最终的累加值。但是，这个值是不准确的，或者说不一致的。这是为什么呢？我们先来看下sum()函数的源码，如下所示。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public long sum() {</span></span>
<span class="line"><span>    Cell[] as = cells; Cell a;</span></span>
<span class="line"><span>    long sum = base;</span></span>
<span class="line"><span>    if (as != null) {</span></span>
<span class="line"><span>        for (int i = 0; i &lt; as.length; ++i) {</span></span>
<span class="line"><span>            if ((a = as[i]) != null)</span></span>
<span class="line"><span>                sum += a.value;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return sum;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>从代码中，我们可以发现，LongAdder在执行sum()函数时，并没有加锁，也就是说，在执行sum()函数的同时，其他线程可以同时执行add()函数。这就会导致出现这样的情况：前面添加的值没有算到累加值中，反倒是后面添加的值算到了累加值中。如下图所示 。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/74818300_1659938169.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>实际上，除了LongAdder之外，JUC还提供了另外三个功能类似的类：LongAccumulator、DoubleAdder、DoubleAccumulator，其中，DoubleAdder和DoubleAccumulator跟LongAdder和LongAccumulator的区别，仅仅只是处理的数据类型不同而已。因此，我们重点看下LongAccumulator。</p><p>从前面的讲解，我们可以发现，LongAdder只能实现累加操作，而LongAccumulator却可以实现更加丰富的统计操作，比如求最大值。LongAccumulator类的部分源码如下所示。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@FunctionalInterface</span></span>
<span class="line"><span>public interface LongBinaryOperator {</span></span>
<span class="line"><span>    long applyAsLong(long left, long right);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class LongAccumulator extends Striped64 {</span></span>
<span class="line"><span>    private final LongBinaryOperator function;</span></span>
<span class="line"><span>    private final long identity;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public LongAccumulator(LongBinaryOperator accumulatorFunction,</span></span>
<span class="line"><span>                           long identity) {</span></span>
<span class="line"><span>        this.function = accumulatorFunction;</span></span>
<span class="line"><span>        base = this.identity = identity;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void accumulate(long x) { //相当于LongAdder中的add()</span></span>
<span class="line"><span>        Cell[] as; long b, v, r; int m; Cell a;</span></span>
<span class="line"><span>        if ((as = cells) != null ||</span></span>
<span class="line"><span>            (r = function.applyAsLong(b = base, x)) != b &amp;&amp; !casBase(b, r)) {</span></span>
<span class="line"><span>            boolean uncontended = true;</span></span>
<span class="line"><span>            if (as == null || (m = as.length - 1) &lt; 0 ||</span></span>
<span class="line"><span>                (a = as[getProbe() &amp; m]) == null ||</span></span>
<span class="line"><span>                !(uncontended =</span></span>
<span class="line"><span>                  (r = function.applyAsLong(v = a.value, x)) == v ||</span></span>
<span class="line"><span>                  a.cas(v, r)))</span></span>
<span class="line"><span>                longAccumulate(x, function, uncontended);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public long get() { //相当于LongAdder中的sum()</span></span>
<span class="line"><span>        Cell[] as = cells; Cell a;</span></span>
<span class="line"><span>        long result = base;</span></span>
<span class="line"><span>        if (as != null) {</span></span>
<span class="line"><span>            for (int i = 0; i &lt; as.length; ++i) {</span></span>
<span class="line"><span>                if ((a = as[i]) != null)</span></span>
<span class="line"><span>                    result = function.applyAsLong(result, a.value);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>从代码实现，我们可以发现，LongAccumulator的代码实现，跟LongAdder的代码实现非常相似，主要区别在于，LongAccumulator支持不同的统计操作。如下示例代码所示，我们通过定义实现了LongBinaryOperator接口的类LongMax，然后通过构造函数传入LongAccumulator对象，便可以支持取最大值的操作。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class Demo {</span></span>
<span class="line"><span>  public static class LongMax implements LongBinaryOperator {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public long applyAsLong(long left, long right) {</span></span>
<span class="line"><span>      return Math.max(left, right);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    LongAccumulator lacc = new LongAccumulator(new LongMax(), Long.MIN_VALUE);</span></span>
<span class="line"><span>    lacc.accumulate(10);</span></span>
<span class="line"><span>    lacc.accumulate(-18);</span></span>
<span class="line"><span>    lacc.accumulate(24);</span></span>
<span class="line"><span>    System.out.println(lacc.get()); //输出24</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、思考题" tabindex="-1"><a class="header-anchor" href="#六、思考题"><span><strong>六、思考题</strong></span></a></h2><p>如果我们希望LongAdder的sum()函数能给出准确、一致的累加和，该如何对LongAdder的代码进行改造？改造之后的代码对性能又有什么影响？</p>`,55)])])}const r=n(i,[["render",p]]),t=JSON.parse('{"path":"/language/Java/multithreading/lockless/LongAdder.html","title":"累加器","lang":"zh-CN","frontmatter":{"category":"Java","feed":false,"seo":false,"head":[]},"git":{"createdTime":1750518217000,"updatedTime":1750518217000,"contributors":[{"name":"weiser","username":"weiser","email":"1134685563@qq.com","commits":1,"url":"https://github.com/weiser"}]},"readingTime":{"minutes":13.61,"words":4084},"filePathRelative":"language/Java/multithreading/lockless/LongAdder.md"}');export{r as comp,t as data};
