import SiteShell from '@/components/layout/SiteShell'
import { contactPageMeta } from '@/data/contact'
import { buildContactPageSchemas, buildHubPageMetadata } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import ContactPageSections from './ContactPageSections'

export const metadata: Metadata = buildHubPageMetadata({
  title: contactPageMeta.title,
  description: contactPageMeta.description,
  path: '/contact',
  imageAlt: 'Contact Local SEO Wiser',
})

const ContactPage = () => {
  const schemas = buildContactPageSchemas()

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`contact-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ContactPageSections />
    </SiteShell>
  )
}

export default ContactPage
