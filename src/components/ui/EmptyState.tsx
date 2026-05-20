import { Button } from './Button'

type EmptyStateProps = {
  title: string
  message: string
  actionLabel: string
  onAction?: () => void
  to?: string
}

export function EmptyState({ title, message, actionLabel, onAction, to }: EmptyStateProps) {
  return (
    <div className="premium-panel p-8 text-center">
      <h2 className="text-2xl font-semibold text-stone-50">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-stone-300">{message}</p>
      <div className="mt-6">
        <Button to={to} onClick={onAction} variant="secondary">
          {actionLabel}
        </Button>
      </div>
    </div>
  )
}
