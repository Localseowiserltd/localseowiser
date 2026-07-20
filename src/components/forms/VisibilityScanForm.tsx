'use client'

import { contactInfo } from '@/data/site-content'
import { FormEvent, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

type VisibilityScanFormProps = {
  id?: string
  buttonLabel?: string
  compact?: boolean
  showNote?: boolean
  tall?: boolean
  /** Homepage hero: fields in one responsive horizontal row */
  layout?: 'stacked' | 'horizontal'
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const VisibilityScanForm = ({
  id = 'visibility-scan-form',
  buttonLabel = 'Get My Free Pittsburgh Visibility Scan',
  compact = false,
  showNote = true,
  tall = false,
  layout = 'stacked',
}: VisibilityScanFormProps) => {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isHorizontal = layout === 'horizontal'
  const formClassName = [
    'visibility-scan-form',
    compact ? 'visibility-scan-form--compact' : '',
    tall ? 'visibility-scan-form--tall' : '',
    isHorizontal ? 'visibility-scan-form--horizontal' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    const form = event.currentTarget
    const data = new FormData(form)
    const honeypot = String(data.get('company') ?? '').trim()

    if (honeypot) {
      setStatus('success')
      form.reset()
      return
    }

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const business = String(data.get('business') ?? '').trim()
    const city = String(data.get('city') ?? '').trim()
    const website = String(data.get('website') ?? '').trim()
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setStatus('error')
      setErrorMessage('Form is temporarily unavailable. Please email us directly.')
      return
    }

    const message = [
      'Free Pittsburgh Visibility Scan Request',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business}`,
      `City: ${city}`,
      `Website: ${website || 'Not provided'}`,
    ].join('\n')

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Free Pittsburgh Visibility Scan',
          name,
          email,
          replyto: email,
          from_name: 'Local SEO Wiser Website',
          message,
        }),
      })

      const responseText = await response.text()
      let result: { success?: boolean; message?: string } = {}

      try {
        result = JSON.parse(responseText) as { success?: boolean; message?: string }
      } catch {
        setStatus('error')
        setErrorMessage('Unable to send your request right now. Please try again or call us.')
        return
      }

      if (!response.ok || !result.success) {
        setStatus('error')
        setErrorMessage('Unable to send your request right now. Please try again or call us.')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or call us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`${formClassName} visibility-scan-form--success`} role="status" aria-live="polite">
        <p className="visibility-scan-form__success-title mb-2">Thank you!</p>
        <p className="visibility-scan-form__success-text mb-0">
          We received your request and will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form id={id} className={formClassName} onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="visibility-scan-form__honeypot"
        aria-hidden="true"
      />

      {isHorizontal ? (
        <div className="visibility-scan-form__row">
          <input name="name" type="text" className="form-control border" placeholder="Name" required />
          <input name="email" type="email" className="form-control border" placeholder="Email" required />
          <input name="business" type="text" className="form-control border" placeholder="Business" required />
          <input name="city" type="text" className="form-control border" placeholder="City" required />
          <input name="website" type="text" className="form-control border" placeholder="Website (optional)" />
          <button type="submit" className="btn btn-primary fw-semibold" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : buttonLabel}
          </button>
        </div>
      ) : (
        <Row className={tall ? 'g-3' : 'g-2'}>
          <Col sm={compact ? 12 : 6}>
            <input name="name" type="text" className="form-control border" placeholder="Name" required />
          </Col>
          <Col sm={compact ? 12 : 6}>
            <input name="email" type="email" className="form-control border" placeholder="Email" required />
          </Col>
          <Col sm={compact ? 12 : 6}>
            <input name="business" type="text" className="form-control border" placeholder="Business" required />
          </Col>
          <Col sm={compact ? 12 : 6}>
            <input name="city" type="text" className="form-control border" placeholder="City" required />
          </Col>
          <Col xs={12}>
            <input name="website" type="text" className="form-control border" placeholder="Website (optional)" />
          </Col>
          <Col xs={12}>
            <button type="submit" className="btn btn-primary fw-semibold w-100" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : buttonLabel}
            </button>
          </Col>
        </Row>
      )}

      {status === 'error' && errorMessage ? (
        <p className="visibility-scan-form__error mb-0" role="alert">
          {errorMessage}
        </p>
      ) : null}

      {showNote ? (
        <p className="visibility-scan-form__note mb-0">
          No spam. No obligation. Or call{' '}
          <a href={`tel:${contactInfo.phoneTel}`} className="text-primary fw-semibold">
            {contactInfo.phone}
          </a>
          .
        </p>
      ) : null}
    </form>
  )
}

export default VisibilityScanForm
