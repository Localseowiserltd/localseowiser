import { buildConfidentialProject, confidentialEvidence } from './confidential-helpers'

const slug = 'confidential-gbp-04'
const evidence = confidentialEvidence(
  slug,
  'gbp-calls-overview.webp',
  'Anonymized Google Business Profile calls overview with identifying details removed',
  'google-business-profile',
  'Google Business Profile interactions with identifying details removed',
)

const confidentialGbp04 = buildConfidentialProject({
  slug,
  displayName: 'Confidential Local Business',
  publishedAt: '2026-07-18',
  cardTitle: 'Confidential Local Business — GBP Calls Snapshot',
  metaTitle: 'Confidential GBP Case Study — 42 Calls | LocalSeoWiser',
  metaDescription:
    'Privacy-safe local SEO case study with verified Google Business Profile data: 42 calls during March–April 2026.',
  h1: 'Confidential Local Business — GBP Calls Case Study',
  supportingText:
    'Anonymized Google Business Profile call evidence for a confidential local SEO engagement. No business name, domain, or profile identity is published.',
  heroSummary:
    'LocalSeoWiser supported confidential Google Business Profile optimization and monitoring. Verified GBP data recorded 42 calls during the March–April 2026 reporting window shown on the anonymized screenshot.',
  summary:
    'Confidential local SEO campaign with verified Google Business Profile results: 42 calls during March–April 2026.',
  featuredImage: evidence,
  seoImages: [evidence],
  metrics: [
    {
      title: 'Calls',
      value: '42',
      description: 'Google Business Profile — March to April 2026.',
      source: 'Google Business Profile',
    },
  ],
  resultNotes: [
    'Figures are taken from the supplied anonymized Google Business Profile calls overview.',
    'Google Business Profile data recorded verified customer interactions during the selected reporting period.',
    'Only the visible calls metric is published from this screenshot.',
    'Client-identifying details were intentionally hidden and are not reconstructed in this case study.',
  ],
  snapshot: [
    { label: 'Display name', value: 'Confidential Local Business' },
    { label: 'Project type', value: 'Confidential SEO Campaign' },
    { label: 'Evidence source', value: 'Google Business Profile' },
    { label: 'Reporting window', value: 'March – April 2026' },
    { label: 'Client identity', value: 'Protected' },
  ],
  situation: [
    'Client identity could not appear in public portfolio materials.',
    'An anonymized GBP calls overview provided verified interaction evidence.',
    'The engagement focused on local SEO and profile performance monitoring.',
  ],
  objectives: [
    'Improve and monitor Google Business Profile engagement',
    'Track call interactions from the profile',
    'Support local SEO foundations',
    'Keep client identity confidential',
  ],
  technologyStack: ['Google Business Profile'],
  services: ['Local SEO', 'Google Map Optimization'],
  outcome:
    'Google Business Profile data recorded verified customer interactions during the selected reporting period, including 42 calls during March–April 2026. Client identity remains protected.',
})

export default confidentialGbp04
