/**
 * Location page system — shared types.
 * Content fields stay empty until the project owner supplies approved copy.
 * Do not invent, paraphrase, or generate marketing text into these fields.
 */

/** Development-only marker. Validation rejects publish if this appears in any string. */
export const LOCATION_DEV_PLACEHOLDER = '__LOCATION_CONTENT_PENDING__' as const

/**
 * draft — registered, not publicly routable in production
 * approved — owner marked content ready; still must pass validation to publish
 */
export type LocationContentStatus = 'draft' | 'approved'

export type LocationFaq = {
  question: string
  answer: string
}

export type LocationMedia = {
  src: string
  alt: string
}

export type LocationSection = {
  id: string
  title: string
  /** Single body string; prefer `paragraphs` for multi-paragraph owner copy */
  body: string
  paragraphs?: string[]
  /** Optional bullets — leave empty until owner supplies */
  items?: string[]
  image?: LocationMedia
}

/** Named content block editable from the location data file. */
export type LocationContentBlock = {
  title: string
  body: string
  paragraphs?: string[]
  items?: string[]
  image?: LocationMedia
}

export type LocationHeroImage = LocationMedia

export type LocationCta = {
  title: string
  text: string
  paragraphs?: string[]
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  image?: LocationMedia
}

export type LocationInternalLink = {
  label: string
  href: string
}

/**
 * Optional schema field overrides — leave empty to derive from page content when published.
 * Do not invent values; owner fills these when approving the page.
 */
export type LocationSchemaFields = {
  webPageName: string
  webPageDescription: string
  placeName: string
  breadcrumbLabel: string
  /** Optional LocalBusiness / ProfessionalService name override */
  businessName: string
  businessDescription: string
  businessType: 'LocalBusiness' | 'ProfessionalService' | ''
}

/**
 * Full location page record.
 * Structural fields (slug, name, region, path) may be set for registry/routing.
 * All marketing/SEO body fields must remain empty until manually supplied.
 */
export type LocationPage = {
  /** Registry id (unique). Used for lookups and related-location references. */
  slug: string
  /**
   * Public URL path. Defaults to `/areas/${slug}` when omitted.
   * Example: `/local-seo-shadyside`
   */
  path?: string
  /** Geographic label only (e.g. city / neighborhood name) */
  name: string
  /** Optional broader region label (e.g. Pittsburgh) */
  region?: string
  state?: string
  country?: string

  status: LocationContentStatus
  /**
   * Explicit owner approval flag. Must be true with status "approved"
   * and a passing validation result before the page can publish.
   */
  contentApproved: boolean

  /** ISO date — used when published for sitemap lastModified */
  updatedAt?: string

  metaTitle: string
  metaDescription: string
  h1: string
  /** Hero supporting line (short). Prefer `introduction` for longer copy. */
  intro: string
  /** Optional multi-paragraph hero body under the intro line */
  heroParagraphs: string[]

  heroImage: LocationHeroImage
  introduction: LocationContentBlock
  services: LocationContentBlock
  industries: LocationContentBlock
  process: LocationContentBlock

  /** Additional free-form sections beyond the named blocks above */
  sections: LocationSection[]
  faqs: LocationFaq[]

  /**
   * Slugs of existing site service pages (e.g. "local-seo") for internal links.
   * Only linked when the target exists and this location is publishable.
   */
  relatedServiceSlugs: string[]

  /**
   * Other location slugs for nearby / related location internal links.
   * Only linked when the target location is publishable.
   */
  nearbyAreaSlugs: string[]

  /**
   * Explicit internal links (contact, about, portfolio, service aliases with custom labels).
   * Editable from the data file.
   */
  resourceLinks: LocationInternalLink[]

  cta: LocationCta
  schema: LocationSchemaFields
}

export type LocationListingMeta = {
  title: string
  description: string
  h1: string
  intro: string
}

export type LocationValidationIssue = {
  field: string
  message: string
}

export type LocationValidationResult = {
  ok: boolean
  issues: LocationValidationIssue[]
  /** True only when status, approval, and content checks all pass */
  publishable: boolean
}

export type LocationNavItem = {
  label: string
  href: string
  name: string
}
