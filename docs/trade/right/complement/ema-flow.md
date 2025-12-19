# 均线流

::: warning
该网站托管于某云服务器，图片存储在某云OSS图床上。某云服务器有**年费成本** ，某云OSS在访问图片时会产生些许**流量成本** 。这部分内容加密，一是为了防止和渊师父的知识产权泄露，二是为了缩小知悉范围，减少运营成本。**如果内容有任何纰漏或有任何需要补充的地方，请师兄师姐们不吝赐教。**
如果整理和总结的内容对大家有所帮助，请大家在右侧的【支持我】中打赏一毛二毛，抵扣运营成本。
:::

## 1.引言
在交易的世界里，趋势往往是最可靠的朋友。如何在趋势中顺势而为、如何在关键位置果断入场、如何在已有利润的基础上安全加仓，一直是交易者不断探索的课题。均线作为最常见的趋势工具，不仅能帮助我们识别行情方向，更能衍生出一整套实战方法。本文将介绍一种源自均线系统的交易思路——均线流。

我们会依次探讨均线流的核心逻辑（如何在强势行情中实现浮盈加仓）、均线流的改进用法（如何提升信号质量）、以及均线流反转（如何在行情关键点寻找入场机会）。同时，文中结合实际案例进行分析，帮助你把抽象的技术转化为清晰可操作的思路。最后，还附上了TradingView版本的均线流指标代码，方便大家在实盘中直接应用。
## 2.均线流

::: info 

均线流的核心价值在于，它能够揭示每个周期的中期趋势。在趋势形成的过程中，均线流能有效过滤掉本周期的回调波段，却无法过滤真正的反转波段。换句话说，大周期的回调波段，其实往往就是小周期的反转波段。因此，均线流的使用前提是市场必须存在趋势，否则就失去了意义。

趋势的演化，往往通过“均线流反转”体现出来。均线流反转并不是趋势完成的充分条件，但却是趋势必然的起点。只有当均线流发散至少一次，才能确认中期趋势真正建立。通常情况下，短期趋势是服从中期趋势的，这是市场的常态；但在某些情况下，短期趋势会扭转中期趋势，这种异态就是均线流反转。此时，回调波段演化为反转波段，幅度超过前一推动波段的一倍以上。这种反转往往是主力行为，不论是套盘还是解放套牢盘，都会在这一过程中显现出来。

监控趋势的方法，可以通过均线流的发散与收敛来完成。均线流的发散对应推动波段，收敛则对应回调波段。当市场进入强趋势阶段时，不同周期的均线流会持续发散，几乎看不到明显的收敛迹象。

在操作上，均线流有两条最核心的法则。第一条是顺势而为：在没有触及大周期的阻力位之前，在均线流方向没有发生反转之前，只能坚持做一个方向。这里需要注意，均线流走平并不等于反转，例如30分钟的走平，必须结合1小时的走势来确认；同样，假突破也不能被当作反转。第二条法则是，均线流反转后的第一次回踩必须果断入场。这背后的逻辑在于趋势的必然性，如果回踩成功并受到均线流的支撑或压制，那么它就确立了趋势的起点。既然是趋势的起点，那么价格大概率不会只走一波，进场的胜率自然大幅提高。

在品种选择方面，日线级别的均线流形态可以帮助我们判断整体的强弱，而小周期均线流反转的先后顺序，则能够反映不同品种之间的相对强弱。这种对比往往能够提供更清晰的交易线索。

当大小周期的均线流方向出现矛盾时，想要在小周期上做反转单，就必须满足两个条件：一是大周期已经遇到阻力，或者出现了严重的超买或超卖；二是小周期的反转非常坚决，表现出极强的反转动能。只有在这样的条件下，小周期的反转才具备交易价值。

跨周期的共振是均线流中极为重要的一环。它往往出现在两种情况：要么大周期的调整时间不长，要么小周期即将出现快速下跌。其内在本质都是跳过4小时周期，因此4小时在趋势结构中的重要性反而被削弱。

均线流是趋势的具象化，而布林带的有效性则取决于趋势的强度。趋势越强，布林带越有效。布林带在结构中的作用，一方面是回调波段的第一道防线，另一方面也是推动波段的第一道阻力。均线流与布林带结合使用，可以更清晰地揭示趋势的力量和转折的信号。

:::

如下图所示，黄金从3311一路涨到了3650附近，在30分钟K线图的均线流来看，每一次回踩均线流都是可以买入的位置，不断浮盈加仓，在这种行情下可以创造出巨大的利润。

