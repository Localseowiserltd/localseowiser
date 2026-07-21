'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { portfolioListingMeta } from '@/data/portfolio'

const heroFeatures = [
  {
    title: 'Proven Strategies',
    text: 'Data-driven local SEO that improves visibility where it matters.',
    icon: 'tabler:trophy',
    tone: 'orange',
  },
  {
    title: 'Measurable Growth',
    text: 'More traffic, calls, and customers — tracked with real platform data.',
    icon: 'tabler:chart-bar',
    tone: 'blue',
  },
  {
    title: 'Long-Term Partners',
    text: 'We grow when you grow, with work built for lasting results.',
    icon: 'tabler:users',
    tone: 'green',
  },
]

const PortfolioHubHero = () => {
  const accent = 'Local Businesses'
  const title = portfolioListingMeta.h1
  const accentIndex = title.indexOf(accent)
  const titleNode =
    accentIndex >= 0 ? (
      <>
        {title.slice(0, accentIndex)}
        <span className="portfolio-hub-hero__accent">{accent}</span>
        {title.slice(accentIndex + accent.length)}
      </>
    ) : (
      title
    )

  return (
    <section className="portfolio-hub-hero">
      <Container>
        <Row className="align-items-center g-4 g-xl-5">
          <Col lg={6}>
            <ScrollReveal animation="fade-up">
              <p className="section-eyebrow mb-3">
                <IconifyIcon icon="tabler:briefcase" aria-hidden="true" /> Portfolio
              </p>
              <h1 className="portfolio-hub-hero__title">{titleNode}</h1>
              <p className="portfolio-hub-hero__lead">{portfolioListingMeta.intro}</p>
              <div className="portfolio-hub-hero__features">
                {heroFeatures.map((item) => (
                  <article
                    key={item.title}
                    className={`portfolio-hub-hero__feature portfolio-hub-hero__feature--${item.tone}`}>
                    <span className="portfolio-hub-hero__feature-icon">
                      <IconifyIcon icon={item.icon} aria-hidden="true" />
                    </span>
                    <div>
                      <h2>{item.title}</h2>
                      <p className="mb-0">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </Col>
          <Col lg={6}>
            <ScrollReveal animation="fade-up" delay={80} hoverable={false}>
              <div className="portfolio-hub-hero__media">
                <Image
                  src="/pittsburgh-skyline-hero.jpg"
                  alt="Pittsburgh skyline representing local business growth"
                  width={1600}
                  height={900}
                  className="portfolio-hub-hero__img"
                  priority
                />
                <aside className="portfolio-hub-hero__badge">
                  <span className="portfolio-hub-hero__badge-icon">
                    <IconifyIcon icon="tabler:building-store" aria-hidden="true" />
                  </span>
                  <p className="mb-0">
                    <strong>Helping Businesses Across Pittsburgh</strong>
                  </p>
                </aside>
              </div>
            </ScrollReveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PortfolioHubHero
