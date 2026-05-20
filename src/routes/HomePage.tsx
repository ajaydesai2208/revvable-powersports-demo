import { featuredInventory } from '../data/inventory'
import { CategoryStrip } from '../components/home/CategoryStrip'
import { FeaturedInventory } from '../components/home/FeaturedInventory'
import { Hero } from '../components/home/Hero'
import { TrustBar } from '../components/home/TrustBar'
import { Button } from '../components/ui/Button'
import { SectionHeader } from '../components/ui/SectionHeader'

export function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <FeaturedInventory items={featuredInventory} />
      <section className="bg-white py-16" id="buyer-tools">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            eyebrow="Buyer tools"
            title="Get the numbers and the trade path before you load the trailer."
            description="The prototype keeps the highest-intent dealership actions close to inventory: financing, trade value, contact, and pickup timing."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Get pre-qualified', 'Estimate a payment path before you visit the showroom.'],
              ['Value your trade', 'Bring details on your current machine and keep the deal moving.'],
              ['Schedule pickup', 'Hold a ready unit and coordinate a pickup window.'],
              ['Text the dealer', 'Ask about availability, accessories, or service history.'],
            ].map(([title, detail]) => (
              <div className="border border-stone-200 bg-stone-50 p-5" key={title}>
                <h3 className="text-lg font-semibold text-stone-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TrustBar />
      <section className="bg-stone-100 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-700">Visit Summit Ridge</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">Ready this week in the showroom.</h2>
            <p className="mt-3 max-w-2xl text-stone-600">
              Stop in for inventory walkarounds, accessory planning, finance next steps, and trade-in review.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/inventory">Shop inventory</Button>
            <Button href="tel:+15550148777" variant="secondary">
              Call / text dealer
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
