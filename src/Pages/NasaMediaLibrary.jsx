// src/pages/NasaMediaLibrary.jsx
import { useState } from 'react'
import axios from 'axios'

function NasaMediaLibrary() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return

    setLoading(true)
    try {
      const res = await axios.get(
        `https://images-api.nasa.gov/search?q=${query}&media_type=image`
      )
      setResults(res.data.collection.items)
    } catch (err) {
      console.error('NASA search error:', err)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-300 mb-6 text-center">
        🚀 NASA Image & Video Library
      </h1>

      {/* Search Bar */}
      <div className="flex max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search for space (e.g. moon, mars)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-r-md font-semibold transition"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-yellow-300 text-lg mb-4 animate-pulse">
          Loading NASA assets...
        </div>
      )}

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {results.slice(0, 12).map((item, index) => {
          const data = item.data[0]
          const imageUrl = item.links?.[0]?.href

          return (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={imageUrl}
                alt={data.title}
                className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-yellow-300 font-semibold text-md mb-1 line-clamp-2">{data.title}</h2>
                <p className="text-sm text-gray-400">
                  📅 {data.date_created?.split('T')[0]}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* No Results Message */}
      {!loading && results.length === 0 && query.trim() !== '' && (
        <p className="text-center text-gray-400 mt-10">
          No results found. Try a different search term.
        </p>
      )}
    </div>
  )
}

export default NasaMediaLibrary
