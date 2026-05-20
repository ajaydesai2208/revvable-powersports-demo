import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

type RevealOnScrollProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function RevealOnScroll({ children, className = '', delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)
  })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
