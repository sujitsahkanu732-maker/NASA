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
      const res = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
      setResults(res.data.collection.items)
    } catch (err) {
      console.error('NASA search error:', err)
    }
    setLoading(false)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🔍 NASA Image & Video Library</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search for space (e.g. moon, mars)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded-l w-full"
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded-r">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.slice(0, 12).map((item, index) => {
          const data = item.data[0]
          const imageUrl = item.links?.[0]?.href
          return (
            <div key={index} className="bg-white rounded shadow p-2">
              <img src={imageUrl} alt={data.title} className="rounded mb-2 h-48 w-full object-cover" />
              <h2 className="text-sm font-semibold">{data.title}</h2>
              <p className="text-xs text-gray-600">{data.date_created?.split('T')[0]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NasaMediaLibrary