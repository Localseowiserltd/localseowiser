'use client'

import ContactReviewForm from '@/components/forms/ContactReviewForm'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  contactPageFaq,
  contactPageHero,
  contactPageMethods,
  contactPageNextSteps,
  contactPageReview,
} from '@/data/contact'
import { contactInfo, contactMailtoHref, contactPhones } from '@/data/site-content'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ContactPageSections = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0)

  return (
    <div className="contact-page">
      <section className="bg-home-3 page-hero-header contact-page-hero">
        <div className="hero-bg-dots" aria-hidden="true" />
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9} xl={8}>
              <ScrollReveal animation="fade-up" hoverable={false}>
                <p className="contact-page-eyebrow">{contactPageHero.eyebrow}</p>
                <h1 className="contact-page-h1">{contactPageHero.title}</h1>
                <p className="contact-page-body contact-page-hero__lead mx-auto">{contactPageHero.description}</p>
                <p className="contact-page-hero__secondary mx-auto">{contactPageHero.secondary}</p>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-page-cards section">
        <Container>
          <ScrollReveal animation="fade-up" hoverable={false}>
            <h2 className="contact-page-h2 contact-page-section-heading text-center">{contactPageMethods.title}</h2>
          </ScrollReveal>
          <Row className="g-3 g-lg-4 contact-page-cards__row">
            {contactPageMethods.cards.map((card, idx) => (
              <Col lg={4} md={6} key={card.id} className="d-flex">
                <ScrollReveal animation="zoom-in" delay={idx * 70} className="h-100 w-100" hoverable={false}>
                  <article className="contact-method-card h-100">
                    <span className="contact-method-card__icon" aria-hidden="true">
                      <IconifyIcon icon={card.icon} />
                    </span>
                    <h3 className="contact-method-card__title">{card.title}</h3>
                    {card.type === 'phones' ? (
                      <div className="contact-page-phone-list">
                        {contactPhones.map((entry) => (
                          <p key={entry.label} className="contact-page-phone-list__item">
                            <span className="contact-page-phone-list__label">{entry.label}:</span>{' '}
                            <a href={`tel:${entry.tel}`}>{entry.phone}</a>
                          </p>
                        ))}
                      </div>
                    ) : card.type === 'email' ? (
                      <a href={contactMailtoHref} className="contact-method-card__value">
                        {contactInfo.email}
                      </a>
                    ) : (
                      <p className="contact-method-card__value mb-0">{card.value}</p>
                    )}
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section contact-page-direct bg-light">
        <Container>
          <Row className="g-4 g-lg-5 align-items-start">
            <Col lg={5}>
              <ScrollReveal animation="fade-up" hoverable={false}>
                <h2 className="contact-page-h2 contact-page-section-heading">{contactPageReview.title}</h2>
                <p className="contact-page-body">{contactPageReview.intro}</p>
                <ul className="contact-page-checklist">
                  {contactPageReview.checklist.map((item) => (
                    <li key={item}>
                      <IconifyIcon icon="tabler:check" className="contact-page-checklist__icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </Col>
            <Col lg={7}>
              <ScrollReveal animation="fade-up" delay={80} hoverable={false}>
                <div className="contact-form-card">
                  <ContactReviewForm />
                </div>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section contact-page-next">
        <Container>
          <ScrollReveal animation="fade-up" hoverable={false}>
            <h2 className="contact-page-h2 contact-page-section-heading text-center">{contactPageNextSteps.title}</h2>
          </ScrollReveal>
          <Row className="g-3 g-lg-4">
            {contactPageNextSteps.steps.map((step, idx) => (
              <Col lg={3} md={6} key={step.number} className="d-flex">
                <ScrollReveal animation="fade-up" delay={idx * 60} className="h-100 w-100" hoverable={false}>
                  <article className="contact-step-card h-100">
                    <span className="contact-step-card__number">{step.number}</span>
                    <h3 className="contact-step-card__title">{step.title}</h3>
                    <p className="contact-step-card__text mb-0">{step.description}</p>
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section faq-modern-section contact-page-faq" id="contact-faq">
        <div className="faq-modern-section__accent" aria-hidden="true">
          <div className="faq-modern-section__grid" />
        </div>
        <Container className="faq-modern-section__inner contact-page-faq__inner">
          <div className="faq-modern-header">
            <SectionHeader eyebrow={contactPageFaq.eyebrow} title={contactPageFaq.title} />
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
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  >
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
    </div>
  )
}

export default ContactPageSections
