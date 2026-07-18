# token 经济账

「token 永远在变便宜」这个行业默认正在失效：模型变大、推理变贵，算力产能紧张给了数据中心和实验室定价权，前沿 token 单价不降反升（Levie 的说法是本该十年走完的算力降本被压进了十二个月，成本曲线没出现）。这条线索跟三个互相咬合的子问题：需求侧——agent 把单任务消耗拉高几个数量级，token 成本从工程问题升级成 CIO 级预算问题，钱从 IT 预算溢出到业务线；供给侧——推理云利用率 95%、采购要签多年合同加预付，连 CPU 都可能跟着短缺，OpenAI 开始卖「用长期承诺换折扣」的确定性；结算侧——agent 之间互相付费催生微支付需求，按 token、按结果、按席位三种计价模型在重新洗牌。买方没有标准答案、卖方在锁定客户，是当前格局。

## 各方立场

- **Aaron Levie（Box）**：本线索主叙事者，企业买方视角，立场从需求判断推进到成本治理。4 月先立论：效率提升推高总需求，agent 的 token 需求可能被低估几百倍（[2026-04-12-levie-demand-expansion]）；5 月初观察到大企业开始像分配人才和营销预算一样分配 token，可见性和管控工具缺位是创业机会（[2026-05-09-levie-token-budgeting-enterprise]）；从财富 500 强 CIO 晚宴带回定性——token 成本是最激烈议题，企业混用五种策略但没人觉得找到对的解法（[2026-05-20-levie-token-cost-enterprise-cio]）；判断推理成本不会收敛到单一低价，按任务分层只会拉大（[2026-05-22-levie-inference-cost-stratification]）；最后把账算全：编码 agent 单任务可烧上千美元、席位订阅失效，前沿 token 因产能紧张和模型变大在涨价，IT 预算（占收入 3-7%）装不下、开销挪到没有 FinOps 的业务线，应对是预留产能对冲加「能力饱和后降级到便宜模型」，预测企业平均同时用六个左右模型（[2026-05-29-levie-tokenmaxxing-enterprise-economics]）。注意 Box 卖企业治理层，「需要新软件管 token」的叙事对其有利。
- **Sam Altman（OpenAI）**：供给方卖确定性。客户越来越要算力确定性，OpenAI 对 1-3 年用量承诺给折扣 token，并向本批 YC 每家投 200 万美元 token；判断模型变强后世界会有一段时间算力受限，额度有限且优先留给 ChatGPT/Codex（[2026-05-20-sam-altman-discounted-token-commits]）。与同日 Levie 的 CIO 观察是同一问题两端：供给方在卖确定性，需求方还没想清楚怎么买。
- **Dario Amodei（Anthropic，Peter Yang 听写）**：需求侧最硬的数字——今年早些时候用量和收入增长 80 倍，所以继续尽可能收购算力（[2026-05-07-dario-80x-compute]）。内部人自述，无统计口径。
- **Tuhin Srivastava（Baseten）**：推理云一手行情，称算力紧缺远超外界认知：18 家云 90 个集群利用率多数在 95% 左右，每天下午固定开会调配容量；拿 1024 张 B200 要签三到五年合同加 20-30% 预付，资金成本成了竞争变量（[2026-05-02-baseten-inference-crunch]）。卖推理服务的人，行情条款可核验。
- **Ivan Burazin（Daytona）**：把短缺预期从 GPU 延伸到 CPU——RL 训练要靠海量秒级起停的 CPU 沙箱喂满 GPU，长跑 agent 每任务占一台，转述 SemiAnalysis 预测 10 月起 CPU 可能不够用；一手商业结构数据：跑超 24 小时的沙箱占 2.5% 却贡献约 20% 收入（[2026-05-15-daytona-cpu-shortage-infra]）。
- **Emily Glassberg Sands（Stripe）**：计价与风控层的一手数据。4 月判断模型提供方按 token 计费会继续、垂直 AI 走向按结果计费、企业 seat 授权半年内可能腰斩；欺诈从盗卡转向偷算力——免费试用滥用半年涨 4 倍，有公司每个付费用户背后先烧 625 美元试用成本，免费算力成了新的获客成本（[2026-04-30-stripe-agent-economy]）。7 月同题数据继续恶化：多账号滥用占新注册比例从 7% 涨到六分之一以上，免费试用滥用半年又翻倍多；拆出三种具体欺诈手法和转售黑产链条，并给出应对基础设施——Metronome+Tempo 的实时计量/结算，判断终局是 agent 变成自负盈亏的"微型公司"（[2026-07-11-stripe-sands-token-theft-fraud]、[2026-07-11-stripe-sands-agent-micro-firm]）。
- **Jeremy Allaire（Circle）**：结算侧最早开枪。agent 间几美分到几十美分的支付已开始出现，现有金融基础设施撑不住全球即时、可编程的数十亿笔微支付，给出自家方案 ARC（USDC 原生、数百毫秒结算）（[2026-04-12-allaire-agentic-economy]）。全程推自家产品，需求清单可用。
- **Amjad Masad（Replit）**：从平台成本角度呼应微支付——bot 达到人类水平后免费服务难以为继，每次 git push 收几美分可能就足以减少垃圾请求，结算或许用比特币避免 KYC，措辞停在「值得探索」（[2026-04-29-micropayments-for-git-push]）。
- **Peter Steinberger（OpenClaw）**：本线索的反方参照系。直接把「token 不要钱」当工程前提，约 100 个 codex 常驻云端接管 PR 审查、安全扫描、性能回归等全部流水线（[2026-05-16-steipete-tokens-dont-matter]）。个人开源项目的成本结构与企业预算约束相反，恰好标出争论的另一极：单价再涨，对押注 token 换工程产能的人也可能不构成约束。
- **Kyle Daigle（GitHub COO）**：从开发者付费侧给路由解法。针对「200 美元订阅滚成 2000 美元用量账单」，他判断关键不是让开发者手动切便宜模型（真到那步基本没人会切），而是让工具按任务意图自动路由——难的活交前沿模型、收尾小活（查找替换式改命名）下放到 Haiku 级小模型，再叠加 frontier tuning 减少返工；微软 Foundry 已有 API 层路由器（[2026-06-18-github-coo-model-router-token-cost]）。与 Levie 从应用层提的路由判断同向，但落在 GitHub/微软自家产品上，要打折。
- **Dax Raad（OpenCode 作者）**：一手运营数据显示用量份额和成本份额可以严重脱节——团队接入 GPT-5.6 Sol 头一周，Fable-5 只占约 5% 的用量却吃掉团队 30% 的成本，隐含 Fable 单位成本远高于 Sol；具体计量单位未注明，只反映一个团队一周的情况（[2026-07-12-dax-altman-fable-cost-share]）。Altman 转发这条追问，没有反驳或删除，反而放大了这条对自家模型不算有利的数据。
- **Glenn Fogel（Booking Holdings CEO）**：企业买方视角的坦白补充——即便 Penny（agent 旅行顾问）已经对外跑了一段时间、采用率据称连续翻倍，公司自己也没算清每次调用的真实 token 成本和对应的长期客户价值，「该用哪个模型、什么时候用」仍是待解的路由难题；这条坦白说明即便是年交易额近两千亿美元的公司，也没有比创业公司领先多少（[2026-07-12-fogel-booking-penny-agent-economics]）。
- **Ari（Datalogy）/ Rob（Radical），Unsupervised Learning**：把算力紧缺推到 API 供给端。实验室赚自家产品（Claude Code）多于赚 API，Ari 判断可能不为商业、纯被算力逼着限流或阶段性停掉公开 API，OpenAI 卖「锁定未来 token 额度」的期货是前兆；Rob 加码——最强模型可能只留内部用。Ari 给预测：2027 年底前有把握看到 Anthropic 或 OpenAI 暂停/大幅限制 API 一段时间。研究者兼投资人预判，带对冲（[2026-06-13-compute-crunch-api-access-risk]）。
- **Sachin Katti（OpenAI 工业算力负责人）**：供给侧第一次有人给出内部机制解释。需求一直跑赢供给，历史上每次以为算力够用想放慢建设都被证明是判断错误；训练和推理的界限本身在消失（合成数据生成、后训练、测试时计算都算推理），叠加 AI 加速 AI 研究，算力需求会持续爆炸式增长。自研芯片 Jalapeno 九个月流片（职业生涯最快），因为 OpenAI 自己是芯片的最终客户；判断 AI 设计自己所需系统的「递归」阶段不远。商业化动作是卖「guaranteed capacity」（保证一定金额的 token 供应），把智能当成企业要做供应链对冲的关键资源（[2026-07-18-katti-openai-compute-supply-demand]）。内部人自述，为公司基础设施投入背书，需打折；可核验部分是具体时间线和工程细节。
- **Anthropic 官方**：Fable 5 访问限额是这条线索里第一次由需求方厂商亲自证实「限流是结构性反复，不是一次性事故」——罕见承认需求从上线起就没判断准过，访问权限因此分阶段调整、扩大过多次；7 月 20 日起 Max/Team Premium 限额回到 50%，Pro/Team Standard 改发一次性 100 美元额度，新增容量优先给了用量最大的付费档位（[2026-07-18-claude-fable5-access-tiers]）。呼应 Ari/Rob 六月的预判。
- **Aaron Levie（Box）**：在自己的杰文斯论证上加修正——AI 效率提升不只拉高总用量，连前沿闭源模型的需求也会跟着涨，机制是编排环节离不开最强模型、执行环节的大部分 token 才分给便宜模型；他同时预判效率红利最终压缩的是利润率，智能定价会向基础设施本身的利润率靠拢（[2026-07-18-levie-frontier-demand-margin]）。个人推演，缺数据支撑。

