import { ArrowRight, BadgeDollarSign, Bike, PhoneCall } from 'lucide-react'
import { Button } from '../ui/Button'

const proofPoints = [
  { title: 'Ready today', detail: '4 units staged for pickup', Icon: Bike },
  { title: 'Finance desk', detail: 'Pre-qualify before visiting', Icon: BadgeDollarSign },
  { title: 'Trade lane', detail: 'Bring photos and payoff details' },
  { title: 'Showroom', detail: 'Open until 6 PM' },
]

export function Hero() {
  return (
    <section className="section-reveal hero-depth relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          className="hero-media h-full w-full object-cover opacity-75"
          src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1800&q=82"
          alt="Dual-sport motorcycle staged near a trailhead"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_44%,rgba(245,158,11,0.34),transparent_20rem),radial-gradient(circle_at_22%_36%,rgba(245,158,11,0.18),transparent_24rem),linear-gradient(90deg,rgba(0,0,0,0.95),rgba(0,0,0,0.75)_43%,rgba(0,0,0,0.22)),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.88))]" />
        <div className="hero-haze" aria-hidden="true" />
        <div className="hero-contours" aria-hidden="true" />
      </div>
      <div className="relative mx-auto grid min-h-[680px] max-w-7xl content-end gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Summit Ridge Powersports</p>
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
        <div className="grid gap-3 self-end sm:grid-cols-3 lg:grid-cols-1" aria-label="Today at Summit Ridge">
          {proofPoints.map(({ title, detail, Icon }) => (
            <div className="premium-panel rounded-2xl p-4" key={title}>
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
