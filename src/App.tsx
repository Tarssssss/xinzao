import { lazy, Suspense, useEffect, type CSSProperties } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import { findStory, issues, latestIssue } from './data/issues'
import type { NumberedIssue, QuickTake, SourceType, Story } from './data/types'
import './App.css'

const GuideBody = lazy(() => import('./GuideBody'))

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']

function parseDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function formatDateCN(value: string) {
  const date = parseDate(value)
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`
}

function weekdayCN(value: string) {
  return `星期${WEEKDAYS[parseDate(value).getDay()]}`
}

function issueNo(issue: NumberedIssue) {
  return `第 ${String(issue.number).padStart(2, '0')} 期`
}

function sourceLabel(sourceType: SourceType) {
  if (sourceType === 'x') {
    return 'X'
  }

  return sourceType === 'podcast' ? 'Podcast' : 'Blog'
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function Masthead({ issue }: { issue?: NumberedIssue }) {
  return (
    <header>
      <div className="masthead">
        <div className="masthead-left">
          <span className="masthead-seal" aria-hidden="true">
            信噪
          </span>
          <h1 className="masthead-title">
            <Link to="/">信噪</Link>
          </h1>
          <p className="masthead-en">Signal over noise</p>
        </div>
        {issue && (
          <p className="masthead-issue">
            <span className="issue-no">{issueNo(issue)}</span>
            <br />
            {formatDateCN(issue.date)} {weekdayCN(issue.date)}
          </p>
        )}
      </div>
      <hr className="double-rule" />
      <div className="masthead-note">
        <span>AI builder 言论日刊 · 摘要只为帮你判断要不要点开原文</span>
        <Link to="/guide" className="masthead-nav-link">
          写作规范 ↗
        </Link>
      </div>
    </header>
  )
}

function StoryRow({ story, rank }: { story: Story; rank: number }) {
  const origin = story.sourceLinks[0]

  return (
    <li className="story-row" style={{ '--i': rank - 1 } as CSSProperties}>
      <span className="story-rank" aria-hidden="true">
        {rank}.
      </span>
      <div>
        <h3 className="story-title">
          <Link to={`/story/${story.slug}`}>{story.title}</Link>
        </h3>
        <p className="story-summary">{story.summary}</p>
        <p className="story-meta">
          <span className="creator">{story.creator}</span>
          <span>{sourceLabel(story.sourceType)}</span>
          {story.engagement && <span>{story.engagement}</span>}
          {origin && (
            <a
              className="origin-link"
              href={origin.url}
              target="_blank"
              rel="noreferrer"
            >
              原文 <span className="arrow">↗</span>
            </a>
          )}
        </p>
      </div>
    </li>
  )
}

function QuickTakes({ items }: { items: QuickTake[] }) {
  return (
    <div className="quick-takes">
      <div className="quick-takes-head">
        <h3>速览</h3>
        <span>{items.length} 条</span>
      </div>
      <ul>
        {items.map((item) => (
          <li className="quick-take" key={item.url}>
            <p className="qt-quote">{item.quote}</p>
            <p className="qt-meta">
              <span className="creator">
                {item.creator}
                {item.handle && <span className="qt-handle"> @{item.handle}</span>}
              </span>
              <span>{sourceLabel(item.sourceType)}</span>
              <a
                className="origin-link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                原文 <span className="arrow">↗</span>
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function IssueSection({
  issue,
  headingPrefix,
}: {
  issue: NumberedIssue
  headingPrefix?: string
}) {
  return (
    <section>
      <div className="issue-head">
        <h2>
          {headingPrefix ?? `${formatDateCN(issue.date)} ${weekdayCN(issue.date)}`}
        </h2>
        <span className="issue-meta">
          {issueNo(issue)} · {issue.stories.length} 条
        </span>
      </div>
      {issue.editorNote && <p className="editor-note">{issue.editorNote}</p>}
      <ol className="story-list">
        {issue.stories.map((story, index) => (
          <StoryRow key={story.slug} story={story} rank={index + 1} />
        ))}
      </ol>
      {issue.quickTakes && issue.quickTakes.length > 0 && (
        <QuickTakes items={issue.quickTakes} />
      )}
    </section>
  )
}

function ArchiveIndex({ skip }: { skip?: string }) {
  const archived = issues.filter((issue) => issue.date !== skip)

  if (archived.length === 0) {
    return null
  }

  return (
    <section className="archive">
      <div className="archive-head">
        <h2>往期</h2>
        <span>{archived.length} 期</span>
      </div>
      <ul className="archive-list">
        {archived.map((issue) => (
          <li className="archive-row" key={issue.date}>
            <Link to={`/issue/${issue.date}`}>
              <span className="no">No.{String(issue.number).padStart(2, '0')}</span>
              <span className="date">{issue.date}</span>
              <span className="headline">{issue.stories[0]?.title}</span>
              <span className="count">{issue.stories.length} 条</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>信噪 · 每天 09:00 更新</span>
      <a
        href="https://github.com/zarazhangrui/follow-builders"
        target="_blank"
        rel="noreferrer"
      >
        信源 follow-builders ↗
      </a>
      <span>由 Claude 自动选稿整理</span>
    </footer>
  )
}

function todayKey() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

function HomePage() {
  return (
    <main className="shell">
      <Masthead issue={latestIssue} />
      {latestIssue ? (
        <>
          <IssueSection
            issue={latestIssue}
            headingPrefix={latestIssue.date === todayKey() ? '今日' : '最新'}
          />
          <ArchiveIndex skip={latestIssue.date} />
        </>
      ) : (
        <p className="empty-state">第一期正在整理中。</p>
      )}
      <SiteFooter />
    </main>
  )
}

function IssuePage() {
  const { date } = useParams()
  const issue = issues.find((entry) => entry.date === date)

  if (!issue) {
    return <NotFound />
  }

  return (
    <main className="shell">
      <Masthead issue={issue} />
      <IssueSection issue={issue} />
      <ArchiveIndex skip={issue.date} />
      <SiteFooter />
    </main>
  )
}

function StoryPage() {
  const { slug } = useParams()
  const found = findStory(slug)

  if (!found) {
    return <NotFound />
  }

  const { story, issue } = found

  return (
    <main className="shell">
      <Masthead issue={issue} />
      <Link className="back-link" to={`/issue/${issue.date}`}>
        ← {issueNo(issue)} · {issue.date}
      </Link>
      <article className="article">
        <h1>{story.title}</h1>
        <p className="article-meta">
          <span className="creator">{story.creator}</span>
          {story.role && <> · {story.role}</>} · {sourceLabel(story.sourceType)}
          {story.engagement && <> · {story.engagement}</>}
        </p>
        <p className="article-lead">{story.summary}</p>
        <div className="article-body">
          {story.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <section className="sources">
          <h2>原文</h2>
          <ul>
            {story.sourceLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <SiteFooter />
    </main>
  )
}

function NotFound() {
  return (
    <main className="shell">
      <Masthead issue={latestIssue} />
      <p className="empty-state">
        这条内容不存在，可能链接有误或已被更完整的版本替换。
        <br />
        <br />
        <Link to="/" style={{ textDecoration: 'underline' }}>
          回到今日刊
        </Link>
      </p>
      <SiteFooter />
    </main>
  )
}

function GuidePage() {
  return (
    <main className="shell">
      <Masthead issue={latestIssue} />
      <Link className="back-link" to="/">
        ← 回到今日刊
      </Link>
      <Suspense fallback={<p className="empty-state">规范载入中…</p>}>
        <GuideBody />
      </Suspense>
      <SiteFooter />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/issue/:date" element={<IssuePage />} />
        <Route path="/story/:slug" element={<StoryPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
