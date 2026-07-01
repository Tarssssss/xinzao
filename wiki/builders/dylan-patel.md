# Dylan Patel（创始人 @ SemiAnalysis）

SemiAnalysis 创始人，AI 推理硬件与成本结构的深度分析者。刊内首次出现在 Sequoia Training Data 播客，核心贡献是把 AI 降本曲线的来源拆解到模型-硬件-软件三层协同设计。注意：Anthropic 财务数据（Q2 盈利、Opus 4.8 毛利率）是他的第三方推算，非官方口径。

## 立场与主张

- **协同设计是降本引擎，各层单独优化是上限**：AI 推理成本三年年均降 60 倍，不来自模型/硬件/软件各层分别进步相乘（最多 8 倍），而来自三层协同优化——模型专家层形状按芯片矩阵乘法单元定制、网络拓扑围绕注意力机制 all-reduce 通信特性，各层改进直接相互强化。DeepSeek V3/V4 是公开信息最完整的案例（2026-07-01-dylan-patel-hardware-software-codesign）。
- **CUDA 护城河已部分松动**：AI 编程能力让跨平台写内核成本下降，过去 GPU 生态锁定部分来自推理库全为 GPU 优化；现在写新平台内核已没那么难。
- **下一个降本瓶颈是内存带宽**：DRAM 单元几十年无本质突破，内存直叠芯片的新方案仍在 POC 阶段。
- **InferenceX 方法论**：超过 5000 万美元计算资源（TPU/Trainium 加入后预计超 1 亿美元），15 种以上芯片型号，每天在最新模型上自动跑基准，打包成帕累托最优配置容器。解决的问题是「推理库每周更新两次以上，点对点测试发布当天就过时」。

## 言论时间线

- 2026-07-01 [2026-07-01-dylan-patel-hardware-software-codesign] Sequoia Training Data 播客：协同设计产生 100 倍而非 8 倍降本；InferenceX 方法论；Anthropic Q2 盈利和 Opus 4.8 毛利率超 80%（第三方推算）
