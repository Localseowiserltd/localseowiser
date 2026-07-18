import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import AnonymizedPrivacyNotice from '@/components/portfolio/AnonymizedPrivacyNotice'
import ScreenshotFrame from '@/components/portfolio/ScreenshotFrame'
import {
  getProjectDisplayName,
  isConfidentialProject,
  shouldShowLogo,
  shouldShowWebsite,
} from '@/lib/portfolio-display'
import type { PortfolioProject } from '@/types/portfolio'

type PortfolioHeroProps = {
  project: PortfolioProject
}

const PortfolioHero = ({ project }: PortfolioHeroProps) => {
  const confidential = isConfidentialProject(project)
  const showWebsite = shouldShowWebsite(project)

  return (
    <section className="case-study-hero section">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-center">
          <div className="col-lg-6">
            <ScrollReveal animation="fade-up">
              <p className="section-eyebrow mb-2">
                <span className="section-eyebrow-line" aria-hidden="true" />
                Case Study
                <span className="section-eyebrow-line" aria-hidden="true" />
              </p>
              {shouldShowLogo(project) && project.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.logo.src} alt={project.logo.alt} className="case-study-hero__logo" />
              ) : null}
              <h1 className="case-study-hero__title">{project.h1}</h1>
              {confidential ? <AnonymizedPrivacyNotice className="mb-3" /> : null}
              <p className="case-study-hero__support">{project.supportingText}</p>
              <p className="case-study-hero__summary">{project.heroSummary}</p>
              <ul className="case-study-hero__badges" aria-label="Project tags">
                {confidential ? <li>Client Identity Protected</li> : null}
                <li>{getProjectDisplayName(project)}</li>
                <li>{project.industry}</li>
                <li>{project.country}</li>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
                {project.services.slice(0, 2).map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <div className="case-study-hero__actions">
                {showWebsite && project.liveUrl ? (
                  <ButtonLink href={project.liveUrl} variant="primary" target="_blank" rel="noopener noreferrer">
                    Visit Live Website
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </ButtonLink>
                ) : null}
                <ButtonLink href="/contact" variant={showWebsite ? 'outline-primary' : 'primary'}>
                  Discuss a Similar Project
                </ButtonLink>
              </div>
            </ScrollReveal>
          </div>
          <div className="col-lg-6">
            <ScrollReveal animation="fade-up" delay={120}>
              <ScreenshotFrame image={project.featuredImage} variant="hero" loading="eager" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHero
