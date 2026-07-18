import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import { getProjectCardTitle, getProjectDisplayName } from '@/lib/portfolio-display'
import type { PortfolioProject } from '@/types/portfolio'

type RelatedProjectsProps = {
  projects: PortfolioProject[]
}

const RelatedProjects = ({ projects }: RelatedProjectsProps) => {
  if (!projects.length) return null

  return (
    <section className="section related-projects">
      <div className="container">
        <SectionHeader
          eyebrow="More Work"
          title="Related projects"
          subtitle="Other case studies that share industry, location, services, or technology."
          align="left"
        />
        <ul className="related-projects__list">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/portfolio/${project.slug}`} className="related-projects__card">
                <span className="related-projects__client">{getProjectDisplayName(project)}</span>
                <strong>{getProjectCardTitle(project)}</strong>
                <span className="related-projects__meta">
                  {project.industry} · {project.country}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RelatedProjects
