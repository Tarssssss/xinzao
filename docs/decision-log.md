# Decision Log

人类回看用。记录这个项目的目标和每个关键决策的理由。后续每次有方向性决定（人做的或 agent 做的）都往下追加一条，带日期。

## 项目目标

帮用户了解 AI builder 们在 X / podcast / blog 上的言论动向。用户痛点：X 上噪音太大、信息太杂。**注意力优化是产品和设计的核心理念**——每条 story 的 summary 是决策辅助，让人 30 秒内判断「这条值不值得点开原文」，而不是内容缩写。

信源：[follow-builders](https://github.com/zarazhangrui/follow-builders)（Zara Zhang 的公开项目，监测 26 位 AI builder 的 X 动态 + 6 个 AI podcast + 2 个官方博客，GitHub Action 每天 06:17 UTC 更新 feed）。

## 决策记录

### 2026-06-10 项目重启（grill 会话）

| # | 决策 | 选择 | 理由 / 被否选项 |
|---|------|------|----------------|
| 1 | 内容生产方式 | 全自动（无人审稿、无通知） | 否掉「人触发 + Claude 整理」和「纯人工」；选稿写作规则已文档化，质量靠写作规范和 A/B 实验保证 |
| 2 | 自动化载体 | Claude routine（scheduled cloud agent） | 套餐含 15 runs/天，无需管 API key；否掉 GitHub Action + API（维护成本高）和 Vercel Cron（静态站改不了 git 数据） |
| 3 | 更新频率 | **日更**（原计划周更，开工前改） | feed-x 是 24h 滚动窗口，日更让 sync 最简最健壮；产品习惯是「每天 2 分钟扫今天 builder 说了什么」；routine 额度无压力。代价：放弃周刊合并叙事，保留当天同主题合并 |
| 4 | routine 时间 | 每天 09:00 Europe/London | 上游 06:17 UTC 更新完之后 |
| 5 | 旧数据处理 | 清空旧 8 条手写 story，**全量回填** 2026-04-07 至今的日度 issue | Explore agent 查实：上游 64 天日提交无缺漏，任意快照可经 raw.githubusercontent.com/<repo>/<sha>/ 直拉，X 内容跨周零重叠去重成本极低；最新内容价值高（满足「价值高才回填」的预设标准） |
| 6 | 页面结构 | 保留详情页 | 自己写的中文整理是产品的全部增量价值，需要容器和可分享的独立 URL；否掉纯 HN 外链式和行内展开式 |
| 7 | 视觉语言 | HN 骨架 + 自己的皮，借鉴报刊刊号感（Issue #N · 日期） | 高密度、编号列表、零装饰；中文排版不套 HN 原版 Verdana 体系；否掉像素级 HN 克隆（克隆即 generic） |
| 8 | 站名 | 设计阶段配合视觉语言重新取（Tars 授权 agent 决定） | 原名 AI Builder Wire 不保留 |
| 9 | summary 写法 | 决策辅助而非缩写：让人快速判断是否读原文；原文链接在列表行直接可跳 | Tars 明确要求 |
| 10 | 写作风格 | 用 agent workflow 做 A/B 盲评：/tars-writing 规则 vs 现有 daily-run 规则，按「核心内容传达 / 30 秒可判断阅读价值」打分，胜者固化为回填和 routine 共用的写作 prompt | Tars 明确要求实验验证而非直接拍板 |
| 11 | 仓库 | GitHub public repo（Tarssssss 账号） | 内容和信源本来就公开；public 在 Vercel 免费档最省事 |
| 12 | 域名 | 先用 `<项目名>.vercel.app` | 跑通 pipeline 后想要再挂自定义域名 |
| 13 | 路由 | HashRouter → BrowserRouter + vercel.json rewrites | 部署后 URL 干净、可分享 |

### 2026-06-10 设计阶段（agent 决定，Tars 已授权）

| # | 决策 | 选择 | 理由 |
|---|------|------|------|
| 14 | 站名 | **信噪**（英文 tagline: Signal over noise） | 产品做的事就是提高时间线的信噪比，名字直接说这件事；两个字、有报刊感 |
| 15 | 视觉语言 | 中文电讯刊：暖纸白 + 墨色 + 朱砂红唯一强调色；思源宋体标题 + IBM Plex Mono 号码与 meta + 系统黑体正文；报头双线、印章式 logo | 宋体标题配黑体正文是中文报纸的经典搭配；朱砂红只用在期号/外链/印章，克制即注意力优化 |
| 16 | 首页信息架构 | 只放今天一期 + 往期目录（期号/日期/头条/条数） | 注意力优化：今天一屏扫完；64 期全量平铺会变成另一种噪音 |
| 17 | Issue 编号 | 不存盘，按日期升序在加载时派生 | 消除 routine 写错期号的可能 |
| 18 | 数据文件 | 每天一个 `src/data/issues/YYYY-MM-DD.json` | routine 只新增文件不改代码，出错半径最小 |

### 2026-06-10 写作风格 A/B 盲评结果

tars-writing 9:3 胜 baseline（4 素材 × 3 评委：扫描/编辑/事实核查三视角全部偏向 tars）。分维度：事实保真 4.92 vs 4.04（差距最大，baseline 多次编造细节、确定性膨胀）、决策辅助 4.58 vs 4.13、中文质感 4.17 vs 3.96。最终规范以 tars-writing 为骨架，合并 baseline 的 summary 信息覆盖要求与编辑增量三式，落盘为 [writing-guide.md](writing-guide.md)，是写稿 agent 的唯一指南。

### 2026-06-10 回填执行记录

64 天回填 workflow（每天一个写稿 agent + 1/8 抽样保真审计）跑出 28 期 / 231 条后撞 Claude 用量上限，重置后续跑又再次中断。Tars 决定：**已完成的 28 期（2026-04-07 → 2026-05-03、05-07）先上线；剩余 36 天挂起，后续用更便宜的模型补**（清单和冷启动说明见 [backfill-todo.md](backfill-todo.md)）。遗留：31 条超长 summary（>140 字，校验器降级为警告不阻塞 build）和未跑成的抽样审计，都并入补跑会话处理。

### 完成标准（DoD）

网站已上线 + 64 天回填完成 + 明天早上 routine 自己会跑。

### 2026-06-10 文案规范 v2 + 回填收尾（grill 续）

| # | 决策 | 选择 | 理由 |
|---|------|------|------|
| 19 | 文案核心问题 | 「薄素材硬撑成 story → 标题≈正文，没必要读正文」 | Tars 反馈：要每条正文都值得读。根因是深度由素材决定，薄素材写深=编造（撞保真红线），所以靠选稿分层而非逼写长 |
| 20 | 两层结构 | 完整 story（深度闸门：标题外增量点 ≥3）+ 速览（薄素材，只翻译原推 + 署名 + 链接，不写正文） | 速览保留信号又不假装是深度稿，且纯翻译最保真 |
| 21 | 规范沉淀 | 网站 `/guide` tab 直接渲染 `writing-guide.md` 本身（单一真相源） | Tars 看到的 = routine 遵循的；反馈→改文件→下次 routine 自动遵循，无需接线 |
| 22 | summary 字数 | v2.1 取消 50-90 硬标准，改「长度服从信息，通常 80-140」 | 实测 365 条只有 8 条落在 50-90，与「4 要素」要求和已认可存量稿都不符；50-90 定得不现实 |
| 23 | 回填模型 | 改用 **Opus**（原计划的 Sonnet 因 1M 上下文需 usage credits 跑不起来） | override Sonnet 在本环境强制走 1M 档、要 credits；Opus subagent 可正常跑 |
| 24 | 回填管线 | Opus workflow：每期 写稿 → 逐日保真 critic（对照 raw 查编造/分层/反重叠，修正后写盘） | Tars 选逐日 critic 而非抽样；critic 实际抓到 05-05 的 10× 数字膨胀、05-12/05-15 归因错误、一处误译 |
| 25 | 存量处理 | retro-sweep 把已上线 28 期里 81 条薄 story 降级进速览（仅重分类 + 翻译，正文不重写） | Tars 要求；保留的 story 对照 git HEAD 逐字未变 |

数据模型：`Issue` 加 `quickTakes`（速览），`types.ts`/`validate-issues.mjs`/`daily-run.md` 同步。收尾状态：**63 期 / 284 story / 244 速览**，`npm run build` 通过，已部署。原 `backfill-todo.md` 任务完成，删除。

### 2026-06-10 交互改版（Tars 反馈五条）

| # | 决策 | 选择 | 理由 |
|---|------|------|------|
| 26 | 信息架构 | 栏目 tab：今日 / 往期 / 规范，首页只放今日，往期独立 `/archive`；触屏左右横滑切 tab，期页之间横滑翻期（配上一期/下一期按钮） | Tars 反馈：上下结构臃肿（首页同时堆当天速览和历史）；横滑/分 tab 交互此前没用起来 |
| 27 | story 阅读 | **推翻决策 #6**：详情页改为列表行内展开（点标题原地展开正文），`/story/:slug` 路由保留，深链打开自动展开并定位该条 | Tars 反馈：正文很快消费完，跳新页太重、返回主页高频卡手。可分享 URL 的诉求靠保留路由满足，不再需要独立页面容器 |
| 28 | 原文链接 | 收起态 meta 行显示首链「原文」，展开态在 meta 行显示全部 sourceLinks（用各自 label），删掉底部孤立的「原文」区块 | Tars 反馈：底部链接像 orphan，应归入 metadata 行 |
| 29 | 移动端 | tab/翻期/行距加大点击高度，story 行列宽收窄，横滑手势本身即移动端主交互 | Tars 反馈五条之一；用 preview 在 375px 宽验证过 |

### 2026-06-10 LLM wiki（调研 Karpathy llm-wiki 后定型）

| # | 决策 | 选择 | 理由 |
|---|------|------|------|
| 30 | wiki 形态 | 按 [Karpathy llm-wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) 三层：issues JSON 为 raw（只读）、`wiki/`（builders 实体页 + threads 线索页 + index + log）为 LLM 自有层、`wiki/WIKI-GUIDE.md` 为 schema | 核心洞见是「编译一次、持续维护」而非每次检索原始素材：日更时只读 index + 2-5 页 wiki 就能做联想，不用扫 284 条 story；规模 <100k token 时纯 markdown + index 胜过 RAG，零基础设施 |
| 31 | 面向读者的产物 | story 加 `related` 字段（0-3 条、只指向更早、note ≤20 字、宁缺毋滥），展开态渲染「相关回顾」 | wiki 是 LLM 工作内存不直接发布；读者只看到联想结果。slug 是 wiki↔成稿唯一外键，validate 校验存在性与方向 |
| 32 | 日更链路 | daily-run 加第 6 步 ingest：写完稿→读 wiki→补 related→更新 builder/thread 页 | 知识随每期复利，新开 thread 设门槛（≥3 期、≥2 builder）防止页面碎片化 |
| 33 | 存量回填 | workflow 分相: builders 并行编译（按 creator 分组）→ threads 并行编译（先全局识别）→ 62 期并行联想 related → index/lint 收尾 | Karpathy 的 ingest 本质串行，但对存量可用「先编译实体/线索、再做联想」改写成可并行，62 个串行 agent 不可接受 |

### 2026-06-10 往期 gallery + 翻期位置（Tars 反馈）

| # | 决策 | 选择 | 理由 |
|---|------|------|------|
| 34 | 往期形态 | 列表改卡片 gallery：桌面 2 列、移动 1 列，每卡 No./日期/条数 + 前 3 条标题（2 行截断）+「还有 N 条」 | Tars 反馈：单行列表信息量不够，强依赖点进去才知道内容 |
| 35 | 翻期位置 | pager 提到 issue-head 行（顶部常驻，窄屏只留箭头）+ 桌面键盘 ←/→；底部翻期保留 | Tars 反馈：只放底部强依赖读完全文才能翻；顶部解决「扫一眼就走」，底部服务「读完顺势翻」 |
