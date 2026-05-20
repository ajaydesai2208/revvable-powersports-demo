import { ArrowRight, BadgeDollarSign, Bike, PhoneCall } from 'lucide-react'
import { Button } from '../ui/Button'

const proofPoints = [
  { title: 'Ready this week', detail: '4 units staged for pickup', Icon: Bike },
  { title: 'Financing path', detail: 'Pre-qualify before visiting', Icon: BadgeDollarSign },
  { title: 'Trade support', detail: 'Bring motorcycle, ATV, or marine trade' },
  { title: 'Open today', detail: 'Showroom and service until 6 PM' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-55"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
          alt="Mountain trail landscape near Summit Ridge"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/20" />
      </div>
      <div className="relative mx-auto grid min-h-[680px] max-w-7xl content-end gap-10 px-4 pb-10 pt-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">Summit Ridge Powersports</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">Trail-ready inventory. Straight dealer answers.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200">
            Shop motorcycles, ATVs, side-by-sides, and watercraft with real availability, finance paths, and trade-in help built for serious buyers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/inventory">
              View inventory
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="tel:+15550148777" variant="secondary">
              <PhoneCall size={18} aria-hidden="true" />
              Call dealer
            </Button>
          </div>
        </div>
        <div className="grid gap-3 self-end sm:grid-cols-3 lg:grid-cols-1">
          {proofPoints.map(({ title, detail, Icon }) => (
            <div className="border border-white/15 bg-white/10 p-4 backdrop-blur" key={title}>
              <div className="flex items-start gap-3">
                {Icon ? <Icon className="mt-1 text-orange-300" size={19} aria-hidden="true" /> : null}
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-stone-300">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
