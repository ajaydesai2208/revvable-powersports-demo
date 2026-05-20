import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../ui/Button'

export type InquiryType = 'availability' | 'financing' | 'payment' | 'trade' | 'visit'

type LeadFormProps = {
  vehicleName?: string
  inquiryType: InquiryType
  onInquiryTypeChange: (inquiryType: InquiryType) => void
}

const inquiryLabels: Record<InquiryType, string> = {
  availability: 'Check availability',
  financing: 'Request financing info',
  payment: 'Estimate payment',
  trade: 'Value my trade',
  visit: 'Schedule a walkaround',
}

function defaultMessage(vehicleName: string | undefined, inquiryType: InquiryType) {
  const unit = vehicleName ?? 'this unit'

  if (inquiryType === 'financing') return `I would like financing information for ${unit}.`
  if (inquiryType === 'payment') return `Can you help estimate a payment for ${unit}?`
  if (inquiryType === 'trade') return `I have a trade-in and would like to discuss ${unit}.`
  if (inquiryType === 'visit') return `I would like to schedule a walkaround for ${unit}.`

  return `Is ${unit} still available?`
}

export function LeadForm({ vehicleName, inquiryType, onInquiryTypeChange }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState(defaultMessage(vehicleName, inquiryType))
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; contact?: string }>({})

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const contact = String(data.get('contact') ?? '').trim()
    const nextErrors: typeof fieldErrors = {}

    if (!name) nextErrors.name = 'Add your name.'
    if (!contact) nextErrors.contact = 'Add a phone number or email so the dealer can follow up.'

    if (nextErrors.name || nextErrors.contact) {
      setFieldErrors(nextErrors)
      return
    }

    setFieldErrors({})
    setSubmitted(true)
    event.currentTarget.reset()
  }

  if (submitted) {
    return (
      <div className="border border-emerald-200 bg-emerald-50 p-5" role="status" aria-live="polite">
        <h3 className="text-lg font-semibold text-emerald-950">Request received</h3>
        <p className="mt-2 text-sm leading-6 text-emerald-900">
          This prototype captured your {inquiryLabels[inquiryType].toLowerCase()} request. A real dealer workflow would route this lead with the selected unit attached.
        </p>
        <Button className="mt-4" onClick={() => setSubmitted(false)} variant="secondary">
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form className="space-y-4 border border-stone-200 bg-white p-5" onSubmit={handleSubmit} noValidate>
      <div>
        <h3 className="text-xl font-semibold text-stone-950">{inquiryLabels[inquiryType]}</h3>
        <p className="mt-1 text-sm text-stone-600">
          Ask about {vehicleName ?? 'this unit'}, financing, trade value, or pickup timing.
        </p>
      </div>
      <label className="block">
        <span className="filter-label">Inquiry type</span>
        <select
          className="filter-control"
          name="inquiryType"
          value={inquiryType}
          onChange={(event) => onInquiryTypeChange(event.target.value as InquiryType)}
        >
          {Object.entries(inquiryLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="filter-label">Name required</span>
        <input
          aria-describedby={fieldErrors.name ? 'lead-name-error' : undefined}
          aria-invalid={Boolean(fieldErrors.name)}
          autoComplete="name"
          className="filter-control"
          name="name"
          required
          type="text"
        />
        {fieldErrors.name ? <p className="mt-2 text-sm font-semibold text-red-700" id="lead-name-error">{fieldErrors.name}</p> : null}
      </label>
      <label className="block">
        <span className="filter-label">Phone or email required</span>
        <input
          aria-describedby={fieldErrors.contact ? 'lead-contact-error' : undefined}
          aria-invalid={Boolean(fieldErrors.contact)}
          autoComplete="email"
          className="filter-control"
          name="contact"
          required
          type="text"
        />
        {fieldErrors.contact ? <p className="mt-2 text-sm font-semibold text-red-700" id="lead-contact-error">{fieldErrors.contact}</p> : null}
      </label>
      <label className="block">
        <span className="filter-label">Preferred contact</span>
        <select className="filter-control" name="preferred">
          <option>Text me</option>
          <option>Call me</option>
          <option>Email me</option>
        </select>
      </label>
      <label className="block">
        <span className="filter-label">Message</span>
        <textarea
          className="filter-control min-h-24 resize-y"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <Button className="w-full" type="submit">
        Send request
      </Button>
    </form>
  )
}
