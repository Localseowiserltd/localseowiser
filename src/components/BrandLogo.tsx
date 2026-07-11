import { SITE_NAME } from '@/context/constants'
import Image from 'next/image'
import Link from 'next/link'

type BrandLogoProps = {
  href?: string
  className?: string
  linkClassName?: string
  showTagline?: boolean
  variant?: 'default' | 'footer'
  onClick?: () => void
}

const BrandLogo = ({
  href = '/',
  className = '',
  linkClassName = '',
  showTagline = false,
  variant = 'default',
  onClick,
}: BrandLogoProps) => {
  const isFooter = variant === 'footer'
  const content = (
    <span className={`brand-logo-wrap ${className}`.trim()}>
      <Image
        src={isFooter ? '/logo-footer.png' : '/logo.png'}
        alt={`${SITE_NAME} logo`}
        width={isFooter ? 1464 : 630}
        height={isFooter ? 272 : 354}
        className="brand-logo-img"
        priority={!isFooter}
      />
      {showTagline && <span className="brand-tagline">Pittsburgh Local SEO</span>}
    </span>
  )

  if (href) {
    return (
      <Link href={href} className={`logo text-decoration-none ${linkClassName}`.trim()} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return content
}

export default BrandLogo
