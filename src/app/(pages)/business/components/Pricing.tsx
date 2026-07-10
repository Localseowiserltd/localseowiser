import Image from 'next/image'
import React from 'react'
import price from '@/assets/images/price.jpg'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { currency } from '@/context/constants'

const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <SectionHeader
              eyebrow="Pricing"
              title="Find the Perfect Plan for Your Goals"
              subtitle="Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul."
            />
          </Col>
        </Row>
        <Row className="mt-5 g-3">
          <Col lg={4}>
            <Card className="border-0">
              <Image src={price} alt="price" className="img-fluid rounded" />
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border bg-light-subtle">
              <CardBody>
                <h4>Monthly Pass</h4>
                <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-muted mt-4">
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Account Aggregation{' '}
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Expense Tracking{' '}
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Budgeting Tools{' '}
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Transaction Insights{' '}
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Basic Security{' '}
                  </li>
                </ul>
                <hr className="my-4 border" />
                <div className="price-number my-4">
                  <h2 className="fw-bold m-0 text-dark">
                    {currency}20.99 <span className="text-muted fs-6 fw-medium">/ Month</span>
                  </h2>
                  <div className="mt-2">
                    <span className="badge bg-light text-success border">20% Off</span>
                  </div>
                </div>
                <p className="mb-0 text-muted">We offer a variety of pricing plans designed to suit different needs and budgets. </p>
                <div className="price-btn mt-3">
                  <Button variant="primary" className="w-100">
                    Get Started
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border bg-light-subtle">
              <CardBody>
                <h4>Yearly Pass</h4>
                <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-muted mt-4">
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Account Aggregation{' '}
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Priority Support{' '}
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Budgeting Tools{' '}
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Premium Widgets{' '}
                  </li>
                  <li>
                    <IconifyIcon icon="tabler:circle-check" className="text-success me-1 align-middle" /> Advanced Security{' '}
                  </li>
                </ul>
                <hr className="my-4 border" />
                <div className="price-number my-4">
                  <h2 className="fw-bold m-0 text-dark">
                    {currency}200.99 <span className="text-muted fs-6 fw-medium">/ Year</span>
                  </h2>
                  <div className="mt-2">
                    <span className="badge bg-light text-success border">20% Off</span>
                  </div>
                </div>
                <p className="mb-0 text-muted">We offer a variety of pricing plans designed to suit different needs and budgets. </p>
                <div className="price-btn mt-3">
                  <Button variant="primary" className="w-100">
                    Get Started
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
