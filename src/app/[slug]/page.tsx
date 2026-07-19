import ServiceDetailSections from '@/app/services/ServiceDetailSections'
import SiteShell from '@/components/layout/SiteShell'
import { getBlogPostBySlug } from '@/data/blog'
import {
  getRelatedServicePages,
  getServicePageBySlug,
  servicePages,
} from '@/data/site-content'
import type { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'

type DynamicPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicePages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServicePageBySlug(slug)

  if (service) {
    return {
      title: service.metaTitle ? { absolute: service.metaTitle } : service.title,
      description: service.metaDescription ?? service.intro,
    }
  }

  return { title: 'Page Not Found' }
}

/**
 * Shared dynamic route for service pages only.
 * Legacy root-level blog URLs permanently redirect to `/blog/[slug]`.
 */
const DynamicPage = async ({ params }: DynamicPageProps) => {
  const { slug } = await params

  const legacyBlog = getBlogPostBySlug(slug)
  if (legacyBlog) {
    permanentRedirect(`/blog/${legacyBlog.slug}`)
  }

  const service = getServicePageBySlug(slug)
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
