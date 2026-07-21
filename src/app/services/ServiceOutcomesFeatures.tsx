'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { ServiceOutcomeCard } from '@/data/site-content'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

type ServiceOutcomesFeaturesProps = {
  eyebrow: string
  title: string
  intro?: string
  cards: ServiceOutcomeCard[]
}

const ServiceOutcomesFeatures = ({ eyebrow, title, intro, cards }: ServiceOutcomesFeaturesProps) => (
  <section className="section service-outcomes-features">
    <div className="service-outcomes-features__grid-bg" aria-hidden="true" />
    <Container className="service-outcomes-features__inner service-detail-section-inner">
      <ScrollReveal animation="fade-up" hoverable={false}>
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={intro} align="center" className="mb-4 mb-lg-5" />

        <div className="service-outcomes-features__grid" role="list">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} animation="fade-up" delay={index * 80} className="service-outcomes-features__reveal">
              <article className="service-outcomes-features__card" role="listitem">
                <span className="service-outcomes-features__icon-wrap" aria-hidden="true">
                  <IconifyIcon icon={card.icon ?? 'tabler:circle-check'} className="service-outcomes-features__icon" />
                </span>

                <h3 className="service-outcomes-features__card-title">{card.title}</h3>

                <div className="service-outcomes-features__card-body">
                  {card.paragraphs?.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="service-outcomes-features__card-text">
                      {paragraph}
                    </p>
                  ))}
                  {card.bullets && card.bullets.length > 0 ? (
                    <ul className="service-outcomes-features__card-list">
                      {card.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                {card.takeaway && !(card.ctaLabel && card.ctaHref) ? (
                  <div className="service-outcomes-features__takeaway">
                    <IconifyIcon icon="tabler:check" className="service-outcomes-features__takeaway-icon" aria-hidden="true" />
                    <span>{card.takeaway}</span>
                  </div>
                ) : null}

                {card.ctaLabel && card.ctaHref ? (
                  <Link href={card.ctaHref} className="service-outcomes-features__cta">
                    {card.ctaLabel}
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </Link>
                ) : null}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </Container>
  </section>
)

export default ServiceOutcomesFeatures
