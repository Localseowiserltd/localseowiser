'use client'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { contactInfo, contactTelHref } from '@/data/site-content'
import { portfolioListingMeta } from '@/data/portfolio'
import type { PortfolioCta } from '@/types/portfolio'
import { Container } from 'react-bootstrap'

type PortfolioCTAProps = {
  cta?: PortfolioCta
  variant?: 'case-study' | 'listing'
}

const PortfolioCTA = ({ cta, variant = 'case-study' }: PortfolioCTAProps) => {
  if (variant === 'listing') {
    return (
      <section className="section portfolio-hub-cta">
        <Container>
          <div className="portfolio-hub-cta__card">
            <div className="portfolio-hub-cta__copy">
              <h2 className="portfolio-hub-cta__title">{cta?.title ?? portfolioListingMeta.ctaTitle}</h2>
              <p className="portfolio-hub-cta__text mb-0">{cta?.text ?? portfolioListingMeta.ctaText}</p>
            </div>
            <div className="portfolio-hub-cta__actions">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-hub-cta__btn portfolio-hub-cta__btn--primary">
                Get Free Consultation
                <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
              </a>
              <a href={contactTelHref} className="portfolio-hub-cta__btn portfolio-hub-cta__btn--outline">
                <IconifyIcon icon="tabler:phone" aria-hidden="true" />
                Call Us: {contactInfo.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  const title = cta?.title ?? portfolioListingMeta.ctaTitle
  const text = cta?.text ?? portfolioListingMeta.ctaText
  const primaryLabel = cta?.primaryLabel ?? 'Start Your Project'
  const primaryHref = cta?.primaryHref ?? contactInfo.whatsapp
  const secondaryLabel = cta?.secondaryLabel ?? 'View Our Services'
  const secondaryHref = cta?.secondaryHref ?? '/services'

  return (
    <section className="section case-study-final-cta">
      <div className="container">
        <div className="case-study-final-cta__panel">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="case-study-hero__actions">
            <a
              href={primaryHref}
              target={primaryHref.startsWith('http') ? '_blank' : undefined}
              rel={primaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="btn btn-primary">
              {primaryLabel}
            </a>
            <a href={secondaryHref} className="btn btn-outline-primary">
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioCTA
