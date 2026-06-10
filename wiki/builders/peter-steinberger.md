# Peter Steinberger（OpenClaw 作者/维护者，OpenClaw / OpenAI）

OpenClaw（开源 agent harness）作者，OpenAI 关联（素材 role 多次标 "OpenClaw / OpenAI"）；高产 CLI 工具作者（wacli、gog、discrawl、birdclaw、wacrawl、Summarize、CodexBar、Crabbox、clawpatch），核心方法论是「token 不要钱」前提下用常驻 agent 重排整条研发流水线。

## 立场与主张

- **「token 不要钱」是工程前提**：单次调用成本不再是变量，审查/安全/维护从人工间歇动作变成事件触发的常驻流程。约 100 个 codex 常驻云端审查 PR/issue、安全扫描、性能回归、去重、反垃圾，甚至旁听会议主动开 PR（2026-05-16-steipete-tokens-dont-matter）。落地形态：每个 main commit 起 codex 审查→修复 PR→复核，上限五轮（2026-04-29-codex-on-every-commit）；Codex 当 QA，每 commit 生成用户测试场景、computer/browser use 真机操作、后台开 PR 修复（2026-06-01-steipete-codex-qa-assistant-background-prs）。
- **「让 agent 跑起来是门手艺」（yielding agents is a skill）**：长任务能力不只靠换模型，靠 /goal、autoreview、crabbox 这类兜住目标和检查的工具；GPT-5.5 + 这套链路把单次任务从 30-60 分钟拉到 4-10 小时（2026-05-31-steipete-yielding-agents-skill）。配套技巧：codex 查 bug 默认偏保守，要先断言「这里有 bug」逼它深挖。更早的同方向动作是 strict mode（执行契约要求 GPT 持续干活或上报真实 blocker，不许停在计划）（2026-04-12-openclaw-strict-mode-codex-harness）。
- **自己造工具才高效**：把私人工作流里反复出现的动作（追问、检索历史、凑上下文）封成自建小工具，比迁就通用工具划算（2026-05-11-steipete-build-your-own-tools）。其大量 CLI 发布都是这条主张的实例。
- **安全立场有明确演化**：他承认 OpenClaw 12 月时确实不安全，四个月加固后转为「方案完整」——Docker/OpenShell 沙箱、allow-list、按次 exec 确认、数百安全研究员渗透测试（见 2026-04-16-openclaw-security-hardening）。延伸主张：闭源不等于安全（GPT 5.4-Cyber 已能逆向闭源软件）；该警惕的是不做对抗、不发安全公告的开源项目。
- **agent 的产品边界要克制**：discrawl 刻意只读不写 Discord，理由是「给真人发 slop 不太好」（2026-04-25-discrawl-discord-dm）。
- **个人数据收回本地**：birdclaw（推文/书签）、wacrawl（WhatsApp）把平台数据搬到本地，Git 版本化 + age 加密备份（2026-04-27-steipete-birdclaw-wacrawl）。
- **context 是预算**：skill 描述每次都进 context，要让 agent 写得 token 高效、放松语法，并用检测工具揪最臃肿的 skill（2026-05-26-steipete-token-efficient-skills）。
- **harness 与模型解耦、多模型并用**：harness 插件化后可整体换 Codex，预判会削弱人格但更撑长任务（2026-04-12-openclaw-strict-mode-codex-harness）；从 CodexBar 更新看，GPT-5.5/Claude/Mistral/Cursor 并用是他的默认工作方式（2026-04-26-steipete-releases）。

## 言论时间线

- 2026-04-12 [2026-04-12-openclaw-strict-mode-codex-harness] OpenClaw 加 strict mode 治 GPT 偷懒，harness 插件化可整体换 Codex
- 2026-04-16 [2026-04-16-openclaw-security-hardening] 回应安全质疑：认账 12 月不安全，四个月加固后方案完整；警惕不发安全公告的开源项目
- 2026-04-21 [2026-04-21-steipete-wacli-gog] 同日发 wacli 0.6.0（安全加固专项）与 gog 0.13（Google 套件覆盖扩展）
- 2026-04-22 [2026-04-22-openclaw-release] OpenClaw 小版本修 npm 升级弄断插件的问题；discrawl 0.3.0 加 Git 归档同步
- 2026-04-25 [2026-04-25-discrawl-discord-dm] discrawl 0.6.0 能读 Discord 私信，发送能力刻意不做
- 2026-04-26 [2026-04-26-steipete-releases] Summarize 0.14.0 加 GPT-5.5 Fast 模式；CodexBar 0.23 加 Mistral 与多模型用量显示
- 2026-04-27 [2026-04-27-steipete-birdclaw-wacrawl] 发 birdclaw、更新 wacrawl：平台数据收回本地，Git 加密备份
- 2026-04-29 [2026-04-29-codex-on-every-commit] 主干每个 commit 接 codex 审查→修复→复核流水线，上限五轮
- 2026-05-03 [2026-05-03-steipete-crabbox-openclaw] Crabbox 0.3.0 支持 dirty worktree 远程 Linux 运行 + attach 实时回放；npm 包瘦身
- 2026-05-11 [2026-05-11-steipete-build-your-own-tools] 演示三个自建工具用法，主张「你得给自己造工具才能更高效」
- 2026-05-16 [2026-05-16-steipete-tokens-dont-matter] 公开「token 不要钱」前提下的全自动化清单：约 100 个云端常驻 codex；开源 clawpatch
- 2026-05-26 [2026-05-26-steipete-token-efficient-skills] 提醒 skill 描述要 token 高效，放出臃肿 skill 检测工具
- 2026-05-31 [2026-05-31-steipete-yielding-agents-skill] GPT-5.5 + /goal/autoreview/crabbox 把单次任务从半小时拉到 4-10 小时
- 2026-06-01 [2026-06-01-steipete-codex-qa-assistant-background-prs] Codex 当 QA：每 commit 生成用户测试场景、真机操作、后台开 PR 修复
