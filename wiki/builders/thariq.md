# Thariq（Claude Code @ Anthropic，@trq212）

Anthropic Claude Code 团队成员，刊中言论密集于工程实操：prompting/上下文管理方法论、Claude Code 新功能一手解读、agent 工作流模式分享。

## 立场与主张

- **prompting 是长期高杠杆技能**：模型变强没有降低清楚表达任务的价值，反而抬高了它的杠杆；prompting 是「与 agent 对话的技能，经由 harness 中介」，他的目标是扩大人和 agent 之间的带宽。配套例子：Monitor Tool 能力已在 harness 里，但要显式提示才会用。Levie 同日呼应（2026-04-10-thariq-prompting-leverage）
- **更大上下文窗口 ≠ 无脑用满**：1M 窗口是双刃剑，session 管不好会放大上下文污染；可用 `CLAUDE_CODE_AUTO_COMPACT_WINDOW=400000` 主动调小窗口，他认为 400k 是任务容量和上下文卫生间的好折中（2026-04-16-claude-code-1m-context）
- **规划与执行分工**：实现常需要本地环境，规划主要是读代码、理解意图，适合放云端——这是 /ultraplan 的设计逻辑（2026-04-11-ultraplan）
- **长跑 agent 要留决策痕迹**：让 agent 边实现 spec 边维护 implementation-notes.html（设计决策/有意偏离/权衡/待确认问题），给模型遇歧义时一个「好的出口」，把 review 粒度从读 diff 前移到读决策日志（2026-05-19-thariq-implementation-notes-html）
- **遗留代码库是「蒸馏」原料**：看完 Bun 重写后判断遗留代码的价值在被模型转写成新形态（游戏跨平台、遗留软件上 web、不再需要 COBOL）。注意他的明确对冲：模型现在还没到这一步，Bun 极易验证、测试覆盖极好是特例；这是趋势判断而非现状描述（2026-05-25-thariq-legacy-codebases-distillation）
- **非技术任务的套路是「文件进、脚本/HTML 出」**：把文件丢进文件夹、让 Claude Code 写脚本和生成 HTML，按任务类型有具体映射；他认为人们低估了自己本地文件里已有的上下文，不必急着接 connector（2026-05-27-thariq-claude-code-nontechnical）

- **给新模型做减法**：Claude Code 团队为 Opus 5 / Fable 5 这代模型删掉了约 80% 的系统提示词，据文章说没测到性能损失；配套六条规则——规则改判断、示例改接口设计、前置信息改渐进披露、重复改单一权威来源、手动 CLAUDE.md 改自动记忆、简单 spec 改高保真引用（HTML artifact / 代码化 spec / 测试 / rubric）。理由是旧模型缺少在冲突指引间取舍的判断力才需要重护栏。文章明确限定只对 Claude 5 这代成立（2026-07-25-thariq-context-engineering-claude5）。与他「prompting 高杠杆」的老立场不冲突：杠杆从写死约束移到了描述目标和设计接口。

立场无反转，整体一致：核心母题是「人与 agent 的带宽」——prompting、上下文卫生、决策日志、文件夹工作流都是这一母题的具体化。

## 言论时间线

- 2026-04-10 [2026-04-10-thariq-prompting-leverage] prompting 会一直是高杠杆技能，本质是经由 harness 与 agent 对话
- 2026-04-11 [2026-04-11-ultraplan] 发布 /ultraplan：规划放云端、执行留本地，token 消耗与 plan mode 相当
- 2026-04-16 [2026-04-16-claude-code-1m-context] 1M 上下文使用指南：窗口是双刃剑，可用环境变量把 autocompact 阈值设到 400k
- 2026-04-29 [2026-04-29-claude-code-white-whales] 公开征集「白鲸级」顽固 bug；大文件写入假死疑似找到原因，无闪烁渲染器将设默认
- 2026-05-19 [2026-05-19-thariq-implementation-notes-html] 给出可复用 prompt：长跑 agent 边写边维护 implementation-notes.html 记录偏离 spec 的决定
- 2026-05-25 [2026-05-25-thariq-legacy-codebases-distillation] 从 Bun 重写得出：遗留代码库会成为「蒸馏」成新形态代码的原料（带能力对冲）
- 2026-05-27 [2026-05-27-thariq-claude-code-nontechnical] 非技术任务基本套路：文件夹放文件 + 写脚本 + 输出 HTML
- 2026-07-01 [2026-07-01-thariq-fable-classifier-fallback] 回应社区：Fable 5 安全分类器更新后，常规编程/调试任务被降级到 Opus 是误报、非能力限制，改进方向是更准确区分合法请求与滥用
- 2026-07-25 [2026-07-25-thariq-context-engineering-claude5] 公布 Claude Code 删掉约 80% 系统提示词，给出 Claude 5 这代的六条上下文工程规则
