import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type ProjectGoalsProps = {
  project: PortfolioProject
}

const ProjectGoals = ({ project }: ProjectGoalsProps) => {
  const copy = project.sections?.goals ?? {
    eyebrow: 'Objectives',
    title: 'Project objectives',
  }

  return (
    <div className="project-goals">
      <SectionHeader eyebrow={copy.eyebrow ?? ''} title={copy.title} subtitle={copy.subtitle} align="left" />
      <ul className="case-study-list case-study-list--check">
        {project.objectives.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="case-study-note mb-0">
        These objectives guided the engagement. Not every objective is presented as fully completed.
      </p>
    </div>
  )
}

export default ProjectGoals
