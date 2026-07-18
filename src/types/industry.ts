import type {
  LocationContentBlock,
  LocationContentStatus,
  LocationCta,
  LocationFaq,
  LocationHeroImage,
  LocationInternalLink,
  LocationSection,
} from '@/types/location'

/**
 * Industry page system — Local SEO for verticals (dentists, law firms, etc.).
 * Content fields stay empty until the project owner supplies approved copy.
 */

export type IndustrySchemaEntityType =
  | 'ProfessionalService'
  | 'MedicalBusiness'
  | 'Dentist'
  | 'Physician'
  | 'MedicalClinic'
  | 'LegalService'
  | 'Attorney'
  | 'HomeAndConstructionBusiness'
  | 'PlumbingService'
  | 'HVACBusiness'

export type IndustrySchemaFields = {
  webPageName: string
  webPageDescription: string
  breadcrumbLabel: string
  businessName: string
  businessDescription: string
  /** Schema.org types to emit (e.g. ProfessionalService, MedicalBusiness, Dentist) */
  entityTypes: IndustrySchemaEntityType[]
}

export type IndustryPage = {
  slug: string
  /** Public URL path, e.g. /local-seo-for-dentists */
  path: string
  /** Industry label (e.g. Dentists) */
  name: string
  status: LocationContentStatus
  contentApproved: boolean
  updatedAt?: string

  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  heroParagraphs: string[]
  heroImage: LocationHeroImage
  introduction: LocationContentBlock
  services: LocationContentBlock
  /** Specialty / service types strip (maps to industries UI block) */
  specialties: LocationContentBlock
  process: LocationContentBlock
  sections: LocationSection[]
  faqs: LocationFaq[]
  relatedServiceSlugs: string[]
  /** Related location page slugs for internal links */
  relatedLocationSlugs: string[]
  resourceLinks: LocationInternalLink[]
  cta: LocationCta
  schema: IndustrySchemaFields
}
