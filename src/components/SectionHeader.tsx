import clsx from 'clsx'
import { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  subtitle?: ReactNode
  align?: 'center' | 'left'
  theme?: 'light' | 'dark'
  titleTag?: 'h2' | 'h3'
  className?: string
  children?: ReactNode
}

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  titleTag: TitleTag = 'h2',
  className,
  children,
}: SectionHeaderProps) => {
  return (
    <div
      className={clsx(
        'section-header',
        align === 'center' && 'section-header--center text-center mx-auto',
        theme === 'dark' && 'section-header--dark',
        className,
      )}
    >
      <p className="section-eyebrow mb-2">
        <span className="section-eyebrow-line" aria-hidden="true" />
        {eyebrow}
        <span className="section-eyebrow-line" aria-hidden="true" />
      </p>
      <TitleTag className="section-title mb-2">{title}</TitleTag>
      {subtitle ? (
        <div className="section-subtitle-wrap">
          {typeof subtitle === 'string' ? <p className="section-subtitle mb-0">{subtitle}</p> : subtitle}
        </div>
      ) : null}
      {children}
    </div>
  )
}

export default SectionHeader
