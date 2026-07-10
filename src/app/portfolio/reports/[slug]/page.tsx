import SiteShell from '@/components/layout/SiteShell'
import PortfolioReportDetailSections from '@/app/portfolio/PortfolioReportDetailSections'
import { getPortfolioReportBySlug, portfolioReportsDetailed } from '@/data/portfolio-reports'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PortfolioReportPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return portfolioReportsDetailed.map((report) => ({
    slug: report.slug,
  }))
}

export async function generateMetadata({ params }: PortfolioReportPageProps): Promise<Metadata> {
  const { slug } = await params
  const report = getPortfolioReportBySlug(slug)

  if (!report) {
    return { title: 'Report Not Found' }
  }

  return {
    title: report.title,
    description: report.insight,
  }
}

const PortfolioReportPage = async ({ params }: PortfolioReportPageProps) => {
  const { slug } = await params
  const report = getPortfolioReportBySlug(slug)

  if (!report) {
    notFound()
  }

  return (
    <SiteShell>
      <PortfolioReportDetailSections report={report} />
    </SiteShell>
  )
}

export default PortfolioReportPage
