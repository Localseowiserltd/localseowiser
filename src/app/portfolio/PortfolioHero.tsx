'use client'

import ScrollReveal from '@/components/ScrollReveal'
import heroBg from '@/assets/images/hero2.jpg'

const PortfolioHero = () => {
  return (
    <section
      className="packages-hero"
      style={{ backgroundImage: `url(${heroBg.src})` }}
      aria-label="Portfolio"
    >
      <div className="packages-hero__overlay" aria-hidden="true" />
      <div className="packages-hero__content">
        <ScrollReveal animation="fade-up" delay={0}>
          <span className="packages-hero__line" aria-hidden="true" />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={80}>
          <p className="packages-hero__eyebrow">Portfolio</p>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={160}>
          <div className="packages-hero__title-wrap">
            <h1 className="packages-hero__title">Verified GSC reporting from real client campaigns</h1>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={240}>
          <p className="packages-hero__desc">
            Each card below is an actual screenshot from a monthly performance report, not filler copy.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default PortfolioHero
