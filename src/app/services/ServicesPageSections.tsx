'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  servicesHubCards,
  servicesHubCategories,
  servicesHubClosing,
  servicesHubFaq,
  servicesHubHero,
  servicesHubProcess,
  servicesHubSideCta,
  servicesHubTestimonial,
  servicesHubWhy,
  type ServicesHubCategoryId,
} from '@/data/services-hub'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const INITIAL_VISIBLE = 8

const ServicesPageSections = () => {
  const [activeCategory, setActiveCategory] = useState<ServicesHubCategoryId>('all')
  const [showAll, setShowAll] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const filteredCards = useMemo(() => {
    if (activeCategory === 'all') return servicesHubCards
    return servicesHubCards.filter((card) => card.category === activeCategory)
  }, [activeCategory])

  const visibleCards =
    activeCategory === 'all' && !showAll ? filteredCards.slice(0, INITIAL_VISIBLE) : filteredCards

  const accent = servicesHubHero.titleAccent
  const accentIndex = servicesHubHero.title.indexOf(accent)
  const titleNode =
    accentIndex >= 0 ? (
      <>
        {servicesHubHero.title.slice(0, accentIndex)}
        <span className="services-hub-hero__accent">{accent}</span>
        {servicesHubHero.title.slice(accentIndex + accent.length)}
      </>
    ) : (
      servicesHubHero.title
    )

  return (
    <div className="services-hub-page">
      <section className="services-hub-hero">
        <Container>
          <Row className="align-items-center g-4 g-xl-5">
            <Col lg={6}>
              <ScrollReveal animation="fade-up">
                <p className="section-eyebrow mb-3">{servicesHubHero.eyebrow}</p>
                <h1 className="services-hub-hero__title">{titleNode}</h1>
                <p className="services-hub-hero__lead">{servicesHubHero.description}</p>
                <ul className="services-hub-hero__trust list-unstyled mb-0">
                  {servicesHubHero.trustItems.map((item) => (
                    <li key={item.label}>
                      <span className="services-hub-hero__trust-icon">
                        <IconifyIcon icon={item.icon} aria-hidden="true" />
                      </span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </Col>
            <Col lg={6}>
              <ScrollReveal animation="fade-up" delay={80} hoverable={false}>
                <div className="services-hub-hero__media">
                  <Image
                    src={servicesHubHero.image}
                    alt={servicesHubHero.imageAlt}
                    width={1100}
                    height={820}
                    className="services-hub-hero__img"
                    priority
                    unoptimized
                  />
                </div>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section services-hub-grid" id="our-services">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow="What We Offer"
              title="Our Professional Services"
              className="mb-4"
            />
          </ScrollReveal>

          <div className="services-hub-tabs" role="tablist" aria-label="Service categories">
            {servicesHubCategories.map((category) => {
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`services-hub-tabs__btn${isActive ? ' is-active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setShowAll(false)
                  }}>
                  <IconifyIcon icon={category.icon} aria-hidden="true" />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>

          <div className="services-hub-cards">
            {visibleCards.map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 40}>
                <article className="services-hub-card">
                  <span className={`services-hub-card__icon services-hub-card__icon--${card.iconTone ?? 'orange'}`}>
                    <IconifyIcon icon={card.icon} aria-hidden="true" />
                  </span>
                  <h3 className="services-hub-card__title">{card.title}</h3>
                  <p className="services-hub-card__text">{card.description}</p>
                  <Link href={card.href} className="services-hub-card__link">
                    Learn More
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {activeCategory === 'all' && filteredCards.length > INITIAL_VISIBLE ? (
            <div className="text-center mt-4">
              <button
                type="button"
                className="services-hub-view-all"
                onClick={() => setShowAll((value) => !value)}>
                {showAll ? 'Show Less Services' : 'View All Services'}
                <IconifyIcon icon={showAll ? 'tabler:chevron-up' : 'tabler:chevron-down'} aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="section services-hub-process">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={servicesHubProcess.eyebrow}
              title={servicesHubProcess.title}
              className="mb-5"
            />
          </ScrollReveal>
          <div className="services-hub-process__grid">
            {servicesHubProcess.steps.map((step, idx) => (
              <ScrollReveal key={step.step} animation="fade-up" delay={idx * 50}>
                <article className="services-hub-process__step">
                  <span className="services-hub-process__num">{step.step}</span>
                  <span className="services-hub-process__icon">
                    <IconifyIcon icon={step.icon} aria-hidden="true" />
                  </span>
                  <h3 className="services-hub-process__title">{step.title}</h3>
                  <p className="services-hub-process__text mb-0">{step.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section services-hub-why">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={servicesHubWhy.eyebrow}
              title={servicesHubWhy.title}
              className="mb-4"
            />
          </ScrollReveal>
          <div className="services-hub-why__grid">
            {servicesHubWhy.items.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 40}>
                <article className="services-hub-why__card">
                  <span className="services-hub-why__icon">
                    <IconifyIcon icon={item.icon} aria-hidden="true" />
                  </span>
                  <h3 className="services-hub-why__title">{item.title}</h3>
                  <p className="services-hub-why__text mb-0">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="services-hub-stats">
            {servicesHubWhy.stats.map((stat) => (
              <div key={stat.label} className="services-hub-stats__item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section services-hub-testimonial">
        <Container>
          <Row className="align-items-center g-4 g-xl-5">
            <Col lg={6}>
              <ScrollReveal animation="fade-up">
                <blockquote className="services-hub-testimonial__quote">
                  <IconifyIcon icon="tabler:quote" className="services-hub-testimonial__mark" aria-hidden="true" />
                  <p>{servicesHubTestimonial.quote}</p>
                  <footer>
                    <strong>{servicesHubTestimonial.name}</strong>
                    <span>{servicesHubTestimonial.role}</span>
                  </footer>
                </blockquote>
              </ScrollReveal>
            </Col>
            <Col lg={6}>
              <div className="services-hub-testimonial__highlights">
                {servicesHubTestimonial.highlights.map((item, idx) => (
                  <ScrollReveal key={item.title} animation="fade-up" delay={idx * 40}>
                    <article className="services-hub-testimonial__card">
                      <span className="services-hub-testimonial__icon">
                        <IconifyIcon icon={item.icon} aria-hidden="true" />
                      </span>
                      <h3>{item.title}</h3>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section faq-modern-section service-detail-faq services-hub-faq">
        <Container>
          <Row className="g-4 g-xl-5 align-items-start">
            <Col lg={7}>
              <div className="faq-modern-header text-start mb-4">
                <SectionHeader
                  align="left"
                  eyebrow={servicesHubFaq.eyebrow}
                  title={servicesHubFaq.title}
                />
              </div>
              <div className="faq-modern-list">
                {servicesHubFaq.items.map((item, idx) => {
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
            </Col>
            <Col lg={5}>
              <ScrollReveal animation="fade-up" delay={80}>
                <aside className="services-hub-side-cta">
                  <h2 className="services-hub-side-cta__title">{servicesHubSideCta.title}</h2>
                  <p className="services-hub-side-cta__text">{servicesHubSideCta.text}</p>
                  <a
                    href={servicesHubSideCta.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="services-hub-side-cta__btn">
                    {servicesHubSideCta.buttonLabel}
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </a>
                </aside>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section services-hub-closing" id="services-cta">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="services-hub-closing__card">
              <div>
                <h2 className="services-hub-closing__title">{servicesHubClosing.title}</h2>
                <p className="services-hub-closing__text mb-0">{servicesHubClosing.text}</p>
              </div>
              <a
                href={servicesHubClosing.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="services-hub-closing__btn">
                {servicesHubClosing.buttonLabel}
                <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}

export default ServicesPageSections
