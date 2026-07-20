'use client'

import VisibilityScanForm from '@/components/forms/VisibilityScanForm'
import { Container } from 'react-bootstrap'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { contactInfo, contactTelHref, homeCtaSection } from '@/data/site-content'

type HeroStatCounterProps = {
  end: number
  suffix: string
  decimals: number
  className?: string
}

export const HeroStatCounter = ({ end, suffix, decimals, className }: HeroStatCounterProps) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <span ref={ref} className={className}>
      {inView && <CountUp end={end} duration={2.5} decimals={decimals} />}
      {suffix}
    </span>
  )
}

const Hero = () => {
  return (
    <section className="bg-home-3" id="home">
      <div className="hero-bg-dots" aria-hidden="true" />
      <Container>
        <div className="hero-centered">
          <p className="hero-eyebrow">Pittsburgh Local SEO Agency</p>

          <h1 className="hero-main-heading">Local SEO Services for Pittsburgh Businesses</h1>

          <p className="hero-lead">
            Get more calls, qualified leads, and stronger visibility in Google Maps and local search.
          </p>

          <p className="hero-subhead">
            We optimize your Google Business Profile, target the local keywords your customers actually search, clean up
            citations for consistent business listings, strengthen on-page SEO, and provide transparent reporting tied to
            real inquiries. You get a clear plan, steady execution, and visibility that compounds—without vanity metrics
            or locked-in contracts.
          </p>

          <div className="hero-cta-row">
            <a href="#visibility-scan-form" className="btn btn-primary fw-semibold hero-cta-primary">
              Get My Free Pittsburgh Visibility Scan
            </a>
            <a href={contactTelHref} className="hero-cta-secondary">
              Call {contactInfo.phone}
            </a>
          </div>

          <ul className="hero-trust-badges" aria-label="Trust indicators">
            <li>Serving Pittsburgh businesses</li>
            <li>No long-term contracts</li>
            <li>Human-written SEO</li>
            <li>Transparent reporting</li>
          </ul>

          <div className="hero-form-card">
            <VisibilityScanForm
              id="visibility-scan-form"
              buttonLabel={homeCtaSection.buttonLabel}
              layout="horizontal"
              showNote={false}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
