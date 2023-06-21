# 科目三-离心压缩机

## 工艺介绍

### 工艺流程

本套机组是由沈阳鼓风机厂制造的两段压缩机和杭州汽轮机厂制造的凝汽式汽轮机组成。机组主要用来将分馏塔顶油气分离来的富气(压力 0.18MPa，温度 40°C)，经透平压缩机机一段压缩后(压力 0.7MPa，温度 105°C)，进入中间冷却器冷却后进入中间分液罐进行分离。气相进入二段，继续升压后(压力 1.5Mpa，温度 105°C)，经二段出口送到稳定。
该机组在压缩气体的同时，担负着控制反应压力的任务。正常时，通过反应压力调节机组转速，达到控制反应压力的目的。另外，压缩机入口有两个 DN850 和 DN350 实行分程控制的放火炬阀，用来辅助调节反应压力。压缩机出口有一个反飞动阀，用来防止压缩机喘振。该套机组整个控制系统由 DCS 计算机系统执行。

### 工艺设备

| 序号 |  位号   |    名称    | 序号 |  位号   |       名称       |
| :--: | :-----: | :--------: | :--: | :-----: | :--------------: |
|  01  | C101A/B |   压缩机   |  10  | P102A/B |     润滑油泵     |
|  02  |  K101   |   汽轮机   |  11  | P103A/B |      复水泵      |
|  03  |  D101   | 入口分液罐 |  12  | S101A/B |   润滑油过滤器   |
|  04  |  D102   | 气液分液罐 |  13  |  J101   |    油箱加热器    |
|  05  |  D103   |  润滑油箱  |  14  |  E101   |  气体级间冷却器  |
|  06  |  D104   |  高位油箱  |  15  |  E102   |  气体返回冷却器  |
|  07  | D105A/B |   储能器   |  16  | E103A/B |   润滑油冷却器   |
|  08  |  D106   |   复水器   |  17  |  E104   | 复水器表面冷却器 |
|  09  | P101A/B |   凝液泵   |  18  | E105A/B |   凝结水冷却器   |

### 流程简图

#### 气压机系统

![20230520221750](http://qiniu.yeshan-taoist.cn/20230520221750.png)

#### 润滑油和密封气

![20230520221856](http://qiniu.yeshan-taoist.cn/20230520221856.png)

#### 轴温轴振动监视

![20230520222047](http://qiniu.yeshan-taoist.cn/20230520222047.png)

#### 气压机组工艺系统详况画面

![20230520222359](http://qiniu.yeshan-taoist.cn/20230520222359.png)

#### 汽轮机启停逻辑

![20230520222644](http://qiniu.yeshan-taoist.cn/20230520222644.png)

### 现场简图

![20230520223949](http://qiniu.yeshan-taoist.cn/20230520223949.png)

## 实操项目

### 一、长时间停电

1. 在 DCS 界面的`气压机启停逻辑`画面中，点击紧急停车按钮
2. 在`气压机系统`关闭压缩机富气出口阀 (**HIC1002**)
3. 在`气压机系统`关闭压缩机入口蝶阀 (**HIC1001**)
4. 在现场二楼压缩机旁打开级间分液罐顶`安全阀 (SPV103) 的旁路阀 (SPV103B)`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516093721.png)
5. 关闭汽轮机`入口隔离阀 (VI2K101)`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516094646.png)
6. 关闭汽轮机入口`入口隔离阀 (VI2K101)`**前**`蒸汽放空阀 (VI3K101)`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516095248.png)
7. 关闭`轴封蒸汽阀门 (VI6K101)`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516095600.png)
8. 关闭`汽提蒸汽总阀 VI5K101`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516095800.png)
9. 关闭`复水器二级汽抽入口阀 (VI1P105A)`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516100317.png)
10. 关闭`二级汽抽蒸汽入口阀 (VI2P105A)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516100843.png)
11. 关闭`复水器一级汽抽入口阀 (VI1P106A)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516101106.png)
12. 关闭`一级汽抽蒸汽入口阀 (VI2P106A)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516101726.png)
13. 关闭`复水泵 (P103A) 的出口阀 (P103A0)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516102627.png)
14. 关闭`凝液泵 (P101A) 出口阀 (P101A0)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516102842.png)

### 二、冷却水中断

1. 在 DCS 界面的`气压机启停逻辑`画面中，点击紧急停车按钮
2. 在`气压机系统`关闭压缩机富气出口阀 (**HIC1002**)
3. 在`气压机系统`关闭压缩机入口蝶阀 (**HIC1001**)
4. 在现场二楼压缩机旁打开级间分液罐顶`安全阀 (SPV103) 的旁路阀 (SPV103B)`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516093721.png)
5. 关闭汽轮机`入口隔离阀 (VI2K101)`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516094646.png)
6. 关闭汽轮机入口`入口隔离阀 (VI2K101)`**前**`蒸汽放空阀 (VI3K101)`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516095248.png)
7. 压缩机 C101 停下后进行机组盘车
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516111958.png)
8. 关闭`轴封蒸汽阀门 (VI6K101)`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516095600.png)
9. 关闭`汽提蒸汽总阀 VI5K101`
   - 如图所示位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516095800.png)
10. 关闭`复水器二级汽抽入口阀 (VI1P105A)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516100317.png)
11. 关闭`二级汽抽蒸汽入口阀 (VI2P105A)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516100843.png)
12. 关闭`复水器一级汽抽入口阀 (VI1P106A)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516101106.png)
13. 关闭`一级汽抽蒸汽入口阀 (VI2P106A)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516101726.png)
14. 停用`复水泵 (P103A)`
15. 关闭`复水泵 (P103A) 的出口阀 (P103A0)`
    - 如图所示位置
    - ![找位置](http://qiniu.yeshan-taoist.cn/20230516102627.png)

### 三、润滑油油压低

1. 步骤 1 到步骤 15 与冷却水中断操作一致
2. 步骤 16：关闭润滑油泵主泵 (P102A) 的`润滑油主泵蒸汽调节阀 (VX1P102)`和`润滑油主泵蒸汽出口阀 (VI1P102)`
   - 如图所以位置
   - ![找位置](http://qiniu.yeshan-taoist.cn/20230516113939.png)

### 四、复水器液位高

1. 在 DCS 界面`气压机系统`中将**自动**状态的**复水泵点击切换为手动**，届时复水备用泵 (P103B) 启动
2. 快速操作后，等待**复水器内液位 (LICA1005) 测量值 (PV) 降低到 55%**即可停止复水备用泵 (P103B)
   - 可以在现场观察液位 (LGD106) 来准确实现及时停止备用泵 (P103B)
   - 可以在快速操作后通过 DCS 界面`气压机系统`中控制液位 (LICA1005) 调节阀的 SP 值为 55%来快速实现
3. 待**复水器内液位 (LICA1005) 测量值 (PV) 控制在 50%左右**
   - 可以在快速操作后通过 DCS 界面`气压机系统`中控制液位 (LICA1005) 调节阀的 SP 值为 50%来快速实现