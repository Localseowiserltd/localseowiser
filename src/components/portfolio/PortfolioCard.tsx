import Link from 'next/link'
import type { PortfolioProject } from '@/types/portfolio'
import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import {
  getProjectCardTitle,
  getProjectDisplayName,
  isConfidentialProject,
  shouldShowClientName,
  shouldShowLogo,
} from '@/lib/portfolio-display'

type PortfolioCardProps = {
  project: PortfolioProject
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  const confidential = isConfidentialProject(project)
  const image = project.featuredImage
  const title = getProjectCardTitle(project)
  const displayName = getProjectDisplayName(project)
  const metrics = project.results.metrics.slice(0, 3)

  return (
    <article className={`portfolio-card${confidential ? ' portfolio-card--confidential' : ''}`}>
      <ScrollReveal animation="fade-up">
        {shouldShowLogo(project) && project.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.logo.src} alt={project.logo.alt} className="portfolio-card__logo" />
        ) : null}
        <Link href={`/portfolio/${project.slug}`} className="portfolio-card__media">
          {/* eslint-disable-next-line @next/next/no-img-element -- fixed crop preview for tall screenshots */}
          <img src={image.src} alt={image.alt} className="portfolio-card__img" loading="lazy" decoding="async" />
        </Link>
        <div className="portfolio-card__body">
          <div className="portfolio-card__meta">
            {confidential ? (
              <span className="portfolio-card__privacy-badge">Client Identity Protected</span>
            ) : null}
            <span className="portfolio-card__location">
              {shouldShowClientName(project) ? project.clientName : displayName}
              {' · '}
              {project.industry}
            </span>
            <span className="portfolio-card__location">{project.country}</span>
            <ul className="portfolio-card__tags" aria-label="Services">
              {project.services.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <ul className="portfolio-card__tags portfolio-card__tags--tech" aria-label="Technologies">
              {project.technologies.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <h2 className="portfolio-card__title">
            <Link href={`/portfolio/${project.slug}`}>{title}</Link>
          </h2>
          <p className="portfolio-card__desc">{project.summary}</p>
          {metrics.length ? (
            <ul className="portfolio-card__metrics" aria-label="Verified metrics">
              {metrics.map((metric) => (
                <li key={`${metric.title}-${metric.value}`}>
                  <span aria-hidden="true">✔</span>
                  <span>
                    {metric.value} {metric.title}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          <ButtonLink href={`/portfolio/${project.slug}`} variant="primary" className="portfolio-card__cta">
            View Case Study
          </ButtonLink>
        </div>
      </ScrollReveal>
    </article>
  )
}

export default PortfolioCard
