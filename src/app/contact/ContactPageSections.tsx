'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import VisibilityScanForm from '@/components/forms/VisibilityScanForm'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  contactInfo,
  contactMailtoHref,
  contactPageAudit,
  contactPageFaq,
  contactPageHero,
  contactPageNextSteps,
  contactPageOffice,
  contactPhones,
} from '@/data/site-content'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const contactCards = [
  {
    icon: 'tabler:phone',
    title: 'Phone',
    type: 'phones' as const,
  },
  {
    icon: 'tabler:mail',
    title: 'Email',
    type: 'email' as const,
    value: contactInfo.email,
    href: contactMailtoHref,
  },
  {
    icon: 'tabler:map-pin',
    title: 'Office',
    type: 'office' as const,
    value: contactPageOffice,
  },
]

const ContactPageSections = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0)

  return (
    <div className="contact-page">
      <section className="bg-home-3 page-hero-header contact-page-hero">
        <div className="hero-bg-dots" aria-hidden="true" />
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <ScrollReveal animation="fade-up" hoverable={false}>
                <h1 className="contact-page-h1">{contactPageHero.title}</h1>
                {contactPageHero.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="contact-page-body mx-auto">
                    {paragraph}
                  </p>
                ))}
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-page-cards section">
        <Container>
          <ScrollReveal animation="fade-up" hoverable={false}>
            <h2 className="contact-page-h2 contact-page-section-heading">How to Reach Us</h2>
          </ScrollReveal>
          <Row className="g-3 g-lg-4 contact-page-cards__row">
            {contactCards.map((card, idx) => (
              <Col lg={4} md={6} key={card.title} className="d-flex">
                <ScrollReveal animation="zoom-in" delay={idx * 80} className="h-100 w-100" hoverable={false}>
                  <div className="package-card-border h-100 w-100">
                    <div className="inner-contact-info-card h-100">
                      <span className="inner-contact-info-card__icon">
                        <IconifyIcon icon={card.icon} />
                      </span>
                      <p className="inner-contact-info-card__title">{card.title}</p>
                      {card.type === 'phones' ? (
                        <div className="contact-page-phone-list">
                          {contactPhones.map((entry) => (
                            <p key={entry.label} className="contact-page-phone-list__item">
                              <span className="contact-page-phone-list__label">{entry.label}:</span>{' '}
                              <a href={`tel:${entry.tel}`} className="inner-contact-info-card__value">
                                {entry.phone}
                              </a>
                            </p>
                          ))}
                        </div>
                      ) : card.href ? (
                        <a href={card.href} className="inner-contact-info-card__value">
                          {card.value}
                        </a>
                      ) : (
                        <p className="inner-contact-info-card__value">{card.value}</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section contact-page-direct bg-light">
        <Container>
          <Row className="g-4 g-lg-5 align-items-start">
            <Col lg={6}>
              <ScrollReveal animation="fade-up" hoverable={false}>
                <div className="inner-contact-steps">
                  <h2 className="contact-page-h2 contact-page-section-heading">{contactPageAudit.title}</h2>
                  <p className="contact-page-body contact-page-direct__intro">{contactPageAudit.intro}</p>
                  <ul className="inner-contact-steps__helpful-list contact-page-body">
                    {contactPageAudit.helpful.map((item) => (
                      <li key={item}>
                        <IconifyIcon icon="tabler:point-filled" className="text-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="contact-page-body contact-page-direct__intro">{contactPageAudit.closing}</p>
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={6}>
              <ScrollReveal animation="fade-up" delay={80} hoverable={false}>
                <div className="inner-contact-form">
                  <p className="inner-contact-form__title">Send us your details</p>
                  <VisibilityScanForm
                    id="contact-page-audit-form"
                    buttonLabel="Request My Free SEO Audit"
                    compact
                    showNote
                  />
                </div>
              </ScrollReveal>
            </Col>
          </Row>

          <ScrollReveal animation="fade-up" delay={120} hoverable={false}>
            <div className="contact-timeline">
              <h2 className="contact-page-h2 contact-page-section-heading">{contactPageNextSteps.title}</h2>
              <div className="contact-timeline__track" role="list">
                {contactPageNextSteps.steps.map((step, idx) => (
                  <ScrollReveal
                    key={step.title}
                    animation="fade-up"
                    delay={idx * 120}
                    hoverable
                    className="contact-timeline__reveal"
                  >
                    <div className="contact-timeline__item" role="listitem">
                      <div className="contact-timeline__bullet" aria-hidden="true">
                        <IconifyIcon icon={step.icon} />
                      </div>
                      <div className="contact-timeline__body">
                        <h3 className="contact-timeline__step-title">
                          Step {idx + 1}: {step.title}
                        </h3>
                        <p className="contact-page-body contact-timeline__step-desc">{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="section faq-modern-section" id="contact-faq">
        <div className="faq-modern-section__accent" aria-hidden="true">
          <div className="faq-modern-section__grid" />
        </div>
        <Container className="faq-modern-section__inner">
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
