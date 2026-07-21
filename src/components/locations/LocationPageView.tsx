'use client'

import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import clients1 from '@/assets/images/clients/1.png'
import clients2 from '@/assets/images/clients/2.png'
import clients3 from '@/assets/images/clients/3.png'
import clients4 from '@/assets/images/clients/4.png'
import Image from 'next/image'
import Link from 'next/link'
import { useId, useState, type CSSProperties } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import type {
  LocationInternalLink,
  LocationMedia,
  LocationPage,
  LocationSection,
} from '@/types/location'
import LocationDevBanner, { LocationEmptyNotice } from './LocationDevBanner'

const WHY_CHOOSE_ID = 'why-choose-localseowiser'
const SERVICES_OVERVIEW_ID = 'our-local-seo-services'
const CHALLENGES_ID = 'common-local-seo-challenges'
const WHY_MATTERS_ID = 'why-local-seo-matters'

export type LocationBreadcrumbParent = {
  label: string
  href: string
}

const RELATED_PREF = [
  { match: 'local-seo', label: 'Local SEO', icon: 'tabler:map-pin' },
  { match: 'google-map', label: 'Google Business Profile', icon: 'tabler:brand-google' },
  { match: 'technical-seo', label: 'Technical SEO', icon: 'tabler:settings' },
] as const

const CLIENT_LOGOS = [clients1, clients2, clients3, clients4]

const paragraphsFrom = (body: string, paragraphs?: string[]): string[] => {
  if (paragraphs && paragraphs.some((p) => p.trim())) {
    return paragraphs.filter((p) => p.trim())
  }
  return body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
}

const splitProcessItem = (item: string): { title: string; detail: string } => {
  const separator = item.includes(' — ') ? ' — ' : item.includes(' - ') ? ' - ' : null
  if (!separator) return { title: item, detail: '' }
  const [title, ...rest] = item.split(separator)
  return { title: title.trim(), detail: rest.join(separator).trim() }
}

const serviceIconFor = (id: string): string => {
  if (id.includes('google-business') || id.includes('gbp')) return 'tabler:brand-google'
  if (id.includes('keyword')) return 'tabler:search'
  if (id.includes('on-page')) return 'tabler:file-text'
  if (id.includes('technical')) return 'tabler:settings'
  if (id.includes('citation')) return 'tabler:building'
  if (id.includes('our-local-seo')) return 'tabler:seo'
  return 'tabler:map-pin'
}

const processIconFor = (index: number): string => {
  const icons = [
    'tabler:search',
    'tabler:map-search',
    'tabler:code',
    'tabler:brand-google',
    'tabler:chart-line',
  ]
  return icons[index % icons.length]
}

const bulletsFrom = (paragraphs: string[], id: string): string[] => {
  const source = paragraphs.slice(1).join(' ') || paragraphs[0] || ''
  const match =
    source.match(/including\s+([^.]+)/i)?.[1] ||
    source.match(/focuses on\s+([^.]+)/i)?.[1] ||
    source.match(/may include\s+([^.]+)/i)?.[1]
  if (match) {
    const items = match
      .split(/,|\band\b/)
      .map((item) => item.replace(/\s+/g, ' ').trim())
      .filter((item) => item.length > 2 && item.length < 48)
      .slice(0, 3)
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    if (items.length === 3) return items
  }
  if (id.includes('google-business')) return ['Categories & services', 'Photos & updates', 'Maps visibility']
  if (id.includes('keyword')) return ['Local intent terms', 'Service + city phrases', 'Competitor gaps']
  if (id.includes('on-page')) return ['Titles & headings', 'Internal linking', 'Location relevance']
  if (id.includes('technical')) return ['Speed & Core Web Vitals', 'Schema & crawlability', 'Mobile usability']
  if (id.includes('citation')) return ['NAP consistency', 'Directory accuracy', 'Local trust signals']
  return ['Local visibility', 'Google Maps focus', 'Sustainable growth']
}

const Prose = ({ paragraphs, className = '' }: { paragraphs: string[]; className?: string }) => (
  <div className={`loc-prose ${className}`.trim()}>
    {paragraphs.map((paragraph) => (
      <p key={paragraph.slice(0, 64)}>{paragraph}</p>
    ))}
  </div>
)

const Media = ({ image, className = '' }: { image?: LocationMedia; className?: string }) => {
  if (!image?.src.trim()) return null
  return (
    <div className={`loc-media ${className}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={image.alt || ''} loading="lazy" />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   1. HERO — composition (not a single flat image)
   ═══════════════════════════════════════════════════════════ */

const HeroComposition = ({ page }: { page: LocationPage }) => (
  <div className="loc-compose" aria-hidden="true">
    <div className="loc-compose__glow" />
    <div className="loc-compose__laptop">
      <div className="loc-compose__bezel">
        {page.heroImage.src.trim() ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={page.heroImage.src} alt="" />
        ) : (
          <div className="loc-compose__screen-fallback" />
        )}
      </div>
      <div className="loc-compose__base" />
    </div>

    <div className="loc-compose__widget loc-compose__widget--maps">
      <div className="loc-compose__widget-head">
        <IconifyIcon icon="tabler:map-pin" />
        <span>Google Maps</span>
      </div>
      <div className="loc-compose__map-fake">
        <span className="loc-compose__pin" />
        <span className="loc-compose__pin loc-compose__pin--2" />
        <span className="loc-compose__pin loc-compose__pin--3" />
      </div>
      <p>Local pack visibility</p>
    </div>

    <div className="loc-compose__widget loc-compose__widget--rank">
      <div className="loc-compose__widget-head">
        <IconifyIcon icon="tabler:trending-up" />
        <span>Rankings</span>
      </div>
      <strong>#1–3</strong>
      <p>Map Pack targets</p>
    </div>

    <div className="loc-compose__widget loc-compose__widget--dash">
      <div className="loc-compose__widget-head">
        <IconifyIcon icon="tabler:chart-bar" />
        <span>SEO Dashboard</span>
      </div>
      <div className="loc-compose__bars" aria-hidden="true">
        <span style={{ height: '42%' }} />
        <span style={{ height: '68%' }} />
        <span style={{ height: '55%' }} />
        <span style={{ height: '88%' }} />
        <span style={{ height: '72%' }} />
      </div>
    </div>

    <div className="loc-compose__widget loc-compose__widget--analytics">
      <div className="loc-compose__widget-head">
        <IconifyIcon icon="tabler:activity" />
        <span>Analytics</span>
      </div>
      <strong>+148%</strong>
      <p>Local visibility signal</p>
    </div>
  </div>
)

const LocationHero = ({
  page,
  isPreview,
}: {
  page: LocationPage
  isPreview?: boolean
}) => {
  const title = page.h1.trim() || (isPreview ? page.name : '')
  const heroParagraphs = paragraphsFrom('', page.heroParagraphs)
  const primaryHref = page.cta.primaryHref?.trim() || '/contact'
  const primaryLabel = page.cta.primaryLabel?.trim() || 'Get in Touch'
  const secondaryHref = page.cta.secondaryHref?.trim() || '/local-seo'
  const secondaryLabel = page.cta.secondaryLabel?.trim() || 'View Local SEO Services'

  if (!title && !page.heroImage.src.trim()) {
    return (
      <>
        {isPreview ? (
          <Container className="pt-4">
            <LocationDevBanner page={page} />
          </Container>
        ) : null}
        <LocationEmptyNotice label="Hero" />
      </>
    )
  }

  return (
    <section className="bg-home-3 loc-hero" aria-labelledby={title ? 'location-hero-heading' : undefined}>
      <div className="hero-bg-dots" aria-hidden="true" />
      <Container>
        {isPreview ? <LocationDevBanner page={page} /> : null}
        <Row className="align-items-center g-4 g-lg-5 loc-hero__row">
          <Col lg={6}>
            <ScrollReveal animation="fade-up">
              {title ? (
                <h1 id="location-hero-heading" className="loc-hero__title">
                  {title}
                </h1>
              ) : (
                <LocationEmptyNotice label="Hero / H1" />
              )}
              {page.intro.trim() ? <p className="loc-hero__subtitle">{page.intro}</p> : null}
              {heroParagraphs[0] ? <p className="loc-hero__lead">{heroParagraphs[0]}</p> : null}
              <div className="loc-hero__actions">
                <ButtonLink href={primaryHref} className="fw-semibold">
                  {primaryLabel}
                </ButtonLink>
                <ButtonLink href={secondaryHref} variant="outline-primary" className="fw-semibold">
                  {secondaryLabel}
                </ButtonLink>
              </div>
              <ul className="loc-hero__trust" aria-label="Trust indicators">
                <li>
                  <IconifyIcon icon="tabler:shield-check" aria-hidden="true" />
                  Free local SEO audit
                </li>
                <li>
                  <IconifyIcon icon="tabler:map-pin" aria-hidden="true" />
                  Google Maps focused
                </li>
                <li>
                  <IconifyIcon icon="tabler:report-analytics" aria-hidden="true" />
                  Transparent reporting
                </li>
              </ul>
              <div className="loc-hero__logos" aria-label="Client logos">
                {CLIENT_LOGOS.map((logo, index) => (
                  <Image key={index} src={logo} alt="" className="loc-hero__logo" />
                ))}
              </div>
            </ScrollReveal>
          </Col>
          <Col lg={6}>
            <ScrollReveal animation="fade-left" delay={80} hoverable={false}>
              <HeroComposition page={page} />
              {page.heroImage.src.trim() ? (
                <span className="visually-hidden">{page.heroImage.alt || page.h1}</span>
              ) : null}
            </ScrollReveal>
          </Col>
        </Row>
        {heroParagraphs.length > 1 ? (
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="loc-hero__more">
              <Prose paragraphs={heroParagraphs.slice(1)} />
            </div>
          </ScrollReveal>
        ) : null}
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   2. TRUST BAR
   ═══════════════════════════════════════════════════════════ */

const TrustBar = () => (
  <section className="loc-trustbar" aria-label="Capabilities">
    <Container>
      <ul className="loc-trustbar__list">
        {[
          { icon: 'tabler:map-pin', label: 'Google Maps' },
          { icon: 'tabler:seo', label: 'Local SEO' },
          { icon: 'tabler:brand-google', label: 'GBP Optimization' },
          { icon: 'tabler:settings', label: 'Technical SEO' },
          { icon: 'tabler:chart-bar', label: 'Transparent Reporting' },
        ].map((item) => (
          <li key={item.label}>
            <IconifyIcon icon={item.icon} aria-hidden="true" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </Container>
  </section>
)

/* ═══════════════════════════════════════════════════════════
   3. WHY LOCAL SEO — text + large image, no cards
   ═══════════════════════════════════════════════════════════ */

const WhyLocalSeo = ({ page }: { page: LocationPage }) => {
  const title = page.introduction.title.trim()
  const paragraphs = paragraphsFrom(page.introduction.body, page.introduction.paragraphs)
  if (!title || paragraphs.length === 0) return <LocationEmptyNotice label="Introduction" />

  return (
    <section className="loc-band">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <ScrollReveal animation="fade-right">
              <h2 className="loc-h2">{title}</h2>
              <Prose paragraphs={paragraphs} />
            </ScrollReveal>
          </Col>
          <Col lg={6}>
            <ScrollReveal animation="fade-left" delay={60}>
              <Media image={page.introduction.image} className="loc-media--tall" />
            </ScrollReveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

/* Industries — full SEO content, pill strip (not cards) */

const IndustriesStrip = ({ page }: { page: LocationPage }) => {
  const block = page.industries
  const paragraphs = paragraphsFrom(block.body, block.paragraphs)
  const items = block.items?.filter((item) => item.trim()) ?? []
  if (!block.title.trim()) return <LocationEmptyNotice label="Industries" />

  return (
    <section className="loc-band loc-band--tint">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="loc-industries">
            <div className="loc-industries__intro">
              <h2 className="loc-h2">{block.title}</h2>
              <Prose paragraphs={paragraphs} />
            </div>
            {items.length > 0 ? (
              <ul className="loc-pill-row">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   4. SERVICES — equal 3-column SaaS grid
   ═══════════════════════════════════════════════════════════ */

const ServiceCard = ({
  section,
  ctaHref,
  ctaLabel,
}: {
  section: LocationSection
  ctaHref: string
  ctaLabel: string
}) => {
  const paragraphs = paragraphsFrom(section.body, section.paragraphs)
  const lead = paragraphs[0] ? [paragraphs[0]] : []
  const rest = paragraphs.slice(1)
  const customItems = section.items?.filter((item) => item.trim()) ?? []
  const bullets = customItems.length > 0 ? customItems.slice(0, 3) : bulletsFrom(paragraphs, section.id)

  return (
    <article className="loc-svc">
      <span className="loc-svc__icon" aria-hidden="true">
        <IconifyIcon icon={serviceIconFor(section.id)} />
      </span>
      <h2 className="loc-svc__title">{section.title}</h2>
      {lead.length > 0 ? <Prose paragraphs={lead} className="loc-svc__lead" /> : null}
      {rest.length > 0 ? <Prose paragraphs={rest} className="loc-svc__more" /> : null}
      <ul className="loc-svc__bullets">
        {bullets.map((bullet) => (
          <li key={bullet}>
            <IconifyIcon icon="tabler:check" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
      <ButtonLink href={ctaHref} size="sm" className="loc-svc__cta">
        {ctaLabel}
      </ButtonLink>
    </article>
  )
}

const ServicesSection = ({ page }: { page: LocationPage }) => {
  const overview = page.sections.find((s) => s.id === SERVICES_OVERVIEW_ID)
  const details = page.sections.filter(
    (s) =>
      s.id !== WHY_CHOOSE_ID &&
      s.id !== SERVICES_OVERVIEW_ID &&
      s.id !== CHALLENGES_ID &&
      s.id !== WHY_MATTERS_ID,
  )
  const cards = [...(overview ? [overview] : []), ...details]
  const servicesIntro = paragraphsFrom(page.services.body, page.services.paragraphs)
  const ctaHref = page.cta.primaryHref?.trim() || '/contact'
  const ctaLabel = page.cta.primaryLabel?.trim() || 'Get in Touch'
  const bgImage = overview?.image?.src?.trim() || ''
  const bgAlt = overview?.image?.alt || page.services.title

  return (
    <section className="loc-band loc-band--services">
      <div
        className={`loc-svc-banner${bgImage ? ' loc-svc-banner--has-bg' : ''}`}
        style={bgImage ? ({ '--loc-svc-bg': `url(${bgImage})` } as CSSProperties) : undefined}
      >
        {bgImage ? (
          // Decorative background only; alt preserved for accessibility context below
          <span className="visually-hidden">{bgAlt}</span>
        ) : null}
        <div className="loc-svc-banner__overlay" aria-hidden="true" />
        <Container className="loc-svc-banner__content">
          <ScrollReveal animation="fade-up">
            <h2 className="loc-h2 loc-h2--on-dark">{page.services.title}</h2>
            <Prose paragraphs={servicesIntro} className="loc-prose--on-dark" />
          </ScrollReveal>
        </Container>
      </div>

      <Container className="loc-svc-banner__cards">
        {cards.length > 0 ? (
          <div className="loc-svc-grid">
            {cards.map((section, index) => (
              <ScrollReveal key={section.id} animation="fade-up" delay={index * 45} className="h-100">
                <ServiceCard section={section} ctaHref={ctaHref} ctaLabel={ctaLabel} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <LocationEmptyNotice label="Service detail sections" />
        )}
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   5. WHY CHOOSE — comparison layout + full original copy
   ═══════════════════════════════════════════════════════════ */

const WhyChooseSection = ({ page }: { page: LocationPage }) => {
  const section = page.sections.find((s) => s.id === WHY_CHOOSE_ID)
  if (!section?.title.trim()) return null
  const paragraphs = paragraphsFrom(section.body, section.paragraphs)

  const others = ['Generic SEO', 'Cookie cutter strategy', 'Generic reporting', 'No local focus']
  const ours = [
    'Custom strategy',
    'Google Maps first',
    'Technical SEO',
    'Local content',
    'Transparent reporting',
  ]

  return (
    <section className="loc-band loc-band--tint">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="loc-h2">{section.title}</h2>
        </ScrollReveal>

        <div className="loc-compare">
          <ScrollReveal animation="fade-right">
            <div className="loc-compare__col loc-compare__col--others">
              <p className="loc-compare__label">Others</p>
              <ul>
                {others.map((item) => (
                  <li key={item}>
                    <IconifyIcon icon="tabler:x" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={60}>
            <div className="loc-compare__col loc-compare__col--us">
              <p className="loc-compare__label">LocalSeoWiser</p>
              <ul>
                {ours.map((item) => (
                  <li key={item}>
                    <IconifyIcon icon="tabler:check" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <Row className="g-4 g-xl-5 align-items-start mt-1">
          <Col lg={section.image?.src ? 7 : 10}>
            <ScrollReveal animation="fade-up" delay={80}>
              <Prose paragraphs={paragraphs} />
            </ScrollReveal>
          </Col>
          {section.image?.src ? (
            <Col lg={5}>
              <ScrollReveal animation="fade-left" delay={100}>
                <Media image={section.image} />
              </ScrollReveal>
            </Col>
          ) : null}
        </Row>
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   6. PROCESS — connected timeline, no cards
   ═══════════════════════════════════════════════════════════ */

const ProcessTimeline = ({ page }: { page: LocationPage }) => {
  const block = page.process
  const paragraphs = paragraphsFrom(block.body, block.paragraphs)
  const steps = (block.items ?? []).filter((item) => item.trim()).map(splitProcessItem)
  if (!block.title.trim() || steps.length === 0) return <LocationEmptyNotice label="Process" />

  return (
    <section className="loc-band">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="loc-section-intro">
            <h2 className="loc-h2">{block.title}</h2>
            <Prose paragraphs={paragraphs} />
          </div>
        </ScrollReveal>

        <ol className="loc-timeline">
          {steps.map((step, index) => (
            <li key={step.title} className="loc-timeline__step">
              <ScrollReveal animation="fade-up" delay={index * 70}>
                <span className="loc-timeline__node" aria-hidden="true">
                  <IconifyIcon icon={processIconFor(index)} />
                </span>
                <h3 className="loc-timeline__title">{step.title}</h3>
                {step.detail ? <p className="loc-timeline__desc">{step.detail}</p> : null}
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   6a. WHY MATTERS — optional prose section (industry pages)
   ═══════════════════════════════════════════════════════════ */

const WhyMattersSection = ({ page }: { page: LocationPage }) => {
  const section = page.sections.find((s) => s.id === WHY_MATTERS_ID)
  if (!section?.title.trim()) return null
  const paragraphs = paragraphsFrom(section.body, section.paragraphs)
  if (paragraphs.length === 0) return null

  return (
    <section className="loc-band">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="loc-section-intro">
            <h2 className="loc-h2">{section.title}</h2>
            <Prose paragraphs={paragraphs} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   6b. CHALLENGES — optional list section (industry pages)
   ═══════════════════════════════════════════════════════════ */

const ChallengesSection = ({ page }: { page: LocationPage }) => {
  const section = page.sections.find((s) => s.id === CHALLENGES_ID)
  if (!section?.title.trim()) return null
  const paragraphs = paragraphsFrom(section.body, section.paragraphs)
  const items = section.items?.filter((item) => item.trim()) ?? []
  if (paragraphs.length === 0 && items.length === 0) return null
  const intro = paragraphs[0] ? [paragraphs[0]] : []
  const closing = paragraphs.slice(1)

  return (
    <section className="loc-band loc-band--tint">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="loc-section-intro">
            <h2 className="loc-h2">{section.title}</h2>
            <Prose paragraphs={intro} />
          </div>
        </ScrollReveal>
        {items.length > 0 ? (
          <ul className="loc-pill-row">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {closing.length > 0 ? (
          <ScrollReveal animation="fade-up" delay={40}>
            <Prose paragraphs={closing} className="mt-4" />
          </ScrollReveal>
        ) : null}
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   7. FAQ
   ═══════════════════════════════════════════════════════════ */

const LocationFaqs = ({ page }: { page: LocationPage }) => {
  const faqs = page.faqs.filter((faq) => faq.question.trim() && faq.answer.trim())
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState(0)
  if (faqs.length === 0) return <LocationEmptyNotice label="FAQs" />

  return (
    <section className="loc-band loc-band--tint" aria-label="Frequently asked questions">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="loc-h2">Frequently asked questions</h2>
        </ScrollReveal>
        <div className="loc-faq">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`
            return (
              <div key={faq.question} className={`loc-faq__item${isOpen ? ' is-open' : ''}`}>
                <button
                  id={buttonId}
                  type="button"
                  className="loc-faq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <span className="loc-faq__icon" aria-hidden="true">
                    <IconifyIcon icon={isOpen ? 'tabler:minus' : 'tabler:plus'} />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`loc-faq__panel${isOpen ? ' is-open' : ''}`}
                >
                  <div className="loc-faq__inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   8. CTA — full-width premium
   ═══════════════════════════════════════════════════════════ */

const LocationCta = ({ page }: { page: LocationPage }) => {
  const cta = page.cta
  const paragraphs =
    cta.paragraphs && cta.paragraphs.some((p) => p.trim())
      ? cta.paragraphs.filter((p) => p.trim())
      : cta.text.trim()
        ? [cta.text]
        : []

  if (!cta.title.trim() || paragraphs.length === 0) return <LocationEmptyNotice label="CTA" />

  return (
    <section className="loc-cta-band">
      <Container>
        <div className="loc-cta">
          <div className="loc-cta__glow" aria-hidden="true" />
          <div className="loc-cta__stipple" aria-hidden="true" />
          <Row className="align-items-center g-4 position-relative">
            <Col lg={7}>
              <h2 className="loc-cta__title">{cta.title}</h2>
              <Prose paragraphs={paragraphs} className="loc-cta__prose" />
              <ul className="loc-cta__trust">
                <li>
                  <IconifyIcon icon="tabler:circle-check-filled" aria-hidden="true" />
                  Free local SEO audit
                </li>
                <li>
                  <IconifyIcon icon="tabler:circle-check-filled" aria-hidden="true" />
                  No long contracts
                </li>
                <li>
                  <IconifyIcon icon="tabler:circle-check-filled" aria-hidden="true" />
                  Pittsburgh market focus
                </li>
              </ul>
            </Col>
            <Col lg={5}>
              <div className="loc-cta__actions">
                {cta.primaryLabel && cta.primaryHref ? (
                  <ButtonLink href={cta.primaryHref} className="fw-semibold w-100">
                    {cta.primaryLabel}
                  </ButtonLink>
                ) : null}
                {cta.secondaryLabel && cta.secondaryHref ? (
                  <ButtonLink href={cta.secondaryHref} variant="outline-primary" className="fw-semibold w-100">
                    {cta.secondaryLabel}
                  </ButtonLink>
                ) : null}
                <div className="loc-cta__illus" aria-hidden="true">
                  <IconifyIcon icon="tabler:map-search" />
                  <IconifyIcon icon="tabler:chart-arrows-vertical" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   9. FOOTER TOP — related (3) + nearby (4) only
   ═══════════════════════════════════════════════════════════ */

const FooterLinks = ({
  serviceLinks,
  nearbyLinks,
  nearbyHeading = 'Nearby locations',
}: {
  serviceLinks: LocationInternalLink[]
  nearbyLinks: LocationInternalLink[]
  nearbyHeading?: string
}) => {
  const services: LocationInternalLink[] = []
  for (const pref of RELATED_PREF) {
    const found = serviceLinks.find((link) => link.href.includes(pref.match))
    if (found) services.push({ ...found, label: pref.label })
  }
  const nearby = nearbyLinks.slice(0, 4)
  if (services.length === 0 && nearby.length === 0) return null

  return (
    <section className="loc-band loc-band--tint">
      <Container>
        <Row className="g-5">
          {services.length > 0 ? (
            <Col lg={6}>
              <h2 className="loc-h2 loc-h2--sm">Related services</h2>
              <div className="loc-link-grid">
                {services.map((link, index) => {
                  const meta = RELATED_PREF.find((p) => link.href.includes(p.match))
                  return (
                    <ScrollReveal key={link.href} animation="fade-up" delay={index * 40}>
                      <Link href={link.href} className="loc-link-card">
                        <span className="loc-link-card__icon" aria-hidden="true">
                          <IconifyIcon icon={meta?.icon || 'tabler:arrow-right'} />
                        </span>
                        <span className="loc-link-card__title">{link.label}</span>
                        <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                      </Link>
                    </ScrollReveal>
                  )
                })}
              </div>
            </Col>
          ) : null}
          {nearby.length > 0 ? (
            <Col lg={6}>
              <h2 className="loc-h2 loc-h2--sm">{nearbyHeading}</h2>
              <div className="loc-link-grid loc-link-grid--2">
                {nearby.map((link, index) => (
                  <ScrollReveal key={link.href} animation="fade-up" delay={index * 40}>
                    <Link href={link.href} className="loc-link-card">
                      <span className="loc-link-card__icon" aria-hidden="true">
                        <IconifyIcon icon="tabler:map-pin" />
                      </span>
                      <span className="loc-link-card__title">{link.label}</span>
                      <span className="loc-link-card__cta">
                        View
                        <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                      </span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </Col>
          ) : null}
        </Row>
      </Container>
    </section>
  )
}

type LocationPageViewProps = {
  page: LocationPage
  isPreview?: boolean
  serviceLinks: LocationInternalLink[]
  nearbyLinks: LocationInternalLink[]
  /** Kept for JSON-LD callers; the visible breadcrumb bar has been removed. */
  breadcrumbLabel?: string
  breadcrumbParent?: LocationBreadcrumbParent
  nearbyHeading?: string
}

const LocationPageView = ({
  page,
  isPreview,
  serviceLinks,
  nearbyLinks,
  nearbyHeading,
}: LocationPageViewProps) => (
  <div className="loc-page">
    <LocationHero page={page} isPreview={isPreview} />
    <TrustBar />
    <WhyLocalSeo page={page} />
    <IndustriesStrip page={page} />
    <ServicesSection page={page} />
    <WhyChooseSection page={page} />
    <WhyMattersSection page={page} />
    <ProcessTimeline page={page} />
    <ChallengesSection page={page} />
    <LocationFaqs page={page} />
    <LocationCta page={page} />
    <FooterLinks
      serviceLinks={serviceLinks}
      nearbyLinks={nearbyLinks}
      nearbyHeading={nearbyHeading}
    />
  </div>
)

export default LocationPageView
