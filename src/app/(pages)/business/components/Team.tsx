import avatar2 from '@/assets/images/team/avatar-2.jpg'
import avatar4 from '@/assets/images/team/avatar-4.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import avatar6 from '@/assets/images/team/avatar-6.jpg'
import avatar7 from '@/assets/images/team/avatar-7.jpg'
import avatar8 from '@/assets/images/team/avatar-8.jpg'
import avatar9 from '@/assets/images/team/avatar-9.jpg'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { teamData } from '../data'
import Link from 'next/link'

const Team = () => {
  const images = [avatar7, avatar6, avatar8, avatar9, avatar4, avatar2, avatar5]
  return (
    <section className="section" id="team">
      <Container>
        <Row className="justify-content-between g-3">
          <Col lg={5}>
            <SectionHeader
              align="left"
              eyebrow="Team"
              title="Meet the Dedicated Professionals Who Drive Our Vision Forward"
              subtitle="At the heart of our success is our exceptional team of dedicated professionals. Each member brings a wealth of expertise, creativity, and passion to the table"
              className="mb-4"
            />
            <div className="user-team-price mb-4 mt-3  pb-2 pt-1">
              <ul>
                {images.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Image src={item} alt="image" className="rounded-circle" />
                    </li>
                  )
                })}
              </ul>
            </div>
            <Button variant="primary">Talk With Team</Button>
          </Col>
          <Col lg={6}>
            <Row className="align-items-center justify-content-center g-4 text-center">
              {teamData.map((item, idx) => (
                <Col lg={3} key={idx}>
                  <Image src={item.image} alt="avatar" className="img-fluid rounded" />
                  <div className="mt-3">
                    <Link href="" className="fw-semibold text-dark f-18">
                      {item.name}
                    </Link>
                    <p className="mb-0 text-muted">{item.role}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team
