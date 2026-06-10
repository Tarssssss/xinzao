# 信噪 · Signal over noise

AI builder 言论动向日刊。每天从 [follow-builders](https://github.com/zarazhangrui/follow-builders) 的 X / podcast / blog feed 里选稿，整理成中文 issue。摘要的唯一目标是帮读者在 30 秒内判断要不要点开原文。

- 关键决策和理由：[docs/decision-log.md](docs/decision-log.md)
- 每日自动更新流程（routine 蓝本）：[docs/daily-run.md](docs/daily-run.md)
- 写稿规范（A/B 盲评产生）：[docs/writing-guide.md](docs/writing-guide.md)

## 架构

- 纯静态 Vite + React，无后端
- `src/data/issues/YYYY-MM-DD.json`：每天一期，routine 只新增文件不改代码
- Issue 期号按日期升序在加载时派生，不存盘
- 部署在 Vercel，push 到 main 自动上线

## 命令

```bash
npm run dev          # 本地开发 http://localhost:5173
npm run build        # 类型检查 + 产线构建
npm run sync:feeds   # 拉最新 feed 快照到 data/raw/
node scripts/backfill-snapshots.mjs   # 从上游 git history 回填每日快照到 data/raw/days/
```

## 数据流

1. 上游 follow-builders 每天 ~06:17 UTC 提交新 feed（feed-x 为 24h 滚动窗口）
2. 每天 09:00（Europe/London）Claude routine：sync → 按 daily-run.md 选稿、按 writing-guide.md 写稿 → 新增当日 issue JSON → build 验证 → push
3. Vercel 检测到 push 自动重新部署
