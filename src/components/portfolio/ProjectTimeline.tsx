import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type ProjectTimelineProps = {
  project: PortfolioProject
}

const ProjectTimeline = ({ project }: ProjectTimelineProps) => {
  if (!project.timeline?.length) return null

  return (
    <section className="section case-study-timeline">
      <div className="container">
        <SectionHeader eyebrow="Timeline" title="Project timeline" align="left" />
        <ol className="case-study-timeline__list">
          {project.timeline.map((item) => (
            <li key={`${item.label}-${item.detail}`}>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProjectTimeline
