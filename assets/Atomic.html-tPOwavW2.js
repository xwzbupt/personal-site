import{_ as s,c as a,a as e,o as i}from"./app-mRFOk-Ym.js";const l={};function p(d,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="原子类" tabindex="-1"><a class="header-anchor" href="#原子类"><span><strong>原子类</strong></span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>原子类：请举例说明CAS的ABA问题是如何产生的以及如何解决？</strong></p><p>上一节，我们讲到多线程开发中的基础中的基础：CAS。自旋+CAS可以替代锁用于资源竞争不激烈的场景。不过，相对于锁来说，自旋+CAS的代码实现比较复杂。我们需要先创建Unsafe对象，然后获取待更新变量的偏移位置，最后调用Unsafe对象的CAS方法来更新变量。为了方便开发，JUC提供了各种原子类，封装了对各种类型数据的自旋+CAS操作。这样我们拿来直接使用即可。本节，我们就来讲解一下这些原子类，同时，借此加深对自旋+CAS的理解。</p></div><h2 id="一、原子类概述" tabindex="-1"><a class="header-anchor" href="#一、原子类概述"><span><strong>一、原子类概述</strong></span></a></h2><p>原子类主要依赖自旋+CAS来实现。原子类中的每个操作都是原子操作。在多线程环境下，执行原子类中的操作不会出现线程安全问题。根据处理的数据类型，原子类可以粗略地分为4类：基本类型原子类、引用类型原子类、数组类型原子类、对象属性原子类。每类原子类包含的具体类如下图所示。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/27050300_1659454050.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>对于以上四种原子类，我们重点讲解比较常用的基本类型原子类和引用类型原子类，对于数组类型原子类和对象属性原子类，我们只做简单介绍。</p><h2 id="二、基本类型原子类" tabindex="-1"><a class="header-anchor" href="#二、基本类型原子类"><span><strong>二、基本类型原子类</strong></span></a></h2><p>JUC提供了3个基本类型原子类，它们分别是：AtomicBoolean、AtomicInteger、AtomicLong。因为浮点数无法精确表示和比较大小，所以，JUC并没有提供浮点类型的原子类。除此之外，对于char基本类型，我们需要将其转化为为int类型，进而使用AtomicInteger来进行原子操作。</p><p>AtomicBoolean、AtomicInteger、AtomicLong这3个基本类型原子类的使用方法和实现原理非常相似，我们拿AtomicInteger举例讲解。AtomicInteger类的部分源码如下所示。AtomicInteger类中包含的核心的原子操作暂时未给出，待会一一讲解。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class AtomicInteger {</span></span>
<span class="line"><span>    private volatile int value;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 创建Unsafe对象，获取value变量在AtomicInteger对象中的偏移位置</span></span>
<span class="line"><span>    private static final Unsafe unsafe = Unsafe.getUnsafe();</span></span>
<span class="line"><span>    private static final long valueOffset;</span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            valueOffset = unsafe.objectFieldOffset</span></span>
<span class="line"><span>                (AtomicInteger.class.getDeclaredField(&quot;value&quot;));</span></span>
<span class="line"><span>        } catch (Exception ex) { throw new Error(ex); }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 构造函数</span></span>
<span class="line"><span>    public AtomicInteger(int initialValue) {  value = initialValue; }</span></span>
<span class="line"><span>    public AtomicInteger() {} //默认value值为0</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 基本的getter、setter方法</span></span>
<span class="line"><span>    public final int get() { return value; }</span></span>
<span class="line"><span>    public final void set(int newValue) { value = newValue; }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //...省略核心原子操作....</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>接下来，我们重点讲解一下AtomicInteger提供的4类核心原子操作：CAS、增加、自增、自减。</p><p><strong>1）CAS函数</strong></p><p>AtomicInteger中的compareAndSet()是标准的CAS函数。如下代码所示，如果value值等于入参expect值，那么就将value值更新为入参update值，并返回true。compareAndSet()函数底层调用Unsafe类的CAS方法compareAndSwapInt()来实现，此方法在上一节中已经详细讲解，这里就不再赘述了。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public final boolean compareAndSet(int expect, int update) {</span></span>
<span class="line"><span>    return unsafe.compareAndSwapInt(this, valueOffset, expect, update);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>2）增加函数</strong></p><p>增加函数有两个。从命名上，我们也可以大概猜出两者的不同之处。其中，getAndAdd()函数先获取value值，再更新value，函数返回更新前的旧值，addAndGet()函数先更新value，再获取value值，函数返回更新之后的新值。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public final int getAndAdd(int delta) {</span></span>
<span class="line"><span>    return unsafe.getAndAddInt(this, valueOffset, delta);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public final int addAndGet(int delta) {</span></span>
<span class="line"><span>    return unsafe.getAndAddInt(this, valueOffset, delta) + delta;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>两个函数的代码实现非常相似，addAndGet()函数只不过是在getAndAdd()返回值的基础之上，加了一个delta再返回而已。因此，我们重点看下getAndAdd()函数。getAndAdd()函数调用Unsafe类的getAndAddInt()方法来实现。getAndAddInt()方法的代码实现如下所示。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public final int getAndAddInt(Object o, long offset, int delta) {</span></span>
<span class="line"><span>    int oldValue;</span></span>
<span class="line"><span>    do { // 自旋+CAS</span></span>
<span class="line"><span>        oldValue = this.getIntVolatile(o, offset); //调用Unsafe类的native方法</span></span>
<span class="line"><span>    } while(!this.compareAndSwapInt(o, offset, oldValue, oldValue+delta));</span></span>
<span class="line"><span>    return oldValue;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>getAndAddInt()并非native方法，而是直接由Java代码实现，其底层调用Unsafe类的CAS方法compareAndSwapInt()来实现。在多线程竞争执行时，CAS有可能执行失败，因此，getAndAddInt()采用自旋重复执行CAS，直到成功为止。这样就可以保证getAndAddInt()总是可以将value值增加delta。</p><p><strong>3）自增函数</strong></p><p>自增函数也有两个。用法跟增加函数类似，getAndIncrement()函数返回自增之前的旧值，incrementAndGet()函数返回自增之后的新值。底层实现原理也跟增加函数类似，只需要将增加函数中的delta设置为1即可。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public final int getAndIncrement() { </span></span>
<span class="line"><span>    return unsafe.getAndAddInt(this, valueOffset, 1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public final int incrementAndGet() {</span></span>
<span class="line"><span>    return unsafe.getAndAddInt(this, valueOffset, 1) + 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>4）自减函数</strong></p><p>自减函数也有两个。用法跟自增函数类似，getAndDecrement()函数返回自减之前的旧值，decrementAndGet()函数返回自减之后的新值。底层实现原理跟增加函数类似，只需要将增加函数中的delta设置为-1即可。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public final int getAndDecrement() {</span></span>
<span class="line"><span>    return unsafe.getAndAddInt(this, valueOffset, -1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public final int decrementAndGet() {</span></span>
<span class="line"><span>    return unsafe.getAndAddInt(this, valueOffset, -1) - 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>从功能上，AtomicInteger提供的增加函数，完全可以替代自增函数和自减函数。AtomicInteger类提供冗余的自增函数和自减函数，完全是为了方便程序员使用。</p><h2 id="三、引用类型原子类" tabindex="-1"><a class="header-anchor" href="#三、引用类型原子类"><span><strong>三、引用类型原子类</strong></span></a></h2><p>基本类型原子类提供了操作基本类型数据的原子函数，同理，引用类型原子类提供了操作引用类型数据的原子函数。JUC提供了3个引用类型原子类，它们分别是：AtomicReference、AtomicStampedReference、AtomicMarkableReference。接下来，我们一一详细讲解这3个引用类型原子类的用法和实现原理。</p><p><strong>1）AtomicReference</strong></p><p>AtomicReference类的部分源码如下所示。基本类型原子类主要依赖Unsafe类中的compareAndSwapInt()和compareAndSwapLong()这两个CAS方法来实现。引用类型原子类主要依赖Unsafe类中的compareAndSwapObject()这个CAS方法来实现。AtomicReference的实现方式跟AtomicInteger类似，这里就不再赘述了。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class AtomicReference&lt;V&gt; {</span></span>
<span class="line"><span>    private volatile V value;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    private static final Unsafe unsafe = Unsafe.getUnsafe();</span></span>
<span class="line"><span>    private static final long valueOffset;</span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            valueOffset = unsafe.objectFieldOffset</span></span>
<span class="line"><span>                (AtomicReference.class.getDeclaredField(&quot;value&quot;));</span></span>
<span class="line"><span>        } catch (Exception ex) { throw new Error(ex); }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public AtomicReference(V initialValue) { value = initialValue; }</span></span>
<span class="line"><span>    public AtomicReference() {}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public final V get() { return value; }</span></span>
<span class="line"><span>    public final void set(V newValue) { value = newValue; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public final boolean compareAndSet(V expect, V update) {</span></span>
<span class="line"><span>        return unsafe.compareAndSwapObject(this, valueOffset, expect, update);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>AtomicReference类的使用方式，如下示例代码所示。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class DemoLock {</span></span>
<span class="line"><span>  private AtomicReference&lt;Thread&gt; owner = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public boolean tryAcquire() {</span></span>
<span class="line"><span>    return owner.compareAndSet(null, Thread.currentThread());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>2）AtomicStampedReference</strong></p><p>相对于AtomicReference，AtomicStampedReference增加了版本戳，主要是用来解决CAS的ABA问题。什么是CAS的ABA问题呢？我们举例解释一下。如下代码所示，addAtHead()函数往链表头部添加节点，removeAtHead()函数从链表头部移除节点。你觉得下面的代码是否是线程安全的呢？</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class Node {</span></span>
<span class="line"><span>  private char val;</span></span>
<span class="line"><span>  private Node next;</span></span>
<span class="line"><span>  public Node(int val, Node next) {</span></span>
<span class="line"><span>      this.val = val;</span></span>
<span class="line"><span>      this.next = next;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class LinkedList {</span></span>
<span class="line"><span>  private Node head = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public void addAtHead(Node newNode) {</span></span>
<span class="line"><span>    newNode.next = head;</span></span>
<span class="line"><span>    head = newNode;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public void removeAtHead() {</span></span>
<span class="line"><span>    if (head != null) {</span></span>
<span class="line"><span>      head = head.next;</span></span>
<span class="line"><span>      // 上述语句相当于以下两个语句：</span></span>
<span class="line"><span>      // Node tmp = head.next;</span></span>
<span class="line"><span>      // head = tmp;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>实际上，LinkedList是非线程安全的，我们分3种情况来分析一下。</p><p>1）两个线程竞争交叉执行addAtHead()函数，有可能会导致节点无法正常添加，如下图所示。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/98467700_1659454050.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>2）两个线程竞争交叉执行removeAtHead()函数，有可能会导致NullPointerException异常，或者节点无法正常移除，如下图所示。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/79747400_1659454051.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>3）两个线程竞争交叉执行addAtHead()函数和removeAtHead()函数，有可能导致节点无法正常移除，或者节点无法正常添加，如下图所示。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/3483700_1659454052.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>实际上，不管是addAtHead()，还是removeAtHead()，线程不安全的本质原因是：在更新head时，head有可能已经被其他线程更改。为了解决LinkedList的线程安全问题，我们既可以基于synchronized或Lock锁来解决，也可以基于自旋+CAS来解决。基于锁的解决方案比较简单，这里就留给你自己思考。我们重点来看下基于自旋+CAS的解决方案。代码实现如下所示。在更新head时，我们通过CAS确保head没有被其他线程更新过。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class LinkedListThreadSafe {</span></span>
<span class="line"><span>  private AtomicReference&lt;Node&gt; head = new AtomicReference&lt;&gt;(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public void addAtHead(Node newNode) {</span></span>
<span class="line"><span>    boolean succeeded = false;;</span></span>
<span class="line"><span>    while (!succeeded) {</span></span>
<span class="line"><span>      Node oldHead = head.get();</span></span>
<span class="line"><span>      newNode.next = oldHead;</span></span>
<span class="line"><span>      succeeded = head.compareAndSet(oldHead, newNode);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public void removeAtHead() {</span></span>
<span class="line"><span>    boolean succeeded = false;;</span></span>
<span class="line"><span>    while (!succeeded) {</span></span>
<span class="line"><span>      Node oldHead = head.get();</span></span>
<span class="line"><span>      if (oldHead == null) return;</span></span>
<span class="line"><span>      Node nextNode = oldHead.next;</span></span>
<span class="line"><span>      succeeded = head.compareAndSet(oldHead, nextNode);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>不过，以上代码实现仍然存在问题。如下图所示。线程1执行了一次removeAtHead()函数，线程2执行了两次removeAtHead()函数和一次addAtHead()函数，因此，链表中的节点个数最终应该是1，但实际的运行结果却是2。这是为什么呢？</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/26761400_1659454052.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>实际上，引起执行结果出错的原因，就是CAS的ABA问题。线程1执行removeAtHead()函数，设置oldHead=A、nextNode=B，在执行CAS之前，线程2将head从A变为B、C，最后又变为A。尽管线程2执行完之后，head仍为A，但链表的整体结构发生了变化。随后，当线程1执行CAS时，检查当前的head跟oldHead相等，仍然是A，错以为期间没有其他线程执行addAtHead()和removeAtHead()函数，于是，成功执行CAS。</p><p>为了解决以上ABA问题，我们使用AtomicStampedReference对LinkedList进行改造，如下代码所示。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class LinkedList {</span></span>
<span class="line"><span>  private AtomicStampedReference&lt;Node&gt; head</span></span>
<span class="line"><span>               = new AtomicStampedReference&lt;&gt;(null, 0); // stamp初始值为0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public void addAtHead(Node newNode) {</span></span>
<span class="line"><span>    boolean succeeded = false;;</span></span>
<span class="line"><span>    while (!succeeded) {</span></span>
<span class="line"><span>      int oldStamp = head.getStamp();</span></span>
<span class="line"><span>      Node oldHead = head.getReference();</span></span>
<span class="line"><span>      newNode.next = oldHead;</span></span>
<span class="line"><span>      succeeded = head.compareAndSet(oldHead, newNode, oldStamp, oldStamp+1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public void removeAtHead() {</span></span>
<span class="line"><span>    boolean succeeded = false;;</span></span>
<span class="line"><span>    while (!succeeded) {</span></span>
<span class="line"><span>      int oldStamp = head.getStamp();</span></span>
<span class="line"><span>      Node oldHead = head.getReference();</span></span>
<span class="line"><span>      if (oldHead == null) return;</span></span>
<span class="line"><span>      Node nextNode = oldHead.next;</span></span>
<span class="line"><span>      succeeded = head.compareAndSet(oldHead, nextNode, oldStamp, oldStamp+1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>AtomicStampedReference的部分源码如下所示。相对于AtomicReference，AtomicStampedReference增加了一个int类型stamp版本戳，它将stamp和引用对象reference（例如head）封装成一个新的Pair对象，在Pair对象上执行CAS。即便引用对象存在ABA问题，但是stamp总是在增加，stamp不会存在ABA问题，因此，两者组合而成的Pair对象，也不就不存在ABA问题了。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class AtomicStampedReference&lt;V&gt; {</span></span>
<span class="line"><span>    private static class Pair&lt;T&gt; {</span></span>
<span class="line"><span>        final T reference;</span></span>
<span class="line"><span>        final int stamp;</span></span>
<span class="line"><span>        private Pair(T reference, int stamp) {</span></span>
<span class="line"><span>            this.reference = reference;</span></span>
<span class="line"><span>            this.stamp = stamp;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        static &lt;T&gt; Pair&lt;T&gt; of(T reference, int stamp) {</span></span>
<span class="line"><span>            return new Pair&lt;T&gt;(reference, stamp);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    private volatile Pair&lt;V&gt; pair;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public AtomicStampedReference(V initialRef, int initialStamp) {</span></span>
<span class="line"><span>        pair = Pair.of(initialRef, initialStamp);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public boolean compareAndSet(V expectedReference, V newReference,</span></span>
<span class="line"><span>                                 int expectedStamp, int newStamp) {</span></span>
<span class="line"><span>        Pair&lt;V&gt; current = pair;</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>            expectedReference == current.reference &amp;&amp;</span></span>
<span class="line"><span>            expectedStamp == current.stamp &amp;&amp;</span></span>
<span class="line"><span>            casPair(current, Pair.of(newReference, newStamp)));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    private boolean casPair(Pair&lt;V&gt; cmp, Pair&lt;V&gt; val) {</span></span>
<span class="line"><span>        return unsafe.compareAndSwapObject(this, pairOffset, cmp, val);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>3）AtomicMarkableReference</strong></p><p>AtomicMarkableReference跟AtomicStampedReference的作用相同，也是用来解决AtomicReference存在的ABA问题。区别在于，AtomicStampedReference使用int类型的stamp版本戳是否改变，来判断reference是否有被更改过，AtomicMarkableReference使用boolean类型的mark是否改变（true变成false或false变成true），来判断reference是否有被更改过。AtomicMarkableReference的用法和实现原理跟AtomicStampedReference非常相似，这里就不再赘述了。</p><h2 id="四、数组类型原子类" tabindex="-1"><a class="header-anchor" href="#四、数组类型原子类"><span><strong>四、数组类型原子类</strong></span></a></h2><p>JUC提供了3个数组类型原子类，它们分别是：AtomicIntegerArray、AtomicLongArray、AtomicReferenceArray。这3个类的使用方式和实现原理非常类似，我们拿AtomicIntegerArray举例讲解。</p><p>实际上，AtomicIntegerArray中的原子操作，跟AtomicInteger中的原子操作一一对应，只是在操作中多了一个下标而已。我们拿CAS操作来举例。两个类中的CAS函数对比如下所示。AtomicIntegerArray中的CAS函数，也是用来Unsafe中的compareAndSwapInt()来实现的，只不过计算元素的偏移位置比较复杂而已。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// AtomicInteger</span></span>
<span class="line"><span>public final boolean compareAndSet(int expect, int update) {</span></span>
<span class="line"><span>    return unsafe.compareAndSwapInt(this, valueOffset, expect, update);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// AtomicIntegerArray</span></span>
<span class="line"><span>public final boolean compareAndSet(int i, int expect, int update) {</span></span>
<span class="line"><span>    return unsafe.compareAndSwapInt(array, checkedByteOffset(i), expect, update);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="五、对象属性原子类" tabindex="-1"><a class="header-anchor" href="#五、对象属性原子类"><span><strong>五、对象属性原子类</strong></span></a></h2><p>JUC提供了3个对象属性原子类，它们分别是：AtomicIntegerFiledUpdater、AtomicLongFieldUpdater、AtomicReferenceFiledUpdater。如果某个类中的属性没有提供合适的原子操作，那么我们可以使用对象属性原子类来对其进行原子操作。不过，允许这样做的前提是：属性必须是public的。</p><p>因为对象属性原子类很少用到，所以，我们仅仅举例简单介绍一下，不做深入分析。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class Updater {</span></span>
<span class="line"><span>  private static AtomicIntegerFieldUpdater&lt;Node&gt; updater =</span></span>
<span class="line"><span>      AtomicIntegerFieldUpdater.newUpdater(Node.class, &quot;val&quot;);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public static void incrementVal(Node node) {</span></span>
<span class="line"><span>    updater.incrementAndGet(node);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="六、课后思考题" tabindex="-1"><a class="header-anchor" href="#六、课后思考题"><span><strong>六、课后思考题</strong></span></a></h2><p>对于AtomicInteger类中的getAndAdd()函数，如果我们不使用CAS来实现，那么，如下代码实现方式，是否是线程安全的？为什么呢？</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public final int getAndAdd(int delta) {</span></span>
<span class="line"><span>    int oldValue = value;</span></span>
<span class="line"><span>    value += delta;</span></span>
<span class="line"><span>    return oldValue;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,66)])])}const t=s(l,[["render",p]]),r=JSON.parse('{"path":"/language/Java/multithreading/lockless/Atomic.html","title":"原子类","lang":"zh-CN","frontmatter":{"category":"Java","feed":false,"seo":false,"head":[]},"git":{"createdTime":1750518217000,"updatedTime":1750518217000,"contributors":[{"name":"weiser","username":"weiser","email":"1134685563@qq.com","commits":1,"url":"https://github.com/weiser"}]},"readingTime":{"minutes":10.48,"words":3143},"filePathRelative":"language/Java/multithreading/lockless/Atomic.md"}');export{t as comp,r as data};
