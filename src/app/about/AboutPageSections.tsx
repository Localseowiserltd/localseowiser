'use client'

import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  aboutPageBeliefs,
  aboutPageClients,
  aboutPageClosing,
  aboutPageExperience,
  aboutPageProcess,
  aboutPageTrust,
  aboutPageWhoWeAre,
  aboutTeamMembers,
  aboutTeamSection,
} from '@/data/about'
import Image from 'next/image'
import { type CSSProperties } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutTeamSlider from './AboutTeamSlider'

const featuredMember = aboutTeamMembers.find((m) => m.featured) ?? aboutTeamMembers[0]

const AboutPageSections = () => {
  return (
    <>
      {/* Who We Are */}
      <section className="section about-page-split">
        <Container>
          <Row className="align-items-start g-4 g-lg-5">
            <Col lg={7}>
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
            <Col lg={5}>
              <ScrollReveal animation="fade-left" delay={80} hoverable={false}>
                <figure className="about-page-office">
                  <Image
                    src="/images/about/localseo-wiser-office.webp"
                    alt="Local SEO Wiser office — team members working at desks with analytics and local search tools"
                    width={1200}
                    height={800}
                    className="about-page-office__img"
                    sizes="(max-width: 991px) 100vw, 420px"
                  />
                </figure>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Believe */}
      <section className="section bg-light about-beliefs-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={aboutPageBeliefs.eyebrow}
              title={aboutPageBeliefs.title}
              className="mb-4"
            />
          </ScrollReveal>
          <Row className="g-3 g-lg-4">
            {aboutPageBeliefs.items.map((item, idx) => (
              <Col md={4} key={item.title}>
                <ScrollReveal animation="fade-up" delay={idx * 60} className="h-100">
                  <article className="about-belief-card h-100">
                    <span className="about-belief-card__index" aria-hidden="true">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="about-belief-card__title">{item.title}</h3>
                    <p className="about-belief-card__body mb-0">{item.description}</p>
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How We Work */}
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

      {/* Who We Work With */}
      <section className="section about-page-clients">
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

      {/* Meet the Team */}
      <section className="section about-team-section" id="our-team">
        <div className="about-team-section__pattern" aria-hidden="true" />
        <Container className="position-relative">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              theme="dark"
              eyebrow={aboutTeamSection.eyebrow}
              title={aboutTeamSection.title}
              subtitle={aboutTeamSection.subtitle}
            />
          </ScrollReveal>

          <Row className="g-3 g-lg-4 mb-3 mb-lg-4">
            <Col xs={12}>
              <ScrollReveal animation="zoom-in" delay={0} className="h-100">
                <article className="about-team-card about-team-card--horizontal h-100">
                  <div className="about-team-card__visual">
                    <div className="about-team-card__photo-wrap">
                      <Image
                        src={featuredMember.image}
                        alt={featuredMember.imageAlt}
                        className="about-team-card__photo"
                        width={160}
                        height={160}
                      />
                    </div>
                    <span className="about-team-card__label">{featuredMember.label}</span>
                  </div>
                  <div className="about-team-card__main">
                    <div className="about-team-card__header">
                      <div>
                        <h5 className="about-team-card__name">{featuredMember.name}</h5>
                        <p className="about-team-card__role">{featuredMember.role}</p>
                      </div>
                    </div>
                    <p className="about-team-card__desc">{featuredMember.biography}</p>
                  </div>
                  <div className="about-team-card__aside">
                    <p className="about-team-card__aside-title">Core focus</p>
                    <div className="about-team-card__tags">
                      {featuredMember.skills.slice(0, 3).map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            </Col>
          </Row>

          <AboutTeamSlider members={aboutTeamMembers.filter((m) => m.id !== featuredMember.id)} />
        </Container>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="section bg-light about-page-trust">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={aboutPageTrust.eyebrow}
              title={aboutPageTrust.title}
              className="mb-4"
            />
          </ScrollReveal>
          <Row className="g-3 g-lg-4">
            {aboutPageTrust.items.map((item, idx) => (
              <Col lg={3} md={6} key={item.title}>
                <ScrollReveal animation="fade-up" delay={idx * 60} className="h-100">
                  <article className="about-trust-card h-100">
                    <span className="about-trust-card__icon" aria-hidden="true">
                      <IconifyIcon icon={item.icon} />
                    </span>
                    <h3 className="about-trust-card__title">{item.title}</h3>
                    <p className="about-trust-card__text mb-0">{item.description}</p>
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Experience You Can See in the Work */}
      <section className="section about-experience-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={aboutPageExperience.eyebrow}
              title={aboutPageExperience.title}
              className="mb-4 mb-lg-5"
            />
          </ScrollReveal>
          <Row className="g-3 g-lg-4">
            {aboutPageExperience.items.map((item, idx) => (
              <Col lg={3} md={6} key={item.title}>
                <ScrollReveal animation="fade-up" delay={idx * 70} className="h-100">
                  <article className="about-experience-card h-100">
                    <span className="about-experience-card__icon" aria-hidden="true">
                      <IconifyIcon icon={item.icon} />
                    </span>
                    <h3 className="about-experience-card__title">{item.title}</h3>
                    <p className="about-experience-card__text mb-0">{item.description}</p>
                  </article>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Final CTA */}
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
                    <li>Free audit before you commit.</li>
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
