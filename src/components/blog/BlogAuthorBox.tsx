import { getBlogAuthor } from '@/data/blog/author'
import Image from 'next/image'

const BlogAuthorBox = () => {
  const author = getBlogAuthor()

  return (
    <aside className="blog-author-box" aria-label="About the author">
      <div className="blog-author-box__avatar">
        <Image src={author.avatar} alt={`${author.name} logo`} width={72} height={72} />
      </div>
      <div className="blog-author-box__content">
        <p className="blog-author-box__name">{author.name}</p>
        <p className="blog-author-box__role">{author.role}</p>
        <p className="blog-author-box__bio mb-0">{author.bio}</p>
      </div>
    </aside>
  )
}

export default BlogAuthorBox
