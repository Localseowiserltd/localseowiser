import BrandLogo from '@/components/BrandLogo'
import React, { ReactNode } from 'react'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Loader from '@/components/Loader'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { currentYear } from '@/context/constants'

const layout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <>
      <Loader />
      {children}
      <footer className="footer-part bg-dark py-5 pb-4">
        <Container>
          <Row className="mt-5 pb-5 justify-content-between g-3">
            <Col lg={3}>
              <div className="footer-about">
              <div className="mb-4">
                <BrandLogo className="brand-logo-footer" />
              </div>
                <p className="text-white mb-4">Comprehensive report, data visualization , and insights to analyze your business.</p>
                <Button variant="primary" size="sm">
                  Subscribe
                </Button>
              </div>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">Solution</h5>
              <ul className="mt-4">
                <li>
                  <Link href="">Enterprise</Link>
                </li>
                <li>
                  <Link href="">By Workflow</Link>
                </li>
                <li>
                  <Link href="">By Team</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">Company</h5>
              <ul className="mt-4">
                <li>
                  <Link href="">About Us</Link>
                </li>
                <li>
                  <Link href="">News &amp; Press</Link>
                </li>
                <li>
                  <Link href="">Our Customer</Link>
                </li>
                <li>
                  <Link href="">Leadership</Link>
                </li>
                <li>
                  <Link href="">Careers</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">Resources</h5>
              <ul className="mt-4">
                <li>
                  <Link href="">Blog </Link>
                </li>
                <li>
                  <Link href="">Webinar &amp; Events </Link>
                </li>
                <li>
                  <Link href="">Podcast</Link>
                </li>
                <li>
                  <Link href="">E-book &amp; Guides</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h5 className="text-white fw-medium">Contact Us</h5>
              <ul className="mt-4">
                <li>
                  <Link href="">Contact Sales </Link>
                </li>
                <li>
                  <Link href="">Become Partner</Link>
                </li>
                <li>
                  <Link href="">Affliate Program</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="border-primary" />
          <Row className="align-items-center justify-content-between g-3">
            <Col lg={5}>
              <p className="m-0 fs-6 text-white-50">
                {currentYear} © Local SEO Wiser
              </p>
            </Col>
            <Col lg={4} className="text-lg-center">
              <ul className="d-flex gap-2 m-0 align-items-center justify-content-center">
                <li className="m-0">
                  <div className="icon d-flex rounded-circle align-items-center justify-content-center">
                    <Link href="" className="text-dark f-18">
                      <IconifyIcon icon="tabler:brand-facebook" />
                    </Link>
                  </div>
                </li>
                <li className="m-0">
                  <div className="icon d-flex rounded-circle align-items-center justify-content-center">
                    <Link href="" className="text-dark f-18">
                      <IconifyIcon icon="tabler:brand-x" />
                    </Link>
                  </div>
                </li>
                <li className="m-0">
                  <div className="icon d-flex rounded-circle align-items-center justify-content-center">
                    <Link href="" className="text-dark f-18">
                      <IconifyIcon icon="tabler:brand-youtube" />
                    </Link>
                  </div>
                </li>
                <li className="m-0">
                  <div className="icon d-flex rounded-circle align-items-center justify-content-center">
                    <Link href="" className="text-dark f-18">
                      <IconifyIcon icon="tabler:brand-instagram" />
                    </Link>
                  </div>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="text-lg-center">
              <Row className="g-3">
                <Col lg={6}>
                  <Link href="" className="text-white">
                    Terms Of Us
                  </Link>
                </Col>
                <Col lg={6}>
                  <Link href="" className="text-white">
                    Privacy Policy
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default layout
