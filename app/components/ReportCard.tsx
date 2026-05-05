import Link from 'next/link'
import type { ReportMeta } from '@/lib/reports'

const complexityColor = {
  beginner: 'text-emerald-400',
  intermediate: 'text-amber-400',
  advanced: 'text-red-400',
}

const workflowTypeLabel: Record<string, string> = {
  'automated-pipeline': 'Automated',
  'manual-assisted': 'Manual',
  'agent-loop': 'Agent Loop',
  'vibe-coding': 'Vibe Coding',
}

interface ReportCardProps {
  report: ReportMeta
}

export default function ReportCard({ report }: ReportCardProps) {
  return (
    <Link
      href={`/reports/${report.slug}`}
      className="block bg-[#141414] border border-[#1e1e1e] rounded-xl p-5 hover:border-[#333] hover:bg-[#161616] transition-all group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-[#555] mb-1 truncate">{report.channel}</p>
          <h2 className="text-sm font-semibold text-[#f0f0f0] leading-snug line-clamp-2 group-hover:text-white transition-colors">
            {report.title}
          </h2>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-3 mb-3 text-xs">
        <span className={complexityColor[report.complexity]}>{report.complexity}</span>
        {report.workflow_type && (
          <>
            <span className="text-[#333]">·</span>
            <span className="text-[#555]">{workflowTypeLabel[report.workflow_type] || report.workflow_type}</span>
          </>
        )}
        {report.date && (
          <>
            <span className="text-[#333]">·</span>
            <span className="text-[#444]">{report.date}</span>
          </>
        )}
      </div>

      {/* Tools */}
      {report.tools.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {report.tools.slice(0, 4).map(tool => (
            <span key={tool} className="bg-[#1e1e1e] text-[#888] px-2 py-0.5 rounded text-xs">
              {tool}
            </span>
          ))}
          {report.tools.length > 4 && (
            <span className="text-[#444] text-xs px-1">+{report.tools.length - 4}</span>
          )}
        </div>
      )}

      {/* Tags */}
      {report.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {report.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[#444] text-xs">#{tag}</span>
          ))}
          {report.tags.length > 3 && (
            <span className="text-[#333] text-xs">+{report.tags.length - 3}</span>
          )}
        </div>
      )}
    </Link>
  )
}
