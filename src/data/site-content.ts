import { seoServicePages } from './service-page-seo'
import { snapServicePages } from './service-page-snap'

export const heroStats = [
  { label: 'Organic clicks (6 months)', end: 1.66, suffix: 'K', decimals: 2 },
  { label: 'Search impressions', end: 858, suffix: 'K', decimals: 0 },
  { label: 'Average client satisfaction', end: 4.9, suffix: '/5', decimals: 1 },
  { label: 'Markets tracked on geo-grid maps', end: 50, suffix: '+', decimals: 0 },
]

export const provenResultsCountries = ['United States', 'United Kingdom', 'Canada', 'Australia']

export const provenResultsStats = [
  {
    trend: '+32% YoY',
    end: 240,
    suffix: '+',
    decimals: 0,
    label: 'Local campaigns launched',
  },
  {
    trend: '+8% retention',
    end: 96,
    suffix: '%',
    decimals: 0,
    label: 'Clients staying beyond 12 months',
  },
  {
    trend: '+5.1M this year',
    end: 18.7,
    suffix: 'M',
    decimals: 1,
    label: 'Map discovery views improved',
    footnote: 'Trusted by multi-region brands',
  },
  {
    end: 4.9,
    suffix: '/5',
    decimals: 1,
    label: 'Average review profile rating',
  },
]

export const homeServices = [
  {
    icon: 'tabler:brand-google',
    title: 'Google Business Profile Optimization',
    description:
      'Your Google Business Profile is often the strongest local ranking and conversion asset you control. We audit and optimize categories, services, attributes, photos, posts, and Q&A so the profile matches how Pittsburgh customers search. That work improves Map Pack eligibility, click-through rates, and the trust signals that turn map views into phone calls.',
    tags: ['Profile Fields', 'Map Pack Signals'],
    href: '/google-map-optimization',
  },
  {
    icon: 'tabler:map-pin',
    title: 'Neighborhood & Keyword Targeting',
    description:
      'Pittsburgh search is neighborhood-driven, not one-size-fits-all. We research the exact service and location phrases your customers use across suburbs and city districts, then structure pages and content around that intent. The goal is qualified visibility in the places you actually serve—not broad rankings that never convert.',
    tags: ['Neighborhood Pages', 'Intent Mapping'],
    href: '/local-seo',
  },
  {
    icon: 'tabler:list-check',
    title: 'Citations & NAP Consistency',
    description:
      'Inconsistent Name, Address, and Phone details across directories confuse both customers and Google. We clean up duplicates, correct outdated listings, and align core business data so your entity looks stable and trustworthy. Strong citation hygiene supports local pack rankings and reduces wasted clicks from wrong-number or wrong-address listings.',
    tags: ['NAP Cleanup', 'Directory Alignment'],
    href: '/local-business-citation',
  },
  {
    icon: 'tabler:star',
    title: 'Reviews That Build Trust',
    description:
      'Reviews influence both ranking signals and buying decisions. We help you build a repeatable process to request honest feedback, respond professionally, and keep review activity fresh over time. Higher volume and better response quality strengthen credibility on Google Maps while improving conversion once people find your profile.',
    tags: ['Review Volume', 'Response Quality'],
    href: '/local-seo',
  },
  {
    icon: 'tabler:file-text',
    title: 'On-Page & Location Content',
    description:
      'Thin or duplicated city pages rarely win competitive local markets. We create human-written service and location content that reflects real customer questions, local proof, and clear next steps. That gives Google stronger topical relevance and gives visitors a reason to contact you instead of bouncing to a competitor.',
    tags: ['Service Pages', 'Location Content'],
    href: '/landing-page-optimization',
  },
  {
    icon: 'tabler:link',
    title: 'Local Link Building',
    description:
      'Local prominence still depends on relevant authority. We pursue links and mentions from trusted local sources, partners, and industry placements that reinforce your Pittsburgh relevance. These signals help search engines understand your business as an established local option—not just another website chasing rankings.',
    tags: ['Local Authority', 'Best-Of Mentions'],
    href: '/local-seo',
  },
  {
    icon: 'tabler:brain',
    title: 'AI & Generative Search (GEO)',
    description:
      'Customers increasingly discover businesses through AI answers as well as classic search results. We strengthen the same entity, content, and local proof signals that help you appear in experiences like Google AI Overviews. No shortcuts or gimmicks—just durable local SEO fundamentals that support visibility across traditional and generative search.',
    tags: ['AI Overviews', 'GEO Fundamentals'],
    href: '/local-seo',
  },
  {
    icon: 'tabler:chart-bar',
    title: 'Clear Reporting',
    description:
      'You should never need a 40-page PDF to understand progress. Our reporting focuses on rankings that matter, Google Business Profile engagement, calls, and form fills. Every update is written so you can see what changed, why it matters for revenue, and what we are prioritizing next.',
    tags: ['Calls & Leads', 'Rank Tracking'],
    href: '/local-seo',
  },
  {
    icon: 'tabler:trending-up',
    title: 'Results You Can Expect',
    description:
      'The outcome we optimize for is practical growth: stronger Maps visibility, more qualified inquiries, and more phone calls from people searching nearby. Timelines vary by competition, but the process is built for compounding gains—visibility that keeps working after the first wins instead of short-lived spikes.',
    tags: ['Lead Growth', 'Map Visibility'],
    href: '/local-seo',
  },
]

