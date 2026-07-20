'use client'

import type { AboutTeamMember } from '@/data/about'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import { useRef } from 'react'
import type { Swiper as SwiperInstance } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type AboutTeamSliderProps = {
  members: AboutTeamMember[]
}

const AboutTeamSlider = ({ members }: AboutTeamSliderProps) => {
  const swiperRef = useRef<SwiperInstance | null>(null)

  return (
    <div className="about-team-swiper-wrap">
      <button
        type="button"
        className="about-team-swiper-prev"
        aria-label="Previous team members"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <IconifyIcon icon="tabler:chevron-left" />
      </button>
      <button
        type="button"
        className="about-team-swiper-next"
        aria-label="Next team members"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <IconifyIcon icon="tabler:chevron-right" />
      </button>

      <Swiper
        className="about-team-carousel-swiper"
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        grabCursor
        pagination={{
          el: '.about-team-swiper-pagination',
          clickable: true,
        }}
        breakpoints={{
          576: { slidesPerView: 2, spaceBetween: 16 },
          992: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 20 },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {members.map((member) => (
          <SwiperSlide key={member.id} className="h-auto">
            <article className="about-team-card h-100">
              <span className="about-team-card__label">{member.label}</span>
              <div className="about-team-card__photo-wrap">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  className="about-team-card__photo"
                  width={120}
                  height={120}
                  sizes="120px"
                />
              </div>
              <h5 className="about-team-card__name">{member.name}</h5>
              <p className="about-team-card__role">{member.role}</p>
              <p className="about-team-card__desc">{member.biography}</p>
              <div className="about-team-card__tags">
                {member.skills.slice(0, 3).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="about-team-swiper-pagination" />
    </div>
  )
}

export default AboutTeamSlider
