# agent 时代的安全攻防

AI 同时在加速攻和防：模型能批量找漏洞、把补丁逆向成 exploit，也能当审计工具和监督层；agent 把第三方内容读进上下文，又开出 prompt injection 这一新攻击面。线索里有真实事故（Vercel 入侵、Cowork 外泄漏洞、Anthropic 自家三起未防住的案例）、厂商的防御产品与清单（Claude Security、deepsec、Anthropic 防御指南）、以及一组共识度很高的行业判断（瓶颈从找漏洞移向修漏洞、安全人才需求上升）。各方多为利益相关方自述，但事故细节和清单可独立核验，值得持续跟踪。

## 各方立场

- **Guillermo Rauch（Vercel）**：受害方与工具方双重角色。通报入侵事件，攻击链从员工被攻破的 Google Workspace 账号深入 Vercel 环境，「强烈怀疑」攻击被 AI 显著加速（[2026-04-20-vercel-incident-update]）；纠偏「删除不等于轮换」，密钥要到服务商侧作废换新（[2026-04-21-vercel-security-rotation]）；拉近 1 PB 日志复盘，威胁情报指向端上恶意软件窃取多平台 token，波及面超出单一事件（[2026-04-23-vercel-security-update]）。两周后转向防御输出，开源内部安全审计 agent 编排器 deepsec，借 sandbox 并行跑上千个 agent（[2026-05-05-rauchg-deepsec-security-agent-orchestrator]）。
- **Anthropic（安全团队 / 工程团队 / Cat Wu）**：判断未来 24 个月大量沉睡漏洞会被模型批量找出并串成 exploit，防御清单按「哪些控制还守得住」排序，最实操一条是用攻击者同款模型先扫自己的代码（[2026-04-13-anthropic-security-guide]）；把这条产品化为 Claude Security 公测，指向 repo 得到经验证的漏洞发现，限 Enterprise（[2026-05-01-claude-security-beta]）；复盘自家三款 agent 产品的隔离架构和三起真实事故，结论是环境层硬边界优先于模型层兜底，「自己写的那层往往最弱」（[2026-05-27-anthropic-contain-claude-blast-radius]）。
- **Zico Kolter（OpenAI 安全委员会 / Grey Swan）**：prompt injection 是 agent 特有的新攻击面，判断框架是能力、误操作、权限三件事一起看，防御靠 Swiss cheese 式多层分类器加 sandbox（[2026-05-08-zico-kolter-agent-security]）；并警告鲁棒性不随模型规模自动变好，安全要专门训练、外加监控层，别把模型升级默认当安全升级（[2026-05-08-zico-kolter-robustness-doesnt-scale]）。注意他经营的 Grey Swan 卖的就是这套防护。
- **Aaron Levie（Box）**：安全行业的 Jevons 悖论论者，4 月与 5 月两次表态一致——AI 压低找漏洞的成本后，瓶颈平移到 triage、修复和架构决策，对安全人才的需求增加而非减少（[2026-04-13-levie-security-jevons]、[2026-05-23-levie-security-engineer-boom-jevons]）。
- **Amjad Masad（Replit）**：提议 GitHub 在 star 旁加「加固算力投入」指标，称这是开源能被信任的唯一办法（[2026-04-16-amjad-oss-security-metric]）；断代式判断「2025 起每家公司都是网络安全公司」，无论据，方向信号（[2026-04-26-amasad-cybersecurity]）。
- **Peter Steinberger（OpenClaw）+ Garry Tan**：开源 harness 一侧的攻防实录。Steipete 认账 12 月不安全，四个月加固后有沙箱、allow-list、按次 exec 确认，提醒更该警惕不发安全公告的项目；Garry Tan 转发站台（[2026-04-16-openclaw-security-hardening]）。Tan 此前也转发了 Cowork 文件外泄漏洞的披露（[2026-04-07-cowork-exfiltration-vuln]）。
- **Nikunj Kothari（FPV Ventures）**：VC 视角，攻击节奏随模型能力只会加快、人仍是首要攻击向量、网络安全公司会更值钱；发在 Vercel 通报后不到一小时，无数据支撑（[2026-04-20-cybersecurity-thesis]）。
- **Maxim Bar Kogan（Onyx Security）**：agent 监督的工程取舍——给每个 agent 配全能 agent 成本扛不住，用只判断「要不要升级审查」的小模型；并主张这事独立第三方比模型厂商更适合做（[2026-05-30-onyx-security-maxim-agent-oversight]）。卖方立场。

## 时间线

- 2026-04-07 [2026-04-07-cowork-exfiltration-vuln] Garry Tan 转发披露：Claude 编码环境已知漏洞延伸到 Cowork，攻击者可外泄用户文件，Anthropic 承认但未修复
- 2026-04-13 [2026-04-13-anthropic-security-guide] Anthropic 安全团队发防御清单：两年内沉睡漏洞会被 AI 批量找出串成 exploit，建议用攻击者同款模型先扫自己的代码
- 2026-04-13 [2026-04-13-levie-security-jevons] Levie：AI 安全工具会推高而非减少安全人才需求，安全行业临近 Jevons 悖论时刻
- 2026-04-16 [2026-04-16-openclaw-security-hardening] Steipete 回应 OpenClaw 安全质疑：四个月加固后方案完整，更该警惕不发安全公告的开源项目
- 2026-04-16 [2026-04-16-amjad-oss-security-metric] Amjad 提议 GitHub 加指标：展示每个开源包投入多少算力做安全加固
- 2026-04-20 [2026-04-20-vercel-incident-update] Rauch 通报 Vercel 入侵：攻击者从被攻破员工账号层层深入，强烈怀疑攻击被 AI 显著加速
- 2026-04-20 [2026-04-20-cybersecurity-thesis] Kothari 在 Vercel 通报后一小时内发判断：攻击节奏只会加快，人仍是首要攻击向量，安全公司更值钱
- 2026-04-21 [2026-04-21-vercel-security-rotation] Rauch 纠偏：删除 Vercel 侧资源不等于完成密钥轮换，要到服务商侧作废换新
- 2026-04-23 [2026-04-23-vercel-security-update] Rauch 通报调查进展：威胁情报指向窃取 token 的恶意软件，波及面超出 Context.ai 入侵
- 2026-04-26 [2026-04-26-amasad-cybersecurity] Amjad：2025 年起每家公司都是网络安全公司
- 2026-05-01 [2026-05-01-claude-security-beta] Claude Security 公测：指向 repo 得到经验证的漏洞发现并就地修复，限 Enterprise
- 2026-05-05 [2026-05-05-rauchg-deepsec-security-agent-orchestrator] Vercel 开源 deepsec：深度安全审计 agent 编排器，借 sandbox 并行跑上千个 agent
- 2026-05-08 [2026-05-08-zico-kolter-agent-security] Kolter 给 agent builder 的安全清单：prompt injection 是新攻击面，能力、误操作、权限三件事一起管
- 2026-05-08 [2026-05-08-zico-kolter-robustness-doesnt-scale] Kolter：鲁棒性不随模型规模自动变好，安全要专门训练、加监控层
- 2026-05-23 [2026-05-23-levie-security-engineer-boom-jevons] Levie 重申 Jevons 判断：找漏洞变容易，瓶颈转到修复，会催生安全工程师热潮
- 2026-05-27 [2026-05-27-anthropic-contain-claude-blast-radius] Anthropic 复盘三款产品隔离设计与三起事故：环境层硬边界优先，自建组件最容易出事
- 2026-05-30 [2026-05-30-onyx-security-maxim-agent-oversight] Onyx CEO：用只判断「要不要升级审查」的小模型监督 agent，给每个 agent 配 agent 成本扛不住