export const industriesSection = {
  eyebrow: 'Industries',
  title: 'Pittsburgh industries we know well',
  subtitle: '',
}

/** Homepage industry cards — single source in `@/data/industries/home`. */
export {
  homepageIndustryCards as industries,
  HOMEPAGE_INDUSTRIES_INITIAL_COUNT,
  type HomepageIndustryCard,
} from '@/data/industries/home'

/**
 * Homepage area chips come from `getHomeAreaChips()` in `@/data/locations`.
 */

/** Add verified Google reviews here before enabling AggregateRating schema. */
export const verifiedGoogleReviews: {
  author: string
  reviewBody: string
  ratingValue: string
  datePublished?: string
}[] = []

export const homeInvestmentSection = {
  eyebrow: 'Investment',
  title: 'Custom quotes built around your business — not fixed packages',
  subtitle:
    'We do not offer fixed pricing or predefined packages. Every engagement is quoted individually based on your goals, competition, and the scope of work required.',
  factors: [
    'Your industry and local competition',
    'Number of locations and service areas',
    'Current digital foundation (site, profile, citations)',
    'Growth goals and timeline',
  ],
  ctaLabel: 'Request a Proposal',
  ctaHref: '/contact',
  footnote: 'No long contracts. Clear scope and pricing before any work begins.',
}

export const homeCtaSection = {
  title: 'Ready to get found in Pittsburgh?',
  text:
    "Your free visibility scan takes about 30 seconds to request. We'll show you exactly where you stand in Pittsburgh search and what it takes to climb.",
  buttonLabel: 'Get My Free Visibility Scan',
  footnote:
    'No spam. No obligation. Just honest insight into where you stand. Or call:',
}

export const homeCtaBenefits = [
  'A clear picture of where you stand in Pittsburgh search',
  'Priority actions for your market and competition',
  'Honest insight into what it takes to climb the Map Pack',
]

export const homeCtaActions = [
  {
    title: 'Free visibility scan in about 30 seconds',
    description: 'We show you exactly where you stand and what to fix first.',
    href: '/contact',
    variant: 'card1' as const,
  },
  {
    title: 'Prefer to talk? Call our Pittsburgh team',
    description: 'Mon–Fri, 9 AM–5 PM. No spam, no obligation.',
    href: '/contact',
    variant: 'card2' as const,
  },
]

