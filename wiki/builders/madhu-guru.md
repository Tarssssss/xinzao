# Madhu Guru（前 Google 产品负责人：Gemini、Veo、Nano Banana）

从模型一线产品视角讲企业 AI 方法论：组织怎么用 AI、产品怎么跟模型迭代、agent 能力边界由什么决定。

身份变化：2026-05-25 素材 role 还是「Product Leader @ Google」，2026-06-06 起变为「Prev Product Leader」——期间离开 Google（见 [2026-06-06-madhu-guru-build-for-the-slope]）。

## 立场与主张

- **组织采纳 AI**：CEO 出于 FOMO 下模糊指令 → 员工以表演式 demo 应付 → 两年空转，被亲自上手的创业者颠覆。根因是远距离管理的领导缺乏亲自上手 AI 的肌肉；与 Aaron Levie 同日「CEO 对 AI 易生错觉」呼应，Guru 把个人盲区推到组织层面（2026-05-25-madhu-guru-vague-ai-mandates）。
- **AI 产品方法论（build for the slope）**：按今天的模型能力和价格做设计是最常见的错。应围绕当下模型弱点搭脚手架推前沿，赌下一代模型原生解决掉脚手架，再推一次；护城河不在某个脚手架，而在「反复识别并填补模型缺口」的能力本身（2026-06-06-madhu-guru-build-for-the-slope）。
- **训练数据与 agent 边界**：推动前沿的训练数据是高经济价值任务数据而非低技能脏活；SWE 任务有文档可采集所以先有 SWE agent，知识工作任务缺文档、靠隐性领域知识、被遗留工具割裂，所以知识工作 agent 迟到——瓶颈在数据不在模型。据此看好 Mercor 类训练数据公司（个人判断，带立场）（2026-06-08-madhu-guru-training-data-why-swe-agents-first）。

三条共享一个底层判断：模型会持续快速变强变便宜，组织和产品都该对「变化速率」而非「当前位置」下注。暂无立场反转。

- **企业 AI 的两处结构卡点（新，2026-07-18）**：一是分发侧——像 Kimi 这样的开源模型，企业大概率不会直接接入，而是绕道 Google Cloud 这类云厂商换安全、数据驻留、合规、芯片保证，钱转一圈还是进大厂口袋；二是执行侧——企业做不出超越聊天机器人的应用，卡点是缺人搭 evals（能否覆盖用例、能否推前沿、能否帮选模型）和独立于模型的 harness（路由/编排/上下文/工具调用/记忆），人才是其中最稀缺的一环。呼应他 6 月「训练数据决定 agent 顺序」的数据瓶颈判断，也和 Aaron Levie 三天前「企业普遍缺 evals」同向（2026-07-18-madhu-guru-enterprise-moat-evals-harness）。

## 言论时间线

- 2026-05-25 [2026-05-25-madhu-guru-vague-ai-mandates] CEO 模糊 AI 指令换来员工表演式 demo，两年无实质进展
- 2026-06-06 [2026-06-06-madhu-guru-build-for-the-slope] 企业 AI 团队别按今天的模型能力定价做产品，要「为斜率而建」
- 2026-06-08 [2026-06-08-madhu-guru-training-data-why-swe-agents-first] 解释为何先有 SWE agent：高价值任务数据可得性决定 agent 顺序
- 2026-07-18 [2026-07-18-madhu-guru-enterprise-moat-evals-harness] 开源模型的钱大概率绕道云厂商；企业落地卡在缺 evals 和 harness 人才，不是模型能力
