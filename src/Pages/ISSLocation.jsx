import { useEffect, useState } from 'react'
import axios from 'axios'

function ISSLocation() {
  const [position, setPosition] = useState(null)

  useEffect(() => {
    const fetchISS = async () => {
      try {
        const res = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        setPosition(res.data)
      } catch (err) {
        console.error('Error fetching ISS data:', err)
      }
    }

    fetchISS()
    const interval = setInterval(fetchISS, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-indigo-900 to-purple-900 text-white p-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-300">
        🛰️ Real-Time ISS Location Tracker
      </h2>

      {position ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-900 bg-opacity-40 p-8 rounded-lg shadow-xl w-full max-w-xl">
          <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-400">Latitude</p>
            <p className="text-2xl font-semibold text-teal-300">
              {position.latitude.toFixed(2)}°
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-400">Longitude</p>
            <p className="text-2xl font-semibold text-teal-300">
              {position.longitude.toFixed(2)}°
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-400">Altitude</p>
            <p className="text-2xl font-semibold text-yellow-300">
              {position.altitude.toFixed(2)} km
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-400">Velocity</p>
            <p className="text-2xl font-semibold text-yellow-300">
              {position.velocity.toFixed(2)} km/h
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-indigo-200 animate-pulse text-lg">
          <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" />
          Loading ISS Position...
        </div>
      )}
    </div>
  )
}

export default ISSLocation
