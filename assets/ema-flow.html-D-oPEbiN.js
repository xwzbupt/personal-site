import{_ as s,c as a,a as l,o as e}from"./app-mRFOk-Ym.js";const i={};function t(p,n){return e(),a("div",null,[...n[0]||(n[0]=[l(`<h1 id="均线流" tabindex="-1"><a class="header-anchor" href="#均线流"><span>均线流</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该网站托管于某云服务器，图片存储在某云OSS图床上。某云服务器有<strong>年费成本</strong> ，某云OSS在访问图片时会产生些许<strong>流量成本</strong> 。这部分内容加密，一是为了防止和渊师父的知识产权泄露，二是为了缩小知悉范围，减少运营成本。<strong>如果内容有任何纰漏或有任何需要补充的地方，请师兄师姐们不吝赐教。</strong><br> 如果整理和总结的内容对大家有所帮助，请大家在右侧的【支持我】中打赏一毛二毛，抵扣运营成本。</p></div><h2 id="_1-引言" tabindex="-1"><a class="header-anchor" href="#_1-引言"><span>1.引言</span></a></h2><p>在交易的世界里，趋势往往是最可靠的朋友。如何在趋势中顺势而为、如何在关键位置果断入场、如何在已有利润的基础上安全加仓，一直是交易者不断探索的课题。均线作为最常见的趋势工具，不仅能帮助我们识别行情方向，更能衍生出一整套实战方法。本文将介绍一种源自均线系统的交易思路——均线流。</p><p>我们会依次探讨均线流的核心逻辑（如何在强势行情中实现浮盈加仓）、均线流的改进用法（如何提升信号质量）、以及均线流反转（如何在行情关键点寻找入场机会）。同时，文中结合实际案例进行分析，帮助你把抽象的技术转化为清晰可操作的思路。最后，还附上了TradingView版本的均线流指标代码，方便大家在实盘中直接应用。</p><h2 id="_2-均线流" tabindex="-1"><a class="header-anchor" href="#_2-均线流"><span>2.均线流</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>均线流的核心价值在于，它能够揭示每个周期的中期趋势。在趋势形成的过程中，均线流能有效过滤掉本周期的回调波段，却无法过滤真正的反转波段。换句话说，大周期的回调波段，其实往往就是小周期的反转波段。因此，均线流的使用前提是市场必须存在趋势，否则就失去了意义。</p><p>趋势的演化，往往通过“均线流反转”体现出来。均线流反转并不是趋势完成的充分条件，但却是趋势必然的起点。只有当均线流发散至少一次，才能确认中期趋势真正建立。通常情况下，短期趋势是服从中期趋势的，这是市场的常态；但在某些情况下，短期趋势会扭转中期趋势，这种异态就是均线流反转。此时，回调波段演化为反转波段，幅度超过前一推动波段的一倍以上。这种反转往往是主力行为，不论是套盘还是解放套牢盘，都会在这一过程中显现出来。</p><p>监控趋势的方法，可以通过均线流的发散与收敛来完成。均线流的发散对应推动波段，收敛则对应回调波段。当市场进入强趋势阶段时，不同周期的均线流会持续发散，几乎看不到明显的收敛迹象。</p><p>在操作上，均线流有两条最核心的法则。第一条是顺势而为：在没有触及大周期的阻力位之前，在均线流方向没有发生反转之前，只能坚持做一个方向。这里需要注意，均线流走平并不等于反转，例如30分钟的走平，必须结合1小时的走势来确认；同样，假突破也不能被当作反转。第二条法则是，均线流反转后的第一次回踩必须果断入场。这背后的逻辑在于趋势的必然性，如果回踩成功并受到均线流的支撑或压制，那么它就确立了趋势的起点。既然是趋势的起点，那么价格大概率不会只走一波，进场的胜率自然大幅提高。</p><p>在品种选择方面，日线级别的均线流形态可以帮助我们判断整体的强弱，而小周期均线流反转的先后顺序，则能够反映不同品种之间的相对强弱。这种对比往往能够提供更清晰的交易线索。</p><p>当大小周期的均线流方向出现矛盾时，想要在小周期上做反转单，就必须满足两个条件：一是大周期已经遇到阻力，或者出现了严重的超买或超卖；二是小周期的反转非常坚决，表现出极强的反转动能。只有在这样的条件下，小周期的反转才具备交易价值。</p><p>跨周期的共振是均线流中极为重要的一环。它往往出现在两种情况：要么大周期的调整时间不长，要么小周期即将出现快速下跌。其内在本质都是跳过4小时周期，因此4小时在趋势结构中的重要性反而被削弱。</p><p>均线流是趋势的具象化，而布林带的有效性则取决于趋势的强度。趋势越强，布林带越有效。布林带在结构中的作用，一方面是回调波段的第一道防线，另一方面也是推动波段的第一道阻力。均线流与布林带结合使用，可以更清晰地揭示趋势的力量和转折的信号。</p></div><p>如下图所示，黄金从3311一路涨到了3650附近，在30分钟K线图的均线流来看，每一次回踩均线流都是可以买入的位置，不断浮盈加仓，在这种行情下可以创造出巨大的利润。</p><blockquote><p>这里提一下这段行情的背景：自从黄金在年初一直涨到了4月底的高点3500后，就一直在3250-3450之间震荡，一直震荡了4个月到了8月底才打破了这个局面。</p><p>行情总是总收敛到发散，高点和低点并未明确抬高，也没有明确的降低，而是收缩在一个狭小区域，当你发现这种情况的时候，你要坚定，确信，给自己洗脑，机会要来了。市场是一个圈，震荡和趋势来回切换，是一个闭环。你理解了市场是闭环，就简单多了，启动不启动都是ETF 说了算。加仓10吨以上，代表了行情的启动，这时候不重仓何时重仓，够你后面吃的。很少有人能从过去的经验值获取教训。</p><p>你知道黄金何时见顶吗？ETF减仓12.88吨。</p></blockquote><figure><img src="https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920180446178.png" alt="大行情30分钟均线流回踩入场" tabindex="0" loading="lazy"><figcaption>大行情30分钟均线流回踩入场</figcaption></figure><h2 id="_3-均线流-改" tabindex="-1"><a class="header-anchor" href="#_3-均线流-改"><span>3.均线流-改</span></a></h2><p>达到可能反转的<strong>0.5-0.618的关键位置</strong>时，切换1分钟图，如果三根K线打穿布林上轨（直接进），回踩均线直接进。如下图所示。</p><figure><img src="https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920194935661.png" alt="均线流改" tabindex="0" loading="lazy"><figcaption>均线流改</figcaption></figure><h2 id="_4-均线流反转" tabindex="-1"><a class="header-anchor" href="#_4-均线流反转"><span>4.均线流反转</span></a></h2><h3 id="_4-1-技术介绍" tabindex="-1"><a class="header-anchor" href="#_4-1-技术介绍"><span>4.1.技术介绍</span></a></h3><div class="hint-container info"><p class="hint-container-title">提示</p><p>均线流反转只用于进场。</p></div><p>当价格站上均线，布林带压不住（3根）K线，然后出现了均线金叉，回踩均线做多。如下图所示。</p><figure><img src="https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920134900181.png" alt="均线流反转" tabindex="0" loading="lazy"><figcaption>均线流反转</figcaption></figure><h3 id="_4-2-技术细节" tabindex="-1"><a class="header-anchor" href="#_4-2-技术细节"><span>4.2.技术细节</span></a></h3><h4 id="_4-2-1-两次反转" tabindex="-1"><a class="header-anchor" href="#_4-2-1-两次反转"><span>4.2.1 两次反转</span></a></h4><p><strong>案例一</strong>：在大幅反弹或下跌的时候均线流需要2次反转，如下图所示。</p><figure><img src="https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920140723010.png" alt="均线流的两次反转案例一" tabindex="0" loading="lazy"><figcaption>均线流的两次反转案例一</figcaption></figure><p><strong>案例二</strong>：大幅度的回调，均线流可能二次反转，也就是一次起不来。</p><figure><img src="https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920181556777.png" alt="均线流的两次反转案例二" tabindex="0" loading="lazy"><figcaption>均线流的两次反转案例二</figcaption></figure><h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录</span></a></h2><details class="hint-container details"><summary>均线流+布林带的tradingview脚本</summary><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:20;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//@version=6</span></span>
<span class="line"><span>indicator(&quot;均线流 + 布林带 + ATR Range&quot;, overlay=true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// === 【均线流设置】 ===</span></span>
<span class="line"><span>only20and50 = input.bool(false, &quot;只显示EMA20和EMA50&quot;)</span></span>
<span class="line"><span>showAllEMAs = input.bool(true, &quot;显示所有EMA&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>len1 = input.int(20, &quot;EMA1 长度&quot;, minval=1)</span></span>
<span class="line"><span>len2 = input.int(30, &quot;EMA2 长度&quot;, minval=1)</span></span>
<span class="line"><span>len3 = input.int(40, &quot;EMA3 长度&quot;, minval=1)</span></span>
<span class="line"><span>len4 = input.int(50, &quot;EMA4 长度&quot;, minval=1)</span></span>
<span class="line"><span>len5 = input.int(60, &quot;EMA5 长度&quot;, minval=1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ema1 = ta.ema(close, len1)</span></span>
<span class="line"><span>ema2 = ta.ema(close, len2)</span></span>
<span class="line"><span>ema3 = ta.ema(close, len3)</span></span>
<span class="line"><span>ema4 = ta.ema(close, len4)</span></span>
<span class="line"><span>ema5 = ta.ema(close, len5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>show_ema1 = only20and50 or showAllEMAs</span></span>
<span class="line"><span>show_ema2 = showAllEMAs and not only20and50</span></span>
<span class="line"><span>show_ema3 = showAllEMAs and not only20and50</span></span>
<span class="line"><span>show_ema4 = only20and50 or showAllEMAs</span></span>
<span class="line"><span>show_ema5 = showAllEMAs and not only20and50</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plot(show_ema1 ? ema1 : na, title=&quot;EMA20&quot;, color=color.red, linewidth=1)</span></span>
<span class="line"><span>plot(show_ema2 ? ema2 : na, title=&quot;EMA30&quot;, color=color.orange, linewidth=1)</span></span>
<span class="line"><span>plot(show_ema3 ? ema3 : na, title=&quot;EMA40&quot;, color=color.blue, linewidth=1)</span></span>
<span class="line"><span>plot(show_ema4 ? ema4 : na, title=&quot;EMA50&quot;, color=color.green, linewidth=1)</span></span>
<span class="line"><span>plot(show_ema5 ? ema5 : na, title=&quot;EMA60&quot;, color=color.purple, linewidth=1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// === 【布林带设置】 ===</span></span>
<span class="line"><span>showBB     = input.bool(true, &quot;显示布林带&quot;)</span></span>
<span class="line"><span>bbLength   = input.int(20, &quot;布林带长度&quot;, minval=1)</span></span>
<span class="line"><span>bbMult     = input.float(2.0, &quot;布林带倍数&quot;, minval=0.1, step=0.1)</span></span>
<span class="line"><span>bbSource   = input.string(&quot;SMA&quot;, &quot;布林带基准&quot;, options=[&quot;SMA&quot;, &quot;EMA&quot;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>basis = bbSource == &quot;EMA&quot; ? ta.ema(close, bbLength) : ta.sma(close, bbLength)</span></span>
<span class="line"><span>dev   = bbMult * ta.stdev(close, bbLength)</span></span>
<span class="line"><span>upper = basis + dev</span></span>
<span class="line"><span>lower = basis - dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// === 布林带三轨（统一黑色） ===</span></span>
<span class="line"><span>bbBasisPlot = plot(showBB and not only20and50 ? basis : na, title=&quot;布林带中轨&quot;, color=color.black, linewidth=2)</span></span>
<span class="line"><span>bbUpperPlot = plot(showBB and not only20and50 ? upper : na, title=&quot;布林带上轨&quot;, color=color.black, linewidth=2)</span></span>
<span class="line"><span>bbLowerPlot = plot(showBB and not only20and50 ? lower : na, title=&quot;布林带下轨&quot;, color=color.black, linewidth=2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fill(bbUpperPlot, bbLowerPlot, color=(showBB and not only20and50) ? color.new(color.teal, 90) : na, title=&quot;布林带填充&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// === 【ATR Range 设置】 ===</span></span>
<span class="line"><span>atrLength = input.int(14, &quot;ATR Length&quot;, group=&quot;ATR Settings&quot;)</span></span>
<span class="line"><span>atrSmoothing = input.string(&quot;EMA&quot;, &quot;Smoothing&quot;, options=[&quot;RMA&quot;, &quot;SMA&quot;, &quot;EMA&quot;, &quot;WMA&quot;], group=&quot;ATR Settings&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ma_function(source, length) =&gt;</span></span>
<span class="line"><span>    switch atrSmoothing</span></span>
<span class="line"><span>        &quot;RMA&quot; =&gt; ta.rma(source, length)</span></span>
<span class="line"><span>        &quot;SMA&quot; =&gt; ta.sma(source, length)</span></span>
<span class="line"><span>        &quot;EMA&quot; =&gt; ta.ema(source, length)</span></span>
<span class="line"><span>        =&gt; ta.wma(source, length)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>atrValue = ma_function(ta.tr(true), atrLength)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 颜色和表格设置</span></span>
<span class="line"><span>dash_loc    = input.string(&quot;Top Right&quot;, &quot;Dashboard Location&quot;, options=[&quot;Top Right&quot;, &quot;Bottom Right&quot;, &quot;Top Left&quot;, &quot;Bottom Left&quot;, &quot;Middle Right&quot;, &quot;Bottom Center&quot;], group=&quot;Table Settings&quot;)</span></span>
<span class="line"><span>text_size   = input.string(&quot;Normal&quot;, &quot;Dashboard Size&quot;, options=[&quot;Tiny&quot;, &quot;Small&quot;, &quot;Normal&quot;, &quot;Large&quot;], group=&quot;Table Settings&quot;)</span></span>
<span class="line"><span>cell_transp = input.int(10, &quot;Cell Transparency&quot;, minval=0, maxval=100, group=&quot;Table Settings&quot;)</span></span>
<span class="line"><span>col_H       = input.color(color.black, &quot;Header&quot;, group=&quot;Table Settings&quot;)</span></span>
<span class="line"><span>Col_txt     = input.color(color.white, &quot;Text&quot;, group=&quot;Table Settings&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>col_P100 = color.new(color.red, 0)</span></span>
<span class="line"><span>col_M100 = color.new(color.green, 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 显示开关</span></span>
<span class="line"><span>showHTF = input.bool(true, &quot;显示日线关键位&quot;)</span></span>
<span class="line"><span>showTFD = input.bool(true, &quot;显示表格数据&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// === 【ATR 计算 - 日线】 ===</span></span>
<span class="line"><span>atrD = request.security(syminfo.tickerid, &quot;D&quot;, atrValue)[0]</span></span>
<span class="line"><span>OD   = request.security(syminfo.tickerid, &quot;D&quot;, open, lookahead=barmerge.lookahead_on)</span></span>
<span class="line"><span>HD   = request.security(syminfo.tickerid, &quot;D&quot;, high)</span></span>
<span class="line"><span>LD   = request.security(syminfo.tickerid, &quot;D&quot;, low)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DP100 = atrD + LD</span></span>
<span class="line"><span>DM100 = HD - atrD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dailyEndTime = time_close(&quot;D&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// === 【绘制日线关键线】 ===</span></span>
<span class="line"><span>if showHTF</span></span>
<span class="line"><span>    var line ODLine = line.new(na, na, na, na, xloc = xloc.bar_time, style = line.style_dashed, width = 2, color = color.blue)</span></span>
<span class="line"><span>    if ta.change(time(&quot;D&quot;)) != 0</span></span>
<span class="line"><span>        line.set_xy1(ODLine, time, OD)</span></span>
<span class="line"><span>        line.set_xy2(ODLine, dailyEndTime, OD)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if barstate.islast and showHTF</span></span>
<span class="line"><span>    var line DP100Line = line.new(na, na, na, na, xloc=xloc.bar_time, style=line.style_solid, width=2, color=col_P100)</span></span>
<span class="line"><span>    var line DM100Line = line.new(na, na, na, na, xloc=xloc.bar_time, style=line.style_solid, width=2, color=col_M100)</span></span>
<span class="line"><span>    line.set_xy1(DP100Line, time, DP100)</span></span>
<span class="line"><span>    line.set_xy2(DP100Line, dailyEndTime, DP100)</span></span>
<span class="line"><span>    line.set_xy1(DM100Line, time, DM100)</span></span>
<span class="line"><span>    line.set_xy2(DM100Line, dailyEndTime, DM100)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// === 【表格显示】 ===</span></span>
<span class="line"><span>var table_position = dash_loc == &quot;Top Left&quot; ? position.top_left :</span></span>
<span class="line"><span>     dash_loc == &quot;Bottom Left&quot; ? position.bottom_left :</span></span>
<span class="line"><span>     dash_loc == &quot;Middle Right&quot; ? position.middle_right :</span></span>
<span class="line"><span>     dash_loc == &quot;Bottom Center&quot; ? position.bottom_center :</span></span>
<span class="line"><span>     dash_loc == &quot;Top Right&quot; ? position.top_right : position.middle_right</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var table_text_size = text_size == &quot;Tiny&quot; ? size.tiny :</span></span>
<span class="line"><span>     text_size == &quot;Small&quot; ? size.small :</span></span>
<span class="line"><span>     text_size == &quot;Normal&quot; ? size.normal : size.large</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var t = table.new(table_position, 2, 8, frame_color = color.new(#000000, 0), frame_width = 1, border_color = color.new(#000000, 0), border_width = 1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if barstate.islast and showTFD</span></span>
<span class="line"><span>    table.cell(t, 0, 0, &quot;Open&quot;,  text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))</span></span>
<span class="line"><span>    table.cell(t, 0, 1, &quot;ATR-F&quot;, text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))</span></span>
<span class="line"><span>    table.cell(t, 0, 2, &quot;ATR-T&quot;, text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))</span></span>
<span class="line"><span>    table.cell(t, 0, 5, &quot;L+ATR&quot;, text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))</span></span>
<span class="line"><span>    table.cell(t, 0, 6, &quot;H-ATR&quot;, text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    table.cell(t, 1, 0, str.tostring(OD, &quot;#.##&quot;), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(color.blue, cell_transp))</span></span>
<span class="line"><span>    table.cell(t, 1, 1, str.tostring(atrD, &quot;#.#&quot;), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))</span></span>
<span class="line"><span>    table.cell(t, 1, 2, str.tostring(HD - LD, &quot;#.##&quot;), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(color.purple, cell_transp))</span></span>
<span class="line"><span>    table.cell(t, 1, 5, str.tostring(DP100, &quot;#&quot;), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_P100, cell_transp))</span></span>
<span class="line"><span>    table.cell(t, 1, 6, str.tostring(DM100, &quot;#&quot;), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_M100, cell_transp))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details>`,26)])])}const c=s(i,[["render",t]]),r=JSON.parse('{"path":"/trade/right/complement/ema-flow.html","title":"均线流","lang":"zh-CN","frontmatter":{"feed":false,"seo":false,"watermark":true,"layout":"LayoutSlotDemo","head":[]},"git":{"createdTime":1758348507000,"updatedTime":1766147542000,"contributors":[{"name":"weiser","username":"weiser","email":"1134685563@qq.com","commits":7,"url":"https://github.com/weiser"}]},"readingTime":{"minutes":9.22,"words":2767},"filePathRelative":"trade/right/complement/ema-flow.md"}');export{c as comp,r as data};
