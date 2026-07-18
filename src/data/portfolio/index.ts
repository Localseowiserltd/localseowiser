import type { PortfolioNavItem, PortfolioProject } from '@/types/portfolio'
import { portfolioListingMeta } from './listing'
import confidentialGbp01 from './confidential-gbp-01'
import confidentialGbp02 from './confidential-gbp-02'
import confidentialGbp03 from './confidential-gbp-03'
import confidentialGbp04 from './confidential-gbp-04'
import confidentialGsc01 from './confidential-gsc-01'
import confidentialGsc02 from './confidential-gsc-02'
import confidentialGsc03 from './confidential-gsc-03'
import confidentialGsc04 from './confidential-gsc-04'
import dPetCare from './d-pet-care'
import filXpatCleaning from './fil-xpat-cleaning'
import mbcRenovation from './mbc-renovation'
import yaraLuxeInteriors from './yara-luxe-interiors'
import { isConfidentialProject } from '@/lib/portfolio-display'

/**
 * Register every project here.
 * To add a new case study: create `./your-slug.ts` and import it below.
 * Do not invent metrics, testimonials, or rankings.
 */
export const portfolioProjects: PortfolioProject[] = [
  mbcRenovation,
  filXpatCleaning,
  dPetCare,
  yaraLuxeInteriors,
  confidentialGsc01,
  confidentialGsc02,
  confidentialGsc03,
  confidentialGsc04,
  confidentialGbp01,
  confidentialGbp02,
  confidentialGbp03,
  confidentialGbp04,
].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

export { portfolioListingMeta }
export { SITE_ORIGIN, SITE_NAME } from '@/config/site'

export const getPortfolioProjectBySlug = (slug: string): PortfolioProject | undefined =>
  portfolioProjects.find((project) => project.slug === slug)

export const getAvailableScreenshots = <T extends { available?: boolean }>(items: T[]): T[] =>
  items.filter((item) => item.available !== false)

/** Related projects by industry, country, location, technologies, and services. */
export const getRelatedProjects = (project: PortfolioProject, limit = 3): PortfolioProject[] => {
  const scored = portfolioProjects
    .filter((candidate) => candidate.slug !== project.slug)
    .map((candidate) => {
      let score = 0
      if (candidate.industry === project.industry) score += 4
      if (candidate.country === project.country) score += 3
      if (candidate.location === project.location) score += 2

      const techOverlap = candidate.technologies.filter((t) =>
        project.technologies.some((pt) => pt.toLowerCase() === t.toLowerCase()),
      ).length
      score += techOverlap

      const serviceOverlap = candidate.services.filter((s) =>
        project.services.some((ps) => ps.toLowerCase() === s.toLowerCase()),
      ).length
      score += serviceOverlap

      return { candidate, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.candidate.publishedAt).getTime() - new Date(a.candidate.publishedAt).getTime())

  return scored.slice(0, limit).map(({ candidate }) => candidate)
}

/** Newest projects for navigation dropdowns. */
export const getPortfolioNavItems = (limit = 6): PortfolioNavItem[] =>
  portfolioProjects.slice(0, limit).map((project) => ({
    label: project.confidential || project.anonymized
      ? project.displayName || project.cardTitle
      : project.cardTitle,
    href: `/portfolio/${project.slug}`,
    clientName:
      project.confidential || project.anonymized
        ? project.displayName || 'Confidential Client'
        : project.clientName,
  }))

export {
  getPortfolioListingStats,
  isConfidentialProject,
  getProjectDisplayName,
} from '@/lib/portfolio-display'

/** First project that links to a given internal service path (for service-page CTAs). */
export const getCaseStudyForService = (servicePath: string): PortfolioProject | undefined => {
  const normalized = servicePath.startsWith('/') ? servicePath : `/${servicePath}`
  const matches = (project: PortfolioProject) =>
    project.relatedServiceLinks.some((link) => link.href === normalized)
  // Prefer public case studies so confidential projects do not capture service CTAs.
  return (
    portfolioProjects.find((project) => !isConfidentialProject(project) && matches(project)) ??
    portfolioProjects.find((project) => matches(project))
  )
}
