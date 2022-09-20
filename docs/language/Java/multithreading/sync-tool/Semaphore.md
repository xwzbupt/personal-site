---
category: Java
tag: 
  - 多线程
  - 同步工具类
---

# **信号量**

::: tip

**如何使用信号量来限制并发执行某个接口的线程数？**

信号量是并发编程中的一个重要概念，JUC提供了Semaphore类来实现信号量。信号量用来限制临界区和共享资源的并发访问。使用互斥锁，临界区和共享资源同时只能被一个线程访问；使用信号量，临界区和共享资源同时可以被多个线程访问。因此，信号量也可以看做是一种共享锁，其底层也是基于AQS实现的。

:::

## **一、信号量的由来**

假设我们在开发一个接口服务器，对于某个接口，我们希望限制其并发执行度，也就是，同一时刻只能允许N个线程并发执行这个接口的请求。对于这样一个接口并发限制功能，具体该如何来实现呢？



我们可以使用AtomicInteger原子类来实现接口并发限制功能，代码如下所示。

```java
public class Demo {
  // apiX接口同时只允许10个线程并发执行
  private final AtomicInteger permits = new AtomicInteger(10);
  
  public void apiX() {
    int newPermits = permits.decrementAndGet();
    if (newPermits < 0) {
      permits.incrementAndGet();
      return; // 拒绝执行业务逻辑，直接返回
    }
    try {
      // 执行业务逻辑
    } finally {
      permits.incrementAndGet();
    }
  }
}
```





当然，我们也可以使用锁来实现接口并发限制功能，代码如下所示。

```java
public class Demo {
  // apiX接口同时只允许10个线程并发执行
  private int permits = 10;

  public void apiX() {
    if (permits <= 0) {
      return;
    }
    synchronized (this) {
      if (permits <= 0) return; //双重检测
      permits--;
    }
    
    try {
      // 执行业务逻辑
    } finally {
      synchronized (this) {
        permits++;
      }
    }
  }
}
```





对以上两种实现方法，如果已经有10个线程在执行apiX()接口，那么第11线程在执行apiX()接口时，将无法获取到许可（permit），于是，就拒绝执行业务逻辑并直接返回。尽管这样可以保证任何时刻最多只有10个线程同时在执行apiX()接口，但这样也会导致大量接口请求被拒绝。



如何解决大量接口请求被拒绝的问题呢？实际上，我们可以将无法获取许可的线程阻塞，等待其他持有许可的线程释放许可之后，再将阻塞线程唤醒，让其竞争获取许可并继续执行后续业务逻辑。当然，这样可能会让接口请求的响应时间增大。



实际上，上述处理过程就是一个标准的等待通知机制，我们可以使用上一节讲到的条件变量来实现，代码如下所示。线程在执行apiX()函数时，如果可用permits小于等于0，那么线程会调用awaitUniterruptibly()阻塞。当可用permits大于0时，线程获取许可，将permits减一，并执行业务逻辑。当业务逻辑执行完成之后，在退出apiX()函数之前，线程将归还持有的许可，也就是将permits减一，并调用singal()函数，通知其他等待许可的线程。

```java
public class Demo {
  // apiX接口同时只允许10个线程并发执行
  private int permits = 10;
  private Lock lock = new ReentrantLock();
  private Condition condition = lock.newCondition();

  public void apiX() {
    lock.lock();
    try {
      while (permits <= 0) {
        condition.awaitUninterruptibly();
      }
      permits--;
    } finally {
      lock.unlock();
    }

    try {
      // 执行业务逻辑
    } finally {
      lock.lock();
      permits++;
      condition.signal();
      lock.unlock();
    }
  }
}
```





上述使用条件变量的实现方式比较复杂。实际上，对于临界区的并发访问限制，使用信号量实现更加简单。



## **二、临界区并发访问限制**

Semaphore类提供的常用方法有以下几个。我们可以粗略地将以下方法分为两组。前五个为一组，默认一次获取或释放的许可（permit）个数为1。后五个为一组，可以指定一次获取或释放的许可个数。对于每组方法来说，都有4个不同的获取许可的方法：可中断获取、不可中断获取、非阻塞获取、可超时获取，这跟Lock提供的各种加锁方法非常相似。这也应征了前面提到的，信号量可以看作是一种共享锁。

