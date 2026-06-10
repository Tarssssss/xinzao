# Andrej Karpathy（Anthropic，2026-05 加入；前 Tesla AI 总监、OpenAI 创始团队成员）

软件 3.0 与 LLM 能力参差两套框架的提出者和持续修正者，2026-05-20 宣布加入 Anthropic 回到 R&D 一线。

## 立场与主张

### 能力参差（jaggedness）与可验证性
- 核心框架：传统计算机自动化「能用代码写明」的东西，这代 LLM 自动化「能验证」的东西。可验证奖励最适合 RL，所以编程、数学能力拔尖，搜索、写作等日常场景进步有限（[2026-04-10-karpathy-capability-gap]、[2026-05-04-karpathy-verifiability-jaggedness]）。
- **解释在演化**：4 月归因为「可验证 + B2B 价值高，公司优先爬坡」（[2026-04-10-karpathy-capability-gap]）；5 月补了一层经济学——营收和 TAM 决定实验室把什么装进 RL 训练分布，分布内外天差地别，且自称对这个解释还不百分之百满意、仍在修正（[2026-05-01-karpathy-sequoia-fireside]）。
- 给可验证领域创业者的判断：可验证 = 能砸 RL = 可以自己 fine-tune 的杠杆，「即使实验室不直接做这个方向也成立」。并认为「几乎一切最终都能在某种程度上被变得可验证」，连写作都可以用 LLM 评委 council（[2026-05-04-karpathy-verifiability-jaggedness]）。
- 衍生的认知分化论：公众对 AI 能力的争论多源于用的模型档位和场景不同——免费档 ChatGPT 定型的旧印象 vs 付费 agentic 模型的专业使用（[2026-04-10-karpathy-capability-gap]）。

### 软件 3.0：很多代码不该存在
- 范式定义：1.0 写规则，2.0 用数据训练，3.0 用 prompt 操纵 LLM 这个「解释器」。重点不是写代码变快，而是旧实现方式失去存在必要、出现以前不可能的功能（[2026-05-04-karpathy-software-3-paradigm]、[2026-05-01-karpathy-sequoia-fireside]）。
- 标志性反例是他自己的 MenuGen：3.0 版本把菜单照片直接交给多模态模型完成全部中间环节，「我整个 MenuGen 都是多余的，那个 app 不该存在」（[2026-05-04-karpathy-software-3-paradigm]）。
- agent-native 基建主张：产品拆成传感器、执行器、逻辑三类部件；数据结构要对 LLM「高度可读」；文档应该是「复制粘贴给 agent 的那段文本」而不是写给人的操作说明；.md skills 替代 .sh 安装脚本（[2026-05-01-karpathy-sequoia-fireside]、[2026-05-04-karpathy-software-3-paradigm]）。

### 对 agent 的信任度（持续上调，但有底线）
- 拐点在 2025 年 12 月：从「修补 agent 输出」转到「代码块就是对的、想不起上次纠正是什么时候」（[2026-05-04-karpathy-software-3-paradigm]）。
- 2026-06 评 Fable 5：定性上配得上大版本号，长难题求解最突出，第一次让他想完全不看代码——但明确提醒别真在生产环境这么干，且发布期护栏偏「trigger happy」（[2026-06-10-karpathy-fable5-major-version-bump]）。

### 人的角色与 agentic engineering
- 人留在 spec、品味和理解上，细节交给「实习生」级 agent；引用过「你可以外包思考，但没法外包理解」（[2026-05-04-karpathy-verifiability-jaggedness]）。
- 命名区分：vibe coding 抬高所有人下限，agentic engineering 在加速的同时守住专业质量门槛，做得好的人「远不止 10x」。招聘应从解谜题换成给大项目（[2026-05-04-karpathy-verifiability-jaggedness]）。
- 对品味能否交给模型偏谨慎：现在不行（没进 RL、没有美学奖励），他「希望」会改进（[2026-05-04-karpathy-verifiability-jaggedness]）。

### 交互形态
- 音频是人给 AI 的首选输入，视觉是 AI 给人的首选输出；输出格式序列：纯文本 → markdown → HTML（正在形成的新默认）→ 远期扩散网络生成的交互式视频。可立刻试：让 LLM 把回答结构化成 HTML（[2026-05-12-karpathy-vision-as-ai-output-html]）。

### 个人去向与需求侧
- 加入 Anthropic 的理由：未来几年 LLM 前沿「especially formative」，所以回 R&D 一线；教育仍热爱但放到无时间表的「以后」（[2026-05-20-karpathy-joins-anthropic]）。注意：6 月起他评价 Anthropic 模型时已是该公司员工。
- Jevons 式判断：软件供给越接近「拧开水龙头」，他对软件的需求反而大涨（一次性 app、定制 dashboard、十倍测试套件）（[2026-06-10-karpathy-fable5-major-version-bump]）。

## 言论时间线

- 2026-04-10 [2026-04-10-karpathy-capability-gap] 解释 AI 能力认知分化：可验证奖励 + B2B 价值决定跃升集中在编程、数学等技术领域
- 2026-05-01 [2026-05-01-karpathy-sequoia-fireside] Sequoia 谈话总结：补「营收决定 RL 训练分布」的经济学解释（自称不完全满意）；agent-native 经济
- 2026-05-04 [2026-05-04-karpathy-software-3-paradigm] 软件 3.0 下很多 app 不该存在，MenuGen 是反例；自述 2025-12 是信任 agent 的拐点
- 2026-05-04 [2026-05-04-karpathy-verifiability-jaggedness] 可验证性是当下能拉的杠杆；人守住 spec、品味、理解；命名 agentic engineering
- 2026-05-12 [2026-05-12-karpathy-vision-as-ai-output-html] 判断视觉是 AI 的首选输出形态，建议现在就让模型把回答结构化成 HTML
- 2026-05-20 [2026-05-20-karpathy-joins-anthropic] 宣布加入 Anthropic，判断未来几年是 LLM 前沿最 formative 的时期；教育推迟
- 2026-06-10 [2026-06-10-karpathy-fable5-major-version-bump] 评 Fable 5 配得上大版本号，长难题求解提升最明显；提醒发布期护栏偏敏感、别在生产环境完全不看代码
