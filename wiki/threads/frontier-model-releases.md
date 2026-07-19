# 模型发布与一线实测

跟踪 2026 年 4 月以来的前沿模型发布节奏（Mythos Preview → Opus 4.7 → GPT-5.5 → Gemini 3.5 Flash → Composer 2 → Fable 5），以及每次发布后 builder 的第一手评测。值得跟踪的原因：官方公告的信息密度普遍偏低，真正可用的判断来自三类一线信号——厂商内部人的行为级描述（如 debug 时自验证）、合作方/使用方的自有评测数字（如 Box 分行业读数）、以及独立 builder 的定性评级（如 Karpathy 的版本量级判断）。三类信号各有立场偏差，叠在一起才能校准一次发布的真实成色。

## 各方立场

- **Alex Albert（Anthropic）**：发布节奏的官方信号源。4 月公告 Mythos Preview 时只给情绪（「三年来最重要的行业事件」）不给数据（[2026-04-08-mythos-preview]）；到 Fable 5 转向给迁移操作建议——为旧模型写的 skills/CLAUDE.md 会把新模型锚定在过时模式、应重写，从下发任务改成描述目标和验证方式（[2026-06-10-alex-albert-fable5-four-tips]）。
- **Claude 官方帐号（Anthropic）**：发布配套增量的口径——Opus 4.7 上线同时给 Claude Code 加 /ultrareview、API 加 xhigh 档和 task budgets，功能描述可直接验证（[2026-04-17-opus-47-launch]）。
- **Boris Cherny（Anthropic, Claude Code 作者）**：用行为而非分数评模型。Fable 5 的关键变化是 debug 时自己加日志、做测量、验证修好才宣布完成，且不来自 Claude Code 提示词——若自验证成了模型默认行为，harness 里可省掉一层工程纪律（[2026-06-10-cherny-fable5-thought-design-partner]）。内部立场，但行为描述可在自己工作流里对照。
- **Karpathy（独立）**：本线索里最接近中立的定性评级者。判断 Fable 5 是配得上大版本号的跳跃、与 Opus 4.5 同量级，长难题求解提升最明显；同时提醒发布期护栏偏敏感、别在生产环境完全不看代码（[2026-06-10-karpathy-fable5-major-version-bump]）。
- **Aaron Levie（Box）**：「合作方自测」这一信号类型的固定供给方，对各家模型口径一致——用 Box 自有企业知识工作评测给分行业读数：GPT-5.5 较 5.4 平均 +10pp（[2026-04-24-levie-gpt55-box-evals]）、Gemini 3.5 Flash 较 3 Flash +12pp 且原低分行业涨最多（[2026-05-20-levie-box-eval-gemini-3-5-flash]）。自测自报、方法未公开、同时在推自家平台，分行业相对涨幅比总分更可参考。
- **Sam Altman（OpenAI）**：Codex 发布时给的是体感背书——computer use 能并行操作 Mac 全部应用、比他自己预期的更有用（[2026-04-17-codex-computer-use]）。厂商立场，但「并行、不抢占当前窗口」装上即可验。
- **Ryo Lu（Cursor 设计师）**：发布后的「用脚投票」样本——GPT-5.5 开放 API 几小时后宣布主力完全切到 GPT-5.5 + Composer 2，称智能/速度/成本的完美组合（[2026-04-25-ryolu-cursor-switch]）。带自家产品宣传成分。
- **Cursor 研究团队（Federico）+ Fireworks（Dima）**：发布竞赛的另一条路线——不追前沿通用模型，基于 Kimi 2.5 做中训练加 RL，把全部权重压到 Cursor 内软件工程这一个任务上，成本约为 Opus 的十分之一（[2026-05-27-cursor-composer2-rl-infra]）。
- **Swyx（独立）**：格局观察者视角，把 Meta 上线「接近 Opus 级」模型放进 Llama 4 翻车后的回转叙事；该评级无 API、不开源、暂无法外部核验（[2026-04-16-swyx-meta-turn]）。
- **Thibault Sottiaux（OpenAI，Codex 工程负责人）**：GPT-5.6 Sol 发布几天后（发布于 7 月 9 日，刊中未在发布当天覆盖）给出的不是评测数字，而是具体操作——用 CLIProxyAPI 把 Claude Code 默认子模型换成 Sol 的完整配置，并自曝这是非官方方法、随时可能被封；功能清单部分（快、省 token、前端好）是产品宣传，缺具体数字（[2026-07-12-sottiaux-gpt56-sol-claude-code-hack]）。
- **Zara Zhang（独立 builder）**：「用脚投票」式的独立验证——7 月 8 日刚抱怨 Codex 前端设计是唯一让她不想更频繁用的短板，7 月 12 日确认这一点在 GPT-5.6 Sol 上有改善，同一痛点四天前后对照（[2026-07-12-sottiaux-gpt56-sol-claude-code-hack]）。
- **Dax Raad（OpenCode 作者）**：发布后一周的一手用量数据——团队接入 Sol 后，Fable-5 只占约 5% 用量却吃掉 30% 成本，隐含单位成本差距悬殊；Altman 转发放大这条对自家不算有利的数据（[2026-07-12-dax-altman-fable-cost-share]）。

