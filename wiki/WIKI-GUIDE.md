# Wiki Guide（LLM wiki 的 schema 与工作流）

这是信噪知识库的行为契约，模式来自 [Karpathy 的 llm-wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)：LLM 不该每次都从头检索原始素材，而是把知识**编译一次、持续维护**，让理解随每期累积。维护者是每天的 routine（和偶尔的人工会话），读者也是 LLM——人类消费的是它的产物（story 的 `related` 字段）。

## 三层结构对应

| Karpathy 层 | 信噪对应 | 谁拥有 |
|---|---|---|
| raw（不可变源） | `src/data/issues/*.json`（成稿）+ 上游 follow-builders feed | 不归 wiki 管，只读 |
| wiki（LLM 维护） | `wiki/builders/*.md`、`wiki/threads/*.md`、`wiki/index.md`、`wiki/log.md` | LLM 全权维护 |
| schema（契约） | 本文件 | 人改，LLM 遵循 |

## 目录与页面格式

```
wiki/
  WIKI-GUIDE.md      ← 本文件
  index.md           ← 目录：每页一行摘要，按类别分组
  log.md             ← 追加式操作日志：## [YYYY-MM-DD] 操作 | 摘要
  builders/<slug>.md ← 实体页：一位 builder 一页
  threads/<slug>.md  ← 线索页：一个跨期话题/论争一页
```

**builder 实体页**（`builders/boris-cherny.md`）：

```markdown
# Boris Cherny（Claude Code @ Anthropic）

一句话定位。

## 立场与主张
- 按主题归纳他的核心观点，**立场变化要明确标注**（X 月说 A，Y 月转向 B，见 [slug]）

## 言论时间线
- YYYY-MM-DD [story-slug] 一句话
```

**thread 线索页**（`threads/app-layer-moat.md`）：

```markdown
# 应用层护城河之争

线索是什么、为什么值得跟踪，一段话。

## 各方立场
- Builder A：…（[slug]）
- Builder B 反方：…（[slug]）

## 时间线
- YYYY-MM-DD [story-slug] 谁说了什么、推进了什么
```

引用 story 一律用 slug（如 `2026-06-10-levie-applied-ai-untrainable-corner`），slug 即站内 URL `/story/<slug>`，也是 wiki 与成稿之间唯一的外键。

## 操作

**ingest（每日，routine 第 5.5 步）**：写完当天 story 后——
1. 读 `index.md`，找到涉及的 builder 页和可能相关的 thread 页（通常 2-5 页），读这些页
2. 据此给每条新 story 写 `related`（见下方红线）
3. 更新涉及的 builder 页（时间线追加、立场有变就改「立场与主张」并标注）；话题延续已有 thread 就更新 thread 页；**连续 ≥3 期、≥2 位 builder 参与的新话题**才开新 thread 页
4. 新开页要登记进 `index.md`；`log.md` 追加一行

**lint（人工触发，低频）**：检查页面间矛盾、被新言论推翻的旧结论、没有入链的孤儿页、该开未开的 thread。产出问题清单，方向性的留给人决定。

## related 字段红线

- 0-3 条，**宁缺毋滥**：同一线索的延续/反转、同一 builder 立场演化、直接呼应或对立，才算相关；「都在聊 AI」不算
- 只指向**更早日期**的 story（回顾，不是预告）
- `note` ≤20 字，说清关联点（如「他 5 月曾给出相反判断」），不复述标题
- slug 必须真实存在（`npm run build` 会校验）

## 边界

- wiki 不收速览（quickTakes）——薄素材不值得进知识库；只索引完整 story
- wiki 页是 LLM 的工作内存，不直接面向读者发布；文风从简，不套 writing-guide
- 与 `docs/` 的分工：docs 是给人和 routine 的操作手册，wiki 是内容知识本身
