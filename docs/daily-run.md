# Daily Update Workflow

这个项目把站点和“抓 builder 信源”拆成两层：

1. 站点只消费 `src/data/news.ts` 里的结构化 news 数据。
2. 原始信源每天通过 `npm run sync:feeds` 拉到 `data/raw/`。

## 手动更新步骤

1. 运行 `npm run sync:feeds`
2. 快速浏览 `data/raw/latest-brief.md`
3. 如需深读，再打开 `data/raw/latest.json`
4. 在 `src/data/news.ts` 里只追加真正新增的 stories，不要删除旧内容
5. 运行 `npm run build` 验证页面可用

## 保留历史内容

- 网站首页现在会按日期分组显示 story，所以明天新增内容时，今天的内容会自然保留在下面
- `src/data/news.ts` 采用追加式维护：新增 story 直接 append，旧 story 保留
- `data/raw/YYYY-MM-DD.json` 会保存每天同步下来的原始 feed 快照，方便回看或重新整理
- 如果未来内容很多，可以再把特别旧的内容拆到单独的 archive 数据文件里，但当前阶段不用急着做

## 选稿标准

- 优先收录有明确观点、方法论、产品发布或 builder insight 的内容
- 尽量避免只有一句玩笑、没有上下文的帖子
- 同一天如果同一个 builder 连发多条相关帖子，可以合并成一条 story

## 写作规则

- `title`
  优先使用博客标题、播客标题或推文首句；如果原文太弱，再改成更抓人的标题
- `intro`
  用第三人称写一段叙述性摘要，说明“讲了什么”和“为什么重要”
- `content`
  写 2 到 4 段，比 intro 更完整，保留判断、背景和可操作含义
- `sourceLinks`
  至少保留一个原始链接；如果 story 由多条 source 合成，可以保留多个链接

## 去重规则

- 如果 `sourceLinks` 里的主链接已经出现在旧 story 中，就不要重复收录
- 如果新内容只是旧 story 的轻微补充，优先更新旧 story，而不是新增一条

## 建议的 automation 行为

- 每次只处理当天 raw feed 中真正新增的内容
- 更新完成后运行 `npm run build`
- 在结果里简要说明新增了哪些 story，哪些 source 被跳过
