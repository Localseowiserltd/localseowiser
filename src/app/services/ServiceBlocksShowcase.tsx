'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import marketingImage from '@/assets/images/marketing.jpg'
import designImage from '@/assets/images/design.jpg'
import socialImage from '@/assets/images/social.jpg'
import { serviceCategories } from '@/data/site-content'
import Link from 'next/link'
import { StaticImageData } from 'next/image'

type ServiceItem = {
  id: string
  number: string
  title: string
  description: string
  href: string
}

type ServiceListLayout = 'list' | 'staggered'

type ServiceBlock = {
  id: string
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  listLayout: ServiceListLayout
  services: ServiceItem[]
}

const categoryIds = ['search-engine-marketing', 'web-design', 'social-media'] as const

const blockImages: Record<(typeof categoryIds)[number], { src: StaticImageData; alt: string }> = {
  'search-engine-marketing': { src: marketingImage, alt: 'Search Engine Marketing' },
  'web-design': { src: designImage, alt: 'Web Development' },
  'social-media': { src: socialImage, alt: 'Social Media' },
}

const blockLayouts: Record<(typeof categoryIds)[number], ServiceListLayout> = {
  'search-engine-marketing': 'list',
  'web-design': 'staggered',
  'social-media': 'list',
}

const serviceBlocks: ServiceBlock[] = categoryIds.map((categoryId) => {
  const category = serviceCategories.find((item) => item.id === categoryId)!
  const image = blockImages[categoryId]

  return {
    id: category.id,
    title: category.title,
    description: category.subtitle,
    image: image.src,
    imageAlt: image.alt,
    listLayout: blockLayouts[categoryId],
    services: category.services,
  }
})

type ServiceBlockItemProps = {
  service: ServiceItem
  delay?: number
}

const ServiceBlockItem = ({ service, delay = 0 }: ServiceBlockItemProps) => (
  <ScrollReveal animation="fade-up" delay={delay} className="service-blocks-showcase__item-wrap">
    <div className="service-blocks-showcase__item">
      <span className="inner-service-card__number">{service.number}</span>
      <h5 className="inner-service-card__title">{service.title}</h5>
      <p className="inner-service-card__desc">{service.description}</p>
      <Link href={service.href} className="inner-service-card__link">
        Explore service
        <IconifyIcon icon="tabler:arrow-right" className="ms-1" />
      </Link>
    </div>
  </ScrollReveal>
)

type ServiceBlockSectionProps = ServiceBlock & {
  index: number
}

const ServiceBlockSection = ({
  id,
  title,
  description,
  image,
  imageAlt,
  listLayout,
  services,
  index,
}: ServiceBlockSectionProps) => {
  const isReversed = index % 2 === 1

  return (
    <section className="service-blocks-showcase section" id={id}>
      <div className="container position-relative">
        <div className={`service-blocks-showcase__row${isReversed ? ' service-blocks-showcase__row--reverse' : ''}`}>
          <div className="service-blocks-showcase__content">
            <ScrollReveal animation="fade-up">
              <SectionHeader align="left" eyebrow={title} title={title} subtitle={description} />
            </ScrollReveal>
            <div
              className={`service-blocks-showcase__list${
                listLayout === 'staggered' ? ' service-blocks-showcase__list--staggered' : ''
              }`}>
              {services.map((service, idx) => (
                <ServiceBlockItem key={service.id} service={service} delay={idx * 60} />
              ))}
            </div>
          </div>

          <ScrollReveal
            animation={isReversed ? 'fade-right' : 'fade-left'}
            delay={80}
            className="service-blocks-showcase__media">
            <div className="service-blocks-showcase__image-box">
              <img src={image.src} alt={imageAlt} className="service-blocks-showcase__image" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

const ServiceBlocksShowcase = () => {
  return (
    <div className="service-blocks-showcase-wrap">
      {serviceBlocks.map((block, index) => (
        <ServiceBlockSection key={block.id} {...block} index={index} />
      ))}
    </div>
  )
}

export default ServiceBlocksShowcase
