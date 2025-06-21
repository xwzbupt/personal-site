---
category: Java

---

# ThreadLocal

::: tip

对于无锁编程，我们已经讲解了CAS、原子类、累加器，本节，我们讲解无锁编程中的最后一个知识点：ThreadLocal。我们知道，共享变量是代码存在线程安全的根本原因之一。在某些特殊的业务场景下，我们可以使用ThreadLocal线程局部变量替代共享变量，以实现在不需要加锁的情况下达到线程安全。

:::

## **一、基本用法**

在Java中，我们可以将变量粗略的划分为两类：类的成员变量和函数内局部变量。对于类的成员变量，当多个线程使用同一个对象时，对象中的成员变量就是共享变量，其作用域范围为多个线程均可见。多个线程竞态访问成员变量，就有可能存在线程安全问题。对于函数内局部变量，每个线程在执行函数时，会在自己的栈上创建私有的局部变量，因此，函数内局部变量的作用域范围为单线程内可见。不仅如此，函数内局部变量仅限函数内可见，不同的函数之间不可以共享局部变量。多个函数共享局部变量，需要通过参数传递的方式来实现。我们举例解释一下。



假设我们现在有这样一个需求：在一个标准的Controller-Service-Repository三层结构的后端系统中，我们希望实现一个简单的调用链追踪功能。每个接口请求所对应的所有日志都附带同一个traceId，这样，我们通过traceId便可以轻松得到一个接口请求的所有日志，方便通过日志查找代码问题。以下是调用链追踪功能的一种实现方式。traceId定义为函数内的局部变量，需要通过参数传递给被调用函数使用。

```
public class UserController {
  private static final Logger logger = 
      LoggerFactory.getLogger(UserController.class);
  private UserService userService = new UserService();

  public long login(String username, String password) {
    // 创建traceId
    String traceId = "[" + System.currentTimeMillis() + "]";
    // 所有的日志都带有traceId
    logger.trace(traceId + " username=" + username);
    //...省略校验逻辑...
    return userService.login(username, password, traceId);//传递traceId
  }
}
```





上述代码存在的问题很明显，我们需要在每个函数中都定义traceId参数，导致非业务代码和业务代码耦合在一起。为了解决这个问题，JUC便提供了ThreadLocal，其作用域范围介于类的成员变量和函数内局部变量之间，它既是线程私有的，又可以在函数之间共享，这样既可以避免线程安全问题，又能避免变量在函数之间不停传递。



ThreadLocal的提供的函数如下所示。其中，set()函数用来将变量值存储在当前线程中，get()函数用来从当前线程中取出变量值。remove()函数用来从当前线程删除变量。initialValue()函数是一个protected方法，可以在子类中重新实现，用于提供变量的初始值。

```
public class ThreadLocal<T> {
    protected T initialValue() { return null; }
    public T get();
    public void set(T value);
    public void remove();
}
```





我们使用ThreadLocal重新实现调用链追踪功能，对应的代码如下所示。我们实现了一个匿名类，继承自ThreadLocal，重写了initialValue()来提供threadLocalTraceId的初始值。如果在调用get()函数之前没有调用set()函数设置threadLocalTraceId的值，ThreadLocal会调用我们提供的initialValue()函数，使用其返回值初始化threadLocalTraceId。对于详细的处理逻辑，我们待会结合源码来讲解。

```
public class Context {
  private static final ThreadLocal<String> threadLocalTraceId = 
      new ThreadLocal<String>() {
    @Override
    protected String initialValue() {
      return "[" + System.currentTimeMillis() + "]";
    }
  };

  public static void setTraceId(String traceId) {
    threadLocalTraceId.set(traceId);
  }

  public static String getTraceId() {
    return threadLocalTraceId.get();
  }

  public static void remove() {
    threadLocalTraceId.remove();
  }
}

public class UserController {
  private static final Logger logger = 
      LoggerFactory.getLogger(UserController.class);
  private UserService userService = new UserService();

  public long login(String username, String password) {
    // 所有的日志都带有traceId
    logger.trace(Context.getTraceId() + " username=" + username);
    //...省略校验逻辑...
    return userService.login(username, password); //通过Context传递traceId
  }
}
```





## **二、实现原理**

很多人对ThreadLocal的用法都感到奇怪，往往会有这样的疑问：使用ThreadLocal定义的一个变量怎么存储多个线程的数据？或者说在类中的定义的ThreadLocal变量如何“分身”到多个线程中使用的？有这样疑问的主要原因是对ThreadLocal的底层实现原理没有了解。为了回答以上疑问，接下来，我们就结合源码来了解一下ThreadLocal的底层实现原理。



ThreadLocal的代码结构如下所示。从如下代码中，我们可以发现，ThreadLocal类只定义了读写数据的方法，并没有定义任何成员变量来存储数据。那么，set()函数写入的数据存储在哪里呢？get()函数又是从哪里读取数据的呢？

```
public class ThreadLocal<T> {
    public ThreadLocal() {}
    protected T initialValue() { return null; }
    public T get() { ... }    
    public void set(T value) { ... }
    public void remove() { ... }
    
    public static class ThreadLocalMap {
      ...
    }
}

public class Thread implements Runnable {
    ...
    ThreadLocal.ThreadLocalMap threadLocals = null;
    ...
}
```





