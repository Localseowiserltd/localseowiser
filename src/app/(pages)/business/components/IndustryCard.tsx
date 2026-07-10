'use client'

import { industries } from '@/data/site-content'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type IndustryItem = (typeof industries)[number]

type IndustryCardProps = {
  item: IndustryItem
  image: StaticImageData
}

const IndustryCard = ({ item, image }: IndustryCardProps) => {
  const card = (
    <article className="portfolio-project-card portfolio-project-card--static portfolio-project-card--industry">
      <div className="portfolio-project-card__visual">
        <Image
          src={image}
          alt={`${item.title} local SEO visual`}
          width={680}
          height={360}
          className="portfolio-project-card__img"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 420px"
        />
      </div>
      <div className="portfolio-project-card__body">
        <h3 className="portfolio-project-card__name mb-0">{item.title}</h3>
      </div>
    </article>
  )

  if ('href' in item && item.href) {
    return (
      <Link href={item.href} className="text-decoration-none d-block h-100">
        {card}
      </Link>
    )
  }

  return card
}

export default IndustryCard