export const whyLocalSeoNeighborhoods = [
  'Shadyside',
  'Lawrenceville',
  'Oakland',
  'Strip District',
  'Mt. Lebanon',
  'Cranberry',
  'Monroeville',
  'and beyond',
]

export const localSeoStats = [
  {
    headline: '46%',
    end: 46,
    text: 'of all Google searches now have local intent',
  },
  {
    headline: 'Top 3',
    text: 'The top 3 Map Pack spots take the majority of local clicks',
  },
  {
    headline: 'Your opening',
    text: 'Most Pittsburgh businesses still have weak local SEO. That is your opening.',
  },
]

export const localSeoCompare = {
  without: [
    "Your listing appears differently across Google, Maps, and directories, confusing both customers and Google's algorithm",
    'Few reviews and slow responses signal low trustworthiness to potential Pittsburgh customers',
    'You are invisible in the map pack while nearby competitors collect every high-intent near me search',
    'No clear view of how many calls, clicks, or direction requests your profile is actually generating',
  ],
  with: [
    'Fully optimized Pittsburgh profile with strong local relevance signals and category alignment',
    'Steady, managed review flow that builds trust and improves your star rating over time',
    'Top map pack visibility for the near-me and service-area keywords that drive real calls in Pittsburgh',
    'Transparent monthly reporting that connects our work directly to leads, calls, and revenue',
  ],
}

export const processSteps = [
  {
    step: '01',
    title: 'Month 1: Foundation',
    tag: 'Foundation',
    phase: 'AUDIT & SETUP',
    description:
      'Full audit, complete Google Business Profile overhaul, citation cleanup, and a keyword + neighborhood map built for your specific market.',
  },
  {
    step: '02',
    title: 'Months 2–3: Momentum',
    tag: 'Momentum',
    phase: 'OPTIMIZE & CONTENT',
    description:
      "On-page optimization, location and service content, and your review engine goes live. This is usually where you'll see your first ranking movement.",
  },
  {
    step: '03',
    title: 'Months 4–6: Compounding',
    tag: 'Compounding',
    phase: 'LINKS & GROWTH',
    description:
      'Local link building, content expansion, and results that build on themselves. Local SEO is an asset that keeps paying off, not an ad you switch off.',
  },
]

export const honestBitSection = {
  eyebrow: 'The Honest Bit',
  title: "What we won't promise you",
  paragraphs: [
    'Some agencies promise #1 rankings. Google itself makes clear that no one can guarantee specific positions, and anyone who does should be treated as a red flag. Local search is competitive, algorithms change, and your results depend on your market, website, reviews, and how consistently the work is executed. We will never sell you a ranking guarantee.',
    'What we do commit to is transparent reporting and sustainable SEO. You will see what we worked on, why it matters, and which metrics moved—calls, form fills, Maps engagement, and meaningful ranking progress. We avoid vanity dashboards that look busy while your phone stays quiet.',
    'We also refuse shortcuts that put your business at risk. No fake reviews, no doorway-page spam, no mass-generated location pages, and no link schemes. Those tactics can create short-term noise and long-term penalties. Our approach is built for durable local visibility that compounds month over month.',
    'If you want a partner focused on long-term growth instead of empty promises, we are the right fit. Month-to-month engagement, clear communication, and work aimed at real customer acquisition—not contracts designed to trap you after the pitch.',
  ],
}

export const faqSection = {
  eyebrow: 'FAQ',
  title: 'Frequently asked questions',
}

export type HomeFaqItem = {
  question: string
  answer: string
  links?: { label: string; href: string }[]
}

export const faqItems: HomeFaqItem[] = [
  {
    question: 'How much do local SEO services cost in Pittsburgh?',
    answer:
      "It depends on your industry's competition, current foundation, and goals. We quote every project individually after understanding your market — no fixed packages or one-size-fits-all pricing. A quick call gets you a clear proposal.",
    links: [{ label: 'Request a proposal', href: '/contact' }],
  },
  {
    question: 'How competitive is local SEO in Pittsburgh?',
    answer:
      "Very. With 2.4 million people in the metro, you're often up against dozens of established businesses for the top 3 Map Pack spots. The upside: many of them have weak local SEO, so there's real room to win if you invest strategically in Local SEO services built for this market.",
    links: [{ label: 'Local SEO services', href: '/local-seo' }],
  },
  {
    question: 'How long until I see results?',
    answer:
      'Most Pittsburgh businesses see measurable improvement in 60–90 days, with stronger results building over 4–6 months. Competitive categories take longer. We set realistic timelines based on your market after a free visibility scan.',
    links: [{ label: 'free visibility scan', href: '/contact' }],
  },
  {
    question: 'Do you work with businesses in the Pittsburgh suburbs?',
    answer:
      'Yes. We cover the entire metro: Cranberry, Mt. Lebanon, Monroeville, Robinson, the North and South Hills, and everywhere between. Suburban search has its own dynamics and we tailor for it across the areas we serve.',
    links: [{ label: 'areas we serve', href: '/#areas' }],
  },
  {
    question: "What's the difference between local SEO and regular SEO?",
    answer:
      'Regular SEO competes globally; local SEO targets a specific area and a different set of signals: Google Business Profile, proximity, reviews, and citations. Learn more on our Google Business Profile Optimization page. A modest local business can outrank a much bigger competitor by getting these right.',
    links: [{ label: 'Google Business Profile Optimization page', href: '/google-map-optimization' }],
  },
  {
    question: 'Do you optimize for AI searches like ChatGPT and Google AI Overviews?',
    answer:
      'Yes. The good news is that strong local SEO fundamentals already make you eligible for most AI answers, so we build the foundation right and you benefit on both fronts. Technical SEO and clear local content support that work.',
    links: [
      { label: 'local SEO', href: '/local-seo' },
      { label: 'Technical SEO', href: '/technical-seo' },
    ],
  },
  {
    question: 'Do you guarantee #1 rankings?',
    answer:
      'No. You should be cautious of anyone who does. Google prohibits ranking guarantees. We commit to a transparent process and real, reported results instead—exactly what we outline in our honest approach to local search.',
    links: [{ label: 'honest approach', href: '/#honest' }],
  },
  {
    question: 'Are there long contracts?',
    answer:
      'No long contracts. We work month-to-month so you stay because results are coming in, not because you are locked in. Ready to talk? Contact Local SEO Wiser and we will map the right next step.',
    links: [{ label: 'Contact Local SEO Wiser', href: '/contact' }],
  },
]

/** @deprecated Import from `@/data/about` instead. Re-exported for compatibility. */
export {
  aboutPageBeliefs,
  aboutPageClients,
  aboutPageClosing,
  aboutPageExperience,
  aboutPageHero,
  aboutPageMeta,
  aboutPageProcess,
  aboutPageTrust,
  aboutPageWhoWeAre,
  aboutTeamMembers as aboutTeam,
  aboutTeamSection,
} from './about'

export type ServiceMenuItem = {
  id: string
  title: string
  description: string
  href: string
  icon: string
  badge?: string
}

export type ServiceMegaMenuSection = {
  id: string
  title: string
  icon: string
  items: ServiceMenuItem[]
}

