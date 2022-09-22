import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,d}from"./app.ea0da9f5.js";const r={},l=d(`<h1 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> <strong>Lock</strong></h1><h2 id="juc-lock\u9501\u7684\u7279\u6027\u53CA\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#juc-lock\u9501\u7684\u7279\u6027\u53CA\u7528\u6CD5" aria-hidden="true">#</a> <strong>JUC Lock\u9501\u7684\u7279\u6027\u53CA\u7528\u6CD5</strong></h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>\u76F8\u5BF9Java synchronized\uFF0CJUC Lock\u6709\u4F55\u4F18\u52BF?</strong></p><p>\u5C3D\u7BA1synchronized\u7684\u5E95\u5C42\u539F\u7406\u6BD4\u8F83\u590D\u6742\uFF0C\u4F46\u662F\u4F7F\u7528\u8D77\u6765\u5374\u975E\u5E38\u7B80\u5355\u3002\u4ECE\u672C\u8282\u5F00\u59CB\uFF0C\u6211\u4EEC\u6765\u5B66\u4E60\u53E6\u5916\u4E00\u79CD\u4E92\u65A5\u9501\uFF1AJUC\u5E76\u53D1\u5305\u63D0\u4F9B\u7684Lock\u9501\u3002\u76F8\u5BF9\u4E8Esynchronized\u5185\u7F6E\u9501\uFF0CJUC Lock\u9501\u63D0\u4F9B\u4E86\u66F4\u52A0\u4E30\u5BCC\u7684\u7279\u6027\uFF0C\u6BD4\u5982\u652F\u6301\u516C\u5E73\u9501\u3001\u53EF\u4E2D\u65AD\u9501\u3001\u975E\u963B\u585E\u9501\u3001\u53EF\u8D85\u65F6\u9501\u7B49\u3002\u672C\u8282\uFF0C\u6211\u4EEC\u5C31\u8BE6\u7EC6\u4ECB\u7ECD\u4E00\u4E0BJUC Lock\u9501\u7684\u5404\u79CD\u7279\u6027\u53CA\u5176\u7528\u6CD5\u3002\u4E0B\u4E00\u8282\uFF0C\u6211\u4EEC\u518D\u7ED3\u5408AQS\uFF0C\u5BF9\u8FD9\u4E9B\u7279\u6027\u7684\u5B9E\u73B0\u539F\u7406\u505A\u6DF1\u5165\u8BB2\u89E3\u3002</p></div><h3 id="_1\u3001juc\u9501\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1\u3001juc\u9501\u6982\u8FF0" aria-hidden="true">#</a> <strong>1\u3001JUC\u9501\u6982\u8FF0</strong></h3><p>JUC\u63D0\u4F9B\u4E86\u51E0\u79CD\u4E0D\u540C\u7684\u9501\uFF0C\u7EE7\u627F\u548C\u5B9E\u73B0\u5C42\u6B21\u5173\u7CFB\u5982\u4E0B\u56FE\u6240\u793A\u3002\u672C\u8282\u91CD\u70B9\u8BB2\u89E3Lock\u9501\uFF08\u4E5F\u5C31\u662FLock\u63A5\u53E3\u53CA\u5176\u5B9E\u73B0\u7C7BReentrantLock\uFF09\uFF0C\u4E0B\u4E0B\u8282\u8BB2\u89E3\u8BFB\u5199\u9501\uFF08\u4E5F\u5C31\u662FReadWriteLock\u63A5\u53E3\u53CA\u5176\u5B9E\u73B0\u7C7BReetrantReadWriteLock\uFF09\u4EE5\u53CA\u8BFB\u5199\u9501\u7684\u5347\u7EA7\u7248StampedLock\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/13801000_1658659755.png" alt="img" loading="lazy"></p><p>\u6211\u4EEC\u5148\u6765\u770BLock\u63A5\u53E3\uFF0C\u5176\u63A5\u53E3\u5B9A\u4E49\u5982\u4E0B\u6240\u793A\u3002\u56E0\u4E3A\u5728\u5E73\u65F6\u7684\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u7528\u5230\u7684\u9501\u90FD\u662F\u53EF\u91CD\u5165\u9501\uFF0C\u6240\u4EE5\uFF0CLock\u63A5\u53E3\u53EA\u6709 \u4E00\u4E2A\u53EF\u91CD\u5165\u7684\u5B9E\u73B0\u7C7BReentrantLock\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface Lock {
    void lock();
    void lockInterruptibly() throws InterruptedException;
    boolean tryLock();
    boolean tryLock(long time, TimeUnit unit) throws InterruptedException;
    void unlock();
    Condition newCondition();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2\u3001\u53EF\u91CD\u5165\u9501" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u53EF\u91CD\u5165\u9501" aria-hidden="true">#</a> <strong>2\u3001\u53EF\u91CD\u5165\u9501</strong></h3><p>\u53EF\u91CD\u5165\u9501\u6307\u7684\u662F\u53EF\u4EE5\u88AB\u540C\u4E00\u4E2A\u7EBF\u7A0B\u591A\u6B21\u52A0\u9501\u7684\u9501\u3002\u6CE8\u610F\uFF0C\u8FD9\u91CC\u8BF4\u7684\u591A\u6B21\u52A0\u9501\uFF0C\u5E76\u4E0D\u662F\u8BF4\u89E3\u9501\u4E4B\u540E\u518D\u6B21\u52A0\u9501\uFF0C\u800C\u662F\u5728\u9501\u6CA1\u6709\u89E3\u9501\u524D\u518D\u6B21\u52A0\u9501\u3002</p><p>\u5982\u4E0B\u4EE3\u7801\u6240\u793A\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u7EBF\u7A0B\u5B89\u5168\uFF0CgetEvenSeq()\u51FD\u6570\u548Cincrement()\u51FD\u6570\u4E2D\u7684\u4EE3\u7801\u90FD\u52A0\u4E86\u9501\u3002getEvenSeq()\u51FD\u6570\u8C03\u7528increment()\u51FD\u6570\uFF0C\u5BFC\u81F4getEvenSeq()\u51FD\u6570\u5728\u9501\u91CA\u653E\u524D\u518D\u6B21\u52A0\u9501\u3002\u5982\u679CJUC\u63D0\u4F9B\u7684\u9501\u4E0D\u652F\u6301\u53EF\u91CD\u5165\u7279\u6027\uFF0C\u90A3\u4E48\uFF0CgetEvenSeq()\u4E2D\u7684\u7B2C\u4E8C\u6B21\u52A0\u9501\u9700\u8981\u7B49\u5F85\u9501\u91CA\u653E\uFF0C\u800C\u9501\u91CA\u653E\u53C8\u9700\u8981\u52A0\u9501\u4E4B\u540E\u624D\u80FD\u6267\u884C\uFF0C\u4E8E\u662F\uFF0CgetEvenSeq()\u5C31\u4F1A\u51FA\u73B0\u6B7B\u9501\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  Lock lock = new ReentrantLock();
  private int seq = 0;

  public int getEvenSeq() {
    lock.lock();
    try {
      // ...\u7701\u7565\u5176\u4ED6\u64CD\u4F5C...
      if (seq%2 == 1) {
        increment();
      }
      return seq;
    } finally {
      lock.unlock();
    }
  }

  public void increment() {
    lock.lock();
    seq++;
    lock.unlock();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6211\u4EEC\u7A0D\u5FAE\u89E3\u91CA\u4E00\u4E0B\u3002\u4E4B\u6240\u4EE5getEvenSeq()\u51FD\u6570\u4F7F\u7528finally\u6765\u91CA\u653E\u9501\uFF0C\u662F\u4E3A\u4E86\u907F\u514D\u4EE3\u7801\u629B\u51FA\u5F02\u5E38\u800C\u5BFC\u81F4\u9501\u65E0\u6CD5\u6B63\u5E38\u91CA\u653E\u3002\u800C\u4E4B\u6240\u4EE5increment()\u51FD\u6570\u6CA1\u6709\u4F7F\u7528finally\u6765\u91CA\u653E\u9501\uFF0C\u662F\u56E0\u4E3A\u4EE3\u7801\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u53EF\u4EE5\u786E\u5B9A\u4EE3\u7801\u4E0D\u4F1A\u629B\u51FA\u5F02\u5E38\u3002</p><p>JUC\u63D0\u4F9B\u7684\u9501\u90FD\u662F\u53EF\u91CD\u5165\u9501\u3002\u5B9E\u9645\u4E0A\uFF0CJava synchronized\u5185\u7F6E\u9501\u4E5F\u662F\u53EF\u91CD\u5165\u9501\u3002\u4ECE\u4FA7\u9762\u4E0A\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5F97\u51FA\uFF0C\u53EF\u91CD\u5165\u662F\u5BF9\u9501\u7684\u57FA\u672C\u8981\u6C42\u3002\u4E3A\u4E86\u5B9E\u73B0\u53EF\u91CD\u5165\u7279\u6027\uFF0C\u53EF\u91CD\u5165\u9501\u4E2D\u9700\u8981\u6709\u4E00\u4E2A\u53D8\u91CF\u6765\u8BB0\u5F55\u91CD\u5165\u7684\u6B21\u6570\u3002\u6BCF\u91CD\u5165\u4E00\u6B21\uFF0C\u53D8\u91CF\u5C31\u589E\u4E00\uFF1B\u6BCF\u89E3\u9501\u4E00\u6B21\uFF08\u8C03\u7528unlock()\u6216\u9000\u51FAsynchronized\u4EE3\u7801\u5757\uFF09\uFF0C\u53D8\u91CF\u5C31\u51CF\u4E00\uFF0C\u76F4\u5230\u53D8\u91CF\u503C\u4E3A0\u65F6\uFF0C\u624D\u4F1A\u91CA\u653E\u9501\u5524\u9192\u5176\u4ED6\u7EBF\u7A0B\u6267\u884C\u3002</p><h3 id="_3\u3001\u516C\u5E73\u9501" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u516C\u5E73\u9501" aria-hidden="true">#</a> <strong>3\u3001\u516C\u5E73\u9501</strong></h3><p>\u5BF9\u4E8E\u516C\u5E73\u9501\u6765\u8BF4\uFF0C\u7EBF\u7A0B\u4F1A\u6309\u7167\u8BF7\u6C42\u9501\u7684\u5148\u540E\u987A\u5E8F\u6765\u83B7\u5F97\u9501\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u7ECF\u5E38\u8BF4\u7684FIFO\u3002\u5BF9\u4E8E\u975E\u516C\u5E73\u9501\uFF0C\u591A\u4E2A\u7EBF\u7A0B\u8BF7\u6C42\u9501\u65F6\uFF0C\u975E\u516C\u5E73\u9501\u65E0\u6CD5\u4FDD\u8BC1\u8FD9\u4E9B\u7EBF\u7A0B\u83B7\u53D6\u9501\u7684\u5148\u540E\u987A\u5E8F\uFF0C\u6709\u53EF\u80FD\u540E\u7533\u8BF7\u9501\u7684\u7EBF\u7A0B\u5148\u83B7\u53D6\u5230\u9501\u3002</p><p>Java\u5C06synchronized\u8BBE\u8BA1\u4E3A\u53EA\u652F\u6301\u975E\u516C\u5E73\u9501\uFF0C\u800CJUC\u63D0\u4F9B\u7684ReentrantLock\u65E2\u652F\u6301\u516C\u5E73\u9501\uFF0C\u4E5F\u652F\u6301\u975E\u516C\u5E73\u9501\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CReentrantLock\u4E3A\u975E\u516C\u5E73\u9501\u3002\u5982\u679C\u9700\u8981\u521B\u5EFA\u516C\u5E73\u9501\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EA\u9700\u8981\u5728\u521B\u5EFAReentrantLock\u5BF9\u8C61\u65F6\uFF0C\u5C06\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u8BBE\u7F6E\u4E3Atrue\u5373\u53EF\u3002\u5982\u4E0B\u4EE3\u7801\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Lock lock = new ReentrantLock(true); // \u516C\u5E73\u9501
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u4E0B\uFF0C\u516C\u5E73\u9501\u548C\u975E\u516C\u5E73\u9501\u7684\u5B9E\u73B0\u539F\u7406\u3002</p><p>\u5728\u8BB2\u89E3synchronized\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u65F6\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0C\u591A\u4E2A\u7EBF\u7A0B\u7ADE\u4E89\u9501\uFF0C\u7ADE\u4E89\u5230\u9501\u7684\u7EBF\u7A0B\u5C31\u53BB\u6267\u884C\u4EFB\u52A1\u4E86\uFF0C\u6CA1\u6709\u7ADE\u4E89\u5230\u9501\u7684\u7EBF\u7A0B\u4F1A\u653E\u5165Monitor\u9501\u7684_cxq\u961F\u5217\u4E2D\u7B49\u5F85\u9501\uFF0C\u5E76\u4E14\u8FD8\u9700\u8981\u8C03\u7528park()\u51FD\u6570\u963B\u585E\u81EA\u5DF1\u3002\u5F53\u6301\u6709\u9501\u7684\u7EBF\u7A0B\u91CA\u653E\u9501\u65F6\uFF0C\u5B83\u4F1A\u4ECE_EntryList\u961F\u5217\u4E2D\u53D6\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u53D6\u6D88\u963B\u585E\u72B6\u6001\uFF0C\u8BA9\u5B83\u53BB\u91CD\u65B0\u7ADE\u4E89\u9501\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u5C06\u9501\u7ED9\u5B83\u3002\u800C\u6B64\u65F6\u5982\u679C\u6709\u65B0\u6765\u7684\u7EBF\u7A0B\u4E5F\u8981\u7ADE\u4E89\u8FD9\u4E2A\u9501\uFF0C\u65B0\u6765\u7684\u7EBF\u7A0B\u6709\u53EF\u80FD\u4E0D\u9700\u8981\u6392\u961F\uFF0C\u5C31\u80FD\u76F4\u63A5\u83B7\u53D6\u9501\uFF0C\u663E\u7136\uFF0C\u8FD9\u662F\u4E00\u79CD\u201C\u63D2\u961F\u201D\u7684\u884C\u4E3A\u3002</p><p>\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8BA9synchronzied\u652F\u6301\u516C\u5E73\u9501\u3002\u5B9E\u73B0\u8D77\u6765\u4E5F\u5F88\u7B80\u5355\u3002\u65B0\u6765\u7684\u7EBF\u7A0B\u5728\u7533\u8BF7\u83B7\u53D6\u9501\u65F6\uFF0C\u5982\u679C_EntryList\u961F\u5217\u548C_cxq\u961F\u5217\u4E2D\u6709\u6392\u961F\u7B49\u5F85\u9501\u7684\u7EBF\u7A0B\uFF0C\u90A3\u4E48\uFF0C\u4E0D\u7BA1\u6B64\u65F6\u9501\u6709\u6CA1\u6709\u91CA\u653E\uFF0C\u65B0\u6765\u7684\u7EBF\u7A0B\u90FD\u76F4\u63A5\u653E\u5165_cxq\u961F\u5217\u4E2D\u6392\u961F\uFF0C\u6309\u7167\u5148\u6765\u540E\u5230\u7684\u987A\u5E8F\u7B49\u5F85\u9501\uFF0C\u4EE5\u907F\u514D\u65B0\u6765\u7EBF\u7A0B\u7684\u201C\u63D2\u961F\u201D\u884C\u4E3A\u3002\u8FD9\u6837\u5B9E\u73B0\u7684\u9501\u5C31\u662F\u516C\u5E73\u9501\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0CReentrantLock\u5B9E\u73B0\u516C\u5E73\u9501\u548C\u975E\u516C\u5E73\u9501\u7684\u65B9\u6CD5\uFF0C\u8DDF\u4E0A\u8FF0synchronized\u7684\u5B9E\u73B0\u65B9\u6CD5\uFF0C\u5176\u57FA\u672C\u539F\u7406\u662F\u4E00\u81F4\u7684\u3002\u533A\u522B\u5728\u4E8E\uFF0CReentrantLock\u4F7F\u7528AQS\uFF08\u62BD\u8C61\u961F\u5217\u540C\u6B65\u5668\uFF09\u6765\u5B58\u50A8\u6392\u961F\u7B49\u5F85\u9501\u7684\u7EBF\u7A0B\u3002\u5173\u4E8EAQS\uFF0C\u6211\u4EEC\u5728\u4E0B\u4E00\u8282\u4E2D\u8BE6\u7EC6\u8BB2\u89E3\u3002</p><p>\u65E2\u7136\u5B9E\u73B0\u516C\u5E73\u9501\u5E76\u4E0D\u590D\u6742\uFF0C\u800C\u4E14\u4ECE\u76F4\u89C9\u4E0A\uFF0C\u516C\u5E73\u9501\u6BD4\u975E\u516C\u5E73\u9501\u66F4\u52A0\u5408\u7406\uFF0C\u4F46\u662F\uFF0Csynchronized\u4E3A\u4EC0\u4E48\u53EA\u652F\u6301\u975E\u516C\u5E73\u9501\uFF1F\u4E3B\u8981\u539F\u56E0\u6709\u4EE5\u4E0B3\u4E2A\u65B9\u9762\u3002</p><p>1\uFF09\u5386\u53F2\u7684\u539F\u56E0\uFF1Asynchronized\u65E9\u671F\u5F00\u53D1\u65F6\u6CA1\u6709\u8003\u8651\u90A3\u4E48\u5168\u9762\uFF1B</p><p>2\uFF09\u9700\u6C42\u7684\u539F\u56E0\uFF1A\u7EDD\u5927\u90E8\u5206\u4E1A\u52A1\u573A\u666F\u90FD\u4E0D\u9700\u8981\u4E25\u683C\u89C4\u5B9A\u7EBF\u7A0B\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u5982\u679C\u771F\u7684\u9700\u8981\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6761\u4EF6\u53D8\u91CF\uFF08wait()\u3001notify()\u7B49\uFF09\u7B49\u540C\u6B65\u5DE5\u5177\u6765\u5B9E\u73B0\uFF1B</p><p>3\uFF09\u6027\u80FD\u7684\u539F\u56E0\uFF1A\u975E\u516C\u5E73\u9501\u7684\u6027\u80FD\u6BD4\u516C\u5E73\u9501\u7684\u6027\u80FD\u66F4\u597D\u3002\u6211\u4EEC\u77E5\u9053\uFF0C\u52A0\u5165\u7B49\u5F85\u961F\u5217\u5E76\u8C03\u7528park()\u51FD\u6570\u963B\u585E\u7EBF\u7A0B\uFF0C\u6D89\u53CA\u5230\u7528\u6237\u6001\u548C\u5185\u6838\u6001\u7684\u5207\u6362\uFF0C\u662F\u6BD4\u8F83\u8017\u65F6\u3002\u5BF9\u4E8E\u975E\u516C\u5E73\u9501\u6765\u8BF4\uFF0C\u65B0\u6765\u7684\u7EBF\u7A0B\u76F4\u63A5\u7ADE\u4E89\u9501\uFF0C\u8FD9\u6837\u5C31\u6709\u53EF\u80FD\u907F\u514D\u52A0\u5165\u7B49\u5F85\u961F\u5217\u5E76\u8C03\u7528\u8D39\u65F6\u7684park()\u51FD\u6570\u3002</p><p>\u4E0D\u8FC7\uFF0C\u975E\u516C\u5E73\u9501\u4E5F\u6709\u7F3A\u70B9\uFF0C\u5728\u6781\u7AEF\u60C5\u51B5\u4E0B\uFF0C\u7EBF\u7A0B\u7ADE\u4E89\u9501\u6FC0\u70C8\uFF0C\u9891\u7E41\u6709\u65B0\u6765\u7684\u7EBF\u7A0B\u63D2\u961F\uFF0C\u5C31\u6709\u53EF\u80FD\u5BFC\u81F4\uFF0C\u6392\u5728\u7B49\u5F85\u961F\u5217\u4E2D\u7684\u7EBF\u7A0B\uFF0C\u8FDF\u8FDF\u65E0\u6CD5\u83B7\u53D6\u5230\u9501\u3002</p><h3 id="_4\u3001\u53EF\u4E2D\u65AD\u9501" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u53EF\u4E2D\u65AD\u9501" aria-hidden="true">#</a> <strong>4\u3001\u53EF\u4E2D\u65AD\u9501</strong></h3><p>\u5BF9\u4E8Esynchronized\u9501\u6765\u8BF4\uFF0C\u7EBF\u7A0B\u5728\u963B\u585E\u7B49\u5F85synchronized\u9501\u65F6\u662F\u65E0\u6CD5\u54CD\u5E94\u4E2D\u65AD\u7684\u3002\u800CJUC Lock\u63A5\u53E3\u63D0\u4F9B\u4E86lockInterruptibly()\u51FD\u6570\uFF0C\u652F\u6301\u53EF\u54CD\u5E94\u4E2D\u65AD\u7684\u65B9\u5F0F\u6765\u8BF7\u6C42\u9501\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u4E3B\u7EBF\u7A0B\u5148\u83B7\u53D6\u5230\u4E86\u9501\u5E76\u4E00\u76F4\u6301\u6709\uFF0C\u4E4B\u540E\u7EBF\u7A0Bt1\u8C03\u7528lockInterruptibly()\u8BF7\u6C42\u9501\uFF0C\u56E0\u4E3A\u9501\u88AB\u4E3B\u7EBF\u7A0B\u6301\u6709\uFF0C\u6240\u4EE5\uFF0C\u7EBF\u7A0Bt1\u963B\u585E\u7B49\u5F85\u3002\u4E3B\u7EBF\u7A0B\u8C03\u7528interrupt()\u51FD\u6570\u5411\u7EBF\u7A0Bt1\u53D1\u8D77\u4E2D\u65AD\u8BF7\u6C42\uFF0C\u7EBF\u7A0Bt1\u54CD\u5E94\u4E2D\u65AD\u8BF7\u6C42\uFF0C\u9000\u51FA\u963B\u585E\u7B49\u5F85\u9501\uFF0C\u5E76\u6253\u5370\u201CI am interrupted\u201D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  private static Lock lock = new ReentrantLock();
  
  public static void main(String[] args) {
    Thread t1 = new Thread(new Runnable() {
      @Override
      public void run() {
        try {
          lock.lockInterruptibly();
        } catch (InterruptedException e) {
          System.out.println(&quot;I am interrupted&quot;);
          return;
        }
        try {
          System.out.println(&quot;I got lock&quot;);
        } finally {
          lock.unlock();
        }
      }
    });
    lock.lock();
    t1.start();
    t1.interrupt();
    lock.unlock();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4E2D\u65AD\u9501\u4E00\u822C\u7528\u4E8E\u7EBF\u7A0B\u7BA1\u7406\u4E2D\uFF0C\u65B9\u4FBF\u5173\u95ED\u6B63\u5728\u6267\u884C\u7684\u7EBF\u7A0B\u3002\u6BD4\u5982\uFF0CNginx\u670D\u52A1\u5668\u91C7\u7528\u591A\u7EBF\u7A0B\u6765\u6267\u884C\u8BF7\u6C42\u3002\u5F53\u6211\u4EEC\u8C03\u7528stop\u547D\u4EE4\u5173\u95EDNginx\u670D\u52A1\u5668\u65F6\uFF0CNginx\u670D\u52A1\u5668\u53EF\u4EE5\u91C7\u7528\u4E2D\u65AD\u7684\u65B9\u5F0F\uFF0C\u5C06\u963B\u585E\u7B49\u5F85\u9501\u7684\u7EBF\u7A0B\u4E2D\u6B62\uFF0C\u7136\u540E\uFF0C\u5408\u7406\u7684\u91CA\u653E\u8D44\u6E90\u548C\u59A5\u5584\u5904\u7406\u672A\u6267\u884C\u5B8C\u6210\u7684\u8BF7\u6C42\uFF0C\u4EE5\u5B9E\u73B0\u670D\u52A1\u5668\u7684\u4F18\u96C5\u5173\u95ED\u3002</p><h3 id="_5\u3001\u975E\u963B\u585E\u9501" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u975E\u963B\u585E\u9501" aria-hidden="true">#</a> <strong>5\u3001\u975E\u963B\u585E\u9501</strong></h3><p>\u5BF9\u4E8Esynchronized\u9501\u6765\u8BF4\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u53BB\u8BF7\u6C42\u4E00\u4E2Asynchronized\u9501\u65F6\uFF0C\u5982\u679C\u9501\u5DF2\u7ECF\u88AB\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u53D6\uFF0C\u90A3\u4E48\uFF0C\u8FD9\u4E2A\u7EBF\u7A0B\u5C31\u9700\u8981\u963B\u585E\u7B49\u5F85\u3002JUC Lock\u63A5\u53E3\u63D0\u4F9B\u4E86tryLock()\u51FD\u6570\uFF0C\u652F\u6301\u975E\u963B\u585E\u7684\u65B9\u5F0F\u83B7\u53D6\u9501\u3002\u5982\u679C\u9501\u5DF2\u7ECF\u88AB\u5176\u4ED6\u7EBF\u7A0B\u83B7\u53D6\uFF0C\u90A3\u4E48\uFF0C\u8C03\u7528tryLock()\u51FD\u6570\u4F1A\u76F4\u63A5\u8FD4\u56DE\u9519\u8BEF\u7801\u800C\u975E\u963B\u585E\u7B49\u5F85\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u975E\u963B\u585E\u9501\u7684\u5B9E\u73B0\u539F\u7406\u975E\u5E38\u7B80\u5355\u3002\u7ADE\u4E89\u9501\u5931\u8D25\u7684\u7EBF\u7A0B\u4E0D\u653E\u5165\u961F\u5217\u6392\u961F\u5373\u53EF\u5B9E\u73B0\u975E\u963B\u585E\u9501\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  private Lock lock = new ReentrantLock();
  
  public void useTryLock() {
    if (lock.tryLock()) {
      try {
        // ...\u6267\u884C\u4E1A\u52A1\u4EE3\u7801...
      } finally {
        lock.unlock();
      }
    } else {
      // ...\u6CA1\u6709\u83B7\u53D6\u9501\uFF0C\u6267\u884C\u5176\u4ED6\u4E1A\u52A1\u4EE3\u7801...
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6\u3001\u53EF\u8D85\u65F6\u9501" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u53EF\u8D85\u65F6\u9501" aria-hidden="true">#</a> <strong>6\u3001\u53EF\u8D85\u65F6\u9501</strong></h3><p>\u9664\u4E86\u63D0\u4F9B\u4E0D\u5E26\u53C2\u6570\u7684tryLock()\u51FD\u6570\u4E4B\u5916\uFF0CJUC Lock\u63A5\u53E3\u8FD8\u63D0\u4F9B\u7ED9\u4E86\u5E26\u65F6\u95F4\u53C2\u6570\u7684tryLock()\u51FD\u6570\uFF0C\u652F\u6301\u975E\u963B\u585E\u83B7\u53D6\u9501\u7684\u540C\u65F6\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u5728\u8BF7\u6C42\u9501\u65F6\uFF0C\u5982\u679C\u8FD9\u4E2A\u9501\u88AB\u5176\u4ED6\u7EBF\u7A0B\u6301\u6709\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7EBF\u7A0B\u4F1A\u963B\u585E\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u3002\u5982\u679C\u8D85\u8FC7\u4E86\u8BBE\u5B9A\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u7EBF\u7A0B\u4ECD\u7136\u6CA1\u6709\u83B7\u53D6\u5230\u9501\uFF0C\u90A3\u4E48tryLock()\u51FD\u6570\u5C06\u4F1A\u8FD4\u56DE\u9519\u8BEF\u7801\u800C\u4E0D\u518D\u963B\u585E\u7B49\u5F85\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u4ECE\u793A\u4F8B\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u53D1\u73B0\uFF0CtryLock()\u8DDFlockInterruptibly()\u4E00\u6837\uFF0C\u4E5F\u53EF\u4EE5\u88AB\u4E2D\u65AD\u3002\u8FD9\u6837\u662F\u4E3A\u4E86\u907F\u514DtryLock()\u963B\u585E\u8FC7\u957F\u65F6\u95F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  private Lock lock = new ReentrantLock();
  
  public void useTryLockWithTimeout() {
    boolean locked = false;
    try {
      locked = lock.tryLock(100, TimeUnit.MILLISECONDS);
    } catch (InterruptedException e) {
      System.out.println(&quot;I am interrupted&quot;);
    }
    if (locked) {
      try {
        // ...\u6267\u884C\u4E1A\u52A1\u4EE3\u7801...
      } finally {
        lock.unlock();
      }
    } else {
      // ...\u6CA1\u6709\u83B7\u53D6\u9501\uFF0C\u6267\u884C\u5176\u4ED6\u4E1A\u52A1\u4EE3\u7801...
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u770B\u53EF\u8D85\u65F6\u9501\u7684\u5E94\u7528\u573A\u666F\u3002</p><p>\u5728\u5F88\u591A\u5BF9\u54CD\u5E94\u65F6\u95F4\u6BD4\u8F83\u654F\u611F\u7684\u7CFB\u7EDF\u4E2D\uFF0C\u6BD4\u5982\u9762\u5411\u7528\u6237\u7684\u7CFB\u7EDF\uFF0C\u4ECE\u7528\u6237\u4F53\u9A8C\u4E0A\u8BF4\uFF0C\u8BF7\u6C42\u5931\u8D25\u7ED9\u4E0E\u63D0\u793A\uFF0C\u8981\u8FDC\u597D\u4E8E\u54CD\u5E94\u8D85\u65F6\u800C\u6CA1\u6709\u53CD\u5E94\u3002\u6211\u4EEC\u62FFTomcat\u7B49Web\u670D\u52A1\u5668\u6765\u4E3E\u4F8B\u3002Tomcat\u91C7\u7528\u7EBF\u7A0B\u6C60\u7684\u65B9\u5F0F\u591A\u7EBF\u7A0B\u6267\u884C\u7528\u6237\u8BF7\u6C42\u3002\u5982\u679C\u67D0\u4E2A\u7279\u6B8A\u8BF7\u6C42\u4E0D\u80FD\u5E76\u53D1\u6267\u884C\uFF0C\u5E76\u4E14\u8BF7\u6C42\u6267\u884C\u65F6\u95F4\u6BD4\u8F83\u957F\uFF0C\u90A3\u4E48\uFF0C\u8BF7\u6C42\u7684\u5904\u7406\u4EE3\u7801\u5C31\u9700\u8981\u52A0\u9501\u3002\u5F53\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u6267\u884C\u591A\u4E2A\u7279\u6B8A\u8BF7\u6C42\u65F6\uFF0C\u6709\u4E9B\u7EBF\u7A0B\u5C31\u6709\u53EF\u80FD\u56E0\u4E3A\u8FDF\u8FDF\u65E0\u6CD5\u83B7\u53D6\u5230\u9501\u800C\u65E0\u6CD5\u6267\u884C\u8BF7\u6C42\u3002\u4E00\u65B9\u9762\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u7528\u6237\u8BF7\u6C42\u8D85\u65F6\uFF0C\u7ED9\u7528\u6237\u5E26\u6765\u4E0D\u597D\u7684\u4F53\u9A8C\uFF0C\u53E6\u4E00\u65B9\u9762\uFF0C\u7EBF\u7A0B\u4E00\u76F4\u7B49\u5F85\u9501\uFF0C\u957F\u671F\u88AB\u5360\u7528\uFF0C\u65E0\u6CD5\u6267\u884C\u5176\u4ED6\u4EFB\u52A1\uFF0C\u5269\u4F59\u53EF\u4EE5\u6267\u884C\u7528\u6237\u8BF7\u6C42\u7684\u7EBF\u7A0B\u53D8\u5C11\uFF0C\u4ECE\u800C\u52A0\u91CD\u4E86\u7CFB\u7EDF\u8D1F\u62C5\uFF0C\u5BFC\u81F4\u66F4\u591A\u8BF7\u6C42\u8D85\u65F6\u3002</p><p>\u9488\u5BF9\u4EE5\u4E0A\u95EE\u9898\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u5E26\u8D85\u65F6\u65F6\u95F4\u7684tryLock()\u51FD\u6570\u6765\u8BF7\u6C42\u9501\uFF0C\u5982\u679C\u5728\u8BBE\u5B9A\u7684\u8D85\u65F6\u65F6\u95F4\u5185\u672A\u83B7\u53D6\u5230\u9501\uFF0C\u90A3\u4E48\uFF0C\u7EBF\u7A0B\u5C31\u4E2D\u6B62\u6267\u884C\u7528\u6237\u8BF7\u6C42\uFF0C\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u7ED9\u7528\u6237\u3002\u5F53\u7136\uFF0C\u8FD9\u53EA\u662F\u4FDD\u62A4\u63AA\u65BD\uFF0C\u6BD5\u7ADF\uFF0C\u4EE5\u4E0A\u95EE\u9898\u53EA\u6709\u5728\u65E0\u6CD5\u5E76\u53D1\u6267\u884C\u7684\u7279\u6B8A\u8BF7\u6C42\u96C6\u4E2D\u5927\u91CF\u5230\u6765\u65F6\u624D\u4F1A\u53D1\u751F\u3002</p><h2 id="juc-lock\u5E95\u5C42\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#juc-lock\u5E95\u5C42\u539F\u7406" aria-hidden="true">#</a> <strong>JUC Lock\u5E95\u5C42\u539F\u7406</strong></h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>\u5982\u4F55\u4F7F\u7528AQS\uFF08\u62BD\u8C61\u961F\u5217\u540C\u6B65\u5668\uFF09\u5B9E\u73B0JUC Lock\uFF1F</strong></p><p>\u4E0A\u4E00\u8282\uFF0C\u6211\u4EEC\u8BB2\u89E3\u4E86JUC Lock\u7684\u5404\u79CD\u7279\u6027\uFF0C\u6BD4\u5982\u652F\u6301\u91CD\u5165\u9501\u3001\u516C\u5E73\u9501\u3001\u53EF\u4E2D\u65AD\u9501\u3001\u975E\u963B\u585E\u9501\u3001\u53EF\u8D85\u65F6\u9501\u3002\u672C\u8282\uFF0C\u6211\u4EEC\u5C31\u6765\u8BB2\u4E00\u4E0BJUC Lock\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u3002JUC Lock\u5E95\u5C42\u4E3B\u8981\u4F9D\u8D56AQS\u6765\u5B9E\u73B0\u3002AQS\u4E5F\u662FJUC\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u57FA\u7840\u7EC4\u4EF6\u3002JUC\u4E2D\u5F88\u591A\u9501\uFF08Lock\u3001ReadWriteLock\uFF09\u548C\u540C\u6B65\u5DE5\u5177\uFF08Condition\u3001Semaphore\u3001CountDownLatch\uFF09\u90FD\u662F\u57FA\u4E8EAQS\u6765\u5B9E\u73B0\u7684\u3002\u56E0\u6B64\uFF0C\u5728\u8BB2\u89E3JUC Lock\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u65F6\uFF0C\u6211\u4EEC\u4F1A\u91CD\u70B9\u8BB2\u89E3AQS\u3002</p></div><h3 id="\u4E00\u3001aqs\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001aqs\u7B80\u4ECB" aria-hidden="true">#</a> <strong>\u4E00\u3001AQS\u7B80\u4ECB</strong></h3><p>AQS\u662F\u62BD\u8C61\u7C7BAbstractQueueSynchronizer\u7684\u7B80\u79F0\uFF0C\u4E2D\u6587\u7FFB\u8BD1\u4E3A\u62BD\u8C61\u961F\u5217\u540C\u6B65\u5668\u3002</p><p>\u524D\u9762\u8BB2\u5230\uFF0C\u5728Hotspot JVM\u4E2D\uFF0Csynchronized\u4E3B\u8981\u4F9D\u8D56ObjectMonitor\u7C7B\u6765\u5B9E\u73B0\u3002\u7C7B\u4E2D\u7684_cxq\u3001_EntryList\u3001_WaitSet\u7528\u6765\u6392\u961F\u7EBF\u7A0B\u3002\u5176\u4E2D\uFF0C_cxq\u3001_EntryList\u7528\u6765\u5B9E\u73B0\u9501\uFF0C\u4E5F\u5C31\u662Fsynchronized\uFF0C_WaitSet\u7528\u6765\u5B9E\u73B0\u6761\u4EF6\u53D8\u91CF\uFF0C\u4E5F\u5C31\u662Fwait()\u548Cnotify()\u3002\u5B9E\u9645\u4E0A\uFF0C\u5728\u529F\u80FD\u4E0A\uFF0CAQS\u8DDFObjectMonitor\u975E\u5E38\u7C7B\u4F3C\uFF0C\u90FD\u5B9E\u73B0\u4E86\u6392\u961F\u7EBF\u7A0B\u3001\u963B\u585E\u7EBF\u7A0B\u3001\u5524\u9192\u7EBF\u7A0B\u7B49\u529F\u80FD\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class ObjectMonitor {
  void * volatile _object; //\u8BE5Monitor\u9501\u6240\u5C5E\u7684\u5BF9\u8C61
  void * volatile _owner; //\u83B7\u53D6\u5230\u8BE5Monitor\u9501\u7684\u7EBF\u7A0B
  ObjectWaiter * volatile _cxq; //\u6CA1\u6709\u83B7\u53D6\u5230\u9501\u7684\u7EBF\u7A0B\u6682\u65F6\u52A0\u5165_cxq
  ObjectWaiter * volatile _EntryList; //\u5B58\u50A8\u7B49\u5F85\u88AB\u5524\u9192\u7684\u7EBF\u7A0B
  ObjectWaiter * volatile _WaitSet; //\u5B58\u50A8\u8C03\u7528\u4E86wait()\u7684\u7EBF\u7A0B
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u8FC7\uFF0C\u5728\u5B9E\u73B0\u601D\u8DEF\u4E0A\uFF0CAQS\u8DDFObjectMonitor\u6709\u6240\u4E0D\u540C\u3002\u9996\u5148\uFF0CObjectMonitor\u7C7B\u662F\u5728JVM\u4E2D\u57FA\u4E8EC++\u6765\u5B9E\u73B0\u7684\uFF0C\u56E0\u4E3Asynchronized\u3001wait()\u3001notify()\u662FJava\u8BED\u8A00\u63D0\u4F9B\u7684\u5185\u7F6E\u7684\u8BED\u6CD5\u548C\u51FD\u6570\u3002AQS\u7C7B\u662F\u5728JDK\u4E2D\u57FA\u4E8EJava\u8BED\u8A00\u5B9E\u73B0\u7684\uFF0C\u56E0\u4E3AJUC\u53EA\u662FJDK\u4E2D\u7684\u4E00\u4E2A\u5E76\u53D1\u5DE5\u5177\u5305\u800C\u5DF2\u3002\u5176\u6B21\uFF0CObjectMonitor\u4F7F\u7528\u4E0D\u540C\u7684\u961F\u5217\u6765\u5B9E\u73B0\u9501\u548C\u540C\u6B65\u5DE5\u5177\uFF0CAQS\u4F7F\u7528\u540C\u4E00\u4E2A\u961F\u5217\u6765\u5B9E\u73B0\u9501\u548C\u540C\u6B65\u5DE5\u5177\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u8BE6\u7EC6\u8BB2\u89E3\u4E00\u4E0BAQS\u7684\u5B9E\u73B0\u539F\u7406\u3002</p><h3 id="\u4E8C\u3001\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> <strong>\u4E8C\u3001\u6570\u636E\u7ED3\u6784</strong></h3><p>AQS\u7C7B\u4E2D\u6240\u5305\u542B\u7684\u6210\u5458\u53D8\u91CF\u5E76\u4E0D\u591A\uFF0C\u5982\u4E0B\u4EE3\u7801\u6240\u793A\u3002\u8FD9\u51E0\u4E2A\u6210\u5458\u53D8\u91CF\u6784\u6210\u4E86AQS\u5B9E\u73B0\u9501\u548C\u540C\u6B65\u5DE5\u5177\u6240\u4F9D\u8D56\u7684\u6838\u5FC3\u6570\u636E\u7ED3\u6784\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public abstract class AbstractQueuedSynchronizer
                      extends AbstractOwnableSynchronizer {
    private transient volatile Node head;
    private transient volatile Node tail;
    private volatile int state;
}

public abstract class AbstractOwnableSynchronizer {
    private transient Thread exclusiveOwnerThread;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\u4EE3\u7801\u6240\u793A\uFF0CAQS\u7EE7\u627F\u81EAAbstractOwnableSynchronizer\u7C7B\u3002AbstractOwnableSynchronizer\u7C7B\u53EA\u5305\u542B\u4E00\u4E2A\u6210\u5458\u53D8\u91CFexclusiveOwnerThread\u3002AQS\u8FDE\u5E26\u7EE7\u627F\u6765\u7684\u4E00\u4E2A\u6210\u5458\u53D8\u91CF\uFF0C\u603B\u5171\u67094\u4E2A\u6210\u5458\u53D8\u91CF\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u4F9D\u6B21\u4ECB\u7ECD\u4E0B\u5B83\u4EEC\u3002</p><p><strong>1\uFF09state</strong></p><p>\u524D\u9762\u5728\u8BB2\u5230synchronized\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u65F6\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0C\u5F53\u591A\u4E2A\u7EBF\u7A0B\u7ADE\u4E89\u9501\u65F6\uFF0C\u5B83\u4EEC\u4F1A\u901A\u8FC7CAS\u64CD\u4F5C\u6765\u8BBE\u7F6EObjectMonitor\u4E2D\u7684_owner\u5B57\u6BB5\u3002\u8C01\u8BBE\u7F6E\u6210\u529F\uFF0C\u8C01\u5C31\u83B7\u53D6\u4E86\u8FD9\u4E2A\u9501\u3002\u5B9E\u9645\u4E0A\uFF0CAQS\u4E2D\u7684state\u7684\u4F5C\u7528\u5C31\u7C7B\u4F3C\u4E8EObjectMonitor\u4E2D\u7684_owner\u5B57\u6BB5\u3002\u53EA\u4E0D\u8FC7_owner\u5B57\u6BB5\u662F\u4E00\u4E2A\u6307\u9488\uFF0C\u5B58\u50A8\u7684\u662F\u83B7\u53D6\u9501\u7684\u7EBF\u7A0B\uFF0C\u800Cstate\u662F\u4E00\u4E2Aint\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u5B58\u50A80\u30011\u7B49\u6574\u578B\u503C\u3002\u5176\u4E2D\uFF0C0\u8868\u793A\u9501\u6CA1\u6709\u88AB\u5360\u7528\uFF0C1\u8868\u793A\u9501\u5DF2\u7ECF\u88AB\u5360\u7528\uFF0C\u5927\u4E8E1\u7684\u6570\u8868\u793A\u91CD\u5165\u7684\u6B21\u6570\u3002\u5F53\u591A\u4E2A\u7EBF\u7A0B\u7ADE\u4E89\u9501\u65F6\uFF0C\u5B83\u4EEC\u4F1A\u901A\u8FC7\u5982\u4E0B\u6240\u793A\u7684CAS\u64CD\u4F5C\u6765\u66F4\u65B0state\u7684\u503C\u3002\u8FD9\u91CCCAS\u6307\u7684\u662F\u5148\u68C0\u67E5state\u7684\u503C\u662F\u5426\u4E3A0\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u5C06state\u503C\u8BBE\u7F6E\u4E3A1\u3002\u8C01\u8BBE\u7F6E\u6210\u529F\uFF0C\u8C01\u5C31\u83B7\u53D6\u4E86\u8FD9\u4E2A\u9501\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected final boolean compareAndSetState(int expect, int update) {
  return unsafe.compareAndSwapInt(this, stateOffset, expect, update);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>compareAndSetState()\u51FD\u6570\u5E95\u5C42\u4F7F\u7528Unsafe\u7C7B\u63D0\u4F9B\u7684native\u51FD\u6570\u6765\u5B9E\u73B0\u3002native\u51FD\u6570\u662FJVM\u4E2D\u7684C++\u51FD\u6570\u3002\u5982\u679C\u60F3\u8981\u9605\u8BFBnative\u51FD\u6570\u7684\u4EE3\u7801\u5B9E\u73B0\uFF0C\u90A3\u4E48\uFF0C\u6211\u4EEC\u9700\u8981\u67E5\u770BJVM\u6E90\u7801\u3002\u5B9E\u9645\u4E0A\uFF0CcompareAndSetState()\u51FD\u6570\u7ECF\u8FC7\u5C42\u5C42\u8C03\u7528\uFF0C\u6700\u5E95\u5C42\u4ECD\u7136\u662F\u4F9D\u9760\u786C\u4EF6\u63D0\u4F9B\u7684\u539F\u5B50CAS\u6307\u4EE4\u6765\u5B9E\u73B0\u3002</p><p><strong>2\uFF09exclusiveOwnerThread</strong></p><p>AQS\u4E2D\u7684exclusiveOwnerThread\u6210\u5458\u53D8\u91CF\u5B58\u50A8\u6301\u6709\u9501\u7684\u7EBF\u7A0B\uFF0C\u5B83\u914D\u5408state\u6210\u5458\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9501\u7684\u91CD\u5165\u673A\u5236\u3002\u5173\u4E8E\u91CD\u5165\u673A\u5236\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u6211\u4EEC\u7A0D\u540E\u8BB2\u89E3\u3002</p><p><strong>3\uFF09head\u548Ctail</strong></p><p>\u5728ObjectMonitor\u4E2D\uFF0C_cxq\u3001_EntryList\u7528\u6765\u5B58\u50A8\u7B49\u5F85\u9501\u7684\u7EBF\u7A0B\uFF0C_WaitSet\u7528\u6765\u5B58\u50A8\u8C03\u7528\u4E86wait()\u51FD\u6570\uFF08\u7B49\u5F85\u6761\u4EF6\u53D8\u91CF\u7684\u51FD\u6570\uFF09\u7684\u7EBF\u7A0B\u3002\u76F8\u6BD4\u800C\u8A00\uFF0CAQS\u53EA\u6709\u4E00\u4E2A\u7B49\u5F85\u961F\u5217\uFF0C\u65E2\u53EF\u4EE5\u7528\u6765\u5B58\u50A8\u7B49\u5F85\u9501\u7684\u7EBF\u7A0B\uFF0C\u53C8\u53EF\u4EE5\u7528\u6765\u5B58\u50A8\u7B49\u5F85\u6761\u4EF6\u53D8\u91CF\u7684\u7EBF\u7A0B\u3002\u5728ObjectMonitor\u4E2D\uFF0C_cxq\u4F7F\u7528\u5355\u94FE\u8868\u6765\u5B9E\u73B0\uFF0C_EntryList\u548C_WaitSet\u4F7F\u7528\u53CC\u5411\u94FE\u8868\u6765\u5B9E\u73B0\u3002\u5728AQS\u4E2D\uFF0C\u7B49\u5F85\u961F\u5217\u4F7F\u7528\u53CC\u5411\u94FE\u8868\u6765\u5B9E\u73B0\u3002\u53CC\u5411\u94FE\u8868\u7684\u8282\u70B9\u5B9A\u4E49\u5982\u4E0B\u6240\u793A\u3002AQS\u4E2D\u7684head\u548Ctail\u4E24\u4E2A\u6210\u5458\u53D8\u91CF\u5206\u522B\u4E3A\u53CC\u5411\u94FE\u8868\u7684\u5934\u6307\u9488\u548C\u5C3E\u6307\u9488\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static final class Node {
    static final Node SHARED = new Node();
    static final Node EXCLUSIVE = null;
    
    static final int CANCELLED =  1;
    static final int SIGNAL    = -1;
    static final int CONDITION = -2;
    static final int PROPAGATE = -3;
    
    volatile Thread thread;
    volatile Node prev;
    volatile Node next;
    volatile int waitStatus;
    Node nextWaiter;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E09\u3001\u57FA\u672C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u57FA\u672C\u539F\u7406" aria-hidden="true">#</a> <strong>\u4E09\u3001\u57FA\u672C\u539F\u7406</strong></h3><p>AQS\u4F7F\u7528\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\u6765\u5B9E\u73B0\u3002\u5728\u300A\u8BBE\u8BA1\u6A21\u5F0F\u4E4B\u7F8E\u300B\u4E00\u4E66\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0C\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\u5305\u542B\u4E24\u4E2A\u4E3B\u8981\u7684\u7EC4\u4EF6\uFF1A\u6A21\u677F\u65B9\u6CD5\u548C\u62BD\u8C61\u65B9\u6CD5\u3002\u6A21\u677F\u65B9\u6CD5\u5305\u542B\u4E3B\u529F\u80FD\u903B\u8F91\uFF0C\u5E76\u4E14\u4F9D\u8D56\u62BD\u8C61\u65B9\u6CD5\u6765\u5B9E\u73B0\u90E8\u5206\u903B\u8F91\u7684\u53EF\u5B9A\u5236\u5316\u3002\u5F53\u4F7F\u7528\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u5B50\u7C7B\uFF0C\u8BA9\u5176\u7EE7\u627F\u6A21\u677F\u7C7B\uFF0C\u5E76\u5B9E\u73B0\u5176\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\uFF0C\u7136\u540E\u518D\u4F7F\u7528\u5B50\u7C7B\u521B\u5EFA\u5BF9\u8C61\uFF0C\u8C03\u7528\u5BF9\u8C61\u7684\u6A21\u677F\u65B9\u6CD5\u6765\u505A\u7F16\u7A0B\u5F00\u53D1\u3002AQS\u7684\u4EE3\u7801\u7ED3\u6784\u548C\u4F7F\u7528\u65B9\u6CD5\u5927\u81F4\u4E5F\u662F\u5982\u6B64\u3002</p><p><strong>AQS\u5B9A\u4E49\u4E868\u4E2A\u6A21\u677F\u65B9\u6CD5\uFF0C\u5982\u4E0B\u6240\u793A</strong>**\u3002**\u4EE5\u4E0B8\u4E2A\u51FD\u6570\u53EF\u4EE5\u5206\u4E3A2\u7EC4\uFF0C\u5206\u522B\u7528\u4E8EAQS\u7684\u4E24\u79CD\u5DE5\u4F5C\u6A21\u5F0F\uFF1A\u72EC\u5360\u6A21\u5F0F\u548C\u5171\u4EAB\u6A21\u5F0F\u3002\u5176\u4E2D\uFF0C\u524D4\u4E2A\u51FD\u6570\u7528\u4E8E\u72EC\u5360\u6A21\u5F0F\uFF0C\u540E4\u4E2A\u51FD\u6570\u7528\u4E8E\u5171\u4EAB\u6A21\u5F0F\u3002Lock\u4E3A\u6392\u5B83\u9501\uFF0C\u56E0\u6B64\uFF0CLock\u7684\u5E95\u5C42\u5B9E\u73B0\u53EA\u4F1A\u7528\u5230AQS\u7684\u72EC\u5360\u6A21\u5F0F\u3002ReadWriteLock\u4E2D\u7684\u8BFB\u9501\u4E3A\u5171\u4EAB\u9501\uFF0C\u5199\u9501\u4E3A\u6392\u5B83\u9501\uFF0C\u56E0\u6B64\uFF0CReadWriteLock\u7684\u5E95\u5C42\u5B9E\u73B0\u65E2\u4F1A\u7528\u5230AQS\u7684\u72EC\u5360\u6A21\u5F0F\uFF0C\u53C8\u4F1A\u7528\u5230AQS\u7684\u5171\u4EAB\u6A21\u5F0F\u3002Semaphore\u3001CountdownLatch\u8FD9\u4E9B\u540C\u6B65\u5DE5\u5177\u53EA\u4F1A\u7528\u5230AQS\u7684\u5171\u4EAB\u6A21\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final void acquire(int arg) { ... }
public final void acquireInterruptibly(int arg)
                  throws InterruptedException { ... }
public final boolean tryAcquireNanos(int arg, long nanosTimeout)
                  throws InterruptedException { ... }
public final boolean release(int arg) { ... }

public final void acquireShared(int arg) { ... }
public final void acquireSharedInterruptibly(int arg)
                  throws InterruptedException { ... }
public final boolean tryAcquireSharedNanos(int arg, long nanosTimeout)
                  throws InterruptedException { ... }
public final boolean releaseShared(int arg) { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**AQS\u63D0\u4F9B\u4E864\u4E2A\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5982\u4E0B\u6240\u793A\u3002**\u524D\u4E24\u4E2A\u62BD\u8C61\u65B9\u6CD5\u7528\u4E8E\u72EC\u5360\u6A21\u5F0F\u76844\u4E2A\u6A21\u677F\u65B9\u6CD5\uFF0C\u540E\u4E24\u4E2A\u62BD\u8C61\u65B9\u6CD5\u7528\u4E8E\u5171\u4EAB\u6A21\u5F0F\u76844\u4E2A\u6A21\u677F\u65B9\u6CD5\u3002\u5728\u6807\u51C6\u7684\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\u7684\u4EE3\u7801\u5B9E\u73B0\u4E2D\uFF0C\u62BD\u8C61\u65B9\u6CD5\u9700\u8981\u4F7F\u7528abstract\u5173\u952E\u5B57\u6765\u5B9A\u4E49\uFF0C\u4EE5\u5F3A\u5236\u5B50\u7C7B\u53BB\u5B9E\u73B0\u5B83\u3002\u4F46\u4EE5\u4E0B\u62BD\u8C61\u65B9\u6CD5\u5E76\u6CA1\u6709\u4F7F\u7528abstract\u5173\u952E\u5B57\u6765\u5B9A\u4E49\uFF0C\u800C\u662F\u7ED9\u51FA\u4E86\u9ED8\u8BA4\u7684\u5B9E\u73B0\uFF0C\u5373\u629B\u51FAUnsupportOperationException\u5F02\u5E38\u3002\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u51CF\u5C11\u5F00\u53D1\u91CF\uFF0C\u5373\u6211\u4EEC\u4E0D\u9700\u8981\u5728\u5B50\u7C7B\u4E2D\u5B9E\u73B0\u6240\u6709\u7684\u62BD\u8C61\u65B9\u6CD5\uFF0C\u7528\u5230\u54EA\u4E2A\u5C31\u5B9E\u73B0\u54EA\u4E2A\u5373\u53EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected boolean tryAcquire(int arg) {
    throw new UnsupportedOperationException();
}

protected boolean tryRelease(int arg) {
    throw new UnsupportedOperationException();
}

protected int tryAcquireShared(int arg) {
    throw new UnsupportedOperationException();
}

protected boolean tryReleaseShared(int arg) {
    throw new UnsupportedOperationException();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u7ED3\u5408ReentrantLock\u6765\u770B\u4E0BAQS\u5982\u4F55\u4F7F\u7528\u3002**ReentrantLock\u65E2\u652F\u6301\u975E\u516C\u5E73\u9501\uFF0C\u53C8\u652F\u6301\u516C\u5E73\u9501\uFF0C\u5176\u90E8\u5206\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002ReentrantLock\u5B9A\u4E49\u4E86\u4E24\u4E2A\u7EE7\u627F\u81EAAQS\u7684\u5B50\u7C7B\uFF1ANonfairSync\u548CFairSync\uFF0C\u5206\u522B\u7528\u6765\u5B9E\u73B0\u975E\u516C\u5E73\u9501\u548C\u516C\u5E73\u9501\u3002\u56E0\u4E3ANonfairSync\u548CFairSync\u7684\u91CA\u653E\u9501\u7684\u903B\u8F91\u662F\u4E00\u6837\u7684\uFF0C\u6240\u4EE5\uFF0CNonfairSync\u548CFairSync\u53C8\u62BD\u8C61\u51FA\u4E86\u4E00\u4E2A\u516C\u5171\u7684\u7236\u7C7BSync\u3002\u6CE8\u610F\uFF0C\u4E3A\u4E86\u66F4\u6E05\u6670\u7684\u5C55\u793A\u539F\u7406\uFF0C\u5728\u4E0D\u6539\u53D8\u4EE3\u7801\u903B\u8F91\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u5BF9\u672C\u8282\u4E2D\u7684\u4EE3\u7801\u5747\u505A\u4E86\u5C11\u8BB8\u8C03\u6574\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ReentrantLock implements Lock {
    private final Sync sync;
    
    abstract static class Sync extends AbstractQueuedSynchronizer { ... }
    static final class NonfairSync extends Sync { ... }
    static final class FairSync extends Sync { ... }
    
    public ReentrantLock() {
        sync = new NonfairSync();
    }
    
    public ReentrantLock(boolean fair) {
        sync = fair ? new FairSync() : new NonfairSync();
    } 
     
    public void lock() {
        sync.acquire(1);
    }

    public void unlock() {
        sync.release(1);
    }
    //...\u7701\u7565\u5176\u4ED6\u65B9\u6CD5...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ReentrantLock\u4E2D\u7684lock()\u51FD\u6570\u8C03\u7528AQS\u7684acquire()\u6A21\u677F\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0Cunlock()\u51FD\u6570\u8C03\u7528AQS\u7684release()\u6A21\u677F\u65B9\u6CD5\u6765\u5B9E\u73B0\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u6765\u770B\u4E0Bacquire()\u548Crelease()\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u3002</p><p><strong>1\uFF09acquire()\u6A21\u677F\u65B9\u6CD5</strong></p><p>acquire()\u7684\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\u3002acquire()\u7684\u4EE3\u7801\u5B9E\u73B0\u770B\u4F3C\u975E\u5E38\u7B80\u5355\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u5176\u5305\u542B\u7684\u903B\u8F91\u53EF\u4E0D\u5C11\u3002acquire()\u5148\u8C03\u7528tryAcquire()\u65B9\u6CD5\u53BB\u7ADE\u4E89\u83B7\u53D6\u9501\u3002\u5982\u679CtryAcquire()\u83B7\u53D6\u9501\u6210\u529F\uFF0Cacquire()\u5C31\u76F4\u63A5\u8FD4\u56DE\u3002\u5982\u679CtryAcquire()\u83B7\u53D6\u9501\u5931\u8D25\uFF0C\u90A3\u4E48\u5C31\u4F1A\u6267\u884CaddWaiter()\uFF0C\u5C06\u7EBF\u7A0B\u5305\u88F9\u4E3ANode\u8282\u70B9\u653E\u5165\u7B49\u5F85\u961F\u5217\u7684\u5C3E\u90E8\uFF0C\u6700\u540E\u8C03\u7528acquireQueued()\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u3002selfInterrupt()\u7528\u6765\u5904\u7406\u4E2D\u65AD\uFF0C\u5982\u679C\u5728\u7B49\u5F85\u9501\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u7EBF\u7A0B\u88AB\u5176\u4ED6\u7EBF\u7A0B\u4E2D\u65AD\uFF0C\u90A3\u4E48\uFF0C\u5728\u83B7\u53D6\u9501\u4E4B\u540E\uFF0C\u5C06\u7EBF\u7A0B\u7684\u4E2D\u65AD\u6807\u8BB0\u8BBE\u7F6E\u4E3Atrue\u3002\u8FD9\u91CC\u7684\u4E2D\u65AD\u4E0D\u662F\u91CD\u70B9\uFF0C\u7B80\u5355\u4E86\u89E3\u5373\u53EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final void acquire(int arg) {
    // tryAcquire() -&gt; addWaiter() -&gt; acquireQueued()
    if (!tryAcquire(arg) &amp;&amp; acquireQueued(addWaiter(Node.EXCLUSIVE), arg))
        selfInterrupt();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tryAcquire()\u662F\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5728NonfairSync\u548CFairSync\u4E2D\u5B9E\u73B0\u3002\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u6211\u5BF9\u4EE3\u7801\u505A\u4E86\u8BE6\u7EC6\u7684\u6CE8\u91CA\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u91CD\u8FF0\u5176\u4E2D\u7684\u4EE3\u7801\u903B\u8F91\u4E86\u3002\u4E24\u4E2AtryAcquire()\u65B9\u6CD5\u7684\u4EE3\u7801\u5B9E\u73B0\u533A\u522B\u4E5F\u4E0D\u5927\uFF0C\u552F\u4E00\u7684\u533A\u522B\u662F\u5728\u83B7\u53D6\u9501\u4E4B\u524D\uFF0CFairSync\u4F1A\u8C03\u7528hasQueuedPredecessors()\u51FD\u6570\uFF0C\u67E5\u770B\u7B49\u5F85\u961F\u5217\u4E2D\u662F\u5426\u6709\u7EBF\u7A0B\u5728\u6392\u961F\uFF0C\u5982\u679C\u6709\uFF0C\u90A3\u4E48tryAcquire(\uFF09\u8FD4\u56DEfalse\uFF0C\u8868\u793A\u7ADE\u4E89\u9501\u5931\u8D25\uFF0C\u4ECE\u800C\u7981\u6B62\u201C\u63D2\u961F\u201D\u83B7\u53D6\u9501\u7684\u884C\u4E3A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static final class NonfairSync extends Sync {
    // \u5C1D\u8BD5\u83B7\u53D6\u9501\uFF0C\u6210\u529F\u8FD4\u56DEtrue\uFF0C\u5931\u8D25\u8FD4\u56DEfalse\u3002AQS\u7528\u4E8E\u5B9E\u73B0\u9501\u65F6\uFF0Cacquires=1
    protected final boolean tryAcquire(int acquires) {
        final Thread current = Thread.currentThread();
        int c = getState(); //\u83B7\u53D6state\u503C
        if (c == 0) { //1\u3001\u9501\u6CA1\u6709\u88AB\u5176\u4ED6\u7EBF\u7A0B\u5360\u7528
            if (compareAndSetState(0, acquires)) { //CAS\u8BBE\u7F6Estate\u503C\u4E3A1
                setExclusiveOwnerThread(current); //\u8BBE\u7F6EexclusiveOwnerThread
                return true; //\u83B7\u53D6\u9501\u6210\u529F
            }
        } else if (current == getExclusiveOwnerThread()) { //2\u3001\u9501\u53EF\u91CD\u5165
            int nextc = c + acquires; // state+1
            if (nextc &lt; 0) //\u91CD\u5165\u6B21\u6570\u592A\u591A\uFF0C\u8D85\u8FC7\u4E86int\u6700\u5927\u503C\uFF0C\u6EA2\u51FA\u4E3A\u8D1F\u6570\uFF0C\u6B64\u60C5\u51B5\u7F55\u89C1
                throw new Error(&quot;Maximum lock count exceeded&quot;);
            setState(nextc); // state=state+1\uFF0Cstate\u8BB0\u5F55\u91CD\u5165\u7684\u6B21\u6570\uFF0C\u89E3\u9501\u7684\u65F6\u5019\u7528
            return true; //\u83B7\u53D6\u9501\u6210\u529F
        }
        return false; //3\u3001\u9501\u88AB\u5176\u4ED6\u7EBF\u7A0B\u5360\u7528
    }    
}

static final class FairSync extends Sync {
    protected final boolean tryAcquire(int acquires) {
        final Thread current = Thread.currentThread();
        int c = getState();
        if (c == 0) { //1\u3001\u9501\u6CA1\u6709\u88AB\u5360\u7528
            if (!hasQueuedPredecessors() &amp;&amp;  //\u7B49\u5F85\u961F\u5217\u4E2D\u6CA1\u6709\u7EBF\u7A0B\u65F6\u624D\u83B7\u53D6\u9501
                compareAndSetState(0, acquires)) {
                setExclusiveOwnerThread(current);
                return true;
            }
        } else if (current == getExclusiveOwnerThread()) { //2\u3001\u9501\u53EF\u91CD\u5165
            int nextc = c + acquires;
            if (nextc &lt; 0)
                throw new Error(&quot;Maximum lock count exceeded&quot;);
            setState(nextc);
            return true;
        }
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>addWaiter()\u51FD\u6570\u7684\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\u3002\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\uFF0C\u5F80\u94FE\u8868\u5C3E\u90E8\u6DFB\u52A0\u8282\u70B9\u4F1A\u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\uFF0C\u56E0\u6B64\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u91C7\u7528\u81EA\u65CB+CAS\u64CD\u4F5C\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5728AtomicInteger\u7B49\u539F\u5B50\u7C7B\u4E2D\u88AB\u5927\u91CF\u4F7F\u7528\uFF0C\u6211\u4EEC\u5728\u8BB2\u89E3\u539F\u5B50\u7C7B\u65F6\u518D\u8BE6\u7EC6\u8BB2\u89E3\u3002\u9664\u6B64\u4E4B\u5916\uFF0CaddWaiter()\u51FD\u6570\u8FD8\u9700\u8981\u7279\u6B8A\u5904\u7406\u94FE\u8868\u4E3A\u7A7A\u7684\u60C5\u51B5\uFF0C\u540C\u6837\u4E5F\u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\uFF0C\u4E5F\u540C\u6837\u662F\u91C7\u7528\u81EA\u65CB+CAS\u64CD\u4F5C\u89E3\u51B3\u7684\u3002\u6CE8\u610F\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u64CD\u4F5C\uFF0CAQS\u4E2D\u7684\u53CC\u5411\u94FE\u8868\u5E26\u6709\u865A\u62DF\u5934\u8282\u70B9\u3002\u5173\u4E8E\u865A\u62DF\u5934\u8282\u70B9\uFF0C\u4F60\u53EF\u4EE5\u9605\u8BFB\u6211\u7684\u300A\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u4E4B\u7F8E\u300B\u8FD9\u672C\u4E66\u6765\u4E86\u89E3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private Node addWaiter(Node mode) {
    Node node = new Node(Thread.currentThread(), mode);
    // \u81EA\u65CB\u6267\u884CCAS\u64CD\u4F5C\uFF0C\u76F4\u5230\u6210\u529F\u4E3A\u6B62
    for (;;) {
        Node t = tail;
        if (t == null) { //\u94FE\u8868\u4E3A\u7A7A\uFF0C\u6DFB\u52A0\u865A\u62DF\u5934\u8282\u70B9
            //CAS\u64CD\u4F5C\u89E3\u51B3\u6DFB\u52A0\u865A\u62DF\u5934\u8282\u70B9\u7684\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898
            if (compareAndSetHead(null, new Node()))
                tail = head;
        } else { //\u94FE\u8868\u4E0D\u4E3A\u7A7A
            node.prev = t;
            //CAS\u64CD\u4F5C\u89E3\u51B3\u4E86\u540C\u65F6\u5F80\u94FE\u8868\u5C3E\u90E8\u6DFB\u52A0\u8282\u70B9\u65F6\u7684\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898
            if (compareAndSetTail(t, node)) {
                t.next = node;
                return node;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>acquireQueued()\u7684\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\uFF0C\u4E3B\u8981\u5305\u542B\u4E24\u90E8\u5206\u903B\u8F91\uFF1A\u4F7F\u7528tryAcquire()\u51FD\u6570\u6765\u7ADE\u4E89\u9501\u548C\u4F7F\u7528park()\u51FD\u6570\u6765\u963B\u585E\u7EBF\u7A0B\uFF0C\u5E76\u4E14\u91C7\u7528for\u5FAA\u73AF\u6765\u4EA4\u66FF\u6267\u884C\u8FD9\u4E24\u4E2A\u903B\u8F91\u3002\u4E4B\u6240\u4EE5\u8FD9\u6837\u505A\uFF0C\u662F\u56E0\u4E3A\u7EBF\u7A0B\u5728\u88AB\u5524\u9192\uFF08\u53D6\u6D88\u963B\u585E\uFF09\u4E4B\u540E\uFF0C\u5E76\u4E0D\u662F\u76F4\u63A5\u83B7\u53D6\u9501\uFF0C\u800C\u662F\u9700\u8981\u91CD\u65B0\u7ADE\u4E89\u9501\uFF0C\u5982\u679C\u7ADE\u4E89\u5931\u8D25\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u518D\u6B21\u88AB\u963B\u585E\u3002\u5173\u4E8E\u4EE3\u7801\u4E2D\u6D89\u53CA\u7684\u4E2D\u65AD\u7684\u5904\u7406\u903B\u8F91\uFF0C\u6211\u4EEC\u5728\u672C\u8282\u4E2D\u7684\u4E2D\u65AD\u673A\u5236\u5C0F\u7ED3\u4E2D\u8BB2\u89E3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>final boolean acquireQueued(final Node node, int arg) {
    boolean failed = true;
    try {
        boolean interrupted = false;
        //\u81EA\u65CB\uFF08\u7ADE\u4E89\u9501+\u963B\u585E\uFF09\uFF0C\u56E0\u4E3A\u88AB\u5524\u9192\u4E4B\u540E\u4E0D\u4E00\u5B9A\u80FD\u7ADE\u4E89\u5230\u9501\uFF0C\u6240\u4EE5\u8981\u81EA\u65CB
        for (;;) {
            final Node p = node.predecessor();
            // \u5982\u679C\u7EBF\u7A0B\u662F\u88AB\u4E2D\u65AD\u5524\u9192\u7684\uFF0C\u90A3\u4E48p\u5C31\u4E0D\u4E00\u5B9A\u7B49\u4E8Ehead\uFF0C\u4E5F\u5C31\u4E0D\u80FD\u53BB\u7ADE\u4E89\u9501
            if (p == head &amp;&amp; tryAcquire(arg)) {
                setHead(node); //\u628Anode\u8BBE\u7F6E\u6210\u865A\u62DF\u5934\u8282\u70B9\uFF0C\u4E5F\u5C31\u76F8\u5F53\u4E8E\u5C06\u5B83\u5220\u9664
                p.next = null; // help GC
                failed = false;
                return interrupted;
            }
            // \u8C03\u7528park()\u51FD\u6570\u6765\u963B\u585E\u7EBF\u7A0B\uFF0C\u7EBF\u7A0B\u88AB\u5524\u9192\u6709\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5\uFF1A
            // 1\u3001\u5176\u4ED6\u7EBF\u7A0B\u8C03\u7528unpark()\u51FD\u6570\u5524\u9192\uFF0C\u6B64\u65F6\uFF0C\u8282\u70B9\u4F4D\u4E8E\u865A\u62DF\u5934\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\uFF0Cp==head
            // 2\u3001\u88AB\u4E2D\u65AD\u5524\u9192\uFF0C\u6B64\u65F6\uFF0C\u8282\u70B9\u4E0D\u4E00\u5B9A\u662F\u865A\u62DF\u5934\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\uFF0Cp\u4E0D\u4E00\u5B9A\u7B49\u4E8Ehead
            if (parkAndCheckInterrupt()) interrupted = true;
        }
    } finally { //\u4EE5\u4E0A\u8FC7\u7A0B\u53EA\u8981\u629B\u51FA\u5F02\u5E38\uFF0C\u90FD\u8981\u5C06\u8FD9\u4E2A\u8282\u70B9\u6807\u8BB0\u4E3ACANCELLED\uFF0C\u7B49\u5F85\u88AB\u5220\u9664
        if (failed) cancelAcquire(node);
    }
}

private final boolean parkAndCheckInterrupt() {
    //\u5E95\u5C42\u8C03\u7528JVM\u63D0\u4F9B\u7684native park()\u51FD\u6570\u6765\u5B9E\u73B0\uFF0C\u8DDFsynchronized\u4F7F\u7528\u7684park()\u51FD\u6570\u76F8\u540C
    LockSupport.park(this);
    return Thread.interrupted();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2\uFF09release()\u6A21\u677F\u65B9\u6CD5</strong></p><p>release()\u6A21\u677F\u65B9\u6CD5\u7684\u4EE3\u7801\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u4E3B\u8981\u5305\u542B\u4E24\u90E8\u5206\u903B\u8F91\uFF1A\u4F7F\u7528tryRelease()\u51FD\u6570\u91CA\u653E\u9501\u548C\u8C03\u7528unpark()\u51FD\u6570\u5524\u9192\u94FE\u9996\u8282\u70B9\uFF08\u9664\u865A\u62DF\u5934\u8282\u70B9\u4E4B\u5916\uFF09\u5BF9\u5E94\u7684\u7EBF\u7A0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final boolean release(int arg) {
    if (tryRelease(arg)) {
        Node h = head;
        if (h != null &amp;&amp; h.waitStatus != 0)
            unparkSuccessor(h); //\u5185\u90E8\u8C03\u7528unpark()\u51FD\u6570
        return true;
    }
    return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tryRelease()\u662F\u62BD\u8C61\u65B9\u6CD5\u3002\u4E0D\u7BA1\u662F\u516C\u5E73\u9501\u8FD8\u662F\u975E\u516C\u5E73\u9501\uFF0CtryRelease()\u91CA\u653E\u9501\u7684\u903B\u8F91\u76F8\u540C\uFF0C\u5982\u4E0B\u6240\u793A\u3002\u4EE3\u7801\u4E2D\u6709\u8BE6\u7EC6\u7684\u6CE8\u91CA\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u4EE3\u7801\u903B\u8F91\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static final class Sync extends AbstractQueuedSynchronizer {
    // \u91CA\u653E\u9501\uFF0C\u6210\u529F\u8FD4\u56DEtrue\uFF0C\u5931\u8D25\u8FD4\u56DEfalse\u3002AQS\u7528\u4E8E\u5B9E\u73B0\u9501\u65F6\uFF0Creleases=1
    protected final boolean tryRelease(int releases) {
        int c = getState() - releases; // state-1
        //\u4E0D\u6301\u6709\u9501\u7684\u7EBF\u7A0B\u53BB\u91CA\u653E\u9501\uFF0C\u8FD9\u4E0D\u662F\u778E\u80E1\u95F9\u561B\uFF0C\u629B\u51FA\u5F02\u5E38
        if (Thread.currentThread() != getExclusiveOwnerThread())
            throw new IllegalMonitorStateException();
        if (c == 0) { //state-1\u4E4B\u540E\u4E3A0\uFF0C\u89E3\u9501
            setExclusiveOwnerThread(null);
            return true\uFF1B
        }
        setState(c); //state-1\u4E4B\u540E\u4E0D\u4E3A0\uFF0C\u8BF4\u660E\u9501\u88AB\u91CD\u5165\u591A\u6B21\uFF0C\u8FD8\u4E0D\u80FD\u89E3\u9501\u3002
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u8FF0\u5206\u6790\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6A21\u677F\u65B9\u6CD5acquire()\u5305\u542B\u52A0\u9501\u7684\u6240\u6709\u903B\u8F91\uFF0C\u6BD4\u5982\u7ADE\u4E89\u9501\u3001\u7ADE\u4E89\u5931\u8D25\u4E4B\u540E\u7684\u6392\u961F\u3001\u963B\u585E\uFF0C\u800C\u7ADE\u4E89\u9501\u8FD9\u90E8\u5206\u903B\u8F91\u7531\u62BD\u8C61\u65B9\u6CD5tryAcquire()\u6765\u5B9E\u73B0\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u5B50\u7C7B\u4E2D\u5B9A\u5236\u5982\u4F55\u7ADE\u4E89\u9501\uFF0C\u6BD4\u5982\u662F\u5426\u652F\u6301\u91CD\u5165\u9501\u3001\u662F\u5426\u652F\u6301\u516C\u5E73\u9501\u7B49\u3002\u6A21\u677F\u65B9\u6CD5release()\u5305\u542B\u89E3\u9501\u7684\u6240\u6709\u903B\u8F91\uFF0C\u6BD4\u5982\u91CA\u653E\u9501\u3001\u5524\u9192\u7B49\u5F85\u7EBF\u7A0B\uFF0C\u800C\u91CA\u653E\u9501\u8FD9\u90E8\u5206\u903B\u8F91\u7531\u62BD\u8C61\u65B9\u6CD5tryRelease()\u6765\u5B9E\u73B0\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728\u5B50\u7C7B\u4E2D\u5B9A\u5236\u5982\u4F55\u91CA\u653E\u9501\u3002</p><h3 id="\u56DB\u3001\u4E2D\u65AD\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u4E2D\u65AD\u673A\u5236" aria-hidden="true">#</a> <strong>\u56DB\u3001\u4E2D\u65AD\u673A\u5236</strong></h3><p>\u5728\u72EC\u5360\u6A21\u5F0F\u4E0B\uFF0CAQS\u4E2D\u5BF9\u5E94\u7684\u6A21\u677F\u65B9\u6CD5\u67094\u4E2A\u3002\u524D\u9762\u8BB2\u5230\u4E86\u4E24\u4E2A\uFF1Aacquire()\u548Crelease()\uFF0C\u5206\u522B\u7528\u6765\u5B9E\u73B0ReentrantLock\u4E2D\u7684lock()\u548Cunlock()\u51FD\u6570\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u4E0B\u53E6\u5916\u4E24\u4E2A\uFF1AaquireInterruptibly()\u548CtryAquireNanos()\uFF0C\u5B83\u4EEC\u5206\u522B\u7528\u6765\u5B9E\u73B0ReentrantLock\u4E2D\u7684lockInterruptibly()\u51FD\u6570\u548C\u5E26\u8D85\u65F6\u65F6\u95F4\u7684tryLock()\u51FD\u6570\u3002\u5177\u4F53\u5982\u4E0B\u4EE3\u7801\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void lockInterruptibly() throws InterruptedException {
    sync.acquireInterruptibly(1);
}

public boolean tryLock(long timeout, TimeUnit unit)
                               throws InterruptedException {
    return sync.tryAcquireNanos(1, unit.toNanos(timeout));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>acquireInterruptibly()\u6A21\u677F\u65B9\u6CD5\u5BF9\u5E94\u7684\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\u3002\u4EE3\u7801\u5B9E\u73B0\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u5982\u679C\u7EBF\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u5219\u629B\u51FAInterruptedException\u5F02\u5E38\uFF0C\u5426\u5219\uFF0C\u8C03\u7528tryAcquire()\u7ADE\u4E89\u83B7\u53D6\u9501\uFF0C\u5982\u679C\u83B7\u53D6\u9501\u6210\u529F\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5426\u5219\uFF0C\u8C03\u7528doAcquireInterruptible()\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final void acquireInterruptibly(int arg) throws InterruptedException {
    if (Thread.interrupted()) throw new InterruptedException();
    if (!tryAcquire(arg)) doAcquireInterruptibly(arg);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>doAcquireInterruptibly()\u51FD\u6570\u7684\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\uFF0C\u8DDF\u4E4B\u524D\u8BB2\u7684acquireQueued()\u51FD\u6570\u7684\u4EE3\u7801\u5B9E\u73B0\u975E\u5E38\u76F8\u4F3C\u3002\u552F\u4E00\u7684\u533A\u522B\u662F\u5BF9\u4E2D\u65AD\u7684\u54CD\u5E94\u5904\u7406\u4E0D\u540C\u3002parkAndCheckInterrupt()\u51FD\u6570\u8FD4\u56DE\u6709\u4E24\u79CD\u60C5\u51B5\uFF0C\u4E00\u79CD\u662F\u5176\u4ED6\u7EBF\u7A0B\u8C03\u7528\u4E86unpark()\u51FD\u6570\u53D6\u6D88\u963B\u585E\uFF0C\u53E6\u4E00\u79CD\u662F\u88AB\u5176\u4ED6\u7EBF\u7A0B\u4E2D\u65AD\u3002\u5BF9\u4E8E\u7B2C\u4E8C\u79CD\u60C5\u51B5\uFF0CacquireQueued()\u51FD\u6570\u4E0D\u5BF9\u4E2D\u65AD\u505A\u4EFB\u4F55\u5904\u7406\uFF0C\u7EE7\u7EED\u7B49\u5F85\u9501\u3002doAcquireInterruptibly()\u51FD\u6570\u5219\u662F\u5C06\u4E2D\u65AD\u5305\u88F9\u4E3AInterruptedException\u5F02\u5E38\u629B\u51FA\uFF0C\u7EC8\u6B62\u7B49\u5F85\u9501\u3002\u56E0\u6B64\uFF0C\u8C03\u7528acquire()\u5B9E\u73B0\u7684lock()\u51FD\u6570\uFF0C\u5728\u963B\u585E\u7B49\u5F85\u9501\u65F6\uFF0C\u4E0D\u4F1A\u88AB\u4E2D\u65AD\u3002\u8C03\u7528acquireInterruptibly()\u5B9E\u73B0\u7684lockInterruptibly()\u51FD\u6570\uFF0C\u5728\u963B\u585E\u7B49\u5F85\u9501\u65F6\uFF0C\u53EF\u4EE5\u88AB\u4E2D\u65AD\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private void doAcquireInterruptibly(int arg) throws InterruptedException {
    final Node node = addWaiter(Node.EXCLUSIVE);
    boolean failed = true;
    try {
        for (;;) {
            final Node p = node.predecessor();
            if (p == head &amp;&amp; tryAcquire(arg)) {
                setHead(node);
                p.next = null; // help GC
                failed = false;
                return;
            }
            if (parkAndCheckInterrupt())
                throw new InterruptedException(); //\u533A\u522B\uFF1A\u629B\u51FA\u5F02\u5E38\uFF01
        }
    } finally {
        if (failed) cancelAcquire(node);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E94\u3001\u8D85\u65F6\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u8D85\u65F6\u673A\u5236" aria-hidden="true">#</a> <strong>\u4E94\u3001\u8D85\u65F6\u673A\u5236</strong></h3><p>tryAquireNanos()\u6A21\u677F\u65B9\u6CD5\u7684\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\u3002\u4EE3\u7801\u5B9E\u73B0\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u5982\u679C\u7EBF\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u5219\u76F4\u63A5\u629B\u51FAInterruptedException\u5F02\u5E38\uFF0C\u5426\u5219\uFF0C\u8C03\u7528tryAcquire()\u7ADE\u4E89\u83B7\u53D6\u9501\uFF0C\u5982\u679C\u83B7\u53D6\u9501\u6210\u529F\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5426\u5219\uFF0C\u8C03\u7528doAcquireNanos()\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final boolean tryAcquireNanos(int arg, long nanosTimeout)
    throws InterruptedException {
    if (Thread.interrupted()) throw new InterruptedException();
    return tryAcquire(arg) || doAcquireNanos(arg, nanosTimeout);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>doAcquireNanos()\u51FD\u6570\u7684\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\u3002\u5728doAcquireInterruptibly()\u51FD\u6570\u7684\u4EE3\u7801\u5B9E\u73B0\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0CdoAcquireNanos()\u51FD\u6570\u53C8\u6DFB\u52A0\u4E86\u5BF9\u8D85\u65F6\u7684\u5904\u7406\u673A\u5236\u3002\u56E0\u6B64\uFF0C\u4F7F\u7528tryAcquireNanos()\u5B9E\u73B0\u7684ReentrantLock\u7684tryLock()\u51FD\u6570\uFF0C\u65E2\u652F\u6301\u4E2D\u65AD\uFF0C\u53C8\u652F\u6301\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private boolean doAcquireNanos(int arg, long nanosTimeout)
                                    throws InterruptedException {
    if (nanosTimeout &lt;= 0L) return false;
    final long deadline = System.nanoTime() + nanosTimeout;
    final Node node = addWaiter(Node.EXCLUSIVE);
    boolean failed = true;
    try {
        for (;;) {
            final Node p = node.predecessor();
            if (p == head &amp;&amp; tryAcquire(arg)) {
                setHead(node);
                p.next = null; // help GC
                failed = false;
                return true;
            }
            nanosTimeout = deadline - System.nanoTime();
            if (nanosTimeout &lt;= 0L) return false;
            if (nanosTimeout &gt; spinForTimeoutThreshold) //\u4E0D\u7740\u6025\u963B\u585E\uFF0C\u5148\u81EA\u65CB\u4E00\u4E0B
                LockSupport.parkNanos(this, nanosTimeout); //\u8D85\u65F6\u963B\u585E
            if (Thread.interrupted()) throw new InterruptedException();
        }
    } finally {
        if (failed) cancelAcquire(node);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u652F\u6301\u8D85\u65F6\u963B\u585E\uFF0C\u5728\u963B\u585E\u7EBF\u7A0B\u65F6\uFF0CdoAcquireNanos()\u51FD\u6570\u8C03\u7528parkNanos()\u51FD\u6570\u3002parkNanos()\u51FD\u6570\u7684\u5B9E\u73B0\u65B9\u5F0F\u8DDFpark()\u51FD\u6570\u5DEE\u4E0D\u591A\u3002\u5728\u8BB2\u89E3synchronized\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u63D0\u5230\uFF0Cpark()\u51FD\u6570\u7684\u4EE3\u7801\u5B9E\u73B0\u5927\u81F4\u5982\u4E0B\u6240\u793A\u3002parkNanos()\u53EA\u9700\u8981\u5C06\u5176\u4E2D\u7684pthread_cond_wait()\u51FD\u6570\u66FF\u6362\u6210\u4E86pthread_cond_timewait()\u51FD\u6570\u4FBF\u53EF\u4EE5\u5B9E\u73B0\u8D85\u65F6\u7B49\u5F85\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
boolean ready = false;
void park() {
  ...
  pthread_mutex_lock(&amp;mutex);
  while (!ready) {
      pthread_cond_wait(&amp;cond, &amp;mutex);
  }
  ready = false;
  pthread_mutex_unlock(&amp;mutex);
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BFB\u5199\u9501\u548Cstampedlock" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u5199\u9501\u548Cstampedlock" aria-hidden="true">#</a> <strong>\u8BFB\u5199\u9501\u548CStampedLock</strong></h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>ReadWriteLock\u7684\u9501\u5347\u7EA7\u4E0E\u9501\u964D\u7EA7\u53CA\u5176\u5E95\u5C42\u5B9E\u73B0\u539F\u7406</strong></p><p>\u5728\u4E0A\u4E0A\u8282\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0CJUC\u63D0\u4F9B\u7684\u9501\u6709\u4E09\u7C7B\uFF1A\u666E\u901A\u4E92\u65A5\u9501\uFF08Lock\u548CReentrantLock\uFF09\u3001\u8BFB\u5199\u9501\uFF08ReadWriteLock\u548CReentrantReadWriteLock\uFF09\u3001StampedLock\u3001\u4E0A\u4E24\u8282\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E86JUC\u4E2D\u7684Lock\uFF0C\u5E76\u4E14\u8BB2\u89E3\u4E86\u5176\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\uFF0C\u7279\u522B\u662FAQS\u3002\u672C\u8282\uFF0C\u6211\u4EEC\u8BB2\u89E3\u8BFB\u5199\u9501\u548CStampedLock\u3002</p></div><h3 id="\u4E00\u3001\u8BFB\u5199\u9501\u7684\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u8BFB\u5199\u9501\u7684\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> <strong>\u4E00\u3001\u8BFB\u5199\u9501\u7684\u57FA\u672C\u7528\u6CD5</strong></h3><p>\u4E3A\u4E86\u63D0\u9AD8\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u4EE3\u7801\u6267\u884C\u7684\u5E76\u53D1\u5EA6\uFF0C\u4E24\u4E2A\u8BFB\u64CD\u4F5C\u662F\u53EF\u4EE5\u5E76\u53D1\u6267\u884C\u7684\uFF0C\u4F46\u662F\uFF0C\u8BFB\u64CD\u4F5C\u548C\u5199\u64CD\u4F5C\u4E0D\u80FD\u5E76\u53D1\u6267\u884C\uFF0C\u540C\u7406\uFF0C\u5199\u64CD\u4F5C\u548C\u5199\u64CD\u4F5C\u4E5F\u4E0D\u80FD\u5E76\u53D1\u6267\u884C\u3002\u4E3A\u4E86\u6EE1\u8DB3\u8FD9\u6837\u7279\u6B8A\u7684\u52A0\u9501\u9700\u6C42\uFF0CJUC\u63D0\u4F9B\u4E86\u8BFB\u5199\u9501\uFF08ReadWriteLock\u63A5\u53E3\u548CReentrantReadWriteLock\u7C7B\uFF09\u3002</p><p>ReadWriteLock\u63A5\u53E3\u7684\u5B9A\u4E49\uFF0C\u5982\u4E0B\u6240\u793A\u3002\u8DDFLock\u548CReentrantLock\u7684\u5173\u7CFB\u7C7B\u4F3C\uFF0CReadWriteLock\u4E5F\u53EA\u6709\u4E00\u4E2A\u53EF\u91CD\u5165\u7684\u5B9E\u73B0\u7C7BReentrantReadWriteLock\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface ReadWriteLock {
    Lock readLock();
    Lock writeLock();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ReadWriteLock\u63A5\u53E3\u4E2D\u53EA\u5305\u542B\u4E24\u4E2A\u51FD\u6570\uFF0C\u5176\u4E2D\uFF0CreadLock()\u51FD\u6570\u8FD4\u56DE\u8BFB\u9501\u3002\u8BFB\u9501\u7528\u6765\u7ED9\u8BFB\u64CD\u4F5C\u52A0\u9501\u3002writeLock()\u51FD\u6570\u8FD4\u56DE\u5199\u9501\u3002\u5199\u9501\u7528\u6765\u7ED9\u5199\u64CD\u4F5C\u52A0\u9501\u3002\u8BFB\u9501\u662F\u4E00\u79CD\u5171\u4EAB\u9501\uFF0C\u8BFB\u9501\u53EF\u4EE5\u88AB\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u83B7\u53D6\u3002\u5199\u9501\u662F\u6392\u5B83\u9501\u3002\u5199\u9501\u540C\u65F6\u53EA\u80FD\u88AB\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u53D6\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u8BFB\u9501\u548C\u5199\u9501\u4E4B\u95F4\u4E5F\u662F\u6392\u5B83\u7684\u3002\u56E0\u6B64\uFF0C\u8BFB\u5199\u9501\u4E00\u822C\u7528\u4E8E\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\u3002\u8BFB\u5199\u9501\u7684\u4F7F\u7528\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u4E24\u4E2A\u7EBF\u7A0B\u5141\u8BB8\u5E76\u53D1\u6267\u884Cget()\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  private List&lt;String&gt; list = new LinkedList&lt;&gt;();
  private ReadWriteLock rwLock = new ReentrantReadWriteLock();
  private Lock rLock = rwLock.readLock(); //\u8BFB\u9501
  private Lock wLock = rwLock.writeLock(); //\u5199\u9501
  
  public void add(int idx, String elem) {
    wLock.lock(); //\u52A0\u5199\u9501
    try {
      list.add(idx, elem);
    } finally {
      wLock.unlock(); //\u91CA\u653E\u5199\u9501
    }
  }
  
  public String get(int idx) {
    rLock.lock(); //\u52A0\u8BFB\u9501
    try {
      return list.get(idx);
    } finally {
      rLock.unlock(); //\u91CA\u653E\u8BFB\u9501
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ReentrantReadWriteLock\u65E2\u652F\u6301\u516C\u5E73\u9501\u53C8\u652F\u6301\u975E\u516C\u5E73\u9501\u3002\u8DDFReentrantLock\u7684\u516C\u5E73\u9501\u548C\u975E\u516C\u5E73\u9501\u7684\u6784\u5EFA\u65B9\u6CD5\u4E00\u6837\uFF0CReentrantReadWriteLock\u9ED8\u8BA4\u4E3A\u975E\u516C\u5E73\u9501\u3002\u5982\u679C\u8981\u6210\u521B\u5EFA\u516C\u5E73\u9501\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728\u521B\u5EFAReentrantReadWriteLock\u5BF9\u8C61\u65F6\uFF0C\u5C06\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u8BBE\u7F6E\u4E3Atrue\u5373\u53EF\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ReadWriteLock rwLock = new ReentrantReadWriteLock(true); //\u516C\u5E73\u9501
ReadWriteLock rwLock = new ReentrantReadWriteLock(false); //\u975E\u516C\u5E73\u9501
ReadWriteLock rwLock = new ReentrantReadWriteLock(); //\u9ED8\u8BA4\u4E3A\u975E\u516C\u5E73\u9501
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u3001\u9501\u5347\u7EA7\u548C\u9501\u964D\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u9501\u5347\u7EA7\u548C\u9501\u964D\u7EA7" aria-hidden="true">#</a> <strong>\u4E8C\u3001\u9501\u5347\u7EA7\u548C\u9501\u964D\u7EA7</strong></h3><p>\u524D\u9762\u8BB2\u5230\uFF0C\u7EDD\u5927\u90E8\u5206\u9501\u90FD\u662F\u53EF\u91CD\u5165\u9501\uFF0C\u8BFB\u5199\u9501\u4E5F\u4E0D\u4F8B\u5916\u3002\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u53D6\u8BFB\u9501\u4E4B\u540E\uFF0C\u5728\u8BFB\u9501\u91CA\u653E\u524D\uFF0C\u8FD8\u53EF\u4EE5\u518D\u6B21\u83B7\u53D6\u8BFB\u9501\u3002\u540C\u7406\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u53D6\u5199\u9501\u4E4B\u540E\uFF0C\u5728\u5199\u9501\u91CA\u653E\u524D\uFF0C\u8FD8\u53EF\u4EE5\u518D\u6B21\u83B7\u53D6\u5199\u9501\u3002\u4F46\u662F\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u5728\u83B7\u53D6\u8BFB\u9501\u4E4B\u540E\uFF0C\u5728\u8BFB\u9501\u91CA\u653E\u524D\uFF0C\u662F\u5426\u8FD8\u80FD\u518D\u83B7\u53D6\u5199\u9501\uFF1F\u8FD8\u6709\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u5728\u83B7\u53D6\u5199\u9501\u4E4B\u540E\uFF0C\u5728\u5199\u9501\u91CA\u653E\u524D\uFF0C\u662F\u5426\u8FD8\u80FD\u518D\u83B7\u53D6\u8BFB\u9501\u5462\uFF1F</p><p>\u8BFB\u5199\u9501\u4E0D\u652F\u6301\u9501\u5347\u7EA7\uFF0C\u4E5F\u5C31\u662F\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u53D6\u8BFB\u9501\u4E4B\u540E\uFF0C\u5728\u8BFB\u9501\u91CA\u653E\u524D\uFF0C\u4E0D\u53EF\u4EE5\u518D\u83B7\u53D6\u5199\u9501\u3002\u8FD9\u662F\u56E0\u4E3A\u5728\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u53D6\u8BFB\u9501\u65F6\uFF0C\u6709\u53EF\u80FD\u540C\u65F6\u8FD8\u6709\u5176\u4ED6\u7EBF\u7A0B\u4E5F\u83B7\u53D6\u4E86\u8BFB\u9501\uFF0C\u5982\u679C\u5C06\u4E00\u4E2A\u7EBF\u7A0B\u7684\u8BFB\u9501\u5347\u7EA7\u4E3A\u5199\u9501\uFF0C\u90A3\u4E48\u5C31\u6709\u53EF\u80FD\u8FDD\u80CC\u4E86\u8BFB\u5199\u9501\u4E2D\u8BFB\u9501\u548C\u5199\u9501\u4E92\u65A5\u7684\u8981\u6C42\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/96529100_1658851503.png" alt="img" loading="lazy"></p><p>\u200B</p><p>\u8BFB\u5199\u9501\u652F\u6301\u9501\u964D\u7EA7\uFF0C\u4E5F\u5C31\u662F\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u5728\u83B7\u53D6\u5199\u9501\u4E4B\u540E\uFF0C\u5728\u5199\u9501\u91CA\u653E\u524D\uFF0C\u53EF\u4EE5\u518D\u83B7\u53D6\u8BFB\u9501\u3002\u5F53\u5199\u9501\u91CA\u653E\u4E4B\u540E\uFF0C\u7EBF\u7A0B\u6301\u6709\u7684\u9501\u4ECE\u5199\u9501\u964D\u7EA7\u4E3A\u8BFB\u9501\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/89335200_1658851504.png" alt="img" loading="lazy"></p><p>\u5F53\u4E34\u754C\u533A\u4E2D\u65E2\u6709\u5199\u64CD\u4F5C\u53C8\u6709\u8BFB\u64CD\u4F5C\u65F6\uFF0C\u5982\u679C\u6211\u4EEC\u7528\u5199\u9501\u6765\u7ED9\u6574\u4E2A\u4E34\u754C\u533A\u52A0\u9501\uFF0C\u90A3\u4E48\u4EE3\u7801\u7684\u5E76\u884C\u5EA6\u5C31\u4E0D\u9AD8\u3002\u5982\u679C\u6211\u4EEC\u5148\u52A0\u5199\u9501\uFF0C\u5199\u64CD\u4F5C\u5B8C\u6210\u4E4B\u540E\u91CA\u653E\u5199\u9501\uFF0C\u518D\u52A0\u8BFB\u9501\u6267\u884C\u8BFB\u64CD\u4F5C\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u8FD9\u6837\u505A\u5C31\u6709\u53EF\u80FD\u5B58\u5728\u591A\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4FDD\u8BC1\u5199\u64CD\u4F5C\u548C\u8BFB\u64CD\u4F5C\u7684\u7EC4\u5408\u8D77\u6765\u7684\u539F\u5B50\u6027\u3002\u5199\u64CD\u4F5C\u5B8C\u6210\u4E4B\u540E\uFF0C\u5207\u6362\u5230\u5176\u4ED6\u7EBF\u7A0B\u6267\u884C\uFF0C\u66F4\u65B0\u4E86\u5171\u4EAB\u53D8\u91CF\u7684\u503C\uFF0C\u8BFB\u64CD\u4F5C\u53D8\u65E0\u6CD5\u8BFB\u53D6\u4E4B\u524D\u5199\u64CD\u4F5C\u4E4B\u540E\u7684\u503C\u4E86\u3002\u800C\u4F7F\u7528\u4E0A\u56FE\u4E2D\u7684\u9501\u964D\u7EA7\uFF0C\u6211\u4EEC\u4FBF\u65E2\u53EF\u4EE5\u4FDD\u8BC1\u4E34\u754C\u533A\u7EBF\u7A0B\u5B89\u5168\uFF0C\u53C8\u80FD\u63D0\u5230\u4EE3\u7801\u7684\u5E76\u884C\u5EA6\u3002</p><p>\u200B <img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/72537300_1658931175.png" alt="img" loading="lazy"></p><h3 id="\u4E09\u3001\u8BFB\u5199\u9501\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u8BFB\u5199\u9501\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> <strong>\u4E09\u3001\u8BFB\u5199\u9501\u7684\u5B9E\u73B0\u539F\u7406</strong></h3><p>\u524D\u9762\u8BB2\u5230\u8BFB\u5199\u9501\u8DDF\u4E0A\u4E00\u8282\u8BB2\u5230\u7684\u666E\u901A\u9501\uFF08JUC Lock\uFF09\u4E00\u6837\uFF0C\u65E2\u652F\u6301\u516C\u5E73\u9501\uFF0C\u4E5F\u652F\u6301\u975E\u516C\u5E73\u9501\u3002ReentrantReadWriteLock\u7684\u4EE3\u7801\u7ED3\u6784\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ReentrantReadWriteLock implements ReadWriteLock {
    private final ReadLock readerLock;
    private final WriteLock writerLock;
    final Sync sync;
    public ReentrantReadWriteLock() { this(false);}
    public ReentrantReadWriteLock(boolean fair) {
        sync = fair ? new FairSync() : new NonfairSync();
        readerLock = new ReadLock(this);
        writerLock = new WriteLock(this);
    }
    public WriteLock writeLock() { return writerLock; }
    public ReadLock readLock()  { return readerLock; }
    
    // AQS\u7684\u5B50\u7C7BNonfairSync\u548CFairSync\u7684\u516C\u5171\u7236\u7C7B\uFF1ASync
    abstract static class Sync extends AbstractQueuedSynchronizer {
        abstract boolean readerShouldBlock(); //\u7528\u6765\u533A\u5206\u516C\u5E73\u9501\u548C\u975E\u516C\u5E73\u9501
        abstract boolean writerShouldBlock(); //\u7528\u6765\u533A\u5206\u516C\u5E73\u9501\u548C\u975E\u516C\u5E73\u9501
        //\u4EE5\u4E0B\u4E3AAQS\u6A21\u677F\u65B9\u6CD5\u7684\u62BD\u8C61\u65B9\u6CD5\u7684\u4EE3\u7801\u5B9E\u73B0
        protected final boolean tryAcquire(int acquires) { ... }
        protected final boolean tryRelease(int releases) { ... }
        protected final int tryAcquireShared(int unused) { ... }
        protected final boolean tryReleaseShared(int unused) { ... }
        //..\u7701\u7565\u5176\u4ED6\u65B9\u6CD5...
        final boolean tryWriteLock() { ... }
        final boolean tryReadLock() { ... }
    }
    
    static final class NonfairSync extends Sync {
        final boolean writerShouldBlock() { return false; }
        final boolean readerShouldBlock() {
            return apparentlyFirstQueuedIsExclusive();
        }
    }

    static final class FairSync extends Sync {
        final boolean writerShouldBlock() { return hasQueuedPredecessors(); }
        final boolean readerShouldBlock() { return hasQueuedPredecessors(); }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7ED3\u6784\u8DDFReentrantLock\u7684\u4EE3\u7801\u7ED3\u6784\u7C7B\u4F3C\uFF0CNonfairSync\u548CFairSync\u5177\u4F53\u5316\u62BD\u8C61\u7684\u6A21\u677F\u7C7BAQS\uFF0C\u5E76\u4E14\u5B9E\u73B0\u4E86\u5176\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u3002NonfairSync\u662F\u975E\u516C\u5E73\u9501\uFF0CFairSync\u662F\u516C\u5E73\u9501\u3002ReentrantReadWriteLock\u4F7F\u7528NonfairSync\u6216FairSync\u6765\u7F16\u7A0B\u5B9E\u73B0\u8BFB\u9501\uFF08ReadLock\uFF09\u548C\u5199\u9501\uFF08WriteLock\uFF09\u3002ReadLock\u548CWriteLock\u5747\u5B9E\u73B0\u4E86Lock\u63A5\u53E3\uFF0C\u4F7F\u7528\u76F8\u540C\u7684AQS\uFF0C\u5B9E\u73B0\u4E86Lock\u63A5\u53E3\u4E2D\u7684\u6240\u6709\u52A0\u9501\u548C\u89E3\u9501\u51FD\u6570\u3002ReadLock\u548CWriteLock\u7684\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5199\u9501\u4E2D\u7684\u52A0\u9501\u548C\u89E3\u9501\u65B9\u6CD5\u4F7F\u7528AQS\u7684\u72EC\u5360\u6A21\u5F0F\u4E0B\u7684\u51E0\u4E2A\u6A21\u677F\u65B9\u6CD5\u6765\u5B9E\u73B0
public static class WriteLock implements Lock, java.io.Serializable {
    private final Sync sync;
    protected WriteLock(ReentrantReadWriteLock lock) { sync = lock.sync; }
    public void lock() { sync.acquire(1); }
    public void unlock() { sync.release(1); }
    public boolean tryLock( ) { return sync.tryWriteLock(); }
    public void lockInterruptibly() throws InterruptedException {
        sync.acquireInterruptibly(1);
    }
    public boolean tryLock(long timeout, TimeUnit unit) throws InterruptedException {
        return sync.tryAcquireNanos(1, unit.toNanos(timeout));
    }
}
//\u8BFB\u9501\u4E2D\u7684\u52A0\u9501\u548C\u89E3\u9501\u65B9\u6CD5\u4F7F\u7528AQS\u7684\u5171\u4EAB\u6A21\u5F0F\u4E0B\u7684\u51E0\u4E2A\u6A21\u677F\u65B9\u6CD5\u6765\u5B9E\u73B0
public static class ReadLock implements Lock {
    private final Sync sync;
    protected ReadLock(ReentrantReadWriteLock lock) { sync = lock.sync; }
    public void lock() { sync.acquireShared(1); }
    public void unlock() { sync.releaseShared(1); }
    public boolean tryLock() { return sync.tryReadLock(); }
    public void lockInterruptibly() throws InterruptedException {
        sync.acquireSharedInterruptibly(1);
    }
    public boolean tryLock(long timeout, TimeUnit unit) throws InterruptedException {
        return sync.tryAcquireSharedNanos(1, unit.toNanos(timeout));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u8BFB\u9501\u548C\u5199\u9501\u5171\u7528\u4E00\u4E2AAQS\u3002\u5728\u4E0A\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0C\u5BF9\u4E8EJUC Lock\uFF0C\u6211\u4EEC\u4F7F\u7528AQS\u4E2Dstate\u53D8\u91CF\u6765\u8868\u793A\u52A0\u9501\u60C5\u51B5\uFF0C0\u8868\u793A\u6CA1\u6709\u52A0\u9501\uFF0C1\u8868\u793A\u5DF2\u7ECF\u52A0\u9501\uFF0C\u5927\u4E8E1\u7684\u503C\u8868\u793A\u91CD\u5165\u6B21\u6570\u3002\u5BF9\u4E8E\u8BFB\u5199\u9501\u6765\u8BF4\uFF0C\u6211\u4EEC\u4E0D\u4EC5\u9700\u8981\u77E5\u9053\u6709\u6CA1\u6709\u52A0\u9501\u3001\u91CD\u5165\u6B21\u6570\uFF0C\u8FD8\u9700\u8981\u77E5\u9053\u52A0\u7684\u662F\u8BFB\u9501\u8FD8\u662F\u5199\u9501\uFF0C\u4F46\u662FAQS\u4E2D\u53EA\u6709\u4E00\u4E2A\u8868\u793A\u52A0\u9501\u60C5\u51B5\u7684int\u7C7B\u578B\u7684state\u53D8\u91CF\u3002\u4E3A\u4E86\u8BA9state\u53D8\u91CF\u8868\u8FBE\u66F4\u591A\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u7528state\u53D8\u91CF\u4E2D\u7684\u4F4E16\u4F4D\u8868\u793A\u5199\u9501\u7684\u4F7F\u7528\u60C5\u51B5\uFF0C\u9AD816\u4F4D\u8868\u793A\u8BFB\u9501\u7684\u4F7F\u7528\u60C5\u51B5\u3002</p><p>\u5BF9\u4E8E\u4F4E16\u4F4D\u6240\u8868\u793A\u7684\u6570\uFF0C\u503C\u4E3A0\u8868\u793A\u6CA1\u6709\u52A0\u5199\u9501\uFF0C\u503C\u4E3A1\u8868\u793A\u5DF2\u52A0\u5199\u9501\uFF0C\u503C\u5927\u4E8E1\u8868\u793A\u5199\u9501\u7684\u91CD\u5165\u6B21\u6570\u3002\u5BF9\u4E8E\u9AD816\u4F4D\u6240\u8868\u793A\u7684\u6570\uFF0C\u503C\u4E3A0\u8868\u793A\u6CA1\u6709\u52A0\u8BFB\u9501\uFF0C\u503C\u4E3A1\u8868\u793A\u5DF2\u52A0\u8BFB\u9501\uFF0C\u4E0D\u8FC7\uFF0C\u503C\u5927\u4E8E1\u5E76\u4E0D\u8868\u793A\u8BFB\u9501\u7684\u91CD\u5165\u6B21\u6570\uFF0C\u800C\u662F\u8868\u793A\u8BFB\u9501\u603B\u5171\u88AB\u83B7\u53D6\u4E86\u591A\u5C11\u6B21\uFF08\u6BCF\u4E2A\u7EBF\u7A0B\u5BF9\u8BFB\u9501\u91CD\u5165\u7684\u6B21\u6570\u76F8\u52A0\uFF09\u3002\u90A3\u4E48\uFF0C\u8BFB\u9501\u7684\u91CD\u5165\u6B21\u6570\u5728\u54EA\u91CC\u8BB0\u5F55\u5462\uFF1F\u6BD5\u7ADF\u91CD\u5165\u6B21\u6570\u662F\u6709\u7528\u4FE1\u606F\uFF0C\u53EA\u6709\u91CD\u5165\u6B21\u6570\u5927\u4E8E0\u65F6\uFF0C\u624D\u53EF\u4EE5\u7EE7\u7EED\u91CD\u5165\u3002</p><p>\u5F53\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u6301\u6709\u8BFB\u9501\u65F6\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u53EF\u4EE5\u5BF9\u8BFB\u9501\u91CD\u590D\u52A0\u9501\uFF0C\u4E5F\u5C31\u5C31\u662F\u8BF4\uFF0C\u91CD\u5165\u6B21\u6570\u662F\u8DDF\u6BCF\u4E2A\u7EBF\u7A0B\u76F8\u5173\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528ThreadLocal\u53D8\u91CF\u6765\u5B58\u50A8\uFF0C\u5BF9\u4E8EThreadLocal\uFF0C\u6211\u4EEC\u5728\u540E\u9762\u7684\u7AE0\u8282\u4E2D\u4FE1\u606F\u8BB2\u89E3\uFF0C\u5728\u8FD9\u91CC\uFF0C\u4F60\u5C31\u7B80\u5355\u5C06\u5B83\u770B\u505A\u7EBF\u7A0B\u7684\u4E00\u4E2A\u5C5E\u6027\u6216\u8005\u5C40\u90E8\u53D8\u91CF\u5373\u53EF\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u8BE6\u7EC6\u770B\u4E0B\uFF0C\u8BFB\u9501\u548C\u5199\u9501\u7684\u5B9E\u73B0\u539F\u7406\u3002</p><p><strong>1\uFF09\u5199\u9501\u7684\u5B9E\u73B0\u539F\u7406</strong></p><p>WriteLock\u5199\u9501\u662F\u6392\u5B83\uFF0C\u56E0\u6B64\uFF0C\u5B83\u7684\u5B9E\u73B0\u539F\u7406\u8DDF\u4E0A\u4E00\u8282\u8BB2\u5230\u7684ReentrantLock\u7684\u5B9E\u73B0\u539F\u7406\u7C7B\u4F3C\u3002WriteLock\u5B9E\u73B0\u4E86Lock\u63A5\u53E3\uFF0C\u56E0\u6B64\uFF0C\u5B83\u4E5F\u652F\u6301\u5404\u79CD\u4E0D\u540C\u7684\u52A0\u9501\u65B9\u5F0F\uFF0C\u6BD4\u5982\u53EF\u4E2D\u65AD\u52A0\u9501\u3001\u975E\u963B\u585E\u52A0\u9501\u3001\u53EF\u8D85\u65F6\u52A0\u9501\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u91CD\u70B9\u8BB2\u89E3WriteLock\u4E2D\u7684lock()\u51FD\u6570\u548Cunlock()\u51FD\u6570\u7684\u5B9E\u73B0\u539F\u7406\u3002\u5BF9\u4E8EWriteLock\u4E2D\u7684tryLock()\u3001\u5E26\u8D85\u65F6\u65F6\u95F4\u7684tryLock()\u3001lockInterruptibly()\u8FD9\u4E09\u4E2A\u52A0\u9501\u51FD\u6570\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003ReentrantLock\u4E2D\u8FD9\u4E09\u4E2A\u51FD\u6570\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u4EE5\u53CA\u7ED3\u5408\u6E90\u7801\uFF0C\u81EA\u884C\u7814\u7A76\u3002</p><p>**\u6211\u4EEC\u5148\u6765\u770BWriteLock\u4E2D\u7684lock()\u51FD\u6570\u3002**\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\uFF0C\u76F4\u63A5\u8C03\u7528\u4E86AQS\u4E2D\u7684acquire()\u6A21\u677F\u65B9\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void lock() {
    sync.acquire(1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AQS\u4E2D\u7684acquire()\u6A21\u677F\u65B9\u6CD5\u5982\u4E0B\u6240\u793A\uFF0C\u5728\u4E0A\u4E00\u8282\u4E2D\u5DF2\u7ECF\u8BB2\u89E3\uFF0C\u4F7F\u7528tryAcquire()\u7ADE\u4E89\u9501\uFF0C\u5982\u679C\u7ADE\u4E89\u9501\u6210\u529F\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5982\u679C\u7ADE\u4E89\u9501\u5931\u8D25\uFF0C\u5219\u8C03\u7528addWaiter()\u5C06\u7EBF\u7A0B\u653E\u5165\u7B49\u5F85\u961F\u5217\u7684\u5C3E\u90E8\uFF0C\u7136\u540E\u8C03\u7528acquireQueued()\u963B\u585E\u7EBF\u7A0B\u7B49\u5F85\u88AB\u5524\u9192\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final void acquire(int arg) {
    // tryAcquire() -&gt; addWaiter() -&gt; acquireQeuued()
    if (!tryAcquire(arg) &amp;&amp; acquireQueued(addWaiter(Node.EXCLUSIVE), arg))
        selfInterrupt();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4E00\u8282\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u8BE6\u7EC6\u8BB2\u89E3\u4E86addWaiter()\u51FD\u6570\u548CacquiredQueued()\u51FD\u6570\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u3002\u6211\u4EEC\u91CD\u70B9\u770B\u4E0BtryAcquire()\u7ADE\u4E89\u9501\u7684\u903B\u8F91\uFF0C\u5B83\u662FAQS\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5728NonfairSync\u548CFairSync\u7684\u516C\u5171\u7236\u7C7BSync\u7C7B\u4E2D\u5B9E\u73B0\u3002\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected final boolean tryAcquire(int acquires) {
    Thread current = Thread.currentThread();
    int c = getState(); //c\u4E3Astate\u7684\u503C
    int w = exclusiveCount(c); //\u4F4E16\u4F4D\u7684\u503C\uFF0C\u4E5F\u5C31\u662F\u5199\u9501\u7684\u52A0\u9501\u60C5\u51B5
    
    // 1\u3001\u5DF2\u7ECF\u52A0\u8BFB\u9501\u6216\u5199\u9501\uFF08state!=0\uFF09
    if (c != 0) {
        //\u5DF2\u52A0\u8BFB\u9501(w==0)\u6216\u8005\u5F53\u524D\u52A0\u5199\u9501\u7684\u7EBF\u7A0B\u4E0D\u662F\u81EA\u5DF1
        if (w == 0 || current != getExclusiveOwnerThread())
            return false; //\u53BB\u6392\u961F
        if (w + exclusiveCount(acquires) &gt; MAX_COUNT)
            throw new Error(&quot;Maximum lock count exceeded&quot;);
        setState(c + acquires); //\u66F4\u65B0\u5199\u9501\u7684\u91CD\u5165\u6B21\u6570
        return true; //\u83B7\u53D6\u5230\u4E86\u9501
    }
    
    // 2\u3001\u6CA1\u6709\u52A0\u9501\uFF08state==0\uFF09
    if (writerShouldBlock()) return false; //\u53BB\u6392\u961F
    if (!compareAndSetState(c, c + acquires)) return false; //\u53BB\u6392\u961F
    setExclusiveOwnerThread(current);
    return true; //\u83B7\u53D6\u5230\u4E86\u9501
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u91CD\u70B9\u770B\u4E0BwriterShouldBlock()\u8FD9\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u63A7\u5236\u7740\u9501\u662F\u5426\u4E3A\u516C\u5E73\u9501\u3002\u5728state=0\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709\u52A0\u8BFB\u9501\u548C\u5199\u9501\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679CwriterShouldBlock()\u51FD\u6570\u8FD4\u56DE\u503C\u4E3Atrue\uFF0C\u90A3\u4E48\uFF0C\u7EBF\u7A0B\u4E0D\u5C1D\u8BD5\u7ADE\u4E89\u9501\uFF0C\u800C\u662F\u76F4\u63A5\u53BB\u6392\u961F\u3002\u5982\u679CwriterShouldBlock()\u51FD\u6570\u8FD4\u56DE\u503C\u4E3Afalse\uFF0C\u90A3\u4E48\uFF0C\u7EBF\u7A0B\u5148\u5C1D\u8BD5\u7ADE\u4E89\u9501\uFF0C\u4E0D\u884C\u518D\u53BB\u6392\u961F\u3002\u5BF9\u4E8E\u975E\u516C\u5E73\u9501\uFF0CwriterShouldBlock()\u603B\u662F\u8FD4\u56DEfalse\u3002\u5BF9\u4E8E\u516C\u5E73\u9501\uFF0C\u5982\u679C\u7B49\u5F85\u961F\u5217\u4E2D\u6709\u7EBF\u7A0B\uFF0C\u90A3\u4E48writerShouldBlock()\u8FD4\u56DEtrue\u3002\u5982\u679C\u7B49\u5F85\u961F\u5217\u4E2D\u6CA1\u6709\u7EBF\u7A0B\uFF0C\u90A3\u4E48writerShouldBlock()\u8FD4\u56DEfalse\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static final class NonfairSync extends Sync {
    final boolean writerShouldBlock() { return false; }
    final boolean readerShouldBlock() {
        return apparentlyFirstQueuedIsExclusive();
    }
}

static final class FairSync extends Sync {
    final boolean writerShouldBlock() { return hasQueuedPredecessors(); }
    final boolean readerShouldBlock() { return hasQueuedPredecessors(); }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6CE8\u91CA\u4E2D\uFF0C\u6211\u5BF9\u4EE3\u7801\u903B\u8F91\u505A\u4E86\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u3002\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u3002\u6211\u5C06tryAcquire()\u7684\u6267\u884C\u903B\u8F91\u68B3\u7406\u5E76\u7ED8\u5236\u6210\u4E86\u4E00\u5F20\u6D41\u7A0B\u56FE\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u4F60\u53EF\u4EE5\u5BF9\u6BD4\u7740\u6D41\u7A0B\u548C\u6CE8\u91CA\u6765\u7406\u89E3tryAcquire()\u7684\u4EE3\u7801\u903B\u8F91\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/84076100_1658851505.png" alt="img" loading="lazy"></p><p>**\u6211\u4EEC\u518D\u6765\u770BWriteLock\u7684unlock()\u51FD\u6570\u3002**\u4EE3\u7801\u5B9E\u73B0\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u76F4\u63A5\u8C03\u7528\u4E86AQS\u7684release()\u6A21\u677F\u65B9\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void unlock() { 
    sync.release(1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AQS\u4E2D\u7684release()\u6A21\u677F\u65B9\u6CD5\u5982\u4E0B\u6240\u793A\uFF0C\u5728\u4E0A\u4E00\u8282\u4E2D\u5DF2\u7ECF\u8BB2\u89E3\uFF0C\u4F7F\u7528tryRelease()\u91CA\u653E\u9501\uFF0C\u7136\u540E\u5524\u9192\u7B49\u5F85\u961F\u5217\u4E2D\u4F4D\u4E8E\u961F\u9996\u7684\u7EBF\u7A0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final boolean release(int arg) {
    if (tryRelease(arg)) {
        Node h = head;
        if (h != null &amp;&amp; h.waitStatus != 0)
            unparkSuccessor(h);
        return true;
    }
    return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u91CD\u70B9\u770B\u4E0B\u5728\u5199\u9501\u4E2DtryRelease()\u62BD\u8C61\u65B9\u6CD5\u7684\u4EE3\u7801\u5B9E\u73B0\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002tryRelease()\u7684\u4EE3\u7801\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\uFF0C\u5728\u4EE3\u7801\u4E2D\uFF0C\u6211\u8BE6\u7EC6\u4F5C\u4E86\u6CE8\u91CA\uFF0C\u4F60\u53EF\u4EE5\u53C2\u770B\u6CE8\u91CA\u4E86\u89E3\u5176\u4EE3\u7801\u903B\u8F91\u3002\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected final boolean tryRelease(int releases) {
    // tryRelease()\u662FAQS\u5DE5\u4F5C\u5728\u72EC\u5360\u6A21\u5F0F\u4E0B\u7684\u51FD\u6570\uFF0C\u53EA\u80FD\u7528\u4E8E\u6392\u5B83\u9501\uFF0C\u4E5F\u5C31\u662F\u5199\u9501
    if (!isHeldExclusively()) throw new IllegalMonitorStateException();
    // \u66F4\u65B0state\u503C\uFF0C\u5199\u9501\u7684\u91CD\u5165\u6B21\u6570-releases\uFF0C\u5BF9\u4E8E\u9501\u6765\u8BF4\uFF0Creleases\u603B\u662F\u7B49\u4E8E1
    int nextc = getState() - releases;
    // \u53EA\u6709\u66F4\u65B0\u4E4B\u540E\u7684state\u503C\u4E3A0\u65F6\uFF0C\u624D\u53EF\u4EE5\u5C06\u5199\u9501\u91CA\u653E
    boolean free = exclusiveCount(nextc) == 0;
    if (free) setExclusiveOwnerThread(null);
    setState(nextc);
    return free;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2\uFF09\u8BFB\u9501\u7684\u5B9E\u73B0\u539F\u7406</strong></p><p>\u521A\u521A\u6211\u4EEC\u8BB2\u4E86\u8BFB\u5199\u9501\u4E2D\u7684\u5199\u9501\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u73B0\u5728\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u4E0B\u8BFB\u9501\u7684\u5B9E\u73B0\u539F\u7406\u3002\u5199\u9501\u662F\u6392\u5B83\u9501\uFF0C\u5B9E\u73B0\u539F\u7406\u6BD4\u8F83\u7B80\u5355\uFF0C\u800C\u8BFB\u9501\u662F\u5171\u4EAB\u9501\uFF0C\u5B9E\u73B0\u539F\u7406\u76F8\u5BF9\u6765\u8BF4\u66F4\u52A0\u590D\u6742\u3002\u8DDFWriteLock\u76F8\u540C\uFF0CReadLock\u4E5F\u5B9E\u73B0\u4E86Lock\u63A5\u53E3\u3002\u540C\u6837\uFF0C\u652F\u6301\u5404\u79CD\u4E0D\u540C\u7684\u52A0\u9501\u65B9\u5F0F\uFF08lock()\u3001tryLock()\u3001\u5E26\u8D85\u65F6\u65F6\u95F4\u7684tryLock()\u3001lockInterruptibly()\uFF09\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u8FD8\u662F\u91CD\u70B9\u8BB2\u89E3lock()\u548Cunlock()\u8FD9\u4E24\u4E2A\u51FD\u6570\u3002\u5BF9\u4E8E\u5176\u4ED6\u52A0\u9501\u65B9\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u53C2\u770B\u4E0A\u4E00\u8282\u7684\u5185\u5BB9\u548C\u6E90\u7801\uFF0C\u81EA\u884C\u7814\u7A76\u3002</p><p>**\u6211\u4EEC\u5148\u6765\u770BReadLock\u4E2D\u7684lock()\u51FD\u6570\u3002**\u524D\u9762\u8BB2\u5230\uFF0CWriteLock\u4E2D\u7684lock()\u51FD\u6570\u8C03\u7528\u4E86AQS\u4E2D\u7684acquire()\u6A21\u677F\u65B9\u6CD5\uFF0C\u8FD9\u91CCReadLock\u7684lock()\u51FD\u6570\u8C03\u7528\u7684\u662FAQS\u4E2D\u7684acquireShared()\u6A21\u677F\u65B9\u6CD5\u3002acquire()\u6A21\u677F\u65B9\u6CD5\u7528\u4E8E\u72EC\u5360\u6A21\u5F0F\uFF0CacquireShared()\u6A21\u677F\u65B9\u6CD5\u7528\u4E8E\u5171\u4EAB\u6A21\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void lock() {
    sync.acquireShared(1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u518D\u6765\u770B\u4E0BAQS\u4E2DacquireShared()\u7684\u4EE3\u7801\u5B9E\u73B0\uFF0C\u5982\u4E0B\u6240\u793A\u3002\u5BF9\u6BD4acquire()\u7684\u4EE3\u7801\u5B9E\u73B0\uFF0CacquireShared()\u7684\u4EE3\u7801\u5B9E\u73B0\u540C\u6837\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u8C03\u7528tryAquireShared()\u53BB\u7ADE\u4E89\u9501\uFF0C\u5982\u679C\u7ADE\u4E89\u6210\u529F\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5982\u679C\u7ADE\u4E89\u5931\u8D25\uFF0C\u5219\u8C03\u7528doAcquireShared()\u53BB\u6392\u961F\u7B49\u5F85\u5524\u9192\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final void acquireShared(int arg) {
    if (tryAcquireShared(arg) &lt; 0) // \u7ADE\u4E89\u8BFB\u9501
        doAcquireShared(arg); // \u7ADE\u4E89\u5931\u8D25\u53BB\u6392\u961F
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tryAcquiredShared()\u4E3AAQS\u7684\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5176\u5728AQS\u7684\u5B50\u7C7BSync\u4E2D\u5B9E\u73B0\uFF0C\u5177\u4F53\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002tryAcquireShared()\u4E3A\u4E86\u63D0\u9AD8\u6027\u80FD\u505A\u4E86\u5F88\u591A\u4EE3\u7801\u5C42\u9762\u7684\u4F18\u5316\uFF0C\u5BFC\u81F4\u4EE3\u7801\u91CF\u5F88\u5927\u3002\u4E3A\u4E86\u805A\u7126\u5728\u57FA\u672C\u5B9E\u73B0\u539F\u7406\u4E0A\uFF0C\u5728\u4E0D\u6539\u53D8\u57FA\u672C\u5B9E\u73B0\u539F\u7406\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u5BF9tryAcquireShared()\u4E2D\u7684\u4EE3\u7801\u505A\u4E86\u7B80\u5316\u3002\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u5B8C\u6210\u7684\u4EE3\u7801\uFF0C\u8BF7\u81EA\u884C\u67E5\u770B\u6E90\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD4\u56DE-1\u8868\u793A\u7ADE\u4E89\u9501\u5931\u8D25\uFF0C\u8FD4\u56DE1\u8868\u793A\u7ADE\u4E89\u9501\u6210\u529F
protected final int tryAcquireShared(int unused) {
    Thread current = Thread.currentThread();
    // \u5982\u679Cstate\u6CA1\u52A0\u9501\u6216\u8005\u662F\u52A0\u4E86\u8BFB\u9501\uFF0C\u90A3\u4E48\u7EBF\u7A0B\u4F1A\u901A\u8FC7CAS\u64CD\u4F5C\u6539\u53D8state\u503C\u6765\u7ADE\u4E89\u9501\uFF1B
    // \u5982\u679C\u5176\u4ED6\u7EBF\u7A0B\u4E5F\u5728\u7ADE\u4E89\u8BFB\u9501\uFF0C\u5E76\u4E14\u7ADE\u4E89\u6210\u529F\uFF0C\u90A3\u4E48\u6B64\u7EBF\u7A0B\u5C31\u4F1A\u7ADE\u4E89\u5931\u8D25\uFF1B
    // \u4E8E\u662F\uFF0C\u6B64\u7EBF\u7A0B\u5C31\u8981\u81EA\u65CB\uFF08for\u5FAA\u73AF\uFF09\u518D\u6B21\u5C1D\u8BD5\u53BB\u7ADE\u4E89\u8BFB\u9501\u3002
    for (;;) {
        int c = getState();
        if (exclusiveCount(c) != 0) { // \u5DF2\u52A0\u5199\u9501
            // \u5982\u679C\u52A0\u5199\u9501\u7684\u7EBF\u7A0B\u4E0D\u662F\u6B64\u7EBF\u7A0B\uFF0C\u90A3\u4E48\u8BFB\u9501\u4E5F\u52A0\u4E0D\u6210\uFF0C\u76F4\u63A5\u8FD4\u56DE-1
            // \u5426\u5219\uFF0C\u8BFB\u5199\u9501\u652F\u6301\u9501\u964D\u7EA7\uFF0C\u52A0\u4E86\u5199\u9501\u7684\u7EBF\u7A0B\u53EF\u4EE5\u518D\u52A0\u8BFB\u9501
            if (getExclusiveOwnerThread() != current)
                return -1;
        } 
        
        //\u7406\u8BBA\u4E0A\u8BB2\uFF0C\u5982\u679C\u6CA1\u6709\u52A0\u5199\u9501\uFF0C\u4E0D\u7BA1\u6709\u6CA1\u6709\u52A0\u8BFB\u9501\uFF0C\u90FD\u53EF\u4EE5\u53BB\u7ADE\u4E89\u8BFB\u9501\u4E86\uFF0C\u6BD5\u7ADF\u8BFB\u9501\u662F\u5171\u4EAB\u9501\u3002
        //\u4F46\u662F\uFF0C\u5B58\u5728\u4E24\u4E2A\u7279\u6B8A\u60C5\u51B5\uFF1A
        //1\u3001\u5BF9\u4E8E\u516C\u5E73\u9501\u6765\u8BF4\uFF0C\u5982\u679C\u7B49\u5F85\u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0C\u5E76\u4E14\u5F53\u524D\u7EBF\u7A0B\u6CA1\u6709\u6301\u6709\u8BFB\u9501\uFF08\u91CD\u5165\u52A0\u9501\uFF09\uFF0C
        //   \u90A3\u4E48\uFF0C\u7EBF\u7A0B\u5C31\u8981\u53BB\u6392\u961F\u3002
        //2\u3001\u5BF9\u4E8E\u975E\u516C\u5E73\u9501\u6765\u8BF4\uFF0C\u5982\u679C\u7B49\u5F85\u961F\u5217\u4E2D\u961F\u9996\u7EBF\u7A0B\uFF08\u63A5\u4E0B\u6765\u8981\u88AB\u5524\u9192\u7684\uFF09\u662F\u5199\u7EBF\u7A0B\uFF0C
        //   \u90A3\u4E48\uFF0C\u7EBF\u7A0B\u5C31\u8981\u53BB\u6392\u961F\u3002\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u907F\u514D\u8BF7\u6C42\u5199\u9501\u7684\u7EBF\u7A0B\u8FDF\u8FDF\u83B7\u53D6\u4E0D\u5230\u5199\u9501\u3002
        if (sharedCount(c) != 0) { // \u5DF2\u52A0\u8BFB\u9501
            if (readerShouldBlock()) { //\u4E0A\u8FF01\u30012\u4E24\u79CD\u60C5\u51B5\u5BF9\u5E94\u6B64\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E3Atrue
                if (readHolds.get().count == 0) // \u6B64\u7EBF\u7A0B\u6CA1\u6709\u6301\u6709\u8BFB\u9501\uFF0C\u4E0D\u80FD\u91CD\u5165
                    return -1;
            }
        }
        // \u4EE5\u4E0B\u662F\u5BF9\u4E0A\u8FF0\u4EE3\u7801\u4E2DreadHolds\u7684\u89E3\u91CA\uFF1A
        // readHolds\u662FThreadLocal\u53D8\u91CF\uFF0C\u4FDD\u5B58\u8DDF\u8FD9\u4E2A\u7EBF\u7A0B\u7684\u8BFB\u9501\u91CD\u5165\u6B21\u6570\u3002
        // \u5982\u679C\u91CD\u5165\u6B21\u6570\u4E3A0\uFF0C\u8868\u793A\u6CA1\u6709\u52A0\u8BFB\u9501\uFF0C\u8FD4\u56DE-1\u53BB\u6392\u961F\u3002
        // \u5982\u679C\u91CD\u5165\u6B21\u6570\u5927\u4E8E\u7B49\u4E8E0\uFF0C\u8868\u793A\u5DF2\u52A0\u8BFB\u9501\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u91CD\u5165\uFF0C\u4E0D\u7528\u6392\u961F\u3002
        
        if (sharedCount(c) == MAX_COUNT)
            throw new Error(&quot;Maximum lock count exceeded&quot;);
        //CAS\u7ADE\u4E89\u8BFB\u9501\uFF0C\u6B64\u65F6\u6709\u53EF\u80FD\u8FD8\u6709\u5176\u4ED6\u7EBF\u7A0B\u5728\u7ADE\u4E89\u8BFB\u9501\u6216\u5199\u9501
        if (compareAndSetState(c, c + SHARED_UNIT)) { //SHARED_UNIT=1&lt;&lt;16
            // \u7ADE\u4E89\u8BFB\u9501\u6210\u529F
            readHolds.get().count++; //\u66F4\u65B0\u7EBF\u7A0B\u91CD\u5165\u6B21\u6570
            return 1; //\u6210\u529F\u83B7\u53D6\u8BFB\u9501
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u76F8\u5BF9\u4E8EtryAcquire()\u62BD\u8C61\u65B9\u6CD5\uFF0CtryAcquireShared()\u8981\u590D\u6742\u5F88\u591A\u3002\u5728\u6CE8\u91CA\u4E2D\uFF0C\u6211\u5BF9\u4EE3\u7801\u903B\u8F91\u505A\u4E86\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u3002\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u3002\u6211\u5C06tryAcquireShared()\u7684\u6267\u884C\u903B\u8F91\u68B3\u7406\u5E76\u7ED8\u5236\u6210\u4E86\u4E00\u5F20\u6D41\u7A0B\u56FE\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u4F60\u53EF\u4EE5\u5BF9\u6BD4\u7740\u6D41\u7A0B\u548C\u6CE8\u91CA\u6765\u7406\u89E3tryAcquireShared()\u7684\u4EE3\u7801\u903B\u8F91\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/7964800_1658851506.png" alt="img" loading="lazy"></p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u4E0BdoAcquireShared()\u51FD\u6570\uFF0C\u6B64\u51FD\u6570\u8D1F\u8D23\u6392\u961F\u548C\u7B49\u5F85\u5524\u9192\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002doAcquireShared()\u51FD\u6570\u8DDF\u4E0A\u4E00\u8282\u8BB2\u5230\u7684acquireQueued()\u51FD\u6570\u975E\u5E38\u7C7B\u4F3C\u3002\u533A\u522B\u4E3B\u8981\u6709\u4E24\u70B9\uFF0C\u5982\u4E0B\u6CE8\u91CA\u6240\u793A\u3002\u533A\u522B\u4E00\u662F\u7B49\u5F85\u8BFB\u9501\u7684\u7EBF\u7A0B\u6807\u8BB0\u4E3ASHARED\uFF0C\u533A\u522B\u4E8C\u662F\u7EBF\u7A0B\u83B7\u53D6\u5230\u8BFB\u9501\u4E4B\u540E\uFF0C\u5982\u679C\u4E0B\u4E00\u4E2A\u8282\u70B9\u5BF9\u5E94\u7684\u7EBF\u7A0B\u4E5F\u5728\u7B49\u5F85\u8BFB\u9501\uFF0C\u90A3\u4E48\u4E5F\u4F1A\u88AB\u5524\u9192\u3002\u4E0B\u4E00\u4E2A\u8282\u70B9\u5BF9\u5E94\u7684\u7EBF\u7A0B\u83B7\u53D6\u5230\u8BFB\u9501\u4E4B\u540E\uFF0C\u53C8\u4F1A\u53BB\u5524\u9192\u4E0B\u4E0B\u4E2A\u8282\u70B9\u5BF9\u5E94\u7684\u7EBF\u7A0B\uFF08\u5982\u679C\u4E0B\u4E0B\u4E2A\u8282\u70B9\u5BF9\u5E94\u7684\u7EBF\u7A0B\u4E5F\u5728\u7B49\u5F85\u8BFB\u9501\u7684\u8BDD\uFF09\u3002\u5524\u9192\u64CD\u4F5C\u4E00\u76F4\u4F20\u64AD\u4E0B\u53BB\uFF0C\u76F4\u5230\u9047\u5230\u7B49\u5F85\u5199\u9501\u7684\u7EBF\u7A0B\u4E3A\u6B62\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private void doAcquireShared(int arg) {
    final Node node = addWaiter(Node.SHARED);//\u533A\u522B\u4E00\uFF1A\u6807\u8BB0\u6B64\u7EBF\u7A0B\u7B49\u5F85\u7684\u662F\u5171\u4EAB\u9501\uFF08\u8BFB\u9501\uFF09
    boolean failed = true;
    try {
        boolean interrupted = false;
        for (;;) {
            final Node p = node.predecessor();
            if (p == head) {
                int r = tryAcquireShared(arg);
                if (r &gt;= 0) {
                    //\u533A\u522B\u4E8C\uFF1A\u5982\u679C\u4E0B\u4E00\u4E2A\u8282\u70B9\u5BF9\u5E94\u7684\u7EBF\u7A0B\u4E5F\u5728\u7B49\u5F85\u8BFB\u9501\uFF0C\u90A3\u4E48\u987A\u9053\u5524\u9192\u5B83
                    setHeadAndPropagate(node, r); 
                    p.next = null; // help GC
                    if (interrupted) selfInterrupt();
                    failed = false;
                    return;
                }
            }
            if (parkAndCheckInterrupt()) interrupted = true;
        }
    } finally {
        if (failed) cancelAcquire(node);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**\u6211\u4EEC\u5148\u6765\u770BReadLock\u4E2D\u7684unlock()\u51FD\u6570\u3002**\u4EE3\u7801\u5B9E\u73B0\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u76F4\u63A5\u8C03\u7528\u4E86AQS\u7684releaseShared()\u6A21\u677F\u65B9\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void unlock() {
    sync.releaseShared(1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AQS\u4E2D\u7684releaseShared()\u6A21\u677F\u65B9\u6CD5\u5982\u4E0B\u6240\u793A\uFF0C\u8C03\u7528tryReleaseShared()\u91CA\u653E\u8BFB\u9501\uFF0C\u53EA\u6709\u5F53\u6240\u6709\u7684\u8BFB\u9501\u90FD\u91CA\u653E\u4E4B\u540E\uFF0Cstate\u53D8\u4E3A0\uFF0C\u624D\u4F1A\u8C03\u7528doReleaseShared()\u5524\u9192\u7B49\u5F85\u961F\u5217\u4E2D\u4F4D\u4E8E\u961F\u9996\u7684\u7EBF\u7A0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final boolean releaseShared(int arg) {
    if (tryReleaseShared(arg)) {
        doReleaseShared();
        return true;
    }
    return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>doReleaseShared()\u7684\u4EE3\u7801\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u91CD\u70B9\u770B\u4E0BtryReleaseShared()\u3002tryReleaseShared()\u662FAQS\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5728Sync\u4E2D\u5B9E\u73B0\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5F53\u6240\u6709\u7684\u8BFB\u9501\u90FD\u91CA\u653E\u4E4B\u540E\uFF08state\u53D8\u62100\uFF09\u624D\u4F1A\u8FD4\u56DEtrue
protected final boolean tryReleaseShared(int unused) {
    Thread current = Thread.currentThread();
    readHolds.get().count--; //\u66F4\u65B0\u672C\u7EBF\u7A0B\u5BF9\u8BFB\u9501\u7684\u91CD\u5165\u6B21\u6570
    for (;;) { //\u56E0\u4E3A\u6709\u53EF\u80FD\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u91CA\u653E\u8BFB\u9501\uFF0C\u540C\u65F6CAS\u66F4\u65B0state\uFF0C\u56E0\u6B64\u8981\u81EA\u65CB+CAS
        int c = getState();
        // c-SHARED_UNIT\uFF1A\u76F8\u5F53\u4E8E\u5C06\u8BFB\u9501\u7684\u52A0\u9501\u6B21\u6570-1
        int nextc = c - SHARED_UNIT; //SHARED_UNIT=1&lt;&lt;16
        if (compareAndSetState(c, nextc))
            return nextc == 0; //state\u53D8\u4E3A0\u624D\u4F1A\u8FD4\u56DEtrue\uFF0C\u624D\u4F1A\u53BB\u5524\u9192\u7B49\u5F85\u961F\u5217\u4E2D\u7684\u7EBF\u7A0B
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u56DB\u3001\u8BFB\u5199\u9501\u7684\u5347\u7EA7\u7248" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u8BFB\u5199\u9501\u7684\u5347\u7EA7\u7248" aria-hidden="true">#</a> <strong>\u56DB\u3001\u8BFB\u5199\u9501\u7684\u5347\u7EA7\u7248</strong></h3><p>StampedLock\u662F\u5BF9ReadWriteLock\u7684\u8FDB\u4E00\u6B65\u4F18\u5316\uFF0C\u5728\u8BFB\u9501\u548C\u5199\u9501\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u53C8\u63D0\u4F9B\u4E86\u4E50\u89C2\u8BFB\u9501\u3002\u5B9E\u9645\u4E0A\uFF0C\u4E50\u89C2\u8BFB\u9501\u5E76\u6CA1\u6709\u52A0\u4EFB\u4F55\u9501\u3002\u5728\u8BFB\u591A\u5199\u5C11\u7684\u5E94\u7528\u573A\u666F\u4E2D\uFF0C\u5927\u90E8\u5206\u8BFB\u64CD\u4F5C\u90FD\u4E0D\u4F1A\u88AB\u5199\u64CD\u4F5C\u5E72\u6270\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u751A\u81F3\u53EF\u4EE5\u5C06\u8BFB\u9501\u4E5F\u7701\u7565\u6389\u3002\u53EA\u6709\u9A8C\u8BC1\u8BFB\u64CD\u4F5C\u771F\u6B63\u6709\u88AB\u5199\u64CD\u4F5C\u5E72\u6270\u7684\u60C5\u51B5\u4E0B\uFF0C\u7EBF\u7A0B\u518D\u52A0\u8BFB\u9501\u91CD\u590D\u6267\u884C\u8BFB\u64CD\u4F5C\u3002\u6211\u4EEC\u4E3E\u4E00\u4E2A\u4F8B\u5B50\u89E3\u91CA\u4E00\u4E0B\u3002\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  private StampedLock slock = new StampedLock();
  private List&lt;String&gt; list = new LinkedList&lt;&gt;();

  public void add(int idx, String elem) {
    long stamp = slock.writeLock(); //\u52A0\u5199\u9501
    try {
      list.add(idx, elem);
    } finally {
      slock.unlockWrite(stamp); //\u91CA\u653E\u5199\u9501
    }
  }

  public String get(int idx) {
    long stamp = slock.tryOptimisticRead(); //\u52A0\u4E50\u89C2\u8BFB\u9501
    String res = list.get(idx);
    if (slock.validate(stamp)) { //\u6CA1\u5199\u64CD\u4F5C\u5E72\u6270
      return res;
    }
    
    // \u6709\u5199\u64CD\u4F5C\u5E72\u6270\uFF0C\u91CD\u65B0\u4F7F\u7528\u8BFB\u9501\uFF0C\u91CD\u65B0\u6267\u884C\u8BFB\u64CD\u4F5C
    stamp = slock.readLock(); //\u52A0\u8BFB\u9501
    try {
      return list.get(idx);
    } finally {
      slock.unlockRead(stamp); //\u91CA\u653E\u8BFB\u9501
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0CtryOptimisticRead()\u83B7\u53D6\u7684\u662F\u4E50\u89C2\u8BFB\u9501\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65F6\u95F4\u6233stamp\u3002\u56E0\u4E3A\u4E50\u89C2\u8BFB\u9501\u5E76\u975E\u771F\u6B63\u52A0\u9501\uFF0C\u6240\u4EE5\uFF0C\u4E50\u89C2\u8BFB\u9501\u5E76\u4E0D\u9700\u8981\u89E3\u9501\u3002\u5728\u6267\u884C\u5B8C\u8BFB\u64CD\u4F5C\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u9A8C\u8BC1stamp\u662F\u5426\u6709\u88AB\u66F4\u6539\uFF0C\u5982\u679C\u6709\u88AB\u66F4\u6539\uFF0C\u8BF4\u660E\u6267\u884C\u8BFB\u64CD\u4F5C\u671F\u95F4\uFF0CwriteLock()\u51FD\u6570\u6709\u88AB\u6267\u884C\uFF0C\u4E5F\u5C31\u8BF4\u660E\u6709\u5BF9\u5171\u4EAB\u8D44\u6E90\u7684\u5199\u64CD\u4F5C\u53D1\u751F\uFF08\u4E5F\u5C31\u662F\u6267\u884C\u4E86add()\u51FD\u6570\uFF09\uFF0C\u6B64\u65F6\uFF0C\u4E4B\u524D\u5F97\u5230\u7684\u7ED3\u679C\u9700\u8981\u4F5C\u5E9F\uFF0C\u4F7F\u7528\u8BFB\u9501\u6765\u91CD\u65B0\u83B7\u53D6\u6570\u636E\u3002</p><h2 id="\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a> <strong>\u601D\u8003\u9898</strong></h2><p>\u5728\u672C\u8282\u7684\u793A\u4F8B\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u628Alock()\u3001tryLock()\u3001lockInterruptibly()\u51FD\u6570\u7684\u8C03\u7528\uFF0C\u90FD\u653E\u7F6E\u4E8Etry-finally\u4EE3\u7801\u5757\u4E4B\u5916\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\uFF1F\u662F\u5426\u53EF\u4EE5\u79FB\u5230try-finally\u4EE3\u7801\u5757\u4E4B\u5185\u5462\uFF1F</p><p>\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\uFF0CReentrantLock\u4E2D\u7684lock()\u51FD\u6570\u4F7F\u7528AQS\u4E2D\u7684acquire()\u6A21\u677F\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0Cunlock()\u51FD\u6570\u4F7F\u7528AQS\u4E2D\u7684release()\u6A21\u677F\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0ClockInterruptibly()\u51FD\u6570\u4F7F\u7528acquireInterruptibly()\u6A21\u677F\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0C\u5E26\u8D85\u65F6\u65F6\u95F4\u7684tryLock()\u51FD\u6570\u4F7F\u7528AQS\u4E2D\u7684tryAcquireNanos()\u6A21\u677F\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0C\u90A3\u4E48\uFF0CReentrantLock\u4E2D\u7684tryLock()\u51FD\u6570\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u5462\uFF1F</p><p>\u5982\u679C\u4E00\u4E2A\u7EBF\u7A0B\u5728\u83B7\u53D6\u8BFB\u9501\u4E4B\u540E\uFF0C\u5728\u8BFB\u9501\u91CA\u653E\u524D\uFF0C\u518D\u6B21\u8BF7\u6C42\u5199\u9501\uFF0C\u5C06\u4F1A\u53D1\u751F\u4EC0\u4E48\u4E8B\u60C5\uFF1F</p>`,171),s=[l];function a(c,t){return n(),i("div",null,s)}const o=e(r,[["render",a],["__file","lock.html.vue"]]);export{o as default};
