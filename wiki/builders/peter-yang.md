# Peter Yang（Product @ Roblox，AI 教程与访谈作者）

Roblox 产品经理，高频输出 agent 工作流实操方法论，同时是刊中重要的访谈转述节点（Dario、Alex Albert、Tibo、Ryan Carson、Josh Pigford 的观点多经他归纳进入日刊）。

## 立场与主张

### Agent 优先的工作方式
- 知识工作前 80% 交给 coding agent 起稿，人只做最后 20% 打磨，已不再从零做任何东西（2026-04-07-peter-yang-agent-first-work）
- 提效来源是「系统前置」：事先搭好集成和 skill，而非临场让 AI 干；判断任何知识工作能省一半以上时间，但每步必须留人工检查点保住「品味」——对「全自动」叙事主动收敛（2026-06-05-peter-yang-codex-system-setup）
- 把 agent 用在文件管理（整机权限 + Google Workspace CLI）时的纪律：每条提示先要计划、确认后再执行；自标半危险操作（2026-05-03-peter-yang-file-cleanup）

### 应用层与 SaaS 格局
- 一手行为数据：把常用服务 API 接进个人 agent（OpenClaw）后几乎不再打开任务型应用，X 仍每天刷；推断任务型应用萎缩、娱乐应用活得久（2026-04-07-peter-yang-agent-first-work）
- 6 月把该判断收敛细化：窄用例简单 SaaS 更难变现（skills 更灵活、带个人上下文的 agent 知道更多、用户拿 $20/月 SaaS 与自己的 Claude/ChatGPT 订阅比价），大型企业 SaaS（如 Figma）仍稳；自加对冲「我可能在 bubble 里」。是 4 月判断的深化而非反转（2026-06-03-peter-yang-narrow-saas-harder-to-monetize）

### Skill 与 AI 产出的维护
- 警告 slop 复利机制：agent 拿自己未修正的旧产出当新产出的上下文，5% slop 滚到 10% 再往上；人工复核不能省（2026-05-10-peter-yang-slop-compounding）
- 一个月后给出对应解法：五步法做能自查、自迭代的 skill（好坏样例、触发描述、10 条 evals、一句话 memory、清理其他 skill 的元 skill）——从提出问题到给方案的演进（2026-06-06-peter-yang-self-improving-skills）

### 模型与工具实测
- 跨模型换着用并公开记录差异：GPT 在 OpenClaw 跑不通 Opus 能轻松完成的周报邮件任务，结论留余地但群聊佐证类似（2026-04-20-openclaw-gpt-agentic）；Codex 前端设计明显弱于 Claude，同一 /slides skill 输出差距大（2026-06-05-peter-yang-codex-system-setup）。同时自认仍是 OpenClaw 和 Codex 忠实用户，批评不等于弃用

### 小团队、一人公司与个体出路
- 组织预测：2-3 人产品团队带一群 agent 取代人浮于事的大组织（2026-04-07-peter-yang-agent-first-work）
- 给员工的抗裁员逻辑：AI 把人拉到平均水平，平均之上的手艺和品味反而更值钱，应挑一项技能练到前 10%；并认为 AI 时代当创始人反而是最安全的工作（明显乐观倾向，态度参考）（2026-05-23-petergyang-six-moves-against-layoffs）
- 持续放大 solo founder 案例佐证此立场：Tibo（月流失 20% 红线、跟用户意外用法转向）、Ryan Carson（融资后不招人、agent 当团队、systems-first）、Josh Pigford（现金流筛产品、跨模型 review）

### 作为信息源的特点
- 大量内容是二手归纳或现场听写（Dario 80 倍增长引语、Alex Albert 谈模型与 harness 耦合），他本人常自带对冲和样本声明（如中国观察「征集其他视角」、bubble 自校准），引用时需区分他的一手判断与转述

## 言论时间线

- 2026-04-07 [2026-04-07-peter-yang-agent-first-work] agent 优先时代五条判断：80/20 工作流、小团队取代大组织、任务型应用萎缩娱乐应用长存
- 2026-04-11 [2026-04-11-china-ai-work-culture] 中国 AI 行业六条一手观察：普遍翻墙用 Claude Code 等美国工具、政府补贴一人公司
- 2026-04-20 [2026-04-20-openclaw-gpt-agentic] OpenClaw 切 GPT 后连 Opus 轻松完成的周报邮件任务都没跑通，agentic 任务跟不下来
- 2026-04-28 [2026-04-28-tibo-solo-playbook] 提炼 solo 创始人 Tibo 打法：跟用户意外用法转向（Typeframe→Revid）、月流失超 20% 先修产品
- 2026-05-03 [2026-05-03-peter-yang-file-cleanup] 让 Codex/Claude Code 清理本地文件和 Drive，纪律是每条提示先要计划再执行
- 2026-05-07 [2026-05-07-dario-80x-compute] 现场听写 Dario：用量收入 80 倍增长、继续买算力、build for the exponential
- 2026-05-10 [2026-05-10-peter-yang-slop-compounding] 警告 AI 生成文件的 slop 复利机制：未修正旧产出被当成新一轮上下文
- 2026-05-19 [2026-05-19-alex-albert-building-next-claude] 归纳 Alex Albert：模型与 harness 耦合需一起设计、Claude 用「做梦」整理记忆
- 2026-05-23 [2026-05-23-petergyang-six-moves-against-layoffs] 抗裁员六件事：把手艺练到前 10%，AI 时代创业反而最安全
- 2026-05-25 [2026-05-25-ryan-carson-solo-founder-agents] 转述 Ryan Carson：融 200 万种子轮但不招人，OpenClaw 当幕僚长、Codex/Devin 当工程团队
- 2026-05-26 [2026-05-26-ryan-carson-systems-first-reversal] 转述 Ryan Carson：「先出 MVP 别搭系统」在 agent 时代彻底反转，先搭文档和系统
- 2026-06-02 [2026-06-02-josh-pigford-solo-ai-workflow] 转述 Josh Pigford 单人多产品工作流：第一天收费、跨模型 review、/learnings skill
- 2026-06-03 [2026-06-03-peter-yang-narrow-saas-harder-to-monetize] 窄用例简单 SaaS 更难变现的三条机制，大型企业 SaaS 仍稳，自加 bubble 对冲
- 2026-06-05 [2026-06-05-peter-yang-codex-system-setup] 工作流前置搭进 Codex 省一半时间，每步留人工检查点；点名 Codex 前端设计弱于 Claude
- 2026-06-06 [2026-06-06-peter-yang-self-improving-skills] 五步法做能自查产出、随用随改的 skill，含清理其他 skill 的元 skill
