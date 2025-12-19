import{_ as e,c as l,a,b as p,d as n,e as t,r,o as c}from"./app-mRFOk-Ym.js";const d={};function o(g,s){const i=r("VPIcon");return c(),l("div",null,[s[2]||(s[2]=a(`<h1 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程"><span>函数式编程</span></a></h1><blockquote><p><strong>函数接口、Lambda表达式、方法引用、Stream流</strong></p></blockquote><p>在《设计模式之美》中，我们详细讲解了现在主流的三种编程范式：面向过程、面向对象和函数式编程。其中提到，函数式编程并非一个很新的东西，早在50多年前就已经出现了。近几年，函数式编程越来越被人关注，出现了很多新的函数式编程语言，比如Clojure、Scala、Erlang等。一些非函数式编程语言也加入了很多特性、语法、类库来支持函数式编程，比如Java、Python、Ruby、JavaScript等。本节，我们就来讲讲Java语言对函数式编程的支持。</p><h2 id="一、函数式编程" tabindex="-1"><a class="header-anchor" href="#一、函数式编程"><span><strong>一、函数式编程</strong></span></a></h2><p>不过，在讲解Java语言对函数式编程的支持之前，我们先要了解一下，到底什么是函数式编程？</p><p>严格上来讲，函数式编程中的“函数”，并不是指编程语言中的“函数”，而是指数学“函数”或者“表达式”（比如，y=f(x)）。不过，在编程实现时，对于数学“函数”或“表达式”，我们一般习惯性地将它们设计成函数。因此，如果不深究的话，函数式编程中的“函数”也可以理解为编程语言中的“函数”。</p><p>每个编程范式都有自己独特的地方，这就是它们会被抽象出来作为一种范式的原因。面向对象编程最大的特点是：以类、对象作为组织代码的单元以及它的四大特性。面向过程编程最大的特点是：以函数作为组织代码的单元，数据与方法相分离。那么函数式编程最独特的地方又在哪里呢？</p><p>实际上，函数式编程最独特的地方在于它的编程思想。函数式编程认为，程序可以用一系列数学函数或表达式的组合来表示。函数式编程是程序面向数学的更底层的抽象，将计算过程描述为表达式。不过，这样说你肯定会有疑问，真的可以把任何程序都表示成一组数学表达式吗？</p><p>理论上讲是可以的。但是，并不是所有的程序都适合这么做。函数式编程有它自己适合的应用场景，比如科学计算、数据处理、统计分析等。在这些领域，程序往往比较容易用数学表达式来表示，比起非函数式编程，实现同样的功能，函数式编程需要更少的代码。但是，对于强业务相关的大型业务系统开发来说，费劲吧啦地将它抽象成数学表达式，硬要用函数式编程来实现，显然是自讨苦吃。相反，在这种应用场景下，面向对象编程更加合适，写出来的代码更加可读、可维护。因此，我个人觉得，函数式编程并不能完全替代更加通用的面向对象编程范式。但是，作为一种补充，它也有很大存在、发展和学习的意义。</p><p>刚刚讲的是函数式编程的编程思想，如果我们再具体到编程实现，函数式编程跟面向过程编程一样，也是以函数作为组织代码的单元。不过，它跟面向过程编程的区别在于，它的函数是无状态的。何为无状态？简单点讲就是，函数内部涉及的变量都是局部变量，不会像面向对象编程那样，共享类成员变量，也不会像面向过程编程那样，共享全局变量。函数的执行结果只与入参有关，跟其他任何外部变量无关。同样的入参，不管怎么执行，得到的结果都是一样的。这实际上就是数学函数或数学表达式的基本要求。我举个例子来简单解释一下。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 有状态函数: 执行结果依赖b的值是多少，即便入参相同，</span></span>
<span class="line"><span>// 多次执行函数，函数的返回值有可能不同，因为b值有可能不同。</span></span>
<span class="line"><span>int b;</span></span>
<span class="line"><span>int increase(int a) {</span></span>
<span class="line"><span>  return a + b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 无状态函数：执行结果不依赖任何外部变量值，只要入参相同</span></span>
<span class="line"><span>// 不管执行多少次，函数的返回值就相同</span></span>
<span class="line"><span>int increase(int a, int b) {</span></span>
<span class="line"><span>  return a + b;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里稍微总结一下，不同的编程范式之间并不是截然不同的，总是有一些相同的编程规则。比如，不管是面向过程、面向对象还是函数式编程，它们都有变量、函数的概念，最顶层都要有main函数执行入口，来组装编程单元（类、函数等）。只不过，面向对象的编程单元是类或对象，面向过程的编程单元是函数，函数式编程的编程单元是无状态函数。</p><p>接下来，我们就看下Java这种面向对象编程语言，对函数式编程的支持。我们先来看下面这样一段非常典型的Java函数式编程的代码。这段代码的作用是，先过滤除非空字符串，然后再查找以“wz-”为前缀的字符串，最后统计每个字符串的长度，并打印输出。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class FPDemo {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    List&lt;String&gt; strList = Arrays.asList(&quot;wz-a.java&quot;, &quot;wz-b.txt&quot;, &quot;c.java&quot;);</span></span>
<span class="line"><span>    strList.stream()</span></span>
<span class="line"><span>        .filter(((Predicate&lt;String&gt;) String::isEmpty).negate())</span></span>
<span class="line"><span>        .filter(s-&gt;s.startsWith(&quot;wz-&quot;))</span></span>
<span class="line"><span>        .map(String::length)</span></span>
<span class="line"><span>        .forEach(l-&gt;System.out.println(l));  //输出9、8</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你不了解Java函数式编程的语法，看了上面的代码或许会有些懵，主要的原因是，Java为函数式编程引入了4个新的语法：函数接口（Functional Inteface）、Lambda表达式、方法引用、Stream流。函数接口的作用是让我们可以把函数包裹成接口（interface），来实现把函数当做参数一样来使用（Java不像C一样支持函数指针，可以把函数直接当参数来使用）；引入Lambda表达式的作用是简化函数接口的匿名实现类的代码编写；方法引用的作用是进一步简化Lambda表达式；Stream流用来支持通过“.”级联多个函数操作的代码编写方式。接下来，我们就一一详细讲解一下这4个语法。</p><h2 id="二、函数接口" tabindex="-1"><a class="header-anchor" href="#二、函数接口"><span><strong>二、函数接口</strong></span></a></h2><p>我们知道，C语言支持函数指针，它可以把函数直接当变量来使用。但是，Java没有函数指针这样的语法。所以，它通过函数接口，将函数包裹在接口中，当作变量来使用。比如，我们经常使用的Runnable、Comparator等都是函数接口，代码如下所示。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@FunctionalInterface</span></span>
<span class="line"><span>public interface Runnable {</span></span>
<span class="line"><span>    public abstract void run();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@FunctionalInterface</span></span>
<span class="line"><span>public interface Comparator&lt;T&gt; {</span></span>
<span class="line"><span>    int compare(T o1, T o2);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    boolean equals(Object obj);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    default Comparator&lt;T&gt; reversed() {</span></span>
<span class="line"><span>        return Collections.reverseOrder(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    default Comparator&lt;T&gt; thenComparing(Comparator&lt;? super T&gt; other) {</span></span>
<span class="line"><span>        Objects.requireNonNull(other);</span></span>
<span class="line"><span>        return (Comparator&lt;T&gt; &amp; Serializable) (c1, c2) -&gt; {</span></span>
<span class="line"><span>            int res = compare(c1, c2);</span></span>
<span class="line"><span>            return (res != 0) ? res : other.compare(c1, c2);</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>实际上，函数接口就是接口。不过，它也有自己特别的地方，那就是要求只包含一个未实现的方法。Java提供了专门的注解@FunctionalInterface来标识某个接口是函数接口。这个注解的作用是检查接口中是否只有一个未实现的方法。如果标记了这个注解的接口有两个及两个以上的未实现的方法，那么代码在编译时就会报错。实际上，即便不使用@FunctionalInterface注解来标记接口，只要接口中只包含一个未实现的方法，那么，在Java眼里就认为它是函数接口，跟标注了@FunctionalInterface注解的接口无差别对待。</p><p>如上代码所示，Runnable接口中只有一个未实现的方法run()。Comparator接口中虽然有很多方法，但绝大部分都有默认实现，只有compare()和equals()没有实现。Comparator中有两个未实现方法，那么是不是就不是函数接口了呢？实际上，所有的类都会继承顶级父类Object，而Object中有equals()方法的默认实现。我们在创建Comparator接口的实现类时，只需要强制实现cmopare()方法即可。从这个角度来说，Comparator中相当于只有compare()方法没有实现，因此，符合函数接口只包含一个未实现方法的限制。</p><p>除了刚刚提到的Runnable、Comparator之外，Java还预定义了大量的其他函数接口，比如<code>Predicate&lt;T&gt;</code>、<code>Function&lt;T, R&gt;</code>、<code>Comsumer&lt;T&gt;</code>、<code>Supplier&lt;T&gt;</code>等等。我们拿<code>Predicate&lt;T&gt;</code>举例，代码如下所示。对于其他预定义函数接口，你可以自行在java.util.function包下查看。在<code>Predicate&lt;T&gt;</code>内，除了未实现的test()方法之外，还定义了很多具有默认实现的方法，那么，这些具有默认实现的方法又是做什么用的呢？关于这个问题，我们稍后讲解。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@FunctionalInterface</span></span>
<span class="line"><span>public interface Predicate&lt;T&gt; {</span></span>
<span class="line"><span>  boolean test(T t); // 只有这一个未实现的方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  default Predicate&lt;T&gt; and(Predicate&lt;? super T&gt; other) {</span></span>
<span class="line"><span>    Objects.requireNonNull(other);</span></span>
<span class="line"><span>    return (t) -&gt; test(t) &amp;&amp; other.test(t);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  default Predicate&lt;T&gt; negate() {</span></span>
<span class="line"><span>    return (t) -&gt; !test(t);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  default Predicate&lt;T&gt; or(Predicate&lt;? super T&gt; other) {</span></span>
<span class="line"><span>    Objects.requireNonNull(other);</span></span>
<span class="line"><span>    return (t) -&gt; test(t) || other.test(t);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  static &lt;T&gt; Predicate&lt;T&gt; isEqual(Object targetRef) {</span></span>
<span class="line"><span>    return (null == targetRef)</span></span>
<span class="line"><span>        ? Objects::isNull</span></span>
<span class="line"><span>        : object -&gt; targetRef.equals(object);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>跟自定义异常、自定义注解一样，我们也可以自定义函数接口。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@FunctionalInterface</span></span>
<span class="line"><span>public interface Filter&lt;T&gt; {</span></span>
<span class="line"><span>  boolean accept(T name);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当然，只有函数接口的定义是没有意义的，我们还要有代码用到它，函数接口的使用如下示例所示。从作用上，函数接口有点类似《设计模式之美》中讲到的模板模式，从实现上，函数接口有点类似《设计模式之美》中讲到的回调。将某个流程中可变的逻辑抽离出来，设计成函数接口，以此来支持灵活定制可变逻辑。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class Demo {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    List&lt;String&gt; files = Arrays.asList(&quot;wang.txt&quot;, &quot;zheng.java&quot;, &quot;xiao.txt&quot;, &quot;ge.java&quot;);</span></span>
<span class="line"><span>    List&lt;String&gt; javaFiles = filterFiles(files, new Filter&lt;String&gt;() {</span></span>
<span class="line"><span>      @Override</span></span>
<span class="line"><span>      public boolean accept(String name) {</span></span>
<span class="line"><span>        return name.endsWith(&quot;.java&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // filter过滤策略为可变逻辑</span></span>
<span class="line"><span>  public static List&lt;String&gt; filterFiles(List&lt;String&gt; files, Filter&lt;String&gt; filter) {</span></span>
<span class="line"><span>    List&lt;String&gt; res = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    for (String file : files) {</span></span>
<span class="line"><span>      if (filter.accept(file)) {</span></span>
<span class="line"><span>        res.add(file);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>看到这里，你可能会说，Runnable、Comparator这种只包含一个未实现方法的接口早就有了，为什么在JDK8引入函数式编程时，将它们重新定义为函数接口呢？它们在函数式编程中有什么特殊作用呢？函数接口为什么只能允许包含一个未实现的接口呢？要回答这些问题，我们就要先了解Lambda表达式。</p><h2 id="三、lambda表达式" tabindex="-1"><a class="header-anchor" href="#三、lambda表达式"><span><strong>三、Lambda表达式</strong></span></a></h2><p>我们前面讲到，Java引入Lambda表达式的主要作用是简化代码编写，但凡用到函数接口的地方，我们都可以将函数接口的匿名实现类替换成Lambda表达式。如上示例代码所示，我们将<code>Filter&lt;T&gt;</code>的匿名实现类替换为Lambda表达式，如下所示。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public static void main(String[] args) {</span></span>
<span class="line"><span>  List&lt;String&gt; files = Arrays.asList(&quot;wang.txt&quot;, &quot;zheng.java&quot;, &quot;xiao.txt&quot;, &quot;ge.java&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 使用匿名实现类</span></span>
<span class="line"><span>  List&lt;String&gt; javaFiles = filterFiles(files, new Filter&lt;String&gt;() {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean accept(String name) {</span></span>
<span class="line"><span>      return name.endsWith(&quot;.java&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 使用Lambda表达式</span></span>
<span class="line"><span>  List&lt;String&gt; javaFiles2 = filterFiles(files, (String name)-&gt;{</span></span>
<span class="line"><span>    return name.endsWith(&quot;.java&quot;);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lambda表达式包括三部分：输入、函数体、输出。如下所示。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>(类型 a, 类型 b) -&gt; { 语句1； 语句2；...; return 输出; } //a,b是输入参数</span></span></code></pre></div><p>实际上，Lambda表达式的写法非常灵活。我们刚刚给出的是标准写法，还有很多简化写法。比如，我们可以将输入参数的类型省略，由编译器自行推测。如果输入参数只有一个，还可以省略()，直接写成a-&gt;{...}；如果没有入参，可以直接将输入和箭头都省略掉，只保留函数体；如果函数体只有一个语句，那么还可以将{}和return关键词省略掉。</p><p>按照以上省略规则，我们将上述示例代码中的Lamba表达式简化，简化之后的代码如下所示。从这里我们也可以得知，Lambda表达式只是为了简化代码比较简单的匿名实现类。当匿名实现类中只包含一条语句时，简化效果最好。如果匿名实现类中代码逻辑比较复杂，那么使用Lambda表达式的简化效果就不明显了。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>List&lt;String&gt; javaFiles = filterFiles(files, name-&gt;name.endsWith(&quot;.java&quot;));</span></span></code></pre></div><p>如果我们把以下Lambda表达式，全部替换为函数接口的实现方式，如下所示。对比来看，代码是不是多了很多？</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 使用Lambda表达式，非常简洁</span></span>
<span class="line"><span>Optional&lt;Integer&gt; result = Stream.of(&quot;f&quot;, &quot;ba&quot;, &quot;hello&quot;)</span></span>
<span class="line"><span>    .map(s -&gt; s.length())</span></span>
<span class="line"><span>    .filter(l -&gt; l &lt;= 3)</span></span>
<span class="line"><span>    .max((o1, o2) -&gt; o1-o2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 还原为函数接口的实现方式，代码变长很多</span></span>
<span class="line"><span>Optional&lt;Integer&gt; result2 = Stream.of(&quot;fo&quot;, &quot;bar&quot;, &quot;hello&quot;)</span></span>
<span class="line"><span>    .map(new Function&lt;String, Integer&gt;() {</span></span>
<span class="line"><span>      @Override</span></span>
<span class="line"><span>      public Integer apply(String s) {</span></span>
<span class="line"><span>        return s.length();</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .filter(new Predicate&lt;Integer&gt;() {</span></span>
<span class="line"><span>      @Override</span></span>
<span class="line"><span>      public boolean test(Integer l) {</span></span>
<span class="line"><span>        return l &lt;= 3;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .max(new Comparator&lt;Integer&gt;() {</span></span>
<span class="line"><span>      @Override</span></span>
<span class="line"><span>      public int compare(Integer o1, Integer o2) {</span></span>
<span class="line"><span>        return o1 - o2;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>了解了Lambda表达式之后，我们就可以回答之前遗留的问题了。函数接口本质上就是接口，没有什么新颖的，在函数式编程出现之前就已经存在并且大量使用。抽象出函数接口这个概念，完全是新瓶装旧酒，目的是希望对能够简写为Lambda表达式的这一类接口有一个统一的称谓，方便沟通。那么，函数接口为什么只能包含一个未实现的方法呢？这里主要有两个原因，其一是：函数接口的目的是为了能把函数（也就是方法）当做参数来传递，在这里，函数是主角，一个函数理应包裹为一个单独的函数接口，一个函数接口内不应该有两个主角。其二是：因为只有包含一个未实现的方法，简化之后的Lambda表达式才能明确知道匹配的是哪个方法。如果函数接口包含两个未实现的方法，并且方法入参、返回值都一样，那么，Java在翻译Lambda表达式时，就无法知道表达式对应哪个方法了。</p><h2 id="四、方法引用" tabindex="-1"><a class="header-anchor" href="#四、方法引用"><span><strong>四、方法引用</strong></span></a></h2><p>当Lambda中的逻辑已经有现成的方法实现时，我们可以直接使用方法引用。需要注意的是，方法引用要求所引用的方法的参数列表和返回值，跟函数接口中未实现方法的参数列表和返回值完全一致。方法引用的语法格式如下所示。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>对象::实例方法</span></span>
<span class="line"><span>类::静态方法</span></span>
<span class="line"><span>类::实例方法</span></span></code></pre></div>`,41)),p("p",null,[s[0]||(s[0]=n("比如下列示例中就用到了两个方法引用，String",-1)),t(i,{icon:"isEmpty和String"}),s[1]||(s[1]=n("length。当然，我们也可以不使用方法引用，如注释中所示。",-1))]),s[3]||(s[3]=a(`<div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class FPDemo {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    List&lt;String&gt; strList = Arrays.asList(&quot;wz-a.java&quot;, &quot;wz-b.txt&quot;, &quot;c.java&quot;);</span></span>
<span class="line"><span>    strList.stream()</span></span>
<span class="line"><span>        .filter(((Predicate&lt;String&gt;) String::isEmpty).negate())</span></span>
<span class="line"><span>        //.filter(s-&gt;!s.isEmpty())</span></span>
<span class="line"><span>        .filter(s-&gt;s.startsWith(&quot;wz-&quot;))</span></span>
<span class="line"><span>        .map(String::length)</span></span>
<span class="line"><span>        //.map(s-&gt;s.length())</span></span>
<span class="line"><span>        .forEach(l-&gt;System.out.println(l));  //输出9、8</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="五、stream流" tabindex="-1"><a class="header-anchor" href="#五、stream流"><span><strong>五、Stream流</strong></span></a></h2><p>实际上，上面讲到的函数接口、Lambda表达式，只是函数式编程中的辅助语法，真正体现函数式编程其“函数”本质的应该是Stream流。接下来，我们就来讲一讲Stream流。</p><p>假设我们要计算这样一个表达式：(3-1)*2+5。如果按照普通的函数调用的方式写出来，就是下面这个样子的。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>add(multiply(subtract(3,1),2),5);</span></span></code></pre></div><p>不过，这样编写的代码可读性比较差，我们换个可读性更好的写法，如下所示。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>subtract(3,1).multiply(2).add(5);</span></span></code></pre></div><p>我们知道，在Java中，“.”表示调用某个对象上的方法。为了支持上面这种级联调用方式，我们让每个函数都返回一个通用的类型：Stream对象。在Stream上的操作有两种：中间操作和终止操作。中间操作返回的仍然是Stream对象，而终止操作返回的是确定的值结果或者没有返回值。</p><p>我们再来看之前的例子。我对代码做了注释解释，如下所示。其中，map、filter是中间操作，返回Stream对象，可以继续级联其他操作；forEach()是终止操作，没有返回值，无法再继续往下级联处理了。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class FPDemo {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    List&lt;String&gt; strList = Arrays.asList(&quot;wz-a.java&quot;, &quot;wz-b.txt&quot;, &quot;c.java&quot;);</span></span>
<span class="line"><span>    strList.stream()   // 返回Stream&lt;String&gt;对象</span></span>
<span class="line"><span>        .filter(((Predicate&lt;String&gt;) String::isEmpty).negate()) //filter返回Stream&lt;String&gt;对象</span></span>
<span class="line"><span>        .filter(s-&gt;s.startsWith(&quot;wz-&quot;)) //filter返回Stream&lt;String&gt;对象</span></span>
<span class="line"><span>        .map(String::length)  //map返回Stream&lt;Integer&gt;对象</span></span>
<span class="line"><span>        .forEach(l-&gt;System.out.println(l));  //forEach终止操作</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Stream中的filter()、map()、forEach()等方法的参数为Java预定义的函数接口，如下所示，因此，函数接口的匿名实现类可以通过Lambda表达式来简化，如上示例代码所示。除了filter()、map()、forEach()之外，Stream类中还定义了很多其他操作，你可以自行查看java.util.stream.Stream的源码。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>Stream&lt;T&gt; filter(Predicate&lt;? super T&gt; predicate);</span></span>
<span class="line"><span>&lt;R&gt; Stream&lt;R&gt; map(Function&lt;? super T, ? extends R&gt; mapper);</span></span>
<span class="line"><span>void forEach(Consumer&lt;? super T&gt; action);</span></span></code></pre></div><p>前面提到，在Java预定义的函数接口中，不仅仅包含未实现的方法，还包含一些具有默认实现的方法，比如<code>Predicate&lt;T&gt;</code>函数接口中的and()、or()、negatef()等方法，那么，这些具有默认实现的方法到底是做什么用的呢？实际上，它们一般用来组合操作，我举个例子，你就清楚了。示例代码如下所示，我们希望过滤得到既包含前缀“wz-”，又包含后缀“.java”的字符串，这里我们就可以使用<code>Predicate&lt;T&gt;</code>中的and()操作。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>List&lt;String&gt; strList = Arrays.asList(&quot;wz-a.java&quot;, &quot;wz-b.txt&quot;, &quot;c.java&quot;);</span></span>
<span class="line"><span>Predicate&lt;String&gt; p1 = s-&gt;s.startsWith(&quot;wz-&quot;);</span></span>
<span class="line"><span>Predicate&lt;String&gt; p2 = s-&gt;s.endsWith(&quot;.java&quot;);</span></span>
<span class="line"><span>List&lt;String&gt; res = strList.stream()</span></span>
<span class="line"><span>    .filter(p1.and(p2))</span></span>
<span class="line"><span>    .collect(Collectors.toList());</span></span></code></pre></div><h2 id="六、课后思考题" tabindex="-1"><a class="header-anchor" href="#六、课后思考题"><span><strong>六、课后思考题</strong></span></a></h2><p>什么情况下适合使用函数式编程？什么时候不适合使用函数式编程？</p><blockquote></blockquote>`,17))])}const u=e(d,[["render",o]]),h=JSON.parse('{"path":"/language/Java/basics/code/27.lamda.html","title":"函数式编程","lang":"zh-CN","frontmatter":{"category":"Java","feed":false,"seo":false,"head":[]},"git":{"createdTime":1750518217000,"updatedTime":1750518217000,"contributors":[{"name":"weiser","username":"weiser","email":"1134685563@qq.com","commits":1,"url":"https://github.com/weiser"}]},"readingTime":{"minutes":15.12,"words":4535},"filePathRelative":"language/Java/basics/code/27.lamda.md"}');export{u as comp,h as data};
