import { contactInfo, faqItems, verifiedGoogleReviews } from '@/data/site-content'

const HomePageSchema = () => {
  const professionalService: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Local SEO Wiser',
    description:
      'Local SEO services in Pittsburgh, PA helping businesses rank in the Google Map Pack, show up for near me searches, and get cited by Google AI Overviews.',
    url: 'https://localseowiser.com',
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
      streetAddress: '307 Freeland St',
      addressLocality: 'Pittsburgh',
      addressRegion: 'PA',
      postalCode: '15210',
      addressCountry: 'US',
    },
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
        item: 'https://localseowiser.com',
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
    </>
  )
}

export default HomePageSchema
