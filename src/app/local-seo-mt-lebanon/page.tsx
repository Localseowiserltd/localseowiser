import LocationPageScreen, {
  buildLocationRouteMetadata,
} from '@/components/locations/LocationPageScreen'
import SiteShell from '@/components/layout/SiteShell'
import { getLocationPageBySlug } from '@/data/locations'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const SLUG = 'local-seo-mt-lebanon'

export async function generateMetadata(): Promise<Metadata> {
  return buildLocationRouteMetadata(getLocationPageBySlug(SLUG))
}

/**
 * Custom-path location page for Mt. Lebanon.
 * Content is owned by `src/data/locations/local-seo-mt-lebanon.ts`.
 */
const LocalSeoMtLebanonPage = () => {
  const page = getLocationPageBySlug(SLUG)
  if (!page) notFound()

  return (
    <SiteShell>
      <LocationPageScreen page={page} />
    </SiteShell>
  )
}

export default LocalSeoMtLebanonPage
