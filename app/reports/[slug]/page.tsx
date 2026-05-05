import { getAllReports, getReport } from '@/lib/reports'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const reports = getAllReports()
  return reports.map(r => ({ slug: r.slug }))
}

const complexityColor = {
  beginner: 'text-emerald-400 border-emerald-900 bg-emerald-950/30',
  intermediate: 'text-amber-400 border-amber-900 bg-amber-950/30',
  advanced: 'text-red-400 border-red-900 bg-red-950/30',
}

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let report
  try {
    report = await getReport(slug)
  } catch {
    notFound()
  }

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto w-full">
      {/* Back */}
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#555] hover:text-[#888] transition-colors mb-8">
        ← All reports
      </Link>

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-[#555] mb-2">{report.channel}</p>
        <h1 className="text-2xl font-bold text-[#f0f0f0] leading-tight mb-4">{report.title}</h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${complexityColor[report.complexity]}`}>
            {report.complexity}
          </span>
          {report.workflow_type && (
            <span className="text-xs px-2.5 py-1 rounded-full border border-[#2a2a2a] text-[#888]">
              {report.workflow_type}
            </span>
          )}
          {report.date && (
            <span className="text-xs text-[#444]">{report.date}</span>
          )}
          {report.url && (
            <a
              href={report.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 hover:text-blue-400 transition-colors ml-auto"
            >
              Watch video ↗
            </a>
          )}
        </div>

        {/* Tools */}
        {report.tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {report.tools.map(tool => (
              <span key={tool} className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#888] px-2.5 py-0.5 rounded-full text-xs">
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        {report.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {report.tags.map(tag => (
              <span key={tag} className="text-[#444] text-xs">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-[#1e1e1e] mb-8" />

      {/* Report content */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: report.content }}
      />
    </div>
  )
}
