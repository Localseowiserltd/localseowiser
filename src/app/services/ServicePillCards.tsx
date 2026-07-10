'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

type PillService = {
  id: string
  number: string
  title: string
  description: string
  href: string
}

type ServicePillCardsProps = {
  services: PillService[]
}

const ServicePillCards = ({ services }: ServicePillCardsProps) => {
  return (
    <div className="service-pill-cards">
      {services.map((service, idx) => (
        <div key={service.id} className="service-pill-cards__item" id={service.id}>
          {idx > 0 ? <span className="service-pill-cards__arrow" aria-hidden="true" /> : null}
          <ScrollReveal animation="zoom-in" delay={idx * 90} className="service-pill-cards__reveal">
            <div className={`service-pill-card ${idx % 2 === 0 ? 'service-pill-card--primary' : 'service-pill-card--dark'}`}>
              <span className="service-pill-card__number">{service.number}</span>
              <article className="service-pill-card__content">
                <div className="service-pill-card__pattern" aria-hidden="true" />
                <h5 className="service-pill-card__title">{service.title}</h5>
                <p className="service-pill-card__desc">{service.description}</p>
                <footer className="service-pill-card__foot">
                  <Link href={service.href} className="service-pill-card__link">
                    Explore service
                    <IconifyIcon icon="tabler:arrow-right" className="ms-1" />
                  </Link>
                </footer>
              </article>
            </div>
          </ScrollReveal>
        </div>
      ))}
    </div>
  )
}

export default ServicePillCards
