import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,d as a}from"./app.fbfac329.js";const l={},d=a(`<h1 id="threadlocal" tabindex="-1"><a class="header-anchor" href="#threadlocal" aria-hidden="true">#</a> ThreadLocal</h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5BF9\u4E8E\u65E0\u9501\u7F16\u7A0B\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u8BB2\u89E3\u4E86CAS\u3001\u539F\u5B50\u7C7B\u3001\u7D2F\u52A0\u5668\uFF0C\u672C\u8282\uFF0C\u6211\u4EEC\u8BB2\u89E3\u65E0\u9501\u7F16\u7A0B\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u77E5\u8BC6\u70B9\uFF1AThreadLocal\u3002\u6211\u4EEC\u77E5\u9053\uFF0C\u5171\u4EAB\u53D8\u91CF\u662F\u4EE3\u7801\u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\u7684\u6839\u672C\u539F\u56E0\u4E4B\u4E00\u3002\u5728\u67D0\u4E9B\u7279\u6B8A\u7684\u4E1A\u52A1\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528ThreadLocal\u7EBF\u7A0B\u5C40\u90E8\u53D8\u91CF\u66FF\u4EE3\u5171\u4EAB\u53D8\u91CF\uFF0C\u4EE5\u5B9E\u73B0\u5728\u4E0D\u9700\u8981\u52A0\u9501\u7684\u60C5\u51B5\u4E0B\u8FBE\u5230\u7EBF\u7A0B\u5B89\u5168\u3002</p></div><h2 id="\u4E00\u3001\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> <strong>\u4E00\u3001\u57FA\u672C\u7528\u6CD5</strong></h2><p>\u5728Java\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u53D8\u91CF\u7C97\u7565\u7684\u5212\u5206\u4E3A\u4E24\u7C7B\uFF1A\u7C7B\u7684\u6210\u5458\u53D8\u91CF\u548C\u51FD\u6570\u5185\u5C40\u90E8\u53D8\u91CF\u3002\u5BF9\u4E8E\u7C7B\u7684\u6210\u5458\u53D8\u91CF\uFF0C\u5F53\u591A\u4E2A\u7EBF\u7A0B\u4F7F\u7528\u540C\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5BF9\u8C61\u4E2D\u7684\u6210\u5458\u53D8\u91CF\u5C31\u662F\u5171\u4EAB\u53D8\u91CF\uFF0C\u5176\u4F5C\u7528\u57DF\u8303\u56F4\u4E3A\u591A\u4E2A\u7EBF\u7A0B\u5747\u53EF\u89C1\u3002\u591A\u4E2A\u7EBF\u7A0B\u7ADE\u6001\u8BBF\u95EE\u6210\u5458\u53D8\u91CF\uFF0C\u5C31\u6709\u53EF\u80FD\u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\u3002\u5BF9\u4E8E\u51FD\u6570\u5185\u5C40\u90E8\u53D8\u91CF\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u5728\u6267\u884C\u51FD\u6570\u65F6\uFF0C\u4F1A\u5728\u81EA\u5DF1\u7684\u6808\u4E0A\u521B\u5EFA\u79C1\u6709\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u56E0\u6B64\uFF0C\u51FD\u6570\u5185\u5C40\u90E8\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\u8303\u56F4\u4E3A\u5355\u7EBF\u7A0B\u5185\u53EF\u89C1\u3002\u4E0D\u4EC5\u5982\u6B64\uFF0C\u51FD\u6570\u5185\u5C40\u90E8\u53D8\u91CF\u4EC5\u9650\u51FD\u6570\u5185\u53EF\u89C1\uFF0C\u4E0D\u540C\u7684\u51FD\u6570\u4E4B\u95F4\u4E0D\u53EF\u4EE5\u5171\u4EAB\u5C40\u90E8\u53D8\u91CF\u3002\u591A\u4E2A\u51FD\u6570\u5171\u4EAB\u5C40\u90E8\u53D8\u91CF\uFF0C\u9700\u8981\u901A\u8FC7\u53C2\u6570\u4F20\u9012\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u3002\u6211\u4EEC\u4E3E\u4F8B\u89E3\u91CA\u4E00\u4E0B\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u73B0\u5728\u6709\u8FD9\u6837\u4E00\u4E2A\u9700\u6C42\uFF1A\u5728\u4E00\u4E2A\u6807\u51C6\u7684Controller-Service-Repository\u4E09\u5C42\u7ED3\u6784\u7684\u540E\u7AEF\u7CFB\u7EDF\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u8C03\u7528\u94FE\u8FFD\u8E2A\u529F\u80FD\u3002\u6BCF\u4E2A\u63A5\u53E3\u8BF7\u6C42\u6240\u5BF9\u5E94\u7684\u6240\u6709\u65E5\u5FD7\u90FD\u9644\u5E26\u540C\u4E00\u4E2AtraceId\uFF0C\u8FD9\u6837\uFF0C\u6211\u4EEC\u901A\u8FC7traceId\u4FBF\u53EF\u4EE5\u8F7B\u677E\u5F97\u5230\u4E00\u4E2A\u63A5\u53E3\u8BF7\u6C42\u7684\u6240\u6709\u65E5\u5FD7\uFF0C\u65B9\u4FBF\u901A\u8FC7\u65E5\u5FD7\u67E5\u627E\u4EE3\u7801\u95EE\u9898\u3002\u4EE5\u4E0B\u662F\u8C03\u7528\u94FE\u8FFD\u8E2A\u529F\u80FD\u7684\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002traceId\u5B9A\u4E49\u4E3A\u51FD\u6570\u5185\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u9700\u8981\u901A\u8FC7\u53C2\u6570\u4F20\u9012\u7ED9\u88AB\u8C03\u7528\u51FD\u6570\u4F7F\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class UserController {
  private static final Logger logger = 
      LoggerFactory.getLogger(UserController.class);
  private UserService userService = new UserService();

  public long login(String username, String password) {
    // \u521B\u5EFAtraceId
    String traceId = &quot;[&quot; + System.currentTimeMillis() + &quot;]&quot;;
    // \u6240\u6709\u7684\u65E5\u5FD7\u90FD\u5E26\u6709traceId
    logger.trace(traceId + &quot; username=&quot; + username);
    //...\u7701\u7565\u6821\u9A8C\u903B\u8F91...
    return userService.login(username, password, traceId);//\u4F20\u9012traceId
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u5B58\u5728\u7684\u95EE\u9898\u5F88\u660E\u663E\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u6BCF\u4E2A\u51FD\u6570\u4E2D\u90FD\u5B9A\u4E49traceId\u53C2\u6570\uFF0C\u5BFC\u81F4\u975E\u4E1A\u52A1\u4EE3\u7801\u548C\u4E1A\u52A1\u4EE3\u7801\u8026\u5408\u5728\u4E00\u8D77\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CJUC\u4FBF\u63D0\u4F9B\u4E86ThreadLocal\uFF0C\u5176\u4F5C\u7528\u57DF\u8303\u56F4\u4ECB\u4E8E\u7C7B\u7684\u6210\u5458\u53D8\u91CF\u548C\u51FD\u6570\u5185\u5C40\u90E8\u53D8\u91CF\u4E4B\u95F4\uFF0C\u5B83\u65E2\u662F\u7EBF\u7A0B\u79C1\u6709\u7684\uFF0C\u53C8\u53EF\u4EE5\u5728\u51FD\u6570\u4E4B\u95F4\u5171\u4EAB\uFF0C\u8FD9\u6837\u65E2\u53EF\u4EE5\u907F\u514D\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\uFF0C\u53C8\u80FD\u907F\u514D\u53D8\u91CF\u5728\u51FD\u6570\u4E4B\u95F4\u4E0D\u505C\u4F20\u9012\u3002</p><p>ThreadLocal\u7684\u63D0\u4F9B\u7684\u51FD\u6570\u5982\u4E0B\u6240\u793A\u3002\u5176\u4E2D\uFF0Cset()\u51FD\u6570\u7528\u6765\u5C06\u53D8\u91CF\u503C\u5B58\u50A8\u5728\u5F53\u524D\u7EBF\u7A0B\u4E2D\uFF0Cget()\u51FD\u6570\u7528\u6765\u4ECE\u5F53\u524D\u7EBF\u7A0B\u4E2D\u53D6\u51FA\u53D8\u91CF\u503C\u3002remove()\u51FD\u6570\u7528\u6765\u4ECE\u5F53\u524D\u7EBF\u7A0B\u5220\u9664\u53D8\u91CF\u3002initialValue()\u51FD\u6570\u662F\u4E00\u4E2Aprotected\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u5B50\u7C7B\u4E2D\u91CD\u65B0\u5B9E\u73B0\uFF0C\u7528\u4E8E\u63D0\u4F9B\u53D8\u91CF\u7684\u521D\u59CB\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ThreadLocal&lt;T&gt; {
    protected T initialValue() { return null; }
    public T get();
    public void set(T value);
    public void remove();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u4F7F\u7528ThreadLocal\u91CD\u65B0\u5B9E\u73B0\u8C03\u7528\u94FE\u8FFD\u8E2A\u529F\u80FD\uFF0C\u5BF9\u5E94\u7684\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E00\u4E2A\u533F\u540D\u7C7B\uFF0C\u7EE7\u627F\u81EAThreadLocal\uFF0C\u91CD\u5199\u4E86initialValue()\u6765\u63D0\u4F9BthreadLocalTraceId\u7684\u521D\u59CB\u503C\u3002\u5982\u679C\u5728\u8C03\u7528get()\u51FD\u6570\u4E4B\u524D\u6CA1\u6709\u8C03\u7528set()\u51FD\u6570\u8BBE\u7F6EthreadLocalTraceId\u7684\u503C\uFF0CThreadLocal\u4F1A\u8C03\u7528\u6211\u4EEC\u63D0\u4F9B\u7684initialValue()\u51FD\u6570\uFF0C\u4F7F\u7528\u5176\u8FD4\u56DE\u503C\u521D\u59CB\u5316threadLocalTraceId\u3002\u5BF9\u4E8E\u8BE6\u7EC6\u7684\u5904\u7406\u903B\u8F91\uFF0C\u6211\u4EEC\u5F85\u4F1A\u7ED3\u5408\u6E90\u7801\u6765\u8BB2\u89E3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Context {
  private static final ThreadLocal&lt;String&gt; threadLocalTraceId = 
      new ThreadLocal&lt;String&gt;() {
    @Override
    protected String initialValue() {
      return &quot;[&quot; + System.currentTimeMillis() + &quot;]&quot;;
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
    // \u6240\u6709\u7684\u65E5\u5FD7\u90FD\u5E26\u6709traceId
    logger.trace(Context.getTraceId() + &quot; username=&quot; + username);
    //...\u7701\u7565\u6821\u9A8C\u903B\u8F91...
    return userService.login(username, password); //\u901A\u8FC7Context\u4F20\u9012traceId
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> <strong>\u4E8C\u3001\u5B9E\u73B0\u539F\u7406</strong></h2><p>\u5F88\u591A\u4EBA\u5BF9ThreadLocal\u7684\u7528\u6CD5\u90FD\u611F\u5230\u5947\u602A\uFF0C\u5F80\u5F80\u4F1A\u6709\u8FD9\u6837\u7684\u7591\u95EE\uFF1A\u4F7F\u7528ThreadLocal\u5B9A\u4E49\u7684\u4E00\u4E2A\u53D8\u91CF\u600E\u4E48\u5B58\u50A8\u591A\u4E2A\u7EBF\u7A0B\u7684\u6570\u636E\uFF1F\u6216\u8005\u8BF4\u5728\u7C7B\u4E2D\u7684\u5B9A\u4E49\u7684ThreadLocal\u53D8\u91CF\u5982\u4F55\u201C\u5206\u8EAB\u201D\u5230\u591A\u4E2A\u7EBF\u7A0B\u4E2D\u4F7F\u7528\u7684\uFF1F\u6709\u8FD9\u6837\u7591\u95EE\u7684\u4E3B\u8981\u539F\u56E0\u662F\u5BF9ThreadLocal\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u6CA1\u6709\u4E86\u89E3\u3002\u4E3A\u4E86\u56DE\u7B54\u4EE5\u4E0A\u7591\u95EE\uFF0C\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u7ED3\u5408\u6E90\u7801\u6765\u4E86\u89E3\u4E00\u4E0BThreadLocal\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u3002</p><p>ThreadLocal\u7684\u4EE3\u7801\u7ED3\u6784\u5982\u4E0B\u6240\u793A\u3002\u4ECE\u5982\u4E0B\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0CThreadLocal\u7C7B\u53EA\u5B9A\u4E49\u4E86\u8BFB\u5199\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u5E76\u6CA1\u6709\u5B9A\u4E49\u4EFB\u4F55\u6210\u5458\u53D8\u91CF\u6765\u5B58\u50A8\u6570\u636E\u3002\u90A3\u4E48\uFF0Cset()\u51FD\u6570\u5199\u5165\u7684\u6570\u636E\u5B58\u50A8\u5728\u54EA\u91CC\u5462\uFF1Fget()\u51FD\u6570\u53C8\u662F\u4ECE\u54EA\u91CC\u8BFB\u53D6\u6570\u636E\u7684\u5462\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ThreadLocal&lt;T&gt; {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u56DE\u7B54\u4EE5\u4E0A\u95EE\u9898\uFF0C\u6211\u4EEC\u9700\u8981\u4E86\u89E3ThreadLocal\u7684\u6570\u636E\u5B58\u50A8\u7ED3\u6784\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002\u4ECE\u56FE\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u6570\u636E\u662F\u5B58\u50A8\u5728\u7EBF\u7A0B\u5BF9\u5E94\u7684Thread\u5BF9\u8C61\u7684threadLocals\u6210\u5458\u53D8\u91CF\u4E2D\u7684\u3002threadLocals\u6210\u5458\u53D8\u91CF\u7684\u7C7B\u578B\u4E3AThreadLocalMap\u3002ThreadLocalMap\u662FThreadLocal\u7684\u5185\u90E8\u7C7B\u3002ThreadLocalMap\u7C7B\u4F3CHashMap\uFF0C\u4E5F\u662F\u7528\u6765\u5B58\u50A8\u952E\u503C\u5BF9\uFF0C\u5176\u4E2D\uFF0C\u952E\u4E3AThreadLocal\u5BF9\u8C61\uFF0C\u503C\u4E3AObject\u5BF9\u8C61\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/29684500_1660748665.png" alt="img" loading="lazy"></p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u4F9D\u6B21\u8BB2\u89E3\u4E00\u4E0BThreadLocal\u4E2D\u7684set()\u3001get()\u3001remove()\u4E09\u4E2A\u51FD\u6570\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u3002</p><p><strong>1\uFF09set()\u51FD\u6570\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406</strong></p><p>set()\u51FD\u6570\u7684\u6E90\u7801\u5982\u4E0B\u6240\u793A\u3002\u5BF9ThreadLocal\u7684\u5B58\u50A8\u7ED3\u6784\u6709\u4E86\u4E86\u89E3\u4E4B\u540E\uFF0C\u6211\u4EEC\u4FBF\u5F88\u5BB9\u6613\u770B\u61C2set()\u51FD\u6570\u7684\u4EE3\u7801\u903B\u8F91\u3002\u5BF9\u4E8Eset()\u51FD\u6570\u7684\u4EE3\u7801\u903B\u8F91\uFF0C\u6211\u5728\u4EE3\u7801\u4E2D\u6DFB\u52A0\u4E86\u8BE6\u7EC6\u7684\u6CE8\u91CA\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void set(T value) {
    Thread t = Thread.currentThread(); //\u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B\u5BF9\u5E94\u7684Thread\u5BF9\u8C61
    ThreadLocalMap map = getMap(t); //\u83B7\u53D6Thread\u5BF9\u8C61\u7684threadLocals\u6210\u5458\u53D8\u91CF
    if (map != null) map.set(this, value); //threadLocals\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u6DFB\u52A0\u952E\u503C\u5BF9
    else createMap(t, value); //threadLocals\u4E3A\u7A7A\uFF0C\u5219\u5148\u521B\u5EFA\u518D\u6DFB\u52A0
}

ThreadLocalMap getMap(Thread t) {
    return t.threadLocals;
}

void createMap(Thread t, T firstValue) {
    t.threadLocals = new ThreadLocalMap(this, firstValue);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2\uFF09get()\u51FD\u6570\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406</strong></p><p>get()\u51FD\u6570\u7684\u6E90\u7801\u5982\u4E0B\u6240\u793A\u3002get()\u51FD\u6570\u7684\u903B\u8F91\u4E5F\u6BD4\u8F83\u7B80\u5355\u3002\u6211\u4EEC\u5148\u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B\u7684threadLocals\u6210\u5458\u53D8\u91CF\u3002\u5982\u679CthreadLocals\u4E0D\u4E3Anull\uFF0C\u90A3\u4E48\uFF0C\u6211\u4EEC\u5728threadLocals\u4E2D\u67E5\u627E\u5F53\u524D\u64CD\u4F5C\u7684ThreadLocal\u53D8\u91CF\u5BF9\u5E94\u7684\u6570\u636E\u503C\u3002\u5982\u679C\u67E5\u627E\u5230\u5BF9\u5E94\u7684\u6570\u636E\u503C\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u3002\u5982\u679CthreadLocals\u4E3Anull\uFF0C\u6216\u8005\u6CA1\u6709\u67E5\u627EthreadLocal\u53D8\u91CF\u5BF9\u5E94\u7684\u6570\u636E\u503C\uFF0C\u5219\u8C03\u7528initialValue()\u65B9\u6CD5\u83B7\u53D6\u5230threadLocal\u53D8\u91CF\u7684\u521D\u59CB\u503C\uFF0C\u521B\u5EFAthreadLocals\u5E76\u6DFB\u52A0\u952E\u503C\u5BF9\uFF08threadLocal\u53D8\u91CF\u548C\u521D\u59CB\u503C\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public T get() {
    Thread t = Thread.currentThread(); //\u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B\u5BF9\u5E94\u7684Thread\u5BF9\u8C61
    ThreadLocalMap map = getMap(t); //\u83B7\u53D6Thread\u5BF9\u8C61\u7684threadLocals\u6210\u5458\u53D8\u91CF
    if (map != null) {
        ThreadLocalMap.Entry e = map.getEntry(this); //this\u662FThreadLocal\u53D8\u91CF
        if (e != null) {
            @SuppressWarnings(&quot;unchecked&quot;)
            T result = (T)e.value;
            return result; //\u83B7\u53D6\u5230\u5BF9\u5E94\u7684\u6570\u636E\u503C
        }
    }
    //\u8981\u4E48map\u4E3Anull\uFF0C\u8981\u4E48\u6CA1\u6709\u83B7\u53D6\u5230\u5BF9\u5E94\u7684\u6570\u636E\u503C\uFF0C\u6267\u884C\u521D\u59CB\u5316\u64CD\u4F5C
    return setInitialValue();
}

private T setInitialValue() {
    T value = initialValue(); //\u9ED8\u8BA4\u8FD4\u56DEnull\uFF0C\u4F46\u53EF\u91CD\u65B0\u5B9E\u73B0\u6B64\u51FD\u6570\uFF0C\u89C1\u4E0A\u8FF0Context\u793A\u4F8B
    Thread t = Thread.currentThread();
    ThreadLocalMap map = getMap(t);
    if (map != null) map.set(this, value); //\u6DFB\u52A0\u952E\u503C\u5BF9
    else createMap(t, value); //\u521B\u5EFAthreadLocals
    return value;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3\uFF09remove()\u51FD\u6570\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406</strong></p><p>remove()\u51FD\u6570\u7684\u6E90\u7801\u5982\u4E0B\u6240\u793A\uFF0C\u76F8\u5BF9\u6765\u8BF4\uFF0C\u66F4\u52A0\u7B80\u5355\u3002\u5BF9\u5176\u4EE3\u7801\u903B\u8F91\uFF0C\u6211\u4EEC\u5C31\u4E0D\u518D\u8D58\u8FF0\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public void remove() {
     ThreadLocalMap m = getMap(Thread.currentThread());
     if (m != null) m.remove(this);
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> <strong>\u4E09\u3001\u5E94\u7528\u573A\u666F</strong></h2><p>\u524D\u9762\u6211\u4EEC\u8BB2\u5230\u7684ReentrantReadWriteLock\uFF0C\u5176\u5E95\u5C42\u5B9E\u73B0\u4E5F\u7528\u5230\u4E86ThreadLocal\u3002\u6211\u4EEC\u4E00\u5757\u56DE\u5FC6\u4E00\u4E0B\u3002\u5BF9\u4E8EReentrantReadWriteLock\uFF0CAQS\u4E2D\u7684state\u540C\u65F6\u5B58\u50A8\u5199\u9501\u548C\u8BFB\u9501\u7684\u52A0\u9501\u60C5\u51B5\u3002state\u7684\u4F4E16\u4F4D\u5B58\u50A8\u5199\u9501\u7684\u52A0\u9501\u60C5\u51B5\uFF0C\u503C\u4E3A0\u8868\u793A\u6CA1\u6709\u52A0\u5199\u9501\uFF0C\u503C\u4E3A1\u8868\u793A\u5DF2\u52A0\u5199\u9501\uFF0C\u503C\u5927\u4E8E1\u8868\u793A\u5199\u9501\u7684\u91CD\u5165\u6B21\u6570\u3002state\u7684\u9AD816\u4F4D\u5B58\u50A8\u8BFB\u9501\u7684\u52A0\u9501\u60C5\u51B5\uFF0C\u503C\u4E3A0\u8868\u793A\u6CA1\u6709\u52A0\u8BFB\u9501\uFF0C\u503C\u4E3A1\u8868\u793A\u5DF2\u52A0\u8BFB\u9501\uFF0C\u4E0D\u8FC7\uFF0C\u503C\u5927\u4E8E1\u5E76\u4E0D\u8868\u793A\u8BFB\u9501\u7684\u91CD\u5165\u6B21\u6570\uFF0C\u800C\u662F\u8868\u793A\u8BFB\u9501\u603B\u5171\u88AB\u83B7\u53D6\u4E86\u591A\u5C11\u6B21\uFF08\u6BCF\u4E2A\u7EBF\u7A0B\u5BF9\u8BFB\u9501\u91CD\u5165\u7684\u6B21\u6570\u76F8\u52A0\uFF09\uFF0C\u6B64\u503C\u7528\u6765\u6700\u7EC8\u89E3\u9501\u8BFB\u9501\u3002\u800C\u6BCF\u4E2A\u7EBF\u7A0B\u5BF9\u8BFB\u9501\u7684\u91CD\u5165\u6B21\u6570\u662F\u6709\u7528\u4FE1\u606F\uFF0C\u53EA\u6709\u91CD\u5165\u6B21\u6570\u5927\u4E8E0\u65F6\uFF0C\u7EBF\u7A0B\u624D\u53EF\u4EE5\u7EE7\u7EED\u91CD\u5165\u3002\u90A3\u4E48\uFF0C\u91CD\u5165\u6B21\u6570\u5728\u54EA\u91CC\u8BB0\u5F55\u5462\uFF1F\u56E0\u4E3A\u91CD\u5165\u6B21\u6570\u662F\u8DDF\u6BCF\u4E2A\u7EBF\u7A0B\u76F8\u5173\u7684\u6570\u636E\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528ThreadLocal\u53D8\u91CF\u6765\u5B58\u50A8\u5B83\u3002\u5BF9\u5E94\u7684\u6E90\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u4EE5\u4E0B\u4EE3\u7801\u4F4D\u4E8EReentrantReadWriteLock.java\u4E2D
static final class HoldCounter {
    int count = 0;
    final long tid = getThreadId(Thread.currentThread());
}

static final class ThreadLocalHoldCounter extends ThreadLocal&lt;HoldCounter&gt; {
    public HoldCounter initialValue() {
        return new HoldCounter();
    }
}

private transient ThreadLocalHoldCounter readHolds;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001\u8BFE\u540E\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u8BFE\u540E\u601D\u8003\u9898" aria-hidden="true">#</a> <strong>\u56DB\u3001\u8BFE\u540E\u601D\u8003\u9898</strong></h2><p>\u5728\u672C\u8282\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u65F6\u95F4\u6233\u6765\u751F\u6210traceId\uFF0C\u5982\u679C\u6211\u4EEC\u66F4\u6539traceId\u7684\u751F\u6210\u65B9\u5F0F\uFF0C\u4F7F\u7528\u81EA\u589E\u7684\u65B9\u5F0F\u751F\u6210traceId\uFF0C\u5982\u4E0B\u4EE3\u7801\u6240\u793A\uFF0C\u90A3\u4E48\uFF0C\u8BF7\u95EE\u4E0B\u9762\u7684\u4EE3\u7801\u662F\u5426\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF1F\u5982\u679C\u4E0D\u662F\uFF0C\u5E94\u8BE5\u5982\u4F55\u4FEE\u6539\u624D\u80FD\u4FDD\u8BC1\u5176\u7EBF\u7A0B\u5B89\u5168\u6027\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Context {
  private static int id = 0;
  private static final ThreadLocal&lt;String&gt; threadLocalTraceId = 
      new ThreadLocal&lt;String&gt;() {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),r=[d];function s(c,t){return i(),n("div",null,r)}const o=e(l,[["render",s],["__file","ThreadLocal.html.vue"]]);export{o as default};
