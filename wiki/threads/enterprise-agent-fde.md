# 企业落地 agent 与 FDE 模式

硅谷叙事说 agent 在自加速、接管一切；企业一线说两年 AI 投入换来零生产力，只有 coding AI 被认可。这条线索跟踪这个落差怎么被接上：以 Aaron Levie 为主线的判断是，瓶颈不在模型而在企业侧——遗留系统、数据碎片、权限审计、流程文档化、变更管理——由此推出 FDE（forward deployed engineer）及其内部变体会成为长期岗位，数据战略是底座。值得跟踪，因为它同时回答三个问题：agent 经济的真实扩散速度、哪些新岗位会留下、实施与服务层的机会有多大。注意 Levie 是 Box CEO，「企业落地需要重服务」的叙事与其生意直接一致，结论要带立场看，但他给的拆解清单可独立核验。

## 各方立场

- **Aaron Levie（Box CEO，本线索主推手）**：核心论点一以贯之——从 chat 到 agent 参与真实业务流程隔着大量实活，没有捷径（[2026-05-05-levie-agents-enter-knowledge-work-no-shortcut]）。障碍清单：遗留技术栈、数据碎片、知识未数字化、权限与审计、变更管理，且要边经营边做（[2026-04-22-levie-enterprise-agents]、[2026-05-04-levie-agent-implementation-opportunity]）。由此推出岗位判断：每个团队都需要专职部署和运营 agent 的人（[2026-04-14-agent-deployer-role]、[2026-04-21-levie-agent-ops-roles]），FDE 短期不会消失、对 SI 和咨询是新机会（[2026-04-15-levie-forward-deployed-engineers]），且因为 AI 交付物持续演化（模型一升级工作流就变），FDE 是规模化部署 AI 的核心能力而非过渡打法（[2026-05-16-levie-fde-core-competency]）；与云迁移不同，agent 直接改写员工工作流，所以这个岗位比当年云实施更耐久（[2026-05-21-levie-fde-agent-job-durable]）。Box 自己照此招人：内部 agent 工程师 / AI 自动化工程师，像对内的 FDE，嵌入业务、打通系统、把工作流沉淀成 skills（[2026-04-30-levie-agent-engineering-roles]、[2026-05-11-box-ai-automation-engineer]）。归因再往下挖一层：多数公司 agent 战略卡住的根因是数据战略——上下文冲突、数据过期、tribal knowledge（[2026-05-19-levie-agent-data-strategy]）；模型迭代越快企业落地反而越慢，因为新突破不断作废上一套架构，编码之外的知识工作（可验证性、上下文集中度、权限）都不具备编码的有利条件，要靠内部 FDE 一点点接上去（[2026-05-29-levie-diffusion-bottleneck-internal-fde]）。对高管的提醒：CEO 离最后一公里太远，玩 AI 只见 happy path，解法是亲手把一条链路从原型走到生产（[2026-05-25-levie-ceo-ai-psychosis]）。
- **Matt Turck（FirstMark Capital VC）**：买方证词，落差的实证侧。称从没见过这么大的认知差——Global 2000 说两年 AI 投入生产力收益为零、只有工程师喜欢 coding AI、agent 很吓人；无样本数据，按一线氛围观察用（[2026-04-28-valley-enterprise-gap]）。
- **Madhu Guru（Google 产品负责人）**：补组织和产品方法两侧。组织侧：CEO 出于 FOMO 下模糊 AI 指令，员工用表演式 demo 应付，两年空转——是 Levie「CEO AI 错觉」在组织层面的放大，此条正是引 Levie 发出（[2026-05-25-madhu-guru-vague-ai-mandates]）。方法侧：别按今天的模型能力和价格做设计，「为斜率而建」——围绕当下模型弱点搭脚手架并赌下一代模型原生解决，反复识别并填补缺口的能力才是护城河；与 Levie「模型一变就有新一轮活」同构，但他把答案落在产品方法而非岗位上（[2026-06-06-madhu-guru-build-for-the-slope]）。

