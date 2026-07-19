import Link from 'next/link'
import type { ReactNode } from 'react'

type BlogRichTextProps = {
  text: string
  className?: string
}

/**
 * Renders plain text with optional markdown-style links: [label](/path)
 * Only allows same-origin relative paths starting with `/`.
 */
const BlogRichText = ({ text, className }: BlogRichTextProps) => {
  const nodes: ReactNode[] = []
  const pattern = /\[([^\]]+)\]\((\/[^)\s]+)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    const label = match[1]
    const href = match[2]
    nodes.push(
      <Link key={`${href}-${match.index}`} href={href} className="blog-article__inline-link">
        {label}
      </Link>,
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  if (nodes.length === 0) return <span className={className}>{text}</span>
  if (className) return <span className={className}>{nodes}</span>
  return <>{nodes}</>
}

export default BlogRichText
