import IndustriesGrid from './IndustriesGrid'
import SectionHeader from '@/components/SectionHeader'
import { homepageIndustryCards } from '@/data/industries/home'
import { industriesSection } from '@/data/site-content'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

/**
 * Homepage industries section — server shell + small client Show More island.
 * Card data comes from `@/data/industries/home` (single shared source).
 */
const Industries = () => {
  return (
    <section className="section industries-section bg-light" id="industries">
      <Container>
        <div className="industries-carousel-header">
          <SectionHeader eyebrow={industriesSection.eyebrow} title={industriesSection.title} />
          <p className="industries-ask-us text-center">
            Don&apos;t see yours? We probably work with businesses like it.{' '}
            <Link href="/contact" className="text-primary fw-semibold">
              ask us
            </Link>
            .
          </p>
        </div>

        <IndustriesGrid items={homepageIndustryCards} />
      </Container>
    </section>
  )
}

export default Industries
