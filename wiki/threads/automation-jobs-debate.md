# AI 自动化与岗位之争

任务自动化会不会消灭岗位，是这批 builder 言论里持续时间最长、参与者最集中的论争。一边是「AI 取代岗位」「裁员归功于 AI」的主流叙事（Dario 的入门白领岗位减半论、某些 CEO 的炫耀式裁员公告），另一边是以 Aaron Levie 为主力的需求扩张派：核心论据是杰文斯悖论——任务做得越便宜，企业承接的任务越多，岗位定义随之扩张而非消失。Levie 自 4 月中旬起几乎每周输出一条新机制（瓶颈转移、任务≠岗位、专家需求上抬、省下的钱投回扩招），Dan Shipper 用 Every 自家数据和客服业一手调查从另一个角度汇入，Peter Yang 则给出个人应对清单。7 月中旬这条线索迎来一个新分量级声音：Sam Altman 首次以第一人称承认「目前来看 AI 净创造就业，与自己此前预期相反」——此前扩张派全是应用层/企业侧的人，这是第一次由模型能力最直接的推动方亲口表态；同日 Swyx 把范围从编程外推到全部知识工作，恰好站到了 Levie「编程不能类推其他知识工作」这条提醒的对立面。值得跟踪的原因：各方都在卖叙事（Levie/Shipper 的生意都受益于乐观侧，Altman 的表态也对 AI 行业整体叙事有利），但他们给出的机制和可核验锚点（招聘页岗位、token 开支、客服回流）是判断这件事的最好素材，且论证还在逐月加码。

## 各方立场

- **Aaron Levie（Box CEO，需求扩张派主力）**：立场一以贯之，机制逐月细化。①瓶颈转移——AI 提速一个环节后，瓶颈挪到仍需要人的环节（2026-04-16-levie-job-bottlenecks）；②杰文斯悖论是理解关键，AI 越强效应越大（2026-04-25-levie-jevons）；③任务≠岗位——自动化任务后岗位定义会扩张，省下的产能被吸收（2026-05-24-levie-tasks-vs-jobs、2026-05-27-levie-agents-automate-tasks-not-jobs）；④专家需求反而上抬——产出基准被抬高，会驾驭 agent 的专家筛掉新手（2026-05-10-levie-experts-higher-demand、2026-05-18-aaron-levie-go-deep-expert-with-ai），AI 强化而非消解专业分工（2026-05-15-levie-ai-enhances-specialization）；⑤一手样本——他聊到的企业几乎都在多雇工程师（2026-05-03-levie-engineer-thought-experiment），编程占齐自动化全部有利条件、工程师仍供不应求，故其他知识工作风险被高估（2026-06-06-aaron-levie-coding-agents-best-case）。立场提示他自己也认：Box 卖企业 AI，乐观叙事利好生意，每条都缺岗位数量级数据。
- **Dan Shipper（Every CEO，同方向、不同证据）**：用自家运营数据反驳「自动化=裁员」——Every 从 GPT-3 时代 4 人长到 30 人还在招；机制是模型把昨天的专家能力压便宜后，涌出大量「接近但不对」的产出，反而抬高对专家收尾和搭评审流程的需求（2026-05-28-dan-shipper-after-automation-more-work）。同时直接攻击裁员叙事：公司经营不好才裁员然后甩锅给 AI，并有一手调查——有公司裁掉客服两个月后回头返聘（2026-05-28-dan-shipper-skeptical-of-ai-layoff-claims）。和 Levie 的差别：他不否认组织会整体重组，只主张当前形态下自动化抬高专家需求，不断言长期。
- **高盛 CEO（经 Levie 转述）**：历史上效率大涨从没让工作消失，因为需求会涨——一旦有玩家用自动化做得更多，就抬高所有人的预期，不跟进者出局（2026-05-26-levie-goldman-ceo-ai-jobs）。给乐观侧补了一个非科技业、需求侧的版本。
- **Peter Yang（个人应对侧）**：不站队机制之争，直接给员工六条抵御裁员的清单；他的判断与扩张派兼容——AI 把人拉平到平均水平，平均之上的手艺和品味反而更值钱，所以该把一项技能练到前 10%（2026-05-23-petergyang-six-moves-against-layoffs）。
- **对手方（场外）**：裁员叙事本身在这批素材里没有第一人称发言，只以被反驳的形态出现——Dario 的入门白领岗位减半论、炫耀式裁员的 CEO 公告。线索的缺口：缺一个有数据的悲观派进场。
- **Sam Altman（OpenAI CEO，新加入，2026-07-12）**：首次就 AI 就业影响给出个人判断——「目前来看」AI 净创造就业，与他自己此前的预期相反，但保留「这个方向可能继续」只是可能性而非预测。没有给出任何数据，是他个人判断的转变（2026-07-12-altman-levie-swyx-ai-job-creation）。
- **Swyx（Cognition/Latent Space，同日加入）**：把杰文斯悖论的适用范围从编程外推到全部知识工作，前提是「人能熟练驾驭 coding agent」+「coding agent 正在突破编程边界」；这个说法只是类比性论断，没有编程之外的具体证据，且恰好与 Levie 的既有提醒（编程占齐有利条件、不能类推）形成对立（2026-07-12-altman-levie-swyx-ai-job-creation）。

