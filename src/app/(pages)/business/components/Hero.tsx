'use client'

import VisibilityScanForm from '@/components/forms/VisibilityScanForm'
import { Col, Container, Row } from 'react-bootstrap'
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
        <Row className="align-items-center g-4 g-lg-5">
          <Col lg={7} className="hero-content-col order-1">
            <div className="hero-above-fold">
              <h1 className="fw-bold mb-4 hero-main-heading">
                <span className="hero-heading-line">Local SEO Services in</span>
                <span className="hero-heading-line">Pittsburgh, PA That</span>
                <span className="hero-heading-line">Put You in the Map</span>
                <span className="hero-heading-line">Pack and in AI Search</span>
              </h1>

              <p className="hero-subhead mb-4">
                In a metro of 2.4 million people, just having a Google Business Profile won&apos;t get you found. We help
                Pittsburgh businesses rank in the Local 3-Pack, show up for &quot;near me&quot; searches, and get cited by
                Google AI Overviews, so the calls and form fills actually come in.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4 hero-cta-row">
                <a href="#visibility-scan-form" className="btn btn-primary fw-semibold hero-cta-primary">
                  Get My Free Pittsburgh Visibility Scan
                </a>
                <a
                  href={contactTelHref}
                  className="btn btn-link fw-semibold px-0 py-2 text-decoration-none hero-cta-secondary"
                >
                  Or call us → {contactInfo.phone}
                </a>
              </div>

              <p className="hero-trust-strip mb-0">No long contracts · Real Pittsburgh team · Free scan, no obligation</p>
            </div>
          </Col>

          <Col lg={5} className="hero-form-col order-2">
            <VisibilityScanForm
              id="visibility-scan-form"
              buttonLabel={homeCtaSection.buttonLabel}
              compact
              showNote={false}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
