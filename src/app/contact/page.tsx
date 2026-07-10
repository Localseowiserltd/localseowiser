import SiteShell from '@/components/layout/SiteShell'
import { contactPageMeta } from '@/data/site-content'
import ContactPageSections from './ContactPageSections'

export const metadata = {
  title: { absolute: contactPageMeta.title },
  description: contactPageMeta.description,
}

const ContactPage = () => {
  return (
    <SiteShell>
      <ContactPageSections />
    </SiteShell>
  )
}

export default ContactPage
