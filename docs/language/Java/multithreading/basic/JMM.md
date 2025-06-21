---
category: Java

---

# **JMM**

::: tip

但凡讲到多线程，我们就不得不讲一下Java内存模型。Java内存模型用来解决多线程的三大问题：可见性问题、有序性问题、原子性问题。Java内存模型也是面试中的常考点。比如:

Java内存模型中的“内存”两个字如何理解？跟多线程有什么关系？

既然CPU支持MESI等缓存一致性协议，为什么还会有可见性问题？

volatile的作用是什么?等等。

对于Java内存模型，我们分3节讲解。本节详细讲解多线程的三个问题是如何产生的，以及简单介绍对Java内存模型是干什么的。下一节详细讲解Java内存模型如何解决多线程的三大问题。下下一节讲解为什么CPU支持MESI等缓存一致性协议，还会有可见性问题？

:::

## **Java内存模型**

### 一、CPU缓存导致可见性问题

尽管内存的访问速度很快，但在CPU眼里却非常慢速，毕竟，内存读写速度跟CPU处理速度相比，有好几个数据量级的差距。CPU执行指令的过程，会涉及大量的内存读写。内存读写太慢，会影响到CPU执行指令的效率。那么，这个问题该如何解决呢？



我们知道，缓存是提高数据读写速度的常用手段，比如，基于磁盘的数据库的读写速度比较慢，我们可以前置一个基于内存的缓存（比如Redis）。基于此解决方案，计算机一般在CPU和内存之间安置一个高速的CPU缓存。CPU、CPU缓存、内存之间的关系如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/84692400_1657209434.png)    





有同学可能会说，即便引入了CPU缓存，但数据还是得从内存中读取，最终还是得写入内存，缓存横插在CPU和内存之间，岂不是多此一举？实际上，缓存起效的条件是数据的访问满足局部原理。其中，局部性原理包含时间局部性原理和空间局部性原理。



**1）时间局部性原理**

基于时间局部性原理，某个数据一般在一个时间段内会反复读写，CPU将数据从内存加载到缓存之后，之后的数据读写都只需要在高速缓存中完成，最后在某种情况下同步更新到内存中，由此减少了内存读写的次数。



**2）空间局部性原理**

基于空间局部性原理，内存中相邻的数据一般会紧挨着被访问。因此，CPU从内存中读取数据时， 会一次性读取一个缓存行（cache line）大小的数据。一般来讲，一个缓存行大小为64字节或128字节。



在单线程或者单CPU多线程情况下，这样的内存访问模型（CPU通过缓存来读写内存）不存在任何问题，但是在多CPU多线程情况下，它就有可能会导致多个CPU缓存之间的数据的一致性问题。



如下图所示，CPU1和CPU2读取了内存中的的数据a=1到各自的缓存中。CUP1将数据a的值更新为2，更新之后的a值不会立刻写入内存，毕竟，如果每次更新缓存都要同步更新内存，那么缓存就没有意义了。此时，CPU1的缓存和CPU2的缓存中数据值就不一致了。从另一个角度来看，也就相当于，CPU1对共享数据的更新对CPU2不可见，因此，这个问题也叫做可见性问题。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/45455800_1657209435.png)    





经常有人会拿下面的例子来解释可见性问题。因为线程t1和线程t2运行在不同的CPU上，running作为共享数据，被加载到不同CPU的缓存中，线程t2在缓存中对running值进行修改，对于线程t1来说不可见，因此并不会使线程t1中的while循环结束。

```
public class Demo30_1 {
  private static boolean running = true;
  private static int count = 0;

  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        while (running) {
          count++;
        }
        System.out.println("count: " + count);
      }
    });

    Thread t2 = new Thread(new Runnable() {
      @Override
      public void run() {
        running = false;
      }
    });
    
    t1.start();
    Thread.sleep(1000); // 1s
    t2.start();
    t1.join();
    t2.join();
  }
}
```





尽管分析结果是对的（线程t2的while循环不退出），但分析过程完全不对。实际上，线程t2的while循环一直运行不退出，跟可见性没有一点关系，在下下节中，我们讲解完CPU缓存一致性协议之后你就明白了。本节就先暂时卖个关子。



### 二、指令重排导致有序性问题

刚刚我们讲了CPU缓存，它可以有效提高指令的执行效率，但是也带了多线程情况下的可见性问题。接下来，我们再来讲另外一个提高指令执行效率的方法：指令重排序，不过，它也会导致多线程情况下的代码执行问题，这个问题叫：有序性问题。



我们先来通过一个经典的例子，看下什么是指令重排序。示例代码如下所示。你觉得下列代码的执行结果是什么呢？

```
public class Demo30_3 {
  private static boolean ready = false;
  private static int value = 1;
  
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        while (!ready) {
        }
        System.out.println(value);
      }
    });

    Thread t2 = new Thread(new Runnable() {
      @Override
      public void run() {
        value = 2;
        ready = true;
      }
    });

    t1.start();
    t2.start();
    t1.join();
    t2.join();
  }
}
```





