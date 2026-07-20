'use client'

import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { faqItems, faqSection, type HomeFaqItem } from '@/data/site-content'
import Link from 'next/link'
import React, { Fragment, useState, type ReactNode } from 'react'
import { Container } from 'react-bootstrap'

function renderAnswerWithLinks(item: HomeFaqItem): ReactNode {
  const links = item.links ?? []
  if (links.length === 0) return item.answer

  const sorted = [...links].sort((a, b) => b.label.length - a.label.length)
  type Part = { type: 'text'; value: string } | { type: 'link'; label: string; href: string }
  let parts: Part[] = [{ type: 'text', value: item.answer }]

  for (const link of sorted) {
    const next: Part[] = []
    for (const part of parts) {
      if (part.type !== 'text') {
        next.push(part)
        continue
      }
      const chunks = part.value.split(link.label)
      chunks.forEach((chunk, index) => {
        if (chunk) next.push({ type: 'text', value: chunk })
        if (index < chunks.length - 1) next.push({ type: 'link', label: link.label, href: link.href })
      })
    }
    parts = next
  }

  return parts.map((part, index) => {
    if (part.type === 'text') return <Fragment key={`t-${index}`}>{part.value}</Fragment>
    return (
      <Link key={`l-${index}`} href={part.href} className="text-primary fw-semibold">
        {part.label}
      </Link>
    )
  })
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="section faq-modern-section" id="faq">
      <div className="faq-modern-section__accent" aria-hidden="true">
        <div className="faq-modern-section__grid" />
      </div>
      <Container className="faq-modern-section__inner">
        <div className="faq-modern-header">
          <SectionHeader eyebrow={faqSection.eyebrow} title={faqSection.title} />
        </div>
        <div className="faq-modern-list">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div className="faq-modern-item" key={item.question}>
                <button
                  type="button"
                  className="faq-modern-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span>{item.question}</span>
                  <span className="faq-modern-icon" aria-hidden="true">
                    <IconifyIcon icon={isOpen ? 'tabler:x' : 'tabler:plus'} />
                  </span>
                </button>
                <div className={`faq-modern-panel ${isOpen ? 'is-open' : ''}`}>
                  <div className="faq-modern-panel-inner">
                    <p>{renderAnswerWithLinks(item)}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default FAQ
