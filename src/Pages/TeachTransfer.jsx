import { useState } from 'react'
import axios from 'axios'

function TechTransfer() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    const res = await axios.get(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=DEMO_KEY`)
    setResults(res.data.results)
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">🔬 NASA TechTransfer Search</h2>
      <form onSubmit={handleSearch} className="flex gap-4 justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search patents..."
          className="px-4 py-2 rounded text-black"
          required
        />
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
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