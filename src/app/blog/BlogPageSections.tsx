'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { blogPosts } from '@/data/site-content'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const BlogPageSections = () => {
  const [featuredPost, ...otherPosts] = blogPosts

  return (
    <section className="section bg-light">
      <Container>
        <ScrollReveal animation="fade-up">
          <Row className="inner-blog-featured g-4 g-lg-5 align-items-center">
            <Col lg={6}>
              <Link href={featuredPost.slug} className="d-block">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="inner-blog-featured__img"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <div className="inner-blog-featured__body">
                <span className="inner-blog-card__badge">{featuredPost.category}</span>
                <h3 className="inner-blog-featured__title">
                  <Link href={featuredPost.slug}>{featuredPost.title}</Link>
                </h3>
                <p className="inner-blog-featured__excerpt">{featuredPost.excerpt}</p>
                <p className="inner-blog-card__meta">
                  {featuredPost.author} • {featuredPost.date} • {featuredPost.readTime}
                </p>
                <Link href={featuredPost.slug} className="inner-blog-card__link">
                  Read Complete Article
                  <IconifyIcon icon="tabler:arrow-right" />
                </Link>
              </div>
            </Col>
          </Row>
        </ScrollReveal>

        <Row className="g-3 g-lg-4">
          {otherPosts.map((post, idx) => (
            <Col lg={6} key={idx}>
              <ScrollReveal animation="zoom-in" delay={idx * 80} className="h-100">
                <div className="package-card-border h-100">
                  <article className="inner-blog-card h-100">
                    <Link href={post.slug} className="d-block">
                      <img src={post.image} alt={post.title} className="inner-blog-card__img" />
                    </Link>
                    <div className="inner-blog-card__body">
                      <span className="inner-blog-card__badge">{post.category}</span>
                      <h5 className="inner-blog-card__title">
                        <Link href={post.slug}>{post.title}</Link>
                      </h5>
                      <p className="inner-blog-card__excerpt">{post.excerpt}</p>
                      <p className="inner-blog-card__meta">
                        {post.author} • {post.date} • {post.readTime}
                      </p>
                      <Link href={post.slug} className="inner-blog-card__link">
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
  )
}

export default BlogPageSections
