/**
 * About page team roster.
 *
 * SOURCE: Official Local SEO Wiser team introduction graphics provided by the business
 * (Instagram-style team posts). Names, roles, biographies, and skills are taken only
 * from text published on those graphics. Portraits cropped from the same official assets.
 * Updated: 2026-07-20
 */

export type AboutTeamMember = {
  id: string
  name: string
  role: string
  /** Short department label for the card eyebrow (derived from published role). */
  label: string
  image: string
  imageAlt: string
  biography: string
  skills: string[]
  featured?: boolean
}

export const aboutTeamMembers: AboutTeamMember[] = [
  {
    id: 'usman-fadi',
    name: 'Usman Fadi',
    role: 'Founder & CEO',
    label: 'Founder',
    image: '/images/team/usman-fadi-founder-ceo.webp',
    imageAlt: 'Usman Fadi, Founder & CEO at Local SEO Wiser',
    biography:
      'The founder of Local SEO Wiser and Digital Solutions Architect. His work spans SEO, web development, digital marketing, and business strategy — with a focus on empowering businesses through clear strategy, smart execution, and continuous growth.',
    skills: ['Search Engine Optimization', 'Web Development', 'Digital Marketing'],
    featured: true,
  },
  {
    id: 'bilal-ahmad',
    name: 'Bilal Ahmad',
    role: 'Co-Founder & Lead Web Developer',
    label: 'Co-Founder',
    image: '/images/team/bilal-ahmad-cofounder-web-developer.webp',
    imageAlt: 'Bilal Ahmad, Co-Founder & Lead Web Developer at Local SEO Wiser',
    biography:
      'Co-founder of Local SEO Wiser and the driving force behind technical operations. He focuses on modern web technologies and clean, scalable solutions so every project is fast, secure, and built to perform.',
    skills: ['WordPress Development', 'Shopify Development', 'Custom Web Applications'],
  },
  {
    id: 'najaf-khan',
    name: 'Najaf Khan',
    role: 'Operations & Project Manager',
    label: 'Operations',
    image: '/images/team/najaf-khan-operations-project-manager.webp',
    imageAlt: 'Najaf Khan, Operations & Project Manager at Local SEO Wiser',
    biography:
      'Drives projects and team coordination. He focuses on smooth operations, timely delivery, and strong client communication.',
    skills: ['Project Management', 'Team Coordination', 'Client Communication'],
  },
  {
    id: 'adnan-lagacy',
    name: 'Adnan Lagacy',
    role: 'HR Head',
    label: 'HR',
    image: '/images/team/adnan-lagacy-hr-head.webp',
    imageAlt: 'Adnan Lagacy, HR Head at Local SEO Wiser',
    biography:
      'Leads people development and organizational growth, with a focus on workplace culture where talent thrives and teams achieve more together.',
    skills: ['Talent Acquisition', 'Employee Engagement', 'Performance Management'],
  },
  {
    id: 'tayyab-ghauri',
    name: 'Tayyab Ghauri',
    role: 'Graphic Designer & Google Business Profile Specialist',
    label: 'Design',
    image: '/images/team/tayyab-ghauri-graphic-designer-gbp.webp',
    imageAlt: 'Tayyab Ghauri, Graphic Designer & Google Business Profile Specialist at Local SEO Wiser',
    biography:
      'Brings creativity and local business expertise to Local SEO Wiser — from brand visuals to Google Business Profile optimization that helps businesses strengthen their online presence.',
    skills: ['Graphic Design', 'Google Business Profile', 'Brand Identity Design'],
  },
  {
    id: 'mian-nasir-shakeel',
    name: 'Mian Nasir Shakeel',
    role: 'Local SEO Expert',
    label: 'Local SEO',
    image: '/images/team/mian-nasir-shakeel-local-seo-expert.webp',
    imageAlt: 'Mian Nasir Shakeel, Local SEO Expert at Local SEO Wiser',
    biography:
      'Helps businesses improve local visibility, rank in Google’s Local Pack, and attract customers from their target locations through Google Business Profile work, citation building, and local SEO audits.',
    skills: ['Local SEO Strategy', 'Google Business Profile Optimization', 'Citation Building & Management'],
  },
  {
    id: 'tasadduq-hussain',
    name: 'Tasadduq Hussain',
    role: 'Senior SEO Expert',
    label: 'SEO',
    image: '/images/team/tasadduq-hussain-senior-seo-expert.webp',
    imageAlt: 'Tasadduq Hussain, Senior SEO Expert at Local SEO Wiser',
    biography:
      'Helps businesses rank higher, attract the right audience, and achieve measurable growth online through keyword research, on-page SEO, link building, and technical SEO.',
    skills: ['Keyword Research', 'On-Page SEO', 'Technical SEO'],
  },
  {
    id: 'atif-arif',
    name: 'Atif Arif',
    role: 'SEO Growth Specialist',
    label: 'SEO',
    image: '/images/team/atif-arif-seo-growth-specialist.webp',
    imageAlt: 'Atif Arif, SEO Growth Specialist at Local SEO Wiser',
    biography:
      'Helps businesses improve online visibility and search rankings through on-page optimization, off-page SEO, keyword research, technical SEO, and link-building strategies focused on sustainable organic growth.',
    skills: ['Keyword Research', 'On-Page SEO', 'Technical SEO'],
  },
  {
    id: 'saad-muhammad-irshad',
    name: 'Saad Muhammad Irshad',
    role: 'Marketing Specialist',
    label: 'Marketing',
    image: '/images/team/saad-muhammad-irshad-marketing-specialist.webp',
    imageAlt: 'Saad Muhammad Irshad, Marketing Specialist at Local SEO Wiser',
    biography:
      'Dedicated to building brands, driving engagement, and delivering result-driven marketing strategies. He combines creativity with analytics to help businesses grow.',
    skills: ['Digital Marketing', 'Social Media Marketing', 'Campaign Management'],
  },
  {
    id: 'ibrahim-kholil',
    name: 'Ibrahim Kholil',
    role: 'Business Growth & Media Specialist',
    label: 'Growth',
    image: '/images/team/ibrahim-kholil-business-growth-media.webp',
    imageAlt: 'Ibrahim Kholil, Business Growth & Media Specialist at Local SEO Wiser',
    biography:
      'Supports business growth and brand visibility through creative media strategies — combining planning and data-driven approaches to strengthen digital presence and audience engagement.',
    skills: ['Business Growth', 'Brand Strategy', 'Media Management'],
  },
  {
    id: 'syed-qasim',
    name: 'Syed Qasim',
    role: 'Google Ads & PPC Specialist',
    label: 'PPC',
    image: '/images/team/syed-qasim-google-ads-ppc-specialist.webp',
    imageAlt: 'Syed Qasim, Google Ads & PPC Specialist at Local SEO Wiser',
    biography:
      'Helps businesses reach the right audience with data-driven ad campaigns designed to maximize ROI, increase leads, and support sustainable growth.',
    skills: ['Google Ads', 'PPC Management', 'Analytics & Reporting'],
  },
]

export const aboutTeamSection = {
  eyebrow: 'Our Team',
  title: 'The people behind your local growth',
  subtitle:
    'A focused team that blends strategy and hands-on execution, so your local SEO is always moving forward.',
}
