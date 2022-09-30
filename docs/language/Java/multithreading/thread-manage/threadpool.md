---
category: Java
tag: 
  多线程
---

# 线程池

::: tip

**线程池开多大最合适？为什么Redis单线程执行命令？**

虽然在平时的业务开发中，我们很少直接使用线程池，但是，在开发中所用到的很多框架、系统中，比如Tomcat、Dubbo RPC等，都离不开线程池。可以这么说，只要用到线程的地方，线程的创建、管理基本上都是由线程池负责的。

我们在使用这些框架、系统的时候，需要对线程池参数做设置。线程池参数设置的合理性，特别是线程池的大小，直接影响了硬件的利用率和系统的性能，那么，线程池到底开多大才合适呢？有什么理论依据吗？带着这个问题，我们来学习今天的内容：线程池。

:::

## **一、线程池的简介**

线程池是池化技术的一种，常见的池化技术还有数据库连接池、对象池等，池化技术用来避免资源的频繁创建和销毁，提高资源的复用率。



回到线程池，Java线程的创建和销毁会涉及到Thread对象的创建和回收、系统调用以及系统调用引起的上下文切换，因此，会消耗一定的时间。如果某个系统频繁使用线程处理短暂请求，比如Tomcat处理HTTP请求，那么，频繁的创建和销毁线程势必会影响系统性能。这时我们就可以使用线程池来避免线程的频繁创建和销毁。当系统需要线程来处理请求时，直接从线程池中获取线程。当请求处理完成之后，系统再将线程归还给线程池以供复用。



在Java中，线程池对应的类为ThreadPoolExecutor类。我们先来通过一个简单的例子，对ThreadPoolExecutor的用法有个直观的了解。示例代码如下所示。



```java
public class Demo53_1 {
  public static void main(String[] args) throws InterruptedException {
    // 创建与配置
    ThreadPoolExecutor pool = new ThreadPoolExecutor(
        5, 10, 1000, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<>(15),
        new ThreadFactory() {
          private final AtomicInteger idx = new AtomicInteger(1);
          @Override
          public Thread newThread(Runnable r) {
            return new Thread(r, "pool-"+idx.getAndIncrement());
          }
        }, new DiscardPolicy());

    // 执行
    pool.execute(new Runnable() {
      @Override
      public void run() {
        System.out.println("xiao zheng ge!");
      }
    });

    // 关闭
    pool.shutdown(); //发起关闭请求
    boolean terminated = false;
    while (!terminated) {
      // 返回值为false表示超时，返回值为true表示线程池真正关闭。
      terminated = pool.awaitTermination(100, TimeUnit.SECONDS); 
    }
    System.out.println("pool is shutdown.");
  }
}
```





对于上述示例，你可能有很多疑问，没有关系，接下来，我们从线程池的创建、执行、关闭、配置这4个方面，详细讲解ThreadPoolExecutor类的使用方法和底层实现原理。



## **二、线程池的创建**

ThreadPoolExecutor类的构造函数有很多，其中，最底层的构造函数如下所示，其他构造函数均调用这个最底层的构造函数来实现。



```java
public ThreadPoolExecutor(int corePoolSize,
                          int maximumPoolSize,
                          long keepAliveTime,
                          TimeUnit unit,
                          BlockingQueue<Runnable> workQueue,
                          ThreadFactory threadFactory,
                          RejectedExecutionHandler handler);
```





从上述构造函数，我们可以发现，创建线程池需要设置的参数有很多，接下来，我们一一讲解一下这些参数。



**1）int corePoolSize**

这个参数表示核心线程池的大小。整个线程池分为两部分：核心线程池和非核心线程池。核心线程池中的线程一旦创建就不会销毁。相反，非核心线程中的线程在创建之后，如果长时间没有被使用，便会销毁。



**2）int maximumPoolSize**

这个参数表示整个线程池的大小。因为整个线程池包含核心线程池和非核心线程，所以，maximumPoolSize这个参数减去上一个参数corePoolSize就是非核心线程池的大小。



**3）int keepAliveTime和TimeUnit unit**

刚刚讲到，非核心线程池中的线程长时间没有被使用就会销毁，那么，这里的“长时间”到底是多长时间呢？实际上，这个时间值就是通过keepAliveTime和unit这两个参数来决定，其中unit表示时间单位，可以是毫秒、纳秒、分钟、小时、天等。



**4）BlockingQueue \<Runnable> workQueue**

workQueue用来存储任务。当有新的任务请求线程处理时，如果核心线程池已满，那么，新来的任务将放入workQueue中，等待线程处理。workQueue是阻塞队列。在前面章节中，我们讲到，JUC提供的阻塞队列有很多种，比如，ArrayBlockingQueue、LinkedBlockingQueue、PriorityBlockingQueue、SynchronousQueue等等，这些阻塞队列都可以用于workQueue。



