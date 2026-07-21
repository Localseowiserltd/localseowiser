import { buildConfidentialProject, confidentialEvidence } from './confidential-helpers'

const slug = 'confidential-gbp-02'
const evidence = confidentialEvidence(
  slug,
  'gbp-calls-overview.webp',
  'Anonymized Google Business Profile calls overview with identifying details removed',
  'google-business-profile',
  'Google Business Profile interactions with identifying details removed',
)

const confidentialGbp02 = buildConfidentialProject({
  slug,
  displayName: 'Confidential Local Business',
  publishedAt: '2026-07-18',
  cardTitle: 'Confidential Local Business — GBP Call Engagement',
  metaTitle: 'Confidential GBP Case Study — 40 Calls | LocalSeoWiser',
  metaDescription:
    'Privacy-safe local SEO case study with verified Google Business Profile data: 40 calls from December 2025 through May 2026 for a confidential client.',
  h1: 'Confidential Local Business — GBP Engagement Case Study',
  supportingText:
    'Anonymized Google Business Profile evidence for a confidential local SEO engagement. Profile name and contact details are not published.',
  heroSummary:
    'LocalSeoWiser supported confidential Google Business Profile work. Verified GBP data recorded 40 calls across the December 2025–May 2026 reporting window shown on the anonymized screenshot.',
  summary:
    'Confidential local SEO campaign with verified Google Business Profile results: 40 calls from December 2025 through May 2026.',
  featuredImage: evidence,
  seoImages: [evidence],
  metrics: [
    {
      title: 'Calls',
      value: '40',
      description: 'Google Business Profile — December 2025 to May 2026.',
      source: 'Google Business Profile',
    },
  ],
  resultNotes: [
    'Figures are taken from the supplied anonymized Google Business Profile calls overview.',
    'Google Business Profile data recorded verified customer interactions during the selected reporting period.',
    'No additional GBP actions are claimed beyond the visible calls metric.',
    'Client-identifying details were intentionally hidden and are not reconstructed in this case study.',
  ],
  snapshot: [
    { label: 'Display name', value: 'Confidential Local Business' },
    { label: 'Project type', value: 'Confidential SEO Campaign' },
    { label: 'Evidence source', value: 'Google Business Profile' },
    { label: 'Reporting window', value: 'December 2025 – May 2026' },
    { label: 'Client identity', value: 'Protected' },
  ],
  situation: [
    'Public identification of the Google Business Profile was not permitted.',
    'Call activity provided a verified local engagement signal for reporting.',
    'Only anonymized GBP overview evidence was cleared for publication.',
  ],
  objectives: [
    'Optimize and monitor Google Business Profile performance',
    'Support local SEO foundations',
    'Track call interactions from the profile',
    'Keep client identity confidential',
  ],
  technologyStack: ['Google Business Profile'],
  services: ['Local SEO', 'Google Map Optimization'],
  outcome:
    'Google Business Profile data recorded verified customer interactions during the selected reporting period, including 40 calls from December 2025 through May 2026. Client identity remains protected.',
})

export default confidentialGbp02
