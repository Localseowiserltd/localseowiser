import SiteShell from '@/components/layout/SiteShell'
import PackagesHero from './PackagesHero'
import PackagesPageSections from './PackagesPageSections'

export const metadata = {
  title: 'Packages',
}

const PackagesPage = () => {
  return (
    <SiteShell>
      <PackagesHero />
      <PackagesPageSections />
    </SiteShell>
  )
}

export default PackagesPage
