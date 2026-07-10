import { isProtocolHref, toHrefString } from '@/lib/href'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { ButtonProps } from 'react-bootstrap'

type ButtonLinkProps = {
  href: LinkProps['href'] | string
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  className?: string
  children: React.ReactNode
} & Omit<React.ComponentProps<'a'>, 'href' | 'children'>

const ButtonLink = ({
  href,
  variant = 'primary',
  size,
  className,
  children,
  ...props
}: ButtonLinkProps) => {
  const classes = clsx('btn', `btn-${variant}`, size && `btn-${size}`, className)
  const hrefString = toHrefString(typeof href === 'string' ? href : '')

  if (isProtocolHref(hrefString)) {
    return (
      <a href={hrefString} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href as LinkProps['href']} className={classes} {...props}>
      {children}
    </Link>
  )
}

export default ButtonLink
