import { buildConfidentialProject, confidentialEvidence } from './confidential-helpers'

const slug = 'confidential-gbp-03'
const evidence = confidentialEvidence(
  slug,
  'gbp-calls-overview.webp',
  'Anonymized Google Business Profile calls overview with identifying details removed',
  'google-business-profile',
  'Google Business Profile interactions with identifying details removed',
)

const confidentialGbp03 = buildConfidentialProject({
  slug,
  displayName: 'Confidential Local Business',
  publishedAt: '2026-07-18',
  cardTitle: 'Confidential Local Business — Local Profile Calls',
  metaTitle: 'Confidential GBP Case Study — 28 Calls | LocalSeoWiser',
  metaDescription:
    'Privacy-safe local SEO case study with verified Google Business Profile data: 28 calls during April–May 2026.',
  h1: 'Confidential Local Business — Local Profile Case Study',
  supportingText:
    'Privacy-safe Google Business Profile reporting for a confidential client. Only the visible calls metric from the anonymized screenshot is published.',
  heroSummary:
    'LocalSeoWiser supported confidential local SEO and Google Business Profile monitoring. Verified GBP data recorded 28 calls during the April–May 2026 reporting window shown on the anonymized screenshot.',
  summary:
    'Confidential local SEO campaign with verified Google Business Profile results: 28 calls during April–May 2026.',
  featuredImage: evidence,
  seoImages: [evidence],
  metrics: [
    {
      title: 'Calls',
      value: '28',
      description: 'Google Business Profile — April to May 2026.',
      source: 'Google Business Profile',
    },
  ],
  resultNotes: [
    'Figures are taken from the supplied anonymized Google Business Profile calls overview.',
    'Google Business Profile data recorded verified customer interactions during the selected reporting period.',
    'No leads, revenue, or ranking claims are invented beyond the visible calls metric.',
    'Client-identifying details were intentionally hidden and are not reconstructed in this case study.',
  ],
  snapshot: [
    { label: 'Display name', value: 'Confidential Local Business' },
    { label: 'Project type', value: 'Confidential SEO Campaign' },
    { label: 'Evidence source', value: 'Google Business Profile' },
    { label: 'Reporting window', value: 'April – May 2026' },
    { label: 'Client identity', value: 'Protected' },
  ],
  situation: [
    'The engagement required privacy-safe publication of local profile results.',
    'Google Business Profile call metrics were available as anonymized evidence.',
    'Business name, address, and contact details could not be disclosed.',
  ],
  objectives: [
    'Support Google Business Profile optimization',
    'Monitor call interactions',
    'Maintain local SEO foundations',
    'Publish only anonymized verified evidence',
  ],
  technologyStack: ['Google Business Profile'],
  services: ['Local SEO', 'Google Map Optimization'],
  outcome:
    'Google Business Profile data recorded verified customer interactions during the selected reporting period, including 28 calls during April–May 2026. Client identity remains protected.',
})

export default confidentialGbp03
