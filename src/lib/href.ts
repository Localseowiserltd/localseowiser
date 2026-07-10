export function isProtocolHref(href: string): boolean {
  return href.startsWith('mailto:') || href.startsWith('tel:')
}

export function toHrefString(href: string | undefined | null): string {
  return href ?? ''
}
