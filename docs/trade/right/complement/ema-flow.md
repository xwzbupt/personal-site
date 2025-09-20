# 均线流

::: info 提要
该网站托管于某云服务器，图片存储在某云OSS图床上。某云服务器有**年费成本** ，某云OSS在访问图片时会产生些许**流量成本** 。这部分内容加密，一是为了防止和渊师父的知识产权泄露，二是为了缩小知悉范围，减少运营成本。**如果内容有任何纰漏或有任何需要补充的地方，请师兄师姐们不吝赐教。**
如果整理和总结的内容对大家有所帮助，请大家在右侧的【支持我】中打赏一毛二毛，抵扣运营成本。
:::

## 1.引言
均线流是竹祥发明的，引入了ema20-60共5根均线。我写了均线流+布林带的tradingview脚本，如附录所示，供大家使用。
## 2.均线流

如下图所示，黄金从3311一路涨到了3650附近，在30分钟K线图的均线流来看，每一次回踩均线流都是可以买入的位置，不断浮盈加仓，在这种行情下可以创造出巨大的利润。

![大行情30分钟均线流回踩入场](https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920180446178.png)

## 3.均线流-改




## 4.均线流反转
### 4.1.技术介绍
当价格站上均线，布林带压不住（3根）K线，然后出现了均线金叉，回踩均线做多。如下图所示。

![均线流反转](https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920134900181.png)

### 4.2.技术细节
#### 4.2.1 两次反转

**案例一**：在大幅反弹或下跌的时候均线流需要2次反转，如下图所示。

![均线流的两次反转案例一](https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920140723010.png)

**案例二**：大幅度的回调，均线流可能二次反转，也就是一次起不来。

![均线流的两次反转案例一](https://weiser-fun.oss-cn-beijing.aliyuncs.com/img/image-20250920181556777.png)

## 附录

以下是均线流+布林带的tradingview脚本
```
//@version=6
indicator("多条EMA + 可选布林带", overlay=true)

// === EMA 设置 ===
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

plot(showAllEMAs ? ema1 : na, title="EMA1", color=color.red, linewidth=1)
plot(showAllEMAs ? ema2 : na, title="EMA2", color=color.orange, linewidth=1)
plot(showAllEMAs ? ema3 : na, title="EMA3", color=color.blue, linewidth=1)
plot(showAllEMAs ? ema4 : na, title="EMA4", color=color.green, linewidth=1)
plot(showAllEMAs ? ema5 : na, title="EMA5", color=color.purple, linewidth=1)

// === 布林带设置 ===
showBB = input.bool(true, "显示布林带")
bbLength = input.int(20, "布林带长度", minval=1)
bbMult   = input.float(2.0, "布林带倍数", minval=0.1, step=0.1)
bbSource = input.string("SMA", "布林带基准", options=["SMA", "EMA"])

// 布林带基准线
basis = bbSource == "EMA" ? ta.ema(close, bbLength) : ta.sma(close, bbLength)
dev   = bbMult * ta.stdev(close, bbLength)
upper = basis + dev
lower = basis - dev

// 绘制布林带
bbBasisPlot = plot(showBB ? basis : na, title="布林带中轨", color=color.yellow, linewidth=1)
bbUpperPlot = plot(showBB ? upper : na, title="布林带上轨", color=color.teal, linewidth=1)
bbLowerPlot = plot(showBB ? lower : na, title="布林带下轨", color=color.teal, linewidth=1)

// 填充布林带背景
fill(bbUpperPlot, bbLowerPlot, color=showBB ? color.new(color.teal, 90) : na, title="布林带填充")

```