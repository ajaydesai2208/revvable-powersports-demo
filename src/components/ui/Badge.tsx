import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  tone?: 'dark' | 'green' | 'orange' | 'light'
}

const tones = {
  dark: 'border border-stone-600 bg-stone-950 text-stone-100',
  green: 'border border-lime-400/50 bg-lime-400/12 text-lime-200',
  orange: 'border border-amber-400/50 bg-amber-400/12 text-amber-200',
  light: 'border border-stone-500/70 bg-white/8 text-stone-200',
}

export function Badge({ children, tone = 'light' }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-sm px-2 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  )
}
