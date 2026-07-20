const sharedHeroBadges = ['Pittsburgh-based team', 'Lead-focused reporting', 'Nationwide clients']

export const defaultServiceStats = [
  {
    resultLabel: 'Result 01',
    value: '18+',
    label: 'Markets tracked on geo-grid maps',
    countEnd: 18,
    countSuffix: '+',
  },
  {
    resultLabel: 'Result 02',
    value: '858K',
    label: 'Impressions improved in active campaigns',
    countEnd: 858,
    countSuffix: 'K',
  },
  {
    resultLabel: 'Result 03',
    value: '1.66K',
    label: 'Organic clicks in latest 6-month window',
    countEnd: 1.66,
    countSuffix: 'K',
    countDecimals: 2,
  },
  {
    resultLabel: 'Result 04',
    value: '50',
    label: 'Peak monthly phone calls from local search',
    countEnd: 50,
  },
]

const sharedChallengeFootnote =
  'Based in Pittsburgh, Pennsylvania, we turn local search intent into measurable leads, not vanity metrics.'

const sharedWhyChoose = [
  'Pittsburgh-based team with nationwide campaign experience',
  'Clear reporting tied to calls, clicks, and qualified leads',
  'Strategy-first execution without overpromising rankings',
  'Dedicated support from audit through ongoing optimization',
]

const sharedExploreCta = {
  text: 'Serving Pittsburgh, PA & nationwide clients. Browse our full service lineup.',
  buttonLabel: 'All Services',
  buttonHref: '/services',
}

