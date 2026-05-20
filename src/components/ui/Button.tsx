import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'ghost'
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

const variants = {
  primary:
    'border border-amber-400/70 bg-gradient-to-b from-amber-500 to-orange-700 text-stone-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_34px_rgba(234,88,12,0.24)] hover:-translate-y-0.5 hover:from-amber-400 hover:to-orange-600 focus-visible:outline-amber-300',
  secondary:
    'border border-stone-600/80 bg-stone-950/80 text-stone-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:border-amber-400/70 hover:bg-stone-900 focus-visible:outline-amber-300',
  ghost: 'text-stone-100 hover:bg-white/10 focus-visible:outline-amber-300',
}

export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link aria-label={ariaLabel} className={classes} to={to}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a aria-label={ariaLabel} className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button aria-label={ariaLabel} className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
