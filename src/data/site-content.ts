import { seoServicePages } from './service-page-seo'

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
 * @deprecated Prefer `getHomeAreaChips()` from `@/data/locations`.
 * Homepage chips link only when a location page is publishable.
 * This legacy array keeps structural names/slugs; do not use hrefs for public navigation.
 */
export const homeAreasServed = [
  { name: 'Shadyside', slug: 'local-seo-shadyside', href: '/local-seo-shadyside' },
  { name: 'Lawrenceville', slug: 'local-seo-lawrenceville', href: '/local-seo-lawrenceville' },
  { name: 'Oakland', slug: 'local-seo-oakland', href: '/local-seo-oakland' },
  { name: 'Squirrel Hill', slug: 'local-seo-squirrel-hill', href: '/local-seo-squirrel-hill' },
  { name: 'Strip District', slug: 'local-seo-strip-district', href: '/local-seo-strip-district' },
  { name: 'South Side', slug: 'local-seo-south-side', href: '/local-seo-south-side' },
  { name: 'North Shore', slug: 'local-seo-north-shore', href: '/local-seo-north-shore' },
  { name: 'Mt. Lebanon', slug: 'local-seo-mt-lebanon', href: '/local-seo-mt-lebanon' },
  { name: 'Cranberry Township', slug: 'local-seo-cranberry-township', href: '/local-seo-cranberry-township' },
  { name: 'Monroeville', slug: 'local-seo-monroeville', href: '/local-seo-monroeville' },
  { name: 'Robinson Township', slug: 'local-seo-robinson-township', href: '/local-seo-robinson-township' },
  { name: 'North Hills', slug: 'local-seo-north-hills', href: '/local-seo-north-hills' },
  { name: 'South Hills', slug: 'local-seo-south-hills', href: '/local-seo-south-hills' },
]

/** Add verified Google reviews here before enabling AggregateRating schema. */
export const verifiedGoogleReviews: {
  author: string
  reviewBody: string
  ratingValue: string
  datePublished?: string
}[] = []

export const homePricingPlans = [
  {
    name: 'Starter',
    bestFor: 'Solo & new local businesses getting the foundation right',
    priceRange: '$150–$300',
    variant: 'starter' as const,
    includes: ['GBP Optimization', 'Citation Cleanup', 'Monthly Reporting'],
  },
  {
    name: 'Growth',
    bestFor: 'Established businesses ready to win the Map Pack',
    priceRange: '$750–$2,500',
    variant: 'growth' as const,
    featured: true,
    includes: ['Everything in Starter', 'Service Pages', 'Review Strategy'],
  },
  {
    name: 'Competitive',
    bestFor: 'Legal, medical & home services in dense categories',
    priceRange: '$1,500–$5,000',
    variant: 'competitive' as const,
    includes: ['Everything in Growth', 'Authority Link Building', 'Advanced Local SEO'],
  },
]

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
      "It depends on your industry's competition and goals. Foundational plans start lower, while competitive categories like legal, medical, and home services need more. See our pricing ranges above, or compare full Local SEO packages for engagement options. A quick call gets you an exact number.",
    links: [
      { label: 'Local SEO packages', href: '/packages' },
      { label: 'pricing ranges above', href: '/#pricing' },
    ],
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
}

export type ServiceMegaMenuSection = {
  id: string
  title: string
  items: ServiceMenuItem[]
}

