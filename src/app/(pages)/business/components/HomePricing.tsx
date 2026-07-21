'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { homeInvestmentSection } from '@/data/site-content'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const HomePricing = () => {
  return (
    <section className="section home-pricing-section" id="pricing">
      <Container>
        <ScrollReveal animation="fade-up" hoverable={false}>
          <div className="home-investment-card">
            <Row className="align-items-center g-4">
              <Col lg={7}>
                <p className="home-investment-card__eyebrow">
                  <IconifyIcon icon="tabler:currency-dollar" aria-hidden="true" />
                  {homeInvestmentSection.eyebrow}
                </p>
                <h2 className="home-investment-card__title">{homeInvestmentSection.title}</h2>
                <p className="home-investment-card__intro">{homeInvestmentSection.subtitle}</p>
                <ul className="home-investment-card__factors list-unstyled mb-0">
                  {homeInvestmentSection.factors.map((factor) => (
                    <li key={factor}>
                      <span className="home-investment-card__check">
                        <IconifyIcon icon="tabler:check" aria-hidden="true" />
                      </span>
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
                <div className="home-investment-card__actions">
                  <Link href={homeInvestmentSection.ctaHref} className="home-investment-card__btn">
                    <IconifyIcon icon="tabler:file-description" aria-hidden="true" />
                    {homeInvestmentSection.ctaLabel}
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </Link>
                  <p className="home-investment-card__footnote mb-0">{homeInvestmentSection.footnote}</p>
                </div>
              </Col>
              <Col lg={5}>
                <div className="home-investment-card__media">
                  <Image
                    src="/investment-proposal.png"
                    alt="Custom proposal clipboard and calculator illustration"
                    width={900}
                    height={700}
                    className="home-investment-card__img"
                    unoptimized
                  />
                </div>
              </Col>
            </Row>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

export default HomePricing
