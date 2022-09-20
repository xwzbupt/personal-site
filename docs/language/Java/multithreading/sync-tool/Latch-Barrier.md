---
category: Java
tag: 
  - 多线程
  - 同步工具类
---

# **锁存器和栅栏**

::: tip

如何编程测试接口在不同并发下的性能？

在平时开发中，有时候，我们需要自己编写代码，测试某个接口在不同并发下的性能，比如测试在N个（N可以是100、200等任意数）接口请求并发执行时接口的响应时间、QPS等。为了模拟接口的并发请求，我们需要用到多线程。除此之外，线程之间的协调执行，还需要用到本节要讲的CountDownLatch和CyclicBarrier。接下来，我们就结合这个需求的开发，详细讲解一下CountDownLatch和CyclicBarrier的用法以及实现原理。

:::

## **一、CountDownLatch的用法**

CountDownLatch中文名称叫作锁存器，其提供的常用方法有以下几个。

```java
//构造函数，传入count值
public CountDownLatch(int count);

//阻塞等待count值变为0
public void await() throws InterruptedException;
public boolean await(long timeout, TimeUnit unit) throws InterruptedException;
  
//将count值减一  
public void countDown();
```





CountDownLatch的作用有点类似Thread类中的join()函数，用于一个线程等待其他多个线程的事件发生。对于join()函数来说，这里的事件指的是线程结束。对于CountDownLatch来说，这里的事件可以根据业务逻辑来定义。除此之外，使用join()需要知道被等待的线程是谁，而使用CountDownLatch则不需要。因此，CountDownLatch相对于join()函数来说，更加通用。



我们举个例子解释一下，代码如下所示。在DemoJoin中，主线程（执行main()函数的线程）调用join()函数阻塞等待线程t1和t2的结束。在DemoLatch中，CountDownLatch中的count值初始化为2，主线程调用await()函数阻塞等待count值变为0。另外两个线程在执行完部分逻辑之后，调用countDown()函数将count值减一。当两个线程均执行countDown()函数之后，count值变为0。阻塞在await()函数上的主线程被唤醒，继续执行后续逻辑。

```java
public class DemoJoin {
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new RunnableForJoin());
    Thread t2 = new Thread(new RunnableForJoin());
    t1.start();
    t2.start();
    t1.join(); //join()只用来等待线程执行结束，并且必须知道被等待线程是谁，
    t2.join();
  }

  public static class RunnableForJoin implements Runnable {
    @Override
    public void run() {
      //...do something...
    }
  }
}

public class DemoLatch {
  private static final CountDownLatch latch = new CountDownLatch(2);
  public static void main(String[] args) throws InterruptedException {
    new Thread(new RunnableForLatch()).start();
    new Thread(new RunnableForLatch()).start();
    latch.await(); //等待something执行完成而非等待线程结束，并且不需要知道在等谁
    //...执行后续逻辑...
  }

  public static class RunnableForLatch implements Runnable {
    @Override
    public void run() {
      //...do something...
      latch.countDown();
      //...do other thing...
    }
  }
}
```





## **二、CountDownLatch的实现原理**

CountDownLatch的用法非常简单，其实现原理也不难，底层依赖AQS来实现。CountDownLatch的部分源码如下所示。AQS模板方法的使用方法是比较固定的，因此，CountDownLatch的代码结构跟之前讲过的ReentrantLock、ReentrantReadWriteLock、Semaphore的代码结构是类似的。代码结构大致为：具体化抽象模板方法类AQS；在具体类Sync中实现AQS中的抽象方法；使用具体类Sync中的模板方法来编程。

```java
public class CountDownLatch {
    //具体化抽象模板方法类AQS
    private static final class Sync extends AbstractQueuedSynchronizer {
        Sync(int count) { setState(count); } // 将count值存储在AQS的state中

        protected int tryAcquireShared(int acquires) { //实现AQS的抽象方法
            return (getState() == 0) ? 1 : -1; //检查count是不是为0了
        }

        protected boolean tryReleaseShared(int releases) { //实现AQS的抽象方法
            for (;;) { //执行count--
                int c = getState();
                if (c == 0) return false;
                int nextc = c-1;
                if (compareAndSetState(c, nextc)) return nextc == 0;
            }
        }
    }

    private final Sync sync;
    public CountDownLatch(int count) {
        if (count < 0) throw new IllegalArgumentException("count < 0");
        this.sync = new Sync(count);
    }
    
    public void await() throws InterruptedException {
        sync.acquireSharedInterruptibly(1); //使用Sync的模板方法编程
    }

    public boolean await(long timeout, TimeUnit unit) 
        throws InterruptedException {
         //使用Sync的模板方法编程
        return sync.tryAcquireSharedNanos(1, unit.toNanos(timeout));
    }
    
    public void countDown() {
        sync.releaseShared(1); //使用Sync的模板方法编程
    }
}
```





我们重点看下await()和countDown()这两个函数的实现原理。



从上述代码，我们可以发现，await()函数直接调用AQS的acquireSharedInterruptibly()函数，acquireSharedInterruptibly()函数的源码如下所示。CountDownLatch的count值存储在AQS的state中，acquireSharedInterruptibly()函数调用tryAcquireShared()函数查看state是否为0。如果state为0，则直接返回，如果state不为0，则调用doAcquireSharedInterruptibly()函数阻塞等待state变为0。tryAcquireShared()函数在上述CountDownLatch的Sync内部类中已经给出。对于doAcquireSharedInterruptibly()函数，其跟我们之前在讲解ReentrantReadWriteLock实现原理时讲到的doAcquireShared()函数类似，读者可以自行查阅源码了解，这里就不再赘述了。

```java
public final void acquireSharedInterruptibly(int arg)
    throws InterruptedException {
    if (Thread.interrupted()) throw new InterruptedException();
    if (tryAcquireShared(arg) < 0) //查看state是否为0，否则就放入等待队列等待state为0
        doAcquireSharedInterruptibly(arg); //阻塞等待state为0
}
```





我们再来看下CountDownLatch中的countDown()函数，countDown()函数直接调用AQS的releaseShared()函数来实现。releaseShared()函数的源码如下所示。releaseShared()函数调用tryReleaseShared()函数将state减一，如果此时state变为0，则执行doReleaseShared()函数唤醒等待队列中的线程，也就是唤醒调用了await()函数的线程。tryReleaseShared()函数在上述CountDownLatch的Sync内部类中已经给出。对于doReleaseShared()函数，其在我们讲解ReentrantReadWriteLock实现原理时已经详细讲解，这里就不再赘述了。

```java
public final boolean releaseShared(int arg) {
    if (tryReleaseShared(arg)) {//state--，如果state变为0，则执行doReleaseShared()
        doReleaseShared(); //唤醒等待队列中的线程
        return true;
    }
    return false;
}
```





## **三、CyclicBarrier的用法**

接下来，我们再来看下CyclicBarrier。CyclicBarrier包含的常用方法有如下所示。

```java
//构造函数，传入parties
public CyclicBarrier(int parties);

//调用await()函数的线程会将parties减一，如果不为0，则阻塞，直到为0为止
public int await() throws InterruptedException, BrokenBarrierException;
public int await(long timeout, TimeUnit unit)
    throws InterruptedException, BrokenBarrierException, TimeoutException;
```





CyclicBarrier的中文名为栅栏，非常形象地解释了CyclicBarrier的作用，用于多个线程互相等待，互相等待的线程都就位之后，再同时开始执行。我们举个例子解释一下，如下代码所示。我们创建了一个parties为10的CyclicBarrier对象，用于10个线程之间互相等待。尽管这10个线程启动（执行start()函数）的时间不同，但每个线程启动之后，都会调用await()函数，将parties减一，然后检查parties是否为0。如果parties不为0，则当前线程阻塞等待。如果parties为0，则当前线程唤醒所有调用了await()函数的线程。

```java
public class Demo {
  private static final CyclicBarrier barrier = new CyclicBarrier(10);
  public static void main(String[] args) {
    for (int i = 0; i < 10; ++i) {
      new Thread(new Runnable() {
        @Override
        public void run() {
          try {
            barrier.await();
          } catch (InterruptedException e) { //当前线程被中断
            e.printStackTrace();
          } catch (BrokenBarrierException e) { //其他线程调用await()期间被中断
            e.printStackTrace();
          }
          //执行业务逻辑
        }
      }).start();
    }
    //主线程需要等待以上10个线程执行结束，方法有以下3种：
    //1) Sleep()  2) join()  3) CountDownLatch
  }
}
```





对于CountDownLatch和CyclicBarrier，前者是用于一个线程阻塞等待其他线程，后者是用于多个线程互相等待。实际上，使用CountDownLatch，我们也可以实现CyclicBarrier所能实现的功能。如下代码所示。我们创建一个count值为1的CountDownLatch对象，10个线程均调用await()函数阻塞等待count为0。主线程调用countDown()函数将count值减一，变为0，然后唤醒调用了await()函数的这10个线程，以此达到让这10个线程同步执行的目的。

