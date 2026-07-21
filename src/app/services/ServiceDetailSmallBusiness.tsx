'use client'

import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { ServiceContentBlock, ServiceDeliverableItem, ServicePage } from '@/data/site-content'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState, type CSSProperties } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const DELIVERABLE_ICONS = [
  'tabler:clipboard-check',
  'tabler:map-pin',
  'tabler:link',
  'tabler:layout',
  'tabler:chart-line',
  'tabler:settings',
  'tabler:target',
]

const WHY_HUB_POSITIONS = ['tl', 'tr', 'bl', 'br'] as const

const SmbSectionEyebrow = ({ children }: { children: string }) => (
  <p className="section-eyebrow mb-2 justify-content-center">
    <span className="section-eyebrow-line" aria-hidden="true" />
    {children}
    <span className="section-eyebrow-line" aria-hidden="true" />
  </p>
)

type ServiceDetailImgProps = {
  src: string
  alt: string
  className?: string
  fallbackLabel: string
  width?: number
  height?: number
}

const ServiceDetailImg = ({
  src,
  alt,
  className,
  fallbackLabel,
  width = 630,
  height = 420,
}: ServiceDetailImgProps) => {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="service-detail-img-fallback" role="img" aria-label={alt}>
        {fallbackLabel}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      quality={100}
      unoptimized
      sizes="(max-width: 991px) 100vw, 630px"
      onError={() => setFailed(true)}
    />
  )
}

const ServiceDeliverablesDetailedGrid = ({ items }: { items: ServiceDeliverableItem[] }) => (
  <div className={clsx('services-grid-panel', items.length === 5 && 'services-grid-panel--five')}>
    {items.map((item, index) => (
      <ScrollReveal key={item.title} animation="fade-up" delay={index * 80}>
        <div className="services-grid-item">
          <div className="services-grid-item-head">
            <span className="services-grid-icon">
              <IconifyIcon icon={item.icon ?? DELIVERABLE_ICONS[index % DELIVERABLE_ICONS.length]} />
            </span>
            <h5 className="services-grid-title mb-0">{item.title}</h5>
          </div>
          <p className="services-grid-desc mb-0">{item.description}</p>
        </div>
      </ScrollReveal>
    ))}
  </div>
)

