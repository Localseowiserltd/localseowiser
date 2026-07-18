import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import type { IndustryPage, IndustrySchemaEntityType } from '@/types/industry'
import type { LocationPage } from '@/types/location'
import type { Metadata } from 'next'

export function getIndustryPageUrl(page: IndustryPage) {
  return `${SITE_ORIGIN}${page.path.startsWith('/') ? page.path : `/${page.path}`}`
}

/** Map industry page into the shared location page view shape. */
export function industryPageToLocationView(page: IndustryPage): LocationPage {
  return {
    slug: page.slug,
    path: page.path,
    name: page.name,
    status: page.status,
    contentApproved: page.contentApproved,
    updatedAt: page.updatedAt,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    h1: page.h1,
    intro: page.intro,
    heroParagraphs: page.heroParagraphs,
    heroImage: page.heroImage,
    introduction: page.introduction,
    services: page.services,
    industries: page.specialties,
    process: page.process,
    sections: page.sections,
    faqs: page.faqs,
    relatedServiceSlugs: page.relatedServiceSlugs,
    nearbyAreaSlugs: page.relatedLocationSlugs,
    resourceLinks: page.resourceLinks,
    cta: page.cta,
    schema: {
      webPageName: page.schema.webPageName,
      webPageDescription: page.schema.webPageDescription,
      placeName: page.name,
      breadcrumbLabel: page.schema.breadcrumbLabel,
      businessName: page.schema.businessName,
      businessDescription: page.schema.businessDescription,
      businessType: 'ProfessionalService',
    },
  }
}

export function buildIndustryPageMetadata(page: IndustryPage): Metadata {
  const canonical = getIndustryPageUrl(page)
  const ogImage = page.heroImage.src.trim()
    ? [{ url: `${SITE_ORIGIN}${page.heroImage.src}`, alt: page.heroImage.alt || page.name }]
    : undefined

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      type: 'website',
      siteName: SITE_NAME,
      ...(ogImage ? { images: ogImage } : {}),
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title: page.metaTitle,
      description: page.metaDescription,
      ...(ogImage ? { images: [ogImage[0].url] } : {}),
    },
    robots: { index: true, follow: true },
  }
}

export function buildIndustryPreviewMetadata(page: IndustryPage): Metadata {
  return {
    title: { absolute: `${page.name || page.slug} (Preview) | ${SITE_NAME}` },
    description: 'Development preview — content not approved for publication.',
    robots: { index: false, follow: false },
  }
}

export function buildIndustryBreadcrumbSchema(page: IndustryPage) {
  const pageUrl = getIndustryPageUrl(page)
  const crumbLabel = page.schema.breadcrumbLabel.trim() || page.h1.trim() || page.name

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Local SEO Services',
        item: `${SITE_ORIGIN}/local-seo`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: crumbLabel,
        item: pageUrl,
      },
    ],
  }
}

export function buildIndustryWebPageSchema(page: IndustryPage) {
  const name = page.schema.webPageName.trim() || page.metaTitle.trim() || page.name
  const description = page.schema.webPageDescription.trim() || page.metaDescription.trim() || undefined
  const aboutType: IndustrySchemaEntityType =
    page.schema.entityTypes.find((t) => t === 'Restaurant') ||
    page.schema.entityTypes.find((t) => t === 'RoofingContractor') ||
    page.schema.entityTypes.find((t) => t === 'Electrician') ||
    page.schema.entityTypes.find((t) => t === 'HVACBusiness') ||
    page.schema.entityTypes.find((t) => t === 'PlumbingService') ||
    page.schema.entityTypes.find((t) => t === 'HomeAndConstructionBusiness') ||
    page.schema.entityTypes.find((t) => t === 'Attorney') ||
    page.schema.entityTypes.find((t) => t === 'LegalService') ||
    page.schema.entityTypes.find((t) => t === 'Dentist') ||
    page.schema.entityTypes.find((t) => t === 'Physician') ||
    page.schema.entityTypes.find((t) => t === 'MedicalClinic') ||
    page.schema.entityTypes.find((t) => t === 'MedicalBusiness') ||
    page.schema.entityTypes.find((t) => t === 'LocalBusiness') ||
    'ProfessionalService'

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: getIndustryPageUrl(page),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    about: {
      '@type': aboutType,
      name: page.schema.businessName.trim() || SITE_NAME,
      description: page.schema.businessDescription.trim() || description,
    },
    ...(page.heroImage.src.trim()
      ? { primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_ORIGIN}${page.heroImage.src}` } }
      : {}),
  }
}

export function buildIndustryFaqSchema(page: IndustryPage) {
  const completeFaqs = page.faqs.filter(
    (faq) => faq.question.trim().length > 0 && faq.answer.trim().length > 0,
  )
  if (completeFaqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: completeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildIndustryEntitySchemas(page: IndustryPage) {
  const types =
    page.schema.entityTypes.length > 0
      ? page.schema.entityTypes
      : (['ProfessionalService'] as IndustrySchemaEntityType[])

  const shared = {
    name: page.schema.businessName.trim() || SITE_NAME,
    description:
      page.schema.businessDescription.trim() || page.metaDescription.trim() || undefined,
    url: SITE_ORIGIN,
    ...(page.heroImage.src.trim()
      ? { image: `${SITE_ORIGIN}${page.heroImage.src}` }
      : {}),
  }

  return types.map((type) => ({
    '@context': 'https://schema.org',
    '@type': type,
    ...shared,
  }))
}
