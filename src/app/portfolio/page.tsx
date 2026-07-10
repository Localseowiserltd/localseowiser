import SiteShell from '@/components/layout/SiteShell'
import PortfolioHero from './PortfolioHero'
import PortfolioPageSections from './PortfolioPageSections'

export const metadata = {
  title: 'Portfolio',
}

const PortfolioPage = () => {
  return (
    <SiteShell>
      <PortfolioHero />
      <PortfolioPageSections />
    </SiteShell>
  )
}

export default PortfolioPage
