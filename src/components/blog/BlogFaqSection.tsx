import type { BlogFaqItem } from '@/types/blog'

type BlogFaqSectionProps = {
  items: BlogFaqItem[]
}

const BlogFaqSection = ({ items }: BlogFaqSectionProps) => {
  const faqs = items.filter((item) => item.question.trim() && item.answer.trim())
  if (faqs.length === 0) return null

  return (
    <section className="blog-article-faq" aria-labelledby="blog-faq-heading">
      <h2 id="blog-faq-heading" className="blog-article__heading blog-article__heading--h2">
        Frequently Asked Questions
      </h2>
      <div className="blog-article-faq__list">
        {faqs.map((faq) => (
          <details key={faq.question} className="blog-article-faq__item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default BlogFaqSection
