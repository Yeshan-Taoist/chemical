# 通用单元-换热器

## 工艺帮助

### 流程简介

- 冷物料 (92°C) 进入本单元，由泵 P101A/B，经调节器 FIC1001 控制流量送入换热器 E101 壳程，加热到 142°C(20%被汽化）后，经阀 VI2E101 出系统。热物料 (225°C) 进入系统，经泵 P102A/B，由温度调节器 TIC1001 分程控制主线调节阀 TV1001A 和副线调节阀 TV1001B （两调节阀的分程动作如下图所示） 使冷物料出口温度稳定；过主线阀 TV1001A 的热物料经换热器 E101 管程后，与副线阀 TV1001B 来的热物料混合 （混合温度为 (177±2°C) ) ，由阀 VI4E101 出本单元

### 设备列表

| 序号 |  位号   |     名称     |
| :--: | :-----: | :----------: |
|  01  | P101A/B | 冷物料进料泵 |
|  02  | P102A/B | 热物料进料泵 |
|  03  |  E101   | 列管式换热器 |

### 仪表列表

### 流程简图

![20230609104320](http://qiniu.yeshan-taoist.cn/20230609104320.png)

### 现场简图

![20230609104529](http://qiniu.yeshan-taoist.cn/20230609104529.png)

## 科目三-作业现场隐患排查

### 换热器结垢

> **注意点:冷热物料的入口阀必须在出口压力降到 0.01Mpa 时才能关闭**

#### 在现场

1. 关闭**热物料进料泵 P102A 的出口阀 P102A0**，停用**P102A 泵**
   ![20230609114102](http://qiniu.yeshan-taoist.cn/20230609114102.png)
1. 当 P102A 出口压力降低到 0.01Mpa 时，关闭**P102A 的入口阀 P102A1**
   ![20230609114638](http://qiniu.yeshan-taoist.cn/20230609114638.png)
1. 关闭**换热器 E101 的热物料出口阀 VI4E101**
   ![20230609115033](http://qiniu.yeshan-taoist.cn/20230609115033.png)
1. 全开**换热器 E101 管程排气阀 VX2E101**
   ![20230609115804](http://qiniu.yeshan-taoist.cn/20230609115804.png)
1. 打开**换热器 E101 管程排液阀 RPY**
   ![20230609120848](http://qiniu.yeshan-taoist.cn/20230609120848.png)
1. 打开**换热器 E101 管程排凝校验阀 VI5E101**
   ![20230609121152](http://qiniu.yeshan-taoist.cn/20230609121152.png)
1. 确认**换热器 E101 管程排凝校验阀 VI5E101 导淋无液体流出后**，关闭**换热器 E101 管程排气阀 VX2E101**和**换热器 E101 管程排液阀 RPY**
   - 该操作可跳过先去操作其他，等处理完后再回来处理
1. 关闭**冷物料进料泵 P101A 的出口阀 P101A0**，停用**P101A 泵**
   ![20230609122421](http://qiniu.yeshan-taoist.cn/20230609122421.png)
1. 当 P101A 出口压力降到 0.01Mpa 时，关闭**P101A 的入口阀 P101A1**
   ![20230609122658](http://qiniu.yeshan-taoist.cn/20230609122658.png)
1. 关闭**换热器 E101 的冷物料入口阀 VI1E101**
   ![20230609122829](http://qiniu.yeshan-taoist.cn/20230609122829.png)
1. 关闭**换热器 E101 的冷物料出口阀 VI2E101**
   ![20230609123115](http://qiniu.yeshan-taoist.cn/20230609123115.png)
1. 全开**换热器 E101 壳程排气阀 VX1E101**
   ![20230609123303](http://qiniu.yeshan-taoist.cn/20230609123303.png)
1. 打开**换热器 E101 壳程泄液阀 LPY**
   ![20230609123514](http://qiniu.yeshan-taoist.cn/20230609123514.png)
1. 打开**换热器 E101 壳程排凝校验阀 VI3E101**
   ![20230609123634](http://qiniu.yeshan-taoist.cn/20230609123634.png)
1. 确认**换热器 E101 壳程排凝校验阀 VI3E101 导淋无液体流出后**，关闭**换热器 E101 壳程排气阀 VX1E101**和**换热器 E101 壳程排液阀 LPY**
   - 该操作可跳过先去操作其他，等处理完后再回来处理

#### 在 DCS 画面中

![20230609124124](http://qiniu.yeshan-taoist.cn/20230609124124.png)

1. 将 TIC1001 切换到手动 MAN，OP 值设置为 50，等待几秒后，OP 值设置为 0
2. 将 FIC1001 切换到手动 MAN，OP 值设置为 0

### 热物料泵坏

1. 切换热物料进料泵备用泵 P102B
   - 先开泵
   - 打开泵出口阀
2. 关闭常用泵 P102A 出口阀和入口阀
3. 等待各工艺指标恢复正常，在临近截止时间前 30 秒提交

### 冷物料泵坏

1. 切换冷物料进料泵备用泵 P101B
   - 先开泵
   - 打开泵出口阀
2. 关闭常用泵 P101A 出口阀和入口阀
3. **等待各工艺指标恢复正常，在临近截止时间前 30 秒提交**

### 长时间停电

1. 关闭冷物料和热物料进料泵出口阀

### 冷物料中断

1. 关闭热物料进料泵 P102A 出口阀，停 P102A
2. 关闭冷物料进料泵 P101A 出口阀，停 P101A

## 科目四-作业现场应急处置

### 冷物料泵出口法兰泄漏着火

#### 外操员

1. 正在巡检，发现换热器冷物料泵 P101A 出口法兰泄漏着火
2. 通过对讲机向班长报告：换热器冷物料泵 P101A 出口法兰处泄漏着火
3. 迅速在附近拿到灭火器站到火焰的上风口对准火焰根部灭火
4. 灭火失败，报告班长：尝试灭火，但火没有灭掉
5. 回中控室携带 F 型扳手和正压式空气呼吸器
6. 回到现场，等待下一步操作指令

#### 班长

1. 接到外操员的报告后，通过广播启动应急预案：启动《车间泄漏着火应急预案》
2. 通过中控室电话向调度报告：换热器冷物料泵 P101A 出口法兰处泄漏着火，已启动应急预案
3. 通过对讲机命令安全员：请组织人员到 1 号门拉警戒线
4. 携带 F 型扳手和正压式空气呼吸器
5. 班长命令主操拨打 119

#### 主操

1. 通过中控室电话向 119 报警：换热器冷物料泵 P101A 出口法兰处发生火灾，有可燃物泄漏并着火，请派消防车来，报警人张三

#### 班长

1. 命令安全员：请组织人员到 1 号门引导消防车
2. 命令主操和外操员：执行紧急停车操作

#### 主操在中控执行紧急停车操作

> 将如图所示位置画面中调节阀做以下操作
> ![20230609124124](http://qiniu.yeshan-taoist.cn/20230609124124.png)

1. 将热物料进料阀 TIC1001 切换到手动 MAN，OP 值设置为 50，等待几秒后，OP 值设置为 0
2. 将冷物料进料阀 FIC1001 切换到手动 MAN，OP 值设置为 0
3. 向班长报告：室内操作完毕

#### 外操员在现场执行紧急停车操作

1. 关闭冷物料泵 P101A 电源
2. 关闭冷物料进换热器 E101 入口阀
3. 关闭冷物料出换热器 E101 出口阀
4. 关闭热物料泵 P102A 的出口阀
5. 关闭热物料泵 P102A 电源
6. 关闭热物料出换热器 E101 出口阀
7. 待火扑灭后，向班长汇报：现场操作完毕

#### 班长

1. 电话调度：事故处理完毕
2. 通过广播：解除事故应急预案

### 换热器热物料出口法兰泄漏着火

#### 外操员

1. 正在巡检，发现换热器 E101 热物料出口法兰泄漏着火
2. 通过对讲机向班长报告：换热器 E101 热物料出口法兰处泄漏着火
3. 迅速在附近拿到灭火器站到火焰的上风口对准火焰根部灭火
4. 灭火失败，报告班长：尝试灭火，但火没有灭掉
5. 回中控室携带 F 型扳手和正压式空气呼吸器
6. 回到现场，等待下一步操作指令

#### 班长

1. 接到外操员的报告后，通过广播启动应急预案：启动《车间泄漏着火应急预案》
2. 通过中控室电话向调度报告：换热器 E101 热物料出口法兰处泄漏着火，已启动应急预案
3. 通过对讲机命令安全员：请组织人员到 1 号门拉警戒线
4. 携带 F 型扳手和正压式空气呼吸器
5. 班长命令主操拨打 119

#### 主操

1. 通过中控室电话向 119 报警：换热器 E101 热物料出口法兰处发生火灾，有可燃物泄漏并着火，请派消防车来，报警人张三

#### 班长

1. 命令安全员：请组织人员到 1 号门引导消防车
2. 命令主操和外操员：执行紧急停车操作

#### 主操在中控执行紧急停车操作

1. 将热物料进料阀 TIC1001 切换到手动 MAN，OP 值设置为 50，等待几秒后，OP 值设置为 0
2. 将冷物料进料阀 FIC1001 切换到手动 MAN，OP 值设置为 0
3. 向班长报告：室内操作完毕

#### 外操员在现场执行紧急停车操作

1. 关闭热物料泵 P102A 的出口阀，停其电源开关
2. 关闭热物料出换热器 E101 出口阀
3. 关闭冷物料泵 P101A 的出口阀，停其电源开关
4. 关闭冷物料进换热器 E101 入口阀
5. 关闭冷物料出换热器 E101 出口阀
6. 待火扑灭后，向班长汇报：现场操作完毕

#### 班长

1. 电话调度：事故处理完毕
2. 通过广播：解除事故应急预案

### 换热器热物料出口法兰泄漏有人中毒

#### 外操员

1. 正在巡检，发现换热器 E101 热物料出口法兰泄漏并有一职工昏倒在地
2. 通过对讲机向班长报告：换热器 E101 热物料出口法兰处泄漏，有一职工昏倒在地
3. 回中控室携带 F 型扳手和正压式空气呼吸器
4. 回到现场，等待下一步操作指令

#### 班长

1. 接到外操员的报告后，通过广播启动应急预案：启动《车间危险化学品泄漏应急预案》
2. 通过中控室电话向调度报告：换热器 E101 热物料出口法兰处泄漏，有一职工昏倒在地，已启动应急预案
3. 通过对讲机命令安全员：请组织人员到 1 号门拉警戒线
4. 携带 F 型扳手和正压式空气呼吸器
5. 通过对讲机命令外操员：立即去现场
6. 立即赶赴现场

#### 外操员

1. 立即对受伤人员进行救护

#### 班长

1. 协助外操员对受伤人员进行救护
2. 班长命令主操拨打 120

#### 主操

1. 通过中控室电话向 120 报警：吸收解吸车间吸收剂泄漏，有人中毒受伤，请派救护车来，报警人张三

#### 班长

1. 命令安全员：请组织人员到 1 号门引导救护车
2. 通知主操：请监视装置生产状况
3. 命令主操和外操员：执行紧急停车操作

#### 主操在中控执行紧急停车操作

1. 将冷物料进料阀 FIC1001 切换到手动 MAN，OP 值设置为 0
2. 向班长报告：室内操作完毕

#### 外操员在现场执行紧急停车操作

1. 关闭热物料泵 P102A 的出口阀，停其电源开关
2. 关闭热物料出换热器 E101 出口阀
3. 全开管程排气阀 VX2E101
4. 打开管程排凝液阀 RPY
5. 打开 E101 管程导淋阀 VI5E101，检查换热器管程液体是否排干净
6. 确认换热器管程液体排干净后，关闭管程排凝液阀 RPY
7. 关闭冷物料泵 P101A 的出口阀，停其电源开关
8. 关闭冷物料进换热器 E101 入口阀
9. 关闭冷物料出换热器 E101 出口阀
10. 全开壳程排气阀 VX1E101
11. 打开壳程排凝液阀 LPY
12. 打开 E101 壳程导淋阀 VI3E101，检查换热器壳程液体是否排干净
13. 确认换热器壳程液体排干净后，关闭壳程排凝液阀 LPY
14. 向班长汇报：现场操作完毕

#### 班长

1. 电话调度：事故处理完毕
2. 通过广播：解除事故应急预案