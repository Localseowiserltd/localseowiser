'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { provenResultsCountries, provenResultsStats } from '@/data/site-content'
import { Col, Container, Row } from 'react-bootstrap'
import StatGlowCard from './StatGlowCard'

const ProvenResults = () => {
  return (
    <section className="section bg-light" id="proven-results">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <ScrollReveal animation="fade-up">
              <SectionHeader
                eyebrow="Proven Results"
                title="Numbers That Prove Our Pittsburgh Local SEO Works"
              >
                <p className="section-subtitle mb-2">
                  We measure success in calls, leads, and revenue, not rankings that do not convert.
                </p>
                <p className="section-subtitle mb-0">
                  Pittsburgh businesses compete in one of the most concentrated local markets in the northeastern US. Neighborhoods
                  like Shadyside, Mt. Lebanon, and the South Side have dense clusters of businesses fighting for the same three map
                  pack spots. Our campaigns are built around that reality, not generic templates.
                </p>
              </SectionHeader>
            </ScrollReveal>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4 g-3">
          <Col lg={8}>
            <ScrollReveal animation="fade-up" delay={120}>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
                  <ul className="p-0 m-0 fs-6 d-flex text-warning list-unstyled">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <li key={i}>
                        <IconifyIcon icon="tabler:star-filled" />
                      </li>
                    ))}
                  </ul>
                  <span className="text-muted fw-medium">4.9/5 satisfaction</span>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {provenResultsCountries.map((country) => (
                    <span key={country} className="badge bg-white border text-muted py-2 px-3 f-14">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </Col>
        </Row>

        <Row className="g-3 g-lg-4 justify-content-center">
          {provenResultsStats.map((stat, idx) => (
            <Col lg={3} md={6} key={idx}>
              <ScrollReveal animation="zoom-in" delay={idx * 90} className="h-100">
                <StatGlowCard
                  trend={stat.trend}
                  end={stat.end}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  label={stat.label}
                  footnote={stat.footnote}
                />
              </ScrollReveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ProvenResults
