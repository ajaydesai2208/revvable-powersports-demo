import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-semibold transition hover:text-orange-700 ${
    isActive ? 'text-orange-700' : 'text-stone-700'
  }`

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink className="group" to="/" aria-label="Summit Ridge Powersports home">
          <span className="block text-lg font-black uppercase tracking-tight text-stone-950">Summit Ridge</span>
          <span className="block text-xs font-bold uppercase tracking-[0.22em] text-orange-700">Powersports</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <NavLink className={navLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkClass} to="/inventory">
            Inventory
          </NavLink>
          <Link className="text-sm font-semibold text-stone-700 hover:text-orange-700" to="/#buyer-tools">
            Financing
          </Link>
          <Link className="text-sm font-semibold text-stone-700 hover:text-orange-700" to="/#buyer-tools">
            Trade-In
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden min-h-11 items-center gap-2 rounded-md bg-stone-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800 sm:inline-flex"
            href="tel:+15550148777"
          >
            <Phone size={17} aria-hidden="true" />
            Call dealer
          </a>
          <button
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-stone-300 bg-white text-stone-900 md:hidden"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <nav className="border-t border-stone-200 bg-white px-4 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            <NavLink className={navLinkClass} to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink className={navLinkClass} to="/inventory" onClick={() => setIsMenuOpen(false)}>
              Inventory
            </NavLink>
            <Link className="text-sm font-semibold text-stone-700 hover:text-orange-700" to="/#buyer-tools" onClick={() => setIsMenuOpen(false)}>
              Financing
            </Link>
            <Link className="text-sm font-semibold text-stone-700 hover:text-orange-700" to="/#buyer-tools" onClick={() => setIsMenuOpen(false)}>
              Trade-In
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
