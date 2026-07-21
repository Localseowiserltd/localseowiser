import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  getProjectCardTitle,
  getProjectCategoryLabel,
  getProjectHighlightMetric,
  isConfidentialProject,
} from '@/lib/portfolio-display'
import type { PortfolioProject } from '@/types/portfolio'

type PortfolioCardProps = {
  project: PortfolioProject
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  const confidential = isConfidentialProject(project)
  const image = project.featuredImage
  const title = getProjectCardTitle(project)
  const category = getProjectCategoryLabel(project)
  const highlight = getProjectHighlightMetric(project)
  const location = project.location?.trim() || project.country

  return (
    <article className={`portfolio-hub-card${confidential ? ' portfolio-hub-card--confidential' : ''}`}>
      <ScrollReveal animation="fade-up" className="h-100">
        <Link href={`/portfolio/${project.slug}`} className="portfolio-hub-card__media">
          {/* eslint-disable-next-line @next/next/no-img-element -- fixed crop for tall screenshots */}
          <img src={image.src} alt={image.alt} className="portfolio-hub-card__img" loading="lazy" decoding="async" />
        </Link>
        <div className="portfolio-hub-card__body">
          <div className="portfolio-hub-card__top">
            <span className="portfolio-hub-card__category">{category}</span>
            {highlight ? (
              <span className="portfolio-hub-card__metric">
                {highlight.value} {highlight.label}
              </span>
            ) : confidential ? (
              <span className="portfolio-hub-card__metric portfolio-hub-card__metric--muted">Protected</span>
            ) : null}
          </div>
          <h2 className="portfolio-hub-card__title">
            <Link href={`/portfolio/${project.slug}`}>{title}</Link>
          </h2>
          {location ? <p className="portfolio-hub-card__location">{location}</p> : null}
          <p className="portfolio-hub-card__desc">{project.summary}</p>
          <Link href={`/portfolio/${project.slug}`} className="portfolio-hub-card__link">
            View Case Study
            <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </ScrollReveal>
    </article>
  )
}

export default PortfolioCard
