import { useState } from 'react'
import axios from 'axios'

function MarsRover() {
  const [photos, setPhotos] = useState([])
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await axios.get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY',
        {
          params: {
            earth_date: date,
            api_key: 'DEMO_KEY', // Replace with your actual key
          },
        }
      )
      setPhotos(res.data.photos.slice(0, 12))
      if (res.data.photos.length === 0) {
        setError('No photos found for this date.')
      }
    } catch (err) {
      setError('Error fetching photos.')
    }
    setLoading(false)
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">🔍 Search Mars Rover Photos</h2>

      <form
        onSubmit={handleSubmit}
        className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-3 py-2 text-black rounded shadow"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-yellow-400">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-gray-800 p-3 rounded-lg shadow-lg">
            <img
              src={photo.img_src}
              alt={`Mars by ${photo.rover.name}`}
              className="rounded"
            />
            <p className="mt-2 text-sm text-gray-400">
              {photo.rover.name} - {photo.camera.full_name}
            </p>
            <p className="text-xs text-gray-500">Taken on: {photo.earth_date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarsRover