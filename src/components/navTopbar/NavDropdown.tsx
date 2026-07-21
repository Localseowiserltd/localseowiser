'use client'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import { useState } from 'react'

type NavDropdownItem = {
  label: string
  href: string
}

type NavDropdownProps = {
  label: string
  href?: string
  items: NavDropdownItem[]
  pathname: string
  onNavigate: () => void
  /** Controlled mobile accordion state (one section open at a time). */
  mobileOpen?: boolean
  onMobileToggle?: () => void
  mobileId?: string
}

const NavDropdown = ({
  label,
  href,
  items,
  pathname,
  onNavigate,
  mobileOpen = false,
  onMobileToggle,
  mobileId,
}: NavDropdownProps) => {
  const [open, setOpen] = useState(false)
  const isActive = items.some((item) => pathname === item.href) || (href ? pathname === href : false)

  const desktopTrigger = href ? (
    <Link
      href={href}
      className={`brutalist-navbar__link d-none d-lg-flex ${isActive ? 'is-active' : ''}`}
      onClick={onNavigate}
      aria-haspopup="true"
      aria-expanded={open}>
      {label}
      <IconifyIcon icon="tabler:chevron-down" className="brutalist-navbar__chevron d-none d-lg-inline" />
    </Link>
  ) : (
    <button
      type="button"
      className={`brutalist-navbar__link brutalist-navbar__link--dropdown-toggle d-none d-lg-flex ${isActive ? 'is-active' : ''}`}
      aria-haspopup="true"
      aria-expanded={open}
      onClick={() => setOpen((value) => !value)}>
      {label}
      <IconifyIcon icon="tabler:chevron-down" className="brutalist-navbar__chevron" />
    </button>
  )

  return (
    <li
      className={`brutalist-navbar__item brutalist-navbar__item--has-dropdown brutalist-navbar__item--simple-dropdown ${open ? 'is-open' : ''} ${mobileOpen ? 'is-mobile-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      {desktopTrigger}

      <button
        type="button"
        className={`brutalist-navbar__link brutalist-navbar__link--services-toggle d-lg-none ${mobileOpen ? 'is-open' : ''} ${isActive ? 'is-active' : ''}`}
        aria-expanded={mobileOpen}
        aria-controls={mobileId}
        onClick={onMobileToggle}>
        {label}
        <IconifyIcon icon="tabler:chevron-down" className="brutalist-navbar__chevron" />
      </button>

      {items.length ? (
        <>
          <div className="nav-simple-dropdown d-none d-lg-block" role="menu" aria-label={label}>
            <ul className="nav-simple-dropdown__list">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={pathname === item.href ? 'is-active' : ''}
                    onClick={() => {
                      setOpen(false)
                      onNavigate()
                    }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id={mobileId} className="mobile-nav-accordion d-lg-none" hidden={!mobileOpen}>
            {href ? (
              <Link href={href} className="mobile-nav-accordion__all" onClick={onNavigate}>
                All {label}
                <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
              </Link>
            ) : null}
            <ul className="mobile-nav-accordion__list">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? 'is-active' : ''}
                    onClick={onNavigate}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </li>
  )
}

export default NavDropdown
