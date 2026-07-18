import type {
  LocationContentBlock,
  LocationCta,
  LocationHeroImage,
  LocationPage,
  LocationSchemaFields,
} from '@/types/location'
import { isLocationPublishable, validateLocationPage } from '@/lib/location-validation'

const emptyBlock = (): LocationContentBlock => ({
  title: '',
  body: '',
  items: [],
})

const emptyHeroImage = (): LocationHeroImage => ({
  src: '',
  alt: '',
})

const emptyCta = (): LocationCta => ({
  title: '',
  text: '',
  primaryLabel: '',
  primaryHref: '',
  secondaryLabel: '',
  secondaryHref: '',
})

const emptySchema = (): LocationSchemaFields => ({
  webPageName: '',
  webPageDescription: '',
  placeName: '',
  breadcrumbLabel: '',
  businessName: '',
  businessDescription: '',
  businessType: '',
})

/** Structural identity only — safe for registry without marketing copy. */
export type LocationStubInput = {
  slug: string
  name: string
  path?: string
  region?: string
  state?: string
  country?: string
  relatedServiceSlugs?: string[]
  nearbyAreaSlugs?: string[]
  resourceLinks?: LocationPage['resourceLinks']
}

/**
 * Creates an unpublished location record with empty content fields.
 * Do not fill marketing/SEO fields here — owner supplies those later.
 */
export const createEmptyLocationPage = (input: LocationStubInput): LocationPage => ({
  slug: input.slug,
  path: input.path,
  name: input.name,
  region: input.region ?? 'Pittsburgh',
  state: input.state ?? 'PA',
  country: input.country ?? 'USA',
  status: 'draft',
  contentApproved: false,
  metaTitle: '',
  metaDescription: '',
  h1: '',
  intro: '',
  heroParagraphs: [],
  heroImage: emptyHeroImage(),
  introduction: emptyBlock(),
  services: emptyBlock(),
  industries: emptyBlock(),
  process: emptyBlock(),
  sections: [],
  faqs: [],
  relatedServiceSlugs: input.relatedServiceSlugs ?? [],
  nearbyAreaSlugs: input.nearbyAreaSlugs ?? [],
  resourceLinks: input.resourceLinks ?? [],
  cta: emptyCta(),
  schema: emptySchema(),
})

/** Public path for a location page (custom `path` or default `/areas/{slug}`). */
export const getLocationPath = (page: LocationPage | string): string => {
  if (typeof page === 'string') {
    return `/areas/${page}`
  }
  if (page.path?.trim()) {
    return page.path.startsWith('/') ? page.path : `/${page.path}`
  }
  return `/areas/${page.slug}`
}

/** True when the page is served under `/areas/[slug]` (not a custom root path). */
export const usesAreasDynamicRoute = (page: LocationPage): boolean => {
  const path = getLocationPath(page)
  return path === `/areas/${page.slug}`
}

export const filterPublishableLocations = (pages: LocationPage[]): LocationPage[] =>
  pages.filter(isLocationPublishable)

export const filterDraftLocations = (pages: LocationPage[]): LocationPage[] =>
  pages.filter((page) => !isLocationPublishable(page))

/**
 * In development, draft pages may be previewed for architecture testing.
 * Production never serves unpublished pages.
 */
export const canPreviewLocationInDevelopment = (page: LocationPage): boolean => {
  if (process.env.NODE_ENV === 'production') return false
  return !isLocationPublishable(page)
}

export const getLocationPublishSummary = (pages: LocationPage[]) => {
  const publishable = filterPublishableLocations(pages)
  const drafts = filterDraftLocations(pages)
  const invalidApproved = pages.filter((page) => {
    if (page.status !== 'approved' && !page.contentApproved) return false
    return !validateLocationPage(page).publishable
  })

  return {
    total: pages.length,
    publishableCount: publishable.length,
    draftCount: drafts.length,
    invalidApprovedCount: invalidApproved.length,
  }
}
