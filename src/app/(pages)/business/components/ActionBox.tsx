'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { heroStats } from '@/data/site-content'
import { HeroStatCounter } from './Hero'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="py-5 counter-section bg-dark position-relative">
      <div className="counter-section__pattern" aria-hidden="true" />
      <Container className="position-relative">
        <Row className="align-items-center g-4">
          {heroStats.map((stat, idx) => (
            <Col lg={3} sm={6} key={idx}>
              <ScrollReveal animation="zoom-in" delay={idx * 100}>
                <div className="text-center">
                  <HeroStatCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    className="fw-bold text-white mb-2"
                  />
                  <p className="mb-0 text-white-50 f-16">{stat.label}</p>
                </div>
              </ScrollReveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
