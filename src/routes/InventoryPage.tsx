import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { inventory } from '../data/inventory'
import { defaultFilters, defaultSort, filterInventory, getMakes, sortInventory } from '../lib/inventoryFilters'
import type { InventoryFilters as Filters, InventorySort, VehicleCategory, VehicleCondition } from '../types/inventory'
import { InventoryFilters } from '../components/inventory/InventoryFilters'
import { InventoryGrid } from '../components/inventory/InventoryGrid'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'

const categories: VehicleCategory[] = ['Motorcycle', 'ATV', 'Side-by-Side', 'Watercraft']
const conditions: VehicleCondition[] = ['New', 'Used']
const usageOptions: Filters['usage'][] = ['All', 'Low mileage', 'Low hours']
const sortOptions: InventorySort[] = ['featured', 'price-asc', 'price-desc', 'year-desc']

function filtersFromParams(searchParams: URLSearchParams): Filters {
  const category = searchParams.get('category')
  const condition = searchParams.get('condition')
  const make = searchParams.get('make')
  const maxPrice = Number(searchParams.get('maxPrice'))
  const usage = searchParams.get('usage')
  const makes = getMakes(inventory)

  return {
    category: categories.includes(category as VehicleCategory) ? (category as VehicleCategory) : defaultFilters.category,
    condition: conditions.includes(condition as VehicleCondition) ? (condition as VehicleCondition) : defaultFilters.condition,
    make: make && makes.includes(make) ? make : defaultFilters.make,
    maxPrice: Number.isFinite(maxPrice) && maxPrice >= 10000 ? maxPrice : defaultFilters.maxPrice,
    usage: usageOptions.includes(usage as Filters['usage']) ? (usage as Filters['usage']) : defaultFilters.usage,
  }
}

function sortFromParams(searchParams: URLSearchParams): InventorySort {
  const sort = searchParams.get('sort')
  return sortOptions.includes(sort as InventorySort) ? (sort as InventorySort) : defaultSort
}

function buildSearchParams(filters: Filters, sort: InventorySort) {
  const params = new URLSearchParams()

  if (filters.category !== defaultFilters.category) params.set('category', filters.category)
  if (filters.condition !== defaultFilters.condition) params.set('condition', filters.condition)
  if (filters.make !== defaultFilters.make) params.set('make', filters.make)
  if (filters.maxPrice !== defaultFilters.maxPrice) params.set('maxPrice', String(filters.maxPrice))
  if (filters.usage !== defaultFilters.usage) params.set('usage', filters.usage)
  if (sort !== defaultSort) params.set('sort', sort)

  return params
}

export function InventoryPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filters = useMemo(() => filtersFromParams(searchParams), [searchParams])
  const sort = useMemo(() => sortFromParams(searchParams), [searchParams])

  const filteredInventory = useMemo(() => sortInventory(filterInventory(inventory, filters), sort), [filters, sort])

  function updateFilters(nextFilters: Filters) {
    setSearchParams(buildSearchParams(nextFilters, sort))
  }

  function updateSort(nextSort: InventorySort) {
    setSearchParams(buildSearchParams(filters, nextSort))
  }

  function clearInventoryState() {
    setSearchParams(new URLSearchParams())
  }

  const activeFilters = [
    filters.category !== 'All' ? filters.category : null,
    filters.condition !== 'All' ? filters.condition : null,
    filters.make !== 'All' ? filters.make : null,
    filters.maxPrice < defaultFilters.maxPrice ? `Under $${filters.maxPrice.toLocaleString()}` : null,
    filters.usage !== 'All' ? filters.usage : null,
  ].filter(Boolean)

  return (
    <section className="bg-black py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <InventoryFilters
            filters={filters}
            inventory={inventory}
            resultCount={filteredInventory.length}
            sort={sort}
            onClear={clearInventoryState}
            onFilterChange={updateFilters}
            onSortChange={updateSort}
          />
          <div>
            <div className="mb-6 flex flex-col justify-between gap-4 border-b border-stone-800 pb-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">Inventory</p>
                <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-50 md:text-5xl">Shop ready units</h1>
                <p className="mt-3 max-w-2xl text-stone-300">
                  Filter motorcycles, ATVs, side-by-sides, and watercraft with buyer details that matter.
                </p>
              </div>
              <Button href="tel:+15550148777" variant="secondary">
                Text dealer
              </Button>
            </div>

            {activeFilters.length ? (
              <div className="mb-5 flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <span className="rounded-sm border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-100" key={filter}>
                    {filter}
                  </span>
                ))}
              </div>
            ) : null}

            {filteredInventory.length ? (
              <>
                <InventoryGrid items={filteredInventory} />
                <div className="premium-panel mt-6 p-5">
                  <h2 className="text-xl font-semibold text-stone-50">Have a trade or finance question?</h2>
                  <p className="mt-2 text-stone-300">
                    Send the stock number you like and the dealer can attach trade details, payment estimates, and pickup timing.
                  </p>
                </div>
              </>
            ) : (
              <EmptyState
                title="No units match those filters"
                message="Clear the filters to see everything ready at Summit Ridge, or call the dealer for inbound inventory."
                actionLabel="Clear filters"
                onAction={clearInventoryState}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
