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
    <nav
      className="bg-gradient-to-r from-black via-gray-900 to-black px-6 py-4 shadow-lg sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between">
        {/* Logo */}
        <div className="mb-3 sm:mb-0">
          <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide flex items-center gap-2">
            🚀 NASA Explorer
          </h1>
        </div>

        {/* Hamburger menu button for small screens */}
        <button
          className="sm:hidden text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Simple hamburger icon */}
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

        {/* Navigation Links */}
        <div
          id="navbar-menu"
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex flex-col sm:flex-row sm:items-center justify-center sm:justify-end gap-3 sm:gap-6 text-sm sm:text-base`}
        >
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) =>
                `relative px-2 py-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded ${
                  isActive
                    ? 'text-yellow-400 font-semibold'
                    : 'text-gray-300 hover:text-yellow-300'
                }`
              }
            >
              {label}
              {/* Animated underline */}
              <span
                aria-hidden="true"
                className="absolute left-0 bottom-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out"
                style={{
                  width: '100%',
                  transformOrigin: 'left',
                  transform: 'scaleX(0)',
                  ...(window.location.pathname === path
                    ? { transform: 'scaleX(1)' }
                    : {}),
                }}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
