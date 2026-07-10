'use client'

import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  getAdjacentPortfolioReports,
  getRelatedPortfolioReports,
  PortfolioReport,
} from '@/data/portfolio-reports'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import PortfolioReportCard from './PortfolioReportCard'

type PortfolioReportDetailSectionsProps = {
  report: PortfolioReport
}

const PortfolioReportDetailSections = ({ report }: PortfolioReportDetailSectionsProps) => {
  const { previous, next } = getAdjacentPortfolioReports(report.slug)
  const relatedReports = getRelatedPortfolioReports(report.slug)

  return (
    <>
      <article className="section portfolio-report-detail-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="portfolio-report-detail">
              <Link href="/portfolio" className="portfolio-report-detail__back">
                <IconifyIcon icon="tabler:arrow-left" />
                Back to portfolio
              </Link>

              <p className="portfolio-report-detail__card-title">{report.cardTitle}</p>
              <span className="portfolio-report-detail__category">{report.category}</span>
              <p className="portfolio-report-detail__count">
                Report {report.reportNumber} of {report.totalReports}
              </p>
              <h1 className="portfolio-report-detail__title">{report.title}</h1>
              <p className="portfolio-report-detail__subtitle">{report.subtitle}</p>
              <p className="portfolio-report-detail__period">{report.period}</p>
              <p className="portfolio-report-detail__location">{report.location}</p>

              <img src={report.image} alt={report.title} className="portfolio-report-detail__img" />

              <div className="portfolio-report-detail__metric">
                <p className="portfolio-report-detail__metric-label">Key metric</p>
                <p className="portfolio-report-detail__metric-value">{report.keyMetric}</p>
                <p className="portfolio-report-detail__insight">{report.insight}</p>
              </div>

              <div className="portfolio-report-detail__nav">
                {previous ? (
                  <Link href={`/portfolio/reports/${previous.slug}`} className="portfolio-report-detail__nav-link">
                    <IconifyIcon icon="tabler:arrow-left" />
                    Previous report
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link href={`/portfolio/reports/${next.slug}`} className="portfolio-report-detail__nav-link">
                    Next report
                    <IconifyIcon icon="tabler:arrow-right" />
                  </Link>
                ) : null}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </article>

      {relatedReports.length > 0 && (
        <section className="section bg-light portfolio-related-section">
          <Container>
            <ScrollReveal animation="fade-up">
              <h3 className="portfolio-related-section__title">Related Reports</h3>
            </ScrollReveal>
            <Row className="g-3 g-lg-4">
              {relatedReports.map((relatedReport, idx) => (
                <Col lg={6} key={relatedReport.slug}>
                  <ScrollReveal animation="zoom-in" delay={idx * 80} className="h-100">
                    <div className="package-card-border h-100">
                      <PortfolioReportCard report={relatedReport} />
                    </div>
                  </ScrollReveal>
                </Col>
              ))}
            </Row>
            <ScrollReveal animation="fade-up" delay={120}>
              <div className="portfolio-related-section__back">
                <ButtonLink variant="outline-primary" href="/portfolio">
                  Back to portfolio
                </ButtonLink>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      )}
    </>
  )
}

export default PortfolioReportDetailSections