export const servicesMegaMenuSections: ServiceMegaMenuSection[] = [
  {
    id: 'seo-services',
    title: 'SEO Services',
    icon: 'tabler:rocket',
    items: [
      { id: 'local-seo', title: 'Local SEO', description: 'Rank higher in local search', href: '/local-seo', icon: 'tabler:map-pin' },
      { id: 'google-map-optimization', title: 'Google Map Optimization', description: 'Optimize Google Business Profile', href: '/google-map-optimization', icon: 'tabler:brand-google' },
      { id: 'technical-seo', title: 'Technical SEO', description: 'Improve site health & performance', href: '/technical-seo', icon: 'tabler:tool' },
      { id: 'link-building', title: 'Link Building Services', description: 'High-quality backlinks that work', href: '/link-building', icon: 'tabler:link', badge: 'New' },
      { id: 'local-business-citation', title: 'Local Citation Services', description: 'Accurate citations for better rankings', href: '/local-business-citation', icon: 'tabler:world', badge: 'New' },
      { id: 'landing-page-optimization', title: 'Landing Page Optimization', description: 'Pages that convert more visitors', href: '/landing-page-optimization', icon: 'tabler:layout' },
    ],
  },
  {
    id: 'website-services',
    title: 'Website Services',
    icon: 'tabler:device-desktop',
    items: [
      { id: 'wordpress-development', title: 'WordPress Development', description: 'Custom, fast & SEO-friendly', href: '/wordpress-development', icon: 'tabler:brand-wordpress' },
      { id: 'shopify-development', title: 'Shopify Development', description: 'High-converting online stores', href: '/shopify-development', icon: 'tabler:shopping-bag' },
      { id: 'web-design', title: 'Web Design Services', description: 'Modern, responsive designs', href: '/web-design', icon: 'tabler:layout' },
    ],
  },
  {
    id: 'marketing-services',
    title: 'Marketing Services',
    icon: 'tabler:speakerphone',
    items: [
      { id: 'google-ads', title: 'Google Ads Management', description: 'Drive targeted leads & sales', href: '/google-ads', icon: 'tabler:brand-google' },
      { id: 'social-media-marketing', title: 'Social Media Marketing', description: 'Grow your brand on social media', href: '/social-media-marketing', icon: 'tabler:share' },
      { id: 'content-writing', title: 'Content Writing Services', description: 'SEO-friendly content that ranks', href: '/content-writing', icon: 'tabler:pencil' },
      { id: 'ppc-advertising', title: 'PPC Advertising', description: 'High-converting ad campaigns', href: '/ppc-advertising', icon: 'tabler:click' },
      { id: 'reputation-management', title: 'Reputation Management', description: 'Build trust & strong reputation', href: '/services', icon: 'tabler:star' },
    ],
  },
]

export const servicesMegaMenuPromo = {
  title: 'Need a Customized Solution?',
  text: 'Get a tailored strategy for your business goals.',
  image: '/mega-menu-solution.png',
  buttonLabel: 'Get Free Consultation',
  buttonHref: '/contact',
  whyTitle: 'Why Choose Us?',
  whyItems: ['Results-Driven Strategies', 'Transparent Reporting', 'Affordable Pricing', 'Dedicated Support'],
}

export const servicesMegaMenuTrust = [
  { icon: 'tabler:award', title: 'Proven Results', text: 'Track record of success' },
  { icon: 'tabler:map-pin', title: 'Local Expertise', text: 'Pittsburgh & beyond' },
  { icon: 'tabler:coin', title: 'Affordable Pricing', text: 'Packages for every business' },
  { icon: 'tabler:headset', title: 'Ongoing Support', text: "We're always here to help" },
]

export type ServiceStat = {
  resultLabel: string
  value: string
  label: string
  countEnd: number
  countSuffix?: string
  countDecimals?: number
}

export type ServiceProcessStep = {
  step: string
  title: string
  phase: string
  description?: string
  paragraphs?: string[]
  icon?: string
}

export type ServiceFaqItem = {
  question: string
  answer: string
}

export type ServiceOutcomeCard = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  takeaway?: string
  icon?: string
  ctaLabel?: string
  ctaHref?: string
}

export type ServiceDeliverableItem = {
  title: string
  description: string
  icon?: string
}

export type ServiceWhyChooseItem = {
  title: string
  description: string
  icon?: string
}

export type ServiceTimelineItem = {
  period: string
  description: string
}

