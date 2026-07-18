import { buildConfidentialProject, confidentialEvidence } from './confidential-helpers'

const slug = 'confidential-gsc-03'
const evidence = confidentialEvidence(
  slug,
  'search-console-overview.webp',
  'Anonymized Google Search Console performance overview showing clicks, impressions, CTR, and average position',
  'search-console',
  'Google Search Console performance overview with client identity hidden',
)

const confidentialGsc03 = buildConfidentialProject({
  slug,
  displayName: 'Confidential Local Business',
  publishedAt: '2026-07-18',
  cardTitle: 'Confidential Local Business — Organic Visibility Lift',
  metaTitle: 'Confidential SEO Case Study — 30.9K Impressions | LocalSeoWiser',
  metaDescription:
    'Privacy-safe SEO case study with verified Google Search Console metrics: 108 clicks and 30.9K impressions over the latest 6-month period.',
  h1: 'Confidential Local Business — Organic Visibility Case Study',
  supportingText:
    'Anonymized Search Console evidence for a confidential local SEO engagement. Business name, domain, and branded visuals are withheld.',
  heroSummary:
    'LocalSeoWiser delivered confidential SEO monitoring and optimization support. Verified Search Console metrics for the latest 6-month period show 108 clicks and 30.9K impressions, with average position improving versus the previous 6 months.',
  summary:
    'Confidential SEO campaign with verified Google Search Console results: 108 clicks and 30.9K impressions in the latest 6-month period.',
  featuredImage: evidence,
  seoImages: [evidence],
  metrics: [
    {
      title: 'Total Clicks',
      value: '108',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Total Impressions',
      value: '30.9K',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Average CTR',
      value: '0.3%',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Average Position',
      value: '33.6',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
  ],
  secondaryMetrics: [
    { title: 'Previous 6 months — clicks', value: '23', source: 'Google Search Console' },
    { title: 'Previous 6 months — impressions', value: '2.04K', source: 'Google Search Console' },
    { title: 'Previous 6 months — average CTR', value: '1.1%', source: 'Google Search Console' },
    { title: 'Previous 6 months — average position', value: '48.1', source: 'Google Search Console' },
  ],
  resultNotes: [
    'Figures are taken from the supplied anonymized Google Search Console overview comparing the last 6 months with the previous 6 months.',
    'Verified Search Console data shows measurable organic visibility and search engagement during the reported period.',
    'No leads, revenue, or keyword ranking claims are invented beyond the visible overview metrics.',
    'Client-identifying details were intentionally hidden and are not reconstructed in this case study.',
  ],
  snapshot: [
    { label: 'Display name', value: 'Confidential Local Business' },
    { label: 'Project type', value: 'Confidential SEO Campaign' },
    { label: 'Evidence source', value: 'Google Search Console' },
    { label: 'Reporting window', value: 'Last 6 months vs previous 6 months' },
    { label: 'Client identity', value: 'Protected' },
  ],
  situation: [
    'The client needed SEO progress reporting without public identification.',
    'Search Console provided the verified organic performance dataset for this case study.',
    'Only anonymized overview metrics were cleared for publication.',
  ],
  objectives: [
    'Grow organic impressions and clicks',
    'Improve average position over time',
    'Support technical and on-page SEO foundations',
    'Keep client identity confidential in public materials',
  ],
  technologyStack: ['Google Search Console'],
  outcome:
    'Verified Search Console data shows measurable organic visibility and search engagement during the reported period. Impressions increased from 2.04K to 30.9K and average position moved from 48.1 to 33.6 between the compared 6-month windows. Client identity remains protected.',
})

export default confidentialGsc03
