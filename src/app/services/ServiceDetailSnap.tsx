'use client'

import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import type { ServicePage } from '@/data/site-content'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const DEFAULT_PROCESS_ICONS = [
  'tabler:search',
  'tabler:pencil',
  'tabler:rocket',
  'tabler:chart-line',
  'tabler:trophy',
]

const ServiceDetailSnap = ({ service }: { service: ServicePage }) => {
  const [openFaq, setOpenFaq] = useState(0)

  if (!service.challenge || !service.idealFit || !service.process || !service.faq) {
    return null
  }

  const problemItems = service.challenge.items?.length
    ? service.challenge.items
    : service.challenge.paragraphs ?? []

  return (
    <>
      <section className="section gmp-problem-solution tech-problem-solution snap-problem-solution">
        <Container>
          <Row className="g-4 g-xl-5 align-items-center">
            <Col lg={4}>
              <ScrollReveal animation="fade-up" className="h-100">
                <article className="gmp-problem-card h-100">
                  <SectionHeader
                    align="left"
                    eyebrow={service.challenge.eyebrow}
                    title={service.challenge.title}
                    className="mb-3"
                  />
                  <ul className="snap-problem-list list-unstyled mb-0">
                    {problemItems.map((item) => (
                      <li key={item}>
                        <IconifyIcon icon="tabler:circle-x-filled" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            </Col>
            <Col lg={4} className="text-center">
              <ScrollReveal animation="fade-up" delay={60} hoverable={false}>
                {service.snapCenter ? (
                  <div className="snap-center-card" aria-hidden="true">
                    <p className="snap-center-card__title">{service.snapCenter.title}</p>
                    <ul className="snap-center-card__rows list-unstyled mb-0">
                      {service.snapCenter.rows.map((row) => (
                        <li key={`${row.label}-${row.value}`}>
                          <div className="snap-center-card__row-top">
                            <span className="snap-center-card__label">{row.label}</span>
                            {row.change ? (
                              <span
                                className={
                                  row.trend === 'down'
                                    ? 'snap-center-card__change snap-center-card__change--down'
                                    : 'snap-center-card__change snap-center-card__change--up'
                                }>
                                {row.change}
                              </span>
                            ) : null}
                          </div>
                          <p className="snap-center-card__value">{row.value}</p>
                          <span
                            className={
                              row.trend === 'down'
                                ? 'snap-center-card__spark snap-center-card__spark--down'
                                : 'snap-center-card__spark snap-center-card__spark--up'
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </ScrollReveal>
            </Col>
            <Col lg={4}>
              <ScrollReveal animation="fade-up" delay={100} className="h-100">
                <article className="gmp-solution-card h-100">
                  <SectionHeader
                    align="left"
                    eyebrow={service.idealFit.eyebrow}
                    title={service.idealFit.title}
                    className="mb-3"
                  />
                  <ul className="gmp-solution-card__list list-unstyled mb-0">
                    {service.idealFit.items.map((item) => (
                      <li key={item}>
                        <IconifyIcon icon="tabler:circle-check-filled" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      {service.deliverablesDetailed && service.deliverablesDetailed.length > 0 ? (
        <section className="section gmp-included">
          <Container>
            <ScrollReveal animation="fade-up">
              <SectionHeader
                align="center"
                eyebrow={service.deliverablesEyebrow ?? "What's Included"}
                title={service.deliverablesTitle ?? 'Our Services Include'}
              />
            </ScrollReveal>
            <div className="gmp-included__grid">
              {service.deliverablesDetailed.map((item, idx) => (
                <ScrollReveal key={item.title} animation="fade-up" delay={idx * 40} className="h-100">
                  <article className="gmp-included__card h-100">
                    <span className="gmp-included__icon" aria-hidden="true">
                      <IconifyIcon icon={item.icon ?? 'tabler:circle-check'} />
                    </span>
                    <h3 className="gmp-included__title">{item.title}</h3>
                    <p className="gmp-included__text mb-0">{item.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section gmp-process process-section">
        <div className="process-section__pattern" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={service.process.eyebrow}
              title={service.process.title}
              className="gmp-process__header"
            />
          </ScrollReveal>
          <div className="gmp-process__grid">
            {service.process.steps.map((step, idx) => (
              <ScrollReveal key={step.title} animation="fade-up" delay={idx * 70} className="gmp-process__col">
                <article className="gmp-process__step">
                  {idx < service.process!.steps.length - 1 ? (
                    <span className="gmp-process__connector" aria-hidden="true" />
                  ) : null}
                  <div className="gmp-process__icon-wrap">
                    <span className="gmp-process__num">{step.step}</span>
                    <span className="gmp-process__circle">
                      <IconifyIcon
                        icon={step.icon ?? DEFAULT_PROCESS_ICONS[idx % DEFAULT_PROCESS_ICONS.length]}
                      />
                    </span>
                  </div>
                  <h3 className="gmp-process__title">{step.title}</h3>
                  <p className="gmp-process__text mb-0">{step.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {!service.hideWhyChoose && service.whyChooseItems && service.whyChooseItems.length > 0 ? (
        <section className="section gmp-why">
          <Container>
            <ScrollReveal animation="fade-up">
              <SectionHeader
                align="center"
                eyebrow={service.whyChooseEyebrow ?? 'Why Choose Local SEO Wiser'}
                title={service.whyChooseTitle ?? 'A Team You Can Rely On'}
              />
            </ScrollReveal>
            <div className="gmp-why__grid">
              {service.whyChooseItems.map((item, idx) => (
                <ScrollReveal key={item.title} animation="fade-up" delay={idx * 50} className="gmp-why__item">
                  <article className="gmp-why__card">
                    <div className="gmp-why__head">
                      <span className="gmp-why__icon-wrap" aria-hidden="true">
                        <IconifyIcon icon={item.icon ?? 'tabler:circle-check'} className="gmp-why__icon" />
                      </span>
                      <h3 className="gmp-why__title">{item.title}</h3>
                    </div>
                    <p className="gmp-why__text mb-0">{item.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section faq-modern-section service-detail-faq gmp-faq">
        <Container className="faq-modern-section__inner">
          <div className="faq-modern-header">
            <SectionHeader align="center" eyebrow={service.faq.eyebrow} title={service.faq.title} />
          </div>
          <div className="faq-modern-list">
            {service.faq.items.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div className="faq-modern-item" key={item.question}>
                  <button
                    type="button"
                    className="faq-modern-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}>
                    <span>{item.question}</span>
                    <span className="faq-modern-icon" aria-hidden="true">
                      <IconifyIcon icon={isOpen ? 'tabler:x' : 'tabler:plus'} />
                    </span>
                  </button>
                  <div className={`faq-modern-panel ${isOpen ? 'is-open' : ''}`}>
                    <div className="faq-modern-panel-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {service.closingCta ? (
        <section className="section gmp-closing" id="service-closing-cta">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="gmp-closing__card">
                <div className="gmp-closing__main">
                  <div className="gmp-closing__copy">
                    <span className="gmp-closing__pin gmp-closing__pin--analytics" aria-hidden="true">
                      <IconifyIcon icon={service.closingCta.icon ?? 'tabler:device-desktop-analytics'} />
                    </span>
                    <div>
                      <h2 className="gmp-closing__title">{service.closingCta.title}</h2>
                      {service.closingCta.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)} className="gmp-closing__text">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="gmp-closing__actions">
                    <ButtonLink variant="primary" href={service.closingCta.primaryButton.href}>
                      {service.closingCta.primaryButton.label}
                      <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                    </ButtonLink>
                    {service.closingCta.secondaryButton ? (
                      <ButtonLink variant="outline-primary" href={service.closingCta.secondaryButton.href}>
                        <IconifyIcon icon="tabler:phone" aria-hidden="true" />
                        {service.closingCta.secondaryButton.label}
                      </ButtonLink>
                    ) : null}
                  </div>
                </div>
                {service.closingCta.trustItems && service.closingCta.trustItems.length > 0 ? (
                  <ul className="gmp-closing__trust list-unstyled mb-0">
                    {service.closingCta.trustItems.map((item) => (
                      <li key={item.label}>
                        <IconifyIcon icon={item.icon || 'tabler:circle-check-filled'} aria-hidden="true" />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}
    </>
  )
}

export default ServiceDetailSnap
