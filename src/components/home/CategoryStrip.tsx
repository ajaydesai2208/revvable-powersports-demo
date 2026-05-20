import { Link } from 'react-router-dom'
import { RevealOnScroll } from '../ui/RevealOnScroll'

const categories = [
  ['Motorcycles', 'Motorcycle', 'Adventure, dual-sport, and street inventory'],
  ['ATVs', 'ATV', 'Utility and trail-ready four-wheelers'],
  ['Side-by-Sides', 'Side-by-Side', 'Two-seat and crew machines'],
  ['Watercraft', 'Watercraft', 'Lake-ready personal watercraft'],
]

export function CategoryStrip() {
  return (
    <section className="category-bridge relative z-10 px-4 py-8 sm:px-6 lg:px-8">
      <RevealOnScroll>
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-amber-300/14 bg-black/62 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur md:grid-cols-4">
          {categories.map(([title, category, detail]) => (
            <Link
              className="group block border-b border-stone-700/70 px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-300/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-300 md:border-b-0 md:border-r md:last:border-r-0"
              to={`/inventory?category=${encodeURIComponent(category)}`}
              key={title}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">{category}</p>
              <p className="mt-2 text-lg font-semibold text-stone-50 group-hover:text-amber-200">{title}</p>
              <p className="mt-2 text-sm leading-6 text-stone-400">{detail}</p>
            </Link>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}
