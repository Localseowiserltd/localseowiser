'use client'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useCallback, useState } from 'react'

type BlogShareBarProps = {
  title: string
  url: string
}

const BlogShareBar = ({ title, url }: BlogShareBarProps) => {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [url])

  return (
    <div className="blog-share" role="group" aria-label="Share this article">
      <p className="blog-share__label">Share</p>
      <div className="blog-share__actions">
        <button type="button" className="blog-share__btn" onClick={copyLink}>
          <IconifyIcon icon={copied ? 'tabler:check' : 'tabler:link'} />
          <span>{copied ? 'Copied' : 'Copy link'}</span>
        </button>
        <a
          className="blog-share__btn"
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon icon="tabler:brand-x" />
          <span>X</span>
        </a>
        <a
          className="blog-share__btn"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon icon="tabler:brand-linkedin" />
          <span>LinkedIn</span>
        </a>
        <a
          className="blog-share__btn"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon icon="tabler:brand-facebook" />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  )
}

export default BlogShareBar
