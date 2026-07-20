'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getHomeAreaChips } from '@/data/locations'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

const GOOGLE_MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.533413140628!2d-80.00459342345208!3d40.41918605548911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f1e08e63b315%3A0x8e82080820c54157!2sLocal%20Seo%20Wiser!5e0!3m2!1sen!2sus!4v1782311525787!5m2!1sen!2sus'

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
            <h2 className="areas-we-serve-title mb-0">Serving the entire Pittsburgh metro</h2>
            <p className="areas-we-serve-intro mb-0">
              We help businesses throughout Pittsburgh and the surrounding communities. Whether your customers search by
              neighborhood or city, we build localized SEO strategies that improve visibility where it matters most.
            </p>
          </div>

          <div className="areas-we-serve-body">
            <div className="areas-we-serve-map-col">
              <div className="areas-we-serve-map">
                <iframe
                  src={GOOGLE_MAPS_EMBED_SRC}
                  title="Local SEO Wiser on Google Maps"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="areas-we-serve-locations-col">
              <div className="areas-we-serve-grid">
                {areas.map((area) =>
                  area.href ? (
                    <Link key={area.slug} href={area.href} className="areas-we-serve-pill">
                      <IconifyIcon icon="tabler:building" aria-hidden="true" />
                      {area.name}
                    </Link>
                  ) : (
                    <span key={area.slug} className="areas-we-serve-pill areas-we-serve-pill--static">
                      <IconifyIcon icon="tabler:building" aria-hidden="true" />
                      {area.name}
                    </span>
                  ),
                )}
              </div>

              <p className="areas-we-serve-tail mb-0">And everywhere in between.</p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

export default AreasWeServe
