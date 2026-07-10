'use client'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useEffect, useState } from 'react'

type ServiceHeroParagraphSliderProps = {
  paragraphs: string[]
}

const ServiceHeroParagraphSlider = ({ paragraphs }: ServiceHeroParagraphSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slideCount = paragraphs.length

  useEffect(() => {
    if (slideCount <= 1) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [slideCount])

  if (slideCount === 0) return null

  const goTo = (index: number) => {
    setActiveIndex(index)
  }

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount)
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % slideCount)
  }

  return (
    <div className="service-detail-hero__slider">
      <div className="service-detail-hero__slider-track" aria-live="polite">
        {paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 48)}
            className={`service-detail-hero__body page-hero-header__desc ${index === activeIndex ? 'is-active' : ''}`}
            aria-hidden={index !== activeIndex}>
            {paragraph}
          </p>
        ))}
      </div>

      {slideCount > 1 ? (
        <div className="service-detail-hero__slider-controls">
          <button type="button" className="service-detail-hero__slider-arrow" onClick={goPrev} aria-label="Previous slide">
            <IconifyIcon icon="tabler:chevron-left" />
          </button>
          <div className="service-detail-hero__slider-dots" role="tablist" aria-label="Hero slides">
            {paragraphs.map((paragraph, index) => (
              <button
                key={paragraph.slice(0, 48)}
                type="button"
                role="tab"
                className={`service-detail-hero__slider-dot ${index === activeIndex ? 'is-active' : ''}`}
                aria-selected={index === activeIndex}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button type="button" className="service-detail-hero__slider-arrow" onClick={goNext} aria-label="Next slide">
            <IconifyIcon icon="tabler:chevron-right" />
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default ServiceHeroParagraphSlider
