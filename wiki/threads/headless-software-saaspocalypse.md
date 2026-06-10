# headless 软件与 SaaS 末日论

2026 年 4 月起的跨期论争：当 agent 取代人成为软件的主要用户，SaaS 是被拆掉还是换一种活法。Levie 连续多帖搭出「headless 软件」框架——API 成采购硬条件、「人付席位，agent 付用量」；McDermott 代表被末日论点名的 SaaS 巨头给出最完整的反驳；Rauch 从供给侧推进「生成比采购容易」；6 月 Peter Yang 和 Dan Shipper 分别给出分化判断和反共识翻转。值得跟踪：它直接决定 B2B 软件的定价结构和生死分层，且每个发言者都带自家利益，结论需要持续校准。

## 各方立场

- Aaron Levie（Box CEO，主推手）：软件 headless 化不可避免，agent 用量可达人的 100 倍，不能被 agent 调用的软件 DOA。证据线从 20 位 IT 负责人访谈（2026-04-11-levie-headless-software、2026-04-13-levie-enterprise-agents）推进到定价三段式（2026-05-01-levie-headless-pricing）。他同时主张这对 SaaS 非零和：承接 agent 工作的底层记录系统反而受益（2026-05-02-levie-agents-software）。注意 Box 是这套叙事的直接受益方。
- Bill McDermott（ServiceNow CEO，反方）：自家测算用 LLM 复刻平台应用总成本贵 10 倍，「企业不原谅软件犯错」；风险分层——跨部门 system of record 安全，单一职能的部门级软件最危险（2026-04-18-mcdermott-saaspocalypse）。末日论对手盘里最完整的一版，但 10 倍成本是未公开口径。
- Guillermo Rauch（Vercel CEO，供给侧激进派）：用现成构件生成软件已比搜寻采购 SaaS 容易，每个团队都能建自己的「设计工厂」（2026-04-16-rauch-design-factory）；no-code 赖以成立的「代码昂贵稀缺」前提被 coding agent 推翻，提出 yes-code（2026-06-03-rauchg-yes-code）。两条都服务 Vercel「给 agent 的云」定位。
- Peter Yang（Roblox 产品负责人，分化论）：大型多用途企业 SaaS 仍稳，窄用例简单 SaaS 变现路径变窄——AI skills 更灵活、带个人上下文的 agent 知道更多、$20/月会被拿去和用户自己的 Claude/ChatGPT 订阅比价（2026-06-03-peter-yang-narrow-saas-harder-to-monetize）。自己对冲了一句「可能在 bubble 里」。
- Dan Shipper（Every CEO，反共识）：SaaSpocalypse 叙事搞反了——自己跑 agent 会加深而非削弱对底层 SaaS 数据模型和业务逻辑的依赖（2026-06-04-dan-shipper-saaspocalypse-backwards-chat-wrong-for-design）。转述 Figma 嘉宾观点并自陈持有 Figma 股票，立场看多。

## 时间线

- 2026-04-11 [2026-04-11-levie-headless-software] Levie 问 20 位 IT 负责人：3-5 年后没人会留下缺少好 API 的供应商，headless 成生死线
- 2026-04-13 [2026-04-13-levie-enterprise-agents] Levie 见二十多位企业 IT 负责人：不能被 agent 调用的软件会被踢掉，互操作成采购头等要求
- 2026-04-16 [2026-04-16-rauch-design-factory] Rauch 借 basement.studio 自建 Shader Lab 判断：生成软件已比搜寻采购 SaaS 容易
- 2026-04-18 [2026-04-18-levie-headless-software] Levie 给出核心框架：agent 用量是人的 100 倍，「人付席位，agent 付用量」
- 2026-04-18 [2026-04-18-mcdermott-saaspocalypse] McDermott 同日反击：LLM 复刻平台应用贵 10 倍，最危险的是单一职能软件
- 2026-04-23 [2026-04-23-chatgpt-agents-headless] Levie 称新 ChatGPT agents 是 headless 化至今最大新闻，Altman 转评称多数公司都会想用
- 2026-05-01 [2026-05-01-levie-headless-pricing] Levie 推演定价三段式：席位捆绑 API 额度、有状态 agent 没法按人头计价、超额走消费计费
- 2026-05-02 [2026-05-02-levie-agents-software] Levie 给受益方启发式：agent 的产出挂在哪个记录系统上，哪个系统就涨
- 2026-06-03 [2026-06-03-peter-yang-narrow-saas-harder-to-monetize] Peter Yang 分化判断：大型企业 SaaS 稳，窄用例 SaaS 更难变现
- 2026-06-03 [2026-06-03-rauchg-yes-code] Rauch 提出 yes-code：coding agent 推翻 no-code 的「代码昂贵」前提
- 2026-06-04 [2026-06-04-dan-shipper-saaspocalypse-backwards-chat-wrong-for-design] Shipper 反转：自己跑 agent 反而更愿意为 SaaS 付费，chat 不适合设计类发散工作
