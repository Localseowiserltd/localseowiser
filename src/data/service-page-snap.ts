const heroSecondaryCta = {
  label: 'Call Us: +1 412 663 7288',
  href: 'tel:+14126637288',
}

const trustIcon = 'tabler:circle-check-filled'

const emptyOutcomes = {
  eyebrow: 'Results',
  title: 'Results',
  items: [] as string[],
  paragraphs: [] as string[],
}

export const snapServicePages = [
  {
    slug: 'ppc-advertising',
    variant: 'full' as const,
    category: 'PPC Advertising Services in Pittsburgh',
    title: 'Targeted PPC Campaigns That Drive Leads, Sales and Maximum ROI',
    metaTitle: 'PPC Advertising Pittsburgh | High-ROI Paid Campaigns',
    metaDescription:
      'Get more leads and sales with PPC advertising in Pittsburgh. Local SEO Wiser builds high-converting campaigns that lower cost per click and maximize ROI.',
    description:
      'We build high-converting PPC campaigns that put your ads in front of ready-to-buy customers, so you generate more qualified leads and sales without wasting budget.',
    intro:
      'We build high-converting PPC campaigns that put your ads in front of ready-to-buy customers, so you generate more qualified leads and sales without wasting budget.',
    icon: 'tabler:click',
    imageAlt: 'PPC advertising campaign dashboard showing leads and ROI',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'Maximum ROI',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-ppc-advertising.png',
    heroImageDimensions: { width: 1328, height: 990 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'Google Ads Experts', icon: trustIcon },
      { label: 'Conversion Focused', icon: trustIcon },
      { label: 'Lower Cost Per Click', icon: trustIcon },
      { label: 'High ROI Campaigns', icon: trustIcon },
    ],
    leadForm: {
      title: 'Boost Your Business with PPC Advertising',
      subtitle: 'Get a free consultation and learn how we can increase your leads and sales.',
      buttonLabel: 'Get My Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'Wasted Ad Spend Costs You More Than You Think',
      items: [
        'High ad spend with few conversions',
        'Poor keyword targeting',
        'Weak ad copy',
        'No conversion tracking',
        'Budget wasted on wrong audiences',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'PPC Strategies That Generate Qualified Leads & Sales',
      items: [
        'Keyword research & competitor analysis',
        'High-converting ad copy & landing pages',
        'Smart bidding & budget control',
        'Conversion tracking setup',
        'Continuous optimization',
      ],
    },
    snapCenter: {
      title: 'Campaign Overview',
      rows: [
        { label: 'Cost / Conversion', value: '$48.90', change: '+32%', trend: 'up' as const },
        { label: 'Click-Through Rate', value: '1.8%', change: '-12%', trend: 'down' as const },
        { label: 'Conversion Rate', value: '2.1%', change: '-9%', trend: 'down' as const },
        { label: 'Wasted Spend', value: '$1,240', change: '+27%', trend: 'up' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: "What's Included in Our PPC Advertising Service",
    deliverablesDetailed: [
      {
        title: 'PPC Strategy & Planning',
        description: 'A clear campaign plan built around your goals, budget, and the audiences most likely to convert.',
        icon: 'tabler:map',
      },
      {
        title: 'Keyword Research',
        description: 'We find high-intent keywords your customers use so your ads reach people ready to take action.',
        icon: 'tabler:search',
      },
      {
        title: 'Ad Creation & Copywriting',
        description: 'Compelling ad copy and creatives designed to improve click-through rates and attract qualified traffic.',
        icon: 'tabler:pencil',
      },
      {
        title: 'Landing Page Optimization',
        description: 'We align landing pages with your ads so visitors convert into leads and sales more often.',
        icon: 'tabler:layout',
      },
      {
        title: 'Google Ads Management',
        description: 'Hands-on campaign management across search, display, and remarketing to keep performance on track.',
        icon: 'tabler:brand-google',
      },
      {
        title: 'Conversion Tracking',
        description: 'Proper tracking setup so every lead, call, and sale is measured and tied back to the right campaign.',
        icon: 'tabler:chart-dots',
      },
      {
        title: 'Performance Optimization',
        description: 'Ongoing bid, keyword, and audience refinements that lower cost per click and improve ROI.',
        icon: 'tabler:trending-up',
      },
      {
        title: 'Detailed Reporting',
        description: 'Clear monthly reports that show spend, conversions, and what we are improving next.',
        icon: 'tabler:report-analytics',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'How We Run High-Performing PPC Campaigns',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Research & Plan',
          phase: 'Research & Plan',
          description: 'We audit your market, competitors, and goals to build a focused PPC strategy and channel plan.',
          icon: 'tabler:search',
        },
        {
          step: '02',
          title: 'Create & Launch',
          phase: 'Create & Launch',
          description: 'We set up campaigns, write ads, configure tracking, and launch with tight targeting from day one.',
          icon: 'tabler:rocket',
        },
        {
          step: '03',
          title: 'Monitor & Optimize',
          phase: 'Monitor & Optimize',
          description: 'We watch performance daily, cut wasted spend, and refine bids, keywords, and ad copy.',
          icon: 'tabler:adjustments',
        },
        {
          step: '04',
          title: 'Analyze & Improve',
          phase: 'Analyze & Improve',
          description: 'We dig into conversion data to improve cost per lead and strengthen what is already working.',
          icon: 'tabler:chart-bar',
        },
        {
          step: '05',
          title: 'Scale & Grow',
          phase: 'Scale & Grow',
          description: 'Once campaigns are profitable, we scale winning ads and expand carefully into new opportunities.',
          icon: 'tabler:trending-up',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Us',
    whyChooseTitle: 'Why Choose Local SEO Wiser for PPC',
    whyChooseItems: [
      {
        title: 'Certified Experts',
        description: 'Our team knows how to structure and manage campaigns that convert, not just generate clicks.',
        icon: 'tabler:certificate',
      },
      {
        title: 'Results-Focused',
        description: 'We optimize for leads, sales, and ROI — the metrics that actually grow your business.',
        icon: 'tabler:target',
      },
      {
        title: 'Transparent Reporting',
        description: 'You always know where your budget is going and which campaigns are delivering results.',
        icon: 'tabler:eye',
      },
      {
        title: 'Affordable Pricing',
        description: 'Practical management fees designed for local and growing businesses, without bloated retainers.',
        icon: 'tabler:currency-dollar',
      },
      {
        title: 'Dedicated Support',
        description: 'A real team you can talk to — not a black-box agency that disappears after launch.',
        icon: 'tabler:headset',
      },
      {
        title: 'Continuous Optimization',
        description: 'PPC is never set-and-forget. We keep testing and improving to protect and grow your ROI.',
        icon: 'tabler:refresh',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About PPC Advertising',
      items: [
        {
          question: 'How quickly can PPC advertising generate leads?',
          answer:
            'PPC can start driving traffic as soon as campaigns go live. Most businesses see early lead activity within the first few weeks, with stronger performance as we gather data and optimize.',
        },
        {
          question: 'How much budget do I need for PPC?',
          answer:
            'Budget depends on your industry, competition, and goals. We help you set a realistic spend that can compete in your market while still leaving room to optimize for profitable results.',
        },
        {
          question: 'Do you manage Google Ads and other platforms?',
          answer:
            'Yes. We focus first on the channels most likely to convert for your business — often Google Ads — and expand only when the numbers justify it.',
        },
        {
          question: 'Will I own my advertising accounts?',
          answer:
            'Absolutely. Campaigns are built in your accounts so you keep full ownership of your data, history, and assets at all times.',
        },
        {
          question: 'Is there a long-term contract?',
          answer:
            'No. We work month-to-month so you stay because the results make sense, not because you are locked into an agreement.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Get More Leads and Maximize Your ROI?',
      paragraphs: [
        'Stop wasting budget on ads that do not convert. Get a free consultation and see how a focused PPC strategy can drive more qualified leads and sales for your business.',
      ],
      icon: 'tabler:click',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'No long-term contracts', icon: trustIcon },
        { label: 'Transparent reporting', icon: trustIcon },
        { label: 'ROI-focused campaigns', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'google-ads',
    variant: 'full' as const,
    category: 'Google Ads Management in Pittsburgh',
    title: 'Drive More Leads and Sales with High-Performing Google Ads',
    metaTitle: 'Google Ads Management Pittsburgh | Certified Experts',
    metaDescription:
      'Grow leads and sales with Google Ads management in Pittsburgh. Certified experts, transparent reporting, and ROI-focused campaigns from Local SEO Wiser.',
    description:
      'We build and manage Google Ads campaigns that put your business in front of high-intent searchers so you get more qualified leads, calls, and sales.',
    intro:
      'We build and manage Google Ads campaigns that put your business in front of high-intent searchers so you get more qualified leads, calls, and sales.',
    icon: 'tabler:brand-google',
    imageAlt: 'Google Ads management dashboard with conversions and cost metrics',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'Google Ads',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-google-ads.png',
    heroImageDimensions: { width: 1400, height: 950 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'ROI Focused Campaigns', icon: trustIcon },
      { label: 'Transparent Reporting', icon: trustIcon },
      { label: 'Google Ads Certified Experts', icon: trustIcon },
    ],
    leadForm: {
      title: 'Ready to Grow Your Business with Google Ads?',
      subtitle: 'Get a free consultation and learn how Google Ads can increase your leads and sales.',
      buttonLabel: 'Get My Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: "Wasting Budget on Ads That Don't Deliver Results",
      items: [
        'Ads running without clear conversion goals',
        'Broad keywords draining your budget',
        'Weak or generic ad copy',
        'Landing pages that do not convert',
        'No reliable tracking or reporting',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'Strategic Google Ads Campaigns That Drive Real Results',
      items: [
        'Intent-based keyword targeting',
        'High-converting ad copy and extensions',
        'Landing page recommendations that convert',
        'Smart bidding and budget control',
        'Full conversion tracking and reporting',
      ],
    },
    snapCenter: {
      title: 'Campaign Performance',
      rows: [
        { label: 'Conversions', value: '125', change: '+45%', trend: 'up' as const },
        { label: 'Cost / Conversion', value: '$23.45', change: '-18%', trend: 'down' as const },
        { label: 'Click-Through Rate', value: '4.8%', change: '+22%', trend: 'up' as const },
        { label: 'Quality Score', value: '8/10', change: '+2', trend: 'up' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: "What's Included in Our Google Ads Management",
    deliverablesDetailed: [
      {
        title: 'Campaign Setup',
        description: 'Proper account structure, conversion goals, and campaign settings built for measurable growth.',
        icon: 'tabler:settings',
      },
      {
        title: 'Keyword Research',
        description: 'High-intent keywords that match what your customers search when they are ready to buy.',
        icon: 'tabler:search',
      },
      {
        title: 'Ad Copywriting',
        description: 'Persuasive ads and extensions written to improve relevance, CTR, and Quality Score.',
        icon: 'tabler:pencil',
      },
      {
        title: 'Landing Page Optimization',
        description: 'Recommendations that align your landing experience with the ad promise to lift conversion rates.',
        icon: 'tabler:layout',
      },
      {
        title: 'Bid Management',
        description: 'Smart bidding strategies that balance cost control with lead volume and profitability.',
        icon: 'tabler:currency-dollar',
      },
      {
        title: 'Conversion Tracking',
        description: 'Accurate call, form, and purchase tracking so every optimization decision is based on real data.',
        icon: 'tabler:chart-dots',
      },
      {
        title: 'Performance Monitoring',
        description: 'Ongoing monitoring to pause waste, scale winners, and keep campaigns healthy day to day.',
        icon: 'tabler:activity',
      },
      {
        title: 'Monthly Reporting',
        description: 'Easy-to-read reports covering spend, conversions, cost per lead, and recommended next steps.',
        icon: 'tabler:report-analytics',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'Our Google Ads Process From Setup to Scale',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Understand',
          phase: 'Understand',
          description: 'We learn your offer, margins, target customers, and what a qualified lead looks like for you.',
          icon: 'tabler:message-circle',
        },
        {
          step: '02',
          title: 'Plan & Setup',
          phase: 'Plan & Setup',
          description: 'We build your account structure, keywords, ads, tracking, and launch plan with clear goals.',
          icon: 'tabler:clipboard-list',
        },
        {
          step: '03',
          title: 'Optimize & Manage',
          phase: 'Optimize & Manage',
          description: 'We refine bids, ads, and audiences continuously to improve conversions and lower wasted spend.',
          icon: 'tabler:adjustments',
        },
        {
          step: '04',
          title: 'Track & Analyze',
          phase: 'Track & Analyze',
          description: 'We review conversion data weekly so decisions stay tied to leads, sales, and cost efficiency.',
          icon: 'tabler:chart-bar',
        },
        {
          step: '05',
          title: 'Grow & Scale',
          phase: 'Grow & Scale',
          description: 'When campaigns are profitable, we expand carefully into new keywords, ads, and opportunities.',
          icon: 'tabler:trending-up',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Us',
    whyChooseTitle: 'Why Choose Local SEO Wiser for Google Ads',
    whyChooseItems: [
      {
        title: 'Google Certified',
        description: 'Work with a team that understands Google Ads best practices and how to apply them for local growth.',
        icon: 'tabler:certificate',
      },
      {
        title: 'ROI Focused',
        description: 'We manage campaigns around profitable leads and sales — not vanity metrics like impressions alone.',
        icon: 'tabler:target',
      },
      {
        title: 'Transparent Reporting',
        description: 'Clear monthly reporting so you always know what is working and where your budget is going.',
        icon: 'tabler:eye',
      },
      {
        title: 'No Long-Term Contracts',
        description: 'Stay month-to-month with the flexibility to continue based on results, not lock-in terms.',
        icon: 'tabler:lock-open',
      },
      {
        title: 'Custom Strategies',
        description: 'Every account is built around your market, offer, and goals — not a recycled template.',
        icon: 'tabler:puzzle',
      },
      {
        title: 'Ongoing Optimization',
        description: 'Continuous testing and refinement keep your campaigns competitive as markets and costs change.',
        icon: 'tabler:refresh',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Google Ads',
      items: [
        {
          question: 'How is Google Ads different from SEO?',
          answer:
            'Google Ads puts your business at the top of search results immediately through paid placement. SEO builds organic visibility over time. Many businesses use both together for short-term and long-term growth.',
        },
        {
          question: 'How soon will I see results from Google Ads?',
          answer:
            'Traffic can start the same day campaigns launch. Meaningful improvements in cost per lead usually develop over the first 30–60 days as we optimize based on real conversion data.',
        },
        {
          question: 'Do I need a big budget to run Google Ads?',
          answer:
            'Not necessarily. We help you set a budget that can compete for the right keywords without overspending, then scale once the account is converting profitably.',
        },
        {
          question: 'Will you set up conversion tracking?',
          answer:
            'Yes. Tracking calls, forms, and other key actions is part of our process so we can optimize toward real business results.',
        },
        {
          question: 'Who owns the Google Ads account?',
          answer:
            'You do. We build and manage campaigns inside your account so your data and history remain yours.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Get More Leads and Sales with Google Ads?',
      paragraphs: [
        'Get a free consultation and see how a well-managed Google Ads account can drive more qualified traffic, leads, and revenue for your business.',
      ],
      icon: 'tabler:brand-google',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'Google Ads certified experts', icon: trustIcon },
        { label: 'Transparent monthly reporting', icon: trustIcon },
        { label: 'No long-term contracts', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'content-writing',
    variant: 'full' as const,
    category: 'Content Writing Services in Pittsburgh',
    title: 'Content That Engages Readers and Ranks on Google',
    metaTitle: 'Content Writing Pittsburgh | SEO Blog & Website Copy',
    metaDescription:
      'Get SEO-friendly content writing in Pittsburgh. Local SEO Wiser creates engaging blogs, website pages, and landing copy that inform, rank, and convert.',
    description:
      'We write clear, SEO-friendly content that helps your business rank on Google, engage readers, and turn visitors into leads and customers.',
    intro:
      'We write clear, SEO-friendly content that helps your business rank on Google, engage readers, and turn visitors into leads and customers.',
    icon: 'tabler:pencil',
    imageAlt: 'SEO content writing for blogs and website pages',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'Google',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-content-writing.png',
    heroImageDimensions: { width: 1390, height: 980 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'SEO-Friendly Content', icon: trustIcon },
      { label: 'Engaging & Informative', icon: trustIcon },
      { label: 'Keywords That Convert', icon: trustIcon },
    ],
    leadForm: {
      title: 'Need High-Quality Content That Drives Results?',
      subtitle: 'Get a free consultation and learn how better content can grow your traffic and leads.',
      buttonLabel: 'Get My Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'Poor Content Can Hold Your Business Back',
      items: [
        'Thin or outdated website pages',
        'Blogs that do not rank or convert',
        'No clear keyword strategy',
        'Inconsistent publishing',
        'Content that sounds generic or off-brand',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'SEO Content That Informs, Engages & Converts',
      items: [
        'Keyword-driven content planning',
        'Clear, helpful writing for real readers',
        'On-page SEO built into every draft',
        'Local and service-focused messaging',
        'Editing, proofreading, and ongoing support',
      ],
    },
    snapCenter: {
      title: 'Content Impact Overview',
      rows: [
        { label: 'Low Quality Content Traffic', value: '-32%', change: '-32%', trend: 'down' as const },
        { label: 'Good Content Strategy Traffic', value: '+68%', change: '+68%', trend: 'up' as const },
        { label: 'Avg. Time on Page', value: '2m 41s', change: '+38%', trend: 'up' as const },
        { label: 'Organic Leads', value: '+54%', change: '+54%', trend: 'up' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: "What's Included in Our Content Writing Service",
    deliverablesDetailed: [
      {
        title: 'SEO Blog Writing',
        description: 'Search-focused blog posts written to attract organic traffic and answer real customer questions.',
        icon: 'tabler:article',
      },
      {
        title: 'Website Content',
        description: 'Clear service pages, about pages, and core website copy that communicate your value and support SEO.',
        icon: 'tabler:file-text',
      },
      {
        title: 'Landing Page Content',
        description: 'Conversion-focused landing copy designed to support ads, campaigns, and lead generation offers.',
        icon: 'tabler:layout',
      },
      {
        title: 'Keyword Research',
        description: 'We identify the terms your audience searches so every piece of content has a clear ranking purpose.',
        icon: 'tabler:search',
      },
      {
        title: 'Content Strategy',
        description: 'A practical publishing plan that prioritizes topics based on search demand, competition, and business goals.',
        icon: 'tabler:map',
      },
      {
        title: 'Editing & Proofreading',
        description: 'Every draft is polished for clarity, accuracy, tone, and readability before it goes live.',
        icon: 'tabler:checks',
      },
      {
        title: 'Local SEO Content',
        description: 'Location-aware pages and posts that help Pittsburgh businesses show up in local search results.',
        icon: 'tabler:map-pin',
      },
      {
        title: 'Ongoing Content Support',
        description: 'Consistent writing support so your site stays fresh, useful, and competitive over time.',
        icon: 'tabler:refresh',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'How We Create Content That Performs',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Understand',
          phase: 'Understand',
          description: 'We learn your brand voice, audience, services, and content goals before writing a single word.',
          icon: 'tabler:message-circle',
        },
        {
          step: '02',
          title: 'Research',
          phase: 'Research',
          description: 'We research keywords, competitors, and search intent so each piece has a clear purpose.',
          icon: 'tabler:search',
        },
        {
          step: '03',
          title: 'Write & Optimize',
          phase: 'Write & Optimize',
          description: 'We craft engaging copy with the structure, headings, and keywords needed to rank and convert.',
          icon: 'tabler:pencil',
        },
        {
          step: '04',
          title: 'Review & Refine',
          phase: 'Review & Refine',
          description: 'You review drafts, we refine based on feedback, and polish everything for quality and clarity.',
          icon: 'tabler:edit',
        },
        {
          step: '05',
          title: 'Publish & Perform',
          phase: 'Publish & Perform',
          description: 'Content goes live ready for search and readers, with ongoing support to keep momentum going.',
          icon: 'tabler:rocket',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Us',
    whyChooseTitle: 'Why Choose Local SEO Wiser for Content Writing',
    whyChooseItems: [
      {
        title: 'Skilled Writers',
        description: 'Clear, professional writing that sounds human, on-brand, and useful to your customers.',
        icon: 'tabler:pencil',
      },
      {
        title: 'SEO Expertise',
        description: 'Every piece is planned and structured with search visibility and ranking potential in mind.',
        icon: 'tabler:world-search',
      },
      {
        title: 'Original & Unique',
        description: 'Custom content written for your business — never recycled filler or generic AI dumps.',
        icon: 'tabler:sparkles',
      },
      {
        title: 'Timely Delivery',
        description: 'Reliable turnaround so your content calendar stays on schedule and opportunities are not missed.',
        icon: 'tabler:clock',
      },
      {
        title: 'Transparent Process',
        description: 'You always know what we are writing, why it matters, and what happens next.',
        icon: 'tabler:eye',
      },
      {
        title: 'Results-Driven',
        description: 'We write for traffic, engagement, and leads — not just word counts.',
        icon: 'tabler:target',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Content Writing',
      items: [
        {
          question: 'What types of content do you write?',
          answer:
            'We write SEO blogs, website pages, landing page copy, local service content, and other business writing designed to inform readers and support search visibility.',
        },
        {
          question: 'Will the content be optimized for SEO?',
          answer:
            'Yes. Keyword research, on-page structure, and search intent are built into our writing process so content is useful for both readers and Google.',
        },
        {
          question: 'Can you match our brand voice?',
          answer:
            'Absolutely. We review your existing materials and preferences first so the finished content sounds like your business, not a generic agency template.',
        },
        {
          question: 'How often should we publish new content?',
          answer:
            'It depends on your goals and competition, but consistent publishing usually outperforms occasional one-off posts. We can recommend a realistic cadence for your business.',
        },
        {
          question: 'Do you also handle editing and revisions?',
          answer:
            'Yes. Editing, proofreading, and reasonable revisions are part of the process so your content is polished before it goes live.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Get High-Quality Content That Drives Results?',
      paragraphs: [
        'Whether you need blog posts, website pages, or ongoing content support, we can help you publish work that engages readers and supports growth on Google.',
      ],
      icon: 'tabler:pencil',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'SEO-friendly writing', icon: trustIcon },
        { label: 'Original content only', icon: trustIcon },
        { label: 'Clear, timely delivery', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'social-media-marketing',
    variant: 'full' as const,
    category: 'Social Media Marketing in Pittsburgh',
    title: 'Build Your Brand and Engage Customers with Social Media',
    metaTitle: 'Social Media Marketing Pittsburgh | Content & Growth',
    metaDescription:
      'Grow your brand with social media marketing in Pittsburgh. Get strategic content, paid social, engagement, and clear reporting from Local SEO Wiser.',
    description:
      'We create social media marketing strategies that build your brand, engage the right audience, and turn attention into real business growth.',
    intro:
      'We create social media marketing strategies that build your brand, engage the right audience, and turn attention into real business growth.',
    icon: 'tabler:share',
    imageAlt: 'Social media marketing strategy and engagement overview',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'Social Media',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-social-media-marketing.png',
    heroImageDimensions: { width: 1385, height: 986 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'Strategic Social Media', icon: trustIcon },
      { label: 'Engaging Content', icon: trustIcon },
      { label: 'Real Results', icon: trustIcon },
    ],
    leadForm: {
      title: 'Ready to Grow Your Brand with Social Media?',
      subtitle: 'Get a free consultation and learn how social media marketing can grow your reach and leads.',
      buttonLabel: 'Get My Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'Inconsistent or Inactive Social Media Hurts Your Business',
      items: [
        'Irregular posting that loses audience interest',
        'No clear content strategy or brand voice',
        'Low engagement and weak community presence',
        'Ads running without a supporting organic plan',
        'No reporting tied to real business outcomes',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'Social Media Strategies That Build Engagement and Drive Growth',
      items: [
        'Platform strategy matched to your audience',
        'Consistent, on-brand content creation',
        'Community engagement and audience growth',
        'Paid social campaigns that support organic reach',
        'Analytics and reporting that show what works',
      ],
    },
    snapCenter: {
      title: 'Engagement Overview',
      rows: [
        { label: 'Reach', value: '-15%', change: '-15%', trend: 'down' as const },
        { label: 'Engagement', value: '-28%', change: '-28%', trend: 'down' as const },
        { label: 'Profile Visits', value: '-11%', change: '-11%', trend: 'down' as const },
        { label: 'Follower Growth', value: '-9%', change: '-9%', trend: 'down' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: "What's Included in Our Social Media Marketing",
    deliverablesDetailed: [
      {
        title: 'Social Media Strategy',
        description: 'A clear plan for platforms, messaging, content themes, and goals that fit your business.',
        icon: 'tabler:map',
      },
      {
        title: 'Content Creation',
        description: 'Posts, captions, and creative assets designed to stop the scroll and spark engagement.',
        icon: 'tabler:photo',
      },
      {
        title: 'Social Media Management',
        description: 'Consistent publishing and profile upkeep so your brand stays active and professional.',
        icon: 'tabler:calendar',
      },
      {
        title: 'Paid Social Advertising',
        description: 'Targeted paid campaigns that expand reach, retarget warm audiences, and support lead generation.',
        icon: 'tabler:ad',
      },
      {
        title: 'Audience Growth',
        description: 'Tactics designed to attract followers who actually care about your products or services.',
        icon: 'tabler:users',
      },
      {
        title: 'Community Engagement',
        description: 'Active responses and conversation management that build trust and keep your brand human.',
        icon: 'tabler:message-circle',
      },
      {
        title: 'Analytics & Reporting',
        description: 'Clear performance reporting covering reach, engagement, growth, and campaign results.',
        icon: 'tabler:chart-bar',
      },
      {
        title: 'Profile Optimization',
        description: 'Polished profiles with strong bios, visuals, and calls to action that convert visitors into customers.',
        icon: 'tabler:user-circle',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'A Simple Process for Social Media Growth',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Discover & Plan',
          phase: 'Discover & Plan',
          description: 'We review your brand, audience, and competitors to build a practical social media strategy.',
          icon: 'tabler:search',
        },
        {
          step: '02',
          title: 'Create Content',
          phase: 'Create Content',
          description: 'We develop on-brand posts, visuals, and captions aligned with your goals and calendar.',
          icon: 'tabler:photo',
        },
        {
          step: '03',
          title: 'Publish & Promote',
          phase: 'Publish & Promote',
          description: 'We publish consistently and support organic reach with paid promotion when it makes sense.',
          icon: 'tabler:send',
        },
        {
          step: '04',
          title: 'Engage & Grow',
          phase: 'Engage & Grow',
          description: 'We respond, build community, and grow an audience that actually cares about your brand.',
          icon: 'tabler:heart',
        },
        {
          step: '05',
          title: 'Measure & Optimize',
          phase: 'Measure & Optimize',
          description: 'We track performance, refine what works, and keep improving results month after month.',
          icon: 'tabler:chart-bar',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Us',
    whyChooseTitle: 'Why Choose Local SEO Wiser for Social Media Marketing',
    whyChooseItems: [
      {
        title: 'Experienced Team',
        description: 'A team that understands platform trends and how to turn social activity into business value.',
        icon: 'tabler:users',
      },
      {
        title: 'Results-Focused',
        description: 'We prioritize engagement, growth, and leads — not empty vanity metrics.',
        icon: 'tabler:target',
      },
      {
        title: 'Transparent Communication',
        description: 'You always know what is being posted, promoted, and improved across your channels.',
        icon: 'tabler:message',
      },
      {
        title: 'On-Brand Content',
        description: 'Every post is created to match your voice, visuals, and customer expectations.',
        icon: 'tabler:palette',
      },
      {
        title: 'Affordable Packages',
        description: 'Practical packages designed for local businesses that need consistency without enterprise pricing.',
        icon: 'tabler:currency-dollar',
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous management and optimization so your social presence keeps improving over time.',
        icon: 'tabler:headset',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Social Media Marketing',
      items: [
        {
          question: 'Which social platforms should my business use?',
          answer:
            'It depends on where your customers spend time. We help you prioritize the platforms that fit your audience instead of spreading thin across every network.',
        },
        {
          question: 'Do you create the content for us?',
          answer:
            'Yes. Content creation is a core part of our social media marketing service, including posts, captions, and creative direction aligned with your brand.',
        },
        {
          question: 'Can social media marketing generate leads?',
          answer:
            'Yes. With the right mix of content, engagement, and paid social, social media can drive traffic, inquiries, and customers — especially when it supports your broader marketing.',
        },
        {
          question: 'How often should we post?',
          answer:
            'Consistency matters more than volume. We recommend a realistic posting cadence based on your platforms, capacity, and goals so quality stays high.',
        },
        {
          question: 'Do you offer paid social advertising too?',
          answer:
            'Yes. We can manage paid social campaigns that expand reach, retarget interested audiences, and support your organic content strategy.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Build Your Brand with Social Media Marketing?',
      paragraphs: [
        'Get a free consultation and see how a clear social strategy, better content, and consistent engagement can help your business grow.',
      ],
      icon: 'tabler:share',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'Strategic content planning', icon: trustIcon },
        { label: 'Engagement-focused execution', icon: trustIcon },
        { label: 'Transparent reporting', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'social-media-management',
    variant: 'full' as const,
    category: 'Social Media Management Services in Pittsburgh',
    title: 'We Manage Your Social Media So You Can Focus on Growing Your Business',
    metaTitle: 'Social Media Management Pittsburgh | Posts & Growth',
    metaDescription:
      'Hands-off social media management in Pittsburgh. Content creation, posting, engagement, profile optimization, and monthly reporting from Local SEO Wiser.',
    description:
      'We handle your social media day to day — content, posting, engagement, and reporting — so you can stay focused on running and growing your business.',
    intro:
      'We handle your social media day to day — content, posting, engagement, and reporting — so you can stay focused on running and growing your business.',
    icon: 'tabler:brand-instagram',
    imageAlt: 'Social media management calendar and community engagement',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'Growing Your Business',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-social-media-management.png',
    heroImageDimensions: { width: 1409, height: 956 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'Content Creation', icon: trustIcon },
      { label: 'Community Management', icon: trustIcon },
      { label: 'Profile Optimization', icon: trustIcon },
      { label: 'Consistent Posting', icon: trustIcon },
      { label: 'Engagement Growth', icon: trustIcon },
      { label: 'Monthly Reporting', icon: trustIcon },
    ],
    leadForm: {
      title: 'Ready to Grow Your Brand with Social Media Management?',
      subtitle: 'Get a free consultation and see how managed social media can save time and grow engagement.',
      buttonLabel: 'Get My Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'Inconsistent or Inactive Social Media is Costing You Customers',
      items: [
        'Weeks go by without posts',
        'Comments and messages go unanswered',
        'Profiles look incomplete or outdated',
        'No time to create quality content',
        'Competitors stay active while you fall behind',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'Social Media Management That Builds Your Brand and Drives Results',
      items: [
        'Consistent content planning and posting',
        'Community engagement and response management',
        'Profile optimization that builds trust',
        'Audience growth tactics that attract the right people',
        'Clear monthly reporting on performance',
      ],
    },
    snapCenter: {
      title: 'Account Health Overview',
      rows: [
        { label: 'Posting Consistency', value: '32%', change: '-41%', trend: 'down' as const },
        { label: 'Response Rate', value: '18%', change: '-27%', trend: 'down' as const },
        { label: 'Engagement Rate', value: '0.9%', change: '-22%', trend: 'down' as const },
        { label: 'Profile Completeness', value: '64%', change: '-12%', trend: 'down' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: "What's Included in Our Social Media Management",
    deliverablesDetailed: [
      {
        title: 'Content Creation',
        description: 'Custom posts and captions created for your brand so your feed stays active and professional.',
        icon: 'tabler:photo',
      },
      {
        title: 'Audience Growth',
        description: 'Strategies designed to attract followers who are genuinely interested in your business.',
        icon: 'tabler:users',
      },
      {
        title: 'Paid Social Campaigns',
        description: 'Optional paid support to expand reach, promote offers, and reconnect with warm audiences.',
        icon: 'tabler:ad',
      },
      {
        title: 'Community Management',
        description: 'We monitor and engage with comments and messages to keep conversations moving.',
        icon: 'tabler:messages',
      },
      {
        title: 'Consistent Posting',
        description: 'A reliable publishing schedule that keeps your brand visible without adding work to your plate.',
        icon: 'tabler:calendar-event',
      },
      {
        title: 'Profile Optimization',
        description: 'Clean, conversion-ready profiles with strong visuals, bios, and clear calls to action.',
        icon: 'tabler:user-circle',
      },
      {
        title: 'Hashtag & Discovery Strategy',
        description: 'Smart tagging and discovery tactics that help the right people find your content.',
        icon: 'tabler:hash',
      },
      {
        title: 'Monthly Reporting',
        description: 'Simple reports covering growth, engagement, top content, and recommended next steps.',
        icon: 'tabler:report-analytics',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'How Our Social Media Management Works',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Research & Strategy',
          phase: 'Research & Strategy',
          description: 'We review your brand, audience, and competitors to define the right management plan.',
          icon: 'tabler:search',
        },
        {
          step: '02',
          title: 'Plan & Create',
          phase: 'Plan & Create',
          description: 'We build a content calendar and create posts that match your voice and business goals.',
          icon: 'tabler:clipboard-list',
        },
        {
          step: '03',
          title: 'Post & Engage',
          phase: 'Post & Engage',
          description: 'We publish on schedule and engage with your audience to build trust and visibility.',
          icon: 'tabler:send',
        },
        {
          step: '04',
          title: 'Analyze & Optimize',
          phase: 'Analyze & Optimize',
          description: 'We review performance data and refine content, timing, and tactics based on what works.',
          icon: 'tabler:chart-bar',
        },
        {
          step: '05',
          title: 'Grow & Scale',
          phase: 'Grow & Scale',
          description: 'As results improve, we expand what is working and support bigger brand and lead goals.',
          icon: 'tabler:trending-up',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Us',
    whyChooseTitle: 'Why Choose Local SEO Wiser for Social Media Management',
    whyChooseItems: [
      {
        title: 'Hands-Off Management',
        description: 'We handle the day-to-day work so you can focus on customers and operations.',
        icon: 'tabler:user-check',
      },
      {
        title: 'Consistent Brand Presence',
        description: 'Your profiles stay active, polished, and on-brand week after week.',
        icon: 'tabler:brand-instagram',
      },
      {
        title: 'Engagement That Matters',
        description: 'We focus on conversations and community, not just posting into the void.',
        icon: 'tabler:heart',
      },
      {
        title: 'Transparent Updates',
        description: 'Monthly reporting keeps you informed without requiring you to manage the channels yourself.',
        icon: 'tabler:eye',
      },
      {
        title: 'Flexible Support',
        description: 'Packages that adapt as your needs grow, from organic management to paid social support.',
        icon: 'tabler:adjustments',
      },
      {
        title: 'Local Business Focus',
        description: 'Strategies built for Pittsburgh businesses that need practical growth, not social media fluff.',
        icon: 'tabler:map-pin',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Social Media Management',
      items: [
        {
          question: 'What is included in social media management?',
          answer:
            'Typical management includes content creation, scheduling, posting, community engagement, profile optimization, and monthly reporting. Paid social can be added when it fits your goals.',
        },
        {
          question: 'How is management different from social media marketing?',
          answer:
            'Management focuses on the ongoing day-to-day work of keeping your channels active and engaging. Marketing often includes broader strategy and paid campaigns to accelerate growth.',
        },
        {
          question: 'Do I still need to be involved?',
          answer:
            'Only lightly. We handle the heavy lifting, and you provide approvals, brand preferences, or timely updates when needed so content stays accurate.',
        },
        {
          question: 'Which platforms can you manage?',
          answer:
            'We commonly manage platforms like Facebook, Instagram, and other channels that fit your audience. We will recommend the right mix instead of forcing every network.',
        },
        {
          question: 'How soon will we see improvement?',
          answer:
            'Consistency usually improves quickly once posting and engagement resume. Stronger growth in reach, engagement, and inquiries typically builds over the following weeks and months.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Grow Your Brand with Social Media?',
      paragraphs: [
        'Let us manage your social media so your brand stays active, engaging, and consistent while you focus on growing the business.',
      ],
      icon: 'tabler:brand-instagram',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'Consistent posting', icon: trustIcon },
        { label: 'Community management', icon: trustIcon },
        { label: 'Monthly reporting', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'web-design',
    variant: 'full' as const,
    category: 'Web Design Services in Pittsburgh',
    title: 'Beautiful Websites That Impress Visitors and Grow Your Business',
    metaTitle: 'Web Design Services Pittsburgh | Fast & Conversion-Ready',
    metaDescription:
      'Get custom web design in Pittsburgh. Local SEO Wiser builds responsive, SEO-friendly websites that look great, load fast, and convert visitors into customers.',
    description:
      'We design modern, conversion-focused websites that make a strong first impression, load fast, and help your business turn visitors into leads and sales.',
    intro:
      'We design modern, conversion-focused websites that make a strong first impression, load fast, and help your business turn visitors into leads and sales.',
    icon: 'tabler:palette',
    imageAlt: 'Custom web design mockup for a modern business website',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'Grow Your Business',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-web-design.png',
    heroImageDimensions: { width: 1301, height: 943 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'Custom Web Design', icon: trustIcon },
      { label: 'Responsive Design', icon: trustIcon },
      { label: 'SEO-Friendly', icon: trustIcon },
      { label: 'Fast & Secure', icon: trustIcon },
      { label: 'Modern & User-Friendly', icon: trustIcon },
      { label: 'Conversion Focused', icon: trustIcon },
    ],
    leadForm: {
      title: 'Ready to Get a Website That Brings You Results?',
      subtitle: 'Get a free consultation and learn how a better website can generate more leads and sales.',
      buttonLabel: 'Get My Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'A Poor Website Can Cost You Business',
      items: [
        'Outdated design that hurts trust',
        'Slow load times that drive visitors away',
        'Poor mobile experience',
        'Unclear messaging and weak calls to action',
        'Pages that are hard for Google to understand',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'Custom Websites Designed for Performance & Growth',
      items: [
        'Custom design matched to your brand',
        'Mobile-responsive layouts that work everywhere',
        'Fast, secure, and easy-to-use pages',
        'SEO-friendly structure from the start',
        'Conversion-focused calls to action and forms',
      ],
    },
    snapCenter: {
      title: 'Website Performance',
      rows: [
        { label: 'Before', value: '48/100', change: '-52', trend: 'down' as const },
        { label: 'After', value: '92/100', change: '+44', trend: 'up' as const },
        { label: 'Mobile Score', value: '90/100', change: '+38', trend: 'up' as const },
        { label: 'Bounce Rate', value: '-27%', change: '-27%', trend: 'down' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: "What's Included in Our Web Design Service",
    deliverablesDetailed: [
      {
        title: 'Custom Website Design',
        description: 'Unique layouts and visuals built around your brand, not a recycled template look.',
        icon: 'tabler:palette',
      },
      {
        title: 'Responsive Design',
        description: 'Websites that look and work great on phones, tablets, and desktops.',
        icon: 'tabler:device-mobile',
      },
      {
        title: 'E-Commerce Websites',
        description: 'Online store designs built to showcase products and support a smooth buying experience.',
        icon: 'tabler:shopping-cart',
      },
      {
        title: 'Landing Page Design',
        description: 'Focused pages designed to convert ad traffic, campaigns, and special offers into leads.',
        icon: 'tabler:layout',
      },
      {
        title: 'SEO-Friendly Structure',
        description: 'Clean page architecture, headings, and technical foundations that support search visibility.',
        icon: 'tabler:world-search',
      },
      {
        title: 'Speed Optimization',
        description: 'Performance-minded design and development so pages load quickly and keep visitors engaged.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Contact Forms & CTAs',
        description: 'Clear calls to action and lead forms that make it easy for visitors to reach you.',
        icon: 'tabler:mail',
      },
      {
        title: 'Launch Support',
        description: 'Help getting your new site live smoothly, with guidance on next steps after launch.',
        icon: 'tabler:rocket',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'How We Design Websites That Perform',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Discover & Plan',
          phase: 'Discover & Plan',
          description: 'We learn your goals, audience, and brand so the design supports real business outcomes.',
          icon: 'tabler:search',
        },
        {
          step: '02',
          title: 'Design & Develop',
          phase: 'Design & Develop',
          description: 'We create the visual design and build a fast, responsive website around your content and offers.',
          icon: 'tabler:palette',
        },
        {
          step: '03',
          title: 'Review & Refine',
          phase: 'Review & Refine',
          description: 'You review the design, we refine based on feedback, and polish the experience before launch.',
          icon: 'tabler:edit',
        },
        {
          step: '04',
          title: 'Test & Optimize',
          phase: 'Test & Optimize',
          description: 'We test usability, mobile experience, forms, and performance to catch issues early.',
          icon: 'tabler:bug',
        },
        {
          step: '05',
          title: 'Launch & Support',
          phase: 'Launch & Support',
          description: 'We launch your site and provide support so you can start generating results with confidence.',
          icon: 'tabler:rocket',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Us',
    whyChooseTitle: 'Why Choose Local SEO Wiser for Web Design',
    whyChooseItems: [
      {
        title: 'Design With Purpose',
        description: 'Beautiful interfaces that also support SEO, speed, and conversions — not design for design\'s sake.',
        icon: 'tabler:palette',
      },
      {
        title: 'Mobile-First Thinking',
        description: 'Most visitors browse on phones, so every layout is built to work beautifully on mobile.',
        icon: 'tabler:device-mobile',
      },
      {
        title: 'SEO Built In',
        description: 'Structure, performance, and content foundations that support search visibility from day one.',
        icon: 'tabler:world-search',
      },
      {
        title: 'Conversion Focused',
        description: 'Clear messaging, strong CTAs, and forms designed to turn attention into inquiries.',
        icon: 'tabler:target',
      },
      {
        title: 'Transparent Process',
        description: 'You stay involved with clear milestones, reviews, and communication throughout the project.',
        icon: 'tabler:eye',
      },
      {
        title: 'Local Business Experience',
        description: 'Websites built for Pittsburgh businesses that need leads, trust, and practical growth.',
        icon: 'tabler:map-pin',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Web Design',
      items: [
        {
          question: 'How long does a website project take?',
          answer:
            'Timelines vary by scope, but many business websites move from planning to launch over several weeks. We set clear milestones so you know what to expect at each stage.',
        },
        {
          question: 'Will my website work on mobile?',
          answer:
            'Yes. Responsive design is standard. Your site will be built to look and function well across phones, tablets, and desktops.',
        },
        {
          question: 'Do you also handle SEO?',
          answer:
            'We build SEO-friendly foundations into the site and can support broader Local SEO and content strategy when you want ongoing growth after launch.',
        },
        {
          question: 'Can you redesign my existing website?',
          answer:
            'Absolutely. Whether you need a full redesign or a cleaner modern rebuild, we can improve design, usability, speed, and conversion performance.',
        },
        {
          question: 'Will I be able to update the site myself?',
          answer:
            'Depending on the platform we choose, most clients can update common content after launch. We will recommend the best setup for your team and comfort level.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Get a Website That Grows Your Business?',
      paragraphs: [
        'Get a free consultation and see how a custom, conversion-focused website can improve trust, performance, and lead generation.',
      ],
      icon: 'tabler:palette',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'Custom responsive design', icon: trustIcon },
        { label: 'SEO-friendly foundations', icon: trustIcon },
        { label: 'Conversion-focused layouts', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'wordpress-development',
    variant: 'full' as const,
    category: 'WordPress Development in Pittsburgh',
    title: 'Professional WordPress Websites That Perform',
    metaTitle: 'WordPress Development Pittsburgh | Fast & SEO-Friendly',
    metaDescription:
      'Get professional WordPress development in Pittsburgh. Custom design, speed optimization, SEO-friendly builds, and ongoing support from Local SEO Wiser.',
    description:
      'We build professional WordPress websites that look polished, load fast, stay secure, and give your business a strong foundation for growth.',
    intro:
      'We build professional WordPress websites that look polished, load fast, stay secure, and give your business a strong foundation for growth.',
    icon: 'tabler:brand-wordpress',
    imageAlt: 'Custom WordPress website development and performance dashboard',
    heroLayout: 'snap' as const,
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-wordpress-development.png',
    heroImageDimensions: { width: 1365, height: 973 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'Custom WordPress Design', icon: trustIcon },
      { label: 'Mobile Responsive', icon: trustIcon },
      { label: 'SEO Friendly Development', icon: trustIcon },
    ],
    leadForm: {
      title: 'Ready to Build Your WordPress Website?',
      subtitle: 'Get a free consultation and learn how a better WordPress site can support leads and growth.',
      buttonLabel: 'Get My Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'Outdated or Poorly Built Websites Can Hold Your Business Back',
      items: [
        'Slow pages that frustrate visitors',
        'Clunky themes and plugin clutter',
        'Weak mobile experience',
        'Security and update issues',
        'Hard-to-edit sites your team cannot manage',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'WordPress Websites Designed for Performance and Growth',
      items: [
        'Custom WordPress design tailored to your brand',
        'Responsive development across all devices',
        'Speed, SEO, and security best practices',
        'Clean plugin and e-commerce integrations',
        'Ongoing support after launch',
      ],
    },
    snapCenter: {
      title: 'Site Speed Overview',
      rows: [
        { label: 'Performance Score', value: '31/100', change: '-69', trend: 'down' as const },
        { label: 'Load Time', value: '4.8s', change: '+2.1s', trend: 'up' as const },
        { label: 'Mobile Usability', value: '58/100', change: '-21', trend: 'down' as const },
        { label: 'SEO Readiness', value: '44/100', change: '-18', trend: 'down' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: "What's Included in Our WordPress Development",
    deliverablesDetailed: [
      {
        title: 'Custom WordPress Design',
        description: 'A branded WordPress experience built around your business, content, and conversion goals.',
        icon: 'tabler:palette',
      },
      {
        title: 'Responsive Development',
        description: 'Clean responsive builds that look sharp and work smoothly on every screen size.',
        icon: 'tabler:device-mobile',
      },
      {
        title: 'Speed Optimization',
        description: 'Performance improvements that help pages load faster and keep visitors from bouncing.',
        icon: 'tabler:bolt',
      },
      {
        title: 'SEO Friendly',
        description: 'Technical and on-page foundations that help Google crawl, understand, and rank your pages.',
        icon: 'tabler:world-search',
      },
      {
        title: 'Plugin Integration',
        description: 'Carefully selected plugins for forms, SEO, bookings, and more — without unnecessary bloat.',
        icon: 'tabler:plug',
      },
      {
        title: 'E-Commerce Solutions',
        description: 'WooCommerce and product-ready WordPress setups when you need to sell online.',
        icon: 'tabler:shopping-cart',
      },
      {
        title: 'Security & Updates',
        description: 'Secure configuration and update practices that help protect your site over time.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Ongoing Support',
        description: 'Help after launch with improvements, maintenance, and growth-focused updates.',
        icon: 'tabler:headset',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'Our WordPress Development Process',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Understand',
          phase: 'Understand',
          description: 'We learn your goals, content needs, and technical requirements before building anything.',
          icon: 'tabler:message-circle',
        },
        {
          step: '02',
          title: 'Plan & Design',
          phase: 'Plan & Design',
          description: 'We map the site structure and design a WordPress experience that fits your brand and users.',
          icon: 'tabler:clipboard-list',
        },
        {
          step: '03',
          title: 'Develop',
          phase: 'Develop',
          description: 'We build a clean, responsive WordPress site with the features and integrations you need.',
          icon: 'tabler:code',
        },
        {
          step: '04',
          title: 'Test & Review',
          phase: 'Test & Review',
          description: 'We test speed, usability, forms, and responsiveness, then refine based on your feedback.',
          icon: 'tabler:bug',
        },
        {
          step: '05',
          title: 'Launch & Support',
          phase: 'Launch & Support',
          description: 'We launch your site and provide support so your WordPress website stays strong after go-live.',
          icon: 'tabler:rocket',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Us',
    whyChooseTitle: 'Why Choose Local SEO Wiser for WordPress Development',
    whyChooseItems: [
      {
        title: 'Performance First',
        description: 'We build WordPress sites to load quickly and stay usable, not just look good in a mockup.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Clean Builds',
        description: 'Thoughtful theme and plugin choices keep your site maintainable and easier to manage.',
        icon: 'tabler:code',
      },
      {
        title: 'SEO Ready',
        description: 'Technical SEO foundations are included so your site is ready to support organic growth.',
        icon: 'tabler:world-search',
      },
      {
        title: 'Secure Setup',
        description: 'Security-minded configuration and update practices help protect your business online.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Easy to Manage',
        description: 'We aim for WordPress setups your team can update without needing a developer for every change.',
        icon: 'tabler:edit',
      },
      {
        title: 'Ongoing Partnership',
        description: 'Support does not end at launch — we can keep improving and maintaining your site as you grow.',
        icon: 'tabler:heart-handshake',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About WordPress Development',
      items: [
        {
          question: 'Why choose WordPress for my website?',
          answer:
            'WordPress is flexible, widely supported, and easy to manage for most businesses. It works well for service sites, blogs, and many e-commerce needs when built properly.',
        },
        {
          question: 'Can you redesign an existing WordPress site?',
          answer:
            'Yes. We can refresh your design, improve speed, clean up plugins, and rebuild key pages while keeping what still works.',
        },
        {
          question: 'Will my WordPress site be mobile friendly?',
          answer:
            'Yes. Responsive development is part of every project so your site works well on phones, tablets, and desktops.',
        },
        {
          question: 'Do you provide ongoing maintenance?',
          answer:
            'We can. Many clients continue with support for updates, security, improvements, and content changes after launch.',
        },
        {
          question: 'Can WordPress support SEO and lead generation?',
          answer:
            'Absolutely. A well-built WordPress site gives you the structure, speed, and content flexibility needed to rank and convert visitors into leads.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Build a Powerful WordPress Website?',
      paragraphs: [
        'Get a free consultation and see how a custom WordPress site can improve performance, usability, and your ability to generate leads online.',
      ],
      icon: 'tabler:brand-wordpress',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'Custom WordPress builds', icon: trustIcon },
        { label: 'Speed & SEO focused', icon: trustIcon },
        { label: 'Ongoing support available', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'shopify-development',
    variant: 'full' as const,
    category: 'Shopify Development in Pittsburgh',
    title: 'High-Converting Shopify Stores That Grow Sales',
    metaTitle: 'Shopify Development Pittsburgh | Custom Stores That Convert',
    metaDescription:
      'Build a high-converting Shopify store in Pittsburgh. Custom design, mobile optimization, and conversion-focused development from Local SEO Wiser.',
    description:
      'We build custom Shopify stores designed to look great, load fast on mobile, and convert more visitors into paying customers.',
    intro:
      'We build custom Shopify stores designed to look great, load fast on mobile, and convert more visitors into paying customers.',
    icon: 'tabler:brand-shopify',
    imageAlt: 'Shopify store development dashboard showing sales and conversion rate',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'Grow Sales',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-shopify-development.png',
    heroImageDimensions: { width: 1387, height: 974 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'Custom Shopify Design', icon: trustIcon },
      { label: 'Mobile Optimized', icon: trustIcon },
      { label: 'Conversion Focused', icon: trustIcon },
    ],
    leadForm: {
      title: 'Ready to Build Your High-Converting Shopify Store?',
      subtitle: 'Get a free consultation and learn how a better Shopify store can increase sales.',
      buttonLabel: 'Get My Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'Poorly Built Stores Cost You Sales',
      items: [
        'Confusing product pages and checkout flows',
        'Slow mobile shopping experiences',
        'Weak visuals that fail to build trust',
        'Apps and themes slowing the store down',
        'No clear path from browse to purchase',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'Custom Shopify Stores Built for Growth',
      items: [
        'Conversion-focused store design',
        'Mobile-optimized shopping experiences',
        'Clean product and collection pages',
        'Streamlined checkout and trust signals',
        'Apps and features chosen for performance',
      ],
    },
    snapCenter: {
      title: 'Store Performance Overview',
      rows: [
        { label: 'Total Sales', value: '$32,540', change: '+22%', trend: 'up' as const },
        { label: 'Conversion Rate', value: '1.21%', change: '-15%', trend: 'down' as const },
        { label: 'Avg. Order Value', value: '$68.40', change: '+8%', trend: 'up' as const },
        { label: 'Cart Abandonment', value: '71%', change: '+6%', trend: 'up' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: "What's Included in Our Shopify Development",
    deliverablesDetailed: [
      {
        title: 'Custom Shopify Design',
        description: 'A branded storefront designed to showcase products and guide shoppers toward checkout.',
        icon: 'tabler:palette',
      },
      {
        title: 'Theme Development',
        description: 'Custom theme work that improves layout, usability, and brand consistency across the store.',
        icon: 'tabler:code',
      },
      {
        title: 'Product Page Optimization',
        description: 'Clearer product pages with stronger visuals, copy, and trust elements that support conversions.',
        icon: 'tabler:shopping-bag',
      },
      {
        title: 'Mobile Optimization',
        description: 'A shopping experience built for phones, where most customers browse and buy.',
        icon: 'tabler:device-mobile',
      },
      {
        title: 'Checkout Improvements',
        description: 'Friction-reducing setup and recommendations that help more shoppers complete their purchase.',
        icon: 'tabler:credit-card',
      },
      {
        title: 'App Integrations',
        description: 'Carefully selected Shopify apps for reviews, upsells, email, and operations — without unnecessary bloat.',
        icon: 'tabler:apps',
      },
      {
        title: 'Speed & Performance',
        description: 'Store refinements that improve load times and keep shoppers moving through the funnel.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Launch & Growth Support',
        description: 'Help going live and continued support so your Shopify store can keep improving after launch.',
        icon: 'tabler:rocket',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'How We Build Shopify Stores That Sell',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Consult & Plan',
          phase: 'Consult & Plan',
          description: 'We review your products, brand, and goals to plan a Shopify store built for conversion.',
          icon: 'tabler:message-circle',
        },
        {
          step: '02',
          title: 'Design & Develop',
          phase: 'Design & Develop',
          description: 'We design the storefront and build a clean Shopify experience across collections and product pages.',
          icon: 'tabler:palette',
        },
        {
          step: '03',
          title: 'Test & Optimize',
          phase: 'Test & Optimize',
          description: 'We test mobile UX, checkout flow, and key conversion points before customers ever see the store.',
          icon: 'tabler:bug',
        },
        {
          step: '04',
          title: 'Launch Your Store',
          phase: 'Launch Your Store',
          description: 'We launch carefully so your products, payments, and store settings are ready for real orders.',
          icon: 'tabler:rocket',
        },
        {
          step: '05',
          title: 'Support & Grow',
          phase: 'Support & Grow',
          description: 'After launch, we can keep improving the store to support better sales and a smoother customer journey.',
          icon: 'tabler:trending-up',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Us',
    whyChooseTitle: 'Why Choose Local SEO Wiser for Shopify Development',
    whyChooseItems: [
      {
        title: 'Conversion Obsessed',
        description: 'We design stores to sell — with clearer paths from product discovery to checkout.',
        icon: 'tabler:target',
      },
      {
        title: 'Mobile Shopping First',
        description: 'Layouts and interactions are optimized for the way most customers actually shop today.',
        icon: 'tabler:device-mobile',
      },
      {
        title: 'Clean Store Builds',
        description: 'Themes and apps are chosen carefully so your store stays fast and manageable.',
        icon: 'tabler:code',
      },
      {
        title: 'Brand-Ready Design',
        description: 'Your storefront looks professional and trustworthy the moment a shopper lands on it.',
        icon: 'tabler:palette',
      },
      {
        title: 'Practical Growth Support',
        description: 'We can keep improving product pages, UX, and store performance after launch.',
        icon: 'tabler:trending-up',
      },
      {
        title: 'Clear Communication',
        description: 'You always know what is being built, tested, and improved throughout the project.',
        icon: 'tabler:message',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Shopify Development',
      items: [
        {
          question: 'Can you build a new Shopify store from scratch?',
          answer:
            'Yes. We can plan, design, and develop a complete Shopify storefront tailored to your products, brand, and sales goals.',
        },
        {
          question: 'Can you improve an existing Shopify store?',
          answer:
            'Absolutely. Many projects focus on redesigning product pages, improving mobile UX, cleaning up apps, and lifting conversion rate on an existing store.',
        },
        {
          question: 'Will my store work well on mobile?',
          answer:
            'Yes. Mobile optimization is a core part of our Shopify development process because so much browsing and buying happens on phones.',
        },
        {
          question: 'Do you help with apps and integrations?',
          answer:
            'Yes. We recommend and set up the apps your store actually needs for reviews, email, upsells, and operations — without slowing everything down.',
        },
        {
          question: 'Do you provide support after launch?',
          answer:
            'We can. Ongoing support helps you refine the store, improve conversion points, and keep the shopping experience strong as you grow.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Build a Shopify Store That Drives Results?',
      paragraphs: [
        'Get a free consultation and see how a custom, conversion-focused Shopify store can help you grow sales with a better shopping experience.',
      ],
      icon: 'tabler:brand-shopify',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'Custom Shopify design', icon: trustIcon },
        { label: 'Mobile optimized stores', icon: trustIcon },
        { label: 'Conversion-focused builds', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'link-building',
    variant: 'full' as const,
    category: 'Link Building Services in Pittsburgh',
    title: 'High-Quality Link Building That Boosts Rankings and Drives Real Results',
    metaTitle: 'Link Building Services Pittsburgh | White-Hat Backlinks',
    metaDescription:
      'High-quality white-hat link building in Pittsburgh that builds authority, improves organic rankings, and drives long-term sustainable search growth.',
    description:
      'We build authoritative, white-hat backlinks through manual outreach so your website earns trust, ranks higher, and attracts more qualified traffic.',
    intro:
      'We build authoritative, white-hat backlinks through manual outreach so your website earns trust, ranks higher, and attracts more qualified traffic.',
    icon: 'tabler:link',
    imageAlt: 'Link building dashboard showing referring domains and domain authority',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'Drives Real Results',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-link-building.png',
    heroImageDimensions: { width: 1412, height: 1011 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'High-Quality Backlinks', icon: trustIcon },
      { label: 'White-Hat Link Building', icon: trustIcon },
      { label: 'Manual Outreach', icon: trustIcon },
      { label: 'Safe & Google-Compliant', icon: trustIcon },
    ],
    leadForm: {
      title: 'Get More Authority. Rank Higher.',
      subtitle: 'Get a free link building strategy tailored to your business goals.',
      buttonLabel: 'Get Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'Low-Quality or No Backlinks Are Holding You Back',
      items: [
        'Weak domain authority that keeps pages from ranking',
        'Low-quality or spammy links that create risk',
        'Competitors earning stronger referring domains',
        'Little trust from Google and users',
        'Organic traffic stuck despite good content',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'Strategic Link Building That Builds Authority and Rankings',
      items: [
        'High-authority website placements',
        'Manual outreach for relevant opportunities',
        'Niche-relevant backlinks that support your topics',
        'Safe white-hat methods that protect your site',
        'Clear reporting on links earned and impact',
      ],
    },
    snapCenter: {
      title: 'Backlink Impact',
      rows: [
        { label: 'Organic Traffic', value: '+55%', change: '+55%', trend: 'up' as const },
        { label: 'Keyword Rankings', value: '+42%', change: '+42%', trend: 'up' as const },
        { label: 'Domain Authority', value: '+31%', change: '+31%', trend: 'up' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: 'Our Link Building Services Include',
    deliverablesDetailed: [
      {
        title: 'Guest Post Outreach',
        icon: 'tabler:article',
        description: 'Relevant guest post placements that earn editorial backlinks from trusted sites.',
      },
      {
        title: 'Niche Edits',
        icon: 'tabler:link',
        description: 'Contextual link insertions on existing pages that already rank and get traffic.',
      },
      {
        title: 'Broken Link Building',
        icon: 'tabler:unlink',
        description: 'We find broken opportunities and offer your content as a valuable replacement.',
      },
      {
        title: 'Directory Submissions',
        icon: 'tabler:directory',
        description: 'Selective directory placements where quality and relevance still support SEO.',
      },
      {
        title: 'HARO Link Building',
        icon: 'tabler:news',
        description: 'Expert commentary opportunities that can earn high-authority media links.',
      },
      {
        title: 'Resource Page Links',
        icon: 'tabler:bookmark',
        description: 'Outreach to resource pages where your content is a natural fit.',
      },
      {
        title: 'Competitor Backlink Analysis',
        icon: 'tabler:chart-arrows',
        description: 'We analyze competitor link profiles to uncover realistic opportunities for you.',
      },
      {
        title: 'Link Building Reports',
        icon: 'tabler:report-analytics',
        description: 'Clear reporting on acquired links, domains, and campaign progress.',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'Our Proven Link Building Process',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Research & Analysis',
          phase: 'Research & Analysis',
          description: 'We review your niche, competitors, and current link profile to find the best opportunities.',
          icon: 'tabler:search',
        },
        {
          step: '02',
          title: 'Outreach & Placement',
          phase: 'Outreach & Placement',
          description: 'We run manual outreach to secure relevant placements on quality websites.',
          icon: 'tabler:mail',
        },
        {
          step: '03',
          title: 'Content Creation',
          phase: 'Content Creation',
          description: 'We create or refine content that earns editorial links and supports your topics.',
          icon: 'tabler:pencil',
        },
        {
          step: '04',
          title: 'Monitoring & Tracking',
          phase: 'Monitoring & Tracking',
          description: 'We track acquired links, referring domains, and ranking movement over time.',
          icon: 'tabler:eye',
        },
        {
          step: '05',
          title: 'Reporting & Growth',
          phase: 'Reporting & Growth',
          description: 'You get clear reports and a plan to keep building authority month after month.',
          icon: 'tabler:chart-line',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Local SEO Wiser',
    whyChooseTitle: 'A Link Building Team You Can Trust',
    whyChooseItems: [
      {
        title: 'White-Hat Strategies',
        icon: 'tabler:medal',
        description: 'Safe methods designed to build authority without putting your site at risk.',
      },
      {
        title: 'High-Quality Links',
        icon: 'tabler:shield-check',
        description: 'We focus on relevance and trust—not cheap bulk link packages.',
      },
      {
        title: 'Manual Outreach',
        icon: 'tabler:users',
        description: 'Real outreach to real sites, not automated spam tactics.',
      },
      {
        title: 'Affordable Pricing',
        icon: 'tabler:coin',
        description: 'Practical link building for growing businesses that need quality over volume.',
      },
      {
        title: 'Proven Results',
        icon: 'tabler:chart-bar',
        description: 'Campaigns aimed at rankings, traffic, and long-term authority growth.',
      },
      {
        title: 'Dedicated Support',
        icon: 'tabler:headset',
        description: 'Clear communication and support throughout every campaign.',
      },
    ],
    faq: {
      eyebrow: 'Frequently Asked Questions',
      title: 'Link Building FAQs',
      items: [
        {
          question: 'How long does it take to see results from link building?',
          answer:
            'Link building is a compounding channel. Some ranking movement can appear within a few months, while stronger authority gains usually build over a longer campaign.',
        },
        {
          question: 'Are backlinks still safe for SEO?',
          answer:
            'Yes—when they are earned through white-hat methods. We avoid spammy networks and focus on relevant, editorial placements.',
        },
        {
          question: 'What makes a backlink high quality?',
          answer:
            'Relevance, trust, real traffic, and natural placement matter more than raw domain metrics alone. We prioritize links that support your topics and audience.',
        },
        {
          question: 'Do you guarantee a specific number of links?',
          answer:
            'We set realistic monthly targets based on niche difficulty, but we prioritize quality and relevance over forcing a fixed count.',
        },
        {
          question: 'Can link building help a new website?',
          answer:
            'Yes. New sites often need authority support. We build carefully so growth is sustainable and aligned with your content strategy.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Build Powerful Backlinks and Rank Higher?',
      paragraphs: [
        'Get a free consultation and see how white-hat link building can strengthen authority, rankings, and organic traffic.',
      ],
      icon: 'tabler:link',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'High-Quality Links', icon: trustIcon },
        { label: 'White-Hat Methods', icon: trustIcon },
        { label: 'Better Rankings', icon: trustIcon },
        { label: 'More Traffic', icon: trustIcon },
        { label: 'Long-Term Growth', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'local-business-citation',
    variant: 'full' as const,
    category: 'Local Citation Services in Pittsburgh',
    title: 'Accurate Local Citations That Improve Rankings, Build Trust & Drive More Customers',
    metaTitle: 'Local Citation Services Pittsburgh | NAP Consistency',
    metaDescription:
      'Local citation services in Pittsburgh that fix NAP consistency, clean up online listings, and improve local rankings, trust, and Google Maps visibility.',
    description:
      'We create, clean, and manage accurate business citations so your name, address, and phone number stay consistent across the directories that matter.',
    intro:
      'We create, clean, and manage accurate business citations so your name, address, and phone number stay consistent across the directories that matter.',
    icon: 'tabler:world',
    imageAlt: 'Local citation listings across Google, Bing, and Yelp',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'Drive More Customers',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-local-business-citation.png',
    heroImageDimensions: { width: 1416, height: 991 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'Accurate Business Listings', icon: trustIcon },
      { label: 'NAP Consistency', icon: trustIcon },
      { label: 'Top Directory Submissions', icon: trustIcon },
      { label: 'Duplicate Suppression', icon: trustIcon },
      { label: 'Citation Cleanup', icon: trustIcon },
      { label: 'Ongoing Monitoring', icon: trustIcon },
    ],
    leadForm: {
      title: 'Get More Local Visibility with Accurate Citations',
      subtitle: 'Get a free consultation and a citation plan tailored to your business.',
      buttonLabel: 'Get Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'Incorrect or Inconsistent Citations Hurt Your Local Rankings',
      items: [
        'Wrong or outdated name, address, or phone details',
        'Duplicate listings that confuse customers and Google',
        'Missing presence on important local directories',
        'Inconsistent data that weakens local trust signals',
        'Lost calls and visits from inaccurate listings',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'Local Citation Services That Strengthen Your Online Presence',
      items: [
        'Accurate NAP data across trusted directories',
        'Cleanup of outdated and duplicate listings',
        'Strategic submissions that support local SEO',
        'Ongoing monitoring to keep listings consistent',
        'Clear reporting on citation health and progress',
      ],
    },
    snapCenter: {
      title: 'Citation Impact',
      rows: [
        { label: 'Local Visibility', value: '-45%', change: '-45%', trend: 'down' as const },
        { label: 'Customer Trust', value: '-38%', change: '-38%', trend: 'down' as const },
        { label: 'Ranking Potential', value: '-42%', change: '-42%', trend: 'down' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: 'Our Local Citation Services Include',
    deliverablesDetailed: [
      {
        title: 'Citation Audit',
        icon: 'tabler:search',
        description: 'A full review of your current listings to find errors, gaps, and duplicates.',
      },
      {
        title: 'Directory Submissions',
        icon: 'tabler:plus',
        description: 'New listings on relevant, high-value directories that support local visibility.',
      },
      {
        title: 'NAP Consistency',
        icon: 'tabler:file-text',
        description: 'We align your name, address, and phone number across active profiles.',
      },
      {
        title: 'Duplicate Suppression',
        icon: 'tabler:trash',
        description: 'We identify and work to suppress duplicate listings that confuse search engines.',
      },
      {
        title: 'Citation Cleanup',
        icon: 'tabler:refresh',
        description: 'Cleanup of outdated details so customers find the right information every time.',
      },
      {
        title: 'Data Aggregator Sync',
        icon: 'tabler:chart-bar',
        description: 'Support for cleaner distribution of business data through major aggregators.',
      },
      {
        title: 'Ongoing Monitoring',
        icon: 'tabler:eye',
        description: 'Monitoring that helps catch new inconsistencies before they hurt rankings.',
      },
      {
        title: 'Detailed Reporting',
        icon: 'tabler:report-analytics',
        description: 'Clear reporting on citation work completed and listing health improvements.',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'A Simple Process for Stronger Local Presence',
      align: 'center' as const,
      steps: [
        {
          step: '01',
          title: 'Audit & Analyze',
          phase: 'Audit & Analyze',
          description: 'We audit your listings and map every inconsistency that needs fixing.',
          icon: 'tabler:search',
        },
        {
          step: '02',
          title: 'Create & Submit',
          phase: 'Create & Submit',
          description: 'We create and submit accurate listings on the directories that matter.',
          icon: 'tabler:clipboard-list',
        },
        {
          step: '03',
          title: 'Fix & Clean Up',
          phase: 'Fix & Clean Up',
          description: 'We correct errors, update outdated details, and clean up weak listings.',
          icon: 'tabler:circle-check',
        },
        {
          step: '04',
          title: 'Monitor & Update',
          phase: 'Monitor & Update',
          description: 'We monitor citation health and update listings as your business changes.',
          icon: 'tabler:refresh',
        },
        {
          step: '05',
          title: 'Report & Improve',
          phase: 'Report & Improve',
          description: 'You get clear reports and next steps to keep local presence strong.',
          icon: 'tabler:chart-bar',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Local SEO Wiser',
    whyChooseTitle: 'A Local Citation Team You Can Trust',
    whyChooseItems: [
      {
        title: 'Citation Experts',
        icon: 'tabler:certificate',
        description: 'A team experienced in local listings, NAP cleanup, and directory strategy.',
      },
      {
        title: '100% NAP Accuracy',
        icon: 'tabler:focus-2',
        description: 'We prioritize accurate business details across every active listing.',
      },
      {
        title: 'High-Authority Directories',
        icon: 'tabler:building',
        description: 'We focus on trusted directories that support local SEO—not random bulk lists.',
      },
      {
        title: 'Ongoing Management',
        icon: 'tabler:refresh',
        description: 'Listings stay consistent as your business information changes over time.',
      },
      {
        title: 'Affordable Pricing',
        icon: 'tabler:coin',
        description: 'Practical citation work sized for local and small-business budgets.',
      },
      {
        title: 'Dedicated Support',
        icon: 'tabler:headset',
        description: 'Clear communication and support throughout the citation cleanup process.',
      },
    ],
    faq: {
      eyebrow: 'Frequently Asked Questions',
      title: 'Local Citation Services FAQs',
      items: [
        {
          question: 'What are local citations?',
          answer:
            'Local citations are online mentions of your business name, address, and phone number on directories, apps, and data sources that help customers and search engines verify your business.',
        },
        {
          question: 'How long does it take to see results from citation work?',
          answer:
            'Cleanup and consistency improvements can begin quickly, while ranking impact usually builds over weeks to months as search engines reprocess listing data.',
        },
        {
          question: 'Do citations still matter for local SEO?',
          answer:
            'Yes. Accurate, consistent citations remain an important trust and local ranking signal, especially when paired with a strong Google Business Profile.',
        },
        {
          question: 'Can you fix duplicate listings?',
          answer:
            'Yes. We identify duplicates and work through suppression and cleanup so customers and Google see one clear version of your business.',
        },
        {
          question: 'Will you manage citations ongoing?',
          answer:
            'Yes. Ongoing monitoring helps catch new inconsistencies and keep your listings accurate as your business details change.',
        },
      ],
    },
    closingCta: {
      title: 'Improve Your Local Rankings with Accurate Citations',
      paragraphs: [
        'Get a free consultation and let our team clean up, build, and manage the citations that support better local visibility.',
      ],
      icon: 'tabler:map-pin',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'Better Rankings', icon: trustIcon },
        { label: 'More Visibility', icon: trustIcon },
        { label: 'More Customers', icon: trustIcon },
        { label: 'Stronger Trust', icon: trustIcon },
      ],
    },
  },
  {
    slug: 'landing-page-optimization',
    variant: 'full' as const,
    category: 'Landing Page Optimization in Pittsburgh',
    title: 'High-Converting Landing Pages That Generate More Leads & Sales',
    metaTitle: 'Landing Page Optimization Pittsburgh | Higher Conversions',
    metaDescription:
      'High-converting landing page optimization in Pittsburgh. Improve conversion rates, lower bounce rates, and turn more visitors into leads and sales.',
    description:
      'We design and optimize high-converting landing pages that turn more of your website visitors into qualified leads and paying customers.',
    intro:
      'We design and optimize high-converting landing pages that turn more of your website visitors into qualified leads and paying customers.',
    icon: 'tabler:layout',
    imageAlt: 'Landing page optimization shown on laptop and smartphone',
    heroLayout: 'snap' as const,
    heroTitleAccent: 'More Leads & Sales',
    hideStats: true,
    splitOutcomes: false,
    heroImage: '/snap-hero-landing-page-optimization.png',
    heroImageDimensions: { width: 1474, height: 901 },
    heroPrimaryCta: { label: 'Get My Free Consultation', href: '/contact' },
    heroSecondaryCta,
    heroTrustItems: [
      { label: 'Higher Conversion Rates', icon: trustIcon },
      { label: 'Data-Driven Optimization', icon: trustIcon },
      { label: 'Better User Experience', icon: trustIcon },
      { label: 'More Leads & Sales', icon: trustIcon },
    ],
    leadForm: {
      title: 'Ready to Increase Your Conversions?',
      subtitle: 'Get a free landing page analysis and see how we can improve your results.',
      buttonLabel: 'Get Free Consultation',
    },
    challenge: {
      eyebrow: 'The Problem',
      title: 'Poorly Optimized Landing Pages Cost You Customers',
      items: [
        'High bounce rates and low engagement',
        'Weak headlines that fail to grab attention',
        'Confusing layout and unclear CTAs',
        'Slow page speed and poor mobile experience',
        'No trust signals or conversion tracking',
      ],
    },
    idealFit: {
      eyebrow: 'Our Solution',
      title: 'Landing Page Optimization That Drives Conversions',
      items: [
        'Clear, benefit-focused messaging',
        'Conversion-focused design & layout',
        'Faster load times and mobile UX',
        'Trust-building social proof',
        'A/B testing and continuous improvement',
      ],
    },
    snapCenter: {
      title: 'Landing Page Impact',
      rows: [
        { label: 'Average Conversion Increase', value: '55%', change: '+55%', trend: 'up' as const },
        { label: 'Bounce Rate Decrease', value: '35%', change: '-35%', trend: 'down' as const },
        { label: 'Cost Per Lead Decrease', value: '40%', change: '-40%', trend: 'down' as const },
        { label: 'Lead Generation Increase', value: '70%', change: '+70%', trend: 'up' as const },
      ],
    },
    outcomes: emptyOutcomes,
    deliverables: [],
    benefits: [],
    deliverablesEyebrow: "What's Included",
    deliverablesTitle: 'Our Landing Page Optimization Services',
    deliverablesDetailed: [
      {
        title: 'Landing Page Audit',
        description: 'A full review of messaging, layout, speed, and conversion barriers holding your page back.',
        icon: 'tabler:search',
      },
      {
        title: 'A/B Testing',
        description: 'Structured tests on headlines, CTAs, and layouts so we improve based on real visitor behavior.',
        icon: 'tabler:arrows-exchange',
      },
      {
        title: 'Copy Optimization',
        description: 'Clear, persuasive copy that matches search intent and guides visitors toward taking action.',
        icon: 'tabler:pencil',
      },
      {
        title: 'Speed Optimization',
        description: 'Faster load times that reduce bounce rates and improve both UX and conversion performance.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Mobile Optimization',
        description: 'Responsive layouts and mobile UX improvements so phone visitors convert just as well as desktop.',
        icon: 'tabler:device-mobile',
      },
      {
        title: 'Trust & Credibility',
        description: 'Reviews, proof points, and trust elements that help visitors feel confident before they convert.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'Conversion Tracking',
        description: 'Proper tracking for form fills, calls, and sales so every improvement is measured accurately.',
        icon: 'tabler:chart-dots',
      },
      {
        title: 'Ongoing Optimization',
        description: 'Continuous refinements based on data so your landing pages keep improving over time.',
        icon: 'tabler:refresh',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'Our Landing Page Optimization Process',
      steps: [
        {
          step: '01',
          title: 'Audit & Analyze',
          phase: 'Audit & Analyze',
          icon: 'tabler:search',
          description: 'We review your current pages, traffic sources, and conversion bottlenecks.',
        },
        {
          step: '02',
          title: 'Strategy & Plan',
          phase: 'Strategy & Plan',
          icon: 'tabler:clipboard-list',
          description: 'We build a clear optimization plan focused on the highest-impact improvements.',
        },
        {
          step: '03',
          title: 'Implement Changes',
          phase: 'Implement Changes',
          icon: 'tabler:code',
          description: 'We update copy, design, speed, and UX elements that drive better conversions.',
        },
        {
          step: '04',
          title: 'Test & Measure',
          phase: 'Test & Measure',
          icon: 'tabler:chart-bar',
          description: 'We track results and run tests to confirm what actually improves performance.',
        },
        {
          step: '05',
          title: 'Optimize & Improve',
          phase: 'Optimize & Improve',
          icon: 'tabler:trending-up',
          description: 'We refine underperforming elements and push winners even further.',
        },
        {
          step: '06',
          title: 'Grow & Scale',
          phase: 'Grow & Scale',
          icon: 'tabler:rocket',
          description: 'We scale the winning approach across more pages, offers, and campaigns.',
        },
      ],
    },
    whyChooseEyebrow: 'Why Choose Local SEO Wiser',
    whyChooseTitle: 'A Landing Page Optimization Team You Can Trust',
    whyChooseItems: [
      {
        title: 'Conversion Experts',
        icon: 'tabler:target',
        description: 'Specialists focused on turning traffic into measurable leads and sales.',
      },
      {
        title: 'Data-Driven Approach',
        icon: 'tabler:chart-dots',
        description: 'Every change is guided by analytics, testing, and real user behavior.',
      },
      {
        title: 'Higher ROI',
        icon: 'tabler:coin',
        description: 'Better conversion rates mean more results from the traffic you already have.',
      },
      {
        title: 'Transparent Reporting',
        icon: 'tabler:report-analytics',
        description: 'Clear reporting that shows what changed and how performance improved.',
      },
      {
        title: 'Dedicated Support',
        icon: 'tabler:headset',
        description: 'Direct communication and support throughout the optimization process.',
      },
      {
        title: 'Proven Results',
        icon: 'tabler:trophy',
        description: 'A track record of improving conversion rates for local and growing businesses.',
      },
    ],
    faq: {
      eyebrow: 'Frequently Asked Questions',
      title: 'Landing Page Optimization FAQs',
      items: [
        {
          question: 'What is landing page optimization?',
          answer:
            'Landing page optimization is the process of improving a page’s messaging, design, speed, and trust signals so more visitors take the action you want—like calling, booking, or submitting a form.',
        },
        {
          question: 'How long does it take to see results?',
          answer:
            'Some improvements can show impact within a few weeks, while stronger gains usually build over 30–90 days as testing and refinements continue.',
        },
        {
          question: 'Do you optimize pages for Google Ads and SEO traffic?',
          answer:
            'Yes. We optimize landing pages for both paid and organic traffic so your message matches the search intent that brought the visitor there.',
        },
        {
          question: 'Can you optimize WordPress or Shopify pages?',
          answer:
            'Yes. We optimize landing pages across WordPress, Shopify, and custom websites without needing a full redesign in most cases.',
        },
        {
          question: 'Will you set up conversion tracking?',
          answer:
            'Yes. Proper tracking is part of the process so we can measure form fills, calls, and sales and keep improving what works.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to Turn More Visitors Into Customers?',
      paragraphs: [
        'Get a free consultation and let our team optimize your landing pages for higher conversions, more leads, and stronger ROI.',
      ],
      icon: 'tabler:rocket',
      primaryButton: { label: 'Get My Free Consultation', href: '/contact' },
      secondaryButton: heroSecondaryCta,
      trustItems: [
        { label: 'Higher Conversions', icon: trustIcon },
        { label: 'More Leads', icon: trustIcon },
        { label: 'Better UX', icon: trustIcon },
        { label: 'Stronger ROI', icon: trustIcon },
      ],
    },
  },
] as const
