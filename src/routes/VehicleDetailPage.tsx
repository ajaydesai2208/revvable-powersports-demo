import { ArrowLeft, PhoneCall } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LeadForm } from '../components/inventory/LeadForm'
import type { InquiryType } from '../components/inventory/LeadForm'
import { CategoryMediaPlaceholder } from '../components/inventory/CategoryMediaPlaceholder'
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
      <section className="bg-black py-16">
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
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-stone-300 hover:text-amber-300" to="/inventory">
          <ArrowLeft size={17} aria-hidden="true" />
          Back to inventory
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="premium-panel aspect-[16/11] overflow-hidden p-1">
              {item.image ? (
                <img className="h-full w-full object-cover" src={item.image} alt={item.imageAlt} />
              ) : (
                <CategoryMediaPlaceholder category={item.category} label={vehicleName} />
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge tone={item.availability === 'Ready for pickup' ? 'green' : 'light'}>{item.availability}</Badge>
              <Badge tone={item.condition === 'New' ? 'orange' : 'light'}>{item.condition}</Badge>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">{item.category}</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-50 md:text-5xl">{vehicleName}</h1>
              <p className="mt-4 text-lg leading-8 text-stone-300">{item.description}</p>
            </div>
            <div className="border-y border-stone-800 py-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-stone-400">Dealer price</p>
              <p className="mt-1 text-4xl font-black text-stone-50">{formatPrice(item.price)}</p>
              <p className="mt-2 text-sm text-stone-300">
                Est. ${estimateMonthlyPayment(item.price).toLocaleString()}/mo for 72 months. Tax, title, fees, and approval not included.
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
            <div className="premium-panel p-6">
              <h2 className="text-2xl font-semibold text-stone-50">Installed highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {item.features.map((feature) => (
                  <li className="border-l-4 border-amber-400 bg-black/40 px-4 py-3 text-sm font-semibold text-stone-200" key={feature}>
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
            <div className="premium-panel mt-4 p-5">
              <h2 className="text-lg font-semibold text-stone-50">Dealer confidence</h2>
              <ul className="mt-3 space-y-2 text-sm text-stone-300">
                <li>Trade-ins accepted for motorcycles, ATVs, side-by-sides, and watercraft.</li>
                <li>Financing available with dealer follow-up.</li>
                <li>Service and accessory prep reviewed before pickup.</li>
                <li>{item.availability} at {item.location}.</li>
              </ul>
            </div>
          </div>
        </div>

        {related.length ? (
          <div className="mt-14">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-50">Related {item.category.toLowerCase()} inventory</h2>
            <div className="mt-6">
              <InventoryGrid items={related} />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
