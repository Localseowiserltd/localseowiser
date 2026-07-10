'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { homeServices } from '@/data/site-content'
import clsx from 'clsx'
import { RefObject } from 'react'
import { Container } from 'react-bootstrap'

type ServiceItemProps = {
  item: (typeof homeServices)[number]
  index: number
}

const ServiceGridItem = ({ item, index }: ServiceItemProps) => {
  const { ref, className, style } = useScrollReveal({ animation: 'fade-up', delay: index * 80 })

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={clsx('services-grid-item', className)} style={style}>
      <div className="services-grid-item-head">
        <span className="services-grid-icon">
          <IconifyIcon icon={item.icon} />
        </span>
        <h5 className="services-grid-title mb-0">{item.title}</h5>
      </div>
      <p className="services-grid-desc mb-0">{item.description}</p>
    </div>
  )
}

const Services = () => {
  return (
    <section className="section" id="services">
      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeader
            eyebrow="What's Included"
            title="Everything that moves the needle in local search"
          />
        </ScrollReveal>

        <div className="services-grid-panel services-grid-panel--eight">
          {homeServices.map((item, idx) => (
            <ServiceGridItem key={item.title} item={item} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