```java
public void acquire() throws InterruptedException;
public void acquireUninterruptibly();
public boolean tryAcquire();
public boolean tryAcquire(long timeout, TimeUnit unit)
        throws InterruptedException;
public void release();

public void acquire(int permits) throws InterruptedException;
public void acquireUninterruptibly(int permits);
public boolean tryAcquire(int permits);
public boolean tryAcquire(int permits, long timeout, TimeUnit unit)
        throws InterruptedException;
public void release(int permits);
```





关于Semaphore具体如何使用，我们来看以下示例代码。在以下示例代码中，我们使用Sempaphore重新实现了接口并发限制功能。其中，acquireUninterruptibly()用来获取许可，如果当前没有可用许可，那么，调用acquireUninterruptibly()函数的线程将阻塞等待，直到其他线程通过调用release()函数释放许可，此线程才会重新竞争获取许可。

```java
public class Demo {
  private final Semaphore semphore = new Semaphore(10);

  public void apiX() {
    semphore.acquireUninterruptibly();
    try {
      // 执行业务逻辑
    } finally {
      semphore.release();
    }
  }
}
```





## **三、共享资源并发访问限制**

从上述Semaphore的使用方法，我们可以发现，如果信号量中的许可个数为1，那么，同时只能有一个线程访问临界区，此时，信号量就退化成了互斥锁。如果信号量中的许可个数大于1，那么，信号量就可以看作是一种共享锁。



信号量跟锁的不同之处在于，释放锁的线程必须持有锁，而信号量则没有这样的要求，也就是说，没有调用acquire()函数的线程，也可以直接调用release()函数。在这种应用场景下，我们把acquire()简单理解为减少可用许可个数，release()简单理解为增加可用许可个数。此时，信号量不再是用来限制对临界区的并发访问，而是用来限制对共享资源的并发访问。



接下来，我们举个例子解释一下，如何使用信号量限制对共享资源的并发访问。上一节，我们使用条件变量实现了一个支持阻塞读的无限队列，本节，我们使用信号量实现一个支持阻塞写的有限队列。代码如下所示。对于如何使用信号量实现一个支持阻塞读和阻塞写的有限队列，我们留给你作为思考题。

```java
public class QueueSemaphore {
  private static final int Q_SIZE = 20;
  private Semaphore semaphore = new Semaphore(Q_SIZE);
  private List<String> list = new ArrayList<>(Q_SIZE);
  private int count = 0;

  public void put(String elem) {
    semaphore.acquireUninterruptibly();
    synchronized (this) {
      list.add(count, elem);
      count++;
    }
  }

  public String get() {
    if (count == 0) return null;
    synchronized (this) {
      if (count == 0) return null; //双重检测
      String ret = list.get(--count);
      semaphore.release(); 
      return ret;
    }
  }
}
```





对于上述代码，信号量表示队列中的空闲位置，其初始值为队列大小。当队列满之后，信号量中的可用许可个数变为0，线程执行put()函数时会阻塞在acquireUninterruptibly()函数中。当其他线程调用get()函数时，执行release()函数增加许可之后，阻塞的线程才得以继续执行。



## **四、信号量的实现原理**

跟ReentrantLock和ReadWriteReentrantLock相同，Semaphore也是基于AQS来实现。Semaphore的部分源码如下所示。其代码结构跟之前讲过的ReentrantLock的代码结构非常相似。

```java
public class Semaphore {
    private final Sync sync;

    abstract static class Sync extends AbstractQueuedSynchronizer {
        Sync(int permits) { setState(permits); } //state=permits
        protected final boolean tryReleaseShared(int releases) { ... }
    }

    static final class NonfairSync extends Sync {
        NonfairSync(int permits) { super(permits); }
        protected int tryAcquireShared(int acquires) { ... }
    }

    static final class FairSync extends Sync {
        FairSync(int permits) { super(permits); }
        protected int tryAcquireShared(int acquires) { ... }
    }
    
    public Semaphore(int permits) { //默认为非公平模式
        sync = new NonfairSync(permits);
    }

    public Semaphore(int permits, boolean fair) { //指定工作模式
        sync = fair ? new FairSync(permits) : new NonfairSync(permits);
    }
    
    //...暂时省略核心方法的实现...
}
```





