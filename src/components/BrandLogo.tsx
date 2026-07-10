import { SITE_NAME } from '@/context/constants'
import Image from 'next/image'
import Link from 'next/link'

type BrandLogoProps = {
  href?: string
  className?: string
  linkClassName?: string
  showTagline?: boolean
  onClick?: () => void
}

const BrandLogo = ({
  href = '/',
  className = '',
  linkClassName = '',
  showTagline = false,
  onClick,
}: BrandLogoProps) => {
  const content = (
    <span className={`brand-logo-wrap ${className}`.trim()}>
      <Image
        src="/logo.png"
        alt={`${SITE_NAME} logo`}
        width={630}
        height={354}
        className="brand-logo-img"
        priority
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
