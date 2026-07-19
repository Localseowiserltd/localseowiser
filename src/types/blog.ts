/**
 * Blog content hub types — extends the original BlogPost shape
 * used by LocalSeoWiser without introducing a second article system.
 */

export const BLOG_CATEGORIES = [
  'Local SEO',
  'Google Business Profile',
  'Technical SEO',
  'Local Citations',
  'On-Page SEO',
  'SEO Strategy',
  'Case Studies',
  'Small Business Marketing',
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export type BlogAuthor = {
  name: string
  role: string
  bio: string
  /** Public image path (logo or approved brand asset) */
  avatar: string
  slug: string
}

export type BlogFaqItem = {
  question: string
  answer: string
}

export type ArticleHeadingBlock = {
  type: 'heading'
  level: 2 | 3 | 4
  text: string
  /** Stable id; auto-generated when omitted */
  id?: string
}

export type ArticleParagraphBlock = {
  type: 'paragraph'
  text: string
}

export type ArticleListBlock = {
  type: 'list'
  ordered?: boolean
  items: string[]
}

export type ArticleTableBlock = {
  type: 'table'
  headers: string[]
  rows: string[][]
}

export type ArticleImageBlock = {
  type: 'image'
  src: string
  alt: string
  caption?: string
}

export type ArticleBlockquoteBlock = {
  type: 'blockquote'
  text: string
  cite?: string
}

export type ArticleCalloutBlock = {
  type: 'callout'
  variant?: 'info' | 'tip' | 'warning'
  title?: string
  text: string
}

export type ArticleCtaBlock = {
  type: 'cta'
  title: string
  text: string
  buttonLabel: string
  buttonHref: string
}

export type ArticleVideoBlock = {
  type: 'video'
  src: string
  title?: string
}

export type ArticleCodeBlock = {
  type: 'code'
  code: string
  language?: string
}

export type ArticleBlock =
  | ArticleHeadingBlock
  | ArticleParagraphBlock
  | ArticleListBlock
  | ArticleTableBlock
  | ArticleImageBlock
  | ArticleBlockquoteBlock
  | ArticleCalloutBlock
  | ArticleCtaBlock
  | ArticleVideoBlock
  | ArticleCodeBlock

export type BlogPost = {
  title: string
  /** URL segment only, e.g. `local-seo-basics` (no leading slash) */
  slug: string
  excerpt: string
  /** Lead / deck shown under the title */
  intro: string
  category: BlogCategory
  /**
   * Featured image path (preferred field name for new articles).
   * Falls back to `image` when omitted.
   */
  featuredImage?: string
  /** @deprecated Prefer `featuredImage` — retained for existing posts. Optional for incomplete drafts. */
  image?: string
  featuredImageAlt: string
  /** Display name (resolved against editorial author when matching) */
  author: string
  /** ISO date YYYY-MM-DD — set when publishing; omit on unfinished drafts */
  publishedDate?: string
  /** Optional ISO date when content was substantively updated */
  updatedDate?: string
  /** Human-readable display date — set when publishing */
  date?: string
  readingTime: string
  seoTitle: string
  seoDescription: string
  /** Preferred rich content blocks */
  content?: ArticleBlock[]
  /**
   * Legacy plain paragraphs — rendered when `content` is empty.
   * Kept so existing posts remain valid without a rewrite.
   */
  paragraphs?: string[]
  faq?: BlogFaqItem[]
  /** Explicit related post slugs (without `/blog/` prefix) */
  relatedPosts?: string[]
  featured?: boolean
  draft?: boolean
  /** Optional footer CTA override (uses the shared article CTA panel). */
  cta?: {
    title: string
    text: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel?: string
    secondaryHref?: string
  }
}

/** @deprecated Prefer `readingTime` — alias retained for older call sites */
export type BlogPostLegacyAliases = {
  readTime?: string
  dateIso?: string
}
