---
category: Java
tag: 
  多线程
---

# 线程中断

::: tip

**如何安全地提前终止正在执行业务逻辑的线程？**

大部分情况下，线程在执行完业务逻辑之后便自行结束，但是，少数情况下，由于应用程序关闭等原因，线程在执行业务逻辑的过程中有可能提前被终止。我们需要寻找一些安全的线程终止方式，避免突然中止业务逻辑而导致的数据不一致、资源得不到回收等问题。本节，我们就详细讲一讲，如何安全地提前终止线程，并且重点讲解其中的中断方法。

:::

## **一、基于标志终止线程**

基于标志终止线程是一种比较常用的终止线程的方法，如下示例所示，线程t1是一个长时间执行的程序，在执行的过程中会检查stopped是否为true。如果想终止线程t1，我们只需要在另一个线程中，比如在下述代码中的线程main中，将stopped设置为true即可。

```java
public class Demo52_1 {
  private static volatile boolean stopped = false;
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        int count = 0;
        while (!stopped) {
          System.out.println(count++);
        }
      }
    });
    t1.start();
    Thread.sleep(1000);
    stopped = true;
  }
}
```





## **二、基于中断终止线程**

除了基于标志来终止线程，我们还可以基于中断来终止线程。基于标志来终止线程，我们需要自己定义标志变量，而基于中断来终止线程，我们直接使用线程提供的内部中断标志位，无须自己定义。线程提供了如下3个函数来操作中断标志位。

```java
//位于Thread.java中
public void interrupt(); //设置中断标志位
public boolean isInterrupted(); //检查中断标志位是否设置
public static boolean interrupted(); //检查并清除中断标志位
```





使用基于中断终止线程的方式，我们对上述示例重新实现，如下代码所示。实际上，两种终止线程的方式在本质上是一样的，都是基于标志位，只不过标志位定义的位置不同，一个在业务代码中，一个在Thread线程中。

```java
public class Demo52_2 {
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        int count = 0;
        while (!Thread.currentThread().isInterrupted()) {
          System.out.println(count++);
        }
      }
    });
    t1.start();
    Thread.sleep(1000);
    t1.interrupt();
  }
}
```





从上述示例代码，我们还可以发现，线程main调用interrupt()函数，只不过是设置了线程t1的中断标志位，相当于只是发起了中断请求，并非真正将线程t1中断。线程t1既可以像上述示例代码那样响应中断，也可以像如下示例代码那样无视中断。具体如何处理中断要看具体的业务需求。也就是说，Java提供的中断是一种协作机制。发起中断的线程和被中断的线程需要互相协作，才能达到终止线程的目的。这种非强制的中断机制，可以让被中断的线程有时间进行终止前的善后工作，以此来避免数据不一致或资源无法回收等问题的发生。

```java
public class Demo52_3 {
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        int count = 0;
        while (true) { //无视中断
          System.out.println(count++);
        }
      }
    });
    t1.start();
    Thread.sleep(1000);
    t1.interrupt(); //发起中断请求
  }
}
```





## **三、基于中断异常终止线程**

我们知道，阻塞函数会阻塞或者长时间运行，比如Thread.sleep()。如果在线程执行的代码中包含对阻塞函数的调用，那么，当我们通过interrupt()向这个线程发起中断请求时，如果线程正在执行阻塞函数，那么线程将无法响应中断请求，也就无法及时终止线程。对于这个问题，该如何解决呢？



实际上，大部分阻塞函数在设计实现时都已经考虑到了这个问题。当这些阻塞函数接受到中断请求之后，会停止执行并抛出InterruptedException中断异常，我们可以基于中断异常来终止线程，示例代码如下所示。需要注意的是，大部分阻塞函数在抛出InterruptedException之前，会调用interrupted()函数清除中断标志位，因此，在如下代码中，当代码catch到InterruptedException之后，需要重新使用interrupt()设置线程的中断标志位。当然，对于以下代码逻辑，我们也可以在catch到InterruptedException之后，直接调用return语句来终止线程。

```java
public class Demo52_4 {
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        int count = 0;
        while (!Thread.currentThread().isInterrupted()) {
          System.out.println(count++);
          try {
            Thread.sleep(10000); //10s
          } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
          }
        }
      }
    });
    t1.start();
    Thread.sleep(2000);
    t1.interrupt();
  }
}
```





实际上，除了Thread.sleep()之外，前面讲到的Lock、Condition、Semaphore等也提供了很多支持中断的阻塞函数，当然，它们也同时提供了对应的不支持中断的阻塞函数，如下所示。

```java
//Lock接口
void lock(); //不可中断
void lockInterruptibly() throws InterruptedException; //可中断

//Condition类
void await() throws InterruptedException; //可中断
void awaitUninterruptibly(); //不可中断

//Semaphore类
public void acquire() throws InterruptedException; //可中断
public void acquireUninterruptibly(); //不可中断
```





可中断的阻塞函数在接收到中断请求之后，会终止执行并抛出InterruptedException异常，不可中断的阻塞函数在接收到中断请求之后，不做任何处理。我们拿Lock接口的两个函数举例，结合源码剖析可中断阻塞函数和不可中断阻塞函数的底层实现原理。



**1）不可中断阻塞函数lock()的实现原理**

lock()函数直接调用AQS中的acquire()函数，acquire()函数的代码实现如下所示。acquire()函数调用tryAcquire()函数尝试竞争获取锁，如果获取失败，则执行acquireQueued()函数排队等待。acquireQueued()函数返回true表示在函数执行过程中收到了中断请求，但为了避免中断干扰，在函数内部已经清除了中断标志位的设置，因此，在acquireQueued()函数执行结束之后，acquire()函数调用selfInterrupt()函数重新设置中断标志位。

```java
//AbstractQueueSynchronizer
public final void acquire(int arg) {
    if (!tryAcquire(arg) && acquireQueued(addWaiter(Node.EXCLUSIVE), arg))
        selfInterrupt();
}

static void selfInterrupt() {
    Thread.currentThread().interrupt();
}
```





acquireQueued()函数的代码实现如下所示。对于acquireQueued()函数的代码实现逻辑，我们已经在讲解AQS时详细讲解过了。我们重点看下其中的中断处理逻辑。在acquireQueued()函数中，parkAndCheckInterrupt()函数为阻塞函数，底层调用LockSupport.park()，进而再调用Unsafe.park()。导致parkAndCheckInterrupt()函数返回的情况有两种：被其他线程唤醒（调用AQS中的release()函数）和被其他线程中断（调用interrupt()函数）。如果parkAndCheckInterrupt()函数是被中断返回，那么，acquireQueued()函数会for循环再次执行parkAndCheckInterrupt()函数。也就是说，中断请求并不会终止acquireQueued()函数的执行。

```java
//位于AQS类
//返回值为true表示在函数处理期间，线程被中断过。
final boolean acquireQueued(final Node node, int arg) {
    boolean failed = true;
    try {
        boolean interrupted = false;
        for (;;) {
            final Node p = node.predecessor();
            if (p == head && tryAcquire(arg)) {
                setHead(node);
                p.next = null; // help GC
                failed = false;
                return interrupted;
            }
            if (parkAndCheckInterrupt())
                interrupted = true;
        }
    } finally {
        if (failed) cancelAcquire(node);
    }
}

private final boolean parkAndCheckInterrupt() {
    LockSupport.park(this);
    return Thread.interrupted(); //检查并清除中断设置
}

//位于LockSupport类
public static void park(Object blocker) {
    Thread t = Thread.currentThread();
    setBlocker(t, blocker);
    UNSAFE.park(false, 0L);
    setBlocker(t, null);
}
```





这里我们稍微解释一下上述代码中的Unsafe.park()函数，前面我们提到，在Linux操作系统下，Unsafe.park()底层是采用pthread库的pthread_cond_wait()条件变量来实现，其中并不包含中断标志位的检测逻辑。那么，当另一个线程调用interrupt()设置中断标志位之后，Unsafe.park()是如何退出阻塞等待的呢？实际上，答案很简单，那就是：interrupt()的底层实现不仅仅会设置中断标志位，还会执行类似Unsafe.unpark()函数一样的逻辑。



**2）可中断阻塞函数lockInterruptibly()的实现原理**

lockInterrupteibly()直接调用AQS中的acquireInterruptibly()函数，acquireInterruptibly()函数的代码实现如下所示。acquireInterruptibly()接收到中断请求之后，会终止函数的执行并抛出InterruptedException。

```java
public final void acquireInterruptibly(int arg) throws InterruptedException {
    if (Thread.interrupted()) throw new InterruptedException();
    if (!tryAcquire(arg)) doAcquireInterruptibly(arg);
}
```





我们重点看下doAcquireInterruptibly()函数，其代码实现如下所示。doAcquireInterruptibly()函数的核心处理逻辑跟前面讲到的acquireQueued()函数的基本一致，区别主要在于对中断的响应方式。在doAcquireInterruptibly()函数中，当parkAndCheckInterrupt()函数因为中断而返回时，直接抛出InterruptedException。

```java
private void doAcquireInterruptibly(int arg) throws InterruptedException {
    final Node node = addWaiter(Node.EXCLUSIVE);
    boolean failed = true;
    try {
        for (;;) {
            final Node p = node.predecessor();
            if (p == head && tryAcquire(arg)) {
                setHead(node);
                p.next = null; // help GC
                failed = false;
                return;
            }
            if (parkAndCheckInterrupt())
                throw new InterruptedException();
        }
    } finally {
        if (failed) cancelAcquire(node);
    }
}
```





## **四、Java中断 VS 操作系统中断**

我们知道，操作系统中也会有中断，那么，本节所讲的Java中断和操作系统中断有什么区别和联系呢？实际上，Java中断和操作系统中断是两回事，只不过，从功能上来讲，它们都是用来打断某个正在执行的任务而已。从上述对Java中断的讲解，我们可以发现，Java中断的实现完全由Java语言独立实现，并不依赖操作系统中断。



Java中断用来中断线程，操作系统中断是用来中断CPU。CPU在执行指令的过程中，每当一个CPU周期执行完成之后，就会去中断寄存器中检查是否有中断请求，如果有中断请求，则根据中断请求编号，在事先设置好的中断向量表中，查找对应的中断处理程序入口地址，然后，跳转去执行对应的中断处理程序。一般来讲，常用的操作系统中断有：I/O中断（响应鼠标、键盘、磁盘等I/O设备的输入）、时钟中断、异常、系统调用中断等等。有关操作系统中断更详细的讲解，你可以查阅操作系统相关的书籍。



## **五、课后思考题**

细心的你应该已经发现，在本节中给出的Lock接口的两个函数的命名方式，跟Condition、Semaphore类中的函数的命名方式不同。在Lock接口中，命名比较短的函数表示不可中断函数，而在Condition、Semaphore类中，命名比较短的函数表示可中断函数。那么，命名方式不一致是故意为之还是随意为之呢？