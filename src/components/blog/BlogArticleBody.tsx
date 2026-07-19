import BlogRichText from '@/components/blog/BlogRichText'
import ButtonLink from '@/components/ButtonLink'
import type { ArticleBlock } from '@/types/blog'
import Image from 'next/image'

type BlogArticleBodyProps = {
  blocks: ArticleBlock[]
}

const BlogArticleBody = ({ blocks }: BlogArticleBodyProps) => {
  if (blocks.length === 0) return null

  return (
    <div className="blog-article__body">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`

        switch (block.type) {
          case 'heading': {
            const Tag = `h${block.level}` as 'h2' | 'h3' | 'h4'
            return (
              <Tag key={key} id={block.id} className={`blog-article__heading blog-article__heading--h${block.level}`}>
                {block.text}
              </Tag>
            )
          }
          case 'paragraph':
            return (
              <p key={key}>
                <BlogRichText text={block.text} />
              </p>
            )
          case 'list':
            return block.ordered ? (
              <ol key={key} className="blog-article__list">
                {block.items.map((item) => (
                  <li key={item}>
                    <BlogRichText text={item} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={key} className="blog-article__list">
                {block.items.map((item) => (
                  <li key={item}>
                    <BlogRichText text={item} />
                  </li>
                ))}
              </ul>
            )
          case 'table':
            return (
              <div key={key} className="blog-article__table-wrap">
                <table className="blog-article__table">
                  <thead>
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} scope="col">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={`${key}-row-${rowIndex}`}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${key}-${rowIndex}-${cellIndex}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'image':
            return (
              <figure key={key} className="blog-article__figure">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={1200}
                  height={675}
                  className="blog-article__figure-img"
                  sizes="(max-width: 820px) 100vw, 820px"
                />
                {block.caption ? <figcaption>{block.caption}</figcaption> : null}
              </figure>
            )
          case 'blockquote':
            return (
              <blockquote key={key} className="blog-article__blockquote">
                <p>{block.text}</p>
                {block.cite ? <cite>{block.cite}</cite> : null}
              </blockquote>
            )
          case 'callout':
            return (
              <aside
                key={key}
                className={`blog-article__callout blog-article__callout--${block.variant || 'info'}`}
              >
                {block.title ? <p className="blog-article__callout-title">{block.title}</p> : null}
                <p className="mb-0">{block.text}</p>
              </aside>
            )
          case 'cta':
            return (
              <aside key={key} className="blog-article__inline-cta">
                <h3 className="blog-article__inline-cta-title">{block.title}</h3>
                <p>{block.text}</p>
                <ButtonLink href={block.buttonHref} variant="primary">
                  {block.buttonLabel}
                </ButtonLink>
              </aside>
            )
          case 'video':
            return (
              <div key={key} className="blog-article__video">
                <iframe
                  src={block.src}
                  title={block.title || 'Embedded video'}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )
          case 'code':
            return (
              <pre key={key} className="blog-article__code">
                <code>{block.code}</code>
              </pre>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default BlogArticleBody
