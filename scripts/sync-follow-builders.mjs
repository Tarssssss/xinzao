import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const rawDir = join(projectRoot, 'data', 'raw')

const FEEDS = {
  x: 'https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-x.json',
  podcasts:
    'https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-podcasts.json',
  blogs:
    'https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-blogs.json',
}

function decodeEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
}

function excerpt(value, maxLength = 240) {
  const normalized = value.replace(/\s+/g, ' ').trim()
  if (normalized.length <= maxLength) {
    return normalized
  }

  return `${normalized.slice(0, maxLength - 1)}…`
}

async function fetchJson(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`)
  }

  return response.json()
}

function renderBrief(raw) {
  const lines = [
    '# Follow Builders Feed Brief',
    '',
    `Synced at: ${raw.syncedAt}`,
    `Feed generated at: ${raw.feedGeneratedAt}`,
    `Builders: ${raw.summary.builders}`,
    `Tweets: ${raw.summary.tweets}`,
    `Podcasts: ${raw.summary.podcasts}`,
    `Blogs: ${raw.summary.blogs}`,
    '',
    'Use this file as the quick scan view. Full payload lives in `data/raw/latest.json`.',
    '',
    '## X / Twitter',
    '',
  ]

  for (const builder of raw.x) {
    lines.push(`### ${builder.name} (@${builder.handle})`)

    for (const tweet of builder.tweets) {
      lines.push(`- ${excerpt(tweet.text)}`)
      lines.push(`  ${tweet.url}`)
    }

    lines.push('')
  }

  lines.push('## Podcasts', '')

  for (const podcast of raw.podcasts) {
    lines.push(`### ${podcast.name}`)
    lines.push(`- ${decodeEntities(podcast.title)}`)
    lines.push(`- ${podcast.url}`)
    lines.push(`- Transcript preview: ${excerpt(podcast.transcript, 300)}`)
    lines.push('')
  }

  lines.push('## Blogs', '')

  if (raw.blogs.length === 0) {
    lines.push('- No fresh blog posts in the current feed.')
    lines.push('')
  } else {
    for (const blog of raw.blogs) {
      lines.push(`### ${blog.name}`)
      lines.push(`- ${decodeEntities(blog.title)}`)
      lines.push(`- ${blog.url}`)
      lines.push(`- ${excerpt(blog.content ?? blog.summary ?? '', 300)}`)
      lines.push('')
    }
  }

  return lines.join('\n')
}

async function main() {
  const [x, podcasts, blogs] = await Promise.all([
    fetchJson(FEEDS.x),
    fetchJson(FEEDS.podcasts),
    fetchJson(FEEDS.blogs),
  ])

  const syncedAt = new Date().toISOString()
  const raw = {
    syncedAt,
    feedGeneratedAt: blogs.generatedAt ?? podcasts.generatedAt ?? x.generatedAt,
    summary: {
      builders: x.x.length,
      tweets: x.x.reduce((sum, builder) => sum + builder.tweets.length, 0),
      podcasts: podcasts.podcasts.length,
      blogs: blogs.blogs.length,
    },
    x: x.x,
    podcasts: podcasts.podcasts,
    blogs: blogs.blogs,
  }

  const dateStamp = syncedAt.slice(0, 10)

  await mkdir(rawDir, { recursive: true })
  await writeFile(join(rawDir, `${dateStamp}.json`), `${JSON.stringify(raw, null, 2)}\n`)
  await writeFile(join(rawDir, 'latest.json'), `${JSON.stringify(raw, null, 2)}\n`)
  await writeFile(join(rawDir, 'latest-brief.md'), `${renderBrief(raw)}\n`)

  console.log(
    [
      'Synced follow-builders feeds successfully.',
      `Builders: ${raw.summary.builders}`,
      `Tweets: ${raw.summary.tweets}`,
      `Podcasts: ${raw.summary.podcasts}`,
      `Blogs: ${raw.summary.blogs}`,
      `Wrote: ${join(rawDir, 'latest.json')}`,
      `Wrote: ${join(rawDir, 'latest-brief.md')}`,
    ].join('\n'),
  )
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
})
