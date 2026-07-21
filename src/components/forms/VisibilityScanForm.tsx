'use client'

import { contactInfo } from '@/data/site-content'
import { FormEvent, useId, useState } from 'react'
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
  const reactId = useId()
  const errorId = `${reactId}-error`
  const noteId = `${reactId}-note`
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

  const describedBy = [showNote ? noteId : null, status === 'error' ? errorId : null].filter(Boolean).join(' ')

  const nameField = (
    <div className="visibility-scan-form__field">
      <label htmlFor={`${reactId}-name`} className="visually-hidden">
        Name
      </label>
      <input
        id={`${reactId}-name`}
        name="name"
        type="text"
        className="form-control border"
        placeholder="Name"
        required
        autoComplete="name"
      />
    </div>
  )
  const emailField = (
    <div className="visibility-scan-form__field">
      <label htmlFor={`${reactId}-email`} className="visually-hidden">
        Email
      </label>
      <input
        id={`${reactId}-email`}
        name="email"
        type="email"
        className="form-control border"
        placeholder="Email"
        required
        autoComplete="email"
      />
    </div>
  )
  const businessField = (
    <div className="visibility-scan-form__field">
      <label htmlFor={`${reactId}-business`} className="visually-hidden">
        Business
      </label>
      <input
        id={`${reactId}-business`}
        name="business"
        type="text"
        className="form-control border"
        placeholder="Business"
        required
        autoComplete="organization"
      />
    </div>
  )
  const cityField = (
    <div className="visibility-scan-form__field">
      <label htmlFor={`${reactId}-city`} className="visually-hidden">
        City
      </label>
      <input
        id={`${reactId}-city`}
        name="city"
        type="text"
        className="form-control border"
        placeholder="City"
        required
        autoComplete="address-level2"
      />
    </div>
  )
  const websiteField = (
    <div className="visibility-scan-form__field">
      <label htmlFor={`${reactId}-website`} className="visually-hidden">
        Website (optional)
      </label>
      <input
        id={`${reactId}-website`}
        name="website"
        type="url"
        className="form-control border"
        placeholder="Website (optional)"
        autoComplete="url"
      />
    </div>
  )

  return (
    <form
      id={id}
      className={formClassName}
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={describedBy || undefined}>
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
          {nameField}
          {emailField}
          {businessField}
          {cityField}
          {websiteField}
          <button type="submit" className="btn btn-primary fw-semibold" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : buttonLabel}
          </button>
        </div>
      ) : (
        <Row className={tall ? 'g-3' : 'g-2'}>
          <Col sm={compact ? 12 : 6}>{nameField}</Col>
          <Col sm={compact ? 12 : 6}>{emailField}</Col>
          <Col sm={compact ? 12 : 6}>{businessField}</Col>
          <Col sm={compact ? 12 : 6}>{cityField}</Col>
          <Col xs={12}>{websiteField}</Col>
          <Col xs={12}>
            <button type="submit" className="btn btn-primary fw-semibold w-100" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : buttonLabel}
            </button>
          </Col>
        </Row>
      )}

      {status === 'error' && errorMessage ? (
        <p id={errorId} className="visibility-scan-form__error mb-0" role="alert">
          {errorMessage}
        </p>
      ) : null}

      {showNote ? (
        <p id={noteId} className="visibility-scan-form__note mb-0">
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
