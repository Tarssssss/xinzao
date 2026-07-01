# Guillermo Rauch（Vercel CEO）

Vercel CEO，刊中最高频的 infra 侧发声者。立场一贯且利益相关：几乎所有判断都与 Vercel 产品路线同向（web、agent 云、v0、Sandbox），读他的言论要默认打折扣，可核验的多是产品发布本身。

## 立场与主张

- **看多 web，生成式 UI 是 AI 终态**：LLM 精通 web 技术、浏览器是所有人的 IDE；WebGPU/WASM 成熟后 web 性能天花板消失；每个超链接变成即时生成的个性化体验（他称 AGUI）（2026-04-09-rauch-web-thesis）。
- **云的未来是 Agentic Infrastructure**：服务 coding agent 的 infra、部署 agent 的积木（长时计算/sandbox/token 分发）、平台自身 agent 化（2026-04-10-rauchg-agentic-infrastructure）。落点持续推进：Workflow SDK 解 durability、自称"后端的 Next.js"（2026-04-17-workflow-sdk）；CLI 重做成零依赖二进制，因为 coding agent 已把 CLI 变成接入 Vercel 的核心入口（2026-05-29-rauchg-vercel-cli-agent-interface）；Vercel Labs 定位从给人做工具转向给 agent 做工具（2026-04-29-vercel-labs-agent-tools）；6 月再把这套叙事推到模型竞争上——拿"开源 GLM 5.2 在 Vercel 自家 Next.js Evals 上反超 Opus 4.8"当引子，论证模型越同质，越需要一套专属于 agent 的构建/部署框架（即 AI SDK），类比 React 需要 Next.js（2026-06-18-rauch-glm-next-evals-agent-framework）。
- **护城河转向"软件工厂"**：核心判断是 the alpha is in your factory——护城河从写出来的代码转移到生产代码的体系，大公司（Stripe/Ramp/Spotify/Block）都在自建 coding agent 平台（2026-04-14-vercel-open-agents）。延伸：每个团队都能建自己的"设计工厂"，用现成构件生成软件已比采购 SaaS 容易（2026-04-16-rauch-design-factory）；设计会自主化，形态是被 coding agent 调用的 DESIGN.md（2026-04-19-rauch-autonomous-design）；no-code 的前提（代码贵、稀缺）已被 coding agent 推翻，提出 YES-CODE（2026-06-03-rauchg-yes-code）。
- **coding agent 的地位**：是所有超级智能的基础——既精通计算机操作，又能检查修改自身（顺带建议自我修改要配人类监督和审计）（2026-04-27-rauch-coding-agents）；在企业市场是终极 PLG 化，C-suite 重新亲自写代码、糟糕的遗留栈藏不住（他自己对冲：不确定是否持久趋势）（2026-06-01-rauchg-coding-agents-plg-fication-enterprise）。
- **安全**：4 月下旬 Vercel 遭入侵（员工账号→枚举非敏感环境变量），他"强烈怀疑"攻击被 AI 显著加速；后续口径是端上恶意软件偷各平台 token、波及面超出 Context.ai 一家（2026-04-20 / 04-21 / 04-23 三条通报）。产品侧回应：deepsec 开源（上千 agent 并行安全审计）（2026-05-05）、Firewall 全免费（2026-05-19）。
- 素材期内（2026-04 至 06）无立场反转，叙事高度连贯：从 web 论到 agent 云到软件工厂是同一套故事的不同切面。

## 言论时间线

- 2026-04-09 [2026-04-09-rauch-web-thesis] 看多 web 三层论证，生成式 UI（AGUI）是 AI 的最终形态
- 2026-04-10 [2026-04-10-rauchg-agentic-infrastructure] Agentic Infrastructure 三层含义：服务 coding agent、部署 agent、平台自身 agent 化
- 2026-04-14 [2026-04-14-vercel-open-agents] 开源 Open Agents；判断护城河从代码转向代码的生产体系
- 2026-04-16 [2026-04-16-rauch-design-factory] 用现成构件生成软件已比采购 SaaS 容易，每个团队能建自己的"设计工厂"
- 2026-04-17 [2026-04-17-workflow-sdk] agent 后端最难的是 durability，Workflow SDK 定位"后端的 Next.js"
- 2026-04-19 [2026-04-19-rauch-autonomous-design] 设计会自主化，形态是被 coding agent 调用的 DESIGN.md
- 2026-04-20 [2026-04-20-vercel-incident-update] 通报 Vercel 入侵：员工账号失守、枚举非敏感环境变量，强烈怀疑攻击被 AI 加速
- 2026-04-21 [2026-04-21-vercel-security-rotation] 纠偏：删 Vercel 侧资源不等于密钥轮换，须到服务商处作废换新
- 2026-04-23 [2026-04-23-vercel-security-update] 调查进展：威胁情报指向窃取 token 的恶意软件，波及面超出 Context.ai
- 2026-04-27 [2026-04-27-rauch-coding-agents] coding agent 是所有超级智能的基础；自我修改应配人类监督和审计
- 2026-04-29 [2026-04-29-vercel-labs-agent-tools] 扩编 Vercel Labs：从给人做工具转向给 agent 做工具
- 2026-05-05 [2026-05-05-rauchg-deepsec-security-agent-orchestrator] 开源 deepsec，借 Sandbox 并行上千 agent 做深度安全审计
- 2026-05-19 [2026-05-19-rauchg-vercel-firewall-free] Firewall 所有防护全免费，规则全球传播约 300ms
- 2026-05-29 [2026-05-29-rauchg-vercel-cli-agent-interface] CLI 重做成零依赖自更新二进制：CLI 已成"给 agent 的云"的关键接口
- 2026-06-01 [2026-06-01-rauchg-coding-agents-plg-fication-enterprise] CEO/CTO 因 coding agent 重新亲自写代码，是企业市场的终极 PLG 化
- 2026-06-03 [2026-06-03-rauchg-yes-code] 提出 YES-CODE：代码变廉价丰富，no-code 的前提已被推翻
- 2026-06-18 [2026-06-18-rauch-glm-next-evals-agent-framework] 称开源 GLM 5.2 在 Vercel 自家 Next.js Evals 上反超 Opus 4.8，借此推 AI SDK：agent 需要专属构建框架
- 2026-07-01 [2026-07-01-rauch-vercel-services] Vercel Services 发布：单项目内同托管 Python/Node.js/前端，vc dev 统一本地运行，统一部署、回滚和内网通信
