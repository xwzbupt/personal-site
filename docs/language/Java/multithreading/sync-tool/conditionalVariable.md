---
category: Java
tag: 
  - 多线程
  - 同步工具类
---

# 条件变量

::: tip

**为什么使用条件变量之前要先加锁？**

互斥和同步是多线程要解决的两个核心问题，互斥依靠互斥锁来解决，其中包含synchronized、Lock、CAS、原子类、累加器等。同步依靠同步工具来解决，其中包括条件变量、信号量、CountDownLatch、CyclicBarrier等。在前面几节，我们已经对互斥锁做了详细讲解，在接下来的几节，我们详细讲解同步工具。

:::

本节我们讲解同步工具中的条件变量。实际上，在讲解synchronized和Lock的实现原理时，用于阻塞线程和唤醒阻塞线程的park()和unpark()方法，就是基于条件变量来实现的。只不过，它们使用的是Linux下C语言线程开发库pthread的条件变量。

```java
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
boolean ready = false;
void park() {
  ...
  pthread_mutex_lock(&mutex);
  while (!ready) {
      pthread_cond_wait(&cond, &mutex);
  }
  ready = false;
  pthread_mutex_unlock(&mutex);
  ...
}

void unpark() {
  ...
  pthread_mutex_lock(&mutex);
  ready = true;
  pthread_cond_signal(&cond);
  pthread_mutex_unlock(&mutex);
  ...
}
```



实际上，不管是用法还是实现原理，Java语言的条件变量跟以上C语言的条件变量都十分相似。条件变量在使用时，有个非常特殊的情况，细心的读者应该已经发现了，那就是需要先加锁再使用，那么，这样做的原因是什么呢？带着这个问题，我们开始本节的学习。



## **一、条件变量的由来**

假设我们希望实现一个无限队列（大小没有限制），多个线程可以同时往队列中添加数据和取数据。为了保证两个操作的线程安全性，我们对两个操作进行了加锁。具体如下所示。

```java
public class Queue {
  private List<String> list = new ArrayList<>();
  private int count = 0;

  public void put(String elem) {
    synchronized (this) {
      list.add(count, elem);
      count++;
    }
  }

  public String get() {
    synchronized (this) {
      if (count > 0) {
        count--;
        return list.get(count);
      }
      return null;
    }
  }
}
```





从get()函数的代码实现，我们可以看出，如果队列为空，那么get()函数直接返回null。如果我们希望实现一个阻塞队列，即当队列为空时，get()函数会阻塞，直到队列中有数据时再返回。针对这个需求，又该如何实现呢？



我们可以对get()函数做如下改造，使用自旋来等待队列不为空。需要注意的是，当自旋检测到队列不为空之后，为了保证后续操作线程安全，我们需要对其进行加锁，在加锁之后，我们需要再次检查队列是否仍然不为空。这有点类似线程安全单例类中的双重检测。这样做的原因是，多个线程有可能同时执行get()函数，并且同时检测到队列不为空，于是，它们依次获取锁然后从队列中取数据，如果不在获取锁之后重新检测队列是否为空，那么就有可能导致数组访问越界。当然，我们也无法将自旋逻辑放如synchronized代码块中，如果这样做的话，那么就会导致put()函数因为获取不到锁而无法执行，这就出现了死锁。

```java
public String get() {
  for(;;) {
    while(count <= 0) { //自旋等待队列不为空
    }
    
    synchronized (this) { //队列不为空时才加锁
      if (count > 0) { // 双重检查
        count--;
        return list.get(count);
      } // else 重新自旋等待队列不为空
    }
}
```





前面讲到，自旋并不会让线程进入阻塞状态。如果队列一直为空，那么线程将一直执行while循环，白白浪费CPU资源，甚至会让CPU使用率达到100%。为了减少对CPU资源的浪费，我们可以在while循环中调用sleep()函数，让线程睡眠一小段时间。如果在get()函数执行sleep()函数的过程中队列变为非空，那么，get()函数需要等待sleep()函数执行结束之后，才能返回数据。这就会导致程序响应不及时，性能下降。



那么，有没有什么方法既可以解决自旋浪费CPU资源问题，又能解决睡眠导致的响应不及时问题呢？答案是有的，那就是使用本节要讲的条件变量。条件变量是多线程中用来实现等待通知机制的常用方法。



粗略地讲，锁可以分为两种，一种是Java提供的synchronized内置锁，另一种是JUC提供的Lock锁。同理，条件变量也有两种，一种是Java提供的内置条件变量，使用Object类上的wait()、notify()等来实现，一种是JUC提供的条件变量，使用Condition接口上的await()、signal()等来实现。两种条件变量的使用方式和实现原理基本一致，但是也有细微的差别，接下来，我们就详细讲解一下这两种条件变量。



## **二、内置条件变量使用方式**

