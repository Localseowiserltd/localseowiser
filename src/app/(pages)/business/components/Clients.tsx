import React from 'react'
import clients1 from '@/assets/images/clients/1.png'
import clients2 from '@/assets/images/clients/2.png'
import clients3 from '@/assets/images/clients/3.png'
import clients4 from '@/assets/images/clients/4.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Clients = () => {
  const images = [clients1, clients2, clients3, clients4]
  return (
    <section className="section bg-light">
      <Container>
        <Row>
          {images.map((img, idx) => (
            <Col lg={3} key={idx}>
              <div className="client-images">
                <Image src={img} alt="logo-img" className="mx-auto img-fluid d-block" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Clients
