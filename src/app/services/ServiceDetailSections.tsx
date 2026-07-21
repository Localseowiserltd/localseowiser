'use client'

import { getCaseStudyForService } from '@/data/portfolio'
import challengeImage from '@/assets/images/cha.jpg'
import collageMainImage from '@/assets/images/img1.jpg'
import collageTopImage from '@/assets/images/img2.jpg'
import collageBottomImage from '@/assets/images/img3.jpg'
import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import ServiceHeroParagraphSlider from '@/app/services/ServiceHeroParagraphSlider'
import ServiceDetailGmp from '@/app/services/ServiceDetailGmp'
import ServiceDetailTechnical from '@/app/services/ServiceDetailTechnical'
import ServiceDetailSmallBusiness from '@/app/services/ServiceDetailSmallBusiness'
import ServiceOutcomesTree from '@/app/services/ServiceOutcomesTree'
import ServiceOutcomesFeatures from '@/app/services/ServiceOutcomesFeatures'
import LocalSeoConsultationForm from '@/components/forms/LocalSeoConsultationForm'
import VisibilityScanForm from '@/components/forms/VisibilityScanForm'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { defaultServiceStats } from '@/data/service-page-seo'
import { ServiceDeliverableItem, ServicePage, ServiceStat } from '@/data/site-content'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { RefObject, useState, type CSSProperties } from 'react'
import CountUp from 'react-countup'
import { Col, Container, Row } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'

type ServiceDetailSectionsProps = {
  service: ServicePage
  relatedServices: ServicePage[]
}

const DEFAULT_HERO_BADGES = ['Pittsburgh-based team', 'Lead-focused reporting', 'Nationwide clients']

const splitChallengeFootnote = (footnote: string) => {
  const marker = ', we '
  const index = footnote.indexOf(marker)
  if (index === -1) {
    return { location: footnote, tagline: '' }
  }

  const tagline = footnote.slice(index + 2).trim()
  return {
    location: footnote.slice(0, index),
    tagline: tagline.charAt(0).toUpperCase() + tagline.slice(1),
  }
}

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

const ServiceDetailSectionImage = ({
  src,
  alt,
  fallbackLabel,
  width,
  height,
}: {
  src: string
  alt: string
  fallbackLabel: string
  width: number
  height: number
}) => (
  <div className="service-detail-section-image">
    <ServiceDetailImg
      src={src}
      alt={alt}
      fallbackLabel={fallbackLabel}
      width={width}
      height={height}
      className="service-detail-section-image__img"
    />
  </div>
)

const DELIVERABLE_ICONS = [
  'tabler:clipboard-check',
  'tabler:map-pin',
  'tabler:link',
  'tabler:layout',
  'tabler:chart-line',
  'tabler:settings',
  'tabler:target',
  'tabler:report-analytics',
]

const ServiceDeliverablesGrid = ({ items }: { items: string[] }) => {
  const firstRow = items.slice(0, 3)
  const secondRow = items.slice(3, 5)
  const extraRows = items.slice(5)

  const renderCard = (item: string, idx: number) => (
    <div key={item} className="service-detail-deliverable-card">
      <span className="service-detail-deliverable-card__icon" aria-hidden="true">
        <IconifyIcon icon={DELIVERABLE_ICONS[idx % DELIVERABLE_ICONS.length]} />
      </span>
      <p className="service-detail-deliverable-card__text">{item}</p>
    </div>
  )

  return (
    <div className="service-detail-deliverables-grid">
      {firstRow.length > 0 ? (
        <div className="service-detail-deliverables-grid__row service-detail-deliverables-grid__row--three">
          {firstRow.map((item, idx) => renderCard(item, idx))}
        </div>
      ) : null}
      {secondRow.length > 0 ? (
        <div className="service-detail-deliverables-grid__row service-detail-deliverables-grid__row--two">
          {secondRow.map((item, idx) => renderCard(item, idx + 3))}
        </div>
      ) : null}
      {extraRows.length > 0 ? (
        <div className="service-detail-deliverables-grid__row service-detail-deliverables-grid__row--three">
          {extraRows.map((item, idx) => renderCard(item, idx + 5))}
        </div>
      ) : null}
    </div>
  )
}

const ServiceDeliverablesDetailedGridItem = ({
  item,
  index,
}: {
  item: ServiceDeliverableItem
  index: number
}) => {
  const { ref, className, style } = useScrollReveal({ animation: 'fade-up', delay: index * 80 })

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={clsx('services-grid-item', className)} style={style}>
      <div className="services-grid-item-head">
        <span className="services-grid-icon">
          <IconifyIcon icon={item.icon ?? DELIVERABLE_ICONS[index % DELIVERABLE_ICONS.length]} />
        </span>
        <h5 className="services-grid-title mb-0">{item.title}</h5>
      </div>
      <p className="services-grid-desc mb-0">{item.description}</p>
    </div>
  )
}

const ServiceDeliverablesDetailedGrid = ({ items }: { items: ServiceDeliverableItem[] }) => (
  <div
    className={clsx(
      'services-grid-panel',
      items.length === 5 && 'services-grid-panel--five',
      items.length === 8 && 'services-grid-panel--eight',
      items.length === 10 && 'services-grid-panel--ten',
    )}>
    {items.map((item, index) => (
      <ServiceDeliverablesDetailedGridItem key={item.title} item={item} index={index} />
    ))}
  </div>
)

const ServiceDeliverablesSection = ({
  items,
  detailedItems,
  eyebrow = 'Deliverables',
  title = "What's included",
  intro,
}: {
  items: string[]
  detailedItems?: ServiceDeliverableItem[]
  eyebrow?: string
  title?: string
  intro?: string
}) => (
  <section className="section service-detail-deliverables">
    <Container>
      <ScrollReveal animation="fade-up">
        <SectionHeader align="center" eyebrow={eyebrow} title={title} />
        {intro ? <p className="section-subtitle mb-4">{intro}</p> : null}
      </ScrollReveal>
      {detailedItems && detailedItems.length > 0 ? (
        <ServiceDeliverablesDetailedGrid items={detailedItems} />
      ) : (
        <ScrollReveal animation="fade-up" delay={60}>
          <ServiceDeliverablesGrid items={items} />
        </ScrollReveal>
      )}
    </Container>
  </section>
)

const ServiceStatCounter = ({ stat }: { stat: ServiceStat }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <p ref={ref} className="service-detail-stat-card__value">
      {inView ? (
        <CountUp end={stat.countEnd} duration={2.5} decimals={stat.countDecimals ?? 0} />
      ) : (
        '0'
      )}
      {stat.countSuffix ?? ''}
    </p>
  )
}

const ServiceHeroFormBar = () => (
  <div className="hero-form-card service-detail-hero__form-bar">
    <VisibilityScanForm
      id="visibility-scan-form"
      buttonLabel="Get My Free Visibility Scan"
      layout="horizontal"
      showNote={false}
    />
  </div>
)

const ServiceDetailHero = ({ service }: { service: ServicePage }) => {
  const badges = service.heroBadges ?? DEFAULT_HERO_BADGES
  const stats = service.stats ?? defaultServiceStats
  const showStats = !service.hideStats
  const isCenteredLayout = service.heroLayout === 'centered'
  const isSplitLayout = service.heroLayout === 'split'
  const isShowcaseLayout = service.heroLayout === 'showcase'
  const isGmpLayout = service.heroLayout === 'gmp'
  const isTechnicalLayout = service.heroLayout === 'technical'

  if (isTechnicalLayout) {
    return (
      <section className="service-detail-hero service-detail-hero--technical">
        <div className="service-detail-hero__technical-glow" aria-hidden="true" />
        <Container>
          <Row className="align-items-center g-4 g-xl-4">
            <Col lg={5} xl={5}>
              <ScrollReveal animation="fade-up">
                <p className="section-eyebrow mb-3">{service.category}</p>
                <h1 className="page-hero-header__title service-detail-hero__technical-title">{service.title}</h1>
                {service.description ? (
                  <p className="service-detail-hero__technical-lead">{service.description}</p>
                ) : null}
                {service.heroTrustItems && service.heroTrustItems.length > 0 ? (
                  <ul className="service-detail-hero__technical-trust list-unstyled">
                    {service.heroTrustItems.map((item) => (
                      <li key={item.label}>
                        <IconifyIcon icon={item.icon || 'tabler:circle-check-filled'} aria-hidden="true" />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="service-detail-hero__technical-actions">
                  {service.heroPrimaryCta ? (
                    <ButtonLink variant="primary" href={service.heroPrimaryCta.href}>
                      {service.heroPrimaryCta.label}
                      <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                    </ButtonLink>
                  ) : null}
                  {service.heroSecondaryCta ? (
                    <ButtonLink variant="outline-primary" href={service.heroSecondaryCta.href}>
                      <IconifyIcon icon="tabler:phone" aria-hidden="true" />
                      {service.heroSecondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={3} xl={3} className="text-center">
              <ScrollReveal animation="fade-up" delay={60} hoverable={false}>
                <div className="service-detail-hero__technical-laptop">
                  <Image
                    src={service.heroImage ?? '/tech-seo-hero-laptop-transparent.png'}
                    alt={service.imageAlt ?? 'Technical SEO dashboard'}
                    width={service.heroImageDimensions?.width ?? 1344}
                    height={service.heroImageDimensions?.height ?? 936}
                    className="service-detail-hero__technical-laptop-img"
                    priority
                    unoptimized
                  />
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={4} xl={4}>
              <ScrollReveal animation="fade-up" delay={100} hoverable={false}>
                <LocalSeoConsultationForm
                  id="technical-seo-consultation-form"
                  title="Ready to Improve Your Website's Performance?"
                  subtitle="Get a free consultation and receive a custom technical SEO strategy tailored to your business."
                  buttonLabel="Get My Free Consultation"
                  privacyNote="We respect your privacy. No spam. Ever."
                />
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }

  if (isGmpLayout) {
    const title = service.title
    const accentMatch = title.match(/^(.*?)\b(Local Calls)\b(.*)$/i)
    const titleNode = accentMatch ? (
      <>
        {accentMatch[1]}
        <span className="service-detail-hero__gmp-accent">{accentMatch[2]}</span>
        {accentMatch[3]}
      </>
    ) : (
      title
    )

    return (
      <section className="service-detail-hero service-detail-hero--gmp">
        <div className="service-detail-hero__gmp-glow" aria-hidden="true" />
        <Container>
          <Row className="align-items-center g-4 g-xl-5">
            <Col lg={5} xl={5}>
              <ScrollReveal animation="fade-up">
                <p className="section-eyebrow mb-3">{service.category}</p>
                <h1 className="page-hero-header__title service-detail-hero__gmp-title">{titleNode}</h1>
                {service.description ? <p className="service-detail-hero__gmp-lead">{service.description}</p> : null}
                {service.heroTrustItems && service.heroTrustItems.length > 0 ? (
                  <ul className="service-detail-hero__gmp-trust list-unstyled">
                    {service.heroTrustItems.map((item) => (
                      <li key={item.label}>
                        <IconifyIcon icon={item.icon || 'tabler:circle-check'} aria-hidden="true" />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="service-detail-hero__gmp-actions">
                  {service.heroPrimaryCta ? (
                    <ButtonLink variant="primary" href={service.heroPrimaryCta.href}>
                      {service.heroPrimaryCta.label}
                      <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                    </ButtonLink>
                  ) : null}
                  {service.heroSecondaryCta ? (
                    <ButtonLink variant="outline-primary" href={service.heroSecondaryCta.href}>
                      {service.heroSecondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={3} xl={3} className="text-center">
              <ScrollReveal animation="fade-up" delay={80} hoverable={false}>
                <div className="service-detail-hero__gmp-phone">
                  <Image
                    src={service.heroImage ?? '/gmp-hero-phone.png'}
                    alt={service.imageAlt ?? 'Google Maps on mobile'}
                    width={service.heroImageDimensions?.width ?? 768}
                    height={service.heroImageDimensions?.height ?? 1024}
                    className="service-detail-hero__gmp-phone-img"
                    priority
                    unoptimized
                  />
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={4} xl={4}>
              <ScrollReveal animation="fade-up" delay={120} hoverable={false}>
                <LocalSeoConsultationForm
                  id="gmp-consultation-form"
                  title="Ready to Grow Your Local Visibility?"
                  subtitle="Get a free consultation and receive a custom Google Map optimization strategy."
                  buttonLabel="Get My Free Consultation"
                  privacyNote="We respect your privacy. No spam. Ever."
                />
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }

  if (isShowcaseLayout) {
    const trustItems =
      service.heroTrustItems ??
      (service.heroBadges ?? DEFAULT_HERO_BADGES).map((label) => ({
        label,
        icon: 'tabler:circle-check',
      }))

    const titleParts = service.title.split('Pittsburgh')
    const titleNode =
      titleParts.length === 2 ? (
        <>
          {titleParts[0]}
          <span className="service-detail-hero__showcase-accent">Pittsburgh</span>
          {titleParts[1]}
        </>
      ) : (
        service.title
      )

    return (
      <section className="service-detail-hero service-detail-hero--showcase">
        <div className="service-detail-hero__showcase-glow" aria-hidden="true" />
        <Container>
          <Row className="align-items-center g-4 g-xl-5">
            <Col lg={6} xl={6}>
              <ScrollReveal animation="fade-up">
                <p className="section-eyebrow mb-3">Local SEO Services in Pittsburgh</p>
                <h1 className="page-hero-header__title service-detail-hero__showcase-title">{titleNode}</h1>
                {service.description ? (
                  <p className="service-detail-hero__showcase-lead">{service.description}</p>
                ) : null}
                <ul className="service-detail-hero__showcase-trust list-unstyled">
                  {trustItems.map((item) => (
                    <li key={item.label}>
                      <IconifyIcon icon={item.icon || 'tabler:circle-check'} aria-hidden="true" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-detail-hero__showcase-actions">
                  {service.heroPrimaryCta ? (
                    <ButtonLink
                      variant="primary"
                      href={service.heroPrimaryCta.href}
                      className="service-detail-hero__showcase-cta">
                      {service.heroPrimaryCta.label}
                      <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                    </ButtonLink>
                  ) : null}
                  {service.heroSecondaryCta ? (
                    <ButtonLink
                      variant="light"
                      href={service.heroSecondaryCta.href}
                      className="service-detail-hero__showcase-call">
                      <IconifyIcon icon="tabler:phone" aria-hidden="true" />
                      {service.heroSecondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={6} xl={6}>
              <ScrollReveal animation="fade-up" delay={80} hoverable={false}>
                <div className="lseo-hero-stage">
                  <div className="lseo-hero-stage__skyline">
                    <Image
                      src="/images/locations/north-shore-pittsburgh-local-business-seo.webp"
                      alt=""
                      width={1200}
                      height={800}
                      className="lseo-hero-stage__skyline-img"
                      priority
                      unoptimized
                    />
                  </div>

                  {/* Decorative UI widgets — visual only, not live company metrics */}
                  <div className="lseo-hero-float lseo-hero-float--gbp" aria-hidden="true">
                    <p className="lseo-hero-float__label">Google Business Profile</p>
                    <div className="lseo-hero-float__rating-row">
                      <span className="lseo-hero-float__score">4.9</span>
                      <span className="lseo-hero-float__stars">
                        <IconifyIcon icon="tabler:star-filled" />
                        <IconifyIcon icon="tabler:star-filled" />
                        <IconifyIcon icon="tabler:star-filled" />
                        <IconifyIcon icon="tabler:star-filled" />
                        <IconifyIcon icon="tabler:star-filled" />
                      </span>
                    </div>
                    <p className="lseo-hero-float__meta">1,248 reviews</p>
                    <div className="lseo-hero-float__bars">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="lseo-hero-float lseo-hero-float--search" aria-hidden="true">
                    <p className="lseo-hero-float__label">Total Searches</p>
                    <div className="lseo-hero-float__metric-row">
                      <span className="lseo-hero-float__metric">12.6K</span>
                      <span className="lseo-hero-float__badge">+34%</span>
                    </div>
                    <p className="lseo-hero-float__meta">vs last month</p>
                    <svg className="lseo-hero-float__spark" viewBox="0 0 140 40" fill="none" aria-hidden="true">
                      <path
                        d="M2 32 C16 30 22 18 34 20 C46 22 52 34 64 28 C76 22 84 10 98 12 C112 14 122 8 138 4"
                        stroke="currentColor"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 32 C16 30 22 18 34 20 C46 22 52 34 64 28 C76 22 84 10 98 12 C112 14 122 8 138 4 L138 40 L2 40 Z"
                        fill="url(#lseoSparkFill)"
                        opacity="0.18"
                      />
                      <defs>
                        <linearGradient id="lseoSparkFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="lseo-hero-float lseo-hero-float--map" aria-hidden="true">
                    <div className="lseo-hero-map">
                      <span className="lseo-hero-map__road lseo-hero-map__road--h1" />
                      <span className="lseo-hero-map__road lseo-hero-map__road--h2" />
                      <span className="lseo-hero-map__road lseo-hero-map__road--v1" />
                      <span className="lseo-hero-map__road lseo-hero-map__road--v2" />
                      <span className="lseo-hero-map__block lseo-hero-map__block--a" />
                      <span className="lseo-hero-map__block lseo-hero-map__block--b" />
                      <span className="lseo-hero-map__block lseo-hero-map__block--c" />
                      <span className="lseo-hero-map__pin lseo-hero-map__pin--red" />
                      <span className="lseo-hero-map__pin lseo-hero-map__pin--blue" />
                      <span className="lseo-hero-map__pin lseo-hero-map__pin--orange" />
                      <span className="lseo-hero-map__pin lseo-hero-map__pin--yellow" />
                      <span className="lseo-hero-map__pin lseo-hero-map__pin--teal" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </Col>
          </Row>
          <ScrollReveal animation="fade-up" delay={140} hoverable={false}>
            <ServiceHeroFormBar />
          </ScrollReveal>
        </Container>
      </section>
    )
  }

  if (isSplitLayout) {
    return (
      <section className="bg-home-3 page-hero-header service-detail-hero service-detail-hero--split">
        <div className="hero-bg-dots" aria-hidden="true" />
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={6} className="order-2 order-lg-1">
              <ScrollReveal animation="fade-right">
                <h1 className="page-hero-header__title mb-3">{service.title}</h1>
                {service.heroParagraphs && service.heroParagraphs.length > 0 ? (
                  <p className="page-hero-header__desc service-detail-hero__split-desc mb-0">
                    {service.heroParagraphs[0]}
                  </p>
                ) : service.description ? (
                  <p className="page-hero-header__desc service-detail-hero__split-desc mb-0">{service.description}</p>
                ) : null}
              </ScrollReveal>
            </Col>
            {service.heroImage ? (
              <Col lg={6} className="order-1 order-lg-2">
                <ScrollReveal animation="fade-left" delay={80} hoverable={false}>
                  <div className="service-detail-hero__split-media">
                    <ServiceDetailImg
                      src={service.heroImage}
                      alt={service.imageAlt ?? service.title}
                      fallbackLabel={service.title}
                      width={service.heroImageDimensions?.width ?? 768}
                      height={service.heroImageDimensions?.height ?? 617}
                      className="service-detail-hero__split-media-img"
                    />
                  </div>
                </ScrollReveal>
              </Col>
            ) : null}
          </Row>
          <ScrollReveal animation="fade-up" delay={140} hoverable={false}>
            <ServiceHeroFormBar />
          </ScrollReveal>
        </Container>
      </section>
    )
  }

  if (isCenteredLayout) {
    const hasHeroActions = Boolean(service.heroPrimaryCta || service.heroSecondaryCta)
    const hasHeroTrust = Boolean(
      service.heroTrustItems || (service.heroBadges && !service.heroImage),
    )

    return (
      <section className="bg-home-3 page-hero-header service-detail-hero service-detail-hero--centered service-detail-hero--stacked">
        <div className="hero-bg-dots" aria-hidden="true" />
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={9} className="mx-auto text-center">
              <ScrollReveal animation="fade-up">
                <p className="section-eyebrow mb-2 justify-content-center">
                  <span className="section-eyebrow-line" aria-hidden="true" />
                  {service.category}
                  <span className="section-eyebrow-line" aria-hidden="true" />
                </p>
                <h1 className="page-hero-header__title">{service.title}</h1>
                {service.heroImage ? (
                  <div className="service-detail-hero__media mx-auto">
                    <ServiceDetailImg
                      src={service.heroImage}
                      alt={service.imageAlt ?? service.title}
                      fallbackLabel={service.title}
                      width={service.heroImageDimensions?.width ?? 800}
                      height={service.heroImageDimensions?.height ?? 500}
                      className="service-detail-hero__media-img"
                    />
                  </div>
                ) : null}
                {!service.heroImage && service.description ? (
                  <p className="page-hero-header__desc service-detail-hero__lead">{service.description}</p>
                ) : null}
                {service.heroParagraphs && service.heroParagraphs.length > 0 ? (
                  service.heroParagraphs.length === 1 && !service.heroSecondaryCta ? (
                    <p className="page-hero-header__desc service-detail-hero__body service-detail-hero__body--static mb-0">
                      {service.heroParagraphs[0]}
                    </p>
                  ) : (
                    <ServiceHeroParagraphSlider paragraphs={service.heroParagraphs} />
                  )
                ) : null}
                {hasHeroActions ? (
                <div className="service-detail-hero__actions d-flex flex-wrap gap-3 justify-content-center">
                  {service.heroPrimaryCta ? (
                    <ButtonLink variant="primary" href={service.heroPrimaryCta.href}>
                      {service.heroPrimaryCta.label}
                    </ButtonLink>
                  ) : null}
                  {service.heroSecondaryCta ? (
                    <ButtonLink variant="light" href={service.heroSecondaryCta.href}>
                      {service.heroSecondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
                ) : null}
                {hasHeroTrust ? (
                  <ul className="service-detail-hero__trust list-unstyled mb-0">
                    {(service.heroTrustItems ??
                      (service.heroBadges ?? DEFAULT_HERO_BADGES).map((label) => ({
                        label,
                        icon: 'tabler:circle-check-filled',
                      }))).map((item) => (
                      <li key={item.label} className="service-detail-hero__trust-item">
                        <IconifyIcon icon={item.icon} aria-hidden="true" />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </ScrollReveal>
            </Col>
          </Row>
          <ScrollReveal animation="fade-up" delay={140} hoverable={false}>
            <ServiceHeroFormBar />
          </ScrollReveal>
        </Container>
      </section>
    )
  }

  return (
    <section
      className={`bg-home-3 page-hero-header service-detail-hero ${showStats ? '' : 'service-detail-hero--centered'}`}>
      <div className="hero-bg-dots" aria-hidden="true" />
      <Container>
        <Row className={`align-items-start g-4 ${showStats ? '' : 'justify-content-center'}`}>
          <Col lg={showStats ? 6 : 10} xl={showStats ? 6 : 9} className={showStats ? '' : 'mx-auto text-center'}>
            <ScrollReveal animation="fade-up">
              <p className="section-eyebrow mb-2">
                <span className="section-eyebrow-line" aria-hidden="true" />
                {service.category}
                <span className="section-eyebrow-line" aria-hidden="true" />
              </p>
              <h1 className="page-hero-header__title">{service.title}</h1>
              <p className="page-hero-header__desc service-detail-hero__desc">{service.description}</p>
              {service.heroParagraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="page-hero-header__desc service-detail-hero__desc">
                  {paragraph}
                </p>
              ))}
              <div className="service-detail-hero__badges">
                {badges.map((badge) => (
                  <span key={badge} className="service-detail-hero__badge">
                    <IconifyIcon icon="tabler:circle-check-filled" />
                    {badge}
                  </span>
                ))}
              </div>
              <ButtonLink variant="primary" href="/contact" className="service-detail-hero__cta">
                Contact Us
              </ButtonLink>
            </ScrollReveal>
          </Col>
          {showStats ? (
            <Col lg={6}>
              <ScrollReveal animation="fade-left" delay={80}>
                <div className="service-detail-hero__stats">
                  <div className="service-detail-hero__stats-grid">
                    {stats.map((stat) => (
                      <div key={stat.resultLabel} className="service-detail-stat-card">
                        <span className="service-detail-stat-card__result">{stat.resultLabel}</span>
                        <ServiceStatCounter stat={stat} />
                        <p className="service-detail-stat-card__label">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </Col>
          ) : null}
        </Row>
        <ScrollReveal animation="fade-up" delay={140} hoverable={false}>
          <ServiceHeroFormBar />
        </ScrollReveal>
      </Container>
    </section>
  )
}

const ServiceDetailSimple = ({ service, relatedServices }: ServiceDetailSectionsProps) => (
  <>
    <ServiceDeliverablesSection items={service.deliverables} />

    <section className="section service-detail-section">
      <Container>
        <Row className="g-4 justify-content-center">
          <Col lg={6}>
            <ScrollReveal animation="fade-left" delay={120}>
              <div className="inner-feature-card h-100">
                <h3 className="inner-feature-card__title">Key Benefits</h3>
                <ul className="service-detail-list">
                  {service.benefits.map((item) => (
                    <li key={item}>
                      <IconifyIcon icon="tabler:arrow-right" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section bg-light service-related-section">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="section-title mb-4">Related Services</h2>
        </ScrollReveal>
        <Row className="g-3 g-lg-4">
          {relatedServices.map((related, idx) => (
            <Col lg={4} md={6} key={related.slug}>
              <ScrollReveal animation="zoom-in" delay={idx * 70} className="h-100">
                <div className="inner-service-card h-100">
                  <span className="inner-service-card__number">{String(idx + 1).padStart(2, '0')}</span>
                  <h5 className="inner-service-card__title">{related.title}</h5>
                  <p className="inner-service-card__desc">{related.description}</p>
                  <Link href={`/${related.slug}`} className="inner-service-card__link">
                    Explore service
                    <IconifyIcon icon="tabler:arrow-right" className="ms-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </>
)

const ServiceDetailFull = ({ service }: { service: ServicePage }) => {
  const [openFaq, setOpenFaq] = useState(0)
  const isLocalSeo = service.slug === 'local-seo'

  if (!service.challenge || !service.idealFit || !service.outcomes || !service.process || !service.faq) {
    return null
  }

  const challengeImageSrc = service.challengeImage ?? challengeImage.src
  const showSplitOutcomes = service.splitOutcomes === true

  return (
    <>
      <section className="section service-detail-challenge-v2">
        <Container className="service-detail-section-inner">
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={6} className="order-1">
              <ScrollReveal animation="fade-right">
                <SectionHeader
                  align="left"
                  eyebrow={service.challenge.eyebrow}
                  title={service.challenge.title}
                  className="mb-3"
                />
                {service.challenge.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="section-subtitle">
                    {paragraph}
                  </p>
                ))}
                {service.challenge.text ? <p className="section-subtitle mb-0">{service.challenge.text}</p> : null}
                {service.challenge.footnote
                  ? (() => {
                      const { location, tagline } = splitChallengeFootnote(service.challenge.footnote)
                      return (
                        <>
                          <span className="service-detail-location-badge">
                            <IconifyIcon icon="tabler:map-pin" aria-hidden="true" />
                            {location}
                          </span>
                          {tagline ? (
                            <p className="section-subtitle service-detail-challenge-v2__tagline mb-0">{tagline}</p>
                          ) : null}
                        </>
                      )
                    })()
                  : null}
              </ScrollReveal>
            </Col>
            <Col lg={6} className="order-2">
              <ScrollReveal animation="fade-left" delay={80} hoverable={false}>
                <ServiceDetailSectionImage
                  src={challengeImageSrc}
                  alt={service.challenge.title}
                  fallbackLabel={service.challenge.title}
                  width={service.challengeImageDimensions?.width ?? 630}
                  height={service.challengeImageDimensions?.height ?? 420}
                />
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      {showSplitOutcomes ? (
        <>
          <section className="section service-detail-ideal-fit">
            <Container className="service-detail-section-inner">
              <Row className="align-items-center g-4 g-lg-5">
                {service.idealFitImage ? (
                  <Col lg={6} className="order-1 order-lg-1 service-detail-ideal-fit__media-col">
                    <ScrollReveal animation="fade-right" hoverable={false}>
                      <div className="service-detail-ideal-fit__media">
                        <ServiceDetailImg
                          src={service.idealFitImage}
                          alt={service.idealFit.title}
                          fallbackLabel={service.idealFit.title}
                          width={service.idealFitImageDimensions?.width ?? 630}
                          height={service.idealFitImageDimensions?.height ?? 420}
                          className="service-detail-ideal-fit__img"
                        />
                      </div>
                    </ScrollReveal>
                  </Col>
                ) : (
                  <Col lg={6} className="order-1 order-lg-1 service-detail-ideal-fit__media-col">
                    <ScrollReveal animation="fade-right" hoverable={false}>
                      <div className="service-detail-collage">
                        <div className="service-detail-collage__main">
                          <ServiceDetailImg
                            src={collageMainImage.src}
                            alt="Local business team"
                            fallbackLabel="Local business team"
                          />
                        </div>
                        <div className="service-detail-collage__top">
                          <ServiceDetailImg
                            src={collageTopImage.src}
                            alt="Service area map"
                            fallbackLabel="Service area map"
                          />
                        </div>
                        <div className="service-detail-collage__bottom">
                          <ServiceDetailImg
                            src={collageBottomImage.src}
                            alt="Marketing results dashboard"
                            fallbackLabel="Marketing results dashboard"
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  </Col>
                )}

                <Col lg={6} className="order-2 order-lg-2 service-detail-ideal-fit__content-col">
                  <ScrollReveal animation="fade-left" delay={80} hoverable={false}>
                    <p className="section-eyebrow mb-2">
                      <span className="section-eyebrow-line" aria-hidden="true" />
                      {service.idealFit.eyebrow}
                      <span className="section-eyebrow-line" aria-hidden="true" />
                    </p>
                    <h3 className="inner-feature-card__title">{service.idealFit.title}</h3>
                    <ul className="service-detail-list">
                      {service.idealFit.items.map((item) => (
                        <li key={item}>
                          <IconifyIcon icon="tabler:check" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {service.idealFitClosing ? (
                      <p className="section-subtitle mb-0 mt-3">{service.idealFitClosing}</p>
                    ) : null}
                  </ScrollReveal>
                </Col>
              </Row>
            </Container>
          </section>

          {service.outcomes.layout === 'features' && service.outcomes.cards ? (
            <ServiceOutcomesFeatures
              eyebrow={service.outcomes.eyebrow}
              title={service.outcomes.title}
              intro={service.outcomes.intro}
              cards={service.outcomes.cards}
            />
          ) : (
            <ServiceOutcomesTree
              eyebrow={service.outcomes.eyebrow}
              title={service.outcomes.title}
              paragraphs={service.outcomes.paragraphs}
              cards={service.outcomes.cards}
            />
          )}
        </>
      ) : (
        <section className="section bg-light service-detail-fit-outcomes-v2">
          <Container className="service-detail-section-inner">
            <Row className="align-items-center g-4 g-lg-5">
              <Col lg={6} className="order-1 order-lg-1">
                <ScrollReveal animation="fade-right">
                  {service.idealFitImage ? (
                    <ServiceDetailSectionImage
                      src={service.idealFitImage}
                      alt={service.idealFit.title}
                      fallbackLabel={service.idealFit.title}
                      width={service.idealFitImageDimensions?.width ?? 630}
                      height={service.idealFitImageDimensions?.height ?? 420}
                    />
                  ) : (
                    <div className="service-detail-collage">
                      <div className="service-detail-collage__main">
                        <ServiceDetailImg
                          src={collageMainImage.src}
                          alt="Local business team"
                          fallbackLabel="Local business team"
                        />
                      </div>
                      <div className="service-detail-collage__top">
                        <ServiceDetailImg
                          src={collageTopImage.src}
                          alt="Service area map"
                          fallbackLabel="Service area map"
                        />
                      </div>
                      <div className="service-detail-collage__bottom">
                        <ServiceDetailImg
                          src={collageBottomImage.src}
                          alt="SEO results dashboard"
                          fallbackLabel="SEO results dashboard"
                        />
                      </div>
                    </div>
                  )}
                </ScrollReveal>
              </Col>
              <Col lg={6} className="order-2 order-lg-2">
                <ScrollReveal animation="fade-left" delay={80}>
                  <div className="service-detail-fit-outcomes-v2__content">
                    <div className="service-detail-fit-outcomes-v2__block">
                      <p className="section-eyebrow mb-2">
                        <span className="section-eyebrow-line" aria-hidden="true" />
                        {service.idealFit.eyebrow}
                        <span className="section-eyebrow-line" aria-hidden="true" />
                      </p>
                      <h3 className="inner-feature-card__title">{service.idealFit.title}</h3>
                      <ul className="service-detail-list">
                        {service.idealFit.items.map((item) => (
                          <li key={item}>
                            <IconifyIcon icon="tabler:check" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <hr className="service-detail-fit-outcomes-v2__divider" />

                    <div className="service-detail-fit-outcomes-v2__block">
                      <p className="section-eyebrow mb-2">
                        <span className="section-eyebrow-line" aria-hidden="true" />
                        {service.outcomes.eyebrow}
                        <span className="section-eyebrow-line" aria-hidden="true" />
                      </p>
                      <h3 className="inner-feature-card__title">{service.outcomes.title}</h3>
                      {service.outcomes.intro ? (
                        <p className="section-subtitle mb-3">{service.outcomes.intro}</p>
                      ) : null}
                      <ul className="service-detail-list">
                        {service.outcomes.items.map((item) => (
                          <li key={item}>
                            <IconifyIcon icon="tabler:arrow-right" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ButtonLink variant="primary" href="/contact" className="service-detail-fit-outcomes-v2__cta">
                        Get a free audit
                      </ButtonLink>
                      {(() => {
                        const caseStudy = getCaseStudyForService(`/${service.slug}`)
                        if (!caseStudy) return null
                        return (
                          <p className="mt-3 mb-0">
                            <Link href={`/portfolio/${caseStudy.slug}`}>
                              See the {caseStudy.clientName} case study
                            </Link>
                          </p>
                        )
                      })()}
                    </div>
                  </div>
                </ScrollReveal>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <ServiceDeliverablesSection
        items={service.deliverables}
        detailedItems={service.deliverablesDetailed}
        eyebrow={service.deliverablesEyebrow}
        title={service.deliverablesTitle}
        intro={service.deliverablesIntro}
      />

      <section
        className={clsx(
          'section process-section service-detail-process',
          service.process.align === 'center' && 'service-detail-process--centered',
        )}>
        <div className="process-section__pattern" aria-hidden="true" />
        <Container className="position-relative">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              theme="dark"
              align={service.process.align ?? 'left'}
              eyebrow={service.process.eyebrow}
              title={service.process.title}
              subtitle={service.process.subtitle}
              className={service.process.align === 'center' ? 'service-detail-process__header' : undefined}
            />
          </ScrollReveal>
          <div
            className="service-detail-process__timeline"
            style={{ '--process-step-count': service.process.steps.length } as CSSProperties}>
            <div className="service-detail-process__timeline-track" aria-hidden="true">
              <span className="service-detail-process__timeline-line" />
              {service.process.steps.map((step) => (
                <span key={step.step} className="service-detail-process__timeline-node" />
              ))}
            </div>
            <div className="process-card-grid process-card-grid-top service-detail-process__grid">
              {service.process.steps.map((step, idx) => {
                const stepParagraphs =
                  step.paragraphs && step.paragraphs.length > 0
                    ? step.paragraphs
                    : step.description
                      ? [step.description]
                      : []

                return (
                  <ScrollReveal key={step.step} animation="fade-up" delay={idx * 80} className="process-grid-reveal">
                    <article className="process-metric-card service-detail-process__card">
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
                      <div className="service-detail-process__card-body">
                        {stepParagraphs.map((paragraph) => (
                          <p key={paragraph.slice(0, 48)} className="process-metric-card__desc">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </article>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {!service.hideWhyChoose &&
      ((service.whyChooseItems && service.whyChooseItems.length > 0) ||
        (service.whyChoose && service.whyChoose.length > 0)) ? (
        <section className="section bg-light service-detail-why-section">
          <Container>
            <ScrollReveal animation="fade-up">
              <SectionHeader
                align={isLocalSeo ? 'center' : 'left'}
                eyebrow={service.whyChooseEyebrow ?? (isLocalSeo ? 'Why Local SEO Wiser' : 'Why choose us')}
                title={service.whyChooseTitle ?? 'Why choose Local SEO Wiser'}
                subtitle={service.whyChooseIntro}
              />
            </ScrollReveal>
            {service.whyChooseItems && service.whyChooseItems.length > 0 ? (
              isLocalSeo ? (
                <div className="lseo-why-grid">
                  {service.whyChooseItems.map((item, idx) => (
                    <ScrollReveal
                      key={item.title}
                      animation="fade-up"
                      delay={idx * 50}
                      className="lseo-why-grid__item">
                      <article className="lseo-why-card">
                        <div className="lseo-why-card__head">
                          <span className="lseo-why-card__icon-wrap" aria-hidden="true">
                            <IconifyIcon icon={item.icon ?? 'tabler:circle-check'} className="lseo-why-card__icon" />
                          </span>
                          <h3 className="lseo-why-card__title">{item.title}</h3>
                        </div>
                        <p className="lseo-why-card__text">{item.description}</p>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
              <Row className="g-3 g-lg-4 service-detail-why-section__grid">
                {service.whyChooseItems.map((item, idx) => (
                  <Col lg={4} md={6} key={item.title}>
                    <ScrollReveal animation="fade-up" delay={idx * 60} className="service-detail-why-section__reveal">
                      <article className="service-detail-why-card service-detail-why-card--featured">
                        <span className="service-detail-why-card__icon-wrap" aria-hidden="true">
                          <IconifyIcon
                            icon={item.icon ?? 'tabler:circle-check'}
                            className="service-detail-why-card__icon"
                          />
                        </span>
                        <h3 className="service-detail-why-card__title">{item.title}</h3>
                        <p className="service-detail-why-card__text">{item.description}</p>
                      </article>
                    </ScrollReveal>
                  </Col>
                ))}
              </Row>
              )
            ) : (
              <Row className="g-3 justify-content-center">
                {service.whyChoose!.map((item, idx) => {
                  const isLastOdd = service.whyChoose!.length % 2 !== 0 && idx === service.whyChoose!.length - 1

                  return (
                    <Col lg={6} key={item} className={isLastOdd ? 'offset-lg-3' : undefined}>
                      <ScrollReveal animation="fade-up" delay={idx * 60}>
                        <div className="service-detail-why-card">
                          <IconifyIcon icon="tabler:circle-check-filled" className="service-detail-why-card__icon" />
                          <p>{item}</p>
                        </div>
                      </ScrollReveal>
                    </Col>
                  )
                })}
              </Row>
            )}
          </Container>
        </section>
      ) : null}

      {service.investment && isLocalSeo ? (
        <section className="section service-investment-section service-investment-section--local" id="investment">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="service-investment-panel service-investment-panel--wide">
                <SectionHeader
                  align="center"
                  eyebrow={service.investment.eyebrow}
                  title={service.investment.title}
                  subtitle={service.investment.paragraphs[0]}
                />
                {service.investment.paragraphs.slice(1, 2).map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="service-investment-panel__text">
                    {paragraph}
                  </p>
                ))}
                {service.investment.factors && service.investment.factors.length > 0 ? (
                  <ul className="service-investment-panel__factors service-investment-panel__factors--grid">
                    {service.investment.factors.map((factor) => (
                      <li key={factor}>
                        <IconifyIcon icon="tabler:check" className="service-investment-panel__icon" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {service.investment.paragraphs.slice(2).map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="service-investment-panel__text">
                    {paragraph}
                  </p>
                ))}
                <div className="service-investment-panel__actions">
                  <ButtonLink variant="primary" href={service.investment.cta.href}>
                    {service.investment.cta.label}
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ) : service.investment ? (
        <section className="section service-investment-section bg-light" id="investment">
          <Container>
            <ScrollReveal animation="fade-up">
              <SectionHeader
                eyebrow={service.investment.eyebrow}
                title={service.investment.title}
                subtitle={service.investment.paragraphs[0]}
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-in" delay={80} hoverable={false}>
              <div className="service-investment-panel">
                {service.investment.paragraphs.slice(1).map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="service-investment-panel__text">
                    {paragraph}
                  </p>
                ))}
                {service.investment.factors && service.investment.factors.length > 0 ? (
                  <>
                    <p className="service-investment-panel__label">What shapes your quote</p>
                    <ul className="service-investment-panel__factors">
                      {service.investment.factors.map((factor) => (
                        <li key={factor}>
                          <IconifyIcon icon="tabler:check" className="service-investment-panel__icon" />
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                <div className="service-investment-panel__actions">
                  <ButtonLink variant="primary" href={service.investment.cta.href}>
                    {service.investment.cta.label}
                  </ButtonLink>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}

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

      {service.closingCta && isLocalSeo ? (
        <section className="section service-closing-final" id="service-closing-cta">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="service-closing-final__card">
                <div className="service-closing-final__copy">
                  <h2 className="service-closing-final__title">{service.closingCta.title}</h2>
                  {service.closingCta.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="service-closing-final__text">
                      {paragraph}
                    </p>
                  ))}
                  {service.closingCta.trustItems && service.closingCta.trustItems.length > 0 ? (
                    <ul className="service-closing-final__trust list-unstyled">
                      {service.closingCta.trustItems.map((item) => (
                        <li key={item.label}>
                          <IconifyIcon icon={item.icon || 'tabler:circle-check'} aria-hidden="true" />
                          <span>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className="service-closing-final__actions">
                  <ButtonLink variant="primary" href={service.closingCta.primaryButton.href} className="service-closing-final__btn">
                    {service.closingCta.primaryButton.label}
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </ButtonLink>
                  {service.closingCta.secondaryButton ? (
                    <a href={service.closingCta.secondaryButton.href} className="service-closing-final__phone">
                      <IconifyIcon icon="tabler:phone" aria-hidden="true" />
                      {service.closingCta.secondaryButton.label}
                    </a>
                  ) : null}
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ) : service.closingCta && !isLocalSeo ? (
        <section className="section home-cta-section home-cta-section--layered" id="service-closing-cta">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="home-cta-section__hero service-closing-cta__hero">
                <div className="home-cta-section__stipple" aria-hidden="true">
                  <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--1" />
                  <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--2" />
                  <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--3" />
                </div>
                <div className="home-cta-section__layout service-closing-cta__layout">
                  <div className="home-cta-section__intro">
                    <h2 className="home-cta-task__title">{service.closingCta.title}</h2>
                    {service.closingCta.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="home-cta-task__text">
                        {paragraph}
                      </p>
                    ))}
                    {service.closingCta.bullets && service.closingCta.bullets.length > 0 ? (
                      <ul className="service-detail-list service-detail-list--cta mb-0">
                        {service.closingCta.bullets.map((item) => (
                          <li key={item}>
                            <IconifyIcon icon="tabler:check" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  {service.closingCta.pickLabel && service.closingCta.secondaryButton ? (
                  <aside className="service-closing-cta__pick">
                    <p className="service-closing-cta__pick-label">{service.closingCta.pickLabel}</p>
                    <ul className="service-closing-cta__move-list">
                      {service.closingCta.primaryButton.description ? (
                        <li>{service.closingCta.primaryButton.description}</li>
                      ) : null}
                      {service.closingCta.secondaryButton.description ? (
                        <li>{service.closingCta.secondaryButton.description}</li>
                      ) : null}
                    </ul>
                    <div className="service-closing-cta__actions">
                      <ButtonLink variant="primary" size="sm" href={service.closingCta.primaryButton.href}>
                        {service.closingCta.primaryButton.label}
                      </ButtonLink>
                      <ButtonLink variant="light" size="sm" href={service.closingCta.secondaryButton.href}>
                        {service.closingCta.secondaryButton.label}
                      </ButtonLink>
                    </div>
                  </aside>
                  ) : null}
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ) : service.exploreCta && !isLocalSeo ? (
        <section className="home-cta-section" id="service-explore-cta">
          <Container>
            <ScrollReveal animation="fade-up">
              <article className="home-cta-task home-cta-task--main services-page-cta">
                <div className="home-cta-task__layout services-page-cta__layout">
                  <div className="home-cta-task__main">
                    <h3 className="home-cta-task__title">Explore more services</h3>
                    <p className="home-cta-task__text mb-0">{service.exploreCta.text}</p>
                  </div>
                  <aside className="home-cta-task home-cta-task--pick services-page-cta__aside">
                    <div className="home-cta-task__footer">
                      <div className="home-cta-task__actions">
                        <ButtonLink variant="primary" size="sm" href={service.exploreCta.buttonHref}>
                          {service.exploreCta.buttonLabel}
                        </ButtonLink>
                      </div>
                    </div>
                  </aside>
                </div>
              </article>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}
    </>
  )
}

const ServiceDetailSections = ({ service, relatedServices }: ServiceDetailSectionsProps) => (
  <div
    className={clsx(
      'service-detail-page',
      service.pageLayout === 'small-business' && 'service-detail-page--smb',
      service.slug === 'local-seo' && 'service-detail-page--local-seo',
      service.slug === 'google-map-optimization' && 'service-detail-page--gmp',
      service.slug === 'technical-seo' && 'service-detail-page--technical',
    )}>
    <ServiceDetailHero service={service} />
    {service.variant === 'full' ? (
      service.slug === 'google-map-optimization' ? (
        <ServiceDetailGmp service={service} />
      ) : service.slug === 'technical-seo' ? (
        <ServiceDetailTechnical service={service} />
      ) : service.pageLayout === 'small-business' ? (
        <ServiceDetailSmallBusiness service={service} />
      ) : (
        <ServiceDetailFull service={service} />
      )
    ) : (
      <ServiceDetailSimple service={service} relatedServices={relatedServices} />
    )}
  </div>
)

export default ServiceDetailSections
