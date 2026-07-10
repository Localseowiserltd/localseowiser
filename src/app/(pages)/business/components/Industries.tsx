'use client'

import { industries, industriesSection } from '@/data/site-content'
import contractorsImg from '@/assets/images/industries/contractors.png'
import dentistsMedicalImg from '@/assets/images/industries/dentists-medical.png'
import hvacImg from '@/assets/images/industries/hvac.png'
import lawFirmsImg from '@/assets/images/industries/law-firms.png'
import plumbersImg from '@/assets/images/industries/plumbers.png'
import professionalFinancialImg from '@/assets/images/industries/professional-financial.png'
import restaurantsImg from '@/assets/images/industries/restaurants.png'
import roofingImg from '@/assets/images/industries/roofing.png'
import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import IndustryCard from './IndustryCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const industryImages: Record<string, StaticImageData> = {
  'law-firms': lawFirmsImg,
  'dentists-medical': dentistsMedicalImg,
  hvac: hvacImg,
  plumbers: plumbersImg,
  contractors: contractorsImg,
  roofing: roofingImg,
  restaurants: restaurantsImg,
  'professional-financial': professionalFinancialImg,
}

const Industries = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper) return

    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean' && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation.destroy()
      swiper.navigation.init()
      swiper.navigation.update()
    }

    if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean' && paginationRef.current) {
      swiper.params.pagination.el = paginationRef.current
      swiper.pagination.destroy()
      swiper.pagination.init()
      swiper.pagination.render()
      swiper.pagination.update()
    }
  }, [])

  return (
    <section className="section industries-section bg-light" id="industries">
      <Container>
        <div className="industries-carousel-header">
          <SectionHeader eyebrow={industriesSection.eyebrow} title={industriesSection.title} />
          <p className="industries-ask-us text-center">
            Don&apos;t see yours? We probably work with businesses like it.{' '}
            <Link href="/contact" className="text-primary fw-semibold">
              ask us
            </Link>
            .
          </p>
        </div>
      </Container>

      <div className="industries-carousel-full">
        <div className="industries-swiper-wrap">
          <button type="button" ref={prevRef} className="industries-swiper-prev" aria-label="Previous industry">
            <IconifyIcon icon="tabler:chevron-left" />
          </button>
          <button type="button" ref={nextRef} className="industries-swiper-next" aria-label="Next industry">
            <IconifyIcon icon="tabler:chevron-right" />
          </button>

          <Swiper
            className="industries-carousel-swiper"
            modules={[Navigation, Pagination, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }
              if (typeof swiper.params.pagination !== 'boolean' && swiper.params.pagination) {
                swiper.params.pagination.el = paginationRef.current
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              dynamicBullets: false,
            }}
            a11y={{
              prevSlideMessage: 'Previous industry',
              nextSlideMessage: 'Next industry',
              paginationBulletMessage: 'Go to industry slide {{index}}',
            }}
            grabCursor
            loop
            speed={500}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={16}
            watchOverflow
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
            }}
          >
            {industries.map((item) => (
              <SwiperSlide key={item.title}>
                <IndustryCard item={item} image={industryImages[item.imageKey]} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div ref={paginationRef} className="industries-swiper-pagination" aria-label="Industry carousel pagination" />
        </div>
      </div>
    </section>
  )
}

export default Industries
