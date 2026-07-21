import AreasListing from '@/components/locations/AreasListing'
import SiteShell from '@/components/layout/SiteShell'
import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import { getPublishedLocationPages, getRoutableLocationPages, locationListingMeta } from '@/data/locations'
import type { Metadata } from 'next'

const pagesForListing = () =>
  process.env.NODE_ENV === 'production' ? getPublishedLocationPages() : getRoutableLocationPages()

export async function generateMetadata(): Promise<Metadata> {
  const meta = locationListingMeta
  return {
    title: { absolute: meta.title || `Areas | ${SITE_NAME}` },
    description: meta.description,
    alternates: { canonical: `${SITE_ORIGIN}/areas` },
  }
}

const AreasIndexPage = () => {
  const pages = pagesForListing()

  return (
    <SiteShell>
      <AreasListing pages={pages} meta={locationListingMeta} />
    </SiteShell>
  )
}

export default AreasIndexPage
