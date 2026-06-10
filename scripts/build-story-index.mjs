// 输出全部 story 的紧凑索引（TSV：date / slug / creator / title），
// 给 daily routine 和回填 agent 做「相关回顾」联想用，不落盘、不进 bundle。
// 用法：node scripts/build-story-index.mjs [--before YYYY-MM-DD]

import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const issuesDir = fileURLToPath(new URL('../src/data/issues', import.meta.url))

const beforeFlag = process.argv.indexOf('--before')
const before = beforeFlag !== -1 ? process.argv[beforeFlag + 1] : undefined

const files = (await readdir(issuesDir)).filter((file) => file.endsWith('.json')).sort()

for (const file of files) {
  const date = file.replace('.json', '')
  if (before && date >= before) {
    continue
  }
  const issue = JSON.parse(await readFile(join(issuesDir, file), 'utf8'))
  for (const story of issue.stories ?? []) {
    console.log([date, story.slug, story.creator, story.title].join('\t'))
  }
}
