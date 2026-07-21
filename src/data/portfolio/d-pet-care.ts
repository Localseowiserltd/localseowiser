import type { PortfolioProject, PortfolioScreenshot } from '@/types/portfolio'

const asset = (filename: string) => `/images/portfolio/d-pet-care/${filename}`

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
  'd-pet-care-homepage-desktop.webp',
  'D Pet Care LLC WordPress website homepage designed by Local SEO Wiser',
  'desktop',
  'D Pet Care LLC homepage for Dubai pet sitting and pet care services',
)

/**
 * D Pet Care LLC — verified case study data only.
 * New business launch / website + local SEO project.
 */
const dPetCare: PortfolioProject = {
  slug: 'd-pet-care',
  publishedAt: '2026-07-16',
  featured: true,
  clientName: 'D Pet Care LLC',
  industry: 'Pet Care Services',
  filterCategory: 'pet-care',
  country: 'UAE',
  location: 'Dubai, UAE',
  liveUrl: 'https://dpetcare.ae',
  summary:
    'A WordPress website and local SEO launch for a Dubai pet care company — service and location architecture, content, technical SEO, and Google Business Profile foundations with verified Search Console and GBP data.',
  cardTitle: 'D Pet Care LLC Website & Local SEO',
  metaTitle: 'D Pet Care LLC Website & Local SEO Case Study | LocalSeoWiser',
  metaDescription:
    'See how LocalSeoWiser built and optimized D Pet Care LLC’s WordPress website for Dubai pet care search — 30.9K Search Console impressions, 389 clicks, and 368 Google Business Profile interactions.',
  h1: 'D Pet Care LLC Website Design & Local SEO Case Study',
  supportingText:
    'A website and local SEO project for a Dubai pet care company — WordPress, Elementor, service and location pages, and ongoing search foundations.',
  heroSummary:
    'LocalSeoWiser designed, developed, and optimized the D Pet Care LLC website on WordPress and Elementor. The project combined website design, content, service and location architecture, technical SEO, local SEO, and Google Business Profile optimization to support visibility for pet care searches in Dubai.',
  services: ['WordPress Development', 'Web Design', 'Local SEO', 'Technical SEO'],
  technologies: ['WordPress', 'Elementor'],
  featuredImage,
  gallery: [
    featuredImage,
    img(
      'd-pet-care-homepage-mobile.webp',
      'Mobile version of the D Pet Care LLC website',
      'mobile',
      'Responsive mobile website experience',
    ),
    img(
      'd-pet-care-service-page.webp',
      'D Pet Care LLC cat sitting service page in Dubai',
      'desktop',
      'Service page architecture (Cat Sitting Dubai)',
    ),
  ],
  seoImages: [
    img(
      'd-pet-care-search-console.webp',
      'Google Search Console report showing 30.9K impressions and 389 clicks for D Pet Care LLC',
      'search-console',
      'Google Search Console performance overview (verified screenshot)',
    ),
    img(
      'd-pet-care-google-business-profile.webp',
      'Google Business Profile report showing 368 Business Profile interactions for D Pet Care LLC',
      'google-business-profile',
      'Google Business Profile interactions overview (verified screenshot)',
    ),
    img(
      'd-pet-care-search-queries.webp',
      'Google Search Console query table showing pet care related search queries with visibility',
      'keyword-ranking',
      'Example search queries with visibility in Search Console (verified screenshot)',
    ),
    img(
      'd-pet-care-semrush-domain-overview.webp',
      'Semrush Domain Overview for dpetcare.ae showing authority score, organic traffic estimate, and organic keywords',
      'other',
      'Semrush Domain Overview snapshot (17 Jul 2026) — third-party SEO estimates, not Google Search Console figures',
    ),
  ],
  snapshot: [
    { label: 'Client', value: 'D Pet Care LLC' },
    { label: 'Industry', value: 'Pet Care Services' },
    { label: 'Location', value: 'Dubai, UAE' },
    { label: 'Project type', value: 'New Business Launch' },
    { label: 'Platform', value: 'WordPress' },
    { label: 'Builder', value: 'Elementor' },
    { label: 'Live website', value: 'dpetcare.ae' },
    { label: 'Current status', value: 'Website live and SEO ongoing' },
  ],
  situation: [
    'D Pet Care LLC needed a professional online presence for pet sitting and related pet care services in Dubai.',
    'The website had to support multiple service lines and location coverage across Dubai communities.',
    'Search visibility for commercial pet care queries and a strong Google Business Profile foundation were core goals.',
    'Content, technical SEO, and ongoing maintenance were required so the site could grow after launch.',
  ],
  objectives: [
    'Launch and refine a professional WordPress website',
    'Build clear service page architecture',
    'Support Dubai location coverage with dedicated pages',
    'Improve visibility for relevant pet care searches',
    'Strengthen Google Business Profile engagement',
    'Implement technical SEO foundations including schema, sitemap, and robots',
    'Maintain the site and SEO on an ongoing basis',
  ],
  strategy: {
    website: [
      'Organize the brand around core pet sitting and pet care services',
      'Create clear paths to services, locations, pricing, FAQ, and contact',
      'Support booking and visit scheduling flows',
      'Make trust, safety, and policy pages easy to find',
    ],
    design: [
      'Brand-forward pet care presentation',
      'Responsive layouts for desktop and mobile',
      'Clear service navigation',
      'Conversion-focused calls to action',
      'Trust-focused visual hierarchy',
    ],
    development: [
      'WordPress and Elementor implementation',
      'Reusable templates for services and locations',
      'Responsive behavior',
      'Maintainable setup for ongoing content growth',
    ],
    content: [
      'Service-focused content writing',
      'Keyword research for pet care and pet sitting topics',
      'Location-focused Dubai community pages',
      'Blog content to support informational search demand',
    ],
    seo: [
      'On-page SEO',
      'Technical SEO',
      'Local SEO',
      'Google Business Profile optimization',
      'Schema markup',
      'XML sitemap',
      'Robots.txt',
      'Ongoing SEO monitoring and maintenance',
    ],
  },
  websiteArchitecture: {
    title: 'Built around pet care services, Dubai locations, and conversion paths',
    subtitle:
      'Architecture below reflects the live dpetcare.ae site structure inspected for this case study — page counts were not invented.',
    items: [
      'Home',
      'About Us',
      'Services hub',
      'Cat Sitting Dubai',
      'Dog Sitting & Dog Walking Dubai',
      'Overnight & Live-In Pet Sitting Dubai',
      'Pricing',
      'FAQ',
      'Trust & Safety',
      'Community Guidelines',
      'Service Guarantee',
      'Contact Us',
      'Blog',
      'Booking / visit scheduling flow',
      'Legal pages (Privacy Policy, Terms of Service)',
      'Location coverage pages (including Al Barsha, Arabian Ranches, Business Bay, DIFC, Discovery Gardens, Downtown Dubai, Dubai Creek Harbour, Dubai Marina, Dubai Hills Estate, JBR, JLT, Mirdif, Jumeirah Village Circle, The Greens, Palm Jumeirah, The Lakes, The Meadows, The Springs)',
    ],
  },
  servicesDelivered: [
    'Website Design',
    'WordPress Development',
    'Content Writing',
    'Keyword Research',
    'Service Page Architecture',
    'Local SEO',
    'Technical SEO',
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
        value: '30.9K',
        description: 'Impressions reported in Google Search Console for the visible reporting period.',
        source: 'Google Search Console',
      },
      {
        title: 'Search Clicks',
        value: '389',
        description: 'Clicks reported in Google Search Console for the visible reporting period.',
        source: 'Google Search Console',
      },
      {
        title: 'Business Profile Interactions',
        value: '368',
        description: 'Interactions reported in Google Business Profile for Feb 2026 – Jul 2026.',
        source: 'Google Business Profile',
      },
    ],
    secondaryMetrics: [
      {
        title: 'Average CTR',
        value: '1.3%',
        source: 'Google Search Console',
      },
      {
        title: 'Average search position',
        value: '11.9',
        source: 'Google Search Console',
      },
    ],
    notes: [
      'These figures are taken from the supplied Google Search Console and Google Business Profile screenshots and represent the reporting periods visible in those platforms.',
      'Search performance and local visibility fluctuate over time. The figures shown here are historical platform data, not guarantees of future performance.',
      'Impressions are not the same as website visits. Business Profile interactions are engagement signals and are not claimed as completed leads, calls, bookings, or revenue.',
      'The Semrush Domain Overview screenshot is included as supporting third-party context only. Semrush Authority Score 8, organic traffic 65, organic keywords 60, referring domains 28, and backlinks 78 are Semrush estimates — not Google Search Console or Google Business Profile figures.',
    ],
    evidence: [],
  },
  queryExamples: [
    'pet care dubai',
    'pet care services',
    'pet care services dubai',
    'pet sitting dubai',
    'pet sitter dubai',
    'dog sitting',
    'most reliable pet sitting services in dubai',
  ],
  querySectionIntro:
    'The website receives visibility for commercial pet care searches. The examples below are search queries that received visibility in Search Console. They are presented as examples of query coverage, not as claims that every keyword ranks number one.',
  outcome:
    'D Pet Care LLC has a live WordPress website with service pages, Dubai location coverage, trust and policy pages, blog content, and booking paths. Search Console and Google Business Profile data show meaningful search visibility and local profile engagement, while ongoing SEO and maintenance continue after launch.',
  sections: {
    challenge: {
      eyebrow: 'Background',
      title: 'Building a Dubai pet care presence that can grow in search',
    },
    goals: {
      eyebrow: 'Objectives',
      title: 'Project objectives',
    },
    solution: {
      eyebrow: 'Strategy',
      title: 'How we approached the website and local SEO foundation',
      subtitle:
        'Design, development, content, and search work were planned together so D Pet Care LLC could support service demand and location coverage across Dubai.',
    },
    gallery: {
      eyebrow: 'Design Showcase',
      title: 'Real pages from the live website',
      subtitle: 'Screenshots below were captured from the live D Pet Care LLC website. No mockups or invented visuals.',
    },
    seo: {
      eyebrow: 'SEO Implementation',
      title: 'Technical, on-page, and local SEO foundations',
    },
  },
  cta: {
    title: 'Need a local service website and SEO foundation in Dubai?',
    text: 'LocalSeoWiser helps service businesses launch and grow with professional WordPress websites, content architecture, technical SEO, and local search strategy — without inflated promises.',
    primaryLabel: 'Start Your Project',
    primaryHref: '/contact',
    secondaryLabel: 'View Our Services',
    secondaryHref: '/services',
  },
}

dPetCare.results.evidence = dPetCare.seoImages

export default dPetCare
