# Lukasz Kaiser（Transformer 论文作者，前 OpenAI / Google 研究员）

Transformer 论文作者之一，先后在 Google、OpenAI 做研究；现以一线研究者身份评论架构路线、编码 agent 和 RL 的边界，风格是给每个判断加对冲、区分「直觉」和「证据」。

## 立场与主张

- **架构与泛化**：当前模型「先穷尽所有别的选项，最后才学到概念」，要灌万亿 token；人类用远少数据就能跳跃理解。直觉上可能存在泛化更好的「后 Transformer」方向，但他明确标注这只是感觉——每次想钉死它，Transformer 就又追上来，谁赢「老实说还不知道」（2026-06-07-lukasz-kaiser-generalization-post-transformer）。泛化是「锯齿状」的，使用时要提防模型没补上的尖峰。
- **对 RSI / 自动化研究叙事偏谨慎**：想法空间极庞大、大多数想法是错的，即便有 10 倍速 AI 研究员也未必能高效搜到对的方向，研究突破可能还在数年之外（2026-06-07-lukasz-kaiser-generalization-post-transformer）。
- **编码 agent**：二十年来工作方式最大的改变，一手数据是复现旧论文从三周缩到两天；私人项目已基本不看代码但仍需「像盯鹰一样」盯 agent 跑偏。去年圣诞前后的能力跃迁难归因（harness、后训练、新预训练模型同时在变）（2026-06-07-kaiser-coding-agents-christmas-jump）。
- **工程实用主义**：「不按解法好不好看来评判，只看好不好用」——长上下文靠文件 + grep + compaction 这类 hack 解决也算解决。偏好 Codex 而非 Claude Code，理由是 compaction 做得好（2026-06-07-kaiser-coding-agents-christmas-jump）。
- **实验室竞争格局**：真正赢的是押注「不是今天的东西」的实验室。Anthropic 聚焦编码部分是因为当时 chat 上竞争不过；OpenAI 押 reasoning 是勇敢的赌注、至今 RL 质量领先；Google「什么都留着」靠底子也奏效。担忧是公司规模会侵蚀押注能力，这解释了 neo lab 往外拆分的逻辑（2026-06-07-kaiser-why-anthropic-won-coding）。
- **可验证性是连续谱而非二分**：连数学都没那么可验证，诗歌、图像审美也能靠人工打标训出来；可验证性这道坎「很弱」，本质是稀疏信号。真正约束是经济账（强起步模型 + 数据成本），且堵上一个洞总会冒出新的洞，他真正想要「像大脑那样本来就没那么多洞」的方法（2026-06-07-kaiser-verifiability-is-a-spectrum）。
- **呼吁学界做狂野探索**：一块 5090（bf16 约 200 TFLOPs）已是当年做 Transformer 研究单卡（9 TFLOPs）的二十多倍，几百到几千美元就能跑「一个人十年学习量」的实验；批评太多论文只是「拿预训练模型换个方式 RL」，鼓励多发表狂野的东西（2026-06-07-kaiser-single-gpu-research-renaissance）。

## 言论时间线

- 2026-06-07 [2026-06-07-lukasz-kaiser-generalization-post-transformer] 模型能解研究级数学但泛化「锯齿状」，后 Transformer 只是直觉；对 RSI 叙事偏谨慎
- 2026-06-07 [2026-06-07-kaiser-coding-agents-christmas-jump] 编码 agent 是二十年来最大工作方式改变（三周→两天），但圣诞跃迁连业内也说不清原因
- 2026-06-07 [2026-06-07-kaiser-why-anthropic-won-coding] Anthropic 赢编码部分因当年 chat 竞争不过，只好押注非主流；规模会侵蚀实验室的押注能力
- 2026-06-07 [2026-06-07-kaiser-verifiability-is-a-spectrum] 可验证性是连续谱且被高估，多数「不可验证」领域能靠堆数据训出来，约束是经济
- 2026-06-07 [2026-06-07-kaiser-single-gpu-research-renaissance] 单卡 5090 算力数倍于当年整机，呼吁学界用便宜算力做范式外的狂野探索
