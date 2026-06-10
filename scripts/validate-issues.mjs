// 校验 src/data/issues/*.json：结构、slug 唯一性、日期一致、链接非空。
// routine 和回填都在 build 前跑一遍：node scripts/validate-issues.mjs

import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const issuesDir = fileURLToPath(new URL('../src/data/issues', import.meta.url))
const SOURCE_TYPES = new Set(['x', 'podcast', 'blog'])

const errors = []
const slugs = new Map()
const files = (await readdir(issuesDir)).filter((file) => file.endsWith('.json'))

let storyTotal = 0

for (const file of files.sort()) {
  const date = file.replace('.json', '')
  const path = join(issuesDir, file)
  let issue

  try {
    issue = JSON.parse(await readFile(path, 'utf8'))
  } catch (error) {
    errors.push(`${file}: JSON 解析失败 — ${error.message}`)
    continue
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    errors.push(`${file}: 文件名不是 YYYY-MM-DD.json`)
  }

  if (issue.date !== date) {
    errors.push(`${file}: date 字段 (${issue.date}) 与文件名不一致`)
  }

  if (!issue.generatedAt) {
    errors.push(`${file}: 缺 generatedAt`)
  }

  if (!Array.isArray(issue.stories) || issue.stories.length === 0) {
    errors.push(`${file}: stories 为空（空刊不应落盘）`)
    continue
  }

  for (const story of issue.stories) {
    const where = `${file} → ${story.slug ?? '(无 slug)'}`
    storyTotal += 1

    for (const field of ['slug', 'title', 'summary', 'creator', 'sourceType']) {
      if (!story[field] || typeof story[field] !== 'string') {
        errors.push(`${where}: 缺字段 ${field}`)
      }
    }

    if (story.slug) {
      if (!story.slug.startsWith(`${date}-`)) {
        errors.push(`${where}: slug 未以 ${date}- 开头`)
      }
      if (slugs.has(story.slug)) {
        errors.push(`${where}: slug 与 ${slugs.get(story.slug)} 重复`)
      }
      slugs.set(story.slug, file)
    }

    if (!SOURCE_TYPES.has(story.sourceType)) {
      errors.push(`${where}: sourceType 非法 (${story.sourceType})`)
    }

    if (!Array.isArray(story.content) || story.content.length === 0) {
      errors.push(`${where}: content 为空`)
    }

    if (
      !Array.isArray(story.sourceLinks) ||
      story.sourceLinks.length === 0 ||
      story.sourceLinks.some((link) => !link.url || !link.label)
    ) {
      errors.push(`${where}: sourceLinks 缺失或含空链接`)
    }

    const summaryLength = (story.summary ?? '').length
    if (summaryLength > 140) {
      errors.push(`${where}: summary ${summaryLength} 字，明显超出 50-90 字标准`)
    }
  }
}

console.log(`检查 ${files.length} 期 / ${storyTotal} 条 story`)

if (errors.length > 0) {
  console.error(`\n${errors.length} 个问题：`)
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exitCode = 1
} else {
  console.log('全部通过')
}
