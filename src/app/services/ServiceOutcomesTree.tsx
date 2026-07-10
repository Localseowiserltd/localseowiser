'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { ServiceOutcomeCard } from '@/data/site-content'
import { CSSProperties } from 'react'
import { Container } from 'react-bootstrap'

type ServiceOutcomesTreeProps = {
  eyebrow: string
  title: string
  paragraphs?: string[]
  cards?: ServiceOutcomeCard[]
}

type OutcomeTreeItem = {
  title: string
  paragraphs: string[]
}

const splitOutcomeParagraph = (text: string): OutcomeTreeItem => {
  const dotIndex = text.indexOf('. ')
  if (dotIndex === -1) {
    return { title: text, paragraphs: [] }
  }

  return {
    title: text.slice(0, dotIndex + 1),
    paragraphs: [text.slice(dotIndex + 2)],
  }
}

const ServiceOutcomesTree = ({ eyebrow, title, paragraphs = [], cards }: ServiceOutcomesTreeProps) => {
  const items: OutcomeTreeItem[] =
    cards && cards.length > 0
      ? cards.map((card) => ({ title: card.title, paragraphs: card.paragraphs ?? [] }))
      : paragraphs.map(splitOutcomeParagraph)

  const desktopColumns = Math.min(items.length, 4)

  return (
    <section className="section service-detail-outcomes-tree">
      <div className="service-detail-outcomes-tree__grid-bg" aria-hidden="true" />
      <Container className="service-detail-outcomes-tree__inner service-detail-section-inner">
        <ScrollReveal animation="fade-up" hoverable={false}>
          <div className="service-detail-outcomes-tree__header text-center">
            <p className="section-eyebrow mb-3 justify-content-center">
              <span className="section-eyebrow-line" aria-hidden="true" />
              {eyebrow}
              <span className="section-eyebrow-line" aria-hidden="true" />
            </p>
            <div className="service-detail-outcomes-tree__hub">
              <IconifyIcon
                icon="tabler:brand-google"
                className="service-detail-outcomes-tree__hub-icon"
                aria-hidden="true"
              />
              <p className="service-detail-outcomes-tree__hub-title mb-0">{title}</p>
            </div>
          </div>

          <div
            className="service-detail-outcomes-tree__connectors"
            style={{ '--outcome-count': items.length } as CSSProperties}
            aria-hidden="true">
            <span className="service-detail-outcomes-tree__connector-stem" />
            <span className="service-detail-outcomes-tree__connector-bar" />
            {items.map((item) => (
              <span key={item.title} className="service-detail-outcomes-tree__connector-drop" />
            ))}
          </div>

          <div
            className="service-detail-outcomes-tree__nodes"
            style={{ '--outcome-columns': desktopColumns } as CSSProperties}
            role="list">
            {items.map((item) => (
              <article key={item.title} className="service-detail-outcomes-tree__node" role="listitem">
                <h3 className="service-detail-outcomes-tree__node-title">{item.title}</h3>
                <div className="service-detail-outcomes-tree__node-body-wrap">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="service-detail-outcomes-tree__node-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

export default ServiceOutcomesTree
