import ServiceDetailSections from '@/app/services/ServiceDetailSections'
import SiteShell from '@/components/layout/SiteShell'
import { getBlogPostBySlug } from '@/data/blog'
import {
  getRelatedServicePages,
  getServicePageBySlug,
  servicePages,
} from '@/data/site-content'
import {
  buildServicePageMetadata,
  buildServicePageSchemas,
} from '@/lib/service-seo'
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
    return buildServicePageMetadata(service)
  }

  return { title: 'Page Not Found', robots: { index: false, follow: false } }
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
    const schemas = buildServicePageSchemas(service)
    return (
      <SiteShell>
        {schemas.map((schema, index) => (
          <script
            key={`service-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <ServiceDetailSections service={service} relatedServices={relatedServices} />
      </SiteShell>
    )
  }

  notFound()
}

export default DynamicPage