## 时间线

- 2026-04-16 [2026-04-16-levie-job-bottlenecks] Levie 提出瓶颈转移机制：AI 提速一处，瓶颈挪到仍需要人的环节，这是 AI 创造就业的来源
- 2026-04-19 [2026-04-19-levie-engineering-jobs-expand] Levie 反驳工程职业终结论：agent 让每家公司都造软件，举 Eli Lilly 招聘页的 Lab Automation Software Engineer 为证
- 2026-04-20 [2026-04-20-roles-grow-complexity] Levie：「岗位被取代」假设市场静态；工具普及后产出标准整体抬高，岗位变得更复杂而非消失
- 2026-04-24 [2026-04-24-levie-ai-more-work] Levie：AI 压低启动成本后人做的事更多而非更少，AI 做得够好的任务反而值得专门雇人长期做
- 2026-04-25 [2026-04-25-levie-jevons] Levie 正式打出杰文斯悖论：AI 把任务做得越好，企业接的任务越多，配套招聘上升，且 AI 越强效应越大
- 2026-04-27 [2026-04-27-levie-ai-jobs-overwork] Levie 指出失业预测的方法论缺陷：只看「能自动化单个任务」，没算把 AI 在完整工作里跑通的最后一公里投入
- 2026-05-03 [2026-05-03-levie-engineer-thought-experiment] Levie 给一手样本：企业用上和大厂相同的模型后，他聊到的几乎每一家都在多雇工程师
- 2026-05-10 [2026-05-10-levie-experts-higher-demand] Levie 补「预期上抬」环节：agent 放大两端但专家端放得更多，产出基准抬高后筛掉无经验者
- 2026-05-15 [2026-05-15-levie-ai-enhances-specialization] Levie 下注 AI 强化专业分工：角色边界暂时模糊，工作量累积后重新专业化在经济上又会划算
- 2026-05-18 [2026-05-18-aaron-levie-go-deep-expert-with-ai] Levie 称需求是错配不是消失：药企 CEO 说比以往更缺技术人才；呼吁继续扎深领域，专家配 AI 远胜 vibe coding 新手
- 2026-05-23 [2026-05-23-petergyang-six-moves-against-layoffs] Peter Yang 给员工六条抵御裁员清单：AI 拉平平均水平后，把一项手艺练到前 10% 反而更值钱
- 2026-05-24 [2026-05-24-levie-tasks-vs-jobs] Levie 点破核心混淆：「能自动化任务」≠「能消灭岗位」，岗位定义会扩张并面向新客户
- 2026-05-26 [2026-05-26-levie-goldman-ceo-ai-jobs] Levie 借高盛 CEO 论点：效率大涨从没让工作消失，自动化抬高所有玩家的预期，省下的产能投向更高标准
- 2026-05-27 [2026-05-27-levie-agents-automate-tasks-not-jobs] Levie 一手观察硅谷外企业：一边上 agent 一边扩招，客服自动化省下的钱被投向销售和客户成功岗位
- 2026-05-28 [2026-05-28-dan-shipper-after-automation-more-work] Shipper 汇入战线：Every 从 4 人到 30 人还在招；「agent 离人越远越不值钱」，半成品涌入抬高专家需求
- 2026-05-28 [2026-05-28-dan-shipper-skeptical-of-ai-layoff-claims] Shipper 直接质疑裁员叙事：经营不好甩锅 AI；一手调查发现裁掉客服的公司两个月后回头返聘
- 2026-06-04 [2026-06-04-aaron-levie-ai-expands-jobs-and-software-tam] Levie 把论证接到开支上：企业 token 开支（每人每月数百到上千美元）已远超历史软件许可开支，AI 撑大就业和软件 TAM
- 2026-06-06 [2026-06-06-aaron-levie-coding-agents-best-case] Levie 收束论证：编程占齐自动化全部有利条件、工程师仍供不应求，故其他知识工作的失业风险被高估
- 2026-07-01 [2026-07-01-levie-ai-headcount-survey] Levie 发布 Box 1,600 家企业调查：AI 最成熟采用者 79% 预计增员（总体 58%），方向与裁员叙事相反；Levie 自标相关性非因果、方法未公开
- 2026-07-12 [2026-07-12-altman-levie-swyx-ai-job-creation] Altman 首次承认目前看 AI 净创造就业、与自己此前预期相反；Levie 同日给出成本-需求机制；Swyx 把范围外推到全部知识工作，与 Levie「编程不能类推」的提醒相对立
