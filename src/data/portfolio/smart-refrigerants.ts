import type { PortfolioProject, PortfolioScreenshot } from '@/types/portfolio'

const asset = (filename: string) => `/images/portfolio/smart-refrigerants/${filename}`

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
  'smart-refrigerants-homepage-desktop.webp',
  'Smart Refrigerants website homepage designed and developed by Local SEO Wiser',
  'desktop',
  'Homepage — professional HVAC refrigerant supplier storefront',
)

/**
 * Smart Refrigerants — Website Design & Development project only.
 * No Local SEO, Technical SEO, GBP, rankings, or organic traffic claims.
 */
const smartRefrigerants: PortfolioProject = {
  slug: 'smart-refrigerants',
  publishedAt: '2026-07-22',
  featured: true,
  clientName: 'Smart Refrigerants',
  industry: 'HVAC / Refrigeration Solutions',
  filterCategory: 'web-design',
  country: 'USA',
  location: 'Houston, Texas, USA',
  liveUrl: 'https://smartrefrigerants.com',
  summary:
    'We designed and developed a modern, responsive website for Smart Refrigerants to establish a professional online presence. The project included custom UI/UX design, content creation, responsive development, and performance optimization, resulting in a clean website that effectively showcases the company\'s refrigeration products and services.',
  cardTitle: 'Smart Refrigerants Website Design & Development',
  metaTitle: 'Smart Refrigerants Web Design Case Study | LocalSeoWiser',
  metaDescription:
    'See how LocalSeoWiser designed and developed the Smart Refrigerants website — custom UI/UX, content, responsive build, and performance work for an HVAC refrigerant supplier.',
  h1: 'Smart Refrigerants Website Design & Development',
  supportingText:
    'A Website Design & Development project for an EPA-compliant HVAC refrigerant supplier — not an SEO case study. Search engine optimization services were not included.',
  heroSummary:
    'LocalSeoWiser planned, designed, and developed a modern responsive website for Smart Refrigerants so the brand could present products and services clearly, build trust with HVAC professionals, and make it easy for visitors to inquire — with strategy, UI/UX, content, and development focused on usability and performance.',
  services: ['Website Design', 'Website Development', 'UI/UX Design', 'Content Writing'],
  technologies: ['WordPress', 'WooCommerce'],
  featuredImage,
  gallery: [
    featuredImage,
    img(
      'smart-refrigerants-homepage-mobile.webp',
      'Mobile version of the Smart Refrigerants website',
      'mobile',
      'Responsive mobile website experience',
    ),
    img(
      'smart-refrigerants-about-page.webp',
      'Smart Refrigerants About page introducing the Houston-based refrigerant supplier',
      'desktop',
      'About page — company story and trust messaging',
    ),
    img(
      'smart-refrigerants-catalog-page.webp',
      'Smart Refrigerants product catalog showcasing HVAC refrigerants',
      'desktop',
      'Product / catalog layout for refrigerant inventory',
    ),
    img(
      'smart-refrigerants-contact-page.webp',
      'Smart Refrigerants contact page with inquiry paths',
      'desktop',
      'Contact experience for customer inquiries',
    ),
  ],
  seoImages: [],
  snapshot: [
    { label: 'Client', value: 'Smart Refrigerants' },
    { label: 'Industry', value: 'HVAC / Refrigeration Solutions' },
    { label: 'Location', value: 'Houston, Texas, USA' },
    { label: 'Project type', value: 'Website Design & Development' },
    { label: 'Live website', value: 'smartrefrigerants.com' },
    { label: 'Scope', value: 'Design, content, and development only — SEO services not included' },
  ],
  situation: [
    'Smart Refrigerants needed a professional business website to represent its HVAC and refrigeration supply brand online.',
    'The company sells refrigerants and related products to contractors, distributors, and related buyers across the USA.',
    'The priority was a clear product presentation, trustworthy brand presence, and an easy path for customer inquiries.',
    'This engagement covered website strategy, design, content, and development — not search marketing or ranking campaigns.',
  ],
  objectives: [
    'Build a professional business website',
    'Showcase refrigeration products and services',
    'Improve user experience',
    'Make the website mobile-friendly',
    'Generate more customer inquiries',
    'Create a trustworthy online presence',
  ],
  strategy: {
    website: [
      'Website strategy and planning for a product-led refrigerant supplier',
      'Page layout and information architecture for home, services/catalog, about, and contact paths',
      'Clear hierarchy so visitors can find products and get in touch quickly',
    ],
    design: [
      'Custom UI/UX design for a professional B2B refrigeration brand',
      'Custom website design with strong product and trust presentation',
      'Responsive layouts for desktop and mobile',
      'Homepage, service, and contact page design focused on clarity',
    ],
    development: [
      'Website development for a responsive storefront experience',
      'Contact form integration for customer inquiries',
      'Speed optimization and cross-browser testing',
      'Basic on-page setup as part of launch readiness (not an SEO campaign)',
    ],
    content: [
      'Content writing for services, products, and company messaging',
      'Clear copy that explains offerings for HVAC professionals and distributors',
    ],
    seo: [],
  },
  websiteArchitecture: {
    title: 'Built to present products and convert inquiries',
    subtitle:
      'Architecture reflects a product-forward refrigerant supplier site: browse offerings, understand the company, and contact the business.',
    items: [
      'Home',
      'HVAC Refrigerants catalog',
      'Automotive Refrigerants catalog',
      'Accessories and Tools',
      'About Us',
      'Contact / inquiry paths',
      'Product detail pages',
    ],
  },
  servicesDelivered: [
    'Website Strategy & Planning',
    'UI/UX Design',
    'Custom Website Design',
    'Website Development',
    'Responsive Development',
    'Content Writing',
    'Page Layout & Information Architecture',
    'Contact Form Integration',
    'Speed Optimization',
    'Basic On-Page Setup',
    'Cross Browser Testing',
  ],
  technologyStack: ['WordPress', 'WooCommerce'],
  relatedServiceLinks: [
    { label: 'Web Design Services', href: '/web-design' },
    { label: 'WordPress Development', href: '/wordpress-development' },
    { label: 'Shopify Development', href: '/shopify-development' },
  ],
  results: {
    eyebrow: 'Project Outcomes',
    title: 'Website design and development results',
    subtitle:
      'Outcomes below describe the delivered website experience. This project did not include Local SEO, Technical SEO campaigns, Google Business Profile work, keyword research, link building, or ranking/traffic reporting.',
    metrics: [
      {
        title: 'Online Presence',
        value: 'Live',
        description: 'Professional business website launched for Smart Refrigerants.',
        source: 'Project deliverable',
      },
      {
        title: 'Responsive Build',
        value: '100%',
        description: 'Layouts adapted for desktop and mobile browsing.',
        source: 'Project deliverable',
      },
      {
        title: 'UX Focus',
        value: 'Clear',
        description: 'Improved navigation and product presentation for visitors.',
        source: 'Project deliverable',
      },
      {
        title: 'Performance',
        value: 'Optimized',
        description: 'Speed and usability improvements as part of delivery.',
        source: 'Project deliverable',
      },
    ],
    notes: [
      'Professional online presence with fully responsive website delivery.',
      'Improved user experience, faster page loading, easy navigation, and stronger brand presentation.',
      'This project focused on website design, content creation, and development only. Search engine optimization services were not included.',
      'No Google Search Console results, rankings, or organic traffic claims are shown because SEO services were outside the project scope.',
    ],
    evidence: [],
  },
  outcome:
    'Smart Refrigerants now has a modern, responsive website that presents refrigeration products and services clearly, supports customer inquiries, and establishes a trustworthy online presence. The engagement was limited to website strategy, UI/UX, content, and development — SEO services were not part of this project.',
  sections: {
    challenge: {
      eyebrow: 'Background',
      title: 'A refrigeration supplier that needed a professional website',
    },
    goals: {
      eyebrow: 'Client Goals',
      title: 'What Smart Refrigerants wanted from the website',
    },
    solution: {
      eyebrow: 'Our Solution',
      title: 'How we designed and developed the website',
      subtitle:
        'Our team planned the website structure, created custom page layouts, wrote clear service content, and developed a fully responsive website optimized for speed and usability.',
    },
    gallery: {
      eyebrow: 'Design Showcase',
      title: 'Pages from the live Smart Refrigerants website',
      subtitle: 'Screenshots captured from smartrefrigerants.com — website design and development deliverables only.',
    },
    outcome: {
      eyebrow: 'Outcome',
      title: 'A professional website — without SEO overclaims',
      subtitle:
        'Custom website design, responsive development, content writing, homepage and service pages, contact page, mobile optimization, and performance work. Search engine optimization services were not included.',
    },
    services: {
      eyebrow: 'Deliverables',
      title: 'What was delivered',
      subtitle: 'Website Design & Development scope only — not an SEO project.',
    },
  },
  cta: {
    title: 'Need a professional Website Design & Development project?',
    text: 'LocalSeoWiser designs and builds clear, responsive business websites — and we keep project scope honest. If you only need design and development, that is exactly what we will deliver.',
    primaryLabel: 'Start Your Project',
    primaryHref: '/contact',
    secondaryLabel: 'Web Design Services',
    secondaryHref: '/web-design',
  },
}

export default smartRefrigerants
