# Aaron Levie（CEO @ Box）

Box CEO，刊中言论量最大的企业 AI 看多者，自称「Jevons 悖论派」。三条主线高度稳定：AI 不消灭岗位而是扩张岗位、软件必须 headless 化、企业落地 agent 靠 FDE 和数据层。几乎所有判断与 Box 生意方向一致（企业内容平台 + AI），素材逐条做了立场校准；他自报的模型评测数字（GPT-5.5、Gemini 3.5 Flash）方法未公开，看分行业相对幅度比看总分有用。

## 立场与主张

### 就业与岗位：Jevons 悖论派，工作不消失
- 核心机制群：效率提升推高总需求（律师 1975 年约 40 万→2025 年约 137.5 万，2026-04-12-levie-demand-expansion）；AI 在一处提速后瓶颈转移到仍需人的环节（2026-04-16-levie-job-bottlenecks）；任务可自动化≠岗位可消灭，岗位定义会扩张（2026-05-24-levie-tasks-vs-jobs、2026-05-27-levie-agents-automate-tasks-not-jobs）；竞争抬高所有人的产出预期，省下的产能被再投入而非裁掉（2026-05-26-levie-goldman-ceo-ai-jobs、2026-05-31-levie-ai-reinvestment-not-cost-cutting）。
- 失业论错在哪：建立在「AI 能自动化单个任务」的视角上，没算完整工作的收尾投入——AI 版 Gell-Mann 失忆症（2026-04-27-levie-ai-jobs-overwork）；编程是 agent 条件最好的领域（可验证、context 在代码库、用户技术化）仍离不开人盯，不能拿它当模板推断其他知识工作（2026-06-06-aaron-levie-coding-agents-best-case、2026-05-29-levie-diffusion-bottleneck-internal-fde）。
- 工程师需求扩张：agent 让每家公司都开始造软件，企业用上和大厂同样的模型后几乎每家都在多雇工程师（2026-04-19-levie-engineering-jobs-expand、2026-05-03-levie-engineer-thought-experiment、2026-06-04-aaron-levie-ai-expands-jobs-and-software-tam）；安全行业同理——发现漏洞变易，瓶颈移到 triage 和修复（2026-04-13-levie-security-jevons、2026-05-23-levie-security-engineer-boom-jevons）。
- **新增声音（2026-07-12）**：Sam Altman 首次以第一人称承认「目前来看 AI 净创造就业，与自己此前预期相反」，Swyx 同日把范围从编程外推到全部知识工作——三人同日发声是这条论争目前为止参与者最集中的一次（2026-07-12-altman-levie-swyx-ai-job-creation）。
- 专家侧：agent 抬高产出基准，专家更被需要而非被取代（2026-05-10-levie-experts-higher-demand）；AI 强化而非消解专业分工，角色边界的暂时模糊不等于取代（2026-05-15-levie-ai-enhances-specialization）；别因 AI 放弃扎深领域（2026-05-18-aaron-levie-go-deep-expert-with-ai）；AI 杠杆让野心+基本功越过资历门槛，新人尤其受益（2026-04-26-levie-ai-leverage）。
- 自己保留的限定：约 10% 经济体某些职能已饱和、agent 进来没有更多活（2026-05-29-levie-diffusion-bottleneck-internal-fde）；部分领域纯降本，但这种价值有上限（2026-04-16-levie-job-bottlenecks）；AI 暂时不会让人少干活，启动变易反而项目越开越多（2026-04-24-levie-ai-more-work、2026-04-27-levie-ai-jobs-overwork）。

### headless 软件与商业模式
- 软件必须能被任意 agent 调用（平台内外都算），做不到的供应商会被踢掉 / DOA；一手依据是他问过的 20+ 位 IT 负责人口径一致（2026-04-11-levie-headless-software、2026-04-13-levie-enterprise-agents、2026-04-18-levie-headless-software）。
- agent 对软件用量会是人的 100 倍，定价走向「人付席位（捆绑 API 额度）、agent 走消费计费」，可能出现按一次完成的工作计价的新型 API（2026-04-18-levie-headless-software、2026-05-01-levie-headless-pricing）。
- 受益方判断：承接 agent 工作的底层记录系统（代码、合同、发票挂在哪就涨哪），外加护栏/合规/安全层（2026-05-02-levie-agents-software）。
- 软件总量会到 100 倍，但维护税决定不会人人自己造软件，每个 agent 都需要技术的人启动和编排（2026-04-29-levie-100x-software）。

### 企业落地、FDE 与 agent 工程师岗
- 落地无捷径，瓶颈全在企业侧而非模型：遗留系统、数据碎片、权限对不上真实工作、流程没数字化、变更管理（2026-04-22-levie-enterprise-agents、2026-05-04-levie-agent-implementation-opportunity、2026-05-05-levie-agents-enter-knowledge-work-no-shortcut、2026-06-01-levie-enterprise-agent-context-problem）；agent 战略卡住的根因多是数据战略问题伪装成 AI 问题（2026-05-19-levie-agent-data-strategy）。
- 模型进步反而拖慢扩散：新突破不断让上一套架构作废，补模型限制的 agent 工程每几个季度要扔掉很大一部分；推论是做能吃到后续模型改进的产品（2026-04-19-levie-agent-architecture-churn、2026-05-29-levie-diffusion-bottleneck-internal-fde、2026-04-08-levie-knowledge-agents）。
- FDE / agent 部署岗会长期存在（与云迁移的区别：agent 直接改员工工作流 + 变化速度快），卖 agent 实质是卖工作流交付（2026-04-14-agent-deployer-role、2026-04-15-levie-forward-deployed-engineers、2026-04-21-levie-agent-ops-roles、2026-05-16-levie-fde-core-competency、2026-05-21-levie-fde-agent-job-durable）；Box 自己在招「内部 FDE」式的 agent 工程师 / AI 自动化工程师（2026-04-30-levie-agent-engineering-roles、2026-05-11-box-ai-automation-engineer）。
- 一手企业访谈数据点：用例集中在以前做不了的事、偏增收不偏裁员；「能否被 agent 调用」正成采购硬条件（2026-04-13-levie-enterprise-agents）。
- 管理层提醒：CEO 离最后一公里最远、最容易对 AI 产生 happy-path 错觉，解法是自己大量用（2026-05-25-levie-ceo-ai-psychosis）；组织竞争点移向「发现并清除瓶颈的速度」（2026-06-05-levie-bottleneck-spotting-org-skill，关键句出自 Anthropic 原文）。

### token 经济学与模型路由
- token 需求被低估几百倍（2026-04-12-levie-demand-expansion）；token 成本已从工程问题升级成 CIO 级预算与组织问题，没人觉得自己有对的解法；支出会溢出 IT 预算落到业务线 OpEx，业务线没有 FinOps（2026-05-09-levie-token-budgeting-enterprise、2026-05-20-levie-token-cost-enterprise-cio、2026-05-29-levie-tokenmaxxing-enterprise-economics）。
- **立场变化（成本收敛→分层拉大）**：他自述此前以为 AI 每 token 成本会收敛到单一低价，5 月下旬改判为按任务分层只会越拉越大（2026-05-22-levie-inference-cost-stratification）；进一步说「token 永远变便宜」当前不成立，前沿 token 因模型变大和产能紧张单价不降反升（2026-05-29-levie-tokenmaxxing-enterprise-economics）。
- 由此推出路由层判断：模型分层是双向变大（前沿盘子更大、低端也更大），能按任务把负载路由到合适价位模型的编排层会越来越值钱，是应用层最重要差异化点之一；前提是领域工作模式理解 + 强 eval（2026-06-03-aaron-levie-model-routing-applied-ai、2026-06-07-model-routing-applied-layer-differentiation、2026-06-08-aaron-levie-model-stratification-routing-layer）；「能力饱和后降级」：先用前沿模型把任务做可靠，再剥给便宜模型，企业平均会同时用约六个模型（2026-05-29-levie-tokenmaxxing-enterprise-economics）。
- **修正（2026-07-18）**：在 7 月 12 日的杰文斯论证上加了一层——AI 效率提升不只拉高总用量，连前沿闭源模型的需求也会跟着涨，机制是编排环节离不开最强模型、执行环节的大部分 token 才分给便宜模型；他同时预判这条效率红利最终压缩的是利润率，智能定价会向基础设施本身的利润率靠拢（2026-07-18-levie-frontier-demand-margin）。

