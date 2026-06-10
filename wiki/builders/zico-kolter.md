# Zico Kolter（OpenAI 安全委员会主席、Grey Swan 联创）

AI 安全研究者，刊中言论全部出自 2026-05-08 一次访谈，核心论点是 agent 安全要专门投入——鲁棒性不会随模型规模免费提升。利益校准：他经营的 Grey Swan 卖的就是红队与 agent 防护，安全主张听时要带这层折扣。

## 立场与主张

**Agent 安全（核心议题）**
- prompt injection 是 agent 特有的新攻击面：agent 把第三方数据（网页、工具返回、邮件）读进上下文，藏在其中的指令可能被当成用户命令执行，能真把数据外发（2026-05-08-zico-kolter-agent-security）
- 给 builder 的三件套判断框架：能被操纵做什么、可能误操作做什么、手上有什么凭证权限；前两个是触发条件，第三个决定后果——最低成本的防护是收紧 agent 的权限边界（同上）
- 防御是 Swiss cheese 多层（输入/工具返回/输出各配分类器 + 模型安全训练 + 传统运营安全），他拒用「guardrail」一词嫌其听起来太简单；agent 能上生产（「一个字，能」），条件是配好护栏和 sandbox、对控制权谨慎（同上）

**鲁棒性不随规模改善**
- 「不行就等下一代模型」对数学、法律等多数能力成立，对抗操纵、抗越狱的鲁棒性不成立；模型确实在变安全，但那是专门训练 + 外加监控过滤层换来的，不是规模赠品（2026-05-08-zico-kolter-robustness-doesnt-scale）
- 依据含 Grey Swan 约 180 万次攻击尝试的 agent 红队竞赛观察；对 builder 的含义：别把模型升级默认当安全升级，抗操纵这层要自己在 harness 和监控上补（同上）

**RL 与架构（反直觉判断）**
- 智能的绝大部分来自 RL 在模型自己的输出上训练（生成候选、打分、用最好的回训），外部奖励只是验证信号；模型某种意义上已在自我改进——担心合成数据污染的人可以重新评估（2026-05-08-zico-kolter-rl-self-training-architecture）
- 自称 controversial：架构没大家想的那么重要，没有 transformer 用 LSTM、SSM 也能走到今天；完整 LLM 约 200-300 行 Python，真正复杂度在数据管线和规模管线（同上）
- 个人乐观判断（带 hedge）：coding agent 可能让 mechanistic interpretability 第一次能做成「科学」，因为可大规模并行执行高层研究指令（同上）

## 言论时间线

- 2026-05-08 [2026-05-08-zico-kolter-agent-security] agent 安全清单：prompt injection 是新攻击面，能力、误操作、权限三件一起管；agent 可上生产但要配护栏
- 2026-05-08 [2026-05-08-zico-kolter-robustness-doesnt-scale] 鲁棒性不随规模自动变好，安全靠专门训练加监控层，不是能力提升的赠品
- 2026-05-08 [2026-05-08-zico-kolter-rl-self-training-architecture] 模型已在自训练（RL 用自己的输出回训）；架构不如想象中重要，复杂度在数据与规模管线
