import { getAllReports, getAllTags } from '@/lib/reports'
import ReportGrid from './components/ReportGrid'

export default function HomePage() {
  const reports = getAllReports()
  const tags = getAllTags()

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Video Breakdowns</h1>
        <p className="text-[#888] text-sm">{reports.length} reports · filter by tag, complexity, or search</p>
      </div>
      <ReportGrid reports={reports} tags={tags} />
    </div>
  )
}
