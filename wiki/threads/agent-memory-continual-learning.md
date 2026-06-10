# agent 记忆与持续学习

agent 用得越久该越懂你，但模型层做不到：OpenAI 的 Yann Dubois 承认持续学习没破解，模型第 0 天起点高、之后曲线近乎水平。于是问题变成记忆放哪——写进文件还是改进权重。当前各方实际押的都是文件这条非参数路线：Garry Tan 从 4 月起持续迭代开源的 GBrain，Anthropic 把 Managed Agents 记忆做成文件并用 Dreaming 自动剪枝，Vinyals 从 serving 成本论证文件系统短期必先跑通。分歧在上层：记忆该归平台托管还是用户自持，Tan 已把它上升为 2027「harness 之战」的决定性战场。这条线索同时牵着技术路线（文件 vs 权重）、产品形态（手工维护 vs 自动沉淀）和平台锁定三个问题，值得持续跟。

## 各方立场

- **Garry Tan（YC）**：自下而上的开源实践派。先开源自用的 GBrain 配置、定位「帮你搭 mini-AGI」（2026-04-10-garry-tan-gbrain），持续迭代搜索与安全（2026-04-14-gbrain-v093）；提出 SOUL.md/USER.md/AGENTS.md 三文件分层，主张指令越具体 agent 越不像 chatbot（2026-04-27-garry-tan-three-files）；产品观点是记忆不是「装在盒子里的 RAG」，要 8 层系统协同（2026-05-17-garry-tan-gbrain-agent-memory）；开源 eval 和 fixtures、邀请别家同台跑分（2026-05-19-garrytan-gbrain-open-evals）；最终把立场推到平台层——memory 是唯一该可携带的东西，必须自持自托管，否则是给别人的生态当佃农（2026-06-01-garrytan-own-your-memory-harness-wars）。
- **Anthropic**：记忆即文件 + 自动沉淀的产品化路线。Managed Agents 内置记忆按文件存储，可导出、审计、回滚，多 agent 按权限共享（2026-04-24-managed-agents-memory）；Dreaming 复盘历史 session 提炼模式沉淀成记忆，Outcomes 用 rubric + 独立 grader 验收，合起来减少人盯环节（2026-05-07-claude-dreaming-outcomes）；Alex Albert 补充内部机制——Claude 闲时回顾记忆、找矛盾并剪枝（即「做梦」），且模型与 harness 耦合、得一起设计（2026-05-19-alex-albert-building-next-claude，Peter Yang 转述）。
- **Yann Dubois（OpenAI 后训练）**：坦承派。持续学习是没攻克的瓶颈，模型不随使用变高效，连单用户场景都没做到，他也说不清为什么这么难；含义是「越用越懂你」短期只能靠外部记忆自己补（2026-05-22-yann-dubois-continual-learning）。
- **Oriol Vinyals（Gemini）**：文件系统路线的理论背书。持续学习更可能走文件系统式记忆而非改权重，理由是 serving 约束——一个模型服务所有用户，不可能每人一份权重；分量可能等同一年半前的 reasoning，精心维护的知识库可成早期玩家的护城河（2026-05-23-vinyals-memory-filesystem-continual-learning）。

## 时间线

- 2026-04-10 [2026-04-10-garry-tan-gbrain] Garry Tan 开源自用 agent 记忆配置 GBrain，MIT 协议，称对上万 markdown 文件「完全召回」
- 2026-04-14 [2026-04-14-gbrain-v093] GBrain v0.9.3：搜索调优、搜索 evals、CJK 查询、多个安全热修复
- 2026-04-24 [2026-04-24-managed-agents-memory] Claude Managed Agents 内置记忆公测：记忆即文件，可导出、审计、回滚，官方称 Rakuten 首轮错误降 97%
- 2026-04-27 [2026-04-27-garry-tan-three-files] Tan 公开三文件配置：SOUL.md 定人格、USER.md 建用户模型（约 4000 词）、AGENTS.md 管操作
- 2026-05-07 [2026-05-07-claude-dreaming-outcomes] Claude 发布 Outcomes（rubric + 独立 grader 验收）和 Dreaming（复盘 session 沉淀记忆），后者申请制
- 2026-05-17 [2026-05-17-garry-tan-gbrain-agent-memory] Tan 给 GBrain 定调：不是装在盒子里的 RAG，靠 8 层结构协同「记住用户」
- 2026-05-19 [2026-05-19-garrytan-gbrain-open-evals] GBrain 开源完整 eval 报告和 fixtures，邀请其他记忆系统跑同一套基准
- 2026-05-19 [2026-05-19-alex-albert-building-next-claude] Alex Albert（Peter Yang 转述）：Claude 闲时「做梦」整理记忆、剪枝矛盾；模型与 harness 耦合设计
- 2026-05-22 [2026-05-22-yann-dubois-continual-learning] OpenAI 的 Dubois 承认持续学习没破解：模型起点高于新员工但之后基本不长进
- 2026-05-23 [2026-05-23-vinyals-memory-filesystem-continual-learning] Vinyals 判断持续学习走文件系统式记忆而非改权重，serving 约束是核心理由
- 2026-06-01 [2026-06-01-garrytan-own-your-memory-harness-wars] Tan 主张自持自托管 memory，预言 2027「AI harness 之战」，memory 可携带性决定平台锁定
