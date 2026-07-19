/**
 * Homepage “Industries we serve” cards.
 * Single shared source — links must match published industry page routes.
 */

export type HomepageIndustryCard = {
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

/**
 * Confirmed live routes (from `src/app/local-seo-for-*` + industry registry):
 * - HVAC → /local-seo-for-hvac (not …-hvac-companies)
 * - Roofing → /local-seo-for-roofers (not …-roofing-companies)
 */
export const homepageIndustryCards: HomepageIndustryCard[] = [
  {
    title: 'Dentists',
    description:
      'Attract appointment-ready patients searching for dental care, implants, and emergency local treatment.',
    href: '/local-seo-for-dentists',
    image: '/images/industries/local-seo-for-dentists.webp',
    imageAlt: 'Local SEO services for dentists',
  },
  {
    title: 'Doctors',
    description:
      'Grow visibility for medical practices so patients find trusted local care when they search nearby.',
    href: '/local-seo-for-doctors',
    image: '/images/industries/local-seo-for-doctors.webp',
    imageAlt: 'Local SEO services for doctors',
  },
  {
    title: 'Lawyers',
    description:
      'Capture high-intent legal searches and connect with clients ready to book consultations.',
    href: '/local-seo-for-lawyers',
    image: '/images/industries/local-seo-for-lawyers.webp',
    imageAlt: 'Local SEO services for lawyers',
  },
  {
    title: 'Plumbers',
    description:
      'Rank for urgent plumbing and repair searches that turn nearby homeowners into service calls.',
    href: '/local-seo-for-plumbers',
    image: '/images/industries/local-seo-for-plumbers.webp',
    imageAlt: 'Local SEO services for plumbing companies',
  },
  {
    title: 'HVAC Companies',
    description:
      'Win seasonal heating and cooling jobs with stronger Maps visibility and service-area targeting.',
    href: '/local-seo-for-hvac',
    image: '/images/industries/local-seo-for-hvac-companies.webp',
    imageAlt: 'Local SEO services for HVAC companies',
  },
  {
    title: 'Electricians',
    description:
      'Show up for emergency electrical and installation searches that convert into booked jobs.',
    href: '/local-seo-for-electricians',
    image: '/images/industries/local-seo-for-electricians.webp',
    imageAlt: 'Local SEO services for electricians',
  },
  {
    title: 'Roofing Companies',
    description:
      'Reach homeowners searching for roof repair, replacement, and storm-damage services nearby.',
    href: '/local-seo-for-roofers',
    image: '/images/industries/local-seo-for-roofing-companies.webp',
    imageAlt: 'Local SEO services for roofing companies',
  },
  {
    title: 'Restaurants',
    description:
      'Increase reservations and walk-ins by ranking for local dining and near-me restaurant searches.',
    href: '/local-seo-for-restaurants',
    image: '/images/industries/local-seo-for-restaurants.webp',
    imageAlt: 'Local SEO services for restaurants',
  },
  {
    title: 'Real Estate Agents',
    description:
      'Build neighborhood-level visibility that attracts buyers and sellers searching for local agents.',
    href: '/local-seo-for-real-estate-agents',
    image: '/images/industries/local-seo-for-real-estate-agents.webp',
    imageAlt: 'Local SEO services for real estate agents',
  },
  {
    title: 'Insurance Agencies',
    description:
      'Generate qualified quote requests from people searching for trusted local insurance coverage.',
    href: '/local-seo-for-insurance-agencies',
    image: '/images/industries/local-seo-for-insurance-agencies.webp',
    imageAlt: 'Local SEO services for insurance agencies',
  },
  {
    title: 'Financial Advisors',
    description:
      'Connect with clients searching for retirement planning, wealth management, and local advisors.',
    href: '/local-seo-for-financial-advisors',
    image: '/images/industries/local-seo-for-financial-advisors.webp',
    imageAlt: 'Local SEO services for financial advisors',
  },
]

/** Initial homepage cards before “View all industries”. */
export const HOMEPAGE_INDUSTRIES_INITIAL_COUNT = 8
