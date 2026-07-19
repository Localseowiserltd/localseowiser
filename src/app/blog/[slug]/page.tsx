import BlogArticleSections from '@/app/blog/BlogArticleSections'
import SiteShell from '@/components/layout/SiteShell'
import {
  getAdjacentBlogPosts,
  getPublishedBlogPostBySlug,
  getPublishedBlogPosts,
  getRelatedBlogPosts,
} from '@/data/blog'
import {
  buildBlogArticleSchema,
  buildBlogBreadcrumbSchema,
  buildBlogFaqSchema,
  buildBlogOrganizationSchema,
  buildBlogPostMetadata,
} from '@/lib/blog-seo'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({ slug: post.slug }))
}

/** Unknown slugs 404 — only published posts from the registry are valid. */
export const dynamicParams = false

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPublishedBlogPostBySlug(slug)
  if (!post) return { title: 'Article Not Found', robots: { index: false, follow: false } }
  return buildBlogPostMetadata(post)
}

const BlogArticlePage = async ({ params }: BlogArticlePageProps) => {
  const { slug } = await params
  const post = getPublishedBlogPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedBlogPosts(post.slug)
  const { previous, next } = getAdjacentBlogPosts(post.slug)
  const schemas = [
    buildBlogOrganizationSchema(),
    buildBlogBreadcrumbSchema(post),
    buildBlogArticleSchema(post),
    buildBlogFaqSchema(post),
  ].filter(Boolean)

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`blog-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <BlogArticleSections post={post} relatedPosts={relatedPosts} previous={previous} next={next} />
    </SiteShell>
  )
}

export default BlogArticlePage
