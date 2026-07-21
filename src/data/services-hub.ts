export const servicesHubHero = {
  eyebrow: 'Our Services',
  title: 'Powerful Services That Drive Real Results',
  titleAccent: 'Real Results',
  description:
    'From local SEO and Google Ads to web design and content, we deliver digital marketing services that help Pittsburgh businesses attract more customers and grow with confidence.',
  trustItems: [
    { label: 'Result Driven Strategies', icon: 'tabler:target' },
    { label: 'Transparent Reporting', icon: 'tabler:report-analytics' },
    { label: 'Dedicated Support', icon: 'tabler:headset' },
    { label: 'Affordable Pricing', icon: 'tabler:coin' },
  ],
  image: '/services-hub-hero.png',
  imageAlt: 'Digital marketing growth dashboard showing leads and conversion metrics',
}

export type ServicesHubCategoryId = 'all' | 'seo' | 'website' | 'marketing'

export type ServicesHubCard = {
  id: string
  category: Exclude<ServicesHubCategoryId, 'all'>
  title: string
  description: string
  href: string
  icon: string
  iconTone?: 'orange' | 'blue' | 'green' | 'purple' | 'teal' | 'red'
}

export const servicesHubCategories: { id: ServicesHubCategoryId; label: string; icon: string }[] = [
  { id: 'all', label: 'All Services', icon: 'tabler:layout-grid' },
  { id: 'seo', label: 'SEO Services', icon: 'tabler:rocket' },
  { id: 'website', label: 'Website Services', icon: 'tabler:device-desktop' },
  { id: 'marketing', label: 'Marketing Services', icon: 'tabler:speakerphone' },
]

export const servicesHubCards: ServicesHubCard[] = [
  {
    id: 'local-seo',
    category: 'seo',
    title: 'Local SEO',
    description: 'Rank higher in local search and attract more nearby customers ready to buy.',
    href: '/local-seo',
    icon: 'tabler:map-pin',
    iconTone: 'orange',
  },
  {
    id: 'google-map-optimization',
    category: 'seo',
    title: 'Google Map Optimization',
    description: 'Optimize your Google Business Profile to win more Map Pack visibility and calls.',
    href: '/google-map-optimization',
    icon: 'tabler:brand-google',
    iconTone: 'blue',
  },
  {
    id: 'technical-seo',
    category: 'seo',
    title: 'Technical SEO',
    description: 'Fix crawl, speed, and site-health issues that hold your rankings back.',
    href: '/technical-seo',
    icon: 'tabler:tool',
    iconTone: 'teal',
  },
  {
    id: 'link-building',
    category: 'seo',
    title: 'Link Building Services',
    description: 'Earn high-quality backlinks that build authority and stronger search visibility.',
    href: '/link-building',
    icon: 'tabler:link',
    iconTone: 'purple',
  },
  {
    id: 'local-business-citation',
    category: 'seo',
    title: 'Local Citation Services',
    description: 'Keep your business listings accurate and consistent across trusted directories.',
    href: '/local-business-citation',
    icon: 'tabler:world',
    iconTone: 'green',
  },
  {
    id: 'landing-page-optimization',
    category: 'seo',
    title: 'Landing Page Optimization',
    description: 'Turn more website visitors into leads with conversion-focused landing pages.',
    href: '/landing-page-optimization',
    icon: 'tabler:file-search',
    iconTone: 'red',
  },
  {
    id: 'web-design',
    category: 'website',
    title: 'Web Design Services',
    description: 'Modern, responsive websites designed to look great and convert visitors.',
    href: '/web-design',
    icon: 'tabler:layout',
    iconTone: 'orange',
  },
  {
    id: 'wordpress-development',
    category: 'website',
    title: 'WordPress Development',
    description: 'Fast, SEO-friendly WordPress websites built for growth and easy management.',
    href: '/wordpress-development',
    icon: 'tabler:brand-wordpress',
    iconTone: 'blue',
  },
  {
    id: 'shopify-development',
    category: 'website',
    title: 'Shopify Development',
    description: 'High-converting Shopify stores built to sell products and grow online revenue.',
    href: '/shopify-development',
    icon: 'tabler:shopping-bag',
    iconTone: 'green',
  },
  {
    id: 'google-ads',
    category: 'marketing',
    title: 'Google Ads Management',
    description: 'Targeted Google Ads campaigns that drive qualified leads and measurable ROI.',
    href: '/google-ads',
    icon: 'tabler:brand-google',
    iconTone: 'blue',
  },
  {
    id: 'ppc-advertising',
    category: 'marketing',
    title: 'PPC Advertising',
    description: 'Pay-per-click campaigns built to generate leads, sales, and stronger ROI.',
    href: '/ppc-advertising',
    icon: 'tabler:click',
    iconTone: 'orange',
  },
  {
    id: 'social-media-marketing',
    category: 'marketing',
    title: 'Social Media Marketing',
    description: 'Grow your brand with strategy, content, and paid social that drives engagement.',
    href: '/social-media-marketing',
    icon: 'tabler:share',
    iconTone: 'purple',
  },
  {
    id: 'social-media-management',
    category: 'marketing',
    title: 'Social Media Management',
    description: 'Consistent posting, engagement, and brand visibility across your social channels.',
    href: '/social-media-management',
    icon: 'tabler:users',
    iconTone: 'teal',
  },
  {
    id: 'content-writing',
    category: 'marketing',
    title: 'Content Writing Services',
    description: 'SEO-friendly content that ranks in search and helps convert more readers.',
    href: '/content-writing',
    icon: 'tabler:pencil',
    iconTone: 'red',
  },
]

