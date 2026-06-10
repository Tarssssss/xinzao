# 应用层护城河之争

模型层能力持续变强且趋于同质，应用层公司靠什么活下来——这是 2026 年春夏 builder 圈持续交锋的核心问题。线索从 4 月 Rauch 的「护城河在生产体系」起，经 5 月「AI 抹平的能力不是护城河」的共识，到 6 月收敛成三个具体答案：私有 context/数据接入、私有 eval（含「换模型还能爬坡」的检验法）、模型路由/编排层。Levie 几乎每天推进一步，Nadella 从微软立场给出 eval 视角，路由这条还有前 Gemini PM 的落地节奏佐证。值得跟踪是因为各方立场都带自家生意的倾向（Box 卖 context 接入、微软做 harness、Vercel 卖基础设施），但给出的检验方法可独立核验，且话题仍在每日演进。

## 各方立场

- **Aaron Levie（Box CEO，本线索主力）**：体系最完整，分三层递进。前提：AI 让某事变容易对所有人同样容易，差异化被挤向别处（2026-05-08-levie-ai-commoditization-differentiation）。答案一是 context——企业独有数据、流程、领域工作流接上 AI 才是不可复制的（2026-06-02-levie-agent-era-moat），context 是企业 agent 头号问题、也是应用层和 FDE 模式最大杠杆（2026-06-01-levie-enterprise-agent-context-problem），再强的模型也需要领域 context 和专有数据进上下文窗口（2026-06-09-levie-context-still-needed），护城河落在把企业私有现实整理成模型能用的形态这类「不光鲜的工作」（2026-06-10-levie-applied-ai-untrainable-corner）。答案二是路由——token 成本变成运营开支大头后，靠领域 eval 和工作模式理解做模型路由是应用层最重要的差异化之一（2026-06-03-aaron-levie-model-routing-applied-ai），用例双向分层后能成本最优路由的编排层越来越值钱（2026-06-08-aaron-levie-model-stratification-routing-layer）。
- **Satya Nadella（Microsoft CEO）**：把护城河收敛到私有 eval，给出可操作检验法——把底层模型从 A 换到 B 还能不能继续 hill-climb，能则掌控价值曲线，不能则被锁死；主张 harness 开放、配自己的 context/tools/eval 爬坡（2026-06-04-satya-nadella-private-evals-harness-moat）。与 Levie 的 eval+路由论互为印证，但服务于微软「harness 公司」定位。
- **Guillermo Rauch（Vercel CEO）**：护城河从「写出来的代码」转向「生产代码的体系」（the alpha is in your factory），佐证是 Stripe、Ramp、Spotify 等都在自建内部 coding agent 平台——现成 agent 缺企业内部知识，这本身就是私有 context 论的早期版本（2026-04-14-vercel-open-agents）。
- **Jake Stauch（Serval 创始人）**：应用层产品的价值是给模型加边界（权限、审批、审计），可复制的产品优势会隔夜消失，留下的护城河是客户洞察和人（2026-05-20-serval-jake-stauch-ai-native-itsm）。与 Levie 同向但更激进——连产品本身都不算护城河。
- **Madhu Guru（前 Google Gemini PM）**：从落地侧佐证路由论，给出企业三阶段曲线（跟风用当红模型→过度优化→精细路由），强调路由「真的很难」，企业比 AI 原生 builder 晚 6-9 个月（2026-06-07-model-routing-applied-layer-differentiation）。
- **Nikunj Kothari（早期投资人，反面警示）**：靠发布视频和分发堆出的势头从来不是护城河，2023-2025 这批公司正为忽视留存买单——给「什么不是护城河」画了下限（2026-05-05-nikunj-momentum-not-a-moat-retention）。

## 时间线

- 2026-04-14 [2026-04-14-vercel-open-agents] Rauch 开源 Open Agents，称护城河从代码转向生产代码的体系，点名大公司自建 coding agent 平台的趋势
- 2026-05-05 [2026-05-05-nikunj-momentum-not-a-moat-retention] Nikunj：势头不是护城河，留存才是，这批创业公司开始买单
- 2026-05-08 [2026-05-08-levie-ai-commoditization-differentiation] Levie 立论：AI 变容易的能力对所有人同样容易，差异化被挤向未自动化环节
- 2026-05-20 [2026-05-20-serval-jake-stauch-ai-native-itsm] Stauch：产品是边界不是能力，可复制优势隔夜消失，护城河是客户洞察
- 2026-06-01 [2026-06-01-levie-enterprise-agent-context-problem] Levie：context 是企业 agent 头号问题，应用层和 FDE 的最大杠杆
- 2026-06-02 [2026-06-02-levie-agent-era-moat] Levie：对手用同样的模型时，优势来自把独有数据和流程接上 AI
- 2026-06-03 [2026-06-03-aaron-levie-model-routing-applied-ai] Levie 引入路由线：token 成本驱动下，领域 eval + 模型路由成应用层差异化
- 2026-06-04 [2026-06-04-satya-nadella-private-evals-harness-moat] Nadella：企业最大 IP 是私有 eval，检验法是换模型后还能不能 hill-climb
- 2026-06-07 [2026-06-07-model-routing-applied-layer-differentiation] Levie 与 Madhu Guru 合流：路由是下一个差异化点但很难，企业晚 6-9 个月
- 2026-06-08 [2026-06-08-aaron-levie-model-stratification-routing-layer] Levie：用例双向分层（前沿和低端都变大），成本最优路由的编排层越来越值钱
- 2026-06-09 [2026-06-09-levie-context-still-needed] Levie 回到 context 线：再强的模型也需要引导，applied AI 抽象层持续有价值
- 2026-06-10 [2026-06-10-levie-applied-ai-untrainable-corner] Levie 引「untrainable corner」：护城河在数据整理、变更管理、FDE 落地这些不光鲜的工作；前沿实验室和应用生态可同时壮大
