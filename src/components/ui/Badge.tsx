import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  tone?: 'dark' | 'green' | 'orange' | 'light'
}

const tones = {
  dark: 'bg-stone-950 text-white',
  green: 'bg-emerald-100 text-emerald-900',
  orange: 'bg-orange-100 text-orange-900',
  light: 'bg-stone-100 text-stone-700',
}

export function Badge({ children, tone = 'light' }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-sm px-2 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  )
}