因为指令有可能重排，所以上述代码的执行结果不确定，有可能是1，也有可能是2。因为t2线程执行的两行代码并没有依赖关系，如果在单线程环境下（也就是只有t2线程在运行），两行语句哪条先执行哪条后执行，对结果没有任何影响。对于线程t2的代码来说，CPU就有可能对其重排序，先执行第二条语句（ready=true），再执行第一条语句（value=2）。在ready变为true但value仍为1时，执行线程t1就会打印value=1。线程t1和t2的执行时序关系如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/1456100_1657209436.png)    





实际上，在代码的编译执行过程中，会发生3中不同类型的重排序：

1）编译优化导致的重排序

2）CPU指令并行执行导致的重排序

3）硬件内存模型导致的重排序



对于第一类重排序，我们在JVM模块讲解，对于第三类重排序，我们在下下一节中讲解。本节，我们重点讲解一下第二类重排序。



为了提高指令的执行效率，现在的处理器大都采用指令级并行技术（Instruction-Level Parallelism，简称IPL），来并行的执行多条指令。CPU从内存中逐一读取并解码指令，然后放入待执行队列。有依赖关系的指令，显然是无法并行执行的，只能顺序依次执行。没有依赖关系的指令，才能够并行执行。CPU从执行队列中，选择没有依赖关系的几条指令来并行执行，这样就会导致指令执行顺序的重排列。



对于单线程环境来说，指令重排序并不影响代码的最终结果，但是，对于多线程来说，指令重排序就会导致上述示例讲到的有序性问题，也就是，代码最终的运行结果，跟代码按照书写的顺序来执行得到的结果并不相同。



### 三、线程竞争导致原子性问题

原子操作指的是不可分割的操作，原子操作执行过程中的中间状态不会被访问到。一些看似原子操作的非原子操作，在多线程环境下并发竞争执行（这个概念在后面会讲到）会存在问题，我们把它称为原子性问题。



我们举例解释一下。示例代码如下所示。线程t1和线程t2共享变量count，线程t1执行10000次count++，线程t2执行10000次count++，最终count的值是多少呢？

```
public class Demo30_2 {
  private  static volatile int count = 0;

  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        for (int i = 0; i < 10000; ++i) {
          count++;
        }
      }
    });

    Thread t2 = new Thread(new Runnable() {
      @Override
      public void run() {
        for (int i = 0; i < 10000; ++i) {
          count++;
        }
      }
    });

    t1.start();
    t2.start();
    t1.join();
    t2.join();
    System.out.println(count);
  }
}
```





直觉告诉我们最终的count值应该为20000，但事实并非如此，正确的答案是：最终的count值并不确定，每次运行结果都不一样，但绝大部分情况下都小于20000。



之所以有这样的运行结果，主要是因为count++是非原子操作，经过编译之后，count++这条语句对应3条CPU指令 ：首先是读取数据到寄存器，然后在寄存器上执行自增操作，最后是将寄存器中的数据写入内存。如果两个线程并行（多核）或并发（单核多线程）执行count++，count++对应的3条CPU指令有可能会交叉执行，从而产生不可预期的结果。我们拿单核多线程来进一步举例分析。



前面讲到，线程切换会保存和恢复上下文，比如寄存器的值，因此，我们就可以等价理解为：每个线程独享一组寄存器。假设线程t1将count的值0读取到寄存器，接着就发生了线程切换，线程t2将count的值0也读取到寄存器，线程t2将寄存器中的count值自增一，然后写入内存，此时内存中的count值变为了1。这时又发生了线程切换。CPU切换为执行线程t1。线程t1的寄存器中的count值仍然为0，线程t1将寄存器中的count值自增一，然后写入内存，这时内存中的count值还是1。两个线程分别对count执行了自增一的操作，预期count值变为2，但最终结果却是1。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/70859200_1657209436.png)    





对于刚刚的分析，你可能会有一点疑问：CPU不是有CPU缓存吗？为啥这里直接说将数据写入内存，而不是写入缓存呢？实际上，因为大部分处理器都实现了缓存一致性协议，所以，写入缓存就相当于写入内存。关于这一点，我们还是在下下节中讲解。



当然，对于原子操作，即便是多线程执行，也不会出现问题。我们拿赋值语句（例如count=5）举例。因为CPU不需要将count值读取到寄存器再修改，直接更改内存中的count值即可，所以，count=5这个赋值语句是原子操作。多线程下并行执行赋值语句，每条赋值语句都不可分割，执行结束之后，才会执行下一条赋值语句，因此，也就不存在像count++那样的交叉执行的问题了。



当然，并不是所有的赋值语句都是原子的。我们知道，Java是跨平台的，不管运行在32位计算机上还是64位计算机上，其中的long、double类型都是64位的。



对于32位计算机，对long或double类型数据赋值，需要两次内存写操作才能完成，这就相当于执行了两条CPU指令，因此，不是原子操作。同理，读取long或double类型数据，也需要执行两次内存的访问，因此，也不是原子操作。



