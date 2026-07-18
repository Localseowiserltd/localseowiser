import CaseStudyView from '@/components/portfolio/CaseStudyView'
import SiteShell from '@/components/layout/SiteShell'
import {
  getPortfolioProjectBySlug,
  getRelatedProjects,
  portfolioProjects,
} from '@/data/portfolio'
import { getProjectDisplayName } from '@/lib/portfolio-display'
import {
  buildPortfolioBreadcrumbSchema,
  buildPortfolioCaseStudyMetadata,
  buildPortfolioCreativeWorkSchema,
  buildPortfolioWebPageSchema,
} from '@/lib/portfolio-seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PortfolioCaseStudyPageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () =>
  portfolioProjects.map((project) => ({
    slug: project.slug,
  }))

export async function generateMetadata({ params }: PortfolioCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getPortfolioProjectBySlug(slug)
  if (!project) {
    return { title: 'Case Study Not Found' }
  }
  return buildPortfolioCaseStudyMetadata(project)
}

const PortfolioCaseStudyPage = async ({ params }: PortfolioCaseStudyPageProps) => {
  const { slug } = await params
  const project = getPortfolioProjectBySlug(slug)
  if (!project) notFound()

  const relatedProjects = getRelatedProjects(project)
  const breadcrumbSchema = buildPortfolioBreadcrumbSchema(project)
  const webPageSchema = buildPortfolioWebPageSchema(project)
  const creativeWorkSchema = buildPortfolioCreativeWorkSchema(project)

  return (
    <SiteShell>
      <nav className="case-study-breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li aria-current="page">{getProjectDisplayName(project)}</li>
          </ol>
        </div>
      </nav>
      <CaseStudyView project={project} relatedProjects={relatedProjects} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
    </SiteShell>
  )
}

export default PortfolioCaseStudyPage
