export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatUsage(mileage?: number, hours?: number) {
  if (typeof mileage === 'number') {
    return `${mileage.toLocaleString()} mi`
  }

  if (typeof hours === 'number') {
    return `${hours.toLocaleString()} hrs`
  }

  return 'Usage not listed'
}

export function estimateMonthlyPayment(price: number) {
  return Math.round((price * 1.079) / 72)
}
