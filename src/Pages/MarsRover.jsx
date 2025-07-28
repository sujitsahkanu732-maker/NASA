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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-6">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-fuchsia-400">
        🔭 Explore Mars Rover Photos
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-4 py-2 text-gray-800 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          required
        />
        <button
          type="submit"
          className="bg-fuchsia-600 px-5 py-2 rounded-md text-white font-semibold hover:bg-fuchsia-700 transition"
        >
          🔍 Search
        </button>
      </form>

      {loading && (
        <p className="text-center text-yellow-300 text-lg animate-pulse">
          Loading images from Mars...
        </p>
      )}
      {error && (
        <p className="text-center text-red-400 text-md">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={photo.img_src}
              alt={`Mars by ${photo.rover.name}`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {photo.rover.name}
              </h3>
              <p className="text-sm text-gray-400">
                {photo.camera.full_name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                📅 {photo.earth_date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!loading && photos.length === 0 && !error && (
        <p className="mt-8 text-center text-gray-400 text-lg">
          👈 Select a date to see Mars photos!
        </p>
      )}
    </div>
  )
}

export default MarsRover
