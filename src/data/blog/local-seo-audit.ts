import type { ArticleBlock, BlogPost } from '@/types/blog'
import { blogEditorialAuthor } from './author'

/**
 * Published article — Local SEO Audit
 * Public route: /blog/local-seo-audit
 */
const localSeoAuditContent: ArticleBlock[] = [
  {
    type: 'heading',
    level: 2,
    text: 'Introduction',
    id: 'introduction',
  },
  {
    type: 'paragraph',
    text: "A [Local SEO](/blog/what-is-local-seo) audit helps you identify the strengths and weaknesses of your online presence. Instead of guessing why your business isn't performing well in local search results, an audit provides a structured way to review the [areas that influence visibility](/blog/how-does-local-seo-work).",
  },
  {
    type: 'paragraph',
    text: 'Businesses often focus on a single issue—such as reviews or keywords—when the real problem may involve several smaller issues working together. An audit helps uncover these gaps so they can be addressed systematically.',
  },
  {
    type: 'paragraph',
    text: "In this guide, you'll learn how to perform a practical Local SEO audit, [what to check](/blog/local-seo-checklist), and how to prioritize improvements that support long-term local search visibility.",
  },
  {
    type: 'heading',
    level: 2,
    text: 'What Is a Local SEO Audit?',
    id: 'what-is-a-local-seo-audit',
  },
  {
    type: 'paragraph',
    text: 'A Local SEO audit is a detailed review of the factors that influence how your business appears in local search results and [Google Maps](/blog/how-to-rank-higher-on-google-maps).',
  },
  {
    type: 'paragraph',
    text: 'The goal is to answer questions such as:',
  },
  {
    type: 'list',
    items: [
      'Is my Google Business Profile complete?',
      'Is my website supporting Local SEO?',
      'Is my business information consistent?',
      'Are customers finding accurate information?',
      'Are there technical issues affecting visibility?',
    ],
  },
  {
    type: 'paragraph',
    text: 'Rather than looking at [rankings](/blog/local-seo-ranking-factors) alone, an audit evaluates the overall health of your local online presence.',
  },
  {
    type: 'image',
    src: '/images/blog/local-seo-audit-overview.webp',
    alt: 'Illustration showing a complete Local SEO audit process',
    caption:
      'A Local SEO audit helps identify opportunities to improve local search visibility.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Why Regular Audits Matter',
    id: 'why-regular-audits-matter',
  },
  {
    type: 'paragraph',
    text: 'Local SEO changes over time.',
  },
  {
    type: 'paragraph',
    text: 'Businesses update services, move locations, change phone numbers, publish new content, and receive new customer reviews.',
  },
  {
    type: 'paragraph',
    text: 'Without regular reviews, outdated information can remain online and reduce customer confidence.',
  },
  {
    type: 'paragraph',
    text: 'Routine audits help businesses:',
  },
  {
    type: 'list',
    items: [
      'Keep information accurate',
      'Improve customer experience',
      'Identify technical issues',
      'Strengthen local relevance',
      'Maintain consistency across platforms',
    ],
  },
  {
    type: 'paragraph',
    text: 'An audit is also useful before launching a new marketing campaign or redesigning a website.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 1 — Review Your Google Business Profile',
    id: 'step-1-review-your-google-business-profile',
  },
  {
    type: 'paragraph',
    text: 'Begin with your [Google Business Profile](/blog/google-business-profile-optimization).',
  },
  {
    type: 'paragraph',
    text: 'Check that the following information is accurate:',
  },
  {
    type: 'list',
    items: [
      'Business name',
      'Primary category',
      'Secondary categories',
      'Address or service area',
      'Phone number',
      'Website',
      'Opening hours',
      'Business description',
      'Services',
      'Photos',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Check for Completeness',
    id: 'check-for-completeness',
  },
  {
    type: 'paragraph',
    text: 'Complete every relevant section of the profile.',
  },
  {
    type: 'paragraph',
    text: 'Missing information can make it harder for both customers and search engines to understand your business.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Review Recent Updates',
    id: 'review-recent-updates',
  },
  {
    type: 'paragraph',
    text: 'Ensure business hours, services, and contact details reflect your current operations.',
  },
  {
    type: 'image',
    src: '/images/blog/google-business-profile-audit.webp',
    alt: 'Illustration showing a Google Business Profile audit',
    caption:
      'Reviewing your Business Profile ensures customers and search engines receive accurate information.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 2 — Audit Your Website',
    id: 'step-2-audit-your-website',
  },
  {
    type: 'paragraph',
    text: 'Your website should support your [Business Profile](/google-map-optimization) by providing detailed, useful information.',
  },
  {
    type: 'paragraph',
    text: 'Review:',
  },
  {
    type: 'list',
    items: [
      'Homepage',
      'Service pages',
      'Location pages',
      'About page',
      '[Contact page](/contact)',
      'Blog',
      'Navigation',
      'Mobile experience',
    ],
  },
  {
    type: 'paragraph',
    text: 'The goal is to make it easy for visitors to understand what your business offers and how to contact you.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 3 — Review On-Page SEO',
    id: 'step-3-review-on-page-seo',
  },
  {
    type: 'paragraph',
    text: 'Check every important page for:',
  },
  {
    type: 'list',
    items: [
      'Page titles',
      'Meta descriptions',
      'Heading structure',
      'Internal links',
      'Image alt text',
      'Keyword relevance',
      'Readability',
    ],
  },
  {
    type: 'paragraph',
    text: 'Focus on making content useful and easy to understand rather than repeating keywords.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 4 — Audit Local Citations',
    id: 'step-4-audit-local-citations',
  },
  {
    type: 'paragraph',
    text: 'Local citations help search engines verify your business information.',
  },
  {
    type: 'paragraph',
    text: 'Review all major listings to ensure they contain consistent information.',
  },
  {
    type: 'paragraph',
    text: 'Check:',
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
    text: 'Look for:',
  },
  {
    type: 'list',
    items: [
      'Duplicate listings',
      'Old phone numbers',
      'Previous addresses',
      'Broken website links',
      'Incorrect categories',
    ],
  },
  {
    type: 'paragraph',
    text: 'Correct inconsistencies wherever possible.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Prioritize Trusted Sources',
    id: 'prioritize-trusted-sources',
  },
  {
    type: 'paragraph',
    text: 'Focus first on major business directories, industry-specific directories, local business associations, and chambers of commerce before expanding to smaller websites.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 5 — Review Customer Reviews',
    id: 'step-5-review-customer-reviews',
  },
  {
    type: 'paragraph',
    text: 'Customer reviews affect both trust and customer decision-making.',
  },
  {
    type: 'paragraph',
    text: 'Review:',
  },
  {
    type: 'list',
    items: [
      'Overall review quality',
      'Recent reviews',
      'Response rate',
      'Common customer feedback',
      'Unanswered reviews',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Respond Professionally',
    id: 'respond-professionally',
  },
  {
    type: 'paragraph',
    text: 'Reply to both positive and negative reviews in a professional manner.',
  },
  {
    type: 'paragraph',
    text: 'Thoughtful responses show that your business values customer feedback.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Identify Patterns',
    id: 'identify-patterns',
  },
  {
    type: 'paragraph',
    text: 'Recurring praise or complaints often highlight opportunities to improve customer experience.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 6 — Review Local Content',
    id: 'step-6-review-local-content',
  },
  {
    type: 'paragraph',
    text: 'Helpful content supports Local SEO by demonstrating expertise.',
  },
  {
    type: 'paragraph',
    text: 'Review whether your website includes:',
  },
  {
    type: 'list',
    items: [
      'Service pages',
      'Location pages',
      'Helpful blog articles',
      'Frequently asked questions',
      'Industry resources',
    ],
  },
  {
    type: 'paragraph',
    text: 'Look for outdated information, duplicate content, or pages that provide little value.',
  },
  {
    type: 'paragraph',
    text: 'Update older content where appropriate.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 7 — Perform a Technical SEO Audit',
    id: 'step-7-perform-a-technical-seo-audit',
  },
  {
    type: 'paragraph',
    text: '[Technical issues](/technical-seo) can prevent search engines from properly understanding your website.',
  },
  {
    type: 'paragraph',
    text: 'Review:',
  },
  {
    type: 'list',
    items: [
      'HTTPS',
      'XML Sitemap',
      'Robots.txt',
      'Mobile responsiveness',
      'Page speed',
      'Structured data',
      'Canonical URLs',
      'Broken links',
      'Redirects',
      'Image optimisation',
    ],
  },
  {
    type: 'paragraph',
    text: 'Address critical technical issues before making smaller optimization changes.',
  },
  {
    type: 'image',
    src: '/images/blog/technical-seo-audit.webp',
    alt: 'Illustration showing the technical elements of a Local SEO audit',
    caption:
      'Technical SEO audits help identify issues that may affect crawling and user experience.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 8 — Review Backlinks',
    id: 'step-8-review-backlinks',
  },
  {
    type: 'paragraph',
    text: 'Backlinks help establish website authority.',
  },
  {
    type: 'paragraph',
    text: 'Review whether links come from relevant, trustworthy websites.',
  },
  {
    type: 'paragraph',
    text: 'Examples include:',
  },
  {
    type: 'list',
    items: [
      'Local organizations',
      'Community websites',
      'Industry associations',
      'Local news websites',
      'Professional partners',
    ],
  },
  {
    type: 'paragraph',
    text: 'Avoid focusing on link quantity alone.',
  },
  {
    type: 'paragraph',
    text: 'Quality and relevance are generally more valuable than large numbers of low-quality links.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 9 — Analyze Local Competitors',
    id: 'step-9-analyze-local-competitors',
  },
  {
    type: 'paragraph',
    text: 'Review businesses that consistently appear in local search results for your primary services.',
  },
  {
    type: 'paragraph',
    text: 'Compare areas such as:',
  },
  {
    type: 'list',
    items: [
      'Business Profile completeness',
      'Website quality',
      'Service pages',
      'Location pages',
      'Customer reviews',
      'Content',
      'Local authority',
    ],
  },
  {
    type: 'paragraph',
    text: 'The goal is to identify practical opportunities for improvement rather than copying competitors.',
  },
  {
    type: 'image',
    src: '/images/blog/local-seo-audit-priorities.webp',
    alt: 'Illustration showing how Local SEO audit findings can be prioritized',
    caption:
      'Prioritizing audit findings helps businesses focus on the improvements that matter most.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Step 10 — Prioritize Your Findings',
    id: 'step-10-prioritize-your-findings',
  },
  {
    type: 'paragraph',
    text: 'Not every issue has the same level of impact.',
  },
  {
    type: 'paragraph',
    text: 'Group findings into three categories:',
  },
  {
    type: 'heading',
    level: 3,
    text: 'High Priority',
    id: 'high-priority',
  },
  {
    type: 'paragraph',
    text: 'Issues that directly affect customers or prevent search engines from understanding your business.',
  },
  {
    type: 'paragraph',
    text: 'Examples:',
  },
  {
    type: 'list',
    items: [
      'Incorrect contact information',
      'Broken website',
      'Missing Business Profile details',
      'Major technical errors',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Medium Priority',
    id: 'medium-priority',
  },
  {
    type: 'paragraph',
    text: 'Areas that improve relevance and user experience.',
  },
  {
    type: 'paragraph',
    text: 'Examples:',
  },
  {
    type: 'list',
    items: [
      'Updating service pages',
      'Improving location pages',
      'Publishing helpful content',
      'Improving internal linking',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Lower Priority',
    id: 'lower-priority',
  },
  {
    type: 'paragraph',
    text: 'Long-term improvements that strengthen authority over time.',
  },
  {
    type: 'paragraph',
    text: 'Examples:',
  },
  {
    type: 'list',
    items: [
      'Building local partnerships',
      'Earning additional backlinks',
      'Expanding educational content',
      'Adding new case studies',
    ],
  },
  {
    type: 'paragraph',
    text: 'Working through improvements in priority order makes the audit process more manageable.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Common Local SEO Audit Mistakes',
    id: 'common-local-seo-audit-mistakes',
  },
  {
    type: 'paragraph',
    text: 'Businesses often reduce the value of an audit by making avoidable mistakes.',
  },
  {
    type: 'paragraph',
    text: 'Common examples include:',
  },
  {
    type: 'list',
    items: [
      'Checking rankings only',
      'Ignoring website quality',
      'Overlooking customer reviews',
      'Forgetting citation consistency',
      'Ignoring technical SEO',
      'Never updating old content',
      'Focusing on competitors instead of customers',
      'Treating the audit as a one-time task',
    ],
  },
  {
    type: 'paragraph',
    text: 'A Local SEO audit should become part of an [ongoing optimization process](/local-seo) rather than a single project.',
  },
]

const localSeoAuditFaqs = [
  {
    question: 'What is a Local SEO audit?',
    answer:
      'A Local SEO audit is a structured review of the factors that influence how your business appears in local search results and Google Maps. It evaluates areas such as your Google Business Profile, website, customer reviews, citations, content, and technical SEO to identify opportunities for improvement.',
  },
  {
    question: 'How often should I perform a Local SEO audit?',
    answer:
      "Most businesses benefit from performing a Local SEO audit every three to six months. It's also a good idea to conduct an audit after changing your business information, redesigning your website, or launching a new marketing campaign.",
  },
  {
    question: 'Can I perform a Local SEO audit myself?',
    answer:
      'Yes. Many parts of a Local SEO audit, such as checking business information, reviewing website content, and updating your Google Business Profile, can be completed by business owners. More advanced technical issues may require assistance from an SEO professional.',
  },
  {
    question: 'What should I fix first during a Local SEO audit?',
    answer:
      'Start with issues that directly affect customers and search engines, such as incorrect contact information, missing Business Profile details, broken pages, or major technical errors. Once these are resolved, focus on improving content, citations, and authority.',
  },
  {
    question: 'Does a Local SEO audit improve rankings?',
    answer:
      'An audit itself does not improve rankings. However, identifying and fixing issues found during the audit can strengthen your Local SEO over time and create a better experience for both customers and search engines.',
  },
]

const localSeoAudit: BlogPost = {
  title: 'Local SEO Audit: How to Find and Fix Ranking Issues',
  slug: 'local-seo-audit',
  excerpt:
    'A practical Local SEO audit guide that helps businesses identify ranking issues and prioritize improvements for better local search visibility.',
  intro:
    'A practical Local SEO audit guide that helps businesses identify ranking issues and prioritize improvements for better local search visibility.',
  category: 'Local SEO',
  author: blogEditorialAuthor.name,
  publishedDate: '2026-07-19',
  date: 'July 19, 2026',
  readingTime: '5 min',
  seoTitle: 'Local SEO Audit: How to Find and Fix Ranking Issues',
  seoDescription:
    'Learn how to perform a Local SEO audit by reviewing your Google Business Profile, website, citations, reviews, content, backlinks, and technical SEO.',
  featuredImage: '/images/blog/local-seo-audit-overview.webp',
  featuredImageAlt: 'Illustration showing a complete Local SEO audit process',
  draft: false,
  content: localSeoAuditContent,
  faq: localSeoAuditFaqs,
  relatedPosts: [
    'local-seo-checklist',
    'local-seo-ranking-factors',
    'google-business-profile-optimization',
  ],
  cta: {
    title: "Ready to Find What's Holding Back Your Local Rankings?",
    text: 'Many businesses lose valuable local visibility because of small issues that go unnoticed—such as inconsistent business information, outdated website content, technical SEO problems, or incomplete Google Business Profiles. A professional Local SEO audit helps uncover these opportunities and provides a practical roadmap for improving your local search presence.',
    primaryLabel: 'Get a Free Local SEO Audit',
    primaryHref: '/contact',
    secondaryLabel: 'Explore Local SEO Services',
    secondaryHref: '/local-seo',
  },
}

export default localSeoAudit
