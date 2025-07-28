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
    const interval = setInterval(fetchISS, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">🛰 ISS Current Location</h2>
      {position ? (
        <div className="text-lg">
          <p><strong>Latitude:</strong> {position.latitude.toFixed(2)}</p>
          <p><strong>Longitude:</strong> {position.longitude.toFixed(2)}</p>
          <p><strong>Altitude:</strong> {position.altitude.toFixed(2)} km</p>
          <p><strong>Velocity:</strong> {position.velocity.toFixed(2)} km/h</p>
        </div>
      ) : (
        <p>Loading position...</p>
      )}
    </div>
  )
}

export default ISSLocation