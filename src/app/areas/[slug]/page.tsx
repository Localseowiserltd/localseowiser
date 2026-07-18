import LocationPageScreen, {
  buildLocationRouteMetadata,
} from '@/components/locations/LocationPageScreen'
import SiteShell from '@/components/layout/SiteShell'
import {
  getAreasRouteLocationPages,
  getLocationPageBySlug,
} from '@/data/locations'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type LocationPageProps = {
  params: Promise<{ slug: string }>
}

/**
 * Production: only approved + validated `/areas/{slug}` pages are statically generated.
 * Custom-path locations (e.g. /local-seo-shadyside) use dedicated routes.
 * Development: draft stubs under /areas are previewable (noindex).
 */
export const generateStaticParams = () =>
  getAreasRouteLocationPages().map((page) => ({
    slug: page.slug,
  }))

export const dynamicParams = false

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  return buildLocationRouteMetadata(getLocationPageBySlug(slug))
}

const LocationAreaPage = async ({ params }: LocationPageProps) => {
  const { slug } = await params
  const page = getLocationPageBySlug(slug)
  if (!page) notFound()

  return (
    <SiteShell>
      <LocationPageScreen page={page} />
    </SiteShell>
  )
}

export default LocationAreaPage
