# skill 工程实践

skill 正在从「给 agent 的提示词片段」变成有完整工程生命周期的资产：怎么写（token 成本意识）、怎么组织（合并还是拆分）、怎么评测（LLM 评委、真实案例对照）、怎么自我改进（memory、自清理）。值得跟踪的原因有两层：一是产品含义——Kevin Weil 披露 Prism 的 Paper Review 功能就是几小时写出的一个 skill，产品建在 coding harness 上之后新功能的增量成本可能低到一个 skill；二是方法论正在收敛——Garry Tan、Steipete、Peter Yang、Nikunj Kothari 各自给出的实践互相补位，拼起来已经接近一套「skill 即代码」的工程规范：版本化存储、context 预算、evals 回归、持续维护。这条线索与 agent 记忆线（thin harness 主张同源）相邻但问题不同：记忆线争的是放哪，这条线争的是怎么做好。

## 各方立场

- **Garry Tan（YC）**：本线索的主力输出者，三次表态构成一条递进线。架构层主张 thin harness、fat skills——能力沉在 markdown skills 里、大脑是 git 仓库，harness 只读不拥有，判据是「harness 死掉时记忆也跟着死，就是 harness 建得太厚」（[2026-04-12-thin-harness-fat-skills]）；组织层给出合并经验——相邻 skill 让模型自己做 DRY，合成带分支参数的大 skill，更少更肥则 resolver 更短、context 膨胀更小，自称只是「目前为止」的经验并征集同行实验（[2026-04-23-fewer-fatter-skills]）；评测层给出迭代法——让 agent 用三个不同前沿模型审 skill file 调用代码的输入输出、按有效性打分并追问「为什么不是 10 分」，再用 evals（LLM 评委）和单测把改进固化成可回归的资产（[2026-05-26-garry-tan-skill-file-evals]）。
- **Kevin Weil（OpenAI）**：提供「skill 即功能」的产品级例证。Prism 的 Paper Review 按技术审稿人标准查论文、输出可编辑 LaTeX 审稿文件，整个功能是一人几小时写出的一个 skill，因为 Prism 底层由 Codex 驱动（[2026-04-08-prism-paper-review]）。
- **Peter Steinberger（OpenClaw / OpenAI）**：成本纪律派。要害在 skill 描述不是用到才读、而是每次都装进 context，太多 skill 在描述里「写了一整本书」；做法是写 skill 时直接让 agent 把描述写得 token 高效、放松语法，并配了一个专门揪出最臃肿 skill 的检测工具（[2026-05-26-steipete-token-efficient-skills]）。与 Tan 的「短 resolver」主张同向：都把 context 占用当成 skill 的一等约束。
- **Nikunj Kothari（FPV Ventures）**：个人判断沉淀的样板案例。用 Claude Code 从 200 多份 Granola 会议记录筛出约 53 场高信号 pitch 对话，加上自己写过的文章，搭出模拟他本人评 deck 的 Nock skill；关键是拿 5-10 份真实 deck 和对话做对照式迭代，把「像不像我」做成可比对的 eval 而不是凭感觉调（[2026-06-05-nikunj-nock-skill-from-meeting-notes]）。
- **Peter Yang（Roblox）**：把上述实践整合成可照搬的五步法——好坏样例进上下文、固定句式写触发描述、10 条通过/不通过的 evals、记一句话经验的 memory 文件，以及元层面的「清理 skill 的 skill」，专删其他 skill 里重复过时的指令和 AI 套话；含义是把 skill 库当成需要持续维护的代码来管（[2026-06-06-peter-yang-self-improving-skills]）。

## 时间线

- 2026-04-08 [2026-04-08-prism-paper-review] Kevin Weil：Prism 的 Paper Review 功能是几小时写出的一个 skill，底层是 Codex
- 2026-04-12 [2026-04-12-thin-harness-fat-skills] Garry Tan 主张 thin harness、fat skills：memory 和 skills 全用 markdown、放 git 仓库，harness 只读不拥有
- 2026-04-23 [2026-04-23-fewer-fatter-skills] Tan 分享组织经验：相邻 skill 合并成带分支参数的大 skill，更少更肥则 resolver 更短更省 context
- 2026-05-26 [2026-05-26-garry-tan-skill-file-evals] Tan 给出迭代法：三个前沿模型交叉给 skill 调用打分、追问满分差距，evals 加单测固化改进
- 2026-05-26 [2026-05-26-steipete-token-efficient-skills] Steipete 提醒 skill 描述每次都进 context：让 agent 压缩描述、放松语法，并放出臃肿检测工具
- 2026-06-05 [2026-06-05-nikunj-nock-skill-from-meeting-notes] Nikunj 用 200 多份会议记录搭 Nock skill，拿 5-10 场真实对话对照打磨到「像他本人」
- 2026-06-06 [2026-06-06-peter-yang-self-improving-skills] Peter Yang 五步法：样例、触发描述、10 条 evals、一句话 memory、清理 skill 的 skill
