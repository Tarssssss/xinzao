# 可验证性与锯齿状能力

为什么 AI 的能力跃升集中在编程、数学这类领域，而日常搜索、写作进步有限？这条线索围绕一个解释框架展开：可验证奖励让这些领域最适合 RL，B2B 经济价值又让实验室优先把它们装进训练分布，于是模型能力呈「锯齿状」——能重构十万行代码库，也会建议你步行去 50 米外的洗车房。框架主线是 Karpathy（4 月提出双机制，5 月补经济学层并自称不完全满意），但更值得跟的是研究者对「可验证边界」的反复修正：Vinyals 发现窄域 RL 意外泛化、又承认多数任务连验证器都写不出来；Dan Roberts 明确承认可验证与不可验证奖励之间有巨大缺口；Kaiser 干脆把二分拆成连续谱，称可验证性被高估、堆人工标注几乎什么领域都训得动，真正的约束是经济。边界从「可验证 vs 不可验证」的硬二分一路松动到「谱 + 经济账」。这条线索直接决定哪些 agent 方向短期可行（SWE agent 先出现、知识工作 agent 迟到的原因就在这），是评估创业方向和 RL 叙事的核心框架，且各家说法仍在逐月修正。

## 各方立场

- **Andrej Karpathy（前 Tesla / OpenAI）**：框架提出者，且持续自我修正。先解释 AI 能力认知分化：跃升集中在有显式可验证奖励、B2B 价值高的技术领域，免费档用户和付费 agentic 模型用户在各说各话（[2026-04-10-karpathy-capability-gap]）；随后给锯齿补经济学层——营收和 TAM 决定实验室把什么装进 RL 训练分布，分布内是在轨道上飞、分布外是丛林开路，并明确说对这个解释还不百分之百满意（[2026-05-01-karpathy-sequoia-fireside]）；最后收敛成一句判断：传统计算机自动化「能写明」的，这代 LLM 自动化「能验证」的，锯齿既来自训练方式也来自实验室往数据里放了什么；对创业者的含义是可验证场景给了自己做 fine-tune 的杠杆，且他认为「几乎一切最终都能在某种程度上被变得可验证」，连写作都能用 LLM 评委 council（[2026-05-04-karpathy-verifiability-jaggedness]）。
- **Lukasz Kaiser（Transformer 作者，前 OpenAI / Google）**：对框架松绑最彻底的一位。可验证性是连续谱而非二分——连数学都被高估了（多数证明不形式化），而诗歌、图像「好不好看」这类「不可验证」任务，找够多人打标就能训出可观水平，可验证性这道坎本质只是稀疏信号，真正的约束是数据和起步模型的经济账（[2026-06-07-kaiser-verifiability-is-a-spectrum]）；同时用「锯齿状」描述泛化本身：模型以异类方式泛化，能解研究级数学却长期卡在几何，要先穷尽所有别的选项才学到概念，他有「后 Transformer 方向泛化更好」的直觉但反复加对冲（[2026-06-07-lukasz-kaiser-generalization-post-transformer]）。
- **Oriol Vinyals（Google DeepMind）**：边界两头都给了证据。过去一年改变他看法最多的，是在数学、编码这类窄难题上做 RL 竟泛化到其他领域的推理；但他也点出限制——大多数他想让模型做的事「给他全世界的时间也写不出验证器」，希望押在评估比创建简单的不对称上，让模型自己当裁判（[2026-05-23-vinyals-rl-narrow-domains-generalize]）。
- **Dan Roberts（OpenAI RL 基础负责人）**：一线视角 + 克制的外推。重申「RL 是蛋糕本身而不是奶油」，用 Erdős 数学突破说明可验证路线已能产出研究级结果；但对咨询、法律、银行这类无可验证奖励的领域措辞收着——RL 会扮演一部分角色，但没把话说成能直接攻下，明确承认可验证与不可验证奖励之间有巨大缺口（[2026-06-05-dan-roberts-rl-is-the-cake]）。
- **Guillaume Lample（Mistral 首席科学家）**：把可验证性当投资标的。Leanstral 押注形式化证明，理由正是奖励完全可验证——Lean 编译通过即正确，无 reward hacking 空间；预判形式化验证今天市场小只是因为太难，coding agent 普及后会明显变大（[2026-04-07-mistral-voxtral-leanstral]）。
- **Herzig（SAP CTO）**：把框架搬到企业流程侧。agentic coding 能成靠结果可验证（编译、测试通过），企业流程缺的正是「给定输入、应得输出」的验证数据，存量数据不够用，所以要先攒 eval 数据、回收 agent 决策痕迹（[2026-04-25-sap-cto-no-priors]）。
- **Mati Staniszewski（ElevenLabs CEO）**：给出音频版锯齿地图——客服稳定可用、情感交互还不行、音乐能做制作级但出不了 Top Charts；被问到是否就是 Karpathy 的「实验室只训有经济价值的部分」时没有顺着认领，称他们按客户长期影响来训、也会训短期不产生价值的模型（[2026-05-10-elevenlabs-audio-jagged-trust]）。
- **Madhu Guru（前 Google Gemini 产品负责人）**：训练数据视角的补充解释。推动前沿的是高经济价值任务的数据，SWE 任务相对有文档、可被采集，所以先有 SWE agent；知识工作任务缺文档、靠隐性领域知识、被遗留工具割裂，这是知识工作 agent 迟到的原因——瓶颈未必在模型，在数据可得性（[2026-06-08-madhu-guru-training-data-why-swe-agents-first]）。
- **Swyx（Cognition）**：把可验证性从「模型能力」延到「实验室可信度」。点名 poolside 少见地公开完整评测集（6 benchmark×4 遍×几百轮），外部可自查有没有 reward hacking——可核验性从「信厂商报分」转向「自审运行记录」；同时称其 Small 模型编码胜过 Thinking Machines（他的措辞、单一信源）（[2026-07-24-swyx-poolside-eval-openness]）。与 Lample「Lean 编译通过即正确、无 reward hacking 空间」同一关切的落地版。

