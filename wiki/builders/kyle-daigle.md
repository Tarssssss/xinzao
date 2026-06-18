# Kyle Daigle（GitHub COO / 微软开发者业务 CMO）

GitHub COO，同时兼任微软开发者业务的 CMO，在 GitHub 十三年。从能看到几乎所有代码的平台视角发声，言论的一手价值在于平台级数据点（agent PR 量级）和 GitHub/微软的产品路线倾向（模型路由、frontier tuning、maintainer 控流工具）。立场要打折：他卖 Copilot 和微软 Foundry，「agent 代码是真东西」「需要我们的路由/审查工具」都对自家有利；首次入刊于 2026-06-18 的 AI & I（Every）访谈。

## 立场与主张

### token 经济与模型路由
- 编码 agent 费用失控（200 美元订阅滚成 2000 美元账单）的解法不是让开发者手动切便宜模型——他直说真到那步基本没人会切——而是让工具按任务意图自动路由：难的活交前沿模型、收尾小活（如查找替换式改命名）下放到 Haiku 级小模型，用户只需说清想推到多狠；叠加 frontier tuning/个性化让模型更懂你、少返工。微软 Foundry 已有 API 层路由器（[2026-06-18-github-coo-model-router-token-cost]）。与 Levie 从应用层提的路由判断同向。

### agent 代码经济与审查
- 平台级量级：仅 2026 年 3 月就有 1700 万个 PR 由 agent 创建（「这只是 agent 那部分」），2024 全年 10 亿次 commit、按线性今年到 140 亿但不会线性。反对「agent 代码全是 slop、没人在乎」，称并不属实、行业刚爬出早期采用期（[2026-06-18-github-coo-agent-prs-not-slop]）。
- 维护者被 PR 淹没的应对：把控制权交给维护者（决定接谁的 PR、要求贡献者证明价值），举 Mitchell Hashimoto 的 vouch 机制，但拒绝把某套系统推给所有人；方法是只提供 building block，等社区跑出多数实践才固化。具体工具：agentic 代码审查（找更多新型漏洞，评论一句 agent 就实现修复）、agentic 合并（设定允许范围后让 Copilot 去合 PR、等 CI 和策略）。落点和 Figma 的 Colyer 一致——审查才是瓶颈，解法是 agent 审 agent。

### 个人 agent 用法：自我改进循环
- 主力用法不是写代码，而是改进自己：一个与工作系统隔离的 OpenClaw agent（取名 Baxter）读他写和说的一切，每天回「沟通报告」指出哪句不清楚、按他爱用比喻的习惯给更清楚的比喻；回看式闭环——读过去 7 天邮件/Slack 给反馈，再看接下来 7 天有没有照做。判断：人更愿意接受机器人的批评，因为不像被人指出那样有威胁感（接回 GitHub 早年的 Hubot/chatops）（[2026-06-18-github-coo-agent-self-improvement-loop]）。

### 平台原则（贯穿三条）
- developer choice 是核心，反对「mousetrap/walled garden」式锁定；GitHub 与 Anthropic、OpenAI、Google 都合作，不抢做第一个定标准的人。客户demographics 在变——法务、财务等非开发者也在用 Copilot app 搭小工具，GitHub 始终保留写代码的 on-ramp。

## 言论时间线

- 2026-06-18 [2026-06-18-github-coo-model-router-token-cost] 编码 agent 费用失控的解法是按任务意图自动路由模型，而非指望开发者手动降级
- 2026-06-18 [2026-06-18-github-coo-agent-prs-not-slop] 3 月有 1700 万个 PR 来自 agent，反对「全是 slop」，重心放在维护者控流和 agentic 审查/合并
- 2026-06-18 [2026-06-18-github-coo-agent-self-improvement-loop] 主力 agent 用法是改进自己：让隔离的 agent（Baxter）读每周邮件/发言、回报表达问题并追踪是否改进
