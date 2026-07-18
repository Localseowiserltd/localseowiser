'use client'

import { useMemo, useState } from 'react'
import PortfolioCard from '@/components/portfolio/PortfolioCard'
import {
  PORTFOLIO_LISTING_FILTERS,
  getPortfolioListingStats,
  projectMatchesFilter,
  type PortfolioListingFilterId,
} from '@/lib/portfolio-display'
import type { PortfolioProject } from '@/types/portfolio'

type PortfolioListingProps = {
  projects: PortfolioProject[]
}

const PortfolioListing = ({ projects }: PortfolioListingProps) => {
  const [filter, setFilter] = useState<PortfolioListingFilterId>('all')
  const stats = useMemo(() => getPortfolioListingStats(projects), [projects])

  const filtered = useMemo(
    () => projects.filter((project) => projectMatchesFilter(project, filter)),
    [projects, filter],
  )

  return (
    <>
      <div className="portfolio-listing-stats" aria-label="Portfolio statistics">
        <p>
          <strong>{stats.publicCount}</strong> Public Case {stats.publicCount === 1 ? 'Study' : 'Studies'}
        </p>
        <p>
          <strong>{stats.confidentialCount}</strong> Confidential SEO{' '}
          {stats.confidentialCount === 1 ? 'Project' : 'Projects'}
        </p>
        <p>
          <strong>{stats.totalCount}</strong> Real Client {stats.totalCount === 1 ? 'Project' : 'Projects'}
        </p>
        <p>
          <strong>{stats.industriesServed}</strong> Industries Served
        </p>
      </div>

      <div className="portfolio-listing-filters" role="toolbar" aria-label="Filter case studies">
        {PORTFOLIO_LISTING_FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`portfolio-listing-filters__btn${filter === item.id ? ' is-active' : ''}`}
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filtered.length ? (
          filtered.map((project) => (
            <div className="col-lg-8" key={project.slug}>
              <PortfolioCard project={project} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="portfolio-listing-empty">No case studies match this filter yet.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default PortfolioListing
