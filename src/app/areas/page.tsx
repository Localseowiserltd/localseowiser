import AreasListing from '@/components/locations/AreasListing'
import SiteShell from '@/components/layout/SiteShell'
import { getLocationPath } from '@/lib/location-publish'
import { buildAbsoluteUrl, buildAreasHubSchemas, buildHubPageMetadata } from '@/lib/hub-seo'
import { getPublishedLocationPages, getRoutableLocationPages, locationListingMeta } from '@/data/locations'
import type { Metadata } from 'next'

const pagesForListing = () =>
  process.env.NODE_ENV === 'production' ? getPublishedLocationPages() : getRoutableLocationPages()

export async function generateMetadata(): Promise<Metadata> {
  const meta = locationListingMeta
  return buildHubPageMetadata({
    title: meta.title || 'Local SEO Locations in Pittsburgh | Areas We Serve',
    description:
      meta.description ||
      'Explore Local SEO services across Pittsburgh neighborhoods and surrounding communities served by Local SEO Wiser.',
    path: '/areas',
    imageSrc: '/pittsburgh-skyline-hero.jpg',
    imageAlt: 'Pittsburgh skyline — areas Local SEO Wiser serves',
  })
}

const AreasIndexPage = () => {
  const pages = pagesForListing()
  const schemas = buildAreasHubSchemas(
    pages.map((page) => ({
      name: page.name,
      url: buildAbsoluteUrl(getLocationPath(page)),
      description: page.metaDescription?.trim() || undefined,
    })),
  )

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`areas-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <AreasListing pages={pages} meta={locationListingMeta} />
    </SiteShell>
  )
}

export default AreasIndexPage
