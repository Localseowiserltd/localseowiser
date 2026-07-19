import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import { buildBlogIndexMetadata } from '@/lib/blog-seo'
import type { Metadata } from 'next'
import BlogPageSections from './BlogPageSections'

export const metadata: Metadata = buildBlogIndexMetadata()

const BlogPage = () => {
  return (
    <SiteShell>
      <PageHeader
        badge="Blog"
        title="Local SEO Insights & Resources"
        description="Practical guides, Google Business Profile strategies, Local SEO best practices, and educational resources to help local businesses improve their online visibility."
      />
      <BlogPageSections />
    </SiteShell>
  )
}

export default BlogPage
