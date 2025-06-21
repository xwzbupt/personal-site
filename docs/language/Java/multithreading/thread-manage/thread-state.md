---
category: Java
tag: 
  多线程
---

# 线程状态

::: tip

**为何synchronized和Lock这两种锁对应的线程状态不同？**

在项目开发中，当代码运行出现问题时，比如死循环、死锁等，我们一般会通过jstack工具打印线程运行信息，以此来分析问题出现的原因。线程状态是其中非常重要的一项信息。透彻的理解线程状态，比如熟悉Thread.sleep()、Object.wait()、Lock.lock()等一些常用函数与线程状态的对应关系，才能完全看懂jstack打印的线程运行信息，以便快速找出问题的原因。因此，本节我们就来详细讲一讲线程状态。

在开始本节的内容前，我还是照例给你出一个思考题：线程在执行synchronized阻塞等待锁时，对应的线程状态为BLOCKED，而线程在执行Lock锁的lock()函数阻塞等待锁时，对应的线程状态为WAITING。同样是阻塞等待锁，为什么对应的线程状态却是不同的呢？

带着这个问题，我们来开始本节的学习。

:::

## **一、线程状态概述**

在线程模块的一开始，我们讲解了线程的一些基础知识，当时讲到，Java线程是基于1：1模型实现的，核心调度执行是基于操作系统线程实现的。操作系统线程在运行的过程中，不同情况对应不同的线程状态。不同的操作系统定义的线程状态有可能不同，我们拿Linux举例，其定义的线程状态有如下几个。



1）**NEW**：新创建的线程，在没有调用start()函数前，线程处于NEW状态。

2）**READY**：线程一切就绪，等待操作系统调度，也就是等待CPU时间片。

3）**RUNNING**：线程正在使用CPU时间片执行程序。

3）**WAITING**：线程在等待I/O读写完成、等待获取锁、等待时钟定时到期（调用sleep()函数）等等，总之，等待其他事件发生之后，线程才能被调度使用CPU，此时，线程的状态就是WAITING状态。也就是说，只要线程不占用CPU，并且不等待CPU（非READY），那么就处于WAITING状态。

4）**TERMINATED**：线程终止状态。线程终止之后，未必就立即销毁。有些操作系统为了节省线程创建的时间（毕竟要分配内存还得初始化一些变量），会复用处于TERMINATED状态的线程。



上述操作系统线程状态之间的转换关系，如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/54463100_1662087635.png)



尽管Java线程是基于操作系统线程实现的，但是，Java线程没有直接使用操作系统定义的线程状态，一方面是因为Java是跨平台的，不同操作系统定义的线程状态不同，无法统一，另一方面是因为应用层关注的线程状态，跟操作系统关注的线程状态是不同的，Java线程定义的状态更能清晰表示程序在应用层的执行情况。Java定义的线程状态如下所示。



1）**NEW**：Java线程中NEW状态的含义，跟操作系统线程中NEW状态的含义相同。

2）**RUNNABLE**：在应用层，我们是不需要关注程序是正在等待CPU时间片，还是正在使用CPU时间这些操作系统才需要关注的细节，我们只需要知道程序正在执行就可以了，因此，在Java的线程状态定义中，并没有READY和RUNNING的区分，两者统称为RUNNABLE。实际上，RUNNABLE除了包含READY和RUNNING之外，还包含操作系统线程状态中的部分WAITING状态。待会再专门解释这一点。

3）**WAITING**：这里的WAITING状态跟操作系统线程中的WAITING状态不同。只有执行一些跟线程有关的特殊函数时，线程才会进入WAITING状态。这些特殊函数就包含Object.wait()、Thread.join()、Unsafe.park()。

4）**TIMED_WAITING**：跟上面的WAITING状态类似，也是只有执行一些跟线程有关的特殊函数时，线程才会进入TIMED_WAITING状态。这些特殊函数就包括Object.wait(long timeout)、Thread.join(long timeout)、Unsafe.parkNanos(long timeout)、Thread.sleep(long timeout)，这些函数均带有超时时间。

5）**BLOCKED**：线程进入BLOCKED状态，只对应两种情况，一种情况是线程执行synchronized语句，阻塞等待获取锁，另一种情况是线程执行Object.wait()后被notify()或notifyAll()唤醒，再次阻塞等待获取锁。

6）**TERMINATED**：Java线程中TERMINATED状态的含义，跟操作系统线程中TERMINATED状态的含义相同。



上述Java线程状态之间的转换关系，如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/83027100_1662087635.png)



对于Java线程状态，我们做两点解释。



第一点解释是，前面提到，Java线程中的RUNNABLE状态包含操作系统线程中的READY状态、RUNNING状态、部分WAITING状态。当线程执行阻塞I/O函数（比如等待磁盘或网络I/O读写就绪）时，在操作系统层面，因为CPU没有在执行，所以，操作系统将对应的线程状态设置为WAITING，但在Java应用层面，因为其不关心底层硬件的使用情况（CPU有没有在执行），所以，Java将对应的线程状态设置为RUNNABLE。也就是说，Java线程状态定义和操作系统线程状态定义是不一致的，它们的对应关系如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/17078300_1662087636.png)



