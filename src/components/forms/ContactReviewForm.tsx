'use client'

import { contactFormServices } from '@/data/contact'
import Link from 'next/link'
import { FormEvent, useState, type FocusEvent } from 'react'
import { Col, Row } from 'react-bootstrap'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type FieldErrors = Partial<Record<string, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactReviewForm = () => {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validate = (data: FormData): FieldErrors => {
    const errors: FieldErrors = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const business = String(data.get('business') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const city = String(data.get('city') ?? '').trim()
    const website = String(data.get('website') ?? '').trim()
    const service = String(data.get('service') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name) errors.name = 'Please enter your name.'
    if (!email) errors.email = 'Please enter your email.'
    else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
    if (!business) errors.business = 'Please enter your business name.'
    if (!city) errors.city = 'Please enter a city or target area.'
    if (website && !/^https?:\/\/.+/i.test(website) && !/^[a-z0-9.-]+\.[a-z]{2,}/i.test(website)) {
      errors.website = 'Enter a valid website URL (optional).'
    }
    if (!service) errors.service = 'Please select a service.'
    if (!message) errors.message = 'Please share a short message about your challenge.'
    if (phone && phone.replace(/\D/g, '').length < 7) {
      errors.phone = 'Enter a valid phone number (optional).'
    }

    return errors
  }

  const markTouched = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const form = event.currentTarget.form
    if (!form) return
    markTouched(event.currentTarget.name)
    setFieldErrors(validate(new FormData(form)))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    const form = event.currentTarget
    const data = new FormData(form)
    const honeypot = String(data.get('company_website') ?? '').trim()

    if (honeypot) {
      setStatus('success')
      form.reset()
      return
    }

    const errors = validate(data)
    setFieldErrors(errors)
    setTouched({
      name: true,
      email: true,
      business: true,
      phone: true,
      city: true,
      website: true,
      service: true,
      message: true,
    })

    if (Object.keys(errors).length > 0) {
      setStatus('error')
      setErrorMessage('Please fix the highlighted fields and try again.')
      return
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('error')
      setErrorMessage('Form is temporarily unavailable. Please email us at info@localseowiser.com.')
      return
    }

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const business = String(data.get('business') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const city = String(data.get('city') ?? '').trim()
    const website = String(data.get('website') ?? '').trim()
    const service = String(data.get('service') ?? '').trim()
    const messageBody = String(data.get('message') ?? '').trim()

    const message = [
      'Free Local SEO Review Request',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business}`,
      `Phone: ${phone || 'Not provided'}`,
      `City / Target Area: ${city}`,
      `Website: ${website || 'Not provided'}`,
      `Service Interested In: ${service}`,
      '',
      'Message:',
      messageBody,
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
          subject: `Local SEO Review Request — ${business}`,
          name,
          email,
          phone,
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
        setErrorMessage('Unable to send your request right now. Please try again or email us directly.')
        return
      }

      if (!response.ok || !result.success) {
        setStatus('error')
        setErrorMessage(result.message || 'Unable to send your request right now. Please try again or email us directly.')
        return
      }

      setStatus('success')
      setFieldErrors({})
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email info@localseowiser.com.')
    }
  }

  const fieldClass = (name: string) =>
    `form-control border contact-review-form__control${touched[name] && fieldErrors[name] ? ' is-invalid' : ''}`

  if (status === 'success') {
    return (
      <div className="contact-review-form contact-review-form--success" role="status" aria-live="polite">
        <p className="contact-review-form__success-title">Thank you — your request was sent.</p>
        <p className="contact-review-form__success-text mb-0">
          We received your details and will review them before contacting you. There is no obligation to move forward.
        </p>
      </div>
    )
  }

  return (
    <form id="contact-review-form" className="contact-review-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="contact-review-form__honeypot"
        aria-hidden="true"
      />

      <Row className="g-3">
        <Col sm={6}>
          <label className="contact-review-form__label" htmlFor="contact-name">
            Name <span className="contact-review-form__required">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className={fieldClass('name')}
            autoComplete="name"
            required
            onBlur={handleBlur}
          />
          {touched.name && fieldErrors.name ? <p className="contact-review-form__field-error">{fieldErrors.name}</p> : null}
        </Col>
        <Col sm={6}>
          <label className="contact-review-form__label" htmlFor="contact-email">
            Email <span className="contact-review-form__required">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className={fieldClass('email')}
            autoComplete="email"
            required
            onBlur={handleBlur}
          />
          {touched.email && fieldErrors.email ? <p className="contact-review-form__field-error">{fieldErrors.email}</p> : null}
        </Col>
        <Col sm={6}>
          <label className="contact-review-form__label" htmlFor="contact-business">
            Business Name <span className="contact-review-form__required">*</span>
          </label>
          <input
            id="contact-business"
            name="business"
            type="text"
            className={fieldClass('business')}
            autoComplete="organization"
            required
            onBlur={handleBlur}
          />
          {touched.business && fieldErrors.business ? (
            <p className="contact-review-form__field-error">{fieldErrors.business}</p>
          ) : null}
        </Col>
        <Col sm={6}>
          <label className="contact-review-form__label" htmlFor="contact-phone">
            Phone Number <span className="contact-review-form__optional">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            className={fieldClass('phone')}
            autoComplete="tel"
            onBlur={handleBlur}
          />
          {touched.phone && fieldErrors.phone ? <p className="contact-review-form__field-error">{fieldErrors.phone}</p> : null}
        </Col>
        <Col sm={6}>
          <label className="contact-review-form__label" htmlFor="contact-city">
            City or Target Area <span className="contact-review-form__required">*</span>
          </label>
          <input
            id="contact-city"
            name="city"
            type="text"
            className={fieldClass('city')}
            autoComplete="address-level2"
            required
            onBlur={handleBlur}
          />
          {touched.city && fieldErrors.city ? <p className="contact-review-form__field-error">{fieldErrors.city}</p> : null}
        </Col>
        <Col sm={6}>
          <label className="contact-review-form__label" htmlFor="contact-website">
            Website URL <span className="contact-review-form__optional">(optional)</span>
          </label>
          <input
            id="contact-website"
            name="website"
            type="text"
            className={fieldClass('website')}
            autoComplete="url"
            placeholder="https://"
            onBlur={handleBlur}
          />
          {touched.website && fieldErrors.website ? (
            <p className="contact-review-form__field-error">{fieldErrors.website}</p>
          ) : null}
        </Col>
        <Col xs={12}>
          <label className="contact-review-form__label" htmlFor="contact-service">
            Service Interested In <span className="contact-review-form__required">*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            className={`form-select border contact-review-form__control${touched.service && fieldErrors.service ? ' is-invalid' : ''}`}
            required
            defaultValue=""
            onBlur={handleBlur}
          >
            <option value="" disabled>
              Select a service
            </option>
            {contactFormServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {touched.service && fieldErrors.service ? (
            <p className="contact-review-form__field-error">{fieldErrors.service}</p>
          ) : null}
        </Col>
        <Col xs={12}>
          <label className="contact-review-form__label" htmlFor="contact-message">
            Message <span className="contact-review-form__required">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className={fieldClass('message')}
            required
            onBlur={handleBlur}
          />
          {touched.message && fieldErrors.message ? (
            <p className="contact-review-form__field-error">{fieldErrors.message}</p>
          ) : null}
        </Col>
        <Col xs={12}>
          <button type="submit" className="btn btn-primary fw-semibold w-100" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Request My Free Local SEO Review'}
          </button>
        </Col>
      </Row>

      {status === 'error' && errorMessage ? (
        <p className="contact-review-form__error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <p className="contact-review-form__note mb-0">
        No spam. No obligation. We’ll review your details before contacting you.
      </p>
      <p className="contact-review-form__privacy mb-0">
        By submitting, you agree we may use your details to respond to this request. Read our{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </form>
  )
}

export default ContactReviewForm
