# 编码 agent 的自治边界

线索追踪的是编码 agent 从「人盯着跑一次」到「无人值守跑数小时甚至数天」的推进过程，以及边界推到哪了、靠什么撑住。三股力量在同时演进：实践派（Steipete、Boris Cherny）公开自己的工程化做法——常驻 agent 流水线、auto 权限、/goal//loop、自检闭环，把单次任务从半小时拉到 4-10 小时再到数天；证据侧给出战绩——Salesforce 把 231 天迁移压到 13 天且事故降 5%，Anthropic 自报超 80% 合并代码由 Claude 写；测量侧（Cognition × METR）试图把「能自治多久」做成可比的数字——企业级任务跑到 100 小时、FrontierCode 用 3000+ 条 rubric 补上代码质量这一维。共同的张力是：几乎所有数据都来自利益相关方自述，但工作流本身可照搬验证，自主时长这个指标也在被各方独立推高。值得跟，因为这条线决定「能整块交出去的工作」的粒度，进而决定团队形态和成本结构。

## 各方立场

- **Peter Steinberger（OpenClaw）**：把「token 不要钱」当工程前提的最大化实践派。先给主干每个 commit 接 codex 审查加自动修复流水线，审查、修复、复核拆成串联 agent、五轮上限（[2026-04-29-codex-on-every-commit]）；随后公开 OpenClaw 全貌——约 100 个 codex 常驻云端接管 PR/issue 审查、安全扫描、性能回归，甚至旁听会议当场开 PR（[2026-05-16-steipete-tokens-dont-matter]）；方法论上提出「让 agent 跑起来本身是门手艺」，GPT-5.5 配 /goal、autoreview、crabbox 后单次任务从 30-60 分钟拉到 4-10 小时，工具兜住目标和检查比换模型更关键（[2026-05-31-steipete-yielding-agents-skill]）；再把回路推到「测自己」——Codex 当 QA，每个 commit 生成用户测试场景、用 computer use 真机操作、后台开 PR 修复，发现到改动整条链路无人值守（[2026-06-01-steipete-codex-qa-assistant-background-prs]）。
- **Boris Cherny（Claude Code，Anthropic）**：极限用户兼布道者。自报 Claude Code 代码 100% 由模型写、单日纪录 150 个 PR、每晚几千个 agent 在跑、几十个 /loop 看护 CI 和 PR；并预测一年内对齐进步会让 permission 模式、human in the loop 这些机制变得不那么必要（[2026-05-07-boris-cherny-sequoia]）；引 Salesforce 战绩论证收益来自重设工作流而非加速旧流程——质量门槛要内建进 agent 流程，产能与质量不必取舍（[2026-05-30-salesforce-agentic-claude-code-boris-cherny]）；给出让 Opus 自主跑数小时到数天的五条配置：auto 权限、动态编排子 agent、/goal//loop 续跑、云端执行、端到端自检闭环——没有自检，跑得越久错误累积越无人发现（[2026-06-08-boris-cherny-opus-autonomous-five-tips]）。注意他全程是自家产品立场，数字均为自述。
- **Thariq（Claude Code，Anthropic）**：补「放手但留痕」这一环。让长跑 agent 边写边维护 implementation-notes.html，记录设计决策、有意偏离、权衡和待确认问题——遇到 spec 没覆盖的歧义时模型可自己拍板继续走，review 粒度从读最终 diff 前移到读决策日志（[2026-05-19-thariq-implementation-notes-html]）。
- **Anthropic（Alex Albert 转述官方博客）**：组织级数据点。超 80% 合并代码由 Claude 写、典型工程师出码量是 2024 年的 8 倍、最开放工程任务成功率半年从约 26% 升到 76%；Albert 划界「还没到递归自我改进」，但「可能比多数人预期来得更早」。内部口径，统计定义未给出（[2026-06-05-anthropic-claude-writes-own-code]）。
- **Swyx（Cognition）**：测量派，也是利益相关方。先放企业级 eval——258 个真实企业 session、任务时长跑到 100 小时，对照 METR 公开集约 16 小时封顶（[2026-06-05-cognition-100hr-enterprise-evals]）；再与 METR 联合发 FrontierCode，称 SWE-bench 超半数结果是不可合并的劣质代码，用 3000+ 条 rubric 测可维护性，最难档 Opus 4.8 仅 13.8%；历史回测显示 Opus 通过率 4 个月从 41% 到约 74%——他认为正是成功率到了这个水平，ralph loop、/goal 这类「再上一层抽象」的自治做法才变得可行（[2026-06-09-frontiercode-metr-benchmark]）。

## 时间线

- 2026-04-29 [2026-04-29-codex-on-every-commit] Steipete 给主干每个 commit 接 codex 审查加自动修复流水线，串联 agent 五轮上限，上线十分钟抓到自己的 bug
- 2026-05-07 [2026-05-07-boris-cherny-sequoia] Cherny 自报：Claude Code 代码 100% 模型写、单日 150 个 PR、每晚几千个 agent，靠 /loop 管理；预测一年内 human in the loop 机制变得不那么必要
- 2026-05-16 [2026-05-16-steipete-tokens-dont-matter] Steipete 公开 OpenClaw 自动化全貌：约 100 个 codex 常驻云端，接管审查、安全、性能回归，旁听会议开 PR
- 2026-05-19 [2026-05-19-thariq-implementation-notes-html] Thariq 给长跑 agent 配 implementation-notes.html：自己拍板继续走，决策留痕供人事后审
- 2026-05-30 [2026-05-30-salesforce-agentic-claude-code-boris-cherny] Cherny 引 Salesforce 数据：231 天迁移 13 天交付、事故降 5%，收益来自重设工作流而非提速旧流程
- 2026-05-31 [2026-05-31-steipete-yielding-agents-skill] Steipete：GPT-5.5 配 /goal、autoreview、crabbox，单次任务从 30-60 分钟拉到 4-10 小时，「让 agent 跑起来是门手艺」
- 2026-06-01 [2026-06-01-steipete-codex-qa-assistant-background-prs] Steipete 让 Codex 当 QA：每个 commit 生成用户测试场景、computer use 真机操作、后台开 PR 修复
- 2026-06-05 [2026-06-05-anthropic-claude-writes-own-code] Anthropic 自报：超 80% 合并代码由 Claude 写，最开放任务成功率半年从约 26% 升到 76%
- 2026-06-05 [2026-06-05-cognition-100hr-enterprise-evals] Cognition 首个 eval：真实企业任务跑到 100 小时，对照 METR 公开集约 16 小时封顶
- 2026-06-08 [2026-06-08-boris-cherny-opus-autonomous-five-tips] Cherny 五条做法让 Opus 自主跑数小时到数天：auto 权限、动态编排、续跑、云端、自检闭环
- 2026-06-09 [2026-06-09-frontiercode-metr-benchmark] Cognition × METR 发 FrontierCode：rubric 测代码质量，Opus 4 个月通过率 41%→74%，解释自治做法为何此时可行
