import SiteShell from '@/components/layout/SiteShell'
import { SITE_ORIGIN } from '@/config/site'
import { servicesHubCards } from '@/data/services-hub'
import { buildHubPageMetadata, buildServicesHubSchemas } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import ServicesPageSections from './ServicesPageSections'

const servicesTitle = 'Digital Marketing Services in Pittsburgh | Local SEO Wiser'
const servicesDescription =
  'Explore Local SEO, Google Ads, web design, content writing, and digital marketing services that drive real results for Pittsburgh businesses.'

export const metadata: Metadata = buildHubPageMetadata({
  title: servicesTitle,
  description: servicesDescription,
  path: '/services',
  imageAlt: 'Digital marketing services that drive real results',
})

const ServicesPage = () => {
  const listItems = servicesHubCards.map((service) => ({
    name: service.title,
    url: `${SITE_ORIGIN}${service.href}`,
    description: service.description,
  }))
  const schemas = buildServicesHubSchemas(listItems)

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`services-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicesPageSections />
    </SiteShell>
  )
}

export default ServicesPage
