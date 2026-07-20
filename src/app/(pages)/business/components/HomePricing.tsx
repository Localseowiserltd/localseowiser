'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import { homePricingPlans } from '@/data/site-content'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

const HomePricing = () => {
  return (
    <section className="section home-pricing-section bg-light" id="pricing">
      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeader
            eyebrow="Pricing"
            title='Transparent pricing without the "call us for a quote" wall'
            subtitle="Most Pittsburgh agencies hide their pricing. We don't. Here's roughly where you'll land:"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={100} hoverable={false}>
          <div className="home-pricing-cards">
            {homePricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`home-pricing-card home-pricing-card--${plan.variant}${plan.featured ? ' home-pricing-card--featured' : ''}`}
              >
                <div className="home-pricing-card__top">
                  <span className="home-pricing-card__label">{plan.name}</span>
                  <p className="home-pricing-card__price mb-0">
                    {plan.priceRange}
                    <span className="home-pricing-card__period"> / month</span>
                  </p>
                </div>
                <div className="home-pricing-card__body">
                  <span className="home-pricing-card__best-for">Best for</span>
                  <p className="home-pricing-card__desc mb-0">{plan.bestFor}</p>
                  <span className="home-pricing-card__includes-label">Includes</span>
                  <ul className="home-pricing-card__includes">
                    {plan.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={140}>
          <p className="home-pricing-footnote text-center mb-0">
            Adjust ranges to your real pricing. Market reference: budget/foundational packages typically run
            $150–$300/mo, managed SMB plans $750–$2,500/mo, and comprehensive campaigns $1,500–$5,000/mo. Pricing
            depends on your industry&apos;s competition and goals.{' '}
            <Link href="/contact" className="text-primary fw-semibold">
              book a call
            </Link>{' '}
            for an exact quote.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  )
}

export default HomePricing