## 时间线

- 2026-04-14 [2026-04-14-agent-deployer-role] Levie 判断每个团队都需要专职部署和运营 agent 的人，写出 JD 草稿：打通系统、设计人介入节点、跑 eval、管 KPI。
- 2026-04-15 [2026-04-15-levie-forward-deployed-engineers] Levie：向企业卖 agent 实质是卖工作流交付，FDE 短期不会消失，对 SI 和咨询公司是新业务线。
- 2026-04-21 [2026-04-21-levie-agent-ops-roles] Levie 给企业 agent 专职岗列出完整职责清单（evals、上下文、系统打通、变更管理），理由是这活太技术化、当兼职做不成。
- 2026-04-22 [2026-04-22-levie-enterprise-agents] Levie 列企业落地四障碍：遗留系统、数据碎片、知识未数字化、变更管理；判断垂直部署服务是大机会、FDE 模式长期存在。
- 2026-04-28 [2026-04-28-valley-enterprise-gap] Matt Turck 给出买方证词：硅谷讲自加速叙事，Global 2000 说两年 AI 投入零生产力、只认 coding AI、agent 吓人。
- 2026-04-30 [2026-04-30-levie-agent-engineering-roles] Box 开始招内部 agent 工程师：像对内的 FDE，把自动化带给流程而不是岗位；预计业务侧还会长出 agent PM。
- 2026-05-04 [2026-05-04-levie-agent-implementation-opportunity] Levie 拆解落地前置工作（跨系统数据、权限审计、流程文档化、人机分工、eval），判断实施类工作量被低估，这也是垂直 agent 的逻辑。
- 2026-05-05 [2026-05-05-levie-agents-enter-knowledge-work-no-shortcut] Levie 注意到 Anthropic 和 OpenAI 都推了帮企业部署 agent 的项目：连大厂都承认落地层关键，没有捷径。
- 2026-05-11 [2026-05-11-box-ai-automation-engineer] Box 招「AI 自动化工程师」，Levie 定义其为面向内部职能的 FDE：嵌入业务的全职技术岗，不是 nights and weekends 的副业。
- 2026-05-16 [2026-05-16-levie-fde-core-competency] Levie 给出 FDE 的机制论证：软件交付即定型，AI 交付物持续变化，FDE 或其等价物是规模化部署 AI 的核心能力。
- 2026-05-19 [2026-05-19-levie-agent-data-strategy] Levie：多数公司 agent 战略卡住的根因是数据战略——受约束的上下文喂不对，很多 AI 问题是伪装成 AI 问题的数据问题。
- 2026-05-21 [2026-05-21-levie-fde-agent-job-durable] Levie 对比云迁移论证 FDE 岗位耐久性：云不改业务流程，agent 直接改写员工工作流，且模型更新不断制造新一轮实施活。
- 2026-05-25 [2026-05-25-levie-ceo-ai-psychosis] Levie：CEO 最容易对 AI 产生错觉，因为离最后一公里太远只见 happy path；解法是大量用、亲手走一遍原型到生产。
- 2026-05-25 [2026-05-25-madhu-guru-vague-ai-mandates] Madhu Guru 引 Levie 把错觉推到组织层面：CEO FOMO 下模糊指令，员工用表演式 demo 应付，两年空转。
- 2026-05-29 [2026-05-29-levie-diffusion-bottleneck-internal-fde] Levie 解释模型进步反而拖慢落地（新突破作废旧架构），列出编码之外知识工作的五六个劣势，判断内部 FDE 是长期岗位。
- 2026-06-06 [2026-06-06-madhu-guru-build-for-the-slope] Madhu Guru 给企业 AI 团队方法论：「为斜率而建」，围绕当下模型弱点搭有保质期的脚手架，识别并填补缺口的能力本身是护城河。
