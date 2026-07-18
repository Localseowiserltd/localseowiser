import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type TechnologyStackProps = {
  project: PortfolioProject
}

const TechnologyStack = ({ project }: TechnologyStackProps) => {
  if (!project.technologyStack.length) return null

  const copy = project.sections?.stack ?? {
    eyebrow: 'Stack',
    title: 'Technology stack',
  }

  return (
    <div className="technology-stack">
      <SectionHeader eyebrow={copy.eyebrow ?? ''} title={copy.title} subtitle={copy.subtitle} align="left" />
      <ul className="case-study-stack">
        {project.technologyStack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default TechnologyStack