```java
public class Demo {
  private static final CountDownLatch latch = new CountDownLatch(1);
  public static void main(String[] args) {
    for (int i = 0; i < 10; ++i) {
      new Thread(new Runnable() {
        @Override
        public void run() {
          try {
            latch.await();
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
          //执行业务逻辑
        }
      }).start();
    }
    latch.countDown();
    //主线程需要等待以上10个线程执行结束，方法有以下3种：
    //1) Sleep()  2) join()  3) CountDownLatch
  }
}
```





## **四、CyclicBarrier的实现原理**

CyclicBarrier的使用方法比较简单，接下来，我们来看下它的实现原理。跟CountDownLatch不同，CyclicBarrier并未使用AQS来实现，而是使用之前讲到条件变量来实现的。CyclicBarrier类的源码如下所示。为了更清晰地展示其核心实现原理，我对CyclicBarrier中的源码做了简化。调用await()函数先将parties减一，然后检查parties是否为0，如果不为0，则调用Condition上的await()函数让当前线程阻塞等待，如果为0，则调用Condition上的signalAll()函数唤醒所有调用了await()函数的线程。

```java
public class CyclicBarrier {
    private final ReentrantLock lock = new ReentrantLock();
    private final Condition trip = lock.newCondition();
    private final int parties;
    
    public CyclicBarrier(int parties) {
        this.parties = parties;
    }
    
    //函数返回值线程调用await()函数之后的parties剩余值
    //注意：以下代码逻辑省略掉了对InterruptedException和BrokenBarrierException的处理
    public int await() throws InterruptedException, BrokenBarrierException {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            int index = --parties;
            if (index == 0) {  //最后一个调用await()的线程，唤醒其他线程
                trip.signalAll();
                return 0;
            }
            trip.await();
            return index;
        } finally {
            lock.unlock();
        }
    }
}
```





## **五、在接口性能测试中的应用**

对CountDownLatch和CyclicBarrier的用法和实现原理有了了解之后，接下来，我们使用CountDownLatch和CyclicBarrier来编写开头的接口并发性能测试代码。具体代码如下所示。如果要测试N个接口请求并发执行时接口的性能，我们需要创建N个测试线程，让每个测试线程循环执行接口请求，并且记录每个接口请求的响应时间。主线程通过CountDownLatch来等待其他测试线程执行完成，然后，再通过记录的运行数据统计接口的性能，比如平均响应时间、QPS等。除此之外，在以下代码实现中，我们还使用了CyclicBarrier，让各测试线程更加精确地同时开始执行，以便更加准确地测试指定并发下的接口性能。

```java
public class ApiBenchmark {
  private static int numThread = 20; //并发度为20
  private static int numReqPerThread = 1000; //每个线程请求1000次接口
  
  private static CountDownLatch latch = new CountDownLatch(numThread);
  private static CyclicBarrier barrier = new CyclicBarrier(numThread);
  
  public static void main(String[] args) throws InterruptedException {
    // 创建线程
    Thread[] threads = new Thread[numThread];
    TestRunnable[] runnables =new TestRunnable[numThread];
    for (int i = 0; i < numThread; ++i) {
      runnables[i] = new TestRunnable();
      threads[i] = new Thread(runnables[i]);
    }
    // 启动线程
    long startTime = System.nanoTime();
    for (int i = 0; i < numThread; ++i) {
      threads[i].start();
    }
    // 等待测试线程结束
    latch.await();
    long endTime = System.nanoTime();

    // 统计接口性能
    long qps = (numThread*numReqPerThread*1000)/((endTime-startTime)/1000000);
    float avgRespTime = 0.0f;
    for (int i = 0; i < numThread; ++i) {
      for (Long respTime : runnables[i].respTimes) {
        avgRespTime += respTime;
      }
    }
    avgRespTime /= (numThread*numReqPerThread);
  }

  public static class TestRunnable implements Runnable {
    public List<Long> respTimes = new ArrayList<>();
    @Override
    public void run() {
      try {
        barrier.await();
      } catch (InterruptedException e) {
        e.printStackTrace();
      } catch (BrokenBarrierException e) {
        e.printStackTrace();
      }
      for (int i = 0; i < numReqPerThread; ++i) {
        long reqStartTime = System.nanoTime();
        // ...调用接口
        long reqEndTime = System.nanoTime();
        respTimes.add(reqEndTime-reqStartTime);
      }
      latch.countDown();
    }
  }
}
```





## **六、思考题**

在本节中，我们讲到，CountDownLatch底层使用AQS来实现，CyclicBarrier底层使用条件变量来实现，那么，本节中提到的join()函数是怎么实现的呢？
