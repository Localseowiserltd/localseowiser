'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import ButtonLink from '@/components/ButtonLink'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { packageComparison, packages } from '@/data/site-content'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { RefObject } from 'react'

const renderCompareCell = (cell: string) => {
  if (cell === '✓') {
    return <IconifyIcon icon="tabler:circle-check-filled" className="package-compare-card__check" />
  }
  if (cell === '✗') {
    return <IconifyIcon icon="tabler:circle-x-filled" className="package-compare-card__cross" />
  }
  return cell
}

type PackageFeatureItemProps = {
  feature: string
  delay: number
}

const PackageFeatureItem = ({ feature, delay }: PackageFeatureItemProps) => {
  const { ref, className, style } = useScrollReveal({ animation: 'fade-up', delay })

  return (
    <li ref={ref as RefObject<HTMLLIElement>} className={className} style={style}>
      <IconifyIcon icon="tabler:circle-check" className="text-primary flex-shrink-0 mt-1" />
      <span>{feature}</span>
    </li>
  )
}

const PackagesPageSections = () => {
  return (
    <>
      <section className="section">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow="Our Packages"
              title="Choose the engagement model that fits your growth stage"
              subtitle="Each package is customized to your business model, market competition, and growth priorities. No fixed rates, only tailored proposals."
            />
          </ScrollReveal>
          <Row className="g-3 g-lg-4">
            {packages.map((pkg, idx) => (
              <Col lg={4} key={idx}>
                <ScrollReveal animation="zoom-in" delay={idx * 90} className="h-100">
                  <div className="package-card-border h-100">
                    <div className="inner-package-card h-100">
                      <ScrollReveal animation="fade-up" delay={idx * 90 + 40}>
                        <h4 className="inner-package-card__name">{pkg.name}</h4>
                      </ScrollReveal>
                      <ScrollReveal animation="fade-up" delay={idx * 90 + 80}>
                        <p className="inner-package-card__desc">{pkg.description}</p>
                      </ScrollReveal>
                      <ul className="inner-package-card__features">
                        {pkg.features.map((feature, featureIdx) => (
                          <PackageFeatureItem
                            key={feature}
                            feature={feature}
                            delay={idx * 90 + 120 + featureIdx * 50}
                          />
                        ))}
                      </ul>
                      <ScrollReveal animation="fade-up" delay={idx * 90 + 120 + pkg.features.length * 50 + 60}>
                        <ButtonLink variant="outline-primary" href="/contact" className="w-100">
                          Request a Quote
                        </ButtonLink>
                      </ScrollReveal>
                    </div>
                  </div>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section package-compare-section bg-light">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader eyebrow="Compare Plans" title="Feature Comparison" />
          </ScrollReveal>
          <ScrollReveal animation="fade-in" delay={100} hoverable={false}>
            <div className="package-compare-card">
              <div className="package-compare-card__gradient" aria-hidden="true" />
              <div className="package-compare-card__pattern" aria-hidden="true" />
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
                    {packageComparison.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className={cellIdx > 0 ? 'text-center' : ''}>
                            {cellIdx > 0 ? renderCompareCell(cell) : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}

export default PackagesPageSections
