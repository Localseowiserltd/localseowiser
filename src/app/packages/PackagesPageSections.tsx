'use client'

import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  packageComparison,
  packages,
  packagesPageCardsHeader,
  packagesPageCta,
  packagesPageValue,
} from '@/data/packages'
import { Col, Container, Row, Table } from 'react-bootstrap'

const renderCompareCell = (cell: string, isRecommendedRow: boolean) => {
  if (!isRecommendedRow) {
    if (cell === '✓') {
      return <IconifyIcon icon="tabler:circle-check-filled" className="package-compare-card__check" />
    }
    if (cell === '✗') {
      return <IconifyIcon icon="tabler:circle-x-filled" className="package-compare-card__cross" />
    }
  }
  return cell
}

const PackagesPageSections = () => {
  return (
    <>
      <section className="section packages-cards-section">
        <Container>
          <ScrollReveal animation="fade-up" hoverable={false}>
            <SectionHeader
              eyebrow={packagesPageCardsHeader.eyebrow}
              title={packagesPageCardsHeader.title}
              subtitle={packagesPageCardsHeader.subtitle}
            />
          </ScrollReveal>
          <Row className="g-3 g-lg-4 align-items-stretch">
            {packages.map((pkg, idx) => (
              <Col lg={4} md={6} key={pkg.id} className="d-flex">
                <ScrollReveal animation="zoom-in" delay={idx * 80} className="h-100 w-100" hoverable={false}>
                  <article
                    className={`packages-plan-card h-100${pkg.popular ? ' packages-plan-card--popular' : ''}`}
                  >
                    {pkg.popular ? <span className="packages-plan-card__badge">Most Popular</span> : null}
                    <h2 className="packages-plan-card__title">{pkg.name}</h2>
                    <p className="packages-plan-card__desc">{pkg.description}</p>
                    <ul className="packages-plan-card__features">
                      {pkg.features.map((feature) => (
                        <li key={feature}>
                          <IconifyIcon icon="tabler:circle-check" className="packages-plan-card__check" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="packages-plan-card__footer">
                      <ButtonLink
                        variant={pkg.popular ? 'primary' : 'outline-primary'}
                        href="/contact"
                        className="w-100"
                      >
                        Request a Custom Quote
                      </ButtonLink>
                      <p className="packages-plan-card__best-for">{pkg.bestFor}</p>
                    </div>
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section package-compare-section bg-light">
        <Container>
          <ScrollReveal animation="fade-up" hoverable={false}>
            <SectionHeader eyebrow="Compare Plans" title="Feature Comparison" />
          </ScrollReveal>
          <ScrollReveal animation="fade-in" delay={80} hoverable={false}>
            <div className="package-compare-card">
              <div className="package-compare-card__inner">
                <Table className="package-compare-table align-middle mb-0">
                  <thead>
                    <tr>
                      {packageComparison.headers.map((header, headerIdx) => (
                        <th key={header} className={headerIdx > 0 ? 'text-center' : ''}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {packageComparison.rows.map((row) => {
                      const isRecommendedRow = row[0] === 'Recommended For'
                      return (
                        <tr key={row[0]} className={isRecommendedRow ? 'is-recommended' : undefined}>
                          {row.map((cell, cellIdx) => (
                            <td key={`${row[0]}-${cellIdx}`} className={cellIdx > 0 ? 'text-center' : ''}>
                              {cellIdx > 0 ? renderCompareCell(cell, isRecommendedRow) : cell}
                            </td>
                          ))}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="section packages-value-section">
        <Container>
          <ScrollReveal animation="fade-up" hoverable={false}>
            <SectionHeader
              align="center"
              eyebrow={packagesPageValue.eyebrow}
              title={packagesPageValue.title}
              className="mb-4"
            />
          </ScrollReveal>
          <Row className="g-3 g-lg-4">
            {packagesPageValue.items.map((item, idx) => (
              <Col lg={3} md={6} key={item.title} className="d-flex">
                <ScrollReveal animation="fade-up" delay={idx * 60} className="h-100 w-100" hoverable={false}>
                  <article className="packages-value-card h-100">
                    <span className="packages-value-card__icon" aria-hidden="true">
                      <IconifyIcon icon={item.icon} />
                    </span>
                    <h3 className="packages-value-card__title">{item.title}</h3>
                    <p className="packages-value-card__text mb-0">{item.description}</p>
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section packages-cta-section" id="packages-cta">
        <Container>
          <ScrollReveal animation="fade-up" hoverable={false}>
            <div className="packages-cta-card">
              <h2 className="packages-cta-card__title">{packagesPageCta.title}</h2>
              <p className="packages-cta-card__text">{packagesPageCta.description}</p>
              <div className="packages-cta-card__actions">
                <ButtonLink variant="primary" href={packagesPageCta.primary.href}>
                  {packagesPageCta.primary.label}
                </ButtonLink>
                <ButtonLink variant="light" href={packagesPageCta.secondary.href}>
                  {packagesPageCta.secondary.label}
                </ButtonLink>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}

export default PackagesPageSections