const ServiceCostLedgerSection = ({ block }: { block: ServiceContentBlock }) => {
  const leadParagraph = block.paragraphs?.[0] ?? ''
  const questionsIntro = block.paragraphs?.[1] ?? ''
  const highlightPhrase = block.highlightPhrase ?? ''
  const highlightIndex = highlightPhrase ? leadParagraph.indexOf(highlightPhrase) : -1
  const leadBefore = highlightIndex >= 0 ? leadParagraph.slice(0, highlightIndex) : leadParagraph
  const leadAfter =
    highlightIndex >= 0 ? leadParagraph.slice(highlightIndex + highlightPhrase.length) : ''

  return (
    <section className="section smb-cost-ledger-section">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="smb-cost-ledger-sheet">
            <div className="smb-cost-ledger-card">
              <div className="smb-cost-ledger-card__rule" aria-hidden="true" />
              <h2 className="section-title smb-cost-ledger-card__title mb-4">{block.title}</h2>
              <p className="section-subtitle smb-cost-ledger-card__text">
                {leadBefore}
                {highlightIndex >= 0 ? (
                  <mark className="smb-cost-ledger-card__mark">{highlightPhrase}</mark>
                ) : null}
                {leadAfter}
              </p>
              {questionsIntro ? <p className="section-subtitle smb-cost-ledger-card__text">{questionsIntro}</p> : null}
              {block.questions && block.questions.length > 0 ? (
                <div className="smb-cost-ledger-card__questions">
                  <ul className="smb-cost-ledger-card__questions-list list-unstyled mb-0">
                    {block.questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <p className="section-subtitle smb-cost-ledger-card__text mb-0">
                If the answers are vague, walk away. Your{' '}
                <Link href="/contact" className="smb-cost-ledger-card__link">
                  audit
                </Link>{' '}
                comes with a custom recommendation matched to your actual market, not an upsell script or fixed
                package.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

const ServiceContentBlockSection = ({ block }: { block: ServiceContentBlock }) => {
  const imageFirst = block.imagePosition !== 'right'

  const textCol = (
    <Col lg={block.image ? 6 : 12}>
      <ScrollReveal animation="fade-right">
        <h2 className="section-title mb-3">{block.title}</h2>
        {block.timeline && block.paragraphs && block.paragraphs.length > 0 ? (
          <p className="section-subtitle">{block.paragraphs[0]}</p>
        ) : (
          block.paragraphs?.map((paragraph, idx) => (
            <p
              key={paragraph.slice(0, 40)}
              className={clsx('section-subtitle', idx === block.paragraphs!.length - 1 && 'mb-0')}>
              {paragraph}
            </p>
          ))
        )}
        {block.timeline && block.timeline.length > 0 ? (
          <ul className="service-detail-timeline list-unstyled mb-3">
            {block.timeline.map((item) => (
              <li key={item.period} className="service-detail-timeline__item">
                <strong className="service-detail-timeline__period">{item.period}:</strong>{' '}
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {block.timeline && block.paragraphs && block.paragraphs.length > 1
          ? block.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="section-subtitle mb-0">
                {paragraph}
              </p>
            ))
          : null}
      </ScrollReveal>
    </Col>
  )

  const imageCol = block.image ? (
    <Col lg={6}>
      <ScrollReveal animation="fade-left" delay={80} hoverable={false}>
        <div className="service-detail-section-image">
          <ServiceDetailImg
            src={block.image}
            alt={block.title}
            fallbackLabel={block.title}
            width={block.imageDimensions?.width ?? 630}
            height={block.imageDimensions?.height ?? 420}
            className="service-detail-section-image__img"
          />
        </div>
      </ScrollReveal>
    </Col>
  ) : null

  return (
    <section className={clsx('section', block.bgLight && 'bg-light', 'service-detail-content-block')}>
      <Container className="service-detail-section-inner">
        {block.image ? (
          <Row className="align-items-center g-4 g-lg-5">
            {imageFirst ? (
              <>
                {imageCol}
                {textCol}
              </>
            ) : (
              <>
                {textCol}
                {imageCol}
              </>
            )}
          </Row>
        ) : (
          <Row className="justify-content-center">
            <Col lg={10}>{textCol}</Col>
          </Row>
        )}
      </Container>
    </section>
  )
}

type ServiceDetailSmallBusinessProps = {
  service: ServicePage
}

const ServiceDetailSmallBusiness = ({ service }: ServiceDetailSmallBusinessProps) => {
  const [openFaq, setOpenFaq] = useState(0)

  if (!service.challenge || !service.idealFit || !service.process || !service.faq) {
    return null
  }

  const idealFit = service.idealFit

  return (
    <>
      <section className="section smb-problem-section smb-section-center">
        <Container className="service-detail-section-inner">
          <Row className="justify-content-center">
            <Col lg={10} xl={9} className="text-center">
              <ScrollReveal animation="fade-up">
                {service.challenge.eyebrow ? (
                  <SmbSectionEyebrow>{service.challenge.eyebrow}</SmbSectionEyebrow>
                ) : null}
                <h2 className="section-title mb-3">{service.challenge.title}</h2>
                {service.challenge.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="section-subtitle">
                    {paragraph}
                  </p>
                ))}
                {service.challenge.callout ? (
                  <div className="smb-callout-box">
                    <p className="mb-0">{service.challenge.callout}</p>
                  </div>
                ) : null}
              </ScrollReveal>
            </Col>
          </Row>

          {service.challenge.playbook ? (
            <Row className="justify-content-center smb-playbook-section mt-5 pt-lg-2">
              <Col xs={12} className="text-center">
                <ScrollReveal animation="fade-up">
                  <SmbSectionEyebrow>{service.challenge.playbook.eyebrow}</SmbSectionEyebrow>
                  <p className="section-subtitle smb-playbook-section__intro mb-4">
                    {service.challenge.playbook.title}
                  </p>
                  <div className="smb-playbook-cards">
                    {service.challenge.playbook.cards.map((card, idx) => (
                      <ScrollReveal key={card.title} animation="fade-up" delay={idx * 70}>
                        <article className="smb-playbook-card">
                          <span className="smb-playbook-card__icon" aria-hidden="true">
                            <IconifyIcon icon={card.icon} />
                          </span>
                          <p className="smb-playbook-card__title mb-1">{card.title}</p>
                          <p className="smb-playbook-card__desc mb-0">{card.description}</p>
                        </article>
                      </ScrollReveal>
                    ))}
                  </div>
                  <p className="section-subtitle smb-playbook-closing mb-0">
                    {service.challenge.playbook.closing}
                  </p>
                </ScrollReveal>
              </Col>
            </Row>
          ) : null}
        </Container>
      </section>

      <section className="section service-detail-deliverables">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="section-title mb-3">{service.deliverablesTitle}</h2>
            {service.deliverablesIntro ? (
              <p className="section-subtitle mb-4">{service.deliverablesIntro}</p>
            ) : null}
          </ScrollReveal>
          {service.deliverablesDetailed && service.deliverablesDetailed.length > 0 ? (
            <ServiceDeliverablesDetailedGrid items={service.deliverablesDetailed} />
          ) : null}
        </Container>
      </section>

      <section className="section smb-audience-section smb-section-center">
        <Container className="service-detail-section-inner">
          <Row className="justify-content-center">
            <Col lg={10} xl={9} className="text-center">
              <ScrollReveal animation="fade-up">
                {idealFit.eyebrow ? <SmbSectionEyebrow>{idealFit.eyebrow}</SmbSectionEyebrow> : null}
                <h2 className="section-title mb-3">{idealFit.title}</h2>
                {service.idealFitIntro ? <p className="section-subtitle mb-4">{service.idealFitIntro}</p> : null}
                <ul className="smb-audience-list list-unstyled mb-0">
                  {idealFit.items.map((item, idx) => (
                    <li
                      key={item}
                      className={clsx(
                        'smb-audience-list__item',
                        idx === idealFit.items.length - 1 && 'smb-audience-list__item--last',
                      )}>
                      <ScrollReveal
                        animation="fade-up"
                        delay={idx * 60}
                        className="smb-audience-list__row">
                        <span className="smb-audience-list__icon" aria-hidden="true">
                          <IconifyIcon
                            icon={idealFit.itemIcons?.[idx] ?? 'tabler:circle-check'}
                          />
                        </span>
                        <span className="smb-audience-list__text">{item}</span>
                      </ScrollReveal>
                    </li>
                  ))}
                </ul>
                {service.idealFitClosing ? (
                  <blockquote className="smb-audience-closing mb-0">{service.idealFitClosing}</blockquote>
                ) : null}
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      {service.whyChooseSection ? (
        <section className="section service-detail-challenge-v2 smb-why-section">
          <Container className="service-detail-section-inner">
            <ScrollReveal animation="fade-up">
              <h2 className="section-title mb-3">{service.whyChooseSection.title}</h2>
              {service.whyChooseSection.intro ? (
                <p className="section-subtitle mb-4 mb-lg-5">{service.whyChooseSection.intro}</p>
              ) : null}
            </ScrollReveal>

            <div className="smb-why-hub">
              {service.whyChooseSection.items.slice(0, 4).map((item, idx) => (
                <ScrollReveal
                  key={item.title}
                  animation="fade-up"
                  delay={idx * 70}
                  className={clsx('smb-why-hub__point', `smb-why-hub__point--${WHY_HUB_POSITIONS[idx]}`)}>
                  <p className="smb-why-hub__text mb-0">
                    <strong>{item.title}.</strong> {item.description}
                  </p>
                </ScrollReveal>
              ))}

              {service.whyChooseSection.image ? (
                <ScrollReveal animation="zoom-in" delay={80} hoverable={false} className="smb-why-hub__media">
                  <div className="service-detail-section-image smb-why-hub__image-wrap">
                    <ServiceDetailImg
                      src={service.whyChooseSection.image}
                      alt={service.whyChooseSection.title}
                      fallbackLabel={service.whyChooseSection.title}
                      width={service.whyChooseSection.imageDimensions?.width ?? 630}
                      height={service.whyChooseSection.imageDimensions?.height ?? 420}
                      className="service-detail-section-image__img"
                    />
                  </div>
                </ScrollReveal>
              ) : null}

              {service.whyChooseSection.items[4] ? (
                <ScrollReveal
                  animation="fade-up"
                  delay={350}
                  className="smb-why-hub__point smb-why-hub__point--bottom">
                  <p className="smb-why-hub__text mb-0">
                    <strong>{service.whyChooseSection.items[4].title}.</strong>{' '}
                    {service.whyChooseSection.items[4].description}
                  </p>
                </ScrollReveal>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      <section
        className="section process-section service-detail-process smb-process-section"
        style={
          service.processImage
            ? ({ '--smb-process-bg-image': `url(${service.processImage})` } as CSSProperties)
            : undefined
        }>
        <Container className="service-detail-section-inner position-relative smb-process-section__header">
          <ScrollReveal animation="fade-up">
            <h2 className="section-title mb-4 smb-process-section__title text-center">{service.process.title}</h2>
          </ScrollReveal>
        </Container>
        <Container className="position-relative smb-process-section__cards">
          <div className="process-card-grid process-card-grid-top service-detail-process__grid smb-process-section__grid">
            {service.process.steps.map((step, idx) => (
              <ScrollReveal key={step.step} animation="fade-up" delay={idx * 80} className="process-grid-reveal">
                <article className="process-metric-card smb-process-section__card">
                  <div className="process-metric-card__tags">
                    <span className="process-metric-card__tag process-metric-card__tag--primary">{step.phase}</span>
                  </div>
                  <div className="process-metric-card__head">
                    <span className="process-metric-card__number">{step.step}</span>
                    <div>
                      <h5 className="process-metric-card__title">{step.title}</h5>
                    </div>
                  </div>
                  <hr className="process-metric-card__divider" />
                  <p className="process-metric-card__desc">{step.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {service.contentBlocks?.map((block) =>
        block.layout === 'ledger' ? (
          <ServiceCostLedgerSection key={block.title} block={block} />
        ) : (
          <ServiceContentBlockSection key={block.title} block={block} />
        ),
      )}

      <section className="section faq-modern-section service-detail-faq">
        <div className="faq-modern-section__accent" aria-hidden="true">
          <div className="faq-modern-section__grid" />
        </div>
        <Container className="faq-modern-section__inner">
          <div className="faq-modern-header">
            <SectionHeader eyebrow={service.faq.eyebrow} title={service.faq.title} subtitle={service.faq.subtitle} />
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
        <section className="section home-cta-section home-cta-section--layered" id="service-closing-cta">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="home-cta-section__hero service-closing-cta__hero service-closing-cta__hero--simple">
                <div className="home-cta-section__stipple" aria-hidden="true">
                  <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--1" />
                  <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--2" />
                  <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--3" />
                </div>
                <div className="home-cta-section__layout service-closing-cta__layout service-closing-cta__layout--simple">
                  <div className="home-cta-section__intro text-center mx-auto">
                    <h2 className="home-cta-task__title">{service.closingCta.title}</h2>
                    {service.closingCta.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="home-cta-task__text">
                        {paragraph}
                      </p>
                    ))}
                    <div className="service-closing-cta__actions service-closing-cta__actions--center mt-3">
                      <ButtonLink variant="primary" size="sm" href={service.closingCta.primaryButton.href}>
                        {service.closingCta.primaryButton.label}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}
    </>
  )
}

export default ServiceDetailSmallBusiness
