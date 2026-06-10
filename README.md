# AI Builder Website

一个给 AI builder 日报用的小型前端项目。

目标很简单：

- 首页像 Hacker News 一样，快速刷今天新增的 builder 动态
- 每条 story 保留三层结构：`title`、`intro`、`content`
- 点进详情页能看完整内容和 source links
- 每天从 `follow-builders` 的公开 feed 拉最新原始内容，再人工或通过 automation 追加新 story

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址：

```bash
http://localhost:5173
```

## 现有命令

```bash
npm run dev
npm run build
npm run preview
npm run sync:feeds
```

## 数据结构

- `src/data/news.ts`
  网站实际展示的数据源
- `data/raw/latest.json`
  最新一次从 `follow-builders` 拉下来的原始 feed
- `data/raw/latest-brief.md`
  方便快速人工扫读的简版摘要

## 每日更新流程

1. `npm run sync:feeds`
2. 看 `data/raw/latest-brief.md`
3. 把新增内容整理成 `title + intro + content`
4. 追加到 `src/data/news.ts`
5. `npm run build`

更详细的规则见：

- `docs/daily-run.md`

## 信源来源

项目直接消费 `follow-builders` 仓库公开发布的 feeds：

- [feed-x.json](https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-x.json)
- [feed-podcasts.json](https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-podcasts.json)
- [feed-blogs.json](https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-blogs.json)
