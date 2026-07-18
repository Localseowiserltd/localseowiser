import PortfolioCTA from '@/components/portfolio/PortfolioCTA'
import PortfolioListing from '@/components/portfolio/PortfolioListing'
import SiteShell from '@/components/layout/SiteShell'
import SectionHeader from '@/components/SectionHeader'
import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import { portfolioListingMeta, portfolioProjects } from '@/data/portfolio'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: portfolioListingMeta.title },
  description: portfolioListingMeta.description,
  alternates: {
    canonical: `${SITE_ORIGIN}/portfolio`,
  },
  openGraph: {
    title: portfolioListingMeta.title,
    description: portfolioListingMeta.description,
    url: `${SITE_ORIGIN}/portfolio`,
    type: 'website',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioListingMeta.title,
    description: portfolioListingMeta.description,
  },
}

const PortfolioPage = () => {
  return (
    <SiteShell>
      <section className="section portfolio-listing-hero">
        <div className="container">
          <SectionHeader
            eyebrow="Portfolio"
            title={portfolioListingMeta.h1}
            subtitle={portfolioListingMeta.intro}
            align="left"
          />
        </div>
      </section>

      <section className="section pt-0" aria-label="Case studies">
        <div className="container">
          <PortfolioListing projects={portfolioProjects} />
        </div>
      </section>

      <PortfolioCTA variant="listing" />
    </SiteShell>
  )
}

export default PortfolioPage