> 这里提一下这段行情的背景：自从黄金在年初一直涨到了4月底的高点3500后，就一直在3250-3450之间震荡，一直震荡了4个月到了8月底才打破了这个局面。
>
> 行情总是总收敛到发散，高点和低点并未明确抬高，也没有明确的降低，而是收缩在一个狭小区域，当你发现这种情况的时候，你要坚定，确信，给自己洗脑，机会要来了。市场是一个圈，震荡和趋势来回切换，是一个闭环。你理解了市场是闭环，就简单多了，启动不启动都是ETF 说了算。加仓10吨以上，代表了行情的启动，这时候不重仓何时重仓，够你后面吃的。很少有人能从过去的经验值获取教训。
>
> 你知道黄金何时见顶吗？ETF减仓12.88吨。

![大行情30分钟均线流回踩入场](https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920180446178.png)

## 3.均线流-改

达到可能反转的**0.5-0.618的关键位置**时，切换1分钟图，如果三根K线打穿布林上轨（直接进），回踩均线直接进。如下图所示。

![均线流改](https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920194935661.png)




## 4.均线流反转
### 4.1.技术介绍
::: info 提示
均线流反转只用于进场。
:::

当价格站上均线，布林带压不住（3根）K线，然后出现了均线金叉，回踩均线做多。如下图所示。

![均线流反转](https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920134900181.png)

### 4.2.技术细节
#### 4.2.1 两次反转

**案例一**：在大幅反弹或下跌的时候均线流需要2次反转，如下图所示。

![均线流的两次反转案例一](https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920140723010.png)

**案例二**：大幅度的回调，均线流可能二次反转，也就是一次起不来。

![均线流的两次反转案例二](https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920181556777.png)

## 附录

::: details 均线流+布林带的tradingview脚本

