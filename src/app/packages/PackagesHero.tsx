'use client'

import ScrollReveal from '@/components/ScrollReveal'
import heroBg from '@/assets/images/hero-bg.jpg'

const PackagesHero = () => {
  return (
    <section
      className="packages-hero"
      style={{ backgroundImage: `url(${heroBg.src})` }}
      aria-label="Local SEO Packages"
    >
      <div className="packages-hero__overlay" aria-hidden="true" />
      <div className="packages-hero__content">
        <ScrollReveal animation="fade-up" delay={0}>
          <span className="packages-hero__line" aria-hidden="true" />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={80}>
          <p className="packages-hero__eyebrow">Local SEO Packages</p>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={160}>
          <div className="packages-hero__title-wrap">
            <h1 className="packages-hero__title">Flexible engagement models for every local growth stage</h1>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={240}>
          <p className="packages-hero__desc">
            Each package is customized to your business model, market competition, and growth priorities. No fixed rates,
            only tailored proposals.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default PackagesHero
