'use client'

import ContactReviewForm from '@/components/forms/ContactReviewForm'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  contactPageFaq,
  contactPageHero,
  contactPageMap,
  contactPageMethods,
  contactPageReview,
  contactPageSideCta,
} from '@/data/contact'
import { contactInfo, contactMailtoHref, contactPhones } from '@/data/site-content'
import Image from 'next/image'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ContactPageSections = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const accent = contactPageHero.titleAccent
  const accentIndex = contactPageHero.title.indexOf(accent)
  const titleNode =
    accentIndex >= 0 ? (
      <>
        {contactPageHero.title.slice(0, accentIndex)}
        <span className="contact-hub-hero__accent">{accent}</span>
        {contactPageHero.title.slice(accentIndex + accent.length)}
      </>
    ) : (
      contactPageHero.title
    )

  return (
    <div className="contact-hub-page">
      <section className="contact-hub-hero">
        <Container>
          <Row className="align-items-center g-4 g-xl-5">
            <Col lg={6}>
              <ScrollReveal animation="fade-up">
                <p className="section-eyebrow mb-3">{contactPageHero.eyebrow}</p>
                <h1 className="contact-hub-hero__title">{titleNode}</h1>
                <p className="contact-hub-hero__lead">{contactPageHero.description}</p>
                <ul className="contact-hub-hero__trust list-unstyled mb-0">
                  {contactPageHero.trustItems.map((item) => (
                    <li key={item.label}>
                      <span className="contact-hub-hero__trust-icon">
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
                <div className="contact-hub-hero__media">
                  <Image
                    src={contactPageHero.image}
                    alt={contactPageHero.imageAlt}
                    width={1157}
                    height={872}
                    className="contact-hub-hero__img"
                    priority
                    unoptimized
                  />
                </div>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section contact-hub-main">
        <Container>
          <Row className="g-4 g-xl-5 align-items-start">
            <Col lg={7}>
              <ScrollReveal animation="fade-up">
                <div className="contact-hub-form-card">
                  <h2 className="contact-hub-form-card__title">{contactPageReview.title}</h2>
                  <p className="contact-hub-form-card__intro">{contactPageReview.intro}</p>
                  <ContactReviewForm />
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={5}>
              <ScrollReveal animation="fade-up" delay={60}>
                <div className="contact-hub-touch">
                  <h2 className="contact-hub-touch__title">{contactPageMethods.title}</h2>
                  <div className="contact-hub-touch__list">
                    {contactPageMethods.cards.map((card) => (
                      <article key={card.id} className="contact-hub-touch__card">
                        <span className="contact-hub-touch__icon">
                          <IconifyIcon icon={card.icon} aria-hidden="true" />
                        </span>
                        <div>
                          <h3>{card.title}</h3>
                          {card.type === 'phones' ? (
                            <>
                              <a href={`tel:${contactPhones[0].tel}`}>{contactPhones[0].phone}</a>
                              {'note' in card && card.note ? <p className="mb-0">{card.note}</p> : null}
                            </>
                          ) : card.type === 'email' ? (
                            <a href={contactMailtoHref}>{contactInfo.email}</a>
                          ) : (
                            <p className="mb-0">{card.value}</p>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                  <div className="contact-hub-schedule">
                    <h3>Schedule a Call</h3>
                    <p>Prefer to talk live? Book a free consultation and we will walk through your goals.</p>
                    <a href="https://wa.me/14126637288" target="_blank" rel="noopener noreferrer">
                      Schedule Now
                      <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section contact-hub-map">
        <Container>
          <div className="contact-hub-map__wrap">
            <iframe
              title="Local SEO Wiser on Google Maps - Pittsburgh, PA"
              src={contactPageMap.embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-hub-map__iframe"
            />
          </div>
        </Container>
      </section>

      <section className="section faq-modern-section service-detail-faq contact-hub-faq">
        <Container>
          <Row className="g-4 g-xl-5 align-items-start">
            <Col lg={7}>
              <div className="faq-modern-header text-start mb-4">
                <SectionHeader align="left" eyebrow={contactPageFaq.eyebrow} title={contactPageFaq.title} />
              </div>
              <div className="faq-modern-list">
                {contactPageFaq.items.map((item, idx) => {
                  const isOpen = openFaqIndex === idx
                  return (
                    <div className="faq-modern-item" key={item.question}>
                      <button
                        type="button"
                        className="faq-modern-trigger"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}>
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
                  <h2 className="services-hub-side-cta__title">{contactPageSideCta.title}</h2>
                  <p className="services-hub-side-cta__text">{contactPageSideCta.text}</p>
                  <a
                    href={contactPageSideCta.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="services-hub-side-cta__btn">
                    {contactPageSideCta.buttonLabel}
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </a>
                </aside>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ContactPageSections
