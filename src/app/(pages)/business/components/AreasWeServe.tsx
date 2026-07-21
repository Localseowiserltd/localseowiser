'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getHomeAreaChips } from '@/data/locations'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

/** Local SEO Wiser Google Maps embed. */
const GOOGLE_MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5334164650594!2d-80.00688940986495!3d40.41918598185811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f1e08e63b315%3A0x8e82080820c54157!2sLocal%20Seo%20Wiser!5e0!3m2!1sen!2sae!4v1784604838823!5m2!1sen!2sae'

const areaStats = [
  { value: '100+', label: 'Businesses Served', icon: 'tabler:building-store', tone: 'orange' },
  { value: '15+', label: 'Areas Covered', icon: 'tabler:chart-bar', tone: 'blue' },
  { value: '100%', label: 'Local SEO Focused', icon: 'tabler:map-pin', tone: 'green' },
  { value: '5-Star', label: 'Client Satisfaction', icon: 'tabler:users', tone: 'purple' },
]

const AreasWeServe = () => {
  const areas = getHomeAreaChips()

  return (
    <section className="section areas-we-serve-section bg-light" id="areas">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="areas-we-serve-header text-center mx-auto">
            <p className="areas-we-serve-eyebrow mb-0">
              <IconifyIcon icon="tabler:map-pin" aria-hidden="true" />
              Areas We Serve
            </p>
            <h2 className="areas-we-serve-title mb-0">
              Serving the Entire <span className="areas-we-serve-title__accent">Pittsburgh</span> Metro
            </h2>
            <p className="areas-we-serve-intro mb-0">
              We help businesses throughout Pittsburgh and the surrounding communities. Whether your customers search by
              neighborhood or city, we build localized SEO strategies that improve visibility where it matters most.
            </p>
          </div>
        </ScrollReveal>

        <div className="areas-we-serve-body">
          <ScrollReveal animation="fade-up" className="areas-we-serve-map-col" hoverable={false}>
            <div className="areas-we-serve-map-card">
              <div className="areas-we-serve-map">
                <iframe
                  src={GOOGLE_MAPS_EMBED_SRC}
                  title="Local SEO Wiser on Google Maps"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="areas-we-serve-map-card__footer">
                <div className="areas-we-serve-map-card__footer-copy">
                  <span className="areas-we-serve-map-card__footer-icon">
                    <IconifyIcon icon="tabler:users" aria-hidden="true" />
                  </span>
                  <p className="mb-0">
                    <strong>Serving Pittsburgh &amp; Beyond.</strong> We help local businesses grow their visibility
                    wherever their customers search.
                  </p>
                </div>
                <Link href="/areas" className="areas-we-serve-map-card__cta">
                  View All Locations
                  <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="areas-we-serve-locations-col">
            <div className="areas-we-serve-grid">
              {areas.map((area, idx) =>
                area.href ? (
                  <ScrollReveal key={area.slug} animation="fade-up" delay={idx * 30}>
                    <Link href={area.href} className="areas-we-serve-pill">
                      <IconifyIcon icon="tabler:map-pin" aria-hidden="true" />
                      {area.name}
                    </Link>
                  </ScrollReveal>
                ) : (
                  <ScrollReveal key={area.slug} animation="fade-up" delay={idx * 30}>
                    <span className="areas-we-serve-pill areas-we-serve-pill--static">
                      <IconifyIcon icon="tabler:map-pin" aria-hidden="true" />
                      {area.name}
                    </span>
                  </ScrollReveal>
                ),
              )}
            </div>

            <div className="areas-we-serve-tail">
              <span className="areas-we-serve-tail__icon">
                <IconifyIcon icon="tabler:target" aria-hidden="true" />
              </span>
              <p className="mb-0">
                <strong>And everywhere in between.</strong> No matter where your customers are, we&apos;ll help you reach
                them.
              </p>
            </div>
          </div>
        </div>

        <div className="areas-we-serve-stats">
          {areaStats.map((stat, idx) => (
            <ScrollReveal key={stat.label} animation="fade-up" delay={idx * 40}>
              <article className={`areas-we-serve-stats__card areas-we-serve-stats__card--${stat.tone}`}>
                <span className="areas-we-serve-stats__icon">
                  <IconifyIcon icon={stat.icon} aria-hidden="true" />
                </span>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AreasWeServe
