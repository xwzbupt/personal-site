import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as l,f as i}from"./app.f62a8256.js";const d={},s=i(`<h1 id="\u7D2F\u52A0\u5668" tabindex="-1"><a class="header-anchor" href="#\u7D2F\u52A0\u5668" aria-hidden="true">#</a> <strong>\u7D2F\u52A0\u5668</strong></h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>\u5982\u4F55\u4F7F\u7528\u6570\u636E\u5206\u7247\u3001\u54C8\u5E0C\u4F18\u5316\u3001\u53BB\u4F2A\u5171\u4EAB\u63D0\u9AD8\u7D2F\u52A0\u5668\u6027\u80FD\uFF1F</strong></p></div><p>\u524D\u9762\u51E0\u8282\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\u9501\u3001\u81EA\u65CB+CAS\u3001\u539F\u5B50\u7C7B\u3002\u5BF9\u4E8E\u5982\u4E0B\u4EE3\u7801\uFF0C\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u5C06\u5176\u6539\u9020\u6210\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u90A3\u4E48\u8BE5\u5982\u4F55\u6765\u505A\u5462\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Counter {
  private long sum;

  public long get() {
    return sum;
  }

  public void add(long value) {
    sum += value;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u8BA9\u4EE5\u4E0A\u4EE3\u7801\u7EBF\u7A0B\u5B89\u5168\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5BF9add()\u51FD\u6570\u8FDB\u884C\u5904\u7406\u3002\u5BF9\u4E8Eadd()\u51FD\u6570\uFF0C\u7B2C\u4E00\u79CD\u7EBF\u7A0B\u5B89\u5168\u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\uFF1A\u5BF9add()\u51FD\u6570\u52A0\u9501\uFF0C\u4F46\u662F\u52A0\u9501\u4F1A\u5F71\u54CD\u7A0B\u5E8F\u672C\u8EAB\u7684\u6027\u80FD\u3002\u7B2C\u4E8C\u79CD\u7EBF\u7A0B\u5B89\u5168\u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\uFF1A\u4F7F\u7528\u81EA\u65CB+CAS\u7684\u65B9\u5F0F\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u52A0\u9501\uFF0C\u5728\u4F4E\u5E76\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u7684\u6027\u80FD\u8FDC\u4F18\u4E8E\u52A0\u9501\uFF0C\u4F46\u662F\uFF0C\u4ECE\u96F6\u5B9E\u73B0\u81EA\u65CB+CAS\uFF0C\u9700\u8981\u7528\u5230Unsafe\u7C7B\uFF0C\u98CE\u9669\u6BD4\u8F83\u5927\u4E14\u7F16\u7A0B\u590D\u6742\u3002\u7B2C\u4E09\u79CD\u7EBF\u7A0B\u5B89\u5168\u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\uFF1A\u76F4\u63A5\u4F7F\u7528\u5C01\u88C5\u4E86\u81EA\u65CB+CAS\u7684\u539F\u5B50\u7C7B\uFF0C\u76F8\u5BF9\u4E8E\u7B2C\u4E8C\u79CD\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u7F16\u7A0B\u5B9E\u73B0\u7B80\u5355\u4E86\u8BB8\u591A\u3002\u8FD9\u4E09\u79CD\u5B9E\u73B0\u65B9\u5F0F\u5BF9\u5E94\u7684\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7EBF\u7A0B\u5B89\u5168\u5B9E\u73B0\u65B9\u5F0F\u4E00\uFF1A\u52A0\u9501
public void add_lock(long value) {
  synchronized (this) {
    sum += value;
  }
}

// \u7EBF\u7A0B\u5B89\u5168\u5B9E\u73B0\u65B9\u5F0F\u4E8C\uFF1A\u81EA\u65CB+CAS
private static final Unsafe unsafe = Unsafe.getUnsafe();
private static final long sumOffset;
static {
  try {
    sumOffset = unsafe.objectFieldOffset
      (Counter.class.getDeclaredField(&quot;sum&quot;));
  } catch (Exception ex) { throw new Error(ex); }
}

public void add_cas(long value) {
  boolean succeeded = false;
  while (!succeeded) {
    long oldValue = sum;
    succeeded = unsafe.compareAndSwapLong(
        this, sumOffset, oldValue, oldValue+value);
  }
}

// \u7EBF\u7A0B\u5B89\u5168\u5B9E\u73B0\u65B9\u5F0F\u4E09\uFF1A\u539F\u5B50\u7C7B
private AtomicLong atomicSum = new AtomicLong(); //\u66FF\u4EE3sum\u6210\u5458\u53D8\u91CF
public void add_atomic(int value) {
  atomicSum.addAndGet(value);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\uFF0C\u9488\u5BF9\u7D2F\u52A0\u8FD9\u79CD\u7279\u6B8A\u7684\u4E1A\u52A1\u573A\u666F\uFF0CJUC\u63D0\u4F9B\u4E86\u4E13\u95E8\u7684LongAdder\u7D2F\u52A0\u5668\uFF0C\u5B83\u6BD4AtomicLong\u539F\u5B50\u7C7B\u6027\u80FD\u66F4\u9AD8\u3002\u5728\u9AD8\u5E76\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0C\u591A\u7EBF\u7A0B\u540C\u65F6\u6267\u884Cadd()\u51FD\u6570\uFF0CAtomicLong\u4F1A\u56E0\u4E3A\u5927\u91CF\u7EBF\u7A0B\u4E0D\u65AD\u81EA\u65CB\u800C\u6027\u80FD\u4E0B\u964D\uFF0CLongAdder\u5374\u53EF\u4EE5\u6301\u7EED\u4FDD\u6301\u9AD8\u6027\u80FD\u3002\u90A3\u4E48\uFF0C\u5982\u6B64\u9AD8\u6027\u80FD\uFF0CLongAdder\u662F\u5982\u4F55\u505A\u5230\u7684\u5462\uFF1F\u672C\u8282\uFF0C\u6211\u4EEC\u5C31\u6765\u8BB2\u4E00\u8BB2LongAdder\u7D2F\u52A0\u5668\u7684\u7528\u6CD5\u53CA\u5176\u5B9E\u73B0\u539F\u7406\u3002</p><h2 id="\u4E00\u3001\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> <strong>\u4E00\u3001\u57FA\u672C\u7528\u6CD5</strong></h2><p>LongAdder\u5728JDK8\u4E2D\u5F15\u5165\uFF0C\u529F\u80FD\u975E\u5E38\u4E13\u7CBE\u5C16\uFF0C\u7528\u6765\u5B9E\u73B0\u7EBF\u7A0B\u5B89\u5168\u7684\u9AD8\u6027\u80FD\u7D2F\u52A0\u64CD\u4F5C\u3002LongAdder\u4E2D\u5305\u542B\u7684\u4E3B\u8981\u51FD\u6570\u6709\u4E24\u4E2A\uFF1Aadd()\u51FD\u6570\u548Csum()\u51FD\u6570\u3002add()\u51FD\u6570\u7528\u6765\u7D2F\u52A0\uFF0Csum()\u51FD\u6570\u7528\u6765\u8FD4\u56DE\u7D2F\u52A0\u4E4B\u540E\u7684\u603B\u548C\u3002</p><p>\u6211\u4EEC\u4F7F\u7528LongAdder\u5BF9Counter\u7C7B\u8FDB\u884C\u6539\u9020\uFF0C\u4EE5\u4FDD\u8BC1\u5176\u7EBF\u7A0B\u5B89\u5168\uFF0C\u6539\u9020\u4E4B\u540E\u7684\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u9AD8\u5E76\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0Csum()\u51FD\u6570\u5E76\u4E0D\u80FD\u8FD4\u56DE\u7CBE\u786E\u7684\u7D2F\u52A0\u503C\uFF0C\u8FD9\u4E5F\u662F\u5176\u4E3A\u4E86\u5B9E\u73B0\u9AD8\u6027\u80FD\u6240\u4ED8\u51FA\u7684\u4EE3\u4EF7\u3002\u4E5F\u6B63\u56E0\u5982\u6B64\uFF0CLongAdder\u4E00\u822C\u4EC5\u9650\u7528\u4E8E\u5BF9\u7D2F\u52A0\u503C\u7684\u7CBE\u786E\u6027\u8981\u6C42\u4E0D\u9AD8\u7684\u573A\u5408\uFF0C\u6BD4\u5982\u5E94\u7528\u4E8E\u6570\u636E\u7EDF\u8BA1\u4E2D\u3002\u81F3\u4E8Esum()\u51FD\u6570\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u8FD4\u56DE\u7CBE\u786E\u503C\uFF0C\u6211\u4EEC\u7A0D\u540E\u8BB2\u89E3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class CounterLongAdder {
  private LongAdder ladder = new LongAdder();
  
  public void add(long value) {
    ladder.add(value);
  }
  
  public long get() {
    return ladder.sum();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LongAdder\u7684\u4F7F\u7528\u65B9\u6CD5\u975E\u5E38\u7B80\u5355\uFF0C\u4F46\u5176\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u5374\u6BD4\u8F83\u590D\u6742\u3002\u4E3A\u4E86\u5B9E\u73B0\u9AD8\u6027\u80FD\u7D2F\u52A0\uFF0CLongAdder\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u6D89\u53CA\u6570\u636E\u5206\u7247\u3001\u54C8\u5E0C\u4F18\u5316\u3001\u53BB\u4F2A\u5171\u4EAB\u3001\u975E\u7CBE\u786E\u6C42\u548C\u7B49\u5404\u79CD\u4F18\u5316\u624B\u6BB5\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u4E00\u4E00\u8BB2\u89E3\u4E00\u4E0B\u5B83\u4EEC\u3002</p><h2 id="\u4E8C\u3001\u6570\u636E\u5206\u7247" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6570\u636E\u5206\u7247" aria-hidden="true">#</a> <strong>\u4E8C\u3001\u6570\u636E\u5206\u7247</strong></h2><p>\u5728\u9AD8\u5E76\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0CAtomicLong\u6027\u80FD\u4E0D\u9AD8\u7684\u4E3B\u8981\u539F\u56E0\u662F\uFF0C\u591A\u7EBF\u7A0B\u540C\u65F6CAS\u66F4\u65B0\u4E00\u4E2A\u53D8\u91CF\uFF08\u7D2F\u52A0\u53D8\u91CF\uFF09\u3002\u76F8\u6BD4\u4E8EAtomicLong\uFF0C\u5728\u9AD8\u5E76\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0CLongAdder\u7684\u7D2F\u52A0\u64CD\u4F5C\u4F9D\u7136\u53EF\u4EE5\u4FDD\u6301\u9AD8\u6027\u80FD\uFF0C\u8FD9\u4E3B\u8981\u5F52\u529F\u4E8E\u6570\u636E\u5206\u7247\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF0CLongAdder\u5C06\u4E00\u4E2A\u7D2F\u52A0\u53D8\u91CF\u5206\u89E3\u4E3A\u591A\u4E2A\u7D2F\u52A0\u53D8\u91CF\uFF0C\u591A\u7EBF\u7A0B\u540C\u65F6\u6267\u884C\u7D2F\u52A0\u64CD\u4F5C\u65F6\uFF0C\u4E0D\u540C\u7684\u7EBF\u7A0B\u5BF9\u4E0D\u540C\u7684\u7D2F\u52A0\u53D8\u91CF\u8FDB\u884C\u64CD\u4F5C\uFF0C\u7EBF\u7A0B\u4E4B\u95F4\u4E92\u4E0D\u5F71\u54CD\uFF0C\u8FD9\u6837\u5C31\u907F\u514D\u4E86\u4E00\u4E2A\u7EBF\u7A0B\u9700\u8981\u7B49\u5F85\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u64CD\u4F5C\u5B8C\u6210\u4E4B\u540E\u518D\u64CD\u4F5C\u3002\u5F53\u8C03\u7528LongAdder\u4E0A\u7684sum()\u51FD\u6570\u65F6\uFF0CLongAdder\u5C06\u591A\u4E2A\u7D2F\u52A0\u503C\u76F8\u52A0\uFF0C\u4FBF\u53EF\u4EE5\u5F97\u5230\u6700\u7EC8\u7684\u7D2F\u52A0\u503C\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/26646700_1659888457.png" alt="img" loading="lazy"></p><p>\u5F53\u7136\uFF0C\u4EE5\u4E0A\u53EA\u662F\u57FA\u672C\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u5728\u5177\u4F53\u7684\u4EE3\u7801\u5B9E\u73B0\u4E2D\uFF0CLongAdder\u8FD8\u5305\u542B\u5F88\u591A\u7EC6\u8282\u4F18\u5316\u3002\u6211\u4EEC\u7ED3\u5408LongAdder\u7684\u6E90\u7801\uFF0C\u6765\u770B\u4E0B\u7D2F\u52A0\u64CD\u4F5C\u7684\u4E3B\u8981\u5904\u7406\u6D41\u7A0B\u3002LongAdder\u4E2D\u7684\u90E8\u5206\u6E90\u7801\u5982\u4E0B\u6240\u793A\u3002\u4EE5\u4E0B\u6E90\u7801\u5305\u542BLongAdder\u7C7B\u4E2D\u7684\u6838\u5FC3\u7684\u6210\u5458\u53D8\u91CF\u548C\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class LongAdder extends Striped64 {
    public LongAdder() {}
    public void add(long x) { ... }
    public long sum() { ... }
}

abstract class Striped64 extends Number {
    static final int NCPU = Runtime.getRuntime().availableProcessors();
    transient volatile Cell[] cells;
    transient volatile long base;
    transient volatile int cellsBusy;
    
    //LongAdder\u4E2Dadd()\u51FD\u6570\u7684\u5B9E\u73B0\u4F9D\u8D56\u4E8EStriped64\u4E2D\u7684longAccumulate()\u51FD\u6570
    final void longAccumulate(long x, LongBinaryOperator fn,
                              boolean wasUncontended) { ... }
    
    @sun.misc.Contended static final class Cell {
        volatile long value;
        Cell(long x) { value = x; }
        
        // \u4EE5\u4E0B\u662F\u5B9E\u73B0value\u7684CAS\u51FD\u6570
        private static final sun.misc.Unsafe UNSAFE;
        private static final long valueOffset;
        static {
            try {
                UNSAFE = sun.misc.Unsafe.getUnsafe();
                valueOffset = UNSAFE.objectFieldOffset(
                                        Cell.class.getDeclaredField(&quot;value&quot;));
            } catch (Exception e) { throw new Error(e);}
        }

        final boolean cas(long cmp, long val) {
            return UNSAFE.compareAndSwapLong(this, valueOffset, cmp, val);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4EE5\u4E0A\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0CLongAdder\u4E2D\u4E0D\u5305\u542B\u4EFB\u4F55\u6210\u5458\u53D8\u91CF\uFF0C\u6210\u5458\u53D8\u91CF\u5B8C\u5168\u7EE7\u627F\u81EAStriped64\u3002\u6211\u4EEC\u5148\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u8FD9\u51E0\u4E2A\u6210\u5458\u53D8\u91CF\u3002\u5982\u4E0B\u6240\u793A\u3002</p><p><strong>1\uFF09cells</strong></p><p>cells\u6570\u7EC4\u4FDD\u5B58\u591A\u4E2A\u7D2F\u52A0\u53D8\u91CF\u3002Cell\u672C\u8EAB\u7684\u5B9A\u4E49\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u5305\u542B\u4E00\u4E2A\u6210\u5458\u53D8\u91CFvalue\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u64CD\u4F5Cvalue\u7684cas()\u51FD\u6570\u3002\u4E3A\u4E86\u8282\u7701\u7A7A\u95F4\uFF0Ccells\u6570\u7EC4\u652F\u6301\u52A8\u6001\u6269\u5BB9\uFF0C\u5E76\u4E14\uFF0C\u6700\u5F00\u59CB\u521D\u59CB\u5316\u4E3Anull\uFF0C\u53EA\u6709\u7B2C\u4E00\u6B21\u51FA\u73B0\u7EBF\u7A0B\u7ADE\u4E89\u6267\u884Cadd()\u51FD\u6570\u65F6\uFF0Ccells\u6570\u7EC4\u624D\u4F1A\u88AB\u521B\u5EFA\u3002</p><p><strong>2\uFF09NCPU</strong></p><p>NCPU\u8868\u793AJVM\u6700\u5927\u53EF\u7528CPU\u6838\u6570\u3002cells\u6570\u7EC4\u7684\u957F\u5EA6\u5FC5\u987B\u662F2\u7684\u5E42\u6B21\u65B9\uFF0C\u6BCF\u6B21\u6269\u5BB9\u90FD\u4F1A\u589E\u52A0\u4E3A\u539F\u6765\u6570\u7EC4\u957F\u5EA6\u76842\u500D\u3002\u5F53cells\u6570\u7EC4\u957F\u5EA6\u4E3A\u5927\u4E8E\u7B49\u4E8ENCPU\u7684\u6700\u5C0F2\u7684\u5E42\u6B21\u65B9\u65F6\uFF08\u6BD4\u5982\uFF0C\u5982\u679CNCPU\u4E3A6\uFF0C\u90A3\u4E48cells\u6570\u7EC4\u6700\u5927\u957F\u5EA6\u4E3A8\uFF09\uFF0Ccells\u6570\u7EC4\u5C31\u4E0D\u518D\u6269\u5BB9\u4E86\u3002cells\u6570\u7EC4\u7684\u957F\u5EA6\u4E4B\u6240\u4EE5\u8981\u6C42\u662F2\u7684\u5E42\u6B21\u65B9\uFF0C\u8DDFHashMap\u4E2D\u6570\u7EC4\u7684\u957F\u5EA6\u662F2\u7684\u5E42\u6B21\u65B9\u7684\u539F\u56E0\u76F8\u540C\uFF0C\u90FD\u662F\u4E3A\u4E86\u5FEB\u901F\u6C42\u6A21\uFF08\u6C42\u6A21\u7684\u4F7F\u7528\u573A\u666F\u5F85\u4F1A\u4F1A\u8BB2\u5230\uFF09\u3002\u5EFA\u8BAE\u4F60\u56DE\u8FC7\u5934\u53BB\u770B\u4E0B\u7B2C13\u8282\u3002\u4E4B\u6240\u4EE5cells\u6570\u7EC4\u7684\u957F\u5EA6\u5927\u4E8E\u7B49\u4E8ENCPU\u4E4B\u540E\u5C31\u4E0D\u518D\u6269\u5BB9\uFF0C\u662F\u56E0\u4E3A\u540C\u65F6\u6267\u884C\u7D2F\u52A0\u64CD\u4F5C\u7684\u7EBF\u7A0B\u6570\u4E0D\u53EF\u80FD\u5927\u4E8ECPU\u7684\u6838\u6570\u3002\u5F53cells\u6570\u7EC4\u7684\u957F\u5EA6\u5927\u4E8E\u7B49\u4E8ENCPU\u65F6\uFF0Ccells\u6570\u7EC4\u4E2D\u7684\u7D2F\u52A0\u53D8\u91CF\u4E2A\u6570\uFF0C\u4FBF\u53EF\u4EE5\u6EE1\u8DB3\u6700\u5927NCPU\u4E2A\u7EBF\u7A0B\u540C\u65F6\u4E92\u4E0D\u5E72\u6D89\u5730\u6267\u884C\u7D2F\u52A0\u64CD\u4F5C\u3002</p><p><strong>3\uFF09base</strong></p><p>base\u662F\u4E00\u4E2A\u6BD4\u8F83\u7279\u6B8A\u7684\u7D2F\u52A0\u53D8\u91CF\u3002\u5F53\u7EBF\u7A0B\u6267\u884Cadd()\u51FD\u6570\u65F6\uFF0C\u9996\u5148\u5C1D\u8BD5CAS\u66F4\u65B0base\uFF08\u5C06\u65B0\u589E\u503C\u7D2F\u52A0\u5230base\u4E0A\uFF09\uFF0C\u5982\u679C\u6210\u529F\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5982\u679C\u5931\u8D25\uFF0C\u518D\u6267\u884C\u5206\u7247\u7D2F\u52A0\u7684\u903B\u8F91\uFF08\u5C06\u65B0\u589E\u503C\u7D2F\u52A0\u5230cells\u6570\u7EC4\u4E2D\uFF09\u3002\u5728\u4F4E\u5E76\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528base\u53EF\u4EE5\u6709\u6548\u907F\u514D\u6267\u884C\u590D\u6742\u7684\u5206\u7247\u7D2F\u52A0\u903B\u8F91\u3002</p><p><strong>4\uFF09cellBusy</strong></p><p>cellBusy\u7528\u6765\u5B9E\u73B0\u9501\uFF0C\u7C7B\u4F3CReetrantLock\u4E2D\u7684state\u5B57\u6BB5\uFF0CcellBusy\u521D\u59CB\u5316\u4E3A0\uFF0C\u591A\u4E2A\u7EBF\u7A0B\u901A\u8FC7CAS\u7ADE\u4E89\u66F4\u65B0cellBusy\uFF0C\u8C01\u5148\u5C06cellBusy\u8BBE\u7F6E\u4E3A1\uFF0C\u8C01\u5C31\u6301\u6709\u4E86\u8FD9\u628A\u9501\u3002\u8FD9\u628A\u9501\u7528\u6765\u907F\u514D\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u521B\u5EFAcells\u6570\u7EC4\uFF08Cell[] cells = new Cell[n];\uFF09\u3001\u521B\u5EFAcells\u6570\u7EC4\u4E2D\u7684Cell\u5BF9\u8C61(cells[i] = new Cell()\u{1F609}\u3001\u4EE5\u53CA\u5BF9cells\u6570\u7EC4\u8FDB\u884C\u52A8\u6001\u6269\u5BB9\uFF0C\u4FDD\u8BC1\u8FD9\u4E09\u4E2A\u64CD\u4F5C\u7684\u7EBF\u7A0B\u5B89\u5168\u6027\u3002</p><p>\u5BF9\u6838\u5FC3\u6210\u5458\u53D8\u91CF\u6709\u4E86\u7B80\u5355\u4E86\u89E3\u4E4B\u540E\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u4E0BLongAdder\u7684\u7D2F\u52A0\u8FC7\u7A0B\uFF0C\u5BF9\u5E94\u7684\u6E90\u7801\u5982\u4E0B\u6240\u793A\u3002\u4E3A\u4E86\u5C55\u793A\u57FA\u672C\u5B9E\u73B0\u539F\u7406\uFF0C\u907F\u514D\u8FC7\u591A\u7684\u5B9E\u73B0\u7EC6\u8282\u7684\u5E72\u6270\uFF0C\u6211\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E86\u7A0D\u8BB8\u8C03\u6574\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F4D\u4E8ELongAdder.java
public void add(long x) {
    Cell[] as; long b, v; int m; Cell a;
    if (!casBase(b = base, b + x)) {
        boolean uncontended = true;
        if (as == null || (m = as.length - 1) &lt; 0 ||
            (a = as[getProbe() &amp; m]) == null ||
            !(uncontended = a.cas(v = a.value, v + x)))
            longAccumulate(x, null, uncontended);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u975E\u5E38\u7B80\u6D01\uFF0C\u53EF\u8BFB\u6027\u6709\u70B9\u5DEE\u3002\u6211\u4EEC\u5BF9\u4E0A\u8FF0\u4EE3\u7801\u903B\u8F91\u505A\u4E86\u68B3\u7406\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002\u5176\u4E2D\uFF0CgetProbe()\u4E3A\u54C8\u5E0C\u51FD\u6570\uFF08\u6B64\u54C8\u5E0C\u51FD\u6570\u7684\u5B9E\u73B0\u539F\u7406\u7A0D\u540E\u8BB2\u89E3\uFF09\uFF0C\u8FD4\u56DE\u5F53\u524D\u7EBF\u7A0B\u5BF9\u5E94\u7684\u54C8\u5E0C\u503C\u3002\u56E0\u4E3Acells\u6570\u7EC4\u957F\u5EA6n\u4E3A2\u7684\u5E42\u6B21\u65B9\uFF0C\u6240\u4EE5\uFF0CgetProbe()&amp;m\uFF08m\u7B49\u4E8En-1\uFF09\u5C31\u76F8\u5F53\u4E8EgetProbe()%n\uFF08\u5173\u4E8E\u8FD9\u4E00\u70B9\uFF0C\u8BF7\u53C2\u770B\u7B2C13\u8282HashMap\u5E95\u5C42\u539F\u7406\u7684\u8BB2\u89E3\uFF09\uFF0C\u56E0\u4E3A\u4F4D\u8FD0\u7B97\u6BD4\u53D6\u6A21\u8FD0\u7B97\u6548\u7387\u8981\u9AD8\uFF0C\u56E0\u6B64\uFF0CgetProb()&amp;m\u8981\u6BD4getProbe()%n\u7684\u6267\u884C\u6548\u7387\u9AD8\u3002getProbe()&amp;m\u5F97\u5230\u7684\u662F\u5F53\u524D\u7EBF\u7A0B\u5E94\u8BE5\u66F4\u65B0\u7684\u7D2F\u52A0\u53D8\u91CF\u5728cells\u6570\u7EC4\u4E2D\u7684\u4E0B\u6807\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679CgetProbe()&amp;m\u7B49\u4E8Ek\uFF0C\u90A3\u4E48\uFF0C\u5F53\u524D\u7EBF\u7A0B\u4F1A\u901A\u8FC7CAS\u5C06\u65B0\u589E\u503Cx\u7D2F\u52A0\u5230cells[k]\u7684value\u53D8\u91CF\u4E0A\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/20055200_1659888458.png" alt="img" loading="lazy"></p><p>\u4ECE\u4EE5\u4E0A\u4EE3\u7801\u903B\u8F91\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u53EA\u6709\u5F53\u7EBF\u7A0B\u6267\u884Ccas\u6210\u529F\u66F4\u65B0base\uFF0C\u6216\u8005\u6267\u884Ccas\u6210\u529F\u66F4\u65B0cells\u6570\u7EC4\u4E2D\u7684\u7D2F\u52A0\u53D8\u91CF\u65F6\uFF0Cadd()\u51FD\u6570\u624D\u4F1A\u76F4\u63A5\u8FD4\u56DE\u3002\u5426\u5219\uFF0C\u7EBF\u7A0B\u4F1A\u8FDB\u5165Striped64\u7C7B\u4E2D\u7684longAccumulate()\u51FD\u6570\u7EE7\u7EED\u6267\u884C\u3002\u8FDB\u5165longAccumulate()\u51FD\u6570\u4E3B\u8981\u5BF9\u5E94\u4E09\u79CD\u60C5\u51B5\uFF1Acells\u4E3A\u7A7A\uFF1B\u7EBF\u7A0B\u8981\u66F4\u65B0\u7684cells\u4E2D\u7684Cell\u5BF9\u8C61\u4E3Anull\uFF1Bcas\u66F4\u65B0cells\u4E2D\u7684Cell\u5BF9\u8C61\u7684value\u503C\u5931\u8D25\u3002longAccumulate()\u51FD\u6570\u7684\u4EE3\u7801\u6BD4\u8F83\u957F\uFF0C\u6D89\u53CA\u6BD4\u8F83\u591A\u7684\u5B9E\u73B0\u7EC6\u8282\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u5B83\u7684\u6838\u5FC3\u903B\u8F91\uFF0C\u5177\u4F53\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u5176\u4E2D\u4E3B\u8981\u5305\u542B4\u90E8\u5206\u903B\u8F91\uFF1A\u521B\u5EFAcells\u6570\u7EC4\u3001\u521B\u5EFAcells\u6570\u7EC4\u4E2D\u7684Cell\u5BF9\u8C61\u3001cells\u6570\u7EC4\u6269\u5BB9\u3001cas\u6267\u884Ccells\u6570\u7EC4\u4E0A\u7684\u7D2F\u52A0\u64CD\u4F5C\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/92894600_1659888458.png" alt="img" loading="lazy"></p><h2 id="\u4E09\u3001\u54C8\u5E0C\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u54C8\u5E0C\u4F18\u5316" aria-hidden="true">#</a> <strong>\u4E09\u3001\u54C8\u5E0C\u4F18\u5316</strong></h2><p>\u4ECE\u4E0A\u8FF0\u4EE3\u7801\u903B\u8F91\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u4EE3\u7801\u7684\u6267\u884C\u8FC7\u7A0B\uFF0C\u4F1A\u9891\u7E41\u7528\u5230\u54C8\u5E0C\u51FD\u6570\uFF08\u4E0A\u56FE\u4E2D\u51FA\u73B0h\u7684\u5730\u65B9\uFF09\u3002\u56E0\u6B64\uFF0C\u54C8\u5E0C\u51FD\u6570\u7684\u6267\u884C\u6548\u7387\u4E25\u91CD\u5F71\u54CDLongAdder\u7684\u6267\u884C\u6548\u7387\u3002\u56E0\u6B64\uFF0CLongAdder\u5BF9\u54C8\u5E0C\u51FD\u6570\u8FDB\u884C\u4E86\u4E00\u4E9B\u6027\u80FD\u4F18\u5316\u3002</p><p>\u5F53\u7EBF\u7A0B\u901A\u8FC7cas\u5C06\u65B0\u589E\u503C\u7D2F\u52A0base\u5931\u8D25\u65F6\uFF0C\u7EBF\u7A0B\u4F1A\u901A\u8FC7cas\u5C06\u65B0\u589E\u503C\u7D2F\u52A0cells\u6570\u7EC4\u4E2D\uFF0C\u90A3\u4E48\uFF0C\u5230\u5E95\u7D2F\u52A0\u5230cells\u6570\u7EC4\u4E2D\u54EA\u4E2ACell\u5BF9\u8C61\u4E0A\u5462\uFF1F\u524D\u9762\u63D0\u5230\uFF0C\u5BF9\u5E94Cell\u5BF9\u8C61\u7684\u4E0B\u6807\u901A\u8FC7getProbe()%n\u516C\u5F0F\u6765\u8BA1\u7B97\u5F97\u5230\u3002\u5176\u4E2D\uFF0Cn\u8868\u793Acells\u6570\u7EC4\u7684\u957F\u5EA6\uFF0CgetProbe()\u662F\u54C8\u5E0C\u51FD\u6570\u3002\u56E0\u4E3An\u4E3A2\u7684\u5E42\u6B21\u65B9\uFF0C\u56E0\u6B64getProbe()%n\u53EF\u4EE5\u8F6C\u5316\u4E3AgetProbe()&amp;(n-1)\uFF0C\u4EE5\u63D0\u9AD8\u8BA1\u7B97\u901F\u5EA6\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u54C8\u5E0C\u51FD\u6570\u8BA1\u7B97\u5F97\u5230\u7684\u54C8\u5E0C\u503C\uFF0C\u4F1A\u4FDD\u5B58\u5728\u7EBF\u7A0B\u5BF9\u5E94\u7684Thread\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\u4E2D\uFF0C\u4E4B\u540E\u4FBF\u53EF\u4EE5\u4E00\u76F4\u91CD\u590D\u4F7F\u7528\uFF0C\u9664\u975E\u53D1\u751F\u51B2\u7A81\uFF0C\u4E24\u4E2A\u7EBF\u7A0B\u540C\u65F6\u6267\u884Ccas\u66F4\u65B0\u540C\u4E00\u4E2ACell\u5BF9\u8C61\uFF0C\u6267\u884Ccas\u5931\u8D25\u7684\u7EBF\u7A0B\u4F1A\u91CD\u65B0\u751F\u6210\u65B0\u7684\u54C8\u5E0C\u503C\uFF0C\u5E76\u540C\u6B65\u66F4\u65B0\u5230\u5BF9\u5E94\u7684Thread\u5BF9\u8C61\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u76F4\u63A5\u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B\u5BF9\u5E94\u7684Thread\u5BF9\u8C61\u7684PROBE\u6210\u5458\u53D8\u91CF\u503C
static final int getProbe() {
    return UNSAFE.getInt(Thread.currentThread(), PROBE);
}

//\u57FA\u4E8E\u8001\u7684\u54C8\u5E0C\u503Cprobe\u91CD\u65B0\u8BA1\u7B97\u65B0\u7684\u54C8\u5E0C\u503C\uFF0C\u5E76\u5B58\u50A8\u5230\u5F53\u524D\u7EBF\u7A0B\u5BF9\u5E94\u7684Thread\u5BF9\u8C61\u7684PROBE\u6210\u5458\u53D8\u91CF\u4E2D
static final int advanceProbe(int probe) {
    probe ^= probe &lt;&lt; 13;   // xorshift
    probe ^= probe &gt;&gt;&gt; 17;
    probe ^= probe &lt;&lt; 5;
    UNSAFE.putInt(Thread.currentThread(), PROBE, probe);
    return probe;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001\u53BB\u4F2A\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u53BB\u4F2A\u5171\u4EAB" aria-hidden="true">#</a> <strong>\u56DB\u3001\u53BB\u4F2A\u5171\u4EAB</strong></h2><p>\u7EC6\u5FC3\u7684\u8BFB\u8005\u53EF\u80FD\u5DF2\u7ECF\u53D1\u73B0\uFF0CCell\u7C7B\u5B9A\u4E49\u7684\u524D\u9762\u6DFB\u52A0\u4E86@Contended\u6CE8\u89E3\u3002\u6CE8\u89E3\u770B\u8D77\u6765\u867D\u5C0F\uFF0C\u4F46\u5176\u9690\u85CF\u4E86\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u4F18\u5316\uFF0C\u90A3\u5C31\u662F\u53BB\u4F2A\u5171\u4EAB\u3002\u53BB\u4F2A\u5171\u4EAB\u662F\u63D0\u9AD8\u591A\u7EBF\u7A0B\u5E76\u53D1\u6267\u884C\u6548\u7387\u7684\u91CD\u8981\u624B\u6BB5\uFF0C\u4E0D\u4EC5\u5728LongAdder\u4E2D\u7528\u5230\uFF0C\u5728Disruptor\u9AD8\u6027\u80FD\u6D88\u606F\u961F\u5217\u4E2D\u4E5F\u6709\u7528\u5230\u3002\u5728\u89E3\u91CA\u53BB\u4F2A\u5171\u4EAB\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u89E3\u91CA\u4E00\u4E0B\u4EC0\u4E48\u662F\u4F2A\u5171\u4EAB\u3002</p><p>\u524D\u9762\u6211\u4EEC\u63D0\u5230\uFF0CCPU\u8BFB\u5199\u7F13\u5B58\u7684\u6700\u5C0F\u5355\u5143\u662F\u7F13\u5B58\u884C\u3002\u4E0D\u540CCPU\u4E0A\u7684\u7F13\u5B58\u884C\u5927\u5C0F\u4E0D\u540C\uFF0C\u53EF\u4EE5\u4E3A32\u5B57\u8282\u300164\u5B57\u8282\u6216128\u5B57\u8282\u7B49\uFF0C\u5E38\u89C1\u7684\u5927\u5C0F\u4E3A64\u5B57\u8282\u3002\u53C2\u7167\u7B2C9\u8282\u4E2D\u5BF9\u8C61\u5927\u5C0F\u7684\u8BA1\u7B97\u516C\u5F0F\uFF0CCell\u5BF9\u8C61\u5934\u536012\u5B57\u8282\uFF0Cvalue\u6210\u5458\u53D8\u91CF\u4E3Along\u7C7B\u578B\uFF0C\u53608\u5B57\u8282\u3002\u5BF9\u8C61\u5934\u4E0Evalue\u6210\u5458\u53D8\u91CF\u4E4B\u95F4\u67094\u5B57\u8282\u5BF9\u9F50\u586B\u5145\uFF0C\u56E0\u6B64\uFF0C\u4E00\u4E2ACell\u5BF9\u8C61\u536024\u5B57\u8282\u3002\u5047\u8BBE\u4E00\u4E2A\u7F13\u5B58\u884C\u5927\u5C0F\u4E3A64\u5B57\u8282\uFF0C\u90A3\u4E48\uFF0C\u4E24\u4E2ACell\u5BF9\u8C61\u5C31\u6709\u53EF\u80FD\u5B58\u50A8\u5728\u540C\u4E00\u4E2A\u7F13\u5B58\u884C\u4E2D\u3002\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/91306100_1659888459.png" alt="img" loading="lazy"></p><p>\u56E0\u4E3A\u6570\u636E\u662F\u4EE5\u7F13\u5B58\u884C\u4E3A\u5355\u4F4D\u6765\u8BFB\u5199\u7684\uFF0C\u6240\u4EE5\uFF0C\u5F53\u7EBF\u7A0Bt1\u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6cellA\u5230\u7F13\u5B58\u4E2D\u65F6\uFF0C\u4F1A\u987A\u5E26\u7740\u8BFB\u53D6cellB\uFF0C\u540C\u7406\uFF0C\u5F53\u7EBF\u7A0Bt2\u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6cellB\u5230\u7F13\u5B58\u4E2D\u65F6\uFF0C\u4F1A\u987A\u5E26\u7740\u8BFB\u53D6cellA\u3002\u5F53\u7EBF\u7A0Bt1\u66F4\u65B0cellA\u7684\u503C\u65F6\uFF0C\u6309\u7406\u6765\u8BF4\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u7EBF\u7A0Bt2\u5BF9cellB\u7684\u7F13\u5B58\uFF0C\u4F46\u662F\uFF0C\u7F13\u5B58\u4E2D\u7684\u6570\u636E\u662F\u6309\u7167\u7F13\u5B58\u884C\u6765\u8BFB\u5199\u7684\uFF0C\u56E0\u6B64\uFF0C\u7EBF\u7A0Bt1\u4F1A\u5C06\u6574\u4E2A\u7F13\u5B58\u884C\u8BBE\u7F6E\u4E3A\u65E0\u6548\uFF0C\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u7EBF\u7A0Bt2\u5BF9cellB\u7684\u7F13\u5B58\u4E5F\u4F1A\u5931\u6548\uFF0C\u9700\u8981\u91CD\u65B0\u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6\u3002\u540C\u7406\uFF0C\u7EBF\u7A0Bt2\u66F4\u65B0cellB\u503C\u65F6\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u7EBF\u7A0Bt1\u5BF9cellA\u7684\u7F13\u5B58\u5931\u6548\u3002\u4E24\u4E2A\u7EBF\u7A0B\u4E92\u76F8\u5F71\u54CD\uFF0C\u5BFC\u81F4\u7F13\u5B58\u9891\u7E41\u5931\u6548\u3002</p><p>\u4EE5\u4E0A\u95EE\u9898\u5C31\u53EB\u505A\u4F2A\u5171\u4EAB\uFF08false sharing\uFF09\u95EE\u9898\u3002\u4E3A\u4E86\u89E3\u51B3\u4F2A\u5171\u4EAB\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528@Contended\u6CE8\u89E3\u3002\u8FD9\u4E2A\u6CE8\u89E3\u65E2\u53EF\u4EE5\u6807\u8BB0\u5728\u7C7B\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u6807\u8BB0\u5728\u53D8\u91CF\u4E0A\u3002\u6807\u8BB0\u5728\u7C7B\u4E0A\u4F1A\u5F3A\u5236\u8FD9\u4E2A\u7C7B\u7684\u5BF9\u8C61\u72EC\u5360\u4E00\u4E2A\u7F13\u5B58\u884C\uFF0C\u4E0D\u591F\u4E00\u4E2A\u7F13\u5B58\u884C\u7684\u4F1A\u505A\u5BF9\u9F50\u586B\u5145\u3002\u6807\u8BB0\u5728\u53D8\u91CF\u4E0A\u4F1A\u5F3A\u5236\u8FD9\u4E2A\u53D8\u91CF\u72EC\u5360\u4E00\u4E2A\u7F13\u5B58\u884C\u3002Cell\u7C7B\u4F7F\u7528@Contended\u6807\u8BB0\uFF0C\u4E24\u4E2ACell\u5BF9\u8C61\u4FBF\u4E0D\u4F1A\u5B58\u50A8\u5728\u540C\u4E00\u4E2A\u7F13\u5B58\u884C\u4E2D\uFF0C\u56E0\u6B64\uFF0C\u4E5F\u5C31\u4E0D\u4F1A\u51FA\u73B0\u4F2A\u5171\u4EAB\u7684\u95EE\u9898\u4E86\u3002\u7F13\u5B58\u4E0D\u518D\u9891\u7E41\u5931\u6548\uFF0C\u6267\u884C\u6548\u7387\u53D8\u9AD8\u3002</p><h2 id="\u4E94\u3001\u975E\u51C6\u786E\u6C42\u548C" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u975E\u51C6\u786E\u6C42\u548C" aria-hidden="true">#</a> <strong>\u4E94\u3001\u975E\u51C6\u786E\u6C42\u548C</strong></h2><p>\u524D\u9762\u6211\u4EEC\u63D0\u5230\uFF0CLongAdder\u4E2D\u7684sum()\u51FD\u6570\u4F1A\u7D2F\u52A0base\u548Ccells\u4E2D\u7684Cell\u5BF9\u8C61\u7684value\u503C\uFF0C\u4ECE\u800C\u5F97\u5230\u6700\u7EC8\u7684\u7D2F\u52A0\u503C\u3002\u4F46\u662F\uFF0C\u8FD9\u4E2A\u503C\u662F\u4E0D\u51C6\u786E\u7684\uFF0C\u6216\u8005\u8BF4\u4E0D\u4E00\u81F4\u7684\u3002\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F\u6211\u4EEC\u5148\u6765\u770B\u4E0Bsum()\u51FD\u6570\u7684\u6E90\u7801\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public long sum() {
    Cell[] as = cells; Cell a;
    long sum = base;
    if (as != null) {
        for (int i = 0; i &lt; as.length; ++i) {
            if ((a = as[i]) != null)
                sum += a.value;
        }
    }
    return sum;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0CLongAdder\u5728\u6267\u884Csum()\u51FD\u6570\u65F6\uFF0C\u5E76\u6CA1\u6709\u52A0\u9501\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u6267\u884Csum()\u51FD\u6570\u7684\u540C\u65F6\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u53EF\u4EE5\u540C\u65F6\u6267\u884Cadd()\u51FD\u6570\u3002\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u51FA\u73B0\u8FD9\u6837\u7684\u60C5\u51B5\uFF1A\u524D\u9762\u6DFB\u52A0\u7684\u503C\u6CA1\u6709\u7B97\u5230\u7D2F\u52A0\u503C\u4E2D\uFF0C\u53CD\u5012\u662F\u540E\u9762\u6DFB\u52A0\u7684\u503C\u7B97\u5230\u4E86\u7D2F\u52A0\u503C\u4E2D\u3002\u5982\u4E0B\u56FE\u6240\u793A \u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/74818300_1659938169.png" alt="img" loading="lazy"></p><p>\u5B9E\u9645\u4E0A\uFF0C\u9664\u4E86LongAdder\u4E4B\u5916\uFF0CJUC\u8FD8\u63D0\u4F9B\u4E86\u53E6\u5916\u4E09\u4E2A\u529F\u80FD\u7C7B\u4F3C\u7684\u7C7B\uFF1ALongAccumulator\u3001DoubleAdder\u3001DoubleAccumulator\uFF0C\u5176\u4E2D\uFF0CDoubleAdder\u548CDoubleAccumulator\u8DDFLongAdder\u548CLongAccumulator\u7684\u533A\u522B\uFF0C\u4EC5\u4EC5\u53EA\u662F\u5904\u7406\u7684\u6570\u636E\u7C7B\u578B\u4E0D\u540C\u800C\u5DF2\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u91CD\u70B9\u770B\u4E0BLongAccumulator\u3002</p><p>\u4ECE\u524D\u9762\u7684\u8BB2\u89E3\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0CLongAdder\u53EA\u80FD\u5B9E\u73B0\u7D2F\u52A0\u64CD\u4F5C\uFF0C\u800CLongAccumulator\u5374\u53EF\u4EE5\u5B9E\u73B0\u66F4\u52A0\u4E30\u5BCC\u7684\u7EDF\u8BA1\u64CD\u4F5C\uFF0C\u6BD4\u5982\u6C42\u6700\u5927\u503C\u3002LongAccumulator\u7C7B\u7684\u90E8\u5206\u6E90\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@FunctionalInterface
public interface LongBinaryOperator {
    long applyAsLong(long left, long right);
}

public class LongAccumulator extends Striped64 {
    private final LongBinaryOperator function;
    private final long identity;
    
    public LongAccumulator(LongBinaryOperator accumulatorFunction,
                           long identity) {
        this.function = accumulatorFunction;
        base = this.identity = identity;
    }

    public void accumulate(long x) { //\u76F8\u5F53\u4E8ELongAdder\u4E2D\u7684add()
        Cell[] as; long b, v, r; int m; Cell a;
        if ((as = cells) != null ||
            (r = function.applyAsLong(b = base, x)) != b &amp;&amp; !casBase(b, r)) {
            boolean uncontended = true;
            if (as == null || (m = as.length - 1) &lt; 0 ||
                (a = as[getProbe() &amp; m]) == null ||
                !(uncontended =
                  (r = function.applyAsLong(v = a.value, x)) == v ||
                  a.cas(v, r)))
                longAccumulate(x, function, uncontended);
        }
    }
    
    public long get() { //\u76F8\u5F53\u4E8ELongAdder\u4E2D\u7684sum()
        Cell[] as = cells; Cell a;
        long result = base;
        if (as != null) {
            for (int i = 0; i &lt; as.length; ++i) {
                if ((a = as[i]) != null)
                    result = function.applyAsLong(result, a.value);
            }
        }
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4EE3\u7801\u5B9E\u73B0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0CLongAccumulator\u7684\u4EE3\u7801\u5B9E\u73B0\uFF0C\u8DDFLongAdder\u7684\u4EE3\u7801\u5B9E\u73B0\u975E\u5E38\u76F8\u4F3C\uFF0C\u4E3B\u8981\u533A\u522B\u5728\u4E8E\uFF0CLongAccumulator\u652F\u6301\u4E0D\u540C\u7684\u7EDF\u8BA1\u64CD\u4F5C\u3002\u5982\u4E0B\u793A\u4F8B\u4EE3\u7801\u6240\u793A\uFF0C\u6211\u4EEC\u901A\u8FC7\u5B9A\u4E49\u5B9E\u73B0\u4E86LongBinaryOperator\u63A5\u53E3\u7684\u7C7BLongMax\uFF0C\u7136\u540E\u901A\u8FC7\u6784\u9020\u51FD\u6570\u4F20\u5165LongAccumulator\u5BF9\u8C61\uFF0C\u4FBF\u53EF\u4EE5\u652F\u6301\u53D6\u6700\u5927\u503C\u7684\u64CD\u4F5C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  public static class LongMax implements LongBinaryOperator {
    @Override
    public long applyAsLong(long left, long right) {
      return Math.max(left, right);
    }
  }
  
  public static void main(String[] args) {
    LongAccumulator lacc = new LongAccumulator(new LongMax(), Long.MIN_VALUE);
    lacc.accumulate(10);
    lacc.accumulate(-18);
    lacc.accumulate(24);
    System.out.println(lacc.get()); //\u8F93\u51FA24
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516D\u3001\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u601D\u8003\u9898" aria-hidden="true">#</a> <strong>\u516D\u3001\u601D\u8003\u9898</strong></h2><p>\u5982\u679C\u6211\u4EEC\u5E0C\u671BLongAdder\u7684sum()\u51FD\u6570\u80FD\u7ED9\u51FA\u51C6\u786E\u3001\u4E00\u81F4\u7684\u7D2F\u52A0\u548C\uFF0C\u8BE5\u5982\u4F55\u5BF9LongAdder\u7684\u4EE3\u7801\u8FDB\u884C\u6539\u9020\uFF1F\u6539\u9020\u4E4B\u540E\u7684\u4EE3\u7801\u5BF9\u6027\u80FD\u53C8\u6709\u4EC0\u4E48\u5F71\u54CD\uFF1F</p>`,55),a=[s];function r(c,v){return n(),l("div",null,a)}const o=e(d,[["render",r],["__file","LongAdder.html.vue"]]);export{o as default};
