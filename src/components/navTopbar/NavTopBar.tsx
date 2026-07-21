'use client'

import BrandLogo from '@/components/BrandLogo'
import useScrollEvent from '@/hooks/useScrollEvent'
import IconifyIcon from '../wrappers/IconifyIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import {
  servicePages,
  servicesMegaMenuSections,
  topBarContact,
  topBarSocialLinks,
} from '@/data/site-content'
import { getPublishedIndustryPages, getIndustryPath } from '@/data/industries'
import { getLocationNavItems } from '@/data/locations'
import NavDropdown from './NavDropdown'
import ServicesMegaMenu from './ServicesMegaMenu'

const serviceSlugs = servicePages.map((page) => page.slug)

type MobileNavSection = 'services' | 'industries' | 'locations'

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
  const [openSection, setOpenSection] = useState<MobileNavSection | null>(null)
  const [showTopbar, setShowTopbar] = useState(true)
  const lastScrollY = useRef(0)
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isScrolled = scrollY > 20
  const isServicesActive = pathname === '/services' || pathname.startsWith('/local-') || serviceSlugs.some((slug) => pathname === `/${slug}`)

  useEffect(() => {
    setMenuOpen(false)
    setOpenSection(null)
  }, [pathname])

  // Lock body scrolling while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [menuOpen])

  // Close the drawer on Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setOpenSection(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

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
    setOpenSection(null)
  }

  // Only one main accordion section stays open at a time.
  const toggleSection = (section: MobileNavSection) => {
    setOpenSection((current) => (current === section ? null : section))
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

              <li
                className={`brutalist-navbar__item brutalist-navbar__item--mobile-services d-lg-none ${openSection === 'services' ? 'is-mobile-open' : ''}`}>
                <button
                  type="button"
                  className={`brutalist-navbar__link brutalist-navbar__link--services-toggle ${openSection === 'services' ? 'is-open' : ''} ${isServicesActive ? 'is-active' : ''}`}
                  aria-expanded={openSection === 'services'}
                  aria-controls="mobile-services-panel"
                  onClick={() => toggleSection('services')}>
                  Services
                  <IconifyIcon icon="tabler:chevron-down" className="brutalist-navbar__chevron" />
                </button>
                <div
                  id="mobile-services-panel"
                  className="mobile-nav-accordion"
                  hidden={openSection !== 'services'}>
                  <Link href="/services" className="mobile-nav-accordion__all" onClick={closeMenu}>
                    All Services
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </Link>
                  {servicesMegaMenuSections.map((section) => (
                    <div key={section.id} className="mobile-nav-accordion__group">
                      <p className="mobile-nav-accordion__heading">
                        <IconifyIcon icon={section.icon} aria-hidden="true" />
                        {section.title}
                      </p>
                      <ul className="mobile-nav-accordion__list">
                        {section.items.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              className={pathname === item.href ? 'is-active' : ''}
                              onClick={closeMenu}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>

              <NavDropdown
                label="Industries"
                items={industryNavItems}
                pathname={pathname}
                onNavigate={closeMenu}
                mobileOpen={openSection === 'industries'}
                onMobileToggle={() => toggleSection('industries')}
                mobileId="mobile-industries-panel"
              />

              <NavDropdown
                label="Locations"
                href="/areas"
                items={locationNavItems}
                pathname={pathname}
                onNavigate={closeMenu}
                mobileOpen={openSection === 'locations'}
                onMobileToggle={() => toggleSection('locations')}
                mobileId="mobile-locations-panel"
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

          {menuOpen ? (
            <div
              className="brutalist-navbar__overlay d-lg-none"
              aria-hidden="true"
              onClick={closeMenu}
            />
          ) : null}
        </div>
      </nav>
    </header>
  )
}

export default NavTopBar
