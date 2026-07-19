import type { ArticleBlock, BlogCategory, BlogPost } from '@/types/blog'
import { BLOG_CATEGORIES } from '@/types/blog'
import { blogEditorialAuthor, getBlogAuthor } from './author'
import { blogPosts } from './posts'

export { BLOG_CATEGORIES, blogEditorialAuthor, blogPosts, getBlogAuthor }
export type { BlogCategory, BlogPost }
export {
  blogInternalLinkCatalog,
  blogIndustryLinks,
  blogLocationLinks,
  blogServiceLinks,
  type BlogInternalLink,
} from './internal-links'

/** Featured image path — prefers `featuredImage`, falls back to legacy `image`. */
export function getBlogFeaturedImage(post: BlogPost): string {
  return (post.featuredImage?.trim() || post.image || '').trim()
}

/** Human-readable date from ISO YYYY-MM-DD (UTC-safe for display). */
export function formatBlogDate(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim())
  if (!match) return isoDate
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])))
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/** Normalize any slug shape to the bare segment used in data. */
export function normalizeBlogSlug(slug: string): string {
  return slug
    .trim()
    .replace(/^\/+/, '')
    .replace(/^(blog|learn)\//, '')
    .replace(/\/+$/, '')
}

/** Public path for a blog post: `/blog/{slug}` */
export function getBlogPostPath(postOrSlug: BlogPost | string): string {
  const slug = typeof postOrSlug === 'string' ? normalizeBlogSlug(postOrSlug) : postOrSlug.slug
  return `/blog/${normalizeBlogSlug(slug)}`
}

export function isBlogPostPublished(post: BlogPost): boolean {
  if (post.draft === true) return false
  if (!post.slug?.trim() || !post.title?.trim()) return false
  if (!post.publishedDate?.trim()) return false
  return true
}

export function getPublishedBlogPosts(): BlogPost[] {
  return blogPosts
    .filter(isBlogPostPublished)
    .sort((a, b) => (b.publishedDate || '').localeCompare(a.publishedDate || ''))
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const normalized = normalizeBlogSlug(slug)
  return blogPosts.find((post) => post.slug === normalized)
}

export function getPublishedBlogPostBySlug(slug: string): BlogPost | undefined {
  const post = getBlogPostBySlug(slug)
  if (!post || !isBlogPostPublished(post)) return undefined
  return post
}

export function getFeaturedBlogPost(): BlogPost | undefined {
  return getPublishedBlogPosts().find((post) => post.featured === true)
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  const normalized = normalizeBlogSlug(slug)
  const current = getBlogPostBySlug(normalized)
  const published = getPublishedBlogPosts().filter((post) => post.slug !== normalized)
  const seen = new Set<string>()
  const results: BlogPost[] = []

  const push = (post: BlogPost | undefined) => {
    if (!post || seen.has(post.slug) || !isBlogPostPublished(post)) return
    seen.add(post.slug)
    results.push(post)
  }

  if (current?.relatedPosts?.length) {
    for (const relatedSlug of current.relatedPosts) {
      if (results.length >= limit) break
      push(getBlogPostBySlug(relatedSlug))
    }
  }

  if (current && results.length < limit) {
    for (const post of published) {
      if (results.length >= limit) break
      if (post.category === current.category) push(post)
    }
  }

  if (results.length < limit) {
    for (const post of published) {
      if (results.length >= limit) break
      push(post)
    }
  }

  return results
}

export function getAdjacentBlogPosts(slug: string): {
  previous: BlogPost | null
  next: BlogPost | null
} {
  const published = getPublishedBlogPosts()
  const index = published.findIndex((post) => post.slug === normalizeBlogSlug(slug))
  if (index < 0) return { previous: null, next: null }

  return {
    previous: index < published.length - 1 ? published[index + 1] : null,
    next: index > 0 ? published[index - 1] : null,
  }
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export type TocItem = {
  id: string
  text: string
  level: 2 | 3
}

/** Resolve article blocks: prefer `content`, else legacy `paragraphs`. */
export function getArticleBlocks(post: BlogPost): ArticleBlock[] {
  if (post.content && post.content.length > 0) return post.content
  if (post.paragraphs && post.paragraphs.length > 0) {
    return post.paragraphs.map((text) => ({ type: 'paragraph' as const, text }))
  }
  return []
}

/** Assign stable unique IDs to heading blocks and return TOC (H2/H3 only). */
export function buildTocAndBlocks(post: BlogPost): {
  blocks: ArticleBlock[]
  toc: TocItem[]
} {
  const source = getArticleBlocks(post)
  const usedIds = new Set<string>()
  const toc: TocItem[] = []

  const uniqueId = (base: string) => {
    let id = base || 'section'
    let n = 2
    while (usedIds.has(id)) {
      id = `${base}-${n}`
      n += 1
    }
    usedIds.add(id)
    return id
  }

  const blocks = source.map((block) => {
    if (block.type !== 'heading') return block
    const base = block.id?.trim() || slugifyHeading(block.text)
    const id = uniqueId(base)
    if (block.level === 2 || block.level === 3) {
      toc.push({ id, text: block.text, level: block.level })
    }
    return { ...block, id }
  })

  return { blocks, toc }
}

export const BLOG_PAGE_SIZE = 6

export function getBlogCategoriesInUse(): BlogCategory[] {
  const used = new Set(getPublishedBlogPosts().map((post) => post.category))
  return BLOG_CATEGORIES.filter((category) => used.has(category))
}

/** Legacy root paths that previously served blog articles via `[slug]`. */
export const LEGACY_BLOG_ROOT_SLUGS = blogPosts.map((post) => post.slug)
