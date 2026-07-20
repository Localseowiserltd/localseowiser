import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import { buildBlogIndexMetadata } from '@/lib/blog-seo'
import { buildBlogIndexSchemas } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import BlogPageSections from './BlogPageSections'

export const metadata: Metadata = buildBlogIndexMetadata()

const BlogPage = () => {
  const schemas = buildBlogIndexSchemas()

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`blog-index-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader
        badge="Blog"
        title="Local SEO Blog"
        description="Read expert Local SEO guides, Google Business Profile tips, ranking strategies, and marketing insights to grow your local business."
      />
      <BlogPageSections />
    </SiteShell>
  )
}

export default BlogPage
