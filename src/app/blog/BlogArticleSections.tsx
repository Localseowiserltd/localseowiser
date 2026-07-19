import BlogArticleView from '@/components/blog/BlogArticleView'
import type { BlogPost } from '@/types/blog'

type BlogArticleSectionsProps = {
  post: BlogPost
  relatedPosts: BlogPost[]
  previous: BlogPost | null
  next: BlogPost | null
}

/**
 * Thin adapter kept at the original module path so existing imports stay stable.
 */
const BlogArticleSections = ({ post, relatedPosts, previous, next }: BlogArticleSectionsProps) => {
  return (
    <BlogArticleView post={post} relatedPosts={relatedPosts} previous={previous} next={next} />
  )
}

export default BlogArticleSections
