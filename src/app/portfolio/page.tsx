import PortfolioCTA from '@/components/portfolio/PortfolioCTA'
import PortfolioListing from '@/components/portfolio/PortfolioListing'
import SiteShell from '@/components/layout/SiteShell'
import SectionHeader from '@/components/SectionHeader'
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
