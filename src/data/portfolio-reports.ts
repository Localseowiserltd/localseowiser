import report1 from '@/assets/images/portfolio/1.webp'
import report2 from '@/assets/images/portfolio/2.webp'
import report3 from '@/assets/images/portfolio/3.webp'
import report4 from '@/assets/images/portfolio/4.webp'
import report5 from '@/assets/images/portfolio/5.webp'
import report6 from '@/assets/images/portfolio/6.webp'
import report7 from '@/assets/images/portfolio/7.webp'
import report8 from '@/assets/images/portfolio/8.webp'

export type PortfolioReportFilter = 'all' | 'gsc' | 'call'

export type PortfolioReport = {
  slug: string
  reportNumber: number
  totalReports: number
  type: 'GSC Report' | 'Call Report'
  category: 'Google Search Console' | 'Call Performance'
  filter: Exclude<PortfolioReportFilter, 'all'>
  cardTitle: string
  title: string
  subtitle: string
  detail: string
  period: string
  location: string
  keyMetric: string
  insight: string
  image: string
}

export const portfolioCaseStudy = {
  client: '4s Chemicals',
  location: 'Norman, Oklahoma, United States',
  summary: '8 reports pulled directly from Google Search Console and call tracking data.',
  sectionTitle: 'Monthly performance snapshots',
}

export const portfolioReportFilters: { id: PortfolioReportFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'gsc', label: 'Google Search Console' },
  { id: 'call', label: 'Call Performance' },
]

