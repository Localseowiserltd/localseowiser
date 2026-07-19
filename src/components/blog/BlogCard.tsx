import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getBlogFeaturedImage, getBlogPostPath } from '@/data/blog'
import type { BlogPost } from '@/types/blog'
import Image from 'next/image'
import Link from 'next/link'

type BlogCardProps = {
  post: BlogPost
  priority?: boolean
}

const BlogCard = ({ post, priority = false }: BlogCardProps) => {
  const href = getBlogPostPath(post)
  const image = getBlogFeaturedImage(post)

  return (
    <div className="package-card-border h-100">
      <article className="inner-blog-card h-100">
        <Link href={href} className="d-block inner-blog-card__media">
          {image ? (
            <Image
              src={image}
              alt={post.featuredImageAlt || post.title}
              width={680}
              height={360}
              className="inner-blog-card__img"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 420px"
              priority={priority}
            />
          ) : (
            <div className="inner-blog-card__img inner-blog-card__img--placeholder" aria-hidden />
          )}
        </Link>
        <div className="inner-blog-card__body">
          <span className="inner-blog-card__badge">{post.category}</span>
          <p className="inner-blog-card__meta mb-2">
            {post.publishedDate && post.date ? (
              <>
                <time dateTime={post.publishedDate}>{post.date}</time>
                <span aria-hidden="true"> · </span>
              </>
            ) : null}
            <span>{post.readingTime} read</span>
          </p>
          <h3 className="inner-blog-card__title">
            <Link href={href}>{post.title}</Link>
          </h3>
          <p className="inner-blog-card__excerpt">{post.excerpt}</p>
          <Link href={href} className="inner-blog-card__link">
            Read More
            <IconifyIcon icon="tabler:arrow-right" />
          </Link>
        </div>
      </article>
    </div>
  )
}

export default BlogCard