要回答以上问题，我们需要了解ThreadLocal的数据存储结构，如下图所示。从图中，我们可以发现，实际上，数据是存储在线程对应的Thread对象的threadLocals成员变量中的。threadLocals成员变量的类型为ThreadLocalMap。ThreadLocalMap是ThreadLocal的内部类。ThreadLocalMap类似HashMap，也是用来存储键值对，其中，键为ThreadLocal对象，值为Object对象。



![img](http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/29684500_1660748665.png)    





接下来，我们依次讲解一下ThreadLocal中的set()、get()、remove()三个函数的底层实现原理。



**1）set()函数的底层实现原理**

set()函数的源码如下所示。对ThreadLocal的存储结构有了了解之后，我们便很容易看懂set()函数的代码逻辑。对于set()函数的代码逻辑，我在代码中添加了详细的注释，这里就不再赘述了。

```
public void set(T value) {
    Thread t = Thread.currentThread(); //获取当前线程对应的Thread对象
    ThreadLocalMap map = getMap(t); //获取Thread对象的threadLocals成员变量
    if (map != null) map.set(this, value); //threadLocals不为空，则添加键值对
    else createMap(t, value); //threadLocals为空，则先创建再添加
}

ThreadLocalMap getMap(Thread t) {
    return t.threadLocals;
}

void createMap(Thread t, T firstValue) {
    t.threadLocals = new ThreadLocalMap(this, firstValue);
}
```





**2）get()函数的底层实现原理**

get()函数的源码如下所示。get()函数的逻辑也比较简单。我们先获取当前线程的threadLocals成员变量。如果threadLocals不为null，那么，我们在threadLocals中查找当前操作的ThreadLocal变量对应的数据值。如果查找到对应的数据值，则直接返回。如果threadLocals为null，或者没有查找threadLocal变量对应的数据值，则调用initialValue()方法获取到threadLocal变量的初始值，创建threadLocals并添加键值对（threadLocal变量和初始值）。

```
public T get() {
    Thread t = Thread.currentThread(); //获取当前线程对应的Thread对象
    ThreadLocalMap map = getMap(t); //获取Thread对象的threadLocals成员变量
    if (map != null) {
        ThreadLocalMap.Entry e = map.getEntry(this); //this是ThreadLocal变量
        if (e != null) {
            @SuppressWarnings("unchecked")
            T result = (T)e.value;
            return result; //获取到对应的数据值
        }
    }
    //要么map为null，要么没有获取到对应的数据值，执行初始化操作
    return setInitialValue();
}

private T setInitialValue() {
    T value = initialValue(); //默认返回null，但可重新实现此函数，见上述Context示例
    Thread t = Thread.currentThread();
    ThreadLocalMap map = getMap(t);
    if (map != null) map.set(this, value); //添加键值对
    else createMap(t, value); //创建threadLocals
    return value;
}
```





**3）remove()函数的底层实现原理**

remove()函数的源码如下所示，相对来说，更加简单。对其代码逻辑，我们就不再赘述了。

```
 public void remove() {
     ThreadLocalMap m = getMap(Thread.currentThread());
     if (m != null) m.remove(this);
 }
```





## **三、应用场景**

前面我们讲到的ReentrantReadWriteLock，其底层实现也用到了ThreadLocal。我们一块回忆一下。对于ReentrantReadWriteLock，AQS中的state同时存储写锁和读锁的加锁情况。state的低16位存储写锁的加锁情况，值为0表示没有加写锁，值为1表示已加写锁，值大于1表示写锁的重入次数。state的高16位存储读锁的加锁情况，值为0表示没有加读锁，值为1表示已加读锁，不过，值大于1并不表示读锁的重入次数，而是表示读锁总共被获取了多少次（每个线程对读锁重入的次数相加），此值用来最终解锁读锁。而每个线程对读锁的重入次数是有用信息，只有重入次数大于0时，线程才可以继续重入。那么，重入次数在哪里记录呢？因为重入次数是跟每个线程相关的数据，所以，我们就可以使用ThreadLocal变量来存储它。对应的源码如下所示。

```
//以下代码位于ReentrantReadWriteLock.java中
static final class HoldCounter {
    int count = 0;
    final long tid = getThreadId(Thread.currentThread());
}

static final class ThreadLocalHoldCounter extends ThreadLocal<HoldCounter> {
    public HoldCounter initialValue() {
        return new HoldCounter();
    }
}

private transient ThreadLocalHoldCounter readHolds;
```





## **四、课后思考题**

在本节的示例中，我们使用时间戳来生成traceId，如果我们更改traceId的生成方式，使用自增的方式生成traceId，如下代码所示，那么，请问下面的代码是否是线程安全的？如果不是，应该如何修改才能保证其线程安全性？

```
public class Context {
  private static int id = 0;
  private static final ThreadLocal<String> threadLocalTraceId = 
      new ThreadLocal<String>() {
    @Override
    protected String initialValue() {
      id++;
      return String.valueOf(id);    }
  };

  public static void setTraceId(String traceId) {
    threadLocalTraceId.set(traceId);
  }

  public static String getTraceId() {
    return threadLocalTraceId.get();
  }

  public static void remove() {
    threadLocalTraceId.remove();
  }
}
```