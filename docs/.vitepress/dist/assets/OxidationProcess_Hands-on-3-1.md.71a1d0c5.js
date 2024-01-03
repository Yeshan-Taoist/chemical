import{_ as a,o as t,c as e,V as l}from"./chunks/framework.55251076.js";const x=JSON.parse('{"title":"科目三-离心泵","description":"","frontmatter":{},"headers":[],"relativePath":"OxidationProcess/Hands-on-3-1.md","filePath":"OxidationProcess/Hands-on-3-1.md","lastUpdated":1691908094000}'),i={name:"OxidationProcess/Hands-on-3-1.md"},r=l('<h1 id="科目三-离心泵" tabindex="-1">科目三-离心泵 <a class="header-anchor" href="#科目三-离心泵" aria-label="Permalink to &quot;科目三-离心泵&quot;">​</a></h1><h2 id="工艺介绍" tabindex="-1">工艺介绍 <a class="header-anchor" href="#工艺介绍" aria-label="Permalink to &quot;工艺介绍&quot;">​</a></h2><h3 id="工艺流程" tabindex="-1">工艺流程 <a class="header-anchor" href="#工艺流程" aria-label="Permalink to &quot;工艺流程&quot;">​</a></h3><p>来自界区的 40°C 带压液体经调节阀 LV1001 进入原料罐 D101，D101 压力由调节器 PIC1001 分程控制在 0.5MpaG，当压力高于 0.5MpaG，调节阀 PV1001B 打开泄压:当压力低于 0.5MpaG，调节阀 PV1001A 打开充压。D101 液位由调节器 LIC1001 控制进料量维持在 50%，液体经 P101A/B 送至界区外，泵出口流量由调节器 FIC1001 控制在 20000kg/h。</p><h3 id="工艺设备" tabindex="-1">工艺设备 <a class="header-anchor" href="#工艺设备" aria-label="Permalink to &quot;工艺设备&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">位号</th><th style="text-align:center;">名称</th></tr></thead><tbody><tr><td style="text-align:center;">01</td><td style="text-align:center;">D-101</td><td style="text-align:center;">原料罐</td></tr><tr><td style="text-align:center;">02</td><td style="text-align:center;">P101A</td><td style="text-align:center;">原料泵</td></tr><tr><td style="text-align:center;">03</td><td style="text-align:center;">P101B</td><td style="text-align:center;">备用泵</td></tr></tbody></table><h3 id="流程简图" tabindex="-1">流程简图 <a class="header-anchor" href="#流程简图" aria-label="Permalink to &quot;流程简图&quot;">​</a></h3><p><img src="http://qiniu.yeshan-taoist.cn/20230520220817.png" alt="20230520220817"></p><h3 id="现场简图" tabindex="-1">现场简图 <a class="header-anchor" href="#现场简图" aria-label="Permalink to &quot;现场简图&quot;">​</a></h3><p><img src="http://qiniu.yeshan-taoist.cn/20230520221438.png" alt="20230520221438"></p><h2 id="实操项目" tabindex="-1">实操项目 <a class="header-anchor" href="#实操项目" aria-label="Permalink to &quot;实操项目&quot;">​</a></h2><h3 id="一、长时间停电" tabindex="-1">一、长时间停电 <a class="header-anchor" href="#一、长时间停电" aria-label="Permalink to &quot;一、长时间停电&quot;">​</a></h3><ol><li>关闭常用泵出口阀</li><li>出料流量调节阀改为手动 (MAN)</li><li>关闭出料流量调节阀，即控制开度 (OP) 为 0</li><li>关闭出料流量调节阀前后手阀</li><li>液位调节阀改为手动 (MAN)</li><li>关闭液位调节阀，即控制开度 (OP) 为 0</li><li>关闭液位调节阀前后手阀</li></ol><h3 id="二、原料泵坏" tabindex="-1">二、原料泵坏 <a class="header-anchor" href="#二、原料泵坏" aria-label="Permalink to &quot;二、原料泵坏&quot;">​</a></h3><ol><li>启用备用泵</li><li>在备用泵出口压力大于 0.72Mpa 的情况下打开其出口阀</li><li>关闭事故泵出口阀和入口阀</li><li>打开事故泵排液阀</li><li>出料流量调节阀改为手动 (MAN)，控制开度 (OP) 为 50</li><li>等待几秒，出口流量调节阀改为自动 (AUTO)，控制设定值 (SP) 为 20000</li><li>等待备用泵入口压力达到 0.475Mpa，出口压力达到 1.5Mpa，出口流量测量值 (PV) 控制在 20000Kg/h</li></ol><h3 id="三、原料泵抽空" tabindex="-1">三、原料泵抽空 <a class="header-anchor" href="#三、原料泵抽空" aria-label="Permalink to &quot;三、原料泵抽空&quot;">​</a></h3><ol><li>打开事故泵排气阀</li><li>出料流量调节阀改为手动 (MAN)，控制开度 (OP) 为 50</li><li>等待事故泵入口压力接近 0.475Mpa，出口压力接近 1.5Mpa</li><li>满足上述条件后，关闭事故泵排气阀</li></ol><h3 id="四、入口管线堵" tabindex="-1">四、入口管线堵 <a class="header-anchor" href="#四、入口管线堵" aria-label="Permalink to &quot;四、入口管线堵&quot;">​</a></h3><ol><li>启用备用泵</li><li>在备用泵出口压力达到 0.72Mpa 的情况下打开其出口阀</li><li>关闭事故泵出口阀</li><li>停用事故泵</li><li>关闭事故泵入口阀</li><li>出料流量调节阀改为手动 (MAN)，控制开度 (OP) 为 50</li><li>等待几秒，出口流量调节阀改为自动 (AUTO)，控制设定值 (SP) 为 20000</li><li>等待备用泵入口压力达到 0.475Mpa，出口压力达到 1.5Mpa，出口流量测量值 (PV) 控制在 20000Kg/h</li><li>在快速准确的完成上述步骤后，控制在考试限制时间前 1~2 分钟提交，利于获得高分</li></ol><h3 id="五、出料流量调节阀阀卡" tabindex="-1">五、出料流量调节阀阀卡 <a class="header-anchor" href="#五、出料流量调节阀阀卡" aria-label="Permalink to &quot;五、出料流量调节阀阀卡&quot;">​</a></h3><ol><li>打开出料流量调节阀旁路阀，控制开度为 50</li><li>关闭出料流量调节阀前后手阀</li><li>等待出口流量测量值 (PV) 达到 20000Kg/h</li><li>在快速准确的完成上述操作步骤后，控制在考试限制时间前 1~2 分钟提交，利于获得高分</li></ol>',21),n=[r];function o(h,d,s,c,P,p){return t(),e("div",null,n)}const b=a(i,[["render",o]]);export{x as __pageData,b as default};