import type { PortfolioProject, PortfolioScreenshot } from '@/types/portfolio'

const asset = (filename: string) => `/images/portfolio/fil-xpat-cleaning/${filename}`

const img = (
  filename: string,
  alt: string,
  kind: PortfolioScreenshot['kind'],
  caption?: string,
): PortfolioScreenshot => ({
  src: asset(filename),
  alt,
  kind,
  caption,
  available: true,
})

const featuredImage = img(
  'fil-xpat-homepage-desktop.webp',
  'Fil Xpat Cleaning Service WordPress website homepage designed by Local SEO Wiser',
  'desktop',
  'New Fil Xpat Cleaning Service homepage for Dubai residential and commercial clients',
)

/**
 * Fil Xpat Cleaning Service — verified case study data only.
 * New business launch (no prior website / no domain migration).
 */
const filXpatCleaning: PortfolioProject = {
  slug: 'fil-xpat-cleaning',
  publishedAt: '2026-07-15',
  featured: true,
  clientName: 'Fil Xpat Cleaning Service',
  industry: 'Residential & Commercial Cleaning Services',
  filterCategory: 'cleaning',
  country: 'UAE',
  location: 'Dubai, UAE',
  liveUrl: 'https://filxpatcleaning.ae',
  summary:
    'A from-scratch website and local SEO launch for a new Dubai cleaning company — brand site, service and location architecture, and ongoing search foundations with verified Search Console and Google Business Profile data.',
  cardTitle: 'Fil Xpat Cleaning Service Website & Local SEO Launch',
  metaTitle: 'Fil Xpat Cleaning Website SEO Case Study | Results',
  metaDescription:
    'See how LocalSeoWiser launched Fil Xpat Cleaning from scratch—a WordPress platform that reached 20.1K Search Console impressions and 302 GBP interactions.',
  h1: 'Fil Xpat Cleaning Service Website Design & Local SEO Case Study',
  supportingText:
    'A new-business website and local SEO launch for a residential and commercial cleaning company in Dubai — built from scratch with no previous website or domain migration.',
  heroSummary:
    'LocalSeoWiser planned, designed, developed, and launched Fil Xpat Cleaning Service online from the ground up. The engagement covered website strategy, brand design, WordPress and Elementor development, content, technical SEO, local SEO, and Google Business Profile optimization so a new cleaning brand could compete for visibility in Dubai.',
  services: ['WordPress Development', 'Web Design', 'Local SEO', 'Technical SEO'],
  technologies: ['WordPress', 'Elementor'],
  featuredImage,
  gallery: [
    featuredImage,
    img(
      'fil-xpat-homepage-mobile.webp',
      'Mobile version of the Fil Xpat Cleaning Service website',
      'mobile',
      'Responsive mobile website experience',
    ),
    img(
      'fil-xpat-service-page.webp',
      'Fil Xpat Cleaning Service deep cleaning service page',
      'desktop',
      'Service-focused page architecture (Deep Cleaning)',
    ),
  ],
  seoImages: [
    img(
      'fil-xpat-search-console.webp',
      'Google Search Console report showing 20.1K impressions and 31 clicks for Fil Xpat Cleaning Service',
      'search-console',
      'Google Search Console performance overview (verified screenshot)',
    ),
    img(
      'fil-xpat-google-business-profile.webp',
      'Google Business Profile report showing 302 Business Profile interactions for Fil Xpat Cleaning Service',
      'google-business-profile',
      'Google Business Profile interactions overview (verified screenshot)',
    ),
    img(
      'fil-xpat-search-queries.webp',
      'Google Search Console query table showing niche cleaning-related search queries with visibility',
      'keyword-ranking',
      'Example search queries with visibility in Search Console (verified screenshot)',
    ),
    img(
      'fil-xpat-semrush-domain-overview.webp',
      'Semrush Domain Overview for filxpatcleaning.ae showing authority score, organic traffic estimate, and organic keywords',
      'other',
      'Semrush Domain Overview snapshot (17 Jul 2026) — third-party SEO estimates, not Google Search Console figures',
    ),
  ],
  snapshot: [
    { label: 'Client', value: 'Fil Xpat Cleaning Service' },
    { label: 'Industry', value: 'Residential & Commercial Cleaning Services' },
    { label: 'Location', value: 'Dubai, UAE' },
    { label: 'Project type', value: 'New Business Launch' },
    { label: 'Started', value: 'Early 2026' },
    { label: 'Platform', value: 'WordPress' },
    { label: 'Builder', value: 'Elementor' },
    { label: 'Site structure', value: 'Homepage, About, Contact, 45+ service pages, 20+ location pages, 10+ SEO articles' },
    { label: 'Current status', value: 'Website launched and SEO ongoing' },
  ],
  situation: [
    'This was a new business launch — there was no previous website to redesign.',
    'There was no existing domain migration; the online presence was planned and built from scratch.',
    'The brand needed a professional website that could support residential and commercial cleaning services across Dubai.',
    'Search visibility and a Google Business Profile foundation had to be established for a company starting online for the first time.',
    'The site needed scalable service and location architecture so content and SEO could grow over time.',
  ],
  objectives: [
    'Plan and launch a complete brand website from scratch',
    'Establish a professional digital presence for a new cleaning company',
    'Build scalable multi-page service and location architecture',
    'Create content foundations for local search visibility in Dubai',
    'Implement technical SEO, on-page SEO, and schema',
    'Optimize Google Business Profile for local engagement',
    'Support ongoing SEO and website maintenance after launch',
  ],
  strategy: {
    website: [
      'Define information architecture for a new cleaning brand',
      'Map homepage, about, contact, services, locations, and blog',
      'Create clear conversion paths for quote and contact requests',
      'Support both residential and commercial service lines',
      'Make service and location content easy to discover',
    ],
    design: [
      'Brand-forward cleaning industry presentation',
      'Responsive layouts for desktop and mobile',
      'Clear service navigation',
      'Strong calls to action',
      'Trust-focused visual hierarchy for a new market entrant',
    ],
    development: [
      'WordPress and Elementor implementation',
      'Reusable page templates for services and locations',
      'Responsive behavior and speed optimization',
      'Maintainable website setup for ongoing growth',
    ],
    content: [
      'Service-focused content writing',
      'Dubai-relevant local content',
      'Keyword research to guide page topics',
      '45+ service pages',
      '20+ location pages',
      '10+ SEO articles and blog strategy',
    ],
    seo: [
      'On-page SEO',
      'Technical SEO',
      'Internal linking',
      'Schema markup',
      'XML sitemap',
      'Robots.txt configuration',
      'Local SEO',
      'Google Business Profile optimization',
      'Ongoing monitoring and maintenance',
    ],
  },
  websiteArchitecture: {
    title: 'Built for a new cleaning brand with scalable service and location coverage',
    subtitle:
      'The launch included a full multi-page structure so Fil Xpat Cleaning Service could publish service and location content without outgrowing a single-page site.',
    items: [
      'Homepage',
      'About',
      'Contact',
      '45+ Service Pages',
      '20+ Location Pages',
      '10+ SEO Articles',
    ],
  },
  servicesDelivered: [
    'Website Strategy',
    'Brand Website Design',
    'WordPress Development',
    'Elementor Development',
    'Responsive Design',
    'Speed Optimization',
    'Content Writing',
    'Keyword Research',
    'Service Architecture',
    'Location Architecture',
    'Blog Strategy',
    'On-Page SEO',
    'Technical SEO',
    'Local SEO',
    'Google Business Profile Optimization',
    'Schema Markup',
    'XML Sitemap',
    'Robots.txt',
    'Ongoing SEO',
    'Website Maintenance',
  ],
  technologyStack: ['WordPress', 'Elementor', 'Google Search Console', 'Google Business Profile'],
  relatedServiceLinks: [
    { label: 'WordPress Development', href: '/wordpress-development' },
    { label: 'Local SEO', href: '/local-seo' },
    { label: 'Technical SEO', href: '/technical-seo' },
    { label: 'Google Map Optimization', href: '/google-map-optimization' },
  ],
  results: {
    eyebrow: 'Verified Results',
    title: 'Platform data from the supplied screenshots',
    subtitle:
      'Figures below match the Google Search Console and Google Business Profile screenshots provided for this case study.',
    metrics: [
      {
        title: 'Search Impressions',
        value: '20.1K',
        description: 'Impressions reported in Google Search Console for the visible reporting period.',
        source: 'Google Search Console',
      },
      {
        title: 'Search Clicks',
        value: '31',
        description: 'Clicks reported in Google Search Console for the visible reporting period.',
        source: 'Google Search Console',
      },
      {
        title: 'Business Profile Interactions',
        value: '302',
        description: 'Interactions reported in Google Business Profile for Feb 2026 – Jul 2026.',
        source: 'Google Business Profile',
      },
    ],
    secondaryMetrics: [
      {
        title: 'Average CTR',
        value: '0.2%',
        source: 'Google Search Console',
      },
      {
        title: 'Average search position',
        value: '35.2',
        source: 'Google Search Console',
      },
    ],
    notes: [
      'These figures are taken from the supplied Google Search Console and Google Business Profile screenshots and represent the reporting periods visible in those platforms.',
      'Search performance and local visibility fluctuate over time. The figures shown here are historical platform data, not guarantees of future performance.',
      'Impressions are not the same as website visits. Business Profile interactions are engagement signals and are not claimed as completed leads, calls, bookings, or revenue.',
      'This project was a new business launch. Early-stage click volume can remain modest while impressions and local profile engagement grow.',
      'The Semrush Domain Overview screenshot is included as supporting third-party context. Semrush organic traffic and keyword counts are estimates and are not presented as Google Search Console or Google Business Profile figures.',
    ],
    evidence: [],
  },
  queryExamples: [
    'tile floor steam cleaning services',
    'cleaning chandelier',
    'chandelier cleaning',
    'cleaning chandeliers',
    'cleaning of chandelier',
    'how to clean chandelier',
    'clean a chandelier',
  ],
  querySectionIntro:
    'The website has visibility for niche cleaning-related search queries. The examples below are search queries that received visibility in Search Console. They are presented as examples of query coverage, not as claims of number-one rankings.',
  outcome:
    'LocalSeoWiser launched Fil Xpat Cleaning Service with a complete WordPress website, service and location architecture, and SEO foundations suitable for a new Dubai cleaning brand. Search Console and Google Business Profile data show early search visibility and local profile engagement, while ongoing SEO and maintenance continue after launch.',
  sections: {
    challenge: {
      eyebrow: 'Background',
      title: 'Starting from zero — a new business with no prior website',
    },
    goals: {
      eyebrow: 'Objectives',
      title: 'Launch objectives',
    },
    solution: {
      eyebrow: 'Strategy',
      title: 'How we planned and launched the website and SEO foundation',
      subtitle:
        'Website, design, development, content, and search work were planned together so a new cleaning brand could enter the Dubai market with a scalable online presence.',
    },
    gallery: {
      eyebrow: 'Design Showcase',
      title: 'Real pages from the live website',
      subtitle:
        'Screenshots below were captured from the live Fil Xpat Cleaning Service website. No mockups or invented visuals.',
    },
    seo: {
      eyebrow: 'SEO Implementation',
      title: 'Technical, on-page, and local SEO foundations',
    },
  },
  cta: {
    title: 'Launching a new local business website and SEO foundation?',
    text: 'LocalSeoWiser helps service businesses go from zero to a professional website, content architecture, technical SEO, and local search presence — without inflated promises.',
    primaryLabel: 'Start Your Project',
    primaryHref: '/contact',
    secondaryLabel: 'View Our Services',
    secondaryHref: '/services',
  },
}

filXpatCleaning.results.evidence = filXpatCleaning.seoImages

export default filXpatCleaning
