'use client'

import SectionHeader from '@/components/SectionHeader'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { faqItems, faqSection } from '@/data/site-content'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

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
                    <p>{item.answer}</p>
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
