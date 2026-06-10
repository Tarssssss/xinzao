# Daily Run（每日 routine 蓝本）

这是每天 09:00（Europe/London）自动跑的 Claude routine 的操作手册。目标：为今天发布一期《信噪》，全程无人值守。

## 前提

- 仓库：https://github.com/Tarssssss/xinzao （push 到 main 即自动部署）
- 写作规范：`docs/writing-guide.md`（唯一写作指南，先完整读一遍再动笔）
- 上游 feed 每天 ~06:17 UTC 更新，09:00 London 跑的时候一定是新的

## 步骤

1. **同步 feed**：`npm install && npm run sync:feeds`，产出 `data/raw/latest.json`（feed-x 是 24h 滚动窗口，正好对应今天这期的素材）。
2. **去重检查**：读最近 3 期 `src/data/issues/*.json`，素材里主链接已被收录过的内容跳过；只是旧 story 的轻微补充时，更新旧 story 而不是新增。
3. **选稿**（`docs/writing-guide.md` 第 7 节）：有明确观点、方法论、产品发布或 builder insight 的才收；纯玩笑、无上下文单句不收；同一 builder 同主题多推合并成一条。20-40 条推文的素材通常出 5-10 条 story。
4. **写稿**：严格按 `docs/writing-guide.md` 写每条 story（保真红线最优先），写完逐条过第 8 节 self-check。
5. **落盘**：写入 `src/data/issues/<YYYY-MM-DD>.json`（今天的 London 日期），结构与已有 issue 文件完全一致：

   ```json
   {
     "date": "YYYY-MM-DD",
     "generatedAt": "<latest.json 里的 feedGeneratedAt>",
     "stories": [
       {
         "slug": "YYYY-MM-DD-short-name",
         "title": "…",
         "summary": "…",
         "content": ["…", "…"],
         "creator": "…",
         "role": "（素材有就填）",
         "sourceType": "x | podcast | blog",
         "sourceLinks": [{ "label": "原推 @handle", "url": "素材里的真实 url" }],
         "engagement": "（素材有就填，如 1.2K likes）"
       }
     ]
   }
   ```

   期号不用管（按日期自动派生）；stories 按重要性排序。
6. **验证**：`npm run build` 必须通过。失败先修 JSON，修不好就不要 push。
7. **提交**：`git add src/data/issues data/raw && git commit -m "Issue YYYY-MM-DD" && git push`。Vercel 会自动部署。

## 硬规则

- 当天素材全部不值得收：不发刊、不写文件、不 push。**绝不为了凑一期而编内容或放水选稿标准**。
- feed 拉取失败：重试一次，仍失败就放弃当天，不要用旧素材冒充。
- 漏跑补刊：发现某天没跑，用 `node scripts/backfill-snapshots.mjs --since <漏的日期>` 取回当天素材（上游 git history 里都在），按同样流程补写。
- 方向性决定（调整选稿标准、改结构等）不要在 routine 里做，记到 `docs/decision-log.md` 留给人决定。
