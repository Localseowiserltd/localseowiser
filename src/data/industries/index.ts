import type { IndustryPage } from '@/types/industry'
import { getIndustryPath, isIndustryPublishable } from '@/lib/industry-publish'
import localSeoForDentists from './local-seo-for-dentists'
import localSeoForDoctors from './local-seo-for-doctors'
import localSeoForLawyers from './local-seo-for-lawyers'
import localSeoForPlumbers from './local-seo-for-plumbers'
import localSeoForHvac from './local-seo-for-hvac'

/**
 * Industry page registry.
 * Register owner-approved industry pages here (e.g. Local SEO for Dentists).
 */
export const industryPages: IndustryPage[] = [
  localSeoForDentists,
  localSeoForDoctors,
  localSeoForLawyers,
  localSeoForPlumbers,
  localSeoForHvac,
]

export const getIndustryPageBySlug = (slug: string): IndustryPage | undefined =>
  industryPages.find((page) => page.slug === slug)

export const getIndustryPageByPath = (path: string): IndustryPage | undefined => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return industryPages.find((page) => getIndustryPath(page) === normalized)
}

export const getPublishedIndustryPages = (): IndustryPage[] =>
  industryPages.filter(isIndustryPublishable)

export { getIndustryPath, isIndustryPublishable }
