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
}

const NavDropdown = ({ label, href, items, pathname, onNavigate }: NavDropdownProps) => {
  const [open, setOpen] = useState(false)
  const isActive = items.some((item) => pathname === item.href) || (href ? pathname === href : false)

  const trigger = href ? (
    <Link
      href={href}
      className={`brutalist-navbar__link ${isActive ? 'is-active' : ''}`}
      onClick={onNavigate}
      aria-haspopup="true"
      aria-expanded={open}>
      {label}
      <IconifyIcon icon="tabler:chevron-down" className="brutalist-navbar__chevron d-none d-lg-inline" />
    </Link>
  ) : (
    <button
      type="button"
      className={`brutalist-navbar__link brutalist-navbar__link--dropdown-toggle ${isActive ? 'is-active' : ''}`}
      aria-haspopup="true"
      aria-expanded={open}
      onClick={() => setOpen((value) => !value)}>
      {label}
      <IconifyIcon icon="tabler:chevron-down" className="brutalist-navbar__chevron" />
    </button>
  )

  return (
    <li
      className={`brutalist-navbar__item brutalist-navbar__item--has-dropdown brutalist-navbar__item--simple-dropdown ${open ? 'is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      {trigger}
      {items.length ? (
        <div className="nav-simple-dropdown" role="menu" aria-label={label}>
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
      ) : null}
    </li>
  )
}

export default NavDropdown
