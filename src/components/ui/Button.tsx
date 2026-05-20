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
  primary: 'bg-orange-600 text-white hover:bg-orange-500 focus-visible:outline-orange-700',
  secondary:
    'border border-stone-300 bg-white text-stone-950 hover:border-stone-500 hover:bg-stone-50 focus-visible:outline-stone-700',
  ghost: 'text-stone-950 hover:bg-stone-100 focus-visible:outline-stone-700',
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
