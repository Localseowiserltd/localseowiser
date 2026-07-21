'use client'

import { useMemo, useState } from 'react'
import PortfolioCard from '@/components/portfolio/PortfolioCard'
import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  PORTFOLIO_LISTING_FILTERS,
  projectMatchesFilter,
  type PortfolioListingFilterId,
} from '@/lib/portfolio-display'
import type { PortfolioProject } from '@/types/portfolio'

type PortfolioListingProps = {
  projects: PortfolioProject[]
}

const confidentialHighlights = [
  { value: '+258%', label: 'Organic Traffic', icon: 'tabler:chart-line', tone: 'blue' },
  { value: '+312%', label: 'Local Rankings', icon: 'tabler:chart-bar', tone: 'green' },
  { value: '+187%', label: 'Leads Increase', icon: 'tabler:map-pin', tone: 'blue' },
  { value: '+94%', label: 'Call Inquiries', icon: 'tabler:star', tone: 'yellow' },
]

const PortfolioListing = ({ projects }: PortfolioListingProps) => {
  const [filter, setFilter] = useState<PortfolioListingFilterId>('all')

  const filtered = useMemo(
    () => projects.filter((project) => projectMatchesFilter(project, filter)),
    [projects, filter],
  )

  const showConfidentialPromo = filter !== 'confidential'

  return (
    <>
      <section className="section portfolio-hub-projects pt-0">
        <div className="container">
          <div className="portfolio-hub-filters" role="toolbar" aria-label="Filter case studies">
            {PORTFOLIO_LISTING_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`portfolio-hub-filters__btn${filter === item.id ? ' is-active' : ''}`}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}>
                {item.id === 'confidential' ? (
                  <IconifyIcon icon="tabler:lock" aria-hidden="true" />
                ) : null}
                {item.label}
              </button>
            ))}
          </div>

          <div className="portfolio-hub-grid">
            {filtered.length ? (
              filtered.map((project) => <PortfolioCard key={project.slug} project={project} />)
            ) : (
              <p className="portfolio-hub-empty mb-0">No case studies match this filter yet.</p>
            )}
          </div>
        </div>
      </section>

      {showConfidentialPromo ? (
        <section className="section portfolio-hub-confidential" id="confidential-projects">
          <div className="container">
            <ScrollReveal animation="fade-up" hoverable={false}>
              <div className="portfolio-hub-confidential__card">
                <div className="portfolio-hub-confidential__copy">
                  <span className="portfolio-hub-confidential__icon">
                    <IconifyIcon icon="tabler:lock" aria-hidden="true" />
                  </span>
                  <h2 className="portfolio-hub-confidential__title">Confidential Projects</h2>
                  <p className="portfolio-hub-confidential__text">
                    Some of our strongest results come from clients who prefer to stay anonymous. We share
                    verified platform data without revealing business identities.
                  </p>
                  <button
                    type="button"
                    className="portfolio-hub-confidential__btn"
                    onClick={() => setFilter('confidential')}>
                    View Confidential Case Studies
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </button>
                </div>
                <div className="portfolio-hub-confidential__stats">
                  {confidentialHighlights.map((item) => (
                    <article
                      key={item.label}
                      className={`portfolio-hub-confidential__stat portfolio-hub-confidential__stat--${item.tone}`}>
                      <span className="portfolio-hub-confidential__stat-icon">
                        <IconifyIcon icon={item.icon} aria-hidden="true" />
                      </span>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </article>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ) : null}

      <section className="portfolio-hub-stats-bar" aria-label="Portfolio statistics">
        <div className="container">
          <div className="portfolio-hub-stats-bar__grid">
            <article>
              <span className="portfolio-hub-stats-bar__icon">
                <IconifyIcon icon="tabler:building-store" aria-hidden="true" />
              </span>
              <div>
                <strong>140+</strong>
                <span>Businesses Helped</span>
              </div>
            </article>
            <article>
              <span className="portfolio-hub-stats-bar__icon">
                <IconifyIcon icon="tabler:trending-up" aria-hidden="true" />
              </span>
              <div>
                <strong>15+</strong>
                <span>Industries Served</span>
              </div>
            </article>
            <article>
              <span className="portfolio-hub-stats-bar__icon">
                <IconifyIcon icon="tabler:map-pin" aria-hidden="true" />
              </span>
              <div>
                <strong>Pittsburgh</strong>
                <span>&amp; Surrounding Areas</span>
              </div>
            </article>
            <article>
              <span className="portfolio-hub-stats-bar__icon">
                <IconifyIcon icon="tabler:star" aria-hidden="true" />
              </span>
              <div>
                <strong>5.0</strong>
                <span className="portfolio-hub-stats-bar__stars" aria-label="5 star average rating">
                  <IconifyIcon icon="tabler:star-filled" />
                  <IconifyIcon icon="tabler:star-filled" />
                  <IconifyIcon icon="tabler:star-filled" />
                  <IconifyIcon icon="tabler:star-filled" />
                  <IconifyIcon icon="tabler:star-filled" />
                </span>
                <span>Average Rating</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioListing
