'use client'

import type { TocItem } from '@/data/blog'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useEffect, useState } from 'react'

type BlogTableOfContentsProps = {
  items: TocItem[]
}

const BlogTableOfContents = ({ items }: BlogTableOfContentsProps) => {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (items.length === 0) return

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    headings.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <button
        type="button"
        className="blog-toc__toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>On this page</span>
        <IconifyIcon icon={open ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
      </button>
      <div className={`blog-toc__panel${open ? ' is-open' : ''}`}>
        <p className="blog-toc__heading">On this page</p>
        <ol className="blog-toc__list">
          {items.map((item) => (
            <li key={item.id} className={`blog-toc__item blog-toc__item--h${item.level}`}>
              <a
                href={`#${item.id}`}
                className={`blog-toc__link${activeId === item.id ? ' is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default BlogTableOfContents
