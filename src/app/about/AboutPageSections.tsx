'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  aboutPageClosing,
  aboutPageHero,
  aboutPageProcess,
  aboutPageStats,
  aboutPageTrust,
  aboutPageWhoWeAre,
  aboutTeamMembers,
  aboutTeamSection,
} from '@/data/about'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const AboutPageSections = () => {
  const accent = aboutPageHero.titleAccent
  const accentIndex = aboutPageHero.title.indexOf(accent)
  const titleNode =
    accentIndex >= 0 ? (
      <>
        {aboutPageHero.title.slice(0, accentIndex)}
        <span className="about-hub-hero__accent">{accent}</span>
        {aboutPageHero.title.slice(accentIndex + accent.length)}
      </>
    ) : (
      aboutPageHero.title
    )

  const leadership = aboutTeamMembers.slice(0, 4)

  return (
    <div className="about-hub-page">
      <section className="about-hub-hero">
        <Container>
          <Row className="align-items-center g-4 g-xl-5">
            <Col lg={6}>
              <ScrollReveal animation="fade-up">
                <p className="section-eyebrow mb-3">{aboutPageHero.badge}</p>
                <h1 className="about-hub-hero__title">{titleNode}</h1>
                <p className="about-hub-hero__lead">{aboutPageHero.description}</p>
                <ul className="about-hub-hero__trust list-unstyled">
                  {aboutPageHero.trustItems.map((item) => (
                    <li key={item.label}>
                      <span className="about-hub-hero__trust-icon">
                        <IconifyIcon icon={item.icon} aria-hidden="true" />
                      </span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="about-hub-hero__actions">
                  <a
                    href={aboutPageHero.primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-hub-hero__btn about-hub-hero__btn--primary">
                    {aboutPageHero.primaryCta.label}
                    <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                  </a>
                  <a href={aboutPageHero.secondaryCta.href} className="about-hub-hero__btn about-hub-hero__btn--outline">
                    <IconifyIcon icon="tabler:phone" aria-hidden="true" />
                    {aboutPageHero.secondaryCta.label}
                  </a>
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={6}>
              <ScrollReveal animation="fade-up" delay={80} hoverable={false}>
                <div className="about-hub-hero__media">
                  <Image
                    src={aboutPageHero.image}
                    alt={aboutPageHero.imageAlt}
                    width={1263}
                    height={786}
                    className="about-hub-hero__img"
                    priority
                    unoptimized
                  />
                </div>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section about-hub-stats">
        <Container>
          <div className="about-hub-stats__grid">
            {aboutPageStats.map((stat, idx) => (
              <ScrollReveal key={stat.label} animation="fade-up" delay={idx * 40}>
                <article className="about-hub-stats__card">
                  <span className="about-hub-stats__icon">
                    <IconifyIcon icon={stat.icon} aria-hidden="true" />
                  </span>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section about-hub-story">
        <Container>
          <Row className="align-items-center g-4 g-xl-5">
            <Col lg={6}>
              <ScrollReveal animation="fade-up">
                <SectionHeader
                  align="left"
                  eyebrow={aboutPageWhoWeAre.eyebrow}
                  title={aboutPageWhoWeAre.title}
                  className="mb-3"
                />
                <p className="about-hub-story__lead">{aboutPageWhoWeAre.lead}</p>
                {aboutPageWhoWeAre.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="about-hub-story__text">
                    {paragraph}
                  </p>
                ))}
                <Link href={aboutPageWhoWeAre.ctaHref} className="about-hub-story__link">
                  {aboutPageWhoWeAre.ctaLabel}
                  <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
                </Link>
              </ScrollReveal>
            </Col>
            <Col lg={6}>
              <ScrollReveal animation="fade-up" delay={80} hoverable={false}>
                <figure className="about-hub-story__media">
                  <Image
                    src="/images/about/localseo-wiser-office.webp"
                    alt="Local SEO Wiser team collaborating in the office"
                    width={1200}
                    height={800}
                    className="about-hub-story__img"
                    sizes="(max-width: 991px) 100vw, 540px"
                  />
                </figure>
              </ScrollReveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section about-hub-why bg-light">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={aboutPageTrust.eyebrow}
              title={aboutPageTrust.title}
              className="mb-4"
            />
          </ScrollReveal>
          <div className="about-hub-why__grid">
            {aboutPageTrust.items.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 40}>
                <article className="about-hub-why__card">
                  <span className="about-hub-why__icon">
                    <IconifyIcon icon={item.icon} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p className="mb-0">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section about-hub-process" id="about-process">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={aboutPageProcess.eyebrow}
              title={aboutPageProcess.title}
              className="mb-4"
            />
          </ScrollReveal>
          <div className="about-hub-process__grid">
            {aboutPageProcess.steps.map((step, idx) => (
              <ScrollReveal key={step.step} animation="fade-up" delay={idx * 40}>
                <article className="about-hub-process__step">
                  <span className="about-hub-process__num">{step.step}</span>
                  <span className="about-hub-process__icon">
                    <IconifyIcon icon={step.icon} aria-hidden="true" />
                  </span>
                  <h3>{step.title}</h3>
                  <p className="mb-0">{step.paragraphs[0]}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section about-hub-team">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeader
              align="center"
              eyebrow={aboutTeamSection.eyebrow}
              title="Meet Our Leadership"
              className="mb-4"
            />
          </ScrollReveal>
          <div className="about-hub-team__grid">
            {leadership.map((member, idx) => (
              <ScrollReveal key={member.id} animation="fade-up" delay={idx * 50}>
                <article className="about-hub-team__card">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    width={320}
                    height={320}
                    className="about-hub-team__photo"
                  />
                  <h3>{member.name}</h3>
                  <p className="mb-0">{member.role}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section about-hub-closing" id="about-closing-cta">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="services-hub-closing__card">
              <div>
                <h2 className="services-hub-closing__title">{aboutPageClosing.title}</h2>
                {aboutPageClosing.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="services-hub-closing__text mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
              <a
                href={aboutPageClosing.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="services-hub-closing__btn">
                {aboutPageClosing.cta.label}
                <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}

export default AboutPageSections
