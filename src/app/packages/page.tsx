import SiteShell from '@/components/layout/SiteShell'
import { packages, packagesPageMeta } from '@/data/packages'
import { buildHubPageMetadata, buildPackagesHubSchemas } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import PackagesHero from './PackagesHero'
import PackagesPageSections from './PackagesPageSections'

export const metadata: Metadata = buildHubPageMetadata({
  title: packagesPageMeta.title,
  description: packagesPageMeta.description,
  path: '/packages',
  imageAlt: 'Local SEO Packages',
})

const PackagesPage = () => {
  const schemas = buildPackagesHubSchemas(
    packages.map((pkg) => ({ name: pkg.name, description: pkg.description })),
  )

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`packages-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PackagesHero />
      <PackagesPageSections />
    </SiteShell>
  )
}

export default PackagesPage
