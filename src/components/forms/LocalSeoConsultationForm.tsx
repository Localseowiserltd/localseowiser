'use client'

import { FormEvent, useState } from 'react'

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

  return (
    <form id={id} className="lseo-lead-form" onSubmit={handleSubmit} noValidate>
      <div className="lseo-lead-form__header">
        <p className="lseo-lead-form__title">{title}</p>
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
      <input name="name" type="text" className="form-control" placeholder="Full Name" required autoComplete="name" />
      <input name="business" type="text" className="form-control" placeholder="Business Name" required />
      <input name="email" type="email" className="form-control" placeholder="Email Address" required autoComplete="email" />
      <input name="phone" type="tel" className="form-control" placeholder="Phone Number" required autoComplete="tel" />
      <input name="website" type="text" className="form-control" placeholder="Website (Optional)" autoComplete="url" />
      <button type="submit" className="btn btn-primary lseo-lead-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : buttonLabel}
      </button>
      {privacyNote ? <p className="lseo-lead-form__privacy">{privacyNote}</p> : null}
      {status === 'error' ? <p className="lseo-lead-form__error mb-0">{errorMessage}</p> : null}
    </form>
  )
}

export default LocalSeoConsultationForm
