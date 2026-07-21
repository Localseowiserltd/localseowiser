import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import { contactInfo } from '@/data/site-content'
import type { ServicePage } from '@/data/site-content'
import { buildOrganizationSchema } from '@/lib/hub-seo'
import type { Metadata } from 'next'

export function getServicePageUrl(service: ServicePage) {
  return `${SITE_ORIGIN}/${service.slug}`
}

function getServiceImage(service: ServicePage) {
  const src = service.heroImage?.trim()
  if (src) {
    return {
      url: src.startsWith('http') ? src : `${SITE_ORIGIN}${src}`,
      alt: service.imageAlt || service.title,
    }
  }
  return {
    url: `${SITE_ORIGIN}/logo.png`,
    alt: `${service.title} | ${SITE_NAME}`,
  }
}

/**
 * Full metadata for service pages: absolute title, canonical, Open Graph, Twitter.
 */
export function buildServicePageMetadata(service: ServicePage): Metadata {
  const canonical = getServicePageUrl(service)
  const title = service.metaTitle?.trim() || `${service.title} | ${SITE_NAME}`
  const description = service.metaDescription?.trim() || service.intro || service.description
  const image = getServiceImage(service)

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: image.url, alt: image.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function buildServiceBreadcrumbSchema(service: ServicePage) {
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
        name: 'Services',
        item: `${SITE_ORIGIN}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: getServicePageUrl(service),
      },
    ],
  }
}

export function buildServiceSchema(service: ServicePage) {
  const image = getServiceImage(service)
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription || service.intro || service.description,
    url: getServicePageUrl(service),
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    areaServed: {
      '@type': 'City',
      name: 'Pittsburgh',
      containedInPlace: {
        '@type': 'State',
        name: 'Pennsylvania',
      },
    },
    image: image.url,
  }
}

/** Business entity (NAP-consistent, city-only) offering this service. */
export function buildServiceProfessionalServiceSchema(service: ServicePage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description:
      'Local SEO and digital marketing agency in Pittsburgh, PA helping businesses rank in the Google Map Pack and win more local customers.',
    url: SITE_ORIGIN,
    telephone: contactInfo.phoneTel,
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pittsburgh',
      addressRegion: 'PA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Pittsburgh',
      containedInPlace: {
        '@type': 'State',
        name: 'Pennsylvania',
      },
    },
    image: `${SITE_ORIGIN}/logo.png`,
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        url: getServicePageUrl(service),
      },
    },
  }
}

export function buildServiceImageObjectSchema(service: ServicePage) {
  const image = getServiceImage(service)
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: image.url,
    url: image.url,
    name: image.alt,
    caption: image.alt,
  }
}

export function buildServiceFaqSchema(service: ServicePage) {
  const faqs = (service.faq?.items ?? []).filter(
    (item) => item.question.trim().length > 0 && item.answer.trim().length > 0,
  )
  if (faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/** All JSON-LD graphs for a service page (null FAQ omitted). */
export function buildServicePageSchemas(service: ServicePage) {
  return [
    buildServiceSchema(service),
    buildServiceProfessionalServiceSchema(service),
    buildOrganizationSchema(),
    buildServiceBreadcrumbSchema(service),
    buildServiceImageObjectSchema(service),
    buildServiceFaqSchema(service),
  ].filter(Boolean)
}
