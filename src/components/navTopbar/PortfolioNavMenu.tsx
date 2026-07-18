'use client'

import Link from 'next/link'
import { useState } from 'react'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getPortfolioNavItems } from '@/data/portfolio'

type PortfolioNavMenuProps = {
  pathname: string
  onNavigate: () => void
}

const PortfolioNavMenu = ({ pathname, onNavigate }: PortfolioNavMenuProps) => {
  const [open, setOpen] = useState(false)
  const items = getPortfolioNavItems(8)
  const isActive = pathname === '/portfolio' || pathname.startsWith('/portfolio/')

  return (
    <li
      className={`brutalist-navbar__item brutalist-navbar__item--has-dropdown ${open ? 'is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/portfolio"
        className={`brutalist-navbar__link ${isActive ? 'is-active' : ''}`}
        onClick={onNavigate}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Portfolio
        <IconifyIcon icon="tabler:chevron-down" className="brutalist-navbar__chevron d-none d-lg-inline" />
      </Link>
      {items.length ? (
        <div className="portfolio-nav-dropdown" role="menu" aria-label="Recent portfolio projects">
          <ul className="portfolio-nav-dropdown__list">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} role="menuitem" onClick={onNavigate}>
                  <span className="portfolio-nav-dropdown__client">{item.clientName}</span>
                  <span className="portfolio-nav-dropdown__title">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/portfolio" className="portfolio-nav-dropdown__all" onClick={onNavigate}>
            View all case studies
          </Link>
        </div>
      ) : null}
    </li>
  )
}

export default PortfolioNavMenu
