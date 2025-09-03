import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { path: '/', label: 'Home' },
    { path: '/apod', label: 'APOD' },
    { path: '/mars', label: 'Mars Rover' },
    { path: '/iss', label: 'ISS Info' },
    { path: '/iss-map', label: 'ISS Map' },
    { path: '/space-weather', label: 'Space Weather' },
    { path: '/tech-transfer', label: 'Tech Patents' },
    { path: '/media', label: 'NASA Media Library' },
  ]

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-yellow-400 font-extrabold text-xl flex items-center gap-2">
            🚀 NASA Explorer
          </div>

          {/* Hamburger for mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 p-2 rounded"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="navbar-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Vertical Links */}
          <div
            id="navbar-menu"
            className={`${
              isOpen ? 'flex' : 'hidden'
            } sm:flex flex-col sm:flex-col items-start absolute sm:static top-16 left-0 w-full sm:w-auto bg-black sm:bg-transparent px-4 sm:px-0 py-4 sm:py-0`}
          >
            {links.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors duration-300 w-full ${
                    isActive
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-300'
                  }`
                }
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-transform duration-300 origin-left ${
                    isOpen ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar