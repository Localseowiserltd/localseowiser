'use client'

import BrandLogo from '@/components/BrandLogo'
import useScrollEvent from '@/hooks/useScrollEvent'
import IconifyIcon from '../wrappers/IconifyIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { servicePages, topBarContact, topBarSocialLinks } from '@/data/site-content'
import { getPublishedIndustryPages, getIndustryPath } from '@/data/industries'
import { getLocationNavItems } from '@/data/locations'
import NavDropdown from './NavDropdown'
import ServicesMegaMenu from './ServicesMegaMenu'

const serviceSlugs = servicePages.map((page) => page.slug)

const industryNavItems = getPublishedIndustryPages().map((page) => ({
  label: page.name,
  href: getIndustryPath(page),
}))

const locationNavItems = getLocationNavItems(13).map((item) => ({
  label: item.label,
  href: item.href,
}))

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
          <ul className="nav-topbar-contact list-unstyled mb-0">
            <li>
              <span className="nav-topbar-contact-icon">
                <IconifyIcon icon="tabler:phone" />
              </span>
              <a href={`tel:${topBarContact.tel}`}>
                {topBarContact.phoneLabel} {topBarContact.phone}
              </a>
            </li>
            <li>
              <span className="nav-topbar-contact-icon">
                <IconifyIcon icon="tabler:mail" />
              </span>
              <a href={`mailto:${topBarContact.email}`}>{topBarContact.email}</a>
            </li>
            <li>
              <span className="nav-topbar-contact-icon">
                <IconifyIcon icon="tabler:map-pin" />
              </span>
              <span>{topBarContact.location}</span>
            </li>
          </ul>
          <div className="nav-topbar-follow">
            <span className="nav-topbar-follow-label">Follow Us:</span>
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
              <li className="brutalist-navbar__item">
                <Link
                  href="/"
                  className={`brutalist-navbar__link ${pathname === '/' ? 'is-active' : ''}`}
                  onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li className="brutalist-navbar__item">
                <Link
                  href="/about"
                  className={`brutalist-navbar__link ${pathname === '/about' ? 'is-active' : ''}`}
                  onClick={closeMenu}>
                  About Us
                </Link>
              </li>

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

              <NavDropdown label="Industries" items={industryNavItems} pathname={pathname} onNavigate={closeMenu} />

              <NavDropdown
                label="Locations"
                href="/areas"
                items={locationNavItems}
                pathname={pathname}
                onNavigate={closeMenu}
              />

              <li className="brutalist-navbar__item">
                <Link
                  href="/portfolio"
                  className={`brutalist-navbar__link ${pathname === '/portfolio' || pathname.startsWith('/portfolio/') ? 'is-active' : ''}`}
                  onClick={closeMenu}>
                  Portfolio
                </Link>
              </li>

              <li className="brutalist-navbar__item">
                <Link
                  href="/blog"
                  className={`brutalist-navbar__link ${pathname === '/blog' ? 'is-active' : ''}`}
                  onClick={closeMenu}>
                  Blog
                </Link>
              </li>

              <li className="brutalist-navbar__item">
                <Link
                  href="/contact"
                  className={`brutalist-navbar__link ${pathname === '/contact' ? 'is-active' : ''}`}
                  onClick={closeMenu}>
                  Contact
                </Link>
              </li>

              <li className="brutalist-navbar__item brutalist-navbar__item--cta-stack">
                <a
                  href="https://wa.me/14126637288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-navbar__cta-btn"
                  onClick={closeMenu}>
                  Get Free Consultation
                  <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavTopBar
