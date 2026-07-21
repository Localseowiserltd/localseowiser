/**
 * Contact page copy — matched to current design snap.
 */

export const contactPageMeta = {
  title: 'Contact Local SEO Wiser | Free Consultation',
  description:
    'Contact Local SEO Wiser for a free consultation. Call, email, or send a message about Local SEO, Google Ads, web design, and digital growth.',
}

export const contactPageHero = {
  eyebrow: 'Contact Us',
  title: "Let's Grow Your Business Together",
  titleAccent: 'Business Together',
  description:
    'Tell us about your goals and we will help you choose the right mix of Local SEO, ads, content, and website services to attract more customers.',
  trustItems: [
    { label: 'Free Consultation', icon: 'tabler:message-circle' },
    { label: '24/7 Support', icon: 'tabler:headset' },
    { label: 'Custom Strategies', icon: 'tabler:target' },
    { label: '100% Transparency', icon: 'tabler:eye' },
  ],
  image: '/contact-hub-hero.png',
  imageAlt: 'Contact illustration with envelope, phone, and paper plane',
}

export const contactPageMethods = {
  title: 'Get in Touch',
  cards: [
    {
      id: 'phone',
      icon: 'tabler:phone',
      title: 'Call Us',
      type: 'phones' as const,
      note: 'Mon–Fri, 9:00 AM – 6:00 PM',
    },
    {
      id: 'email',
      icon: 'tabler:mail',
      title: 'Email Us',
      type: 'email' as const,
    },
    {
      id: 'location',
      icon: 'tabler:map-pin',
      title: 'Office Location',
      type: 'location' as const,
      value: 'Pittsburgh, PA',
    },
    {
      id: 'hours',
      icon: 'tabler:clock',
      title: 'Business Hours',
      type: 'location' as const,
      value: 'Mon–Fri 9:00 AM – 6:00 PM',
    },
  ],
}

export const contactPageReview = {
  title: 'Send Us a Message',
  intro: 'Share a few details and we will get back with clear next steps for your business.',
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

export const contactPageMap = {
  title: 'Our Office',
  address: 'Pittsburgh, PA, United States',
  directionsLabel: 'Get Directions',
  directionsHref: 'https://www.google.com/maps/search/?api=1&query=Local+SEO+Wiser+Pittsburgh',
  embedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5334164650594!2d-80.00688940986495!3d40.41918598185811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f1e08e63b315%3A0x8e82080820c54157!2sLocal%20Seo%20Wiser!5e0!3m2!1sen!2sae!4v1784604838823!5m2!1sen!2sae',
}

export const contactPageNextSteps = {
  title: 'What Happens After You Contact Us?',
  steps: [
    {
      number: '01',
      title: 'Initial Review',
      description: 'We review your website, Google Business Profile, and the information you submitted.',
    },
    {
      number: '02',
      title: 'Discovery Call',
      description: 'We discuss your goals, target locations, current challenges, and priorities.',
    },
    {
      number: '03',
      title: 'Clear Recommendation',
      description: 'You receive a practical recommendation based on your business, market, and needs.',
    },
    {
      number: '04',
      title: 'You Decide',
      description: 'There is no pressure. You can review the recommendation and decide whether to move forward.',
    },
  ],
}

export const contactPageFaq = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Common Contact Questions',
  items: [
    {
      question: 'How quickly will you reply?',
      answer: 'We typically respond within one business day. Urgent requests are prioritized whenever possible.',
    },
    {
      question: 'Is the consultation really free?',
      answer: 'Yes. Your first consultation is free and focused on understanding your goals and recommending practical next steps.',
    },
    {
      question: 'Do you only work with Pittsburgh businesses?',
      answer: 'Pittsburgh is our home market, but we also support businesses across the United States and selected international markets.',
    },
    {
      question: 'What information should I include in the form?',
      answer: 'Share your business name, website if you have one, the services you need, and a short note about your current challenge or goal.',
    },
    {
      question: 'Can I schedule a call instead of emailing?',
      answer: 'Yes. Call us directly or send a message and we will schedule a convenient time to talk.',
    },
  ],
}

export const contactPageSideCta = {
  title: 'Ready to Grow Your Business?',
  text: 'Get a free consultation and a clear plan for the services that will help you attract more customers.',
  buttonLabel: 'Get Free Consultation',
  buttonHref: 'https://wa.me/14126637288',
}
