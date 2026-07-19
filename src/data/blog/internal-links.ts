/**
 * Curated internal link targets for blog article content.
 * Use these hrefs intentionally inside article blocks — do not auto-insert links.
 */

export type BlogInternalLink = {
  label: string
  href: string
}

/** Core service pages authors can link to from articles. */
export const blogServiceLinks: BlogInternalLink[] = [
  { label: 'Local SEO Services', href: '/local-seo' },
  { label: 'Pittsburgh Local SEO', href: '/local-seo' },
  { label: 'Google Business Profile Optimization', href: '/google-map-optimization' },
  { label: 'Local Keyword Research', href: '/local-seo' },
  { label: 'On-Page SEO', href: '/landing-page-optimization' },
  { label: 'Technical SEO', href: '/technical-seo' },
  { label: 'Local Citation Services', href: '/local-business-citation' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Approved industry landing pages (confirmed live routes).
 * HVAC → /local-seo-for-hvac · Roofing → /local-seo-for-roofers
 */
export const blogIndustryLinks: BlogInternalLink[] = [
  { label: 'Dentists', href: '/local-seo-for-dentists' },
  { label: 'Doctors', href: '/local-seo-for-doctors' },
  { label: 'Lawyers', href: '/local-seo-for-lawyers' },
  { label: 'Plumbers', href: '/local-seo-for-plumbers' },
  { label: 'HVAC', href: '/local-seo-for-hvac' },
  { label: 'Electricians', href: '/local-seo-for-electricians' },
  { label: 'Roofers', href: '/local-seo-for-roofers' },
  { label: 'Restaurants', href: '/local-seo-for-restaurants' },
  { label: 'Real Estate Agents', href: '/local-seo-for-real-estate-agents' },
  { label: 'Insurance Agencies', href: '/local-seo-for-insurance-agencies' },
  { label: 'Financial Advisors', href: '/local-seo-for-financial-advisors' },
  { label: 'Accounting Firms', href: '/local-seo-for-accounting-firms' },
  { label: 'Pest Control Companies', href: '/local-seo-for-pest-control-companies' },
]

/** Approved Pittsburgh location pages for contextual linking. */
export const blogLocationLinks: BlogInternalLink[] = [
  { label: 'Shadyside', href: '/local-seo-shadyside' },
  { label: 'Lawrenceville', href: '/local-seo-lawrenceville' },
  { label: 'Oakland', href: '/local-seo-oakland' },
  { label: 'Squirrel Hill', href: '/local-seo-squirrel-hill' },
  { label: 'Strip District', href: '/local-seo-strip-district' },
  { label: 'South Side', href: '/local-seo-south-side' },
  { label: 'North Shore', href: '/local-seo-north-shore' },
  { label: 'Mt. Lebanon', href: '/local-seo-mt-lebanon' },
  { label: 'Cranberry Township', href: '/local-seo-cranberry-township' },
  { label: 'Monroeville', href: '/local-seo-monroeville' },
  { label: 'Robinson Township', href: '/local-seo-robinson-township' },
  { label: 'North Hills', href: '/local-seo-north-hills' },
  { label: 'South Hills', href: '/local-seo-south-hills' },
]

export const blogInternalLinkCatalog = {
  services: blogServiceLinks,
  industries: blogIndustryLinks,
  locations: blogLocationLinks,
} as const
