# Thibault Sottiaux（Codex 工程负责人 @ OpenAI）

OpenAI Codex 团队的工程负责人，此前多次在 Codex 出现用量问题时出面做官方沟通（额度重置、缓解措施说明）。刊中首次以完整 story 形式出现：既发布带宣传性质的功能清单，也给出具体到可复制的操作细节。立场提示：他是 Codex/GPT-5.6 Sol 的直接责任人，功能描述部分是在推自己的产品。

## 立场与主张

- **GPT-5.6 Sol 的功能宣传**：称新模型「快、省 token、后端强、前端好、不乱用 useEffect」，属于产品宣传性质，缺乏具体数字支撑（2026-07-12-sottiaux-gpt56-sol-claude-code-hack）。
- **具体操作比宣传更有信息量**：给出用 CLIProxyAPI 把 Claude Code 默认子模型换成 GPT-5.6 Sol 的完整环境变量配置（含并发数上限、effort 强制开启），并自己标注这是非官方方法、随时可能被封——一个 OpenAI 内部人公开教人把自家模型接进对手 harness 里跑，这个动作比功能描述更能说明他对方法本身的信心。
- **此前的官方沟通**（quickTakes，未进 wiki 编译范围）：Codex 用量问题时出面做缓解说明、承诺全员重置额度。

## 言论时间线

- 2026-07-12 [2026-07-12-sottiaux-gpt56-sol-claude-code-hack] 公布把 GPT-5.6 Sol 接入 Claude Code 当子模型运行的具体配置，自曝方法非官方、随时可能被封；Zara Zhang 独立确认前端能力改善
