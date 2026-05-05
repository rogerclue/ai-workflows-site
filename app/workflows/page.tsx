import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export default async function WorkflowsPage() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content/workflows.md'), 'utf8')
  const processed = await remark().use(remarkHtml).process(raw)
  const html = processed.toString()

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Reusable Patterns</h1>
        <p className="text-[#888] text-sm">14 cross-report workflow patterns with step-by-step breakdowns and tool recommendations.</p>
      </div>
      <div className="border-t border-[#1e1e1e] mb-8" />
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
