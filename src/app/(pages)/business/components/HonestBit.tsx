'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import { honestBitSection } from '@/data/site-content'
import { Col, Container, Row } from 'react-bootstrap'

const HonestBit = () => {
  return (
    <section className="section honest-bit-section bg-light" id="honest">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <ScrollReveal animation="fade-up">
              <SectionHeader
                eyebrow={honestBitSection.eyebrow}
                title={honestBitSection.title}
                subtitle={honestBitSection.body}
              />
            </ScrollReveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HonestBit
