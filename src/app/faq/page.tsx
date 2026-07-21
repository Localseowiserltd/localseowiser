import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import { buildFaqPageSchemas, buildHubPageMetadata } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import type { ReactNode } from 'react'

const title = 'Frequently Asked Questions | Local SEO Wiser Guide'
const description =
  'Find answers to common questions about Local SEO Wiser, our SEO services, Google Business Profile optimization, website development, and how to get started.'

export const metadata: Metadata = buildHubPageMetadata({
  title,
  description,
  path: '/faq',
  imageAlt: title,
})

type FaqEntry = {
  question: string
  answer: string
  answerNode?: ReactNode
}

const faqPageItems: FaqEntry[] = [
  {
    question: 'What is Local SEO?',
    answer:
      'Local SEO helps businesses improve their visibility in local search results on Google, making it easier for nearby customers to find their products or services.',
  },
  {
    question: 'What services does Local SEO Wiser offer?',
    answer:
      'We provide Local SEO, Google Business Profile optimization, Technical SEO, PPC management, website development, and other digital marketing services tailored to local businesses.',
  },
  {
    question: 'Do you work with businesses outside Pittsburgh?',
    answer:
      'Yes. While we are based in Pittsburgh, Pennsylvania, we work with businesses across the United States and internationally.',
  },
  {
    question: 'How long does Local SEO take to show results?',
    answer:
      'SEO is a long-term strategy. Results vary depending on your industry, competition, and website, but improvements are often seen over several months.',
  },
  {
    question: 'Do you guarantee #1 Google rankings?',
    answer:
      'No. No reputable SEO agency can guarantee specific rankings. We follow industry best practices to improve your online visibility and long-term performance.',
  },
  {
    question: 'Do I need a Google Business Profile?',
    answer:
      'If you serve customers in a specific location, a Google Business Profile is one of the most important tools for improving your local online presence.',
  },
  {
    question: 'Will I need to provide access to my website?',
    answer:
      'Yes. Depending on the services you choose, we may require access to your website, Google Business Profile, Google Search Console, Google Analytics, or advertising accounts.',
  },
  {
    question: 'Can you help if my website was built by another company?',
    answer:
      'Yes. We can work with most websites, regardless of who originally designed or developed them.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Simply contact us through our website or email us. We'll discuss your business, understand your goals, and recommend the most suitable services.",
    answerNode: (
      <>
        Simply{' '}
        <Link href="/contact">contact us through our website</Link> or email us. We&apos;ll discuss your business,
        understand your goals, and recommend the most suitable services.
      </>
    ),
  },
  {
    question: 'How can I contact Local SEO Wiser?',
    answer:
      'You can contact us by email at info@localseowiser.com or through the contact form on our website.',
    answerNode: (
      <>
        You can contact us by email at{' '}
        <a href="mailto:info@localseowiser.com">info@localseowiser.com</a> or through the{' '}
        <Link href="/contact">contact form on our website</Link>.
      </>
    ),
  },
]

const FaqPage = () => {
  const schemas = buildFaqPageSchemas(
    faqPageItems.map(({ question, answer }) => ({ question, answer })),
  )

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`faq-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader
        badge="FAQ"
        title="Frequently Asked Questions"
        description={description}
      />
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="blog-article-faq__list">
                {faqPageItems.map((faq) => (
                  <details key={faq.question} className="blog-article-faq__item">
                    <summary>{faq.question}</summary>
                    <p>{faq.answerNode ?? faq.answer}</p>
                  </details>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </SiteShell>
  )
}

export default FaqPage
