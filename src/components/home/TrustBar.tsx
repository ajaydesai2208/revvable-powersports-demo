import { Clock, ShieldCheck, Truck, Wrench } from 'lucide-react'

const items = [
  { title: 'Financing partners', detail: 'Clear next steps before you visit.', Icon: ShieldCheck },
  { title: 'Trade-ins accepted', detail: 'Motorcycle, ATV, SxS, and marine trades.', Icon: Truck },
  { title: 'Service department', detail: 'Accessory installs and delivery prep.', Icon: Wrench },
  { title: 'Pickup scheduling', detail: 'Reserve a unit and plan your visit.', Icon: Clock },
]

export function TrustBar() {
  return (
    <section className="bg-stone-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden bg-white/10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map(({ title, detail, Icon }) => (
          <div className="bg-stone-950 p-5" key={title}>
            <Icon className="text-orange-300" size={24} aria-hidden="true" />
            <p className="mt-4 font-semibold text-white">{title}</p>
            <p className="mt-2 text-sm leading-6 text-stone-400">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
