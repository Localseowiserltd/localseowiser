import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type PortfolioOverviewProps = {
  project: PortfolioProject
}

const PortfolioOverview = ({ project }: PortfolioOverviewProps) => {
  return (
    <section className="section case-study-snapshot">
      <div className="container">
        <SectionHeader eyebrow="Project Snapshot" title="At a glance" align="left" />
        <dl className="case-study-snapshot__grid">
          {project.snapshot.map((item) => (
            <div key={item.label} className="case-study-snapshot__item">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default PortfolioOverview
