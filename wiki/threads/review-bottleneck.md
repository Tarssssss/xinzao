# 审查成为新瓶颈

agent 把执行环节做便宜之后，瓶颈整体转移到了人这一侧：产出不再稀缺，稀缺的是人的同步注意力和审查带宽。这条线索从 4 月 Levie 的「任务越长、规划和审查占比越大」起，经 Lopopolo（review 移到 merge 之后）、Swyx（零人工 review 是下一个激进前沿）、Brockman（注意力是最大瓶颈）的层层加码，到 6 月 Colyer 给出 Figma 的一线确认「产出已不是瓶颈，审查才是，今年重心是把审查规模化」。值得跟踪是因为各方对「人审什么、审到哪一步」给出了一个完整光谱——从每步留人工检查点，到抽样审、风险分级审、agent 审 agent，再到不审直接合入——而且这不是抽象争论，每一方都附带可搬走的工程做法；光谱最终收敛到哪，决定组织和工具的形态。

## 各方立场

- **Aaron Levie（Box CEO）**：审查是工作上移一层抽象后留给人的核心环节。他把交给 agent 的工作拆成六环（定任务、写指令、喂上下文、纠偏、审查、整合），任务越长规划和审查占比越大，且不随模型变强消失（2026-04-07-levie-work-abstraction）；6 月引 Anthropic 原文把问题升到组织层——想法供给爆掉后，「发现并清除瓶颈的速度」会成为组织最重要的技能，而执行所需的周边管理工作始终要人来管（2026-06-05-levie-bottleneck-spotting-org-skill）。立场注意：Box 卖企业 AI，「人不会被替代」符合其叙事。
- **Ryan Lopopolo（OpenAI Frontier）**：最激进的实践者。五个月零人工代码写出百万行产品，人工 review 移到 merge 之后，像 500 人组织的 group tech lead 那样只抽样读代码推断卡点；核心判断是「模型可以无限并行，唯一稀缺的是人的同步注意力」，Symphony 编排把人的角色压缩成每天在 Linear 点几次是或否，review 不通过的 PR 连 worktree 一起丢弃重做（2026-04-08-harness-engineering）。自陈边界：全新仓库，不默认适用于有历史包袱的代码库。
- **Kieran Klaassen（Cora GM）**：人收缩到工作流两端。执行环节给好计划已基本可信，人在前端定义问题、末端凭手感打磨（三明治结构）；明确反对全程 human in the loop，关键是分清何时在环内；最大杠杆是 compound——把 review 的教训写回仓库让 agent 不再犯（2026-04-23-ai-sandwich）。利益提示：对谈同时在推广 Every 自家插件。
- **Swyx（Cognition）**：光谱的尽头。零人工写代码已经正常，下一个激进前沿是零人工 review——不看代码直接合入，他认为这是唯一可规模化的方式，前提是把开发流程翻过来补足测试和自动验证（2026-04-24-swyx-coding-agents-containment）。
- **Greg Brockman（OpenAI 总裁）**：给出系统设计答案——执行变便宜后人点 approve 点到默认放行，真正稀缺的是停下来判断「这是不是我想要的」；解法是让 AI 先给动作分险级，高风险上报给人、其余自动通过，整个系统围绕人的注意力来设计（2026-05-03-brockman-attention-bottleneck）。
- **Mati Staniszewski（ElevenLabs CEO）**：给出组织设计答案——vibe coding 普及后，非技术团队产出的代码没人能把关安全和准确性，于是在每个非技术团队（HR、法务、GTM）嵌一名工程师，扩的不是人力而是审稿门槛（2026-05-10-elevenlabs-embedded-engineers）。
- **Peter Yang（Product @ Roblox）**：保守端的个人实践。把集成和 skill 前置搭进 Codex 能省一半以上时间，但所有工作流每步留人工检查点，好让自己施加「品味」——对「全自动」叙事的主动收敛，判断权留在人这边（2026-06-05-peter-yang-codex-system-setup）。
- **Matt Colyer（Figma 开发者产品负责人）**：一线确认加方向探索。agent 已经便宜又能干，瓶颈是「只有这么多双人眼睛」，今年重心是把审查规模化——录视频走查、截图、或再派一个带不同 prompt 的 agent 去审，审到你信任它为止；具体形态他明说「很难预测」（2026-06-06-matt-colyer-figma-review-bottleneck）。

## 时间线

- 2026-04-07 [2026-04-07-levie-work-abstraction] Levie 立论：工作上移一层抽象，六环节里任务越长规划和审查占比越大
- 2026-04-08 [2026-04-08-harness-engineering] Lopopolo：人工 review 移到 merge 后只抽样，唯一稀缺的是人的同步注意力，Symphony 把人压缩成点是或否
- 2026-04-23 [2026-04-23-ai-sandwich] Klaassen：执行已基本可信，人收缩到两端，反对全程 human in the loop，教训沉淀回仓库
- 2026-04-24 [2026-04-24-swyx-coding-agents-containment] Swyx：零人工 review 是下一个激进前沿，唯一可规模化的方式，OpenAI 在探索
- 2026-05-03 [2026-05-03-brockman-attention-bottleneck] Brockman：注意力是最大瓶颈，解法是动作分险级、高风险才上报给人
- 2026-05-10 [2026-05-10-elevenlabs-embedded-engineers] Staniszewski：每个非技术团队嵌一名工程师兜住审稿质量线，扩门槛不扩人力
- 2026-06-05 [2026-06-05-levie-bottleneck-spotting-org-skill] Levie 升到组织层：想法供给爆掉，发现并清除瓶颈的速度成为组织最重要技能
- 2026-06-05 [2026-06-05-peter-yang-codex-system-setup] Peter Yang：系统前置省一半时间，但每步留人工检查点保住品味
- 2026-06-06 [2026-06-06-matt-colyer-figma-review-bottleneck] Colyer 一线确认：产出已不是瓶颈，审查才是，今年重心是把审查规模化（含 agent 审 agent）
