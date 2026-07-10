'use client'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { ServiceMenuItem, servicesMegaMenuColumns } from '@/data/site-content'
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
  onNavigate,
}: ServiceMenuItem & { onNavigate?: () => void }) => (
  <Link href={href} className="services-mega-menu__link" onClick={onNavigate}>
    <span className="services-mega-menu__icon">
      <IconifyIcon icon={icon} />
    </span>
    <span className="services-mega-menu__text">
      <span className="services-mega-menu__title">{title}</span>
      <span className="services-mega-menu__desc">{description}</span>
    </span>
  </Link>
)

const ServicesMegaMenu = ({ onNavigate, variant = 'dropdown' }: ServicesMegaMenuProps) => {
  const isMobile = variant === 'mobile'

  return (
    <div className={`services-mega-menu ${isMobile ? 'services-mega-menu--mobile' : 'services-mega-menu--dropdown'}`}>
      <div className="services-mega-menu__inner">
        {servicesMegaMenuColumns.map((column, colIdx) => (
          <div key={colIdx} className="services-mega-menu__col">
            {column.map((section, sectionIdx) => (
              <div key={section.id} className="services-mega-menu__section">
                {sectionIdx > 0 ? <div className="services-mega-menu__divider" aria-hidden="true" /> : null}
                <p className="services-mega-menu__heading">{section.title}</p>
                <div className="services-mega-menu__items">
                  {section.items.map((item) => (
                    <ServiceMenuLink key={item.id} {...item} onNavigate={onNavigate} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="services-mega-menu__footer">
        <Link href="/services" className="services-mega-menu__view-all" onClick={onNavigate}>
          View all services
          <IconifyIcon icon="tabler:arrow-right" />
        </Link>
      </div>
    </div>
  )
}

export default ServicesMegaMenu
