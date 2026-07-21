import type { PortfolioProject, PortfolioScreenshot } from '@/types/portfolio'

const asset = (filename: string) => `/images/portfolio/yara-luxe-interiors/${filename}`

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
  'yara-luxe-homepage-desktop.webp',
  'Yara Luxe Interiors WordPress website homepage designed by Local SEO Wiser',
  'desktop',
  'Full homepage scroll — premium dark theme with services, projects gallery, and enquiry paths',
)

/**
 * Yara Luxe Interiors — verified case study data only.
 * New business launch. No Search Console performance data supplied.
 * Only verified GBP metric: 106 Business Profile interactions.
 */
const yaraLuxeInteriors: PortfolioProject = {
  slug: 'yara-luxe-interiors',
  publishedAt: '2026-07-17',
  featured: true,
  clientName: 'Yara Luxe Interiors',
  industry: 'Luxury Interior Design',
  filterCategory: 'interior-design',
  country: 'Australia',
  location: 'Melbourne, Victoria, Australia',
  liveUrl: 'https://yaraluxeinteriors.com.au',
  summary:
    'A from-scratch WordPress website and local SEO foundation for a Melbourne luxury interior design studio — premium brand presence, service architecture, technical SEO, and Google Business Profile optimization.',
  cardTitle: 'Yara Luxe Interiors Website & Local SEO Launch',
  metaTitle: 'Yara Luxe Interiors SEO Case Study | LocalSeoWiser',
  metaDescription:
    'See how LocalSeoWiser launched Yara Luxe Interiors with a WordPress site, technical SEO, and Google Business Profile work that drove 106 verified interactions.',
  h1: 'Yara Luxe Interiors Website Design & Local SEO Case Study',
  supportingText:
    'A new-business website launch for a luxury interior design studio in Melbourne — planned, designed, and developed from scratch with no previous website or redesign.',
  heroSummary:
    'LocalSeoWiser planned, designed, and launched Yara Luxe Interiors as a completely new online presence. The project covered website strategy, UI/UX and custom design, WordPress and Elementor development, content, technical SEO, a local SEO foundation, and Google Business Profile optimization so a premium interior design brand could start with a scalable digital platform.',
  services: ['WordPress Development', 'Web Design', 'Local SEO', 'Technical SEO'],
  technologies: ['WordPress', 'Elementor'],
  featuredImage,
  gallery: [
    featuredImage,
    img(
      'yara-luxe-homepage-alt.webp',
      'Yara Luxe Interiors homepage hero section with luxury interior design branding',
      'desktop',
      'Homepage hero — Making Home Luxury',
    ),
    img(
      'yara-luxe-homepage-mobile.webp',
      'Mobile version of the Yara Luxe Interiors website',
      'mobile',
      'Responsive mobile website experience',
    ),
    img(
      'yara-luxe-service-page.webp',
      'Yara Luxe Interiors Design and Concept Development service page',
      'desktop',
      'Service page architecture (Design & Concept Development)',
    ),
    img(
      'yara-luxe-portfolio-page.webp',
      'Yara Luxe Interiors portfolio page with project gallery',
      'desktop',
      'Portfolio / projects page from the live website',
    ),
  ],
  seoImages: [
    img(
      'yara-luxe-google-business-profile.webp',
      'Google Business Profile report showing 106 Business Profile interactions for Yara Luxe Interiors',
      'google-business-profile',
      'Google Business Profile interactions overview (verified screenshot)',
    ),
  ],
  snapshot: [
    { label: 'Client', value: 'Yara Luxe Interiors' },
    { label: 'Industry', value: 'Luxury Interior Design' },
    { label: 'Location', value: 'Melbourne, Victoria, Australia' },
    { label: 'Project type', value: 'New Business Launch' },
    { label: 'Platform', value: 'WordPress' },
    { label: 'Builder', value: 'Elementor' },
    { label: 'Live website', value: 'yaraluxeinteriors.com.au' },
    { label: 'Current status', value: 'Website launched; technical SEO complete; organic SEO campaign recently started' },
  ],
  situation: [
    'Yara Luxe Interiors was launched as a completely new business website.',
    'There was no previous website and no redesign project to migrate from.',
    'The brand needed a premium online presence that reflected luxury interior design positioning.',
    'A scalable foundation for long-term local SEO was required alongside the website launch.',
    'Google Business Profile optimization was part of establishing early local visibility and enquiry paths.',
  ],
  objectives: [
    'Plan and launch a complete premium brand website from scratch',
    'Create a clean service architecture for luxury interior design offerings',
    'Implement technical SEO foundations including schema, sitemap, and robots',
    'Establish a local SEO foundation for Melbourne',
    'Optimize Google Business Profile for discovery and engagement',
    'Support ongoing website maintenance and early-stage SEO',
  ],
  strategy: {
    website: [
      'Define a premium information architecture for a new interior design studio',
      'Organize services, process, portfolio, FAQ, blog, and contact paths clearly',
      'Support consultation enquiries through the contact experience',
      'Create a structure that can grow with content and local SEO over time',
    ],
    design: [
      'Luxury-oriented UI/UX for an interior design brand',
      'Custom visual presentation aligned to premium positioning',
      'Responsive layouts for desktop and mobile',
      'Clear navigation across services, portfolio, and contact',
      'Conversion-focused consultation paths without clutter',
    ],
    development: [
      'WordPress and Elementor implementation',
      'Reusable templates for services and portfolio content',
      'Responsive development and performance optimization',
      'Maintainable setup for ongoing content and SEO work',
    ],
    content: [
      'Brand and service-focused content writing',
      'Keyword research to guide page planning',
      'Service page planning for design, delivery, and styling offerings',
      'Portfolio and blog content structure for long-term publishing',
    ],
    seo: [
      'Technical SEO foundation',
      'On-page SEO structure',
      'Local SEO foundation for Melbourne',
      'Google Business Profile optimization',
      'Schema markup',
      'XML sitemap',
      'Robots.txt',
      'Ongoing SEO (campaign recently started)',
    ],
  },
  websiteArchitecture: {
    title: 'Built for a premium Melbourne interior design brand',
    subtitle:
      'Architecture below reflects the live yaraluxeinteriors.com.au site structure inspected for this case study. Pages that were not present on the live site were not invented.',
    items: [
      'Home',
      'About Us',
      'Our Process',
      'FAQs',
      'Our Services (hub)',
      'Design & Concept Development',
      'Project Management & Delivery',
      'Finishes & Styling',
      'Portfolio / Projects (portfolio listing and individual project pages)',
      'Blog',
      'Contact Us (consultation / enquiry path)',
    ],
  },
  servicesDelivered: [
    'Website Strategy',
    'UI/UX Design',
    'Custom Website Design',
    'WordPress Development',
    'Elementor Development',
    'Responsive Development',
    'Performance Optimization',
    'Content Writing',
    'Keyword Research',
    'Service Page Planning',
    'Technical SEO',
    'Local SEO Foundation',
    'Google Business Profile Optimization',
    'Schema Markup',
    'XML Sitemap',
    'Robots.txt',
    'Website Maintenance',
    'Ongoing SEO',
  ],
  technologyStack: ['WordPress', 'Elementor', 'Google Business Profile'],
  relatedServiceLinks: [
    { label: 'WordPress Development', href: '/wordpress-development' },
    { label: 'Local SEO', href: '/local-seo' },
    { label: 'Technical SEO', href: '/technical-seo' },
    { label: 'Google Map Optimization', href: '/google-map-optimization' },
  ],
  results: {
    eyebrow: 'Verified Results',
    title: 'Google Business Profile data from the supplied screenshot',
    subtitle:
      'Search Console performance data was not supplied for this case study and is not shown. The figure below matches the Google Business Profile screenshot provided.',
    metrics: [
      {
        title: 'Business Profile Interactions',
        value: '106',
        description: 'Interactions reported in Google Business Profile for Apr 2026 – Jul 2026.',
        source: 'Google Business Profile',
      },
    ],
    notes: [
      'This figure is taken from the supplied Google Business Profile screenshot and represents the reporting period visible in that platform.',
      'Business Profile interactions are engagement signals and are not claimed as completed leads, calls, bookings, revenue, or website conversions.',
      'Google Search Console clicks, impressions, CTR, average position, and keyword rankings are intentionally omitted because that data was not available for this case study.',
      'The long-term organic SEO campaign has only recently started. This case study does not claim organic traffic growth, ranking improvements, keyword growth, or SEO-driven lead growth.',
      'The website launch, technical SEO foundation, and Google Business Profile optimization are complete. Ongoing organic SEO work continues after launch.',
    ],
    evidence: [],
  },
  outcome:
    'Yara Luxe Interiors now has a launched premium WordPress website with a clear service architecture, portfolio presentation, technical SEO foundations, and an optimized Google Business Profile. Early Business Profile engagement is visible in the supplied screenshot, while the longer-term organic SEO campaign remains in its early stage and is not presented here with unverified search-growth claims.',
  sections: {
    challenge: {
      eyebrow: 'Background',
      title: 'Starting from zero — a new luxury brand with no prior website',
    },
    goals: {
      eyebrow: 'Objectives',
      title: 'Launch objectives',
    },
    solution: {
      eyebrow: 'Strategy',
      title: 'How we planned and launched the website and local SEO foundation',
      subtitle:
        'Strategy, design, development, content, technical SEO, and Google Business Profile work were planned together so a new Melbourne interior design brand could launch with a scalable platform.',
    },
    gallery: {
      eyebrow: 'Design Showcase',
      title: 'Real pages from the live website',
      subtitle:
        'Screenshots below were captured from the live Yara Luxe Interiors website. No mockups or invented visuals.',
    },
    seo: {
      eyebrow: 'SEO Implementation',
      title: 'Technical SEO and local SEO foundation',
      subtitle:
        'Technical SEO was completed as part of launch. The longer-term organic SEO campaign has only recently started, so ranking and traffic growth claims are not included.',
    },
  },
  cta: {
    title: 'Launching a premium local brand website and SEO foundation?',
    text: 'LocalSeoWiser helps service businesses go from zero to a professional website, technical SEO, and Google Business Profile foundation — without inflated promises.',
    primaryLabel: 'Start Your Project',
    primaryHref: '/contact',
    secondaryLabel: 'View Our Services',
    secondaryHref: '/services',
  },
}

yaraLuxeInteriors.results.evidence = yaraLuxeInteriors.seoImages

export default yaraLuxeInteriors