export const servicesHubProcess = {
  eyebrow: 'Our Process',
  title: 'How We Deliver Results',
  steps: [
    {
      step: '01',
      title: 'Audit & Analyze',
      description: 'We review your current visibility, competition, and growth opportunities.',
      icon: 'tabler:search',
    },
    {
      step: '02',
      title: 'Strategy & Plan',
      description: 'We build a clear plan focused on the services that will move the needle.',
      icon: 'tabler:clipboard-list',
    },
    {
      step: '03',
      title: 'Implement',
      description: 'Our team executes the work across SEO, ads, content, or website improvements.',
      icon: 'tabler:code',
    },
    {
      step: '04',
      title: 'Measure & Track',
      description: 'We track rankings, traffic, leads, and conversions with transparent reporting.',
      icon: 'tabler:chart-bar',
    },
    {
      step: '05',
      title: 'Optimize & Improve',
      description: 'We refine what is working and fix what is holding performance back.',
      icon: 'tabler:trending-up',
    },
    {
      step: '06',
      title: 'Grow & Scale',
      description: 'We expand winning strategies so your results keep compounding over time.',
      icon: 'tabler:rocket',
    },
  ],
}

export const servicesHubWhy = {
  eyebrow: 'Why Choose Local SEO Wiser',
  title: 'A Partner You Can Rely On',
  items: [
    {
      title: 'Experienced Team',
      description: 'Specialists who understand local search, paid ads, and conversion-focused websites.',
      icon: 'tabler:users-group',
    },
    {
      title: 'Data-Driven Approach',
      description: 'Every recommendation is guided by analytics, testing, and measurable outcomes.',
      icon: 'tabler:chart-dots',
    },
    {
      title: 'Transparent Reporting',
      description: 'Clear monthly updates that show what we did and how performance changed.',
      icon: 'tabler:report-analytics',
    },
    {
      title: 'Affordable Pricing',
      description: 'Practical packages designed for local and growing businesses, not enterprise budgets.',
      icon: 'tabler:coin',
    },
    {
      title: 'Dedicated Support',
      description: 'Direct communication and support so you always know what is happening.',
      icon: 'tabler:headset',
    },
    {
      title: 'Proven Results',
      description: 'A track record of helping businesses earn more visibility, leads, and customers.',
      icon: 'tabler:trophy',
    },
  ],
  stats: [
    { value: '100+', label: 'Happy Clients' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years Experience' },
    { value: '140+', label: 'Projects Delivered' },
  ],
}

export const servicesHubTestimonial = {
  name: 'David Johnson',
  role: 'Business Owner',
  quote:
    'Local SEO Wiser helped us show up in Google Maps, get more calls, and finally understand what was working. The process was clear, the team was responsive, and the results were measurable.',
  highlights: [
    { title: 'No Long-Term Contracts', icon: 'tabler:file-check' },
    { title: '100% Transparent Process', icon: 'tabler:eye' },
    { title: 'Ethical SEO Practices', icon: 'tabler:shield-check' },
    { title: 'On-Time Delivery', icon: 'tabler:clock' },
  ],
}

export const servicesHubFaq = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Common Questions About Our Services',
  items: [
    {
      question: 'Which service should I start with?',
      answer:
        'It depends on your goals. Most local businesses start with Local SEO or Google Map Optimization, while businesses needing faster leads often pair that with Google Ads or landing page optimization.',
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'Paid ads can start generating traffic quickly, while SEO usually shows stronger momentum over 60–90 days. We set realistic timelines based on your market and competition.',
    },
    {
      question: 'Do you work with small businesses?',
      answer:
        'Yes. Our services are built for local and growing businesses that need clear strategy, practical pricing, and measurable growth—not complicated enterprise packages.',
    },
    {
      question: 'Can you manage SEO and website work together?',
      answer:
        'Absolutely. Many clients combine Local SEO with web design, WordPress, or landing page optimization so traffic and conversions improve at the same time.',
    },
    {
      question: 'Do you offer custom packages?',
      answer:
        'Yes. After a free consultation, we recommend the right mix of services based on your goals, budget, and current website or marketing setup.',
    },
  ],
}

export const servicesHubSideCta = {
  title: 'Ready to Grow Your Business?',
  text: 'Get a free consultation and a clear plan for the services that will help you attract more customers.',
  buttonLabel: 'Get Free Consultation',
  buttonHref: 'https://wa.me/14126637288',
}

export const servicesHubClosing = {
  title: "Let's Achieve Your Business Goals Together",
  text: 'Tell us what you want to grow—and we will recommend the right services to get you there.',
  buttonLabel: 'Get Free Consultation',
  buttonHref: 'https://wa.me/14126637288',
}
