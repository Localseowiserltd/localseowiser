import type { BlogPost } from '@/types/blog'
import googleBusinessProfileOptimization from './google-business-profile-optimization'
import howDoesLocalSeoWork from './how-does-local-seo-work'
import howToRankHigherOnGoogleMaps from './how-to-rank-higher-on-google-maps'
import localSeoAudit from './local-seo-audit'
import localSeoChecklist from './local-seo-checklist'
import localSeoRankingFactors from './local-seo-ranking-factors'
import whatIsLocalSeo from './what-is-local-seo'

/**
 * Blog post registry.
 * Draft posts stay in this array with `draft: true` until approved for publishing.
 */
export const blogPosts: BlogPost[] = [
  whatIsLocalSeo,
  howDoesLocalSeoWork,
  googleBusinessProfileOptimization,
  howToRankHigherOnGoogleMaps,
  localSeoRankingFactors,
  localSeoChecklist,
  localSeoAudit,
]
