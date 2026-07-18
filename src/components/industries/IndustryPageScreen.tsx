import LocationPageView from '@/components/locations/LocationPageView'
import { isIndustryPublishable } from '@/data/industries'
import { getLocationPageBySlug } from '@/data/locations'
import { getServicePageBySlug } from '@/data/site-content'
import { buildLocationInternalLinks } from '@/lib/location-links'
import {
  buildIndustryBreadcrumbSchema,
  buildIndustryEntitySchemas,
  buildIndustryFaqSchema,
  buildIndustryPageMetadata,
  buildIndustryPreviewMetadata,
  buildIndustryWebPageSchema,
  industryPageToLocationView,
} from '@/lib/industry-seo'
import type { IndustryPage } from '@/types/industry'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function buildIndustryRouteMetadata(page: IndustryPage | undefined): Metadata {
  if (!page) return { title: 'Not Found' }

  if (!isIndustryPublishable(page)) {
    if (process.env.NODE_ENV === 'production') {
      return { title: 'Not Found', robots: { index: false, follow: false } }
    }
    return buildIndustryPreviewMetadata(page)
  }

  return buildIndustryPageMetadata(page)
}

type IndustryPageScreenProps = {
  page: IndustryPage
}

/**
 * Industry page shell: shared location UI, industry breadcrumbs, and JSON-LD.
 */
export default function IndustryPageScreen({ page }: IndustryPageScreenProps) {
  const publishable = isIndustryPublishable(page)
  if (!publishable && process.env.NODE_ENV === 'production') {
    notFound()
  }

  const viewPage = industryPageToLocationView(page)

  const { services, nearbyAreas } = buildLocationInternalLinks(viewPage, {
    resolveService: (serviceSlug) => {
      const service = getServicePageBySlug(serviceSlug)
      if (!service) return undefined
      return { title: service.title, slug: service.slug }
    },
    resolveLocation: getLocationPageBySlug,
    includeUnpublishedNearby: process.env.NODE_ENV !== 'production',
  })

  const breadcrumbSchema = buildIndustryBreadcrumbSchema(page)
  const webPageSchema = buildIndustryWebPageSchema(page)
  const faqSchema = publishable ? buildIndustryFaqSchema(page) : null
  const entitySchemas = publishable ? buildIndustryEntitySchemas(page) : []
  const crumbLabel = page.schema.breadcrumbLabel.trim() || page.name

  return (
    <>
      <LocationPageView
        page={viewPage}
        isPreview={!publishable}
        serviceLinks={services}
        nearbyLinks={nearbyAreas}
        breadcrumbLabel={crumbLabel}
        breadcrumbParent={{ label: 'Local SEO Services', href: '/local-seo' }}
        nearbyHeading="Areas we serve"
      />

      {publishable ? (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
          />
          {faqSchema ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
          ) : null}
          {entitySchemas.map((schema) => (
            <script
              key={String(schema['@type'])}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
        </>
      ) : null}
    </>
  )
}