export type ServiceContentBlock = {
  title: string
  paragraphs?: string[]
  timeline?: ServiceTimelineItem[]
  image?: string
  imageDimensions?: { width: number; height: number }
  imagePosition?: 'left' | 'right'
  bgLight?: boolean
  layout?: 'default' | 'ledger'
  highlightPhrase?: string
  questions?: string[]
}

export type ServiceClosingCta = {
  title: string
  paragraphs: string[]
  bullets?: string[]
  pickLabel?: string
  icon?: string
  primaryButton: { label: string; href: string; description?: string }
  secondaryButton?: { label: string; href: string; description?: string }
  trustItems?: { label: string; icon: string }[]
}

export type ServiceLeadForm = {
  title: string
  subtitle?: string
  buttonLabel?: string
}

export type ServiceSnapCenterRow = {
  label: string
  value: string
  change?: string
  trend?: 'up' | 'down'
}

export type ServiceSnapCenter = {
  title: string
  rows: ServiceSnapCenterRow[]
}

export type ServicePlaybookCard = {
  title: string
  description: string
  icon: string
}

export type ServiceChallengePlaybook = {
  eyebrow: string
  title: string
  cards: ServicePlaybookCard[]
  closing: string
}

export type ServiceHeroTrustItem = {
  label: string
  icon: string
}

export type ServiceInvestmentSection = {
  eyebrow: string
  title: string
  paragraphs: string[]
  factors?: string[]
  cta: { label: string; href: string }
}

export type ServicePage = {
  slug: string
  category: string
  title: string
  description: string
  intro: string
  icon: string
  deliverables: string[]
  benefits: string[]
  variant?: 'full' | 'simple'
  pageLayout?: 'default' | 'small-business'
  metaTitle?: string
  metaDescription?: string
  imageAlt?: string
  heroImage?: string
  heroImageDimensions?: { width: number; height: number }
  heroLayout?: 'default' | 'centered' | 'split' | 'showcase' | 'gmp' | 'technical' | 'snap'
  heroTitleAccent?: string
  heroBadges?: string[]
  heroParagraphs?: string[]
  heroPrimaryCta?: { label: string; href: string }
  heroSecondaryCta?: { label: string; href: string }
  heroTrustItems?: ServiceHeroTrustItem[]
  leadForm?: ServiceLeadForm
  snapCenter?: ServiceSnapCenter
  /** Show compact lead form in centered hero */
  heroForm?: boolean
  hideStats?: boolean
  stats?: ServiceStat[]
  challenge?: {
    eyebrow: string
    title: string
    text?: string
    paragraphs?: string[]
    items?: string[]
    callout?: string
    playbook?: ServiceChallengePlaybook
    footnote?: string
  }
  challengeImage?: string
  challengeImageDimensions?: { width: number; height: number }
  idealFit?: {
    eyebrow: string
    title: string
    items: string[]
    itemIcons?: string[]
  }
  idealFitImage?: string
  idealFitImageDimensions?: { width: number; height: number }
  splitOutcomes?: boolean
  outcomes?: {
    eyebrow: string
    title: string
    intro?: string
    items: string[]
    paragraphs?: string[]
    cards?: ServiceOutcomeCard[]
    layout?: 'tree' | 'features'
  }
  deliverablesEyebrow?: string
  deliverablesTitle?: string
  deliverablesIntro?: string
  deliverablesDetailed?: ServiceDeliverableItem[]
  idealFitIntro?: string
  idealFitClosing?: string
  whyChooseSection?: {
    title: string
    intro?: string
    items: ServiceWhyChooseItem[]
    image?: string
    imageDimensions?: { width: number; height: number }
  }
  processImage?: string
  processImageDimensions?: { width: number; height: number }
  contentBlocks?: ServiceContentBlock[]
  process?: {
    eyebrow: string
    title: string
    subtitle?: string
    align?: 'center' | 'left'
    steps: ServiceProcessStep[]
  }
  whyChoose?: string[]
  whyChooseItems?: ServiceWhyChooseItem[]
  whyChooseEyebrow?: string
  whyChooseTitle?: string
  whyChooseIntro?: string
  hideWhyChoose?: boolean
  faq?: {
    eyebrow: string
    title: string
    subtitle?: string
    items: ServiceFaqItem[]
  }
  investment?: ServiceInvestmentSection
  exploreCta?: {
    text: string
    buttonLabel: string
    buttonHref: string
  }
  closingCta?: ServiceClosingCta
}

