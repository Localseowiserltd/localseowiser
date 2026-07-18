import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type QueryVisibilityProps = {
  project: PortfolioProject
}

const QueryVisibility = ({ project }: QueryVisibilityProps) => {
  if (!project.queryExamples?.length) return null

  const copy = project.sections?.queries ?? {
    eyebrow: 'Search Visibility',
    title: 'Growing visibility across relevant search queries',
    subtitle: project.querySectionIntro,
  }

  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow={copy.eyebrow ?? ''} title={copy.title} subtitle={copy.subtitle} />
        <ul className="case-study-queries">
          {project.queryExamples.map((query) => (
            <li key={query}>
              <code>{query}</code>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default QueryVisibility
