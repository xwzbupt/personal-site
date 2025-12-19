import{_ as n,c as a,a as i,o as e}from"./app-mRFOk-Ym.js";const p={};function l(t,s){return e(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="注解" tabindex="-1"><a class="header-anchor" href="#注解"><span>注解</span></a></h1><blockquote><p><strong>注解的配置方式相对于XML配置文件有什么优缺点？</strong></p></blockquote><p>对于Java程序员来说，注解应该一点都不陌生，一些注解我们天天都在用，比如@Override、@Deprecated、@SuppressWarning等。除了这些Java内建注解（built-in anotation）之外，我们还可以定义注解，比如，Spring框架就自定义了@Service、@Controller等很多注解，我们可以使用注解替代XML配置文件来提供配置。本节，我们就详细讲解一下注解。在开始之前，给你留一个思考题：相对于XML配置文件的配置方式，使用注解来做配置有何优缺点？带着这个问题，我们开始今天的学习吧。</p><h2 id="一、定义注解" tabindex="-1"><a class="header-anchor" href="#一、定义注解"><span><strong>一、定义注解</strong></span></a></h2><p>在讲解异常时，我们提到，尽管Java提供了许多内建异常，但是，在平时的开发中，我们还需要经常根据业务需求自定义异常。注解跟异常有相似之处，也有不同的地方。相似之处是，异常和注解都提供了内建和自定义两种类型。不同的地方在于，在项目开发中，我们经常会自定义异常，但很少自定义注解。跟反射的应用场景类似，自定义注解的应用场景更多的是框架开发，比如刚刚提到Spring框架就定义了很多注解。</p><p>注解的定义方式比较简单，如下所示。其中一个Java内建注解，另一个是自定义注解。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// Java内建注解</span></span>
<span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.SOURCE)</span></span>
<span class="line"><span>public @interface Override {</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义注解</span></span>
<span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Documented</span></span>
<span class="line"><span>public @interface RateLimit {</span></span>
<span class="line"><span>  public enum TimeUnit { SECOND, MINUTE, HOUR, DAY, MONTH}</span></span>
<span class="line"><span>  String apiName();</span></span>
<span class="line"><span>  int limitCount();</span></span>
<span class="line"><span>  TimeUnit timeUnit() default TimeUnit.SECOND;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码，我们发现，定义一个Java注解，仍然需要用到注解。@Target、@Retetion等这些用于定义注解的注解，叫做元注解。接下来，我们依次来看下，这些元注解都是干什么用的。</p><p><strong>1）@Target</strong></p><p>@Target用来描述注解的使用范围，它有以下取值。我们一一罗列并解释。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ElementType.TYPE：类、接口、枚举</span></span>
<span class="line"><span>ElementType.METHOD：用于方法</span></span>
<span class="line"><span>ElementType.CONSTRUCTOR：用于构造器</span></span>
<span class="line"><span>ElementType.FIELD：用于成员变量</span></span>
<span class="line"><span>ElementType.LOCAL_VARIABLE：用于局部变量</span></span>
<span class="line"><span>ElementType.PARAMETER：用于参数</span></span>
<span class="line"><span>ElementType.PACKAGE：用于包</span></span></code></pre></div><p>一般来讲，注解最常用于类、方法、成员变量。你可能对注解用于包、参数、局部变量，感到比较诧异。实际上，注解只不过是起标识作用，就相当于给代码元素打了一个tag，任何编译器或者应用程序通过反射可以访问的代码元素，我们都可以用注解去标识。关于最后这句话，我们待会再解释。</p><p>一个注解可以有多个使用范围，如下所示。如果在定义注解时，我们不使用@Target标记使用范围，那么注解可以用于任何范围。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@Target({ElementType.PARAMETER, ElementType.LOCAL_VARIABLE})</span></span></code></pre></div><p><strong>2）@Retention</strong></p><p>@Retetion用来描述注解的可见范围（或叫生命周期），它有以下取值。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>RetentionPolicy.SOURCE</span></span>
<span class="line"><span>RetentionPolicy.CLASS</span></span>
<span class="line"><span>RetentionPolicy.RUNTIME</span></span></code></pre></div><p>SOURCE表示注解仅在源码中可见。当编译器将源码编译成字节码后，注解信息将被丢弃。不过，编译器可以读取到可见范围为SOURCE的注解。比如，@Override的可见范围就是SOURCE，编译器在编译代码的时候，发现函数上标有@Override注解，就会去检查对应的函数有没有在父类中定义，如果没有，就提示编译错误。CLASS表示注解在源码、字节码中均可见，但在运行时是不可见的。我们无法在程序运行时，利用反射获取到代码（类、方法等）的这类注解信息。RUNTIME表示注解在源码、字节码、运行时均可见，其生命周期最长，我们可以在程序运行时，利用反射来获取代码的这类注解信息。</p><p><strong>3）@Documented</strong></p><p>@Document用来表示注解信息会输出到Javadoc文档中。当我们根据源码生成Javadoc文档时，类或方法上的用@Documented标记的注解也会跟随输出到Javadoc文档中。</p><p><strong>4）@interface</strong></p><p>class、interface、enum、@interface这四者是平级关系，class用来定义类，interface用来定义接口，enum用来定义枚举，@interface用来定义注解。在注解中，我们还可以定义一些变量。变量的定义比较特殊，跟普通类中的变量定义方式不同。注解使用方法来定义的变量。示例代码如下所示。对于只有一个变量的注解，我们可以将其定义为value，这样，在使用时，我们可以不指定变量的名称。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@Target(ElementType.TYPE)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.SOURCE)</span></span>
<span class="line"><span>public @interface Author {</span></span>
<span class="line"><span>  String value();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Retention(RetentionPolicy.SOURCE)</span></span>
<span class="line"><span>public @interface Description {</span></span>
<span class="line"><span>  String author();</span></span>
<span class="line"><span>  String date();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Author(&quot;wangzheng&quot;)</span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>  @Description(author=&quot;wangzheng&quot;, date=&quot;2020-11-22&quot;)</span></span>
<span class="line"><span>  public void f() {</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>  } </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了以上元注解之外，还有其他一些元注解，比如@Inherited、@Repeatable，因为它们并不常用，所以，我们这里就不一一讲解了，感兴趣的话，可以自行查阅。</p><h2 id="二、标记注解" tabindex="-1"><a class="header-anchor" href="#二、标记注解"><span><strong>二、标记注解</strong></span></a></h2><p>不管是内建注解，还是自定义注解，使用方法都是一样的。注解用于类、方法等代码元素之上，起到标记作用。比如，Java内建注解@Override，用来标记某个函数是对父类的重写。再比如前面定义的@RateLimit注解，用于标记需要限流的接口，使用方式如下所示。在使用注解时，我们可以为注解中定义的变量赋值。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class UserController {</span></span>
<span class="line"><span>  @RateLimit(apiName=&quot;/user/register&quot;, limitCount=1000, timeUnit=RateLimit.TimeUnit.SECOND)</span></span>
<span class="line"><span>  public UserVo register(String telephone, String password) { ... }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="三、读取注解" tabindex="-1"><a class="header-anchor" href="#三、读取注解"><span><strong>三、读取注解</strong></span></a></h2><p>大部分情况下，只定义和标记注解还不够，还需要有读取注解并做相应处理的代码逻辑，才能发挥注解的真正作用。注解的定义、标记、读取三者缺一不可。这就相当于，在推荐算法中，我们只定义标签和给数据打标签是没用的，我们还需要设计根据标签分类数据的算法，这样才能发挥标签的作用。对于Java内建注解，编译器和JVM都可以对其进行读取和处理，比如@Override注解，编译器在编译代码时，会读取所有标记了@Override的方法，并且检查父类中是否有同名方法，如果没有则编译报错。</p><p>对于自定义注解，我们需要自己开发相应的读取和处理逻辑。如何来读取代码（类或方法等）中的注解信息呢？这就要用到上一节课讲到的反射语法。因为反射作用于代码运行时，所以，从侧面上，我们也可以得出，自定义注解的@Retention可见范围一般应该设置为RUNTIME。</p><h2 id="四、注解应用" tabindex="-1"><a class="header-anchor" href="#四、注解应用"><span><strong>四、注解应用</strong></span></a></h2><p>注解主要有3个应用：替代注释、替代Marker Interface、替代XML配置文件。我们依次来看下这3个应用。</p><p><strong>1）替代注释</strong></p><p>在编写单元测试代码时，因为访问权限的限制，单元测试一般只能测试public和protected方法。如果我们希望测试private方法，那么我们需要将这个方法的访问权限从private变为protected。为了表明此方法设置为protected只是为了测试，以免程序员误解和误用，我们可以使用Google Guava提供的@VisibleForTesting注解在方法上进行标记。实际上，@VisibleForTesting注解只是起到注释的作用，并没有实际的作用，并不能限制除了单元测试代码之外的其他代码访问这个方法。尽管这里我们也可以使用注释来替代注解，但是注解相对于注释，更加规范、统一，可读性更好。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class IdGenerator {</span></span>
<span class="line"><span>  public String generate() { ... }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  private String getLastfieldOfHostName() { ... }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  @VisibleForTesting </span></span>
<span class="line"><span>  protected String getLastSubstrSplittedByDot(String hostName) { ... }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  @VisibleForTesting</span></span>
<span class="line"><span>  protected String generateRandomAlphameric(int length) { ... }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>2）替代Marker Interface</strong></p><p>Java中有一种特殊的接口，叫做标记接口（Marker Interface）。标记接口中不包含任何方法，跟注解类似，起到标记作用。比如，常见的标记接口有RandomAccess、Cloneable、Serializable等，它们的定义如下所示。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public interface RandomAccess {}</span></span>
<span class="line"><span>public interface Cloneable {}</span></span>
<span class="line"><span>public interface Serializable {}</span></span></code></pre></div><p>ArrayList容器实现了这三个标记接口，用于表示ArrayList容器支持随机访问、克隆、序列化。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt;</span></span>
<span class="line"><span>        implements List&lt;E&gt;, RandomAccess, Cloneable, java.io.Serializable {</span></span>
<span class="line"><span>  //....省略代码... </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在某些代码逻辑中，我们可以根据标记接口，判断对象是否可以执行某些操作（比如是否可以随机访问、是否可以克隆、是否可以序列化）。如下所示，java.util.Collections类中的binarySearch()函数，会根据不同类型的List容器执行不同的二分查找逻辑。对于支持随机访问的List容器，也就是实现了RandomAccess标记接口的List容器，binarySearch()函数调用indexedBinarySearch()函数来实现二分查找。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 位于java.util.Collections类中</span></span>
<span class="line"><span>public static &lt;T&gt; int binarySearch(List&lt;? extends T&gt; list, T key, Comparator&lt;? super T&gt; c) {</span></span>
<span class="line"><span>    if (c==null)</span></span>
<span class="line"><span>        return binarySearch((List&lt;? extends Comparable&lt;? super T&gt;&gt;) list, key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (list instanceof RandomAccess || list.size()&lt;BINARYSEARCH_THRESHOLD)</span></span>
<span class="line"><span>        return Collections.indexedBinarySearch(list, key, c);</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        return Collections.iteratorBinarySearch(list, key, c);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>标记接口只是起到标记作用，注解也可以起到标记的作用，因此，我们可以使用注解来替代标记接口。比如，我们可以将RandomAccess标记接口替换为如下注解。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@Target(ElementType.TYPE)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>public @interface RandomAccess {</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在ArrayList类中，我们使用@RandomAccess注解来表示ArrayList容器支持随机访问，如下所示。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@RandomAccess</span></span>
<span class="line"><span>public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt;</span></span>
<span class="line"><span>        implements List&lt;E&gt;, Cloneable, java.io.Serializable {</span></span>
<span class="line"><span>  //....省略代码... </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>RandomAccess标记接口改为@RandomAccess注解之后，我们需要重新实现Collections中的binarySearch()函数。重新实现之后的代码如下所示，binarySearch()函数通过读取list对象对应的类上的注解信息，来判断list容器是否支持随机访问。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public static &lt;T&gt; int binarySearch(List&lt;? extends T&gt; list, T key, Comparator&lt;? super T&gt; c) {</span></span>
<span class="line"><span>    if (c==null)</span></span>
<span class="line"><span>        return binarySearch((List&lt;? extends Comparable&lt;? super T&gt;&gt;) list, key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Class&lt;?&gt; clazz = list.getClass();</span></span>
<span class="line"><span>    if (clazz.isAnnotationPresent(RandomAccess.class) || list.size()&lt;BINARYSEARCH_THRESHOLD)</span></span>
<span class="line"><span>        return Collections.indexedBinarySearch(list, key, c);</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        return Collections.iteratorBinarySearch(list, key, c);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>3）替代配置文件</strong></p><p>在上一节中，我们讲到，Spring IOC容器需要读取应用程序的配置文件，解析出需要创建的对象，然后使用反射来创建对象。Spring中配置文件的加载方式和配置文件如下示例代码所示。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class Demo {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;beans.xml&quot;);</span></span>
<span class="line"><span>    RateLimiter rateLimiter = (RateLimiter) applicationContext.getBean(&quot;rateLimiter&quot;);</span></span>
<span class="line"><span>    rateLimiter.test();</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 配置文件beans.xml</span></span>
<span class="line"><span>&lt;beans&gt;</span></span>
<span class="line"><span>    &lt;bean id=&quot;rateLimiter&quot; class=&quot;com.xzg.RateLimiter&quot;&gt;</span></span>
<span class="line"><span>        &lt;constructor-arg ref=&quot;redisCounter&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span>    &lt;bean id=&quot;redisCounter&quot; class=&quot;com.xzg.redisCounter&quot; scope=&quot;singleton&quot; lazy-init=&quot;true&quot;&gt;</span></span>
<span class="line"><span>        &lt;constructor-arg type=&quot;String&quot; value=&quot;127.0.0.1&quot;&gt;</span></span>
<span class="line"><span>        &lt;constructor-arg type=&quot;int&quot; value=1234&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span>&lt;/bean</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了支持配置文件的配置方式之外，Spring还支持基于注解的配置方式。我们将以上XML配置文件替换为Java注解，如下所示。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class AppConfig {</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public RateLimiter rateLimiter() {</span></span>
<span class="line"><span>        return new RateLimiter(redisCounter());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Bean(&quot;redisCnt&quot;)</span></span>
<span class="line"><span>    public RedisCounter redisCounter() {</span></span>
<span class="line"><span>        return new RedisCounter(&quot;127.0.0.1&quot;, 1234);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);</span></span>
<span class="line"><span>    RateLimiter rateLimiter = (RateLimiter) applicationContext.getBean(&quot;rateLimiter&quot;);</span></span>
<span class="line"><span>    rateLimiter.test();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>程序在启动时，Spring IOC容器利用反射获取到AppConfig上的注解，发现包含@Configuration注解，便确定这个类为配置类，然后，利用反射获取标记有@Bean注解的方法，利用反射执行方法并将创建的对象放置于BeansFactory中。BeansFactory维护了一个Map结构，Map中的键为对象名称，值为对象本身，之后我们便可以使用getBean(&quot;rateLimiter&quot;)这种方式从BeansFactory中获取对象了。对于@Bean标注的方法，默认使用类名首字母小写作为对象名称（比如rateLimiter），当然，也可以通过注解中的value变量来指定对象名称（比如rediCnt）。</p><p>从上述示例，我们发现，跟XML配置文件的配置方式类似，基于Java注解的配置方式，也是集中式的配置方式，所有要创建对象都集中在AppConfig类中。AppConfig类就等同于XML配置文件，只不过形式不同而已。有些Java程序员偏爱于Java代码做配置，有些Java程序员偏爱于XML文件做配置，两者没有绝对的优势。不过，基于Java注解，不仅可以实现集中式配置，还可以将配置分散在各个类中。</p><p>如下所示，如果我们需要Spring IOC容器帮忙创建和管理某个类的对象，那么我们只需要在这个类上标记上@Component注解（当然也可以是@Controller、@Service、@Repository等Spring可以识别的其他注解）。Spring IOC容器会为标记了@Component注解的类创建一个同名对象。当然，我们也可以在@Component注解中指定创建的对象名称。除此之外，如果创建某个类的对象需要依赖其他对象，那么，我们可以使用@Autowired自动依赖注入注解，标记依赖的成员变量，这样Spring IOC容器会从BeanFactory中获取依赖的对象，自动赋值给成员变量。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@Component</span></span>
<span class="line"><span>public class RateLimiter {</span></span>
<span class="line"><span>  @Autowired</span></span>
<span class="line"><span>  private RedisCounter redisCounter;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  public void test() {</span></span>
<span class="line"><span>    System.out.println(&quot;Hello World!&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  //...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因为被标记为@Component的类可散落在项目代码中的各个地方，为了让Spring IOC容器能查找到这些类，我们需要告知Spring IOC去哪些package下扫描查找。告知的方法如下所示，编写AppConfig类，并且通过注解@ComponentScan指定扫描路径。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.xzg&quot;)</span></span>
<span class="line"><span>public class AppConfig {</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);</span></span>
<span class="line"><span>    RateLimiter rateLimiter = (RateLimiter) applicationContext.getBean(&quot;rateLimiter&quot;);</span></span>
<span class="line"><span>    rateLimiter.test();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>程序在启动时，Spring IOC容器会通过反射读取AppConfig类上的注解，发现包含@Configuration，确认是配置文件，然后再通过反射读取@ComponentScan注解中的value值，获得扫描范围com.xzg。接下来，Spring IOC容器便在com.xzg包下，扫描标记有@Component注解的类，然后利用反射创建类的对象，并存储到BeansFactory中。在创建的过程中，如果某个类中的成员变量标记有@Autowired注解，那么Spring IOC容器会从BeansFactory中，查找已经创建好的对象，自动赋值给这个成员变量。</p><p>对于以上非集中式的配置方式，添加、删除类不需要修改集中的配置文件，并且，注解还能在代码中起到注释的作用，比如，在阅读代码时，如果我们发现某个方法标记了@Transactional注解，那么，我们可以得知这个方法支持事务。当然，集中式配置也有优点，那就是配置信息跟代码解耦合，方便代码复用，除此之外，使用集中式配置，配置集中于一处，项目中有哪些配置一目了然，比如，如果我们使用配置文件配置事务，那么通过查看配置文件，我们就可以得知项目中所有支持事务的方法。集中式配置方式（基于XML配置文件、基于Java注解）和非集中式配置方式（基于Java注解）各有利弊，没有哪个具有绝对优势，你可以根据团队的习惯自行选择。</p><h2 id="五、课后思考题" tabindex="-1"><a class="header-anchor" href="#五、课后思考题"><span><strong>五、课后思考题</strong></span></a></h2><p>很多Java IDE中都支持Lombook插件，借助Lombook插件，我们只需要如下所示使用Lombook提供的注解，Lombook便能自动帮我们生成getter、setter方法。请简单阐述一下Lombook是实现原理。</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>public class Student {</span></span>
<span class="line"><span>    @Getter</span></span>
<span class="line"><span>    @Setter</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,64)])])}const r=n(p,[["render",l]]),o=JSON.parse('{"path":"/language/Java/basics/code/25.annotation.html","title":"注解","lang":"zh-CN","frontmatter":{"category":"Java","feed":false,"seo":false,"head":[]},"git":{"createdTime":1750518217000,"updatedTime":1750518217000,"contributors":[{"name":"weiser","username":"weiser","email":"1134685563@qq.com","commits":1,"url":"https://github.com/weiser"}]},"readingTime":{"minutes":12.86,"words":3857},"filePathRelative":"language/Java/basics/code/25.annotation.md"}');export{r as comp,o as data};