在多线程环境下，如果线程t1对long类型数据a进行赋值，在执行完高位32位赋值指令之后，切换为线程t2执行，此时，线程t2读取到的数据a的值便既不是旧值，也不是新值，而是一个没有意义的中间值。



### 四、Java内存模型

前面讲到，CPU缓存导致了可见性问题，指令重排导致了有序性问题，线程切换导致了原子性问题。这些问题只在多线程中存在。而多线程本身只是软件层面的技术，因此，解决这些问题理应在软件层面解决，而非在硬件层面解决。由软件层面在必要的时候，禁止CPU缓存、禁止指令重排、禁止线程并行或并发运行。

然而，CPU缓存、指令重排、线程切换这些优化，本身都是为了提高代码的执行效率，为了保证代码在多线程情况下能正确运行，过度严格的禁用这些优化，会影响代码的执行效率。所以，Java提供了一些解决方案，由程序员按需使用，保证多线程下代码的正确运行。Java提供的解决方案被定义为Java内存模型，对应的规范为JSR-133。之所以叫做Java内存模型，是因为要解决的问题，也就是多线程的三大问题，都跟内存数据读写有关。

在JSR-133定义的Java内存模型中，Java定义了一些关键字（比如volatile、synchronized），或者对某些关键字进行了功能增强（比如final），以此来限制内存中多线程共享数据的读写方式，最终达到解决可见性、有序性、原子性问题。关于Java内存模型如何解决多线程的可见性、有序性、原子性问题，我们在下一节中详细讲解。

## **JMM如何解决CAS**

::: tip

前面我们讲解了多线程存在的3个问题：CPU缓存导致的可见性问题、指令重排导致的有序性问题、线程切换导致的原子性问题。Java内存模型解决多线程的这3个问题，主要依靠3个关键词和1个规则。3个关键词分别是：volatile、synchronized、final，1个规则是happens-before规则。接下来我们就详细讲讲这3个关键词和1个规则。

:::

### 一、volatile关键字

volatile关键字可以解决可见性、有序性和部分原子性问题。



**1）使用volatile解决可见性问题**

volatile翻译成中文是“易变”的意思。对于用volatile修饰的变量，在编译成机器指令时，会在写操作后面，加上一条特殊的指令：“lock addl #0x0, (%rsp)”，这条指令会将CPU对此变量的修改，立即写入内存，并通知其他CPU更新缓存数据。



**2）使用volatile解决有序性问题**

指令重排导致有序性问题。因此，volatile关键字通过禁止指令重排序来解决有序性问题。禁止指令重排序又分为完全禁止指令重排序和部分禁止指令重排序。完全禁止指令重排的意思是：volatile修饰的变量的读写指令不可以跟其前面的读写指令重排，也不可以跟后面的读写指令重排。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/32199800_1657468472.png)    





我们知道，指令重排是为了优化代码的执行效率，过于严格的限制指令重排，显然会降低代码的执行效率。因此，Java内存模型将volatile的语义定义为：部分禁止指令重排序。部分禁止指令重排序也可以保证多线程运行的有序性。至于其原因，涉及到比较复杂的计算机体系结构的知识，因此，这里就不展开证明了。



部分禁止指令重排规则如下图所示。对volatile修饰的变量执行操作，Java内存模型只禁止位于其前面的读写操作不与其进行重排序，位于其后面的读写操作可以与其进行指令重排序。对volatile修饰的变量执行读操作，Java内存模型只禁止位于其后面的读写操作不与其进行重排序，位于其后面的读写操作可以与其进行指令重排序。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/99981000_1657468472.png)    





为了能实现上述细化之后的指令重排禁止规则，Java内存模型定义了4个细粒度的内存屏障（Memory Barrier），也叫做内存栅栏（Memory Fence），它们分别是：StoreStore、StoreLoad、LoadLoad、LoadStore。需要注意的是，这些内存屏障是抽象概念，底层需要依赖CPU提供的内存屏障指令来实现。而Java内存模型之所以定义抽象的内存屏障，是为了屏蔽不同CPU提供的内存屏障指令的差别。



如果我们用Store(x)表示对x变量的写操作，Load(x)表示对x变量的读操作，那么，这4个内存屏障的作用如下图所示。StoreStore内存屏障禁止屏障前面的写操作，跟屏障后面的写操作重排序。StoreLoad内存屏障禁止屏障前的写操作，跟屏障后的读操作重排序。LoadStore内存屏障禁止屏障前的读操作，跟屏障后的写操作重排序。LoadLoad内存屏障禁止屏障前的读操作，跟屏障后的读操作重排序。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/76864300_1657468473.png)    





为了实现Java内存模型定义的部分禁止指令重排规则，volatile变量写操作前面会添加StoreStore和LoadStore内存屏障，这样可以禁止volatile变量写操作前面的读写操作跟其重排序。volatile变量读操作后面会添加LoadLoad和LoadStore内存屏障，这样可以禁止volatile变量读操作后面的读写操作跟其重排序，示例代码如下所示。

```
<other ops> 
[StoreStore] 
[LoadStore]
x = 1; // x为volatile变量，此句为x变量的写操作
<other ops> 
-------------------------
<other ops> 
t = x; // x为volatile变量，此句为x变量的读操作
[LoadLoad] 
[LoadStore] 
<other ops>
```





不过，这样做还是不够的，因为我们无法保证volatile变量写操作（也就是上述示例中的x=1）和volatile变量读操作（也就是上述示例中的t=x）之间不被重排序，也就是说t=x有可能会先于x=1执行，这显然是不对的。



为了解决这个问题，我们可以选择在volatile变量写操作后面添加StoreLoad内存屏障，当然，也可以选择在volatile变量读操作前面添加StoreLoad内存屏障。因为大部分情况下，读操作远多于写操作，所以，为了尽量减少内存屏障对性能的影响，Java内存模型选择在volatile写操作后面添加StoreLoad内存屏障。示例代码如下所示。

```
<other ops> 
[StoreStore] 
[LoadStore]
x = 1; // x为volatile变量，此句为x变量的写操作
[StoreLoad]
<other ops>
t = x; // x为volatile变量，此句为x变量的读操作
[LoadLoad] 
[LoadStore] 
<other ops>
```





刚刚我们讲到的StoreStore、StoreLoad、LoadLoad、LoadStore都是抽象的内存屏障，当具体实现时，依赖具体CPU提供的内存屏障指令。对于常用到X86 CPU来说，其是不支持读写（前一个操作是读操作，后一个操作是写操作）重排序、读读（前一个操作是读操作，后一个操作是写操作）重排序、写写（前一个操作是写操作，后一个操作也是写操作）重排序，只支持写读（前一个操作是写操作，后一个操作是读操作）重排序。因此，JVM运行在x86 CPU上时，Java内存模型会将StoreStore、LoadLoad、LoadStore翻译为空操作指令，将StoreLoad翻译为“lock addl #0x0, (%rsp)”。也就是说，这条指令既能保证volatile变量的可见性，还能禁止指令的重排。

```
<other ops> 
x = 1; // x为volatile变量，此句为x变量的写操作
[lock addl #0x0, (%rsp)]
<other ops>
-------------------
<other ops>
t = x; // x为volatile变量，此句为x变量的读操作
<other ops>
```





也就是说，对于常用的x86 CPU来说，Java内存模型只会在volatile变量写操作后添加一条额外的指令，volatile变量的读操作前后不会添加任何额外的指令，因此，如果变量读多写少，那么，添加volatile几乎不影响性能。这也是volatile性能比synchronized锁性能更好的原因。



实际上，StoreStore、StoreLoad、LoadStore、LoadLoad这4个内存屏障，除了可以禁止硬件层面的指令重排序之外，还可以用来禁止编译优化（JIT编译）导致的指令重排序。因此，尽管在硬件层面，在X86 CPU上，这4个内存屏障中只有StoreLoad有用，但是，在编译层面，这4个内存屏障都有用。除此之外，不同的CPU支持不同的类型的重排序（读写、读读、写读、写写），因此，做为跨平台的编程语言，Java并不能只保留StoreLoad这一种抽象的内存屏障。



还有，不同CPU提供的内存屏障指令也不同，也并非会跟这4中内存屏障一一对应，在具体将Java定义的抽象的内存屏障翻译为CPU内存屏障指令时，会做相应的调整，比如将StoreStore、LoadStore两个重新的内存屏障翻译为一个CPU内存屏障指令等等。



了解了volatile如何解决指令重排问题之后，我们再来看下上一节给出的指令重排问题代码。实际上，问题代码在X86 CPU上运行并不会出现问题，永远都是打印正确的value值2。这是因为在X86 CPU上只有写读重排序，而问题代码中，value=2和ready=true是写写结构，并不会重排序。但是，代码给出正确执行结果，仅限于运行在X86 CPU。如果代码运行在其他类型的CPU上，就无法保证仍然给出正确的执行结果。因此，我们需要在ready变量前面加上volatile修饰，依次来禁止volatile变量写入操作（ready=true）前面的前面的读写操作（value=2）跟它重排序。

```
public class Demo30_3 {
  private static volatile boolean ready = false;
  private static int value = 1;
  
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        while (!ready) {
        }
        System.out.println(value);
      }
    });

    Thread t2 = new Thread(new Runnable() {
      @Override
      public void run() {
        value = 2;
        ready = true;
      }
    });

    t1.start();
    t2.start();
    t1.join();
    t2.join();
  }
}
```





**3）使用volatile解决部分原子性问题**

上节提到两类原子性问题，一类是64位long和double类型数据的读写的原子性问题，另一类是自增语句（例如count++）的原子性问题。volatile可以解决第一类原子性问题，但是无法解决第二类原子性问题。



