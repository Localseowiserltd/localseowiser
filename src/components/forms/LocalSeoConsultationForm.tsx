'use client'

import { FormEvent, useId, useState } from 'react'

type LocalSeoConsultationFormProps = {
  id?: string
  title?: string
  subtitle?: string
  buttonLabel?: string
  privacyNote?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const LocalSeoConsultationForm = ({
  id = 'local-seo-consultation-form',
  title = 'Ready to Grow Your Local Visibility?',
  subtitle = 'Get a free consultation and receive a custom Local SEO strategy built around your business goals.',
  buttonLabel = 'Get My Free Consultation',
  privacyNote = 'We respect your privacy. No spam, ever.',
}: LocalSeoConsultationFormProps) => {
  const reactId = useId()
  const errorId = `${reactId}-error`
  const privacyId = `${reactId}-privacy`
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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

    const name = String(data.get('name') ?? '').trim()
    const business = String(data.get('business') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const website = String(data.get('website') ?? '').trim()
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setStatus('error')
      setErrorMessage('Form is temporarily unavailable. Please email us directly.')
      return
    }

    const message = [
      'Local SEO Free Consultation Request',
      '',
      `Name: ${name}`,
      `Business: ${business}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Website: ${website || 'Not provided'}`,
    ].join('\n')

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Local SEO Consultation Request — Local SEO Wiser',
          from_name: name,
          email,
          message,
        }),
      })

      const responseText = await response.text()
      let result: { success?: boolean } = {}
      try {
        result = JSON.parse(responseText) as { success?: boolean }
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
      <div className="lseo-lead-form lseo-lead-form--success" role="status" aria-live="polite">
        <p className="lseo-lead-form__title mb-2">Thank you!</p>
        <p className="lseo-lead-form__success mb-0">We received your request and will contact you within 24 hours.</p>
      </div>
    )
  }

  const describedBy = [privacyNote ? privacyId : null, status === 'error' ? errorId : null]
    .filter(Boolean)
    .join(' ')

  return (
    <form
      id={id}
      className="lseo-lead-form"
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={describedBy || undefined}>
      <div className="lseo-lead-form__header">
        <p className="lseo-lead-form__title" id={`${reactId}-title`}>
          {title}
        </p>
        {subtitle ? <p className="lseo-lead-form__subtitle">{subtitle}</p> : null}
      </div>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="lseo-lead-form__honeypot"
        aria-hidden="true"
      />
      <div className="lseo-lead-form__field">
        <label htmlFor={`${reactId}-name`} className="visually-hidden">
          Full Name
        </label>
        <input
          id={`${reactId}-name`}
          name="name"
          type="text"
          className="form-control"
          placeholder="Full Name"
          required
          autoComplete="name"
        />
      </div>
      <div className="lseo-lead-form__field">
        <label htmlFor={`${reactId}-business`} className="visually-hidden">
          Business Name
        </label>
        <input
          id={`${reactId}-business`}
          name="business"
          type="text"
          className="form-control"
          placeholder="Business Name"
          required
          autoComplete="organization"
        />
      </div>
      <div className="lseo-lead-form__field">
        <label htmlFor={`${reactId}-email`} className="visually-hidden">
          Email Address
        </label>
        <input
          id={`${reactId}-email`}
          name="email"
          type="email"
          className="form-control"
          placeholder="Email Address"
          required
          autoComplete="email"
        />
      </div>
      <div className="lseo-lead-form__field">
        <label htmlFor={`${reactId}-phone`} className="visually-hidden">
          Phone Number
        </label>
        <input
          id={`${reactId}-phone`}
          name="phone"
          type="tel"
          className="form-control"
          placeholder="Phone Number"
          required
          autoComplete="tel"
        />
      </div>
      <div className="lseo-lead-form__field">
        <label htmlFor={`${reactId}-website`} className="visually-hidden">
          Website (Optional)
        </label>
        <input
          id={`${reactId}-website`}
          name="website"
          type="url"
          className="form-control"
          placeholder="Website (Optional)"
          autoComplete="url"
        />
      </div>
      <button type="submit" className="btn btn-primary lseo-lead-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : buttonLabel}
      </button>
      {privacyNote ? (
        <p id={privacyId} className="lseo-lead-form__privacy">
          {privacyNote}
        </p>
      ) : null}
      {status === 'error' ? (
        <p id={errorId} className="lseo-lead-form__error mb-0" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  )
}

export default LocalSeoConsultationForm
