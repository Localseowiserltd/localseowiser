'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import seoShowcaseImage from '@/assets/images/search.jpg'
import Link from 'next/link'

type SeoService = {
  id: string
  number: string
  title: string
  description: string
  href: string
}

type SeoServicesShowcaseProps = {
  title: string
  subtitle: string
  services: SeoService[]
}

type SeoServiceCardProps = SeoService & {
  delay?: number
  side: 'left' | 'right'
}

const SeoServiceCard = ({ number, title, description, href, delay = 0, side }: SeoServiceCardProps) => (
  <ScrollReveal
    animation={side === 'left' ? 'fade-right' : 'fade-left'}
    delay={delay}
    duration={750}
    className="seo-services-showcase__card-wrap">
    <div className={`seo-services-showcase__row seo-services-showcase__row--${side}`}>
      {side === 'right' ? (
        <span className="seo-services-showcase__connector seo-services-showcase__connector--from-right" aria-hidden="true" />
      ) : null}
      <div className="seo-services-showcase__card">
        <span className="inner-service-card__number">{number}</span>
        <h5 className="inner-service-card__title">{title}</h5>
        <p className="inner-service-card__desc">{description}</p>
        <Link href={href} className="inner-service-card__link">
          Explore service
          <IconifyIcon icon="tabler:arrow-right" className="ms-1" />
        </Link>
      </div>
      {side === 'left' ? (
        <span className="seo-services-showcase__connector seo-services-showcase__connector--from-left" aria-hidden="true" />
      ) : null}
    </div>
  </ScrollReveal>
)

const SeoServicesShowcase = ({ title, subtitle, services }: SeoServicesShowcaseProps) => {
  const leftServices = services.slice(0, 3)
  const rightServices = services.slice(3, 6)

  return (
    <section className="seo-services-showcase section" id="search-engine-optimization">
      <div className="container position-relative">
        <ScrollReveal animation="fade-up">
          <SectionHeader align="left" eyebrow={title} title={title} subtitle={subtitle} />
        </ScrollReveal>

        <div className="seo-services-showcase__layout">
          <div className="seo-services-showcase__col seo-services-showcase__col--left">
            {leftServices.map((service, idx) => (
              <SeoServiceCard key={service.id} {...service} side="left" delay={idx * 80} />
            ))}
          </div>

          <ScrollReveal animation="zoom-in" delay={200} duration={850} className="seo-services-showcase__center">
            <img id="center-image" src={seoShowcaseImage.src} alt="Local SEO services" />
          </ScrollReveal>

          <div className="seo-services-showcase__col seo-services-showcase__col--right">
            {rightServices.map((service, idx) => (
              <SeoServiceCard key={service.id} {...service} side="right" delay={idx * 80 + 40} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeoServicesShowcase
