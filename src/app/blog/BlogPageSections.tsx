import BlogIndexClient from '@/components/blog/BlogIndexClient'
import { getFeaturedBlogPost, getPublishedBlogPosts } from '@/data/blog'

/**
 * Server wrapper — publishes only non-draft posts into the client filter island.
 */
const BlogPageSections = () => {
  const posts = getPublishedBlogPosts()
  const featuredPost = getFeaturedBlogPost() ?? null

  return <BlogIndexClient posts={posts} featuredPost={featuredPost} />
}

export default BlogPageSections
