import type { BlogAuthor } from '@/types/blog'

/**
 * Verified brand author for LocalSeoWiser editorial content.
 * Do not invent personal credentials, awards, or fake experience claims.
 */
export const blogEditorialAuthor: BlogAuthor = {
  name: 'LocalSeoWiser Editorial Team',
  role: 'Local SEO Specialists',
  bio: 'The LocalSeoWiser Editorial Team creates practical resources on Local SEO, Google Business Profile optimization, technical SEO, and local search marketing. Our content is written to help local businesses understand search best practices and make informed marketing decisions.',
  avatar: '/logo.png',
  slug: 'local-seowiser-editorial-team',
}

export const getBlogAuthor = (): BlogAuthor => blogEditorialAuthor
