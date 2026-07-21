import PortfolioCTA from '@/components/portfolio/PortfolioCTA'
import PortfolioHubHero from '@/components/portfolio/PortfolioHubHero'
import PortfolioListing from '@/components/portfolio/PortfolioListing'
import SiteShell from '@/components/layout/SiteShell'
import { portfolioListingMeta, portfolioProjects } from '@/data/portfolio'
import { buildHubPageMetadata, buildPortfolioIndexSchemas } from '@/lib/hub-seo'
import type { Metadata } from 'next'

export const metadata: Metadata = buildHubPageMetadata({
  title: portfolioListingMeta.title,
  description: portfolioListingMeta.description,
  path: '/portfolio',
  imageAlt: portfolioListingMeta.h1,
})

const PortfolioPage = () => {
  const schemas = buildPortfolioIndexSchemas()

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`portfolio-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="portfolio-hub-page">
        <PortfolioHubHero />
        <PortfolioListing projects={portfolioProjects} />
        <PortfolioCTA variant="listing" />
      </div>
    </SiteShell>
  )
}

export default PortfolioPage
