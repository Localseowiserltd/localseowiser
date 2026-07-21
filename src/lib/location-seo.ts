import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import { getLocationPath } from '@/lib/location-publish'
import type { LocationPage } from '@/types/location'
import type { Metadata } from 'next'

export function getLocationPageUrl(page: LocationPage) {
  return `${SITE_ORIGIN}${getLocationPath(page)}`
}

/**
 * Metadata for published location pages only.
 * Requires non-empty metaTitle / metaDescription (enforced by publish validation).
 */
export function buildLocationPageMetadata(page: LocationPage): Metadata {
  const canonical = getLocationPageUrl(page)
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
    robots: {
      index: true,
      follow: true,
    },
  }
}

/** Draft/preview metadata — noindex so accidental exposure does not index empty pages. */
export function buildLocationPreviewMetadata(page: LocationPage): Metadata {
  const label = page.name || page.slug
  return {
    title: { absolute: `${label} (Preview) | ${SITE_NAME}` },
    description: 'Development preview — content not approved for publication.',
    robots: { index: false, follow: false },
  }
}

export function buildLocationBreadcrumbSchema(page: LocationPage) {
  const pageUrl = getLocationPageUrl(page)
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
        name: 'Areas',
        item: `${SITE_ORIGIN}/areas`,
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

export function buildLocationWebPageSchema(page: LocationPage) {
  const name = page.schema.webPageName.trim() || page.metaTitle.trim() || page.name
  const description = page.schema.webPageDescription.trim() || page.metaDescription.trim() || undefined
  const placeName = page.schema.placeName.trim() || page.name

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: getLocationPageUrl(page),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    about: {
      '@type': 'Place',
      name: placeName,
      ...(page.region
        ? {
            containedInPlace: {
              '@type': 'AdministrativeArea',
              name: [page.region, page.state].filter(Boolean).join(', '),
            },
          }
        : {}),
      ...(page.country ? { address: { '@type': 'PostalAddress', addressCountry: page.country } } : {}),
    },
    ...(page.heroImage.src.trim()
      ? { primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_ORIGIN}${page.heroImage.src}` } }
      : {}),
  }
}

export function buildLocationFaqSchema(page: LocationPage) {
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

export function buildLocationBusinessSchema(page: LocationPage) {
  const type =
    page.schema.businessType === 'ProfessionalService' || page.schema.businessType === 'LocalBusiness'
      ? page.schema.businessType
      : 'ProfessionalService'

  const name = page.schema.businessName.trim() || SITE_NAME
  const description =
    page.schema.businessDescription.trim() || page.metaDescription.trim() || undefined

  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: getLocationPageUrl(page),
    areaServed: {
      '@type': 'Place',
      name: [page.name, page.region, page.state].filter(Boolean).join(', '),
    },
    ...(page.heroImage.src.trim()
      ? { image: `${SITE_ORIGIN}${page.heroImage.src}` }
      : {}),
  }
}

export function buildLocationImageObjectSchema(page: LocationPage) {
  const src = page.heroImage.src.trim()
  if (!src) return null

  const url = src.startsWith('http') ? src : `${SITE_ORIGIN}${src}`
  const name = page.heroImage.alt.trim() || page.h1.trim() || page.metaTitle.trim() || page.name

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: url,
    url,
    name,
    caption: name,
  }
}

/** Convenience: LocalBusiness + ProfessionalService pair when both are requested. */
export function buildLocationServiceSchemas(page: LocationPage) {
  const pageUrl = getLocationPageUrl(page)
  const shared = {
    name: page.schema.businessName.trim() || SITE_NAME,
    description:
      page.schema.businessDescription.trim() || page.metaDescription.trim() || undefined,
    url: pageUrl,
    areaServed: {
      '@type': 'Place',
      name: [page.name, page.region, page.state].filter(Boolean).join(', '),
    },
    ...(page.heroImage.src.trim()
      ? { image: `${SITE_ORIGIN}${page.heroImage.src}` }
      : {}),
  }

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      ...shared,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      ...shared,
    },
  ]
}
