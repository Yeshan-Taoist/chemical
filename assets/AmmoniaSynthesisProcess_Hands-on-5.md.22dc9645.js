import{_ as t,o as e,c as l,V as a}from"./chunks/framework.55251076.js";const q=JSON.parse('{"title":"通用单元-往复式压缩机","description":"","frontmatter":{},"headers":[],"relativePath":"AmmoniaSynthesisProcess/Hands-on-5.md","filePath":"AmmoniaSynthesisProcess/Hands-on-5.md","lastUpdated":1707021453000}'),n={name:"AmmoniaSynthesisProcess/Hands-on-5.md"},o=a('<h1 id="通用单元-往复式压缩机" tabindex="-1">通用单元-往复式压缩机 <a class="header-anchor" href="#通用单元-往复式压缩机" aria-label="Permalink to &quot;通用单元-往复式压缩机&quot;">​</a></h1><h2 id="工艺帮助" tabindex="-1">工艺帮助 <a class="header-anchor" href="#工艺帮助" aria-label="Permalink to &quot;工艺帮助&quot;">​</a></h2><h3 id="流程简介" tabindex="-1">流程简介 <a class="header-anchor" href="#流程简介" aria-label="Permalink to &quot;流程简介&quot;">​</a></h3><ul><li>被压缩气体自界区经入口阀进入压缩机吸入管线。吸入气体一路进入压缩汽缸 C1，另一路进汽 C2。两路气体经压缩后排出汇合后输出</li><li>润滑油由润滑油泵 P201A/B 连续不断地从主油箱 D201 中抽出，输出油一部分由压力控制 PIC2001 控制回流到油箱: 另一部分经过油冷却器 E202 进行冷却后进入 S201A/B</li><li>润滑油经过 S201A/B 后，压缩机轴承和联轴器上出来的润滑油直接返回到油箱 D201</li></ul><h3 id="设备列表" tabindex="-1">设备列表 <a class="header-anchor" href="#设备列表" aria-label="Permalink to &quot;设备列表&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">位号</th><th style="text-align:center;">名称</th><th style="text-align:center;">序号</th><th style="text-align:center;">位号</th><th style="text-align:center;">名称</th></tr></thead><tbody><tr><td style="text-align:center;">01</td><td style="text-align:center;">C101</td><td style="text-align:center;">往复压缩机</td><td style="text-align:center;">05</td><td style="text-align:center;">M101</td><td style="text-align:center;">压缩机电机</td></tr><tr><td style="text-align:center;">02</td><td style="text-align:center;">D201</td><td style="text-align:center;">主油箱</td><td style="text-align:center;">06</td><td style="text-align:center;">P201A/B</td><td style="text-align:center;">油泵</td></tr><tr><td style="text-align:center;">03</td><td style="text-align:center;">E201</td><td style="text-align:center;">主油箱加热器</td><td style="text-align:center;">07</td><td style="text-align:center;">S201A/B</td><td style="text-align:center;">油过滤器</td></tr><tr><td style="text-align:center;">04</td><td style="text-align:center;">E202A/B</td><td style="text-align:center;">油箱出门冷却器</td><td style="text-align:center;">08</td><td style="text-align:center;">E101</td><td style="text-align:center;">压缩机返回线冷却器</td></tr></tbody></table><h3 id="仪表列表" tabindex="-1">仪表列表 <a class="header-anchor" href="#仪表列表" aria-label="Permalink to &quot;仪表列表&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">位号</th><th style="text-align:center;">单位</th><th style="text-align:center;">正常值</th><th style="text-align:center;">控制范围</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">01</td><td style="text-align:center;">FI1001</td><td style="text-align:center;">m<sup>3</sup>/H</td><td style="text-align:center;">15000</td><td style="text-align:center;">13500~16500</td><td style="text-align:center;">压缩机出口流量</td></tr><tr><td style="text-align:center;">02</td><td style="text-align:center;">LI2001</td><td style="text-align:center;">%</td><td style="text-align:center;">80.0</td><td style="text-align:center;">50.0~90.0</td><td style="text-align:center;">主油箱液位</td></tr><tr><td style="text-align:center;">03</td><td style="text-align:center;">PIC2001</td><td style="text-align:center;">MPaG</td><td style="text-align:center;">1.100</td><td style="text-align:center;">1.030~1.170</td><td style="text-align:center;">油泵出口压力控制</td></tr><tr><td style="text-align:center;">04</td><td style="text-align:center;">PIC1002</td><td style="text-align:center;">MPaG</td><td style="text-align:center;">1.300</td><td style="text-align:center;">1.150~1.450</td><td style="text-align:center;">压缩机出口压力控制</td></tr><tr><td style="text-align:center;">05</td><td style="text-align:center;">TI1002</td><td style="text-align:center;">°C</td><td style="text-align:center;">100.0</td><td style="text-align:center;">&lt;120.0</td><td style="text-align:center;">压缩机出口温度</td></tr><tr><td style="text-align:center;">06</td><td style="text-align:center;">TI2001</td><td style="text-align:center;">°C</td><td style="text-align:center;">60.0</td><td style="text-align:center;">&gt;30.0</td><td style="text-align:center;">主油箱温度</td></tr><tr><td style="text-align:center;">07</td><td style="text-align:center;">TI2003</td><td style="text-align:center;">°C</td><td style="text-align:center;">60.0</td><td style="text-align:center;">&lt;70.0</td><td style="text-align:center;">压缩机出口润滑油温度</td></tr></tbody></table><h2 id="科目三-作业现场隐患排查" tabindex="-1">科目三-作业现场隐患排查 <a class="header-anchor" href="#科目三-作业现场隐患排查" aria-label="Permalink to &quot;科目三-作业现场隐患排查&quot;">​</a></h2><h3 id="长时间停电" tabindex="-1">长时间停电 <a class="header-anchor" href="#长时间停电" aria-label="Permalink to &quot;长时间停电&quot;">​</a></h3><h4 id="在现场" tabindex="-1">在现场 <a class="header-anchor" href="#在现场" aria-label="Permalink to &quot;在现场&quot;">​</a></h4><ol><li><strong>将压缩机 C101 负荷降为 0%</strong><img src="http://qiniu.yeshan-taoist.cn/20231219201703.png" alt="20231219201703"></li></ol><h4 id="在-dcs-画面中" tabindex="-1">在 DCS 画面中 <a class="header-anchor" href="#在-dcs-画面中" aria-label="Permalink to &quot;在 DCS 画面中&quot;">​</a></h4><ol><li>在<code>往复式压缩机系统</code>画面中，<strong>关闭压缩机出口压力控制 PIC1002</strong><img src="http://qiniu.yeshan-taoist.cn/20231219201952.png" alt="20231219201952"></li></ol><h3 id="冷却水中断" tabindex="-1">冷却水中断 <a class="header-anchor" href="#冷却水中断" aria-label="Permalink to &quot;冷却水中断&quot;">​</a></h3><blockquote><p>同<code>长时间停电</code></p></blockquote><h3 id="润滑油冷却器结垢" tabindex="-1">润滑油冷却器结垢 <a class="header-anchor" href="#润滑油冷却器结垢" aria-label="Permalink to &quot;润滑油冷却器结垢&quot;">​</a></h3><h4 id="在现场-1" tabindex="-1">在现场 <a class="header-anchor" href="#在现场-1" aria-label="Permalink to &quot;在现场&quot;">​</a></h4><ol><li>打开备<strong>用冷却器 E202B 冷却水</strong><code>出水阀 VI2E202</code> 和<code>进水阀 VX2E202</code><img src="http://qiniu.yeshan-taoist.cn/20231219204917.png" alt="20231219204917"></li><li>缓慢打开<strong>备用冷却器 E202B 油路</strong><code>入口阀 E202BI</code><ol><li><code>开度 5%</code>(<strong>绿色小箭头连续点击 5 次</strong>)</li><li><code>开度 10%</code>(<strong>绿色小箭头连续点击 5 次</strong>)</li><li><code>开度 20%</code>(<strong>绿色大箭头点击 1 次</strong>) <img src="http://qiniu.yeshan-taoist.cn/20231219205029.png" alt="20231219205029"></li></ol></li><li>打开<strong>备用冷却器 E202B 油路</strong><code>出口阀 E202B0</code><img src="http://qiniu.yeshan-taoist.cn/20231219213023.png" alt="20231219213023"></li><li>关闭<strong>坏冷却器 E202A 油路</strong><code>入口阀 E202AI</code> 和<code>出口阀 E202A0</code><img src="http://qiniu.yeshan-taoist.cn/20231219213146.png" alt="20231219213146"></li><li>关闭<strong>坏冷却器 E202A 冷却水</strong><code>进水阀 VX1E202</code><img src="http://qiniu.yeshan-taoist.cn/20231219213237.png" alt="20231219213237"></li></ol><h3 id="轴承温度高" tabindex="-1">轴承温度高 <a class="header-anchor" href="#轴承温度高" aria-label="Permalink to &quot;轴承温度高&quot;">​</a></h3><blockquote><p>同<code>润滑油冷却器结垢</code></p></blockquote><h3 id="润滑油压力下降" tabindex="-1">润滑油压力下降 <a class="header-anchor" href="#润滑油压力下降" aria-label="Permalink to &quot;润滑油压力下降&quot;">​</a></h3><h4 id="在现场-2" tabindex="-1">在现场 <a class="header-anchor" href="#在现场-2" aria-label="Permalink to &quot;在现场&quot;">​</a></h4><blockquote><p><strong>操作要点:快速准确</strong></p></blockquote><ol><li><strong>启动<code>备用泵 P201B</code></strong></li><li><strong>关停<code>常用泵 P201A</code></strong></li><li><strong>关闭常用泵 P201A 的<code>入口阀</code>和<code>出口阀</code></strong><img src="http://qiniu.yeshan-taoist.cn/20231219215009.png" alt="20231219215009"></li><li>在 DCS 的<code>往复式压缩机油路系统</code>画面中<strong>观察 <code>P201 回流压力控制 PIC2001</code> 的 <code>PV 值达到 1.100MPa</code> 可以提交</strong><img src="http://qiniu.yeshan-taoist.cn/20231219215044.png" alt="20231219215044"></li></ol><h2 id="科目四-作业现场应急处置" tabindex="-1">科目四-作业现场应急处置 <a class="header-anchor" href="#科目四-作业现场应急处置" aria-label="Permalink to &quot;科目四-作业现场应急处置&quot;">​</a></h2><h3 id="压缩机出口法兰泄漏着火" tabindex="-1">压缩机出口法兰泄漏着火 <a class="header-anchor" href="#压缩机出口法兰泄漏着火" aria-label="Permalink to &quot;压缩机出口法兰泄漏着火&quot;">​</a></h3><h4 id="外操员" tabindex="-1">外操员 <a class="header-anchor" href="#外操员" aria-label="Permalink to &quot;外操员&quot;">​</a></h4><ol><li>巡检时发现事故，立即通过<strong>对讲机向班长报告：往复压缩机 C101 出口法兰泄漏着火</strong></li><li>立即前往中控<strong>佩戴空呼和 F 型扳手</strong></li><li>返回现场</li></ol><h4 id="班长" tabindex="-1">班长 <a class="header-anchor" href="#班长" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>接到外操员报告后，立即通过<strong>广播：往复压缩机出口法兰泄漏着火应急预案</strong></li><li>通过<strong>电话报告调度：往复压缩机 C101 出口法兰泄漏着火，已启动应急预案</strong></li><li>通过<strong>对讲机命令安全员：请组织人员到 1 号门口拉警戒绳</strong></li><li><strong>佩戴空呼和 F 型扳手</strong></li><li>通过<strong>对讲机命令主操：请拨打电话 119 报火警</strong></li></ol><h4 id="主操" tabindex="-1">主操 <a class="header-anchor" href="#主操" aria-label="Permalink to &quot;主操&quot;">​</a></h4><ol><li>通过<strong>电话报火警：往复压缩机 C101 单元压缩机出口法兰处氢气泄漏着火，火势无法控制，请派消防车，报警人张三</strong></li></ol><h4 id="班长-1" tabindex="-1">班长 <a class="header-anchor" href="#班长-1" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>通过<strong>对讲机命令安全员：请组织人员到 1 号门口引导消防车</strong></li><li>通过<strong>对讲机命令主操和外操员：执行紧急停车操作</strong></li></ol><h4 id="主操在中控室内执行紧急停车操作" tabindex="-1">主操在中控室内执行紧急停车操作 <a class="header-anchor" href="#主操在中控室内执行紧急停车操作" aria-label="Permalink to &quot;主操在中控室内执行紧急停车操作&quot;">​</a></h4><blockquote><p>操作位置 <img src="http://qiniu.yeshan-taoist.cn/20240117132734.png" alt="20240117132734"></p><p><img src="http://qiniu.yeshan-taoist.cn/20240117132828.png" alt="20240117132828"></p></blockquote><ol><li>在主控室操作台，<strong>按紧急停车按钮</strong></li><li><strong>将压缩机联锁从 ON 调到 OFF</strong></li><li>关闭<strong>压缩机出口压力控制 <code>PIC1002</code></strong><img src="http://qiniu.yeshan-taoist.cn/20240117140118.png" alt="20240117140118"></li><li>通过<strong>对讲机报告班长：室内操作完毕</strong></li></ol><h4 id="外操员在现场执行紧急停车操作" tabindex="-1">外操员在现场执行紧急停车操作 <a class="header-anchor" href="#外操员在现场执行紧急停车操作" aria-label="Permalink to &quot;外操员在现场执行紧急停车操作&quot;">​</a></h4><ol><li>将<strong>负荷手轮调节到 0</strong><img src="http://qiniu.yeshan-taoist.cn/20240117133543.png" alt="20240117133543"></li><li>关闭<strong>原料入口总阀 <code>VX1C101</code></strong><img src="http://qiniu.yeshan-taoist.cn/20240117133739.png" alt="20240117133739"></li><li>关闭<strong>压缩机出口总阀 <code>VX6C101</code></strong><img src="http://qiniu.yeshan-taoist.cn/20240117133943.png" alt="20240117133943"></li><li>通过<strong>对讲机报告班长：现场操作完毕</strong></li></ol><h4 id="班长-2" tabindex="-1">班长 <a class="header-anchor" href="#班长-2" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>通过<strong>电话向调度汇报：事故处理完毕，请派维修人员进行维修</strong></li><li>通过<strong>广播：解除事故应急预案</strong></li></ol><h3 id="压缩机出口法兰泄漏有人中毒" tabindex="-1">压缩机出口法兰泄漏有人中毒 <a class="header-anchor" href="#压缩机出口法兰泄漏有人中毒" aria-label="Permalink to &quot;压缩机出口法兰泄漏有人中毒&quot;">​</a></h3><h4 id="外操员-1" tabindex="-1">外操员 <a class="header-anchor" href="#外操员-1" aria-label="Permalink to &quot;外操员&quot;">​</a></h4><ol><li>巡检时发现事故，立即通过<strong>对讲机向班长报告：往复压缩机 C101 出口法兰泄漏有人中毒晕倒</strong></li><li>立即前往中控<strong>佩戴空呼和 F 型扳手</strong></li><li>返回现场，立即<strong>对中毒人员实施救护</strong></li></ol><h4 id="班长-3" tabindex="-1">班长 <a class="header-anchor" href="#班长-3" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>接到外操员报告后，立即通过<strong>广播：往复压缩机出口法兰泄漏中毒应急预案</strong></li><li>通过<strong>电话报告调度：往复压缩机 C101 出口法兰泄漏有人中毒晕倒，已启动应急预案</strong></li><li>通过<strong>对讲机命令安全员：请组织人员到 1 号门口拉警戒绳</strong></li><li><strong>佩戴空呼和 F 型扳手</strong></li><li>通过<strong>对讲机命令主操：请拨打电话 120 叫救护车</strong></li></ol><h4 id="主操-1" tabindex="-1">主操 <a class="header-anchor" href="#主操-1" aria-label="Permalink to &quot;主操&quot;">​</a></h4><ol><li>通过<strong>电话报 120：往复压缩机 C101 单元氢气泄漏，有人晕倒在地昏迷不醒，请派救护车，报警李四</strong></li></ol><h4 id="班长-4" tabindex="-1">班长 <a class="header-anchor" href="#班长-4" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>通过<strong>对讲机命令安全员：请组织人员到 1 号门口引导救护车</strong></li><li>通过<strong>对讲机命令主操和外操员：执行紧急停车操作</strong></li></ol><h4 id="主操在中控室内执行紧急停车操作-1" tabindex="-1">主操在中控室内执行紧急停车操作 <a class="header-anchor" href="#主操在中控室内执行紧急停车操作-1" aria-label="Permalink to &quot;主操在中控室内执行紧急停车操作&quot;">​</a></h4><blockquote><p><strong>同&quot;压缩机出口法兰泄漏着火&quot;的紧急停车操作</strong></p></blockquote><ol><li>在主控室操作台，<strong>按紧急停车按钮</strong></li><li><strong>将压缩机联锁从 ON 调到 OFF</strong></li><li>关闭<strong>压缩机出口压力控制 <code>PIC1002</code></strong></li><li>通过<strong>对讲机报告班长：室内操作完毕</strong></li></ol><h4 id="外操员在现场执行紧急停车操作-1" tabindex="-1">外操员在现场执行紧急停车操作 <a class="header-anchor" href="#外操员在现场执行紧急停车操作-1" aria-label="Permalink to &quot;外操员在现场执行紧急停车操作&quot;">​</a></h4><blockquote><p><strong>同&quot;压缩机出口法兰泄漏着火&quot;的紧急停车操作</strong></p></blockquote><ol><li>将<strong>负荷手轮调节到 0</strong></li><li>关闭<strong>原料入口总阀 <code>VX1C101</code></strong></li><li>关闭<strong>压缩机出口总阀 <code>VX6C101</code></strong></li><li>通过<strong>对讲机报告班长：现场操作完毕</strong></li></ol><h4 id="班长-5" tabindex="-1">班长 <a class="header-anchor" href="#班长-5" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>通过<strong>电话向调度汇报：事故处理完毕，请派维修人员进行维修</strong></li><li>通过<strong>广播：解除事故应急预案</strong></li></ol><h3 id="压缩机出口压力控制阀后法兰泄漏中毒" tabindex="-1">压缩机出口压力控制阀后法兰泄漏中毒 <a class="header-anchor" href="#压缩机出口压力控制阀后法兰泄漏中毒" aria-label="Permalink to &quot;压缩机出口压力控制阀后法兰泄漏中毒&quot;">​</a></h3><h4 id="外操员-2" tabindex="-1">外操员 <a class="header-anchor" href="#外操员-2" aria-label="Permalink to &quot;外操员&quot;">​</a></h4><ol><li>巡检时发现事故，立即通过<strong>对讲机向班长报告：往复压缩机 C101 出口压力控制阀后阀法兰泄漏有人中毒</strong></li><li>立即前往中控<strong>佩戴空呼和 F 型扳手</strong></li><li>返回现场，立即<strong>对中毒人员实施救护</strong></li></ol><h4 id="班长-6" tabindex="-1">班长 <a class="header-anchor" href="#班长-6" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>接到外操员报告后，立即通过<strong>广播：往复压缩机出口压力控制阀后阀法兰泄漏中毒应急预案</strong></li><li>通过<strong>电话报告调度：往复压缩机 C101 出口压力调节阀后阀法兰泄漏有人中毒，已启动应急预案</strong></li><li>通过<strong>对讲机命令安全员：请组织人员到 1 号门口拉警戒绳</strong></li><li><strong>佩戴空呼和 F 型扳手</strong></li><li>通过<strong>对讲机命令主操：请拨打电话 120 叫救护车</strong></li></ol><h4 id="主操-2" tabindex="-1">主操 <a class="header-anchor" href="#主操-2" aria-label="Permalink to &quot;主操&quot;">​</a></h4><ol><li>通过<strong>电话报 120：往复压缩机 C101 单元氢气泄漏，有人晕倒在地昏迷不醒，请派救护车，报警李四</strong></li></ol><h4 id="班长-7" tabindex="-1">班长 <a class="header-anchor" href="#班长-7" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>通过<strong>对讲机命令安全员：请组织人员到 1 号门口引导救护车</strong></li><li>通过<strong>对讲机命令主操和外操员：执行紧急停车操作</strong></li></ol><h4 id="主操在中控室内执行紧急停车操作-2" tabindex="-1">主操在中控室内执行紧急停车操作 <a class="header-anchor" href="#主操在中控室内执行紧急停车操作-2" aria-label="Permalink to &quot;主操在中控室内执行紧急停车操作&quot;">​</a></h4><blockquote><p><strong>同&quot;压缩机出口法兰泄漏着火&quot;的紧急停车操作</strong></p></blockquote><ol><li>在主控室操作台，<strong>按紧急停车按钮</strong></li><li><strong>将压缩机联锁从 ON 调到 OFF</strong></li><li>关闭<strong>压缩机出口压力控制 <code>PIC1002</code></strong></li><li>通过<strong>对讲机报告班长：室内操作完毕</strong></li></ol><h4 id="外操员在现场执行紧急停车操作-2" tabindex="-1">外操员在现场执行紧急停车操作 <a class="header-anchor" href="#外操员在现场执行紧急停车操作-2" aria-label="Permalink to &quot;外操员在现场执行紧急停车操作&quot;">​</a></h4><blockquote><p><strong>同&quot;压缩机出口法兰泄漏着火&quot;的紧急停车操作</strong></p></blockquote><ol><li>将<strong>负荷手轮调节到 0</strong></li><li>关闭<strong>原料入口总阀 <code>VX1C101</code></strong></li><li>关闭<strong>压缩机出口总阀 <code>VX6C101</code></strong></li><li>通过<strong>对讲机报告班长：现场操作完毕</strong></li></ol><h4 id="班长-8" tabindex="-1">班长 <a class="header-anchor" href="#班长-8" aria-label="Permalink to &quot;班长&quot;">​</a></h4><ol><li>通过<strong>电话向调度汇报：事故处理完毕，请派维修人员进行维修</strong></li><li>通过<strong>广播：解除事故应急预案</strong></li></ol>',76),r=[o];function i(s,d,c,g,h,u){return e(),l("div",null,r)}const b=t(n,[["render",i]]);export{q as __pageData,b as default};