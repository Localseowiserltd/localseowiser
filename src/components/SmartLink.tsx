import { isProtocolHref, toHrefString } from '@/lib/href'
import Link, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'

type SmartLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  href: LinkProps['href'] | string
}

const SmartLink = ({ href, children, ...props }: SmartLinkProps) => {
  const hrefString = toHrefString(typeof href === 'string' ? href : '')

  if (isProtocolHref(hrefString)) {
    return (
      <a href={hrefString} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href as LinkProps['href']} {...props}>
      {children}
    </Link>
  )
}

export default SmartLink
