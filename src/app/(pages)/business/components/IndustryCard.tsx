import type { HomepageIndustryCard } from '@/data/industries/home'
import Image from 'next/image'
import Link from 'next/link'

type IndustryCardProps = {
  item: HomepageIndustryCard
  priority?: boolean
}

const IndustryCard = ({ item, priority = false }: IndustryCardProps) => {
  return (
    <Link
      href={item.href}
      className="text-decoration-none d-block h-100 industry-card-link"
      aria-label={`Explore SEO for ${item.title}`}
    >
      <article className="portfolio-project-card portfolio-project-card--static portfolio-project-card--industry h-100">
        <div className="portfolio-project-card__visual">
          <Image
            src={item.image}
            alt={item.imageAlt}
            width={680}
            height={360}
            className="portfolio-project-card__img"
            sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
            priority={priority}
          />
        </div>
        <div className="portfolio-project-card__body">
          <h3 className="portfolio-project-card__name">{item.title}</h3>
          <p className="portfolio-project-card__desc mb-0">{item.description}</p>
          <span className="industry-card-cta">
            Explore SEO for {item.title}
          </span>
        </div>
      </article>
    </Link>
  )
}

export default IndustryCard
