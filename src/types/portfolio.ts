/**
 * Portfolio Management System — shared types.
 * Project data files must conform to these interfaces. No JSX in data.
 */

export type PortfolioScreenshotKind =
  | 'desktop'
  | 'tablet'
  | 'mobile'
  | 'search-console'
  | 'google-business-profile'
  | 'keyword-ranking'
  | 'analytics'
  | 'semrush'
  | 'ahrefs'
  | 'before'
  | 'after'
  | 'other'

export type PortfolioFilterCategory =
  | 'construction'
  | 'cleaning'
  | 'pet-care'
  | 'interior-design'
  | 'web-design'

export type PortfolioScreenshot = {
  src: string
  alt: string
  caption?: string
  kind: PortfolioScreenshotKind
  /** When false, UI skips this image. Defaults to true. */
  available?: boolean
  /**
   * When true, this evidence screenshot intentionally hides client-identifying details
   * (domain, business name, etc.). Gallery behavior is unchanged.
   */
  anonymized?: boolean
}

/** @deprecated Prefer PortfolioScreenshot — kept for gradual migration clarity */
export type PortfolioImage = PortfolioScreenshot

export type PortfolioMetric = {
  title: string
  value: string
  description?: string
  /** Platform or document the figure came from (e.g. Google Search Console). */
  source: string
}

export type PortfolioResult = {
  eyebrow?: string
  title?: string
  subtitle?: string
  metrics: PortfolioMetric[]
  secondaryMetrics?: PortfolioMetric[]
  notes: string[]
  evidence: PortfolioScreenshot[]
}

export type PortfolioTechnology = {
  name: string
}

export type PortfolioService = {
  label: string
  href?: string
}

export type PortfolioSectionCopy = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export type PortfolioTimelineItem = {
  label: string
  detail: string
}

export type PortfolioLink = {
  label: string
  href: string
}

export type PortfolioStrategy = {
  website: string[]
  design: string[]
  development: string[]
  content: string[]
  seo: string[]
}

export type PortfolioWebsiteArchitecture = {
  title: string
  subtitle?: string
  items: string[]
}

export type PortfolioCta = {
  title: string
  text: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export type PortfolioProject = {
  /** URL segment: /portfolio/[slug] */
  slug: string
  /** ISO date string — used to sort newest first in listing and nav */
  publishedAt: string
  featured?: boolean

  /**
   * Confidential case study — client identity is protected in listing + detail UI.
   * Prefer this over legacy `anonymized`.
   */
  confidential?: boolean
  /**
   * @deprecated Use `confidential`. Still honored for backward compatibility.
   */
  anonymized?: boolean

  /**
   * Public-facing name when confidential (e.g. "Confidential Home Services Business").
   * Falls back to clientName for public projects.
   */
  displayName?: string

  /** When false, hide Visit Website / live preview controls. Defaults false when confidential. */
  showWebsite?: boolean
  /** When false, hide real client/business name. Defaults false when confidential. */
  showClientName?: boolean
  /** When false, hide company logo assets. Defaults false when confidential. */
  showLogo?: boolean

  /** Internal / legal client name (may be withheld in UI when confidential) */
  clientName: string
  industry: string
  /** Country for cards and related matching (e.g. UAE, USA) */
  country: string
  /** City / region display string */
  location: string
  /** Optional — withheld when confidential unless showWebsite is true */
  liveUrl?: string
  oldDomain?: string

  /** Optional explicit listing filter bucket */
  filterCategory?: PortfolioFilterCategory

  /** Optional brand logo — never shown when showLogo is false / confidential */
  logo?: PortfolioScreenshot

  /** Short listing summary */
  summary: string
  cardTitle: string

  metaTitle: string
  metaDescription: string
  h1: string
  heroSummary: string
  supportingText: string

  /** Services / categories shown on cards and used for related matching */
  services: string[]
  /** Short tech tags for cards */
  technologies: string[]

  featuredImage: PortfolioScreenshot
  gallery: PortfolioScreenshot[]
  seoImages: PortfolioScreenshot[]

  snapshot: { label: string; value: string }[]
  situation: string[]
  objectives: string[]
  strategy: PortfolioStrategy
  websiteArchitecture: PortfolioWebsiteArchitecture
  servicesDelivered: string[]
  technologyStack: string[]
  relatedServiceLinks: PortfolioLink[]

  results: PortfolioResult
  queryExamples?: string[]
  querySectionIntro?: string
  outcome: string

  timeline?: PortfolioTimelineItem[]

  /** Optional section copy overrides (data-driven headings) */
  sections?: {
    challenge?: PortfolioSectionCopy
    goals?: PortfolioSectionCopy
    solution?: PortfolioSectionCopy
    gallery?: PortfolioSectionCopy
    seo?: PortfolioSectionCopy
    queries?: PortfolioSectionCopy
    outcome?: PortfolioSectionCopy
    services?: PortfolioSectionCopy
    stack?: PortfolioSectionCopy
  }

  cta?: PortfolioCta
}

export type PortfolioListingMeta = {
  title: string
  description: string
  h1: string
  intro: string
  ctaTitle: string
  ctaText: string
}

export type PortfolioNavItem = {
  label: string
  href: string
  clientName: string
}

export type PortfolioListingStats = {
  publicCount: number
  confidentialCount: number
  totalCount: number
  industriesServed: number
}
