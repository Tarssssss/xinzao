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
  /** 决策辅助：50-90 字，让读者 30 秒内判断要不要点原文 */
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

export interface Issue {
  /** YYYY-MM-DD */
  date: string
  /** 当天 feed 的生成时间，ISO */
  generatedAt: string
  /** 选稿时被跳过的来源数量说明，可选，给回看用 */
  editorNote?: string
  stories: Story[]
}

export interface NumberedIssue extends Issue {
  /** Issue #N，按日期升序派生，不存盘（避免 routine 写错号） */
  number: number
}
