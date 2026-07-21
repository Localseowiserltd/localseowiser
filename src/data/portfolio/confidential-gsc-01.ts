import { buildConfidentialProject, confidentialEvidence } from './confidential-helpers'

const slug = 'confidential-gsc-01'
const evidence = confidentialEvidence(
  slug,
  'search-console-overview.webp',
  'Anonymized Google Search Console performance overview showing clicks, impressions, CTR, and average position',
  'search-console',
  'Google Search Console performance overview with client identity hidden',
)

const confidentialGsc01 = buildConfidentialProject({
  slug,
  displayName: 'Confidential Local Business',
  publishedAt: '2026-07-18',
  cardTitle: 'Confidential Local Business — Organic Search Performance',
  metaTitle: 'Confidential Local Business SEO Case Study | LocalSeoWiser',
  metaDescription:
    'Privacy-safe SEO case study with verified Google Search Console metrics: 1.66K clicks and 858K impressions across the latest six-month reporting period.',
  h1: 'Confidential Local Business — Search Console Case Study',
  supportingText:
    'A confidential SEO engagement reported through anonymized Google Search Console evidence. Client identity, domain, and branded assets are withheld.',
  heroSummary:
    'LocalSeoWiser supported ongoing organic search work for a confidential local business. Verified Search Console data for the latest 6-month period shows measurable clicks and impressions versus the previous 6 months, without disclosing the client’s identity.',
  summary:
    'Confidential SEO campaign with verified Google Search Console results: 1.66K clicks and 858K impressions in the latest 6-month period.',
  featuredImage: evidence,
  seoImages: [evidence],
  metrics: [
    {
      title: 'Total Clicks',
      value: '1.66K',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Total Impressions',
      value: '858K',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Average CTR',
      value: '0.2%',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
    {
      title: 'Average Position',
      value: '37.5',
      description: 'Google Search Console — last 6 months.',
      source: 'Google Search Console',
    },
  ],
  secondaryMetrics: [
    {
      title: 'Previous 6 months — clicks',
      value: '902',
      source: 'Google Search Console',
    },
    {
      title: 'Previous 6 months — impressions',
      value: '776K',
      source: 'Google Search Console',
    },
    {
      title: 'Previous 6 months — average CTR',
      value: '0.1%',
      source: 'Google Search Console',
    },
    {
      title: 'Previous 6 months — average position',
      value: '52.2',
      source: 'Google Search Console',
    },
  ],
  resultNotes: [
    'Figures are taken from the supplied anonymized Google Search Console overview comparing the last 6 months with the previous 6 months.',
    'Verified Search Console data shows measurable organic visibility and search engagement during the reported period.',
    'Impressions are not the same as website visits. No leads, revenue, or ranking guarantees are claimed.',
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
    'The client required SEO delivery and reporting without public disclosure of business identity.',
    'Organic search performance needed to be monitored through Google Search Console.',
    'Case-study publication had to remain privacy-safe while still showing verified platform metrics.',
  ],
  objectives: [
    'Improve and monitor organic search visibility',
    'Track clicks, impressions, CTR, and average position in Search Console',
    'Maintain technical and on-page SEO foundations',
    'Report results without exposing client identity',
  ],
  technologyStack: ['Google Search Console'],
  outcome:
    'Verified Search Console data shows measurable organic visibility and search engagement during the reported period. Average position improved from 52.2 in the previous 6 months to 37.5 in the latest 6 months, while clicks and impressions also increased. Client identity remains protected.',
})

export default confidentialGsc01
