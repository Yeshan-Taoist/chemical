# 特定单元-固定床反应器

## 工艺帮助

### 流程简介

- 本单元模拟的乙炔加氢反应系统，其作用是除去脱乙烷塔顶气相混合碳二组分中的乙炔。
- 脱乙烷塔塔顶物料经加热后进入乙炔转化器 (R101A/B)采用选择性加氢生成乙烯的方法，除去物料中所含的乙炔。本装置设有两台反应器，进行切换操作，催化剂在不影响连续操作的情况下，用过热蒸汽和空气的混合物对催化剂进行再生
- 该加氢步骤分两步完成以提高反应的选择性。反应都是在气相中进行的。通过流量控制将氢气干燥器的高纯度 (95% (mol) ) 气加入到反应器进料中。通过流量控制还加入少量粗氢 (含有 CO) 以调节催化剂的活性。高纯度氢和粗还通过流量控制加入到二段反应器进料中。反应器进料首先通过与乙炔转化器进料/排放物流换热器(E101)中的反应器排放物流换热，然后与乙炔转化器进料预热器 E102 中的低压蒸汽换热被加热到反应温度。然后，它进入第一个反应器床层，并向下流经催化剂床层。在第一个床层中应有大约 75%的乙炔被转化。一段的排放物流在乙炔转化器中间冷却器中被冷却以脱除反应的热量，然后进入第二个反应器床层，对剩余的乙炔进行加氢反应。

### 设备列表

| 序号 |  位号   |        名称        |
| :--: | :-----: | :----------------: |
|  01  |  E101   |    进出料换热器    |
|  02  |  E102   |     进料加热器     |
|  03  |  E103   | R101A/B 中间冷却器 |
|  04  |  E104   | R102A/B 中间冷却器 |
|  05  |  E105   |     出料冷却器     |
|  06  | R101A/B |     乙炔转化器     |
|  07  | R102A/B |     乙炔转化器     |
|  08  | P102A/B |     原料进料泵     |
|  09  |  D101   |       凝液罐       |

### 仪表列表

### 流程简图

#### 进料换热系统

