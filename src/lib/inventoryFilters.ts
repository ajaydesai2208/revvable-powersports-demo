import type { InventoryFilters, InventoryItem, InventorySort } from '../types/inventory'

export const defaultFilters: InventoryFilters = {
  category: 'All',
  condition: 'All',
  make: 'All',
  maxPrice: 30000,
  usage: 'All',
}

export const defaultSort: InventorySort = 'featured'

export function getMakes(items: InventoryItem[]) {
  return Array.from(new Set(items.map((item) => item.make))).sort()
}

export function filterInventory(items: InventoryItem[], filters: InventoryFilters) {
  return items.filter((item) => {
    if (filters.category !== 'All' && item.category !== filters.category) {
      return false
    }

    if (filters.condition !== 'All' && item.condition !== filters.condition) {
      return false
    }

    if (filters.make !== 'All' && item.make !== filters.make) {
      return false
    }

    if (item.price > filters.maxPrice) {
      return false
    }

    if (filters.usage === 'Low mileage' && (item.mileage ?? Number.POSITIVE_INFINITY) > 2500) {
      return false
    }

    if (filters.usage === 'Low hours' && (item.hours ?? Number.POSITIVE_INFINITY) > 50) {
      return false
    }

    return true
  })
}

export function sortInventory(items: InventoryItem[], sort: InventorySort) {
  return [...items].sort((a, b) => {
    if (sort === 'price-asc') {
      return a.price - b.price
    }

    if (sort === 'price-desc') {
      return b.price - a.price
    }

    if (sort === 'year-desc') {
      return b.year - a.year
    }

    return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.year - a.year
  })
}
