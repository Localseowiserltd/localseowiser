import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import { SITE_ORIGIN } from '@/config/site'
import { serviceCategories } from '@/data/site-content'
import { buildHubPageMetadata, buildServicesHubSchemas } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import ServicesPageSections from './ServicesPageSections'

const servicesTitle = 'Local SEO Services in Pittsburgh | Local SEO Wiser'
const servicesDescription =
  'Explore our Local SEO services, Google Maps optimization, technical SEO, PPC, web development, and digital marketing solutions.'

export const metadata: Metadata = buildHubPageMetadata({
  title: servicesTitle,
  description: servicesDescription,
  path: '/services',
  imageAlt: 'Local SEO Services in Pittsburgh',
})

const ServicesPage = () => {
  const listItems = serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      name: service.title,
      url: `${SITE_ORIGIN}${service.href}`,
      description: service.description,
    })),
  )
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
      <div className="services-page">
        <PageHeader
          badge="Our Services"
          title="Local SEO Services in Pittsburgh"
          description="Explore Local SEO, Google Maps optimization, technical SEO, PPC, web development, and digital marketing solutions built for local growth."
        />
        <ServicesPageSections />
      </div>
    </SiteShell>
  )
}

export default ServicesPage
