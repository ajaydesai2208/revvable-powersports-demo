import { Link } from 'react-router-dom'

const categories = [
  ['Motorcycles', 'Motorcycle', 'Adventure, dual-sport, and street inventory'],
  ['ATVs', 'ATV', 'Utility and trail-ready four-wheelers'],
  ['Side-by-Sides', 'Side-by-Side', 'Two-seat and crew machines'],
  ['Watercraft', 'Watercraft', 'Lake-ready personal watercraft'],
]

export function CategoryStrip() {
  return (
    <section className="border-y border-amber-400/15 bg-stone-950">
      <div className="mx-auto grid max-w-7xl divide-y divide-stone-800 px-4 sm:px-6 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
        {categories.map(([title, category, detail]) => (
          <Link className="group block py-6 transition hover:-translate-y-0.5 hover:bg-white/[0.03] md:px-5" to={`/inventory?category=${encodeURIComponent(category)}`} key={title}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">{category}</p>
            <p className="mt-2 text-lg font-semibold text-stone-50 group-hover:text-amber-200">{title}</p>
            <p className="mt-2 text-sm leading-6 text-stone-400">{detail}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
