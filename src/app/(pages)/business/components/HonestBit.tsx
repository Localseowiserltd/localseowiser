'use client'

import ScrollReveal from '@/components/ScrollReveal'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { honestBitSection } from '@/data/site-content'
import { Container } from 'react-bootstrap'

const honestPoints = [
  {
    text: 'Some agencies promise #1 rankings. Google itself makes clear that no one can guarantee specific positions, and anyone who does should be treated as a red flag. Local search is competitive, algorithms change, and your results depend on your market, website, reviews, and how consistently the work is executed.',
    emphasis: 'We will never sell you a ranking guarantee.',
  },
  {
    text: 'What we do commit to is transparent reporting and sustainable SEO. You will see what we worked on, why it matters, and which metrics moved—calls, form fills, Maps engagement, and meaningful ranking progress.',
    emphasis: 'We avoid vanity dashboards that look busy while your phone stays quiet.',
  },
  {
    text: 'We also refuse shortcuts that put your business at risk. No fake reviews, no doorway-page spam, no mass-generated location pages, and no link schemes.',
    emphasis: 'Those tactics can create short-term noise and long-term penalties.',
  },
  {
    text: 'If you want a partner focused on long-term growth instead of empty promises, we are the right fit. Month-to-month engagement, clear communication, and work aimed at real customer acquisition.',
    emphasis: 'Not contracts designed to trap you after the pitch.',
  },
]

const HonestBit = () => {
  return (
    <section className="section honest-bit-section" id="honest">
      <Container>
        <ScrollReveal animation="fade-up" hoverable={false}>
          <div className="honest-bit-card">
            <p className="honest-bit-card__eyebrow">
              <IconifyIcon icon="tabler:shield-check" aria-hidden="true" />
              {honestBitSection.eyebrow}
            </p>
            <h2 className="honest-bit-card__title">{honestBitSection.title}</h2>
            <div className="honest-bit-card__layout">
              <div className="honest-bit-card__visual" aria-hidden="true">
                <svg className="honest-bit-card__shield" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="honestShieldGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#ff8a4c" />
                      <stop offset="1" stopColor="#f1571d" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3z"
                    fill="url(#honestShieldGrad)"
                  />
                  <circle cx="12" cy="11" r="4.6" fill="#ffffff" />
                  <path
                    d="M10.4 9.4l3.2 3.2M13.6 9.4l-3.2 3.2"
                    stroke="#f1571d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="honest-bit-card__grid">
                {honestPoints.map((point) => (
                  <article key={point.emphasis} className="honest-bit-card__item">
                    <span className="honest-bit-card__item-icon">
                      <IconifyIcon icon="tabler:x" aria-hidden="true" />
                    </span>
                    <p>
                      {point.text} <strong>{point.emphasis}</strong>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

export default HonestBit
