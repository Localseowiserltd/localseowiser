import { createEmptyLocationPage, getLocationPath, usesAreasDynamicRoute } from '@/lib/location-publish'
import type { LocationListingMeta, LocationNavItem, LocationPage } from '@/types/location'
import {
  assertNoInvalidApprovedLocations,
  isLocationPublishable,
  validateLocationPage,
} from '@/lib/location-validation'
import localSeoCranberryTownship from './local-seo-cranberry-township'
import localSeoLawrenceville from './local-seo-lawrenceville'
import localSeoMonroeville from './local-seo-monroeville'
import localSeoMtLebanon from './local-seo-mt-lebanon'
import localSeoNorthHills from './local-seo-north-hills'
import localSeoNorthShore from './local-seo-north-shore'
import localSeoOakland from './local-seo-oakland'
import localSeoRobinsonTownship from './local-seo-robinson-township'
import localSeoShadyside from './local-seo-shadyside'
import localSeoSouthHills from './local-seo-south-hills'
import localSeoSouthSide from './local-seo-south-side'
import localSeoSquirrelHill from './local-seo-squirrel-hill'
import localSeoStripDistrict from './local-seo-strip-district'

/**
 * Location registry.
 *
 * Rules:
 * - Structural names/slugs may be set for routing.
 * - All marketing/SEO content fields stay empty until the owner supplies approved copy.
 * - Do not invent, generate, or paraphrase location-page content here.
 * - Pages publish only when status === "approved", contentApproved === true,
 *   and validateLocationPage().publishable === true.
 */

/** Remaining area stubs (no dedicated content file yet). */
const LOCATION_STUBS: { slug: string; name: string }[] = []

/**
 * Register every location page here.
 * Dedicated files replace stubs when owner-approved content is ready.
 */
export const locationPages: LocationPage[] = [
  localSeoShadyside,
  localSeoLawrenceville,
  localSeoOakland,
  localSeoSquirrelHill,
  localSeoStripDistrict,
  localSeoNorthShore,
  localSeoSouthSide,
  localSeoMtLebanon,
  localSeoCranberryTownship,
  localSeoMonroeville,
  localSeoRobinsonTownship,
  localSeoNorthHills,
  localSeoSouthHills,
  ...LOCATION_STUBS.map((stub) => createEmptyLocationPage(stub)),
]

/** Listing chrome only — empty until owner supplies approved listing copy. */
export const locationListingMeta: LocationListingMeta = {
  title: '',
  description: '',
  h1: '',
  intro: '',
}

assertNoInvalidApprovedLocations(locationPages)

export const getLocationPageBySlug = (slug: string): LocationPage | undefined =>
  locationPages.find((page) => page.slug === slug)

export const getLocationPageByPath = (path: string): LocationPage | undefined => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return locationPages.find((page) => getLocationPath(page) === normalized)
}

export const getPublishedLocationPages = (): LocationPage[] =>
  locationPages.filter(isLocationPublishable)

export const getDraftLocationPages = (): LocationPage[] =>
  locationPages.filter((page) => !isLocationPublishable(page))

/**
 * Pages for `/areas/[slug]` SSG.
 * Custom-path pages (e.g. /local-seo-shadyside) are excluded — they have dedicated routes.
 */
export const getAreasRouteLocationPages = (): LocationPage[] => {
  const pool =
    process.env.NODE_ENV === 'production' ? getPublishedLocationPages() : locationPages
  return pool.filter(usesAreasDynamicRoute)
}

/** All pages that may be previewed or published (includes custom-path pages). */
export const getRoutableLocationPages = (): LocationPage[] => {
  if (process.env.NODE_ENV === 'production') {
    return getPublishedLocationPages()
  }
  return locationPages
}

export const getLocationNavItems = (limit = 12): LocationNavItem[] =>
  getPublishedLocationPages()
    .slice(0, limit)
    .map((page) => ({
      label: page.name,
      href: getLocationPath(page),
      name: page.name,
    }))

/** Homepage chips — names from registry; href only when publishable. */
export const getHomeAreaChips = (): { name: string; slug: string; href?: string }[] =>
  locationPages.map((page) => ({
    name: page.name,
    slug: page.slug,
    href: isLocationPublishable(page) ? getLocationPath(page) : undefined,
  }))

export {
  isLocationPublishable,
  validateLocationPage,
  getLocationPath,
  usesAreasDynamicRoute,
}
