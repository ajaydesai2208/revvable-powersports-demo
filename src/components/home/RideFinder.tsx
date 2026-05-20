import { ArrowRight, BadgeDollarSign, Compass, MapPinned, ShieldCheck, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { inventory } from '../../data/inventory'
import type { VehicleCategory } from '../../types/inventory'
import { CategoryMediaPlaceholder } from '../inventory/CategoryMediaPlaceholder'
import { Button } from '../ui/Button'
import { RevealOnScroll } from '../ui/RevealOnScroll'

type TerrainCard = {
  label: string
  category: VehicleCategory
  detail: string
  to: string
}

const terrainCards: TerrainCard[] = [
  {
    label: 'Motorcycles',
    category: 'Motorcycle',
    detail: 'On-road, off-road, and everything in between.',
    to: '/inventory?category=Motorcycle&usage=Low%20mileage',
  },
  {
    label: 'ATVs',
    category: 'ATV',
    detail: 'Work harder, explore farther, and reach the back line.',
    to: '/inventory?category=ATV&usage=Low%20hours',
  },
  {
    label: 'Side-by-Sides',
    category: 'Side-by-Side',
    detail: 'Crew machines and sport rigs for bigger terrain.',
    to: '/inventory?category=Side-by-Side&usage=Low%20hours',
  },
  {
    label: 'Watercraft',
    category: 'Watercraft',
    detail: 'Lake-ready units for dock days and weekend runs.',
    to: '/inventory?category=Watercraft',
  },
]

const trustSignals = [
  { title: 'Premium brands', detail: 'The right names in powersports.', Icon: ShieldCheck },
  { title: 'Expert service', detail: 'Factory-trained and adventure-ready.', Icon: Wrench },
  { title: 'Trusted locally', detail: 'Real showroom support before pickup.', Icon: MapPinned },
  { title: 'Financing options', detail: 'Flexible paths for serious buyers.', Icon: BadgeDollarSign },
]

function getCategoryImage(category: VehicleCategory) {
  return inventory.find((item) => item.category === category && item.image)
}

export function RideFinder() {
  return (
    <section className="ridefinder-stage relative z-20 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <RevealOnScroll className="mx-auto max-w-7xl">
        <div className="terrain-panel overflow-hidden rounded-[2rem] border border-amber-200/14 bg-stone-950/82 shadow-[0_34px_100px_rgba(0,0,0,0.52)] backdrop-blur">
        <div className="terrain-layer terrain-layer-a" aria-hidden="true" />
        <div className="terrain-layer terrain-layer-b" aria-hidden="true" />

        <div className="relative grid gap-8 p-5 sm:p-7 lg:grid-cols-[170px_1fr] lg:p-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-amber-300/30 bg-amber-300/10 p-2 text-amber-200">
                <Compass size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.34em] text-stone-100">RideFinder</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Terrain first</p>
              </div>
            </div>

            <ol className="mt-8 hidden space-y-6 lg:block" aria-label="Ride Finder flow">
              {['Terrain', 'Preferences', 'Results'].map((step, index) => (
                <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]" key={step}>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                      index === 0 ? 'border-amber-300 bg-amber-300/12 text-amber-200' : 'border-stone-600 text-stone-400'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span className={index === 0 ? 'text-amber-200' : 'text-stone-500'}>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Step 1 of 3</p>
                <h2 className="mt-2 text-3xl font-black tracking-[0.08em] text-stone-50 sm:text-4xl">Where will you ride?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-300">
                  Choose a terrain card to open inventory with the right category and usage filters already applied.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button to="/inventory" variant="secondary">
                  View all inventory
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <Link
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-100 transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-amber-300/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                  to="/inventory?condition=New&sort=year-desc"
                >
                  New arrivals
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {terrainCards.map((card, index) => {
                const image = getCategoryImage(card.category)

                return (
                  <Link
                    className={`terrain-card group relative min-h-[260px] overflow-hidden rounded-3xl border bg-stone-950 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-[0_24px_70px_rgba(245,158,11,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
                      index === 0 ? 'terrain-card-primary border-amber-300/70' : 'border-stone-600/70'
                    }`}
                    key={card.label}
                    to={card.to}
                  >
                    <div className="absolute inset-0">
                      {image ? (
                        <img className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105" src={image.image} alt={image.imageAlt} loading="lazy" />
                      ) : (
                        <CategoryMediaPlaceholder category={card.category} label={card.label} />
                      )}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.84)),radial-gradient(circle_at_20%_12%,rgba(245,158,11,0.22),transparent_12rem)]" />
                    </div>
                    <div className="relative flex min-h-[260px] flex-col justify-end p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-200">{card.category}</p>
                      <h3 className="mt-2 text-2xl font-black tracking-[0.08em] text-stone-50">{card.label}</h3>
                      <p className="mt-2 text-sm leading-5 text-stone-300">{card.detail}</p>
                      <span className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-amber-200">Open filtered inventory</span>
                      <span className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-stone-500/70 bg-black/48 text-amber-100 transition group-hover:translate-x-1 group-hover:border-amber-300 group-hover:bg-amber-400 group-hover:text-stone-950">
                        <ArrowRight size={19} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative grid border-t border-stone-700/70 bg-black/30 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map(({ title, detail, Icon }) => (
            <div className="flex gap-3 border-b border-stone-700/60 px-5 py-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0" key={title}>
              <Icon className="mt-1 shrink-0 text-amber-300" size={20} aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-100">{title}</p>
                <p className="mt-1 text-sm text-stone-400">{detail}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
