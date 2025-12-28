import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/apod', label: 'APOD' },
  { to: '/mars', label: 'Mars Rover' },
  { to: '/iss', label: 'ISS' },
  { to: '/iss-map', label: 'ISS Map' },
  { to: '/space-weather', label: 'Space Weather' },
  { to: '/tech-transfer', label: 'Tech Transfer' },
  { to: '/media', label: 'Media' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-black/80 backdrop-blur sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4 relative">
        <NavLink to="/" className="text-xl font-bold text-yellow-300">NASA Explorer</NavLink>

        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  (isActive ? 'text-yellow-300' : 'text-gray-200') + ' hover:text-yellow-300'
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className={`md:hidden ${open ? 'block' : 'hidden'} w-full left-0 top-full absolute bg-black/95`}> 
          <ul className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    (isActive ? 'text-yellow-300' : 'text-gray-200') + ' block py-2'
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar