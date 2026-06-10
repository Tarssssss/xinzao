import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type TouchEvent,
} from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
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

/** 横滑手势：水平位移够大且明显大于垂直位移才算，避免和上下滚动打架 */
function useSwipe(handlers: { onLeft?: () => void; onRight?: () => void }) {
  const start = useRef<{ x: number; y: number } | null>(null)

  function onTouchStart(event: TouchEvent) {
    const touch = event.touches[0]
    start.current = { x: touch.clientX, y: touch.clientY }
  }

  function onTouchEnd(event: TouchEvent) {
    if (!start.current) {
      return
    }
    const touch = event.changedTouches[0]
    const dx = touch.clientX - start.current.x
    const dy = touch.clientY - start.current.y
    start.current = null
    if (Math.abs(dx) < 64 || Math.abs(dx) < Math.abs(dy) * 1.6) {
      return
    }
    if (dx < 0) {
      handlers.onLeft?.()
    } else {
      handlers.onRight?.()
    }
  }

  return { onTouchStart, onTouchEnd }
}

type TabKey = 'today' | 'archive' | 'guide'

function TabNav({ active }: { active: TabKey }) {
  return (
    <nav className="tab-nav" aria-label="栏目">
      <Link to="/" className={`tab${active === 'today' ? ' active' : ''}`}>
        今日
      </Link>
      <Link
        to="/archive"
        className={`tab${active === 'archive' ? ' active' : ''}`}
      >
        往期
      </Link>
      <Link
        to="/guide"
        className={`tab tab-aside${active === 'guide' ? ' active' : ''}`}
      >
        规范
      </Link>
    </nav>
  )
}

function Masthead({ issue, tab }: { issue?: NumberedIssue; tab: TabKey }) {
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
      <TabNav active={tab} />
    </header>
  )
}

function StoryRow({
  story,
  rank,
  defaultOpen = false,
}: {
  story: Story
  rank: number
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const links = open ? story.sourceLinks : story.sourceLinks.slice(0, 1)
  const bodyId = `${story.slug}-body`

  function toggle() {
    setOpen((value) => !value)
  }

  return (
    <li
      className={`story-row${open ? ' open' : ''}`}
      id={story.slug}
      style={{ '--i': rank - 1 } as CSSProperties}
    >
      <span className="story-rank" aria-hidden="true">
        {rank}.
      </span>
      <div className="story-cell">
        <h3 className="story-title">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={bodyId}
            onClick={toggle}
          >
            {story.title}
            <span className="story-caret" aria-hidden="true">
              ▾
            </span>
          </button>
        </h3>
        <p className="story-summary" onClick={toggle}>
          {story.summary}
        </p>
        <p className="story-meta">
          <span className="creator">{story.creator}</span>
          {open && story.role && <span>{story.role}</span>}
          <span>{sourceLabel(story.sourceType)}</span>
          {story.engagement && <span>{story.engagement}</span>}
          {links.map((link) => (
            <a
              key={link.url}
              className="origin-link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {open ? link.label : '原文'} <span className="arrow">↗</span>
            </a>
          ))}
        </p>
        <div className="story-body" id={bodyId}>
          <div className="story-body-inner">
            {story.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
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
  expandedSlug,
}: {
  issue: NumberedIssue
  headingPrefix?: string
  expandedSlug?: string
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
          <StoryRow
            key={story.slug}
            story={story}
            rank={index + 1}
            defaultOpen={story.slug === expandedSlug}
          />
        ))}
      </ol>
      {issue.quickTakes && issue.quickTakes.length > 0 && (
        <QuickTakes items={issue.quickTakes} />
      )}
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>信噪 · 每天 09:00 更新 · 摘要只为帮你判断要不要点开原文</span>
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

function IssueView({
  issue,
  expandedSlug,
}: {
  issue: NumberedIssue
  expandedSlug?: string
}) {
  const navigate = useNavigate()
  const index = issues.findIndex((entry) => entry.date === issue.date)
  const newer = index > 0 ? issues[index - 1] : undefined
  const older = index >= 0 ? issues[index + 1] : undefined
  const isLatest = issue.date === latestIssue?.date

  const swipe = useSwipe({
    onLeft: () => {
      if (isLatest) {
        navigate('/archive')
      } else if (older) {
        navigate(`/issue/${older.date}`)
      }
    },
    onRight: () => {
      if (isLatest) {
        return
      }
      if (newer && newer.date !== latestIssue?.date) {
        navigate(`/issue/${newer.date}`)
      } else {
        navigate('/')
      }
    },
  })

  useEffect(() => {
    if (expandedSlug) {
      // ScrollToTop 的 effect 先跑（fiber 顺序），这里直接滚到目标条目即可
      document.getElementById(expandedSlug)?.scrollIntoView()
    }
  }, [expandedSlug])

  let headingPrefix: string | undefined
  if (isLatest) {
    headingPrefix = issue.date === todayKey() ? '今日' : '最新'
  }

  return (
    <main className="shell" {...swipe}>
      <Masthead issue={issue} tab={isLatest ? 'today' : 'archive'} />
      <IssueSection
        issue={issue}
        headingPrefix={headingPrefix}
        expandedSlug={expandedSlug}
      />
      <nav className="issue-nav" aria-label="翻期">
        {older ? (
          <Link to={`/issue/${older.date}`}>
            ← 上一期 No.{String(older.number).padStart(2, '0')}
          </Link>
        ) : (
          <span />
        )}
        {!isLatest &&
          (newer && newer.date !== latestIssue?.date ? (
            <Link to={`/issue/${newer.date}`}>
              下一期 No.{String(newer.number).padStart(2, '0')} →
            </Link>
          ) : (
            <Link to="/">今日 →</Link>
          ))}
      </nav>
      <SiteFooter />
    </main>
  )
}

function HomePage() {
  if (!latestIssue) {
    return (
      <main className="shell">
        <Masthead tab="today" />
        <p className="empty-state">第一期正在整理中。</p>
        <SiteFooter />
      </main>
    )
  }

  return <IssueView issue={latestIssue} />
}

function ArchivePage() {
  const navigate = useNavigate()
  const swipe = useSwipe({ onRight: () => navigate('/') })
  const archived = issues.filter((issue) => issue.date !== latestIssue?.date)

  return (
    <main className="shell" {...swipe}>
      <Masthead issue={latestIssue} tab="archive" />
      <section className="archive">
        <div className="archive-head">
          <h2>往期</h2>
          <span>{archived.length} 期</span>
        </div>
        {archived.length === 0 ? (
          <p className="empty-state">还没有往期。</p>
        ) : (
          <ul className="archive-list">
            {archived.map((issue) => (
              <li className="archive-row" key={issue.date}>
                <Link to={`/issue/${issue.date}`}>
                  <span className="no">
                    No.{String(issue.number).padStart(2, '0')}
                  </span>
                  <span className="date">{issue.date}</span>
                  <span className="headline">{issue.stories[0]?.title}</span>
                  <span className="count">{issue.stories.length} 条</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
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

  return <IssueView issue={issue} />
}

function StoryPage() {
  const { slug } = useParams()
  const found = findStory(slug)

  if (!found) {
    return <NotFound />
  }

  return <IssueView issue={found.issue} expandedSlug={found.story.slug} />
}

function NotFound() {
  return (
    <main className="shell">
      <Masthead issue={latestIssue} tab="today" />
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
      <Masthead issue={latestIssue} tab="guide" />
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
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/issue/:date" element={<IssuePage />} />
        <Route path="/story/:slug" element={<StoryPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
