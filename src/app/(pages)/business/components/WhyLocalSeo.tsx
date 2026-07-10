'use client'

import AnimatedCounter from '@/components/AnimatedCounter'
import ScrollReveal from '@/components/ScrollReveal'
import { localSeoStats, whyLocalSeoNeighborhoods } from '@/data/site-content'
import { Container } from 'react-bootstrap'

const WhyLocalSeo = () => {
  return (
    <section className="section why-local-section" id="why-local-seo">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="why-local-intro">
            <div className="why-local-intro__left">
              <p className="section-eyebrow mb-2">
                <span className="section-eyebrow-line" aria-hidden="true" />
                Why Pittsburgh Is Different
                <span className="section-eyebrow-line" aria-hidden="true" />
              </p>
              <h2 className="section-title mb-0">
                Local search in Pittsburgh isn&apos;t one market: it&apos;s a dozen neighborhoods
              </h2>
            </div>
            <div className="why-local-intro__right">
              <p>
                Pittsburgh transformed from steel town to a hub for healthcare, robotics, education, and finance. But
                here&apos;s what most agencies miss: somebody searching in Squirrel Hill isn&apos;t getting the same results
                as somebody in the North Shore. Each neighborhood and corridor searches differently.
              </p>
              <p className="mb-0">
                We build your strategy around how Pittsburgh actually searches, from Shadyside and Lawrenceville to Oakland, the Strip
                District, Mt. Lebanon, Cranberry, Monroeville, and beyond. Not just the city name. In a market this dense,
                that&apos;s the difference between page one and invisible.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="why-local-divider" aria-hidden="true" />

        <ScrollReveal animation="fade-up" delay={80}>
          <div className="why-local-pills">
            {whyLocalSeoNeighborhoods.map((name, index) => (
              <span
                key={name}
                className={`why-local-pill${index === whyLocalSeoNeighborhoods.length - 1 ? ' why-local-pill--accent' : ''}`}
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="why-local-divider" aria-hidden="true" />

        <ScrollReveal animation="fade-up" delay={120}>
          <div className="why-local-stats">
            {localSeoStats.map((stat, idx) => (
              <div className="why-local-stat" key={idx}>
                <p className="why-local-stat__headline mb-0">
                  {'end' in stat && stat.end !== undefined ? (
                    <AnimatedCounter end={stat.end} suffix="%" decimals={0} className="why-local-stat__counter" />
                  ) : (
                    stat.headline
                  )}
                </p>
                <p className="why-local-stat__text mb-0">{stat.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

export default WhyLocalSeo
