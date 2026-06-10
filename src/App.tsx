import { useEffect } from 'react'
import {
  HashRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import { newsFeed, type NewsItem, type SourceType } from './data/news'
import './App.css'

const sortedItems = [...newsFeed.items].sort(
  (left, right) =>
    new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
)

const groupedStories = sortedItems.reduce<
  Array<{
    dateKey: string
    dateLabel: string
    startIndex: number
    items: NewsItem[]
  }>
>((groups, item) => {
  const dateKey = item.publishedAt.slice(0, 10)
  const existingGroup = groups.at(-1)

  if (existingGroup && existingGroup.dateKey === dateKey) {
    existingGroup.items.push(item)
    return groups
  }

  groups.push({
    dateKey,
    dateLabel: formatDate(item.publishedAt),
    startIndex: groups.reduce((sum, group) => sum + group.items.length, 0),
    items: [item],
  })

  return groups
}, [])

function formatDate(value: string, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(new Date(value))
}

function sourceLabel(sourceType: SourceType) {
  if (sourceType === 'x') {
    return 'Post'
  }

  if (sourceType === 'podcast') {
    return 'Podcast'
  }

  return 'Blog'
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function SiteHeader() {
  return (
    <header className="masthead">
      <div className="masthead-row">
        <Link className="masthead-brand" to="/">
          AI Builder Wire
        </Link>
        <time className="masthead-date" dateTime={newsFeed.curatedAt}>
          {formatDate(newsFeed.curatedAt)}
        </time>
      </div>
      <p className="masthead-note">
        今天的新 builder 动向，整理成一张可快速扫读的 front page。
      </p>
    </header>
  )
}

function StoryCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <article className="story-row">
      <div className="story-index">{index + 1}.</div>
      <div className="story-copy">
        <h2 className="story-title">
          <Link to={`/story/${item.slug}`}>{item.title}</Link>
        </h2>
        <p className="story-intro">{item.intro}</p>
        <p className="story-meta">
          {item.creator} · {sourceLabel(item.sourceType)} ·{' '}
          {formatDate(item.publishedAt, {
            month: 'numeric',
            day: 'numeric',
          })}
        </p>
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="front-page">
        <div className="section-heading">
          <p className="section-title">Front Page</p>
          <p className="section-meta">
            {sortedItems.length} stories · feed updated{' '}
            {formatDate(newsFeed.feedGeneratedAt, {
              month: 'numeric',
              day: 'numeric',
            })}
          </p>
        </div>

        {groupedStories.map((group) => {
          return (
            <section className="story-group" key={group.dateKey}>
              <div className="day-heading">
                <h2>{group.dateLabel}</h2>
                <p>{group.items.length} stories</p>
              </div>

              <div className="story-list">
                {group.items.map((item, index) => (
                  <StoryCard
                    key={item.id}
                    item={item}
                    index={group.startIndex + index}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

function DetailPage() {
  const { slug } = useParams()
  const item = newsFeed.items.find((entry) => entry.slug === slug)

  if (!item) {
    return (
      <main className="detail-shell">
        <SiteHeader />
        <Link className="back-link" to="/">
          Back to front page
        </Link>

        <section className="detail-card">
          <h1>这条 news 还没被收录。</h1>
          <p className="detail-lead">
            可能是链接错误，也可能是这条内容已经被替换成更完整的版本。
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="detail-shell">
      <SiteHeader />
      <Link className="back-link" to="/">
        Back to front page
      </Link>

      <article className="detail-card">
        <p className="article-meta">
          {item.creator} · {item.role} · {sourceLabel(item.sourceType)} ·{' '}
          {formatDate(item.publishedAt)}
        </p>
        <h1>{item.title}</h1>
        <p className="detail-lead">{item.intro}</p>

        <div className="detail-content">
          {item.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="sources-panel">
          <h2>Source</h2>
          <ul className="source-list">
            {item.sourceLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  )
}

function AppRouter() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:slug" element={<DetailPage />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRouter
