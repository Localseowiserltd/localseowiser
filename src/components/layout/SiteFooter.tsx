'use client'

import BrandLogo from '@/components/BrandLogo'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { contactMailtoHref, contactPhones, footerSocialLinks, serviceCategories } from '@/data/site-content'
import Link from 'next/link'

const footerLocations = [
  {
    code: 'USA',
    phone: '+1 412 663 7288',
    tel: '+14126637288',
    email: 'info@localseowiser.com',
    address: '307 Freeland St, Pittsburgh, PA 15210, United States',
  },
  {
    code: 'UK',
    phone: '+44 7454 758272',
    tel: '+447454758272',
    email: 'info@localseowiser.com',
    address: 'Office 1267 85 Dunstall Hill, Wolverhampton, United Kingdom, WV6 0SR',
  },
] as const

const primaryPhone = contactPhones?.[0] ?? footerLocations[0]

const seoCategory = serviceCategories?.find((category) => category.id === 'search-engine-optimization')
const webCategory = serviceCategories?.find((category) => category.id === 'web-design')
const semCategory = serviceCategories?.find((category) => category.id === 'search-engine-marketing')
const socialCategory = serviceCategories?.find((category) => category.id === 'social-media')

const FooterLinkList = ({ title, items }: { title: string; items: { title: string; href: string }[] }) => (
  <div className="footer-v2-nav-block">
    <h6 className="footer-v2-heading">{title}</h6>
    <ul className="footer-v2-nav-list">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>
            <span className="footer-v2-nav-icon" aria-hidden="true">
              <IconifyIcon icon="tabler:arrow-up-right" />
            </span>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="footer-v2-wrap">
      <footer className="footer-v2">
        <div className="footer-v2-main">
          <div className="footer-v2-services">
            <div className="footer-v2-services-col">
              {seoCategory ? <FooterLinkList title="SEO Services" items={seoCategory.services} /> : null}
              {socialCategory ? <FooterLinkList title="Social Media" items={socialCategory.services} /> : null}
            </div>

            <div className="footer-v2-services-col">
              {webCategory ? <FooterLinkList title="Web Design & Development" items={webCategory.services} /> : null}
              {semCategory ? <FooterLinkList title="Search Engine Marketing" items={semCategory.services} /> : null}
            </div>

            <div className="footer-v2-badges">
              <a
                className="footer-v2-badge footer-v2-badge--maps"
                href="https://www.google.com/maps/search/?api=1&query=Local+SEO+Wiser+Pittsburgh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconifyIcon icon="tabler:map-pin" className="footer-v2-badge__icon" />
                <span>Find us on Google Maps</span>
              </a>
            </div>
          </div>

          <div className="footer-v2-brand-panel">
            <BrandLogo className="brand-logo-footer" href="/" variant="footer" />
            <a href={`tel:${primaryPhone.tel}`} className="footer-v2-phone">
              <IconifyIcon icon="tabler:phone" aria-hidden="true" />
              <span>{primaryPhone.phone}</span>
            </a>
            <p>
              Local SEO Wiser helps Pittsburgh businesses and international clients turn nearby search intent into measurable
              calls, leads, and customers — with transparent reporting and no long contracts.
            </p>
            <p>
              From Google Business Profile and citations to WordPress, Shopify, PPC, and social, we build practical systems that
              keep working after launch.
            </p>
            <Link href="/contact" className="footer-v2-careers">
              <span className="footer-v2-nav-icon" aria-hidden="true">
                <IconifyIcon icon="tabler:arrow-up-right" />
              </span>
              Contact Us
            </Link>
            <div className="footer-v2-social">
              {(footerSocialLinks ?? []).map((item) => (
                <Link key={item.icon} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                  <IconifyIcon icon={item.icon} />
                </Link>
              ))}
            </div>
            <p className="footer-v2-copy">© Copyright 2026 All Rights Reserved. Local SEO Agency in Pittsburgh.</p>
          </div>
        </div>

        <div className="footer-v2-locations">
          {footerLocations.map((location) => (
            <div key={location.code} className="footer-v2-location">
              <h3 className="footer-v2-location__code">{location.code}.</h3>
              <a href={`tel:${location.tel}`}>{location.phone}</a>
              <a href={contactMailtoHref}>{location.email}</a>
              <p>{location.address}</p>
            </div>
          ))}
        </div>

        <button type="button" className="footer-v2-top" onClick={scrollToTop} aria-label="Back to top">
          <IconifyIcon icon="tabler:chevron-up" />
        </button>
      </footer>
    </div>
  )
}

export default SiteFooter
