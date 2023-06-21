import{_ as t,o as l,c as e,V as i}from"./chunks/framework.6fc38dc5.js";const R=JSON.parse('{"title":"科目三-釜式反应器","description":"","frontmatter":{},"headers":[],"relativePath":"Oxidation-process/Hands-on-3-3.md","filePath":"Oxidation-process/Hands-on-3-3.md","lastUpdated":1686133113000}'),n={name:"Oxidation-process/Hands-on-3-3.md"},r=i('<h1 id="科目三-釜式反应器" tabindex="-1">科目三-釜式反应器 <a class="header-anchor" href="#科目三-釜式反应器" aria-label="Permalink to &quot;科目三-釜式反应器&quot;">​</a></h1><h2 id="工艺介绍" tabindex="-1">工艺介绍 <a class="header-anchor" href="#工艺介绍" aria-label="Permalink to &quot;工艺介绍&quot;">​</a></h2><h3 id="工艺流程" tabindex="-1">工艺流程 <a class="header-anchor" href="#工艺流程" aria-label="Permalink to &quot;工艺流程&quot;">​</a></h3><ul><li>聚合反应在两台反应器内发生，这两台反应器可以是串联 (K2，MB 模式)或者是并联 (K1 模式），反应温度为 76-85°C，反应压力在 2.6-9bar 之间。</li><li>通过 R2 后，悬浮液进入到后反应器 R204，将剩余的乙烯转换，然后通过 P301 泵入到离心机进料罐系统。淤浆通过 P302 泵出外界继续进行分离。</li></ul><h4 id="综述" tabindex="-1">综述 <a class="header-anchor" href="#综述" aria-label="Permalink to &quot;综述&quot;">​</a></h4><p>聚合反应是在两个 229m3 的反应器 R201/R202 中进行的。 所有反应器均装有 5 +1 阶搅拌奖，转速大约为 128rpm。 聚合反应剧烈放热，因此需要较强的冷却系统 (880 - 900kcal/kg 乙烯） 。反应器设有盘绕夹套管，并且每个反应器都有两个外冷却器。后者可以带走 80%的反应热。 乙烯、共聚单体、H2、催化剂、活化剂、己烷和回收的母液连续由底部进入反应器。聚合反应迅速发生。单程的总转化率 （包括后反应器 R204) 高于 99%，因此不需要乙烯的再循环步骤。HDPE 悬浮液占反应器体积的 90 - 95%，液位控制 (LIC2101/2201) 主要是利用放射性的方法来测量。 聚乙烯悬浮液在聚合压力及淤浆泵的作用下，离开了由液位控制的的反应器，被送至后反应器 R204。 反应器可能在并联的条件下运行，例如在同样的聚合条件下操作。这是指 K1 工这种工艺可以得到窄分子量分布的产品，以满足特定的需求。 另外，两个反应器也可能在不同的聚合条件下串联运行，即 K2 或者 BM 工艺。如果要获得宽分子量分布的产品，可以采用这两种聚合工艺，而 BM 工艺能生产分子量分布更宽的产品。 在 BM 工艺中，在聚合物悬浮液进入第二反应器 R202 之前，在闪蒸罐 V201 中通过对聚合物悬浮液减压，除去过量的 H2。这一步非常必要的，因为在 BM 工艺中 R202 必须要生产出极高分子量的 HDPE，所以必须避免过量的 H2 的存在</p><h4 id="命名" tabindex="-1">命名 <a class="header-anchor" href="#命名" aria-label="Permalink to &quot;命名&quot;">​</a></h4><p>工艺命名来源于其历史背景。 在 K1 工艺中，两个反应器在平行连续的模式下连续运行，不投用闪蒸罐 BM 工艺是两个反应器串联在一起连续运行，并投用闪蒸罐</p><h4 id="反应参数" tabindex="-1">反应参数 <a class="header-anchor" href="#反应参数" aria-label="Permalink to &quot;反应参数&quot;">​</a></h4><ol><li>乙烯供给 所有的聚合配方都是基于一定的单体流速的。因此为了保证熔融指数稳定和产品质量，反应必须依照反应配方中的乙烯供应速率进行。 从技术上讲，每个反应器可以在很低的产率下运行，大约 6 - 11 吨/小时，在这种低范围的生产速率下，仪器控制回路的精确度将是唯一的制约因素。 在高生产率下，乙烯的进料速率受反应系统冷却能力的制约。其它制约因素是增加催化剂的消耗和排放气流量。这是因为在高进料量的条件下，反应物的停留时间减小的结果。</li><li>己烷/乙烯 比率 （相比） 反应系统需要的己烷和乙烯的相比大小主要是依据由各种催化剂生产的 HDPE 粉料的形态而定，大约每吨乙烯要 3.3 - 5.5m3 己烷。 相比率过低，就会在反应器中导致热传递问题和不均质问题，并目非常容易使县浮液泵和悬浮液管线堵塞。 如果相比率过高，则乙烯在反应器中的停留时间减少，结果使催化剂/活化剂消耗的量增加。另一个不利情况是它使得沉降式离心机 S2101A/B/C 由于负载过大而导致效率降低。</li><li>共聚单体的供给 丁烯在经过 FIC2104/FIC2204 之后接入乙烯管线，并同乙烯一起进入反应器。经过丁烯管线上的质量流量计 FIC2104/2120/2204/2220 处的压力必须足够高，以避免丁烯部分蒸发而造成不准确的共聚单体的计量 （丁烯压力最小要高于 6 bar a) 通过 AR2103/AR2203 来调节丁烯的进料量以控制反应器中气相丁烯的浓度。 根据不同的 HDPE 产品牌号，共聚单体的量大约为 0.15 - 40 升/吨乙烯。由于数量跨度非常大，两个反应器需要两个独立的控制回路来满足不同的流量测量范围。</li><li>H2 的供给 H2 也是在 FIC2101/2 ，FIC2201/2 之后接入乙烯管线，进而进入反应器。 供给速率可以手动设定，也可以由 H2 分压与乙烯分压比来自动控制 (Q=PH2/PC2H4) 。分压根据在调整好的反应器的气相中的分析仪 (AR2102/AR2202) 和乙烯分析仪 (AR2101/AR2201) 计算得出。 H2 的流量的控制主要是由热质量流量测量仪表 FIC2101/2102/2201/2202 来完成由于所需的数量变化很大 (2 - 25Nm3/t 烯） 并且流量控制必须尽可能精确的。每一反应器均要有两个不同流量范围的流量控制回路。</li><li>己烷/母液 比率 由沉降式离心机从 HDPE 粉料分离出的母液应送回到反应器 R201/R202。 母液是可以获得的最洁净的己烷，含有一些杂质如水分、氧、二氧化碳等，并且仍含有 0.5 - 1.0mmole/L 的活化剂，这些活化剂可以在蒸馏单元除去。此外，提高母液的循环量可以明显减小蜡损失。因为，在母液系统中已经建立了一定的蜡浓度。在离心机进料罐 V301 中，在比较合适的温度下，其余的蜡将沉积在 HDPE 粉料上。 无论如何，对于特定的低密级聚乙烯，母液的完全回收是不可能的。这是由于质量的原因或蜡的浓度过高会导致母液系统的机械问题。</li><li>催化剂供给 催化剂悬浮液以一定的速率流入反应器，这样可使反应器压力范围同聚合配方相司 进料速率可以手动设定，也可以由反应器气相分析计算出的乙烯分压（通过 AR2102/AR2202) 来进行自动控制。 催化剂的供应是由催化剂的定量给料泵 P101A/B 同新鲜己烷物流 (FIC2105/FIC2205) 一起进入 R201/R202。用新鲜的己烷管线是将催化剂悬浮液注入反应器的较好的办法。如果催化刘悬浮液同母液同时注入 (FIC2113/FIC2213) 可能会导致预聚合并堵塞母液管线。 反应器中催化剂浓度的增加，将加速聚合反应速率并且减小反应压力。催化剂浓度降低将减小聚合速率并使反应器压力上升。 考虑到 BM 工艺只有反应器 R201 中加入了催化剂，而在从 R201 流入 R202 的淤浆中，仍有活性的粒子能够保证 R202 中的聚合反应。</li><li>活化剂的供给 经过计量的新鲜的活化剂和母液中的活化剂一起输送至反应系统，反应系统中活化剂的浓度 （依据不同的 HDPE 级的聚合配方） 保持不同的恒定值。 对所有的 K1 工艺，活化剂最好由活化剂计量泵 P102A/B 供给。注入点在母液泵 P2101A/B 的出口至反应器 R201/R202 的母液管线上。 反应器中活化剂的浓度应比配方给出的值略高。活化剂浓度低，将使催化剂活性迅速降低（导致高反应压力低熔指产品） ，并且不能通过增加催化剂的量和 H2 浓度来调整。某些催化剂/活化剂的组合，在装置聚合条件下，过度活化也是不可能的。其它的组合，当活化剂过量时也会造成催化活性迅速降低。最佳的活化剂浓度是由聚合系统的洁净程度决定的，因此，不同的 HDPE 厂的活化剂浓度是不同的。</li><li>反应器压力 对于所有 K1 工艺的反应器和 BM 工艺中的 R201，反应器压力正常控制在 8 -10barG。其限制因素是反应器的设计压力，以及单体、共聚单体、H2 的界区压力 在此，反应器压力是由催化剂活性控制的。实际上，反应器压力是根据每一聚合配方反应器气相中的 H2/亿烯比率来控制排放释放到后反应器 R204 气体的流量来实现的。</li><li>反应器温度 依据不同产品的聚合配方，反应器的温度大约在 76 - 86C。温度波动大约在 0.5°C，温度会严重影响产品的熔指和聚合速率。 反应允许的温度范围是受限制的，较低温度导致聚合速率的降低，温度过高则增加蜡的产生量。无论如何，反应器的温度不能超过 90°C，因为在这一温度下，HDPE 粉料将开始变软、粘结。这会便反应器的情况十分糟糕，反应温度将不能控制。</li></ol><h4 id="工艺控制基础" tabindex="-1">工艺控制基础 <a class="header-anchor" href="#工艺控制基础" aria-label="Permalink to &quot;工艺控制基础&quot;">​</a></h4><ol><li>聚合速率 由上面的说明可知，聚合速率由催化剂浓度控制。根据聚合配方，乙烯在反应器中的气相分压受催化剂浓度的限制，将保持在很高很窄的范围内。乙烯的分压范围主要是基于反应器的压力不要过高这点来确定的。例如，反应器没有气体排放。 对聚合反应速率控制的方法表明所有能够影响聚合速率的参数 （例如反应器温度）都应保持恒定。</li><li>平均分子量 HDPE 粉料的平均分子量与反应器中气相中 H2 的分压有关，分压主要是通过反应器分析器 (AR2101/AR2201) 测定 H2 的浓度，并自动换算成 H2 的分压。 在聚合反应配方中 H2/C2H4 在聚合反应器气相中的比率是非常重要的。这一比例必须在配方规定的确定范围内。反应器中正常的聚合条件是保证生产合格产品的先决条件。 通过控制反应器中 H2 进料量可以使反应器气相中 H2 的分压保持恒定。无论如何，如果反应器 R202 同 R201 串联，H2 分压依据配方通过改变闪蒸罐 V201 或这个反应器的气体排放速率来调整。 这种控制分子量的方法必须保证反应器其它的参数不变</li><li>分子量分布 熔体的流动速率作为表示聚合物分子量的粗略指标，对于 HOSTALEN 装置，在通常情况下，测定 MFR21.6/MFR5.0 比值来计算流动速率比 (FRR)，作为分子量分布的表示方法。 首先，分子量分布受催化剂/活化剂体系和所选工艺的影响。在催化剂制备的最后步中，三价钦的还原程度对分子量分布也有影响。尤其在 THT-BM 工艺生产条件下，通过调节乙烯的 R201、R202 的进料速率来最后调整 MFR-值以适应市场需要，这是非常有效的。例如，在生产管材产品时，聚合配方要求 47%的乙烯进料供给反应器 R201，53%供给 R202。这个比例可以依据每天的情况在 1%范围内进行变动。</li><li>密度 HDPE 的均聚物的密度主要由分子量分布以及共聚单体的含量和材料的结晶度决定。举两个例子，材料 (0.5Kg 负载）的熔融指数是 0.1，那么，他的密度大约为 0.953q/ cm3; 材料的熔融指数是 55，那么它的密度大约是 0.964g/ cm3。产品的密度主要是在乙烯中加入少量作为共聚单体的丁烯进行聚合来调节。由于增加共聚单体的浓度会导致反应器中产生大量的蜡，ZIEGLER 淤浆聚合工艺所生产的产品密度不会低于 0.940g/cm3。由于共聚合速率非常低，所以丁烯必须过量。这样母液系统中未文应的丁烯浓度非常大。丁烯与母液一同循环回反应器，当调整反应器新鲜丁烯的供给速率时，应考虑这部分丁烯。</li></ol><h4 id="后反应器-r204" tabindex="-1">后反应器 R204 <a class="header-anchor" href="#后反应器-r204" aria-label="Permalink to &quot;后反应器 R204&quot;">​</a></h4><p>HDPE 悬浮液离开液位控制 (LIC2101/2201) 的反应器 R201/R202 被送至后反应器 R204。R204 为两个反应器所共用。由于反应器液位非常重要（例如，无论如何必须避免淤浆物料溢流到排放气系统），所以安装放射性感应器来进行液位控制。对于催化剂系统间歇的 HDPE 悬浮液从 R201/R202 排到后反应器 R204 的供应是非常好的方法。因为，由经验得知，在输送管线中粉料的沉积和后聚合会减少，其他的催化剂系统采用连续的液位控制。 此外，LV2101/LV2201 必须安装在悬浮液输送管线中的最高点，以防止沉积的粉料堵塞阀门。 在后反应器 R204 中，一部分在 R201/R202 中未反应的乙烯继续发生聚合。THE 产品的后反应可能不会发生，而对于 Z501 产品，乙烯的转化率据估计大约为 0.5- 1.5% 后反应器的温度控制要依据配方，压力大约比 1barg 略低一点，这样可以使催化剂悬浮液从反应系统流至后反应器。 后反应器 R204 的所有排放气都经过 PIC2302。为了冷凝排放气中的己烷，在将它送至丁烯回收塔之前先经过冷凝器 E303，离心机进料罐 V301。 排放气的组成很大程度上依赖于聚合物的牌号。典型值是可能含有大约 50 - 60%(vol) N2，这是已烷和母液中所溶解的。5 - 10% (vol) H2，5 - 15% (vol) 乙烷，5 - 15% (vol) 乙烯。乙烷主要是 H2 和乙烯所形成的。因此，乙烷和乙烯在不同情况下大约占乙烯总进料量的 0.25 - 0.35% (wt) 。己烷蒸汽达到平衡。 后反应器的液位由 LIC2301 控制。考虑到准确可靠，它采用放射性传感器。聚合物悬浮液由泵 P301A/B 通过悬浮液冷却器 E301 泵入离心机进料罐 V301。一部分液流被循环到泵 P301A/B 的入口以提高水冷系统的效率。</p><h4 id="离心机进料罐-v301" tabindex="-1">离心机进料罐 V301 <a class="header-anchor" href="#离心机进料罐-v301" aria-label="Permalink to &quot;离心机进料罐 V301&quot;">​</a></h4><p>离心机进料罐 V301 由 N2 保护，并且由 PIC3103 将压力控制在 0.5barG。当产品的流动在己烷分离和干燥单元发生短时间故障而暂时中止时，离心机进料罐 V301 可对高聚物悬浮液起到缓冲作用。因此，通常其液位控制较低 (20 - 30%)，如果悬浮液流速为 170 - 220m3/h，离心机进料罐 V1301 可利用体积是 220m3，它能缓解 40 - 50 分钟的后部系统故障 更重要的是，在离心机进料罐 V301 中，在聚合工艺中形成的蜡必须尽可能沉积在 HDPE 产品上，为了使蜡的沉积效果最佳，悬浮液最少要停留 20 - 30 分钟，并且在罐中悬浮液温度为~37°C。 蜡的沉淀不足就会导致母液系统中蜡的含量高。这就使供给到聚合部分的母液量减少，就会造成活化剂和蜡的损失。 在 BM 工艺中，在聚合物悬浮液进入第二反应器 R202 之前，在闪蒸罐 V201 中通过对聚合物悬浮液减压，除去过量的 H2。这一步非常必要的，因为在 BM 工艺中 R202 必须要生产出极高分子量的 HDPE，所以必须避免过量的 H2 的存在。</p><h3 id="工艺设备" tabindex="-1">工艺设备 <a class="header-anchor" href="#工艺设备" aria-label="Permalink to &quot;工艺设备&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">位号</th><th style="text-align:center;">名称</th><th style="text-align:center;">序号</th><th style="text-align:center;">位号</th><th style="text-align:center;">名称</th></tr></thead><tbody><tr><td style="text-align:center;">01</td><td style="text-align:center;">D-101</td><td style="text-align:center;">己烷储罐</td><td style="text-align:center;">13</td><td style="text-align:center;">R201</td><td style="text-align:center;">第一反应器</td></tr><tr><td style="text-align:center;">02</td><td style="text-align:center;">P101A/B</td><td style="text-align:center;">活化剂（助催化剂） 进料泵</td><td style="text-align:center;">14</td><td style="text-align:center;">R202</td><td style="text-align:center;">第二反应器</td></tr><tr><td style="text-align:center;">03</td><td style="text-align:center;">P102A/B</td><td style="text-align:center;">催化剂进料泵</td><td style="text-align:center;">15</td><td style="text-align:center;">R204</td><td style="text-align:center;">后反应器</td></tr><tr><td style="text-align:center;">04</td><td style="text-align:center;">P103A/B</td><td style="text-align:center;">己烷泵</td><td style="text-align:center;">16</td><td style="text-align:center;">V201</td><td style="text-align:center;">闪蒸罐</td></tr><tr><td style="text-align:center;">05</td><td style="text-align:center;">P105A/B</td><td style="text-align:center;">冲洗己烷进料泵</td><td style="text-align:center;">17</td><td style="text-align:center;">E201A/B</td><td style="text-align:center;">第一反应器外部冷却器</td></tr><tr><td style="text-align:center;">06</td><td style="text-align:center;">P104A/B</td><td style="text-align:center;">己烷进料泵</td><td style="text-align:center;">18</td><td style="text-align:center;">E202A/B</td><td style="text-align:center;">第二反应器外部冷却器</td></tr><tr><td style="text-align:center;">07</td><td style="text-align:center;">P201A/B</td><td style="text-align:center;">第一反应器悬浮物循环泵</td><td style="text-align:center;">19</td><td style="text-align:center;">E210</td><td style="text-align:center;">第一反应器加热器</td></tr><tr><td style="text-align:center;">08</td><td style="text-align:center;">P202A/B</td><td style="text-align:center;">第二反应器悬浮物循环泵</td><td style="text-align:center;">20</td><td style="text-align:center;">E211</td><td style="text-align:center;">第二反应器加热器</td></tr><tr><td style="text-align:center;">09</td><td style="text-align:center;">P204</td><td style="text-align:center;">闪蒸罐泵</td><td style="text-align:center;">21</td><td style="text-align:center;">E301</td><td style="text-align:center;">悬浮液冷却器</td></tr><tr><td style="text-align:center;">10</td><td style="text-align:center;">P208</td><td style="text-align:center;">第一反应器夹套水泵</td><td style="text-align:center;">22</td><td style="text-align:center;">A201</td><td style="text-align:center;">第一反应器搅拌器</td></tr><tr><td style="text-align:center;">11</td><td style="text-align:center;">P209</td><td style="text-align:center;">第二反应器夹套水泵</td><td style="text-align:center;">23</td><td style="text-align:center;">A202</td><td style="text-align:center;">第二反应器搅拌器</td></tr><tr><td style="text-align:center;">12</td><td style="text-align:center;">P301A/B</td><td style="text-align:center;">悬浮液泵</td><td style="text-align:center;">24</td><td style="text-align:center;">A204</td><td style="text-align:center;">后反应器搅拌器</td></tr></tbody></table><h3 id="流程简图" tabindex="-1">流程简图 <a class="header-anchor" href="#流程简图" aria-label="Permalink to &quot;流程简图&quot;">​</a></h3><h4 id="聚合-i" tabindex="-1">聚合 I <a class="header-anchor" href="#聚合-i" aria-label="Permalink to &quot;聚合 I&quot;">​</a></h4><p><img src="http://qiniu.yeshan-taoist.cn/20230529185426.png" alt="20230529185426"></p><h4 id="聚合-ii" tabindex="-1">聚合 II <a class="header-anchor" href="#聚合-ii" aria-label="Permalink to &quot;聚合 II&quot;">​</a></h4><p><img src="http://qiniu.yeshan-taoist.cn/20230529185457.png" alt="20230529185457"></p><h4 id="聚合-iii" tabindex="-1">聚合 III <a class="header-anchor" href="#聚合-iii" aria-label="Permalink to &quot;聚合 III&quot;">​</a></h4><p><img src="http://qiniu.yeshan-taoist.cn/20230529185523.png" alt="20230529185523"></p><h4 id="反应物收集系统" tabindex="-1">反应物收集系统 <a class="header-anchor" href="#反应物收集系统" aria-label="Permalink to &quot;反应物收集系统&quot;">​</a></h4><p><img src="http://qiniu.yeshan-taoist.cn/20230529185546.png" alt="20230529185546"></p><h4 id="原料供给系统" tabindex="-1">原料供给系统 <a class="header-anchor" href="#原料供给系统" aria-label="Permalink to &quot;原料供给系统&quot;">​</a></h4><p><img src="http://qiniu.yeshan-taoist.cn/20230529185616.png" alt="20230529185616"></p><h3 id="现场简图" tabindex="-1">现场简图 <a class="header-anchor" href="#现场简图" aria-label="Permalink to &quot;现场简图&quot;">​</a></h3><ul><li><img src="http://qiniu.yeshan-taoist.cn/20230529185329.png" alt="20230529185329"></li><li><img src="http://qiniu.yeshan-taoist.cn/20230529203224.png" alt="20230529203224"></li></ul><h2 id="实操项目" tabindex="-1">实操项目 <a class="header-anchor" href="#实操项目" aria-label="Permalink to &quot;实操项目&quot;">​</a></h2><h3 id="一、长时间停电" tabindex="-1">一、长时间停电 <a class="header-anchor" href="#一、长时间停电" aria-label="Permalink to &quot;一、长时间停电&quot;">​</a></h3><ol><li><p>在<code>聚合II</code>画面中，关闭共聚单体进料 R202 的丁烯进料阀<strong>FIC2204</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529191658.png" alt="20230529191658"></li></ul></li><li><p>在<code>聚合I</code>画面中，关闭气体分析器阀门 <strong>TV2107B</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529192056.png" alt="20230529192056"></li></ul></li><li><p>在<code>聚合II</code>画面中，关闭气体分析器阀门 <strong>TV2207B</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529192607.png" alt="20230529192607"></li></ul></li><li><p>在<code>聚合I</code>画面中，关闭 <strong>R201</strong>底部的氢气进料调节阀 <strong>FIC2101</strong> 和 <strong>FIC2102</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529193828.png" alt="20230529193828"></li></ul></li><li><p>在<code>聚合I</code>和<code>聚合II</code>画面中，分别关闭反应器 <strong>R201</strong> 和 <strong>R202</strong> 底部的乙烯进料调节阀 <strong>FIC2103</strong> 和 <strong>FIC2203</strong></p><ul><li>如图位置 -<img src="http://qiniu.yeshan-taoist.cn/20230529194319.png" alt="20230529194319"></li></ul></li><li><p>在<code>聚合I</code>画面中，关闭反应器 <strong>R201</strong> 底部手动乙烯进料阀 <strong>HV2104</strong>，避免 PES 回流入乙烯管线</p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529194640.png" alt="20230529194640"></li></ul></li><li><p>在<code>聚合I</code>画面中，关闭反应器 <strong>R201</strong> 底部母液进料调节阀 <strong>FIC2113</strong> 和己烷进料调节阀 <strong>FIC2106</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529195112.png" alt="20230529195112"></li></ul></li><li><p>在<code>聚合II</code>画面中，关闭反应器 <strong>R202</strong> 底部母液进料调节阀 <strong>FIC2213</strong></p><ul><li>同<code>聚合I</code>画面中的位置</li></ul></li><li><p>在<code>聚合I</code>画面中，关闭反应器 <strong>R202</strong> 底部己烷进料调节阀 <strong>FIC2105</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529200240.png" alt="20230529200240"></li></ul></li><li><p>在现场，关闭<strong>活化剂（助催化剂） 进料泵 P101A/B</strong>至 R201 的最后一道阀门 <strong>VI1R201</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529202238.png" alt="20230529202238"></li></ul></li><li><p>在现场，关闭<strong>催化剂进料泵 P102A/B</strong>至 R201 的最后一道阀门 <strong>VI2R201</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529203645.png" alt="20230529203645"></li></ul></li><li><p>在<code>聚合I</code>和<code>聚合II</code>画面中，分别打开 <strong>HV2103</strong> 和 <strong>HV2203</strong> 对反应器 <strong>R201</strong> 和 <strong>R202</strong> 泄压</p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529204007.png" alt="20230529204007"></li></ul></li><li><p>在<code>聚合I</code>画面中，关闭<strong>第一反应器(R201)悬浮物循环泵 P201A/B</strong>的入口阀 <strong>HV2101</strong> 和 <strong>HV2102</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529204918.png" alt="20230529204918"></li></ul></li><li><p>在<code>反应物收集系统</code>画面中，分别打开 <strong>HV3101</strong> 和 <strong>HV3111</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529205353.png" alt="20230529205353"></li></ul></li><li><p>在现场，打开 V301 底部的下料线阀门 <strong>VI3V301</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529205630.png" alt="20230529205630"></li></ul></li><li><p>在现场，打开<strong>第一反应器(R201)悬浮物循环泵 P201A/B</strong>的入口卸料阀 <strong>VI8R201</strong> 和 <strong>VI9R201</strong>，将 <strong>R201</strong> 外循环的物料全部退至沉降式离心机进料罐 <strong>V301</strong> 中，将这两个阀门<strong>再关闭</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529210418.png" alt="20230529210418"></li></ul></li><li><p>在现场，打开 <strong>R201</strong> 底部的退料阀门 <strong>VI4R201</strong>，将 <strong>R201</strong> 的物料全部退至沉降式离心机进料罐 <strong>V301</strong> 中,等待 <strong>R201</strong> 中的物料全部退入 <strong>V301</strong> 中关闭此阀门</p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529211253.png" alt="20230529211253"></li></ul></li><li><p>在<code>聚合II</code>画面中，关闭<strong>第二反应器(R202)悬浮物循环泵 P202A/B</strong>的入口阀 <strong>HV2201</strong> 和 <strong>HV2202</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529211858.png" alt="20230529211858"></li></ul></li><li><p>在现场，打开<strong>第一反应器(R202)悬浮物循环泵 P202A/B</strong>的入口卸料阀 <strong>VI8R202</strong> 和 <strong>VI9R202</strong>，将 <strong>R202</strong> 外循环的物料全部退至沉降式离心机进料罐 <strong>V301</strong> 中，，将这两个阀门再关闭</p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529213957.png" alt="20230529213957"></li></ul></li><li><p>在现场，打开 <strong>R202</strong> 底部的退料阀门 <strong>VI4R202</strong>，将 <strong>R202</strong> 的物料全部退至沉降式离心机进料罐 <strong>V301</strong> 中,等待 <strong>R202</strong> 中的物料全部退入 <strong>V301</strong> 中关闭此阀门</p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529214136.png" alt="20230529214136"></li></ul></li><li><p>在现场二楼，关闭<strong>第一反应器外部冷却器 E201A/B</strong> 的循环水入口阀 <strong>VI1E201A</strong> 和 <strong>VI1E201B</strong></p><ul><li>如图位置</li><li><img src="http://qiniu.yeshan-taoist.cn/20230529215202.png" alt="20230529215202"></li></ul></li><li><p>在现场二楼，关闭<strong>第二反应器外部冷却器 E202A/B</strong> 的循环水入口阀 <strong>VI1E202A</strong> 和 <strong>VI1E202B</strong></p><ul><li>如图位置 -<img src="http://qiniu.yeshan-taoist.cn/20230529215353.png" alt="20230529215353"></li></ul></li><li><p>在现场二楼，关闭 E303 的循环水入口阀 VX1E303</p><ul><li>如图位置 -<img src="http://qiniu.yeshan-taoist.cn/20230529220106.png" alt="20230529220106"></li></ul></li></ol><h3 id="二、原料中断" tabindex="-1">二、原料中断 <a class="header-anchor" href="#二、原料中断" aria-label="Permalink to &quot;二、原料中断&quot;">​</a></h3><blockquote><p>快速做完以下步骤，提交</p></blockquote><ol><li>在现场带上 F 扳手，做冲洗反应器的准备工作，快速做以下步骤： <ol><li>关闭 <strong>R201 乙烯进料调节阀 FV2103 的后阀 FV21030</strong><ul><li>位置如图所示</li><li><img src="http://qiniu.yeshan-taoist.cn/1686130805746.png" alt="1686130805746"></li></ul></li><li>关闭 <strong>R201 底部进料阀 HV2104 前阀门 VI10R201</strong><ul><li>位置如图所示</li><li><img src="http://qiniu.yeshan-taoist.cn/20230607174919.png" alt="20230607174919"></li></ul></li><li>打开 <strong>R201 底部进料阀 HV2104 后第三根垂直管线上的阀门 BHHX 进料阀 VX9R201</strong><ul><li>位置如图所示</li><li><img src="http://qiniu.yeshan-taoist.cn/20230607175253.png" alt="20230607175253"></li></ul></li><li>关闭 <strong>R202 底部进料阀 HV2204 前阀门 VI10R202</strong><ul><li>如 R201 位置</li></ul></li><li>打开 <strong>R202 底部进料阀 HV2204 后第三根垂直管线上的阀门 BHHX 进料阀 VX8R202</strong><ul><li>如 R201 位置</li></ul></li></ol></li><li>冲洗反应器 R201 <ol><li>在 DCS 画面中进入<code>联锁旁路</code>HV2104 联锁旁路投用</li><li>在 DCS 画面中进入<code>聚合I</code>开启<strong>R201 底部的 HV2104</strong></li><li>回到现场 R201 底部，<strong>先打开之前关闭的 R201 底部进料阀 HV2104 前阀门 VI10R201，等待几秒后，关闭</strong></li><li>关闭 <strong>R201 底部进料阀 HV2104 后第三根垂直管线上的阀门 BHHX 进料阀 VX9R201</strong></li></ol></li><li>冲洗反应器 R202 <ol><li>在 DCS 画面中进入<code>联锁旁路</code>HV2204 联锁旁路投用</li><li>在 DCS 画面中进入<code>聚合I</code>开启<strong>R202 底部的 HV2204</strong></li><li>回到现场 R202 底部，<strong>先打开之前关闭的 R202 底部进料阀 HV2204 前阀门 VI10R202，等待几秒后，关闭</strong></li><li>关闭 <strong>R202 底部进料阀 HV2204 后第三根垂直管线上的阀门 BHHX 进料阀 VX8R202</strong></li></ol></li></ol>',37),a=[r];function s(o,g,d,c,h,p){return l(),e("div",null,a)}const y=t(n,[["render",s]]);export{R as __pageData,y as default};