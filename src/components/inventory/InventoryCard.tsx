import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice, formatUsage } from '../../lib/formatters'
import type { InventoryItem } from '../../types/inventory'
import { Badge } from '../ui/Badge'

type InventoryCardProps = {
  item: InventoryItem
}

export function InventoryCard({ item }: InventoryCardProps) {
  return (
    <article className="group overflow-hidden border border-stone-200 bg-white transition hover:-translate-y-1 hover:border-stone-400 hover:shadow-xl">
      <Link to={`/inventory/${item.id}`} aria-label={`View details for ${item.year} ${item.make} ${item.model}`}>
        <div className="aspect-[4/3] overflow-hidden bg-stone-200">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={item.image}
            alt={item.imageAlt}
          />
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2">
          <Badge tone={item.availability === 'Ready for pickup' ? 'green' : 'light'}>{item.availability}</Badge>
          <Badge tone={item.condition === 'New' ? 'orange' : 'light'}>{item.condition}</Badge>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">{item.category}</p>
          <h3 className="mt-1 text-xl font-semibold leading-tight text-stone-950">
            {item.year} {item.make} {item.model}
          </h3>
        </div>
        <dl className="grid grid-cols-2 gap-3 border-y border-stone-200 py-4 text-sm">
          <div>
            <dt className="text-stone-500">Price</dt>
            <dd className="font-bold text-stone-950">{formatPrice(item.price)}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Usage</dt>
            <dd className="font-bold text-stone-950">{formatUsage(item.mileage, item.hours)}</dd>
          </div>
        </dl>
        <dl className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <dt className="font-bold uppercase tracking-wide text-stone-500">Stock</dt>
            <dd className="mt-1 font-semibold text-stone-800">{item.stockNumber}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wide text-stone-500">Location</dt>
            <dd className="mt-1 font-semibold text-stone-800">{item.location}</dd>
          </div>
        </dl>
        <Link
          className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-bold text-orange-700 transition hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
          to={`/inventory/${item.id}`}
        >
          View details
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