export const servicesMegaMenuColumns: ServiceMegaMenuSection[][] = [
  [
    {
      id: 'search-engine-optimization',
      title: 'Search Engine Optimization',
      items: [
        { id: 'local-seo', title: 'Local SEO', description: 'Maps, citations, content & local rankings', href: '/local-seo', icon: 'tabler:map-pin' },
        { id: 'google-map-optimization', title: 'Google Map Optimization', description: 'Profile optimization for map pack visibility', href: '/google-map-optimization', icon: 'tabler:brand-google' },
        { id: 'seo-for-small-business', title: 'SEO For Small Business', description: 'Focused SEO for growing local brands', href: '/seo-for-small-business', icon: 'tabler:building-store' },
        { id: 'local-business-citation', title: 'Local Business Citation', description: 'NAP consistency & trusted directory listings', href: '/local-business-citation', icon: 'tabler:world' },
        { id: 'landing-page-optimization', title: 'Landing Page Optimization', description: 'Conversion-focused local landing pages', href: '/landing-page-optimization', icon: 'tabler:layout' },
        { id: 'technical-seo', title: 'Technical SEO', description: 'Crawl, speed, schema & site health fixes', href: '/technical-seo', icon: 'tabler:tool' },
      ],
    },
  ],
  [
    {
      id: 'search-engine-marketing',
      title: 'Search Engine Marketing',
      items: [
      {
        id: 'ppc-advertising',
        title: 'PPC Advertising',
        description: 'Pay per click campaigns for local leads',
        href: '/ppc-advertising',
        icon: 'tabler:click',
      },
      {
        id: 'google-ads',
        title: 'Google Ads',
        description: 'Search ads with geo-targeting & call tracking',
        href: '/google-ads',
        icon: 'tabler:speakerphone',
      },
    ],
    },
    {
      id: 'web-design',
      title: 'Web Design & Development',
      items: [
      {
        id: 'wordpress-development',
        title: 'WordPress Development',
        description: 'SEO-ready WordPress websites',
        href: '/wordpress-development',
        icon: 'tabler:code',
      },
      {
        id: 'shopify-development',
        title: 'Shopify Development',
        description: 'Shopify stores built for local sales',
        href: '/shopify-development',
        icon: 'tabler:shopping-bag',
      },
    ],
    },
  ],
  [
    {
      id: 'social-media',
      title: 'Social Media',
      items: [
      {
        id: 'social-media-management',
        title: 'Social Media Management',
        description: 'Content, engagement & brand visibility',
        href: '/social-media-management',
        icon: 'tabler:share',
      },
    ],
    },
  ],
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
  primaryButton: { label: string; href: string; description?: string }
  secondaryButton?: { label: string; href: string; description?: string }
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
  heroLayout?: 'default' | 'centered' | 'split'
  heroBadges?: string[]
  heroParagraphs?: string[]
  heroPrimaryCta?: { label: string; href: string }
  heroSecondaryCta?: { label: string; href: string }
  heroTrustItems?: ServiceHeroTrustItem[]
  hideStats?: boolean
  stats?: ServiceStat[]
  challenge?: {
    eyebrow: string
    title: string
    text?: string
    paragraphs?: string[]
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
  hideWhyChoose?: boolean
  faq?: {
    eyebrow: string
    title: string
    subtitle?: string
    items: ServiceFaqItem[]
  }
  exploreCta?: {
    text: string
    buttonLabel: string
    buttonHref: string
  }
  closingCta?: ServiceClosingCta
}

export const servicePages: ServicePage[] = [
  ...(seoServicePages as ServicePage[]),
  {
    slug: 'ppc-advertising',
    variant: 'full',
    category: 'Search Engine Marketing',
    title: 'PPC Advertising in Pittsburgh, PA — The Right Channels, Not Every Channel',
    metaTitle: 'PPC Advertising Pittsburgh | Google Ads Management Services',
    metaDescription:
      'Drive targeted traffic with PPC Advertising in Pittsburgh. Our Google Ads experts create campaigns that maximize ROI and generate qualified leads.',
    description:
      'Focused PPC management for Pittsburgh businesses — the right channels, not every channel, with transparent fees and no long contracts.',
    intro:
      'Focused PPC management for Pittsburgh businesses — the right channels, not every channel, with transparent fees and no long contracts.',
    icon: 'tabler:click',
    imageAlt: 'PPC Advertising service',
    heroLayout: 'centered',
    hideStats: true,
    heroParagraphs: [
      'PPC (pay-per-click) advertising is the paid model where you bid for placement across search and social platforms — Google, Microsoft (Bing), Meta (Facebook & Instagram), and more — and pay only when someone clicks. PPC management is the ongoing work behind it: choosing the right channels, researching keywords and audiences, writing ads, setting bids, tracking conversions, and continuously optimizing toward leads and sales rather than just clicks.',
      'Here\'s where most Pittsburgh businesses get burned: agencies sell them every platform at once, because more channels means more management fees. But each extra channel adds real overhead, and spreading a modest budget thin across five platforms usually performs worse than running one or two well. Local SEO Wiser does the opposite — we put your budget on the channels that actually fit your business and your customers, prove the return, and only expand when the numbers justify it.',
    ],
    heroPrimaryCta: { label: 'Get My Free PPC Audit', href: '/contact' },
    heroSecondaryCta: { label: 'Or call us → +1 412 663 7288', href: 'tel:+14126637288' },
    heroTrustItems: [
      { label: 'Pittsburgh-based team', icon: 'tabler:map-pin' },
      { label: 'No wasted channels', icon: 'tabler:filter' },
      { label: 'You own your accounts', icon: 'tabler:user-check' },
      { label: 'Free PPC audit', icon: 'tabler:clipboard-check' },
    ],
    challenge: {
      eyebrow: 'The Core Angle',
      title: 'Adding more channels is easy. Spending on the right ones is the skill.',
      paragraphs: [
        'It\'s tempting to be everywhere — Google, Facebook, Instagram, LinkedIn, TikTok, all of it. But "everywhere" is where small budgets go to die.',
        'Every channel you add costs management time, not just ad spend. Running five platforms well takes far more hours than running one — and someone pays for those hours.',
        'The same ads don\'t work everywhere. A Google searcher is ready to buy now; a Facebook scroller isn\'t searching for you at all. Treating every channel the same wastes a big chunk of your budget on poor fit.',
        'Your first channel almost always returns the most. Returns tend to shrink as you spread into more platforms — so the smart move is to win the best channel first, then expand on proof.',
        'For most Pittsburgh local businesses, that means starting where the intent is highest — usually Google search — getting it profitable, and adding channels only when there\'s a clear reason. That\'s not us doing less. It\'s us refusing to waste your money looking busy.',
      ],
    },
    idealFit: {
      eyebrow: 'The Channels',
      title: 'The channels Local SEO Wiser runs — and when each one earns your budget',
      items: [
        'Google Search & Shopping (our most common starting point) — The highest-intent paid channel: people actively searching for what you offer, ready to act. For most local businesses this is where the budget works hardest.',
        'Microsoft (Bing) Ads (the underrated value play) — Often overlooked — and that\'s the opportunity. Clicks on Microsoft Ads can run significantly cheaper than the same keywords on Google, and the audience skews older and higher-income.',
        'Meta Ads — Facebook & Instagram (discovery & retargeting) — People on Meta aren\'t searching for you, so it\'s not where you chase ready-to-buy intent. Where it shines: reaching new local audiences and retargeting visitors who didn\'t convert.',
        'LinkedIn Ads (B2B only, when it fits) — For B2B and professional services targeting decision-makers by role, industry, or company. Powerful, but premium-priced — we only recommend it when your deal value clearly supports the cost.',
      ],
    },
    idealFitClosing:
      'We won\'t push you onto a channel that doesn\'t fit. If your business only needs one done well, we\'ll tell you that.',
    splitOutcomes: true,
    outcomes: {
      eyebrow: 'The Strategy Layer',
      title: 'How we decide where every dollar goes',
      intro:
        'This is the part that separates real PPC management from "just running ads." Local SEO Wiser owns the strategic layer — deciding which lanes deserve budget at all. Channel-by-channel execution sits beneath it.',
      layout: 'features',
      items: [],
      cards: [
        {
          title: 'We Start Focused',
          icon: 'tabler:target-arrow',
          paragraphs: [
            'The channel with the highest-intent audience for your business gets the budget first — usually Google search for local services.',
          ],
          takeaway: 'Win the best channel before spreading thin.',
        },
        {
          title: 'We Measure Return, Not Activity',
          icon: 'tabler:chart-bar',
          paragraphs: [
            'Budget follows performance. A channel earns more spend by proving it converts profitably, not because it\'s trendy.',
          ],
          takeaway: 'Spend scales on proof, not platform hype.',
        },
        {
          title: 'We Expand on Evidence',
          icon: 'tabler:trending-up',
          paragraphs: [
            'Once your core channel is profitable, we test the next-best one carefully — and we kill what doesn\'t work instead of letting it quietly drain the account.',
          ],
          takeaway: 'New channels earn their place or get cut.',
        },
        {
          title: 'We Allocate by Return',
          icon: 'tabler:arrows-split',
          paragraphs: [
            'As channels prove out, we shift budget toward wherever the next dollar performs best — not split evenly to make a report look balanced.',
          ],
          takeaway: 'Every dollar goes where it works hardest.',
        },
      ],
    },
    deliverables: [],
    deliverablesEyebrow: 'Tracking & Reporting',
    deliverablesTitle: 'If you can\'t measure it, you\'re guessing',
    deliverablesIntro:
      'Before a dollar runs, we make sure conversion tracking and call tracking are firing correctly across every active channel. Then you get reporting on the numbers that mean revenue — calls, form fills, and cost per lead — not impressions and vanity clicks.',
    deliverablesDetailed: [
      {
        title: 'Conversion tracking setup',
        description:
          'Before a dollar runs, we make sure conversion tracking is firing correctly across every active channel — so optimization runs on evidence, not guesswork.',
        icon: 'tabler:chart-dots',
      },
      {
        title: 'Call tracking across channels',
        description:
          'Phone leads tracked by platform and campaign, so you always know which channel produced which call and what it cost.',
        icon: 'tabler:phone-call',
      },
      {
        title: 'Revenue-focused reporting',
        description:
          'Clear reporting on calls, form fills, and cost per lead — the numbers that mean revenue, not impressions and vanity clicks.',
        icon: 'tabler:report-analytics',
      },
    ],
    benefits: [],
    process: {
      eyebrow: 'Our Process',
      title: 'How we run your PPC — step by step',
      align: 'center',
      subtitle:
        'From audit and channel plan through launch, optimization, and careful expansion — with budget decisions driven by return, not activity.',
      steps: [
        {
          step: '01',
          title: 'Audit & Channel Plan',
          phase: 'Week 1',
          paragraphs: [
            'We audit any existing accounts, set up or fix conversion tracking, and recommend the minimum channel mix that fits your goals — not the maximum.',
          ],
        },
        {
          step: '02',
          title: 'Launch & Learn',
          phase: 'Weeks 2–4',
          paragraphs: [
            'Campaigns go live on the core channel(s) with tight targeting and message-matched landing page recommendations, gathering the conversion data we optimize on.',
          ],
        },
        {
          step: '03',
          title: 'Optimize, Then Expand',
          phase: 'Month 2 onward',
          paragraphs: [
            'We cut waste and lower cost per lead on what\'s running, and only add the next channel once the first is proving its return. Clear reporting on leads and cost per lead throughout.',
          ],
        },
      ],
    },
    hideWhyChoose: false,
    whyChooseItems: [
      {
        title: 'We won\'t sell you channels you don\'t need',
        icon: 'tabler:filter',
        description:
          'Most local businesses don\'t need a five-platform program. We scope to what actually fits — and say so honestly, even when it means a smaller engagement.',
      },
      {
        title: 'Flat, transparent fees',
        icon: 'tabler:receipt',
        description:
          'We charge a flat management fee tied to the work, not a percentage of your ad spend, so scaling your budget doesn\'t automatically inflate our bill.',
      },
      {
        title: 'No long contracts',
        icon: 'tabler:lock-open',
        description:
          'Month-to-month. You stay because the leads are coming in — not because an agreement traps you.',
      },
      {
        title: 'You own every account',
        icon: 'tabler:key',
        description:
          'Google, Microsoft, Meta — built in your accounts, with your data and history staying yours. No lock-in, ever.',
      },
      {
        title: 'One team for paid and organic',
        icon: 'tabler:stack-2',
        description:
          'Because we run your local SEO too, we make sure your paid spend and your free rankings work together — we won\'t pay for clicks on terms you already win organically.',
      },
      {
        title: 'Built for local and small business',
        icon: 'tabler:building-store',
        description:
          'We\'re not chasing enterprise budgets. We make modest, local budgets work hard.',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About PPC Advertising',
      subtitle:
        'Transparent pricing — two parts, kept separate. Ad spend is paid directly to each platform; management fees for focused local programs commonly run in the few-hundred to low-four-figure range per month depending on channels and complexity. We quote them separately — always. Book a call for an exact quote.',
      items: [
        {
          question: 'What\'s the difference between PPC and Google Ads?',
          answer:
            'Google Ads is one PPC channel — Google\'s platform. PPC is the bigger picture: paid advertising across Google, Microsoft, Meta, and others, plus the strategy of choosing which channels deserve your budget. If Google is the right (and often only) channel for you, our Google Ads page covers that in depth.',
        },
        {
          question: 'How much does PPC management cost in Pittsburgh?',
          answer:
            'Two costs: ad spend (paid to the platforms) and our management fee (paid to us). For focused local programs, management commonly runs from a few hundred to low-four-figures per month depending on channels and complexity. We quote them separately — always.',
        },
        {
          question: 'Do I really need to advertise on multiple platforms?',
          answer:
            'Usually not at first. Most local businesses do best starting with one high-intent channel, getting it profitable, and expanding only when the numbers justify it. We\'d rather run one channel well than five poorly.',
        },
        {
          question: 'How fast will I see results?',
          answer:
            'Faster than SEO — that\'s the point of paid. Traffic can come the day campaigns launch, with the first few weeks spent gathering data so we optimize toward profitable leads. Meaningful cost-per-lead improvement usually shows within 30–60 days.',
        },
        {
          question: 'Do you lock me into a contract?',
          answer:
            'No. We work month-to-month and earn your business with results.',
        },
        {
          question: 'Who owns the ad accounts?',
          answer:
            'You do, on every platform. We build in your accounts and keep your data yours.',
        },
        {
          question: 'Should I do PPC or SEO?',
          answer:
            'For most local businesses, both — paid for leads now, SEO for lower-cost leads over time. Because Local SEO Wiser runs both, we make sure they reinforce each other instead of overlapping.',
        },
        {
          question: 'Do you guarantee a number of leads?',
          answer:
            'No — and be cautious of anyone who does. Lead volume depends on your offer, budget, and follow-up. We commit to transparent management, real reporting, and steady improvement in cost per lead.',
        },
      ],
    },
    closingCta: {
      title: 'Let\'s put your budget where it actually works',
      paragraphs: [
        'Already running ads across a few platforms and not sure any of them are paying off? Most accounts we audit are spread too thin. We\'ll show you which channels are working, which are wasting money, and where your budget should go — free, no obligation.',
      ],
      pickLabel: 'Get started',
      primaryButton: {
        label: 'Get My Free PPC Audit',
        href: '/contact',
        description: 'No spam. No obligation. Just an honest read on your paid spend.',
      },
      secondaryButton: {
        label: 'Call +1 412 663 7288',
        href: 'tel:+14126637288',
        description: 'Mon–Fri, 9 AM–5 PM',
      },
    },
  },
  {
    slug: 'google-ads',
    variant: 'full',
    category: 'Search Engine Marketing',
    title: 'Google Ads Management in Pittsburgh, PA That Turns Ad Spend Into Leads',
    metaTitle: 'Google Ads Management Pittsburgh | Generate More Leads',
    metaDescription:
      'Professional Google Ads Management in Pittsburgh to increase qualified traffic, improve conversions, and maximize your advertising budget.',
    description:
      'Paid search management for Pittsburgh businesses that need leads now — without wasted ad spend.',
    intro:
      'Paid search management for Pittsburgh businesses that need leads now — without wasted ad spend.',
    icon: 'tabler:speakerphone',
    imageAlt: 'Google Ads Management service',
    heroLayout: 'centered',
    hideStats: true,
    heroParagraphs: [
      'Google Ads management is the process of building, running, and continuously optimizing paid search campaigns — Search, Performance Max, Local, Display, and remarketing — so your business appears at the top of Google the moment someone is ready to buy. It covers keyword research, ad copy, bid strategy, negative keywords, conversion tracking, and landing page alignment: the levers that decide whether your budget produces calls and form fills or quietly burns out on clicks that never convert.',
      'SEO builds visibility that compounds over months. Google Ads buys visibility today. For a Pittsburgh business that needs leads this week — a new location, a slow season, a competitive category where you\'re not ranking organically yet — paid search is the fastest lever you have. But it\'s also the only channel where a poorly built account can lose real money in real time. At Local SEO Wiser, we make sure yours doesn\'t.',
    ],
    heroPrimaryCta: { label: 'Get My Free Google Ads Audit', href: '/contact' },
    heroSecondaryCta: { label: 'Or call us → +1 412 663 7288', href: 'tel:+14126637288' },
    heroTrustItems: [
      { label: 'Pittsburgh-based team', icon: 'tabler:map-pin' },
      { label: 'Flat, transparent fees', icon: 'tabler:receipt' },
      { label: 'You keep your account', icon: 'tabler:user-check' },
      { label: 'Free ad audit', icon: 'tabler:clipboard-check' },
    ],
    challenge: {
      eyebrow: 'The Core Problem',
      title: 'Most Google Ads accounts leak money before they ever make it',
      paragraphs: [
        'Here\'s the uncomfortable truth about paid search: Google is happy to spend your budget whether the campaign is built well or not. The platform doesn\'t refund you for clicks from the wrong city, the wrong intent, or the wrong keyword. It just keeps charging.',
        'We see the same leaks again and again when we audit accounts for Pittsburgh businesses:',
      ],
    },
    idealFit: {
      eyebrow: 'Common Account Leaks',
      title: 'Where wasted spend hides in plain sight',
      items: [
        'Broad match keywords with no negatives — paying for "free," "jobs," "DIY," and "near me" searches from outside the service area.',
        'Conversion tracking that was never set up — the account is running, but nobody actually knows which clicks turned into calls. Optimization is guesswork.',
        'One generic landing page for every ad — sending high-intent clicks to a homepage that asks visitors to figure it out themselves.',
        'Performance Max left on autopilot — Google\'s automation is powerful, but unguided it will happily spend on cheap, low-value placements that look busy and convert nothing.',
        'Bids set once and forgotten — paying premium top-of-page prices at 2 a.m. when nobody\'s calling.',
      ],
    },
    idealFitClosing:
      'None of this shows up as an error. The campaign looks "live." The money still moves. That gap — between running ads and running profitable ads — is the entire job. It\'s what you\'re actually hiring for.',
    splitOutcomes: true,
    outcomes: {
      eyebrow: 'Ads + SEO',
      title: 'The advantage only a local SEO team can give your ad budget',
      intro:
        'One team managing paid and organic search — so your budget works harder and your results compound.',
      layout: 'features',
      items: [],
      cards: [
        {
          title: 'See the Full Search Picture',
          icon: 'tabler:scan-eye',
          paragraphs: [
            'A pure PPC shop only sees the paid side. We look at your whole search presence, including organic rankings and the Map Pack, so every budget decision works together.',
          ],
          takeaway: 'Paid and organic strategy pulling in the same direction.',
        },
        {
          title: 'Spend Where It Actually Wins',
          icon: 'tabler:target-arrow',
          paragraphs: [
            'When we can see that you already rank organically or in the Map Pack for a term, we don\'t waste ad budget bidding against your own free listing. We redirect that spend toward the searches you can\'t win organically yet.',
          ],
          takeaway: 'Smarter budget allocation with less wasted spend.',
        },
        {
          title: 'Ads Data Makes SEO Smarter',
          icon: 'tabler:stack-2',
          paragraphs: [
            'The keyword and conversion data your ads produce is some of the cleanest intent data in marketing. We feed it straight back into your local SEO strategy, so your paid spend improves your organic growth too.',
          ],
          takeaway: 'Leads now, stronger organic growth over time.',
        },
      ],
    },
    deliverables: [],
    deliverablesEyebrow: 'What We Manage',
    deliverablesTitle: 'Every campaign type, built around how Pittsburgh actually searches',
    deliverablesIntro:
      'We don\'t run a single template across every client. At Local SEO Wiser, we choose the campaign mix that fits your goals, your margins, and your market.',
    deliverablesDetailed: [
      {
        title: 'Search Ads',
        description:
          'The core of most local campaigns. We target the high-intent, ready-to-act searches your customers use — by service and by area — and write ad copy that earns the click for the right reason, so you\'re not paying for window-shoppers.',
      },
      {
        title: 'Performance Max',
        description:
          'Google\'s automated, all-network campaign type — powerful, but only when it\'s fed the right signals. We supply the audience inputs, asset groups, and conversion data that keep it pointed at revenue instead of cheap impressions.',
      },
      {
        title: 'Local & Call Ads',
        description:
          'For service businesses where the goal is a phone ringing, not a website visit. We connect campaigns to your Google Business Profile and call tracking so a click becomes a measurable lead.',
      },
      {
        title: 'Display & Remarketing',
        description:
          'Staying in front of people who visited but didn\'t convert — the warmest, cheapest audience you have — without wasting budget on cold, irrelevant placements.',
      },
      {
        title: 'Conversion Tracking & Reporting',
        description:
          'Before a single dollar runs, we make sure GA4 and call tracking are firing correctly. If you can\'t see which keyword produced the lead, you can\'t improve it — so this comes first, not last.',
      },
    ],
    benefits: [],
    process: {
      eyebrow: 'Our Process',
      title: 'How we run your campaigns — step by step',
      align: 'center',
      subtitle:
        'A clear path from audit to launch to profitable scale — so you always know what we are doing and why.',
      steps: [
        {
          step: '01',
          title: 'Audit & Foundation',
          phase: 'Week 1',
          paragraphs: [
            'We audit your existing account or build a clean one from scratch.',
            'We fix conversion tracking, research keywords and negatives, and structure campaigns around your real services and service area.',
          ],
        },
        {
          step: '02',
          title: 'Launch & Learn',
          phase: 'Weeks 2–4',
          paragraphs: [
            'Campaigns go live with tightly written ads and aligned landing page recommendations.',
            'The first few weeks gather the conversion data the account needs to optimize on evidence, not assumptions.',
          ],
        },
        {
          step: '03',
          title: 'Optimize & Scale',
          phase: 'Month 2 onward',
          paragraphs: [
            'We cut wasted spend, lower cost per lead, and refine bids, audiences, and ad copy.',
            'You get clear reporting on calls, form fills, and cost per lead — the numbers that mean revenue, not vanity clicks.',
          ],
        },
      ],
    },
    hideWhyChoose: false,
    whyChooseItems: [
      {
        title: 'You own your account — always',
        icon: 'tabler:user-check',
        description:
          'Most Pittsburgh ad agencies operate the same way. At Local SEO Wiser, we deliberately don\'t. We build campaigns inside your Google Ads account and give ourselves management access. If we ever part ways, the account, the data, and the history stay with you.',
      },
      {
        title: 'Flat, transparent fees',
        icon: 'tabler:receipt',
        description:
          'No percentage games. Many agencies charge 15–20% of your ad spend, which quietly punishes you for growing. We charge a flat management fee tied to the actual work.',
      },
      {
        title: 'No long contracts',
        icon: 'tabler:lock-open',
        description:
          'We work month-to-month. You stay because the leads are coming in — not because a 12-month agreement won\'t let you leave.',
      },
      {
        title: 'Built for local and small business',
        icon: 'tabler:building-store',
        description:
          'We\'re built for Pittsburgh service businesses, practices, and local brands spending sensibly and needing every dollar to work.',
      },
      {
        title: 'Honest about what ads can and can\'t do',
        icon: 'tabler:message-dots',
        description:
          'We won\'t promise a magic ROAS number on a sales call. Paid search performance depends on your offer, your margins, and your follow-up.',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Google Ads Management',
      subtitle:
        'Transparent pricing — separated the way it should be. Your total cost has two parts: ad spend paid directly to Google, and a flat management fee paid to us. For most local Pittsburgh campaigns, sensible starting budgets run from a few hundred to a few thousand dollars a month. Management typically runs roughly $500–$1,500/month depending on complexity. Book a call for an exact quote.',
      items: [
        {
          question: 'How much does Google Ads management cost in Pittsburgh?',
          answer:
            'There are two costs: your ad spend (paid to Google) and our management fee (paid to us). For most local businesses, management runs roughly $500–$1,500/month depending on complexity, with ad spend set to your budget and goals. We always quote them separately — if an agency can\'t give you two clear numbers, that\'s a red flag.',
        },
        {
          question: 'How fast will I see results from Google Ads?',
          answer:
            'Faster than SEO — that\'s the point of paid search. Ads can start driving traffic the day they go live, with the first few weeks spent gathering conversion data so we can optimize toward profitable leads rather than just clicks. Meaningful cost-per-lead improvement usually shows within the first 30–60 days.',
        },
        {
          question: 'Do I have to sign a long contract?',
          answer:
            'No. We work month-to-month. Some Pittsburgh agencies require 6–12 month commitments — we\'d rather earn your business with results each month.',
        },
        {
          question: 'Do you own my Google Ads account, or do I?',
          answer:
            'You do, always. We build in your account and request management access. Your data and history stay yours if we ever stop working together.',
        },
        {
          question: 'Should I run Google Ads or invest in SEO?',
          answer:
            'For most local businesses, the honest answer is both — ads for leads now, SEO for lower-cost leads over time. Because we run both, we make sure they reinforce each other instead of overlapping. A quick call gets you a straight recommendation for your specific situation.',
        },
        {
          question: 'Do you guarantee a certain number of leads or a #1 position?',
          answer:
            'No — and be cautious of anyone who does. Google prohibits ranking guarantees, and lead volume depends on factors beyond the ad account, including your offer and follow-up. We commit to transparent management, real reporting, and steady improvement in cost per lead.',
        },
      ],
    },
    closingCta: {
      title: 'See where your ad budget is actually going',
      paragraphs: [
        'Already running Google Ads? Most accounts we audit have at least one leak quietly draining the budget. We\'ll show you exactly where — free, no obligation.',
        'Not running yet? Local SEO Wiser will show you what a sensible, profitable starting point looks like for your Pittsburgh business.',
      ],
      pickLabel: 'Get started',
      primaryButton: {
        label: 'Get My Free Google Ads Audit',
        href: '/contact',
        description: 'No spam. No obligation. Just an honest read on where your spend stands.',
      },
      secondaryButton: {
        label: 'Call +1 412 663 7288',
        href: 'tel:+14126637288',
        description: 'Mon–Fri, 9 AM–5 PM',
      },
    },
  },
  {
    slug: 'wordpress-development',
    variant: 'full',
    category: 'Web Design & Development',
    title: 'WordPress Development in Pittsburgh, PA — Built to Rank, Not Just to Look Good',
    metaTitle: 'WordPress Development Pittsburgh | SEO-Friendly Websites',
    metaDescription:
      'Custom WordPress development in Pittsburgh with fast, secure, SEO-friendly websites designed to generate more leads and support business growth.',
    description:
      'SEO-first WordPress websites for Pittsburgh businesses — built to rank, convert, and stay easy to manage after launch.',
    intro:
      'SEO-first WordPress websites for Pittsburgh businesses — built to rank, convert, and stay easy to manage after launch.',
    icon: 'tabler:code',
    imageAlt: 'WordPress Development service',
    heroLayout: 'centered',
    hideStats: true,
    heroParagraphs: [
      'WordPress development is the process of designing, building, and optimizing a website on WordPress — the platform that powers over 40% of the web — so it\'s fast, easy to update, and structured to perform in search. It covers custom theme work, plugin selection, responsive design, site speed, and the on-page and technical SEO foundations that decide whether your site quietly sits online or actually brings in calls and customers.',
      'Here\'s where most WordPress projects go wrong: they\'re built by design shops that make the site look great, then hand it over and disappear — leaving the part that actually drives business, getting found on Google, as an afterthought. Local SEO Wiser comes at it from the opposite direction. We\'re a local SEO company that builds websites, so search performance isn\'t bolted on at the end. It\'s the blueprint we build from on day one.',
    ],
    heroPrimaryCta: { label: 'Get My Free Website Review', href: '/contact' },
    heroSecondaryCta: { label: 'Or call us → +1 412 663 7288', href: 'tel:+14126637288' },
    heroTrustItems: [
      { label: 'Pittsburgh-based team', icon: 'tabler:map-pin' },
      { label: 'SEO-first builds', icon: 'tabler:list-search' },
      { label: 'You own your site', icon: 'tabler:user-check' },
      { label: 'Free site review', icon: 'tabler:clipboard-check' },
    ],
    challenge: {
      eyebrow: 'The Core Angle',
      title: 'A beautiful website that nobody finds is just an expensive brochure',
      paragraphs: [
        'There\'s a quiet problem with most small business websites: they were built to impress, not to be found. A design-first builder gives you a site that looks polished — and ranks nowhere, because no one structured it around what your customers actually search for. You end up paying for a digital business card that sits at the bottom of page three.',
        'The reverse happens too. A developer-first build works perfectly under the hood but converts almost nobody, because no one wrote it for the buyer or built it to be found.',
        'A website only earns its cost when three things are true at once: it loads fast, it\'s structured to rank, and it turns visitors into leads. Getting all three in one build is exactly the gap Local SEO Wiser exists to close. Because we live in local search every day, we know what Google rewards — and we build that into the site instead of trying to retrofit it after launch, which is slower, costlier, and never works as well.',
      ],
    },
    idealFit: {
      eyebrow: 'Project Types',
      title: 'Whatever stage you\'re at, Local SEO Wiser can take it from here',
      items: [
        'New websites — A complete build from a blank slate: strategy, design, development, content structure, and SEO foundation, launched and ready to rank.',
        'Redesigns & migrations — Moving off an outdated, slow, or DIY site? We rebuild it properly and preserve your existing rankings with careful redirect and SEO-migration planning.',
        'WooCommerce stores — Selling online? We build WooCommerce stores with clean product structure, fast checkout, and SEO-ready product and category pages.',
        'Fixes & performance work — Site already built but slow, broken, or invisible in search? We audit it and fix what\'s holding it back — no full rebuild required.',
      ],
    },
    splitOutcomes: true,
    outcomes: {
      eyebrow: 'Built to Perform',
      title: 'Three things every business website needs to earn its cost',
      intro: 'Fast load times, search-ready structure, and layouts that convert — engineered together from day one.',
      layout: 'features',
      items: [],
      cards: [
        {
          title: 'Loads Fast',
          icon: 'tabler:gauge',
          paragraphs: [
            'A site that takes more than three seconds on mobile loses visitors before they read a word — and Google notices.',
          ],
          takeaway: 'Core Web Vitals and speed built in from launch.',
        },
        {
          title: 'Built to Rank',
          icon: 'tabler:search',
          paragraphs: [
            'Clean architecture, proper headings, schema-ready markup, and local SEO structure — not an afterthought added six months later.',
          ],
          takeaway: 'Search performance is the blueprint, not a retrofit.',
        },
        {
          title: 'Converts Visitors',
          icon: 'tabler:click',
          paragraphs: [
            'Clear calls to action, fast contact paths, and pages written for buyers — not just for designers.',
          ],
          takeaway: 'More calls and form fills from the traffic you earn.',
        },
      ],
    },
    deliverables: [],
    deliverablesEyebrow: 'What\'s Built In',
    deliverablesTitle: 'What we engineer into every WordPress build',
    deliverablesIntro:
      'These aren\'t add-ons or upsells. For a Pittsburgh business, they\'re the difference between a site that performs and one that just exists.',
    deliverablesDetailed: [
      {
        title: 'Search-mapped page structure',
        description:
          'Before we design anything, we map the keywords and the service and neighborhood pages your customers actually search for — so the site\'s architecture matches real demand, not guesswork.',
        icon: 'tabler:map-search',
      },
      {
        title: 'Technical SEO foundation',
        description:
          'Clean code, proper heading structure, crawlable architecture, schema-ready markup, canonical tags, and an XML sitemap — built in from the start so Google can find, understand, and trust your pages.',
        icon: 'tabler:code',
      },
      {
        title: 'Speed & Core Web Vitals',
        description:
          'Optimized images, lean plugin choices, and caching configured properly. A site that takes more than three seconds to load on mobile loses visitors before they read a word — and Google notices.',
        icon: 'tabler:gauge',
      },
      {
        title: 'Local SEO architecture',
        description:
          'Consistent NAP details, location and service page structure, and Google Business Profile alignment — so the site reinforces your Map Pack visibility instead of working against it.',
        icon: 'tabler:map-pin',
      },
      {
        title: 'Conversion-focused layout',
        description:
          'Clear calls to action, fast contact paths, and pages designed to turn a visitor into a phone call or form fill — not just a bounce.',
        icon: 'tabler:target-arrow',
      },
      {
        title: 'Easy to manage after launch',
        description:
          'Built on WordPress (with Elementor or a clean custom theme where it fits) so your team can make everyday edits without calling a developer for every word change.',
        icon: 'tabler:edit',
      },
    ],
    benefits: [],
    process: {
      eyebrow: 'Our Process',
      title: 'How we build — step by step',
      align: 'center',
      subtitle:
        'From keyword mapping through launch and support — with SEO baked in at every stage, not bolted on at the end.',
      steps: [
        {
          step: '01',
          title: 'Discovery & Keyword Mapping',
          phase: 'Step 1',
          paragraphs: [
            'We learn your business and goals, then map the searches and pages your site needs to win.',
            'The SEO strategy is set before design begins.',
          ],
        },
        {
          step: '02',
          title: 'Design',
          phase: 'Step 2',
          paragraphs: [
            'We design pages around that structure — on-brand, conversion-focused, and built for the way people actually scan and click.',
          ],
        },
        {
          step: '03',
          title: 'Development',
          phase: 'Step 3',
          paragraphs: [
            'We build clean, fast, mobile-first pages on WordPress with the technical SEO foundation baked in.',
          ],
        },
        {
          step: '04',
          title: 'SEO & QA',
          phase: 'Step 4',
          paragraphs: [
            'Before launch: speed testing, mobile checks, schema, redirects (for redesigns), and a full search-readiness review.',
          ],
        },
        {
          step: '05',
          title: 'Launch & Support',
          phase: 'Step 5',
          paragraphs: [
            'We go live, monitor closely, and stay on for maintenance and ongoing optimization.',
          ],
        },
      ],
    },
    hideWhyChoose: false,
    whyChooseItems: [
      {
        title: 'Built to be found — by design',
        icon: 'tabler:list-search',
        description:
          'Local SEO Wiser builds your site around how Pittsburgh actually searches, so it\'s engineered to rank from launch instead of needing an expensive SEO rescue six months later.',
      },
      {
        title: 'You own everything',
        icon: 'tabler:key',
        description:
          'Site, hosting access, and content — no vendor lock-in, no holding your site hostage. It\'s yours, with full access, always.',
      },
      {
        title: 'One team for site and rankings',
        icon: 'tabler:users',
        description:
          'Most businesses pay a web agency to build the site, then a separate SEO agency to fix it. We do both — so nothing falls through the cracks between vendors.',
      },
      {
        title: 'Built for local and small business',
        icon: 'tabler:building-store',
        description:
          'We\'re not an enterprise shop with enterprise timelines and price tags. We build practical, high-performing sites for Pittsburgh service businesses, practices, and local brands.',
      },
      {
        title: 'We stick around',
        icon: 'tabler:heart-handshake',
        description:
          'Launch isn\'t the finish line. We\'re here for maintenance, updates, and the ongoing SEO work that turns a website into a growing asset.',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About WordPress Development',
      subtitle:
        'Transparent pricing — matched to the job your site does. WordPress itself is free; what you\'re paying for is the design, development, content, and SEO that make it work. Starter sites run a few hundred to a couple thousand dollars; business websites typically $3,000–$8,000+; WooCommerce stores from $2,000–$5,000. We quote build and ongoing care separately. Book a call for an exact quote.',
      items: [
        {
          question: 'How much does a WordPress website cost in Pittsburgh?',
          answer:
            'It depends on scope. A simple brochure site runs from a few hundred to a couple thousand dollars; a full business website with service and location pages and an SEO foundation typically runs $3,000–$8,000+; WooCommerce stores start around $2,000–$5,000. We quote the build and ongoing care separately so there are no surprises.',
        },
        {
          question: 'How long does a WordPress build take?',
          answer:
            'Most small business sites take a few weeks from discovery to launch, depending on page count, content readiness, and revisions. Larger or e-commerce builds take longer. We\'ll give you a realistic timeline up front.',
        },
        {
          question: 'Will my new site actually rank on Google?',
          answer:
            'That\'s the whole reason to build with an SEO team. We engineer ranking factors — structure, speed, schema, and local SEO — into the build from day one. Rankings still take time and depend on competition, but you\'ll launch with a far stronger foundation than a design-only site gives you.',
        },
        {
          question: 'I have an old website. Can you redesign it without losing my rankings?',
          answer:
            'Yes — and this is critical. Many rebuilds tank a site\'s traffic because nobody planned the SEO migration. Local SEO Wiser handles redirects and migration carefully so your existing rankings carry over to the new site.',
        },
        {
          question: 'Do I own the website and hosting?',
          answer:
            'Yes, always. The site, content, and access are yours. No lock-in.',
        },
        {
          question: 'Do you maintain the site after launch?',
          answer:
            'Yes. We offer ongoing care — updates, backups, security, and small fixes — plus the local SEO work that keeps the site growing as an asset, not just sitting there.',
        },
      ],
    },
    closingCta: {
      title: 'Let\'s build a site that actually works for your business',
      paragraphs: [
        'Whether you\'re starting fresh, escaping a slow or outdated site, or wondering why your current one brings in nothing — Local SEO Wiser will give you a straight assessment of where it stands and what it\'ll take to fix.',
        'See a real example of our WordPress rebuild and local SEO work in the portfolio case studies.',
      ],
      pickLabel: 'Get started',
      primaryButton: {
        label: 'Get My Free Website Review',
        href: '/contact',
        description: 'No spam. No obligation. Just an honest look at your site\'s performance.',
      },
      secondaryButton: {
        label: 'View Portfolio Case Studies',
        href: '/portfolio',
        description: 'Verified website rebuild and local SEO projects',
      },
    },
  },
  {
    slug: 'shopify-development',
    variant: 'full',
    category: 'Web Design & Development',
    title: 'Shopify Development in Pittsburgh, PA — Stores Built to Sell and Be Found',
    metaTitle: 'Shopify Development Pittsburgh | High-Converting Online Stores',
    metaDescription:
      'Professional Shopify development in Pittsburgh with fast, conversion-focused online stores built for better user experience and long-term growth.',
    description:
      'SEO-first Shopify stores for Pittsburgh businesses — built to rank, convert, and stay easy to manage after launch.',
    intro:
      'SEO-first Shopify stores for Pittsburgh businesses — built to rank, convert, and stay easy to manage after launch.',
    icon: 'tabler:shopping-bag',
    imageAlt: 'Shopify Development service',
    heroLayout: 'centered',
    hideStats: true,
    heroParagraphs: [
      'Shopify development is the process of designing, building, and optimizing an online store on Shopify — the platform powering millions of e-commerce businesses worldwide — so it loads fast, converts visitors into buyers, and ranks in search. It covers custom theme work, product and collection page structure, checkout optimization, app integrations, and the technical and on-page SEO that decides whether shoppers ever find your store in the first place.',
      'Shopify makes one part genuinely easy: getting a store online. What it doesn\'t do automatically is get you found. Out of the box, Shopify has real SEO limitations — rigid URLs, duplicate content from product variants, and app bloat that quietly slows your store down. Local SEO Wiser builds your store knowing exactly where those traps are and how to work around them, because we\'re a local SEO company that builds e-commerce sites — not a design shop that treats search as someone else\'s problem.',
    ],
    heroPrimaryCta: { label: 'Get My Free Store Review', href: '/contact' },
    heroSecondaryCta: { label: 'Or call us → +1 412 663 7288', href: 'tel:+14126637288' },
    heroTrustItems: [
      { label: 'Pittsburgh-based team', icon: 'tabler:map-pin' },
      { label: 'Built to rank & convert', icon: 'tabler:shopping-cart' },
      { label: 'You own your store', icon: 'tabler:user-check' },
      { label: 'Free store review', icon: 'tabler:clipboard-check' },
    ],
    challenge: {
      eyebrow: 'The Core Angle',
      title: 'A great-looking Shopify store still loses if shoppers can\'t find it',
      paragraphs: [
        'Most Shopify stores aren\'t held back by their design. They\'re held back by problems no one warned the owner about — the ones that live under the surface and quietly cap how much the store can sell.',
        'Rigid URL structure. Shopify forces every product into /products/ and every category into /collections/, with little control over the structure. Left unmanaged, this creates messy, competing URLs that confuse Google about which page should rank.',
        'Duplicate content from variants. Every size, color, and option can spin up near-identical pages. Without proper canonical handling, Google splits your ranking signals across duplicates instead of concentrating them on one strong page.',
        'App bloat and slow speed. It\'s easy to install a dozen apps to add features — and every one adds code that slows the store down. A store that\'s slow on mobile loses shoppers before checkout and gets penalized by Google.',
        'Thin collection pages. Collection pages are some of the highest-value SEO real estate on a store, yet most are left as bare product grids with no content to actually rank for the searches buyers use.',
        'None of this shows up when you admire the homepage. But all of it shows up on every Google crawl — and in your sales. Fixing it is exactly the kind of work a store built by an SEO team gets right from the start.',
      ],
    },
    idealFit: {
      eyebrow: 'Project Types',
      title: 'Wherever you\'re starting from',
      items: [
        'New Shopify stores — A complete build: strategy, design, store structure, and SEO foundation — launched and ready to sell and rank.',
        'Migrations to Shopify — Moving from WooCommerce, another platform, or an outdated store? We migrate your products and preserve your rankings with careful redirect and SEO-migration planning.',
        'Store redesigns — Already on Shopify but converting poorly or invisible in search? We rebuild around conversion and search performance without starting your business from zero.',
        'SEO & speed fixes — Store built but slow, bloated with apps, or buried in Google? We audit it and fix what\'s holding back sales — no full rebuild required.',
      ],
    },
    splitOutcomes: true,
    outcomes: {
      eyebrow: 'Built to Sell',
      title: 'Three things every Shopify store needs to earn its cost',
      intro: 'Search-ready structure, fast mobile performance, and a checkout path that converts — engineered together from day one.',
      layout: 'features',
      items: [],
      cards: [
        {
          title: 'Found in Search',
          icon: 'tabler:search',
          paragraphs: [
            'Content-rich collection pages, clean URL structure, and canonical handling for variants — so Google knows which pages to rank.',
          ],
          takeaway: 'Shopify SEO traps handled from launch, not after traffic stalls.',
        },
        {
          title: 'Converts at Checkout',
          icon: 'tabler:shopping-cart',
          paragraphs: [
            'Conversion-focused design built around the path to purchase — fast product discovery, clear calls to action, and a checkout flow that doesn\'t lose buyers at the last step.',
          ],
          takeaway: 'More sales from the traffic you earn.',
        },
        {
          title: 'Fast on Mobile',
          icon: 'tabler:gauge',
          paragraphs: [
            'Lean app choices, optimized images, and a fast theme — because on mobile, every extra second of load time costs you sales.',
          ],
          takeaway: 'Speed and Core Web Vitals without the app bloat.',
        },
      ],
    },
    deliverables: [],
    deliverablesEyebrow: 'What We Build',
    deliverablesTitle: 'What Local SEO Wiser builds into every Shopify store',
    deliverablesIntro:
      'These aren\'t add-ons or upsells. For a Pittsburgh store, they\'re the difference between a storefront that sells and one that just sits online.',
    deliverablesDetailed: [
      {
        title: 'Conversion-focused store design',
        description:
          'Clean, on-brand design built around the path to purchase — fast product discovery, clear calls to action, and a checkout flow that doesn\'t lose buyers at the last step.',
        icon: 'tabler:target-arrow',
      },
      {
        title: 'Product & collection page structure',
        description:
          'Properly structured product pages and content-rich collection pages built to rank for what shoppers actually search — not bare grids that Google ignores.',
        icon: 'tabler:layout-grid',
      },
      {
        title: 'Shopify SEO done right',
        description:
          'Canonical handling for variants, clean URL and internal-link structure, optimized titles and meta, image alt text, and product schema — the technical groundwork Shopify won\'t do for you.',
        icon: 'tabler:list-search',
      },
      {
        title: 'Speed & performance',
        description:
          'Lean app choices, optimized images, and a fast theme, because on mobile, every extra second of load time costs you sales.',
        icon: 'tabler:gauge',
      },
      {
        title: 'The integrations you actually need',
        description:
          'Payments (Stripe, PayPal, Shopify Payments), email and marketing tools like Klaviyo, shipping, and POS — connected cleanly, without piling on apps that slow the store.',
        icon: 'tabler:plug-connected',
      },
      {
        title: 'Built to manage yourself',
        description:
          'A store your team can run day to day — adding products, running promotions, updating content — without calling a developer for every change.',
        icon: 'tabler:edit',
      },
    ],
    benefits: [],
    process: {
      eyebrow: 'Our Process',
      title: 'How we build your store — step by step',
      align: 'center',
      subtitle:
        'From discovery and strategy through launch and growth — with Shopify SEO and conversion baked in at every stage.',
      steps: [
        {
          step: '01',
          title: 'Discovery & Strategy',
          phase: 'Step 1',
          paragraphs: [
            'We learn your products, customers, and goals, then map the searches and store structure you need to win before any design begins.',
          ],
        },
        {
          step: '02',
          title: 'Design',
          phase: 'Step 2',
          paragraphs: [
            'Conversion-focused store and page design, on-brand and built around how people actually shop.',
          ],
        },
        {
          step: '03',
          title: 'Development',
          phase: 'Step 3',
          paragraphs: [
            'A fast, clean Shopify build with product/collection structure, integrations, and the technical SEO groundwork baked in.',
          ],
        },
        {
          step: '04',
          title: 'SEO & QA',
          phase: 'Step 4',
          paragraphs: [
            'Speed testing, mobile checks, canonical and schema setup, redirects for migrations, and a full search-and-checkout readiness review.',
          ],
        },
        {
          step: '05',
          title: 'Launch & Growth',
          phase: 'Step 5',
          paragraphs: [
            'We go live, monitor closely, and stay on for optimization, CRO, and ongoing SEO.',
          ],
        },
      ],
    },
    hideWhyChoose: false,
    whyChooseItems: [
      {
        title: 'Built to be found — not just to look good',
        icon: 'tabler:list-search',
        description:
          'Plenty of agencies build attractive Shopify stores. Local SEO Wiser builds stores engineered to rank, so you\'re not paying for a beautiful storefront that no one ever visits.',
      },
      {
        title: 'Built for local and small business',
        icon: 'tabler:building-store',
        description:
          'Many Pittsburgh Shopify agencies chase large brands with $15,000–$50,000 budgets. We build practical, high-performing stores for local merchants, startups, and growing brands that need every dollar to work.',
      },
      {
        title: 'One team for store and rankings',
        icon: 'tabler:users',
        description:
          'Most businesses pay one agency to build the store and a separate SEO agency to make it rank. We do both — so your store and your search strategy are built around each other from day one.',
      },
      {
        title: 'You own everything',
        icon: 'tabler:key',
        description:
          'Your store, your Shopify account, your content, your data. Full access, no lock-in, always.',
      },
      {
        title: 'We stay after launch',
        icon: 'tabler:heart-handshake',
        description:
          'Launch is the start. We\'re here for ongoing optimization, conversion improvements, and the SEO work that grows the store into a real sales channel.',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Shopify Development',
      subtitle:
        'Transparent pricing — sized to your store, not inflated. Large agencies often start at $15,000+ because they target enterprise brands; we scope to what local and small businesses actually need — starter stores, full builds, migrations, and ongoing care quoted separately. Book a call for an exact quote.',
      items: [
        {
          question: 'How much does Shopify development cost in Pittsburgh?',
          answer:
            'It depends on your catalog and features. Large agencies often start at $15,000+ because they target enterprise brands; we scope to what local and small businesses actually need, and quote a fixed number once we see your store\'s requirements. We separate the build cost from ongoing work so there are no surprises.',
        },
        {
          question: 'Isn\'t Shopify already good for SEO?',
          answer:
            'Shopify gives you a decent starting point, but it has real limits — rigid URLs, duplicate content from product variants, and easy speed problems from app bloat. A store built by an SEO team handles these from the start instead of leaving them to quietly cap your traffic.',
        },
        {
          question: 'Can you move my store to Shopify without losing my Google rankings?',
          answer:
            'Yes — and this is critical. Migrations sink a lot of stores\' traffic because nobody planned the SEO side. Local SEO Wiser handles redirects and migration carefully so your existing rankings carry across to the new store.',
        },
        {
          question: 'How long does a Shopify build take?',
          answer:
            'Most small to mid-size stores take a few weeks from discovery to launch, depending on catalog size, content readiness, and integrations. We give you a realistic timeline up front.',
        },
        {
          question: 'Will my store actually rank and get sales?',
          answer:
            'We engineer the ranking and conversion factors in from day one — structure, speed, Shopify SEO, and a buyer-focused layout. Rankings and sales still take time and depend on your products and competition, but you\'ll launch with a far stronger foundation than a design-only store.',
        },
        {
          question: 'Do I own my Shopify store and account?',
          answer:
            'Yes, always. The store, account, content, and data are yours, with full access. No lock-in.',
        },
      ],
    },
    closingCta: {
      title: 'Let\'s build a store that sells — and gets found',
      paragraphs: [
        'Whether you\'re launching your first store, escaping a slow or bloated one, or wondering why a good-looking store isn\'t bringing in sales — Local SEO Wiser will give you a straight read on where it stands and what it\'ll take to fix.',
      ],
      pickLabel: 'Get started',
      primaryButton: {
        label: 'Get My Free Store Review',
        href: '/contact',
        description: 'No spam. No obligation. Just an honest look at your store\'s performance.',
      },
      secondaryButton: {
        label: 'Call +1 412 663 7288',
        href: 'tel:+14126637288',
        description: 'Mon–Fri, 9 AM–5 PM',
      },
    },
  },
  {
    slug: 'social-media-management',
    variant: 'full',
    category: 'Social Media',
    title: 'Show Up Consistently. Build Trust That Turns Into Business.',
    metaTitle: 'Social Media Management Pittsburgh | Grow Your Local Brand',
    metaDescription:
      'Build a stronger online presence with Social Media Management in Pittsburgh. Engage your audience, increase brand awareness, and support business growth.',
    description:
      'Social media management for Pittsburgh businesses — consistent content, community engagement, and local targeting that builds trust and drives customers.',
    intro:
      'Social media management for Pittsburgh businesses — consistent content, community engagement, and local targeting that builds trust and drives customers.',
    icon: 'tabler:share',
    imageAlt: 'Social Media Management service',
    heroLayout: 'centered',
    hideStats: true,
    heroParagraphs: [
      'Your customers are checking your social profiles before they call — right alongside your Google reviews and your website. A dead Instagram or a Facebook page with no activity in months quietly tells them you\'re not that active, even if you are.',
      'We manage your social presence so it looks like what it actually is: a real, active Pittsburgh business people can trust.',
    ],
    heroPrimaryCta: { label: 'Get My Free Social Media Snapshot', href: '/contact' },
    heroSecondaryCta: { label: 'Or call us → +1 412 663 7288', href: 'tel:+14126637288' },
    heroTrustItems: [
      { label: 'No long contracts', icon: 'tabler:lock-open' },
      { label: 'Real Pittsburgh team', icon: 'tabler:map-pin' },
      { label: 'Free snapshot, no obligation', icon: 'tabler:clipboard-check' },
    ],
    challenge: {
      eyebrow: 'The Problem',
      title: 'The problem most Pittsburgh businesses face',
      paragraphs: [
        'You\'re busy running the business. Social media ends up being whatever gets posted when someone remembers to — which means weeks of silence, inconsistent branding, and zero strategy behind any of it.',
      ],
    },
    idealFit: {
      eyebrow: 'Common Signs',
      title: 'It\'s costing you customers if...',
      items: [
        'Your last post was months ago, and people notice',
        'Every post looks different — no consistent branding, tone, or quality',
        'You\'re not tagging your location or neighborhood, so local customers never find you organically',
        'Comments and messages sit unanswered for days',
        'You have no idea whether any of it is actually bringing in business',
      ],
    },
    idealFitClosing:
      'None of this is permanent. With a real system behind it, social media becomes another channel that consistently brings customers in — not a chore that gets ignored.',
    splitOutcomes: true,
    outcomes: {
      eyebrow: 'What You Gain',
      title: 'Social media that looks active — and works like a growth channel',
      intro:
        'Consistent presence, local discovery, and reporting tied to what actually matters for your business.',
      layout: 'features',
      items: [],
      cards: [
        {
          title: 'Consistent Presence',
          icon: 'tabler:calendar',
          paragraphs: [
            '3–5 posts per week on the platforms that matter for your business — so your profiles never go quiet again and customers see an active, trustworthy brand.',
          ],
          takeaway: 'No more months of silence.',
        },
        {
          title: 'Local Discovery',
          icon: 'tabler:map-pin',
          paragraphs: [
            'Posts tagged and optimized for Pittsburgh and your service neighborhoods — Shadyside, Lawrenceville, Cranberry, Mt. Lebanon, and beyond — so local customers find you through social, not just Google.',
          ],
          takeaway: 'Reach customers in your actual market.',
        },
        {
          title: 'Trust That Converts',
          icon: 'tabler:heart-handshake',
          paragraphs: [
            'Branded content, prompt community management, and a cohesive look and tone — so your social profiles reinforce the same trust your reviews and website build.',
          ],
          takeaway: 'Profiles that earn the call.',
        },
      ],
    },
    deliverables: [],
    deliverablesEyebrow: 'What\'s Included',
    deliverablesTitle: 'What\'s included in our social media management service',
    deliverablesIntro:
      'From strategy and content creation through posting, community management, and reporting — a complete system behind your social presence.',
    deliverablesDetailed: [
      {
        title: 'Content Strategy & Planning',
        description:
          'A content calendar built around your business, your services, and what actually resonates with a Pittsburgh audience — not generic templates recycled across every client.',
        icon: 'tabler:calendar-event',
      },
      {
        title: 'Content Creation & Design',
        description:
          'Branded graphics, short-form video, and captions that sound like your business, not a stock template. Every post reinforces the same look, tone, and message.',
        icon: 'tabler:palette',
      },
      {
        title: 'Consistent Posting & Scheduling',
        description:
          '3–5 posts per week across the platforms that matter for your business — Facebook, Instagram, LinkedIn, or others — so your profiles never go quiet again.',
        icon: 'tabler:clock',
      },
      {
        title: 'Community Management',
        description:
          'We monitor and respond to comments, messages, and mentions promptly and professionally, so no customer question or compliment goes ignored.',
        icon: 'tabler:messages',
      },
      {
        title: 'Local & Location-Based Targeting',
        description:
          'Posts tagged and optimized for Pittsburgh and your specific service neighborhoods — Shadyside, Lawrenceville, Oakland, Strip District, Mt. Lebanon, Cranberry, Monroeville — so local customers discover you through social search.',
        icon: 'tabler:map-pin',
      },
      {
        title: 'Paid Social Campaigns (Optional Add-On)',
        description:
          'Targeted Facebook and Instagram ads built to drive calls, form fills, and foot traffic — with budgets and targeting tuned specifically to your service area.',
        icon: 'tabler:speakerphone',
      },
      {
        title: 'Reporting You Can Actually Read',
        description:
          'Monthly reports on reach, engagement, follower growth, and — most importantly — what it\'s actually translating into for your business.',
        icon: 'tabler:report-analytics',
      },
    ],
    benefits: [],
    process: {
      eyebrow: 'How We Work',
      title: 'How we build your social media system',
      align: 'center',
      subtitle:
        'From audit and strategy through launch, optimization, and compounding growth — with consistency at every stage.',
      steps: [
        {
          step: '01',
          title: 'Audit & Strategy',
          phase: 'Week 1',
          paragraphs: [
            'Full audit of your current profiles, competitor benchmarking, and a content strategy built around your goals, your industry, and your Pittsburgh audience.',
          ],
        },
        {
          step: '02',
          title: 'Launch & Build Momentum',
          phase: 'Weeks 2–4',
          paragraphs: [
            'Branded content goes live on a consistent schedule, community management activates, and we start tracking what resonates with your specific audience.',
          ],
        },
        {
          step: '03',
          title: 'Optimize & Scale',
          phase: 'Ongoing',
          paragraphs: [
            'We double down on what\'s working, test new formats and platforms, and layer in paid campaigns if you want to accelerate growth. Consistency compounds — the longer it runs, the stronger your presence gets.',
          ],
        },
      ],
    },
    hideWhyChoose: false,
    whyChooseItems: [
      {
        title: 'No long contracts',
        icon: 'tabler:lock-open',
        description:
          'Month-to-month engagement. You stay because your profiles are working — not because an agreement traps you.',
      },
      {
        title: 'Built for Pittsburgh businesses',
        icon: 'tabler:map-pin',
        description:
          'Content and local targeting built for how Pittsburgh customers actually discover and evaluate businesses — not generic national templates.',
      },
      {
        title: 'Right platforms, not every platform',
        icon: 'tabler:filter',
        description:
          'We recommend the 1–3 platforms where your actual customers spend time, instead of spreading you thin across all of them.',
      },
      {
        title: 'We create the content',
        icon: 'tabler:palette',
        description:
          'Graphics, captions, and video handled by our team using your branding — you review and approve before anything goes live.',
      },
      {
        title: 'Works with your local SEO',
        icon: 'tabler:stack-2',
        description:
          'Social media and local SEO reinforce each other. Ask us about bundling social management with local SEO for a combined strategy.',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Social Media Management',
      subtitle:
        'Transparent pricing — no surprises. Foundational plans for consistent posting on 1–2 platforms start at $300–$500/mo; Growth plans with content and community management run $700–$1,500/mo; Full-Service multi-platform management with paid ads runs $1,500–$3,500/mo. Book a free call for an exact quote.',
      items: [
        {
          question: 'How often will you post?',
          answer:
            'Typically 3–5 posts per week per platform, depending on your plan. We\'ll recommend a frequency based on your industry and goals, not a one-size-fits-all number.',
        },
        {
          question: 'Do you create the content or do I need to provide it?',
          answer:
            'We handle content creation — graphics, captions, and video — using your branding and any photos or footage you provide. You review and approve before anything goes live.',
        },
        {
          question: 'Can you manage my Google Business Profile too?',
          answer:
            'Yes — social media and local SEO work best together. Ask us about bundling social media management with our local SEO service for a combined strategy.',
        },
        {
          question: 'How long until I see results?',
          answer:
            'Engagement and follower growth typically become noticeable within 60–90 days of consistent posting. If you add paid ads, leads and traffic can start almost immediately.',
        },
        {
          question: 'Do I need to be on every platform?',
          answer:
            'No. We\'ll recommend the 1–3 platforms where your actual customers spend time, instead of spreading you thin across all of them.',
        },
      ],
    },
    closingCta: {
      title: 'Ready for social media that actually works for your business?',
      paragraphs: [
        'Get a free snapshot of where your profiles stand today — and what it would take to turn them into a real growth channel.',
      ],
      pickLabel: 'Get started',
      primaryButton: {
        label: 'Get My Free Social Media Snapshot',
        href: '/contact',
        description: 'No spam. No obligation. Just an honest read on your social presence.',
      },
      secondaryButton: {
        label: 'Call +1 412 663 7288',
        href: 'tel:+14126637288',
        description: 'Mon–Fri, 9 AM–5 PM',
      },
    },
  },
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
        title: 'Local Business Citation',
        description: 'NAP consistency & trusted directory listings',
        href: '/local-business-citation',
      },
      {
        id: 'landing-page-optimization',
        number: '05',
        title: 'Landing Page Optimization',
        description: 'Conversion-focused local landing pages',
        href: '/landing-page-optimization',
      },
      { id: 'technical-seo', number: '06', title: 'Technical SEO', description: 'Crawl, speed, schema & site health fixes', href: '/technical-seo' },
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
      { id: 'wordpress-development', number: '01', title: 'WordPress Development', description: 'SEO-ready WordPress websites', href: '/wordpress-development' },
      { id: 'shopify-development', number: '02', title: 'Shopify Development', description: 'Shopify stores built for local sales', href: '/shopify-development' },
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media',
    subtitle: 'Consistent social content and engagement that supports brand trust and local discovery.',
    services: [
      {
        id: 'social-media-management',
        number: '01',
        title: 'Social Media Management',
        description: 'Content, engagement & brand visibility',
        href: '/social-media-management',
      },
    ],
  },
]

/** @deprecated Import from `@/data/packages` instead. */
export { packageComparison, packages } from './packages'

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
  location: '307 Freeland St, Pittsburgh, PA 15210, United States',
  locationUk: 'Office 1267 85 Dunstall Hill, Wolverhampton, United Kingdom, WV6 0SR',
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
  { icon: 'tabler:brand-whatsapp', href: socialLinks.whatsapp, label: 'WhatsApp' },
  { icon: 'tabler:brand-linkedin', href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: 'tabler:brand-x', href: socialLinks.x, label: 'X' },
  { icon: 'tabler:brand-instagram', href: socialLinks.instagram, label: 'Instagram' },
  { icon: 'tabler:brand-facebook', href: socialLinks.facebook, label: 'Facebook' },
  { icon: 'tabler:brand-tiktok', href: socialLinks.tiktok, label: 'TikTok' },
  { icon: 'tabler:brand-pinterest', href: socialLinks.pinterest, label: 'Pinterest' },
]

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

export const contactPageOffice = 'Pittsburgh, Pennsylvania, USA'

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
    address: 'Pittsburgh, Pennsylvania, USA',
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
