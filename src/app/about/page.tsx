import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import { aboutPageHero, aboutPageMeta } from '@/data/site-content'
import AboutPageSections from './AboutPageSections'

export const metadata = {
  title: { absolute: aboutPageMeta.title },
  description: aboutPageMeta.description,
}

const AboutPage = () => {
  return (
    <SiteShell>
      <PageHeader badge={aboutPageHero.badge} title={aboutPageHero.title} description={aboutPageHero.description} />
      <AboutPageSections />
    </SiteShell>
  )
}

export default AboutPage
