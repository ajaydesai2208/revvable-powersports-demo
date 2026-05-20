import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function PageShell() {
  return (
    <div className="min-h-screen bg-black text-stone-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