```
//@version=6
indicator("均线流 + 布林带 + ATR Range", overlay=true)

// === 【均线流设置】 ===
only20and50 = input.bool(false, "只显示EMA20和EMA50")
showAllEMAs = input.bool(true, "显示所有EMA")

len1 = input.int(20, "EMA1 长度", minval=1)
len2 = input.int(30, "EMA2 长度", minval=1)
len3 = input.int(40, "EMA3 长度", minval=1)
len4 = input.int(50, "EMA4 长度", minval=1)
len5 = input.int(60, "EMA5 长度", minval=1)

ema1 = ta.ema(close, len1)
ema2 = ta.ema(close, len2)
ema3 = ta.ema(close, len3)
ema4 = ta.ema(close, len4)
ema5 = ta.ema(close, len5)

show_ema1 = only20and50 or showAllEMAs
show_ema2 = showAllEMAs and not only20and50
show_ema3 = showAllEMAs and not only20and50
show_ema4 = only20and50 or showAllEMAs
show_ema5 = showAllEMAs and not only20and50

plot(show_ema1 ? ema1 : na, title="EMA20", color=color.red, linewidth=1)
plot(show_ema2 ? ema2 : na, title="EMA30", color=color.orange, linewidth=1)
plot(show_ema3 ? ema3 : na, title="EMA40", color=color.blue, linewidth=1)
plot(show_ema4 ? ema4 : na, title="EMA50", color=color.green, linewidth=1)
plot(show_ema5 ? ema5 : na, title="EMA60", color=color.purple, linewidth=1)

// === 【布林带设置】 ===
showBB     = input.bool(true, "显示布林带")
bbLength   = input.int(20, "布林带长度", minval=1)
bbMult     = input.float(2.0, "布林带倍数", minval=0.1, step=0.1)
bbSource   = input.string("SMA", "布林带基准", options=["SMA", "EMA"])

basis = bbSource == "EMA" ? ta.ema(close, bbLength) : ta.sma(close, bbLength)
dev   = bbMult * ta.stdev(close, bbLength)
upper = basis + dev
lower = basis - dev

// === 布林带三轨（统一黑色） ===
bbBasisPlot = plot(showBB and not only20and50 ? basis : na, title="布林带中轨", color=color.black, linewidth=2)
bbUpperPlot = plot(showBB and not only20and50 ? upper : na, title="布林带上轨", color=color.black, linewidth=2)
bbLowerPlot = plot(showBB and not only20and50 ? lower : na, title="布林带下轨", color=color.black, linewidth=2)

fill(bbUpperPlot, bbLowerPlot, color=(showBB and not only20and50) ? color.new(color.teal, 90) : na, title="布林带填充")

// === 【ATR Range 设置】 ===
atrLength = input.int(14, "ATR Length", group="ATR Settings")
atrSmoothing = input.string("EMA", "Smoothing", options=["RMA", "SMA", "EMA", "WMA"], group="ATR Settings")

ma_function(source, length) =>
    switch atrSmoothing
        "RMA" => ta.rma(source, length)
        "SMA" => ta.sma(source, length)
        "EMA" => ta.ema(source, length)
        => ta.wma(source, length)

atrValue = ma_function(ta.tr(true), atrLength)

// 颜色和表格设置
dash_loc    = input.string("Top Right", "Dashboard Location", options=["Top Right", "Bottom Right", "Top Left", "Bottom Left", "Middle Right", "Bottom Center"], group="Table Settings")
text_size   = input.string("Normal", "Dashboard Size", options=["Tiny", "Small", "Normal", "Large"], group="Table Settings")
cell_transp = input.int(10, "Cell Transparency", minval=0, maxval=100, group="Table Settings")
col_H       = input.color(color.black, "Header", group="Table Settings")
Col_txt     = input.color(color.white, "Text", group="Table Settings")

col_P100 = color.new(color.red, 0)
col_M100 = color.new(color.green, 0)

// 显示开关
showHTF = input.bool(true, "显示日线关键位")
showTFD = input.bool(true, "显示表格数据")

// === 【ATR 计算 - 日线】 ===
atrD = request.security(syminfo.tickerid, "D", atrValue)[0]
OD   = request.security(syminfo.tickerid, "D", open, lookahead=barmerge.lookahead_on)
HD   = request.security(syminfo.tickerid, "D", high)
LD   = request.security(syminfo.tickerid, "D", low)

DP100 = atrD + LD
DM100 = HD - atrD

dailyEndTime = time_close("D")

// === 【绘制日线关键线】 ===
if showHTF
    var line ODLine = line.new(na, na, na, na, xloc = xloc.bar_time, style = line.style_dashed, width = 2, color = color.blue)
    if ta.change(time("D")) != 0
        line.set_xy1(ODLine, time, OD)
        line.set_xy2(ODLine, dailyEndTime, OD)

if barstate.islast and showHTF
    var line DP100Line = line.new(na, na, na, na, xloc=xloc.bar_time, style=line.style_solid, width=2, color=col_P100)
    var line DM100Line = line.new(na, na, na, na, xloc=xloc.bar_time, style=line.style_solid, width=2, color=col_M100)
    line.set_xy1(DP100Line, time, DP100)
    line.set_xy2(DP100Line, dailyEndTime, DP100)
    line.set_xy1(DM100Line, time, DM100)
    line.set_xy2(DM100Line, dailyEndTime, DM100)

// === 【表格显示】 ===
var table_position = dash_loc == "Top Left" ? position.top_left :
     dash_loc == "Bottom Left" ? position.bottom_left :
     dash_loc == "Middle Right" ? position.middle_right :
     dash_loc == "Bottom Center" ? position.bottom_center :
     dash_loc == "Top Right" ? position.top_right : position.middle_right

var table_text_size = text_size == "Tiny" ? size.tiny :
     text_size == "Small" ? size.small :
     text_size == "Normal" ? size.normal : size.large

var t = table.new(table_position, 2, 8, frame_color = color.new(#000000, 0), frame_width = 1, border_color = color.new(#000000, 0), border_width = 1)

if barstate.islast and showTFD
    table.cell(t, 0, 0, "Open",  text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))
    table.cell(t, 0, 1, "ATR-F", text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))
    table.cell(t, 0, 2, "ATR-T", text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))
    table.cell(t, 0, 5, "L+ATR", text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))
    table.cell(t, 0, 6, "H-ATR", text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))

    table.cell(t, 1, 0, str.tostring(OD, "#.##"), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(color.blue, cell_transp))
    table.cell(t, 1, 1, str.tostring(atrD, "#.#"), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_H, cell_transp))
    table.cell(t, 1, 2, str.tostring(HD - LD, "#.##"), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(color.purple, cell_transp))
    table.cell(t, 1, 5, str.tostring(DP100, "#"), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_P100, cell_transp))
    table.cell(t, 1, 6, str.tostring(DM100, "#"), text_color=Col_txt, text_size=table_text_size, bgcolor=color.new(col_M100, cell_transp))
```

:::