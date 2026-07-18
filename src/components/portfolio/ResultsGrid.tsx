import SectionHeader from '@/components/SectionHeader'
import AnonymizedPrivacyNotice from '@/components/portfolio/AnonymizedPrivacyNotice'
import EvidenceCard from '@/components/portfolio/EvidenceCard'
import { getAvailableScreenshots } from '@/data/portfolio'
import { isConfidentialProject } from '@/lib/portfolio-display'
import type { PortfolioProject } from '@/types/portfolio'

type ResultsGridProps = {
  project: PortfolioProject
}

const ResultsGrid = ({ project }: ResultsGridProps) => {
  const { results } = project
  const evidence = getAvailableScreenshots(results.evidence.length ? results.evidence : project.seoImages)
  const hasMetrics = results.metrics.length > 0
  const confidential =
    isConfidentialProject(project) || evidence.some((image) => image.anonymized === true)

  if (!hasMetrics && !evidence.length) return null

  return (
    <section className="section case-study-results">
      <div className="container">
        <SectionHeader
          eyebrow={results.eyebrow ?? 'Verified Results'}
          title={results.title ?? 'Platform data from verified sources'}
          subtitle={results.subtitle}
        />
        {confidential ? <AnonymizedPrivacyNotice className="mb-4" /> : null}
        {hasMetrics ? (
          <div className="row g-3 g-lg-4 case-study-results__cards">
            {results.metrics.map((metric) => (
              <div className="col-6 col-lg-3" key={`${metric.title}-${metric.value}`}>
                <div className="case-study-results__card">
                  <p className="case-study-results__value">{metric.value}</p>
                  <p className="case-study-results__label">{metric.title}</p>
                  {metric.description ? <p className="case-study-results__desc">{metric.description}</p> : null}
                  <p className="case-study-results__source">Source: {metric.source}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {results.secondaryMetrics?.length ? (
          <div className="row g-3 mt-1">
            {results.secondaryMetrics.map((metric) => (
              <div className="col-md-6" key={`${metric.title}-${metric.value}`}>
                <div className="case-study-results__secondary">
                  <strong>{metric.value}</strong>
                  <span>{metric.title}</span>
                  <small>Source: {metric.source}</small>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {results.notes.length ? (
          <ul className="case-study-results__notes">
            {results.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
        {evidence.length ? (
          <div className="row g-4 mt-2">
            {evidence.map((image) => (
              <div className="col-lg-4" key={image.src}>
                <EvidenceCard
                  image={image}
                  anonymized={isConfidentialProject(project) || image.anonymized}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ResultsGrid
