import { ArrowLeft, PhoneCall } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LeadForm } from '../components/inventory/LeadForm'
import type { InquiryType } from '../components/inventory/LeadForm'
import { VehicleSpecs } from '../components/inventory/VehicleSpecs'
import { InventoryGrid } from '../components/inventory/InventoryGrid'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { inventory } from '../data/inventory'
import { estimateMonthlyPayment, formatPrice } from '../lib/formatters'

export function VehicleDetailPage() {
  const { id } = useParams()
  const [inquiryType, setInquiryType] = useState<InquiryType>('availability')
  const item = inventory.find((vehicle) => vehicle.id === id)

  if (!item) {
    return (
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <EmptyState
            title="That unit is not in current inventory"
            message="It may have sold or the link may be outdated. Return to inventory to see ready and inbound units."
            actionLabel="Back to inventory"
            to="/inventory"
          />
        </div>
      </section>
    )
  }

  const related = inventory.filter((vehicle) => vehicle.id !== item.id && vehicle.category === item.category).slice(0, 3)
  const vehicleName = `${item.year} ${item.make} ${item.model}`

  function chooseInquiry(nextInquiryType: InquiryType) {
    setInquiryType(nextInquiryType)
    window.setTimeout(() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
  }

  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-orange-700" to="/inventory">
          <ArrowLeft size={17} aria-hidden="true" />
          Back to inventory
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="aspect-[16/11] overflow-hidden bg-stone-200">
              <img className="h-full w-full object-cover" src={item.image} alt={item.imageAlt} />
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge tone={item.availability === 'Ready for pickup' ? 'green' : 'light'}>{item.availability}</Badge>
              <Badge tone={item.condition === 'New' ? 'orange' : 'light'}>{item.condition}</Badge>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-700">{item.category}</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">{vehicleName}</h1>
              <p className="mt-4 text-lg leading-8 text-stone-600">{item.description}</p>
            </div>
            <div className="border-y border-stone-200 py-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">Dealer price</p>
              <p className="mt-1 text-4xl font-black text-stone-950">{formatPrice(item.price)}</p>
              <p className="mt-2 text-sm text-stone-600">
                Est. ${estimateMonthlyPayment(item.price).toLocaleString()}/mo for 72 months with placeholder assumptions.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button href="tel:+15550148777">
                <PhoneCall size={18} aria-hidden="true" />
                Call / text dealer
              </Button>
              <Button onClick={() => chooseInquiry('availability')} variant="primary">
                Check availability
              </Button>
              <Button onClick={() => chooseInquiry('financing')} variant="secondary">
                Request financing info
              </Button>
              <Button onClick={() => chooseInquiry('payment')} variant="secondary">
                Estimate payment
              </Button>
              <Button onClick={() => chooseInquiry('trade')} variant="secondary">
                Value trade
              </Button>
              <Button onClick={() => chooseInquiry('visit')} variant="secondary">
                Schedule walkaround
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <VehicleSpecs item={item} />
            <div className="border border-stone-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-stone-950">Installed highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {item.features.map((feature) => (
                  <li className="border-l-4 border-orange-600 bg-stone-50 px-4 py-3 text-sm font-semibold text-stone-800" key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="lead-form" className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm
              inquiryType={inquiryType}
              key={`${item.id}-${inquiryType}`}
              onInquiryTypeChange={setInquiryType}
              vehicleName={vehicleName}
            />
            <div className="mt-4 border border-stone-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-stone-950">Dealer confidence</h2>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                <li>Trade-ins accepted for motorcycles, ATVs, side-by-sides, and watercraft.</li>
                <li>Financing available with dealer follow-up.</li>
                <li>Service team reviews units before pickup.</li>
                <li>{item.availability} at {item.location}.</li>
              </ul>
            </div>
          </div>
        </div>

        {related.length ? (
          <div className="mt-14">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Related {item.category.toLowerCase()} inventory</h2>
            <div className="mt-6">
              <InventoryGrid items={related} />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
