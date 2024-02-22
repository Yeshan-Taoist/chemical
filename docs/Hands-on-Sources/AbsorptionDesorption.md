# 通用单元-吸收解吸

## 工艺帮助

### 流程简介

- 本训练单元选用的是 C6 油分离提纯混合富气中 C4 组分，流程分为吸收和解吸两部每部分都有独立的仿 DCS 图和现场图。
- **吸收系统：**
  - 来自界区外的原料气（富气，其中组分为 C4 占 25.13%，CO 和 CO~2~ 占 6.26%，N~2~ 占 64.58%，H~2~ 占 3.5%，0~2~ 占 0.53%, 由 FV1001 控制流量从吸收塔 T101 底部进入，与自上而下的贫油 (C6) 逆相接触
  - 将原料气的 C4 组分吸收下来，富油 (C4 占 8.2%，C6 占 91.8%) 和 FIC1004 通过调节塔釜富油采出量串级控制
  - 未吸收的气体由 T-101 塔顶排出，经吸收塔塔顶冷凝器 E101 被-4°C 的盐水冷却至 2°C，进入气液分离罐 D102 回收被冷凝下来的 C6 油和 C4 组分，凝液与吸收塔塔金富油一起进入解吸塔，不凝气在 PIC1002 控制下保持 D102 压力为 1.2MpaG，其余通过放空总管排入大气
- 贫油由 C6 油贮罐 D101 经泵 P10IA/B 打入吸收塔，贫油流量由 FIC1003 控制 (13.5t/h)。C6 油贮罐中的贫油少数由界区提供，大多数是来自解吸塔系统的循环油
- **解吸系统：**
  - 由吸收塔塔金和气液分离罐回收的富油经贫富油热交换器 E103 换热升温后进入解吸塔 T102 进行解吸分离
  - 塔顶出 C4 产品 (C4 组分占 66.7%) ，经冷凝器 E-104 全部冷凝至 40°C，凝液送入集液罐 D103，经泵 P102A/B 一部分作回流至解吸塔顶部，流量由 FIC1006 控制 (8.0t/h)
  - 另一部分作产品出装置，由 LIC1005 控制。解吸塔塔釜的 C6 油 (C6 占 98.8%) 流量由 LIC1004 控制，经贫富油热交换器 E103. 盐水冷却器 E102 冷却降温至 5°C 返回 D101 循环使用
  - 返回油温度由 TIC1003 通过调节循环冷却盐水量来控制
  - 解吸塔塔釜有再沸器 E105，利用蒸汽进行加热，再沸器温度由 TIC1007 和 FIC1008 串级调节蒸汽流量 (3.0t/h) 来控制
  - 解吸塔压力 0.5MPa 由 PIC1005 调节塔顶冷凝器冷却水流量来控制：当压力超高时，由 PIC1004 调节 D103 放空量来控制
  - 随着生产的进行，要定期排放气液分离罐 D102 的液体，补充新鲜的 C6 油入贮罐
  - 另外，为保证系统中的操作稳定，操作时要保持系统之间的压力差

### 设备列表

| 序号 | 位号 |       名称       | 序号 |  位号   |          名称           |
| :--: | :--: | :--------------: | :--: | :-----: | :---------------------: |
|  01  | T101 |      吸收塔      |  07  |  E105   |    解吸塔塔釜再沸器     |
|  02  | T102 |      解吸塔      |  08  |  D101   |      D101 贫油储罐      |
|  03  | E101 | 吸收塔塔顶冷凝器 |  09  |  D102   |       气液分离罐        |
|  04  | E102 |   循环油冷却器   |  10  |  D103   |    解吸塔塔顶回流罐     |
|  05  | E103 |  贫、富油换热器  |  11  | P101A/B |    贫油供给泵/备用泵    |
|  06  | E104 | 解吸塔塔顶冷凝器 |  12  | P102A/B | 解吸塔塔顶回流泵/备用泵 |

### 仪表列表

