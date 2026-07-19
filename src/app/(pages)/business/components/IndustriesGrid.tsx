'use client'

import IndustryCard from './IndustryCard'
import {
  HOMEPAGE_INDUSTRIES_INITIAL_COUNT,
  type HomepageIndustryCard,
} from '@/data/industries/home'
import { useId, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

type IndustriesGridProps = {
  items: HomepageIndustryCard[]
}

/**
 * Small client island for Show More.
 * All 13 industry links stay in the DOM (extra cards use `d-none` when collapsed)
 * so they remain crawlable and keyboard-accessible when revealed.
 */
const IndustriesGrid = ({ items }: IndustriesGridProps) => {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()
  const hasMore = items.length > HOMEPAGE_INDUSTRIES_INITIAL_COUNT

  return (
    <>
      <Row className="g-3 g-lg-4 industries-grid" id={panelId}>
        {items.map((item, index) => {
          const isExtra = index >= HOMEPAGE_INDUSTRIES_INITIAL_COUNT
          const hidden = isExtra && !expanded
          return (
            <Col
              xs={12}
              sm={6}
              lg={4}
              key={item.href}
              className={`d-flex${hidden ? ' d-none' : ''}`}
            >
              <IndustryCard item={item} priority={index < 3} />
            </Col>
          )
        })}
      </Row>

      {hasMore ? (
        <div className="industries-view-all text-center">
          <button
            type="button"
            className="btn btn-outline-primary"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? 'Show fewer industries' : `View all industries (${items.length})`}
          </button>
        </div>
      ) : null}
    </>
  )
}

export default IndustriesGrid
