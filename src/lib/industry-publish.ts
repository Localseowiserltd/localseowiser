import type { IndustryPage } from '@/types/industry'
import { validateLocationPage } from '@/lib/location-validation'
import { industryPageToLocationView } from '@/lib/industry-seo'

export function isIndustryPublishable(page: IndustryPage): boolean {
  return validateLocationPage(industryPageToLocationView(page)).publishable
}

export function getIndustryPath(page: IndustryPage): string {
  return page.path.startsWith('/') ? page.path : `/${page.path}`
}
