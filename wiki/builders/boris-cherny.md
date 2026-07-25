# Boris Cherny（Claude Code 作者 @ Anthropic）

Claude Code 作者，刊中最重度的 agent 工作流实践者，核心论点是「模型越强，harness 越不重要」。所有言论均为 Anthropic 内部人立场，引用时需保留这层校准。

## 立场与主张

**模型 vs harness（有立场变化）**
- 半年到一年前他把 Claude Code 的成功一半归模型、一半归产品；2026-05 已转向「模型越强，harness 越不重要」（见 2026-05-07-boris-cherny-sequoia）
- 顺此预测：一年内模型对齐会好到让 prompt injection 防护、permission 模式、human in the loop 等机制变得不那么必要（自己标注为预测，2026-05-07-boris-cherny-sequoia）
- 2026-06 用 Fable 5 进一步佐证：模型自带 debug 自验证行为（加日志、测量、确认修好才报完成），不来自 Claude Code 提示词——过去靠提示词叮嘱的工程纪律可能可以从 harness 省掉一层（2026-06-10-cherny-fable5-thought-design-partner）

- 2026-07 给这条预测补上第一批证据：称 Opus 5 是 Anthropic 至今最难被 prompt injection 的模型（跨 PI 评测与红队），但攻击成功率降到接近 0 靠的是三层叠加——模型对齐 + 注入探针 + Claude Code 的 Auto Mode，也就是说 harness 那层现在还减不掉；方法与数字未公开，他只说「很快会讲更多」（2026-07-25-cherny-opus5-prompt-injection）

**Agent 工作流实践（一手数据）**
- 自述：Claude Code 代码库自 2025 年十、十一月起 100% 由模型写；单日纪录 150 个 PR；每晚几千个 agent，靠 /loop 自管理（2026-05-07-boris-cherny-sequoia）
- 长任务自主跑五要素：auto 权限、dynamic workflow 编排子 agent、/goal 或 /loop 续跑、云端执行、端到端自检闭环；缺自检则跑得越久错误累积越大（2026-06-08-boris-cherny-opus-autonomous-five-tips）

**组织与流程重构**
- 收益最大的团队在重设工作流（删步骤、去交接、agent 端到端接管），而非加速旧流程；引 Salesforce 案例：231 天迁移压到 13 天，事故反降 5%（2026-05-30-salesforce-agentic-claude-code-boris-cherny）
- 否认「产能与质量是 tradeoff」：把质量门槛内建进 agentic workflow 即可（同上）
- 团队形态预测：跨职能通才变多，Claude Code 团队人人写代码（2026-05-07-boris-cherny-sequoia）

**行业判断**
- 借 7 Powers 框架：切换成本和流程优势类护城河会贬值，网络效应、规模经济、独占资源不受影响（2026-05-07-boris-cherny-sequoia）
- 未来十年颠覆型创业公司比过去十年多 10 倍；历史类比是印刷机；写软件难的部分是懂业务，「懂行的会计写记账软件」可能今天已成立（同上）

## 言论时间线

- 2026-05-07 [2026-05-07-boris-cherny-sequoia] Sequoia 播客：代码 100% 模型写、每晚几千 agent；判断 harness 随模型变强而贬值、切换成本类护城河失效
- 2026-05-30 [2026-05-30-salesforce-agentic-claude-code-boris-cherny] 引 Salesforce 数据：231 天迁移 13 天交付、事故降 5%；主张重设工作流而非加速旧流程
- 2026-06-08 [2026-06-08-boris-cherny-opus-autonomous-five-tips] 给出让 Opus 连续自主跑数小时到数天的五条配置：权限、编排、续跑、云端、自检
- 2026-06-10 [2026-06-10-cherny-fable5-thought-design-partner] 评 Fable 5：从执行编码的 agent 变成一起想问题做设计的伙伴，自验证 debug 行为系模型自带
- 2026-07-25 [2026-07-25-cherny-opus5-prompt-injection] 称 Opus 5 最难被注入，叠上探针与 Auto Mode 后攻击成功率约 0（内部口径，方法未公开）