Java Object类上用来实现条件变量的方法有以下几个。其中，等待函数有3个，通知函数有2个。前两个等待函数调用第3个等待函数来实现，因此，前两个等待函数并非native方法。对这几个函数的简单介绍，我们标记在了代码注释中。

```java
public class Object {
    //线程调用此函数之后，便进入WAITING状态。有两种情况可以导致函数返回。
    //1）其他线程调用notify()或notifyAll()唤醒此线程;
    //2）线程被中断，此时，wait()函数会抛出InterruptedException。 
    public final void wait() throws InterruptedException { ... }

    //线程调用此函数之后，便进入WAITING状态。有3种情况可以导致函数返回。
    //1）其他线程调用notify()或notifyAll()唤醒此线程;
    //2）线程被中断，此时，wait()函数会抛出InterruptedException;
    //3）等待时间超过了预设的超时时间：timeout毫秒+nanos纳秒
    public final void wait(long timeout, int nanos)
        throws InterruptedException { ...}

    //跟上一个函数的唯一区别在于超时时间。此函数的超时时间只能精确到毫秒，不能精确到纳秒
    public final native void wait(long timeout) throws InterruptedException;

    //唤醒一个调用了同一个对象上的wait()函数的线程
    public final native void notify();

    //唤醒所有调用了同一个对象上的wait()函数的线程
    public final native void notifyAll();
}
```





接下来，我们看下如何使用内置条件变量来实现等待通知机制。我们拿前面的Queue来举例讲解。我们使用内置条件变量对Queue进行重构，重构之后的代码如下所示。

```java
public class QueueCond {
  private List<String> list = new ArrayList<>();
  private int count = 0;

  public void put(String elem) {
    synchronized (this) { // 1）加锁
      list.add(count, elem);
      count++; // 2）更新状态变量
      this.notify(); // 3）通知
    } // 4）解锁
  }

  public String get() {
      synchronized (this) { // 1）加锁
        while (count <= 0) { // 2）检查状态变量是否满足条件
          try {
            this.wait(); // 3）等待并释放锁；4）被唤醒之后重新竞争获取锁
          } catch (InterruptedException e) {
            return null;
          }
        }
        // 以下为业务逻辑
        count--;
        return list.get(count);
      } // 5）解锁
  }
}
```





结合以上示例代码，我们总结了条件变量的通用使用模式，如下图所示。需要注意的是，我们需要合理的安排线程的执行顺序，避免notify()先于wait()执行。否则，将导致调用了wait()函数的线程一直无法被唤醒。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/8242800_1660195521.png)





在以上条件变量的使用方式中，有两个非常容易出错的细节需要注意。具体如下所示。



**1）执行wait()或notify()前先加锁**

尽管我们可以单独使用wait()和notify()，但是，绝大部分情况下，wait()和notify()都会配合状态变量来使用。上述示例代码中的count便是状态变量。在get()函数中，状态变量的检查和业务代码的执行构成了一组复合操作，如果不对其进行加锁，那么就会存在线程安全问题：两个线程同时检测到状态变量满足条件，同时执行业务逻辑。在上述示例中，这就有可能导致数组访问越界。



除此之外，当状态变量不满足条件时，线程执行wait()函数，会进入等待队列等待被唤醒，此时需要释放持有的锁，否则，其他线程将无法获取锁，也就无法更新状态变量。当处于等待队列中的线程被唤醒后，必须再次竞争获取锁之后，才能重新检查状态是否满足条件。



**2）使用while循环避免假唤醒**

上述代码中的while语句，是否可以替换为if语句呢？答案是否定的。使用while循环是为了避免线程被假唤醒。我们列举了两种常见的线程假唤醒的情况。如下所示。



一种情况是，多个线程同时调用wait()等待状态变量满足条件，当另外一个线程调用notifyAll()函数之后，所有的等待线程均会被唤醒，依次竞争到锁之后，会重新检查状态变量是否真正满足条件。在这种情况下，只有一个线程真正检测到状态变量满足条件，成功往下执行业务逻辑。其他线程均检测到状态变量不满足条件，相当于被假唤醒，它们需要重新调用wait()函数等待再次等待状态变量满足条件。



另一种情况是，两个线程等待不同的状态变量（A和B）满足条件，但是，两个线程被放在同一个等待队列中（也就是调用了同一个对象上的wait()函数）。如果某个线程对状态变量A进行了更新，并调用notifyAll()唤醒等待队列中的所有线程，那么，等待状态变量B的线程会检测到状态变量B并没有满足条件，相当于被假唤醒，它们需要重新调用wait()函数等待状态变量B满足条件。当然，对于这种情况，我们也可以将等待不同状态变量的线程放入不同的等待队列（调用不同对象上的wait()函数）。



## **三、内置条件变量实现原理**

