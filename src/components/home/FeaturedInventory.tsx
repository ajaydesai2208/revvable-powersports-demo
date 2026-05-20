import type { InventoryItem } from '../../types/inventory'
import { InventoryGrid } from '../inventory/InventoryGrid'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

type FeaturedInventoryProps = {
  items: InventoryItem[]
}

export function FeaturedInventory({ items }: FeaturedInventoryProps) {
  return (
    <section className="bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Ready for pickup"
            title="Featured units worth a closer look"
            description="A short list of showroom-ready machines with pricing, condition, and availability up front."
          />
          <Button to="/inventory" variant="secondary">
            See all inventory
          </Button>
        </div>
        <div className="mt-8">
          <InventoryGrid items={items} />
        </div>
      </div>
    </section>
  )
}
