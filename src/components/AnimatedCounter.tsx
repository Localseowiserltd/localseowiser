'use client'

import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  end: number
  suffix?: string
  decimals?: number
  speed?: number
  className?: string
}

const AnimatedCounter = ({ end, suffix = '', decimals = 0, speed = 200, className }: AnimatedCounterProps) => {
  const [value, setValue] = useState(0)
  const counterRef = useRef<HTMLSpanElement>(null)
  const timeoutsRef = useRef<number[]>([])

  useEffect(() => {
    const node = counterRef.current
    if (!node) return

    const clearAnimations = () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id))
      timeoutsRef.current = []
    }

    const animate = (current: number) => {
      const step = end / speed

      if (current < end) {
        const next = Math.min(current + step, end)
        setValue(next)
        const id = window.setTimeout(() => animate(next), 1)
        timeoutsRef.current.push(id)
      } else {
        setValue(end)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearAnimations()
          setValue(0)
          animate(0)
        } else {
          clearAnimations()
          setValue(0)
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(node)

    return () => {
      clearAnimations()
      observer.disconnect()
    }
  }, [end, speed])

  const formatted = decimals > 0 ? value.toFixed(decimals) : String(Math.ceil(value))

  return (
    <span ref={counterRef} className={className}>
      {formatted}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
