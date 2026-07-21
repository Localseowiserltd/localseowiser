'use client'

import BrandLogo from '@/components/BrandLogo'
import useScrollEvent from '@/hooks/useScrollEvent'
import IconifyIcon from '../wrappers/IconifyIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { contactPhones, servicePages, topBarSocialLinks } from '@/data/site-content'
import PortfolioNavMenu from './PortfolioNavMenu'
import ServicesMegaMenu from './ServicesMegaMenu'

const serviceSlugs = servicePages.map((page) => page.slug)

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
]

const NavTopBar = () => {
  const { scrollY } = useScrollEvent()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false)
  const [showTopbar, setShowTopbar] = useState(true)
  const lastScrollY = useRef(0)
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isScrolled = scrollY > 20
  const isServicesActive = pathname === '/services' || pathname.startsWith('/local-') || serviceSlugs.some((slug) => pathname === `/${slug}`)

  useEffect(() => {
    setMenuOpen(false)
    setServicesMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (scrollY <= 20) {
      setShowTopbar(true)
    } else if (scrollY > lastScrollY.current + 5) {
      setShowTopbar(false)
    } else if (scrollY < lastScrollY.current - 5) {
      setShowTopbar(true)
    }

    lastScrollY.current = scrollY
  }, [scrollY])

  const closeMenu = () => {
    setMenuOpen(false)
    setServicesMobileOpen(false)
  }

  const openServicesMenu = () => {
    if (servicesTimeout.current) {
      clearTimeout(servicesTimeout.current)
      servicesTimeout.current = null
    }
    setServicesOpen(true)
  }

  const closeServicesMenu = () => {
    servicesTimeout.current = setTimeout(() => {
      setServicesOpen(false)
    }, 120)
  }

  return (
    <header
      className={`site-header ${isScrolled ? 'site-header-scrolled' : ''} ${showTopbar ? '' : 'site-header-topbar-hidden'}`}
      id="navbar-sticky">
      <div className={`nav-topbar d-none d-lg-block ${showTopbar ? 'nav-topbar-visible' : 'nav-topbar-hidden'}`}>
        <div className="nav-topbar-inner">
          <ul className="nav-topbar-phones list-unstyled mb-0">
            {contactPhones.map((item) => (
              <li key={item.tel}>
                <span className="nav-topbar-flag">{item.flag}</span>
                <a href={`tel:${item.tel}`}>{item.phone}</a>
              </li>
            ))}
          </ul>
          <ul className="nav-topbar-social list-unstyled mb-0">
            {topBarSocialLinks.map((item) => (
              <li key={item.icon}>
                <Link href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                  <IconifyIcon icon={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav className="brutalist-navbar" aria-label="Main navigation">
        <div className="brutalist-navbar__container">
          <BrandLogo href="/" linkClassName="brutalist-navbar__brand" onClick={closeMenu} />

          <button
            type="button"
            className={`brutalist-navbar__toggle ${menuOpen ? 'is-active' : ''}`}
            aria-label="Toggle navigation"
            aria-controls="brutalist-navbar-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <div id="brutalist-navbar-menu" className={`brutalist-navbar__menu ${menuOpen ? 'is-active' : ''}`}>
            <ul className="brutalist-navbar__list">
              {navItems.map((item) => (
                <li key={item.href} className="brutalist-navbar__item">
                  <Link
                    href={item.href}
                    className={`brutalist-navbar__link ${pathname === item.href ? 'is-active' : ''}`}
                    onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}

              <li
                className={`brutalist-navbar__item brutalist-navbar__item--has-dropdown d-none d-lg-block ${servicesOpen ? 'is-open' : ''}`}
                onMouseEnter={openServicesMenu}
                onMouseLeave={closeServicesMenu}>
                <Link
                  href="/services"
                  className={`brutalist-navbar__link brutalist-navbar__link--services ${isServicesActive ? 'is-active' : ''}`}
                  onClick={closeMenu}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}>
                  Services
                  <IconifyIcon icon="tabler:chevron-down" className="brutalist-navbar__chevron d-none d-lg-inline" />
                </Link>
                <div
                  className="services-mega-menu-wrapper d-none d-lg-block"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}>
                  <ServicesMegaMenu onNavigate={closeMenu} />
                </div>
              </li>

              <PortfolioNavMenu pathname={pathname} onNavigate={closeMenu} />

              <li className="brutalist-navbar__item">
                <Link
                  href="/blog"
                  className={`brutalist-navbar__link ${pathname === '/blog' ? 'is-active' : ''}`}
                  onClick={closeMenu}>
                  Blog
                </Link>
              </li>

              <li className="brutalist-navbar__item brutalist-navbar__item--mobile-services d-lg-none">
                <button
                  type="button"
                  className={`brutalist-navbar__link brutalist-navbar__link--services-toggle ${servicesMobileOpen ? 'is-open' : ''}`}
                  aria-expanded={servicesMobileOpen}
                  onClick={() => setServicesMobileOpen((open) => !open)}>
                  Services
                  <IconifyIcon icon="tabler:chevron-down" className="brutalist-navbar__chevron" />
                </button>
                {servicesMobileOpen ? <ServicesMegaMenu onNavigate={closeMenu} variant="mobile" /> : null}
              </li>

              <li className="brutalist-navbar__item">
                <Link href="/contact" className="brutalist-navbar__link brutalist-navbar__link--cta" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavTopBar
