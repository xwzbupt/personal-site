import{_ as s,c as a,a as i,o as e}from"./app-mRFOk-Ym.js";const p={};function l(c,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<h1 id="线程安全" tabindex="-1"><a class="header-anchor" href="#线程安全"><span><strong>线程安全</strong></span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>线程安全、临界区、竞态是学习多线程的过程中，经常遇到的几个概念。因此，本节我们就来详细讲解一下这它们，为以后的学习做铺垫。那么，线程安全中的安全两字如何理解呢？什么样的代码是线程安全的代码？什么样的代码线程不安全的代码？如何做到线程安全？围绕着这几个问题，我们开始本节的学习。</p></div><h2 id="一、线程安全概念" tabindex="-1"><a class="header-anchor" href="#一、线程安全概念"><span><strong>一、线程安全概念</strong></span></a></h2><p>在Java中，线程安全或不安全描述的对象既可以是类，也可以是函数。</p><p>对于函数来说，两个线程并发执行某个函数，因为线程切换，两个线程执行的指令之间可以任意交叉执行，如下所示，如果任意执行顺序最终得到的结果都是相同的、确定的、符合预期的，那么，我们就称这个函数是线程安全的，否则，我们就称为这个函数是线程不安全的，或者非线程安全的。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/31238600_1657955934.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>对于类来说，除了要求类中的每个函数都是线程安全的之外，如果两个线程并发执行一个类的任意两个不同的函数，两个线程执行的指令之间可以任意交叉执行，如果任意执行顺序最终得到的结果都是相同的、确定的、符合预期的，那么，我们就称这个类是线程安全的，否则，我们就称这个类是线程不安全的，或者非线程安全的。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/66433300_1657955934.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>也就是说，如果一个类是线程安全的，那么，所有的函数都是线程安全的，如果一个类的所有的函数都是线程安全的，那么，并不能推出这个类就一定是线程安全的。</p><h2 id="二、临界区和竞态" tabindex="-1"><a class="header-anchor" href="#二、临界区和竞态"><span><strong>二、临界区和竞态</strong></span></a></h2><p>我们把有可能引起线程不安全的局部代码块，叫做临界区（Critical Section）。我们把两个线程竞争执行临界区的这种状态，叫做竞态（Race Condition）。两个线程处于竞态执行临界区，就有可能执行出错。</p><p>具体来讲，什么样的代码才是临界区呢？临界区一般包含以下两个特征。</p><h3 id="_1-访问共享资源" tabindex="-1"><a class="header-anchor" href="#_1-访问共享资源"><span><strong>1）访问共享资源</strong></span></a></h3><p>共享资源包括类中的成员变量、通过函数参数传递进来的共享对象等。如果某个函数只访问局部变量，而局部变量存储在栈中供线程独享，那么，这个函数就不存在线程安全问题。除此之外，如果代码只包含对共享资源的读操作，那么，这段代码一般也不会存在线程安全问题。</p><h3 id="_2-包含复合操作" tabindex="-1"><a class="header-anchor" href="#_2-包含复合操作"><span><strong>2）包含复合操作</strong></span></a></h3><p>复合操作由多个操作组成，比如先检查再执行、先读取再修改后写入。这些复合操作一般都是非原子操作。实际上，之前讲到的非双重检测的单例就属于先检查再执行这类复合操作，自增操作就属于先读取再修改后写入这类复合操作。除此之外，往LinkedList、HashMap中添加元素，底层都是复合操作。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 先检查再执行</span></span>
<span class="line"><span>public class Singleton {</span></span>
<span class="line"><span>  private static Singleton instance;  </span></span>
<span class="line"><span>  private Singleton() {}</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public static Singleton getInstance() {</span></span>
<span class="line"><span>    if (instance == null) {</span></span>
<span class="line"><span>      instance = new Singleton();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return instance;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 先读取在修改后写入</span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>  private int count = 0;</span></span>
<span class="line"><span>  public void increment() {</span></span>
<span class="line"><span>    count++;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="三、线程安全分析" tabindex="-1"><a class="header-anchor" href="#三、线程安全分析"><span><strong>三、线程安全分析</strong></span></a></h2><p>在平时的开发中，尽管我们很少编写多线程代码，但是，我们编写的代码常常会运行在框架、容器中，框架、容器往往会使用多线程，并发执行我们编写的代码，因此，学会编写线程安全的代码非常重要。不过，要想写出线程安全的代码，首先要能查找到哪些代码线程不安全。</p><p>前面已经对线程安全和不安全做了一些介绍。线程不安全的代码一般都会存在临界区和竞态。不过，临界区和竞态是线程不安全的必要条件，而非充分条件，也就是说，两个线程并发竞争执行访问共享资源并且包含复合操作的代码，并不一定就会出问题。代码存在临界区和竞态，只能说明代码存在线程不安全的风险，我们需要继续深入分析，看两个线程交叉执行临界区，是否真的存在执行结果不确定、不符合预期的情况。</p><p>我们举个例子进一步解释一下，如何分析是否线程安全。示例代码如下所示。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class Counter {</span></span>
<span class="line"><span>  private int count = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public void add(int value) {</span></span>
<span class="line"><span>    count += value;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public void substract(int value) {</span></span>
<span class="line"><span>    count -= value;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上述代码中，add()函数访问共享资源（count），并且包含复合操作（count+=value类似自增操作），因此add()函数是临界区。在竞态下，也就是两个线程并发交叉执行add()函数中的代码，就有可能出现结果不符合预期的情况，比如count原本是0，两个线程同时执行add(5)，最后count值有可能为5而非10。因此，add()函数是线程不安全的。同理，substract()函数也是线程不安全的。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/87039000_1657955935.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>不仅如此，如果一个线程执行add()函数，另一个线程执行substract()函数，两个线程交叉并发执行，那么结果有可能不符合预期，如下图举例所示。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/87289700_1657955936.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>除此之外，如果临界区访问的共享资源有多个，那么，我们还需要查看指令重排序是否会影响执行结果，导致线程不安全，比如第30节中例子，如下所示。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class Demo {</span></span>
<span class="line"><span>  private static boolean ready = false;</span></span>
<span class="line"><span>  private static int value = 1;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>    Thread t1 = new Thread(new Runnable() {</span></span>
<span class="line"><span>      @Override</span></span>
<span class="line"><span>      public void run() {</span></span>
<span class="line"><span>        while (!ready) {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        System.out.println(value);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Thread t2 = new Thread(new Runnable() {</span></span>
<span class="line"><span>      @Override</span></span>
<span class="line"><span>      public void run() {</span></span>
<span class="line"><span>        value = 2;</span></span>
<span class="line"><span>        ready = true;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    t1.start();</span></span>
<span class="line"><span>    t2.start();</span></span>
<span class="line"><span>    t1.join();</span></span>
<span class="line"><span>    t2.join();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>在分析代码是否线程安全时，我们还需要关注，代码中所使用的其他类或函数是否线程安全，是否会引起自己编写的类或函数的线程安全性问题。除此之外，特别需要注意的是，使用线程安全的类或函数编写的代码，也不一定是线程安全的，示例代码如下所示。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class IdGenerator {</span></span>
<span class="line"><span>  private int seq = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public synchronized int incrementAndGet() {</span></span>
<span class="line"><span>    seq++;</span></span>
<span class="line"><span>    return seq;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public synchronized boolean checkOdd() {</span></span>
<span class="line"><span>    if (seq % 2 == 1) return true;</span></span>
<span class="line"><span>    else return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>  private IdGenerator idGen = new IdGenerator();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public void test() {</span></span>
<span class="line"><span>    if (idGen.checkOdd()) { //获取偶数并使用</span></span>
<span class="line"><span>      int id = idGen.incrementAndGet();</span></span>
<span class="line"><span>      System.out.println(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>在上述代码中，尽管IdGenertor是线程安全的（使用了synchronized锁，关于synchronized锁，我们下一节讲解） ，但使用线程安全的IdGenerator类编写的test()方法，却不是线程安全的。在单线程环境下，test()函数的打印结果永远都是偶数，但是在多线程环境下，两个线程竞争执行test()函数，有可能会打印出奇数，不符合我们的预期。</p><h2 id="四、互斥和同步" tabindex="-1"><a class="header-anchor" href="#四、互斥和同步"><span><strong>四、互斥和同步</strong></span></a></h2><p>以上我们讲解了几种线程不安全的代码，对于指令重排导致的线程不安全问题，我们可以使用volatile关键字来禁止指令重排序。不过，这种线程不安全的情况并不常见。最常见的是非原子操作多线程交叉执行导致的线程不安全问题。对应的解决的方法是，通过对临界区加锁，让临界区变为原子操作。一个线程执行完临界区代码之后，才允许下一个线程执行。</p><p>对临界区加锁，让临界区变为原子操作，目的是让多个线程互斥访问临界区。互斥是多线程要解决的两个核心问题之一，而另一个核心问题是同步。同步指的是多个线程之间如何协同执行，比如一个线程等待另一个线程执行完成之后再执行。</p><p>实际上，专栏中的多线程模块很大部分都是在讲如何互斥和同步。专栏中的多线程模块主要包括5部分：基础理论、互斥锁、同步工具、并发容器、线程管理。其中，互斥锁部分主要讲解实现临界区互斥的手段，提供了各种不同粒度和作用的锁，比如读写锁、原子类、偏向锁、轻量级锁、自旋锁等，最大限度的减小加锁范围、提高代码并发执行程度。同步工具主要包括条件变量、信号量、Latch、Barrier等，用来实现各种线程协作模式。并发容器部分讲解了一些线程安全的容器（比如ConcurrentHashMap）以及支持线程同步的容器（比如各种阻塞队列），方便程序员直接使用，不用自己从零开始实现。</p><h2 id="五、课后思考题" tabindex="-1"><a class="header-anchor" href="#五、课后思考题"><span><strong>五、课后思考题</strong></span></a></h2><p>请举几个工作中遇到的线程不安全的代码例子，对照一下是否符合我们讲到的临界区的两个特点（访问共享资源和包含复合操作）。</p>`,37)])])}const r=s(p,[["render",l]]),t=JSON.parse('{"path":"/language/Java/multithreading/basic/thread-safe.html","title":"线程安全","lang":"zh-CN","frontmatter":{"category":"Java","feed":false,"seo":false,"head":[]},"git":{"createdTime":1750518217000,"updatedTime":1750518217000,"contributors":[{"name":"weiser","username":"weiser","email":"1134685563@qq.com","commits":1,"url":"https://github.com/weiser"}]},"readingTime":{"minutes":7.83,"words":2349},"filePathRelative":"language/Java/multithreading/basic/thread-safe.md"}');export{r as comp,t as data};