在32位计算机上，读写64位的long或double类型数据，会执行两次内存读写操作。如果我们使用volatile关键词修饰long或double类型变量，那么，编译器将代码编译成机器指令时，会在两次读或写之前锁定总线的指令，在完成两次读或写之后再释放总线，这样就可以保证64位long或double类型数据在32位计算机上读写的原子性。不过，现在大部分计算机都已经是64位的了，因此，我们也就不需要为long或double类型变量添加volatile关键字。



现在，我们再讨论一下，为什么volatile没法解决自增语句的原子性问题？



volatile可以解决可见性问题，当两个线程同时对volatile修饰的变量进行自增操作时，一个线程对变量的修改，会立刻写入内存，并让另一个线程的CPU缓存失效，另一个线程从内存读取新的值进行自增，这不就解决自增语句的原子性问题了吗？



实际上，自增语句的原子性问题，不是出在CPU缓存上，而是出在寄存器上。上一节我们讲到，自增语句可以分解为3个指令：首先是读取数据到寄存器，然后在寄存器上执行自增操作，最后是将寄存器的数据写入内存。假设线程t1和线程t2分别运行在CPU A和CPU B上，当线程t1和线程t2都将变量值读取到寄存器之后，尽管变量被volatile修饰，线程t1对变量的修改，能够立即写入内存，并且同步给线程t2所使用的CPU缓存，但并不会同步更新线程t2所使用的寄存器，线程t2中的寄存器保存的仍然是老值，对老值自增一，然后写入内存，就会导致覆盖掉线程t1更新之后的结果。



总结一下，volatile只能解决long、double读写的原子性问题，对于更大范围的原子性问题的解决，volatile无能为力，锁才真正可以，也就是接下来要讲的synchronized关键字。



### 二、synchronized关键字

synchronized也可以解决可见性、有序性、原子性问题。只不过，它的解决方式比较简单粗暴，让原本并发执行的代码串性执行，并且，每次加锁和释放锁，都会同步CPU缓存和内存中的数据。关于synchronized锁，我们留在后续章节中详细讲解。



### 三、final关键字

在《设计模式之美》中，我们讲到单例模式，单例模式有多种实现方式，其中一种如下代码所示。你觉得以下代码是否存在问题呢？

```
public class Singleton {
  private static Singleton instance;
  private int seq;
  
  private Singleton(int seq) {
    this.seq = seq;
  }
  
  public static Singleton getInstance() {
    if (instance == null) {
      synchronized (Singleton.class) {
        if (instance == null) {
          instance = new Singleton(11, 23);
        }
      }
    }
    return instance;
  }
  
  // 省略其他方法，比如seq的getter方法
}
```







上述代码存在问题。问题主要出在instance = new Singleton(11);这条语句上。跟自增语句类似，这条语句也并非原子操作。它可以分解为以下3个操作：

1）STEP 1：为对象分配内存空间

2）SETP 2：初始化对象（Singleton构造函数里的语句）

3）SETP 3：将内存空间的地址赋值给instance



STEP2和STEP3一个是读，一个是写，尽管x86 CPU只允许写读重排序，STEP2和STEP3在硬件层面并不会被重排序，但是，编译器仍然有可能将两者重排序。也就是说，在对象没有初始化完成之前，对象对应的内存地址就已经赋值给了instance。此时，其他线程判断instance不等于null，然后就拿instance去使用，这时，其他线程就有可能用到未初始化的Singleton对象。



当然，我们可以使用前面讲到的volatile解决这个问题。我们只需要将instance标记为volatile，这样，instance的写操作（STEP3）就不能与其前面的读写操作重排序了，也就不存在STEP 2和STEP 3重排序导致的问题了。



如果说Singleton类中的seq的值设置以后就不再修改，那么，我们还可以使用final关键字来禁止重排序。如下所示。当然，这种做法的前提是seq本身就是不可变的，如果seq可变，那就只能用volatile关键字了。

```
public class Singleton {
  private static Singleton instance;
  private final int seq;
  private Singleton(int seq) {
    this.seq = seq;
  }

  public static Singleton getInstance() {
    if (instance == null) {
      synchronized (Singleton.class) {
        if (instance == null) {
          instance = new Singleton(11);
        }
      }
    }
    return instance;
  }
}
```





原来final本来只限制变量是否可变，现在Java内存模型对final的语义做了增强，禁止编译器将构造函数中对final变量的写操作，重排序到对象引用之后，也就是禁止STEP2和STEP3重排序。Java内存模型之所以单独对final的语义进行增强，是因为被final修饰变量原本是不可变的，但在多线程环境下，一个线程可能看到final变量的两个不同的值，违背了final关键词的语义。因此，Java内存模型对final变量语义进行了增强，起码保证在一个线程内所有关键字的语义不被违背。



### 四、happens-before规则

前面讲了3个关键字，我们再来讲1个规则：happens-before规则。happens-before对解决多线程存在的问题，没有实质性作用，而是专门给程序员看的。程序员可以依照happens-before规则，检查自己编写的代码在多线程下的执行顺序，是否符合自己的预期。



happens-before规则有如下8个，我们依次来看下：

