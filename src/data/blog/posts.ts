import type { BlogPost } from '@/types/blog'
import howDoesLocalSeoWork from './how-does-local-seo-work'
import whatIsLocalSeo from './what-is-local-seo'

/**
 * Blog post registry.
 * Draft posts stay in this array with `draft: true` until approved for publishing.
 */
export const blogPosts: BlogPost[] = [whatIsLocalSeo, howDoesLocalSeoWork]
