import { ArrowRight, Compass, Gauge, MapPinned, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { inventory } from '../../data/inventory'
import { Button } from '../ui/Button'

const terrainLinks = [
  {
    label: 'Trail',
    detail: 'Crew cab and sport machines with low-hour signals.',
    to: '/inventory?category=Side-by-Side&usage=Low%20hours',
  },
  {
    label: 'Street',
    detail: 'Street-legal weekend rides and light adventure miles.',
    to: '/inventory?category=Motorcycle&usage=Low%20mileage',
  },
  {
    label: 'Water',
    detail: 'Lake-ready personal watercraft and trailer planning.',
    to: '/inventory?category=Watercraft',
  },
  {
    label: 'Utility',
    detail: 'ATVs for property work, hunting access, and trail days.',
    to: '/inventory?category=ATV&usage=Low%20hours',
  },
  {
    label: 'New Arrival',
    detail: 'Fresh units first, sorted by newest model year.',
    to: '/inventory?condition=New&sort=year-desc',
  },
]

const dealerSignals = [
  ['Route', 'Terrain match'],
  ['Intent', 'Finance or trade ready'],
  ['Pickup', 'Showroom timing'],
]

const image = inventory.find((item) => item.id === '2024-yamaha-tenere-700') ?? inventory[0]

export function RideFinder() {
  return (
    <section className="section-reveal overflow-hidden border-b border-amber-400/10 bg-black py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <Sparkles size={14} aria-hidden="true" />
            Ride Finder
          </div>
          <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight text-stone-50 sm:text-5xl">
            Drop into the terrain you actually ride.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-stone-300">
            Pick a surface and Summit Ridge routes you into ready units with the right category, usage signal, and buying path already applied.
          </p>

          <div className="mt-7 grid gap-3" aria-label="Ride finder terrain shortcuts">
            {terrainLinks.map((terrain) => (
              <Link
                className="group flex min-h-14 items-center justify-between gap-4 rounded-md border border-stone-700/80 bg-stone-950/72 px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-amber-400/70 hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                key={terrain.label}
                to={terrain.to}
              >
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.16em] text-amber-200">{terrain.label}</span>
                  <span className="mt-1 block text-sm leading-5 text-stone-400 group-hover:text-stone-200">{terrain.detail}</span>
                </span>
                <ArrowRight className="shrink-0 text-stone-500 transition group-hover:translate-x-1 group-hover:text-amber-200" size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/inventory">
              Find your ride
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Link
              className="inline-flex min-h-11 items-center text-sm font-semibold text-stone-300 transition hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              to="/#buyer-tools"
            >
              Prep financing and trade
            </Link>
          </div>
        </div>

        <div className="terrain-depth premium-panel relative min-h-[400px] overflow-hidden p-4 sm:min-h-[460px] sm:p-6" aria-label="Terrain-guided inventory preview">
          <div className="terrain-glow absolute inset-0" aria-hidden="true" />
          <div className="absolute inset-x-6 top-6 z-10 flex flex-wrap gap-2" aria-hidden="true">
            {['Trail fit', 'Low hours', 'Trade path'].map((label) => (
              <span className="terrain-float rounded-full border border-amber-300/25 bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-100 backdrop-blur" key={label}>
                {label}
              </span>
            ))}
          </div>

          <div className="relative z-0 h-full overflow-hidden rounded-md border border-stone-700/70 bg-stone-950">
            <img className="h-full w-full object-cover opacity-72 mix-blend-screen" src={image.image} alt={image.imageAlt} loading="lazy" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_22%,rgba(245,158,11,0.32),transparent_16rem),linear-gradient(110deg,rgba(0,0,0,0.92),rgba(0,0,0,0.48)_48%,rgba(0,0,0,0.86)),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.84))]" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="max-w-md">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">Terrain drop</p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-stone-50 sm:text-4xl">A guided jump from intent to inventory.</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  The section turns buyer language into filtered SRP paths without pretending there is backend matching.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {dealerSignals.map(([label, value]) => (
                  <div className="rounded-md border border-white/10 bg-black/45 p-3 backdrop-blur" key={label}>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-stone-400">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-stone-50">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute right-5 top-24 z-20 hidden max-w-44 rounded-md border border-stone-600/70 bg-black/58 p-3 backdrop-blur md:block" aria-hidden="true">
            <div className="flex items-center gap-2 text-amber-200">
              <Compass size={16} />
              <span className="text-xs font-bold uppercase tracking-[0.14em]">Match lane</span>
            </div>
            <p className="mt-2 text-sm leading-5 text-stone-200">Terrain, usage, and pickup timing stay connected.</p>
          </div>

          <div className="absolute bottom-10 right-5 z-20 hidden rounded-md border border-amber-300/20 bg-amber-300/12 p-3 text-stone-100 backdrop-blur md:block" aria-hidden="true">
            <div className="flex items-center gap-2">
              <Gauge size={16} />
              <span className="text-sm font-semibold">Ready unit path</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-100">
              <MapPinned size={14} />
              Showroom to trail
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