第二点解释是，线程执行synchronized时，对应的线程状态为BLOCKED，那么，线程执行JUC Lock的lock()函数时，对应的线程状态是什么呢？因为JUC Lock上的lock()函数底层调用LockSupport.park()进行阻塞，而LockSupport.park()底层又调用了Unsafe.park()，前面讲到，当线程执行Unsafe.park()时，对应的线程状态为WAITING，因此，线程执行JUC Lock上的lock()函数时，对应线程状态是WAITING。那么，为什么两种加锁方式对应的线程状态不同呢？



实际上，Java线程状态的修改是在JVM层面实现的，并且，没有提供专门的修改线程状态的函数给上层（JDK和JUC）使用，而是将线程状态的修改耦合在了一些JVM提供的特殊函数和语法中（比如Thread.sleep()、Object.wait()、synchronized）。JUC在实现Lock时，因为用到了JVM提供的Unsafe.park()，从而导致线程状态为WAITING。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/10516000_1662087637.png)



你可能会说，synchronized不也用到了park()函数吗？为什么它对应的线程状态就是BLOCKED，而非WAITING呢？实际上，到目前为止，我们讲到了3种不同的park()函数：synchronized使用的park()函数、Unsafe.park()、LockSupport.park()。这3个park()函数的功能相同，代码实现也大同小异，但是，基于分层的设计思路，它们的使用场景是不同的。synchronized使用的park()函数是JVM内部私有的函数，只供实现synchronized使用；Unsafe.park()是开放给Java开发者使用的函数；LockSupport.park()函数是JUC为了方便使用，对Unsafe.park()的简单二次封装。



JVM在实现synchronized时，将线程状态设置为BLOCKED，在实现Object.wait()时，将线程状态设置为WAITING。这些设置都非常合理、并没有争议。但是，当实现Unsafe.park()时，到底将线程状态设置为BLOCKED还是WAITING，就有争议，于是，JVM就任选了其中一个。这也就导致线程在执行JUC Lock的lock()函数时，对应的线程状态为WAITING。



你可能会说，如果当初JVM将Unsafe.park()对应的线程状态设置为BLOCKED，那么，synchronized和Lock两种不同加锁方式对应线程状态不同这个问题就不存在了。实际上，尽管这个问题不存在了，但也会有新的问题产生。我们知道，JUC中的Condition在实现时，也用到了Unsafe.park()，这就导致线程在执行Condition上的await()函数时，对应的线程状态变为了BLOCKED，于是，这就跟Object.wait()的线程状态又不一致了。



## **二、线程状态与函数对应关系**

jstack是JVM自带的一个线程信息打印工具，能够打印线程的快照信息，比如函数调用栈信息、线程状态等，从我们可以清晰地知道线程执行到哪里、处于什么状态、等待什么资源等。jstack常用用于定位线程长时间卡顿问题，比如死锁、死循环等。jstack的使用非常简单，先通过另一个命令jps，列出所有的Java进程ID，查找要打印线程信息的进程ID，然后使用jstack [进程ID]命令即可打印进程包含的所有线程的信息。接下来，我们结合示例代码并使用jstack，查看一下常用的一些函数对应的线程状态。



**1）示例代码一**

示例代码一展示synchronized、Thread.sleep(long time)、Thread.join()对应的线程状态。

```java
public class Demo51_1 {
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        synchronized (Demo51_1.class) {
          try {
            Thread.sleep(1000000); //1000s
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
        }
      }
    }undefined "t1");
    t1.start();

    Thread t2 = new Thread(new Runnable() {
      @Override
      public void run() {
        synchronized (Demo51_1.class) { }
      }
    }undefined "t2");
    t2.start();

    t1.join();
    t2.join();
  }
}
```





jstack的打印结果如下图。线程t1加锁成功之后，执行sleep()函数，对应的线程状态为TIMED_WAITING。线程t2执行synchronized，阻塞等待获取锁，对应的线程状态为BLOCKED。线程main执行join()等待t1、t2执行结束，对应的线程状态为WAITING。这里稍微提一句，因为join()函数是基于Object.wait()实现的，因此，main线程的函数调用栈的最顶层为Object.wait()函数。

![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/92926400_1662087637.jpeg)

**2）示例代码二**



示例代码二展示Object.wait()对应的线程状态。

```java
public class Demo51_2 {
  private static final Object obj = new Object();
  
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        synchronized (obj) {
          try {
            obj.wait();
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
        }
      }
    }undefined "t1");
    t1.start();
    t1.join();
  }
}
```





jstack的打印结果如下图。线程t1执行Object.wait()函数，对应的线程状态为WAITING。

![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/29732300_1662087638.jpeg)



前面讲到，当Object.wait()被notify()或notifyAll()唤醒后，会再次阻塞等待获取锁，此时线程处于BLOCKED状态，我们举个例子验证一下。

