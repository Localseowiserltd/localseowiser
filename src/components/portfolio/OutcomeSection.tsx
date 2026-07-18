import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type OutcomeSectionProps = {
  project: PortfolioProject
}

const OutcomeSection = ({ project }: OutcomeSectionProps) => {
  const copy = project.sections?.outcome ?? {
    eyebrow: 'Outcome',
    title: 'Project outcome',
  }

  return (
    <section className="section case-study-outcome">
      <div className="container">
        <SectionHeader eyebrow={copy.eyebrow ?? ''} title={copy.title} subtitle={copy.subtitle} align="left" />
        <p className="case-study-outcome__text">{project.outcome}</p>
      </div>
    </section>
  )
}

export default OutcomeSection
