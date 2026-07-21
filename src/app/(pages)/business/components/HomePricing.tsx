'use client'

import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { homeInvestmentSection } from '@/data/site-content'
import { Container } from 'react-bootstrap'

const HomePricing = () => {
  return (
    <section className="section home-pricing-section bg-light" id="pricing">
      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeader
            eyebrow={homeInvestmentSection.eyebrow}
            title={homeInvestmentSection.title}
            subtitle={homeInvestmentSection.subtitle}
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={100} hoverable={false}>
          <div className="home-investment-panel">
            <p className="home-investment-panel__label">What shapes your quote</p>
            <ul className="home-investment-panel__factors">
              {homeInvestmentSection.factors.map((factor) => (
                <li key={factor}>
                  <IconifyIcon icon="tabler:check" className="home-investment-panel__icon" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
            <div className="home-investment-panel__actions">
              <ButtonLink variant="primary" href={homeInvestmentSection.ctaHref}>
                {homeInvestmentSection.ctaLabel}
              </ButtonLink>
            </div>
            <p className="home-investment-panel__footnote mb-0">{homeInvestmentSection.footnote}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

export default HomePricing
