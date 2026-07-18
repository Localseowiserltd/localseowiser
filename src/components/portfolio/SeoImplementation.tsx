import ButtonLink from '@/components/ButtonLink'
import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type SeoImplementationProps = {
  project: PortfolioProject
}

const SeoImplementation = ({ project }: SeoImplementationProps) => {
  if (!project.strategy.seo.length) return null

  const copy = project.sections?.seo ?? {
    eyebrow: 'SEO Implementation',
    title: 'Technical, on-page, and local SEO foundations',
  }

  return (
    <section className="section case-study-seo">
      <div className="container">
        <SectionHeader eyebrow={copy.eyebrow ?? ''} title={copy.title} subtitle={copy.subtitle} align="left" />
        <div className="row g-4">
          <div className="col-lg-7">
            <ul className="case-study-list case-study-list--check">
              {project.strategy.seo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="case-study-note">
              Keyword research and search-intent mapping informed service and location content where applicable.
              Dashboard or plugin screenshots that were not supplied are not shown here.
            </p>
          </div>
          {project.relatedServiceLinks.length ? (
            <div className="col-lg-5">
              <div className="case-study-related">
                <h3>Related Local SEO Wiser services</h3>
                <ul>
                  {project.relatedServiceLinks.map((link) => (
                    <li key={link.href}>
                      <ButtonLink href={link.href} variant="outline-primary" className="w-100">
                        {link.label}
                      </ButtonLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default SeoImplementation
