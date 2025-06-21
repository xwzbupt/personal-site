---
category: Java
tag: 
  多线程
---

# 线程执行框架

::: tip

**如何获取一个线程所执行的代码的运行结果？**

本节，我们来讲线程执行框架。线程执行框架提供了一系列类，封装了线程创建、关闭、执行、管理等跟业务逻辑无关的代码逻辑，这样做一方面实现了业务逻辑与非业务逻辑的解耦，另一方面方便代码复用，开发者不再需要编写创建线程、启动线程等代码。实际上，上一节中讲到的ThreadPoolExecutor、Executors就隶属于线程执行框架。在开始本节的正式内容之前，我还是给你出一道思考题：如何获取一个线程所执行的代码的运行结果？

:::

## **一、Executor、ExecutorService、Executors**

线程执行框架包含三个长相类似的类：Executor、ExecutorService、Executors，很多人分不清楚它们的区别。实际上，Executor和ExecutorService都是接口。Executor接口只提供了一个函数：execute()。ExecutorService接口对Executor接口进行了扩展，额外提供了很多其他函数，包括submit()、shutdown()、shutdownNow()、awaitTermination()等等。JUC提供的现成的执行器并不多，前面讲到的ThreadPoolExecutor便是其中最常用的 一个。当然，我们也可以基于Executor接口或ExecutorService接口自定义执行器。Executors类是一个工具类，用来创建各种执行器，有点类似容器中的的Collections工具类。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/7997800_1662986506.png)



ThreadPoolExecutor在上一节中已经讲过，Executor、ExecutorService只是接口，比较简单，因此，我们重点看下Executors，特别是其中的几个工厂方法。



**1）newFixedThreadPool()**

newFixedThreadPool()函数用来创建大小固定的线程池，其代码实现如下所示，T hreadPoolExecutor中的maximumPoolSize跟corePoolSize相等，因此，线程池中的线程都是核心线程，一旦创建便不会销毁。workQueue为LinkedBlockingQueue，默认大小为Integer.MAX_VALUE，大小非常大，相当于无界阻塞队列。任务可以无限的往workQueue中提交，永远都不会触发拒绝策略。

```java
public static ExecutorService newFixedThreadPool(int nThreads) {
    return new ThreadPoolExecutor(nThreads, nThreads,
                                  0L, TimeUnit.MILLISECONDS,
                                  new LinkedBlockingQueue<Runnable>());
}
```





**2）newSingleThreadExecutor()**

newSingleThreadExecutor()函数用来创建单线程执行器，其代码实现如下所示。这个函数返回的是大小固定为1的ThreadPoolExecutor对象。workQueue同样是大小为Integer.MAX_VALUE的LinkedBlockingQueue。

```java
public static ExecutorService newSingleThreadExecutor() {
    return new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS,
                                  new LinkedBlockingQueue<Runnable>()));
}
```





**3）newCachedThreadPool()**

newCachedThreadPool()函数创建的线程池只包含非核心线程，线程空闲60秒以上便会销毁。因为workQueue是SynchronousQueue类型的，而SynchronousQueue是长度为0的阻塞队列，所以，workQueue不存储任何等待执行的任务。如果线程池内存在空闲线程，那么新提交的任务会被空闲线程执行，如果线程池内没有空闲线程，那么线程池会创建新的线程来执行新提交的任务。除此之外，线程池大小为Integer.MAX_VALUE，因此，线程池中创建的线程个数可以非常多。

```java
public static ExecutorService newCachedThreadPool() {
    return new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS,
                                  new SynchronousQueue<Runnable>());
}
```





**4）newScheduledThreadPool()**

newScheduledThreadPool()函数用来创建一个支持定时或周期性的执行任务的线程池，其部分代码实现如下所示。线程池的核心线程池大小为corePoolSize，整个线程池的大小为Integer.MAX_VALUE。

```java
public static ScheduledExecutorService newScheduledThreadPool(int corePoolSize) {
    return new ScheduledThreadPoolExecutor(corePoolSize);
}

public class ScheduledThreadPoolExecutor extends ThreadPoolExecutor
                                         implements ScheduledExecutorService {
    public ScheduledThreadPoolExecutor(int corePoolSize) {
        super(corePoolSize, Integer.MAX_VALUE, 0, NANOSECONDS,
              new DelayedWorkQueue());
    }
    
    //定时执行任务（只执行一次）
    public ScheduledFuture<?> schedule(Runnable command,
                                       long delay,
                                       TimeUnit unit) { ... }
    //周期性执行任务（固定频率）
    //period指的是上一个任务执行开始与下一个任务执行开始之间的时间间隔
    public ScheduledFuture<?> scheduleAtFixedRate(Runnable command,
                                                  long initialDelay,
                                                  long period,
                                                  TimeUnit unit) { ... }
    //周期性执行任务（固定间隔）
    //delay指的是上一个任务执行结束与下一个任务开始之间的时间间隔
    public ScheduledFuture<?> scheduleWithFixedDelay(Runnable command,
                                                     long initialDelay,
                                                     long delay,
                                                     TimeUnit unit) { ... }
    //...省略其他方法...
}
```





## **二、Runnable、Callable、Future**

前面讲到，当我们使用线程执行任务，我们需要将任务封装成Runnable对象，并将任务对应的业务逻辑放入Runnable的run()方法。因为run()方法没有返回值，所以，如果我们需要在另一个线程中获取这个线程的执行结果，那么，我们需要让两个线程共享同一个结果变量。示例代码如下所示。线程sumThread将计算结果通过共享变量sumRes传递给了线程main。

```java
public class Demo54_1 {
  private static final List<Integer> data = Arrays.asList(3, 4, 6, 2, 1);
  private static int sumRes = 0;
  public static void main(String[] args) throws InterruptedException {
    Thread sumThread = new Thread(new Runnable() {
      @Override
      public void run() {
        for (Integer d : data) sumRes += d;
      }
    });
    sumThread.start();
    sumThread.join();
    System.out.println(sumRes);
  }
}
```





除了共享变量之外，线程执行框架提供了另外一种返回线程执行结果的方法。示例代码如下所示，Callable替代Runnable来表示待执行的任务，带返回值的call()函数替代不带返回值的run()函数封装业务逻辑，submit()函数替代execute()函数提交任务。Future上的get()函数是阻塞函数，只有当call()函数执行结束返回之后，get()函数才从阻塞中唤醒。

```java
public class Demo54_2 {
  private static final List<Integer> data = Arrays.asList(3, 4, 6, 2, 1);
  public static void main(String[] args) throws ExecutionException, InterruptedException {
    ExecutorService executor = Executors.newSingleThreadExecutor();
    Future<Integer> future = executor.submit(new Callable<Integer>() {
      @Override
      public Integer call() throws Exception {
        int sumRes = 0;
        for (Integer d : data) sumRes += d;
        return sumRes;
      }
    });
    Integer sumRes = future.get();
    System.out.println(sumRes);
  }
}
```





## **三、课后思考题**

基于Executor接口，实现一个支持串行执行任务的SerialExecutor执行器。