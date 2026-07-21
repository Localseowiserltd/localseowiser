import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import { portfolioListingMeta } from '@/data/portfolio'

const heroFeatures = [
  {
    title: 'Proven Strategies',
    text: 'Data-driven local SEO that improves visibility where it matters.',
    icon: 'tabler:trophy',
    tone: 'orange',
  },
  {
    title: 'Measurable Growth',
    text: 'More traffic, calls, and customers — tracked with real platform data.',
    icon: 'tabler:chart-bar',
    tone: 'blue',
  },
  {
    title: 'Long-Term Partners',
    text: 'We grow when you grow, with work built for lasting results.',
    icon: 'tabler:users',
    tone: 'green',
  },
]

const PortfolioHubHero = () => {
  const accent = 'Local Businesses'
  const title = portfolioListingMeta.h1
  const accentIndex = title.indexOf(accent)
  const titleNode =
    accentIndex >= 0 ? (
      <>
        {title.slice(0, accentIndex)}
        <span className="portfolio-hub-hero__accent">{accent}</span>
        {title.slice(accentIndex + accent.length)}
      </>
    ) : (
      title
    )

  return (
    <section className="portfolio-hub-hero">
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-lg-6">
            <p className="section-eyebrow mb-3">
              <IconifyIcon icon="tabler:briefcase" aria-hidden="true" /> Portfolio
            </p>
            <h1 className="portfolio-hub-hero__title">{titleNode}</h1>
            <p className="portfolio-hub-hero__lead">{portfolioListingMeta.intro}</p>
            <div className="portfolio-hub-hero__features">
              {heroFeatures.map((item) => (
                <article
                  key={item.title}
                  className={`portfolio-hub-hero__feature portfolio-hub-hero__feature--${item.tone}`}>
                  <span className="portfolio-hub-hero__feature-icon">
                    <IconifyIcon icon={item.icon} aria-hidden="true" />
                  </span>
                  <div>
                    <h2>{item.title}</h2>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="portfolio-hub-hero__media">
              <Image
                src="/pittsburgh-skyline-hero.jpg"
                alt="Pittsburgh skyline representing local business growth"
                width={1536}
                height={1024}
                sizes="(max-width: 991px) 100vw, 50vw"
                quality={72}
                className="portfolio-hub-hero__img"
                priority
              />
              <aside className="portfolio-hub-hero__badge">
                <span className="portfolio-hub-hero__badge-icon">
                  <IconifyIcon icon="tabler:building-store" aria-hidden="true" />
                </span>
                <p className="mb-0">
                  <strong>Helping Businesses Across Pittsburgh</strong>
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHubHero
