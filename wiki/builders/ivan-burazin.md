# Ivan Burazin（Daytona CEO）

Daytona（agent sandbox 基建）CEO，此前做开发者工具 16 年（上家 CodeAnywhere）。刊中言论集中在一期：agent 执行环境的必要性、CPU 算力供给、开发者工具的分发。注意他是 sandbox 品类供应商，论证自家品类必要性的部分需打折看，运营数字均为自报口径。

## 立场与主张

### Agent 与 sandbox
- 核心判断：要做工具调用、搜索、写代码或操作浏览器的 agent 都需要至少一台自己的计算机；纯聊天、情感陪伴类不需要。判断「要不要沙箱」的分界线是 agent 有没有需要真实执行环境的动作（2026-05-15-daytona-agent-needs-computer）。
- 隔离的安全逻辑用自己实例说明：给 agent 单独账号、单独电话号、每日限额信用卡——能看银行数据但不能动钱，整台机器随时可关。起点是他拒绝了 Claude「你登录把权限给我」的要求。
- 「所有工具最终都会变成 headless」，但今天多数知识工作仍锁在 Windows 传统应用里，所以现阶段仍得给 agent 整台计算机：能走 API/MCP 就 headless，走不通就开浏览器登录操作。
- sandbox 三层拆法：基础设施（启动速度、并发）、原语（VM/容器/micro VM）、工具层（headless 工具 + 护栏如 secrets manager、防火墙）。

### 算力供给
- 预判继 GPU 之后出现 CPU 短缺（转述 SemiAnalysis/Dylan Patel，约 2026 年 10 月起）。机制：RL 训练要让贵的 GPU 满载，需海量秒级起停的 CPU 沙箱喂任务；长跑 agent 每任务占一台（2026-05-15-daytona-cpu-shortage-infra）。
- 一手运营数据：60ms 起一台沙箱、70 秒起 5 万台，有客户要过 500 万并发；跑超 24 小时的沙箱占总量 2.5% 却贡献约 20% 收入——长跑 agent 数量稀少但单位经济价值远高于短任务。

### 分发与 GTM（技术型创始人向）
- 框架（借自 David）：客户选你看认知度、偏好（品牌/定价/体验）、有没有别人给不了的硬条件（如 FedRAMP）。产品同质时拼前两件；客服也算 go-to-market，因为「品牌即感知」（2026-05-15-daytona-gtm-for-technical-founders）。
- CodeAnywhere 最大教训：分不清 user 和 customer——单个开发者不付费，Daytona 同为 PLG 但开发者背后是公司的卡。
- 客服法则：第一反应要快；承诺解决时间；到点前要么解决要么主动说明延期并给新时间。

## 言论时间线

- 2026-05-15 [2026-05-15-daytona-agent-needs-computer] 要做工具调用/写代码/操作浏览器的 agent 都需要一台自己的计算机；纯聊天不需要
- 2026-05-15 [2026-05-15-daytona-cpu-shortage-infra] 预判 GPU 之后 CPU 短缺：RL 训练和长跑 agent 大量吃 CPU 沙箱；长跑沙箱占 2.5% 贡献 20% 收入
- 2026-05-15 [2026-05-15-daytona-gtm-for-technical-founders] 技术创始人分发心法：同质化拼认知度和体验；客服第一反应要快；分清 user 和 customer
