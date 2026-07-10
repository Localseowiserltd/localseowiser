'use client'

import ButtonLink from '@/components/ButtonLink'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { testimonials } from '@/data/site-content'
import avatar1 from '@/assets/images/team/avatar-1.jpg'
import avatar2 from '@/assets/images/team/avatar-2.jpg'
import avatar3 from '@/assets/images/team/avatar-3.jpg'
import avatar4 from '@/assets/images/team/avatar-4.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import avatar6 from '@/assets/images/team/avatar-6.jpg'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

const avatars: StaticImageData[] = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]

const bentoVariants = [
  'testimonial-bento-item--featured',
  'testimonial-bento-item--dark',
  'testimonial-bento-item--light testimonial-bento-item--tall',
  'testimonial-bento-item--light testimonial-bento-item--item4',
  'testimonial-bento-item--dark-block',
  'testimonial-bento-item--light testimonial-bento-item--item6',
]

const Testimonial = () => {
  return (
    <section className="section testimonials-bento-section" id="testimonial">
      <div className="testimonials-bento-section__grid" aria-hidden="true" />
      <Container className="testimonials-bento-section__inner">
        <div className="testimonials-bento-heading">
          <SectionHeader
            eyebrow="Testimonials"
            title="What clients say about working with us"
          />
        </div>
        <div className="testimonials-bento-grid">
          {testimonials.map((item, idx) => (
            <article key={item.name} className={`testimonial-bento-item ${bentoVariants[idx]}`}>
              <Image src={avatars[idx]} alt={item.name} width={50} height={50} />
              <p className="testimonial-bento-name">{item.name}</p>
              <p className="testimonial-bento-role">{item.role}</p>
              <p className="testimonial-bento-quote">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="testimonials-rating-strip">
          <div className="d-flex align-items-center gap-2">
            <ul className="p-0 m-0 d-flex text-warning list-unstyled">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i}>
                  <IconifyIcon icon="tabler:star-filled" />
                </li>
              ))}
            </ul>
            <span className="testimonials-rating-value">4.9</span>
          </div>
          <div className="text-center">
            <p className="fw-semibold mb-0">Industry-leading rating</p>
            <p className="text-muted f-14 mb-0">Based on verified local campaigns · 4.9 average client satisfaction</p>
          </div>
          <ButtonLink variant="outline-primary" href="/contact">
            See More Reviews
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial
