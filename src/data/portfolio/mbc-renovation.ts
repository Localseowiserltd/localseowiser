import type { PortfolioProject, PortfolioScreenshot } from '@/types/portfolio'

const asset = (filename: string) => `/images/portfolio/mbc-renovation/${filename}`

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
  'mbc-renovation-homepage-desktop.webp',
  'MBC Renovation WordPress website homepage designed by Local SEO Wiser',
  'desktop',
  'New MBC Renovation homepage designed for Dubai customers',
)

/**
 * MBC Renovation — verified case study data only.
 * Add new projects as sibling files; register them in ./index.ts.
 */
const mbcRenovation: PortfolioProject = {
  slug: 'mbc-renovation',
  publishedAt: '2026-07-01',
  featured: true,
  clientName: 'MBC Renovation',
  industry: 'Renovation and Construction',
  filterCategory: 'construction',
  country: 'UAE',
  location: 'Dubai, UAE',
  liveUrl: 'https://mbcrenovation.ae',
  oldDomain: 'https://mbc-technicalservices.com/',
  summary:
    'A complete WordPress website rebuild and ongoing local SEO campaign for a Dubai renovation company, replacing an outdated single-page website with a scalable service-focused platform.',
  cardTitle: 'MBC Renovation Website & Local SEO',
  metaTitle: 'MBC Renovation Website & Local SEO Case Study | LocalSeoWiser',
  metaDescription:
    'See how LocalSeoWiser rebuilt MBC Renovation’s WordPress website and developed a local SEO foundation that generated 10.8K impressions and increased Google Business Profile interactions.',
  h1: 'MBC Renovation Website Design & Local SEO Case Study',
  supportingText:
    'A complete website rebuild, content strategy, and ongoing local SEO project for a renovation company serving Dubai.',
  heroSummary:
    'LocalSeoWiser replaced MBC Renovation’s limited single-page website with a professional, service-focused WordPress platform. The project combined website strategy, custom design, development, content, technical SEO, and local search optimization to build a stronger long-term digital presence in Dubai.',
  services: ['WordPress Development', 'Web Design', 'Local SEO', 'Technical SEO'],
  technologies: ['WordPress', 'Elementor'],
  featuredImage,
  gallery: [
    featuredImage,
    img(
      'mbc-renovation-homepage-mobile.webp',
      'Mobile version of the MBC Renovation website',
      'mobile',
      'Responsive mobile website experience',
    ),
    img('mbc-renovation-about-page.webp', 'MBC Renovation about page', 'desktop', 'About page supporting brand positioning'),
    img(
      'mbc-renovation-service-page.webp',
      'MBC Renovation villa renovation service page in Dubai',
      'desktop',
      'Service-focused content architecture (Villa Renovation Dubai page)',
    ),
    img('mbc-renovation-contact-page.webp', 'MBC Renovation contact page', 'desktop', 'Contact experience designed to support inquiries'),
    img(
      'mbc-renovation-footer.webp',
      'MBC Renovation website footer navigation',
      'desktop',
      'Consistent footer navigation and conversion paths',
    ),
  ],
  seoImages: [
    img(
      'mbc-renovation-search-console.webp',
      'Google Search Console report showing 10.8K impressions and 101 clicks for MBC Renovation',
      'search-console',
      'Google Search Console performance overview (verified screenshot)',
    ),
    img(
      'mbc-renovation-google-business-profile.webp',
      'Google Business Profile report showing 212 interactions and a 562.5% increase',
      'google-business-profile',
      'Google Business Profile interactions overview (verified screenshot)',
    ),
    img(
      'mbc-renovation-search-queries.webp',
      'Google Search Console query table showing examples of search terms with visibility',
      'keyword-ranking',
      'Example search queries with visibility in Search Console (verified screenshot)',
    ),
  ],
  snapshot: [
    { label: 'Client', value: 'MBC Renovation' },
    { label: 'Industry', value: 'Renovation and Construction' },
    { label: 'Location', value: 'Dubai, UAE' },
    { label: 'Platform', value: 'WordPress' },
    { label: 'Builder', value: 'Elementor' },
    { label: 'Project scope', value: 'Website Design, Development, Content and SEO' },
    { label: 'Current status', value: 'Website launched and SEO ongoing' },
  ],
  situation: [
    'The company already had a website on the old domain mbc-technicalservices.com.',
    'The hyphenated domain did not clearly represent the main renovation brand.',
    'The previous site was a single-page website with limited service content.',
    'Website structure and SEO foundations were weak, which limited local keyword targeting opportunities.',
    'The online presence did not fully reflect the company’s renovation services.',
    'The project was rebuilt around the new domain mbcrenovation.ae.',
  ],
  objectives: [
    'Replace the old website',
    'Develop a professional brand presence',
    'Create a scalable multi-page website',
    'Generate more visibility from Google',
    'Improve Dubai local search visibility',
    'Increase opportunities for calls and quote requests',
    'Improve Google Business Profile performance',
    'Build a foundation for long-term SEO growth',
  ],
  strategy: {
    website: [
      'Organize the business around its main renovation services',
      'Replace the single-page structure',
      'Create clear conversion paths',
      'Improve navigation',
      'Make service information easier to discover',
    ],
    design: [
      'Professional renovation-industry presentation',
      'Responsive layouts',
      'Clear service navigation',
      'Strong calls to action',
      'Mobile-friendly design',
      'Trust-focused visual hierarchy',
    ],
    development: [
      'WordPress and Elementor implementation',
      'Reusable page structure',
      'Responsive behavior',
      'Optimized content layout',
      'Maintainable website setup',
    ],
    content: [
      'Service-focused content',
      'Dubai-relevant local content',
      'Keyword research',
      'Service page creation',
      'Location page creation',
      'Blog content strategy',
    ],
    seo: [
      'On-page SEO',
      'Technical SEO',
      'Internal linking',
      'Schema markup',
      'XML sitemap',
      'Robots configuration',
      'Local SEO',
      'Google Business Profile optimization',
      'Ongoing monitoring and maintenance',
    ],
  },
  websiteArchitecture: {
    title: 'Built around the renovation services customers search for',
    subtitle:
      'The new multi-page structure replaced a single-page site so each service could be explained clearly and supported with content and SEO.',
    items: [
      'Apartment Renovation',
      'Kitchen Renovation',
      'Bathroom Renovation',
      'Villa Renovation',
      'Villa Demolition',
      'Villa Extension',
      'Flooring Installation',
      'Landscaping Service',
      'Painting Services',
      'Wood Polishing',
      'Pool Construction',
    ],
  },
  servicesDelivered: [
    'Website Strategy',
    'UI/UX Design',
    'Custom Web Design',
    'WordPress Development',
    'Elementor Development',
    'Responsive Development',
    'Speed Optimization',
    'Content Writing',
    'Keyword Research',
    'Service Page Creation',
    'Location Page Creation',
    'Blog Writing',
    'On-Page SEO',
    'Technical SEO',
    'Local SEO',
    'Google Business Profile Optimization',
    'Schema Markup',
    'Sitemap and Robots Configuration',
    'Ongoing SEO Maintenance',
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
        value: '10.8K',
        description: 'Impressions reported in Google Search Console for the visible reporting period.',
        source: 'Google Search Console',
      },
      {
        title: 'Search Clicks',
        value: '101',
        description: 'Clicks reported in Google Search Console for the visible reporting period.',
        source: 'Google Search Console',
      },
      {
        title: 'Business Profile Interactions',
        value: '212',
        description: 'Interactions reported in Google Business Profile for the visible reporting period.',
        source: 'Google Business Profile',
      },
      {
        title: 'Increase in Business Profile Interactions',
        value: '562.5%',
        description: 'Percentage increase in interactions shown in the supplied GBP screenshot.',
        source: 'Google Business Profile',
      },
    ],
    secondaryMetrics: [
      {
        title: 'Average CTR',
        value: '0.9%',
        source: 'Google Search Console',
      },
      {
        title: 'Average search position',
        value: '44.5',
        source: 'Google Search Console',
      },
    ],
    notes: [
      'These figures are taken from the supplied Google Search Console and Google Business Profile screenshots and represent the reporting periods visible in those platforms.',
      'Search performance and local visibility fluctuate over time. The figures shown here are historical platform data, not guarantees of future performance.',
      'Impressions are not the same as website visits. Business Profile interactions are engagement signals and are not claimed as completed leads, calls, or revenue.',
    ],
    evidence: [], // filled below after seoImages defined — use seoImages reference
  },
  queryExamples: [
    'construction contractors in dubai',
    'contracting companies in dubai',
    'dubai construction company',
    'fit out company in dubai',
    'house demolition',
    'house renovation cost',
    'interior companies in dubai',
  ],
  querySectionIntro:
    'The website began appearing for a broader range of relevant service and location-based queries. The examples below are search queries that received visibility in Search Console. They are not presented as number-one rankings.',
  outcome:
    'The rebuild gave MBC Renovation a professional, multi-page website that better represents its service range and provides a scalable foundation for content and SEO. Search Console and Google Business Profile data show growing search visibility and increased local engagement, while ongoing SEO work continues to strengthen the company’s presence in Dubai.',
  sections: {
    challenge: {
      eyebrow: 'Background',
      title: 'The client’s original situation',
    },
    goals: {
      eyebrow: 'Objectives',
      title: 'Project objectives',
    },
    solution: {
      eyebrow: 'Strategy',
      title: 'How we approached the rebuild and SEO foundation',
      subtitle:
        'Website, design, development, content, and search work were planned together so the new site could support long-term growth in Dubai.',
    },
    gallery: {
      eyebrow: 'Design Showcase',
      title: 'Real pages from the live website',
      subtitle: 'Screenshots below were captured from the live MBC Renovation website. No mockups or invented visuals.',
    },
    seo: {
      eyebrow: 'SEO Implementation',
      title: 'Technical, on-page, and local SEO foundations',
    },
  },
  cta: {
    title: 'Need a Website and Local SEO Strategy Built for Long-Term Growth?',
    text: 'LocalSeoWiser helps service businesses improve their online presence through professional website design, development, technical SEO, and local search strategy.',
    primaryLabel: 'Start Your Project',
    primaryHref: '/contact',
    secondaryLabel: 'View Our Services',
    secondaryHref: '/services',
  },
}

// Attach evidence screenshots (same as seoImages) without duplicating literals
mbcRenovation.results.evidence = mbcRenovation.seoImages

export default mbcRenovation
