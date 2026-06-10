# 人人写代码与一人公司

coding agent 把「谁在写代码」和「一家公司需要几个人」两个问题同时打开了。一边是写代码的人群扩散：SPC 全团队两个月内从一两个人写代码变成全员每周写代码，投资人 Nikunj 上线第一个收钱项目，上市公司 CEO 私信 Rauch 说重新爱上发软件，连不写代码的 Zara Zhang 都在 vibe code 浏览器插件；另一边是团队规模收缩到极限：Ryan Carson 拿了 200 万美金种子轮但不招人、拿 agent 当团队，Josh Pigford 单人同时推多个产品，Tibo 单人做到月收入超 100 万美金。两条线共用同一套方法论且在持续沉淀——先搭系统和文档再做功能（Carson）、收费当筛子（Tibo、Pigford）、管住 agent 的过度工程（Zara）、跨模型 review 和失败沉淀成规则（Pigford）。值得跟踪有三个原因：旧创业铁律在被逐条反转（MVP 优先→系统优先、协作→不协作）；扩散并不均匀，Feldman 给出同一家公司内 10x 与 100x 的分化数据；几乎所有素材都是实践者自述，「行得通」的判断需要持续核验。

## 各方立场

- **Aditya Agarwal（SPC，前 Dropbox CTO）**：组织扩散的一手数据点。SPC 全团队每周写代码，两个月前只有一两个人；变化是全员自动化心态、延迟变低、野心范围扩大，启动条件是先让每个人 AI coding-pilled；结论直接——公司不做这件事就是在错过（[2026-04-09-spc-everyone-codes]）。
- **Zara Zhang（builder）**：「不协作」的极端主张加亲身示范。主张人类协作最高效的方式是不协作：一个人端到端拥有一件事、和 agent 一起工作，人际沟通只留决策、陪伴、脑暴三类（[2026-04-12-zara-no-collaboration]）；实践上 vibe code 了 Chrome 新标签页 tab 管理器并开源（[2026-04-13-zara-newtab-vibecode]）；复盘给出关键经验——20% 时间做功能、80% 时间砍功能，「Claude 倾向做过头，你得管住它」，入口要放进已有高频动线（[2026-04-15-zara-tab-out-cutting-features]）。
- **Nikunj Kothari（FPV Ventures）**：先泼冷水后下场的双重角色。4 月提醒简单工作流会被 vibe code 掉、但质量和深度仍要时间，「经验教训没法 vibe code 出来」（[2026-04-15-nikunj-vibe-code-lessons]）；半个月后自己用 Claude、Railway、Conductor 上线第一个付费 side project（购房报告工具），按成本价卖、半价码换反馈（[2026-05-02-nikunj-paid-side-project]）。
- **Tibo（经 Peter Yang 转述）**：solo 商业化的标杆样本。第一天就收费、用付费验证需求；跟着用户的意外用法整体转向（Typeframe 2000 美金 MRR → Revid 超 60 万美金）；定价 50-100 美金/月过滤光试不买的人；月流失超 20% 先停买量修产品（[2026-04-28-tibo-solo-playbook]）。
- **Andrew Feldman（Cerebras CEO）**：扩散不均的内部观察。公司月度编码 token 花费八个月从不到一千美元涨到两三万，但收益集中在少数已切换到「治理 agent」工作方式的人——同时跑八到十个 agent、专设 QA agent、补模型弱点，10x 与 100x 拉开差距；多数人包括他自己还在摸索（[2026-05-24-feldman-coding-adoption-split]）。
- **Ryan Carson（经 Peter Yang 转述）**：一人公司方法论最系统的版本。拿 200 万美金种子轮但短期不招人：OpenClaw 当 AI 幕僚长，Codex、Devin 当工程团队，把 agent 当真正员工管（独立邮箱、日历、GitHub 账号）（[2026-05-25-ryan-carson-solo-founder-agents]）；并明确反转旧建议——过去说先出 MVP 别搭系统，现在要先搭文档和系统再让 agent 交付，「一个人干十个人的活」（[2026-05-26-ryan-carson-systems-first-reversal]）。
- **Guillermo Rauch（Vercel CEO）**：把扩散推到 C-suite 层并给出商业解读。上市公司 CEO 私信他说靠 Claude Code 和 Vercel 重新爱上发软件；coding agent 让技术栈优劣全组织自证、糟糕的遗留软件藏不住，他称之为企业市场的终极 PLG 化。立场偏向自家生意，本人也对冲了「不确定是否持久」（[2026-06-01-rauchg-coding-agents-plg-fication-enterprise]）。
- **Josh Pigford（经 Peter Yang 转述）**：单人多产品的工程化打法。有内置成本的产品第一天就收费、养不活就关停退款；git worktree 并行开发、用一个模型构建换另一个模型 review（「GPT 总能挑出三到五个 Opus 漏掉的 bug」）；/learnings skill 把每次失败固化成规则。同时给了立场提示：出活快归功于 AI 之前 25 年的积累，新手别把他的速度当 agent 默认水平（[2026-06-02-josh-pigford-solo-ai-workflow]）。

## 时间线

- 2026-04-09 [2026-04-09-spc-everyone-codes] Agarwal：SPC 全团队每周写代码，两个月前只有一两个人，关键是先让每个人上手 AI coding
- 2026-04-12 [2026-04-12-zara-no-collaboration] Zara Zhang：人类协作最高效的方式是不协作，一个人端到端负责并和 agent 一起工作
- 2026-04-13 [2026-04-13-zara-newtab-vibecode] Zara 用 vibe coding 把 Chrome 新标签页改成 tab 管理器，代码开源
- 2026-04-15 [2026-04-15-zara-tab-out-cutting-features] Zara 复盘 Tab Out：20% 时间做功能、80% 时间砍功能，Claude 倾向做过头得管住
- 2026-04-15 [2026-04-15-nikunj-vibe-code-lessons] Nikunj：简单工作流会被 vibe code 掉，但「经验教训没法 vibe code 出来」
- 2026-04-28 [2026-04-28-tibo-solo-playbook] Peter Yang 提炼 Tibo 打法：第一天收费、跟着用户意外用法转向、月流失超 20% 先修产品
- 2026-05-02 [2026-05-02-nikunj-paid-side-project] Nikunj 上线第一个付费 side project：购房报告工具，按成本价卖、半价码换反馈
- 2026-05-24 [2026-05-24-feldman-coding-adoption-split] Feldman：Cerebras 内部 AI 编码产出分化成 10x 与 100x，差距在有没有切到「治理 agent」的工作方式
- 2026-05-25 [2026-05-25-ryan-carson-solo-founder-agents] Carson（Peter Yang 转述）：拿 200 万美金种子轮但不招人，OpenClaw 当幕僚长、Codex 和 Devin 当工程团队
- 2026-05-26 [2026-05-26-ryan-carson-systems-first-reversal] Carson：「先出 MVP 别搭系统」在 agent 下反转，先搭文档和系统才能一个人干十个人的活
- 2026-06-01 [2026-06-01-rauchg-coding-agents-plg-fication-enterprise] Rauch：上市公司 CEO 重新亲自写代码，coding agent 是企业市场的终极 PLG 化
- 2026-06-02 [2026-06-02-josh-pigford-solo-ai-workflow] Pigford 拆解单人多产品工作流：第一天收费、跨模型 review、/learnings 把失败沉淀成规则