export const portfolioReportsDetailed: PortfolioReport[] = [
  {
    slug: '6-month-gsc-overview',
    reportNumber: 1,
    totalReports: 8,
    type: 'GSC Report',
    category: 'Google Search Console',
    filter: 'gsc',
    cardTitle: '4s Chemicals · 6-Month GSC Overview, 6-month search performance overview',
    title: '4s Chemicals · 6-Month GSC Overview',
    subtitle: '6-month search performance overview',
    detail: '1.66K clicks vs 902 previous period',
    period: '6-month overview · Dec 2025 to May 2026',
    location: 'Norman, Oklahoma · organic search',
    keyMetric: '1.66K clicks vs 902 previous period',
    insight: 'Organic clicks grew 84% while average position improved from 52.2 to 37.5.',
    image: report1.src,
  },
  {
    slug: 'impression-surge-report',
    reportNumber: 2,
    totalReports: 8,
    type: 'GSC Report',
    category: 'Google Search Console',
    filter: 'gsc',
    cardTitle: '4s Chemicals · Impression Surge Report, Visibility acceleration phase',
    title: '4s Chemicals · Impression Surge Report',
    subtitle: 'Visibility acceleration phase',
    detail: '44.3K impressions vs 1.43K previous period',
    period: 'Acceleration window · Feb to Apr 2026',
    location: 'Oklahoma City & Norman metro',
    keyMetric: '44.3K impressions vs 1.43K previous period',
    insight: 'Impressions jumped as the site started ranking for broader industrial search terms.',
    image: report2.src,
  },
  {
    slug: 'early-traction-phase',
    reportNumber: 3,
    totalReports: 8,
    type: 'GSC Report',
    category: 'Google Search Console',
    filter: 'gsc',
    cardTitle: '4s Chemicals · Early Traction Phase, Early traction report',
    title: '4s Chemicals · Early Traction Phase',
    subtitle: 'Early traction report',
    detail: '108 clicks vs 23 previous period',
    period: 'Launch phase · Jan to Mar 2026',
    location: 'Norman, OK · first ranking gains',
    keyMetric: '108 clicks vs 23 previous period',
    insight: 'First measurable SEO lift, organic clicks increased 4.7x in the opening phase.',
    image: report3.src,
  },
  {
    slug: 'sustained-growth-report',
    reportNumber: 4,
    totalReports: 8,
    type: 'GSC Report',
    category: 'Google Search Console',
    filter: 'gsc',
    cardTitle: '4s Chemicals · Sustained Growth Report, Sustained impression growth',
    title: '4s Chemicals · Sustained Growth Report',
    subtitle: 'Sustained impression growth',
    detail: '35.7K impressions vs 2.09K previous period',
    period: 'Growth window · Mar to May 2026',
    location: 'Gulf Coast & Midwest keyword markets',
    keyMetric: '35.7K impressions vs 2.09K previous period',
    insight: 'Impressions climbed more than 16x across target keyword groups.',
    image: report4.src,
  },
  {
    slug: 'april-call-snapshot',
    reportNumber: 5,
    totalReports: 8,
    type: 'Call Report',
    category: 'Call Performance',
    filter: 'call',
    cardTitle: '4s Chemicals · April Call Snapshot, April call volume snapshot',
    title: '4s Chemicals · April Call Snapshot',
    subtitle: 'April call volume snapshot',
    detail: '50 tracked phone calls (+6.4%)',
    period: 'Single month · April 2026',
    location: 'Norman, Oklahoma · phone lead tracking',
    keyMetric: '50 tracked phone calls (+6.4%)',
    insight: 'Highest single-month call count recorded during the campaign.',
    image: report5.src,
  },
  {
    slug: '6-month-call-trend',
    reportNumber: 6,
    totalReports: 8,
    type: 'Call Report',
    category: 'Call Performance',
    filter: 'call',
    cardTitle: '4s Chemicals · 6-Month Call Trend, Six-month call trend',
    title: '4s Chemicals · 6-Month Call Trend',
    subtitle: 'Six-month call trend',
    detail: '40 calls tracked over 6 months',
    period: 'Call trend · Dec 2025 to May 2026',
    location: 'United States · discovery call volume',
    keyMetric: '40 calls tracked over 6 months',
    insight: 'Steady call activity held through seasonal demand shifts.',
    image: report6.src,
  },
  {
    slug: 'recent-call-activity',
    reportNumber: 7,
    totalReports: 8,
    type: 'Call Report',
    category: 'Call Performance',
    filter: 'call',
    cardTitle: '4s Chemicals · Recent Call Activity, Recent call performance',
    title: '4s Chemicals · Recent Call Activity',
    subtitle: 'Recent call performance',
    detail: '28 tracked phone calls',
    period: 'Recent window · Apr to May 2026',
    location: 'Oklahoma & Texas service regions',
    keyMetric: '28 tracked phone calls',
    insight: 'Recent two-month window shows ongoing lead generation.',
    image: report7.src,
  },
  {
    slug: 'call-baseline-report',
    reportNumber: 8,
    totalReports: 8,
    type: 'Call Report',
    category: 'Call Performance',
    filter: 'call',
    cardTitle: '4s Chemicals · Call Baseline Report, Call performance baseline',
    title: '4s Chemicals · Call Baseline Report',
    subtitle: 'Call performance baseline',
    detail: '42 calls Mar to Apr 2026',
    period: 'Baseline window · Mar to Apr 2026',
    location: 'Norman, OK · comparison period',
    keyMetric: '42 calls Mar to Apr 2026',
    insight: 'Baseline period confirms search traffic converting to phone inquiries.',
    image: report8.src,
  },
]

export const getPortfolioReportBySlug = (slug: string) =>
  portfolioReportsDetailed.find((report) => report.slug === slug)

export const getPortfolioReportsByFilter = (filter: PortfolioReportFilter) => {
  if (filter === 'all') return portfolioReportsDetailed
  return portfolioReportsDetailed.filter((report) => report.filter === filter)
}

export const getAdjacentPortfolioReports = (slug: string) => {
  const index = portfolioReportsDetailed.findIndex((report) => report.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }

  return {
    previous: index > 0 ? portfolioReportsDetailed[index - 1] : undefined,
    next: index < portfolioReportsDetailed.length - 1 ? portfolioReportsDetailed[index + 1] : undefined,
  }
}

export const getRelatedPortfolioReports = (slug: string, limit = 2) => {
  const current = getPortfolioReportBySlug(slug)
  if (!current) return []

  const sameCategory = portfolioReportsDetailed.filter(
    (report) => report.slug !== slug && report.filter === current.filter,
  )
  const others = portfolioReportsDetailed.filter(
    (report) => report.slug !== slug && report.filter !== current.filter,
  )

  return [...sameCategory, ...others].slice(0, limit)
}
