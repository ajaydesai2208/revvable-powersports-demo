import type { InventoryItem } from '../../types/inventory'
import { InventoryCard } from './InventoryCard'

type InventoryGridProps = {
  items: InventoryItem[]
}

export function InventoryGrid({ items }: InventoryGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <InventoryCard item={item} key={item.id} />
      ))}
    </div>
  )
}
