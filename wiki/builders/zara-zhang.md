# Zara Zhang（Builder，@zarazhangrui）

独立 builder，言论密度高：一边输出「AI 时代工作方式」的判断（不协作、一人端到端配 agent），一边用 vibe coding 持续产出开源小工具来验证自己的主张。

## 立场与主张

### 工作产物的形态：纯文本取代二进制，产物只是思考的固化
- 工作文件的新旧世界对照：Word/Excel/PPT → Markdown/CSV-JSON/HTML，共同点是换成模型能直接读写的纯文本（[2026-04-11-zara-new-world-formats]）
- 打字只是写作的最后一步，80% 在头脑里已完成；写作 ≠ 生成文本、做产品 ≠ 写 PRD、设计 ≠ 画 mockup、工程 ≠ 写代码——右边都是产物，左边才是思考（[2026-04-26-zara-writing-thinking]）

### 组织与协作：人不协作，一人端到端 + agent
- 原话「人类协作最高效的方式：不协作」。一个人端到端拥有一件事，和 agent 一起工作；人际沟通只留三类——定方向和「好」的标准、陪伴防孤独、创意脑暴。同步/汇报/交接交给 agent（[2026-04-12-zara-no-collaboration]）
- 延伸到团队层面：AI 越能干，「建什么」比「建出来」重要得多，产品团队应把时间从内部协调挪到对外沟通；极端版本是独立创业者整天访谈客户、录音丢给 agent 决定做什么并执行（[2026-04-20-external-communication]）。与 4-12 的「不协作」一脉相承，无立场变化。

### 用 agent 做个人小工具的方法论
- learn to build、build to learn：理解 AI 能力最好的办法是亲手去 build（[2026-04-11-zara-new-world-formats]）
- 实践示范：把 Chrome 新标签页 vibe code 成 tab 管理器并开源，浏览器自带的高频小界面都可按需重写（[2026-04-13-zara-newtab-vibecode]）
- 复盘方法论：Tab Out 项目 20% 时间做功能、80% 时间砍功能；「Claude 倾向做过头（overkill），你得管住它」；入口要放进已有高频动线；LLM 功能当成本看，不可靠就砍（[2026-04-15-zara-tab-out-cutting-features]）
- 学习技巧：让 Claude Code 把自己当前 context window 画成 HTML，直观理解上下文运作（[2026-04-22-claude-code-context-viz]）

### AI 写作与品味
- 别在养出自己的品味和声音之前用 AI 写作：用 AI 写本身不坏，坏在还没养出判断力就用——AI 写出 slop 时你根本认不出那是 slop，也无从改。顺序是大量读（建立「什么算好」）、大量写（摸清自己的声音），到这一步再用 AI 帮忙，并确保成品仍像你（[2026-06-18-zara-zhang-taste-before-ai-writing]）。与「写作是思考、打字只是最后一步」（[2026-04-26-zara-writing-thinking]）同一根线：AI 适合放大已成形的品味，替不了养成品味的过程。

### 编码 agent 的入口与工具选择（用法有明确演变）
- 5 月先做了 Claude Code 的 Lark/飞书桥并开源：一个群聊对应一个 CC 会话，把 agent 入口从终端搬进 IM，摆脱终端标签页（[2026-05-22-zara-zhang-claude-code-lark-bridge]）
- **用法变化标注**：此前主用 Claude Code、在终端操作；5 月底改为 Claude Code 与 Codex 五五开、转用桌面应用、几乎不再开终端。分流规则：Codex 像可靠工程师，任务已定义清楚就交给它；Claude Code 像沟通好的 PM/设计师，还不知道要什么、要脑暴或原型时用它（[2026-05-27-zara-zhang-codex-vs-claude-code]）

## 言论时间线
- 2026-04-11 [2026-04-11-zara-new-world-formats] 工作文件的新世界是 Markdown、CSV、HTML；别只让 AI 总结，让它 remix；learn to build, build to learn
- 2026-04-12 [2026-04-12-zara-no-collaboration] 人类协作最高效的方式是不协作：一人端到端负责、和 agent 一起工作
- 2026-04-13 [2026-04-13-zara-newtab-vibecode] 用 vibe coding 把 Chrome 新标签页改成 tab 管理器，已开源
- 2026-04-15 [2026-04-15-zara-tab-out-cutting-features] 复盘 Tab Out：20% 做功能、80% 砍功能，Claude 倾向做过头
- 2026-04-20 [2026-04-20-external-communication] AI 越能干，产品团队越该把时间从内部协调挪到对外沟通
- 2026-04-22 [2026-04-22-claude-code-context-viz] 让 Claude Code 把自己的 context window 画成 HTML 来学上下文运作
- 2026-04-26 [2026-04-26-zara-writing-thinking] 打字只是写作的最后一步，80% 在头脑里完成；产物 ≠ 思考
- 2026-05-22 [2026-05-22-zara-zhang-claude-code-lark-bridge] 开源 Claude Code 的 Lark/飞书桥，把 CC 会话搬进 IM 群聊
- 2026-05-27 [2026-05-27-zara-zhang-codex-vs-claude-code] 用法改成 Claude Code 与 Codex 五五开，按任务是否明确分流，转桌面端弃终端
- 2026-06-18 [2026-06-18-zara-zhang-taste-before-ai-writing] 在养出品味和声音之前别用 AI 写作，否则它产出 slop 你都认不出；顺序是先读后写再用 AI
