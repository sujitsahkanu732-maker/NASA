import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between">
        {/* Logo */}
        <div className="mb-3 sm:mb-0">
          <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide flex items-center gap-2">
            🚀 NASA Explorer
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-sm sm:text-base">
          {[
            { path: '/', label: 'Home' },
            { path: '/apod', label: 'APOD' },
            { path: '/mars', label: 'Mars Rover' },
            { path: '/iss', label: 'ISS Info' },
            { path: '/iss-map', label: 'ISS Map' },
            { path: '/space-weather', label: 'Space Weather' },
            { path: '/tech-transfer', label: 'Tech Patents' },
            { path: '/media', label: 'NASA Media Library' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `transition duration-200 hover:text-yellow-300 hover:underline ${
                  isActive ? 'text-yellow-400 font-semibold' : 'text-gray-300'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
