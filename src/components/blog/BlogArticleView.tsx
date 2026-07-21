import BlogArticleBody from '@/components/blog/BlogArticleBody'
import BlogAuthorBox from '@/components/blog/BlogAuthorBox'
import BlogCard from '@/components/blog/BlogCard'
import BlogFaqSection from '@/components/blog/BlogFaqSection'
import BlogReadingProgress from '@/components/blog/BlogReadingProgress'
import BlogShareBar from '@/components/blog/BlogShareBar'
import BlogTableOfContents from '@/components/blog/BlogTableOfContents'
import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { SITE_ORIGIN } from '@/config/site'
import {
  buildTocAndBlocks,
  formatBlogDate,
  getBlogFeaturedImage,
  getBlogPostPath,
} from '@/data/blog'
import type { BlogPost } from '@/types/blog'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

type BlogArticleViewProps = {
  post: BlogPost
  relatedPosts: BlogPost[]
  previous: BlogPost | null
  next: BlogPost | null
}

const BlogArticleView = ({ post, relatedPosts, previous, next }: BlogArticleViewProps) => {
  const { blocks, toc } = buildTocAndBlocks(post)
  const hasFaq = Boolean(post.faq?.some((item) => item.question.trim() && item.answer.trim()))
  const featuredImage = getBlogFeaturedImage(post)
  const shareUrl = `${SITE_ORIGIN}${getBlogPostPath(post)}`
  const updatedLabel = post.updatedDate ? formatBlogDate(post.updatedDate) : null

  return (
    <>
      <BlogReadingProgress />

      <article className="section blog-article-section">
        <Container>
          <div className={`blog-article-layout${toc.length > 0 ? ' blog-article-layout--with-toc' : ''}`}>
            {toc.length > 0 ? (
              <aside className="blog-article-layout__toc">
                <BlogTableOfContents items={toc} />
              </aside>
            ) : null}

            <div className="blog-article-layout__main">
              {/*
                immediate: tall articles never reach IntersectionObserver threshold 0.12
                (viewport / article height can stay below 12%), which left body text at opacity 0.
              */}
              <ScrollReveal animation="fade-up" immediate>
                <div className="blog-article">
                  <span className="inner-blog-card__badge">{post.category}</span>
                  <h1 className="blog-article__title">{post.title}</h1>
                  {post.intro ? <p className="blog-article__intro">{post.intro}</p> : null}
                  <p className="blog-article__meta">
                    <span>By {post.author}</span>
                    {post.publishedDate && post.date ? (
                      <>
                        <span aria-hidden="true"> · </span>
                        <time dateTime={post.publishedDate}>Published {post.date}</time>
                      </>
                    ) : null}
                    {post.updatedDate && updatedLabel ? (
                      <>
                        <span aria-hidden="true"> · </span>
                        <time dateTime={post.updatedDate}>Updated {updatedLabel}</time>
                      </>
                    ) : null}
                    <span aria-hidden="true"> · </span>
                    <span>{post.readingTime} read</span>
                  </p>

                  {featuredImage ? (
                    <Image
                      src={featuredImage}
                      alt={post.featuredImageAlt || post.title}
                      width={1200}
                      height={630}
                      className="blog-article__img"
                      sizes="(max-width: 820px) 100vw, 820px"
                      priority
                    />
                  ) : null}

                  <BlogShareBar title={post.title} url={shareUrl} />

                  <BlogArticleBody blocks={blocks} />

                  {hasFaq && post.faq ? <BlogFaqSection items={post.faq} /> : null}

                  <BlogAuthorBox />

                  <div className="blog-article__nav">
                    {previous ? (
                      <Link href={getBlogPostPath(previous)} className="blog-article__nav-link">
                        <span className="blog-article__nav-label">
                          <IconifyIcon icon="tabler:arrow-left" /> Previous
                        </span>
                        <span className="blog-article__nav-title">{previous.title}</span>
                      </Link>
                    ) : (
                      <span />
                    )}
                    {next ? (
                      <Link href={getBlogPostPath(next)} className="blog-article__nav-link blog-article__nav-link--next">
                        <span className="blog-article__nav-label">
                          Next <IconifyIcon icon="tabler:arrow-right" />
                        </span>
                        <span className="blog-article__nav-title">{next.title}</span>
                      </Link>
                    ) : null}
                  </div>

                  <ButtonLink variant="outline-primary" href="/blog">
                    Back to Blog
                  </ButtonLink>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </article>

      {relatedPosts.length > 0 ? (
        <section className="section bg-light blog-related-section">
          <Container>
            <ScrollReveal animation="fade-up">
              <h2 className="blog-related-section__title">Related Articles</h2>
            </ScrollReveal>
            <Row className="g-3 g-lg-4">
              {relatedPosts.map((relatedPost, idx) => (
                <Col lg={6} key={relatedPost.slug}>
                  <ScrollReveal animation="zoom-in" delay={idx * 80} className="h-100">
                    <BlogCard post={relatedPost} />
                  </ScrollReveal>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      ) : null}

      <section className="section blog-article-cta">
        <Container>
          <div className="case-study-final-cta__panel">
            <h2>{post.cta?.title || 'Ready to improve your local search visibility?'}</h2>
            <p>
              {post.cta?.text ||
                'Get a practical Local SEO plan built around Google Business Profile, citations, and conversion-focused pages for your market.'}
            </p>
            <div className="case-study-hero__actions">
              <ButtonLink href={post.cta?.primaryHref || '/contact'} variant="primary">
                {post.cta?.primaryLabel || 'Get in Touch'}
              </ButtonLink>
              <ButtonLink
                href={post.cta?.secondaryHref || '/local-seo'}
                variant="outline-primary"
              >
                {post.cta?.secondaryLabel || 'View Local SEO Services'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default BlogArticleView
