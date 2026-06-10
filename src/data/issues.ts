import type { Issue, NumberedIssue, Story } from './types'

// 每天一个 src/data/issues/YYYY-MM-DD.json，routine 只新增文件、不改代码。
const modules = import.meta.glob<{ default: Issue }>('./issues/*.json', {
  eager: true,
})

const byDateAsc = Object.values(modules)
  .map((module) => module.default)
  .filter((issue) => issue.stories.length > 0)
  .sort((left, right) => left.date.localeCompare(right.date))

// Issue 编号按日期升序派生：最早的一期是 #1。
export const issues: NumberedIssue[] = byDateAsc
  .map((issue, index) => ({ ...issue, number: index + 1 }))
  .reverse()

export const latestIssue: NumberedIssue | undefined = issues[0]

const storyIndex = new Map<string, { story: Story; issue: NumberedIssue }>()
for (const issue of issues) {
  for (const story of issue.stories) {
    storyIndex.set(story.slug, { story, issue })
  }
}

export function findStory(slug: string | undefined) {
  return slug ? storyIndex.get(slug) : undefined
}
