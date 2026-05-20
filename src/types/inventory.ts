export type VehicleCategory = 'Motorcycle' | 'ATV' | 'Side-by-Side' | 'Watercraft'

export type VehicleCondition = 'New' | 'Used'

export type Availability = 'Ready for pickup' | 'In showroom' | 'Arriving soon'

export type InventoryItem = {
  id: string
  year: number
  make: string
  model: string
  category: VehicleCategory
  condition: VehicleCondition
  price: number
  mileage?: number
  hours?: number
  engine: string
  drivetrain: string
  color: string
  stockNumber: string
  vin: string
  availability: Availability
  location: string
  image: string
  imageAlt: string
  features: string[]
  description: string
  featured?: boolean
}

export type InventoryFilters = {
  category: 'All' | VehicleCategory
  condition: 'All' | VehicleCondition
  make: 'All' | string
  maxPrice: number
  usage: 'All' | 'Low mileage' | 'Low hours'
}

export type InventorySort = 'featured' | 'price-asc' | 'price-desc' | 'year-desc'