对内置条件变量的使用有所了解之后，我们再来简单看下，内置条件变量的实现原理。



在讲解synchronized内置锁的实现原理时，我们提到，在ObjectMonitor类中有三个等待队列：_cxq、_EntryList、_WaitSet，如下代码所示，其中，_cxq和_EntryList用来存储等待锁的线程，而_WaitSet便是用来存储调用了wait()函数的线程。

```java
class ObjectMonitor {
  void * volatile _object; //该Monitor锁所属的对象
  void * volatile _owner; //获取到该Monitor锁的线程
  ObjectWaiter * volatile _cxq; //没有获取到锁的线程暂时加入_cxq
  ObjectWaiter * volatile _EntryList; //存储等待被唤醒的线程
  ObjectWaiter * volatile _WaitSet; //存储调用了wait()的线程
}
```





当某个线程调用wait()函数时，线程会先将自己放入_WaitSet中，然后释放持有的锁，并调用park()方法阻塞自己。当某个线程调用notify()函数时，如果_EntryList或_cxq不为空，那么它从_WaitSet中取出一个线程放入_EntryList，让其排队等待锁；如果_EntryList和_cxq均为空，那么它从_WaitSet中取出一个线程，直接调用upark()方法取消这个线程的阻塞状态，让其去竞争锁。当调用了wait()函数的线程再次获取到锁时，便会从wait()函数中返回，执行后续业务逻辑。notifyAll()函数跟notify()函数的区别在于，notifyAll()会将_WaitSet中的所有线程都取出，然后放入_EntryList中等待锁。所有调用了wait()函数的线程会依次获取到锁，然后执行后续业务逻辑。



JUC条件变量和内置条件变量的实现原理基本一致，因此，我们只对内置条件变量的实现原理做简单介绍。详细的条件变量的实现原理，留在JUC条件变量中讲解。



## **四、JUC条件变量使用方式**

JUC条件变量使用Condition接口来实现。Condition接口的定义如下所示。其中，等待函数有5个，通知函数有2个。对这几个函数的简单介绍，我们标记在了代码注释中。

```java
public interface Condition {
    //作用跟Object类中的wait()相同
    void await() throws InterruptedException;
    //此函数在执行的过程中，不可被中断
    void awaitUninterruptibly();
    //等待超过nanosTimeout纳秒时函数返回，返回值为等待的时间
    long awaitNanos(long nanosTimeout) throws InterruptedException;
    //跟上一个函数类似，只不过，此函数可以设置时间单位unit
    boolean await(long time, TimeUnit unit) throws InterruptedException;
    //等待到某个时间点deadline时函数返回，返回值false表示超时返回，
    //返回值为true表示中断或被唤醒
    boolean awaitUntil(Date deadline) throws InterruptedException;
    
    //以下两个函数的作用跟notify()和notifyAll()相同
    void signal();
    void signalAll();
}
```





如何使用JUC提供的条件变量来实现等待通知机制呢？我们还是拿前面的Queue来举例讲解。我们使用JUC条件变量对Queue进行重构，重构之后的代码如下所示。JUC条件变量的使用方法跟内置条件变量的使用方法非常类似。因此，我们就不对以下代码做详细解释了。

```java
public class QueueCondJUC {
  private List<String> list = new ArrayList<>();
  private int count = 0;
  
  private Lock lock = new ReentrantLock();
  private Condition condition = lock.newCondition();

  public void put(String elem) {
    lock.lock(); // 1）加锁
    try {
      list.add(count, elem);
      count++; // 2）更新状态变量
      condition.signal(); // 3）通知
    } finally {
      lock.unlock(); // 4) 解锁
    }
  }

  public String get() {
    lock.lock(); // 1）加锁
    try {
      while (count <= 0) { // 2）检查状态变量是否满足条件
        try {
          condition.await(); // 3）等待并释放锁；4）被唤醒之后重新竞争获取锁
        } catch (InterruptedException e) {
          return null;
        }
      }
      // 以下为业务逻辑
      count--;
      return list.get(count);
    } finally {
      lock.unlock(); // 5）解锁
    }
  }
}
```





## **五、JUC条件变量实现原理**

对于内置条件变量的实现原理，我们只是做了简单介绍。对于JUC条件变量，我们结合源码详细介绍一下。从上述示例代码，我们可以发现，Lock通过newCondition()函数来创建Condition对象。newCondition()的代码如下所示。其中，ConditionObject类是AQS的内部类，其部分源码如下所示。

```java
// 位于ReentrantLock.java中
public Condition newCondition() {
    return new ConditionObject();
}

// 位于AbstractQueuedSynchronizer.java中
public class ConditionObject implements Condition {
    private transient Node firstWaiter;
    private transient Node lastWaiter;
    public ConditionObject() { }
    // 实现了Condition接口中的所有方法
}
```