### 应用层护城河
- AI 变容易的能力对所有人同样容易，不构成护城河，差异化被挤到别处（2026-05-08-levie-ai-commoditization-differentiation）；造软件变便宜后 GTM 成企业软件最难的部分（2026-06-08-aaron-levie-gtm-is-the-hard-part）。
- 护城河落点：把企业独有数据、流程、领域 context 接上 AI（2026-06-02-levie-agent-era-moat）；再强的模型也替代不了引导，context 和专有数据始终要进上下文窗口（2026-06-09-levie-context-still-needed）；应用层价值在「untrainable corner」——把企业私有现实整理成模型能用的形态（2026-06-10-levie-applied-ai-untrainable-corner）。
- **打法整合（2026-06-18）**：把前面散着说的判断收成一份四组件清单，起点是反驳「应用层只是 LLM 薄封装」——驱动企业 agentic 工作流远比预期复杂，越复杂越能随时间长出护城河。四组件：衔接智能与工作流的功能、模型路由器、FDE 推变更管理、领域化 GTM；再加一段收尾，正面回应「模型够强这些就不重要」的 bitter lesson 式质疑（企业现在就要人帮着改，这部分价值不随模型变强消失）（2026-06-18-levie-applied-ai-playbook）。是前述 context／路由／FDE／GTM 各条的合流，无立场变化。

### Box 自家评测数据点（自测自报，方法未公开）
- GPT-5.5 较 5.4 在企业知识工作评测平均 +10pp，四行业一致提升 13-19pp（2026-04-24-levie-gpt55-box-evals）。
- Gemini 3.5 Flash 较 3 Flash 复杂文档任务 +12pp，原本低分行业（医疗 +22pp、生命科学 +20pp）跳得最多（2026-05-20-levie-box-eval-gemini-3-5-flash）。

### AI 监管与政府介入（新）
- 首次就监管表态（2026-06-13-fable-restriction-ai-regulation）：政府限制「在美外国人」用 Fable，他读作政府开始直接判定模型本身「太强、不能用于特定用途」，为日后一系列管控立先例；本人主张该管用途而非模型，但认定政府深度介入 AI 进展已不可逆。立场仍与 Box 应用层位置一致。

### 可测试性与 evals（对编程-agent 论的机制补充）
- 代码对 agent 友好的核心机制是能被快速测试；多数其他工作只有砸进真实世界才算「测试」（交易执行、合同签下、销售单子成交），往往为时已晚。据此判断会出现一批「给其余工作补测试」的新机会，但前提是企业先把 evals 建起来——他指出多数企业今天的工作流没有配套 evals，判断不出模型/提示词/系统改动是变好还是变坏（2026-07-15-levie-code-testability-evals）。是对 06-06「编程是 agent 最佳案例」的机制细化，非新立场。

## 言论时间线

