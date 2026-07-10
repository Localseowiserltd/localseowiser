'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import {
  portfolioCaseStudy,
  portfolioReportFilters,
  PortfolioReportFilter,
  portfolioReportsDetailed,
} from '@/data/portfolio-reports'
import { portfolioProjects } from '@/data/site-content'
import { Col, Container, Row } from 'react-bootstrap'
import PortfolioProjectCard from './PortfolioProjectCard'
import PortfolioReportCard from './PortfolioReportCard'

const PortfolioPageSections = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioReportFilter>('all')

  const filteredReports =
    activeFilter === 'all'
      ? portfolioReportsDetailed
      : portfolioReportsDetailed.filter((report) => report.filter === activeFilter)

  return (
    <>
      <section className="section portfolio-content-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="left"
              eyebrow={portfolioCaseStudy.client}
              title={portfolioCaseStudy.sectionTitle}
              subtitle={`${portfolioCaseStudy.location} · ${portfolioCaseStudy.summary}`}
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={80}>
            <div className="portfolio-report-filters" role="tablist" aria-label="Filter performance reports">
              {portfolioReportFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter.id}
                  className={`portfolio-report-filters__btn${activeFilter === filter.id ? ' is-active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <Row className="g-3 g-lg-4 mb-0 portfolio-reports-grid">
            {filteredReports.map((report, idx) => (
              <Col lg={4} md={6} key={report.slug}>
                <ScrollReveal animation="zoom-in" delay={idx * 70} className="h-100">
                  <div className="package-card-border h-100">
                    <PortfolioReportCard report={report} />
                  </div>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section portfolio-projects-section">
        <Container className="portfolio-projects-section__container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow="Our Projects"
              title="Client websites we have built & optimized"
              subtitle="This section is separate from the GSC portfolio above. Browse live client websites from our Pittsburgh, Pennsylvania team. Each card links directly to the live site."
            />
          </ScrollReveal>
          <div className="portfolio-projects-grid">
            {portfolioProjects.map((project, idx) => (
              <ScrollReveal key={project.domain} animation="fade-up" delay={80 + idx * 70} className="portfolio-projects-grid__item">
                <PortfolioProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default PortfolioPageSections