我们知道，ReentrantLock对象中包含一个等待队列，用来存储等待锁的线程。ConditionObject对象中也包含一个等待队列，用来存储调用了await()函数的线程。为了方便区分和表达，我们称前者为Lock等待队列，我们称后者为Condition等待队列。Lock等待队列由双向链表来实现，节点定义如下所示，其中，prev和next分别为双向链表的节点的前驱指针和后继指针。Condition等待队列由单向链表来实现，节点定义复用Lock等待队列中的节点定义，只不过，Condition等待队列使用Node类中的nextWaiter属性作为节点的后继指针。

```java
static final class Node {    
    volatile Thread thread;
    volatile Node prev;
    volatile Node next;
    Node nextWaiter;  //用于Condition
}
```





为了更加形象地展示ConditionObject对象的ReentrantLock对象所维护的等待队列的结构，我画了一张图，如下所示。从图中，我们可以发现，Lock等待队列包含虚拟头节点，Condition等待队列不包含虚拟头节点。之所以这样做是因为，双向链表操作比较复杂，增加虚拟头节点可以有效简化操作，而单向链表操作比较简单，就没有添加虚拟头节点的必要了。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/3001400_1660141043.png)    

接下来，我们依次看下Condition接口中的方法在ConditionObject类中是如何实现的。



**1）awaitUninterruptibly()函数**

awaitUninterruptibly()函数不响应中断，因此，相对于await()函数，awaitUninterruptibly()函数的代码实现更加简单，我们使用更加简单的awaitUninterruptibly()函数，来讲解等待函数的实现原理。awaitUninterruptibly()函数的源码如下所示。我们在代码中添加了注释，你可以通过注释了解代码逻辑。

```java
public final void awaitUninterruptibly() {
    //1. 将线程包裹为Node节点添加到Condition等待队列尾部
    Node node = addConditionWaiter();
    
    //2. 将state修改为0，表示释放了锁
    int savedState = fullyRelease(node);
    
    //3. 阻塞等待被signal()或signalAll()唤醒
    boolean interrupted = false;
    while (!isOnSyncQueue(node)) { //检查节点是否已移动到Lock等待队列中
        LockSupport.park(this); 
        if (Thread.interrupted())
            interrupted = true;
    }
    
    //4. acquireQueued()用来排队等待锁，在讲解Lock的底层实现原理时已经讲解
    if (acquireQueued(node, savedState) || interrupted)
        selfInterrupt();
}
```





我们重点讲解一下上述源码中的while循环这部分代码。当线程通过调用park()函数进入阻塞状态之后，park()函数遇到以下两种情况会返回。一种是被中断，另一种是另外一个线程调用了signal()函数或signalAll()函数。对于第一种情况，因为awaitUninterruptibly()函数不响应中断，因此线程中断唤醒之后，再次调用park()函数阻塞。对于第二种情况，另外一个线程调用signal()函数或signalAll()函数时，会先将Condition等待队列中的线程移动到Lock等待队列，然后再调用unpark()函数唤醒线程。isOnSyncQueue()函数的作用就是，检查线程对应的节点是否已经移动到Lock等待队列中。因此，对于第二种情况，isOnSyncQueue()函数返回true，while循环结束，执行后面的排队等待锁的逻辑。



对于awaitUninterruptibly()函数的代码逻辑，我们用图表示出来，如下图所示。

![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/75700700_1660141043.png)    





以上我们只讲解了不响应中断的等待函数的实现原理，对于响应中断的等待函数和支持超时时间的等待函数的实现原理，读者可以参考前面对ReentrantLock中的lock()函数和支持超时的tryLock()函数的原理分析，并结合源码自行研究。



**2）signal()函数**

signal()函数源码如下所示，我们对其进行了稍许修改，以方便你更加清晰的了解其核心逻辑。signal()函数的逻辑比较简单，从Condition等待队列的头部取一个节点，将其放入Lock等待队列中，并调用unpark()函数唤醒对应的线程。signalAll()函数的实现原理跟signal()函数的类似，不同之处在于，signalAll()函数会将Condition等待队列中的节点统统移动到Lock等待队列，并调用unpark()函数唤醒所有的正在执行await()函数的线程。

```java
//按照FIFO原则处理Condition等待队列中的线程
public final void signal() {
    if (!isHeldExclusively()) throw new IllegalMonitorStateException();
    Node first = firstWaiter;
    if (first != null) transferForSignal(first);
}

final void transferForSignal(Node node) {
    compareAndSetWaitStatus(node, Node.CONDITION, 0);
    Node p = enq(node);
    LockSupport.unpark(node.thread);
}
```





## **六、思考题**

在本节中，我们使用条件变量实现了一个支持阻塞读的无限队列，那么，如何使用条件变量实现一个支持阻塞读和阻塞写的有限队列（队列的大小固定）呢？
