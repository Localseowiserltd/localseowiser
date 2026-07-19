'use client'

import { useEffect, useState } from 'react'

const BlogReadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const article = document.querySelector('.blog-article__body')
      if (!article) {
        const doc = document.documentElement
        const scrollTop = doc.scrollTop || document.body.scrollTop
        const height = doc.scrollHeight - doc.clientHeight
        setProgress(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0)
        return
      }

      const rect = article.getBoundingClientRect()
      const articleTop = window.scrollY + rect.top
      const articleHeight = article.scrollHeight
      const viewport = window.innerHeight
      const scrolled = window.scrollY + viewport - articleTop
      const pct = Math.min(100, Math.max(0, (scrolled / (articleHeight + viewport * 0.25)) * 100))
      setProgress(pct)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="blog-reading-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)} aria-label="Reading progress">
      <div className="blog-reading-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default BlogReadingProgress
