import{_ as a,o as l,c as i,V as e}from"./chunks/framework.55251076.js";const P=JSON.parse('{"title":"通用单元-离心泵","description":"","frontmatter":{},"headers":[],"relativePath":"OxidationProcess/Hands-on-1.md","filePath":"OxidationProcess/Hands-on-1.md","lastUpdated":1704299088000}'),t={name:"OxidationProcess/Hands-on-1.md"},o=e('<h1 id="通用单元-离心泵" tabindex="-1">通用单元-离心泵 <a class="header-anchor" href="#通用单元-离心泵" aria-label="Permalink to &quot;通用单元-离心泵&quot;">​</a></h1><h2 id="工艺帮助" tabindex="-1">工艺帮助 <a class="header-anchor" href="#工艺帮助" aria-label="Permalink to &quot;工艺帮助&quot;">​</a></h2><h3 id="流程简介" tabindex="-1">流程简介 <a class="header-anchor" href="#流程简介" aria-label="Permalink to &quot;流程简介&quot;">​</a></h3><ul><li>来自界区的 40°C 带压液体经调节阀 LV1001 进入原料罐 D101，D101 压力由调节器 PIC1001 分程控制在 0.5MpaG，当压力高于 0.5MpaG，调节阀 PV1001B 打开泄压:当压力低于 0.5MpaG，调节阀 PV1001A 打开充压。D101 液位由调节器 LIC1001 控制进料量维持在 50%，液体经 P101A/B 送至界区外，泵出口流量由调节器 FIC1001 控制在 20000kg/h</li></ul><h3 id="设备列表" tabindex="-1">设备列表 <a class="header-anchor" href="#设备列表" aria-label="Permalink to &quot;设备列表&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">位号</th><th style="text-align:center;">名称</th></tr></thead><tbody><tr><td style="text-align:center;">01</td><td style="text-align:center;">D-101</td><td style="text-align:center;">原料罐</td></tr><tr><td style="text-align:center;">02</td><td style="text-align:center;">P101A</td><td style="text-align:center;">原料泵</td></tr><tr><td style="text-align:center;">03</td><td style="text-align:center;">P101B</td><td style="text-align:center;">备用泵</td></tr></tbody></table><h3 id="仪表列表" tabindex="-1">仪表列表 <a class="header-anchor" href="#仪表列表" aria-label="Permalink to &quot;仪表列表&quot;">​</a></h3><h3 id="流程简图" tabindex="-1">流程简图 <a class="header-anchor" href="#流程简图" aria-label="Permalink to &quot;流程简图&quot;">​</a></h3><p><img src="http://qiniu.yeshan-taoist.cn/20230520220817.png" alt="20230520220817"></p><h3 id="现场简图" tabindex="-1">现场简图 <a class="header-anchor" href="#现场简图" aria-label="Permalink to &quot;现场简图&quot;">​</a></h3><p><img src="http://qiniu.yeshan-taoist.cn/20230520221438.png" alt="20230520221438"></p><h2 id="科目三-作业现场隐患排查" tabindex="-1">科目三-作业现场隐患排查 <a class="header-anchor" href="#科目三-作业现场隐患排查" aria-label="Permalink to &quot;科目三-作业现场隐患排查&quot;">​</a></h2><h3 id="长时间停电" tabindex="-1">长时间停电 <a class="header-anchor" href="#长时间停电" aria-label="Permalink to &quot;长时间停电&quot;">​</a></h3><ol><li>关闭常用泵出口阀</li><li>出料流量调节阀改为手动 (MAN)</li><li>关闭出料流量调节阀，即控制开度 (OP) 为 0</li><li>关闭出料流量调节阀前后手阀</li><li>液位调节阀改为手动 (MAN)</li><li>关闭液位调节阀，即控制开度 (OP) 为 0</li><li>关闭液位调节阀前后手阀</li></ol><h3 id="原料泵坏" tabindex="-1">原料泵坏 <a class="header-anchor" href="#原料泵坏" aria-label="Permalink to &quot;原料泵坏&quot;">​</a></h3><ol><li>启用备用泵</li><li>在备用泵出口压力大于 0.72Mpa 的情况下打开其出口阀</li><li>关闭事故泵出口阀和入口阀</li><li>打开事故泵排液阀</li><li>出料流量调节阀改为手动 (MAN)，控制开度 (OP) 为 50</li><li>等待几秒，出口流量调节阀改为自动 (AUTO)，控制设定值 (SP) 为 20000</li><li>等待备用泵入口压力达到 0.475Mpa，出口压力达到 1.5Mpa，出口流量测量值 (PV) 控制在 20000Kg/h</li></ol><h3 id="原料泵抽空" tabindex="-1">原料泵抽空 <a class="header-anchor" href="#原料泵抽空" aria-label="Permalink to &quot;原料泵抽空&quot;">​</a></h3><ol><li>打开事故泵排气阀</li><li>出料流量调节阀改为手动 (MAN)，控制开度 (OP) 为 50</li><li>等待事故泵入口压力接近 0.475Mpa，出口压力接近 1.5Mpa</li><li>满足上述条件后，关闭事故泵排气阀</li></ol><h3 id="入口管线堵" tabindex="-1">入口管线堵 <a class="header-anchor" href="#入口管线堵" aria-label="Permalink to &quot;入口管线堵&quot;">​</a></h3><ol><li>启用备用泵</li><li>在备用泵出口压力达到 0.72Mpa 的情况下打开其出口阀</li><li>关闭事故泵出口阀</li><li>停用事故泵</li><li>关闭事故泵入口阀</li><li>出料流量调节阀改为手动 (MAN)，控制开度 (OP) 为 50</li><li>等待几秒，出口流量调节阀改为自动 (AUTO)，控制设定值 (SP) 为 20000</li><li>等待备用泵入口压力达到 0.475Mpa，出口压力达到 1.5Mpa，出口流量测量值 (PV) 控制在 20000Kg/h</li><li>在快速准确的完成上述步骤后，控制在考试限制时间前 1~2 分钟提交，利于获得高分</li></ol><h3 id="出料流量调节阀阀卡" tabindex="-1">出料流量调节阀阀卡 <a class="header-anchor" href="#出料流量调节阀阀卡" aria-label="Permalink to &quot;出料流量调节阀阀卡&quot;">​</a></h3><ol><li>打开出料流量调节阀旁路阀，控制开度为 50</li><li>关闭出料流量调节阀前后手阀</li><li>等待出口流量测量值 (PV) 达到 20000Kg/h</li><li>在快速准确的完成上述操作步骤后，控制在考试限制时间前 1~2 分钟提交，利于获得高分</li></ol><h2 id="科目四-作业现场应急处置" tabindex="-1">科目四-作业现场应急处置 <a class="header-anchor" href="#科目四-作业现场应急处置" aria-label="Permalink to &quot;科目四-作业现场应急处置&quot;">​</a></h2><h3 id="离心泵机械密封泄漏着火" tabindex="-1">离心泵机械密封泄漏着火 <a class="header-anchor" href="#离心泵机械密封泄漏着火" aria-label="Permalink to &quot;离心泵机械密封泄漏着火&quot;">​</a></h3><h4 id="外操员" tabindex="-1">外操员 <a class="header-anchor" href="#外操员" aria-label="Permalink to &quot;外操员&quot;">​</a></h4><ol><li>外操员巡检发现泵机械密封处泄漏着火，立即向班长汇报：原料泵 P101A 机械密封处泄漏着火</li><li>外操员返回中控室，从物资柜中取空气呼吸器佩戴好和携带 F 型扳手</li><li>回到现场</li></ol><h4 id="班长" tabindex="-1">班长 <a class="header-anchor" href="#班长" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>接到外操员的报警后，立即使用广播：启动《车间泄漏着火应急预案》</li><li>命令安全员：请组织人员到 1 号门口拉警戒绳</li><li>班长用中控室电话向调度室报告：原料泵 P101A 机械密封处泄漏着火，已启动应急预案</li><li>从物资柜中取空气呼吸器佩戴好和携带 F 型扳手</li><li>迅速赶赴现场</li><li>命令主操拨打 119 报火警</li></ol><h4 id="主操" tabindex="-1">主操 <a class="header-anchor" href="#主操" aria-label="Permalink to &quot;主操&quot;">​</a></h4><ol><li>报火警：泵房内离心泵机械密封苯泄漏着火，火势较大，无法控制，请派消防车灭火，报警人张三</li></ol><h4 id="班长-1" tabindex="-1">班长 <a class="header-anchor" href="#班长-1" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>命令安全员：请组织人员到 1 号门口引导消防车</li><li>命令主操和外操员：执行紧急停车操作</li></ol><h4 id="外操员在现场执行紧急停车操作" tabindex="-1">外操员在现场执行紧急停车操作 <a class="header-anchor" href="#外操员在现场执行紧急停车操作" aria-label="Permalink to &quot;外操员在现场执行紧急停车操作&quot;">​</a></h4><ol><li>停事故泵 P101A 的电源</li><li>关闭罐 D101 底部的现场阀 VX2D101 <img src="http://qiniu.yeshan-taoist.cn/20230621110457.png" alt="20230621110457"></li><li>关闭出料流量控制阀前阀 <img src="http://qiniu.yeshan-taoist.cn/20230621110651.png" alt="20230621110651"></li><li>通知主操：事故泵 P101A 已停止运转</li><li>报告班长：现场操作完毕</li></ol><h4 id="主操在中控执行紧急停车操作" tabindex="-1">主操在中控执行紧急停车操作 <a class="header-anchor" href="#主操在中控执行紧急停车操作" aria-label="Permalink to &quot;主操在中控执行紧急停车操作&quot;">​</a></h4><blockquote><p><img src="http://qiniu.yeshan-taoist.cn/20230621105908.png" alt="20230621105908"></p></blockquote><ol><li>关闭罐 D101 液位调节阀 LIC1001</li><li>关闭离心泵出料流量调节阀 FIC1001</li><li>报告班长：室内操作完毕</li></ol><h4 id="班长-2" tabindex="-1">班长 <a class="header-anchor" href="#班长-2" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>班长向调度汇报：事故处理完毕，请派维修人员进行维修</li><li>班长广播：解除事故应急预案</li></ol><h3 id="离心泵出口法兰泄漏着火" tabindex="-1">离心泵出口法兰泄漏着火 <a class="header-anchor" href="#离心泵出口法兰泄漏着火" aria-label="Permalink to &quot;离心泵出口法兰泄漏着火&quot;">​</a></h3><h4 id="外操员-1" tabindex="-1">外操员 <a class="header-anchor" href="#外操员-1" aria-label="Permalink to &quot;外操员&quot;">​</a></h4><ol><li>外操员巡检时发现原料泵 P101A 出口法兰泄漏着火，立即向班长汇报：泵出口法兰泄漏着火</li><li>回到中控室，取空气呼吸器佩戴好和携带 F 型扳手</li><li>回到现场</li></ol><h4 id="班长-3" tabindex="-1">班长 <a class="header-anchor" href="#班长-3" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>广播：启动《车间泄漏着火应急预案》</li><li>命令安全员：请组织人员到 1 号门口拉警戒绳</li><li>用中控室电话向调度室报告：泵出口法兰泄漏着火，已启动应急预案</li><li>取空气呼吸器佩戴好和携带 F 型扳手</li><li>命令主操：拨打 119 报火警</li></ol><h4 id="主操-1" tabindex="-1">主操 <a class="header-anchor" href="#主操-1" aria-label="Permalink to &quot;主操&quot;">​</a></h4><ol><li>拨打 119：泵房内离心泵出口法兰处苯泄漏着火，火势较大，无法控制，请派消防车灭火，报警人张三</li></ol><h4 id="班长-4" tabindex="-1">班长 <a class="header-anchor" href="#班长-4" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>命令安全员：请组织人员到 1 号门口引导消防车</li><li>命令主操和外操员：执行紧急停车操作</li></ol><h4 id="外操员在现场执行紧急停车操作-1" tabindex="-1">外操员在现场执行紧急停车操作 <a class="header-anchor" href="#外操员在现场执行紧急停车操作-1" aria-label="Permalink to &quot;外操员在现场执行紧急停车操作&quot;">​</a></h4><ol><li>停事故泵 P101A 的电源</li><li>关闭罐 D101 底部的现场阀 VX2D101</li><li>关闭出料流量控制阀前阀</li><li>通知主操：事故泵 P101A 已停止运转</li><li>报告班长：现场操作完毕</li></ol><h4 id="主操在中控执行紧急停车操作-1" tabindex="-1">主操在中控执行紧急停车操作 <a class="header-anchor" href="#主操在中控执行紧急停车操作-1" aria-label="Permalink to &quot;主操在中控执行紧急停车操作&quot;">​</a></h4><ol><li>关闭罐 D101 液位调节阀 LIC1001</li><li>关闭离心泵出料流量调节阀 FIC1001</li><li>报告班长：室内操作完毕</li></ol><h4 id="班长-5" tabindex="-1">班长 <a class="header-anchor" href="#班长-5" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>班长向调度汇报：事故处理完毕，请派维修人员进行维修</li><li>班长广播：解除事故应急预案</li></ol><h3 id="离心泵出口法兰泄漏有人中毒" tabindex="-1">离心泵出口法兰泄漏有人中毒 <a class="header-anchor" href="#离心泵出口法兰泄漏有人中毒" aria-label="Permalink to &quot;离心泵出口法兰泄漏有人中毒&quot;">​</a></h3><h4 id="外操员-2" tabindex="-1">外操员 <a class="header-anchor" href="#外操员-2" aria-label="Permalink to &quot;外操员&quot;">​</a></h4><ol><li>外操员巡检时发现有人中毒晕倒在地，立即向班长报告：泵附近有一工人中毒晕倒在地</li><li>回到中控室，取空气呼吸器佩戴好和携带 F 型扳手</li><li>回到现场</li></ol><h4 id="班长-6" tabindex="-1">班长 <a class="header-anchor" href="#班长-6" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>广播：启动《车间泄漏中毒应急预案》</li><li>命令安全员：请组织人员到 1 号门口拉警戒绳</li><li>用中控室电话向调度室报告：泵处泄漏有一工人中毒晕倒在地，已启动应急预案</li><li>取空气呼吸器佩戴好和携带 F 型扳手</li><li>命令主操：拨打 120 报急救</li></ol><h4 id="外操员-3" tabindex="-1">外操员 <a class="header-anchor" href="#外操员-3" aria-label="Permalink to &quot;外操员&quot;">​</a></h4><ol><li>在现场，对受伤人员立即展开急救</li></ol><h4 id="主操-2" tabindex="-1">主操 <a class="header-anchor" href="#主操-2" aria-label="Permalink to &quot;主操&quot;">​</a></h4><ol><li>拨打 120：泵房内离心泵出口法兰处苯泄漏，有人中毒昏迷不醒，请派救护车，报警人张三</li></ol><h4 id="班长-7" tabindex="-1">班长 <a class="header-anchor" href="#班长-7" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>命令安全员：请组织人员到 1 号门口引导救护车</li><li>命令外操员：停事故泵 P101A，启动备用泵 P101B，并将事故泵 P101A 倒空</li><li>命令主操：请监视装置生产状况</li></ol><h4 id="外操员在现场执行紧急停车操作-2" tabindex="-1">外操员在现场执行紧急停车操作 <a class="header-anchor" href="#外操员在现场执行紧急停车操作-2" aria-label="Permalink to &quot;外操员在现场执行紧急停车操作&quot;">​</a></h4><ol><li>停事故泵 P101A 的电源，关闭泵的出口阀和入口阀</li><li>对备用泵 P101B 进行盘车操作(靠近泵，点击携带的 F 型扳手)</li><li>启动备用泵 P101B 的电源，等待几秒打开其出口阀</li><li>报告班长：现场操作完毕</li></ol><h4 id="主操在中控执行紧急停车操作-2" tabindex="-1">主操在中控执行紧急停车操作 <a class="header-anchor" href="#主操在中控执行紧急停车操作-2" aria-label="Permalink to &quot;主操在中控执行紧急停车操作&quot;">​</a></h4><ol><li>报告班长：装置运行正常</li></ol><h4 id="班长-8" tabindex="-1">班长 <a class="header-anchor" href="#班长-8" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>班长向调度汇报：事故处理完毕，请派维修人员进行维修</li><li>班长广播：解除事故应急预案</li></ol><h3 id="出料流量调节阀前法兰泄漏着火" tabindex="-1">出料流量调节阀前法兰泄漏着火 <a class="header-anchor" href="#出料流量调节阀前法兰泄漏着火" aria-label="Permalink to &quot;出料流量调节阀前法兰泄漏着火&quot;">​</a></h3><h4 id="外操员-4" tabindex="-1">外操员 <a class="header-anchor" href="#外操员-4" aria-label="Permalink to &quot;外操员&quot;">​</a></h4><ol><li>外操员巡检时发现出料流量控制阀 FIC1001 前法兰处泄漏着火，立即向班长汇报：出料流量控制阀 FIC1001 前法兰处泄漏着火</li><li>回到中控室，取空气呼吸器佩戴好和携带 F 型扳手</li><li>回到现场</li></ol><h4 id="班长-9" tabindex="-1">班长 <a class="header-anchor" href="#班长-9" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>广播：启动《车间泄漏着火应急预案》</li><li>命令安全员：请组织人员到 1 号门口拉警戒绳</li><li>用中控室电话向调度室报告：出料流量控制阀 FIC1001 前法兰处泄漏着火，已启动应急预案</li><li>取空气呼吸器佩戴好和携带 F 型扳手</li><li>命令主操：拨打 119 报火警</li></ol><h4 id="主操-3" tabindex="-1">主操 <a class="header-anchor" href="#主操-3" aria-label="Permalink to &quot;主操&quot;">​</a></h4><ol><li>拨打 119：泵房内出料流量控制阀前法兰处苯泄漏着火，火势较大，无法控制，请派消防车灭火，报警人张三</li></ol><h4 id="班长-10" tabindex="-1">班长 <a class="header-anchor" href="#班长-10" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>命令安全员：请组织人员到 1 号门口引导消防车</li><li>命令主操和外操员：执行紧急停车操作</li></ol><h4 id="外操员在现场执行紧急停车操作-3" tabindex="-1">外操员在现场执行紧急停车操作 <a class="header-anchor" href="#外操员在现场执行紧急停车操作-3" aria-label="Permalink to &quot;外操员在现场执行紧急停车操作&quot;">​</a></h4><ol><li>停事故泵 P101A 的电源，关闭泵的出口阀 VO1P101A</li><li>关闭去下游装置现场阀 VX1F101(泵房后塔二楼) <img src="http://qiniu.yeshan-taoist.cn/20230621112642.png" alt="20230621112642"></li><li>报告班长：现场操作完毕</li></ol><h4 id="主操在中控执行紧急停车操作-3" tabindex="-1">主操在中控执行紧急停车操作 <a class="header-anchor" href="#主操在中控执行紧急停车操作-3" aria-label="Permalink to &quot;主操在中控执行紧急停车操作&quot;">​</a></h4><ol><li>关闭罐 D101 液位调节阀 LIC1001</li><li>关闭离心泵出料流量调节阀 FIC1001</li><li>报告班长：室内操作完毕</li></ol><h4 id="班长-11" tabindex="-1">班长 <a class="header-anchor" href="#班长-11" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>班长向调度汇报：事故处理完毕，请派维修人员进行维修</li><li>班长广播：解除事故应急预案</li></ol>',86),r=[o];function h(n,d,s,c,u,q){return l(),i("div",null,r)}const x=a(t,[["render",h]]);export{P as __pageData,x as default};
