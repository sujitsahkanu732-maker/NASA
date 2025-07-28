import { useState } from 'react'
import axios from 'axios'

function TechTransfer() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(
        `https://api.nasa.gov/techtransfer/patent/?engine&api_key=DEMO_KEY&query=${encodeURIComponent(query)}`
      )
      setResults(res.data.results)
    } catch (err) {
      console.error('Failed to fetch patents:', err)
      setResults([])
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-amber-400">🔬 NASA TechTransfer Search</h2>
     {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search NASA patents..."
          className="flex-1 px-4 py-2 rounded-md text-blue-200 bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold transition"
        >
          Search
        </button>
      </form>
      <div className="space-y-4">
        {results.map((r, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold">{r[1]}</h3>
            <p className="text-sm text-gray-300">{r[3]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechTransfer