'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import { processSteps } from '@/data/site-content'
import { Container } from 'react-bootstrap'

const Process = () => {
  const topSteps = processSteps.slice(0, 3)
  const bottomSteps = processSteps.slice(3)

  return (
    <section className="section process-section" id="process">
      <div className="process-section__pattern" aria-hidden="true" />
      <Container className="position-relative">
        <ScrollReveal animation="fade-up">
          <SectionHeader
            theme="dark"
            eyebrow="Our Process"
            title="No mystery. Here's exactly what we do, month by month."
          />
        </ScrollReveal>

        <div className="process-card-grid process-card-grid-top">
          {topSteps.map((step, idx) => (
            <ScrollReveal key={step.step} animation="fade-up" delay={idx * 100} className="process-grid-reveal">
              <article className="process-metric-card">
                <div className="process-metric-card__head">
                  <span className="process-metric-card__number">{step.step}</span>
                  <div>
                    <h5 className="process-metric-card__title">{step.title}</h5>
                  </div>
                </div>
                <hr className="process-metric-card__divider" />
                <p className="process-metric-card__desc">{step.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {bottomSteps.length > 0 ? (
          <div className="process-card-grid process-card-grid-bottom">
            {bottomSteps.map((step, idx) => (
              <ScrollReveal key={step.step} animation="fade-up" delay={(idx + 3) * 100} className="process-grid-reveal">
                <article className="process-metric-card">
                  <div className="process-metric-card__head">
                    <span className="process-metric-card__number">{step.step}</span>
                    <div>
                      <h5 className="process-metric-card__title">{step.title}</h5>
                    </div>
                  </div>
                  <hr className="process-metric-card__divider" />
                  <p className="process-metric-card__desc">{step.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  )
}

export default Process