**5）RejectedExecutionHandler handler**

如果线程池中没有空闲的线程，也无法再创建新的线程（线程池中已经存在maximumPoolSize个线程），并且等待队列workQueue已满，那么，此时有新的任务请求线程池执行，就会触发线程池的拒绝策略。我们可以通过参数hanlder来设置拒绝策略。当然，这里只针对workQueue为有界阻塞队列（比如ArrayBlockingQueue或设置了大小的LinkedBlockingQueue）的情况。如果workQueue是无界阻塞队列（比如PriorityBlockingQueue或没有设置大小的LinkedBlockingQueue），那么，拒绝策略永远都不会触发。



RejectedExecutionHandler是一个接口，接口的定义非常简单，如下所示。

```java
public interface RejectedExecutionHandler {
    void rejectedExecution(Runnable r, ThreadPoolExecutor executor);
}
```





ThreadPoolExecutor预先定义好的一些拒绝策略类，如下所示，当然，我们也可以通过实现RejectedExecutionHandler接口来自定义拒绝策略类。其中，CallerRunsPolicy对应的拒绝策略为：由任务递交者代替线程池来执行这个任务。AbortPolicy对应的拒绝策略为：直接放弃执行任务，并抛出RejectedExecutionException异常。DiscardPolicy对应的拒绝策略为：直接放弃执行任务。DiscardOldestPolicy对应的拒绝策略为：删掉workQueue中的一个任务，再次调用execute()执行当前任务。

```java
public static class CallerRunsPolicy implements RejectedExecutionHandler {
    public CallerRunsPolicy() { }
    public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
        if (!e.isShutdown()) { r.run(); }
    }
}

public static class AbortPolicy implements RejectedExecutionHandler {
    public AbortPolicy() { }
    public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
        throw new RejectedExecutionException("Task " + r.toString() +
                                             " rejected from " + e.toString());
        }
}
    
public static class DiscardPolicy implements RejectedExecutionHandler {
    public DiscardPolicy() { }
    public void rejectedExecution(Runnable r, ThreadPoolExecutor e) { }
}

public static class DiscardOldestPolicy implements RejectedExecutionHandler {
    public DiscardOldestPolicy() { }
    public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
        if (!e.isShutdown()) {
            e.getQueue().poll();
            e.execute(r);
        }
    }
}
```





**6）ThreadFactory threadFactory**

如果在创建ThreadPoolExecutor对象时，传入了ThreadFactory工厂类对象，那么，线程池中线程的创建均通过工厂类中的newThread()方法来实现。我们可以自定义newThread()函数的实现方式，在创建线程的时候，附加一些其他信息，比如线程名称。具体用法可以参看本节开头的示例代码。



线程池的创建非常复杂，需要传递很多参数，用起来很不方便，JUC当然不会做事不管。JUC的Executors类提供了一些工厂方法，比如newFixedThreadPool()、newSingleThreadExecutor()、newCachedThreadPool(0、newScheduledThreadPool()，用来创建一些常用类型的线程池，简化线程池的创建过程。关于Executors类以及这些工厂方法，我们留在下一节中讲解。



## **三、线程池的执行**

当需要线程池执行任务时，我们只需要将待执行的任务，封装成Runnable对象，然后将Runnable对象传递给execute()函数即可。execute()函数全权负责任务的执行。实际上，线程池在创建时，并不会事先把线程创建好。线程池中的线程是在有任务需要执行时才创建。当任务到来时，线程池可能处于不同的状态，进而对应不同的处理方式，如下所示。

1）检查核心线程池是否已满，如果未满，则创建核心线程执行任务。

2）如果核心线程池已满，那么再检查等待队列是否已满，如果等待队列未满，则将任务放入等待队列。

3）如果等待队列已满，则再检查非核心线程池是否已满，如果未满，则创建非核心线程执行任务。

4）如果核心线程池、非核心线程池、等待队列都满，则按照拒绝策略对任务进行处理。



我们将execute()函数的上述执行过程，用图表示出来，如下所示。图中的1\~4编号分别对应上述的1)~4)这4种不同的处理方式。

![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/30662200_1662512149.png)



实际上，线程池执行任务的过程，并非是从线程池中取出线程然后执行任务，而是将任务放到等待队列中等待线程的读取并执行。核心线程被创建之后，会调用workQueue上的take()函数，不停的从workQueue中取任务处理，take()函数是阻塞函数，当workQueue中没有待执行的任务时，take()函数会一直阻塞等待。非核心线程被创建之后，会调用workQueue上的poll()，不停的从workQueue中取任务处理。poll()函数也是阻塞函数，跟take()函数的不同之处在于，poll()函数可以设置阻塞的超时时间。如果poll()函数的阻塞时间超过keepAliveTime（在创建线程池时设置的非核心线程空闲销毁时间），那么，poll()函数会从阻塞中返回并执行线程销毁逻辑。



