# Dan Shipper（Every CEO）

Every（30 人 AI native 内容+产品公司）CEO，AI & I 播客主持人。刊中言论密度最高的 builder 之一：一手运营 25-30 人团队的 agent 部署经验，常以自家数据反驳主流叙事（裁员论、SaaSpocalypse、组织扁平化）。注意他多条言论同时在推广自家产品（Plus One、compound engineering 插件、Spiral），且自陈是 Stainless 小股东、买过 Figma 股票。

## 立场与主张

### 组织如何用 agent
- 反对「AI 让组织不再需要层级」：context rot 决定专业化分工仍必要，分工带来协调层；这条逻辑对人类组织和多 agent 架构同样适用（2026-04-07-shipper-hierarchy-context-rot）。
- **立场变化（1:1 agent → 公司级超级 agent）**：4 月积极复盘全员人手一个 OpenClaw 的实验——agent 长成主人镜像、自发形成平行 org chart（2026-04-09-every-agent-org）；5 月转向「现阶段一个公司级超级 agent + 专人负责，胜过给每人配 1:1 agent」，理由是 agent 需要持续技术维护、有本职工作的人不愿折腾（2026-05-16-danshipper-one-super-agent）。他保留长期对冲：「我们会慢慢走到人手一个那一步」，只是现在还不行。
- 配套观察：「没有一个具体的人负责的 agent 会迅速变成死物」（2026-05-09-anthropic-platform-harness-model-pairing）；夹在 OpenClaw 和用户之间的平台层难做，迭代快、回归多（2026-05-16）。

### 自动化与就业
- 反驳「自动化=裁员」：模型把昨天的专家能力压便宜，涌出大量「接近但不对」的产出，反而抬高对专家收尾和搭流程的需求；Every 自 GPT-3 以来从 4 人长到 30 人还在招（2026-05-28-dan-shipper-after-automation-more-work）。一手总结：「agent 离人越远，就越不值钱。」
- 把裁员归功于 AI 的公司多半是经营不好后甩锅；真实采用速度被一线现实拖慢（有公司裁掉客服两个月后回头返聘）（2026-05-28-dan-shipper-skeptical-of-ai-layoff-claims）。
- 对读者的落点是「ride the models」——他自己标注这是 hope 不是预期。

### 人机分界与 AGI
- 凡是能被清晰表述成「只有人能做」的能力，模型都能当目标 hill-climb 学会；人守得住的是自己也说不清的部分。真正分界在 agency（自发的想做）而非 agent（替你执行），且业界没有动力造前者（2026-05-28-dan-shipper-agent-vs-agency-gap）。
- AGI 操作性定义（两次给出，口径一致）：一个 7×24 不停跑、在经济上划算的 agent；他认为离这还很远，可能需要模型架构层面的改变（2026-04-23-ai-sandwich、2026-05-28-dan-shipper-agent-vs-agency-gap）。
- 人擅长「换框架」解决问题，agent 很难学会，因为这类决策的反馈数据稀少（2026-04-23-ai-sandwich）。
- 不认同「LLM 进展见顶」：体感每隔一两个月就有明显更强的模型，当场反驳过持此观点的嘉宾（2026-04-16-ebm-logical-intelligence）。
- 对「模型失控」的回应：发展谱系在朝更顺从走、行业激励也朝这个方向，他看不出会变的理由（2026-05-28-dan-shipper-agent-vs-agency-gap）。

### 工具、界面与 SaaS
- 提出 codex-native / Cursor-native 应用：为 agent 内置浏览器设计、人和 agent 共享全部上下文的应用，是大的造软件机会（2026-04-29-codex-native-apps）。
- SaaSpocalypse 叙事搞反了：自己跑 agent 会让你更依赖（而非摆脱）底层 SaaS 的数据模型和业务逻辑；chat 不适合需要发散思维的设计工作（2026-06-04-dan-shipper-saaspocalypse-backwards-chat-wrong-for-design，转述并背书 Figma 嘉宾观点）。
- 工作流偏好：「想清楚」类思考型任务用 Claude，长草稿转播客复听用 Codex（2026-05-28-dan-shipper-writing-workflow-claude-codex）。

### 自家产品线（言论常与之绑定）
- compound engineering：计划-执行-review-compound 四步，把教训沉淀回仓库是最大杠杆（2026-04-23-ai-sandwich，推广自家插件）。
- Plus One：内部 agent 最佳实践打包的托管产品（2026-04-09-every-agent-org 整期为其铺垫）。
- Spiral 4.0：基于 stylometry 的写作引擎，MCP/CLI 接入供 agent 调用（2026-06-05-spiral-4-stylometry-writing-agent）。

## 言论时间线

- 2026-04-07 [2026-04-07-shipper-hierarchy-context-rot] 反对「AI 消灭组织层级」：context rot 决定专业化分工仍必要
- 2026-04-09 [2026-04-09-every-agent-org] 复盘 25 人全员配 agent 两个月：镜像化、平行 org chart、群聊失控等失败模式
- 2026-04-16 [2026-04-16-ebm-logical-intelligence] 访谈 Logical Intelligence 创始人，当场反驳「LLM 见顶」判断
- 2026-04-23 [2026-04-23-ai-sandwich] 与 Kieran Klaassen 谈三明治结构；补充人擅长换框架、给出 AGI 经济性定义
- 2026-04-29 [2026-04-29-codex-native-apps] 提出 codex-native 应用：跑在 agent 内置浏览器、人机共享上下文
- 2026-05-09 [2026-05-09-anthropic-platform-harness-model-pairing] 与 Anthropic 平台团队对谈；提出无人负责的 agent 会迅速变死物
- 2026-05-16 [2026-05-16-danshipper-one-super-agent] 立场转向：现阶段公司级超级 agent 胜过 1:1 agent；中间层平台难做
- 2026-05-21 [2026-05-21-stainless-mcp-code-execution-future] 访谈 Stainless 创始人谈 MCP 代码执行路线（自陈小股东）
- 2026-05-28 [2026-05-28-dan-shipper-after-automation-more-work] AI 压便宜专家能力反而抬高专家需求，Every 4→30 人为证
- 2026-05-28 [2026-05-28-dan-shipper-agent-vs-agency-gap] 能说清的能力模型都能学会；分界在 agency 而非 agent
- 2026-05-28 [2026-05-28-dan-shipper-skeptical-of-ai-layoff-claims] 把裁员归功于 AI 的公司多半经营不好；采用速度被高估
- 2026-05-28 [2026-05-28-dan-shipper-writing-workflow-claude-codex] 公开 8000 字长文工作流：Claude 想清楚、Codex 转播客复听
- 2026-06-04 [2026-06-04-dan-shipper-saaspocalypse-backwards-chat-wrong-for-design] SaaSpocalypse 搞反了：跑 agent 更依赖 SaaS；chat 不适合设计
- 2026-06-05 [2026-06-05-spiral-4-stylometry-writing-agent] 发布 Spiral 4.0：stylometry 写作引擎，MCP/CLI 供 agent 调用