## 时间线

- 2026-04-08 [2026-04-08-mythos-preview] Anthropic 公布 Claude Mythos Preview，距 Opus 4.6 仅两个月，仅向 Glasswing 合作方开放；公告无能力数据
- 2026-04-16 [2026-04-16-swyx-meta-turn] Swyx 称 Meta 上线「接近 Opus 级」模型并收购 Dreamer、Manus，标记 Meta AI 从 Llama 4 翻车到回转的拐点
- 2026-04-17 [2026-04-17-opus-47-launch] Opus 4.7 全平台上线，Claude Code 加 /ultrareview，API 加 xhigh 档和 task budgets
- 2026-04-17 [2026-04-17-codex-computer-use] 同日 Codex 发布重大改进，Altman 称 computer use 能并行操作 Mac 全部应用、比预期更有用
- 2026-04-24 [2026-04-24-levie-gpt55-box-evals] GPT-5.5 上线当天 Levie 公布 Box 自测：较 5.4 平均 +10pp，金融 83% 对 64%
- 2026-04-25 [2026-04-25-ryolu-cursor-switch] GPT-5.5 开放 API 数小时后，Cursor 设计师 Ryo Lu 宣布主力完全切到 GPT-5.5 + Composer 2
- 2026-05-20 [2026-05-20-levie-box-eval-gemini-3-5-flash] Levie 用同一套 Box 评测给 Gemini 3.5 Flash 读数：+12pp，医疗、生命科学涨幅最大
- 2026-05-27 [2026-05-27-cursor-composer2-rl-infra] Cursor 拆解 Composer 2 训练：Kimi 2.5 底座加中训练和大规模 RL，单任务专精换十分之一成本
- 2026-06-10 [2026-06-10-cherny-fable5-thought-design-partner] Fable 5 发布，Boris Cherny 称其 debug 自验证行为不来自提示词，是模型自带性格
- 2026-06-10 [2026-06-10-karpathy-fable5-major-version-bump] Karpathy 定性 Fable 5 为大版本级跳跃、长难题求解最突出，提醒护栏偏敏感
- 2026-06-10 [2026-06-10-alex-albert-fable5-four-tips] Alex Albert 给四条迁移建议：重写旧配置、默认 xhigh/high、给更大任务、从下发任务改成描述目标
- 2026-07-01 [2026-07-01-sonnet5-launch] Sonnet 5 上线，成为 Free/Pro 默认模型；Anthropic 称性能接近 Opus 4.8、不靠提示词自行验证输出、低成本 agentic；Box 三行业分数超 Sonnet 4.6（方法未公开）；介绍期定价至 8 月 31 日
- 2026-07-09 OpenAI 发布 GPT-5.6（Sol/Terra/Luna 三档），刊中未在发布当天覆盖，最早的一手反馈见 7-12 两条
- 2026-07-12 [2026-07-12-sottiaux-gpt56-sol-claude-code-hack] Sottiaux 公布把 Sol 接入 Claude Code 当子模型运行的配置；Zara Zhang 独立确认前端短板有改善
- 2026-07-12 [2026-07-12-dax-altman-fable-cost-share] Dax Raad：接入 Sol 首周 Fable 只占约 5% 用量却吃掉 30% 成本；Altman 转发放大
- 2026-07-19 [2026-07-19-rauch-cyber-evals-kimi-sol-fable] Rauch 内部隐藏评测比网络安全能力：开源 Kimi K3 顶尖、Sol 领先但贵、Fable 全程拒答连防御性加固都不做（Vercel 立场、方法未公开，可核验的是各家的拒答行为差异）
