import LocationPageView from '@/components/locations/LocationPageView'
import {
  getLocationPageBySlug,
  isLocationPublishable,
} from '@/data/locations'
import { buildLocationInternalLinks } from '@/lib/location-links'
import {
  buildLocationBreadcrumbSchema,
  buildLocationFaqSchema,
  buildLocationImageObjectSchema,
  buildLocationPageMetadata,
  buildLocationPreviewMetadata,
  buildLocationServiceSchemas,
  buildLocationWebPageSchema,
} from '@/lib/location-seo'
import { getServicePageBySlug } from '@/data/site-content'
import type { LocationPage } from '@/types/location'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function buildLocationRouteMetadata(page: LocationPage | undefined): Metadata {
  if (!page) return { title: 'Not Found' }

  if (!isLocationPublishable(page)) {
    if (process.env.NODE_ENV === 'production') {
      return { title: 'Not Found', robots: { index: false, follow: false } }
    }
    return buildLocationPreviewMetadata(page)
  }

  return buildLocationPageMetadata(page)
}

type LocationPageScreenProps = {
  page: LocationPage
}

/**
 * Shared location page shell: breadcrumbs, sections, internal links, JSON-LD.
 * Used by `/areas/[slug]` and custom-path routes such as `/local-seo-shadyside`.
 */
export default function LocationPageScreen({ page }: LocationPageScreenProps) {
  const publishable = isLocationPublishable(page)
  if (!publishable && process.env.NODE_ENV === 'production') {
    notFound()
  }

  const { services, nearbyAreas } = buildLocationInternalLinks(page, {
    resolveService: (serviceSlug) => {
      const service = getServicePageBySlug(serviceSlug)
      if (!service) return undefined
      return { title: service.title, slug: service.slug }
    },
    resolveLocation: getLocationPageBySlug,
    includeUnpublishedNearby: process.env.NODE_ENV !== 'production',
  })

  const breadcrumbSchema = buildLocationBreadcrumbSchema(page)
  const webPageSchema = buildLocationWebPageSchema(page)
  const faqSchema = publishable ? buildLocationFaqSchema(page) : null
  const imageObjectSchema = publishable ? buildLocationImageObjectSchema(page) : null
  const businessSchemas = publishable ? buildLocationServiceSchemas(page) : []
  const crumbLabel = page.schema.breadcrumbLabel.trim() || page.name

  return (
    <>
      <LocationPageView
        page={page}
        isPreview={!publishable}
        serviceLinks={services}
        nearbyLinks={nearbyAreas}
        breadcrumbLabel={crumbLabel}
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
          {imageObjectSchema ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
            />
          ) : null}
          {businessSchemas.map((schema) => (
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
