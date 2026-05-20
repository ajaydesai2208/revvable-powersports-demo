import { formatUsage } from '../../lib/formatters'
import type { InventoryItem } from '../../types/inventory'

type VehicleSpecsProps = {
  item: InventoryItem
}

export function VehicleSpecs({ item }: VehicleSpecsProps) {
  const specs = [
    ['Category', item.category],
    ['Condition', item.condition],
    ['Engine', item.engine],
    ['Drivetrain', item.drivetrain],
    ['Usage', formatUsage(item.mileage, item.hours)],
    ['Color', item.color],
    ['Stock #', item.stockNumber],
    ['VIN', item.vin],
    ['Location', item.location],
  ]

  return (
    <dl className="grid gap-px overflow-hidden border border-stone-700 bg-stone-800 sm:grid-cols-2">
      {specs.map(([label, value]) => (
        <div className="bg-stone-950 p-4" key={label}>
          <dt className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">{label}</dt>
          <dd className="mt-1 font-semibold text-stone-100">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
