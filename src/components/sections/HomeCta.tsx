'use client'

import VisibilityScanForm from '@/components/forms/VisibilityScanForm'
import { contactInfo, contactTelHref, homeCtaSection } from '@/data/site-content'
import React from 'react'
import { Container } from 'react-bootstrap'

const HomeCta = () => {
  return (
    <section className="section home-cta-section home-cta-section--layered" id="next-step">
      <Container>
        <div className="home-cta-section__hero">
          <div className="home-cta-section__stipple" aria-hidden="true">
            <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--1" />
            <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--2" />
            <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--3" />
          </div>
          <div className="home-cta-section__layout">
            <div className="home-cta-section__intro">
              <h2 className="home-cta-task__title">{homeCtaSection.title}</h2>
              <p className="home-cta-task__text mb-0">{homeCtaSection.text}</p>
            </div>

            <div className="home-cta-section__form">
              <VisibilityScanForm
                id="visibility-scan-form-final"
                buttonLabel={homeCtaSection.buttonLabel}
                compact
                showNote={false}
              />
              <p className="home-cta-task__footnote mb-0">
                {homeCtaSection.footnote}{' '}
                <a href={contactTelHref} className="text-primary fw-semibold">
                  {contactInfo.phone}
                </a>{' '}
                · {contactInfo.hours}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeCta
