'use client'

import clsx from 'clsx'
import { RefObject, ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade-in'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  once?: boolean
  immediate?: boolean
  threshold?: number
  hoverable?: boolean
}

const ScrollReveal = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration,
  once = true,
  immediate = false,
  threshold = 0.12,
  hoverable = true,
}: ScrollRevealProps) => {
  const { ref, className: revealClassName, style } = useScrollReveal({
    animation,
    delay,
    duration,
    once,
    immediate,
    threshold,
  })

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={clsx(revealClassName, hoverable && 'scroll-reveal--hoverable', className)}
      style={style}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
