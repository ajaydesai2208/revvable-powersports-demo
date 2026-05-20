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
    'border border-amber-300/70 bg-gradient-to-b from-amber-400 via-amber-500 to-orange-700 text-stone-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_16px_38px_rgba(234,88,12,0.28)] hover:-translate-y-0.5 hover:border-amber-200 hover:from-amber-300 hover:to-orange-600 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_20px_46px_rgba(245,158,11,0.32)] focus-visible:outline-amber-200',
  secondary:
    'border border-stone-600/70 bg-stone-950/76 text-stone-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_28px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:border-amber-300/70 hover:bg-stone-900 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_16px_34px_rgba(245,158,11,0.14)] focus-visible:outline-amber-300',
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
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`

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