```java
public class Demo51_3 {
  private static final Object obj = new Object();
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        synchronized (obj) {
          try {
            obj.wait();
            Thread.sleep(100000);
          } catch (InterruptedException e) { e.printStackTrace(); }
        }
      }
    }undefined "t1");
    t1.start();

    Thread t2 = new Thread(new Runnable() {
      @Override
      public void run() {
        synchronized (obj) {
          try {
            obj.wait();
          } catch (InterruptedException e) { e.printStackTrace(); }
        }
      }
    }undefined "t2");
    t2.start();
    
    synchronized (obj) {
      obj.notifyAll();
    }
    t1.join();
    t2.join();
  }
}
```





jstack的打印结果如下图。线程main执行notifyAll()函数，唤醒线程t1和t2，两个线程同时竞争锁，t1获取到锁，执行sleep()，对应线程状态为TIMED_WAITING。线程t2等待线程t1释放锁，对应线程状态为BLOCKED。

![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/87139000_1662087638.jpeg)

**3）示例代码三**

示例代码三展示Lock.lock()对应的线程状态。

```java
public class Demo51_4 {
  private static final Lock lock = new ReentrantLock();
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        lock.lock();
        try {
          Thread.sleep(100000);
        } catch (InterruptedException e) {
          e.printStackTrace();
        } finally {
          lock.unlock();
        }
      }
    }undefined "t1");
    t1.start();

    Thread t2 = new Thread(new Runnable() {
      @Override
      public void run() {
        lock.lock();
        System.out.println("do nothing...");
        lock.unlock();
      }
    }undefined "t2");
    t2.start();

    t1.join();
    t2.join();
  }
}
```





jstack的打印结果如下图。线程t1获取到Lock锁之后，执行sleep()函数，因此，对应的线程状态是TIMED_WAITING。线程t2等待获取Lock锁，底层调用LockSupport.park()函数，而LockSupport.park()函数又调用Unsafe.park()函数，因此，对应的线程状态为WAITING。

![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/77402800_1662087639.jpeg)

**4）示例代码四**

示例代码四展示Condition.await()、Semahpore.aquire()对应的线程状态。

```java
public class Demo51_5 {
  private static final Lock lock = new ReentrantLock();
  private static final Semaphore sem = new Semaphore(2);
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        lock.lock();
        sem.acquireUninterruptibly(2);
        lock.newCondition().awaitUninterruptibly();
        lock.unlock();
      }
    }undefined "t1");
    t1.start();

    Thread t2 = new Thread(new Runnable() {
      @Override
      public void run() {
        sem.acquireUninterruptibly();
      }
    }undefined "t2");
    t2.start();

    t1.join();
    t2.join();
  }
}
```





jstack的打印结果如下图。线程t1阻塞在Condition.awaitUninterruptibly()函数上，线程t2阻塞在Semaphore.acquireInterruptibly()函数上，这两个函数都是基于LockSupport.park()实现阻塞功能，而LockSupport.park()函数又调用Unsafe.park()函数，因此，对应的线程状态都为WAITING。

![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/34343600_1662087640.jpeg)



## **三、线程状态与jstack的应用**

在平时的开发中，我们有时候会遇到CPU占用率100%、请求超时等问题。当出现以上这些问题时，我们可以通过jstack查看线程运行的详细信息来定义代码问题。

CPU占用率100%往往是因为持续执行CPU高度密集操作，比如进入死循环、垃圾回收等。因为在大部分业务系统中，业务的处理往往会涉及磁盘、网络等I/O操作，这些非CPU操作和CPU操作交替执行，很难将CPU占用率拉满。只有当程序长时间集中执行CPU操作时，CPU占用率才有可能被拉满。这时，我们就可以使用jstack，每隔几秒将所有的线程运行信息都打印出来，然后，综合相邻的这几次jstack结果，定位哪个线程都在执行长时间集中执行CPU密集操作。

请求超时往往是因为死锁、下游请求阻塞、下游请求超时长。我们重点关注其中的死锁。当我们通过jstack打印出进程的所有线程信息时，如果两个线程互相等待对方持有的锁，那么就说明出现了死锁。示例代码如下所示。

```java
public class Demo51_6 {
  private static final Object obj1 = new Object();
  private static final Object obj2 = new Object();
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        synchronized (obj1) {
          try {
            Thread.sleep(1000);
          } catch (InterruptedException e) { e.printStackTrace(); }
          synchronized (obj2) {
          }
        }
      }
    }undefined "t1");
    t1.start();

    Thread.sleep(500);
    synchronized (obj2) {
      synchronized (obj1) {
      }
    }
  }
}
```

jstack打印的结果如下所示。jstack非常人性化地帮我们查找并列出了死锁。

![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/86148200_1662087640.jpeg)

## **四、课后思考题**

我们可以在资源管理器中查看CPU的利用率动态曲线，请编写程序让CPU利用率动态曲线呈现sin函数曲线。