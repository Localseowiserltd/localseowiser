'use client'

import { Container } from 'react-bootstrap'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import { contactInfo, contactTelHref } from '@/data/site-content'

type HeroStatCounterProps = {
  end: number
  suffix: string
  decimals: number
  className?: string
}

export const HeroStatCounter = ({ end, suffix, decimals, className }: HeroStatCounterProps) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <span ref={ref} className={className}>
      {inView && <CountUp end={end} duration={2.5} decimals={decimals} />}
      {suffix}
    </span>
  )
}

const homeHero = {
  eyebrow: 'Pittsburgh Digital Marketing Agency',
  title: 'Rank Higher. Get More Leads. Grow Your Business.',
  lead: 'Local SEO, Google Ads, websites, and digital marketing that help Pittsburgh businesses get found and convert more customers.',
  trustItems: [
    'Serving Pittsburgh businesses',
    'No long-term contracts',
    'Transparent reporting',
    'Free consultation',
  ],
  image: '/services-hub-hero.png',
  imageAlt: 'SEO growth dashboard showing leads and rankings',
}

const Hero = () => {
  return (
    <section className="home-hub-hero" id="home">
      <Container>
        <div className="home-hub-hero__grid">
          <div className="home-hub-hero__copy">
            <p className="section-eyebrow mb-3">{homeHero.eyebrow}</p>
            <h1 className="home-hub-hero__title">{homeHero.title}</h1>
            <p className="home-hub-hero__lead">{homeHero.lead}</p>
            <div className="home-hub-hero__actions">
              <a
                href="https://wa.me/14126637288"
                target="_blank"
                rel="noopener noreferrer"
                className="home-hub-hero__btn home-hub-hero__btn--primary">
                Get Free Consultation
                <IconifyIcon icon="tabler:arrow-right" aria-hidden="true" />
              </a>
              <a href={contactTelHref} className="home-hub-hero__btn home-hub-hero__btn--outline">
                <IconifyIcon icon="tabler:phone" aria-hidden="true" />
                Call Us: {contactInfo.phone}
              </a>
            </div>
            <ul className="home-hub-hero__trust list-unstyled mb-0">
              {homeHero.trustItems.map((item) => (
                <li key={item}>
                  <IconifyIcon icon="tabler:circle-check-filled" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="home-hub-hero__media">
            <Image
              src={homeHero.image}
              alt={homeHero.imageAlt}
              width={1100}
              height={820}
              className="home-hub-hero__img"
              priority
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
