'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { packagesPageHero } from '@/data/packages'
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
        <ScrollReveal animation="fade-up" delay={0} hoverable={false}>
          <span className="packages-hero__line" aria-hidden="true" />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={60} hoverable={false}>
          <p className="packages-hero__eyebrow">{packagesPageHero.eyebrow}</p>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={120} hoverable={false}>
          <h1 className="packages-hero__title">{packagesPageHero.title}</h1>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={180} hoverable={false}>
          <p className="packages-hero__desc">{packagesPageHero.description}</p>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={240} hoverable={false}>
          <ul className="packages-hero__trust">
            {packagesPageHero.trustPoints.map((point) => (
              <li key={point.label}>
                <IconifyIcon icon="tabler:check" className="packages-hero__trust-icon" />
                <span>{point.label}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default PackagesHero