1）单线程规则：在单线程中，前面的操作先于后面的操作执行。这个我们稍后重点解释。

2）锁规则：一个线程释放锁先于另一个线程获取锁。这个很好理解，不需要过多解释。

3）volatile规则：在时间序上，如果对一个volatile变量的写操作，先于后面的对这个变量的读操作执行，那么，volatile读操作必定能读到volatile写操作的结果。也就是说，如果x为volatile变量，在t1时刻执行了x=1，在t2时刻执行了y=x，t1小于t2，那么y肯定等于1。不管编译器或者CPU会如何优化指令的执行顺序，都能保证这个结果。

4）线程启动规则：如果线程A在执行过程中，启动了线程B，那么，线程A对共享变量的修改对线程B可见。

5）线程终结规则：如果线程A在执行的过程中，通过Thread.join()等待线程B终止，那么，线程B对共享变量的修改，在线程B终止之后，对线程A可见。

6）线程中断规则：线程A对线程B调用interrupt()方法，先行发生于线程B的代码检测到中断事件的发生。

7）对象终结规则：一个对象的初始化完成，先行发生于调用它的finalize()方法。

8）传递规则：如果操作A先行发生于操作B，而操作B又先行发生于操作C，则可以得出操作A先行发生于操作C。



我们重点解释一下第一条规则，这条规则只用于单线程。你可能会说，单线程里的操作不是可以重排序吗？这条规则不就不对了吗？规则的意思是，你可以按照它说的这种顺序来分析程序的执行结果，但是，编译器可以偷偷重排序，只要他不会让你感知到就可以（也就是运行结果跟你认为的前面的操作先于后面的操作执行得到的结果一致）。对于其他规则，也是一样的，只要保证执行结果跟happens-before定义的规则的执行结果一样，编译器或CPU就可以随意重排序。



这也应征了我们前面提到的，程序员如果想知道代码的运行结果，只需要按照happens-before规则来分析就可以，但真正的代码的执行顺序，并不一定跟happens-before规则一致，只要结果一致即可。

## **CPU支持MESI，为什么还有可见性问题**

::: tip

在上上节中，我们讲到，在多线程环境下，CPU缓存会带来可见性问题。为了保证写入一个CPU缓存的数据，能够立刻写入内存，并同步更新其他CPU缓存，保持数据的一致性，Java内存模型提供了volatile关键字来解决这个可见性问题。

对于大部分业务工程师来说，对可见性的理解，到这个层面就可以的。但是，对于经验丰富的同学，可能会有疑问：大部分CPU都支持缓存一致性协议的，比如MESI，在硬件层面就可以解决各个CPU缓存数据的一致性问题，也就是刚刚讲的可见性问题，那么，是不是就不需要volatile关键字了呢？

本节，我们就深入到CPU缓存内部，重新审视一下Java内存模型中的可见性问题。

:::

### 一、缓存一致性协议

缓存一致性协议是一个硬件层面的协议，目的是为了保持不同CPU缓存中的数据的一致性。缓存一致性协议（也可以说是算法）有很多，我们拿比较经典的MESI协议来举例讲解。不过，真正可应用的MESI协议非常复杂，这里，我们只对MESI协议做一个简单的介绍，毕竟我们这里讲解MESI的目的，是为了让你对缓存一致性协议有个直观的认识，而并非让你去研究或掌握这个协议。



前面我们讲到，CPU以缓存行为单位来读写数据。因此，MESI协议处理的对象也是缓存行。MESI提供了4种不同的缓存行状态，它们分别如下所示。

1）M（Modified）：表示当前缓存行中的数据已被修改，但并未同步到内存

2）E（Exclusive）：表示当前缓存中有这个数据，其他CPU缓存中没有这个数据

3）S（Shared）：表示当前缓存中有这个数据，其他CPU缓存中也有这个数据

4）I（Invalid）：表示当前缓存行中的数据已经失效，说明其他CPU对数据进行了修改，下次CPU读取数据要从内存中读取，并同步更新缓存。



我们举个例子来解释一下这几个状态。假设一台计算机有3个CPU，分别是CPU0、CPU1、CPU2，它们依次执行一系列读写操作，我们来看下状态都会如何变化。



**1）STEP1：CPU0读**

CPU0将内存中的数据a=0读取到缓存，此时，其他CPU没有缓存数据a，那么在CPU0的缓存中，数据a所对应的缓存行的状态标记为E。如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/40653800_1657642024.png)    





你可能会说，CPU0读取内存中的数据a时，怎么知道其他CPU缓存有没有已经读取数据a呢？这就要靠总线广播了，更加形象的叫法是总线嗅探，CPU0在读取内存中的数据a之前，会往总线上广播一个读请求，其他CPU缓存获取到CPU0的读请求之后，会检查自己是否已经缓存了数据a，并告知CPU0。



**2）STEP2：CPU0写**

