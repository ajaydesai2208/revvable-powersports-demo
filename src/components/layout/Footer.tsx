import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-black uppercase tracking-tight text-white">Summit Ridge Powersports</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-stone-400">
            Premium motorcycles, ATVs, side-by-sides, and watercraft for riders who want clear inventory,
            straight answers, and a dealer that knows the terrain.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Visit</p>
          <p className="mt-3 text-sm leading-6 text-stone-400">
            1840 Trailhead Road
            <br />
            Summit Ridge, CO 80424
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Buyer paths</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-stone-400">
            <Link className="hover:text-white" to="/inventory">
              Shop inventory
            </Link>
            <a className="hover:text-white" href="tel:+15550148777">
              Call or text dealer
            </a>
            <a className="hover:text-white" href="mailto:sales@summitridge.example">
              sales@summitridge.example
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
