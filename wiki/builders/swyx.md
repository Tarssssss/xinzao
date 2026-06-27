# Swyx（Cognition / Latent Space / AI Engineer 大会）

Cognition 成员、Latent Space 播客主理人、AI Engineer 大会主办者。刊中言论两条主线：agent 从写代码扩到通用知识工作的「破圈」叙事（带一手运营案例），以及编码 benchmark/eval 的重建（FrontierCode、Cognition 企业 eval）。注意他与 Cognition 的从属关系：eval/benchmark 相关言论本质是在推自家工作，引用时需打折扣。

## 立场与主张

### Coding agent 破圈（核心叙事，持续加码）
- 「coding agents breaking containment」是今年爆发主题：所有知识工作者（不只程序员）都会被 agent 改变认知；多数人用 agent 的强度远远不够。一手案例：AI Engineer 团队用 agent 跑杂务（CMS 到租充气龙虾），极小团队免费服务月均约 100 万独立开发者（[2026-05-01-swyx-agents-containment]）
- 同方向加码：pewdiepie vibecode 的 OpenCode 封装（含邮件/文档/日历的个人生产力套件）被他立为知识工作 agent 创业的 DIY 基准线——打不过这个 DIY 产物「不如收摊回家」。对照点：2026 年 2 月 Soumith Chintala 讲个人本地 agent 时多数人还不信（[2026-06-01-swyx-pewdiepie-opencode-benchmark]）
- 把破圈逻辑推进版本管理层：PR 和 code review 淡出后，连 Git 该不该留也成问题——合并冲突占写码开销 20-40%，设想未来代码库像 Notion/Linear 数据库而非 .git 对象，自称「Salty Lesson」。推测式发问，且本就服务于 Cognition 的 agent 编码叙事（[2026-06-13-swyx-future-codebase-git]）

### 编码 benchmark/eval 重建（Cognition 自家工作，立场需折扣）
- 底层判断：现有 benchmark 测不出代码质量，转述 METR 称 SWE-bench 超半数结果是不可合并的劣质代码。FrontierCode（Cognition x METR）用 3000+ 条 rubric 覆盖代码质量与反作弊；最难档 FC Diamond Opus 4.8 仅 13.8%（[2026-06-09-frontiercode-metr-benchmark]）
- 三个时代划分：2021 自动补全（HumanEval）→ 2023 通过测试（SWE-bench/TerminalBench）→ 2026 可维护代码（FrontierCode）。用历史回测把「2025 年 12 月 vibe shift」量化：FC Extended 易档 4 个月内 41%→74%，成功率到位才让 ralph loop、/goals 这类更高抽象的 agentic 做法可行（[2026-06-09-frontiercode-metr-benchmark]）
- 真实世界长任务 eval：Cognition 私有企业 eval 时长达 100 小时（METR 公开集封顶约 16 小时），258 个真实企业 session、126 个用户，held-out rlog 0.74；「敢挂财务担保」是他的转述措辞，细节未给（[2026-06-05-cognition-100hr-enterprise-evals]）

### 产品/模型定位框架
- 模型 vs agent 的区分框架：GPT-Image-2 是图像模型，Image-2-Thinking 是图像 agent（循环带搜索和类 Photoshop 工具，能检索、合成、复查产出），所以慢几十分钟但一次出对二维码图表。类比 Gemini Flash Vision 当年用 agentic loop 刷穿 image-to-text（[2026-04-23-image-agent-framing]）

### 行业格局观察
- Meta AI 标拐点：Llama 4 翻车后回转，证据四件套——招聘不减反增、Zuck 搬去与 Alexandr/Nat 同住并亲自写代码、上线「接近 Opus 级」模型（他个人评级，无 API 不开源、不可外部核验）、收购 Dreamer 和 Manus 瞄准 AI OS 的 prosumer 层（[2026-04-16-swyx-meta-turn]）
- AI 开发工具变现：转述 Vibe-kanban 创始人关停理由「在赚钱的只做两件事：卖企业版、转售 token」——3 万月活没有自动变成生意；且这不是第一家在 AIE 现场宣布关停的公司（[2026-05-03-vibe-kanban-shutdown]）
- 价值往服务侧走：OpenAI 和 Anthropic 都在组建几十亿美元级服务部门（services arms），FDE 因此成了地球上最抢手的职业之一；他自陈没干过这活、正办首届 AI FDE 小会，带自家活动推广成分，可核验的是「两家头部实验室自己也在往服务走」（[2026-06-27-value-shift-software-to-services]，佐证 Peter Yang）

## 言论时间线

- 2026-04-16 [2026-04-16-swyx-meta-turn] 标注 Meta AI 拐点：招聘、组织、模型补课、收购 Dreamer/Manus 四件套
- 2026-04-23 [2026-04-23-image-agent-framing] 提出 Image-2-Thinking 是图像 agent 而非模型：带工具、会复查、慢但出对
- 2026-05-01 [2026-05-01-swyx-agents-containment] coding agent 破圈是今年主题；AIE 小团队用 agent 服务月均百万开发者
- 2026-05-03 [2026-05-03-vibe-kanban-shutdown] 转述 Vibe-kanban 带 3 万 MAU 关停：赚钱只有企业版和转售 token 两条路
- 2026-06-01 [2026-06-01-swyx-pewdiepie-opencode-benchmark] 把 pewdiepie 的 DIY OpenCode 套件立为知识工作 agent 创业基准线
- 2026-06-05 [2026-06-05-cognition-100hr-enterprise-evals] 介绍 Cognition 首个 eval：企业任务长达 100 小时，远超 METR 公开集
- 2026-06-09 [2026-06-09-frontiercode-metr-benchmark] 发布 FrontierCode；称 SWE-bench 过半结果是不可合并的劣质代码
- 2026-06-13 [2026-06-13-swyx-future-codebase-git] 设想 PR/review 之后 Git 也该退场：合并冲突占写码开销 20-40%，未来代码库或像 Notion/Linear 数据库
- 2026-06-27 [2026-06-27-value-shift-software-to-services] OpenAI 和 Anthropic 都在组建几十亿美元级服务部门，FDE 成最抢手职业之一（佐证 Peter Yang 的价值转向服务）
