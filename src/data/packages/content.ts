/**
 * Packages page content — custom quotes only, no fake prices.
 */

export const packagesPageMeta = {
  title: 'Local SEO Packages | Local SEO Wiser',
  description:
    'Explore custom Local SEO packages tailored to your business goals. We build strategies based on your market, competition, and growth stage.',
}

export const packagesPageHero = {
  eyebrow: 'Local SEO Packages',
  title: 'Custom Local SEO Packages Built Around Your Business',
  description:
    'Every business has different goals, competition, and priorities. Instead of fixed SEO plans, we recommend strategies shaped around your location and where you are today.',
  trustPoints: [
    { icon: 'tabler:ban', label: 'No fixed-rate packages' },
    { icon: 'tabler:eye', label: 'Transparent strategy' },
    { icon: 'tabler:headset', label: 'Ongoing support' },
  ],
}

export type PackagePlan = {
  id: string
  name: string
  description: string
  bestFor: string
  features: string[]
  popular?: boolean
}

export const packages: PackagePlan[] = [
  {
    id: 'starter',
    name: 'Starter Local SEO',
    description: 'A focused foundation for single-location businesses ready to show up consistently in local search.',
    bestFor: 'Best for new or single-location businesses building a clear local presence.',
    features: [
      'Google Business Profile setup and optimization',
      'Core citation cleanup and consistency checks',
      'On-page local SEO for key service pages',
      'Monthly local ranking tracking',
      'Review response guidance',
      'Simple monthly progress update',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Local SEO',
    description: 'A broader engagement for businesses ready to expand map exposure and strengthen lead quality.',
    bestFor: 'Best for established local businesses ready to compete more actively in their area.',
    popular: true,
    features: [
      'Everything in Starter',
      'Expanded citation coverage',
      'Location page improvements and internal linking',
      'Review generation workflows',
      'Competitor gap analysis',
      'Monthly strategy refinements',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced Local SEO',
    description: 'A deeper program for multi-location brands or highly competitive service categories.',
    bestFor: 'Best for multi-location operators or competitive industries that need closer guidance.',
    features: [
      'Everything in Growth',
      'Multi-location architecture support',
      'Advanced geo-grid map tracking',
      'Custom reporting dashboards',
      'Quarterly roadmap planning',
      'Strategic consulting with implementation support',
    ],
  },
]

export const packageComparison = {
  headers: ['Feature', 'Starter', 'Growth', 'Advanced'],
  rows: [
    ['Google Business Profile Optimization', '✓', '✓', '✓'],
    ['Core Citation Management', '✓', '✓', '✓'],
    ['Geo-grid Tracking', '✗', '✓', '✓'],
    ['Location Page SEO', '✗', '✓', '✓'],
    ['Multi-location Framework', '✗', '✗', '✓'],
    ['Custom Dashboard Reporting', '✗', '✗', '✓'],
    [
      'Recommended For',
      'Single-location businesses',
      'Growing local brands',
      'Multi-location or competitive markets',
    ],
  ],
}

export const packagesPageValue = {
  eyebrow: 'Why Choose Us',
  title: 'Why Businesses Choose Our Packages',
  items: [
    {
      icon: 'tabler:map-search',
      title: 'Tailored Strategy',
      description: 'Every campaign is built around your market, goals, and competition.',
    },
    {
      icon: 'tabler:file-invoice',
      title: 'Transparent Process',
      description: 'No hidden fees. No long-term contracts.',
    },
    {
      icon: 'tabler:chart-arrows-vertical',
      title: 'Focused on Results',
      description: 'Everything we do is designed to improve visibility, calls, and qualified leads.',
    },
    {
      icon: 'tabler:heart-handshake',
      title: 'Long-Term Partnership',
      description: 'We keep refining your campaign instead of delivering a one-time setup.',
    },
  ],
}

export const packagesPageCta = {
  title: 'Not Sure Which Package Fits?',
  description:
    'We’ll review your business, competition, and goals before recommending the right Local SEO strategy.',
  primary: { label: 'Request a Free Consultation', href: '/contact' },
  secondary: { label: 'Call +1 412 663 7288', href: 'tel:+14126637288' },
}

export const packagesPageCardsHeader = {
  eyebrow: 'Engagement Options',
  title: 'Choose the package that matches where you are',
  subtitle:
    'Each option is a starting framework. Your final plan is customized after we understand your services, locations, and priorities.',
}
