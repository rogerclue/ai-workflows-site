import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export default async function ToolsPage() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content/tools.md'), 'utf8')
  const processed = await remark().use(remarkHtml).process(raw)
  const html = processed.toString()

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Tool Registry</h1>
        <p className="text-[#888] text-sm">Every tool mentioned across all reports, with cost, role, and which reports reference it.</p>
      </div>
      <div className="border-t border-[#1e1e1e] mb-8" />
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