| 序号 |  位号   | 单位 | 正常值 |  控制范围   |          描述           |
| :--: | :-----: | :--: | :----: | :---------: | :---------------------: |
|  01  | PIC1003 | MPaG |  1.2   |   1.0~1.4   |      D102 压力控制      |
|  02  | PIC1004 | MPaG |  0.55  |  0.45~0.55  |    T102 塔顶压力控制    |
|  03  | PIC1005 | MPaG |  0.50  |   0.4~0.6   |      D103 压力控制      |
|  04  | FIC1003 | Kg/h | 13500  | 12000~15000 | T101 吸收油进料流量控制 |
|  05  | FIC1004 | Kg/h | 14700  | 13700~15700 |  T101 塔釜出口流量控制  |
|  06  | FIC1006 | Kg/h |  8000  |  7000~9000  |    T102 回流流量控制    |
|  07  | FIC1008 | Kg/h |  3000  |  2500~3500  |  E105 加热蒸汽流量控制  |
|  08  | LIC1001 |  %   |   50   |    40~60    |    T101 塔釜液位控制    |
|  09  | LIC1004 |  %   |   50   |    43~57    |    T102 塔釜液位控制    |
|  10  | LIC1005 |  %   |   50   |    43~57    |      D103 液位控制      |
|  11  | TIC1003 |  °C  |   5    |     1~9     | E102 热物流出口温度控制 |
|  12  | TIC1007 |  °C  |  102   |   94~110    |    T102 塔金温度控制    |
|  13  | PI1001  | MPaG |  1.22  |  1.12~1.32  |      T101 塔顶压力      |
|  14  | P11002  | MPaG |  1.25  |  1.15~1.35  |      T101 塔釜压力      |
|  15  | P11006  | MPaG |  0.55  |   0.4~0.7   |      T102 塔釜压力      |
|  16  | T11001  |  °C  |   6    |     3~9     |      T101 塔顶温度      |
|  17  | TI1002  |  °C  |   40   |    30~50    |      T101 塔釜温度      |
|  18  | TI1004  |  °C  |   2    |     1~3     |        D102 温度        |
|  19  | TI1005  |  °C  |   80   |    72~88    |     预热后富油温度      |
|  20  | TI1006  |  °C  |   51   |    43~58    |      T102 塔顶温度      |
|  21  | TI1008  |  °C  |   40   |    35~45    |        D103 温度        |
|  22  | FI1001  | Kg/h |  5000  |  4000~6000  |      原料富气流量       |
|  23  | F11002  | Kg/h |  3800  |  3300~4300  |   T101 塔顶不凝气流量   |
|  24  | F11005  | Kg/h | 14700  | 13700~15700 |  进入 T-102 不凝气流量  |
|  25  | F11007  | Kg/h | 13400  | 12400~14400 |      循环贫油流量       |
|  26  | L11002  |  %   |   60   |    30~80    |        D101 液位        |
|  27  | L11003  |  %   |   50   |    40~60    |        D102 液位        |
|  28  | A11001  |  %   |  >95   |     >95     |    D103 碳四组分含量    |
|  29  | A11002  |  %   |  1.5   |   1.0~2.0   |  T101 塔顶碳四组分含量  |

### 现场简图

#### 地面

