import { Link } from 'react-router-dom'

const categories = [
  ['Motorcycles', 'Motorcycle', 'Adventure, dual-sport, and street inventory'],
  ['ATVs', 'ATV', 'Utility and trail-ready four-wheelers'],
  ['Side-by-Sides', 'Side-by-Side', 'Two-seat and crew machines'],
  ['Watercraft', 'Watercraft', 'Lake-ready personal watercraft'],
]

export function CategoryStrip() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-stone-200 px-4 sm:px-6 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
        {categories.map(([title, category, detail]) => (
          <Link className="group block py-6 md:px-5" to={`/inventory?category=${encodeURIComponent(category)}`} key={title}>
            <p className="text-lg font-semibold text-stone-950 group-hover:text-orange-700">{title}</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">{detail}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
