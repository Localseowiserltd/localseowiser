import LocationPageScreen, {
  buildLocationRouteMetadata,
} from '@/components/locations/LocationPageScreen'
import SiteShell from '@/components/layout/SiteShell'
import { getLocationPageBySlug } from '@/data/locations'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const SLUG = 'local-seo-oakland'

export async function generateMetadata(): Promise<Metadata> {
  return buildLocationRouteMetadata(getLocationPageBySlug(SLUG))
}

/**
 * Custom-path location page for Oakland.
 * Content is owned by `src/data/locations/local-seo-oakland.ts`.
 */
const LocalSeoOaklandPage = () => {
  const page = getLocationPageBySlug(SLUG)
  if (!page) notFound()

  return (
    <SiteShell>
      <LocationPageScreen page={page} />
    </SiteShell>
  )
}

export default LocalSeoOaklandPage
