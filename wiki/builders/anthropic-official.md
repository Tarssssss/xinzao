# Anthropic 官方（发布账号 / 工程博客 / 安全团队）

Anthropic 官方口径的集合页（@Claude 发布账号、Claude Blog、Anthropic Engineering、安全团队），刊内最高频信源；主线是把 agent 基础设施平台化，同时反复强调用环境层硬边界控制 agent 的影响半径。注意：所有评测数字（+10 分、-97% 错误等）均为厂商自家口径，页内引用时默认带此前提。

## 立场与主张

### Agent 基础设施：harness 会过期，所以要平台托管
- 核心论点：harness 是对「模型自己做不到什么」的假设集合，模型升级假设就过时（Sonnet 4.5 的 context 重置补丁到 Opus 4.5 成了死重量），解法是把 session / harness / sandbox 解耦成互不假设的接口（2026-04-09-managed-agents-architecture）。
- 据此推出 Managed Agents：开发者只定义任务、工具、护栏，沙箱、长 session、凭证、追踪由平台接管（2026-04-09-managed-agents-launch）。
- **立场细化（非反转）**：4 月初主张全托管，5 月改为允许工具执行留在客户自托管沙箱内、Anthropic 只留编排循环，回应企业「数据不出域」诉求（2026-04-09-managed-agents-launch → 2026-05-20-anthropic-managed-agents-self-hosted-sandboxes-mcp-tunnels）。
- 记忆设计选择「记忆即文件」：挂载文件系统、可导出可审计可回滚（2026-04-24-managed-agents-memory）。

### 减少人工盯 agent：rubric 验收 + 跨 session 自我改进
- 一贯方向是把「人 review 每次产出」替换为机制：advisor 工具让 Sonnet 中途咨询 Opus（提分还降本，2026-04-10-claude-opus-advisor-tool）；outcomes 用独立 context 的 grader 按 rubric 验收、agent 迭代到过线；dreaming 跨 session 复盘沉淀记忆（2026-05-07-claude-dreaming-outcomes、2026-05-14-claude-managed-agents-dreaming-outcomes）。
- 配套的成本控制：API 加 xhigh effort 档和 task budgets（2026-04-17-opus-47-launch）。
- 对工作形态的判断：agentic 工作已是多 session 并行、人坐编排位，Claude Code 桌面版按此重做（2026-04-15-claude-code-desktop-redesign）。

### 安全：环境层硬边界优先于模型层防护
- 判断：24 个月内大量沉睡漏洞会被 AI 批量找出串成 exploit，修补窗口收缩；最实操建议是用攻击者同款模型先扫自己代码（2026-04-13-anthropic-security-guide）。
- 工程结论：失败概率靠模型层压，影响半径只能靠环境层硬上限；权限弹窗批准率约 93%，人工监督失效，所以走沙箱 + 出口控制；三起真实事故全出在自建组件而非成熟沙箱原语，白名单应理解为「能力授权」而非目的地过滤（2026-05-27-anthropic-contain-claude-blast-radius）。
- 一贯原则：凭证永不进模型跑生成代码的沙箱（2026-04-09-managed-agents-architecture、2026-05-20-anthropic-managed-agents-self-hosted-sandboxes-mcp-tunnels）。
- 产品化为 Claude Security（公测，限 Enterprise，2026-05-01-claude-security-beta）。

### 分发与生态：connector 当入口，端云分工
- connector 目录扩到 200+，改为对话中动态推荐，官方重申无广告、无付费排位（2026-04-24-claude-lifestyle-connectors）；扩展到 Blender、Fusion 等创意工具并加入 Blender 开发基金（2026-04-29-claude-creative-connectors）。
- 端云混合：接入 Apple Foundation Models，设备端做快任务、复杂推理交接给 Claude，交接点输入是结构化 Swift 值（2026-06-09-claude-foundation-models-framework）。

### 质量透明度
- 公开复盘「Claude 变笨」：三个独立改动（默认 effort 降档、清思考历史的缓存 bug、压输出长度的系统提示词）叠加所致，全部回滚/修复并重置订阅额度；后续承诺逐行 ablation、灰度发布（2026-04-24-claude-code-postmortem）。

## 言论时间线

- 2026-04-09 [2026-04-09-managed-agents-launch] 发布 Managed Agents，沙箱/凭证/长时运行做成托管服务，公测
- 2026-04-09 [2026-04-09-managed-agents-architecture] 工程团队解释大脑和手解耦：harness 里的能力假设随模型升级过时
- 2026-04-10 [2026-04-10-claude-opus-advisor-tool] advisor 工具 beta：Sonnet 中途咨询 Opus，提分 2.7 点、单任务成本降 11.9%
- 2026-04-13 [2026-04-13-anthropic-security-guide] 安全团队判断两年内沉睡漏洞将被 AI 批量挖出，给出按「还守得住」排序的防御清单
- 2026-04-15 [2026-04-15-claude-code-desktop-redesign] 桌面版围绕多 session 并行重做，设计前提是人坐编排位
- 2026-04-17 [2026-04-17-opus-47-launch] Opus 4.7 全平台上线，Claude Code 加 /ultrareview，API 加 xhigh 和 task budgets
- 2026-04-18 [2026-04-18-anthropic-product-day] 一天三连发：Claude for Word 进 Pro/Max、设计系统生成、黑客松重启
- 2026-04-21 [2026-04-21-claude-live-artifacts] Cowork 上线 Live Artifacts，仪表盘可接数据、持久化带版本历史
- 2026-04-24 [2026-04-24-claude-code-postmortem] 复盘 Claude Code 质量下滑：三个独立改动叠加，全部修复并重置额度
- 2026-04-24 [2026-04-24-managed-agents-memory] Managed Agents 内置记忆公测：记忆是文件，可导出、审计、回滚
- 2026-04-24 [2026-04-24-claude-lifestyle-connectors] connector 扩到生活类应用，改为对话中动态推荐，重申无付费排位
- 2026-04-29 [2026-04-29-claude-creative-connectors] 上线 Blender、Fusion 等创意工具 connector，加入 Blender 开发基金
- 2026-05-01 [2026-05-01-claude-security-beta] Claude Security 公测：模型扫代码安全问题，限 Enterprise
- 2026-05-07 [2026-05-07-claude-dreaming-outcomes] 发布 Outcomes（rubric 验收）和 Dreaming（复盘 session 沉淀记忆）
- 2026-05-14 [2026-05-14-claude-managed-agents-dreaming-outcomes] Managed Agents 上 dreaming/outcomes/多智能体编排，主打少人工干预
- 2026-05-20 [2026-05-20-anthropic-managed-agents-self-hosted-sandboxes-mcp-tunnels] 自托管沙箱 + MCP 隧道，工具执行可留在企业边界内
- 2026-05-27 [2026-05-27-anthropic-contain-claude-blast-radius] 复盘三款 agent 产品隔离设计与三起事故：自己写的那层最弱
- 2026-06-09 [2026-06-09-claude-foundation-models-framework] 接入 Apple Foundation Models：设备端模型复杂推理时交接给 Claude
- 2026-07-01 [2026-07-01-sonnet5-launch] Sonnet 5 上线，成为 Free/Pro 默认模型；官方称性能接近 Opus 4.8、不靠提示词自行验证输出；Box 企业评测同步公布分行业读数
