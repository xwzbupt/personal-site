import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{f as i}from"./app.4c5b4a5b.js";const n={},s=i(`<h1 id="\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B" aria-hidden="true">#</a> \u6CDB\u578B</h1><blockquote><p><strong>\u4E3A\u4EC0\u4E48C++\u6CDB\u578B\u652F\u6301int\u7B49\u57FA\u672C\u7C7B\u578B\u800CJava\u6CDB\u578B\u4E0D\u652F\u6301\u5462\uFF1F</strong></p></blockquote><p>\u6CDB\u578B\u5728Java\u4E2D\u662F\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u8BED\u6CD5\uFF0C\u6BD4\u5982\u6211\u4EEC\u7ECF\u5E38\u7528\u7684\u5BB9\u5668\u90FD\u652F\u6301\u6CDB\u578B\u3002Java\u6CDB\u578B\u4E0D\u652F\u6301int\u7B49\u57FA\u672C\u7C7B\u578B\uFF0C\u6240\u4EE5\uFF0C\u5728Java\u5BB9\u5668\u4E2D\u4E0D\u80FD\u5B58\u50A8\u57FA\u672C\u7C7B\u578B\u6570\u636E\uFF0C\u6BD4\u5982<code>List&lt;int&gt;</code>\u8FD9\u6837\u662F\u4E0D\u5408\u6CD5\u7684\u3002\u800CC++\u6CDB\u578B\u652F\u6301int\u7B49\u57FA\u672C\u7C7B\u578B\uFF0C\u6240\u4EE5\uFF0C\u5728C++\u5BB9\u5668\u4E2D\u53EF\u4EE5\u5B58\u50A8\u57FA\u672C\u7C7B\u578B\u6570\u636E\uFF0C\u6BD4\u5982<code>vector&lt;int&gt;</code>\u8FD9\u6837\u662F\u5408\u6CD5\u7684\u3002\u90A3\u4E48\uFF0C\u4E3A\u4EC0\u4E48C++\u6CDB\u578B\u652F\u6301int\u7B49\u57FA\u672C\u7C7B\u578B\u800CJava\u6CDB\u578B\u4E0D\u652F\u6301\u5462\uFF1F\u5E26\u7740\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u6765\u5B66\u4E60\u672C\u8282\u7684\u5185\u5BB9\u3002</p><h2 id="\u4E00\u3001\u4E3A\u4EC0\u4E48\u4F7F\u7528\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E3A\u4EC0\u4E48\u4F7F\u7528\u6CDB\u578B" aria-hidden="true">#</a> <strong>\u4E00\u3001\u4E3A\u4EC0\u4E48\u4F7F\u7528\u6CDB\u578B</strong></h2><p>\u5047\u8BBE\u6211\u4EEC\u8981\u5B9E\u73B0\u4E00\u4E2A\u6808Stack\uFF0C\u5E76\u4E14\u5E0C\u671B\u8FD9\u4E2A\u6808\u53EF\u4EE5\u652F\u6301\u4E0D\u540C\u7C7B\u578B\u6570\u636E\u7684\u5B58\u50A8\uFF0C\u6BD4\u5982Integer\u3001User\u7B49\u3002\u5982\u679C\u4E0D\u4F7F\u7528\u6CDB\u578B\uFF0C\u6211\u4EEC\u6709\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002</p><p><strong>1\uFF09\u7B2C\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F</strong></p><p>\u6211\u4EEC\u4E3A\u5B58\u50A8\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u5B9A\u4E49\u4E0D\u540C\u7684Stack\u7C7B\uFF0C\u793A\u4F8B\u5982\u4E0B\u6240\u793A\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u5B58\u50A8Integer\u7C7B\u578B\u6570\u636E\u7684IntegerStack\u548C\u5B58\u50A8Long\u7C7B\u578B\u6570\u636E\u7684LongStack\u3002\u652F\u6301\u591A\u5C11\u79CD\u7C7B\u578B\u6570\u636E\u7684\u5B58\u50A8\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u5B9A\u4E49\u591A\u5C11\u4E2AStack\u7C7B\u3002\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u7684\u5F0A\u7AEF\u663E\u800C\u6613\u89C1\uFF0C\u9700\u8981\u5B9E\u73B0\u5F88\u591A\u529F\u80FD\u76F8\u4F3C\u7684\u7C7B\uFF0C\u5E76\u4E14\u7F16\u5199\u5927\u91CF\u7684\u91CD\u590D\u4EE3\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B58\u50A8Integer\u7C7B\u578B\u6570\u636E\u7684Stack\u7C7B
public class IntegerStack {
  private Integer[] arr;
  private int top;
  private int size;
  
  public IntegerStack(int size) {
    this.arr = new Integer[size];
    this.size = size;
    this.top = 0;
  }
  
  public void push(Integer elem) {
    if (top == size) return;
    arr[top++] = elem; 
  }
  
  public Integer pop() {
    if (top == 0) return null;
    return arr[--top];
  }
}

// \u5B58\u50A8Long\u7C7B\u578B\u6570\u636E\u7684Stack\u7C7B
public class LongStack {
  private Long[] arr;
  private int top;
  private int size;
  
  public LongStack(int size) {
    this.arr = new Long[size];
    this.size = size;
    this.top = 0;
  }
  
  public void push(Long elem) {
    if (top == size) return;
    arr[top++] = elem; 
  }
  
  public Long pop() {
    if (top == 0) return null;
    return arr[--top];
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2\uFF09\u7B2C\u4E8C\u79CD\u5B9E\u73B0\u65B9\u5F0F</strong></p><p>\u6211\u4EEC\u4E3A\u6240\u6709\u53EF\u80FD\u5B58\u50A8\u7684\u7C7B\u578B\uFF0C\u62BD\u8C61\u51FA\u7EDF\u4E00\u7684\u63A5\u53E3\u6216\u8005\u7236\u7C7B\u3002\u8FD9\u6837\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u9488\u5BF9\u63A5\u53E3\u6216\u7236\u7C7B\u5B9E\u73B0\u4E00\u4E2A\u901A\u7528\u7684Stack\u7C7B\uFF0C\u6240\u6709\u7684\u5B50\u7C7B\u6570\u636E\u90FD\u53EF\u4EE5\u5B58\u50A8\u5230\u8FD9\u4E2A\u901A\u7528\u7684Stack\u7C7B\u3002\u6BD4\u5982\uFF0C\u5982\u679C\u6808\u4E2D\u5B58\u50A8\u7684\u662FInteger\u3001Long\u3001Float\u3001Double\u7B49\u6570\u5B57\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u8FD9\u4E9B\u6570\u5B57\u7C7B\u578B\u7684\u7236\u7C7B\u662FNumber\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EA\u9700\u8981\u8BBE\u8BA1\u4E00\u4E2A\u5B58\u50A8Number\u7C7B\u578B\u6570\u636E\u7684Stack\u7C7B\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u652F\u6301Number\u7684\u5B50\u7C7B\u7C7B\u578B\u6570\u636E\u5B58\u50A8
public class NumericStack {
  private Number[] arr;
  private int top;
  private int size;

  public NumericStack(int size) {
    this.arr = new Number[size];
    this.size = size;
    this.top = 0;
  }

  public void push(Number elem) {
    if (top == size) return;
    arr[top++] = elem;
  }

  public Number pop() {
    if (top == 0) return null;
    return arr[--top];
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u5982\u679C\u6808\u4E2D\u5B58\u50A8\u7684\u6570\u636E\u7684\u7C7B\u578B\u4E0D\u786E\u5B9A\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528Object\u4F5C\u4E3A\u516C\u5171\u7684\u7236\u7C7B\u6765\u5B9A\u4E49Stack\u6808\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u652F\u6301\u4EFB\u610F\u7C7B\u578B\u6570\u636E\u5B58\u50A8
public class Stack {
  private Object[] arr;
  private int top;
  private int size;

  public Stack(int size) {
    this.arr = new Object[size];
    this.size = size;
    this.top = 0;
  }

  public void push(Object elem) {
    if (top == size) return;
    arr[top++] = elem;
  }

  public Object pop() {
    if (top == 0) return null;
    return arr[--top];
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u5B9E\u73B0\u65B9\u5F0F\u770B\u8D77\u6765\u5F88\u5B8C\u7F8E\uFF0C\u4F46\u5728\u4F7F\u7528\u65F6\u5374\u5B58\u5728\u4E00\u5B9A\u7684\u95EE\u9898\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u4E0B\u5217\u4EE3\u7801\u7F16\u8BD1\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u5728\u8FD0\u884C\u65F6\u4F1A\u629B\u51FAClassCastException\u5F02\u5E38\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Stack stack = new Stack(10);
stack.push(12);
stack.push(&quot;34&quot;); //\u7F16\u8BD1\u65F6\u672A\u4F5C\u7C7B\u578B\u68C0\u67E5
Integer elem = (Integer) stack.pop(); //\u8FD0\u884C\u65F6\u62A5\u9519
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u672C\u5E0C\u671B\u5728\u6808\u4E2D\u5B58\u50A8\u6574\u578B\u6570\u636E\uFF0C\u4F46\u5728\u4EE3\u7801\u7F16\u5199\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u56E0\u4E3A\u758F\u5FFD\uFF0C\u5C06\u5B57\u7B26\u4E32\u5B58\u50A8\u5230\u4E86\u6808\u4E2D\u3002\u56E0\u4E3AStack\u652F\u6301Object\u7C7B\u578B\u7684\u6570\u636E\u5B58\u50A8\uFF0C\u6240\u4EE5\uFF0C\u5B58\u50A8\u5B57\u7B26\u4E32\u5230\u6808\u4E2D\u5E76\u4E0D\u4F1A\u5F15\u8D77\u7F16\u8BD1\u6216\u8005\u8FD0\u884C\u65F6\u62A5\u9519\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0C\u7F16\u8BD1\u5668\u6CA1\u6709\u5E2E\u6211\u4EEC\u505A\u7C7B\u578B\u68C0\u67E5\u3002</p><p>\u7236\u7C7B\u7C7B\u578B\u5411\u5B50\u7C7B\u7C7B\u578B\u8F6C\u6362\uFF0C\u9700\u8981\u663E\u5F0F\u7684\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u3002\u5F53\u6211\u4EEC\u4F7F\u7528pop()\u51FD\u6570\u5C06\u6570\u636E\u4ECE\u6808\u4E2D\u53D6\u51FA\u65F6\uFF0C\u56E0\u4E3A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E3AObject\u7C7B\u578B\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u5176\u8F6C\u5316\u6210Integer\u7C7B\u578B\u518D\u4F7F\u7528\u3002\u800C\u6267\u884Cpop()\u51FD\u6570\u8FD4\u56DE\u7684\u662FString\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u4E3AInteger\u7C7B\u578B\u5931\u8D25\uFF0C\u4E8E\u662F\uFF0C\u5C31\u629B\u51FA\u4E86ClassCastException\u8FD0\u884C\u65F6\u5F02\u5E38\u3002</p><p>\u603B\u7ED3\u4E00\u4E0B\uFF0C\u4EE5\u4E0A\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u5404\u6709\u5229\u5F0A\uFF0C\u90FD\u4E0D\u5B8C\u7F8E\u3002\u4F7F\u7528\u7B2C\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u9700\u8981\u5B9A\u4E49\u5927\u91CF\u76F8\u4F3C\u7684\u7C7B\uFF0C\u7F16\u5199\u5927\u91CF\u7684\u91CD\u590D\u4EE3\u7801\u3002\u800C\u4F7F\u7528\u7B2C\u4E8C\u4E2D\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u65E0\u6CD5\u4EAB\u53D7\u5230\u7F16\u8BD1\u5668\u5728\u7F16\u8BD1\u65F6\u7684\u7C7B\u578B\u68C0\u67E5\u670D\u52A1\uFF0C\u5E76\u4E14\uFF0C\u4EE3\u7801\u4E2D\u5145\u65A5\u7740\u663E\u5F0F\u7684\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF0C\u4E5F\u4E0D\u7F8E\u89C2\u3002</p><p>\u4E8E\u662F\uFF0C\u4E3A\u4E86\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898\uFF0CJDK5\u5F15\u5165\u4E86\u6CDB\u578B\u8BED\u6CD5\u3002\u6CDB\u578B\u7EE7\u627F\u4E86\u4E0A\u8FF0\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u7684\u4F18\u70B9\uFF0C\u53C8\u6452\u5F03\u4E86\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u7684\u7F3A\u70B9\u3002\u4F7F\u7528\u6CDB\u578B\uFF0C\u6211\u4EEC\u65E2\u53EF\u4EE5\u6D88\u9664\u91CD\u590D\u4EE3\u7801\uFF0C\u53C8\u53EF\u4EE5\u5229\u7528\u7F16\u8BD1\u5668\u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u4FDD\u8BC1\u7C7B\u578B\u7684\u5B89\u5168\u6027\u3002</p><p>\u6211\u4EEC\u4F7F\u7528\u6CDB\u578B\u5B9E\u73B0\u4E86\u4E00\u4E2A\u652F\u6301\u5404\u79CD\u7C7B\u578B\u6570\u636E\u5B58\u50A8\u7684\u6808\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Stack&lt;E&gt; {
  private Object[] arr; //\u8FD9\u91CC\u4E0D\u662FT[] arr; \u539F\u56E0\u7A0D\u540E\u89E3\u91CA
  private int top;
  private int size;

  public Stack(int size) {
    this.arr = new Object[size];
    this.size = size;
    this.top = 0;
  }

  public void push(E elem) {
    if (top == size) return;
    arr[top++] = elem;
  }

  public E pop() {
    if (top == 0) return null;
    return (E) arr[--top];
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F7F\u7528\u4E0A\u8FF0Stack\u6CDB\u578B\u7C7B\uFF08<code>Stack&lt;T&gt;</code>\uFF09\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u6307\u5B9A\u7C7B\u578B\uFF0C\u5C06\u5176\u8F6C\u5316\u4E3A\u5177\u4F53\u7C7B\uFF08\u6BD4\u5982<code>Stack&lt;Integer&gt;</code>\uFF09\u3002\u5982\u679C\u5F80\u6808\u4E2D\u5B58\u50A8\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5728\u7F16\u8BD1\u65F6\u63D0\u793A\u7C7B\u578B\u9519\u8BEF\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u5728\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u4E5F\u4E0D\u9700\u8981\u4F7F\u7528\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Stack&lt;Integer&gt; stack = new Stack&lt;&gt;(10); //\u6307\u5B9A\u7C7B\u578B
stack.push(12);
// stack.push(&quot;34&quot;); //\u53BB\u6389\u6CE8\u91CA\u4E4B\u540E\u4F1A\u62A5\u7F16\u8BD1\u9519\u8BEF
Integer elem = stack.pop(); //\u4E0D\u9700\u8981\u7C7B\u578B\u8F6C\u6362
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6839\u636E\u4E0A\u9762\u7684\u8BB2\u89E3\uFF0C\u6211\u4EEC\u53D1\u73B0\uFF0C\u6CDB\u578B\u672C\u8D28\u4E0A\u5C31\u662F\u5BF9\u7C7B\u578B\u7684\u53C2\u6570\u5316\uFF0C\u5728\u7C7B\u7684\u5B9A\u4E49\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u7C7B\u578B\u5F53\u505A\u53C2\u6570\uFF0C\u5F53\u4F7F\u7528\u7C7B\u65F6\uFF0C\u6211\u4EEC\u5411\u7C7B\u578B\u53C2\u6570\u4F20\u5165\u5177\u4F53\u7C7B\u578B\u3002</p><h2 id="\u4E8C\u3001\u6CDB\u578B\u7684\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6CDB\u578B\u7684\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> <strong>\u4E8C\u3001\u6CDB\u578B\u7684\u57FA\u672C\u7528\u6CD5</strong></h2><p>\u521A\u521A\u6211\u4EEC\u4ECB\u7ECD\u4E86\u6CDB\u578B\u7684\u7531\u6765\uFF0C\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u8BE6\u7EC6\u8BB2\u89E3\u4E00\u4E0B\u6CDB\u578B\u7684\u7528\u6CD5\u3002\u6CDB\u578B\u4E00\u822C\u6709\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF1A\u6CDB\u578B\u63A5\u53E3\u3001\u6CDB\u578B\u7C7B\u3001\u6CDB\u578B\u65B9\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6CDB\u578B\u63A5\u53E3
public interface List&lt;E&gt; {
  void add(E element);
  E get(int index);
  ...
}

// \u6CDB\u578B\u7C7B
public class ArrayList&lt;E&gt; implements List&lt;E&gt; {
    private Object[] arr; //\u8FD9\u91CC\u4E0D\u662FT[] arr; \u539F\u56E0\u7A0D\u540E\u89E3\u91CA
    ...
    public void add(E element) { ... }
    public E get(int index) { ... }
}

// \u6CDB\u578B\u65B9\u6CD5
public class Collections {
  public static &lt;T&gt; int binarySearch(List&lt;T&gt; list, T key);
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u4E2D\uFF0C\u5C16\u62EC\u53F7\u5185\u7684E\u3001T\u7B49\u8868\u793A\u7C7B\u578B\u53C2\u6570\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u5B83\u4EEC\u4E5F\u53EF\u4EE5\u66FF\u6362\u4E3A\u4EFB\u610F\u5927\u5199\u5B57\u6BCD\u3002\u4E0D\u8FC7\uFF0C\u6211\u4EEC\u4E00\u822C\u4E60\u60EF\u6027\u4F7F\u7528E\u3001T\u3001K\u3001V\u3001N\u8FD9\u51E0\u4E2A\u5927\u5199\u5B57\u6BCD\u6765\u8868\u793A\u7C7B\u578B\u53C2\u6570\u3002</p><p>1\uFF09E\u662Felement\u7684\u9996\u5B57\u6BCD\uFF0C\u4E00\u822C\u7528\u6765\u8868\u793A\u5BB9\u5668\u4E2D\u7684\u5143\u7D20\u7684\u7C7B\u578B\u53C2\u6570\u3002</p><p>2\uFF09T\u662Ftype\u7684\u9996\u5B57\u6BCD\uFF0C\u4E00\u822C\u7528\u6765\u8868\u793A\u975E\u5BB9\u5668\u5143\u7D20\u7684\u6570\u636E\u7C7B\u578B\u53C2\u6570\u3002</p><p>3\uFF09K\u3001V\u5206\u522B\u662Fkey\u548Cvalue\u7684\u9996\u5B57\u6BCD\uFF0C\u4E00\u822C\u7528\u6765\u8868\u793A\u952E\u503C\u5BF9\u4E2D\u952E\u548C\u503C\u7684\u7C7B\u578B\u53C2\u6570\u3002</p><p>4\uFF09N\u662Fnumber\u7684\u9996\u5B57\u6BCD\uFF0C\u4E00\u822C\u7528\u6765\u8868\u793A\u6570\u5B57\u7C7B\u578B\u53C2\u6570\u3002</p><p>\u5F53\u7136\uFF0C\u4E00\u4E2A\u6CDB\u578B\u63A5\u53E3\u3001\u6CDB\u578B\u7C7B\u3001\u6CDB\u578B\u65B9\u6CD5\u4E2D\u4E5F\u53EF\u4EE5\u652F\u6301\u591A\u4E2A\u7C7B\u578B\u53C2\u6570\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface Map&lt;K,V&gt; {
    void put(K key, V value);
    V get(K key);
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u6CDB\u578B\uFF0C\u9664\u4E86\u4EE5\u4E0A\u57FA\u672C\u7528\u6CD5\u4E4B\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528extends\u4E0A\u754C\u9650\u5B9A\u7B26\uFF0C\u9650\u5B9A\u7C7B\u578B\u53C2\u6570\u7684\u5177\u4F53\u53D6\u503C\u8303\u56F4\u3002\u4F8B\u5982\uFF0C<code>&lt;T extends Person&gt;</code>\u8868\u793A\u9650\u5B9A\u4F20\u5165\u7C7B\u578B\u53C2\u6570\u7684\u5177\u4F53\u7C7B\u578B\u5FC5\u987B\u662FPerson\u6216\u8005Person\u7684\u5B50\u7C7B\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6CDB\u578B\u4E2D\u53EA\u6709extends\uFF0C\u6CA1\u6709implements\u3002\u8FD9\u91CC\u7684extends\u65E2\u53EF\u4EE5\u8868\u793A\u7C7B\u578B\u7EE7\u627F\uFF0C\u4E5F\u53EF\u4EE5\u8868\u793A\u63A5\u53E3\u5B9E\u73B0\u3002\u4F8B\u5982\uFF0C<code>&lt;T extends Closable&gt;</code>\u8868\u793A\u9650\u5B9A\u4F20\u5165\u7C7B\u578B\u53C2\u6570\u7684\u5177\u4F53\u7C7B\u578B\u5FC5\u987B\u5B9E\u73B0\u4E86Closable\u63A5\u53E3\u3002</p><p>\u5BF9\u4E8Eextends\u4E0A\u754C\u9650\u5B9A\u7B26\u7684\u7528\u6CD5\uFF0C\u6211\u4EEC\u4E3E\u4F8B\u89E3\u91CA\u4E00\u4E0B\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u5E0C\u671B\u8BBE\u8BA1\u4E00\u4E2A\u6CDB\u578B\u65B9\u6CD5\uFF0C\u7528\u6765\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u5927\u5C0F\u3002\u8FD9\u4E2A\u65B9\u6CD5\u53EA\u652F\u6301\u5B9E\u73B0\u4E86Comparable\u63A5\u53E3\u7684\u5BF9\u8C61\u8FDB\u884C\u5927\u5C0F\u6BD4\u8F83\u3002\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u4E2A\u9700\u6C42\uFF0C\u5982\u4E0B\u4EE3\u7801\u6240\u793A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528extends\u5173\u952E\u5B57\uFF0C\u9650\u5236a\u3001b\u7684\u7C7B\u578B\u5FC5\u987B\u5B9E\u73B0Comparable\u63A5\u53E3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Utils\u7C7B\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6CDB\u578B\u65B9\u6CD5
public class Utils {
  public &lt;T extends Comparable&lt;T&gt;&gt; T max(T a, T b) {
    if (a.compareTo(b) &lt;= 0) return a;
    else return b;
  }
}

// \u5177\u4F53\u4F7F\u7528\u65B9\u6CD5
Student s1 = new Student(2, 13); //Student\u7C7B\u5B9E\u73B0\u4E86Comparable\u63A5\u53E3
Student s2 = new Student(4, 22);
Student maxStu = Utils.max(s1, s2); //\u4E0D\u9700\u8981\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362

// Comparable\u63A5\u53E3\u7684\u5B9A\u4E49\uFF08\u6CDB\u578B\u63A5\u53E3\uFF09
public interface Comparable&lt;T&gt; {
  int compareTo(T o);
}

// Student
public class Student implements Comparable&lt;Student&gt; {
  public int id;
  public int age;
  public Student(int id, int age) {
    this.id = id;
    this.age = age;
  }

  @Override
  public int compareTo(Student o) {
    return this.age - o.age;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u6CDB\u578B\u4E2D\u7684\u901A\u914D\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6CDB\u578B\u4E2D\u7684\u901A\u914D\u7B26" aria-hidden="true">#</a> <strong>\u4E09\u3001\u6CDB\u578B\u4E2D\u7684\u901A\u914D\u7B26</strong></h2><p>\u9664\u4E86\u7C7B\u578B\u53C2\u6570\u4E4B\u5916\uFF0C\u6CDB\u578B\u4E2D\u8FD8\u6709\u53E6\u5916\u4E00\u4E2A\u5E38\u7528\u8BED\u6CD5\uFF1A\uFF1F\u901A\u914D\u7B26\u3002</p><p>\u901A\u914D\u7B26\u8DDF\u7C7B\u578B\u53C2\u6570\u7684\u5E94\u7528\u573A\u666F\u5E76\u4E0D\u76F8\u540C\u3002\u7C7B\u578B\u53C2\u6570\u4E00\u822C\u7528\u6765\u5B9A\u4E49\u6CDB\u578B\u7C7B\u3001\u6CDB\u578B\u63A5\u53E3\u548C\u6CDB\u578B\u65B9\u6CD5\uFF0C\u800C\u901A\u914D\u7B26\u8DDFInteger\u3001Person\u3001String\u8FD9\u4E9B\u5177\u4F53\u7C7B\u578B\u65E0\u5F02\uFF0C\u7528\u6765\u5177\u4F53\u5316\u6CDB\u578B\u7C7B\u6216\u6CDB\u578B\u63A5\u53E3\uFF0C\u53EF\u4EE5\u770B\u505A\u4E00\u79CD\u7279\u6B8A\u7684\u5177\u4F53\u7C7B\u578B\u3002\u5F53\u6211\u4EEC\u5728\u5177\u4F53\u5316\u67D0\u4E2A\u6CDB\u578B\u7C7B\u6216\u6CDB\u578B\u63A5\u53E3\uFF0C\u4F46\u53C8\u65E0\u6CD5\u6307\u660E\u660E\u786E\u7684\u5177\u4F53\u7C7B\u578B\u65F6\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\u8FD9\u79CD\u7279\u6B8A\u7684\u5177\u4F53\u7C7B\u578B\u3002</p><p>\u901A\u914D\u7B26\u5E38\u7528\u4E8E\u65B9\u6CD5\u53C2\u6570\u4E2D\uFF0C\u5F53\u65B9\u6CD5\u4E2D\u7684\u67D0\u4E2A\u53C2\u6570\u4E3A\u6CDB\u578B\u7C7B\u6216\u63A5\u53E3\u65F6\uFF0C\u5982\u679C\u6211\u4EEC\u65E0\u6CD5\u6307\u5B9A\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\u6765\u8868\u793A\u53EF\u4EE5\u5339\u914D\u4EFB\u610F\u7C7B\u578B\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002reverse()\u65B9\u6CD5\u4E2D\u7684list\u5BF9\u5E94\u7684\u7C7B\u662F\u4E00\u4E2A\u6CDB\u578B\u7C7B\uFF0C\u5728\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u4F20\u5165\u5177\u4F53\u7C7B\u578B\uFF0C\u4F46\u662F\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5E76\u4E0D\u77E5\u9053\u5177\u4F53\u7684\u7C7B\u578B\u662F\u4EC0\u4E48\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u5C31\u7528\u901A\u914D\u7B26\u6765\u66FF\u4EE3\u5177\u4F53\u7C7B\u578B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Colletions {
  public static void reverse(List&lt;?&gt; list) { ... }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u5728reverse()\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u53C2\u6570\u66FF\u4EE3\u901A\u914D\u7B26\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u53EA\u4E0D\u8FC7\uFF0C\u6B64\u65F6\u7684reverse()\u51FD\u6570\u4FBF\u662F\u4E00\u4E2A\u6CDB\u578B\u65B9\u6CD5\u3002\u5728\u6CDB\u578B\u65B9\u6CD5\u4E2D\uFF0C\u65B9\u6CD5\u7684\u524D\u9762\u9700\u8981\u6DFB\u52A0<code>&lt;T&gt;</code>\u7C7B\u578B\u53C2\u6570\u58F0\u660E\uFF0C\u800C\u4F7F\u7528\u901A\u914D\u7B26\u5B9A\u4E49\u7684reverse()\u51FD\u6570\u4E2D\uFF0C\u5E76\u6CA1\u6709\u7C7B\u578B\u53C2\u6570\u58F0\u660E\u3002\u8FD9\u662F\u4E24\u8005\u7684\u4E3B\u8981\u533A\u522B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Colletions {
  public static &lt;T&gt; void reverse(List&lt;T&gt; list) { ... }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E\u901A\u914D\u7B26\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u53E6\u4E00\u4E2A\u7A0D\u5FAE\u590D\u6742\u70B9\u7684\u4F8B\u5B50\u3002\u4E0B\u9762\u7684\u4EE3\u7801\u662F\u5426\u53EF\u4EE5\u6210\u529F\u6267\u884C\u5462\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  public static class Member {}
  public static class Student extends Member {}
  public static void test(List&lt;Member&gt; members) { }
  public static void main(String[] args) {
    List&lt;Student&gt; students = new ArrayList&lt;Student&gt;();
    test(students);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7F16\u8BD1\u5931\u8D25\uFF0C\u7F16\u8BD1\u5668\u63D0\u793Atest(students);\u8FD9\u4E00\u8BED\u53E5\u7C7B\u578B\u4E0D\u5339\u914D\u3002\u5C3D\u7BA1Student\u662FMember\u7684\u5B50\u7C7B\uFF0C\u4F46\u662F\uFF0C<code>List&lt;Student&gt;</code>\u8DDF<code>List&lt;Member&gt;</code>\u5E76\u6CA1\u6709\u4EFB\u4F55\u7EE7\u627F\u5173\u7CFB\uFF0C\u6240\u4EE5\uFF0C\u5C06<code>List&lt;Student&gt;</code>\u7C7B\u578B\u7684\u6570\u636E\u4F20\u9012\u7ED9<code>List&lt;Member&gt;</code>\u4F1A\u62A5\u9519\u3002\u5BF9\u4E8E\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u4F7F\u7528\u901A\u914D\u7B26\u914D\u5408extends\u4E0A\u754C\u9650\u5B9A\u7B26\u5373\u53EF\u89E3\u51B3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  public static class Member {}
  public static class Student extends Member {}
  public static void test(List&lt;? extends Member&gt; members) { }
  public static void main(String[] args) {
    List&lt;Student&gt; students = new ArrayList&lt;Student&gt;();
    test(students);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u53C2\u6570\u66FF\u4EE3\u901A\u914D\u7B26\u6765\u89E3\u51B3\u3002\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u4E0D\u8FC7\uFF0C\u4ECE\u7C7B\u578B\u53C2\u6570\u4E0E\u901A\u914D\u7B26\u7684\u5E94\u7528\u573A\u666F\u6765\u770B\uFF0C\u6211\u4EEC\u66F4\u503E\u5411\u4E8E\u4F7F\u7528\u901A\u914D\u7B26\u6765\u5B9E\u73B0test()\u65B9\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo {
  public static class Member {}
  public static class Student extends Member {}
  public static &lt;T extends Member&gt; void test(List&lt;T&gt; members) { }
  public static void main(String[] args) {
    List&lt;Student&gt; students = new ArrayList&lt;Student&gt;();
    test(students);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8BF4\u4E0A\u9762\u5217\u4E3E\u7684\u4E00\u4E9B\u573A\u666F\uFF0C\u7C7B\u578B\u53C2\u6570\u5B8C\u5168\u53EF\u4EE5\u66FF\u4EE3\u901A\u914D\u7B26\uFF0C\u4F7F\u7528\u7C7B\u578B\u53C2\u6570\u548C\u4F7F\u7528\u901A\u914D\u7B26\u6CA1\u6709\u660E\u663E\u533A\u522B\uFF0C\u90FD\u53EF\u4EE5\uFF0C\u90A3\u4E48\uFF0C\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C31\u53EA\u80FD\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u800C\u4E0D\u80FD\u4F7F\u7528\u7C7B\u578B\u53C2\u6570\u3002</p><p><strong>1\uFF09&lt;? super Person&gt;</strong></p><p>\u524D\u9762\u6211\u4EEC\u53EA\u8BB2\u5230\u4E86extends\u4E0A\u754C\u9650\u5B9A\u7B26\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u5BF9\u5E94\u5730\u8FD8\u6709super\u4E0B\u754C\u9650\u5B9A\u7B26\u3002extends\u4E0A\u754C\u9650\u5B9A\u7B26\u65E2\u53EF\u4EE5\u7528\u4E8E\u7C7B\u578B\u53C2\u6570\uFF08\u5982<code>&lt;T extends Student&gt;</code>\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u901A\u914D\u7B26\uFF08\u5982<code>&lt;? extends Student&gt;</code>\uFF09\u3002\u800Csuper\u4E0B\u754C\u9650\u5B9A\u7B26\u53EA\u80FD\u7528\u4E8E\u901A\u914D\u7B26\uFF0C\u6BD4\u5982<code>&lt;? super Student&gt;</code>\uFF0C\u8868\u793A\u4F20\u5165\u901A\u914D\u7B26\u7684\u5177\u4F53\u7C7B\u578B\u4E3AStudent\u6216\u8005Student\u7684\u7236\u7C7B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void add(List&lt;? super Student&gt; list, Student stu) { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2\uFF09<code>&lt;? extends T&gt;</code>\u6216<code>&lt;? super T&gt;</code></strong></p><p>\u901A\u914D\u7B26\u53EF\u4EE5extends\u6216super\u7C7B\u578B\u53C2\u6570\uFF0C\u4F46\u7C7B\u578B\u53C2\u6570\u4E0D\u53EF\u4EE5extends\u6216super\u7C7B\u578B\u53C2\u6570\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5408\u6CD5
public &lt;T&gt; void copy(List&lt;? super T&gt; dest, List&lt;? extends T&gt; src) { ... }

// \u62A5\u9519
public &lt;T, U, S&gt; void copy(List&lt;U super T&gt; dest, List&lt;S extends T&gt; src) { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001\u6CDB\u578B\u7684\u7C7B\u578B\u64E6\u9664" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u6CDB\u578B\u7684\u7C7B\u578B\u64E6\u9664" aria-hidden="true">#</a> <strong>\u56DB\u3001\u6CDB\u578B\u7684\u7C7B\u578B\u64E6\u9664</strong></h2><p>\u521A\u521A\u6211\u4EEC\u8BB2\u4E86\u6CDB\u578B\u7684\u7528\u6CD5\uFF0C\u73B0\u5728\uFF0C\u6211\u4EEC\u6765\u770B\u4E0B\u6CDB\u578B\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u6CDB\u578B\u53EA\u4E0D\u8FC7\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\u3002\u5728\u7F16\u8BD1\u65F6\uFF0C\u7F16\u8BD1\u5668\u4F1A\u4F7F\u7528\u6CDB\u578B\u505A\u7C7B\u578B\u68C0\u67E5\uFF0C\u4F46\u662F\uFF0C\u5F53\u4EE3\u7801\u7F16\u8BD1\u4E3A\u5B57\u8282\u7801\u4E4B\u540E\uFF0C\u6CDB\u578B\u4E2D\u7684\u7C7B\u578B\u53C2\u6570\u548C\u901A\u914D\u7B26\u7EDF\u7EDF\u66FF\u6362\u6210\u4E0A\u754C\uFF0C\u6BD4\u5982<code>&lt;T&gt;</code>\u66FF\u6362\u4E3AObject\uFF0C<code>&lt;T extends String&gt;</code>\u66FF\u6362\u4E3AString\uFF0C\u793A\u4F8B\u5982\u4E0B\u6240\u793A\u3002Java\u8FD9\u79CD\u72EC\u7279\u7684\u6CDB\u578B\u5B9E\u73B0\u65B9\u5F0F\u53EB\u505A\u7C7B\u578B\u64E6\u9664\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Box&lt;T&gt; {     
  private T var;      
  public Box(T var) { this.var = var; }      
  public T get() { return var; } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u5BF9\u5E94\u7684\u5B57\u8282\u7801\u5982\u4E0B\u6240\u793A\u3002\u5728\u5B57\u8282\u7801\u4E2D\uFF0C\u6210\u5458\u53D8\u91CF\u3001\u53C2\u6570\u3001\u8FD4\u56DE\u503C\u90FD\u662FObject\u7C7B\u578B\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Box&lt;T extends java.lang.Object&gt; extends java.lang.Object
{
  public Box(T);
    descriptor: (Ljava/lang/Object;)V
    flags: (0x0001) ACC_PUBLIC
    Code:
      stack=2, locals=2, args_size=2
         0: aload_0
         1: invokespecial #1 // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V
         4: aload_0
         5: aload_1
         6: putfield      #2 // Field var:Ljava/lang/Object;
         9: return
      LineNumberTable:
        line 3: 0
        line 4: 4
        line 5: 9
    Signature: #13     // (TT;)V

  public T get();
    descriptor: ()Ljava/lang/Object;
    flags: (0x0001) ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: getfield      #2 // Field var:Ljava/lang/Object;
         4: areturn
      LineNumberTable:
        line 6: 0
    Signature: #16    // ()TT;
}
Signature: #17  // &lt;T:Ljava/lang/Object;&gt;Ljava/lang/Object;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3AJava\u6CDB\u578B\u7684\u7C7B\u578B\u64E6\u9664\uFF0C\u6211\u4EEC\u4E0D\u80FD\u4F7F\u7528new T()\u6765\u521B\u5EFA\u7C7B\u578B\u53C2\u6570\u5BF9\u8C61\u3002\u5728\u4EE3\u7801\u7F16\u8BD1\u6210\u5B57\u8282\u4E4B\u540E\uFF0C\u7C7B\u578B\u4FE1\u606F\u5DF2\u7ECF\u64E6\u9664\uFF0C\u6240\u4EE5\uFF0C\u5728\u8FD0\u884C\u65F6\uFF0CJVM\u65E0\u6CD5\u786E\u5B9A\u5177\u4F53\u7C7B\u578B\uFF0C\u4E5F\u5C31\u65E0\u6CD5\u77E5\u9053T\u662F\u5426\u5B58\u5728\u65E0\u53C2\u6784\u9020\u51FD\u6570\uFF0C\u6240\u4EE5\uFF0C\u4E5F\u5C31\u65E0\u6CD5\u4F7F\u7528new\u6765\u521B\u5EFAT\u5BF9\u8C61\u4E86\u3002\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u5728\u672C\u8282\u7684\u7B2C\u4E00\u5C0F\u8282\u4E2D\u5B9E\u73B0\u7684Stack\u6CDB\u578B\u7C7B\u4E2D\u4F7F\u7528Object\u6765\u5B9A\u4E49arr\u6570\u7EC4\u7684\u539F\u56E0\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0CJava\u6CDB\u578B\u8FD9\u79CD\u72EC\u7279\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u4E5F\u5BFC\u81F4\u4E86\u53EA\u6709\u5F15\u7528\u7C7B\u578B\u624D\u53EF\u4EE5\u4F20\u5165\u7C7B\u578B\u53C2\u6570\uFF0C\u800C\u57FA\u672C\u7C7B\u578B\u5E76\u4E0D\u7EE7\u627F\u81EAObject\uFF0C\u65E0\u6CD5\u505A\u7C7B\u578B\u64E6\u9664\uFF0C\u56E0\u6B64\u65E0\u6CD5\u4F20\u5165\u7C7B\u578B\u53C2\u6570\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0CJava\u6CDB\u578B\u5E76\u4E0D\u652F\u6301\u57FA\u672C\u7C7B\u578B\u3002\u5982\u4E0B\u6240\u793A\u7684\u4EE3\u7801\u4F1A\u62A5\u9519\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>List&lt;int&gt; list = new ArrayList&lt;&gt;(); //\u7F16\u8BD1\u51FA\u9519
list.add(123);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0CJava\u4E5F\u53EF\u4EE5\u63D0\u4F9B\u8DDF\u8FDB\u4E00\u6B65\u7684\u8BED\u6CD5\u7CD6\uFF0C\u5F53\u7A0B\u5E8F\u5458\u5982\u4E0A\u4EE3\u7801\u6240\u793A\u58F0\u660E<code>List&lt;int&gt;</code>\u65F6\uFF0C\u7F16\u8BD1\u5668\u5C06int\u66FF\u6362\u4E3A\u5BF9\u5E94\u7684\u5305\u88C5\u7C7BInteger\uFF0C\u4E5F\u5C31\u662F\u5C06<code>List&lt;int&gt;</code>\u66FF\u6362\u4E3A<code>List&lt;Integer&gt;</code>\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u8868\u9762\u4E0A\u5B9E\u73B0\u652F\u6301\u57FA\u672C\u7C7B\u578B\u53C2\u6570\u4E86\uFF0C\u4F46\u5728List\u5BB9\u5668\u4E2D\u5B58\u50A8\u7684\u5E76\u975Eint\u7C7B\u578B\u6570\u636E\uFF0C\u6240\u4EE5\uFF0C\u4ECE\u672C\u8D28\u4E0A\u8BB2\uFF0C\u8FD9\u6837\u505A\u5E76\u6CA1\u6709\u771F\u6B63\u652F\u6301\u57FA\u672C\u7C7B\u578B\u3002\u800C\u5982\u679C\u8981\u4ECE\u672C\u8D28\u4E0A\u8BA9Java\u6CDB\u578B\u652F\u6301\u57FA\u672C\u7C7B\u578B\uFF0C\u9700\u8981\u4ECE\u5E95\u5C42\u4E0A\u6539\u53D8Java\u6CDB\u578B\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u90A3\u4E48\uFF0C\u7275\u626F\u5230\u7684\u9700\u8981\u6539\u52A8\u7684JDK\u4EE3\u7801\u5C31\u975E\u5E38\u591A\u4E86\uFF0C\u5BF9\u5E94\u7684\u5F00\u53D1\u91CF\u5C31\u975E\u5E38\u5927\u4E86\u3002</p><p>Java\u6CDB\u578B\u65E0\u6CD5\u5B9E\u73B0\u57FA\u672C\u7C7B\u578B\uFF0C\u4E5F\u5E26\u6765\u4E86\u4E00\u4E9B\u5F00\u53D1\u4E0A\u7684\u56F0\u96BE\uFF0C\u6BD4\u5982\u572812\u8282\u4E2D\u8BB2\u5230\u7684\u7528\u4E8E\u6392\u5E8F\u7684DualPivotQuickSort\u7C7B\uFF0C\u4E3A\u4E86\u652F\u6301\u4E0D\u540C\u7684\u57FA\u672C\u7C7B\u578B\uFF0C\u5206\u522B\u5B9A\u4E49\u4E86\u4E0D\u540C\u7684\u6392\u5E8F\u51FD\u6570\uFF0C\u800C\u6BCF\u4E2A\u51FD\u6570\u90FD\u8981\u91CD\u590D\u5B9E\u73B0\u4E00\u904D\u7C7B\u4F3C\u7684\u6392\u5E8F\u903B\u8F91\uFF0C\u4EE3\u7801\u5B9E\u73B0\u975E\u5E38\u4E0D\u7F8E\u89C2\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//DualPivotQuickSort\u7C7B\u4E2Dsort()\u51FD\u6570\u5B9A\u4E49
public static void sort(int[] a, int left, int right,
                        int[] work, int workBase, int workLen);
                 
public static void sort(long[] a, int left, int right,
                        long[] work, int workBase, int workLen);
                 
public static void sort(float[] a, int left, int right,
                        float[] work, int workBase, int workLen);
                 
public static void sort(double[] a, int left, int right,
                        double[] work, int workBase, int workLen);
                 
public static void sort(short[] a, int left, int right,
                        short[] work, int workBase, int workLen);
                 
public static void sort(char[] a, int left, int right,
                        char[] work, int workBase, int workLen);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679CJava\u6CDB\u578B\u652F\u6301\u57FA\u672C\u7C7B\u578B\uFF0C\u90A3\u4E48\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5982\u4E0B\u6240\u793A\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u6CDB\u578B\u65B9\u6CD5\u5373\u53EF\u3002\u6211\u89C9\u5F97\uFF0C\u5728\u540E\u7EED\u7248\u672C\u4E2D\uFF0CJava\u5F88\u6709\u53EF\u80FD\u4F1A\u4F18\u5316\u6CDB\u578B\uFF0C\u8BA9\u5176\u652F\u6301\u57FA\u672C\u7C7B\u578B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static &lt;T&gt; void sort(T[] a, int left, int right,
                            T[] work, int workBase, int workLen);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u719F\u6089C++\u8BED\u8A00\u7684\u540C\u5B66\u5E94\u8BE5\u77E5\u9053\uFF0CC++\u8BED\u8A00\u4E5F\u652F\u6301\u6CDB\u578B\uFF0C\u53EA\u4E0D\u8FC7\u5B83\u6709\u53E6\u4E00\u4E2A\u53EB\u6CD5\uFF0C\u53EB\u505A\u6A21\u677F\uFF08Templates\uFF09\u3002\u8DDFJava\u6CDB\u578B\u4E0D\u540C\u7684\u662F\uFF0CC++\u6CDB\u578B\u652F\u6301\u57FA\u672C\u7C7B\u578B\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49int\u7C7B\u578B\u7684vector\u5BB9\u5668\u3002\u90A3\u4E48\uFF0CC++\u6CDB\u578B\u4E3A\u4EC0\u4E48\u80FD\u652F\u6301\u57FA\u672C\u7C7B\u578B\u5462\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vector&lt;int&gt; nums;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E4B\u6240\u4EE5C++\u6CDB\u578B\u652F\u6301\u57FA\u672C\u7C7B\u578B\uFF0C\u662F\u56E0\u4E3A\u5176\u5E95\u5C42\u5B9E\u73B0\u65B9\u5F0F\u8DDFJava\u6CDB\u578B\u5B8C\u5168\u4E0D\u540C\u3002C++\u4E2D\u7684\u6CDB\u578B\u6709\u70B9\u7C7B\u4F3C\u5B8F\u5B9A\u4E49\uFF0C\u5F53\u67D0\u4E2Acpp\u6587\u4EF6\u7528\u5230\u6CDB\u578B\u7C7B\u65F6\uFF0C\u7F16\u8BD1\u5668\u4F1A\u8BB2\u6CDB\u578B\u7C7B\u4E2D\u7684\u7C7B\u578B\u53C2\u6570\uFF0C\u66FF\u6362\u4E3A\u5177\u4F53\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u5C06\u6CDB\u578B\u7C7B\u8F6C\u6362\u4E3A\u5177\u4F53\u7C7B\uFF0C\u7136\u540E\u5185\u8054\u5230\u8FD9\u4E2Acpp\u6587\u4EF6\u4E2D\u3002\u5982\u679C\u6709\u591A\u4E2Acpp\u6587\u4EF6\u4F7F\u7528\u540C\u4E00\u4E2A\u6CDB\u578B\u7C7B\uFF0C\u90A3\u4E48\u5C31\u8981\u751F\u6210\u591A\u4E2A\u5177\u4F53\u7C7B\u3002\u53EF\u60F3\u800C\u77E5\uFF0C\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u5E76\u4E0D\u9AD8\u6548\u3002\u5BF9\u4E8E\u4E00\u4E2A\u6CDB\u578B\u7C7B\uFF0CJVM\u4E2D\u53EA\u9700\u8981\u4FDD\u5B58\u4E00\u4E2A\u7C7B\u578B\u64E6\u9664\u4E4B\u540E\u7684\u7C7B\u5373\u53EF\uFF0C\u4F46\u662FC++\u9700\u8981\u751F\u6210\u591A\u4E2A\u4E0D\u540C\u7684\u5177\u4F53\u7C7B\u3002</p><h2 id="\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898" aria-hidden="true">#</a> <strong>\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898</strong></h2><p>\u628A\u63A5\u53E3\u6216\u7C7B\u4E2D\u7684\u6240\u6709\u65B9\u6CD5\u90FD\u8BBE\u7F6E\u4E3A\u6CDB\u578B\u65B9\u6CD5\uFF0C\u662F\u4E0D\u662F\u5C31\u7B49\u4EF7\u4E8E\u6CDB\u578B\u63A5\u53E3\u6216\u6CDB\u578B\u7C7B\u4E86\u5462\uFF1F</p>`,77);function l(d,t){return s}var v=e(n,[["render",l],["__file","23.generic.html.vue"]]);export{v as default};
