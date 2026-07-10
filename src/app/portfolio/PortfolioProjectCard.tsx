'use client'

import { PortfolioProject } from '@/data/site-content'
import Image from 'next/image'

type PortfolioProjectCardProps = {
  project: PortfolioProject
}

const PortfolioProjectCard = ({ project }: PortfolioProjectCardProps) => {
  return (
    <article className="portfolio-project-card">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-project-card__link"
        aria-label={`Visit ${project.name} live site`}
      >
        <div className="portfolio-project-card__visual">
          <Image
            src={project.image}
            alt={project.previewAlt}
            width={680}
            height={280}
            className="portfolio-project-card__img"
            sizes="(max-width: 767px) 100vw, 660px"
          />
        </div>
        <div className="portfolio-project-card__body">
          <span className="portfolio-project-card__eyebrow">{project.domain}</span>
          <div className="portfolio-project-card__row">
            <h3 className="portfolio-project-card__name">{project.name}</h3>
            <span className="portfolio-project-card__pill">{project.category}</span>
          </div>
          <p className="portfolio-project-card__copy">
            Live client website serving{' '}
            <mark className="portfolio-project-card__hl">{project.location}</mark>.
          </p>
          <div className="portfolio-project-card__foot">
            <span className="portfolio-project-card__spark" aria-hidden="true">
              <svg viewBox="0 0 392.94 418.13">
                <path d="M243.7,418.13C198.37,312.3,118.14,268.5,0,294.73,135.19,238.54,203.38,148.99,149.24,0c49.45,103.91,130.68,145.05,243.7,123.4-127.69,63.18-168.91,165.26-149.24,294.73Z" />
              </svg>
            </span>
            <span className="portfolio-project-card__ticker">VISIT LIVE SITE →</span>
          </div>
        </div>
      </a>
    </article>
  )
}

export default PortfolioProjectCard
