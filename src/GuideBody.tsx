import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import guideMarkdown from '../docs/writing-guide.md?raw'

// 单独成文件 + 懒加载：react-markdown 只在 /guide 才进 bundle，
// 首页 / 期 / story 页保持精简。
export default function GuideBody() {
  return (
    <article className="guide">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{guideMarkdown}</ReactMarkdown>
    </article>
  )
}