export const servicePages: ServicePage[] = [
  ...(seoServicePages as ServicePage[]),
  ...(snapServicePages as unknown as ServicePage[]),
]

export const getServicePageBySlug = (slug: string) => servicePages.find((page) => page.slug === slug)

export const getRelatedServicePages = (slug: string) => {
  const current = servicePages.find((page) => page.slug === slug)
  if (!current) return []

  const sameCategory = servicePages.filter((page) => page.category === current.category && page.slug !== slug)
  if (sameCategory.length > 0) return sameCategory.slice(0, 3)

  return servicePages.filter((page) => page.slug !== slug).slice(0, 3)
}

export const serviceCategories = [
  {
    id: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    subtitle: 'Core local SEO services that improve map visibility, rankings, citations, and on-site performance.',
    services: [
      { id: 'local-seo', number: '01', title: 'Local SEO', description: 'Maps, citations, content & local rankings', href: '/local-seo' },
      {
        id: 'google-map-optimization',
        number: '02',
        title: 'Google Map Optimization',
        description: 'Profile optimization for map pack visibility',
        href: '/google-map-optimization',
      },
      {
        id: 'seo-for-small-business',
        number: '03',
        title: 'SEO For Small Business',
        description: 'Focused SEO for growing local brands',
        href: '/seo-for-small-business',
      },
      {
        id: 'local-business-citation',
        number: '04',
        title: 'Local Citations',
        description: 'NAP consistency & trusted directory listings',
        href: '/local-business-citation',
      },
      {
        id: 'link-building',
        number: '05',
        title: 'Link Building',
        description: 'White-hat backlinks that build authority',
        href: '/link-building',
      },
      {
        id: 'landing-page-optimization',
        number: '06',
        title: 'Landing Page Optimization',
        description: 'Conversion-focused local landing pages',
        href: '/landing-page-optimization',
      },
      { id: 'technical-seo', number: '07', title: 'Technical SEO', description: 'Crawl, speed, schema & site health fixes', href: '/technical-seo' },
    ],
  },
  {
    id: 'search-engine-marketing',
    title: 'Search Engine Marketing',
    subtitle: 'Paid search campaigns that capture high-intent local demand while organic SEO builds momentum.',
    services: [
      { id: 'ppc-advertising', number: '01', title: 'PPC Advertising', description: 'Pay per click campaigns for local leads', href: '/ppc-advertising' },
      { id: 'google-ads', number: '02', title: 'Google Ads', description: 'Search ads with geo-targeting & call tracking', href: '/google-ads' },
    ],
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    subtitle: 'Fast, conversion-ready websites built on WordPress and Shopify with SEO foundations included.',
    services: [
      { id: 'web-design', number: '01', title: 'Web Design', description: 'Modern websites built to convert', href: '/web-design' },
      { id: 'wordpress-development', number: '02', title: 'WordPress Development', description: 'SEO-ready WordPress websites', href: '/wordpress-development' },
      { id: 'shopify-development', number: '03', title: 'Shopify Development', description: 'Shopify stores built for local sales', href: '/shopify-development' },
    ],
  },
  {
    id: 'content-social',
    title: 'Content & Social',
    subtitle: 'SEO content and social media support that builds trust, visibility, and engagement.',
    services: [
      { id: 'content-writing', number: '01', title: 'Content Writing', description: 'SEO content that ranks and converts', href: '/content-writing' },
      {
        id: 'social-media-marketing',
        number: '02',
        title: 'Social Media Marketing',
        description: 'Strategy, content & paid social growth',
        href: '/social-media-marketing',
      },
      {
        id: 'social-media-management',
        number: '03',
        title: 'Social Media Management',
        description: 'Content, engagement & brand visibility',
        href: '/social-media-management',
      },
    ],
  },
]


