import BrandLogo from '@/components/BrandLogo'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { contactInfo, contactMailtoHref, contactTelHref, footerSocialLinks } from '@/data/site-content'
import Link from 'next/link'

const SiteFooter = () => {
  return (
    <div className="footer-v2-wrap">
      <footer className="footer-v2">
        <div className="footer-v2-grid">
          <div className="footer-v2-brand">
            <BrandLogo className="brand-logo-footer" href="/" />
            <p>
              Based in Pittsburgh, Pennsylvania, Local SEO Wiser helps service-area and storefront businesses across Pittsburgh turn
              nearby search intent into measurable pipeline through practical, transparent local SEO execution.
            </p>
            <div className="footer-v2-social">
              {footerSocialLinks.map((item) => (
                <Link key={item.icon} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                  <IconifyIcon icon={item.icon} />
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-v2-links">
            <div>
              <h6>Pages</h6>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/packages">Packages</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6>Services</h6>
              <ul>
                <li>
                  <Link href="/local-seo">Local SEO</Link>
                </li>
                <li>
                  <Link href="/google-map-optimization">Map Optimization</Link>
                </li>
                <li>
                  <Link href="/technical-seo">Technical SEO</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6>Contact</h6>
              <ul>
                <li>
                  <a href={contactMailtoHref}>{contactInfo.email}</a>
                </li>
                <li>
                  <a href={contactTelHref}>{contactInfo.phone}</a>
                </li>
                <li>
                  <span>{contactInfo.location}</span>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-v2-bottom">
          <p>© 2026 Local SEO Wiser. All Rights Reserved.</p>
          <p>Pittsburgh Local SEO Agency</p>
        </div>
        <div className="footer-v2-watermark">
          <span>Local SEO Wiser</span>
        </div>
      </footer>
    </div>
  )
}

export default SiteFooter
