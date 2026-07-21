import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import {
  getBlogFeaturedImage,
  getBlogPostPath,
  getPublishedBlogPosts,
} from '@/data/blog'
import { getBlogAuthor } from '@/data/blog/author'
import type { BlogPost } from '@/types/blog'
import type { Metadata } from 'next'
import type { MetadataRoute } from 'next'

export function getBlogPostUrl(post: BlogPost) {
  return `${SITE_ORIGIN}${getBlogPostPath(post)}`
}

function absoluteImageUrl(src: string) {
  return src.startsWith('http') ? src : `${SITE_ORIGIN}${src}`
}

export function buildBlogIndexMetadata(): Metadata {
  const title = 'Local SEO Blog | Guides, Tips & Strategies | Local SEO Wiser'
  const description =
    'Read expert Local SEO guides, Google Business Profile tips, ranking strategies, and marketing insights to help grow your local Pittsburgh business.'
  const canonical = `${SITE_ORIGIN}/blog`

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
      images: [{ url: `${SITE_ORIGIN}/logo.png`, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_ORIGIN}/logo.png`],
    },
    robots: { index: true, follow: true },
  }
}

export function buildBlogPostMetadata(post: BlogPost): Metadata {
  const canonical = getBlogPostUrl(post)
  const title = post.seoTitle || `${post.title} | LocalSeoWiser`
  const description = post.seoDescription || post.excerpt || post.intro
  const imageSrc = getBlogFeaturedImage(post)
  const imageUrl = imageSrc ? absoluteImageUrl(imageSrc) : undefined
  const ogImage = imageUrl ? [{ url: imageUrl, alt: post.featuredImageAlt || post.title }] : undefined

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      siteName: SITE_NAME,
      ...(post.publishedDate ? { publishedTime: post.publishedDate } : {}),
      modifiedTime: post.updatedDate || post.publishedDate,
      authors: [post.author],
      ...(ogImage ? { images: ogImage } : {}),
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    robots: post.draft ? { index: false, follow: false } : { index: true, follow: true },
  }
}

export function buildBlogOrganizationSchema() {
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

export function buildBlogBreadcrumbSchema(post: BlogPost) {
  const pageUrl = getBlogPostUrl(post)
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
        name: 'Blog',
        item: `${SITE_ORIGIN}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  }
}

export function buildBlogArticleSchema(post: BlogPost) {
  const author = getBlogAuthor()
  const imageSrc = getBlogFeaturedImage(post)
  const imageUrl = imageSrc ? absoluteImageUrl(imageSrc) : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    ...(imageUrl ? { image: [imageUrl] } : {}),
    ...(post.publishedDate ? { datePublished: post.publishedDate } : {}),
    dateModified: post.updatedDate || post.publishedDate,
    author: {
      '@type': 'Organization',
      name: author.name,
      url: SITE_ORIGIN,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_ORIGIN,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getBlogPostUrl(post),
    },
  }
}

export function buildBlogFaqSchema(post: BlogPost) {
  const faqs = (post.faq ?? []).filter(
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

export function getBlogSitemapEntries(): MetadataRoute.Sitemap {
  return getPublishedBlogPosts().map((post) => {
    const modified = post.updatedDate || post.publishedDate
    return {
      url: getBlogPostUrl(post),
      lastModified: modified ? new Date(modified) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }
  })
}
