// 从 follow-builders 仓库的 git history 回填每日 feed 快照。
//
// 上游每天 ~06:17 UTC 提交一次；feed-x 是 24h 滚动窗口，feed-podcasts 336h，
// feed-blogs 72h，所以相邻快照有重叠。这里按时间顺序去重（tweet id /
// podcast guid+url / blog url），每天只留「当天新出现」的内容，写到
// data/raw/days/YYYY-MM-DD.json，作为逐日写稿的输入。
//
// 用法：node scripts/backfill-snapshots.mjs [--since 2026-04-07]
// 有 GITHUB_TOKEN 或 gh 登录时自动带上鉴权（仅 commits 列表这 1-2 个 API 调用需要）。

import { execSync } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO = 'zarazhangrui/follow-builders'
const FEED_FILES = ['feed-x.json', 'feed-podcasts.json', 'feed-blogs.json']

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const daysDir = join(projectRoot, 'data', 'raw', 'days')

const sinceArgIndex = process.argv.indexOf('--since')
const since = sinceArgIndex === -1 ? '2026-04-07' : process.argv[sinceArgIndex + 1]

function githubToken() {
  if (process.env.GITHUB_TOKEN) {
    return process.env.GITHUB_TOKEN
  }

  try {
    return execSync('gh auth token', { encoding: 'utf8' }).trim()
  } catch {
    return null
  }
}

async function listCommits() {
  const token = githubToken()
  const headers = token ? { authorization: `Bearer ${token}` } : {}
  const commits = []

  for (let page = 1; page <= 5; page += 1) {
    const url = `https://api.github.com/repos/${REPO}/commits?path=feed-x.json&since=${since}T00:00:00Z&per_page=100&page=${page}`
    const response = await fetch(url, { headers })

    if (!response.ok) {
      throw new Error(`GitHub API ${response.status} for ${url}`)
    }

    const batch = await response.json()
    commits.push(...batch)

    if (batch.length < 100) {
      break
    }
  }

  return commits.map((commit) => ({
    sha: commit.sha,
    committedAt: commit.commit.committer.date,
    date: commit.commit.committer.date.slice(0, 10),
  }))
}

async function fetchFeedAt(sha, file) {
  const url = `https://raw.githubusercontent.com/${REPO}/${sha}/${file}`
  const response = await fetch(url)

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`)
  }

  return response.json()
}

async function main() {
  const commits = await listCommits()

  // 同一天多次提交时取当天最后一次。
  const latestPerDay = new Map()
  for (const commit of commits) {
    const existing = latestPerDay.get(commit.date)
    if (!existing || commit.committedAt > existing.committedAt) {
      latestPerDay.set(commit.date, commit)
    }
  }

  const days = [...latestPerDay.values()].sort((a, b) =>
    a.date.localeCompare(b.date),
  )
  console.log(`Found ${commits.length} commits since ${since} → ${days.length} days`)

  const seenTweets = new Set()
  const seenPodcasts = new Set()
  const seenBlogs = new Set()
  let written = 0

  await mkdir(daysDir, { recursive: true })

  for (const day of days) {
    const [x, podcasts, blogs] = await Promise.all(
      FEED_FILES.map((file) => fetchFeedAt(day.sha, file)),
    )

    const builders = (x?.x ?? [])
      .map((builder) => ({
        ...builder,
        tweets: builder.tweets.filter((tweet) => {
          if (seenTweets.has(tweet.id)) {
            return false
          }
          seenTweets.add(tweet.id)
          return true
        }),
      }))
      .filter((builder) => builder.tweets.length > 0)

    const freshPodcasts = (podcasts?.podcasts ?? []).filter((podcast) => {
      const key = podcast.guid ?? podcast.url
      if (seenPodcasts.has(key)) {
        return false
      }
      seenPodcasts.add(key)
      return true
    })

    const freshBlogs = (blogs?.blogs ?? []).filter((blog) => {
      if (seenBlogs.has(blog.url)) {
        return false
      }
      seenBlogs.add(blog.url)
      return true
    })

    const tweetCount = builders.reduce(
      (sum, builder) => sum + builder.tweets.length,
      0,
    )

    const snapshot = {
      date: day.date,
      sourceCommit: day.sha,
      feedGeneratedAt: x?.generatedAt ?? day.committedAt,
      summary: {
        builders: builders.length,
        tweets: tweetCount,
        podcasts: freshPodcasts.length,
        blogs: freshBlogs.length,
      },
      x: builders,
      podcasts: freshPodcasts,
      blogs: freshBlogs,
    }

    await writeFile(
      join(daysDir, `${day.date}.json`),
      `${JSON.stringify(snapshot, null, 2)}\n`,
    )
    written += 1
    console.log(
      `${day.date}  tweets:${tweetCount}  podcasts:${freshPodcasts.length}  blogs:${freshBlogs.length}`,
    )
  }

  console.log(`\nWrote ${written} day snapshots to data/raw/days/`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
})
