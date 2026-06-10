# Latent Space（AI 工程播客）

AI 工程访谈播客（主持 swyx 等）。本页是渠道页：观点属于各期嘉宾而非播客自身，引用时注明嘉宾及其立场（多为讲自家产品）。刊中三期都围绕 agent 工程：模型/RL 基建（Mistral）、harness engineering（OpenAI Frontier）、agent 环境设计（Notion）。

## 立场与主张（按期归纳，观点归属嘉宾）

### 模型与 RL 基建（Mistral：Guillaume Lample、Pavan Kumar Reddy）
- 音频生成不像文本，还没收敛出公认架构配方；Voxtral TTS 用 flow matching 头替代 depth transformer，4 或 16 步推理出一帧，目标是语音 agent 的实时流式（2026-04-07-mistral-voxtral-leanstral）。
- Lample 判断：软件形式化验证今天市场极小只是因为太难，coding agent 普及后会明显变大；押 Lean 的理由是奖励完全可验证、无 reward hacking 空间。
- RL 工程判断：任务轨迹长到几小时才出一个 reward 时 GRPO 不够用，Mistral 在为约六个月后的场景提前搭新基建。注意整期是 Mistral 自家口径，可核验的是已放出的权重和延迟。

### Harness engineering（OpenAI Frontier：Ryan Lopopolo）
- 五个月零人工代码写出百万行 Electron 应用（约 1,500 PR、日十亿 token），人工 review 移到 merge 之后。核心判断：模型可无限并行，唯一稀缺的是人的同步注意力（2026-04-08-harness-engineering）。
- 方法：把所有工程纪律转成 agent 可读文本（文档、报错带链接、Slack 里叫 Codex 修问题顺手更新文档）；Symphony 编排把人压缩成每天点几次是/否，review 不过的 PR 连 worktree 丢弃重做。
- 对 MCP 偏空：工具定义强行占上下文、干扰 compaction，用本地 daemon + CLI shim 替掉了 Playwright MCP。
- 自陈边界：全新仓库才成立，不应默认适用于有历史包袱的代码库；模型仍不擅长从零到一原型和最难的重构。

### Agent 环境设计与 evals（Notion：Simon Last、Sarah Sachs）
- 五次重写的核心教训「give the models what they want」：环境照模型习惯设计（页面用 markdown、查询用 SQLite），不把自家数据模型的复杂度暴露给它（2026-04-17-notion-harness-rebuilds）。
- evals 分三层：CI 回归、发布前 report card（关键 journey 80-90% 通过才上线）、故意保持 30% 通过率的 headroom evals（内部叫 Notion's last exam）。
- MCP vs CLI 取舍：Simon 看好 CLI（agent 在终端里可自我修复，MCP transport 坏了救不了自己），MCP 权限模型严、适合窄而轻的授权场景；Sarah 补成本帐——能写成确定性代码调 CLI 的就别反复过 MCP 付 token 费。与 04-08 期 Lopopolo 的 MCP 偏空立场构成连续讨论，Notion 更温和（自家 MCP 继续维护）。
- 一手观测：同一模型经一方、Bedrock、Azure 不同渠道出来质量有差异。

## 言论时间线

- 2026-04-07 [2026-04-07-mistral-voxtral-leanstral] Mistral 拆 Voxtral TTS 架构；Lample 预判 coding agent 把形式化验证做成大市场
- 2026-04-08 [2026-04-08-harness-engineering] Lopopolo 讲 harness engineering：五个月零人工代码百万行，人工 review 移到 merge 后
- 2026-04-17 [2026-04-17-notion-harness-rebuilds] Notion 复盘 agent 框架五次重写：按模型习惯设计环境，evals 留 30% 难题层
