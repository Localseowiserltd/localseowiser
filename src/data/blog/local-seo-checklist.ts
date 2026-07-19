import type { ArticleBlock, BlogPost } from '@/types/blog'
import { blogEditorialAuthor } from './author'

/**
 * Published article — Local SEO Checklist
 * Public route: /blog/local-seo-checklist
 */
const localSeoChecklistContent: ArticleBlock[] = [
  {
    type: 'heading',
    level: 2,
    text: 'Introduction',
    id: 'introduction',
  },
  {
    type: 'paragraph',
    text: "Local SEO isn't something you complete once and forget. Businesses need to regularly review their online presence to ensure customers and search engines can easily find accurate, up-to-date information.",
  },
  {
    type: 'paragraph',
    text: 'A structured checklist makes this process easier by breaking [Local SEO](/blog/what-is-local-seo) into manageable tasks. Instead of guessing what to improve next, businesses can work through each area methodically and build a stronger foundation for [long-term visibility](/blog/how-to-rank-higher-on-google-maps).',
  },
  {
    type: 'paragraph',
    text: "In this guide, we'll cover a practical Local SEO checklist that includes [Google Business Profile optimization](/blog/google-business-profile-optimization), website improvements, customer reviews, citations, technical SEO, content, and ongoing maintenance.",
  },
  {
    type: 'heading',
    level: 2,
    text: 'Why Use a Local SEO Checklist?',
    id: 'why-use-a-local-seo-checklist',
  },
  {
    type: 'paragraph',
    text: "A checklist helps ensure that important tasks aren't overlooked.",
  },
  {
    type: 'paragraph',
    text: 'Local SEO involves many different [signals that work together](/blog/how-does-local-seo-work), including:',
  },
  {
    type: 'list',
    items: [
      'Business information',
      'Website quality',
      'Reviews',
      'Content',
      'Technical SEO',
      'Citations',
      'Local authority',
    ],
  },
  {
    type: 'paragraph',
    text: 'Reviewing these areas regularly can help businesses maintain a consistent and trustworthy online presence.',
  },
  {
    type: 'image',
    src: '/images/blog/local-seo-checklist-overview.webp',
    alt: 'Illustration showing a complete Local SEO checklist for businesses',
    caption:
      'A structured checklist helps businesses improve every important area of Local SEO.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Google Business Profile Checklist',
    id: 'google-business-profile-checklist',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Verify your Business Profile',
    id: 'verify-your-business-profile',
  },
  {
    type: 'paragraph',
    text: 'Ensure your [Business Profile](/google-map-optimization) has been verified and accurately represents your business.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Choose the correct primary category',
    id: 'choose-the-correct-primary-category',
  },
  {
    type: 'paragraph',
    text: 'Select the category that best describes your main service.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Add relevant secondary categories',
    id: 'add-relevant-secondary-categories',
  },
  {
    type: 'paragraph',
    text: 'Use secondary categories only where they accurately describe additional services.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Complete every profile section',
    id: 'complete-every-profile-section',
  },
  {
    type: 'paragraph',
    text: 'Include:',
  },
  {
    type: 'list',
    items: [
      'Business description',
      'Services',
      'Opening hours',
      'Website',
      'Phone number',
      'Address or service area',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Upload quality photos',
    id: 'upload-quality-photos',
  },
  {
    type: 'paragraph',
    text: 'Use genuine photos of your business, team, services, or completed work.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Keep business hours updated',
    id: 'keep-business-hours-updated',
  },
  {
    type: 'paragraph',
    text: 'Update holiday hours and schedule changes whenever necessary.',
  },
  {
    type: 'image',
    src: '/images/blog/google-business-profile-checklist.webp',
    alt: 'Illustration showing a Google Business Profile optimization checklist',
    caption: 'Keeping your Business Profile complete and accurate supports local visibility.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Website Checklist',
    id: 'website-checklist',
  },
  {
    type: 'paragraph',
    text: 'Review your website regularly.',
  },
  {
    type: 'paragraph',
    text: 'Important areas include:',
  },
  {
    type: 'list',
    items: [
      'Mobile-friendly design',
      'Fast loading pages',
      'Secure HTTPS',
      'Clear navigation',
      '[Contact page](/contact)',
      'About page',
      'Service pages',
      '[Location pages](/landing-page-optimization)',
      'Internal links',
      'Clear calls to action',
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'On-Page SEO Checklist',
    id: 'on-page-seo-checklist',
  },
  {
    type: 'paragraph',
    text: 'Review every important page for:',
  },
  {
    type: 'list',
    items: [
      'Page title',
      'Meta description',
      'Heading structure',
      'Keyword placement',
      'Image alt text',
      'Internal linking',
      'Readability',
    ],
  },
  {
    type: 'paragraph',
    text: 'Write for people first while making it easy for search engines to understand the page.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Customer Reviews Checklist',
    id: 'customer-reviews-checklist',
  },
  {
    type: 'paragraph',
    text: 'Customer reviews help potential customers evaluate your business while providing additional trust signals.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Ask for genuine reviews',
    id: 'ask-for-genuine-reviews',
  },
  {
    type: 'paragraph',
    text: 'Request reviews from real customers after completing a service or project.',
  },
  {
    type: 'paragraph',
    text: 'Never purchase reviews or offer incentives that violate platform guidelines.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Respond to every review',
    id: 'respond-to-every-review',
  },
  {
    type: 'paragraph',
    text: 'Reply professionally to both positive and negative reviews.',
  },
  {
    type: 'paragraph',
    text: 'A thoughtful response demonstrates that your business values customer feedback.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Monitor review quality',
    id: 'monitor-review-quality',
  },
  {
    type: 'paragraph',
    text: 'Review your feedback regularly and identify recurring customer concerns that could improve your business.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Local Citations Checklist',
    id: 'local-citations-checklist',
  },
  {
    type: 'paragraph',
    text: 'Business information should remain consistent everywhere it appears online.',
  },
  {
    type: 'paragraph',
    text: 'Review:',
  },
  {
    type: 'list',
    items: [
      'Business name',
      'Address',
      'Phone number',
      'Website',
      'Business hours',
    ],
  },
  {
    type: 'paragraph',
    text: 'Check major business directories, industry directories, local organisations and chamber of commerce listings.',
  },
  {
    type: 'paragraph',
    text: 'Remove duplicate listings whenever possible.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Local Content Checklist',
    id: 'local-content-checklist',
  },
  {
    type: 'paragraph',
    text: 'Publish helpful content that answers customer questions.',
  },
  {
    type: 'paragraph',
    text: 'Examples include:',
  },
  {
    type: 'list',
    items: [
      'Service guides',
      'Location pages',
      'Frequently asked questions',
      'Educational articles',
      'Industry resources',
    ],
  },
  {
    type: 'paragraph',
    text: 'Focus on usefulness rather than publishing content only to target keywords.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Technical SEO Checklist',
    id: 'technical-seo-checklist',
  },
  {
    type: 'paragraph',
    text: "Regularly review your website's [technical health](/technical-seo).",
  },
  {
    type: 'paragraph',
    text: 'Important items include:',
  },
  {
    type: 'list',
    items: [
      'HTTPS enabled',
      'XML Sitemap',
      'Robots.txt',
      'Mobile responsiveness',
      'Core Web Vitals',
      'Structured data',
      'Broken links',
      'Canonical URLs',
      'Image optimisation',
    ],
  },
  {
    type: 'paragraph',
    text: 'Fix technical issues before they affect visitors.',
  },
  {
    type: 'image',
    src: '/images/blog/technical-local-seo-checklist.webp',
    alt: 'Illustration showing the technical SEO tasks included in a Local SEO checklist',
    caption:
      'Technical improvements help search engines crawl and understand your website more efficiently.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Backlink Checklist',
    id: 'backlink-checklist',
  },
  {
    type: 'paragraph',
    text: 'Earn links naturally from reputable websites.',
  },
  {
    type: 'paragraph',
    text: 'Potential opportunities include:',
  },
  {
    type: 'list',
    items: [
      'Local news',
      'Community organisations',
      'Business associations',
      'Industry websites',
      'Sponsorships',
      'Partnerships',
    ],
  },
  {
    type: 'paragraph',
    text: 'Avoid buying backlinks or participating in link schemes.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Performance Tracking Checklist',
    id: 'performance-tracking-checklist',
  },
  {
    type: 'paragraph',
    text: 'Review your Local SEO progress regularly.',
  },
  {
    type: 'paragraph',
    text: 'Track:',
  },
  {
    type: 'list',
    items: [
      'Website traffic',
      'Phone calls',
      'Contact form enquiries',
      'Direction requests',
      'Google Business Profile interactions',
      'Keyword trends',
      'Customer enquiries',
    ],
  },
  {
    type: 'paragraph',
    text: 'Measure meaningful business outcomes rather than focusing only on [rankings](/blog/local-seo-ranking-factors).',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Monthly Local SEO Maintenance Checklist',
    id: 'monthly-local-seo-maintenance-checklist',
  },
  {
    type: 'paragraph',
    text: 'Complete these tasks each month:',
  },
  {
    type: 'list',
    items: [
      'Review Google Business Profile',
      'Update business hours if needed',
      'Upload new photos',
      'Respond to new reviews',
      'Check citation consistency',
      'Publish fresh content',
      'Review website performance',
      'Fix technical issues',
      'Check internal links',
      'Monitor competitor activity',
    ],
  },
  {
    type: 'paragraph',
    text: 'Regular maintenance helps keep your online presence accurate and useful.',
  },
  {
    type: 'image',
    src: '/images/blog/local-seo-maintenance-workflow.webp',
    alt: 'Illustration showing the ongoing Local SEO maintenance process',
    caption:
      'Local SEO is an ongoing process that benefits from regular reviews and continuous improvements.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Complete 25-Step Local SEO Checklist',
    id: 'complete-25-step-local-seo-checklist',
  },
  {
    type: 'paragraph',
    text: 'Use this checklist as a recurring reference.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Google Business Profile',
    id: 'complete-checklist-google-business-profile',
  },
  {
    type: 'list',
    items: [
      'Verify your profile',
      'Choose the correct primary category',
      'Add relevant secondary categories',
      'Complete every profile section',
      'Upload high-quality photos',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Website',
    id: 'complete-checklist-website',
  },
  {
    type: 'list',
    items: [
      'Improve page speed',
      'Ensure mobile friendliness',
      'Create service pages',
      'Create location pages',
      'Add clear contact information',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'On-Page SEO',
    id: 'complete-checklist-on-page-seo',
  },
  {
    type: 'list',
    items: [
      'Optimize page titles',
      'Improve meta descriptions',
      'Use descriptive headings',
      'Add image alt text',
      'Strengthen internal linking',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Authority',
    id: 'complete-checklist-authority',
  },
  {
    type: 'list',
    items: [
      'Collect genuine customer reviews',
      'Respond to every review',
      'Build accurate citations',
      'Earn quality backlinks',
      'Publish helpful local content',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Technical SEO',
    id: 'complete-checklist-technical-seo',
  },
  {
    type: 'list',
    items: [
      'Maintain HTTPS',
      'Review structured data',
      'Update XML Sitemap',
      'Fix broken links',
      'Monitor website performance',
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'Common Local SEO Mistakes',
    id: 'common-local-seo-mistakes',
  },
  {
    type: 'paragraph',
    text: 'Businesses often reduce their visibility by making avoidable mistakes.',
  },
  {
    type: 'paragraph',
    text: 'Common issues include:',
  },
  {
    type: 'list',
    items: [
      'Incomplete Business Profiles',
      'Inconsistent contact information',
      'Ignoring customer reviews',
      'Duplicate business listings',
      'Thin website content',
      'Slow mobile pages',
      'Missing location pages',
      'Poor internal linking',
      'Outdated business information',
      'Neglecting technical SEO',
    ],
  },
  {
    type: 'paragraph',
    text: 'Avoiding these mistakes creates a stronger foundation for [long-term Local SEO](/local-seo).',
  },
]

const localSeoChecklistFaqs = [
  {
    question: 'How often should I review my Local SEO checklist?',
    answer:
      'Local SEO should be reviewed regularly rather than treated as a one-time task. Many businesses benefit from checking their Google Business Profile, website, customer reviews, and technical SEO every month to ensure information remains accurate and up to date.',
  },
  {
    question: 'What is the most important part of a Local SEO checklist?',
    answer:
      "There isn't a single most important task. Local SEO works best when multiple areas—including your Google Business Profile, website, reviews, citations, and content—are maintained together as part of an overall strategy.",
  },
  {
    question: 'Do I need a website for Local SEO?',
    answer:
      'A Google Business Profile is an excellent starting point, but a website provides additional opportunities to explain your services, create helpful content, build authority, and support your local search visibility.',
  },
  {
    question: 'How long does Local SEO take?',
    answer:
      'There is no fixed timeline. Results depend on your industry, competition, existing online presence, and the consistency of your optimization efforts. Local SEO should be viewed as an ongoing process rather than a quick project.',
  },
  {
    question: 'Can I complete this Local SEO checklist myself?',
    answer:
      'Many checklist items can be completed by business owners, especially maintaining accurate business information and responding to customer reviews. More advanced tasks such as technical SEO, structured data, and larger optimization projects may require professional assistance.',
  },
]

const localSeoChecklist: BlogPost = {
  title: 'Local SEO Checklist: 25 Steps to Improve Your Local Rankings',
  slug: 'local-seo-checklist',
  excerpt:
    'A practical 25-step Local SEO checklist covering Google Business Profile, website optimization, reviews, citations, technical SEO, and ongoing maintenance.',
  intro:
    'A practical 25-step Local SEO checklist covering Google Business Profile, website optimization, reviews, citations, technical SEO, and ongoing maintenance.',
  category: 'Local SEO',
  author: blogEditorialAuthor.name,
  publishedDate: '2026-07-19',
  date: 'July 19, 2026',
  readingTime: '5 min',
  seoTitle: 'Local SEO Checklist: 25 Steps to Improve Your Local Rankings',
  seoDescription:
    'Follow this complete Local SEO checklist to improve your Google Business Profile, website, reviews, citations, technical SEO, and local search visibility.',
  featuredImage: '/images/blog/local-seo-checklist-overview.webp',
  featuredImageAlt: 'Illustration showing a complete Local SEO checklist for businesses',
  draft: false,
  content: localSeoChecklistContent,
  faq: localSeoChecklistFaqs,
  relatedPosts: [
    'local-seo-ranking-factors',
    'google-business-profile-optimization',
    'how-to-rank-higher-on-google-maps',
  ],
  cta: {
    title: 'Ready to Improve Your Local SEO?',
    text: "A checklist is a great starting point, but long-term Local SEO success comes from consistent improvements over time. Keeping your Business Profile accurate, maintaining your website, publishing useful content, and monitoring your online presence all contribute to stronger local visibility. If you'd like an experienced team to review your current Local SEO performance and identify opportunities for improvement, LocalSeoWiser is here to help.",
    primaryLabel: 'Explore Local SEO Services',
    primaryHref: '/local-seo',
    secondaryLabel: 'Request a Free Audit',
    secondaryHref: '/contact',
  },
}

export default localSeoChecklist