## 时间线

- 2026-04-12 [2026-04-12-levie-demand-expansion] Levie：效率提升推高总需求，agent 的 token 需求可能被低估几百倍
- 2026-04-12 [2026-04-12-allaire-agentic-economy] Allaire：agent 间微支付已开始出现，现有金融基础设施撑不住，推自家结算层 ARC
- 2026-04-29 [2026-04-29-micropayments-for-git-push] Amjad：bot 达到人类水平后免费服务难以为继，值得探索按 git push 收几美分
- 2026-04-30 [2026-04-30-stripe-agent-economy] Stripe 的 Sands：token 计费在模型层会持续、垂直层走向按结果计费；欺诈从盗卡转向偷算力
- 2026-05-02 [2026-05-02-baseten-inference-crunch] Baseten CEO：算力紧缺远超认知，利用率 95%，B200 大单要三到五年合同加两三成预付
- 2026-05-07 [2026-05-07-dario-80x-compute] Dario（Peter Yang 听写）：用量和收入增长 80 倍，继续尽可能收购算力
- 2026-05-09 [2026-05-09-levie-token-budgeting-enterprise] Levie：token 预算成为大企业资源分配新议题，可见性和管控工具缺位
- 2026-05-15 [2026-05-15-daytona-cpu-shortage-infra] Daytona：继 GPU 后可能出现 CPU 短缺，RL 训练和长跑 agent 大量吃 CPU 沙箱
- 2026-05-16 [2026-05-16-steipete-tokens-dont-matter] Steipete 反向示范：假设 token 不要钱，约 100 个 codex 常驻云端重排研发流水线
- 2026-05-20 [2026-05-20-sam-altman-discounted-token-commits] Altman：对 1-3 年用量承诺给折扣 token，向本批 YC 每家投 200 万美元 token
- 2026-05-20 [2026-05-20-levie-token-cost-enterprise-cio] Levie 从 CIO 晚宴带回：token 成本是企业最激烈议题，五种策略混用、没人觉得解法对
- 2026-05-22 [2026-05-22-levie-inference-cost-stratification] Levie：推理成本不收敛，按任务分层持续拉大，能帮客户按任务优化价格的平台占优
- 2026-05-29 [2026-05-29-levie-tokenmaxxing-enterprise-economics] Levie 算总账：前沿 token 单价不降反升，单任务可烧上千美元，开销逃离 IT 预算挪到业务线
- 2026-06-13 [2026-06-13-compute-crunch-api-access-risk] Ari/Rob：算力紧缺可能逼实验室阶段性限停 API，因自家产品比 API 更赚钱，非商业决策
- 2026-06-18 [2026-06-18-github-coo-model-router-token-cost] Kyle Daigle：编码 agent 费用失控的解法是按任务意图自动路由模型，难活给前沿、收尾小活给小模型，而非指望开发者手动降级
- 2026-07-11 [2026-07-11-stripe-sands-token-theft-fraud] Sands：token 盗窃三种手法（多账号滥用、免费试用滥用、用量计费拖欠），占比较 4 月继续恶化，外加转售黑产链条
- 2026-07-11 [2026-07-11-stripe-sands-agent-micro-firm] Sands：SaaS 按人头计费为何在 AI 上失灵，Metronome+Tempo 流式支付基础设施，agent 终局是自负盈亏的"微型公司"
- 2026-07-12 [2026-07-12-dax-altman-fable-cost-share] Dax Raad：团队接入 GPT-5.6 Sol 首周，Fable 只占约 5% 用量却吃掉 30% 成本，Altman 转发放大这条对自家不利的数据
- 2026-07-12 [2026-07-12-fogel-booking-penny-agent-economics] Fogel：Booking 的 Penny 采用率据称翻倍，但公司自己也算不清每次调用的真实成本和长期价值，路由决策仍是待解难题
- 2026-07-18 [2026-07-18-katti-openai-compute-supply-demand] Katti：需求一直跑赢供给，训练推理界限消失叠加 AI 加速 AI 研究，Jalapeno 九个月流片，判断 AI 设计自身系统的「递归」不远
- 2026-07-18 [2026-07-18-claude-fable5-access-tiers] Anthropic 承认 Fable 5 需求一直估不准，7 月 20 日起 Max/Team Premium 限额回到 50%，Pro/Team Standard 改发 100 美元额度
- 2026-07-18 [2026-07-18-levie-frontier-demand-margin] Levie 修正杰文斯论证：效率提升连前沿模型需求也会涨，代价是利润率被压缩
