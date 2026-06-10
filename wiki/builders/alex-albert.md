# Alex Albert（Research @ Anthropic）

Anthropic 研究员（早期素材署名「Anthropic 研究团队」），刊中角色是 Anthropic 重大发布与内部数据的一手信源：新模型公告、内部自动化进度、新模型迁移方法论。内部视角，口径偏乐观，但关键判断习惯带对冲措辞。

## 立场与主张

- **新模型发布的「内部情绪信号」**：公布 Claude Mythos Preview（距 Opus 4.6 仅两个月，先向 Project Glasswing 合作方开放）时定性为「可能是加入 Anthropic 近三年来近距离见过的最重要行业事件」。「可能」是他自己的措辞，公告无 benchmark，情绪信号大于可核验信息（2026-04-08-mythos-preview）
- **AI 自动化进度：数字激进、边界明确**：转述官方博客内部数据——超 80% 合并代码由 Claude 写、典型工程师出码量为 2024 年 8 倍、最开放任务成功率半年从约 26% 升到 76%。指向 Claude 在需要判断下一步的开放环节也开始接管。对冲：明确划界「还没到递归自我改进」，但「可能比多数人预期来得更早」。注意数字均为内部口径，无统计定义（2026-06-05-anthropic-claude-writes-own-code）
- **模型自主性变强后，人要后撤一步**：迁移到 Fable 的四条建议——给更大任务、默认 xhigh/high effort、重写为旧模型写的 skills 和 CLAUDE.md（旧指令会把 Fable 锚定在过时模式）、从下发任务改成描述目标和验证方式。后两条同一方向：从指挥执行改成定义终点。与 Boris Cherny「Fable 自带方法论」互为表里（2026-06-10-alex-albert-fable5-four-tips）
- **模型代际跃迁的个人序列**：把 Fable 5 列入自己经历的 step-change 序列：Opus 3 → Sonnet 3.5 → Opus 4.5 → Fable 5；体感是模型从被指挥的工具变成协作对象（2026-06-10-alex-albert-fable5-four-tips）

立场无反转。一贯模式：放大 Anthropic 内部乐观信号，同时在最强判断处留对冲（「可能」「还没到」）；引用他给的数字前应核对官方原文口径。

## 言论时间线

- 2026-04-08 [2026-04-08-mythos-preview] 公布 Claude Mythos Preview，仅向 Glasswing 合作方开放；称其「可能是三年来最重要行业事件」，公告无能力数据
- 2026-06-05 [2026-06-05-anthropic-claude-writes-own-code] 转述内部数据：超 80% 合并代码由 Claude 写、最开放任务成功率半年约 26%→76%；划界「还没到递归自我改进」
- 2026-06-10 [2026-06-10-alex-albert-fable5-four-tips] 迁移 Fable 四条建议：更大任务、默认高 effort、重写旧配置、从任务转向目标；把 Fable 5 列入个人 step-change 序列