export const seoServicePages = [
  {
    slug: 'local-seo',
    variant: 'full',
    category: 'Search Engine Optimization',
    title: 'Local SEO Services in Pittsburgh',
    metaTitle: 'Local SEO Services Pittsburgh | More Calls & Local Leads',
    metaDescription:
      'Increase your visibility with Local SEO Services in Pittsburgh. Rank higher in Google Maps, attract local customers, and grow your business with Local SEO Wiser.',
    description:
      'Local SEO services that turn Pittsburgh searches into customers — Map Pack visibility, citations, location content, and reporting tied to real leads.',
    intro:
      'Local SEO services that turn Pittsburgh searches into customers — Map Pack visibility, citations, location content, and reporting tied to real leads.',
    icon: 'tabler:map-pin',
    imageAlt: 'Local SEO service',
    heroLayout: 'centered',
    hideStats: true,
    heroParagraphs: [
      '93% of local customers check Google before they call, visit, or buy. If your business isn\'t showing up in the Map Pack, local organic results, or Google\'s AI Overviews — your competitors are getting the calls that should be yours.',
      'We build local SEO systems that put your business in front of ready-to-buy customers exactly when they\'re searching.',
    ],
    heroPrimaryCta: { label: 'Get My Free Pittsburgh Visibility Scan', href: '/contact' },
    heroSecondaryCta: { label: 'Or call us → +1 412 663 7288', href: 'tel:+14126637288' },
    heroTrustItems: [
      { label: 'No long contracts', icon: 'tabler:lock-open' },
      { label: 'Real Pittsburgh team', icon: 'tabler:map-pin' },
      { label: 'Free scan, no obligation', icon: 'tabler:clipboard-check' },
    ],
    challenge: {
      eyebrow: 'The Problem',
      title: 'The problem most local businesses face',
      paragraphs: [
        'You\'ve got a great Pittsburgh business. Real reviews, real customers, real results. But online, you\'re invisible next to competitors with weaker service and worse reviews — just because their SEO is dialed in and yours isn\'t.',
        'Pittsburgh isn\'t one market — it\'s dozens. Someone searching in Shadyside gets different results than someone in the North Shore or Cranberry. Most agencies treat the whole metro the same way. We don\'t — we build your strategy around how each Pittsburgh neighborhood actually searches: Shadyside, Lawrenceville, Oakland, the Strip District, Mt. Lebanon, Cranberry, Monroeville, Robinson Township, the North and South Hills, and beyond.',
      ],
    },
    idealFit: {
      eyebrow: 'Common Signs',
      title: 'It\'s costing you money if...',
      items: [
        'Your Google Business Profile hasn\'t been touched in months (or ever)',
        'You rank for your business name, but not for what customers actually search',
        'Competitors show up in the Map Pack, and you don\'t — even in your own neighborhood',
        'Your website has zero location-specific content for the areas you actually serve',
        'Reviews are trickling in randomly instead of being part of a system',
      ],
    },
    idealFitClosing:
      'None of this is permanent. It\'s fixable — with the right strategy, applied consistently.',
    splitOutcomes: true,
    outcomes: {
      eyebrow: 'What You Gain',
      title: 'Local SEO built for how Pittsburgh actually searches',
      intro:
        'Map Pack visibility, neighborhood-level content, and reporting tied to calls and leads — not vanity metrics.',
      layout: 'features',
      items: [],
      cards: [
        {
          title: 'Map Pack Visibility',
          icon: 'tabler:map-pin',
          paragraphs: [
            'Show up where ready-to-buy customers decide — Google Maps, local pack results, and the listings that drive calls before anyone visits a website.',
          ],
          takeaway: 'Be the business customers see first.',
        },
        {
          title: 'Neighborhood-Level Strategy',
          icon: 'tabler:map-search',
          paragraphs: [
            'Shadyside, Lawrenceville, Cranberry, Mt. Lebanon, and every market in between get their own search strategy — not one generic Pittsburgh campaign.',
          ],
          takeaway: 'Rank where your customers actually are.',
        },
        {
          title: 'Leads You Can Measure',
          icon: 'tabler:chart-bar',
          paragraphs: [
            'Monthly reporting on ranking movement, calls, form fills, and map views — so you always know what your SEO investment is producing.',
          ],
          takeaway: 'Results tied to revenue, not rankings alone.',
        },
      ],
    },
    deliverables: [],
    deliverablesEyebrow: 'What\'s Included',
    deliverablesTitle: 'What\'s included in our local SEO service',
    deliverablesIntro:
      'A complete local SEO system — from your Google Business Profile to citations, content, links, and reporting.',
    deliverablesDetailed: [
      {
        title: 'Google Business Profile Optimization',
        description:
          'Full GBP audit and rebuild — categories, service areas, attributes, photos, Q&A, posts, and a review-generation system that runs on autopilot. This is the single highest-leverage asset in local SEO, and most businesses use less than half of it.',
        icon: 'tabler:brand-google',
      },
      {
        title: 'Citation Building & NAP Cleanup',
        description:
          'We find every place your business is listed online, fix inconsistent name/address/phone info, and build new citations on the directories that actually move rankings — not spam lists that hurt you.',
        icon: 'tabler:world',
      },
      {
        title: 'Location & Service Page Content',
        description:
          'If you serve multiple Pittsburgh neighborhoods or suburbs, you need dedicated pages for each — written for real search intent, not stuffed with keywords. We build these to convert, not just rank.',
        icon: 'tabler:layout',
      },
      {
        title: 'On-Page & Technical SEO',
        description:
          'Site speed, schema markup (LocalBusiness, Service, Review), mobile experience, internal linking, and metadata — all tuned so Google and AI search understand exactly who you are and where you operate.',
        icon: 'tabler:code',
      },
      {
        title: 'Review Strategy',
        description:
          'A simple, ethical system to get more reviews from real customers, respond to all of them professionally, and turn your reputation into a ranking advantage.',
        icon: 'tabler:star',
      },
      {
        title: 'Local Link Building',
        description:
          'Outreach to local publications, associations, chambers of commerce, and industry-relevant sites to build the kind of authority that compounds over time.',
        icon: 'tabler:link',
      },
      {
        title: 'Reporting You Can Actually Read',
        description:
          'Monthly reports tied to what matters: ranking movement, calls, form fills, and map views — not vanity metrics.',
        icon: 'tabler:report-analytics',
      },
    ],
    benefits: [],
    process: {
      eyebrow: 'How We Work',
      title: 'How we build your local SEO system',
      align: 'center',
      subtitle:
        'From audit and foundation through build, optimization, and compounding growth — with clear priorities at every stage.',
      steps: [
        {
          step: '01',
          title: 'Audit & Foundation',
          phase: 'Weeks 1–2',
          paragraphs: [
            'Full technical and GBP audit, competitor gap analysis, and a keyword + area map built specifically for your market and service radius.',
          ],
        },
        {
          step: '02',
          title: 'Build & Optimize',
          phase: 'Weeks 3–8',
          paragraphs: [
            'GBP overhaul goes live, citations get cleaned and built, location pages get written and published, and your review system activates. This is usually when the first ranking movement shows up.',
          ],
        },
        {
          step: '03',
          title: 'Grow & Compound',
          phase: 'Ongoing',
          paragraphs: [
            'Link building, content expansion, and continuous optimization. Local SEO is an asset, not an ad you switch off — the longer it runs, the more it compounds.',
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
          'Month-to-month engagement. You stay because the leads are coming in — not because an agreement traps you.',
      },
      {
        title: 'Transparent pricing',
        icon: 'tabler:receipt',
        description:
          'Most Pittsburgh agencies hide their pricing. We don\'t — you\'ll know what your plan includes and what it costs before you commit.',
      },
      {
        title: 'Pittsburgh neighborhood strategy',
        icon: 'tabler:map-search',
        description:
          'We build around how each neighborhood actually searches — Shadyside, Lawrenceville, Cranberry, Mt. Lebanon, and the full metro — not one generic city campaign.',
      },
      {
        title: 'Reporting tied to leads',
        icon: 'tabler:chart-bar',
        description:
          'Calls, form fills, map views, and ranking movement — not vanity metrics that look good in a deck but don\'t pay bills.',
      },
      {
        title: 'Websites built in when needed',
        icon: 'tabler:code',
        description:
          'If your site itself is holding you back, we can rebuild it with local SEO built in from day one — not bolted on after launch.',
      },
    ],
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Local SEO',
      subtitle:
        'Transparent pricing — most Pittsburgh agencies hide theirs. Foundational plans for single-location businesses start at $150–$300/mo; Growth plans for established SMBs run $750–$2,500/mo; Aggressive/Multi-Location programs for competitive categories run $1,500–$5,000/mo. Exact pricing depends on your industry and goals — book a free call for a quote.',
      items: [
        {
          question: 'How long until I see results?',
          answer:
            'Most Pittsburgh businesses see measurable improvement in 60–90 days, with stronger results building over 4–6 months. Competitive categories (legal, medical, home services) take longer — we set realistic timelines based on your market.',
        },
        {
          question: 'How competitive is local SEO in Pittsburgh?',
          answer:
            'Very. With 2.4 million people in the metro, you\'re often up against dozens of established businesses for the top 3 Map Pack spots. The upside: many of them have weak local SEO, so there\'s real room to win if you invest strategically.',
        },
        {
          question: 'Do you work with businesses in the Pittsburgh suburbs?',
          answer:
            'Yes — the entire metro: Cranberry, Mt. Lebanon, Monroeville, Robinson, the North and South Hills, and everywhere between.',
        },
        {
          question: 'Is local SEO worth it compared to paid ads?',
          answer:
            'Ads stop the moment you stop paying. Local SEO keeps working in the background, compounding month over month. Most of our clients run both — but local SEO is what keeps paying off long-term.',
        },
        {
          question: 'What makes you different from other agencies?',
          answer:
            'No long contracts, transparent pricing, and reporting tied to actual leads — not just keyword rankings that don\'t translate into revenue.',
        },
        {
          question: 'Do you build websites too?',
          answer:
            'Yes — if your site itself is holding you back, we can rebuild it with local SEO built in from day one, not bolted on after.',
        },
      ],
    },
    closingCta: {
      title: 'Ready to show up where it counts in Pittsburgh?',
      paragraphs: [
        'Get a free, no-obligation visibility scan and see exactly where you\'re losing customers to competitors — and what it takes to fix it.',
      ],
      pickLabel: 'Get started',
      primaryButton: {
        label: 'Get My Free Pittsburgh Visibility Scan',
        href: '/contact',
        description: 'No spam. No obligation. Just an honest read on your local visibility.',
      },
      secondaryButton: {
        label: 'Call +1 412 663 7288',
        href: 'tel:+14126637288',
        description: 'Mon–Fri, 9 AM–5 PM',
      },
    },
  },
  {
    slug: 'google-map-optimization',
    variant: 'full',
    category: 'Search Engine Optimization',
    title: 'Google Map Optimization in Pittsburgh',
    metaTitle: 'Google Map Optimization Pittsburgh | Rank Higher on Maps',
    metaDescription:
      'Improve your Google Maps rankings with professional Google Map Optimization in Pittsburgh. Get found by nearby customers and generate more local leads.',
    description: 'Profile work Pittsburgh businesses can count on for real map pack visibility.',
    intro:
      'Local SEO Wiser optimizes your Google Business Profile to win map pack visibility, drive calls, and convert searchers in Pittsburgh and beyond. Get a free profile audit.',
    heroParagraphs: [
      'Google map optimization is the process of refining your Google Business Profile (GBP) so it ranks higher in the local map pack and converts more searchers into calls, direction requests, and customers. It covers category selection, service alignment, business description, photos, posts, Q&A, review management, and ongoing profile activity, the signals Google uses to decide which three businesses appear in front of buyers ready to act.',
      'Three spots. That is all the Google Map Pack gives you. Every day, businesses with stronger reputations, better reviews, and longer track records lose those spots to competitors who simply did the profile work. At Local SEO Wiser, we do that work, from category selection and service alignment to photo strategy, post cadence, and ongoing profile health, so your business shows up where buyers are already looking.',
    ],
    icon: 'tabler:brand-google',
    imageAlt: 'Google Map Optimization service',
    heroBadges: sharedHeroBadges,
    heroLayout: 'centered',
    hideStats: true,
    heroPrimaryCta: { label: 'Get My Free Profile Audit', href: '/contact' },
    heroSecondaryCta: { label: 'Explore Services', href: '/services' },
    heroTrustItems: [
      { label: 'Pittsburgh-based team', icon: 'tabler:map-pin' },
      { label: 'Lead-focused reporting', icon: 'tabler:target' },
      { label: 'Nationwide clients', icon: 'tabler:world' },
    ],
    challenge: {
      eyebrow: 'Why This Service Matters',
      title: 'A Half-Built Profile Costs You More Than You Realize',
      paragraphs: [
        'Google treats your Business Profile as a primary local relevance signal. When fields are missing, categories are too broad, or the profile sits untouched for months, Google has less reason to surface you in the top three. That gap gets filled by a competitor who did the work.',
        'The issue is not effort. Most owners set up their profile once and move on. They do not know which signals move map pack rankings and which ones are noise. That knowledge gap is exactly where Local SEO Wiser comes in.',
        'Neighborhoods like Squirrel Hill, the South Side, and the North Shore generate consistent near-me search traffic every day in Pittsburgh. An unoptimized profile in those areas means missed calls, not occasionally, but daily. The same dynamic plays out in every market we serve.',
      ],
    },
    challengeImage: '/googlemap1.png',
    challengeImageDimensions: { width: 512, height: 512 },
    idealFit: {
      eyebrow: 'Who It Is For',
      title: 'This Service Fits If You Are:',
      items: [
        'A business that runs most leads through Google Maps but has never done a structured profile audit',
        'Running outdated categories that do not reflect how customers actually search for your services',
        'Sitting in positions four through seven in the local pack and cannot break into the top three despite strong reviews',
        'Losing map pack clicks to competitors with weaker reputations because their profile structure is tighter than yours',
        'A business with a static profile, no recent posts, and photos that have not been updated in months',
        'A multi-location brand needing consistent optimization across every storefront or service area',
      ],
    },
    idealFitImage: '/googlemap2.png',
    idealFitImageDimensions: { width: 630, height: 419 },
    splitOutcomes: true,
    outcomes: {
      eyebrow: 'What You Gain',
      title: 'What Local SEO Wiser Delivers Through Google Map Optimization',
      paragraphs: [
        'Stronger relevance signals through category and service alignment. Category selection tells Google which searches your business should compete for. Most profiles use categories that are either too broad or incomplete. We restructure yours based on what buyers in your market are actually searching, not what seemed logical at setup.',
        'Higher click-through from map results. A tight business description, active photo library, and current offers give customers a reason to choose your listing over the two beside it. When ratings are similar, presentation decides the click.',
        'Trust through consistent profile activity. Google surfaces businesses that behave like active, customer-facing operations. Regular posts, answered Q&A, and fresh media all feed that signal. A dormant profile signals uncertainty, and uncertainty drives customers toward whoever looks more present.',
        'Clear visibility into what is driving leads. We track calls, direction requests, website clicks, and photo views at the profile level every month. You see which actions the profile generates, not just where it ranks.',
      ],
      items: [],
    },
    deliverables: [],
    deliverablesEyebrow: 'Deliverables',
    deliverablesTitle: 'What Is Included',
    deliverablesDetailed: [
      {
        title: 'Category and service attribute optimization',
        description:
          'We audit your primary and secondary categories against real search queries your customers use, then restructure them to maximize relevance. Service attributes are aligned to what you actually offer, not left at whatever defaults were selected at setup.',
      },
      {
        title: 'Business description rewrite',
        description:
          'Your description is what customers read before they decide whether to call. We rewrite it to communicate what you do, where you serve, and why your business is the right choice, without filler phrases that pad word count and say nothing.',
      },
      {
        title: 'Photo and post strategy with publishing cadence',
        description:
          'Google measures profile activity. A consistent schedule for posts and fresh photos signals an active business and supports ranking. We build a publishing plan around your services and service area, then manage execution.',
      },
      {
        title: 'Q&A and messaging setup',
        description:
          'We populate your Q&A section with the questions customers ask before calling, answered in a way that handles real objections. Messaging setup removes friction so customers can reach you directly through the profile.',
      },
      {
        title: 'Geo-grid rank tracking',
        description:
          'Most agencies show you one ranking position. We map your visibility across a geo-grid covering your entire service area, so you see exactly where you rank strong and where map pack gaps still exist.',
      },
      {
        title: 'Monthly performance tracking',
        description:
          'Every month you get a report covering calls, clicks, direction requests, and photo views pulled from your actual profile data. You always know what is working, what changed, and what comes next.',
      },
    ],
    benefits: [],
    process: {
      eyebrow: 'Our Process',
      title: 'How Local SEO Wiser Delivers Google Map Optimization',
      steps: [
        {
          step: '01',
          title: 'Profile Audit',
          phase: 'Step 01',
          description:
            'We review your existing Google Business Profile field by field and compare it against the top three competitors ranking in your market. Every gap, outdated field, and missed signal is documented before anything is changed.',
        },
        {
          step: '02',
          title: 'Category and Entity Refinement',
          phase: 'Step 02',
          description:
            'We restructure your primary and secondary categories, clean up your service list, and align your profile entity signals with the specific service types and neighborhoods you want to rank for.',
        },
        {
          step: '03',
          title: 'Content and Media Rollout',
          phase: 'Step 03',
          description:
            'We rewrite all profile text sections, build an initial photo set, and launch your post schedule. Posts are written to match seasonal service demand and local search intent, not recycled generic templates.',
        },
        {
          step: '04',
          title: 'Review and Q&A Framework',
          phase: 'Step 04',
          description:
            'We respond to existing reviews, build out the Q&A section, and set up a review generation workflow suited to how your business operates. Reputation signals are treated as a ranking factor, not an afterthought.',
        },
      ],
    },
    hideWhyChoose: true,
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Google Map Optimization',
      items: [
        {
          question: 'How much does Google Business Profile optimization cost?',
          answer:
            'It depends on whether you need a one-time profile overhaul or ongoing management. A standalone optimization, including category restructuring, description rewrite, Q&A buildout, and initial photo and post setup, is typically a one-time project. Ongoing map optimization with monthly posts, review responses, and performance tracking is a monthly engagement. Your audit comes with a clear scope and price before any work begins, never a surprise invoice.',
        },
        {
          question: 'How often should a business update its Google Business Profile?',
          answer:
            'At minimum, fresh photos monthly and new posts at least once a week. Q&A responses should go up within 48 hours. Reviews should get a reply within a few days of being posted. Profiles that go weeks without activity lose the freshness signals Google uses to assess whether a business is operational.',
        },
        {
          question: 'Can map optimization drive results without a website redesign?',
          answer:
            'Yes. Profile optimization directly generates calls, direction requests, and website clicks from buyers who never make it past Google search results. A strong website improves conversion once someone clicks through, but the profile can perform as a standalone lead source before any website changes are made.',
        },
        {
          question: 'What does Local SEO Wiser actually change in my profile?',
          answer:
            'We rewrite your business description, restructure categories, add missing service attributes, build out Q&A, establish a photo and post cadence, and implement review response workflows. After that we monitor monthly and adjust based on what the data shows is working in your market.',
        },
        {
          question: 'How long before map pack position improves?',
          answer:
            'Profile engagement metrics like clicks and direction requests typically show improvement four to six weeks after structured optimizations are in place. Map pack position movement in competitive industries takes three to five months because Google needs to observe sustained signals before adjusting rankings.',
        },
        {
          question: 'Will I lose access to my profile if I stop working with you?',
          answer:
            'No. Your Google Business Profile always belongs to you. We work as a manager on your profile, never the owner. You keep every change we implement if the engagement ends.',
        },
        {
          question: 'Does my business need to be in Pittsburgh to work with Local SEO Wiser?',
          answer:
            'No. The team is based in Pittsburgh and knows the market well, but we run Google map optimization campaigns for businesses across the United States and internationally. The profile signals and frameworks we use apply regardless of location.',
        },
      ],
    },
    closingCta: {
      title: 'Your Competitors Are Working Their Profiles. Are You?',
      paragraphs: [
        'The businesses holding the top three map pack spots in your market are not there by accident. They have cleaner categories, more consistent activity, and tighter profile structure. Local SEO Wiser gives you the same foundation, built around your service area and the neighborhoods that matter most to your business.',
      ],
      bullets: [
        'A full Google Business Profile audit comparing your listing against your top three map pack competitors',
        'Category, service, and entity alignment based on how local buyers actually search',
        'A clear action plan so you know exactly what gets fixed and in what order',
      ],
      pickLabel: 'Pick your next move',
      primaryButton: {
        label: 'Get My Free Profile Audit',
        href: '/contact',
        description: 'Talk to a Local SEO Wiser map optimization specialist',
      },
      secondaryButton: {
        label: 'Explore Services',
        href: '/services',
        description: 'Compare our services and see what fits your business',
      },
    },
  },
  {
    slug: 'seo-for-small-business',
    variant: 'full',
    pageLayout: 'small-business',
    category: 'Search Engine Optimization',
    title: 'SEO For Small Business',
    metaTitle: 'SEO for Small Businesses Pittsburgh | Affordable SEO Services',
    metaDescription:
      'Affordable SEO for small businesses in Pittsburgh. Increase visibility, generate more qualified leads, and grow your business with Local SEO Wiser.',
    description:
      'SEO for small business is the process of improving your website, Google Business Profile, and local citations so nearby customers find you when they search for what you sell.',
    intro:
      'Local SEO Wiser delivers practical SEO for small businesses: GBP optimization, citations, content, and lead-focused reporting. Pittsburgh-based, serving clients nationwide. Get a free audit.',
    heroParagraphs: [
      'SEO for small business is the process of improving your website, Google Business Profile, and local citations so nearby customers find you when they search for what you sell. At Local SEO Wiser, we build small business SEO programs around what actually moves the needle for small teams: high-intent local keywords, a fully optimized Google Business Profile, consistent citations, conversion-focused service pages, and simple monthly reporting tied to calls and leads, not vanity metrics. Based in Pittsburgh, Pennsylvania, we work with owner-operated and small-team businesses nationwide, without enterprise complexity or bloated retainers.',
    ],
    icon: 'tabler:building-store',
    imageAlt: 'SEO For Small Business service',
    heroLayout: 'split',
    hideStats: true,
    heroImage: '/small.png',
    heroImageDimensions: { width: 768, height: 617 },
    challenge: {
      eyebrow: 'The Problem With Generic SEO',
      title: 'Why Small Businesses Lose Money on Generic SEO',
      paragraphs: [
        'Most small businesses do not fail at SEO because they picked the wrong keywords. They fail because they bought the wrong-sized program. Big-agency SEO packages are built for companies with content teams, developer support, and five-figure budgets. A small business gets the same 40-point checklist, half of it never gets implemented, and six months later the only thing that grew was the invoice.',
      ],
      callout:
        'Here is what that looks like in practice: blog posts nobody searches for, backlinks from irrelevant directories, reports full of impressions and "visibility scores" while the phone stays quiet. Your budget gets spent proving activity instead of producing customers.',
      playbook: {
        eyebrow: 'A Different Playbook',
        title: 'Small business SEO needs a different playbook. Fewer priorities, executed properly.',
        cards: [
          {
            title: 'Local keywords',
            description: 'That match real buyer intent.',
            icon: 'tabler:map-pin',
          },
          {
            title: 'Google Business Profile',
            description: 'That competes in the map pack.',
            icon: 'tabler:building-store',
          },
          {
            title: 'Service pages',
            description: 'That convert visitors into calls.',
            icon: 'tabler:device-mobile',
          },
        ],
        closing: 'That is the program we run.',
      },
    },
    deliverables: [],
    deliverablesTitle: 'What Our Small Business SEO Services Include',
    deliverablesIntro:
      'Every Local SEO Wiser program is built from the deliverables that produce measurable local growth:',
    deliverablesDetailed: [
      {
        title: 'Small Business SEO Audit and Opportunity Map',
        description:
          'We start by auditing your website, Google Business Profile, citations, reviews, and competitors. You get a clear opportunity map showing exactly where you can win in your market, prioritized by impact.',
      },
      {
        title: 'Local Keyword Research Built for Your Market',
        description:
          'We identify the high-intent keywords your customers actually use, including near-me searches, service-plus-city terms, and the question-based searches that AI tools and Google both surface. No guesswork, no keyword stuffing.',
      },
      {
        title: 'Google Business Profile Optimization',
        description:
          'Your GBP is often your first impression and your biggest local ranking asset. We optimize categories, services, photos, posts, and Q&A so you compete for map pack visibility where buying decisions happen.',
      },
      {
        title: 'Citation Building and NAP Consistency',
        description:
          'We build and clean up your business listings across trusted directories so your name, address, and phone number match everywhere. Consistent citations build the trust signals Google needs to rank you locally.',
      },
      {
        title: 'On-Page SEO for Key Service Pages',
        description:
          'We optimize titles, headings, content, internal links, and schema markup on the pages that actually drive revenue. Every page targets a real search intent, written for humans first and structured for search engines and LLMs.',
      },
      {
        title: 'Review and Reputation Workflow',
        description:
          'We set up a simple, repeatable process for earning reviews and responding to them, because review velocity and quality directly influence both rankings and conversions.',
      },
      {
        title: 'Monthly Reporting Tied to Leads',
        description:
          'One clear report. Calls, clicks, direction requests, form fills, and what we are doing next month. If a metric does not connect to revenue, we do not waste your time with it.',
      },
    ],
    idealFit: {
      eyebrow: 'Who This Is For',
      title: 'Who This Service Is Built For',
      itemIcons: ['tabler:tool', 'tabler:rocket', 'tabler:building', 'tabler:list-check'],
      items: [
        'An owner-operated or small-team local business (contractors, clinics, law firms, salons, repair services, restaurants, and other service-area or storefront businesses)',
        'A company launching your first serious SEO program and tired of conflicting advice',
        'A brand that tried a big agency and got reports instead of results',
        'A business that needs clear monthly priorities, not jargon and 60-page PDFs',
      ],
    },
    idealFitIntro: 'Our small business SEO programs fit best if you are:',
    idealFitClosing:
      'If you have a marketing department of one (usually the owner), this program was designed for you.',
    whyChooseSection: {
      title: 'Why Choose Local SEO Wiser Over Other SEO Companies',
      intro:
        'There are thousands of SEO agencies for small businesses. Here is what makes our approach different:',
      items: [
        {
          title: 'Strategy sized for small teams',
          description:
            'We never hand you a plan you cannot execute. Every recommendation matches your capacity, budget, and market size.',
        },
        {
          title: 'Lead-focused reporting',
          description:
            'We measure calls, qualified leads, and map pack visibility on geo-grid tracking, not vanity metrics. You always know what your investment is producing.',
        },
        {
          title: 'No bloated retainers, no lock-in',
          description:
            'Transparent scope, clear deliverables, and pricing built for small business budgets. You keep every piece of work we implement.',
        },
        {
          title: 'Pittsburgh-based, nationwide experience',
          description:
            'Our team works from Pittsburgh, Pennsylvania and runs campaigns for service businesses across the US. Local market understanding with proven multi-market execution.',
        },
        {
          title: 'Honest expectations',
          description:
            'We will never promise #1 rankings in 30 days. We will show you a realistic path to more calls and more customers, then execute it month after month.',
        },
      ],
      image: '/small2.png',
      imageDimensions: { width: 770, height: 412 },
    },
    process: {
      eyebrow: '',
      title: 'Our 4-Step Small Business SEO Process',
      steps: [
        {
          step: '01',
          title: 'Keyword Focus',
          phase: 'Step 1',
          description:
            'We identify your highest-intent local keywords, the searches that come from people ready to call, book, or buy in your service area.',
        },
        {
          step: '02',
          title: 'Foundation Fixes',
          phase: 'Step 2',
          description:
            'We fix the foundational issues first: Google Business Profile gaps, citation inconsistencies, technical SEO problems, and weak service pages. Most small businesses see early movement from this stage alone.',
        },
        {
          step: '03',
          title: 'Content Rollout',
          phase: 'Step 3',
          description:
            'We publish and optimize location-focused content that targets your market, builds topical authority, and earns visibility in both Google results and AI-generated answers.',
        },
        {
          step: '04',
          title: 'Lead Measurement',
          phase: 'Step 4',
          description:
            'We track calls, clicks, and conversions, then refine the strategy every month based on what is actually generating leads. SEO is iterative, and our reporting keeps it honest.',
        },
      ],
    },
    processImage: '/small3.png',
    processImageDimensions: { width: 775, height: 380 },
    contentBlocks: [
      {
        title: 'How Much Does SEO Cost for a Small Business?',
        layout: 'ledger',
        highlightPhrase: 'a few hundred to a few thousand dollars per month',
        paragraphs: [
          'Most small businesses should expect to invest a few hundred to a few thousand dollars per month depending on market competitiveness, service area size, and how fast they want to grow. As a rule of thumb: a single-location business in a moderately competitive market needs less than a multi-location brand fighting in a major metro.',
          'What matters more than the number is what the budget buys. Ask any agency, including us, three questions:',
          'If the answers are vague, walk away. Our packages page breaks down exactly what each tier includes, and your audit comes with a recommendation matched to your actual market, not an upsell script.',
        ],
        questions: [
          'What tasks are completed each month?',
          'Who does the work?',
          'How is performance reported?',
        ],
        bgLight: true,
      },
      {
        title: 'SEO Results Small Businesses Can Expect',
        paragraphs: [
          'SEO is a compounding investment, not a light switch. Here is a realistic timeline based on our campaign data:',
          'Every market is different, and we will give you an honest assessment of yours during the audit, including how long competitive terms will realistically take.',
        ],
        timeline: [
          {
            period: 'Months 1 to 2',
            description:
              'Foundation fixes go live. GBP optimization and citation cleanup often produce early map pack movement.',
          },
          {
            period: 'Months 3 to 4',
            description:
              'Optimized service pages start ranking for long-tail and service-plus-city keywords. Calls and direction requests begin trending up.',
          },
          {
            period: 'Months 5 to 6',
            description:
              'Compounding growth. Content rollout expands keyword coverage, reviews build trust signals, and organic leads become a consistent channel.',
          },
        ],
        image: '/small4.png',
        imageDimensions: { width: 562, height: 721 },
        imagePosition: 'left',
      },
    ],
    benefits: [],
    hideWhyChoose: true,
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Is SEO worth it for a small business?',
          answer:
            'Yes. Local search drives some of the highest-intent traffic available: people actively looking for your service in your area, ready to call or visit. Unlike paid ads, SEO results compound over time, so the leads you earn in month six keep coming without paying per click. For service-area and storefront businesses, it is usually the highest-ROI marketing channel available.',
        },
        {
          question: 'How much does small business SEO cost per month?',
          answer:
            'Most small business SEO programs range from a few hundred to a few thousand dollars per month, depending on your market and goals. We publish our packages openly and recommend a tier based on your audit, never on a sales quota.',
        },
        {
          question: 'How long does SEO take to work for a small business?',
          answer:
            'Early improvements like map pack movement often appear within the first 1 to 2 months from foundation fixes. Meaningful lead growth typically builds over 3 to 6 months as content, citations, and reviews compound. Any agency promising page-one rankings in weeks is selling you something other than SEO.',
        },
        {
          question: 'Do I need a big website to start SEO?',
          answer:
            'No. We focus on core service pages, Google Business Profile optimization, and citations first, then expand content as results build. Many of our clients started with a 5-page website.',
        },
        {
          question: 'What is the difference between local SEO and small business SEO?',
          answer:
            'Local SEO is the set of tactics that improve visibility in location-based searches: map pack, citations, GBP, and localized content. Small business SEO is a program scope: local SEO tactics plus on-page optimization, content strategy, and reporting, all sized for small-team capacity and budget. For most small businesses, local SEO is the core of the program.',
        },
        {
          question: 'Can I do SEO myself instead of hiring an agency?',
          answer:
            'You can, and we encourage owners to handle what they have time for, like asking customers for reviews. The challenge is consistency and expertise: keyword research, technical fixes, schema markup, and citation management take time and tooling most owners do not have. An agency makes sense when your time is worth more running the business than learning SEO.',
        },
        {
          question: 'Does SEO still matter with AI search like ChatGPT and Google AI Overviews?',
          answer:
            'More than ever. AI tools pull answers from well-structured, trustworthy, entity-rich pages, the same qualities good SEO builds. We structure every page with clear answers, schema markup, and factual depth so your business is positioned to be cited in AI-generated results, not just ranked in traditional ones.',
        },
        {
          question: 'Do you only work with businesses in Pittsburgh?',
          answer:
            'No. We are based in Pittsburgh, Pennsylvania, but we run small business SEO campaigns for clients across the United States and internationally. Local SEO execution is market-specific, not location-bound, and our geo-grid tracking works in any market.',
        },
      ],
    },
    closingCta: {
      title: 'Get Your Free Small Business SEO Audit',
      paragraphs: [
        'Stop guessing where your marketing budget goes. Get a clear opportunity map of your market, your competitors, and the exact priorities that will grow your calls and leads.',
        'Contact Local SEO Wiser today for a free audit and an honest conversation about what SEO can realistically do for your business.',
      ],
      primaryButton: {
        label: 'Get My Free Audit',
        href: '/contact',
      },
    },
  },
  {
    slug: 'local-business-citation',
    variant: 'full',
    category: 'Search Engine Optimization',
    title: 'Local Business Citation',
    metaTitle: 'Local Business Citation Services Pittsburgh | Local SEO Wiser',
    metaDescription:
      'Build consistent local business citations to improve trust, strengthen local SEO, and increase visibility across Google and business directories.',
    description:
      'Strengthen local trust signals with consistent, accurate, and strategically selected citation placements across trusted directories.',
    intro:
      'Strengthen local trust signals with consistent, accurate, and strategically selected citation placements across trusted directories.',
    icon: 'tabler:world',
    imageAlt: 'Local Business Citation service',
    heroBadges: sharedHeroBadges,
    stats: defaultServiceStats,
    challenge: {
      eyebrow: 'The challenge',
      title: 'Why this service matters',
      text: 'Inconsistent name, address, and phone data across directories erodes trust and can suppress map rankings in competitive local markets.',
      footnote: sharedChallengeFootnote,
    },
    idealFit: {
      eyebrow: "Who it's for",
      title: 'Ideal fit',
      items: [
        'Businesses with outdated or duplicate listings',
        'Brands expanding into new cities or locations',
        'Teams preparing for a local SEO or rebrand push',
      ],
    },
    outcomes: {
      eyebrow: 'Outcomes',
      title: 'What you gain',
      intro: 'Real business outcomes from local business citation, built for local buyers and measurable lead growth.',
      items: [
        'Improved listing consistency across platforms and aggregators',
        'Reduced confusion for search engines and customers',
        'Greater local authority through trusted source coverage',
        'Better support for map and organic local rankings',
      ],
    },
    deliverables: [
      'NAP consistency audit and correction map',
      'Citation cleanup across existing directory profiles',
      'New listing placements on trusted and relevant sources',
      'Duplicate suppression and verification workflow',
      'Citation health reporting by location',
    ],
    benefits: [],
    process: {
      eyebrow: 'Our process',
      title: 'How we deliver local business citation',
      subtitle: 'A clear, repeatable framework from audit to ongoing optimization.',
      steps: [
        { step: '01', title: 'NAP audit', phase: 'Step 1', description: 'Audit all active listings and identify inconsistencies' },
        { step: '02', title: 'Data cleanup', phase: 'Step 2', description: 'Correct critical NAP and business data discrepancies' },
        { step: '03', title: 'Quality expansion', phase: 'Step 3', description: 'Expand into relevant, quality directories by vertical and region' },
        { step: '04', title: 'Ongoing monitoring', phase: 'Step 4', description: 'Monitor and maintain listing quality over time' },
      ],
    },
    whyChoose: sharedWhyChoose,
    faq: {
      eyebrow: 'FAQ',
      title: 'Common questions',
      subtitle: 'Answers about local business citation for local businesses.',
      items: [
        {
          question: 'How many citations does my business need?',
          answer: 'We prioritize authoritative, relevant directories and consistency rather than chasing bulk listing volume.',
        },
        {
          question: 'Do citations still matter in 2026?',
          answer:
            'Yes. Consistent NAP data across trusted directories remains a core local ranking and trust signal for map and organic visibility.',
        },
      ],
    },
    exploreCta: sharedExploreCta,
  },
  {
    slug: 'landing-page-optimization',
    variant: 'full',
    category: 'Search Engine Optimization',
    title: 'Landing Page Optimization',
    metaTitle: 'Landing Page Optimization Pittsburgh | Higher Conversion Pages',
    metaDescription:
      'Improve your landing pages with conversion-focused design, faster loading, stronger SEO, and better user experience for higher lead generation.',
    description:
      'Improve conversion rates on local landing pages with clearer messaging, stronger trust signals, and SEO-aligned page structure.',
    intro:
      'Improve conversion rates on local landing pages with clearer messaging, stronger trust signals, and SEO-aligned page structure.',
    icon: 'tabler:layout',
    imageAlt: 'Landing Page Optimization service',
    heroBadges: sharedHeroBadges,
    stats: defaultServiceStats,
    challenge: {
      eyebrow: 'The challenge',
      title: 'Why this service matters',
      text: 'Traffic without conversions usually means the page message, offer, or trust signals do not match what searchers expect when they land.',
      footnote: sharedChallengeFootnote,
    },
    idealFit: {
      eyebrow: "Who it's for",
      title: 'Ideal fit',
      items: [
        'Businesses running Google Ads to local pages',
        'Sites with traffic but weak form fill or call rates',
        'Teams launching new service or city landing pages',
      ],
    },
    outcomes: {
      eyebrow: 'Outcomes',
      title: 'What you gain',
      intro: 'Real business outcomes from landing page optimization, built for local buyers and measurable lead growth.',
      items: [
        'Higher conversion from local ad and organic traffic',
        'Better alignment between search intent and page content',
        'Stronger trust through social proof and clear CTAs',
        'Improved page speed and mobile usability',
      ],
    },
    deliverables: [
      'Landing page audit for SEO and conversion gaps',
      'Headline, offer, and CTA restructuring',
      'Schema and on-page SEO enhancements',
      'Form and call-tracking integration review',
      'A/B test recommendations and iteration plan',
    ],
    benefits: [],
    process: {
      eyebrow: 'Our process',
      title: 'How we deliver landing page optimization',
      subtitle: 'A clear, repeatable framework from audit to ongoing optimization.',
      steps: [
        { step: '01', title: 'Conversion audit', phase: 'Step 1', description: 'Review traffic sources and conversion bottlenecks' },
        { step: '02', title: 'Message rewrite', phase: 'Step 2', description: 'Rewrite page sections for clarity and local relevance' },
        { step: '03', title: 'Technical polish', phase: 'Step 3', description: 'Implement technical and on-page SEO improvements' },
        { step: '04', title: 'Performance testing', phase: 'Step 4', description: 'Track form fills, calls, and engagement metrics' },
      ],
    },
    whyChoose: sharedWhyChoose,
    faq: {
      eyebrow: 'FAQ',
      title: 'Common questions',
      subtitle: 'Answers about landing page optimization for local businesses.',
      items: [
        {
          question: 'Should every city have its own landing page?',
          answer: 'Only where you genuinely serve that market with unique content. We avoid thin duplicate location pages.',
        },
        {
          question: 'Can you optimize pages built in WordPress or Shopify?',
          answer: 'Yes. We optimize landing pages across WordPress, Shopify, and custom builds without requiring a full redesign.',
        },
      ],
    },
    exploreCta: sharedExploreCta,
  },
  {
    slug: 'technical-seo',
    variant: 'full',
    category: 'Search Engine Optimization',
    title: 'Technical SEO Services in Pittsburgh',
    metaTitle: 'Technical SEO Services Pittsburgh | Fix & Improve Rankings',
    metaDescription:
      'Fix crawl errors, improve site speed, optimize schema, and strengthen your website with Technical SEO Services in Pittsburgh.',
    description: 'Fixing the hidden issues that quietly kill your local rankings.',
    intro:
      'Crawl errors, slow load times, and missing schema quietly block local rankings. Local SEO Wiser fixes the technical foundation your Pittsburgh SEO strategy depends on.',
    heroParagraphs: [
      'Technical SEO is the process of fixing how your website is crawled, indexed, and understood by search engines. It covers site speed, Core Web Vitals, schema markup, internal linking, canonical tags, and crawl errors, the invisible layer that decides whether Google can find your pages, trust them, and rank them. At Local SEO Wiser, we audit, prioritize, and fix these issues for Pittsburgh businesses so every other part of your SEO finally performs at full potential.',
      'A business can have solid content, an optimized Google Business Profile, and strong reviews, and still not rank where it should. The reason is usually the website itself. Slow load times, crawl errors, missing schema, and duplicate content are invisible to visitors but clearly visible to Google on every crawl.',
    ],
    icon: 'tabler:tool',
    imageAlt: 'Technical SEO service',
    heroBadges: sharedHeroBadges,
    heroLayout: 'centered',
    hideStats: true,
    heroPrimaryCta: { label: 'Get My Free Technical SEO Audit', href: '/contact' },
    heroSecondaryCta: { label: 'Explore Services', href: '/services' },
    heroTrustItems: [
      { label: 'Pittsburgh-based team', icon: 'tabler:map-pin' },
      { label: 'Lead-focused reporting', icon: 'tabler:target' },
      { label: 'Nationwide clients', icon: 'tabler:world' },
    ],
    challenge: {
      eyebrow: 'Why This Service Matters',
      title: 'A Broken Foundation Limits Everything Built on Top of It',
      paragraphs: [
        'Most small business websites were built to look good and load, not to perform in search. Developers focused on design and function rarely configure crawl efficiency, Core Web Vitals, schema markup, or internal linking structure. Those gaps do not show up when you load the homepage. But Google sees all of them on every crawl.',
        'A site that takes more than three seconds to load on mobile loses searchers before they read a single line. A site with duplicate content across service or location pages causes Google to split ranking signals instead of concentrating them. Missing schema means Google cannot confidently interpret who the business is, where it operates, or what it offers.',
        'These are not rare edge cases. They show up consistently across the Pittsburgh service business websites we audit, from home services and healthcare to legal and restaurants. And they silently cap what local SEO can achieve as long as they stay unresolved.',
      ],
    },
    challengeImage: '/tech1.png',
    challengeImageDimensions: { width: 786, height: 651 },
    idealFit: {
      eyebrow: 'Who It Is For',
      title: 'This Service Fits If You Are:',
      items: [
        'A business with slow mobile load times or failing Core Web Vitals in Google Search Console',
        'Noticing pages that should rank for local service queries but stay unindexed or inconsistently crawled',
        'A site that was recently migrated, redesigned, or rebuilt without any SEO migration plan',
        'Running multiple location or service pages with suspected content duplication splitting ranking authority',
        'Missing local business schema or service schema across your key pages',
        'Wanting to understand what Google actually sees when it crawls your site, not just what it looks like in a browser',
      ],
    },
    idealFitImage: '/tech2.png',
    idealFitImageDimensions: { width: 731, height: 678 },
    splitOutcomes: true,
    outcomes: {
      eyebrow: 'What You Gain',
      title: 'What Local SEO Wiser Delivers Through Technical SEO',
      paragraphs: [
        'Cleaner crawl paths for Googlebot. When Google can crawl your site without hitting dead ends, redirect chains, or blocked resources, it indexes your pages more reliably and picks up content changes faster after you make them.',
        'Faster pages that keep visitors on the site. Core Web Vitals performance is a confirmed ranking factor and a direct signal of user experience quality. Local customers on mobile expect fast pages. A site that meets that expectation keeps visitors long enough to convert.',
        'Stronger structured data for local entities. Schema markup tells Google exactly what your business is, what it offers, and where it operates. That clarity supports richer search results and improves how your business appears across Google\'s local surfaces, including AI Overviews and the map pack.',
        'Fewer indexation and duplicate content issues. Canonical tags, clean redirects, and proper URL architecture stop Google from splitting signals across multiple versions of the same page. Consolidating that authority keeps ranking power where it belongs.',
      ],
      items: [],
    },
    deliverables: [],
    deliverablesEyebrow: 'Deliverables',
    deliverablesTitle: 'What Is Included',
    deliverablesDetailed: [
      {
        title: 'Full technical audit with a prioritized fix list',
        description:
          'We crawl your entire website and produce a structured report that documents every issue found, ordered by ranking impact. You know exactly what to fix first, what can wait, and why the sequence matters.',
      },
      {
        title: 'Core Web Vitals and mobile usability review',
        description:
          'We assess Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint across your key service pages, then identify the specific files, scripts, or rendering issues causing failures. Mobile usability is reviewed against live Search Console data.',
      },
      {
        title: 'Schema markup for local business and services',
        description:
          'We implement LocalBusiness schema, Service schema, and where applicable FAQ schema across your pages. Every schema block is validated in Google\'s Rich Results Test before it goes live.',
      },
      {
        title: 'Internal linking and canonical recommendations',
        description:
          'We map your current internal link structure, identify orphaned pages, consolidate duplicate content with canonical tags, and build an internal linking plan that distributes authority efficiently across your location and service pages.',
      },
      {
        title: 'Post-fix validation and ongoing monitoring',
        description:
          'After implementing fixes, we validate changes against Search Console data and re-crawl the site to confirm resolution. Ongoing monitoring catches new issues before they compound.',
      },
      {
        title: 'XML sitemap and robots.txt optimization',
        description:
          'We review and optimize your XML sitemap and robots.txt file to ensure search engines can efficiently crawl and index your website. We remove crawl blockers, improve indexation signals, and verify that important pages are discoverable while unnecessary URLs are excluded.',
        icon: 'lucide:file-search',
      },
    ],
    benefits: [],
    process: {
      eyebrow: 'Our Process',
      title: 'How Local SEO Wiser Delivers Technical SEO',
      steps: [
        {
          step: '01',
          title: 'Technical Audit',
          phase: 'Step 01',
          description:
            'We run a full crawl of your website and cross-reference findings with your Google Search Console coverage report, Core Web Vitals data, and manual inspection of key pages. Every issue is logged by severity and ranking impact.',
        },
        {
          step: '02',
          title: 'Critical Fixes First',
          phase: 'Step 02',
          description:
            'We address the highest-priority crawl, indexation, and speed issues before anything else. This typically includes redirect chain resolution, blocked resource fixes, mobile usability corrections, and Core Web Vitals improvements on your top landing pages.',
        },
        {
          step: '03',
          title: 'Schema and Internal Linking',
          phase: 'Step 03',
          description:
            'Once critical fixes are live, we deploy structured data across service and location pages and build an internal linking plan that concentrates authority toward the pages most important for your local rankings.',
        },
        {
          step: '04',
          title: 'Validation and Monitoring',
          phase: 'Step 04',
          description:
            'Every fix is confirmed in Search Console and re-crawl data. Ongoing monitoring is set up so your site maintains technical health as content is added and the site evolves over time.',
        },
      ],
    },
    hideWhyChoose: true,
    faq: {
      eyebrow: 'FAQ',
      title: 'Common Questions About Technical SEO',
      items: [
        {
          question: 'Do small business websites actually need technical SEO?',
          answer:
            'Yes, and often more urgently than larger sites. Small business websites are frequently built on themes or templates without any SEO configuration, which means slow mobile load times, missing schema, uncrawlable pages, and duplicate content are common from day one. These issues do not need to be severe to limit rankings. Even minor speed problems or missing structured data create friction that compounds across the whole campaign.',
        },
        {
          question: 'How much does technical SEO cost?',
          answer:
            'It depends on the size of your site and the depth of the issues found. A one-time technical audit with a prioritized fix list costs less than an ongoing program that includes implementation, validation, and monitoring. Most Pittsburgh small businesses fall into a modest one-time or short-term project range rather than a heavy monthly retainer, and your audit comes with a clear scope and price before any work begins.',
        },
        {
          question: 'Will Local SEO Wiser implement fixes or only provide recommendations?',
          answer:
            'We implement prioritized fixes directly when CMS or hosting access is available. For clients on WordPress this includes plugin configuration, image optimization, schema deployment, redirect management, and internal linking updates. For fixes that need developer involvement, we provide detailed implementation documentation and can coordinate directly with your developer.',
        },
        {
          question: 'How do I know if my site has technical SEO problems?',
          answer:
            'Common signs are pages that do not appear in Google results despite being published, slow load times on mobile, a Search Console Coverage report with a high number of excluded or errored pages, and rankings that plateau despite consistent content and profile work. A technical audit identifies exactly what is holding performance back.',
        },
        {
          question: 'What are Core Web Vitals and why do they matter for rankings?',
          answer:
            'Core Web Vitals are Google\'s metrics for load speed, visual stability, and interactivity. Google uses them as a ranking signal in both organic and local search. Customers searching from mobile expect fast, stable pages. Sites that fail Core Web Vitals thresholds carry a consistent disadvantage against competitors with a cleaner technical foundation.',
        },
        {
          question: 'How long before technical SEO improvements show in rankings?',
          answer:
            'Simple fixes like eliminating redirect chains or resolving index coverage errors can show in Search Console within two to four weeks once Googlebot recrawls the affected pages. Core Web Vitals and schema improvements typically reflect in performance data within six to eight weeks. More complex issues like site architecture restructuring take longer to stabilize, but directional improvement is usually visible within the first 60 days.',
        },
      ],
    },
    closingCta: {
      title: 'Your Competitors\' Sites Are Faster. Google Notices.',
      paragraphs: [
        'The Pittsburgh businesses outranking you are not always producing better content. Many of them simply run on a cleaner technical foundation: faster pages, valid schema, and crawl paths Google can move through without friction. That advantage is invisible in a browser but decisive in rankings, and it is completely fixable.',
      ],
      bullets: [
        'A full technical audit of your site with every issue ranked by impact',
        'Core Web Vitals, schema, and indexation reviewed against live Search Console data',
        'A clear fix sequence so you know exactly what gets resolved and in what order',
      ],
      pickLabel: 'Pick your next move',
      primaryButton: {
        label: 'Get My Free Technical SEO Audit',
        href: '/contact',
        description: 'Talk to a Local SEO Wiser technical SEO specialist',
      },
      secondaryButton: {
        label: 'Explore Services',
        href: '/services',
        description: 'Compare our services and see what fits your business',
      },
    },
  },
]
