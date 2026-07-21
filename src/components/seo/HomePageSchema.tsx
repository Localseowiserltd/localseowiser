import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import { contactInfo, faqItems, verifiedGoogleReviews } from '@/data/site-content'

const HomePageSchema = () => {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_ORIGIN}/logo.png`,
    },
    email: contactInfo.email,
    telephone: contactInfo.phoneTel,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pittsburgh',
      addressRegion: 'PA',
      addressCountry: 'US',
    },
    sameAs: [
      'https://x.com/LocalSeoWiser',
      'https://www.linkedin.com/company/local-seo-wisers/',
      'https://www.facebook.com/Localseowiser/',
      'https://www.instagram.com/localseowiser/',
    ],
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_ORIGIN,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_ORIGIN}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const professionalService: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description:
      'Local SEO services in Pittsburgh, PA helping businesses rank in the Google Map Pack, show up for near me searches, and get cited by Google AI Overviews.',
    url: SITE_ORIGIN,
    telephone: contactInfo.phoneTel,
    email: contactInfo.email,
    areaServed: {
      '@type': 'City',
      name: 'Pittsburgh',
      containedInPlace: {
        '@type': 'State',
        name: 'Pennsylvania',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pittsburgh',
      addressRegion: 'PA',
      addressCountry: 'US',
    },
    image: `${SITE_ORIGIN}/logo.png`,
  }

  if (verifiedGoogleReviews.length > 0) {
    professionalService.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: (
        verifiedGoogleReviews.reduce((sum, item) => sum + Number(item.ratingValue), 0) /
        verifiedGoogleReviews.length
      ).toFixed(1),
      reviewCount: String(verifiedGoogleReviews.length),
      bestRating: '5',
      worstRating: '1',
    }
    professionalService.review = verifiedGoogleReviews.map((item) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: item.author,
      },
      reviewBody: item.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: item.ratingValue,
        bestRating: '5',
      },
      ...(item.datePublished ? { datePublished: item.datePublished } : {}),
    }))
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
    ],
  }

  const schemas = [organization, webSite, professionalService, faqPage, breadcrumbList]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`home-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export default HomePageSchema