## **四、线程池的关闭**

当应用程序关闭时，线程池也需要关闭。ThreadPoolExecutor提供了两个线程池关闭函数，如下所示，对应两种不同的线程池关闭方式。

```java
public void shutdown();
public List<Runnable> shutdownNow();
```





当我们在线程池上执行shutdown()函数时，线程池会拒绝接收新的任务，但是会将正在执行的任务以及等待队列中的任务全部执行完成。这是一种比较优雅的关闭线程池的方式。当我们在线程池上执行shutdownNow()函数时，线程池会同样拒绝接收新的任务，跟shutdown()函数的处理方式不同的地方是，shutodownNow()会清空等待队列，并向所有的线程发送中断请求。调用take()或poll()阻塞等待获取任务的线程会被中断然后结束，正在执行任务的线程收到中断请求之后，既可以选择响应中断，终止执行，也可以选择不理会，继续执行直到任务执行完成。具体看业务逻辑有没有编写对中断的响应处理逻辑。除此之外，shutdownNow()函数返回值为等待队列中未被执行的任务。



需要注意的是，shutdown()和shutdownNow()函数返回时，线程池内的线程有可能还在执行任务，因此，如果我们要确保所有的线程都已经结束，需要调用awaitTermination()函数阻塞等待。具体可以参看本节开头的示例。



## **五、线程池的配置**

线程池应该开多大是开发和面试中经常遇到的一个问题。对于这个问题，我们需要分以下几种情况来分析。对于CPU密集型程序，对应的线程池不需要开太大，跟可用CPU核数相当或稍大即可。这样便可以充分的利用CPU资源。对于I/O密集型程序，因为程序的大部分时间都在执行I/O操作，所以，CPU利用率很低。为了提高CPU的利用率，我们可以将线程池适当开大点，以便众多线程轮流使用CPU。那么，既非CPU密集又非I/O密集的程序，对应的线程池大小又该如何设置呢？有没有具体的计算机公式可以给出线程池大小的确切值呢？



从理论上来讲，确实存在这样的计算公式。假设通过监控统计，我们得知线程池执行的任务平均CPU耗时为cpu_time毫秒，平均I/O耗时（确切的讲应该为非CPU耗时，但是，大部分非CPU耗时一般都花费在I/O上，因此，这里就直接使用I/O耗时代指非CPU耗时）为io_time毫秒，那么，线程池大小的计算公式如下所示。以下是针对单核CPU的计算公式，如果CPU核有N个，那么，我们只需要在计算结果上乘以N，便是最终线程池的大小。除此之外，以下公式计算出的线程池大小指的是CPU利用率100%时对应的线程池大小。

```java
pool_size = (cpu_time + io_time) / cpu_time
```





对于上面的公式，我们举例解释一下。假设执行任务的平均CPU耗时占总耗时的1/3，平均I/O耗时占总耗时的2/3，那么，根据上述计算公式，在单核CPU上，我们需要将线程池大小设置为3，才能将CPU没有一丁点空闲时间，也就是CPU利用率100%。具体如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/59348700_1662512150.png)



实际上，上述计算公式的合理性还有两个前提，一是没有瓶颈操作，各个操作不会随着线程的增加而性能降低；二是没有瓶颈资源，各个资源的数量满足所有线程的需求。



我们拿Redis举例来解释一下瓶颈操作。



尽管Redis执行命令这一任务是I/O密集型的，根据上述公式，理应将线程池开大点，才能充分利用CPU资源，但是，Redis执行命令的过程中，I/O操作才是瓶颈操作。尽管我们可以将线程池开的很大，让CPU利用率高达100%，但命令的执行都阻塞在I/O操作上了，整体的执行效率并不会提高。这时，我们就要重点关注I/O的利用率，而非CPU的利用率。如果单线程执行命令就可以让I/O负荷达到100%，我们又何必使用多线程呢？



我们拿数据库连接举例来解释一下瓶颈资源。



如果任务的执行依赖数据库，数据库连接是通过数据库连接池来管理的，假设数据库连接池的大小为N。当线程数大于N时，数据库连接就成了瓶颈资源，多出来的线程需要等待数据库连接，整体的执行效率也不会提高。对于存在瓶颈资源的任务来说，在计算或者估计线程池大小时，不能再以CPU利用率100%为目标，而是以充分利用瓶颈资源为目标。也就是说，线程池大小应该设置为跟数据库连接池大小相当才算合理。



## **六、课后思考题**

如何统计线程池执行任务的平均耗时？