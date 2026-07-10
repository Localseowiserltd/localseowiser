'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ButtonLink from '@/components/ButtonLink'
import { serviceCategories } from '@/data/site-content'
import { Container } from 'react-bootstrap'
import SeoServicesShowcase from './SeoServicesShowcase'
import ServiceBlocksShowcase from './ServiceBlocksShowcase'

const seoCategory = serviceCategories.find((category) => category.id === 'search-engine-optimization')

const ServicesPageSections = () => {
  return (
    <>
      {seoCategory ? <SeoServicesShowcase title={seoCategory.title} subtitle={seoCategory.subtitle} services={seoCategory.services} /> : null}

      <ServiceBlocksShowcase />

      <section className="home-cta-section" id="services-cta">
        <Container>
          <ScrollReveal animation="fade-up">
            <article className="home-cta-task home-cta-task--main services-page-cta">
              <div className="home-cta-task__layout services-page-cta__layout">
                <div className="home-cta-task__main">
                  <h3 className="home-cta-task__title">Not sure which service fits your business?</h3>
                  <p className="home-cta-task__text mb-0">
                    Contact us and we will recommend the right mix of local SEO, ads, and web work for your market.
                  </p>
                </div>

                <aside className="home-cta-task home-cta-task--pick services-page-cta__aside">
                  <div className="home-cta-task__footer">
                    <div className="home-cta-task__actions">
                      <ButtonLink variant="primary" size="sm" href="/contact">
                        Contact Us
                      </ButtonLink>
                    </div>
                  </div>
                </aside>
              </div>
            </article>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}

export default ServicesPageSections
