import type { PortfolioScreenshotKind } from '@/types/portfolio'

const KIND_LABELS: Record<PortfolioScreenshotKind, string> = {
  desktop: 'Desktop screenshot',
  tablet: 'Tablet screenshot',
  mobile: 'Mobile screenshot',
  'search-console': 'Google Search Console',
  'google-business-profile': 'Google Business Profile',
  'keyword-ranking': 'Keyword rankings',
  analytics: 'Analytics',
  semrush: 'Semrush',
  ahrefs: 'Ahrefs',
  before: 'Before',
  after: 'After',
  other: 'Evidence',
}

export const getEvidenceKindLabel = (kind: PortfolioScreenshotKind): string =>
  KIND_LABELS[kind] ?? kind.replace(/-/g, ' ')

export const isEvidenceScreenshotKind = (kind: PortfolioScreenshotKind): boolean =>
  kind === 'search-console' ||
  kind === 'google-business-profile' ||
  kind === 'keyword-ranking' ||
  kind === 'analytics' ||
  kind === 'semrush' ||
  kind === 'ahrefs' ||
  kind === 'other'
