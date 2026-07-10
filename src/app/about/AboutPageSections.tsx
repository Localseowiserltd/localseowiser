'use client'

import collageMainImage from '@/assets/images/img1.jpg'
import collageTopImage from '@/assets/images/img2.jpg'
import collageBottomImage from '@/assets/images/img3.jpg'
import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  aboutMission,
  aboutPageClients,
  aboutPageClosing,
  aboutPageProcess,
  aboutPageStats,
  aboutPageTrust,
  aboutPageWhoWeAre,
  aboutTeam,
} from '@/data/site-content'
import Image from 'next/image'
import { type CSSProperties } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AboutDetailImg = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <img src={src} alt={alt} className={className} />
)

const AboutPageSections = () => {
  return (
    <>
      <section className="section service-detail-challenge-v2 about-page-split">
        <Container className="service-detail-section-inner">
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={6} className="order-2 order-lg-1">
              <ScrollReveal animation="fade-right" hoverable={false}>
                <SectionHeader
                  align="left"
                  eyebrow={aboutPageWhoWeAre.eyebrow}
                  title={aboutPageWhoWeAre.title}
                  className="mb-3"
                />
                <p className="section-subtitle about-page-lead">{aboutPageWhoWeAre.lead}</p>
                {aboutPageWhoWeAre.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="section-subtitle">
                    {paragraph}
                  </p>
                ))}
              </ScrollReveal>
            </Col>
            <Col lg={6} className="order-1 order-lg-2">
              <ScrollReveal animation="fade-left" delay={80} hoverable={false}>
                <div className="service-detail-collage about-page-collage">
                  <div className="service-detail-collage__main">
                    <AboutDetailImg src={collageMainImage.src} alt="Local SEO Wiser team" />
                  </div>
                  <div className="service-detail-collage__top">
                    <AboutDetailImg src={collageTopImage.src} alt="Pittsburgh service area map" />
                  </div>
                  <div className="service-detail-collage__bottom">
                    <AboutDetailImg src={collageBottomImage.src} alt="Local SEO results dashboard" />
                  </div>
                </div>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section about-story-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow="What We Believe"
              title="The principles behind every campaign we run"
              subtitle="Local search done honestly, with Pittsburgh-first strategy and results you can measure."
              align="center"
              className="mb-4 mb-lg-5"
            />
          </ScrollReveal>
        </Container>
        <div className="about-story-grid">
          <ScrollReveal animation="fade-right" delay={0} once={false} className="about-story-grid__cell about-story-grid__cell--image h-100">
            <AboutDetailImg src={collageMainImage.src} alt="Local business growth" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={80} className="about-story-grid__cell about-story-grid__cell--white h-100">
            <h3 className="about-story-grid__title">{aboutMission[0].title}</h3>
            <p className="about-story-grid__body">{aboutMission[0].description}</p>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={0} once={false} className="about-story-grid__cell about-story-grid__cell--image h-100">
            <AboutDetailImg src={collageTopImage.src} alt="Google Maps local visibility" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={120} className="about-story-grid__cell about-story-grid__cell--dark h-100">
            <h3 className="about-story-grid__title">{aboutMission[1].title}</h3>
            <p className="about-story-grid__body">{aboutMission[1].description}</p>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={0} once={false} className="about-story-grid__cell about-story-grid__cell--image h-100">
            <AboutDetailImg src={collageBottomImage.src} alt="Local SEO reporting" />
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={160} className="about-story-grid__cell about-story-grid__cell--primary h-100">
            <h3 className="about-story-grid__title">{aboutMission[2].title}</h3>
            <p className="about-story-grid__body">{aboutMission[2].description}</p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="section process-section service-detail-process service-detail-process--centered about-page-process"
        style={{ '--process-step-count': aboutPageProcess.steps.length } as CSSProperties}
      >
        <div className="process-section__pattern" aria-hidden="true" />
        <Container className="position-relative">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              theme="dark"
              align="center"
              eyebrow={aboutPageProcess.eyebrow}
              title={aboutPageProcess.title}
              subtitle={aboutPageProcess.intro}
              className="service-detail-process__header"
            />
          </ScrollReveal>
          <div className="service-detail-process__timeline">
            <div className="service-detail-process__timeline-track" aria-hidden="true">
              <span className="service-detail-process__timeline-line" />
              {aboutPageProcess.steps.map((step) => (
                <span key={step.step} className="service-detail-process__timeline-node" />
              ))}
            </div>
            <div className="process-card-grid process-card-grid-top service-detail-process__grid">
              {aboutPageProcess.steps.map((step, idx) => (
                <ScrollReveal key={step.step} animation="fade-up" delay={idx * 80} className="process-grid-reveal">
                  <article className="process-metric-card service-detail-process__card">
                    <div className="process-metric-card__tags">
                      <span className="process-metric-card__tag process-metric-card__tag--primary">{step.phase}</span>
                    </div>
                    <div className="process-metric-card__head">
                      <span className="process-metric-card__number">{step.step}</span>
                      <div>
                        <h5 className="process-metric-card__title">{step.title}</h5>
                      </div>
                    </div>
                    <hr className="process-metric-card__divider" />
                    <div className="service-detail-process__card-body">
                      {step.paragraphs?.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)} className="process-metric-card__desc">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-light about-page-clients">
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={6}>
              <ScrollReveal animation="fade-right" hoverable={false}>
                <SectionHeader
                  align="left"
                  eyebrow={aboutPageClients.eyebrow}
                  title={aboutPageClients.title}
                  className="mb-3"
                />
                {aboutPageClients.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="section-subtitle">
                    {paragraph}
                  </p>
                ))}
              </ScrollReveal>
            </Col>
            <Col lg={6}>
              <ScrollReveal animation="fade-left" delay={80} hoverable={false}>
                <div className="about-page-clients-panel">
                  <p className="about-page-clients-panel__label">Industries we serve</p>
                  <div className="about-page-clients-panel__tags">
                    {aboutPageClients.industries.map((industry) => (
                      <span key={industry}>{industry}</span>
                    ))}
                  </div>
                  <p className="about-page-clients-panel__label">Markets we cover</p>
                  <div className="about-page-clients-panel__tags about-page-clients-panel__tags--areas">
                    {aboutPageClients.areas.map((area) => (
                      <span key={area}>{area}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section about-team-section" id="our-team">
        <div className="about-team-section__pattern" aria-hidden="true" />
        <Container className="position-relative">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              theme="dark"
              eyebrow="Our Team"
              title="The people behind your local growth"
              subtitle="A focused team that blends strategy and hands-on execution, so your local SEO is always moving forward."
            />
          </ScrollReveal>
          <Row className="g-3 g-lg-4 mb-3 mb-lg-4">
            <Col xs={12}>
              <ScrollReveal animation="zoom-in" delay={0} className="h-100">
                <article className="about-team-card about-team-card--horizontal h-100">
                  <div className="about-team-card__visual">
                    <div className="about-team-card__photo-wrap">
                      <Image
                        src={aboutTeam[0].image}
                        alt={`${aboutTeam[0].name}, ${aboutTeam[0].role}`}
                        className="about-team-card__photo"
                        width={160}
                        height={160}
                      />
                    </div>
                    <span className="about-team-card__label">{aboutTeam[0].label}</span>
                  </div>
                  <div className="about-team-card__main">
                    <div className="about-team-card__header">
                      <div>
                        <h5 className="about-team-card__name">{aboutTeam[0].name}</h5>
                        <p className="about-team-card__role">{aboutTeam[0].role}</p>
                      </div>
                      <span className="about-team-card__badge">{aboutTeam[0].badge}</span>
                    </div>
                    <p className="about-team-card__desc">{aboutTeam[0].description}</p>
                  </div>
                  <div className="about-team-card__aside">
                    <p className="about-team-card__aside-title">Core focus</p>
                    <div className="about-team-card__tags">
                      {aboutTeam[0].tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            </Col>
          </Row>
          <Row className="g-3 g-lg-4">
            {aboutTeam.slice(1).map((member, idx) => (
              <Col md={6} lg={4} key={member.name}>
                <ScrollReveal animation="zoom-in" delay={(idx + 1) * 100} className="h-100">
                  <article className="about-team-card h-100">
                    <span className="about-team-card__label">{member.label}</span>
                    <div className="about-team-card__photo-wrap">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        className="about-team-card__photo"
                        width={120}
                        height={120}
                      />
                    </div>
                    <h5 className="about-team-card__name">{member.name}</h5>
                    <p className="about-team-card__role">{member.role}</p>
                    <span className="about-team-card__badge">{member.badge}</span>
                    <p className="about-team-card__desc">{member.description}</p>
                    <div className="about-team-card__tags">
                      {member.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section bg-light service-detail-why-section about-page-trust">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={aboutPageTrust.eyebrow}
              title={aboutPageTrust.title}
              className="mb-4"
            />
          </ScrollReveal>
          <Row className="g-3 g-lg-4 service-detail-why-section__grid justify-content-center">
            {aboutPageTrust.items.map((item, idx) => (
              <Col
                lg={4}
                md={6}
                key={item.title}
                className={idx === 3 ? 'offset-lg-2' : undefined}
              >
                <ScrollReveal animation="fade-up" delay={idx * 60} className="service-detail-why-section__reveal">
                  <article className="service-detail-why-card service-detail-why-card--featured h-100">
                    <span className="service-detail-why-card__icon-wrap" aria-hidden="true">
                      <IconifyIcon icon={item.icon} className="service-detail-why-card__icon" />
                    </span>
                    <h3 className="service-detail-why-card__title">{item.title}</h3>
                    <p className="service-detail-why-card__text">{item.description}</p>
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section about-page-metrics">
        <div className="about-page-metrics__pattern" aria-hidden="true" />
        <Container className="position-relative">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              theme="dark"
              align="center"
              eyebrow={aboutPageStats.eyebrow}
              title={aboutPageStats.title}
              className="mb-4 mb-lg-5"
            />
          </ScrollReveal>
          <Row className="g-3 g-lg-4 justify-content-center">
            {aboutPageStats.items.map((item, idx) => (
              <Col lg={3} md={6} key={item.label}>
                <ScrollReveal animation="fade-up" delay={idx * 80} className="h-100">
                  <article className="about-page-metric-card h-100">
                    <span className="about-page-metric-card__icon" aria-hidden="true">
                      <IconifyIcon icon={item.icon} />
                    </span>
                    <p className="about-page-metric-card__value">{item.value}</p>
                    <p className="about-page-metric-card__label mb-0">{item.label}</p>
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section home-cta-section home-cta-section--layered" id="about-closing-cta">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="home-cta-section__hero service-closing-cta__hero">
              <div className="home-cta-section__stipple" aria-hidden="true">
                <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--1" />
                <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--2" />
                <span className="home-cta-section__stipple-blob home-cta-section__stipple-blob--3" />
              </div>
              <div className="home-cta-section__layout service-closing-cta__layout">
                <div className="home-cta-section__intro">
                  <h2 className="home-cta-task__title">{aboutPageClosing.title}</h2>
                  {aboutPageClosing.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="home-cta-task__text">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <aside className="service-closing-cta__pick">
                  <p className="service-closing-cta__pick-label">Get started</p>
                  <ul className="service-closing-cta__move-list">
                    <li>No spam. No obligation.</li>
                    <li>Free audit before you pay anything.</li>
                  </ul>
                  <div className="service-closing-cta__actions">
                    <ButtonLink variant="primary" size="sm" href={aboutPageClosing.cta.href}>
                      {aboutPageClosing.cta.label}
                    </ButtonLink>
                    <ButtonLink variant="light" size="sm" href="tel:+14126637288">
                      Call +1 412 663 7288
                    </ButtonLink>
                  </div>
                </aside>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}

export default AboutPageSections
