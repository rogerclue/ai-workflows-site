'use client'

import { useState, useMemo } from 'react'
import type { ReportMeta } from '@/lib/reports'
import ReportCard from './ReportCard'

interface ReportGridProps {
  reports: ReportMeta[]
  tags: string[]
}

const complexityOrder = { beginner: 0, intermediate: 1, advanced: 2 }

export default function ReportGrid({ reports, tags }: ReportGridProps) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [activeComplexity, setActiveComplexity] = useState<string | null>(null)
  const [activeWorkflowType, setActiveWorkflowType] = useState<string | null>(null)

  const workflowTypes = useMemo(() => {
    const types = new Set(reports.map(r => r.workflow_type).filter(Boolean))
    return Array.from(types).sort()
  }, [reports])

  const filtered = useMemo(() => {
    return reports.filter(r => {
      const q = search.toLowerCase()
      const matchesSearch = !q ||
        r.title.toLowerCase().includes(q) ||
        r.channel.toLowerCase().includes(q) ||
        r.tags.some(t => t.includes(q)) ||
        r.tools.some(t => t.toLowerCase().includes(q)) ||
        r.use_cases.some(u => u.toLowerCase().includes(q))
      const matchesTag = !activeTag || r.tags.includes(activeTag)
      const matchesComplexity = !activeComplexity || r.complexity === activeComplexity
      const matchesWorkflowType = !activeWorkflowType || r.workflow_type === activeWorkflowType
      return matchesSearch && matchesTag && matchesComplexity && matchesWorkflowType
    })
  }, [reports, search, activeTag, activeComplexity, activeWorkflowType])

  const clearFilters = () => {
    setSearch('')
    setActiveTag(null)
    setActiveComplexity(null)
    setActiveWorkflowType(null)
  }

  const hasFilters = search || activeTag || activeComplexity || activeWorkflowType

  return (
    <div>
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search reports, tools, channels..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-[#f0f0f0] placeholder-[#555] focus:outline-none focus:border-[#444] transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {/* Complexity */}
        {(['beginner', 'intermediate', 'advanced'] as const).map(c => (
          <button
            key={c}
            onClick={() => setActiveComplexity(activeComplexity === c ? null : c)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
              activeComplexity === c
                ? 'bg-[#f0f0f0] text-[#0f0f0f] border-[#f0f0f0]'
                : 'border-[#2a2a2a] text-[#888] hover:border-[#444] hover:text-[#ccc]'
            }`}
          >
            {c}
          </button>
        ))}

        <div className="w-px bg-[#2a2a2a] mx-1" />

        {/* Workflow types */}
        {workflowTypes.map(wt => (
          <button
            key={wt}
            onClick={() => setActiveWorkflowType(activeWorkflowType === wt ? null : wt)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
              activeWorkflowType === wt
                ? 'bg-[#f0f0f0] text-[#0f0f0f] border-[#f0f0f0]'
                : 'border-[#2a2a2a] text-[#888] hover:border-[#444] hover:text-[#ccc]'
            }`}
          >
            {wt}
          </button>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-2.5 py-0.5 rounded text-xs transition-colors ${
              activeTag === tag
                ? 'bg-blue-600 text-white'
                : 'bg-[#1a1a1a] text-[#888] hover:text-[#ccc] hover:bg-[#222]'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Results count + clear */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-[#555]">
          {filtered.length} of {reports.length} reports
        </p>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-[#555] hover:text-[#888] transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#555]">No reports match your filters.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(report => (
            <ReportCard key={report.slug} report={report} />
          ))}
        </div>
      )}
    </div>
  )
}
