import type {
  PortfolioFilterCategory,
  PortfolioListingStats,
  PortfolioProject,
} from '@/types/portfolio'

export const isConfidentialProject = (project: PortfolioProject): boolean =>
  project.confidential === true || project.anonymized === true

export const getProjectDisplayName = (project: PortfolioProject): string => {
  if (isConfidentialProject(project)) {
    return project.displayName?.trim() || 'Confidential Client'
  }
  if (project.showClientName === false) {
    return project.displayName?.trim() || 'Confidential Client'
  }
  return project.displayName?.trim() || project.clientName
}

export const shouldShowClientName = (project: PortfolioProject): boolean => {
  if (isConfidentialProject(project)) {
    return project.showClientName === true
  }
  return project.showClientName !== false
}

export const shouldShowWebsite = (project: PortfolioProject): boolean => {
  if (!project.liveUrl) return false
  if (isConfidentialProject(project)) {
    return project.showWebsite === true
  }
  return project.showWebsite !== false
}

export const shouldShowLogo = (project: PortfolioProject): boolean => {
  if (!project.logo) return false
  if (isConfidentialProject(project)) {
    return project.showLogo === true
  }
  return project.showLogo !== false
}

export const getProjectCardTitle = (project: PortfolioProject): string => {
  if (isConfidentialProject(project) && project.displayName) {
    return project.displayName
  }
  return project.cardTitle
}

const INDUSTRY_FILTERS: { id: PortfolioFilterCategory; match: RegExp }[] = [
  { id: 'construction', match: /renovation|construction|contractor|building|roof|hvac|plumb/i },
  { id: 'cleaning', match: /clean/i },
  { id: 'pet-care', match: /pet/i },
  { id: 'interior-design', match: /interior|design/i },
]

export type PortfolioListingFilterId = 'all' | 'confidential' | PortfolioFilterCategory

export const PORTFOLIO_LISTING_FILTERS: { id: PortfolioListingFilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'construction', label: 'Construction' },
  { id: 'cleaning', label: 'Cleaning' },
  { id: 'pet-care', label: 'Pet Care' },
  { id: 'interior-design', label: 'Interior Design' },
  { id: 'confidential', label: 'Confidential Projects' },
]

export const getProjectFilterIds = (project: PortfolioProject): PortfolioListingFilterId[] => {
  const ids = new Set<PortfolioListingFilterId>()
  if (isConfidentialProject(project)) ids.add('confidential')
  if (project.filterCategory) ids.add(project.filterCategory)

  const haystack = `${project.industry} ${project.services.join(' ')} ${project.cardTitle}`
  for (const { id, match } of INDUSTRY_FILTERS) {
    if (match.test(haystack)) ids.add(id)
  }
  return [...ids]
}

export const projectMatchesFilter = (
  project: PortfolioProject,
  filter: PortfolioListingFilterId,
): boolean => {
  if (filter === 'all') return true
  return getProjectFilterIds(project).includes(filter)
}

export const getPortfolioListingStats = (projects: PortfolioProject[]): PortfolioListingStats => {
  const publicProjects = projects.filter((project) => !isConfidentialProject(project))
  const confidentialProjects = projects.filter((project) => isConfidentialProject(project))
  const industries = new Set(projects.map((project) => project.industry.trim().toLowerCase()).filter(Boolean))

  return {
    publicCount: publicProjects.length,
    confidentialCount: confidentialProjects.length,
    totalCount: projects.length,
    industriesServed: industries.size,
  }
}