从以上代码，我们可以发现，Semaphore既支持公平模式，也支持非公平模式。在创建Semaphore对象时，我们可以指定对象的工作模式（公平模式还是非公平模式），如果不指定，则默认为非公平模式。两种工作模式底层使用FairSync和NonfairSync两个不同的AQS来实现。AQS是基于模板方法模式实现的，并且，Semaphore可以看做是一种共享锁，因此，FairSync类和NofairSync类实现了AQS的tryAcquireShared()抽象方法，不过，实现逻辑并不相同。对于tryReleaseShared()抽象方法，因为在FairSync和NofairSync中的实现逻辑相同，因此，它被放置于FairSync和NofairSync的公共父类Sync中。



Semaphore的常用方法有很多，我们前面已经罗列过，不过，它们的代码实现都相差不大，因此，我们拿其中比较简单的acquireUninterruptibly()和release()来举例讲解。



**1）acquireUninterruptibly()函数**

acquireUninterruptibly()函数的源码如下所示。acquireUninterruptibly()直接调用AQS的acquireShared()函数，acquireShared()函数的定义也罗列在了下面，其代码实现也非常简单。

```java
//位于Semaphore.java中
public void acquireUninterruptibly() {
    sync.acquireShared(1);
}

//位于AbstractQueuedSynchronizer.java中
public final void acquireShared(int arg) {
    if (tryAcquireShared(arg) < 0) //竞争获取许可，返回值<0表示失败，需要排队等待许可
        doAcquireShared(arg); //排队等待许可
}
```





在acquireShared()函数的代码实现中，tryAcquireShared()函数为AQS的抽象函数，用来竞争获取许可，其代码实现位于NofairSync和FairSync中，具体如下所示。doAcquireShared()函数用来排队等待许可。在讲解ReentrantReadWriteLock的底层实现原理时，我们详细讲解过doAcquireShared()函数，这里就不再赘述了。

```java
//NofairSync中tryAcquireShared()函数的代码实现
protected int tryAcquireShared(int acquires) {
    for (;;) {
        int available = getState(); //许可个数存放在state变量中
        int remaining = available - acquires;
        if (remaining < 0 || compareAndSetState(available, remaining))
            return remaining;
    }
}

//FairSync中tryAcquireShared()函数的代码实现
protected int tryAcquireShared(int acquires) {
    for (;;) {
        if (hasQueuedPredecessors()) return -1; //比上面的代码多了这一行
        int available = getState();
        int remaining = available - acquires;
        if (remaining < 0 || compareAndSetState(available, remaining))
            return remaining;
    }
}
```





以上两个tryAcquireShared()函数的代码实现基本相同。许可个数存放在AQS的state变量中，两个函数都是通过自旋+CAS的方式来获取许可。两个函数唯一的区别在于，对于公平模式下的Semaphore，当线程调用tryAcquireShared()函数时，如果等待队列中有等待许可的线程，那么，线程将直接去排队等待许可，而不是像非公平模式下的Semaphore那样，线程可以插队直接竞争许可。



**2）release()函数**

release()函数的源码如下所示。release()直接调用AQS的releaseShared()函数，releaseShared()函数的定义也罗列在了下面，其代码实现也非常简单。

```java
public void release() {
    sync.releaseShared(1);
}

public final boolean releaseShared(int arg) {
    if (tryReleaseShared(arg)) {
        doReleaseShared();
        return true;
    }
    return false;
}
```





在releaseShared()函数的代码实现中，tryReleaseShared()函数为AQS的抽象函数，用来释放许可，其代码实现位于Sync中，具体如下所示，核心逻辑为：采用自旋+CAS来更新state。doReleaseShared()函数用来唤醒排队等待许可的其中一个线程（位于等待队列中的第一个线程）。在讲解ReentrantReadWriteLock的底层实现原理时，我们详细讲解过doReleaseShared()函数，这里就不再赘述了。

```java
protected final boolean tryReleaseShared(int releases) {
    for (;;) {
        int current = getState();
        int next = current + releases;
        if (next < current) // 超过了int整型的表示范围，基本不会发生
            throw new Error("Maximum permit count exceeded");
        if (compareAndSetState(current, next)) return true;
    }
}
```





## **五、思考题**

在上一节的思考题中，我们要求你使用条件变量实现一个支持阻塞读和阻塞写的有限队列，本节，我们希望你能使用信号量来实现一个支持阻塞读和阻塞写的有限队列。
