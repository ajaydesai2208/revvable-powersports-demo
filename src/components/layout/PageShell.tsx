import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function PageShell() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
