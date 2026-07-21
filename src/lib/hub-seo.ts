import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import type { Metadata } from 'next'

export type HubBreadcrumbItem = {
  name: string
  path: string
}

export function buildAbsoluteUrl(path: string) {
  if (!path || path === '/') return SITE_ORIGIN
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_ORIGIN}/logo.png`,
    },
  }
}

export function buildBreadcrumbSchema(items: HubBreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path),
    })),
  }
}

export function buildImageObjectSchema(input?: { src?: string; alt?: string }) {
  const src = input?.src?.trim() || '/logo.png'
  const url = src.startsWith('http') ? src : `${SITE_ORIGIN}${src}`
  const name = input?.alt?.trim() || SITE_NAME

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: url,
    url,
    name,
    caption: name,
  }
}

export function buildHubPageMetadata(input: {
  title: string
  description: string
  path: string
  imageSrc?: string
  imageAlt?: string
}): Metadata {
  const canonical = buildAbsoluteUrl(input.path)
  const imageSrc = input.imageSrc?.trim() || '/logo.png'
  const imageUrl = imageSrc.startsWith('http') ? imageSrc : `${SITE_ORIGIN}${imageSrc}`
  const imageAlt = input.imageAlt?.trim() || input.title

  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  }
}

export function buildAboutPageSchemas() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Local SEO Wiser',
      description:
        'Meet the team behind Local SEO Wiser and learn how we help businesses improve visibility across Google Search, Maps, websites, and local markets.',
      url: buildAbsoluteUrl('/about'),
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]),
    buildImageObjectSchema({ src: '/logo.png', alt: 'About Local SEO Wiser' }),
  ]
}

export function buildContactPageSchemas() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Local SEO Wiser',
      description:
        'Contact Local SEO Wiser to discuss your website, Google Business Profile, local search visibility, and digital marketing goals.',
      url: buildAbsoluteUrl('/contact'),
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ]
}

export function buildBlogIndexSchemas() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Local SEO Blog | Guides, Tips & Strategies | Local SEO Wiser',
      description:
        'Read expert Local SEO guides, Google Business Profile tips, ranking strategies, and marketing insights to grow your local business.',
      url: buildAbsoluteUrl('/blog'),
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: `${SITE_NAME} Blog`,
      description:
        'Expert Local SEO guides, Google Business Profile tips, ranking strategies, and marketing insights.',
      url: buildAbsoluteUrl('/blog'),
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_ORIGIN },
    },
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
  ]
}

export function buildPortfolioIndexSchemas() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'SEO Case Studies & Client Results | Local SEO Wiser',
      description:
        'Explore Local SEO case studies, website projects, and Google Business Profile success stories that demonstrate real business growth.',
      url: buildAbsoluteUrl('/portfolio'),
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Portfolio', path: '/portfolio' },
    ]),
    buildImageObjectSchema({ src: '/logo.png', alt: 'Local SEO Wiser portfolio case studies' }),
  ]
}

export function buildFaqPageSchemas(
  faqs: { question: string; answer: string }[],
) {
  const complete = faqs.filter((f) => f.question.trim() && f.answer.trim())
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: complete.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ]),
  ]
}

export function buildLegalPageSchemas(input: { name: string; path: string; description: string }) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: input.name,
      description: input.description,
      url: buildAbsoluteUrl(input.path),
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: input.name, path: input.path },
    ]),
  ]
}

export function buildServicesHubSchemas(
  items: { name: string; url: string; description?: string }[],
) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Local SEO Services in Pittsburgh | Local SEO Wiser',
      description:
        'Explore our Local SEO services, Google Maps optimization, technical SEO, PPC, web development, and digital marketing solutions.',
      url: buildAbsoluteUrl('/services'),
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Local SEO Wiser Services',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url.startsWith('http') ? item.url : buildAbsoluteUrl(item.url),
        ...(item.description ? { description: item.description } : {}),
      })),
    },
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
  ]
}

