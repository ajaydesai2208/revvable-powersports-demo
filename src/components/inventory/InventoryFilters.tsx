import { SlidersHorizontal, X } from 'lucide-react'
import { getMakes } from '../../lib/inventoryFilters'
import type { InventoryFilters as Filters, InventoryItem, InventorySort, VehicleCategory, VehicleCondition } from '../../types/inventory'
import { Button } from '../ui/Button'

type InventoryFiltersProps = {
  filters: Filters
  inventory: InventoryItem[]
  resultCount: number
  sort: InventorySort
  onFilterChange: (filters: Filters) => void
  onSortChange: (sort: InventorySort) => void
  onClear: () => void
}

const categories: Array<'All' | VehicleCategory> = ['All', 'Motorcycle', 'ATV', 'Side-by-Side', 'Watercraft']
const conditions: Array<'All' | VehicleCondition> = ['All', 'New', 'Used']

export function InventoryFilters({
  filters,
  inventory,
  resultCount,
  sort,
  onFilterChange,
  onSortChange,
  onClear,
}: InventoryFiltersProps) {
  const makes = ['All', ...getMakes(inventory)]

  return (
    <aside className="premium-panel p-4 lg:sticky lg:top-24">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
            <SlidersHorizontal size={16} aria-hidden="true" />
            Filters
          </p>
          <p className="mt-1 text-sm text-stone-300">{resultCount} units available</p>
        </div>
        <button className="inline-flex items-center gap-1 text-sm font-semibold text-amber-300 hover:text-amber-200" type="button" onClick={onClear}>
          <X size={15} aria-hidden="true" />
          Clear
        </button>
      </div>

      <div className="mt-5 space-y-5">
        <label className="block">
          <span className="filter-label">Category</span>
          <select
            className="filter-control"
            value={filters.category}
            onChange={(event) => onFilterChange({ ...filters, category: event.target.value as Filters['category'] })}
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="filter-label">Condition</span>
          <select
            className="filter-control"
            value={filters.condition}
            onChange={(event) => onFilterChange({ ...filters, condition: event.target.value as Filters['condition'] })}
          >
            {conditions.map((condition) => (
              <option key={condition}>{condition}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="filter-label">Make</span>
          <select
            className="filter-control"
            value={filters.make}
            onChange={(event) => onFilterChange({ ...filters, make: event.target.value })}
          >
            {makes.map((make) => (
              <option key={make}>{make}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="filter-label">Max price: ${filters.maxPrice.toLocaleString()}</span>
          <input
            className="mt-3 w-full accent-orange-700"
            type="range"
            min="10000"
            max="30000"
            step="2500"
            value={filters.maxPrice}
            onChange={(event) => onFilterChange({ ...filters, maxPrice: Number(event.target.value) })}
          />
        </label>

        <label className="block">
          <span className="filter-label">Usage</span>
          <select
            className="filter-control"
            value={filters.usage}
            onChange={(event) => onFilterChange({ ...filters, usage: event.target.value as Filters['usage'] })}
          >
            <option>All</option>
            <option>Low mileage</option>
            <option>Low hours</option>
          </select>
        </label>

        <label className="block">
          <span className="filter-label">Sort</span>
          <select className="filter-control" value={sort} onChange={(event) => onSortChange(event.target.value as InventorySort)}>
            <option value="featured">Featured first</option>
            <option value="price-asc">Price low to high</option>
            <option value="price-desc">Price high to low</option>
            <option value="year-desc">Newest first</option>
          </select>
        </label>

        <Button className="w-full lg:hidden" onClick={onClear} variant="secondary">
          Reset filters
        </Button>
      </div>
    </aside>
  )
}
