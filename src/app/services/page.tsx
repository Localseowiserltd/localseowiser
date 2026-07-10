import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import ServicesPageSections from './ServicesPageSections'

export const metadata = {
  title: 'Services',
}

const ServicesPage = () => {
  return (
    <SiteShell>
      <div className="services-page">
        <PageHeader
          badge="Our Services"
          title="Everything you need to grow locally: SEO, ads, web, and automation"
          description="Browse by category, compare services, and open any page to see deliverables, process steps, and FAQs."
        />
        <ServicesPageSections />
      </div>
    </SiteShell>
  )
}

export default ServicesPage
