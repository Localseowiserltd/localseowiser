import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import { aboutPageHero, aboutPageMeta } from '@/data/about'
import { buildAboutPageSchemas, buildHubPageMetadata } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import AboutPageSections from './AboutPageSections'

export const metadata: Metadata = buildHubPageMetadata({
  title: aboutPageMeta.title,
  description: aboutPageMeta.description,
  path: '/about',
  imageAlt: 'About Local SEO Wiser',
})

const AboutPage = () => {
  const schemas = buildAboutPageSchemas()

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`about-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader badge={aboutPageHero.badge} title={aboutPageHero.title} description={aboutPageHero.description} />
      <AboutPageSections />
    </SiteShell>
  )
}

export default AboutPage
