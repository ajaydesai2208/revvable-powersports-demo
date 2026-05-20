import type { InventoryItem } from '../../types/inventory'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { InventoryCard } from './InventoryCard'

type InventoryGridProps = {
  items: InventoryItem[]
}

export function InventoryGrid({ items }: InventoryGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <RevealOnScroll delay={Math.min(index, 5) * 80} key={item.id}>
          <InventoryCard item={item} />
        </RevealOnScroll>
      ))}
    </div>
  )
}
