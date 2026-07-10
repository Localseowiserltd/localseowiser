'use client'

import { PortfolioReport } from '@/data/portfolio-reports'
import Image from 'next/image'
import Link from 'next/link'

type PortfolioReportCardProps = {
  report: PortfolioReport
}

const PortfolioReportCard = ({ report }: PortfolioReportCardProps) => {
  return (
    <Link href={`/portfolio/reports/${report.slug}`} className="portfolio-report-grid-card h-100">
      <div className="portfolio-report-grid-card__visual">
        <Image
          src={report.image}
          alt={report.title}
          width={640}
          height={480}
          className="portfolio-report-grid-card__img"
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
        />
      </div>
      <div className="portfolio-report-grid-card__body">
        <span className="portfolio-report-grid-card__badge">{report.type}</span>
        <p className="portfolio-report-grid-card__count">
          Report {report.reportNumber} of {report.totalReports}
        </p>
        <h6 className="portfolio-report-grid-card__card-title">{report.cardTitle}</h6>
        <p className="portfolio-report-grid-card__subtitle">{report.subtitle}</p>
        <p className="portfolio-report-grid-card__detail">{report.detail}</p>
        <p className="portfolio-report-grid-card__period">{report.period}</p>
      </div>
    </Link>
  )
}

export default PortfolioReportCard
