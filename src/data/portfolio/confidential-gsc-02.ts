import { buildConfidentialProject, confidentialEvidence } from './confidential-helpers'

const slug = 'confidential-gsc-02'
const evidence = confidentialEvidence(
  slug,
  'search-console-overview.webp',
  'Anonymized Google Search Console performance overview showing clicks, impressions, CTR, and average position',
  'search-console',
  'Google Search Console performance overview with client identity hidden',
)

const confidentialGsc02 = buildConfidentialProject({
  slug,
  displayName: 'Confidential Local Business',
  publishedAt: '2026-07-18',
  cardTitle: 'Confidential Local Business — Search Visibility Expansion',
  metaTitle: 'Confidential GSC Case Study — Growth | LocalSeoWiser',
  metaDescription:
    'Privacy-safe SEO case study with verified Google Search Console metrics: 526 clicks and 44.3K impressions across the latest six-month reporting period.',
  h1: 'Confidential Local Business — Search Visibility Case Study',
  supportingText:
    'A confidential SEO engagement documented through anonymized Search Console evidence only. No domain, business name, or branded assets are published.',
  heroSummary:
    'LocalSeoWiser supported confidential organic search work for a local business. Verified Search Console metrics for the latest 6-month period show 526 clicks and 44.3K impressions, compared with lower activity in the previous 6 months.',
  summary:
    'Confidential SEO campaign with verified Google Search Console results: 526 clicks and 44.3K impressions in the latest 6-month period.',
  featuredImage: evidence,
  seoImages: [evidence],
  metrics: [
    {
      title: 'Total Clicks',
      value: '526',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Total Impressions',
      value: '44.3K',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Average CTR',
      value: '1.2%',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Average Position',
      value: '29.8',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
  ],
  secondaryMetrics: [
    { title: 'Previous 6 months — clicks', value: '76', source: 'Google Search Console' },
    { title: 'Previous 6 months — impressions', value: '1.43K', source: 'Google Search Console' },
    { title: 'Previous 6 months — average CTR', value: '5.3%', source: 'Google Search Console' },
    { title: 'Previous 6 months — average position', value: '6.2', source: 'Google Search Console' },
  ],
  resultNotes: [
    'Figures are taken from the supplied anonymized Google Search Console overview comparing the last 6 months with the previous 6 months.',
    'Verified Search Console data shows measurable organic visibility and search engagement during the reported period.',
    'Average CTR and average position can move as impression volume expands across a broader set of queries. No ranking or lead guarantees are claimed.',
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
    'The engagement required privacy-safe reporting of organic search performance.',
    'Search Console was used to monitor clicks, impressions, CTR, and average position.',
    'Public case-study materials could not disclose the client’s business identity.',
  ],
  objectives: [
    'Expand organic search visibility',
    'Increase measurable Search Console clicks and impressions',
    'Maintain technical and on-page SEO foundations',
    'Publish only anonymized verified evidence',
  ],
  technologyStack: ['Google Search Console'],
  outcome:
    'Verified Search Console data shows measurable organic visibility and search engagement during the reported period. Clicks rose from 76 to 526 and impressions from 1.43K to 44.3K between the previous and latest 6-month windows. Client identity remains protected.',
})

export default confidentialGsc02
