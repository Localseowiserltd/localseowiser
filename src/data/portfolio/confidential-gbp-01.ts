import { buildConfidentialProject, confidentialEvidence } from './confidential-helpers'

const slug = 'confidential-gbp-01'
const evidence = confidentialEvidence(
  slug,
  'gbp-calls-overview.webp',
  'Anonymized Google Business Profile calls overview with identifying details removed',
  'google-business-profile',
  'Google Business Profile interactions with identifying details removed',
)

const confidentialGbp01 = buildConfidentialProject({
  slug,
  displayName: 'Confidential Local Business',
  publishedAt: '2026-07-18',
  cardTitle: 'Confidential Local Business — Google Business Profile Calls',
  metaTitle: 'Confidential GBP Case Study — 50 Calls | LocalSeoWiser',
  metaDescription:
    'Privacy-safe local SEO case study with verified Google Business Profile data: 50 calls during the April reporting period for a confidential client.',
  h1: 'Confidential Local Business — Google Business Profile Case Study',
  supportingText:
    'A confidential local SEO engagement reported through anonymized Google Business Profile call metrics. Client identity and profile details are withheld.',
  heroSummary:
    'LocalSeoWiser supported Google Business Profile optimization and monitoring for a confidential local business. Verified GBP data recorded 50 calls during the April reporting period, with a +6.4% change versus April 2025.',
  summary:
    'Confidential local SEO campaign with verified Google Business Profile results: 50 calls during the April reporting period.',
  featuredImage: evidence,
  seoImages: [evidence],
  metrics: [
    {
      title: 'Calls',
      value: '50',
      description: 'Google Business Profile — April reporting period.',
      source: 'Google Business Profile',
    },
    {
      title: 'Calls change vs April 2025',
      value: '+6.4%',
      description: 'Google Business Profile — comparison shown on the anonymized screenshot.',
      source: 'Google Business Profile',
    },
  ],
  resultNotes: [
    'Figures are taken from the supplied anonymized Google Business Profile calls overview.',
    'Google Business Profile data recorded verified customer interactions during the selected reporting period.',
    'Only calls metrics visible on the screenshot are published. Website clicks, directions, and other actions are not claimed unless shown.',
    'Client-identifying details were intentionally hidden and are not reconstructed in this case study.',
  ],
  snapshot: [
    { label: 'Display name', value: 'Confidential Local Business' },
    { label: 'Project type', value: 'Confidential SEO Campaign' },
    { label: 'Evidence source', value: 'Google Business Profile' },
    { label: 'Reporting window', value: 'April period vs April 2025' },
    { label: 'Client identity', value: 'Protected' },
  ],
  situation: [
    'The client required local search reporting without public disclosure of profile identity.',
    'Google Business Profile call activity was available as anonymized evidence.',
    'Case-study materials had to remain privacy-safe while showing verified GBP metrics.',
  ],
  objectives: [
    'Support Google Business Profile optimization',
    'Monitor local profile interactions such as calls',
    'Maintain local SEO foundations',
    'Report results without exposing client identity',
  ],
  technologyStack: ['Google Business Profile'],
  services: ['Local SEO', 'Google Map Optimization'],
  outcome:
    'Google Business Profile data recorded verified customer interactions during the selected reporting period, including 50 calls with a +6.4% change versus April 2025. Client identity remains protected.',
})

export default confidentialGbp01
