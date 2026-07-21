'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getLocationPath } from '@/lib/location-publish'
import type { LocationListingMeta, LocationPage } from '@/types/location'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

type AreasListingProps = {
  pages: LocationPage[]
  meta: LocationListingMeta
}

const heroFeatures = [
  {
    title: 'Local Expertise',
    text: 'Neighborhood-level strategies built for Pittsburgh search behavior.',
    icon: 'tabler:map-pin',
    tone: 'orange',
  },
  {
    title: 'Proven Results',
    text: 'Practical work focused on visibility, calls, and qualified local leads.',
    icon: 'tabler:target',
    tone: 'blue',
  },
  {
    title: 'Community Focused',
    text: 'We help businesses grow where their customers live, work, and search.',
    icon: 'tabler:users',
    tone: 'green',
  },
]

const AreasListing = ({ pages, meta }: AreasListingProps) => {
  return (
    <div className="areas-hub-page">
      <section className="areas-hub-hero">
        <Container>
          <Row className="align-items-center g-4 g-xl-5">
            <Col lg={6}>
              <ScrollReveal animation="fade-up">
                <p className="section-eyebrow mb-3">
                  <IconifyIcon icon="tabler:map-pin" aria-hidden="true" /> Areas We Serve
                </p>
                <h1 className="areas-hub-hero__title">
                  Serving the Entire <span className="areas-hub-hero__accent">Pittsburgh</span> Metro
                </h1>
                <p className="areas-hub-hero__lead">{meta.intro}</p>
                <div className="areas-hub-hero__features">
                  {heroFeatures.map((item) => (
                    <article key={item.title} className={`areas-hub-hero__feature areas-hub-hero__feature--${item.tone}`}>
                      <span className="areas-hub-hero__feature-icon">
                        <IconifyIcon icon={item.icon} aria-hidden="true" />
                      </span>
                      <h2>{item.title}</h2>
                      <p className="mb-0">{item.text}</p>
                    </article>
                  ))}
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={6}>
              <ScrollReveal animation="fade-up" delay={80} hoverable={false}>
                <div className="areas-hub-hero__media">
                  <Image
                    src="/pittsburgh-skyline-hero.jpg"
                    alt="Pittsburgh skyline and bridges at dusk"
                    width={1600}
                    height={900}
                    className="areas-hub-hero__img"
                    priority
                  />
                  <aside className="areas-hub-hero__badge">
                    <span className="areas-hub-hero__badge-icon">
                      <IconifyIcon icon="tabler:map-pin" aria-hidden="true" />
                    </span>
                    <strong className="areas-hub-hero__badge-title">Based in Pittsburgh, PA</strong>
                    <p className="mb-0">
                      Proudly helping local businesses rank higher and grow across Allegheny County and beyond.
                    </p>
                  </aside>
                </div>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section areas-hub-grid">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-4">
              <p className="section-eyebrow mb-2">Our Service Areas</p>
              <h2 className="areas-hub-grid__title">We Help Businesses Across Pittsburgh and Surrounding Areas</h2>
            </div>
          </ScrollReveal>

          {pages.length === 0 ? (
            <p className="text-center text-muted mb-0">Location pages are being prepared.</p>
          ) : (
            <div className="areas-hub-cards">
              {pages.map((page, idx) => {
                const href = getLocationPath(page)
                const imageSrc = page.heroImage?.src || '/pittsburgh-skyline-hero.jpg'
                const imageAlt = page.heroImage?.alt || `Local SEO in ${page.name}`
                const blurb =
                  page.metaDescription?.trim() ||
                  `Local SEO services for businesses in ${page.name} looking to improve Google Maps visibility and attract nearby customers.`

                return (
                  <ScrollReveal key={page.slug} animation="fade-up" delay={(idx % 4) * 40}>
                    <article className="areas-hub-card">
                      <div className="areas-hub-card__media">
                        <Image
                          src={imageSrc}
                          alt={imageAlt}
                          width={640}
                          height={400}
                          className="areas-hub-card__img"
                          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
                        />
                      </div>
                      <div className="areas-hub-card__body">
                        <span className="areas-hub-card__pin">
                          <IconifyIcon icon="tabler:map-pin" aria-hidden="true" />
                        </span>
                        <h3 className="areas-hub-card__title">{page.name}</h3>
                        <p className="areas-hub-card__text">{blurb}</p>
                        <Link href={href} className="areas-hub-card__link">
                          View Area
                          <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  </ScrollReveal>
                )
              })}
            </div>
          )}
        </Container>
      </section>

      <section className="section areas-hub-mid-cta">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="areas-hub-mid-cta__card">
              <span className="areas-hub-mid-cta__icon">
                <IconifyIcon icon="tabler:target" aria-hidden="true" />
              </span>
              <p className="areas-hub-mid-cta__text mb-0">
                <strong>And everywhere in between.</strong> No matter where your customers are in the Pittsburgh metro
                area, we&apos;ll help you reach them.
              </p>
              <a
                href="https://wa.me/14126637288"
                target="_blank"
                rel="noopener noreferrer"
                className="areas-hub-mid-cta__btn">
                Get Free Consultation
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="section areas-hub-closing">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="areas-hub-closing__card">
              <div className="areas-hub-closing__copy">
                <p className="areas-hub-closing__eyebrow mb-2">Ready to Grow?</p>
                <h2 className="areas-hub-closing__title">
                  Let&apos;s Improve Your Local Visibility Across{' '}
                  <span className="areas-hub-closing__accent">Pittsburgh</span>
                </h2>
                <div className="areas-hub-closing__actions">
                  <a
                    href="https://wa.me/14126637288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="areas-hub-closing__btn areas-hub-closing__btn--primary">
                    Get Free Consultation
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </a>
                  <a href="tel:+14126637288" className="areas-hub-closing__btn areas-hub-closing__btn--outline">
                    <IconifyIcon icon="tabler:phone" aria-hidden="true" />
                    Call Us: +1 412 663 7288
                  </a>
                </div>
                <p className="areas-hub-closing__text mb-0">
                  Get a free SEO audit and discover how we can help your business rank higher, get more traffic, and
                  grow revenue.
                </p>
              </div>
              <div className="areas-hub-closing__visual" aria-hidden="true">
                <svg viewBox="0 0 320 240" fill="none" className="areas-hub-closing__map">
                  <path
                    d="M42 66 L118 30 L212 40 L286 76 L296 142 L246 200 L152 214 L66 188 L28 128 Z"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    strokeDasharray="7 7"
                    fill="rgba(255,255,255,0.04)"
                  />
                  <circle cx="86" cy="94" r="7" fill="rgba(255,255,255,0.85)" />
                  <circle cx="228" cy="80" r="6" fill="rgba(255,255,255,0.55)" />
                  <circle cx="118" cy="176" r="6" fill="rgba(255,255,255,0.55)" />
                  <circle cx="244" cy="164" r="7" fill="rgba(255,255,255,0.85)" />
                  <path
                    d="M160 44c-24 0-42 18-42 41 0 30 42 71 42 71s42-41 42-71c0-23-18-41-42-41z"
                    fill="#f1571d"
                  />
                  <circle cx="160" cy="86" r="16" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}

export default AreasListing
