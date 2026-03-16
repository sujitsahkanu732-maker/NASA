import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import nasaImage from '../assets/nasa.jpg'

const mainLinks = [
  { to: '/explore', label: 'Explore' },
  { to: '/news', label: 'News & Events' },
  { to: '/multimedia', label: 'Multimedia' },
  { to: '/whatx', label: 'WHATX' },
]

const allLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/news', label: 'News & Events' },
  { to: '/multimedia', label: 'Multimedia' },
  { to: '/whatx', label: 'WHATX' },
  { to: '/apod', label: 'APOD' },
  { to: '/mars', label: 'Mars Rover' },
  { to: '/iss', label: 'ISS' },
  { to: '/iss-map', label: 'ISS Map' },
  { to: '/space-weather', label: 'Space Weather' },
  { to: '/tech-transfer', label: 'Tech Transfer' },
  { to: '/media', label: 'Media' },
  { to: '/contact', label: 'Contact' },
]

const searchSuggestions = [
  'Mars Rover',
  'James Webb Space Telescope',
  'ISS Location',
  'Black Holes',
  'Galaxy Images',
  'Space Weather',
  'Astronauts',
  'Moon Landing',
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState([])

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase()
    setSearchQuery(e.target.value)
    
    if (value.trim()) {
      const filtered = searchSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value)
      )
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions([])
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Search for:', searchQuery)
      setSearchQuery('')
      setFilteredSuggestions([])
      setSearchOpen(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
    setFilteredSuggestions([])
    // Implement search functionality
    console.log('Search for:', suggestion)
  }

  return (
    <header className="bg-black sticky top-0 z-40 border-b border-gray-700">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group flex-shrink-0">
          <img src={nasaImage} alt="NASA" className="w-10 h-10 rounded-full group-hover:scale-110 transition" />
          <span className="text-white font-bold hidden sm:inline">NASA</span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-sm flex-1 justify-center">
          {mainLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  (isActive ? 'text-yellow-400' : 'text-gray-300') + ' hover:text-yellow-400 transition font-medium'
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center relative flex-1 max-w-xs">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search NASA..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setSearchOpen(true)}
                className="w-full px-4 py-2 pl-10 pr-4 bg-gray-800 text-white text-sm rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              {/* Search Suggestions Dropdown */}
              {searchOpen && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
                  {filteredSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-yellow-400 transition flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9.242-9.242m-9.242 0l-9.242 9.242m9.242 0V5m0 0l9.242 9.242m-9.242-9.242l-9.242 9.242" />
                      </svg>
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </form>
          
          {/* Close dropdown when clicking outside */}
          {searchOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setSearchOpen(false)}
            />
          )}
        </div>

        {/* Mobile Search & Menu Button */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Mobile Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="sm:hidden text-gray-300 hover:text-yellow-400 transition"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-yellow-400 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <div className="fixed inset-x-0 top-0 z-50 lg:hidden">
              <div className="bg-gray-900 border-b border-gray-700 px-4 py-4 flex items-center justify-between">
                <span className="text-base font-semibold text-white">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="bg-gray-900 px-4 py-6 flex flex-col gap-2">
                {allLinks.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        (isActive ? 'text-yellow-300' : 'text-gray-300') + ' hover:text-yellow-300 block py-3 text-lg'
                      }
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="fixed inset-x-0 top-0 z-50 lg:hidden">
            <div className="bg-black/60 h-16" />
            <div className="bg-gray-900 border-b border-gray-700 px-4 py-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-white">Search</span>
                <button
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSearch} className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search NASA..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  autoFocus
                  className="w-full px-4 py-3 pl-10 pr-4 bg-gray-800 text-white text-sm rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition"
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                {/* Mobile Search Suggestions */}
                {filteredSuggestions.length > 0 && (
                  <div className="mt-2 rounded-lg bg-gray-800 border border-gray-700 shadow-xl">
                    {filteredSuggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-yellow-400 transition"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar