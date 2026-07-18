import { getLocationPath } from '@/lib/location-publish'
import { isLocationPublishable } from '@/lib/location-validation'
import type { LocationInternalLink, LocationPage } from '@/types/location'

export type LocationServiceResolver = (slug: string) => { title: string; slug: string } | undefined
export type LocationPageResolver = (slug: string) => LocationPage | undefined

/**
 * Builds privacy-safe internal links for a location page.
 * - Related services: only when the service slug resolves on the site
 * - Nearby areas: only when the target location is publishable
 * Does not invent link labels beyond the resolved page title / location name.
 */
export const buildLocationInternalLinks = (
  page: LocationPage,
  options: {
    resolveService: LocationServiceResolver
    resolveLocation: LocationPageResolver
    /** When true, allow linking to draft locations (dev preview only) */
    includeUnpublishedNearby?: boolean
  },
): {
  services: LocationInternalLink[]
  nearbyAreas: LocationInternalLink[]
} => {
  const services: LocationInternalLink[] = []
  for (const serviceSlug of page.relatedServiceSlugs) {
    const service = options.resolveService(serviceSlug)
    if (!service) continue
    services.push({
      label: service.title,
      href: `/${service.slug}`,
    })
  }

  const nearbyAreas: LocationInternalLink[] = []
  for (const areaSlug of page.nearbyAreaSlugs) {
    if (areaSlug === page.slug) continue
    const target = options.resolveLocation(areaSlug)
    if (!target) continue
    const allow =
      isLocationPublishable(target) ||
      (options.includeUnpublishedNearby === true && process.env.NODE_ENV !== 'production')
    if (!allow) continue
    nearbyAreas.push({
      label: target.name,
      href: getLocationPath(target),
    })
  }

  return { services, nearbyAreas }
}

/** Homepage / listing chip: link only when publishable. */
export const getLocationChipHref = (page: LocationPage | undefined): string | undefined => {
  if (!page) return undefined
  if (!isLocationPublishable(page)) return undefined
  return getLocationPath(page)
}