- 2026-04-07 [2026-04-07-levie-work-abstraction] agent 把工作上移一层抽象，拆成六环节；任务越长规划和审查占比越大
- 2026-04-08 [2026-04-08-levie-knowledge-agents] 读 Mythos 发布：模型没撞墙，coding 的生产力提升正搬进其他知识工作，要做能吃到后续模型改进的产品
- 2026-04-10 [2026-04-10-levie-automation-demand] 软件和自动化总需求被低估，agent 把从未立项的自动化点亮
- 2026-04-11 [2026-04-11-levie-headless-software] 问 20 位 IT 负责人，没人打算留下缺好 API 的供应商
- 2026-04-12 [2026-04-12-levie-demand-expansion] 效率提升推高总需求：律师 50 年涨 3 倍多；agent token 需求可能被低估几百倍
- 2026-04-13 [2026-04-13-levie-enterprise-agents] 见 20+ 企业 IT 负责人：用例偏增收非裁员，不能被 agent 调用的软件会被踢掉
- 2026-04-13 [2026-04-13-levie-security-jevons] AI 安全工具推高安全人才需求，安全行业临近 Jevons 时刻
- 2026-04-14 [2026-04-14-agent-deployer-role] 每个团队都需要专职部署运营 agent 的人，附 JD 草稿
- 2026-04-15 [2026-04-15-levie-forward-deployed-engineers] 向企业卖 agent 实质是卖工作流交付，FDE 短期不会消失
- 2026-04-16 [2026-04-16-levie-job-bottlenecks] AI 提速一处后瓶颈转移到仍需人的环节，这是 AI 创造就业的机制
- 2026-04-18 [2026-04-18-levie-headless-software] agent 用量将是人的 100 倍，收费走向人付席位、agent 付用量
- 2026-04-19 [2026-04-19-levie-agent-architecture-churn] 补模型限制的 agent 工程每几个季度作废很大一部分
- 2026-04-19 [2026-04-19-levie-engineering-jobs-expand] agent 让每家公司造软件，工程师转向系统设计和指挥 agent（Eli Lilly 岗位为证）
- 2026-04-20 [2026-04-20-roles-grow-complexity] AI 普及后多数岗位变得更复杂，旧岗位定义失效
- 2026-04-21 [2026-04-21-levie-agent-ops-roles] 企业落地 agent 需要专职岗位，给出从 evals 到变更管理的职责清单
- 2026-04-22 [2026-04-22-levie-enterprise-agents] 落地瓶颈在遗留系统、数据碎片、变更管理，FDE 模式长期存在
- 2026-04-23 [2026-04-23-chatgpt-agents-headless] 称新 ChatGPT agents 是软件 headless 化至今最大新闻，演示 Box 当知识源
- 2026-04-24 [2026-04-24-levie-gpt55-box-evals] 公布 Box 自测：GPT-5.5 较 5.4 平均高 10pp
- 2026-04-24 [2026-04-24-levie-ai-more-work] AI 暂时不会让人少干活：启动变易后做更多以前不做的事
- 2026-04-25 [2026-04-25-levie-jevons] Jevons：AI 把任务做得越好，企业接的任务越多，配套招聘上升
- 2026-04-26 [2026-04-26-levie-ai-leverage] AI 杠杆让野心+基本功越过资历门槛，公司该把这批人放进关键位置
- 2026-04-27 [2026-04-27-levie-ai-jobs-overwork] 失业预测的 Gell-Mann 失忆症；agent 过载来自杠杆变大和启动变易
- 2026-04-29 [2026-04-29-levie-100x-software] 软件量会到 100 倍，但维护税决定不会人人自己造
- 2026-04-30 [2026-04-30-levie-agent-engineering-roles] Box 开始招内部 agent 工程师：对内 FDE，把自动化带给流程而非岗位
- 2026-05-01 [2026-05-01-levie-headless-pricing] 推演 headless 定价三段论：席位捆绑 API 额度、有状态 agent、消费计费
- 2026-05-02 [2026-05-02-levie-agents-software] agent 百倍于人后，受益的是承接 agent 工作的底层记录系统
- 2026-05-03 [2026-05-03-levie-engineer-thought-experiment] 企业用上和大厂同样的模型后，他聊到的几乎每家都在多雇工程师
- 2026-05-04 [2026-05-04-levie-agent-implementation-opportunity] 企业落地 agent 的复杂度被低估，会创造大量实施类工作
- 2026-05-05 [2026-05-05-levie-agents-enter-knowledge-work-no-shortcut] Anthropic 和 OpenAI 都在帮企业部署 agent，但落地没有捷径
- 2026-05-08 [2026-05-08-levie-ai-commoditization-differentiation] AI 让某事变容易对所有人一样容易，差异化被挤到别处
- 2026-05-09 [2026-05-09-levie-token-budgeting-enterprise] token 预算正成为大企业资源分配新议题，可见性和管控不足
- 2026-05-10 [2026-05-10-levie-experts-higher-demand] agent 让外行更易入门，但抬高产出预期反而让专家需求更高
- 2026-05-11 [2026-05-11-box-ai-automation-engineer] Box 招「AI 自动化工程师」：嵌入业务的全职技术岗，非副业项目
- 2026-05-15 [2026-05-15-levie-ai-enhances-specialization] 押注 AI 强化而非消解专业分工，角色边界暂时模糊不等于取代
- 2026-05-16 [2026-05-16-levie-fde-core-competency] AI 交付的东西持续在变，FDE 模式会成为规模化部署 AI 的核心能力
- 2026-05-18 [2026-05-18-aaron-levie-go-deep-expert-with-ai] 反驳「学技术不划算」：岗位类型扩张，会驾驭 agent 的专家强于新手
- 2026-05-19 [2026-05-19-levie-agent-data-strategy] 多数公司 agent 战略卡住的根因是数据战略，不是模型
- 2026-05-20 [2026-05-20-levie-token-cost-enterprise-cio] CIO 晚宴一手观察：token 成本是最激烈议题，没人觉得有对的解法
- 2026-05-20 [2026-05-20-levie-box-eval-gemini-3-5-flash] Box 自测 Gemini 3.5 Flash：复杂文档任务 +12pp，医疗/生命科学涨幅最大
- 2026-05-21 [2026-05-21-levie-fde-agent-job-durable] FDE/agent 实施岗比云迁移更持久：改工作流 + 变化速度快
- 2026-05-22 [2026-05-22-levie-inference-cost-stratification] 改判：推理成本不收敛到低价，按任务分层持续拉大
- 2026-05-23 [2026-05-23-levie-security-engineer-boom-jevons] AI 让找漏洞更容易，瓶颈转到修复，预测安全工程师热潮
- 2026-05-24 [2026-05-24-levie-tasks-vs-jobs] 能自动化任务不等于能消灭岗位，岗位定义往往扩张
- 2026-05-25 [2026-05-25-levie-ceo-ai-psychosis] CEO 最容易对 AI 产生错觉，因为离最后一公里太远；解法是大量用
- 2026-05-26 [2026-05-26-levie-goldman-ceo-ai-jobs] 借高盛 CEO 论点反驳 AI 抢工作：需求随产能一起涨
- 2026-05-27 [2026-05-27-levie-agents-automate-tasks-not-jobs] agent 自动化的是任务非整份工作，省下的钱被投去扩招
- 2026-05-29 [2026-05-29-levie-tokenmaxxing-enterprise-economics] token 成本成企业头号难题：前沿单价不降反升，IT 预算装不下
- 2026-05-29 [2026-05-29-levie-diffusion-bottleneck-internal-fde] 模型进步反而拖慢落地；编码 vs 其他知识工作的五六个具体差异
- 2026-05-31 [2026-05-31-levie-ai-reinvestment-not-cost-cutting] 大企业用 AI 多在把省下的钱再投回业务，不是单纯砍成本
- 2026-06-01 [2026-06-01-levie-enterprise-agent-context-problem] context 是企业 agent 头号问题，也是应用层和 FDE 的最大杠杆
- 2026-06-02 [2026-06-02-levie-agent-era-moat] agent 时代护城河来自把企业独有数据和流程接上 AI
- 2026-06-03 [2026-06-03-aaron-levie-model-routing-applied-ai] token 预算成主要开支后，模型路由会成应用层最重要差异化点之一
- 2026-06-04 [2026-06-04-aaron-levie-ai-expands-jobs-and-software-tam] AI 放大就业和软件开支：token 开支已远超历史软件开支
- 2026-06-05 [2026-06-05-levie-bottleneck-spotting-org-skill] 转 Anthropic 博客划重点：发现并清除瓶颈成组织最重要技能，执行始终要人管
- 2026-06-06 [2026-06-06-aaron-levie-coding-agents-best-case] 编程是 AI 自动化条件最好的领域却仍离不开人，其他知识工作失业风险被高估
- 2026-06-07 [2026-06-07-model-routing-applied-layer-differentiation] 与 Madhu Guru 同指模型路由是应用层下一个差异化点，但做对很难
- 2026-06-08 [2026-06-08-aaron-levie-gtm-is-the-hard-part] AI 让建软件变便宜后，GTM 反而成企业软件最难的部分
- 2026-06-08 [2026-06-08-aaron-levie-model-stratification-routing-layer] 模型分层双向变大，能成本最优路由负载的编排层越来越值钱
- 2026-06-09 [2026-06-09-levie-context-still-needed] 再强的模型也替代不了引导，context 和专有数据始终要进上下文窗口
- 2026-06-10 [2026-06-10-levie-applied-ai-untrainable-corner] 应用层护城河在 untrainable corner：把企业私有现实整理成模型能用的形态
- 2026-06-13 [2026-06-13-fable-restriction-ai-regulation] 反应政府限制「在美外国人」用 Fable：政府开始管模型本身而非用途，是监管转折先例；他反对管模型，但称政府深度介入已不可逆
- 2026-06-18 [2026-06-18-levie-applied-ai-playbook] 反驳「应用层只是 LLM 薄封装」，把落地打法整理成四组件（衔接功能／路由／FDE／GTM）＋bitter lesson 回应，复杂度本身生护城河
- 2026-07-01 [2026-07-01-levie-ai-headcount-survey] Box 1,600 家企业调查：58% 预计增员，AI 最成熟采用者组升至 79%；他自标相关性非因果、方法未公开，但「AI 高采用企业裁人」的担忧在数据里未出现
- 2026-07-01 [2026-07-01-levie-fable-jailbreak-framework] 解读 Anthropic 博文：跨公司 jailbreak 评估行业标准化（联合亚马逊、微软等）；接受政府介入不可逆，但警告评估主观性和若每次大版本都要走同等审查则拖慢突破节奏
- 2026-07-12 [2026-07-12-altman-levie-swyx-ai-job-creation] 给出「AI 净创造就业」的机制解释：成本降低推高总需求，维护/决策/迭代仍离不开人；呼应 Altman 同日的预期反转、Swyx 的编程外推论断，但「软件岗位招聘逆势增长」缺具体数据来源
- 2026-07-15 [2026-07-15-levie-code-testability-evals] 代码对 agent 友好是因为能被快速测试，呼吁企业给其余工作也补上同等的评测体系
- 2026-07-18 [2026-07-18-levie-frontier-demand-margin] 给杰文斯论证加修正：AI 效率提升连前沿闭源模型的需求也会跟着涨，代价是利润率被压缩