当CPU0执行写操作a=1时，CPU0更新缓存中的数据，并将状态更新为M。因为CPU0的缓存行原本处于E状态，所以，CPU0不需要更新内存中的数据，更不需要同步其他CPU缓存更新，如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/17582500_1657642025.png)    





**3）STEP3：CPU1读**

当CPU1执行从内存中读取a操作时，先广播一条读请求到其他CPU缓存，CPU0缓存接收到CPU1的读请求之后，发现自己处于M状态，于是，就会将自己缓存中的值a=1，写入到内存，并将缓存行标记为S，之后才允许CPU1读取内存中的数据，并将CPU1缓存中的a对应的缓存行标记为S。如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/96702200_1657642025.png)    





**4）STEP4：CPU2读**

当CPU2执行从内存中读取a操作时，也在总线上广播读请求，获知其他CPU缓存中也有缓存数据a之后，CPU2从内存中读取数据a，并将对应的缓存行标记为S。如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/95093600_1657642026.png)    





**5）STEP5：CPU2写**

当CPU2执行写操作a=2时，因为CPU2的缓存行状态为S，所以，它先会往总线上广播invalidate消息，其他CPU接收到invalidate消息之后，会将对应的缓存行状态设置为I（Invalidate），并回复invalidate ack消息给CPU2，CPU2接收到invalidate ack消息之后，再将缓存数据改为2，同步更新到内存中。CPU2的缓存行状态设置为E，因为其他CPU中的数据都失效了，相当于CPU2独享新的数据。如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/74310600_1657642027.png)    





**6）STEP6：CPU0读**

当CPU0执行读操作时，发现缓存中的数据对应的缓存行状态为I，说明缓存中的数据失效了，于是，CPU0广播读请求。对于广播读请求，CPU1不作处理，CPU2将对应缓存行设置为S，然后，CPU0从内存中读取数据，读取之后，将缓存行状态设置为S。如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/38737200_1657642028.png)    





以上的状态转换只是举例，并不完备。实际上，对于真正应用在计算机中的MESI协议，其状态定义并非只有4种这么简单，而是多达数十种，处理过程也异常复杂。这就好比分布式一致性协议，基本思想比较简单，但要实现一个可以应用在项目中的分布一致性协议，就会涉及很多细节需要处理。



### 二、Store Buffer

从上述MESI协议状态转换举例来看，当多个CPU缓存中都有同一数据时，一个CPU对缓存数据进行修改，需要广播invalidate消息，其他CPU收到invalidate消息之后，将对应的缓存行设置为I，然后再发送invalidate ack消息给这个CPU。此时，这个CPU才可以将数据更新写入缓存和内存。



也就是说，为了保证缓存数据的一致性，写操作需要做很多工作，非常耗时。CPU需要等待写入完成，才能执行其他指令。慢速的写操作，直接影响到CPU的执行效率。于是，计算机科学家在CPU和CPU缓存之间，增加了一个类似消息中间件的存储结构，叫做Store Buffer，用来异步执行写操作。如下图所示。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/28718000_1657642029.png)    





CPU将写操作的所有信息存储到Store Buffer之后，就立刻返回执行其他指令了，由Store Buffer来完成剩下的工作，包括发送invalidate消息，接收invalidate ack，写入缓存和内存。引入Store Buffer之后，在读取数据时，CPU会先从Store Buffer中读取，如果读取不到再从缓存中读取。这样就可以保证CPU总是能读取到自己写入的最新值。



### 三、Invalidate Queue

Store Buffer发送给其他CPU invalidate消息之后，需要等待其他CPU设置缓存失效并返回invalidate ack消息，才能执行更新缓存和内存的操作。而其他CPU有可能忙于其他事情，导致来不及设置缓存失效和回复invalidate ack消息，这样写操作便会堆积在Store Buffer中很长时间。



Store Buffer的存储空间很小，当有大量写操作堆积在Store Buffer中等待执行，导致Store Buffer无法存储更多数据时，CPU往Store Buffer中存储新的写操作，便会阻塞等待，此时，Store Buffer便失去了作用。



为了解决这个问题，计算机科学家又引入了一个新的存储结构：Invalidate Queue，专门用来存储invlidate消息和回复invalidate ack消息，并异步执行设置缓存行失效操作。这样就进一步节省了Store Buffer处理写操作的时间，能够让Store Buffer尽快清空。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/6429200_1657642030.png)    





### 四、重审可见性问题

如果没有Store Buffer和Invalidate Queue，那么，缓存一致性协议是可以保证各个CPU缓存之间的数据一致性，也就不会存在可见性问题。但是，当引入Store Buffer和Invalidate Queue来异步执行写操作之后，即便使用缓存一致性协议，但各个CPU缓存之间仍然会存在短暂的数据不一致的情况，也就是会存在短暂的可见性问题，即在短暂的时间窗口内，一个CPU对共享数据的修改，另一个CPU并不能感知。



我们举例讲解。如下所示，CPU0和CPU1均读取了内存中的数据a=1到各自的缓存中，对应的缓存行状态均标记为S（共享）。CPU0执行写入操作a=2，为了提高写入的速度，CPU0将写入操作a=2存储到Store Buffer中后就立刻返回。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/97132200_1657642030.png)    





