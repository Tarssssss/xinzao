export type SourceType = 'x' | 'podcast' | 'blog'

export interface SourceLink {
  label: string
  url: string
}

export interface Story {
  /** 全局唯一，建议 `${date}-${短slug}`，同时作为详情页路由 */
  slug: string
  /** 平实陈述句，准确概括这条动态讲了什么 */
  title: string
  /** 决策辅助：让读者 30 秒内判断要不要点原文；长度服从信息，通常 80-140 字 */
  summary: string
  /** 2-4 段完整整理，预设读者是懂行的同行 */
  content: string[]
  creator: string
  role?: string
  sourceType: SourceType
  /** 第一个是主链接，列表行直接外跳 */
  sourceLinks: SourceLink[]
  /** 注意力信号，如 "20.4K likes" */
  engagement?: string
}

/**
 * 速览条目：薄素材（基本是短推文）降级到这里，只把原话翻译成中文 + 署名 + 链接，
 * 不写 summary/content。规范见 docs/writing-guide.md 第 3 节。
 */
export interface QuickTake {
  /** 中文译文，原推照翻，不加引申/立场/受众句 */
  quote: string
  creator: string
  /** X handle，不带 @ */
  handle?: string
  sourceType: SourceType
  /** 原始链接 */
  url: string
}

export interface Issue {
  /** YYYY-MM-DD */
  date: string
  /** 当天 feed 的生成时间，ISO */
  generatedAt: string
  /** 选稿时被跳过的来源数量说明，可选，给回看用 */
  editorNote?: string
  stories: Story[]
  /** 薄素材降级的一行速览，放在当期最底部，可选 */
  quickTakes?: QuickTake[]
}

export interface NumberedIssue extends Issue {
  /** Issue #N，按日期升序派生，不存盘（避免 routine 写错号） */
  number: number
}