/** Blog content hub — single source lives in `@/data/blog` (re-exported for compatibility). */
export type { BlogPost } from '@/types/blog'
export {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getPublishedBlogPosts,
  getBlogPostPath,
} from '@/data/blog'

export const contactInfo = {
  email: 'info@localseowiser.com',
  phone: '+1 412 663 7288',
  phoneTel: '+14126637288',
  whatsapp: 'https://wa.me/14126637288',
  hours: 'Mon–Fri, 9 AM–5 PM',
  responseTime: 'Within 24 to 48 hours',
  location: 'Pittsburgh, PA',
  locationUk: 'United Kingdom',
  serviceArea: 'Pittsburgh, PA & nationwide clients',
}

export const socialLinks = {
  x: 'https://x.com/LocalSeoWiser',
  linkedin: 'https://www.linkedin.com/company/local-seo-wisers/',
  facebook: 'https://www.facebook.com/Localseowiser/',
  instagram: 'https://www.instagram.com/localseowiser/',
  tiktok: 'https://www.tiktok.com/@local.seo.wiser',
  pinterest: 'https://www.pinterest.com/localseowiser/',
  whatsapp: 'https://wa.me/14126637288',
}

export const footerSocialLinks = [
  { icon: 'tabler:brand-facebook', href: socialLinks.facebook, label: 'Facebook' },
  { icon: 'tabler:brand-x', href: socialLinks.x, label: 'X' },
  { icon: 'tabler:brand-linkedin', href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: 'tabler:brand-instagram', href: socialLinks.instagram, label: 'Instagram' },
  { icon: 'tabler:brand-tiktok', href: socialLinks.tiktok, label: 'TikTok' },
  { icon: 'tabler:brand-pinterest', href: socialLinks.pinterest, label: 'Pinterest' },
]

export const topBarSocialLinks = [
  { icon: 'tabler:brand-facebook', href: socialLinks.facebook, label: 'Facebook' },
  { icon: 'tabler:brand-linkedin', href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: 'tabler:brand-instagram', href: socialLinks.instagram, label: 'Instagram' },
  { icon: 'tabler:brand-whatsapp', href: socialLinks.whatsapp, label: 'WhatsApp' },
]

export const topBarContact = {
  phoneLabel: 'Call Us:',
  phone: '+1 412 663 7288',
  tel: '+14126637288',
  email: 'info@localseowiser.com',
  location: 'Pittsburgh, PA',
}

export const contactMailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent('Local SEO Review Request')}&body=${encodeURIComponent('Hi, I would like to request a free local SEO review.')}`
export const contactTelHref = `tel:${contactInfo.phoneTel}`

/** @deprecated Import from `@/data/contact` instead. */
export {
  contactPageFaq,
  contactPageHero,
  contactPageMeta,
  contactPageNextSteps,
  contactPageReview as contactPageAudit,
} from './contact'

export const contactPageOffice = 'Pittsburgh, PA'

export const contactPhones = [
  { label: 'US', flag: '🇺🇸', phone: '+1 412 663 7288', tel: '+14126637288' },
  { label: 'UK', flag: '🇬🇧', phone: '+44 7454 758272', tel: '+447454758272' },
]

export const contactLocations = [
  {
    code: 'USA',
    label: 'USA',
    phone: '+1 412 663 7288',
    tel: '+14126637288',
    email: 'info@localseowiser.com',
    address: 'Pittsburgh, PA',
  },
  {
    code: 'UK',
    label: 'UK',
    phone: '+44 7454 758272',
    tel: '+447454758272',
    email: 'info@localseowiser.com',
    address: 'United Kingdom',
  },
]
