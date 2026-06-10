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

### 完成标准（DoD）

网站已上线 + 64 天回填完成 + 明天早上 routine 自己会跑。