如果CPU0需要再次读取数据a，那么它会先从自己的Store Buffer中读取，因此，CPU0是可以读取到a的最新值2。但是，如果CPU1需要再次读取数据a，那么它也会先在自己的Store Buffer中查找，发现没有找到，然后再到缓存中查找，于是就读取到了a的旧值1。此时就出现了两个CPU缓存数据的不一致。



接下来，Store Buffer会发送invalidate消息到CPU1的Invalidate Queue。在Invalidate Queue还没有将失效信息更新到CPU1的缓存中前，CPU1仍然不能读到a的最新值2。你可能会说，CPU在读取数据时，会先读取一下Store Buffer，那为什么不也先读一下Invalidate Queue，看一下数据是否有失效呢？这样不就不会读到失效数据了吗？



Store Buffer和Invalidate Queue与CPU的相对物理位置不同。Store Buffer位于CPU和缓存之间，用来临时存储CPU写入缓存的数据。Invaliate Queue位于总线和缓存之间，用来临时存储总线发送过来的失效信息。CPU可以直接跟Store Buffer交互，但不会跟Invalidate Queue直接交互，因此，CPU在从缓存中读取数据之前，会检查Store Buffer是否有最新数据，但不会检查Invalidate Queue是否有失效信息。



再接下来，CPU1的Invalidate Queue根据失效信息，将对应缓存行状态设置为I（失效）。当CPU1读取数据a时，发现缓存行状态为I，就往总线上广播读请求，CPU0接收到读请求之后，会将Store Buffer中的a的最新值2，更新到缓存和内存。CPU1绕过缓存从内存中读取数据，从而就可以读取到最新值2了。



总结一下，在CPU0将写操作写入Store Buffer到Invalidate Queue将缓存行设置为I这之间的一段时间内，CPU0和CPU1读取到的数据是不一致的，也就是，CPU0对数据的更新，对CPU1不可见。不过，这个过程并不会很长，因此，可见性问题也只是短暂存在。



我们再来看下，上上节中讲到可见性问题时，给出的示例代码，如下所示。尽管线程t2对running的修改，不能被线程t1立即可见，但是，这个不可见的时间窗口不会很长，并不会导致线程t1一直while循环不退出。那么到底是什么导致while循环一直不退出的呢？

```
public class Demo30_1 {
  private static boolean running = true;
  private static int count = 0;

  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        while (running) {
          count++;
        }
        System.out.println("count: " + count);
      }
    });

    Thread t2 = new Thread(new Runnable() {
      @Override
      public void run() {
        running = false;
      }
    });
    
    t1.start();
    Thread.sleep(1000); // 1s
    t2.start();
    t1.join();
    t2.join();
  }
}
```

实际上，导致线程t1一直while循环不退出的原因是JIT编译的编译优化。对于热点代码，JIT会将其编译为二进制机器指令，以提高执行效率。在进行JIT编译时，会同步进行一定的编译优化。JIT编译器在编译线程t1中的while循环时，因为探测到running一直为true，所以，对其进行优化，省掉了每次判定running是否为true的逻辑，优化之后的代码大致如下所示。因此，即便线程t2改变了running的值，线程t1也不可能再感知到了。

```
@Override
public void run() {
  while (true) {
    count++;
  }
  System.out.println("count: " + count);
}
```





为了验证以上结论，我们有两种方法，一种是禁止JIT编译来运行代码，发现线程t1顺利结束，并成功打印count值。另一种是将代码中的线程t1.start()和线程t2.start()之间的sleep()语句去掉，发现线程t1也能顺序结束，并成功打印count值。这是因为，去掉sleep()之后，线程t1中的while循环还未被判定为热点代码之前，也就是还未启动JIT编译之前，线程t2就已经将running设置为false，因此，线程t1便可以顺序执行结束。



实际上，如果我们把running定义为volatile，在不禁止JIT编译的情况下，线程t1仍然可以顺利执行结束，这是为什么呢？前面讲到，volatile的中文翻译是“易变的”，当将某个变量定义为volatile之后，编译器是不会对其进行过于激进的编译优化的。因此，在JIT编译时，也就不会将while循环中的running省略掉。

## 思考问题

可见性、有序性、原子性问题出现在哪些场景下？请在对应的场景下标记*号。

|        | 单核单线程 | 多核单线程 | 单核多线程 | 多核多线程 |
| ------ | ---------- | ---------- | ---------- | ---------- |
| 可见性 |            |            |            |            |
| 有序性 |            |            |            |            |
| 原子性 |            |            |            |            |

对于指令重排序问题代码，我们通过给ready变量添加volatile关键字来解决了重排序问题，那么，我们是否可以通过给value变量添加volatile关键字来解决重排序问题呢？

> 

对于可见性问题的示例代码，除了使用volatile、禁止JIT编译，还有哪些方法可以让线程t1顺利执行结束？

>
