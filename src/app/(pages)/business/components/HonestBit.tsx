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
              <SectionHeader eyebrow={honestBitSection.eyebrow} title={honestBitSection.title} />
              <div className="honest-bit-body">
                {honestBitSection.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HonestBit