![20230609084835](http://qiniu.yeshan-taoist.cn/20230609084835.png)

#### 反应器部分

![20230609084929](http://qiniu.yeshan-taoist.cn/20230609084929.png)

### 现场简图

![20230609085232](http://qiniu.yeshan-taoist.cn/20230609085232.png)

## 科目三-作业现场隐患排查

### 反应器氢气中断

> **反应器泄压和凝液罐泄液完毕提交**

#### 在 DCS 画面中

1. 在`进料换热系统`画面中，**切断一段反应器氢气进料 FIC1002、切断二段反应器氢气进料 FIC1003、切断烃进料 FIC1001、关闭氢气进料切断阀 UV1002、关闭物料去产品出装置的切断阀 UV1003**
   - 如图所示位置
   - ![20230609093309](http://qiniu.yeshan-taoist.cn/20230609093309.png)
2. 在`进料换热系统`画面中，打开**凝液罐液位调节阀 LIC1001**，切换到手动，OP 值设置为 100
   - 如图所示位置
   - ![20230609094432](http://qiniu.yeshan-taoist.cn/20230609094432.png)
3. 在`反应器部分`画面中，打开**反应器压力调节阀 PIC1001**，切换到手动，OP 值设置为 100
   - 如图所示位置
   - ![20230609094717](http://qiniu.yeshan-taoist.cn/20230609094717.png)

#### 在现场

1. 关闭**蒸汽进料前阀 TV1001AI**
   - 如图所示位置
   - ![20230609092826](http://qiniu.yeshan-taoist.cn/20230609092826.png)
2. 打开产品**不合格油出装置阀门 VI4R101**
   - 如图所示位置
   - ![20230609093108](http://qiniu.yeshan-taoist.cn/20230609093108.png)
3. 打开 R101 二楼的**R101A 的排绿阀 VX1R101A**
   - 如图所示位置
   - ![20230609093521](http://qiniu.yeshan-taoist.cn/20230609093521.png)
4. 打开 R101 一楼的**R101B 的排绿阀 VX1R101B**
   - 如图所示位置
   - ![20230609093742](http://qiniu.yeshan-taoist.cn/20230609093742.png)

### 冷却水中断

> **反应器泄压完毕提交**

#### 在 DCS 画面中

1. 在`进料换热系统`画面中，**切断一段反应器氢气进料 FIC1002、切断二段反应器氢气进料 FIC1003、切断烃进料 FIC1001、关闭物料去产品出装置的切断阀 UV1003**
   - 如图所示位置
   - ![20230609100302](http://qiniu.yeshan-taoist.cn/20230609100302.png)
2. 在`反应器部分`画面中，打开**反应器压力调节阀 PIC1001**，切换到手动，OP 值设置为 100
   - 如图所示位置
   - ![20230609094717](http://qiniu.yeshan-taoist.cn/20230609094717.png)

#### 在现场

1. 打开产品**不合格油出装置阀门 VI4R101**
   - 如图所示位置
   - ![20230609093108](http://qiniu.yeshan-taoist.cn/20230609093108.png)

### 反应器飞温

> `同反应器氢气中断`

## 科目四-作业现场应急处置

### 反应器二段出口法兰泄漏着火有人受伤

#### 外操员

1. 外操员巡检，发现反应器二段出口法兰泄漏着火有人受伤，**通过对讲机报告班长："反应器二段出口法兰泄漏着火有人受伤"**
2. 回到中控室，**拿 F 型扳手和正压式空气呼吸器回到现场**

#### 班长

1. **通过广播启动`车间泄漏着火应急预案`**
2. **通过对讲机命令安全员："组织人员到 1 号门拉警戒线"**
3. **通过中控室电话向调度报告："反应器二段出口法兰泄漏着火有人受伤，已启动应急预案"**
4. **从中控室拿 F 型扳手和正压式空气呼吸器立即赶赴现场**
5. **通过对讲机命令外操员："使用消防炮对反应器进行降温控制"**

#### 外操员

1. **打开消防炮对反应器进行降温控制**
2. **对中毒昏迷人员进行急救**

#### 班长

1. **通过对讲机命令主操报火警 119**
2. **通过对讲机命令主操报急救 120**

#### 主操

1. **拨打 119 报警电话："反应器二段出口法兰泄漏着火，火势较大，无法控制，请派消防车来灭火，报警人张三"**
2. **拨打 120 报警电话："反应器二段出口法兰泄漏有人受伤，有人中毒昏迷，请派救护车来，报警人张三"**

#### 班长

1. **通过对讲机命令安全员："请组织人员到一号门引导消防车"**
2. **通过对讲机命令安全员："请组织人员到一号门引导救护车"**
3. **通过对讲机命令主操和外操员"执行紧急停车操作"**

#### 主操中控执行紧急停车操作

1. 在中控室紧急操作平台，**按动紧急停车按钮 HS1001**
2. 在`进料换热系统`画面中，**关闭氢气进一段调节阀 FIC1002 和 氢气进二段调节阀 FIC1003**
   - 如图所示位置
   - ![20230612180356](http://qiniu.yeshan-taoist.cn/20230612180356.png)
3. 在`进料换热系统`画面中，**将加热蒸汽去进料换热器 E-102 的温度调节阀 TIC1001 切为手动 MAN，OP 值先设置为 50，再设置为 0**
   - 如图所示位置
   - ![20230612180716](http://qiniu.yeshan-taoist.cn/20230612180716.png)
4. 在`反应器部分`画面中，**将反应器压力控制 PIC1001 切为手动 MAN，OP 值设置为 100**
   - 如图所示位置
   - ![20230612180921](http://qiniu.yeshan-taoist.cn/20230612180921.png)
5. **通过对讲机向班长报告："室内已按紧急停车处理完毕"**

#### 外操员现场执行紧急停车操作

1. 关闭加热蒸汽去进料换热器 E-102 的温度调节阀(TV1001A)前阀
2. 关闭反应物去 E105 的阀门 VX1R101
3. 关闭氢气去一段调节阀 FV1002 的前阀
4. 关闭氢气去二段调节阀 FV1003 的前阀
5. 关闭原料去装置调节阀 FV1001 的前阀
6. **通过对讲机向班长报告："现场已按紧急停车处理完毕"**

#### 班长

1. **向调度室报告："事故处理完毕，可通知维修工对反应器泄漏的法兰进行检修"**
2. **广播宣布："解除事故应急预案"**

### 反应器一段入口阀门泄漏着火

#### 外操员

1. 外操员巡检，发现反应器二段出口法兰泄漏着火有人受伤，**通过对讲机报告班长："反应器一段入口阀门泄漏着火"**
2. 回到中控室，**拿 F 型扳手和正压式空气呼吸器回到现场**

#### 班长

1. **通过广播启动`车间泄漏着火应急预案`**
2. **通过对讲机命令安全员："组织人员到 1 号门拉警戒线"**
3. **通过中控室电话向调度报告："反应器一段入口阀门泄漏着火，已启动应急预案"**
4. **从中控室拿 F 型扳手和正压式空气呼吸器立即赶赴现场**
5. **通过对讲机命令外操员："使用消防炮对反应器进行降温控制"**

#### 外操员

1. **打开消防炮对反应器进行降温控制**

#### 班长

1. **通过对讲机命令主操报火警 119**

#### 主操

1. **拨打 119 报警电话："反应器一段入口阀门泄漏着火，火势较大，无法控制，请派消防车来灭火，报警人张三"**

#### 班长

1. **通过对讲机命令安全员："请组织人员到一号门引导消防车"**
2. **通过对讲机命令主操和外操员"执行紧急停车操作"**

#### 主操中控执行紧急停车操作

1. 在中控室紧急操作平台，**按动紧急停车按钮 HS1001**
2. 在`进料换热系统`画面中，**关闭氢气进一段调节阀 FIC1002 和 氢气进二段调节阀 FIC1003**
3. 在`进料换热系统`画面中，**将加热蒸汽去进料换热器 E-102 的温度调节阀 TIC1001 切为手动 MAN，OP 值先设置为 50，再设置为 0**
4. 在`反应器部分`画面中，**将反应器压力控制 PIC1001 切为手动 MAN，OP 值设置为 100**
5. **通过对讲机向班长报告："室内已按紧急停车处理完毕"**

#### 外操员现场执行紧急停车操作

1. 关闭加热蒸汽去进料换热器 E-102 的温度调节阀(TV1001A)前阀
2. 关闭反应物去 E105 的阀门 VX1R101
3. 关闭氢气去一段调节阀 FV1002 的前阀
4. 关闭氢气去二段调节阀 FV1003 的前阀
5. 关闭原料去装置调节阀 FV1001 的前阀
6. **通过对讲机向班长报告："现场已按紧急停车处理完毕"**

#### 班长

1. **向调度室报告："事故处理完毕，可通知维修工对反应器泄漏的法兰进行检修"**
2. **广播宣布："解除事故应急预案"**

### 粗氢一段入口调节阀前阀泄漏中毒

#### 外操员

1. 外操员巡检，**通过对讲机报告班长："发现粗氢进一段反应器调节阀 FIC1004 入口法兰出泄漏，附近有一工人中毒晕倒在地"**
2. 回到中控室，**拿 F 型扳手和正压式空气呼吸器回到现场**

#### 班长

1. **通过广播启动`车间危险化学品泄漏应急预案`**
2. **通过对讲机命令安全员："组织人员到 1 号门拉警戒线"**
3. **通过中控室电话向调度报告："发现粗氢进一段反应器调节阀 FIC1004 入口法兰出泄漏，附近有一工人中毒晕倒在地，已启动应急预案"**
4. **从中控室拿 F 型扳手和正压式空气呼吸器**
5. **通过对讲机命令外操员："立即去事故现场救人**
6. **通过对讲机命令主操拨打急救 120**

#### 外操员

1. **立即对受伤人员进行救护**

#### 主操

1. **拨打 120 报警电话："固定床反应器单元粗氢入口阀门处，含一氧化碳的粗氢泄漏，有人中毒昏倒，请派救护车来，报警人张三"**

#### 班长

1. **通过对讲机命令安全员："请组织人员到一号门引导救护车"**
2. **通过对讲机命令外操员："检查泄漏点和泄漏情况"**

#### 外操员

1. **通过对讲机向班长报告："发现粗氢进一段反应器调节阀 FIC1004 前阀入口处泄漏"**

#### 班长

1. **命令外操员："切换调节阀，FIC1004 旁路阀稍开，关闭粗氢进一段反应器调节阀前后手阀"**
2. **命令主操："现场切换粗氢进一段反应器调节阀 FIC1004 旁路阀，请注意观察，并通知调度请仪表工进行调节阀检修"**

#### 外操员

1. **稍开粗氢进一段反应器调节阀 FIC1004 的旁路阀**
2. **关闭调节阀前后手阀**
3. **报告班长："调节阀切换完毕"**

#### 主操

1. **通过中控室电话通知调度："请仪表工进行粗氢进一段反应器调节阀 FIC1004 检修"**

#### 外操员

1. **通过对讲机报告班长："仪表工检修完毕"**

#### 班长

1. **通知外操员："现场将打开粗氢进一段反应器调节阀 FIC1004 前后阀"**

#### 外操员

1. **通过对讲机告知主操："现场将打开粗氢进一段反应器调节阀 FIC1004 前后阀**
2. **打开调节阀后阀**
3. **打开调节阀前阀**
4. **关闭调节阀旁路阀**
5. **通过对讲机向班长报告："事故处理完毕"**

#### 班长

1. **向调度室报告："中毒工人已送往医院，泄漏点处理完毕，现生产恢复正常"**
2. **广播宣布："解除事故应急预案"**