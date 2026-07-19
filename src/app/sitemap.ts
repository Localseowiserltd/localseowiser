import type { MetadataRoute } from 'next'
import { SITE_ORIGIN } from '@/config/site'
import { getIndustryPath, getPublishedIndustryPages } from '@/data/industries'
import { getLocationPath, getPublishedLocationPages } from '@/data/locations'
import { portfolioProjects } from '@/data/portfolio'
import { getBlogSitemapEntries } from '@/lib/blog-seo'
import { servicePages } from '@/data/site-content'

const staticRoutes = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/services',
  '/packages',
  '/portfolio',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const publishedLocations = getPublishedLocationPages()
  const publishedIndustries = getPublishedIndustryPages()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_ORIGIN}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/portfolio' ? 0.8 : 0.7,
  }))

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${SITE_ORIGIN}/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogEntries = getBlogSitemapEntries()

  const portfolioEntries: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${SITE_ORIGIN}/portfolio/${project.slug}`,
    lastModified: new Date(project.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Location pages and /areas index appear in the sitemap only after owner-approved content publishes.
  const areaIndexEntries: MetadataRoute.Sitemap =
    publishedLocations.length > 0
      ? [
          {
            url: `${SITE_ORIGIN}/areas`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
          },
        ]
      : []

  const areaEntries: MetadataRoute.Sitemap = publishedLocations.map((page) => ({
    url: `${SITE_ORIGIN}${getLocationPath(page)}`,
    lastModified: page.updatedAt ? new Date(page.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const industryEntries: MetadataRoute.Sitemap = publishedIndustries.map((page) => ({
    url: `${SITE_ORIGIN}${getIndustryPath(page)}`,
    lastModified: page.updatedAt ? new Date(page.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    ...staticEntries,
    ...serviceEntries,
    ...blogEntries,
    ...portfolioEntries,
    ...areaIndexEntries,
    ...areaEntries,
    ...industryEntries,
  ]
}
