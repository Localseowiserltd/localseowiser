import AreasListing from '@/components/locations/AreasListing'
import SiteShell from '@/components/layout/SiteShell'
import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import {
  getPublishedLocationPages,
  locationListingMeta,
} from '@/data/locations'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const publishedPages = () => getPublishedLocationPages()

export async function generateMetadata(): Promise<Metadata> {
  const pages = publishedPages()

  if (pages.length === 0) {
    if (process.env.NODE_ENV === 'production') {
      return { title: 'Not Found', robots: { index: false, follow: false } }
    }
    return {
      title: { absolute: `Areas (Preview) | ${SITE_NAME}` },
      description: 'Development listing — no location pages are published yet.',
      robots: { index: false, follow: false },
    }
  }

  const meta = locationListingMeta
  if (!meta.title.trim() || !meta.description.trim()) {
    return {
      title: { absolute: `Areas | ${SITE_NAME}` },
      robots: { index: false, follow: false },
    }
  }

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: `${SITE_ORIGIN}/areas` },
  }
}

const AreasIndexPage = () => {
  const pages = publishedPages()

  if (process.env.NODE_ENV === 'production' && pages.length === 0) {
    notFound()
  }

  return (
    <SiteShell>
      <AreasListing pages={pages} meta={locationListingMeta} />
    </SiteShell>
  )
}

export default AreasIndexPage
