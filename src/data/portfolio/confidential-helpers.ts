import type { PortfolioMetric, PortfolioProject, PortfolioScreenshot } from '@/types/portfolio'

export const confidentialEvidence = (
  slug: string,
  filename: string,
  alt: string,
  kind: PortfolioScreenshot['kind'],
  caption: string,
): PortfolioScreenshot => ({
  src: `/images/portfolio/${slug}/${filename}`,
  alt,
  kind,
  caption,
  available: true,
  anonymized: true,
})

export const confidentialSeoServices = [
  'Search Engine Optimization',
  'Technical SEO',
  'On-Page SEO',
  'Local SEO',
  'Google Business Profile Optimization',
  'Search Performance Monitoring',
]

export const confidentialSeoStrategy = {
  website: [
    'Maintain a crawlable, indexable site structure for search visibility',
    'Support ongoing content and internal linking improvements',
  ],
  design: [
    'Preserve conversion paths that support enquiry and contact goals',
  ],
  development: [
    'Support technical SEO requirements for crawlability and indexation',
  ],
  content: [
    'Align page content with non-branded search intent where applicable',
    'Support service and location relevance without exposing client identity',
  ],
  seo: [
    'On-page SEO',
    'Technical SEO',
    'Local SEO foundation',
    'Google Business Profile optimization where applicable',
    'Search Console monitoring',
    'Ongoing performance review',
  ],
}

type ConfidentialBaseInput = {
  slug: string
  displayName: string
  publishedAt: string
  cardTitle: string
  metaTitle: string
  metaDescription: string
  h1: string
  supportingText: string
  heroSummary: string
  summary: string
  featuredImage: PortfolioScreenshot
  seoImages: PortfolioScreenshot[]
  metrics: PortfolioMetric[]
  secondaryMetrics?: PortfolioMetric[]
  resultNotes: string[]
  outcome: string
  snapshot: { label: string; value: string }[]
  situation: string[]
  objectives: string[]
  technologyStack: string[]
  technologies?: string[]
  services?: string[]
}

export const buildConfidentialProject = (input: ConfidentialBaseInput): PortfolioProject => {
  const evidence = input.seoImages
  return {
    slug: input.slug,
    publishedAt: input.publishedAt,
    featured: false,
    confidential: true,
    displayName: input.displayName,
    showWebsite: false,
    showClientName: false,
    showLogo: false,
    liveUrl: undefined,
    clientName: 'Confidential Client',
    industry: 'Local Services',
    country: 'Confidential',
    location: 'Confidential',
    summary: input.summary,
    cardTitle: input.cardTitle,
    metaTitle: input.metaTitle,
    metaDescription: input.metaDescription,
    h1: input.h1,
    supportingText: input.supportingText,
    heroSummary: input.heroSummary,
    services: input.services ?? ['Local SEO', 'Technical SEO'],
    technologies: input.technologies ?? input.technologyStack,
    featuredImage: input.featuredImage,
    gallery: [],
    seoImages: evidence,
    snapshot: input.snapshot,
    situation: input.situation,
    objectives: input.objectives,
    strategy: confidentialSeoStrategy,
    websiteArchitecture: {
      title: 'Confidential delivery scope',
      subtitle:
        'Website architecture and branded page inventory are withheld to protect client identity.',
      items: [],
    },
    servicesDelivered: confidentialSeoServices,
    technologyStack: input.technologyStack,
    relatedServiceLinks: [
      { label: 'Local SEO', href: '/local-seo' },
      { label: 'Technical SEO', href: '/technical-seo' },
      { label: 'Google Map Optimization', href: '/google-map-optimization' },
    ],
    results: {
      eyebrow: 'Verified Results',
      title: 'Platform data from anonymized evidence screenshots',
      subtitle:
        'Figures below match the supplied anonymized screenshots. Client-identifying details were intentionally hidden.',
      metrics: input.metrics,
      secondaryMetrics: input.secondaryMetrics,
      notes: input.resultNotes,
      evidence,
    },
    outcome: input.outcome,
    sections: {
      challenge: {
        eyebrow: 'Background',
        title: 'Confidential SEO engagement',
      },
      goals: {
        eyebrow: 'Objectives',
        title: 'Campaign objectives',
      },
      solution: {
        eyebrow: 'Strategy',
        title: 'SEO approach',
        subtitle:
          'Work focused on technical SEO, on-page SEO, local SEO foundations, and ongoing search monitoring — without publishing client-identifying details.',
      },
      seo: {
        eyebrow: 'SEO Implementation',
        title: 'Technical, on-page, and local SEO foundations',
      },
    },
    cta: {
      title: 'Need confidential SEO reporting for your business?',
      text: 'LocalSeoWiser delivers verified Search Console and Google Business Profile work with privacy-safe case studies when client identity must remain protected.',
      primaryLabel: 'Start Your Project',
      primaryHref: '/contact',
      secondaryLabel: 'View Our Services',
      secondaryHref: '/services',
    },
  }
}
