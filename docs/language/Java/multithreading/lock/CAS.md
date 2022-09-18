---
category: Java

---

# **CAS**

::: tip

**CAS：如何不使用synchronized和Lock等锁实现线程安全的链表？**

上几节讲到synchronized和Lock。在讲解它们的实现原理时，我们反复提到CAS。比如，多个线程竞争锁时，我们通过CAS来判定谁获得锁。竞争锁失败的线程加入等待队列时，我们使用CAS保证链表添加节点操作的线程安全性。除此之外，后面讲到的原子类、并发容器，其底层实现也会用到CAS。CAS是多线程开发基础中的基础。本节我们就来详细讲解一下CAS。在开始之前，请你思考，如何在不使用synchronized和Lock等锁的情况下，实现一个线程安全的链表？

:::

## **一、CAS介绍**

CAS指的是先检查后更新这类复合操作，英文翻译有多种：Compare And Set、Compare And Swap或Check And Set。示例代码如下所示。这段代码是我们从Lock锁的底层实现原理中，抽象出来的一段功能代码，state为共享变量，值为0表示没有加锁，值为1表示已加锁。多个线程同时调用tryAcquire()函数，谁将state变为1，谁就获取到了锁。

```
public class LockDemo {
  private int state = 0;
  public boolean tryAcquire() {
    if (state == 0) {
      state = 1;
      return true;
    }
    return false;
  }
}
```





很明显，tryAcquire()函数中的代码访问共享资源，并且包含复合操作，符合临界区的特征。多个线程竞态交叉执行tryAcquire()函数，有可能存在这样的情况：多个线程均检测到state等于0，并先后将其值设置为1，导致多个线程同时获取到同一把锁。因此，tryAcquire()是非线程安全的。



tryAcquire()函数之所以非线程安全，本质上是因为tryAcquire()函数中的代码是非原子操作。为了保证线程安全，我们可以使用synchronized或Lock对tryAcquire()函数加锁。不过，如果上述代码是synchronized或Lock的底层实现中的一部分，那么，我们就不能在实现锁（synchronized或Lock）时再递归地使用锁。如果我们不使用锁，那么，如何保证tryAcquire()函数的原子性呢？对于这种情况，我们可以使用硬件层面提供的CAS原子指令来解决。



## **二、硬件指令**

X86提供的CAS指令为cmpxchg指令。指令格式如下所示。cmpxchg指令涉及三个操作数。目标操作数位于寄存器或内存中，用于存储变量的当前值C（CurrentValue）。源操作数位于寄存器中，用于存储变量的更新值N（NewValue）。隐藏的操作数位于AX寄存器中，在指令中没有明确指出，用于存储变量的期望值E（ExpectedValue）。

```
cmpxchg [目标操作数]，[源操作数]
```





在执行cmpxchg指令时，CPU会判断变量的当前值C是否等于期望值E。如果当前值C跟期望值E相等的话，那么，CPU将更新值N赋值给存储当前值C的寄存器中，并设置标志寄存器中的ZF标志位为1，用来表示变量值更新成功。如果当前值C跟期望值E不相等，那么，CPU将当前值C赋值给存储期望值E的寄存器中，也就是AX寄存器中，并设置标志寄存器中的ZF标志位为0，用来表示变量值更新失败。



在单核计算机上，cmpxchg指令是原子操作。尽管cmpxchg指令包含很多细分操作，看似是非原子的复合操作，但是，指令是CPU执行的最小单元，指令执行的过程不可中断。多个线程共用一个CPU核来交替执行，只有当前线程执行完正在执行的指令（比如cmpxchg指令）之后，操作系统才可以调度CPU执行其他线程，其他线程是看不到cmpxchg指令执行的中间状态的。因此，cmxchg在单核计算机上是原子操作。



不过，在多核计算机上，cmpxchg指令却是非原子操作。在多核计算机上，多个线程可以并行运行在多个CPU核上，也就是说，多个线程可以并行执行cmpxchg指令，同时对同一个内存变量进行CAS操作，因此，cmpxchg就不再是原子操作了。在多核计算机中，为了保证cmpxchg指令的原子性，我们需要在cmpxchg指令前加LOCK前缀，如下所示。

```
LOCK cmpxchg [目标操作数], [源操作数]
```





在讲解volatile解决内存可见性问题时，我们也提到过LOCK前缀。实际上，LOCK前缀不仅仅可以同步缓存，还可以锁定总线，禁止多个CPU核同时操作一块共享的内存单元。这样就能保证多核计算机上，同一时刻只有一个CPU核在执行cmpxchg指令。这就相当于在硬件层面给cmpxchg指令加了锁。



## **三、native方法**

尽管硬件层面提供了原子的CAS指令，但是，在高级的Java编程语言中，我们无法直接使用底层的CPU指令，JVM的Unsafe类中提供了大量的native方法，对比较底层的操作进行了封装，比如之前讲到的用于阻塞线程的park()、unpark()方法。



Unsafe类中提供了3个CAS方法，如下所示。o表示针对哪个对象的成员变量进行CAS操作。offset表示成员变量在对象中的偏移位置。oldValue为期望值，newValue为更新值。如果对象o中偏移位置为offset的成员变量的值等于oldValue，那么，对象o中偏移位置为offset的成员变量的值更新为newValue，并且CAS方法返回true。

```
public final native boolean compareAndSwapInt(
        Object o, long offset, int oldValue, int newValue);
                                       
public final boolean compareAndSwapLong(
        Object o, long offset, long oldValue, long newValue);


public final boolean compareAndSwapObject(
        Object o, long offset, Object oldValue, Object newValue);
```





以上3个CAS方法的代码实现类似，我们拿compareAndSwapInt()方法举例讲解。Java是跨平台语言。针对不同的平台，compareAndSwapInt()方法的代码实现不同。在Linux_X86平台（CPU为X86，操作系统为Linux）下，compareAndSwapInt()方法的代码实现如下所示。在Hotspot JVM中，native方法在JVM中由C++代码实现，因此，我们需要在JVM源码中查看native方法的代码实现。

```
//以下代码位于unsafe.cpp中
UNSAFE_ENTRY(jboolean, Unsafe_CompareAndSwapInt(
  JNIEnv *env, jobject unsafe, jobject obj, jlong offset, jint e, jint x))
  UnsafeWrapper("Unsafe_CompareAndSwapInt");
  oop p = JNIHandles::resolve(obj);
  jint* addr = (jint *) index_oop_from_field_offset_long(p, offset);
  return (jint)(Atomic::cmpxchg(x, addr, e)) == e;
UNSAFE_END
```





上述代码又调用了Atomic类中的cmpxchg()方法。cmpxchg()方法的代码实现如下所示。cmpxchg()方法通过在C++代码中调用汇编代码，来执行cmpxchg汇编指令。

```
inline jint     Atomic::cmpxchg(
  jint exchange_value, volatile jint* dest, jint compare_value) {
  int mp = os::is_MP();
  __asm__ volatile (LOCK_IF_MP(%4) "cmpxchgl %1,(%3)"
                    : "=a" (exchange_value)
                    : "r" (exchange_value), "a" (compare_value), "r" (dest), "r" (mp)
                    : "cc", "memory");
  return exchange_value;
}
```





了解了Unsafe类中CAS方法的实现原理之后，我们使用这些CAS方法来实现tryAcquire()函数，对应的代码实现如下所示。代码比较简单，我们就不详细解释了。

```
public class Demo {
  private int state = 0;

  private static final Unsafe unsafe = Unsafe.getUnsafe();
  private static final long stateOffset;
  static {
    try {
      stateOffset = unsafe.objectFieldOffset(
                      Demo.class.getDeclaredField("state"));
    } catch (Exception ex) { throw new Error(ex); }
  }
  
  public boolean tryAcquire() {
    return unsafe.compareAndSwapInt(this, stateOffset, 0, 1);
  }
}
```





## **四、失败处理**

如果多个线程竞争执行CAS，那么，只有一个线程会执行成功，其他执行失败的线程又该如何处理呢？实际上，我们可以根据不同的业务场景，选择不同的处理策略，既可以转去执行失败处理逻辑（如tryAcquire()函数），也可以自旋执行CAS，直到执行成功为止。



我们举例解释一下自旋执行CAS这种处理策略，示例如下代码所示。如果我们希望increment()函数线程安全，那么，我们现在有两种处理方法，一种是使用synchronized或Lock对increment()函数加锁，对应代码为increment_lock()函数，另一种是使用CAS，对应代码为increment_CAS()函数。

```
public class Demo {
  private int id = 0;
  
  // 原始方法
  public void increment() {
    id++;
  }

  // 线程安全处理方法一：使用锁
  public void increment_lock() {
    synchronized (this) {
      id++;
    }
  }

  // 线程安全处理方法二：使用CAS
  private static final Unsafe unsafe = Unsafe.getUnsafe();
  private static final long idOffset;
  static {
    try {
      idOffset = unsafe.objectFieldOffset(
                  Demo.class.getDeclaredField("id"));
    } catch (Exception ex) { throw new Error(ex); }
  }

  public void increment_CAS() {
    int oldValue = id;
    int newValue = oldValue+1;
    unsafe.compareAndSwapInt(this, idOffset, oldValue, newValue);
  }
}
```





对比以上两种处理方法，Increment_lock()函数总是能让id值增一，但increment_cas()却不能，在CAS失败时，函数直接返回，id值并没有增一。也就是说，increment_cas()的处理方式，并不符合我们对increment()函数的逻辑要求（总是会增一）。对于这个问题，我们就可以使用自旋+CAS来解决。如下代码所示。

```
public void increment_CAS() {
  boolean succeded = false;
  while (!succeded) {
    int oldValue = id;
    int newValue = oldValue + 1;
    succeded = unsafe.compareAndSwapInt(this, idOffset, oldValue, newValue);
  }
}
```







前面我们讲过很多锁，偏向锁、轻量级锁、自旋锁等等，这里我们再介绍两种锁：悲观锁和乐观锁，它们属于抽象的概念，并不是具体实现。synchronized或Lock可以用来实现悲观锁，自旋+CAS可以用来实现乐观锁。乐观锁指的是乐观的认为不大可能会有资源竞争，大部分情况都不需要加锁。悲观锁指的是悲观的认为很有可能会出现资源竞争，需要加锁。



悲观锁和乐观锁各有利弊。基于synchornized或Lock实现的悲观锁，等待资源而阻塞线程会导致内核态到用户态的上下文切换，带来性能损耗，但是，处于阻塞状态的线程不会被分配CPU时间片，不会浪费CPU资源。基于自旋+CAS实现的乐观锁，循环执行CAS，不需要阻塞线程，没有内核态到用户态的上下文切换带来的性能损耗，但是，线程一直处于运行状态，白白浪费CPU资源。因此，如果多线程竞争资源不激烈，那么，使用乐观锁来竞争资源更合适，如果多线程竞争资源比较激烈，那么，使用悲观锁来竞争资源更合适。



## **五、应用场景**

在本节的开始，我们留了一个思考题：如何实现一个线程安全的链表。实际上，这个问题在讲解Lock的底层实现原理时，已经被提及过。Lock底层使用的等待队列就是双向链表。多个线程会竞争操作等待队列，因此，等待队列必须是线程安全的。



我们对链表支持的操作做稍许简化，假设只支持在链表尾部添加元素这一操作。非线程安全的原始链表的定义如下所示。其中，使用虚拟头节点和tail尾指针是为了方便在链表尾部插入元素，并且，链表的虚拟头节点在初始化时已经创建好。了解更多链表操作，请参看我的《数据结构与算法之美》这本书。

```
public class AQSDemo {
  public static final class Node {
    private int threadId;
    private Node prev;
    private Node next;
    public Node(int val, Node prev, Node next) {
      this.threadId = val;
      this.prev = prev;
      this.next = next;
    }
  }

  private Node head = new Node(-1, null, null); //虚拟头节点
  private Node tail = head;

  public void addWaiter(int val) {
    Node waiter = new Node(val, null, null);
    waiter.prev = tail;
    tail.next = waiter;
    tail = waiter;
  }
}
```





上述代码中的addWaiter()函数访问共享资源（tail），并且包含复合操作（读写tail和tail.next），多线程竞态交叉执行addWaiter()函数会存在线程安全问题，如下例子所示，两个线程执行完之后，tail指向值为3的节点，而值为1的节点的next指针却指向值为4的节点。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/8537200_1659334778.png)    





我们可以使用CAS来保证addWaiter()函数线程安全，如下代码所示。多个线程竞争往链表尾部添加元素时，只有一个线程会成功执行CAS，将tail指针更新为指向自己的节点，其他线程执行CAS失败，继续自旋执行CAS，直到将元素成功添加到链表尾部为止。

```
public void addWaiter(int val) {
  Node waiter = new Node(val, null, null);
  for(;;) {
    Node oldTail = tail;
    if (unsafe.compareAndSwapObject(this, tailOffset, oldTail, waiter)) {
      waiter.prev = oldTail;
      oldTail.next = waiter;
      return;
    }
  }
}
```





## **六、思考题**

经常听到有人说，使用CAS或者自旋+CAS就是无锁编程，你觉得这样的说法严谨吗？