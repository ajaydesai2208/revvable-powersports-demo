import { EmptyState } from '../components/ui/EmptyState'

export function NotFoundPage() {
  return (
      <section className="bg-black py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <EmptyState
          title="That page is not on the lot"
          message="The route may be outdated. Head back to inventory or the home page to keep shopping."
          actionLabel="Shop inventory"
          to="/inventory"
        />
      </div>
    </section>
  )
}
