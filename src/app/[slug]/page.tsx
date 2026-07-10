import ServiceDetailSections from '@/app/services/ServiceDetailSections'
import BlogArticleSections from '@/app/blog/BlogArticleSections'
import SiteShell from '@/components/layout/SiteShell'
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getRelatedServicePages,
  getServicePageBySlug,
  servicePages,
} from '@/data/site-content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type DynamicPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const blogParams = blogPosts.map((post) => ({
    slug: post.slug.replace(/^\//, ''),
  }))
  const serviceParams = servicePages.map((page) => ({
    slug: page.slug,
  }))

  return [...blogParams, ...serviceParams]
}

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  const service = getServicePageBySlug(slug)

  if (post) {
    return {
      title: post.title,
      description: post.intro,
    }
  }

  if (service) {
    return {
      title: service.metaTitle ? { absolute: service.metaTitle } : service.title,
      description: service.metaDescription ?? service.intro,
    }
  }

  return { title: 'Page Not Found' }
}

const DynamicPage = async ({ params }: DynamicPageProps) => {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  const service = getServicePageBySlug(slug)

  if (post) {
    const relatedPosts = getRelatedBlogPosts(post.slug)

    return (
      <SiteShell>
        <BlogArticleSections post={post} relatedPosts={relatedPosts} />
      </SiteShell>
    )
  }

  if (service) {
    const relatedServices = getRelatedServicePages(service.slug)

    return (
      <SiteShell>
        <ServiceDetailSections service={service} relatedServices={relatedServices} />
      </SiteShell>
    )
  }

  notFound()
}

export default DynamicPage
