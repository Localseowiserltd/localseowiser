'use client'

import AnimatedCounter from '@/components/AnimatedCounter'

type StatGlowCardProps = {
  trend?: string
  end: number
  suffix: string
  decimals: number
  label: string
  footnote?: string
}

const StatGlowCard = ({ trend, end, suffix, decimals, label, footnote }: StatGlowCardProps) => {
  return (
    <div className="stat-glow-outer">
      <div className="stat-glow-dot" />
      <div className="stat-glow-card">
        <div className="stat-glow-ray" />
        {trend && <span className="stat-glow-trend">{trend}</span>}
        <AnimatedCounter end={end} suffix={suffix} decimals={decimals} className="stat-glow-value" />
        <span className="stat-glow-label">{label}</span>
        {footnote && <span className="stat-glow-footnote">{footnote}</span>}
        <div className="stat-glow-line stat-glow-line-top" />
        <div className="stat-glow-line stat-glow-line-left" />
        <div className="stat-glow-line stat-glow-line-bottom" />
        <div className="stat-glow-line stat-glow-line-right" />
      </div>
    </div>
  )
}

export default StatGlowCard
