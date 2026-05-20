import type { VehicleCategory } from '../../types/inventory'

type CategoryMediaPlaceholderProps = {
  category: VehicleCategory
  label: string
}

const categoryCopy: Record<VehicleCategory, string> = {
  Motorcycle: 'Street / ADV ready',
  ATV: 'Utility / trail ready',
  'Side-by-Side': 'Crew / trail ready',
  Watercraft: 'Lake / dock ready',
}

export function CategoryMediaPlaceholder({ category, label }: CategoryMediaPlaceholderProps) {
  return (
    <div className="relative flex h-full min-h-full w-full items-end overflow-hidden bg-stone-950 p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(245,158,11,0.24),transparent_15rem),radial-gradient(circle_at_24%_72%,rgba(234,88,12,0.14),transparent_16rem),linear-gradient(135deg,#070707,#1c1917_54%,#070707)]" />
      <div className="absolute left-6 right-6 top-8 h-px bg-gradient-to-r from-transparent via-amber-300/45 to-transparent" aria-hidden="true" />
      <div className="absolute right-6 top-6 rounded-full border border-amber-300/25 bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-100" aria-hidden="true">
        {category}
      </div>
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-200">{categoryCopy[category]}</p>
        <p className="mt-2 max-w-sm text-2xl font-black leading-tight text-stone-50">{label}</p>
      </div>
    </div>
  )
}
