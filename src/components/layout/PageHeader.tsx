import { Col, Container, Row } from 'react-bootstrap'

type PageHeaderProps = {
  badge: string
  title: string
  description: string
}

const PageHeader = ({ badge, title, description }: PageHeaderProps) => {
  return (
    <section className="bg-home-3 page-hero-header">
      <div className="hero-bg-dots" aria-hidden="true" />
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <p className="section-eyebrow justify-content-center mb-2">
              <span className="section-eyebrow-line" aria-hidden="true" />
              {badge}
              <span className="section-eyebrow-line" aria-hidden="true" />
            </p>
            <h1 className="page-hero-header__title">{title}</h1>
            {description ? <p className="page-hero-header__desc mb-0 mx-auto">{description}</p> : null}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PageHeader
