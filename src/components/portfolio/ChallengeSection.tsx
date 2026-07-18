import SectionHeader from '@/components/SectionHeader'
import { shouldShowWebsite } from '@/lib/portfolio-display'
import type { PortfolioProject } from '@/types/portfolio'

type ChallengeSectionProps = {
  project: PortfolioProject
}

const ChallengeSection = ({ project }: ChallengeSectionProps) => {
  const copy = project.sections?.challenge ?? {
    eyebrow: 'Background',
    title: 'The client’s original situation',
  }

  return (
    <div className="challenge-section">
      <SectionHeader eyebrow={copy.eyebrow ?? ''} title={copy.title} subtitle={copy.subtitle} align="left" />
      <ul className="case-study-list">
        {project.situation.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {project.oldDomain && shouldShowWebsite(project) ? (
        <p className="case-study-note mb-0">
          Previous domain:{' '}
          <a href={project.oldDomain} target="_blank" rel="noopener noreferrer">
            {project.oldDomain.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </p>
      ) : null}
    </div>
  )
}

export default ChallengeSection
