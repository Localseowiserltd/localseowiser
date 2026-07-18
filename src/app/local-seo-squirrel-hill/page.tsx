import LocationPageScreen, {
  buildLocationRouteMetadata,
} from '@/components/locations/LocationPageScreen'
import SiteShell from '@/components/layout/SiteShell'
import { getLocationPageBySlug } from '@/data/locations'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const SLUG = 'local-seo-squirrel-hill'

export async function generateMetadata(): Promise<Metadata> {
  return buildLocationRouteMetadata(getLocationPageBySlug(SLUG))
}

/**
 * Custom-path location page for Squirrel Hill.
 * Content is owned by `src/data/locations/local-seo-squirrel-hill.ts`.
 */
const LocalSeoSquirrelHillPage = () => {
  const page = getLocationPageBySlug(SLUG)
  if (!page) notFound()

  return (
    <SiteShell>
      <LocationPageScreen page={page} />
    </SiteShell>
  )
}

export default LocalSeoSquirrelHillPage
