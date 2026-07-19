'use client'

import clsx from 'clsx'
import { CSSProperties, useEffect, useRef, useState } from 'react'

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade-in'

type UseScrollRevealOptions = {
  animation?: AnimationType
  delay?: number
  duration?: number
  once?: boolean
  immediate?: boolean
  threshold?: number
  hoverable?: boolean
}

export const useScrollReveal = ({
  animation = 'fade-up',
  delay = 0,
  duration,
  once = true,
  immediate = false,
  // Default 0 so tall sections (blog articles, long pages) still reveal when any
  // pixel intersects. A ratio like 0.12 never fires when element ≫ viewport.
  threshold = 0,
  hoverable = true,
}: UseScrollRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      const frame = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(frame)
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [immediate, once, threshold])

  const style: CSSProperties = {
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
  }

  const className = clsx(
    'scroll-reveal',
    `scroll-reveal--${animation}`,
    visible && 'scroll-reveal--visible',
    hoverable && 'scroll-reveal--hoverable',
  )

  return { ref, className, style, visible }
}
