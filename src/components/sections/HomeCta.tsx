'use client'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { contactInfo, contactTelHref } from '@/data/site-content'
import React from 'react'
import { Container } from 'react-bootstrap'

const ctaFeatures = [
  { label: 'Data-Driven Strategies', icon: 'tabler:chart-line' },
  { label: 'Local Expertise, Real Results', icon: 'tabler:map-pin' },
  { label: 'Transparent Reporting', icon: 'tabler:shield-check' },
  { label: 'Dedicated Support', icon: 'tabler:headset' },
]

const HomeCta = () => {
  return (
    <section className="section home-hub-cta" id="next-step">
      <Container>
        <div className="home-hub-cta__card">
          <div className="home-hub-cta__copy">
            <h2 className="home-hub-cta__title">Ready to Grow Your Business?</h2>
            <p className="home-hub-cta__text">
              Get a free consultation and let our experts create a custom strategy that drives real results.
            </p>
            <ul className="home-hub-cta__features list-unstyled mb-0">
              {ctaFeatures.map((item) => (
                <li key={item.label}>
                  <span className="home-hub-cta__feature-icon">
                    <IconifyIcon icon={item.icon} aria-hidden="true" />
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="home-hub-cta__actions">
            <a
              href="https://wa.me/14126637288"
              target="_blank"
              rel="noopener noreferrer"
              className="home-hub-cta__btn home-hub-cta__btn--primary">
              Get Free Consultation
              <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
            </a>
            <a href={contactTelHref} className="home-hub-cta__btn home-hub-cta__btn--outline">
              <IconifyIcon icon="tabler:phone" aria-hidden="true" />
              Call Us: {contactInfo.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeCta
