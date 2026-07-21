'use client'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  ServiceMenuItem,
  servicesMegaMenuPromo,
  servicesMegaMenuSections,
  servicesMegaMenuTrust,
} from '@/data/site-content'
import Image from 'next/image'
import Link from 'next/link'

type ServicesMegaMenuProps = {
  onNavigate?: () => void
  variant?: 'dropdown' | 'mobile'
}

const ServiceMenuLink = ({
  href,
  icon,
  title,
  description,
  badge,
  onNavigate,
}: ServiceMenuItem & { onNavigate?: () => void }) => (
  <Link href={href} className="services-mega-menu__link" onClick={onNavigate}>
    <span className="services-mega-menu__icon">
      <IconifyIcon icon={icon} />
    </span>
    <span className="services-mega-menu__text">
      <span className="services-mega-menu__title">
        {title}
        {badge ? <span className="services-mega-menu__badge">{badge}</span> : null}
      </span>
      <span className="services-mega-menu__desc">{description}</span>
    </span>
    <IconifyIcon icon="tabler:chevron-right" className="services-mega-menu__arrow" aria-hidden="true" />
  </Link>
)

const ServicesMegaMenu = ({ onNavigate, variant = 'dropdown' }: ServicesMegaMenuProps) => {
  const isMobile = variant === 'mobile'

  return (
    <div className={`services-mega-menu ${isMobile ? 'services-mega-menu--mobile' : 'services-mega-menu--dropdown'}`}>
      <div className="services-mega-menu__inner">
        {servicesMegaMenuSections.map((section) => (
          <div key={section.id} className="services-mega-menu__col">
            <p className="services-mega-menu__heading">
              <span className="services-mega-menu__heading-icon">
                <IconifyIcon icon={section.icon} />
              </span>
              {section.title}
            </p>
            <div className="services-mega-menu__items">
              {section.items.map((item) => (
                <ServiceMenuLink key={item.id} {...item} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        ))}

        <div className="services-mega-menu__col services-mega-menu__col--promo">
          <div className="services-mega-menu__promo">
            <p className="services-mega-menu__promo-title">{servicesMegaMenuPromo.title}</p>
            <p className="services-mega-menu__promo-text">{servicesMegaMenuPromo.text}</p>
            <Image
              src={servicesMegaMenuPromo.image}
              alt=""
              width={669}
              height={426}
              className="services-mega-menu__promo-img"
              aria-hidden="true"
            />
            <Link href={servicesMegaMenuPromo.buttonHref} className="services-mega-menu__promo-btn" onClick={onNavigate}>
              {servicesMegaMenuPromo.buttonLabel}
              <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
            </Link>
            <div className="services-mega-menu__promo-why">
              <p className="services-mega-menu__promo-why-title">{servicesMegaMenuPromo.whyTitle}</p>
              <ul className="list-unstyled mb-0">
                {servicesMegaMenuPromo.whyItems.map((item) => (
                  <li key={item}>
                    <IconifyIcon icon="tabler:circle-check-filled" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="services-mega-menu__trust">
        {servicesMegaMenuTrust.map((item) => (
          <div key={item.title} className="services-mega-menu__trust-item">
            <span className="services-mega-menu__trust-icon">
              <IconifyIcon icon={item.icon} />
            </span>
            <span className="services-mega-menu__trust-text">
              <span className="services-mega-menu__trust-title">{item.title}</span>
              <span className="services-mega-menu__trust-desc">{item.text}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesMegaMenu
