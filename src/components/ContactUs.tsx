import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import ButtonLink from '@/components/ButtonLink'
import { contactInfo, contactMailtoHref, contactTelHref } from '@/data/site-content'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <section className="section bg-light" id="contact">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={6}>
            <SectionHeader
              eyebrow="Contact"
              title="Talk to our Pittsburgh local SEO team"
              subtitle="Email or call us directly. No long forms, just a practical conversation about your market, goals, and next steps."
            />
          </Col>
        </Row>
        <Row className="mt-5 align-items-center">
          <Col lg={4}>
            <Card className="bg-primary bg-shape border-0 mb-3">
              <CardBody>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center border border-primary">
                    <IconifyIcon icon="tabler:phone-call" className="fs-4" />
                  </span>
                  <p className="mb-0 fw-semibold f-16 text-white">Call Us Directly At</p>
                </div>
                <h5 className="text-white mt-4 mb-5">
                  <a href={contactTelHref} className="text-white">
                    {contactInfo.phone}
                  </a>
                </h5>
                <ButtonLink variant="light" size="sm" className="w-100" href={contactTelHref}>
                  Call Now
                </ButtonLink>
              </CardBody>
            </Card>
            <Card className="border-0">
              <CardBody>
                <div className="d-flex align-items-center gap-3">
                  <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center border border-primary">
                    <IconifyIcon icon="tabler:mail" className="fs-4" />
                  </span>
                  <p className="mb-0 fw-semibold f-16 text-muted">Email Our Team</p>
                </div>
                <h5 className="text-dark mt-4 mb-5">
                  <a href={contactMailtoHref} className="text-dark">
                    {contactInfo.email}
                  </a>
                </h5>
                <ButtonLink variant="primary" size="sm" className="w-100" href={contactMailtoHref}>
                  Email Us
                </ButtonLink>
              </CardBody>
            </Card>
          </Col>
          <Col lg={8}>
            <div className="custom-form p-3">
              <form>
                <h6 className="mb-4">Send Details</h6>
                <Row>
                  <Col lg={6}>
                    <div className="mb-3">
                      <input name="name" id="name" type="text" className="form-control border" placeholder="Name" required />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <input name="email" id="email" type="email" className="form-control border" placeholder="Email" required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="mb-3">
                      <input type="text" className="form-control border" id="subject" placeholder="Subject" required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="mb-3">
                      <textarea
                        name="comments"
                        id="comments"
                        rows={8}
                        className="form-control border"
                        required
                        placeholder="Message"
                        defaultValue={''}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs
