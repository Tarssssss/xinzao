# harness 与模型：解耦还是绑死

争的是 agent harness 和底层模型的关系：一派主张 harness 做通用、模型热插拔，agent 的状态和能力放在文件里、与模型解耦；另一派（以 Anthropic 和 OpenAI 后训练团队为代表）认为 harness 编码的是「模型做不到什么」的假设，模型一升级假设就过时，下一代模型训练路径分化后，harness 必须随模型共同设计。这条线索值得跟踪，因为它直接决定 builder 的架构选型（自建通用框架还是绑定单一模型栈）、重写节奏预期，以及「换模型」之争背后真正的护城河（memory、私有 eval）落在哪一层。两个月内从工程细节吵到了平台锁定和企业 IP。

## 各方立场

- **Anthropic（工程团队 / Claude 平台团队 / Alex Albert）**：立场最连贯的「绑定」派，但绑定的层次在演进。先说 harness 是会过期的补丁集合，每次模型升级要重新验证、删死代码，架构上把 session/harness/sandbox 拆成互不假设的接口（[2026-04-09-managed-agents-architecture]）；平台团队再把删死代码做成方法论，例证 Opus 4.6 自己写代码过滤工具输出反而涨分（[2026-04-11-harness-dead-weight]）；到 5 月直接宣布「通用 harness 热插拔模型的时代正在过去」，真正可热插拔的单位是「harness + 模型」整体（[2026-05-09-anthropic-platform-harness-model-pairing]）；Alex Albert 补了造模型侧的视角：同一模型在不同壳里行为不同，模型与 harness 要一起设计（[2026-05-19-alex-albert-building-next-claude]）；7 月把「harness + 模型」这个绑定单位再往上叠一层——知识/执行/协调三层抽象，协调层（strategies）本质是给 token 分饰不同角色的元 harness，执行层基础设施本身反而主张不锁定（自家/Modal/Vercel/Cloudflare 均可），锁定的是编排接口而非硬件（[2026-07-15-anthropic-platform-ecosystem-not-walled-garden]）。
- **OpenAI（Yann Dubois / Frontier 团队实践）**：与 Anthropic 同向。Dubois 直接建议别押注通用 harness，撑不过模型迭代；但垂直领域把可靠性从 80% 抬到 85% 的「最后一公里」harness 值得做，做好将来重调的准备（[2026-05-22-yann-dubois-harness-last-mile]）。Frontier 的 Ryan Lopopolo 是实践注脚：模型换代时整个代码库跟着改（GPT-5.3 变得没耐心，一周内把构建系统压到一分钟内），harness 与当前模型行为深度绑定（[2026-04-08-harness-engineering]）。
- **Garry Tan（YC）**：解耦派，但解耦的对象是数据不是 harness 本身。主张 thin harness、fat skills，memory 和技能放在 markdown 和 git 里，harness 只读不拥有——harness 死掉时记忆跟着死就是建得太厚（[2026-04-12-thin-harness-fat-skills]）；6 月升级成平台政治论：memory 是唯一应该能带去任何平台的东西，要自己托管，否则就是在别人生态里当佃农，这会是 2027 年「harness 之战」的决定性战场（[2026-06-01-garrytan-own-your-memory-harness-wars]）。
- **Marc Andreessen（a16z)**：最彻底的解耦派。agent 等于模型加 bash 加文件系统加 cron 循环，状态全在文件里，换模型只是性格变了、记忆和能力都还在；顺带否定 MCP，认为命令行接口够用（[2026-04-13-andreessen-agent-unix]）。
- **Notion（Simon Last / Sarah Sachs）**：用五次重写给出中间答案——环境照模型的习惯设计（markdown、SQLite），give the models what they want；同时观测到同一模型经不同渠道（一方 / Bedrock / Azure）质量有差异，「热插拔」在供给侧本来就不成立（[2026-04-17-notion-harness-rebuilds]）。
- **Aaron Levie（Box）**：从节奏角度站绑定派的事实判断——agent 工程里补模型限制的部分作废最快，每隔几个季度要扔掉很大一部分，且这个节奏短期不会放缓（[2026-04-19-levie-agent-architecture-churn]）。
- **Satya Nadella（Microsoft）**：把争论引到护城河层：企业真正的 IP 是私有 eval，检验标准是换模型后还能不能继续 hill-climb——能爬坡说明资产在自己手里，不能就受制于人。等于承认 harness 本身留不住，可迁移的是评估能力（[2026-06-04-satya-nadella-private-evals-harness-moat]）。

## 时间线

- 2026-04-08 [2026-04-08-harness-engineering] OpenAI Frontier 的 Lopopolo 展示 harness 工程实践：模型换代时代码库整体跟改，五个月零人工代码写出百万行产品
- 2026-04-09 [2026-04-09-managed-agents-architecture] Anthropic 工程团队提出 harness 是「模型做不到什么」的假设集合，模型升级假设即过时；架构上把 session/harness/sandbox 解耦
- 2026-04-11 [2026-04-11-harness-dead-weight] Anthropic 平台团队建议每次模型升级后重问哪些 harness 代码已成死重，给出 BrowseComp 45.3%→61.6% 的删代码例证
- 2026-04-12 [2026-04-12-thin-harness-fat-skills] Garry Tan 主张 thin harness、fat skills：memory 和技能放 markdown 和 git，harness 只读不拥有
- 2026-04-13 [2026-04-13-andreessen-agent-unix] Andreessen 给出最彻底的解耦版本：agent 本体只是一堆文件，模型可换、记忆能力都留在文件里
- 2026-04-17 [2026-04-17-notion-harness-rebuilds] Notion 复盘五次重写：环境要照模型的习惯设计，别迁就自家数据模型；同一模型不同渠道质量有差异
- 2026-04-19 [2026-04-19-levie-agent-architecture-churn] Levie 观察：补模型限制的 agent 工程作废最快，每隔几个季度扔掉很大一部分
- 2026-05-09 [2026-05-09-anthropic-platform-harness-model-pairing] Anthropic 平台团队明确宣判：通用 harness 热插拔模型的时代正在过去，热插拔单位应是「harness + 模型」整体
- 2026-05-19 [2026-05-19-alex-albert-building-next-claude] Alex Albert 从造模型侧确认耦合：同一模型在不同壳里行为不同，模型与 harness 要一起设计
- 2026-05-22 [2026-05-22-yann-dubois-harness-last-mile] OpenAI 的 Dubois 给 builder 划线：通用 harness 别投太多，垂直「最后一公里」harness 值得做但要准备重调
- 2026-06-01 [2026-06-01-garrytan-own-your-memory-harness-wars] Garry Tan 把战线推到数据主权：memory 要自己托管，2027 年「harness 之战」的决定性战场
- 2026-06-04 [2026-06-04-satya-nadella-private-evals-harness-moat] Nadella 给出护城河判据：企业 IP 是私有 eval，检验标准是换模型后还能不能继续 hill-climb
- 2026-07-15 [2026-07-15-anthropic-platform-ecosystem-not-walled-garden] Anthropic 平台团队把绑定单位再叠一层：知识/执行/协调三层抽象，协调层给 token 分饰不同角色；执行层基础设施反而主张不锁定自家硬件
