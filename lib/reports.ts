import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const reportsDir = path.join(process.cwd(), 'content/reports')

export interface Report {
  slug: string
  title: string
  channel: string
  url: string
  date: string
  tags: string[]
  tools: string[]
  use_cases: string[]
  complexity: 'beginner' | 'intermediate' | 'advanced'
  workflow_type: string
  content: string
}

export interface ReportMeta extends Omit<Report, 'content'> {}

export function getAllReports(): ReportMeta[] {
  const files = fs.readdirSync(reportsDir).filter(f => f.endsWith('.md'))

  const reports = files.map((filename): ReportMeta => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(reportsDir, filename), 'utf8')
    const { data } = matter(raw)

    return {
      slug,
      title: data.title || slug,
      channel: data.channel || '',
      url: data.url || '',
      date: data.date ? String(data.date) : '',
      tags: data.tags || [],
      tools: data.tools || [],
      use_cases: data.use_cases || [],
      complexity: data.complexity || 'beginner',
      workflow_type: data.workflow_type || '',
    }
  })

  return reports.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getReport(slug: string): Promise<Report> {
  const raw = fs.readFileSync(path.join(reportsDir, `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)

  const processed = await remark().use(remarkHtml).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title || slug,
    channel: data.channel || '',
    url: data.url || '',
    date: data.date ? String(data.date) : '',
    tags: data.tags || [],
    tools: data.tools || [],
    use_cases: data.use_cases || [],
    complexity: data.complexity || 'beginner',
    workflow_type: data.workflow_type || '',
    content: contentHtml,
  }
}

export function getAllTags(): string[] {
  const reports = getAllReports()
  const tagSet = new Set<string>()
  reports.forEach(r => r.tags.forEach(t => tagSet.add(t)))
  return Array.from(tagSet).sort()
}

export function getAllTools(): string[] {
  const reports = getAllReports()
  const toolSet = new Set<string>()
  reports.forEach(r => r.tools.forEach(t => toolSet.add(t)))
  return Array.from(toolSet).sort()
}
