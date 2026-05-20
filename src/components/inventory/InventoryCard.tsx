import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice, formatUsage } from '../../lib/formatters'
import type { InventoryItem } from '../../types/inventory'
import { Badge } from '../ui/Badge'
import { CategoryMediaPlaceholder } from './CategoryMediaPlaceholder'

type InventoryCardProps = {
  item: InventoryItem
}

export function InventoryCard({ item }: InventoryCardProps) {
  return (
    <article className="group relative overflow-hidden border border-stone-700 bg-stone-950 transition duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-amber-500 before:via-orange-600 before:to-lime-400 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_24px_80px_rgba(0,0,0,0.44)]">
      <Link to={`/inventory/${item.id}`} aria-label={`View details for ${item.year} ${item.make} ${item.model}`}>
        <div className="aspect-[4/3] overflow-hidden bg-stone-900">
          {item.image ? (
            <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt={item.imageAlt} loading="lazy" />
          ) : (
            <CategoryMediaPlaceholder category={item.category} label={`${item.year} ${item.make} ${item.model}`} />
          )}
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2">
          <Badge tone={item.availability === 'Ready for pickup' ? 'green' : 'light'}>{item.availability}</Badge>
          <Badge tone={item.condition === 'New' ? 'orange' : 'light'}>{item.condition}</Badge>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">{item.category}</p>
          <h3 className="mt-1 text-xl font-semibold leading-tight text-stone-50">
            {item.year} {item.make} {item.model}
          </h3>
        </div>
        <dl className="grid grid-cols-2 gap-3 border-y border-stone-800 py-4 text-sm">
          <div>
            <dt className="text-stone-400">Price</dt>
            <dd className="font-bold text-stone-50">{formatPrice(item.price)}</dd>
          </div>
          <div>
            <dt className="text-stone-400">Usage</dt>
            <dd className="font-bold text-stone-50">{formatUsage(item.mileage, item.hours)}</dd>
          </div>
        </dl>
        <dl className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <dt className="font-bold uppercase tracking-wide text-stone-400">Stock</dt>
            <dd className="mt-1 font-semibold text-stone-200">{item.stockNumber}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wide text-stone-400">Location</dt>
            <dd className="mt-1 font-semibold text-stone-200">{item.location}</dd>
          </div>
        </dl>
        <Link
          className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-bold text-amber-300 transition hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          to={`/inventory/${item.id}`}
        >
          View details
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
