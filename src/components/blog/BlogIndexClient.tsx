'use client'

import BlogCard from '@/components/blog/BlogCard'
import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { BLOG_CATEGORIES, BLOG_PAGE_SIZE, getBlogFeaturedImage, getBlogPostPath } from '@/data/blog'
import type { BlogPost } from '@/types/blog'
import Image from 'next/image'
import Link from 'next/link'
import { useDeferredValue, useMemo, useState, useTransition } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

type BlogIndexClientProps = {
  posts: BlogPost[]
  featuredPost?: BlogPost | null
}

const BlogIndexClient = ({ posts, featuredPost }: BlogIndexClientProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(BLOG_PAGE_SIZE)
  const [, startTransition] = useTransition()
  const deferredQuery = useDeferredValue(query)

  const filteredPosts = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    return posts.filter((post) => {
      if (featuredPost && post.slug === featuredPost.slug && activeCategory === 'All' && !q) {
        // Keep featured in the grid too when browsing all — or exclude?
        // Spec: featured is separate section; grid can still list others primarily.
        // Exclude featured from grid when showing "all" without search to avoid duplicate.
        return false
      }
      if (activeCategory !== 'All' && post.category !== activeCategory) return false
      if (!q) return true
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      )
    })
  }, [posts, featuredPost, activeCategory, deferredQuery])

  // When filtering/searching, include featured post in results if it matches
  const displayPosts = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    const filtering = activeCategory !== 'All' || Boolean(q)
    if (!filtering || !featuredPost) return filteredPosts

    const featuredMatches =
      (activeCategory === 'All' || featuredPost.category === activeCategory) &&
      (!q ||
        featuredPost.title.toLowerCase().includes(q) ||
        featuredPost.excerpt.toLowerCase().includes(q) ||
        featuredPost.category.toLowerCase().includes(q))

    if (!featuredMatches) return filteredPosts
    if (filteredPosts.some((p) => p.slug === featuredPost.slug)) return filteredPosts
    return [featuredPost, ...filteredPosts]
  }, [filteredPosts, featuredPost, activeCategory, deferredQuery])

  const visiblePosts = displayPosts.slice(0, visibleCount)
  const hasMore = visibleCount < displayPosts.length

  const categories = useMemo(() => {
    const used = new Set(posts.map((p) => p.category))
    return BLOG_CATEGORIES.filter((c) => used.has(c))
  }, [posts])

  const setCategory = (category: string) => {
    startTransition(() => {
      setActiveCategory(category)
      setVisibleCount(BLOG_PAGE_SIZE)
    })
  }

  return (
    <section className="section bg-light blog-index-section">
      <Container>
        {featuredPost && activeCategory === 'All' && !query.trim() ? (
          <ScrollReveal animation="fade-up">
            <Row className="inner-blog-featured g-4 g-lg-5 align-items-center mb-4 mb-lg-5">
              <Col lg={6}>
                <Link href={getBlogPostPath(featuredPost)} className="d-block">
                  <Image
                    src={getBlogFeaturedImage(featuredPost)}
                    alt={featuredPost.featuredImageAlt || featuredPost.title}
                    width={900}
                    height={560}
                    className="inner-blog-featured__img"
                    sizes="(max-width: 991px) 100vw, 540px"
                    priority
                  />
                </Link>
              </Col>
              <Col lg={6}>
                <div className="inner-blog-featured__body">
                  <span className="inner-blog-card__badge">Featured · {featuredPost.category}</span>
                  <p className="inner-blog-card__meta mb-2">
                    <time dateTime={featuredPost.publishedDate}>{featuredPost.date}</time>
                    <span aria-hidden="true"> · </span>
                    <span>{featuredPost.readingTime} read</span>
                  </p>
                  <h2 className="inner-blog-featured__title">
                    <Link href={getBlogPostPath(featuredPost)}>{featuredPost.title}</Link>
                  </h2>
                  <p className="inner-blog-featured__excerpt">{featuredPost.excerpt}</p>
                  <Link href={getBlogPostPath(featuredPost)} className="btn btn-primary">
                    Read Article
                    <IconifyIcon icon="tabler:arrow-right" className="ms-1" />
                  </Link>
                </div>
              </Col>
            </Row>
          </ScrollReveal>
        ) : null}

        <div className="blog-index-toolbar">
          <div className="blog-index-search">
            <label htmlFor="blog-search" className="visually-hidden">
              Search articles
            </label>
            <IconifyIcon icon="tabler:search" className="blog-index-search__icon" aria-hidden />
            <input
              id="blog-search"
              type="search"
              className="blog-index-search__input"
              placeholder="Search by title, excerpt, or category…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setVisibleCount(BLOG_PAGE_SIZE)
              }}
              autoComplete="off"
            />
          </div>

          <div className="blog-index-filters" role="group" aria-label="Filter articles by category">
            <button
              type="button"
              className={`blog-index-filter${activeCategory === 'All' ? ' is-active' : ''}`}
              aria-pressed={activeCategory === 'All'}
              onClick={() => setCategory('All')}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`blog-index-filter${activeCategory === category ? ' is-active' : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {visiblePosts.length === 0 ? (
          <p className="blog-index-empty text-center mb-0">
            {posts.length === 0
              ? 'New Local SEO articles are coming soon. Check back shortly.'
              : 'No articles match your filters. Try another category or search term.'}
          </p>
        ) : (
          <Row className="g-3 g-lg-4">
            {visiblePosts.map((post, idx) => (
              <Col lg={6} key={post.slug}>
                <ScrollReveal animation="zoom-in" delay={idx * 60} className="h-100">
                  <BlogCard post={post} priority={idx < 2} />
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        )}

        {hasMore ? (
          <div className="blog-index-load-more text-center">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => setVisibleCount((count) => count + BLOG_PAGE_SIZE)}
            >
              Load more articles
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}

export default BlogIndexClient
