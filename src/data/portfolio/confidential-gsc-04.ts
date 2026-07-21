import { buildConfidentialProject, confidentialEvidence } from './confidential-helpers'

const slug = 'confidential-gsc-04'
const evidence = confidentialEvidence(
  slug,
  'search-console-overview.webp',
  'Anonymized Google Search Console performance overview showing clicks, impressions, CTR, and average position',
  'search-console',
  'Google Search Console performance overview with client identity hidden',
)

const confidentialGsc04 = buildConfidentialProject({
  slug,
  displayName: 'Confidential Local Business',
  publishedAt: '2026-07-18',
  cardTitle: 'Confidential Local Business — Search Console Results',
  metaTitle: 'Confidential SEO Case Study — 35.7K | LocalSeoWiser',
  metaDescription:
    'Privacy-safe SEO case study with verified Google Search Console metrics: 177 clicks and 35.7K impressions across the latest six-month reporting period.',
  h1: 'Confidential Local Business — Search Console Case Study',
  supportingText:
    'Privacy-safe organic search reporting for a confidential client. Only anonymized Google Search Console overview metrics are published.',
  heroSummary:
    'LocalSeoWiser supported confidential SEO delivery and monitoring. Verified Search Console data for the latest 6-month period shows 177 clicks and 35.7K impressions versus lower activity in the previous 6 months.',
  summary:
    'Confidential SEO campaign with verified Google Search Console results: 177 clicks and 35.7K impressions in the latest 6-month period.',
  featuredImage: evidence,
  seoImages: [evidence],
  metrics: [
    {
      title: 'Total Clicks',
      value: '177',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Total Impressions',
      value: '35.7K',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Average CTR',
      value: '0.5%',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Average Position',
      value: '28.2',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
  ],
  secondaryMetrics: [
    { title: 'Previous 6 months — clicks', value: '52', source: 'Google Search Console' },
    { title: 'Previous 6 months — impressions', value: '2.09K', source: 'Google Search Console' },
    { title: 'Previous 6 months — average CTR', value: '2.5%', source: 'Google Search Console' },
    { title: 'Previous 6 months — average position', value: '20.8', source: 'Google Search Console' },
  ],
  resultNotes: [
    'Figures are taken from the supplied anonymized Google Search Console overview comparing the last 6 months with the previous 6 months.',
    'Verified Search Console data shows measurable organic visibility and search engagement during the reported period.',
    'CTR and average position can shift as impression volume expands. No unsupported lead or ranking claims are included.',
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
    'Public disclosure of the client brand was not permitted for this case study.',
    'Search Console overview metrics were available as anonymized evidence.',
    'The engagement focused on SEO foundations and ongoing search monitoring.',
  ],
  objectives: [
    'Increase Search Console clicks and impressions',
    'Maintain technical and on-page SEO quality',
    'Support local SEO where applicable',
    'Report results without exposing client identity',
  ],
  technologyStack: ['Google Search Console'],
  outcome:
    'Verified Search Console data shows measurable organic visibility and search engagement during the reported period. Clicks increased from 52 to 177 and impressions from 2.09K to 35.7K across the compared 6-month windows. Client identity remains protected.',
})

export default confidentialGsc04
