import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import { getProjectCardTitle, getProjectDisplayName } from '@/lib/portfolio-display'
import type { PortfolioProject } from '@/types/portfolio'
import type { Metadata } from 'next'

export function getPortfolioCaseStudyUrl(slug: string) {
  return `${SITE_ORIGIN}/portfolio/${slug}`
}

export function buildPortfolioCaseStudyMetadata(project: PortfolioProject): Metadata {
  const canonical = getPortfolioCaseStudyUrl(project.slug)
  const imageUrl = `${SITE_ORIGIN}${project.featuredImage.src}`

  return {
    title: { absolute: project.metaTitle },
    description: project.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: canonical,
      type: 'article',
      siteName: SITE_NAME,
      images: [{ url: imageUrl, alt: project.featuredImage.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.metaTitle,
      description: project.metaDescription,
      images: [imageUrl],
    },
  }
}

export function buildPortfolioBreadcrumbSchema(project: PortfolioProject) {
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
        name: 'Portfolio',
        item: `${SITE_ORIGIN}/portfolio`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: getProjectCardTitle(project),
        item: getPortfolioCaseStudyUrl(project.slug),
      },
    ],
  }
}

export function buildPortfolioWebPageSchema(project: PortfolioProject) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: project.metaTitle,
    description: project.metaDescription,
    url: getPortfolioCaseStudyUrl(project.slug),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    about: {
      '@type': 'Organization',
      name: getProjectDisplayName(project),
    },
  }
}

export function buildPortfolioCreativeWorkSchema(project: PortfolioProject) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: getProjectCardTitle(project),
    description: project.metaDescription,
    url: getPortfolioCaseStudyUrl(project.slug),
    about: getProjectDisplayName(project),
    creator: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    image: `${SITE_ORIGIN}${project.featuredImage.src}`,
    keywords: [...project.services, ...project.technologies].join(', '),
  }
}