## 时间线

- 2026-04-07 [2026-04-07-mistral-voxtral-leanstral] Lample 解释 Leanstral 押注形式化证明：奖励完全可验证、无 reward hacking，预判 coding agent 会把形式化验证市场做大
- 2026-04-10 [2026-04-10-karpathy-capability-gap] Karpathy 解释能力认知分化：跃升集中在可验证、B2B 价值高的领域，两群用户在各说各话
- 2026-04-25 [2026-04-25-sap-cto-no-priors] SAP CTO Herzig：agentic coding 能成靠结果可验证，企业流程要复制就得先攒输入对输出的 eval 数据
- 2026-05-01 [2026-05-01-karpathy-sequoia-fireside] Karpathy 给锯齿补经济学解释：营收和 TAM 决定 RL 训练分布，自称对此还不完全满意
- 2026-05-04 [2026-05-04-karpathy-verifiability-jaggedness] Karpathy 收敛框架：LLM 自动化「能验证」的东西，可验证场景是创业者的 fine-tune 杠杆，「几乎一切最终都能被变得可验证」
- 2026-05-10 [2026-05-10-elevenlabs-audio-jagged-trust] Mati 画出音频能力锯齿地图：客服可用、情感交互不行；未认领「只训有经济价值部分」的说法
- 2026-05-23 [2026-05-23-vinyals-rl-narrow-domains-generalize] Vinyals：窄难题 RL 意外泛化到其他推理，但多数任务连验证器都写不出，押注评估比创建简单
- 2026-06-05 [2026-06-05-dan-roberts-rl-is-the-cake] OpenAI 的 Roberts：RL 是蛋糕本身，Erdős 突破验证可验证路线，但承认与不可验证领域间有巨大缺口
- 2026-06-07 [2026-06-07-kaiser-verifiability-is-a-spectrum] Kaiser：可验证性是被高估的连续谱，堆标注数据几乎什么领域都训得动，约束是经济
- 2026-06-07 [2026-06-07-lukasz-kaiser-generalization-post-transformer] Kaiser：模型以异类方式锯齿状泛化，要穷尽别的选项才学到概念，后 Transformer 直觉仍是直觉
- 2026-06-08 [2026-06-08-madhu-guru-training-data-why-swe-agents-first] Madhu Guru：SWE 任务有文档可采集所以先有 SWE agent，知识工作 agent 迟到卡在数据不在模型
- 2026-07-24 [2026-07-24-swyx-poolside-eval-openness] Swyx：poolside 公开完整评测集让外部自查 reward hacking，把「可自证不作弊」立为实验室可信信号