![20240222113403](http://qiniu.yeshan-taoist.cn/20240222113403.png)

#### 框架一层

![20240222114204](http://qiniu.yeshan-taoist.cn/20240222114204.png)

#### 框架二层

![20240222114906](http://qiniu.yeshan-taoist.cn/20240222114906.png)

## 科目三-作业现场隐患排查

### 加热蒸汽中断

#### 在 DCS 画面中

1. 关闭**原料富气流量控制阀`FIC1001`**、**T101 吸收油进料流量控制阀`FIC1003`**、**T101 塔釜出口流量控制阀`FIC1004`**和** E102 热物流出口温度控制阀`TIC1003`**
   ![20240102144032](http://qiniu.yeshan-taoist.cn/20240102144032.png)
2. 关闭** T102 塔釜液位控制阀`LIC1004`**、**T102 回流流量控制阀`FIC1006`**、**E105 低压蒸汽加热量`FIC1008`**和** D103 液位控制阀`LIC1005`**
   ![20240102144919](http://qiniu.yeshan-taoist.cn/20240102144919.png)

#### 在现场

1. 关闭** C6 油储罐进料阀 `V1D101`**
   ![20240105180602](http://qiniu.yeshan-taoist.cn/20240105180602.png)
2. 关闭**贫油供给泵 `P101A`出口阀 `P101A0`，关闭泵电源（停电时无需操作电源）**
   ![20240105180825](http://qiniu.yeshan-taoist.cn/20240105180825.png)
3. 关闭**解吸塔塔顶回流泵 `P102A`出口阀 `P102A0`，关闭泵电源（停电时无需操作电源）**
   ![20240105180935](http://qiniu.yeshan-taoist.cn/20240105180935.png)

### 长时间停电

> 同`加热蒸汽中断`

### 贫液进吸收塔泵坏

1. 打开**贫油供给备用泵 `P101B`电源**
2. 打开**贫油供给备用泵 `P101B`出口阀`P101B0`**
3. 在考试结束前提交

### 解析塔塔底再沸器结垢严重

### 冷却水中断

> 同`加热蒸汽中断`

## 科目四-作业现场应急处置

### 吸收剂进吸收塔控制阀前法兰泄漏着火

#### 外操员（需要使用灭火器灭火）

1. 外操员巡检发现**吸收塔 T101 附近 FV1003 调节阀前法兰泄漏**
2. 通过**对讲机报告班长：吸收塔贫液进料阀 FV1003 阀前法兰泄漏着火**
3. **使用灭火器站在火焰上风处对准火焰根部灭火**
4. 如没熄灭，通过**对讲机报告班长：尝试灭火，担火没有灭掉**
5. **快速前往中控，立即佩戴空呼和携带防爆和 F 扳手**
6. 回到现场，**使用消防炮对装置进行降温**

#### 班长

1. 接到外操员报告后，立即使用**广播启动《车间泄漏着火应急预案》**
2. 通过**电话向调度报告：吸收塔贫液进料阀 FV1003 阀前法兰泄漏着火，已启动应急预案**
3. 通过**对讲机命令安全员：请组织人员到 1 号门口拉警戒绳**
4. **立即佩戴空呼和携带防爆和 F 扳手**，前往现场
5. 通过**对讲机命令主操：请拨打电话 119，报火警**

#### 主操

1. **拨打电话 119 报火警：车间发生火灾，吸收剂泄漏并着火，火势较大，请派消防车来，报警人张三**

#### 班长

1. 通过**对讲机命令安全员：请组织人员到 1 号门口引导消防车**
2. 通过**对讲机命令主操和外操员：装置按紧急停车处理**

#### 主操在中控执行紧急停车操作

1. 关闭**原料富气流量控制阀 `FIC1001`、T101 吸收油进料流量控制阀 `FIC1003`**
   ![20240222124947](http://qiniu.yeshan-taoist.cn/20240222124947.png)
2. 关闭**E105 低压蒸汽加热量 `FIC1008`**
   ![20240222125153](http://qiniu.yeshan-taoist.cn/20240222125153.png)
3. 吸收塔塔釜液体排净后，关闭 **T101 塔釜出料控制阀 `FIC1004`**
   ![20240222130130](http://qiniu.yeshan-taoist.cn/20240222130130.png)
4. **注意以上操作完成后**，打开**吸收塔压力控制阀 `PIC1003`**
   ![20240222130514](http://qiniu.yeshan-taoist.cn/20240222130514.png)

#### 外操员在现场执行紧急停车操作

1. 关闭贫油供给泵 `P101A` 的**出口阀**，**停 `P101A` 泵**
2. 关闭吸收塔**原料进料阀 `FV1001` 前阀 `FV1001I`和后阀`FV1001O`**
   ![20240222123038](http://qiniu.yeshan-taoist.cn/20240222123038.png)
   ![20240222123404](http://qiniu.yeshan-taoist.cn/20240222123404.png)
3. 关闭**新鲜溶剂补充阀(C6 油储罐进料阀) `V1D101`**
   ![20240222123738](http://qiniu.yeshan-taoist.cn/20240222123738.png)
4. **吸收塔塔釜液体排净后**，关闭**吸收塔塔釜出料控制阀 `FV1004` 后手阀 `FV1004O`**
   ![20240222131123](http://qiniu.yeshan-taoist.cn/20240222131123.png)

#### 外操员和主操报告班长

1. 外操员**通过对讲机：现场按紧急停车处理完毕**
2. 主操**通过对讲机：室内按紧急停车处理完毕**

#### 班长

1. 通过**对讲机通知维修工：请派维修人员进场检修**
2. 通过**电话报告调度：火已熄灭，事故处理完毕，泄漏点移交维修工处理**
3. 通过**广播：解除事故应急预案**

### 原料进吸收塔法兰泄露着火

### 原料进吸收塔法兰泄漏有人中毒