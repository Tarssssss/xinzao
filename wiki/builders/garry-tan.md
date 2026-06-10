# Garry Tan（Y Combinator 总裁兼 CEO）

YC 总裁兼 CEO，同时是活跃的个人 agent 工具作者（GBrain、GStack 均出自他个人）。刊中言论两条主线：agent 架构（记忆、harness、skills）的一手实践与主张，以及面向创始人的创业判断。

## 立场与主张

### Harness 要薄，长期资产放 harness 外（核心立场，一以贯之）
- thin harness、fat skills：memory 和 skills 全用 markdown，大脑是一个 git 仓库；harness 只读文件、不拥有文件。判据：「如果 harness 死掉时你的记忆也跟着死，那你把 harness 建得太厚了」（[2026-04-12-thin-harness-fat-skills]）
- 延伸到平台层：memory 是唯一应该能带去任何平台的东西，要自己掌控、自己托管，否则就是在别人的 AI 生态里当佃农（sharecropping）。预测 2027 年会有「AI harness 之战」，类比浏览器大战——注意这是预测措辞，非既成事实（[2026-06-01-garrytan-own-your-memory-harness-wars]）

### Agent 记忆：GBrain（自家开源项目，发布话术需打折）
- 定位演进（非反转）：4 月先作为「他本人在用的 OpenClaw/Hermes 记忆配置」MIT 开源，解决上万 markdown 文件的完全召回（[2026-04-10-garry-tan-gbrain]）；5 月重新推介时升级为产品观点——记忆不是「装在盒子里的 RAG」，塞一个向量库解决不了，需要 8 层协同的知识系统（[2026-05-17-garry-tan-gbrain-agent-memory]）
- 主张用公开基准横向比记忆系统：把 GBrain 的 eval 报告和 fixtures 全部开源，邀请别家跑同一套、统一公布结果。基准偏向自家是默认折扣（[2026-05-19-garrytan-gbrain-open-evals]）

### Skills 的组织与迭代方法
- 相邻 skill 让模型自己做 DRY，合并成带分支参数的大 skill：更少、更肥，resolver 更短，context 膨胀更小。他自己标注「目前为止的经验」，非定论（[2026-04-23-fewer-fatter-skills]）
- 迭代法：让 agent 用三个不同前沿模型审 skill file 调用代码的输入输出、打分并追问「为什么不是 10 分」，再用 evals（LLM 评委）+ 单测把改进固化成可回归资产（[2026-05-26-garry-tan-skill-file-evals]）

### Agent 配置即人格
- 三文件分层：SOUL.md 定人格（他称之为宪法，要具体到「不许用 Great question 开头」的句式级条目）、USER.md 对用户深度建模（他自己写了约 4000 词）、AGENTS.md 只管操作。核心判断：指令越具体越有立场，agent 越不像 chatbot（[2026-04-27-garry-tan-three-files]）

### 浏览器作为 agent 的执行界面
- GStack Browser：在 Claude Code 里并排控制浏览器（[2026-04-26-gstack-browser]）；/pair-agent 配对后 OpenClaw 可远程控制带登录态的浏览器——方向是浏览器成为 agent 通用执行界面，但交出登录态等于让渡账号权限（[2026-04-28-gstack-pair-agent]）

### 给创始人的判断
- 给 Moore「跨越鸿沟」打补丁：当客户的替代方案是「零」（没有现状可对比）时鸿沟不存在，买家会为 60% 的方案买单，别纠结完整产品和标杆客户；有在位者时 Moore 框架照旧适用（[2026-05-23-garrytan-bar-is-zero-skip-the-chasm]）
- 别用 2026 的技术重做 2010 年代的生意（Foursquare/Yelp/Basecamp 式），别给好东西定低价——产品真能成就值远超旧 SaaS 标价（[2026-05-27-garry-tan-new-game]）

## 言论时间线

- 2026-04-07 [2026-04-07-cowork-exfiltration-vuln] 转发安全披露：Claude 编码环境已知漏洞延伸到 Cowork，可外泄用户文件，Anthropic 承认未修复
- 2026-04-10 [2026-04-10-garry-tan-gbrain] 开源自用 agent 记忆方案 GBrain（MIT），支持 OpenClaw 和 Hermes Agent
- 2026-04-12 [2026-04-12-thin-harness-fat-skills] 主张 thin harness、fat skills：memory/skills 用 markdown + git，harness 只读不拥有
- 2026-04-14 [2026-04-14-gbrain-v093] GBrain v0.9.3：搜索调优、CJK 查询、安全热修复；skillpack 含语音 agent
- 2026-04-23 [2026-04-23-fewer-fatter-skills] skills 组织经验：相邻 skill 合并成带分支参数的大 skill，resolver 更短省 context
- 2026-04-26 [2026-04-26-gstack-browser] 发布 GStack Browser，在 Claude Code 里并排控制浏览器；GBrain 同日更新 v0.22 并拆出 evals repo
- 2026-04-27 [2026-04-27-garry-tan-three-files] 公开三文件配置：SOUL.md 定人格、USER.md 建用户模型、AGENTS.md 管操作
- 2026-04-28 [2026-04-28-gstack-pair-agent] GStack 内置带 Claude Code 的 Chromium，/pair-agent 配对后 OpenClaw 可远程控制浏览器
- 2026-05-17 [2026-05-17-garry-tan-gbrain-agent-memory] 重新推介 GBrain：8 层记忆系统，「不是装在盒子里的 RAG」
- 2026-05-19 [2026-05-19-garrytan-gbrain-open-evals] 开源 GBrain 完整 eval 报告和测试集，邀请其他记忆系统跑同一套
- 2026-05-23 [2026-05-23-garrytan-bar-is-zero-skip-the-chasm] 替代方案为「零」时 Moore 的鸿沟不存在，买家会为 60% 方案买单
- 2026-05-26 [2026-05-26-garry-tan-skill-file-evals] 用多个前沿模型做评委迭代 skill file，再以 evals + 单测固化改进
- 2026-05-27 [2026-05-27-garry-tan-new-game] 别用 2026 技术重做 2010 年代的生意，别给好东西定低价
- 2026-06-01 [2026-06-01-garrytan-own-your-memory-harness-wars] 主张自己掌控和托管 memory，预测 2027 年「AI harness 之战」
