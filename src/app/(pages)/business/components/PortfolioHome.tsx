'use client'

import ButtonLink from '@/components/ButtonLink'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { HeroStatCounter } from './Hero'
import { portfolioFeatured } from '@/data/site-content'
import portfolio4s from '@/assets/images/portfolio/4s.webp'
import portfolio4s1 from '@/assets/images/portfolio/4s1.webp'
import portfolio4s2 from '@/assets/images/portfolio/4s2.webp'
import gscOverview1 from '@/assets/images/portfolio/gsc-overview-1.webp'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const portfolioImages: Record<string, StaticImageData> = {
  'gsc-overview-1': gscOverview1,
  '4s': portfolio4s,
  '4s1': portfolio4s1,
  '4s2': portfolio4s2,
}

type ReportCard = (typeof portfolioFeatured)['stickySlides'][number]

const PortfolioOverviewLabel = ({ badge }: { badge: string }) => (
  <p className="portfolio-overview-label">
    <span>{badge}</span> <span className="portfolio-overview-label__accent">Overview</span>
  </p>
)

const PortfolioReportCard = ({ report }: { report: ReportCard }) => (
  <article className="portfolio-report-card">
    <div className="portfolio-report-card__visual">
      <PortfolioOverviewLabel badge={report.badge} />
      <Image
        src={portfolioImages[report.imageKey]}
        alt={report.title}
        className="portfolio-report-card__img"
        sizes="(max-width: 991px) 100vw, 33vw"
      />
    </div>
    <div className="portfolio-report-card__body">
      <h4 className="portfolio-report-card__headline">{report.detail}</h4>
      <p className="portfolio-report-card__subtitle">{report.subtitle}</p>
      <p className="portfolio-report-card__desc">{report.description}</p>
      <Link href={report.href} className="portfolio-report-card__link">
        Open report
        <IconifyIcon icon="tabler:arrow-right" className="ms-1" />
      </Link>
    </div>
  </article>
)

const PortfolioHome = () => {
  const {
    name,
    location,
    category,
    description,
    stats,
    stickySlides,
    heroImageKey,
    reportsLinkLabel,
    reportsLinkHref,
  } = portfolioFeatured

  return (
    <section className="section portfolio-home-section" id="proof">
      <Container>
        <div className="portfolio-home-header">
          <SectionHeader
            align="left"
            eyebrow="Proof"
            title="Real results for real Pittsburgh businesses"
            className="mb-0"
          />
          <ButtonLink variant="outline-primary" href="/portfolio" className="portfolio-home-cta">
            View Full Portfolio
          </ButtonLink>
        </div>

        <article className="portfolio-campaign-card">
          <div className="portfolio-campaign-card__visual">
            <PortfolioOverviewLabel badge="GSC" />
            <Image
              src={portfolioImages[heroImageKey]}
              alt={`${name} GSC overview`}
              className="portfolio-campaign-card__img"
              sizes="(max-width: 991px) 100vw, 42vw"
              priority
            />
            <div className="portfolio-campaign-card__caption">
              <span className="portfolio-campaign-card__category">{category}</span>
              <h4>{name}</h4>
              <p>{location}</p>
            </div>
          </div>
          <div className="portfolio-campaign-card__content">
            <p className="portfolio-campaign-card__desc">{description}</p>
            <div className="portfolio-campaign-card__stats">
              {stats.map((stat) => (
                <div className="portfolio-campaign-card__stat" key={stat.label}>
                  <HeroStatCounter end={stat.end} suffix={stat.suffix} decimals={stat.decimals} className="mb-1" />
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <Link href={reportsLinkHref} className="portfolio-campaign-card__link">
              {reportsLinkLabel}
              <IconifyIcon icon="tabler:arrow-right" className="ms-1" />
            </Link>
          </div>
        </article>

        <div className="portfolio-reports-row">
          {stickySlides.map((report) => (
            <PortfolioReportCard key={report.title} report={report} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default PortfolioHome
