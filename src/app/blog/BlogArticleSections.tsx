'use client'

import ButtonLink from '@/components/ButtonLink'
import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { BlogPost } from '@/data/site-content'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

type BlogArticleSectionsProps = {
  post: BlogPost
  relatedPosts: BlogPost[]
}

const BlogArticleSections = ({ post, relatedPosts }: BlogArticleSectionsProps) => {
  return (
    <>
      <article className="section blog-article-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="blog-article">
              <span className="inner-blog-card__badge">{post.category}</span>
              <h1 className="blog-article__title">{post.title}</h1>
              <p className="blog-article__intro">{post.intro}</p>
              <p className="blog-article__meta">
                By {post.author} · {post.dateIso}
              </p>
              <img src={post.image} alt={post.title} className="blog-article__img" />
              <div className="blog-article__body">
                {post.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ButtonLink variant="outline-primary" href="/blog">
                Back to Blog
              </ButtonLink>
            </div>
          </ScrollReveal>
        </Container>
      </article>

      <section className="section bg-light blog-related-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <h3 className="blog-related-section__title">Related Articles</h3>
          </ScrollReveal>
          <Row className="g-3 g-lg-4">
            {relatedPosts.map((relatedPost, idx) => (
              <Col lg={6} key={relatedPost.slug}>
                <ScrollReveal animation="zoom-in" delay={idx * 80} className="h-100">
                  <div className="package-card-border h-100">
                    <article className="inner-blog-card h-100">
                      <Link href={relatedPost.slug} className="d-block">
                        <img src={relatedPost.image} alt={relatedPost.title} className="inner-blog-card__img" />
                      </Link>
                      <div className="inner-blog-card__body">
                        <span className="inner-blog-card__badge">{relatedPost.category}</span>
                        <h5 className="inner-blog-card__title">
                          <Link href={relatedPost.slug}>{relatedPost.title}</Link>
                        </h5>
                        <p className="inner-blog-card__excerpt">{relatedPost.excerpt}</p>
                        <p className="inner-blog-card__meta">
                          {relatedPost.author} • {relatedPost.date} • {relatedPost.readTime}
                        </p>
                        <Link href={relatedPost.slug} className="inner-blog-card__link">
                          Read Complete Article
                          <IconifyIcon icon="tabler:arrow-right" />
                        </Link>
                      </div>
                    </article>
                  </div>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default BlogArticleSections
