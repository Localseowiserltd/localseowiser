/**
 * Contact page copy — concise, no unverified promises.
 */

export const contactPageMeta = {
  title: 'Contact Local SEO Wiser | Request a Local SEO Review',
  description:
    'Contact Local SEO Wiser to discuss your website, Google Business Profile, local search visibility, and digital marketing goals.',
}

export const contactPageHero = {
  eyebrow: 'Contact Local SEO Wiser',
  title: 'Let’s Talk About Your Local Visibility',
  description:
    'Tell us where your business is struggling to get found. We’ll review your website, Google Business Profile, and local search presence, then explain the clearest next steps.',
  secondary:
    'Serving businesses in Pittsburgh, across the United States, and selected international markets.',
}

export const contactPageMethods = {
  title: 'Choose the Easiest Way to Reach Us',
  cards: [
    {
      id: 'phone',
      icon: 'tabler:phone',
      title: 'Phone',
      type: 'phones' as const,
    },
    {
      id: 'email',
      icon: 'tabler:mail',
      title: 'Email',
      type: 'email' as const,
    },
    {
      id: 'location',
      icon: 'tabler:map-pin',
      title: 'Location',
      type: 'location' as const,
      value: 'Pittsburgh, Pennsylvania, USA',
    },
  ],
}

export const contactPageReview = {
  title: 'Request Your Free Local SEO Review',
  intro:
    'Share a few details about your business and where you want to improve visibility. We’ll use that information to review your current local search presence before the first conversation.',
  checklist: [
    'Your business name and website',
    'The services or products you offer',
    'The areas you want to target',
    'Your main visibility or lead-generation challenge',
  ],
}

export const contactFormServices = [
  'Local SEO',
  'Google Business Profile Optimization',
  'Technical SEO',
  'Website Development',
  'PPC / Google Ads',
  'Other',
] as const

export const contactPageNextSteps = {
  title: 'What Happens After You Contact Us?',
  steps: [
    {
      number: '01',
      title: 'Initial Review',
      description:
        'We review your website, Google Business Profile, and the information you submitted.',
    },
    {
      number: '02',
      title: 'Discovery Call',
      description:
        'We discuss your goals, target locations, current challenges, and priorities.',
    },
    {
      number: '03',
      title: 'Clear Recommendation',
      description:
        'You receive a practical recommendation based on your business, market, and needs.',
    },
    {
      number: '04',
      title: 'You Decide',
      description:
        'There is no pressure. You can review the recommendation and decide whether to move forward.',
    },
  ],
}

export const contactPageFaq = {
  eyebrow: 'FAQ',
  title: 'Contact Questions',
  items: [
    {
      question: 'How quickly will I receive a response?',
      answer:
        'We aim to reply within one to two business days after reviewing your message. Response timing can vary with volume and how complete the details you share are.',
    },
    {
      question: 'Do you offer a free review?',
      answer:
        'Yes. We offer a free preliminary review of your local search presence based on the information you submit. It is meant to clarify next steps — not a full paid project scope.',
    },
    {
      question: 'Do you work with businesses outside Pittsburgh?',
      answer:
        'Yes. Pittsburgh is a primary market, and we also work with businesses across the United States and selected international markets.',
    },
    {
      question: 'What happens after I submit the form?',
      answer:
        'We review your details, then follow up to discuss what we found and whether a discovery call makes sense. There is no obligation to continue.',
    },
  ],
}
