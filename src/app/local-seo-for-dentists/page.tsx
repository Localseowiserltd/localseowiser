import IndustryPageScreen, {
  buildIndustryRouteMetadata,
} from '@/components/industries/IndustryPageScreen'
import SiteShell from '@/components/layout/SiteShell'
import { getIndustryPageBySlug } from '@/data/industries'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const SLUG = 'local-seo-for-dentists'

export async function generateMetadata(): Promise<Metadata> {
  return buildIndustryRouteMetadata(getIndustryPageBySlug(SLUG))
}

/**
 * Industry page for Local SEO for Dentists.
 * Content is owned by `src/data/industries/local-seo-for-dentists.ts`.
 */
const LocalSeoForDentistsPage = () => {
  const page = getIndustryPageBySlug(SLUG)
  if (!page) notFound()

  return (
    <SiteShell>
      <IndustryPageScreen page={page} />
    </SiteShell>
  )
}

export default LocalSeoForDentistsPage
