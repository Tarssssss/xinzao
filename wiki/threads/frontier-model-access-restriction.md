# 前沿模型访问受限：监管与门槛

2026 年 6 月起浮现的跨期线索：能用到最强模型的口子正在收窄，而且来自两个不同方向——一是政府/政策（先是限制「在美外国人」使用 Fable，再到 GPT-5.6 Sol 发布即被限制在约 20 家预批公司，据称按政府指令），二是算力经济（实验室可能把最强模型更多留作内部用、阶段性限停公开 API，见 token-economics 线索）。值得跟踪：它直接决定独立开发者、创业公司、普通从业者能不能拿到 frontier 模型，进而影响开源替代的吸引力和美国创新的分布；发声的多是访问派 builder（Every、YC），立场需打折，但「访问在收窄」这个事实由多方独立佐证。

## 各方立场

- **Dan Shipper（Every CEO，访问派）**：GPT-5.6 Sol 发布即被限制访问的最全一手转述，Every 不在名单上。主张最强模型必须保持广泛、民主的访问——既关系美国 AI 领先，也关系普通学生/独立开发者/职场人拿到工具的机会；他理解网络安全那部分监管，但反对把模型锁给少数巨头（[2026-06-27-gpt56-sol-access-gating]）。立场上他的生意（早期测试、内容）依赖广泛访问。
- **Garry Tan（YC 总裁，一贯反对模型层限制）**：对 GPT-5.6 Sol 限制访问的反应最冲——「不是发布模型该有的方式」「在土里撒盐、扼杀小创业公司创新」（[2026-06-27-gpt56-sol-access-gating]）；此前已给 Fable 5 禁令配过粗账（每工作小时损失约 1200 万美元，但输入全是自报假设，[2026-06-18-garry-tan-fable-ban-productivity-cost]）。
- **Peter Yang（Roblox 产品，策略悖论视角）**：把 GPT-5.6 限制访问排成一个循环——发布 frontier → 蒸馏进便宜开源 → 美国公司因够用且便宜采用开源 → 又限制 frontier 访问；结论是这只会把需求推向开源、削弱美国创新（[2026-06-27-gpt56-sol-access-gating]）。早在 6-13 就预测访问最强模型很快要做身份验证（[2026-06-13-fable-restriction-ai-regulation]），算是提前点到。
- **Aaron Levie（Box CEO）**：把 Fable 限制读作监管转折先例——政府开始直接判定模型本身「太强、不能用于特定用途」，为日后一系列管控立先例；本人主张该管用途而非模型，但认定政府深度介入已不可逆（[2026-06-13-fable-restriction-ai-regulation]）。
- **Amjad Masad（Replit CEO，平台侧后果）**：Fable 被限制时点出平台直接后果——Replit 可能得关掉 Fable 访问（[2026-06-13-fable-restriction-ai-regulation]）。

## 时间线

- 2026-06-13 [2026-06-13-fable-restriction-ai-regulation] 政府限制「在美外国人」使用 Fable；Levie 读作监管开始管模型本身、立先例，Peter Yang 预测访问最强模型很快要做身份验证，Masad 点出 Replit 得关访问
- 2026-06-18 [2026-06-18-garry-tan-fable-ban-productivity-cost] Garry Tan 给 Fable 禁令配粗账（每工作小时约损失 1200 万美元），输入全是自报假设、无来源
- 2026-06-27 [2026-06-27-gpt56-sol-access-gating] GPT-5.6 Sol 发布即被限制在约 20 家预批公司（据 Dan Shipper 称按政府指令、属临时措施）；Dan、Garry Tan、Peter Yang 集体反对，担心扼杀创新、把需求推向开源
- 2026-07-01 [2026-07-01-levie-fable-jailbreak-framework] Anthropic 联合亚马逊、微软等制定跨公司 jailbreak 严重性评估行业标准，并深化与美国政府的预发布测试合作；Levie 接受介入不可逆，但警告评估主观性和重大发布需同等审查将拖慢突破节奏

## 相关

- 算力侧的访问收窄（实验室可能限停公开 API、最强模型留内部）见 token-economics 线索的 [2026-06-13-compute-crunch-api-access-risk]
