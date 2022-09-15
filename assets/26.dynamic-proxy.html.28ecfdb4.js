import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,f as r}from"./app.5dbb1993.js";const s={},l=r(`<h1 id="\u52A8\u6001\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u4EE3\u7406" aria-hidden="true">#</a> \u52A8\u6001\u4EE3\u7406</h1><blockquote><p><strong>\u4E3A\u4EC0\u4E48\u57FA\u4E8EJDK\u5B9E\u73B0\u7684\u52A8\u6001\u4EE3\u7406\u8981\u6C42\u539F\u59CB\u7C7B\u6709\u63A5\u53E3\uFF1F</strong></p></blockquote><p>\u524D\u9762\u6211\u4EEC\u8BB2\u5230\uFF0C\u53CD\u5C04\u3001\u6CE8\u89E3\u3001\u52A8\u6001\u4EE3\u7406\u662F\u5728\u6846\u67B6\u5F00\u53D1\u4E2D\u7ECF\u5E38\u7528\u5230\u76843\u4E2A\u9AD8\u7EA7Java\u8BED\u6CD5\u3002\u5728\u4E0A\u4E24\u8282\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u89E3\u4E86\u5176\u4E2D\u7684\u53CD\u5C04\u548C\u6CE8\u89E3\u3002\u672C\u8282\uFF0C\u6211\u4EEC\u8BB2\u89E3\u5269\u4E0B\u7684\u52A8\u6001\u4EE3\u7406\u3002\u6211\u4EEC\u719F\u6089\u7684Spring AOP\u3001Dubbo RPC\u7B49\u6846\u67B6\u90FD\u6709\u7528\u5230\u52A8\u6001\u4EE3\u7406\u3002\u5728\u5E73\u65F6\u7684\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u4E5F\u7ECF\u5E38\u5229\u7528\u52A8\u6001\u4EE3\u7406\uFF0C\u4E3A\u4EE3\u7801\u6DFB\u52A0\u989D\u5916\u7684\u529F\u80FD\uFF0C\u6BD4\u5982\u65E5\u5FD7\u3001\u4E8B\u52A1\u3001\u9274\u6743\u9650\u6D41\u3001\u6027\u80FD\u76D1\u63A7\u7B49\u3002\u5728\u9762\u8BD5\u4E2D\uFF0C\u6211\u4EEC\u4E5F\u7ECF\u5E38\u88AB\u95EE\u53CA\u52A8\u6001\u4EE3\u7406\u76F8\u5173\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u4E3A\u4EC0\u4E48\u57FA\u4E8EJDK\u5B9E\u73B0\u7684\u52A8\u6001\u4EE3\u7406\u5FC5\u987B\u8981\u6C42\u539F\u59CB\u7C7B\u6709\u63A5\u53E3\uFF1F\u5E26\u7740\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5F00\u59CB\u4ECA\u5929\u7684\u5B66\u4E60\u3002</p><h2 id="\u4E00\u3001\u4EC0\u4E48\u662F\u9759\u6001\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4EC0\u4E48\u662F\u9759\u6001\u4EE3\u7406" aria-hidden="true">#</a> <strong>\u4E00\u3001\u4EC0\u4E48\u662F\u9759\u6001\u4EE3\u7406</strong></h2><p>\u5728\u300A\u8BBE\u8BA1\u6A21\u5F0F\u4E4B\u7F8E\u300B\u4E2D\uFF0C\u6211\u4EEC\u6709\u8BB2\u5230\u4EE3\u7406\u6A21\u5F0F\u3002\u4EE3\u7406\u6A21\u5F0F\u80FD\u591F\u5728\u4E0D\u6539\u53D8\u539F\u59CB\u7C7B\u7684\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7\u5F15\u5165\u4EE3\u7406\u7C7B\u6765\u7ED9\u539F\u59CB\u7C7B\u9644\u52A0\u529F\u80FD\u3002\u4EE3\u7406\u6A21\u5F0F\u5206\u4E3A\u9759\u6001\u4EE3\u7406\u548C\u52A8\u6001\u4EE3\u7406\u3002\u6211\u4EEC\u5148\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\u6765\u770B\u9759\u6001\u4EE3\u7406\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002</p><p>\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF0C\u6211\u4EEC\u6709\u4E00\u4E2AUserController\u7C7B\uFF0C\u5176\u4E2D\u5305\u542Bregister()\u548Clogin()\u4E24\u4E2A\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface IUserController {
  UserVo login(String telephone, String password);
  UserVo register(String telephone, String password);
}

public class UserController implements IUserController {
  @Override
  public UserVo login(String telephone, String password) {
    //...\u7701\u7565\u903B\u8F91...
  }

  @Override
  public UserVo register(String telephone, String password) {
    //...\u7701\u7565\u903B\u8F91...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u7EDF\u8BA1login()\u548Cregister()\u8FD9\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u90A3\u4E48\uFF0C\u7B80\u5355\u7684\u505A\u6CD5\u662F\uFF1A\u76F4\u63A5\u4FEE\u6539\u8FD9\u4E24\u4E2A\u51FD\u6570\u7684\u4EE3\u7801\uFF0C\u5728\u51FD\u6570\u5185\u90E8\u6DFB\u52A0\u65F6\u95F4\u7EDF\u8BA1\u4EE3\u7801\uFF0C\u4F46\u662F\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u975E\u4E1A\u52A1\u4EE3\u7801\u8DDF\u4E1A\u52A1\u4EE3\u7801\u8026\u5408\u3002\u4E3A\u4E86\u4EE3\u7801\u7684\u7ED3\u6784\u66F4\u52A0\u4F18\u7F8E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE3\u7406\u6A21\u5F0F\uFF0C\u8BA9\u975E\u4E1A\u52A1\u4EE3\u7801\u4E0E\u4E1A\u52A1\u4EE3\u7801\u89E3\u8026\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u4EE3\u7406\u7C7BUserControllerProxy\u548C\u539F\u59CB\u7C7BUserController\u5B9E\u73B0\u76F8\u540C\u7684\u63A5\u53E3IUserController\u3002UserController\u7C7B\u53EA\u8D1F\u8D23\u4E1A\u52A1\u529F\u80FD\u3002UserControllerProxy\u7C7B\u8D1F\u8D23\u5728\u4E1A\u52A1\u4EE3\u7801\u6267\u884C\u524D\u540E\u9644\u52A0\u975E\u4E1A\u52A1\u4EE3\u7801\uFF0C\u5E76\u901A\u8FC7\u59D4\u6258\u7684\u65B9\u5F0F\uFF0C\u8C03\u7528\u539F\u59CB\u7C7B\u6765\u6267\u884C\u4E1A\u52A1\u4EE3\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class UserControllerProxy implements IUserController {
  private static final Logger logger = LoggerFactory.getLogger(UserControllerProxy.class);
  private UserController userController;

  public UserControllerProxy(UserController userController) {
    this.userController = userController;
  }

  @Override
  public UserVo login(String telephone, String password) {
    long startTime = System.currentTimeMillis();
    UserVo userVo = userController.login(telephone, password);
    long costTime = System.currentTimeMillis() - startTime;
    logger.info(&quot;UserController#login cost time:&quot; + costTime);
    return userVo;
  }

  @Override
  public UserVo register(String telephone, String password) {
    long startTime = System.currentTimeMillis();
    UserVo userVo = userController.register(telephone, password);
    long costTime = System.currentTimeMillis() - startTime;
    logger.info(&quot;UserController#register cost time:&quot; + costTime);
    return userVo;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u539F\u59CB\u7C7B\u548C\u4EE3\u7406\u7C7B\u5B9E\u73B0\u4E86\u76F8\u540C\u7684\u63A5\u53E3\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u5C06\u4EE3\u7801\u4E2D\u7684\u539F\u59CB\u7C7B\u5BF9\u8C61\uFF0C\u7EDF\u4E00\u66FF\u6362\u4E3A\u4EE3\u7406\u7C7B\u5BF9\u8C61\u3002\u5982\u4E0B\u4EE3\u7801\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u539F\u6765\u7684\u4EE3\u7801
IUserController userController = new UserController();

// \u66FF\u6362\u4E4B\u540E\u7684\u4EE3\u7801
IUserController userController = new UserControllerProxy(new UserController());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u8FC7\uFF0C\u5982\u679C\u539F\u59CB\u7C7B\u5E76\u6CA1\u6709\u5B9E\u73B0\u63A5\u53E3\uFF0C\u5E76\u4E14\u539F\u59CB\u7C7B\u4EE3\u7801\u5E76\u4E0D\u662F\u6211\u4EEC\u5F00\u53D1\u7EF4\u62A4\u7684\uFF08\u6BD4\u5982\u5B83\u6765\u81EA\u4E00\u4E2A\u7B2C\u4E09\u65B9\u7684\u7C7B\u5E93\uFF09\uFF0C\u6211\u4EEC\u4E5F\u6CA1\u529E\u6CD5\u76F4\u63A5\u4FEE\u6539\u539F\u59CB\u7C7B\uFF0C\u7ED9\u5B83\u91CD\u65B0\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u8BE5\u5982\u4F55\u5B9E\u73B0\u4EE3\u7406\u6A21\u5F0F\u5462\uFF1F\u5BF9\u8FD9\u79CD\u5916\u90E8\u7C7B\u7684\u6269\u5C55\uFF0C\u6211\u4EEC\u4E00\u822C\u90FD\u662F\u91C7\u7528\u7EE7\u627F\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u3002\u8FD9\u91CC\u4E5F\u4E0D\u4F8B\u5916\u3002\u6211\u4EEC\u8BA9\u4EE3\u7406\u7C7B\u7EE7\u627F\u539F\u59CB\u7C7B\uFF0C\u7136\u540E\u6269\u5C55\u9644\u52A0\u529F\u80FD\u3002\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class UserControllerProxy extends UserController {
  private static final Logger logger = LoggerFactory.getLogger(UserControllerProxy.class);

  @Override
  public UserVo login(String telephone, String password) {
    long startTime = System.currentTimeMillis();
    UserVo userVo = super.login(telephone, password);
    long costTime = System.currentTimeMillis() - startTime;
    logger.info(&quot;UserController#login cost time:&quot; + costTime);
    return userVo;
  }

  @Override
  public UserVo register(String telephone, String password) {
    long startTime = System.currentTimeMillis();
    UserVo userVo = super.register(telephone, password);
    long costTime = System.currentTimeMillis() - startTime;
    logger.info(&quot;UserController#register cost time:&quot; + costTime);
    return userVo;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u57FA\u4E8E\u7EE7\u627F\u5B9E\u73B0\u7684\u4EE3\u7406\u7C7B\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8F7B\u677E\u5730\u8BB2\u4EE3\u7801\u4E2D\u7684\u539F\u59CB\u7C7B\u5BF9\u8C61\uFF0C\u66FF\u6362\u4E3A\u4EE3\u7406\u7C7B\u5BF9\u8C61\uFF0C \u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u539F\u6765\u7684\u4EE3\u7801
UserController userController = new UserController();

// \u66FF\u6362\u4E4B\u540E\u7684\u4EE3\u7801
UserController userController = new UserControllerProxy();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u65B9\u5F0F\u5B9E\u73B0\u7684\u4EE3\u7406\u53EB\u505A\u9759\u6001\u4EE3\u7406\u3002\u867D\u7136\u9759\u6001\u4EE3\u7406\u5B9E\u73B0\u975E\u5E38\u7B80\u5355\uFF0C\u4F46\u5B83\u4F1A\u5BFC\u81F4\u9879\u76EE\u4E2D\u7684\u7C7B\u6210\u500D\u589E\u52A0\u3002\u6BD4\u5982\uFF0C\u5F53\u9879\u76EE\u4E2D\u6240\u6709\u7684Controller\u7C7B\u90FD\u9700\u8981\u6DFB\u52A0\u65F6\u95F4\u7EDF\u8BA1\u529F\u80FD\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u4E3A\u4E86\u6240\u6709\u7684Controller\u7C7B\u90FD\u521B\u5EFA\u5BF9\u5E94\u7684\u4EE3\u7406\u7C7B\u3002\u663E\u7136\uFF0C\u8FD9\u6837\u505A\u8D39\u65F6\u8D39\u529B\uFF0C\u5E76\u4E14\u4E0D\u591F\u4F18\u96C5\u3002\u4E8E\u662F\uFF0C\u52A8\u6001\u4EE3\u7406\u4FBF\u88AB\u53D1\u660E\uFF0C\u7528\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><h2 id="\u4E8C\u3001\u4EC0\u4E48\u662F\u52A8\u6001\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4EC0\u4E48\u662F\u52A8\u6001\u4EE3\u7406" aria-hidden="true">#</a> <strong>\u4E8C\u3001\u4EC0\u4E48\u662F\u52A8\u6001\u4EE3\u7406</strong></h2><p>\u9759\u6001\u548C\u52A8\u6001\u4E24\u4E2A\u6982\u5FF5\u5728\u524D\u9762\u7AE0\u8282\u4E2D\u4E5F\u53CD\u590D\u63D0\u5230\uFF0C\u4E00\u822C\u6765\u8BB2\uFF0C\u9759\u6001\u6307\u7684\u662F\u67D0\u4E2A\u4E8B\u4EF6\u53D1\u751F\u5728\u7F16\u8BD1\u65F6\uFF0C\u52A8\u6001\u6307\u7684\u662F\u67D0\u4E2A\u4E8B\u4EF6\u53D1\u751F\u5728\u8FD0\u884C\u3002\u5C06\u8FD9\u4E2A\u89C4\u5219\u5E94\u7528\u5230\u4EE3\u7406\u6A21\u5F0F\uFF0C\u90A3\u4E48\uFF0C\u9759\u6001\u4EE3\u7406\u6307\u7684\u5C31\u662F\u5728\u7F16\u8BD1\u65F6\u751F\u6210\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\uFF08\u4EE3\u7406\u7C7B\u7684Class\u6587\u4EF6\uFF09\uFF0C\u52A8\u6001\u4EE3\u7406\u6307\u7684\u5C31\u662F\u5728\u8FD0\u884C\u65F6\u751F\u6210\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\u3002\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\u4EC5\u4EC5\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D\uFF0C\u5E76\u4E0D\u4F1A\u751F\u6210\u5BF9\u5E94\u7684class\u6587\u4EF6\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u9759\u6001\u4EE3\u7406\u9700\u8981\u7F16\u5199\u5927\u91CF\u4EE3\u7406\u7C7B\u7684\u95EE\u9898\u3002</p><p>\u4E4B\u6240\u4EE5\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406\uFF0C\u662F\u56E0\u4E3AJVM\u8BBE\u8BA1\u5F97\u975E\u5E38\u7075\u6D3B\uFF0C\u53EA\u8981\u662F\u7B26\u5408\u7C7B\u7684\u683C\u5F0F\u7684\u5B57\u8282\u7801\uFF0C\u90FD\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u88ABJVM\u89E3\u6790\u5E76\u52A0\u8F7D\uFF0C\u4E0D\u7BA1\u8FD9\u4E2A\u5B57\u8282\u7801\u662F\u6765\u81EA\u9884\u5148\u7F16\u8BD1\u597D\u7684\uFF08class\u6587\u4EF6\uFF09\uFF0C\u8FD8\u662F\u5728\u5185\u5B58\u4E2D\u4E34\u65F6\u751F\u6210\u7684\uFF08\u5178\u578B\u5E94\u7528\uFF1A\u52A8\u6001\u4EE3\u7406\uFF09\uFF0C\u53C8\u6216\u8005\u4ECE\u7F51\u7EDC\u52A0\u8F7D\u800C\u6765\u7684\uFF08\u5178\u578B\u5E94\u7528\uFF1AApplet\uFF09\u3002\u8FD9\u90E8\u5206\u5185\u5BB9\u6D89\u53CA\u5230JVM\u7684\u7C7B\u52A0\u8F7D\u673A\u5236\uFF0C\u6211\u4EEC\u5728\u540E\u9762\u7684\u7AE0\u8282\u4E2D\u518D\u8BE6\u7EC6\u8BB2\u89E3\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u4E00\u53E5\u8BDD\u6982\u62EC\u4E00\u4E0B\uFF0C\u52A8\u6001\u4EE3\u7406\u5C31\u662F\u52A8\u6001\u5730\u751F\u6210\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\u3002\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u7684\u65B9\u5F0F\u6709\u4E24\u7C7B\uFF0C\u4E00\u7C7B\u662F\u4F7F\u7528JDK\u63D0\u4F9B\u7684\u7C7B\u6765\u5B9E\u73B0\uFF0C\u4E00\u7C7B\u662F\u4F7F\u7528\u7B2C\u4E09\u65B9\u7684\u5B57\u8282\u7801\u7C7B\u5E93\u6765\u5B9E\u73B0\uFF0C\u6BD4\u5982CGLIB\u3001BECL\u3001ASM\u3001Javassit\u7B49\u3002\u5B57\u8282\u7801\u7C7B\u5E93\u529F\u80FD\u975E\u5E38\u5F3A\u5927\uFF0C\u53EF\u4EE5\u52A8\u6001\u4FEE\u6539\u5B57\u8282\u7801\u3001\u751F\u6210\u5B57\u8282\u7801\uFF0C\u6240\u4EE5\uFF0C\u751F\u6210\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\u4E5F\u4E0D\u5728\u8BDD\u4E0B\u3002\u4E0D\u8FC7\uFF0C\u5B57\u8282\u7801\u6BD4\u8F83\u5E95\u5C42\uFF0C\u76F4\u63A5\u7F16\u8F91\u5B57\u8282\u7801\uFF0C\u5BF9\u4E8E\u7A0B\u5E8F\u5458\u662F\u4E00\u4E2A\u5F88\u5927\u6311\u6218\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u4E00\u822C\u91C7\u7528JDK\u63D0\u4F9B\u7684\u7C7B\u6216\u8005CGLIB\u8FD9\u79CD\u4F7F\u7528\u8D77\u6765\u6BD4\u8F83\u53CB\u597D\u7684\u5B57\u8282\u7801\u7C7B\u5E93\u6765\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u4ECB\u7ECD\u4E00\u4E0B\u8FD9\u4E24\u79CD\u5E38\u7528\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\u3002</p><h2 id="\u4E09\u3001\u57FA\u4E8Ejdk\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u57FA\u4E8Ejdk\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406" aria-hidden="true">#</a> <strong>\u4E09\u3001\u57FA\u4E8EJDK\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406</strong></h2><p>\u6211\u4EEC\u4ECE\u57FA\u672C\u7528\u6CD5\u3001\u5B9E\u73B0\u539F\u7406\u3001\u6027\u80FD\u5206\u6790\u4E09\u4E2A\u65B9\u9762\uFF0C\u6765\u5206\u6790\u4E00\u4E0B\u57FA\u4E8EJDK\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\u3002</p><p><strong>1\uFF09\u57FA\u672C\u7528\u6CD5</strong></p><p>\u6211\u4EEC\u6765\u770B\u4E0B\u5982\u4F55\u4F7F\u7528JDK\u63D0\u4F9B\u7684\u7C7B\uFF0C\u4E3AUserController\u7C7B\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u5F53\u6211\u4EEC\u4E3A\u5176\u4ED6Controller\u7C7B\u4E2D\u7684\u65B9\u6CD5\u4E5F\u6DFB\u52A0\u65F6\u95F4\u7EDF\u8BA1\u4EE3\u7801\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u590D\u7528CtrlProxyHandler\u7C7B\uFF0C\u5E76\u901A\u8FC7Proxy\u7C7B\u7684newProxyInstance()\u9759\u6001\u65B9\u6CD5\u751F\u6210\u5BF9\u5E94\u7684\u4EE3\u7406\u7C7B\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class CtrlProxyHandler implements InvocationHandler {
  private Object origBean;

  public CtrlProxyHandler(Object origBean) {
    this.origBean = origBean;
  }

  @Override
  public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    long startTime = System.currentTimeMillis();
    Object res = method.invoke(origBean, args);
    long costTime = System.currentTimeMillis() - startTime;
    System.out.println(origBean.getClass().getSimpleName() + &quot;#&quot;
        + method.getName() + &quot; cost time: &quot; + costTime);
    return res;
  }
}

public class JDKProxyDemo {
  public static void main(String[] args) {
    IUserController userController = new UserController();
    CtrlProxyHandler handler = new CtrlProxyHandler(userController);
    IUserController userControllerProxy = (IUserController) Proxy.newProxyInstance(
        handler.getClass().getClassLoader(), UserController.class.getInterfaces(), handler);
    userControllerProxy.login(&quot;139********&quot;, &quot;******&quot;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u57FA\u4E8EJDK\u6765\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406\u4E3B\u8981\u7528\u5230\u4E86java.lang.reflect.InvocationHandler\u63A5\u53E3\u548Cjava.lang.reflect.Proxy\u7C7B\u3002\u5176\u4E2D\uFF0CInvocationHandler\u63A5\u53E3\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u5305\u542B\u4E00\u4E2Ainvoke()\u51FD\u6570\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/20859900_1655395748.png" alt="img"></p><p>\u7B80\u5355\u4E86\u89E3InvocationHandler\u63A5\u53E3\u4E4B\u540E\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u4E0BProxy\u7C7B\u3002Proxy\u7C7B\u8981\u6BD4InvocationHandler\u590D\u6742\u5F88\u591A\u3002\u4F7F\u7528Proxy\u7C7B\u751F\u6210\u4EE3\u7406\u7C7B\u548C\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u65B9\u6CD5\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Foo\u4E3A\u63A5\u53E3
InvocationHandler handler = new MyInvocationHandler(...); // InvocationHandler
Class&lt;?&gt; proxyClass = Proxy.getProxyClass(Foo.class.getClassLoader(), Foo.class); //\u751F\u6210\u4EE3\u7406\u7C7B
Foo f = (Foo) proxyClass.getConstructor(InvocationHandler.class).newInstance(handler); //\u5B9E\u4F8B\u5316\u5BF9\u8C61
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7528\u5230\u4EE3\u7406\u7C7B\u7684\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u6240\u4EE5\uFF0C\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u7684\u540E\u4E24\u884C\u4EE3\u7801\u53EF\u4EE5\u7B80\u5316\u4E3A\u5982\u4E0B\u4E00\u884C\u4EE3\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Foo f = (Foo) Proxy.newProxyInstance(Foo.class.getClassLoader(), new Class&lt;?&gt;[] { Foo.class }, handler);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2\uFF09\u5B9E\u73B0\u539F\u7406</strong></p><p>\u63A5\u4E0B\u6765\uFF0C\u901A\u8FC7\u5206\u6790newProxyInstance()\u51FD\u6570\u7684\u6E90\u7801\uFF0C\u6211\u4EEC\u6765\u770B\u4E0B\u57FA\u4E8EJDK\u7684\u52A8\u6001\u4EE3\u7406\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\u3002newProxyInstance()\u51FD\u6570\u5B9A\u4E49\u5982\u4E0B\u6240\u793A\u3002newProxyInstance()\u51FD\u6570\u4E2D\u5305\u542B3\u90E8\u5206\u903B\u8F91\uFF1A\u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B\u3001\u52A0\u8F7D\u52A8\u6001\u4EE3\u7406\u7C7B\u5230JVM\u3001\u5B9E\u4F8B\u5316\u52A8\u6001\u4EE3\u7406\u7C7B\u5BF9\u8C61\u3002\u5176\u4E2D\uFF0C\u53C2\u6570loader\u8868\u793A\u7C7B\u52A0\u8F7D\u5668\uFF0C\u7528\u6765\u52A0\u8F7D\u751F\u6210\u7684\u52A8\u6001\u4EE3\u7406\u7C7B\u3002\u53C2\u6570interfaces\u8868\u793A\u63A5\u53E3\u3002JDK\u4F9D\u636E\u63A5\u53E3\u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B\uFF0C\u63A5\u53E3\u4E2D\u5305\u542B\u54EA\u4E9B\u65B9\u6CD5\uFF0C\u52A8\u6001\u4EE3\u7406\u7C7B\u4E2D\u5C31\u5305\u542B\u54EA\u4E9B\u65B9\u6CD5\u3002\u53C2\u6570h\u7528\u4E8E\u5B9E\u4F8B\u5316\u52A8\u6001\u4EE3\u7406\u7C7B\u5BF9\u8C61\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/84950700_1655395748.png" alt="img"></p><p>\u6211\u4EEC\u5148\u6765\u770B\u4E0B\u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B\u7684\u8FC7\u7A0B\u3002\u5982\u4E0B\u4EE3\u7801\u6240\u793A\uFF0CnewProxyInstance()\u51FD\u6570\u8C03\u7528ProxyGenerator\u7C7B\uFF08JDK\u63D0\u4F9B\u7684\u751F\u6210\u5B57\u8282\u7801\u7684\u7C7B\uFF09\uFF0C\u6309\u7167\u7C7B\u7684\u5B57\u8282\u7801\u683C\u5F0F\uFF0C\u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\uFF0C\u5E76\u5B58\u50A8\u5230\u5185\u5B58\uFF08proxyClassFile\uFF09\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B\u7684\u540D\u79F0
final String proxyClassNamePrefix = &quot;$Proxy&quot;;
long num = nextUniqueNumber.getAndIncrement();
String proxyName = proxyPkg + proxyClassNamePrefix + num;
// ProxyGenerator\u7C7B\u4F3C\u5B57\u8282\u7801\u7C7B\u5E93\uFF0C\u53EF\u4EE5\u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801
byte[] proxyClassFile = ProxyGenerator.generateProxyClass(proxyName, interfaces, accessFlags);
try {
    // \u901A\u8FC7JVM\u7684\u7C7B\u52A0\u8F7D\u5668\u6765\u52A0\u8F7D\u52A8\u6001\u4EE3\u7406\u7C7B
    return defineClass0(loader, proxyName, proxyClassFile, 0, proxyClassFile.length);
} catch (ClassFormatError e) { // \u5982\u679C\u751F\u6210\u7684\u52A8\u6001\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\u683C\u5F0F\u6709\u8BEF\uFF0C\u5219\u62A5\u9519
    throw new IllegalArgumentException(e.toString());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u8FF0\u52A8\u6001\u4EE3\u7406\u7C7B\u7684\u751F\u6210\u8FC7\u7A0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u52A8\u6001\u4EE3\u7406\u7C7B\u5177\u6709\u54EA\u4E9B\u65B9\u6CD5\uFF0C\u53EA\u8DDF\u63A5\u53E3\u6709\u5173\uFF0C\u8DDF\u539F\u59CB\u7C7B\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u3002\u8FD9\u4E5F\u662F\u57FA\u4E8EJDK\u5B9E\u73B0\u7684\u52A8\u6001\u4EE3\u7406\uFF0C\u8981\u6C42\u539F\u59CB\u7C7B\u5FC5\u987B\u6709\u63A5\u53E3\u5B9A\u4E49\u624D\u884C\u7684\u539F\u56E0\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u52A0\u8F7D\u5230JVM\u4E2D\u7684\u7C7B\u90FD\u8981\u6709\u7C7B\u540D\uFF0C\u8FD9\u6837\u624D\u80FD\u5728\u5B9E\u4F8B\u5316\u5BF9\u8C61\u65F6\u6309\u7167\u7C7B\u540D\u67E5\u627E\u5230\u5BF9\u5E94\u7684\u7C7B\u7684\u5B9A\u4E49\u3002\u9759\u6001\u4EE3\u7406\u7C7B\u7684\u7C7B\u540D\u662F\u7A0B\u5E8F\u5458\u6307\u5B9A\u7684\uFF0C\u52A8\u6001\u4EE3\u7406\u7C7B\u7684\u7C7B\u540D\u662F\u81EA\u52A8\u751F\u6210\u7684\u3002\u5982\u4E0A\u4EE3\u7801\u6240\u793A\uFF0C\u52A8\u6001\u4EE3\u7406\u7C7B\u7684\u7C7B\u540D\u75312\u90E8\u5206\u6784\u6210\uFF1A$Proxy+\u81EA\u589E\u7F16\u53F7\u3002\u6BD4\u5982\uFF0C\u5982\u679C\u9879\u76EE\u4E2D\u4F7F\u7528Proxy\u7C7B\u751F\u6210\u4E86\u4E24\u4E2A\u52A8\u6001\u4EE3\u7406\u7C7B\uFF0C\u90A3\u4E48\uFF0C\u5B83\u4EEC\u7684\u540D\u79F0\u5C31\u5206\u522B\u4E3A\uFF1A$Proxy0\u3001$Proxy1\u3002</p><p>\u4EE5\u4E0A\u8BB2\u89E3\u7684\u52A8\u6001\u4EE3\u7406\u7C7B\u751F\u6210\u7684\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/67791600_1655395749.png" alt="img"></p><p>\u4E0A\u56FE\u53EA\u5C55\u793A\u52A8\u6001\u4EE3\u7406\u7C7B\u5927\u6982\u7684\u6837\u5B50\uFF0C\u90A3\u4E48\uFF0C\u52A8\u6001\u4EE3\u7406\u7C7B\u5177\u4F53\u957F\u4EC0\u4E48\u6837\u5B50\u5462\uFF1F\u6BCF\u4E2A\u51FD\u6570\u90FD\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u5C06\u901A\u8FC7ProxyGenerator\u7C7B\u751F\u6210\u7684\u52A8\u6001\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\uFF0C\u4FDD\u5B58\u5728\u6587\u4EF6\u4E2D\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u53CD\u7F16\u8BD1\u5DE5\u5177\uFF0C\u5F97\u5230\u5BF9\u5E94\u7684Java\u6587\u4EF6\u3002\u8FD9\u6837\u5C31\u80FD\u77E5\u9053\u52A8\u6001\u4EE3\u7406\u7C7B\u5177\u4F53\u957F\u4EC0\u4E48\u6837\u5B50\u4E86\u3002\u52A8\u6001\u4EE3\u7406\u7C7B\u5B57\u8282\u7801\u7684\u4FDD\u5B58\u65B9\u6CD5\u5982\u4E0B\u4EE3\u7801\u6240\u793A\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ProxyUtils {
  public static void main(String[] args) {
    byte[] byteCodes = ProxyGenerator.generateProxyClass(
        &quot;CtrlProxy&quot;, new Class[] { IUserController.class });
    try (FileOutputStream out = new FileOutputStream(&quot;/Users/wangzheng/CtrlProxy.class&quot;)) {
      out.write(byteCodes);
    } catch (FileNotFoundException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6211\u4EEC\u5F97\u5230CtrlProxy.class\u5B57\u8282\u7801\u6587\u4EF6\uFF0C\u7136\u540E\u518D\u5229\u7528\u53CD\u7F16\u8BD1\u5DE5\u5177\uFF0C\u53CD\u7F16\u8BD1CtrlProxy.class\u5B57\u8282\u7801\u6587\u4EF6\uFF0C\u4E8E\u662F\uFF0C\u5C31\u5F97\u5230\u5BF9\u5E94\u7684Java\u6587\u4EF6\uFF0C\u5982\u4E0B\u6240\u793A\u3002m3\u3001m4\u5BF9\u5E94IUserController\u63A5\u53E3\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662Flogin()\u548Cregister()\u3002m0\u3001m1\u3001m2\u4E3A\u7EE7\u627F\u81EA\u9876\u7EA7\u7236\u7C7BObject\u7C7B\u7684\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662FtoString()\u3001equals()\u3001hashCode()\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final class CtrlProxy extends Proxy implements IUserController {
  private static Method m1;
  private static Method m4;
  private static Method m2;
  private static Method m3;
  private static Method m0;

  public CtrlProxy(InvocationHandler var1) throws  {
    super(var1);
  }

  public final boolean equals(Object var1) throws  {
    try {
      return (Boolean)super.h.invoke(this, m1, new Object[]{var1});
    } catch (RuntimeException | Error var3) {
      throw var3;
    } catch (Throwable var4) {
      throw new UndeclaredThrowableException(var4);
    }
  }

  public final UserVo register(String var1, String var2) throws  {
    try {
      return (UserVo)super.h.invoke(this, m4, new Object[]{var1, var2});
    } catch (RuntimeException | Error var4) {
      throw var4;
    } catch (Throwable var5) {
      throw new UndeclaredThrowableException(var5);
    }
  }

  public final String toString() throws  {
    try {
      return (String)super.h.invoke(this, m2, (Object[])null);
    } catch (RuntimeException | Error var2) {
      throw var2;
    } catch (Throwable var3) {
      throw new UndeclaredThrowableException(var3);
    }
  }

  public final UserVo login(String var1, String var2) throws  {
    try {
      return (UserVo)super.h.invoke(this, m3, new Object[]{var1, var2});
    } catch (RuntimeException | Error var4) {
      throw var4;
    } catch (Throwable var5) {
      throw new UndeclaredThrowableException(var5);
    }
  }

  public final int hashCode() throws  {
    try {
      return (Integer)super.h.invoke(this, m0, (Object[])null);
    } catch (RuntimeException | Error var2) {
      throw var2;
    } catch (Throwable var3) {
      throw new UndeclaredThrowableException(var3);
    }
  }

  static {
    try {
      m1 = Class.forName(&quot;java.lang.Object&quot;).getMethod(&quot;equals&quot;, Class.forName(&quot;java.lang.Object&quot;));
      m4 = Class.forName(&quot;demo.proxy.IUserController&quot;).getMethod(&quot;register&quot;, 
                        Class.forName(&quot;java.lang.String&quot;), Class.forName(&quot;java.lang.String&quot;));
      m2 = Class.forName(&quot;java.lang.Object&quot;).getMethod(&quot;toString&quot;);
      m3 = Class.forName(&quot;demo.proxy.IUserController&quot;).getMethod(&quot;login&quot;, 
                        Class.forName(&quot;java.lang.String&quot;), Class.forName(&quot;java.lang.String&quot;));
      m0 = Class.forName(&quot;java.lang.Object&quot;).getMethod(&quot;hashCode&quot;);
    } catch (NoSuchMethodException var2) {
      throw new NoSuchMethodError(var2.getMessage());
    } catch (ClassNotFoundException var3) {
      throw new NoClassDefFoundError(var3.getMessage());
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u7C7B\u578B\u4E3AInvocationHandler\u7684super.h\u7684\u503C\uFF0C\u5728\u5B9E\u4F8B\u5316\u52A8\u6001\u4EE3\u7406\u7C7B\u5BF9\u8C61\u65F6\uFF0C\u8D4B\u503C\u4E3A\u81EA\u5B9A\u4E49\u7684InvocationHandler\u5B9E\u73B0\u7C7B\u5BF9\u8C61\uFF08\u6BD4\u5982CtrlProxyHandler\u7C7B\u5BF9\u8C61\uFF09\u3002\u5982\u4E0B\u7B80\u5316\u4E4B\u540E\u7684newProxyInstance()\u51FD\u6570\u4EE3\u7801\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static Object newProxyInstance(ClassLoader loader, Class&lt;?&gt;[] interfaces, InvocationHandler h) {
    // 1) \u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B
    // 2) \u52A0\u8F7D\u52A8\u6001\u4EE3\u7406\u7C7B
    Class&lt;?&gt; cl = getProxyClass0(loader, intfs);
    
    // 3\uFF09\u5B9E\u4F8B\u5316\u52A8\u6001\u4EE3\u7406\u7C7B\u5BF9\u8C61
    final Class&lt;?&gt;[] constructorParams = { InvocationHandler.class };
    final Constructor&lt;?&gt; cons = cl.getConstructor(constructorParams);
    return cons.newInstance(new Object[]{h});
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u8C03\u7528\u52A8\u6001\u4EE3\u7406\u7C7B\u4E0A\u65B9\u6CD5\u65F6\uFF0C\u6BD4\u5982\u8C03\u7528login()\u65B9\u6CD5\uFF0Clogin()\u65B9\u6CD5\u4F1A\u8C03\u7528CtrlProxyHandler\u4E0A\u7684invoke()\u65B9\u6CD5\u3002invoke()\u65B9\u6CD5\u6267\u884C\u4E00\u4E9B\u9644\u52A0\u903B\u8F91\uFF0C\u7136\u540E\u518D\u62FF\u4F20\u9012\u8FC7\u6765\u7684\u65B9\u6CD5\u548C\u53C2\u6570\uFF0C\u5229\u7528\u53CD\u5C04\u5728\u539F\u59CB\u7C7B\u5BF9\u8C61\u4E0A\u6267\u884C\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/43499800_1655395750.png" alt="img"></p><p><strong>3\uFF09\u6027\u80FD\u5206\u6790</strong></p><p>\u4ECE\u4E0A\u8FF0\u5BF9\u57FA\u4E8EJDK\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406\u7684\u539F\u7406\u5206\u6790\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u57FA\u4E8EJDK\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406\uFF0C\u8017\u65F6\u7684\u5730\u65B9\u4E3B\u8981\u6709\u4E24\u5904\uFF1A\u4E00\u662F\u8FD0\u884C\u65F6\u52A8\u6001\u751F\u6210\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\uFF0C\u4E8C\u662F\u5229\u7528\u53CD\u5C04\u6267\u884C\u65B9\u6CD5\u3002</p><p>\u5BF9\u4E8E\u53CD\u5C04\u6267\u884C\u65B9\u6CD5\u7684\u6027\u80FD\uFF0C\u6211\u4EEC\u5728\u7B2C24\u8282\u8BB2\u89E3\u53CD\u5C04\u65F6\u5DF2\u7ECF\u5206\u6790\u8FC7\u4E86\u3002\u53CD\u5C04\u4F1A\u989D\u5916\u589E\u52A0\u4E00\u90E8\u5206\u8017\u65F6\uFF0C\u4F46\u5982\u679C\u65B9\u6CD5\u4E2D\u7684\u903B\u8F91\u6BD4\u8F83\u590D\u6742\uFF0C\u6267\u884C\u65F6\u95F4\u6BD4\u8F83\u957F\uFF0C\u90A3\u4E48\u76F8\u6BD4\u800C\u8A00\uFF0C\u53CD\u5C04\u989D\u5916\u589E\u52A0\u7684\u8017\u65F6\u53EF\u4EE5\u5FFD\u7565\u3002\u76F8\u53CD\uFF0C\u5982\u679C\u65B9\u6CD5\u4E2D\u7684\u903B\u8F91\u6BD4\u8F83\u7B80\u5355\uFF0C\u6267\u884C\u65F6\u95F4\u5F88\u77ED\uFF0C\u90A3\u4E48\u53CD\u5C04\u989D\u5916\u589E\u52A0\u7684\u8017\u65F6\u5C31\u4E0D\u80FD\u5FFD\u7565\u4E86\u3002\u5BF9\u4E8E\u52A8\u6001\u751F\u6210\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\uFF0C\u53EF\u60F3\u800C\u77E5\uFF0C\u8FD9\u90E8\u5206\u8017\u65F6\u786E\u5B9E\u4F1A\u6BD4\u8F83\u591A\u3002\u5BF9\u6BD4\u9759\u6001\u4EE3\u7406\uFF0C\u9759\u6001\u4EE3\u7406\u7C7B\u7684\u5B57\u8282\u7801\u662F\u5728\u7F16\u8BD1\u65F6\u751F\u6210\u7684\uFF0C\u4E0D\u5360\u7528\u8FD0\u884C\u65F6\u95F4\u3002</p><h2 id="\u56DB\u3001\u57FA\u4E8Ecglib\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u57FA\u4E8Ecglib\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406" aria-hidden="true">#</a> <strong>\u56DB\u3001\u57FA\u4E8ECGLIB\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406</strong></h2><p>\u57FA\u4E8ECGLIB\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406\uFF0C\u8DDF\u57FA\u4E8EJDK\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406\u76F8\u6BD4\uFF0C\u57FA\u672C\u7528\u6CD5\u548C\u5B9E\u73B0\u539F\u7406\u975E\u5E38\u7C7B\u4F3C\u3002\u524D\u9762\u5DF2\u7ECF\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u57FA\u4E8EJDK\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5BF9\u57FA\u4E8ECGLIB\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\u5C31\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u3002</p><p>\u4F7F\u7528CGLIB\u9700\u8981\u5148\u5728\u9879\u76EE\u4E2D\u5F15\u5165CGLIB\u5305\uFF0CMaven\u914D\u7F6E\u5982\u4E0B\u6240\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- https://mvnrepository.com/artifact/cglib/cglib --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;cglib&lt;/groupId&gt;
    &lt;artifactId&gt;cglib&lt;/artifactId&gt;
    &lt;version&gt;3.3.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u4E8ECGLIB\u5B9E\u73B0\u52A8\u6001\u4EE3\u7406\uFF0C\u4E5F\u8981\u7528\u5230\u4E00\u4E2A\u6838\u5FC3\u63A5\u53E3MethodInterceptor\u548C\u4E00\u4E2A\u6838\u5FC3\u7C7BEnhancer\uFF0C\u5B83\u4EEC\u7684\u7528\u6CD5\u8DDFJDK\u4E2D\u7684InvocationHandler\u63A5\u53E3\u548CProxy\u7C7B\u76F8\u4F3C\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002\u8FD9\u91CC\u6211\u5C31\u4E0D\u8BE6\u7EC6\u8BB2\u89E3\u7528\u6CD5\u4E86\uFF0C\u7559\u7ED9\u4F60\u81EA\u5DF1\u67E5\u9605\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ProxyFactory implements MethodInterceptor {
  private Object origBean;
  
  public ProxyFactory(Object origBean) {
    this.origBean = origBean;
  }

  @Override
  public Object intercept(Object obj, Method method, Object[] args, MethodProxy methodProxy)
      throws Throwable {
    long startTime = System.currentTimeMillis();
    Object res = method.invoke(origBean, args);
    long costTime = System.currentTimeMillis() - startTime;
    System.out.println(origBean.getClass().getSimpleName() + &quot;#&quot;
        + method.getName() + &quot; cost time: &quot; + costTime);
    return res;
  }
}

public class CGLIBProxyDemo {
  public static void main(String[] args) {
    Enhancer enhancer = new Enhancer();
    enhancer.setSuperclass(UserController.class);
    enhancer.setCallback(new ProxyFactory(new UserController()));
    UserController userControllerProxy = (UserController) enhancer.create();
    userControllerProxy.login(&quot;&quot;, &quot;&quot;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8BB2\u89E3\u9759\u6001\u4EE3\u7406\u65F6\uFF0C\u6211\u4EEC\u63D0\u5230\uFF0C\u9759\u6001\u4EE3\u7406\u4E5F\u6709\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F\u57FA\u4E8E\u63A5\u53E3\uFF0C\u4E00\u79CD\u57FA\u4E8E\u7EE7\u627F\u3002\u540C\u7406\uFF0C\u52A8\u6001\u4EE3\u7406\u4E5F\u6709\u57FA\u4E8E\u63A5\u53E3\u548C\u57FA\u4E8E\u7EE7\u627F\u8FD9\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002\u57FA\u4E8EJDK\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u4F7F\u7528\u63A5\u53E3\u6765\u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B\uFF0C\u8981\u6C42\u539F\u59CB\u7C7B\u5FC5\u987B\u5B9A\u4E49\u63A5\u53E3\uFF0C\u56E0\u6B64\uFF0C\u662F\u4E00\u79CD\u57FA\u4E8E\u63A5\u53E3\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\u3002\u57FA\u4E8ECGLIB\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5E76\u4E0D\u4F9D\u8D56\u63A5\u53E3\uFF0C\u901A\u8FC7\u7EE7\u627F\u539F\u59CB\u7C7B\u6765\u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B\uFF0C\u56E0\u6B64\uFF0C\u662F\u4E00\u79CD\u57FA\u4E8E\u7EE7\u627F\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\u3002</p><p>\u57FA\u4E8ECGLIB\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u8DDF\u57FA\u4E8EJDK\u7684\u52A8\u6001\u4EE3\u7406\u7684\u5B9E\u73B0\u65B9\u5F0F\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u5927\u81F4\u662F\u4E00\u6837\u7684\uFF0C\u6839\u636E\u63A5\u53E3\u6216\u539F\u59CB\u7C7B\uFF0C\u5728\u8FD0\u884C\u65F6\uFF0C\u52A8\u6001\u751F\u6210\u4EE3\u7406\u7C7B\u5B57\u8282\u7801\u3002\u5728\u6267\u884C\u4EE3\u7406\u7C7B\u5BF9\u8C61\u4E0A\u7684\u65B9\u6CD5\u65F6\uFF0C\u59D4\u6258\u7ED9\u5B9E\u73B0\u4E86InvocationHandler\u6216\u8005MethodInterceptor\u63A5\u53E3\u7684\u7C7B\u5BF9\u8C61\uFF0C\u4F7F\u7528\u53CD\u5C04\u6267\u884C\u65B9\u6CD5\uFF0C\u5E76\u9644\u52A0\u6267\u884C\u989D\u5916\u4EE3\u7801\u3002\u56E0\u6B64\uFF0C\u57FA\u4E8ECGLIB\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u8017\u65F6\u7684\u5730\u65B9\u4E5F\u662F\u751F\u6210\u52A8\u6001\u4EE3\u7406\u7C7B\u5B57\u8282\u7801\u548C\u5229\u7528\u53CD\u5C04\u6267\u884C\u65B9\u6CD5\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u4E3A\u4E86\u4F18\u5316\u6027\u80FD\uFF0CCGLIB\u53EF\u4EE5\u4E0D\u4F7F\u7528Java\u53CD\u5C04\u6765\u6267\u884C\u65B9\u6CD5\uFF0C\u5982\u4E0B\u4EE3\u7801\u6240\u793A\u3002MethodProxy\u7684invokeSuper()\u65B9\u6CD5\u5E95\u5C42\u4F9D\u8D56CGLIB\u81EA\u5DF1\u5B9E\u73B0\u7684\u53CD\u5C04\uFF08\u4E5F\u5C31\u662Fnet.sf.cglib.reflect.FastClass\uFF09\u6765\u6267\u884C\u65B9\u6CD5\u3002\u4E0D\u8FC7\uFF0C\u5373\u4FBF\u5982\u6B64\uFF0C\u4E24\u79CD\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u65B9\u5F0F\u7684\u6027\u80FD\u4ECD\u7136\u76F8\u5DEE\u65E0\u51E0\u3002\u751A\u81F3\u5728\u9AD8\u7248\u672C\u7684JDK\u4E2D\uFF0C\u57FA\u4E8EJDK\u5B9E\u73B0\u7684\u7684\u52A8\u6001\u4EE3\u7406\uFF0C\u6BD4\u57FA\u4E8ECGLIB\u5B9E\u73B0\u7684\u52A8\u6001\u4EE3\u7406\uFF0C\u6027\u80FD\u8FD8\u8981\u597D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ProxyFactory implements MethodInterceptor {
  private Object origBean;
  
  public ProxyFactory(Object origBean) {
    this.origBean = origBean;
  }

  @Override
  public Object intercept(Object obj, Method method, Object[] args, MethodProxy methodProxy)
      throws Throwable {
    long startTime = System.currentTimeMillis();
    //Object res = method.invoke(origBean, args); //Java\u53CD\u5C04
    Object res = methodProxy.invokeSuper(obj, args); //CGLIB\u53CD\u5C04
    long costTime = System.currentTimeMillis() - startTime;
    System.out.println(origBean.getClass().getSimpleName() + &quot;#&quot;
        + method.getName() + &quot; cost time: &quot; + costTime);
    return res;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898" aria-hidden="true">#</a> <strong>\u4E94\u3001\u8BFE\u540E\u601D\u8003\u9898</strong></h2><p>\u8BF7\u63CF\u8FF0\u4E00\u4E0BSpring AOP\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406</p><blockquote></blockquote>`,63),a=[l];function t(d,o){return n(),i("div",null,a)}const u=e(s,[["render",t],["__file","26.dynamic-proxy.html.vue"]]);export{u as default};
